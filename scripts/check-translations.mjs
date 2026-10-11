import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const locales = ['de', 'fr', 'it', 'es'];
const sources = readdirSync(path.join(root, 'docs')).filter(file => /\.mdx?$/.test(file)).sort();
const errors = [];
const read = file => readFileSync(file, 'utf8');
const matches = (text, regex) => [...text.matchAll(regex)].map(match => match[1] ?? match[0]);
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const field = (text, key) => text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
const markdownTables = text => [...text.matchAll(/^\|[^\n]+\n\|[\s:|\-]+\|\n(?:\|[^\n]+\n)*/gm)]
  .map(match => match[0].trim().split('\n').map(row => (row.match(/(?<!\\)\|/g) || []).length - 1));
const structure = text => ({
  anchors: matches(text, /\bid="([^"]+)"/g),
  headings: matches(text, /\{#([^}]+)\}/g),
  images: matches(text, /(?:src="|\]\()(\/img\/[^\s"')>]+)/g),
  tableTags: matches(text, /<(\/?(?:table|thead|tbody|tr|td|th))(?=[\s>])/g),
  markdownTables: markdownTables(text),
  spans: matches(text, /\b((?:rowSpan|colSpan)="\d+")/g),
  notices: [...text.matchAll(/(?:::((?:danger|warning|info|tip|note|caution))\[|<Admonition\s+type="([^"]+)")/g)].map(match => match[1] || match[2]),
  markdownLinks: matches(text, /\]\(([^)]+)\)/g).sort(),
  htmlLinks: matches(text, /\bhref="([^"]+)"/g).sort(),
});
const inventory = [];
for (const locale of locales) {
  const directory = path.join(root, 'i18n', locale, 'docusaurus-plugin-content-docs/current');
  if (!existsSync(directory)) { errors.push(`${locale}: missing translated documentation directory`); continue; }
  const files = readdirSync(directory).filter(file => /\.mdx?$/.test(file)).sort();
  if (!equal(files, sources)) errors.push(`${locale}: translated file inventory differs from English`);
  for (const filename of sources) {
    const target = path.join(directory, filename);
    if (!existsSync(target)) continue;
    const source = read(path.join(root, 'docs', filename));
    const translated = read(target);
    const label = `${locale}/${filename}`;
    for (const key of ['slug', 'sidebar_position']) {
      if (field(source, key) !== field(translated, key)) errors.push(`${label}: ${key} differs`);
    }
    if (!translated.startsWith('---\n')) errors.push(`${label}: missing frontmatter`);
    if (translated === source) errors.push(`${label}: untranslated English document`);
    if (/@@IT\d+@@|\[INSERT|\[PLACEHOLDER|[\uE000-\uF8FF\uFFFD]/u.test(translated)) errors.push(`${label}: unresolved placeholder or PDF glyph`);
    if (/(?:manual|pdf)-page-\d+/.test(translated)) errors.push(`${label}: obsolete source-page anchor`);
    const expected = structure(source), actual = structure(translated);
    for (const key of Object.keys(expected)) {
      if (!equal(expected[key], actual[key])) errors.push(`${label}: ${key} differs from English`);
    }
    inventory.push({ locale, filename, sourceSha256: createHash('sha256').update(source).digest('hex'), translatedSha256: createHash('sha256').update(translated).digest('hex'), images: actual.images.length, notices: actual.notices.length, tables: actual.tableTags.filter(tag=>tag==='table').length + actual.markdownTables.length });
  }
  for (const file of ['code.json', 'docusaurus-theme-classic/navbar.json', 'docusaurus-theme-classic/footer.json']) {
    const filename = path.join(root, 'i18n', locale, file);
    if (!existsSync(filename)) { errors.push(`${locale}: missing ${file}`); continue; }
    try { JSON.parse(read(filename)); } catch { errors.push(`${locale}: invalid ${file}`); }
  }
}
mkdirSync(path.join(root, 'output/translations'), { recursive: true });
writeFileSync(path.join(root, 'output/translations/coverage.json'), JSON.stringify({ checkedAt: new Date().toISOString(), inventory, errors }, null, 2) + '\n');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Validated ${inventory.length} translated documents across ${locales.join(', ')}: complete inventory, stable routes, anchors, tables, notices, images and links.`);
