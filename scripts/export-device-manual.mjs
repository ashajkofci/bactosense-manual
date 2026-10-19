import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { imageSize } from 'image-size';
import sharp from 'sharp';

const MAX_ASSET_WIDTH = 800;
const imageExtension = /\.(?:png|jpe?g|svg|webp|gif)$/i;
const digestOf = bytes => createHash('sha256').update(bytes).digest('hex');

const normalizePath = value => value.replace(/\/+$/, '') || '/';
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const tags = new Set('a b blockquote br code dd div dl dt em h1 h2 h3 h4 h5 h6 hr i img li ol p pre s span strong sub sup table tbody td tfoot th thead tr u ul'.split(' '));
const attributes = new Set('colspan rowspan align valign start type'.split(' '));
const plainText = node => {
  if (node.type === 'text') return node.data;
  return (node.children || []).map(plainText).join(' ');
};

// Consume Docusaurus' rendered HTML, so its MDX, admonitions, custom image
// component, merged table cells and heading IDs have already been resolved.
// Emit only Qt 5.12 rich text and data: no website scripts run on the device.
export async function exportDeviceManual({ root, outDir, baseUrl, siteUrl, chapters, manualVersion,
  locale = 'en', languageLabel = locale, bundleDir = path.join(outDir, 'device-manual') }) {
  if (!chapters?.length) throw new Error('Missing device manual chapter inventory.');
  if (!/^[a-z]{2}(?:-[a-z0-9]+)*$/i.test(locale)) throw new Error(`Invalid device locale: ${locale}`);
  const destination = path.join(bundleDir, locale);
  const staging = `${destination}.tmp`;
  await rm(staging, { recursive: true, force: true });
  await mkdir(path.join(staging, 'chapters'), { recursive: true });
  await mkdir(path.join(staging, 'assets'), { recursive: true });
  const origin = new URL(siteUrl).origin;
  const byRoute = new Map(chapters.map(chapter => [normalizePath(new URL(chapter.permalink, origin).pathname), chapter.id]));
  const assets = new Map();
  const assetTasks = new Map();
  const sourceByDigest = new Map();
  const links = [];
  const pages = [];
  const symbols = new Map();

  // Webpack hashes image URLs and inlines small images. Recover their original
  // tracked paths by matching bytes, so changing or resizing an image updates
  // the same file in the device bundle instead of adding a new hash filename.
  async function collectSources(directory, relative = '') {
    for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
      const name = path.posix.join(relative, entry.name);
      const source = path.join(directory, entry.name);
      if (entry.isDirectory()) await collectSources(source, name);
      else if (entry.isFile() && imageExtension.test(name)) {
        const digest = digestOf(await readFile(source));
        const candidates = sourceByDigest.get(digest) || [];
        candidates.push({ file: `assets/${name}`, source: `static/${name}` });
        sourceByDigest.set(digest, candidates);
      }
    }
  }
  await collectSources(path.join(root, 'static'));
  for (const candidates of sourceByDigest.values()) {
    // Duplicate artwork can exist in each website locale. Prefer this language,
    // retaining an explicitly named source when one is available below.
    candidates.sort((a, b) => Number(!a.file.includes(`/${locale}/`)) - Number(!b.file.includes(`/${locale}/`)) || a.file.localeCompare(b.file));
  }
  const registry = JSON.parse(await readFile(path.join(root, 'maintenance/safety-symbols.json'), 'utf8'));
  for (const [symbol, entry] of Object.entries(registry.symbols)) {
    const bytes = await readFile(path.join(root, 'static', entry.asset));
    const $ = load(bytes.toString(), { xmlMode: true });
    symbols.set($('svg').attr('viewBox'), { symbol, bytes, source: entry.asset.slice(1) });
  }

  async function asset(bytes, extension, preferredSource = '') {
    if (!imageExtension.test(extension)) throw new Error(`Unsupported device image format: ${extension}`);
    const sourceSha256 = digestOf(bytes);
    const candidates = sourceByDigest.get(sourceSha256) || [];
    const originalName = path.posix.basename(preferredSource).replace(/-[a-f0-9]{32}(?=\.[^.]+$)/i, '');
    const tracked = candidates.find(item => item.file === `assets/${preferredSource}`)
      || candidates.find(item => path.posix.basename(item.file) === originalName) || candidates[0];
    const file = tracked?.file || (preferredSource
      ? `assets/generated/${originalName}` : `assets/inline/${sourceSha256.slice(0, 24)}${extension.toLowerCase()}`);
    if (!/^assets\/(?:[a-z0-9_-][a-z0-9_.-]*\/)*[a-z0-9_-][a-z0-9_.-]*\.(?:png|jpe?g|svg|webp|gif)$/i.test(file))
      throw new Error(`Invalid device image path: ${file}`);
    const existing = assetTasks.get(file);
    if (existing) {
      if (existing.sourceSha256 !== sourceSha256) throw new Error(`Device image name collision: ${file}`);
      return existing.promise;
    }
    const promise = (async () => {
      const original = imageSize(bytes);
      if (!(original.width > 0 && original.height > 0)) throw new Error(`Missing device image dimensions: ${file}`);
      const resized = original.width > MAX_ASSET_WIDTH;
      let exported = bytes;
      if (resized && extension.toLowerCase() === '.svg') {
        const $ = load(bytes.toString(), { xmlMode: true });
        const svg = $('svg').first();
        if (!svg.attr('viewBox')) svg.attr('viewBox', `0 0 ${original.width} ${original.height}`);
        svg.attr('width', String(MAX_ASSET_WIDTH));
        svg.attr('height', String(MAX_ASSET_WIDTH * original.height / original.width));
        exported = Buffer.from($.xml());
      } else if (resized) {
        // Keep the source format, transparency and (for GIF/WebP) animation.
        // Sharp automatically preserves the aspect ratio with width alone.
        exported = await sharp(bytes, { animated: true })
          .resize({ width: MAX_ASSET_WIDTH, withoutEnlargement: true }).toBuffer();
      }
      const dimensions = imageSize(exported);
      if (dimensions.width > MAX_ASSET_WIDTH) throw new Error(`Oversized device image after resize: ${file}`);
      const image = { file, source: tracked?.source || (preferredSource ? `rendered/${preferredSource}` : 'inline'),
        sourceSha256, sha256: digestOf(exported), bytes: exported.length,
        originalWidth: original.width, originalHeight: original.height,
        width: dimensions.width, height: dimensions.height, resized };
      await mkdir(path.dirname(path.join(staging, file)), { recursive: true });
      await writeFile(path.join(staging, file), exported);
      assets.set(file, image);
      return image;
    })();
    assetTasks.set(file, { sourceSha256, promise });
    return promise;
  }
  async function localImage(src, chapter) {
    const inline = /^data:image\/(png|jpeg|gif|webp|svg\+xml);base64,([a-z0-9+/=\s]+)$/i.exec(src);
    if (inline) return asset(Buffer.from(inline[2], 'base64'), inline[1] === 'svg+xml' ? '.svg' : `.${inline[1]}`);
    const url = new URL(src, new URL(chapter.permalink, origin));
    if (url.origin !== origin || !url.pathname.startsWith(baseUrl)) throw new Error(`Non-local device image in ${chapter.id}: ${src.slice(0, 80)}`);
    const relative = decodeURIComponent(url.pathname.slice(baseUrl.length));
    const source = path.resolve(outDir, relative);
    if (!source.startsWith(`${path.resolve(outDir)}${path.sep}`)) throw new Error(`Invalid device asset: ${src}`);
    return asset(await readFile(source), path.extname(source), relative);
  }
  function link(href, chapter) {
    const url = new URL(href, new URL(chapter.permalink, origin));
    const target = url.origin === origin && byRoute.get(normalizePath(url.pathname));
    if (target) {
      const anchor = decodeURIComponent(url.hash.slice(1));
      links.push({ source: chapter.id, target, anchor });
      return `manual:${target}${anchor ? `#${encodeURIComponent(anchor)}` : ''}`;
    }
    if (!['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol)) throw new Error(`Unsupported device link: ${href}`);
    return url.href;
  }

  for (const chapter of chapters) {
    if (!/^[a-z0-9-]+$/.test(chapter.id)) throw new Error(`Invalid device chapter ID: ${chapter.id}`);
    const relative = new URL(chapter.permalink, origin).pathname.slice(baseUrl.length).replace(/\/+$/, '');
    const htmlFile = path.join(outDir, relative, 'index.html');
    const $ = load(await readFile(htmlFile, 'utf8'));
    const body = $('.theme-doc-markdown');
    if (body.length !== 1) throw new Error(`Missing rendered content: ${chapter.id}`);
    body.find('a.hash-link, script, style, button').remove();
    const blocks = [];
    const toc = [];
    const anchors = {};

    async function render(node) {
      if (node.type === 'text') return escape(node.data);
      if (node.type !== 'tag') return '';
      const element = $(node);
      const name = node.name.toLowerCase();
      if (name === 'svg') {
        const entry = symbols.get(element.attr('viewBox'));
        if (!entry) throw new Error(`Unrecognized inline SVG in ${chapter.id}`);
        const image = await asset(entry.bytes, '.svg', entry.source);
        return `<img src="${image.file}" width="28" height="28" alt="${escape(entry.symbol)}">`;
      }
      if (name === 'img') {
        const image = await localImage(element.attr('src'), chapter);
        const width = Math.min(Number(element.attr('width')) || image.width, image.width);
        const height = width * image.height / image.width;
        const tag = `<img src="${image.file}" data-manual-width="${width}" data-manual-height="${height}" alt="${escape(element.attr('alt') || '')}">`;
        return node.parent?.name === 'a' ? tag : `<a href="manual-image:${image.file}">${tag}</a>`;
      }
      if (element.hasClass('theme-admonition')) {
        const type = (element.attr('class').match(/theme-admonition-(\w+)/) || [])[1] || 'info';
        const colors = {
          danger: { background: '#ffebec', foreground: '#4b1113', accent: '#fa383e' },
          warning: { background: '#fff8e6', foreground: '#4d3800', accent: '#e6a700' },
          caution: { background: '#fff8e6', foreground: '#4d3800', accent: '#e6a700' },
          info: { background: '#eef9fd', foreground: '#193c47', accent: '#54c7ec' },
          tip: { background: '#e6f6e6', foreground: '#003100', accent: '#00a400' },
          note: { background: '#fdfdfe', foreground: '#474748', accent: '#ebedf0' },
        };
        const title = element.children().first();
        const svg = title.find('svg').first();
        const palette = colors[type] || colors.info;
        const iconHtml = svg.length ? await render(svg[0]) : '';
        const titleText = plainText(title[0]).replace(/\s+/g, ' ').trim().toUpperCase();
        // Match the published PDF: original symbol, uppercase bold custom
        // title and alert foreground. Keep the header aligned independently
        // of the icon's baseline; do not add a second signal-word prefix.
        const titleHtml = `<table width="100%" cellpadding="0" cellspacing="0"><tr>${iconHtml ? `<td width="36" valign="middle">${iconHtml}</td>` : ''}<td valign="middle"><span style="font-size:small; font-weight:700; color:${palette.foreground}">${escape(titleText)}</span></td></tr></table>`;
        const contentHtml = (await Promise.all(element.children().slice(1).contents().toArray().map(render))).join('');
        return `<table width="100%" cellpadding="10" cellspacing="0" bgcolor="${palette.background}"><tr><td style="color:${palette.foreground}; border-left:4px solid ${palette.accent}">${titleHtml}${contentHtml}</td></tr></table>`;
      }
      const children = (await Promise.all((node.children || []).map(render))).join('');
      if (name === 'a') {
        const image = element.find('img').first();
        const href = image.length && element.hasClass('manual-screenshot')
          ? `manual-image:${(await localImage(image.attr('src'), chapter)).file}`
          : element.attr('href') ? link(element.attr('href'), chapter) : '';
        return href ? `<a href="${escape(href)}">${children}</a>` : children;
      }
      if (!tags.has(name)) return children;
      const safeAttributes = Object.entries(node.attribs || {}).filter(([key]) => attributes.has(key))
        .map(([key, value]) => ` ${key}="${escape(value)}"`).join('');
      if (name === 'br' || name === 'hr') return `<${name}>`;
      const tableStyle = name === 'table' ? ' width="100%" border="1" cellspacing="0" cellpadding="6" style="border-color:#cbd5df; border-collapse:collapse"' : '';
      const cellStyle = name === 'td' || name === 'th' ? ' style="vertical-align:top"' : '';
      return `<${name}${safeAttributes}${tableStyle}${cellStyle}>${children}</${name}>`;
    }

    for (const element of body.children().toArray()) {
      const node = $(element);
      const heading = element.name === 'header' ? node.find('h1').first() : node;
      const isHeading = /^h[1-6]$/.test(heading[0]?.name || '');
      const blockIndex = blocks.length;
      node.find('[id]').addBack('[id]').each((_, item) => {
        const anchor = $(item).attr('id');
        if (Object.hasOwn(anchors, anchor)) throw new Error(`Duplicate device anchor: ${chapter.id}#${anchor}`);
        anchors[anchor] = blockIndex;
      });
      const text = plainText(element).replace(/\s+/g, ' ').trim();
      if (isHeading) {
        const block = { kind: 'heading', text, level: Number(heading[0].name.slice(1)) };
        blocks.push(block);
        toc.push({ title: text, level: block.level, anchor: heading.attr('id') || '', block: blockIndex });
      } else if (node.find('img').length === 1 && !text && !node.find('table, svg').length) {
        const imageNode = node.find('img').first();
        const image = await localImage(imageNode.attr('src'), chapter);
        blocks.push({ kind: 'image', text: imageNode.attr('alt') || '', source: image.file,
          width: Math.min(Number(imageNode.attr('width')) || image.width, image.width), height: image.height, intrinsicWidth: image.width });
      } else {
        let tableColumns = 0;
        node.find('tr').addBack('tr').each((_, row) => {
          tableColumns = Math.max(tableColumns, $(row).children('td,th').toArray().reduce((total, cell) => total + (Number($(cell).attr('colspan')) || 1), 0));
        });
        const html = await render(element);
        if (html.trim()) blocks.push({ kind: 'richtext', text, html, tableColumns });
      }
    }
    if (!blocks.length) throw new Error(`Empty device chapter: ${chapter.id}`);
    pages.push({ ...chapter, file: `chapters/${chapter.id}.json`, anchors, toc, blocks });
  }

  const byId = new Map(pages.map(chapter => [chapter.id, chapter]));
  for (const { source, target, anchor } of links) {
    if (anchor && !Object.hasOwn(byId.get(target).anchors, anchor)) {
      throw new Error(`Broken device cross-reference: ${source} → ${target}#${anchor}`);
    }
  }
  const search = [];
  const files = [];
  for (const chapter of pages) {
    let heading = chapter.title;
    for (const [block, item] of chapter.blocks.entries()) {
      if (item.kind === 'heading') heading = item.text;
      if (item.text) search.push({ chapter: chapter.id, title: chapter.title, heading, block, text: item.text });
    }
    const data = JSON.stringify({ schemaVersion: 1, id: chapter.id, blocks: chapter.blocks });
    await writeFile(path.join(staging, chapter.file), `${data}\n`);
    files.push({ file: chapter.file, sha256: createHash('sha256').update(`${data}\n`).digest('hex') });
  }
  const index = {
    schemaVersion: 1, locale, languageLabel, title: chapters[0].title, documentId: 'UM-0006',
    softwareVersion: '3.2.0', manualVersion,
    chapters: pages.map(({ blocks, ...chapter }) => ({ ...chapter, blockCount: blocks.length })),
  };
  await writeFile(path.join(staging, 'index.json'), `${JSON.stringify(index)}\n`);
  await writeFile(path.join(staging, 'search.json'), `${JSON.stringify(search)}\n`);
  const assetList = [...assets.values()].sort((a, b) => a.file.localeCompare(b.file));
  const report = { schemaVersion: 1, locale, chapterCount: pages.length, blockCount: search.length,
    internalLinkCount: links.length, assetCount: assets.size,
    maxAssetWidth: MAX_ASSET_WIDTH, resizedAssetCount: assetList.filter(image => image.resized).length,
    assetBytes: assetList.reduce((total, image) => total + image.bytes, 0), files, assets: assetList };
  await writeFile(path.join(staging, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  await mkdir(path.dirname(destination), { recursive: true });
  await rm(destination, { recursive: true, force: true });
  await rename(staging, destination);
  await writeDeviceManualResources(bundleDir);
  console.log(`Device manual [${locale}]: ${pages.length} chapters, ${assets.size} local images, ${(report.assetBytes / 1024 / 1024).toFixed(1)} MiB of artwork.`);
  return { destination, report };
}

// Embed only a small language inventory. Every manual, including English,
// is installed beside the executable and read on demand.
export async function writeDeviceManualResources(bundleDir, preferredLocales = []) {
  const directories = (await readdir(bundleDir, { withFileTypes: true }))
    .filter(entry => entry.isDirectory() && /^[a-z]{2}(?:-[a-z0-9]+)*$/i.test(entry.name))
    .map(entry => entry.name).sort();
  const locales = [...preferredLocales.filter(locale => directories.includes(locale)),
    ...directories.filter(locale => !preferredLocales.includes(locale))];
  if (!locales.length) throw new Error('No completed manual languages to package.');
  const embeddedLocales = [];
  const resourceFiles = ['locales.json'];
  for (const locale of locales) {
    const report = JSON.parse(await readFile(path.join(bundleDir, locale, 'report.json'), 'utf8'));
    if (report.schemaVersion !== 1 || report.locale !== locale || !report.chapterCount)
      throw new Error(`Incomplete device language: ${locale}`);
  }
  const metadata = { schemaVersion: 1, defaultLocale: locales.includes('en') ? 'en' : locales[0],
    availableLocales: locales, embeddedLocales };
  await writeFile(path.join(bundleDir, 'locales.json'), `${JSON.stringify(metadata)}\n`);
  const qrc = `<RCC>\n  <qresource prefix="/manual">\n${resourceFiles.sort().map(file => `    <file alias="${escape(file)}">${escape(file)}</file>`).join('\n')}\n  </qresource>\n</RCC>\n`;
  await writeFile(path.join(bundleDir, 'manual.qrc'), qrc);
  return metadata;
}
