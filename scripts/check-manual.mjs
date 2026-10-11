import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = file => readFileSync(path.join(root, file), 'utf8');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const references = new Map();
let documentCount = 0;
for (const locale of ['en', 'de', 'fr', 'it', 'es']) {
  const directory = locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  const label = locale;
  if (!existsSync(path.join(root, directory))) { errors.push(`${label}: missing documentation directory ${directory}`); continue; }
  const docs = readdirSync(path.join(root, directory)).filter(name => /\.mdx?$/.test(name));
  documentCount += docs.length;
  for (let chapter = 1; chapter <= 20; chapter++) {
    const prefix = String(chapter).padStart(2, '0') + '-';
    check(docs.filter(file => file.startsWith(prefix)).length === 1, `${label}: expected one document for chapter ${chapter}`);
  }
  for (const file of docs) {
    const text = read(`${directory}/${file}`);
    const fileLabel = `${label}/${file}`;
    check(text.startsWith('---\n'), `${fileLabel}: missing frontmatter`);
    check(!(/\b(?:TODO|FIXME)\b/.test(text) || /\[INSERT|\[PLACEHOLDER/i.test(text)), `${fileLabel}: unfinished placeholder`);
    check(!/[\uE000-\uF8FF\uFFFD]/u.test(text), `${fileLabel}: unresolved PDF font glyph`);
    check(!/(?:manual|pdf)-page-\d+/.test(text), `${fileLabel}: obsolete source-page anchor`);
    const paths = [...text.matchAll(/(?:src=["']|\]\()(\/img\/[^\s"')>]+)/g)].map(match => match[1]);
    for (const asset of paths) {
      check(existsSync(path.join(root, 'static', asset)), `${fileLabel}: missing asset ${asset}`);
      references.set(asset, (references.get(asset) || 0) + 1);
    }
    for (const match of text.matchAll(/\]\(([^)\s]+\.md)(?:#[^)]*)?\)/g)) {
      check(existsSync(path.resolve(root, directory, match[1])), `${fileLabel}: missing document ${match[1]}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${documentCount} documents, 20 chapters per language across en, de, fr, it, es, and ${references.size} referenced images.`);
  console.log(`${[...references.values()].filter(count => count > 1).length} images are reused across document references.`);
}
