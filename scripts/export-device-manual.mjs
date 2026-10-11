import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { imageSize } from 'image-size';

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
export async function exportDeviceManual({ root, outDir, baseUrl, siteUrl, chapters, manualVersion }) {
  if (!chapters?.length) throw new Error('Missing device manual chapter inventory.');
  const destination = path.join(outDir, 'device-manual/en');
  const staging = `${destination}.tmp`;
  await rm(staging, { recursive: true, force: true });
  await mkdir(path.join(staging, 'chapters'), { recursive: true });
  await mkdir(path.join(staging, 'assets'), { recursive: true });
  const origin = new URL(siteUrl).origin;
  const byRoute = new Map(chapters.map(chapter => [normalizePath(new URL(chapter.permalink, origin).pathname), chapter.id]));
  const assets = new Map();
  const links = [];
  const pages = [];
  const symbols = new Map();
  const registry = JSON.parse(await readFile(path.join(root, 'maintenance/safety-symbols.json'), 'utf8'));
  for (const [symbol, entry] of Object.entries(registry.symbols)) {
    const bytes = await readFile(path.join(root, 'static', entry.asset));
    const $ = load(bytes.toString(), { xmlMode: true });
    symbols.set($('svg').attr('viewBox'), { symbol, bytes });
  }

  async function asset(bytes, extension) {
    const digest = createHash('sha256').update(bytes).digest('hex');
    const file = `assets/${digest.slice(0, 24)}${extension.toLowerCase()}`;
    if (!assets.has(file)) {
      const dimensions = imageSize(bytes);
      await writeFile(path.join(staging, file), bytes);
      assets.set(file, { file, sha256: digest, bytes: bytes.length, width: dimensions.width, height: dimensions.height });
    }
    return assets.get(file);
  }
  async function localImage(src, chapter) {
    const inline = /^data:image\/(png|jpeg|gif|webp|svg\+xml);base64,([a-z0-9+/=\s]+)$/i.exec(src);
    if (inline) return asset(Buffer.from(inline[2], 'base64'), inline[1] === 'svg+xml' ? '.svg' : `.${inline[1]}`);
    const url = new URL(src, new URL(chapter.permalink, origin));
    if (url.origin !== origin || !url.pathname.startsWith(baseUrl)) throw new Error(`Non-local device image in ${chapter.id}: ${src.slice(0, 80)}`);
    const relative = decodeURIComponent(url.pathname.slice(baseUrl.length));
    const source = path.resolve(outDir, relative);
    if (!source.startsWith(`${path.resolve(outDir)}${path.sep}`)) throw new Error(`Invalid device asset: ${src}`);
    return asset(await readFile(source), path.extname(source));
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
        const image = await asset(entry.bytes, '.svg');
        return `<img src="${image.file}" width="28" height="28" alt="${escape(entry.symbol)}">`;
      }
      if (name === 'img') {
        const image = await localImage(element.attr('src'), chapter);
        const width = Number(element.attr('width')) || image.width;
        const height = width * image.height / image.width;
        const tag = `<img src="${image.file}" data-manual-width="${width}" data-manual-height="${height}" alt="${escape(element.attr('alt') || '')}">`;
        return node.parent?.name === 'a' ? tag : `<a href="manual-image:${image.file}">${tag}</a>`;
      }
      if (element.hasClass('theme-admonition')) {
        const type = (element.attr('class').match(/theme-admonition-(\w+)/) || [])[1] || 'info';
        const colors = { danger: '#fde8e8', warning: '#fff3d6', caution: '#fff3d6', info: '#e8f3ff', tip: '#e8f7ed', note: '#eef2f6' };
        const title = element.children().first();
        const svg = title.find('svg').first();
        const symbol = symbols.get(svg.attr('viewBox'))?.symbol;
        const signal = symbol === 'explosion' ? 'DANGER' : symbol === 'gloves' ? 'PROTECTIVE GLOVES' : type.toUpperCase();
        const titleHtml = (await Promise.all(title.contents().toArray().map(render))).join('');
        const contentHtml = (await Promise.all(element.children().slice(1).contents().toArray().map(render))).join('');
        return `<table width="100%" cellpadding="10" cellspacing="0" bgcolor="${colors[type] || colors.info}"><tr><td><p><strong>${signal}: ${titleHtml}</strong></p>${contentHtml}</td></tr></table>`;
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
          width: Number(imageNode.attr('width')) || image.width, height: image.height, intrinsicWidth: image.width });
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
    schemaVersion: 1, locale: 'en', title: 'BactoSense user manual', documentId: 'UM-0006',
    softwareVersion: '3.2.0', manualVersion,
    chapters: pages.map(({ blocks, ...chapter }) => ({ ...chapter, blockCount: blocks.length })),
  };
  await writeFile(path.join(staging, 'index.json'), `${JSON.stringify(index)}\n`);
  await writeFile(path.join(staging, 'search.json'), `${JSON.stringify(search)}\n`);
  const report = { schemaVersion: 1, locale: 'en', chapterCount: pages.length, blockCount: search.length,
    internalLinkCount: links.length, assetCount: assets.size,
    assetBytes: [...assets.values()].reduce((total, image) => total + image.bytes, 0), files, assets: [...assets.values()] };
  await writeFile(path.join(staging, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  const resourceFiles = ['index.json', 'search.json', 'report.json', ...files.map(item => item.file), ...assets.keys()].sort();
  const qrc = `<RCC>\n  <qresource prefix="/manual">\n${resourceFiles.map(file => `    <file alias="en/${escape(file)}">en/${escape(file)}</file>`).join('\n')}\n  </qresource>\n</RCC>\n`;
  await mkdir(path.dirname(destination), { recursive: true });
  await rm(destination, { recursive: true, force: true });
  await rename(staging, destination);
  await writeFile(path.join(path.dirname(destination), 'manual.qrc'), qrc);
  console.log(`Device manual: ${pages.length} English chapters, ${assets.size} local images, ${(report.assetBytes / 1024 / 1024).toFixed(1)} MiB of artwork.`);
  return { destination, report };
}
