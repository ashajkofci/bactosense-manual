// The manuals published on bNovate Manuals, read from manuals.json. The first
// entry is the principal manual: it is listed first and owns the legacy
// root-level URLs. Each manual is a docs plugin instance served at /<id>/.
const path = require('node:path');
const { readFileSync, readdirSync } = require('node:fs');

const root = path.resolve(__dirname, '..');
const sourceLocale = 'en';

const manuals = require('../manuals.json').map(manual => ({
  docsPluginId: manual.id,
  path: `manuals/${manual.id}`,
  locales: [sourceLocale],
  device: false,
  ...manual,
}));

const ids = manuals.map(manual => manual.id);
if (!manuals.length) throw new Error('manuals.json must list at least one manual.');
for (const manual of manuals) {
  if (!/^[a-z][a-z0-9-]*$/.test(manual.id)) throw new Error(`Invalid manual id "${manual.id}": use lowercase letters, digits and hyphens.`);
  if (!manual.title || (manual.pdfMode !== 'chapter' && !manual.documentId)) throw new Error(`Manual ${manual.id} needs a title and documentId.`);
  if (manual.pdfMode && !['manual', 'chapter'].includes(manual.pdfMode)) throw new Error(`Unknown PDF mode for ${manual.id}.`);
  if (!manual.locales.includes(sourceLocale)) throw new Error(`Manual ${manual.id} must include the ${sourceLocale} source edition.`);
}
if (new Set(ids).size !== ids.length) throw new Error('Manual ids in manuals.json must be unique.');
if (new Set(manuals.map(manual => manual.docsPluginId)).size !== manuals.length) throw new Error('Manual docsPluginId values must be unique.');
if (manuals.filter(manual => manual.device).length > 1) throw new Error('Only one manual can be exported to the instrument GUI.');

// Translated Markdown lives where Docusaurus expects it for this docs plugin instance.
function contentDirectory(manual, locale) {
  if (locale === sourceLocale) return manual.path;
  const plugin = manual.docsPluginId === 'default' ? 'docusaurus-plugin-content-docs' : `docusaurus-plugin-content-docs-${manual.docsPluginId}`;
  return path.posix.join('i18n', locale, plugin, 'current');
}

const filenamePart = value => String(value).normalize('NFC').replace(/[<>:"/\\|?*\u0000-\u001f]/g, '-').replace(/\s+/g, ' ').trim().replace(/[. ]+$/, '');
const pdfFile = (manual, locale) => {
  if (!manual.documentId || !manual.title) throw new Error('PDF filenames require a documentId and title.');
  const documentId = String(manual.documentId).replace(/_?(?:EN|DE|FR|IT|ES)$/i, '');
  return `${filenamePart(documentId)}${locale.toUpperCase()} ${filenamePart(manual.title)}.pdf`;
};
const localized = (value, locale) => (typeof value === 'string' ? value : value?.[locale] ?? value?.[sourceLocale] ?? '');

// A collection uses the same docs plugin and sidebar as a full manual, but each
// chapter is a separate publication. Its Markdown frontmatter is the registry:
// adding/removing a file updates navigation, search and PDF downloads together.
function pdfManuals(manual, locale = sourceLocale) {
  if (manual.pdfMode !== 'chapter') return [manual];
  // Translation planning runs before dependencies are installed in CI.
  const { parseFileContentFrontMatter } = require('@docusaurus/utils/lib/markdownUtils');
  const directory = path.join(root, contentDirectory(manual, locale));
  const publications = readdirSync(directory).filter(file => /\.mdx?$/.test(file)).sort().map(file => {
    const { frontMatter: meta } = parseFileContentFrontMatter(readFileSync(path.join(directory, file), 'utf8'));
    if (!/^[a-z][a-z0-9-]*$/.test(meta.id || '') || meta.slug !== `/${meta.id}` || !meta.title || !meta.document_id || !meta.manual_version) {
      throw new Error(`${manual.id}/${file}: chapter PDFs need id, slug (/<id>), title, document_id and manual_version frontmatter.`);
    }
    return {
      ...manual,
      id: `${manual.id}-${meta.id}`,
      chapterId: meta.id,
      title: meta.title,
      documentId: meta.document_id,
      version: String(meta.manual_version),
      softwareVersion: meta.software_version,
    };
  });
  if (new Set(publications.map(item => item.id)).size !== publications.length) throw new Error(`Duplicate chapter ids in ${manual.id}.`);
  return publications;
}

function pdfDownloads(manual) {
  if (manual.pdfMode !== 'chapter') return { pdfFiles: Object.fromEntries(manual.locales.map(locale => [locale, pdfFile(manual, locale)])) };
  const pdfChapters = {};
  for (const locale of manual.locales) for (const chapter of pdfManuals(manual, locale)) {
    (pdfChapters[chapter.chapterId] ||= {})[locale] = pdfFile(chapter, locale);
  }
  return { pdfFiles: {}, pdfChapters };
}

const principal = manuals[0];

module.exports = { root, sourceLocale, manuals, principal, contentDirectory, pdfFile, pdfManuals, pdfDownloads, localized };
