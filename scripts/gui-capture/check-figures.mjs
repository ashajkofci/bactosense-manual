import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const manifest = JSON.parse(await readFile(path.join(root, 'maintenance/gui-screenshots.json'), 'utf8'));
const inventory = JSON.parse(await readFile(path.join(root, 'maintenance/gui-screenshot-inventory.json'), 'utf8'));
const documents = [];
for (const { locale, directory } of [{ locale: 'en', directory: 'docs' }, ...['de', 'fr', 'it', 'es'].map(locale => ({ locale, directory: `i18n/${locale}/docusaurus-plugin-content-docs/current` }))]) {
  for (const file of await readdir(path.join(root, directory))) {
    if (/\.mdx?$/.test(file)) documents.push({ locale, file: `${directory}/${file}`, text: await readFile(path.join(root, directory, file), 'utf8') });
  }
}
const errors = [];
const uses = (doc, image) => [...doc.text.matchAll(/(?:src="|\]\()(\/img\/[^\s"')>]+)/g)].some(match=>match[1]===image);
let callouts = 0;
for (const figure of manifest.figures) {
  const bytes = await readFile(path.join(root, 'static', figure.output));
  const hash = createHash('sha256').update(bytes).digest('hex');
  if (hash !== figure.sha256 || hash !== figure.review?.sha256) errors.push(`${figure.id}: missing or stale visual review.`);
  if (bytes.subarray(1, 4).toString() !== 'PNG') errors.push(`${figure.id}: invalid screenshot file.`);
  if (![bytes.readUInt32BE(16), bytes.readUInt32BE(20)].every((size, index) => size === figure.pixelSize[index])) errors.push(`${figure.id}: unexpected screenshot dimensions.`);
  const localeDocs = documents.filter(doc => !figure.locale || figure.locale === 'all' || doc.locale === figure.locale);
  if (!localeDocs.some(doc => uses(doc,figure.output))) errors.push(`${figure.id}: screenshot is not used.`);
  const labels = (figure.callouts || []).map(callout => callout.label);
  callouts += labels.length;
  if (new Set(labels).size !== labels.length) errors.push(`${figure.id}: duplicate annotation labels.`);
  if (!/^\/img\/gui\/(?:icons\/|(?:en|de|fr|it|es)\/)[a-z0-9]+(?:-[a-z0-9]+)*\.png$/.test(figure.output)) errors.push(`${figure.id}: screenshot filename must describe its content.`);
  const required=[...new Map((figure.originalAnnotations || []).filter(row=>row.required).map(row=>[row.label,row])).values()];
  for (const annotation of required) {
    if (/^arrow/.test(annotation.label)) continue;
    if (annotation.label==='frame') {if(!figure.highlights?.length) errors.push(`${figure.id}: missing Clear Errors highlight.`);continue;}
    if (!labels.includes(annotation.label) && !(figure.regions || []).some(region=>region.label===annotation.label)) errors.push(`${figure.id}: missing original annotation ${annotation.label}.`);
  }
  const arrows=required.filter(row=>/^arrow/.test(row.label)).length;
  if ((figure.arrows?.length || 0)<arrows) errors.push(`${figure.id}: missing an original arrow.`);
  for(const panel of figure.panels || [figure]) {
    // Public assets and their reviews are checked in every checkout. Raw captures
    // stay local; validate them too when the disposable capture output is present.
    if (!existsSync(path.join(root,panel.capture))) continue;
    const input=await readFile(path.join(root,panel.capture));
    if (input.readUInt32BE(16)!==panel.captureSize[0]*2 || input.readUInt32BE(20)!==panel.captureSize[1]*2) errors.push(`${figure.id}: capture dimensions changed since annotation planning.`);
  }
  for (const source of figure.replaces) for (const doc of localeDocs) if (uses(doc,source)) errors.push(`${doc.file}: superseded GUI image ${source}.`);
}
let preserved=0, replaced=0;
for (const entry of inventory.entries) {
  if (entry.action==='replace_screenshot' || entry.action==='review_control_artwork') {
    replaced++;
    for(const locale of manifest.locales) {
      if (!manifest.figures.some(figure=>(figure.locale===locale || figure.locale==='all') && figure.replaces.includes(entry.source_path))) errors.push(`${entry.id}: missing ${locale} replacement.`);
    }
    for(const doc of documents) if(uses(doc,entry.source_path)) errors.push(`${doc.file}: obsolete GUI source ${entry.source_path}.`);
  } else {
    const bytes=await readFile(path.join(root,'static',entry.source_path));
    const hash=createHash('sha256').update(bytes).digest('hex');
    if(hash!==entry.source_sha256) errors.push(`${entry.id}: scientific or hardware illustration changed.`);
    preserved++;
  }
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Verified ${manifest.figures.length} reviewed current GUI images, ${callouts} labeled callouts, and ${documents.length} chapter documents.`);
console.log(`All ${replaced} obsolete GUI assets replaced across five languages; ${preserved} scientific, hardware, and safety images retain their original hashes.`);
