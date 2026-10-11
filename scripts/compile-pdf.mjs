import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COPY = {
  en: { title: 'BactoSense', documentId: 'Document ID', contents: 'Contents', compiled: 'Compiled on', software: 'Software' },
  de: { title: 'BactoSense', documentId: 'Dokument-ID', contents: 'Inhalt', compiled: 'Erstellt am', software: 'Software' },
  fr: { title: 'BactoSense', documentId: 'Identifiant du document', contents: 'Sommaire', compiled: 'Généré le', software: 'Logiciel' },
  it: { title: 'BactoSense', documentId: 'ID documento', contents: 'Indice', compiled: 'Generato il', software: 'Software' },
  es: { title: 'BactoSense', documentId: 'ID del documento', contents: 'Índice', compiled: 'Generado el', software: 'Software' },
};
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

async function readChapter(outDir, baseUrl, chapter) {
  const pathname = new URL(chapter.permalink, 'http://localhost').pathname;
  if (!pathname.startsWith(baseUrl)) throw new Error(`PDF chapter is outside the locale: ${chapter.id}.`);
  const relative = decodeURIComponent(pathname.slice(baseUrl.length));
  const candidates = relative ? [path.join(relative, 'index.html'), `${relative.replace(/\/$/, '')}.html`] : ['index.html'];
  for (const candidate of candidates) {
    try {
      return { ...chapter, html: await readFile(path.join(outDir, candidate), 'utf8') };
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
    }
  }
  throw new Error(`Build the website before compiling PDF chapter ${chapter.id}.`);
}

async function startServer(outDir, baseUrl, shell) {
  const server = createServer(async (request, response) => {
    try {
      if (!['GET', 'HEAD'].includes(request.method)) {
        response.writeHead(405).end();
        return;
      }
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      if (!pathname.startsWith(baseUrl)) { response.writeHead(404).end(); return; }
      if (pathname === `${baseUrl}__manual_pdf__.html`) {
        response.writeHead(200, { 'Content-Type': MIME['.html'] }).end(request.method === 'HEAD' ? undefined : shell);
        return;
      }
      const filename = path.resolve(outDir, pathname.slice(baseUrl.length));
      const relative = path.relative(outDir, filename);
      if (relative.startsWith('..') || path.isAbsolute(relative)) { response.writeHead(404).end(); return; }
      const bytes = await readFile(filename);
      response.writeHead(200, { 'Content-Type': MIME[path.extname(filename)] || 'application/octet-stream' }).end(request.method === 'HEAD' ? undefined : bytes);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return { server, origin: `http://127.0.0.1:${server.address().port}` };
}

export async function compileManualPdf(root, manifest) {
  const copy = COPY[manifest.locale];
  if (!copy || !manifest.chapters?.length) throw new Error('Missing PDF language or chapter manifest. Build the website first.');
  const outDir = path.resolve(root, manifest.outDir);
  const evidenceDir = path.join(root, 'output/pdf', manifest.locale);
  const publicDir = path.join(outDir, 'pdf');
  const pdfFile = `bactosense-manual-${manifest.locale}.pdf`;
  const temporaryPdf = path.join(publicDir, `${pdfFile}.tmp`);
  const generatedAt = new Date();
  const date = new Intl.DateTimeFormat(manifest.htmlLang, { dateStyle: 'long' }).format(generatedAt);
  const css = await readFile(path.join(ROOT, 'scripts/pdf.css'), 'utf8');
  const guiFigures = JSON.parse(await readFile(path.join(root, 'maintenance/gui-screenshots.json'), 'utf8'));
  const guiScreenshotAlts = guiFigures.figures.filter(figure => figure.locale === manifest.locale && figure.kind === 'screenshot').map(figure => figure.alt);
  const chapters = await Promise.all(manifest.chapters.map((chapter) => readChapter(outDir, manifest.baseUrl, chapter)));
  const shell = `<!doctype html><html lang="${escapeHtml(manifest.htmlLang)}" data-theme="light"><head><meta charset="utf-8"><title>${escapeHtml(copy.title)}</title></head><body><main id="manual-pdf"></main></body></html>`;
  const { server, origin } = await startServer(outDir, manifest.baseUrl, shell);
  const resourceErrors = [];
  let browser;
  try {
    try {
      browser = await chromium.launch({ headless: true });
    } catch (error) {
      throw new Error('PDF compilation needs Playwright Chromium. Run npm run browser:install, then build again.', { cause: error });
    }
    const page = await browser.newPage();
    page.setDefaultTimeout(30000);
    await page.route('**/*', (route) => {
      if (new URL(route.request().url()).origin === origin) return route.continue();
      resourceErrors.push(`Non-local resource: ${route.request().url()}`);
      return route.abort();
    });
    page.on('response', (response) => {
      if (response.status() >= 400) resourceErrors.push(`${response.status()}: ${response.url()}`);
    });
    page.on('requestfailed', (request) => resourceErrors.push(`Failed resource: ${request.url()}`));
    await page.emulateMedia({ media: 'print', colorScheme: 'light' });
    await page.goto(`${origin}${manifest.baseUrl}__manual_pdf__.html`, { waitUntil: 'load' });
    const assembled = await page.evaluate(({ chapters: pages, manifest: meta, copy: labels, date: compiledDate }) => {
      const parser = new DOMParser();
      const main = document.getElementById('manual-pdf');
      const normalizePath = (pathname) => pathname.replace(/\/+$/, '') || '/';
      const chapterIds = new Map(pages.map((chapter, index) => [normalizePath(new URL(chapter.permalink, location.origin).pathname), `chapter-${index + 1}`]));
      const first = parser.parseFromString(pages[0].html, 'text/html');
      for (const stylesheet of first.querySelectorAll('link[rel="stylesheet"]')) {
        document.head.appendChild(document.importNode(stylesheet, true));
      }
      const cover = document.createElement('section');
      cover.className = 'pdf-cover';
      const logo = document.createElement('img');
      logo.src = `${meta.baseUrl}img/manual/asset-53eb3be5b297.png`;
      logo.alt = 'BactoSense';
      cover.appendChild(logo);
      const title = document.createElement('h1');
      title.textContent = labels.title;
      cover.appendChild(title);
      const language = document.createElement('p');
      language.className = 'pdf-language';
      language.textContent = meta.languageLabel;
      cover.appendChild(language);
      const version = document.createElement('p');
      version.textContent = `${labels.software} ${meta.softwareVersion}`;
      cover.appendChild(version);
      const documentId = document.createElement('p');
      documentId.textContent = `${labels.documentId}: ${meta.documentId}`;
      cover.appendChild(documentId);
      const dateLine = document.createElement('p');
      dateLine.className = 'pdf-date';
      dateLine.textContent = `${labels.compiled} ${compiledDate}`;
      cover.appendChild(dateLine);
      const online = document.createElement('a');
      online.href = new URL(meta.baseUrl, meta.siteUrl).href;
      online.textContent = online.href;
      cover.appendChild(online);
      main.appendChild(cover);
      const contents = document.createElement('nav');
      contents.className = 'pdf-contents';
      contents.setAttribute('aria-label', labels.contents);
      const contentsTitle = document.createElement('h1');
      contentsTitle.textContent = labels.contents;
      contents.appendChild(contentsTitle);
      const list = document.createElement('ol');
      contents.appendChild(list);
      main.appendChild(contents);
      const titles = [];
      for (const [index, chapter] of pages.entries()) {
        const parsed = parser.parseFromString(chapter.html, 'text/html');
        const content = parsed.querySelector('.theme-doc-markdown');
        if (!content?.querySelector('h1')) throw new Error(`Missing rendered chapter: ${chapter.id}.`);
        const section = document.createElement('section');
        const id = `chapter-${index + 1}`;
        section.className = 'pdf-chapter';
        section.appendChild(document.importNode(content, true));
        section.querySelectorAll('script, button, .hash-link').forEach((node) => node.remove());
        for (const paragraph of section.querySelectorAll('p')) {
          if (paragraph.children.length === 1 && paragraph.firstElementChild.matches('.manual-image')) {
            const figure = document.createElement('figure');
            figure.className = 'pdf-figure';
            figure.appendChild(paragraph.firstElementChild);
            paragraph.replaceWith(figure);
          }
        }
        // Numbered procedure columns should leave room for instructions and illustrations.
        for (const table of section.querySelectorAll('table')) {
          const rows = [...table.rows].filter((row) => row.cells[0]?.tagName === 'TD');
          if (rows.length && rows.every((row) => row.cells[0].colSpan === 1 && /^\d{1,3}[.]?$/.test(row.cells[0].textContent.trim()))) {
            table.rows[0].cells[0].style.width = '8%';
          }
        }
        for (const node of section.querySelectorAll('[id]')) node.id = `${id}--${node.id}`;
        const heading = section.querySelector('h1');
        heading.id = id;
        titles.push(heading.textContent.trim());
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = chapter.title;
        item.appendChild(link);
        list.appendChild(item);
        for (const anchor of section.querySelectorAll('a[href]')) {
          const url = new URL(anchor.getAttribute('href'), new URL(chapter.permalink, location.origin));
          if (!['http:', 'https:'].includes(url.protocol)) continue;
          const internal = (url.origin === location.origin || url.origin === new URL(meta.siteUrl).origin)
            ? chapterIds.get(normalizePath(url.pathname)) : undefined;
          anchor.setAttribute('href', internal
            ? `#${internal}${url.hash ? `--${decodeURIComponent(url.hash.slice(1))}` : ''}`
            : (url.origin === location.origin ? new URL(`${url.pathname}${url.search}${url.hash}`, meta.siteUrl).href : url.href));
          anchor.removeAttribute('target');
        }
        for (const image of section.querySelectorAll('img')) {
          image.loading = 'eager';
          image.src = new URL(image.getAttribute('src'), new URL(chapter.permalink, location.origin)).href;
        }
        main.appendChild(section);
      }
      for (const anchor of main.querySelectorAll('a[href^="#"]')) {
        if (!document.getElementById(anchor.getAttribute('href').slice(1))) throw new Error(`Unresolved PDF link: ${anchor.getAttribute('href')}.`);
      }
      return { titles, imageCount: main.querySelectorAll('.pdf-chapter img').length, tableCount: main.querySelectorAll('.pdf-chapter table').length, noticeCount: main.querySelectorAll('.pdf-chapter .theme-admonition').length };
    }, { chapters, manifest, copy, date });
    await page.waitForFunction(() => [...document.querySelectorAll('link[rel="stylesheet"]')].every((link) => link.sheet));
    await page.addStyleTag({ content: css });
    const { expandedScreenshotRows, pairedScreenshotCaptions } = await page.evaluate(async (guiScreenshotAlts) => {
      // Force font requests after injecting print styles; fonts.ready can otherwise
      // resolve before Chromium schedules the first layout using those styles.
      await Promise.all([
        document.fonts.load('400 10pt "Inter Variable"'),
        document.fonts.load('600 25pt "Outfit Variable"'),
      ]);
      await document.fonts.ready;
      for (const family of ['Inter Variable', 'Outfit Variable']) {
        if (![...document.fonts].some((font) => font.family.includes(family) && font.status === 'loaded')) throw new Error(`PDF font did not load: ${family}.`);
      }
      await Promise.all([...document.images].map((image) => image.decode()));
      // Keep a GUI screenshot and its following localized figure caption together.
      // Markdown emits separate paragraphs, which can otherwise split at a page break.
      let paired = 0;
      for (const image of document.querySelectorAll('.pdf-chapter img')) {
        if (!guiScreenshotAlts.includes(image.alt)) continue;
        const paragraph = image.closest('p');
        const caption = paragraph?.nextElementSibling;
        if (!paragraph || paragraph.closest('td') || paragraph.querySelectorAll('img').length !== 1 ||
            caption?.tagName !== 'P' || !/^(?:Figure|Abbildung|Figura)\s+\d/.test(caption.textContent.trim())) continue;
        const figure = document.createElement('div');
        figure.className = 'pdf-figure';
        paragraph.before(figure);
        figure.append(paragraph, caption);
        paired++;
      }
      // A full GUI screen becomes unreadable in a narrow procedure column.
      // Keep it beside the same instruction, in a full-width following print row.
      const wideImages = [...document.querySelectorAll('.pdf-chapter td img')].filter(image =>
        guiScreenshotAlts.includes(image.alt) && image.naturalWidth >= 1600);
      let expanded = 0;
      for (const image of wideImages) {
        const cell = image.closest('td'), row = cell.closest('tr'), table = row.closest('table');
        const columns = Math.max(...[...table.rows].map(row => [...row.cells].reduce((sum, cell) => sum + cell.colSpan, 0)));
        const illustrationRow = document.createElement('tr');
        illustrationRow.className = 'pdf-screenshot-row';
        const illustrationCell = document.createElement('td');
        illustrationCell.colSpan = columns;
        illustrationCell.appendChild(image.closest('a.manual-screenshot') || image);
        illustrationRow.appendChild(illustrationCell);
        row.after(illustrationRow);
        expanded++;
      }
      return { expandedScreenshotRows: expanded, pairedScreenshotCaptions: paired };
    }, guiScreenshotAlts);
    if (resourceErrors.length) throw new Error(`PDF resources did not load:\n${[...new Set(resourceErrors)].join('\n')}`);
    await mkdir(publicDir, { recursive: true });
    await mkdir(evidenceDir, { recursive: true });
    const footer = `<div style="font-family:Arial,sans-serif;font-size:10px;color:#526474;width:100%;padding:0 18mm;display:flex;justify-content:space-between"><span>BactoSense · ${escapeHtml(manifest.documentId)} · ${escapeHtml(manifest.languageLabel)}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
    const pdf = await page.pdf({
      path: temporaryPdf,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: footer,
      margin: { top: '16mm', right: '18mm', bottom: '18mm', left: '18mm' },
    });
    if (pdf.subarray(0, 5).toString() !== '%PDF-') throw new Error('PDF compilation produced an invalid file.');
    await rename(temporaryPdf, path.join(publicDir, pdfFile));
    await writeFile(path.join(evidenceDir, pdfFile), pdf);
    // Keep the latest compiled download available to the local development server.
    const devDir = path.join(root, 'static/pdf');
    await mkdir(devDir, { recursive: true });
    await writeFile(path.join(devDir, `${pdfFile}.tmp`), pdf);
    await rename(path.join(devDir, `${pdfFile}.tmp`), path.join(devDir, pdfFile));
    const report = {
      locale: manifest.locale,
      documentId: manifest.documentId,
      manualVersion: manifest.manualVersion,
      generatedAt: generatedAt.toISOString(),
      chapters: assembled.titles,
      imageCount: assembled.imageCount,
      expandedScreenshotRows,
      pairedScreenshotCaptions,
      tableCount: assembled.tableCount,
      noticeCount: assembled.noticeCount,
      sha256: createHash('sha256').update(pdf).digest('hex'),
      bytes: pdf.length,
      downloadPath: `${manifest.baseUrl}pdf/${pdfFile}`,
    };
    await writeFile(path.join(evidenceDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
    console.log(`PDF ${manifest.locale}: ${assembled.titles.length} chapters, ${assembled.imageCount} images, ${(pdf.length / 1024 / 1024).toFixed(1)} MB -> ${report.downloadPath}`);
    return report;
  } finally {
    await browser?.close();
    server.closeAllConnections();
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
    await rm(temporaryPdf, { force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const requestedLocale = process.argv[2];
    if (process.argv.length > 3 || (requestedLocale && !COPY[requestedLocale])) throw new Error('Usage: npm run manual:pdf -- [en|de|fr|it|es]');
    const locales = requestedLocale ? [requestedLocale] : Object.keys(COPY);
    for (const locale of locales) {
      const manifestPath = path.join(ROOT, 'output/pdf', locale, 'manifest.json');
      let manifest;
      try { manifest = JSON.parse(await readFile(manifestPath, 'utf8')); }
      catch { throw new Error(`Build the ${locale} website first with npm run build. Its PDF manifest is missing.`); }
      await compileManualPdf(ROOT, manifest);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
