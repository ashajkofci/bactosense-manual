import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = file => readFileSync(path.join(root, file), 'utf8');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const docs = readdirSync(path.join(root, 'docs')).filter(name => /\.mdx?$/.test(name));
const references = new Map();
for (let chapter = 1; chapter <= 20; chapter++) {
  const prefix = String(chapter).padStart(2, '0') + '-';
  check(docs.filter(file => file.startsWith(prefix)).length === 1, `Expected one document for chapter ${chapter}`);
}
for (const file of docs) {
  const text = read(`docs/${file}`);
  check(text.startsWith('---\n'), `${file}: missing frontmatter`);
  check(!/TODO|FIXME|\[INSERT|\[PLACEHOLDER/i.test(text), `${file}: unfinished placeholder`);
  check(!/[\uE000-\uF8FF\uFFFD]/u.test(text), `${file}: unresolved PDF font glyph`);
  check(!/(?:manual|pdf)-page-\d+/.test(text), `${file}: obsolete source-page anchor`);
  const paths = [...text.matchAll(/(?:src=["']|\]\()(\/img\/[^\s"')>]+)/g)].map(match => match[1]);
  for (const asset of paths) {
    check(existsSync(path.join(root, 'static', asset)), `${file}: missing asset ${asset}`);
    references.set(asset, (references.get(asset) || 0) + 1);
  }
  for (const match of text.matchAll(/\]\(([^)\s]+\.md)(?:#[^)]*)?\)/g)) {
    check(existsSync(path.resolve(root, 'docs', match[1])), `${file}: missing document ${match[1]}`);
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${docs.length} documents, 20 chapters, and ${references.size} referenced images.`);
  console.log(`${[...references.values()].filter(count => count > 1).length} images are reused across document references.`);
}
