import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { nativeLayouts, nativeLayoutForLocale } from './layouts.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const filename = path.join(root, 'maintenance/gui-screenshots.json');
const manifest = JSON.parse(await readFile(filename, 'utf8'));
const requested = process.argv.slice(2);
const locales = requested.length ? requested : manifest.locales;
const layout = nativeLayouts.find(row => row.name === 'online-result-details');
if (!layout?.captureDirectory) throw new Error('Missing the reviewed Online-result layout and capture directory.');
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const prepared = [];

for (const locale of locales) {
  if (!manifest.locales.includes(locale)) throw new Error(`Unknown locale: ${locale}`);
  const id = `${locale}-online-result-details`;
  const legacyId = `${locale}-icc-result-details`;
  const index = manifest.figures.findIndex(row => row.id === id || row.id === legacyId);
  if (index < 0) throw new Error(`${locale}: missing the original result figure provenance.`);
  const previous = manifest.figures[index];
  const docFile = locale === 'en' ? 'docs/11-results-and-data-analysis.md' : `i18n/${locale}/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md`;
  const doc = await readFile(path.join(root, docFile), 'utf8');
  const section = doc.split('{#section-11-1}')[1]?.split(/\n#{1,6} /)[0];
  const output = `/img/gui/${locale}/online-result-details.png`;
  const images = [...(section || '').matchAll(/!\[([^\]]+)\]\((\/img\/gui\/[^\s)]+)(?:\s+"[^"]*")?\)/g)].filter(match => match[2] === output);
  if (images.length !== 1 || !/^\| 11 \| /m.test(section)) throw new Error(`${locale}: expected one Online figure and its touch legend in section 11.1.`);
  const geometry = nativeLayoutForLocale(layout, locale);
  delete geometry.name;
  delete geometry.sourceIds;
  delete geometry.surface;
  delete geometry.capture;
  const sourceCaptureSha256 = {};
  for (const panel of geometry.panels) {
    panel.capture = `${layout.captureDirectory}/${locale}/${panel.capture}.png`;
    const bytes = await readFile(path.join(root, panel.capture));
    if (bytes.subarray(1, 4).toString() !== 'PNG' || bytes.readUInt32BE(16) !== 1600 || bytes.readUInt32BE(20) !== 960) {
      throw new Error(`${id}: expected a genuine 2x native 800x480 capture: ${panel.capture}`);
    }
    panel.captureSize = [800, 480];
    sourceCaptureSha256[panel.capture] = sha256(bytes);
  }
  for (const callout of geometry.callouts) {
    callout.meaning = geometry.annotationChanges?.[callout.label] || previous.originalAnnotations.find(row => row.label === callout.label)?.meaning || '';
  }
  const figure = {
    id, locale, kind: 'screenshot', surface: 'native', output, alt: images[0][1],
    replaces: [...new Set([...previous.replaces, `/img/gui/${locale}/icc-result-details.png`])],
    sourceIds: previous.sourceIds, printedPages: previous.printedPages,
    originalAnnotations: previous.originalAnnotations,
    sections: ['11.1'], previousFigureId: legacyId,
    captureProvenance: 'output/gui-online-results-review/provenance.json',
    interactionEvidence: `${layout.captureDirectory}/${locale}/evidence.json`,
    sourceCaptureSha256, ...geometry,
  };
  const previousDefinition = Object.fromEntries(Object.keys(figure).map(key => [key, previous[key]]));
  if (JSON.stringify(previousDefinition) !== JSON.stringify(figure)) manifest.figures[index] = figure;
  prepared.push(id);
}

manifest.source.onlineResultCaptureReports = [
  'output/gui-online-results-review/provenance.json',
  'output/gui-online-results-review/capture-review.json',
  'output/gui-online-results-review/figure-review.json',
];
await writeFile(filename, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${prepared.length} Online-result replacements, preserving all other figure records. Render and review only: ${prepared.join(' ')}`);
