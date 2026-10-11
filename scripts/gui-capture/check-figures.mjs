import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const manifest = JSON.parse(await readFile(path.join(root, 'maintenance/gui-screenshots.json'), 'utf8'));
const documents = [];
for (const { locale, directory } of [{ locale: 'en', directory: 'docs' }, ...['de', 'fr', 'it', 'es'].map(locale => ({ locale, directory: `i18n/${locale}/docusaurus-plugin-content-docs/current` }))]) {
  for (const file of await readdir(path.join(root, directory))) {
    if (/\.mdx?$/.test(file)) documents.push({ locale, file: `${directory}/${file}`, text: await readFile(path.join(root, directory, file), 'utf8') });
  }
}
const errors = [];
let callouts = 0;
for (const figure of manifest.figures) {
  const bytes = await readFile(path.join(root, 'static', figure.output));
  const hash = createHash('sha256').update(bytes).digest('hex');
  if (hash !== figure.sha256 || hash !== figure.review?.sha256) errors.push(`${figure.id}: missing or stale visual review.`);
  if (bytes.subarray(1, 4).toString() !== 'PNG') errors.push(`${figure.id}: invalid screenshot file.`);
  if (![bytes.readUInt32BE(16), bytes.readUInt32BE(20)].every((size, index) => size === figure.pixelSize[index])) errors.push(`${figure.id}: unexpected screenshot dimensions.`);
  const localeDocs = documents.filter(doc => !figure.locale || figure.locale === 'all' || doc.locale === figure.locale);
  if (!localeDocs.some(doc => doc.text.includes(`src="${figure.output}"`))) errors.push(`${figure.id}: screenshot is not used.`);
  const labels = (figure.callouts || []).map(callout => callout.label);
  callouts += labels.length;
  if (new Set(labels).size !== labels.length) errors.push(`${figure.id}: duplicate annotation labels.`);
  for (const source of figure.replaces) for (const doc of localeDocs) if (doc.text.includes(`src="${source}"`)) errors.push(`${doc.file}: superseded GUI image ${source}.`);
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Verified ${manifest.figures.length} reviewed current GUI images, ${callouts} numbered callouts, and ${documents.length} chapter documents. No superseded GUI references remain.`);
