// The manuals published on bNovate Manuals, read from manuals.json. The first
// entry is the principal manual: it is listed first and owns the legacy
// root-level URLs. Each manual is a docs plugin instance served at /<id>/.
const path = require('node:path');

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
  if (!manual.title || !manual.documentId) throw new Error(`Manual ${manual.id} needs a title and documentId.`);
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

const pdfFile = (manual, locale) => `${manual.id}-manual-${locale}.pdf`;
const localized = (value, locale) => (typeof value === 'string' ? value : value?.[locale] ?? value?.[sourceLocale] ?? '');

const principal = manuals[0];

module.exports = { root, sourceLocale, manuals, principal, contentDirectory, pdfFile, localized };
