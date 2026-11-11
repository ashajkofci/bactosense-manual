import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { root, manuals, pdfManuals, pdfFile, pdfDownloads } from '../plugins/manuals.cjs';
import download from '../src/utils/manual-pdf.cjs';
import manualChapters from '../plugins/manual-chapters.cjs';
import manualLinks from '../plugins/manual-links.cjs';

const collection = manuals.find(manual => manual.id === 'other-manuals');

test('the collection publishes each source manual once, with its own PDF metadata', () => {
  const publications = pdfManuals(collection);
  const files = readdirSync(path.join(root, collection.path)).filter(file => /\.mdx?$/.test(file));
  assert.equal(publications.length, files.length);
  assert.equal(new Set(publications.map(manual => pdfFile(manual, 'en'))).size, files.length);
  assert.ok(publications.every(manual => manual.documentId && manual.version));
});

test('adding and removing a Markdown file updates the publication inventory without a registry edit', () => {
  const directory = mkdtempSync(path.join(root, 'output/other-manual-test-'));
  const manual = { ...collection, path: path.relative(root, directory) };
  try {
    assert.deepEqual(pdfManuals(manual), []);
    const file = path.join(directory, 'example.md');
    const content = '---\nid: example\nslug: /example\ntitle: Example kit\ndocument_id: UM-TEST\nmanual_version: "02"\nsoftware_version: "2.2"\n---\n\n## Instructions\n';
    writeFileSync(file, content);
    assert.equal(pdfManuals(manual)[0].id, 'other-manuals-example');
    assert.equal(pdfManuals(manual)[0].softwareVersion, '2.2');
    writeFileSync(file, content.replace('slug: /example', 'slug: /wrong'));
    assert.throws(() => pdfManuals(manual), /frontmatter/);
    writeFileSync(file, content);
    writeFileSync(path.join(directory, 'duplicate.md'), content);
    assert.throws(() => pdfManuals(manual), /Duplicate chapter ids/);
    rmSync(path.join(directory, 'duplicate.md'));
    rmSync(file);
    assert.deepEqual(pdfManuals(manual), []);
  } finally {
    assert.ok(directory.startsWith(path.join(root, 'output', 'other-manual-test-')));
    rmSync(directory, { recursive: true, force: true });
  }
});

test('the full manual PDF keeps the complete sidebar order, including nested categories', () => {
  const content = {
    'docusaurus-plugin-content-docs': {
      'other-manuals': { loadedVersions: [{
        versionName: 'current',
        sidebars: { manual: [{ type: 'category', items: [{ type: 'doc', id: 'a' }, { type: 'doc', id: 'b' }] }] },
        docs: [{ id: 'b', title: 'B', permalink: '/other-manuals/b/' }, { id: 'a', title: 'A', permalink: '/other-manuals/a/' }],
      }] },
    },
  };
  assert.deepEqual(manualChapters(content, 'other-manuals').map(chapter => chapter.id), ['a', 'b']);
  content['docusaurus-plugin-content-docs']['other-manuals'].loadedVersions[0].sidebars.manual[0].items.pop();
  assert.throws(() => manualChapters(content, 'other-manuals'), /exactly once/);
});

const sample = { pdfChapters: { kit: { en: 'other-manuals-kit-manual-en.pdf' } }, pdfFiles: {} };
test('the download follows the active chapter and has no collection-wide or unknown-chapter PDF', () => {
  assert.equal(download(sample, 'en', '/', 'en', 'kit').href, '/pdf/other-manuals-kit-manual-en.pdf');
  assert.equal(download(sample, 'en', '/'), undefined);
  assert.equal(download(sample, 'en', '/', 'en', 'unknown'), undefined);
});

test('English-only chapter downloads work in every site language, including a nested deployment', () => {
  for (const locale of ['de', 'fr', 'it', 'es']) {
    assert.equal(download(sample, locale, `/${locale}/`, 'en', 'kit').href, '/pdf/other-manuals-kit-manual-en.pdf');
    assert.equal(download(sample, locale, `/docs/${locale}/`, 'en', 'kit').href, '/docs/pdf/other-manuals-kit-manual-en.pdf');
  }
});

test('translated full manuals keep their own locale download', () => {
  const manual = { pdfFiles: { en: 'bactosense-manual-en.pdf', fr: 'bactosense-manual-fr.pdf' } };
  assert.deepEqual(download(manual, 'fr', '/docs/fr/'), { filename: 'bactosense-manual-fr.pdf', href: '/docs/fr/pdf/bactosense-manual-fr.pdf' });
  assert.equal(download(undefined, 'en', '/'), undefined);
});

test('PDF filenames use the document ID, language and localized document name safely', () => {
  assert.equal(pdfFile({ documentId: 'UM-0006', title: 'BactoSense' }, 'en'), 'UM-0006EN BactoSense.pdf');
  assert.equal(pdfFile({ documentId: '40101-11EN', title: 'BactoSense Kurzanleitung' }, 'de'), '40101-11DE BactoSense Kurzanleitung.pdf');
  assert.equal(pdfFile({ documentId: '40501-01_EN', title: 'BactoLink' }, 'fr'), '40501-01FR BactoLink.pdf');
  assert.equal(pdfFile({ documentId: 'UM_0003-01EN', title: 'Kit: validation / contrôle' }, 'fr'), 'UM_0003-01FR Kit- validation - contrôle.pdf');
});

test('every localized chapter downloads its own translated title and language edition', () => {
  const metadata = pdfDownloads(collection);
  for (const locale of collection.locales) for (const publication of pdfManuals(collection, locale)) {
    const source = pdfManuals(collection).find(item => item.chapterId === publication.chapterId);
    assert.equal(publication.documentId, source.documentId);
    assert.equal(publication.version, source.version);
    assert.equal(publication.softwareVersion, source.softwareVersion);
    assert.equal(metadata.pdfChapters[publication.chapterId][locale], pdfFile(publication, locale));
    const baseUrl = locale === 'en' ? '/' : `/${locale}/`;
    const item = download(metadata, locale, baseUrl, 'en', publication.chapterId);
    assert.equal(decodeURIComponent(item.href), `${baseUrl}pdf/${pdfFile(publication, locale)}`);
  }
});

test('instrument-only exports link to the translated website for publications outside their bundle', () => {
  const tree = { children: [
    { type: 'link', url: '/other-manuals/cleaning-kit#biological-contamination' },
    { type: 'link', url: '/installation#section-5-4' },
  ] };
  manualLinks({ manualId: 'bactosense', manualIds: ['bactosense', 'other-manuals'], externalManualIds: ['other-manuals'], websiteUrl: 'https://manual.bnovate.net/docs/' })(tree, { path: 'D:/repo/i18n/de/docusaurus-plugin-content-docs/current/15-maintenance.md' });
  assert.equal(tree.children[0].url, 'https://manual.bnovate.net/docs/de/other-manuals/cleaning-kit#biological-contamination');
  assert.equal(tree.children[1].url, '/bactosense/installation#section-5-4');
});

test('BactoSense cross-references point to the same short-manual chapters in every edition', () => {
  const principal = manuals.find(manual => manual.id === 'bactosense');
  const links = text => [...text.matchAll(/\]\((\/other-manuals\/[^)]+)\)/g)].map(match => match[1]).sort();
  for (const filename of readdirSync(path.join(root, principal.path)).filter(file => /\.mdx?$/.test(file))) {
    const sourceLinks = links(readFileSync(path.join(root, principal.path, filename), 'utf8'));
    if (!sourceLinks.length) continue;
    for (const locale of principal.locales.filter(locale => locale !== 'en')) {
      const translated = readFileSync(path.join(root, 'i18n', locale, 'docusaurus-plugin-content-docs/current', filename), 'utf8');
      assert.deepEqual(links(translated), sourceLinks, `${locale}/${filename}`);
    }
  }
});

test('short manuals use Markdown and the shared notice/image plugins without HTML layouts', () => {
  for (const manual of pdfManuals(collection)) {
    const text = readdirSync(path.join(root, collection.path)).filter(file => /\.mdx?$/.test(file))
      .map(file => readFileSync(path.join(root, collection.path, file), 'utf8'))
      .find(content => content.includes(`id: ${manual.chapterId}\n`));
    assert.ok(text);
    assert.doesNotMatch(text, /<(?:div|table|tr|td|iframe|object|embed)\b/i);
    assert.doesNotMatch(text, /(?:manual|pdf)-page-\d+/);
  }
});
