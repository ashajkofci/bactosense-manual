import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const filename = path.join(root, 'maintenance/gui-screenshots.json');
const manifest = JSON.parse(await readFile(filename, 'utf8'));
const locales = process.argv.slice(2).length ? process.argv.slice(2) : manifest.locales;
const header = 'output/gui-capture/native/en/digital-outputs.png';
const definitions = [
  { name: 'digital-output-base-state', step: 4, state: 'base', values: [['1', '1', '1', '1']] },
  { name: 'digital-output-critical-error', step: 5, state: 'critical', values: [['0', '/', '/', '/']] },
  { name: 'digital-output-noncritical-error', step: 6, state: 'non-critical', values: [['/', '0', '/', '/']] },
  { name: 'digital-output-alarm-assignment', step: 7, state: 'alarm', values: [['/', '/', '0', '/'], ['/', '/', '/', '0']] },
];
const prepared = [];
for (const locale of locales) {
  if (!manifest.locales.includes(locale)) throw new Error(`Unknown locale: ${locale}`);
  const original = `output/gui-capture/native/${locale}/digital-outputs`;
  const lower = `output/gui-capture/digital-output/native/${locale}/digital-outputs-lower`;
  const topRecord = JSON.parse(await readFile(path.join(root, `${original}.json`), 'utf8'));
  const lowerRecord = JSON.parse(await readFile(path.join(root, `${lower}.json`), 'utf8'));
  const docFile = locale === 'en' ? 'docs/06-io-box.md' : `i18n/${locale}/docusaurus-plugin-content-docs/current/06-io-box.md`;
  const document = await readFile(path.join(root, docFile), 'utf8');
  const section = document.split('{#section-6-6}')[1]?.split(/\n#{1,6} /)[0];
  if (!section) throw new Error(`${locale}: missing section 6.6.`);
  for (const definition of definitions) {
    const output = `/img/gui/${locale}/${definition.name}.png`;
    const images = [...section.matchAll(/!\[([^\]]+)\]\((\/img\/gui\/[^\s)]+)(?:\s+"[^"]*")?\)/g)].filter(match => match[2] === output);
    if (images.length !== 1) throw new Error(`${locale}: expected one procedure reference to ${output}.`);
    let rows;
    if (definition.state === 'base') {
      rows = topRecord.objects.filter(row => row.type.startsWith('ListItemDigitalOutput') && row.state === 'base')
        .map(row => ({ ...row, label: lowerRecord.rows.find(row => row.state === 'base').label, values: definition.values[0] }));
    } else {
      rows = lowerRecord.rows.filter(row => row.state === definition.state && row.fullyVisible).sort((a, b) => a.y - b.y);
    }
    if (rows.length !== definition.values.length) throw new Error(`${locale}/${definition.name}: wrong row count.`);
    let atY = 24;
    const capture = `${definition.state === 'base' ? original : lower}.png`;
    const panels = [{ capture: header, captureSize: [800, 480], crop: [470, 100, 320, 24], at: [0, 0] }];
    for (const [index, row] of rows.entries()) {
      if (row.x !== 10 || row.width !== 780 || row.height !== 52 || row.y < 124 || row.y + row.height > 410 ||
          JSON.stringify(row.values) !== JSON.stringify(definition.values[index])) {
        throw new Error(`${locale}/${definition.name}: control geometry or displayed values changed.`);
      }
      panels.push({ capture, captureSize: [800, 480], crop: [470, row.y, 320, row.height], at: [0, atY] });
      atY += row.height;
    }
    const figure = {
      id: `${locale}-${definition.name}`, locale, kind: 'screenshot', surface: 'native', catalog: 'digital-output-procedure',
      output, alt: images[0][1], replaces: [], sourceIds: [], printedPages: [], originalAnnotations: [],
      capture, captureSize: [800, 480], panels, canvasSize: [320, atY], padding: [0, 0, 0, 0],
      sections: ['6.6'], procedureStep: definition.step,
      shownRows: rows.map(row => ({ state: row.state, label: row.label, values: row.values })),
      captureEvidence: `${lower}-evidence.json`,
      composition: 'Unmodified native number-header and localized value-row crops. The language-neutral English 1–4 header avoids a clipped German Ausgang label. No controls, labels or values are drawn or changed.',
    };
    const index = manifest.figures.findIndex(row => row.id === figure.id);
    if (index < 0) manifest.figures.push(figure);
    else {
      const previous = manifest.figures[index];
      const previousDefinition = Object.fromEntries(Object.keys(figure).map(key => [key, previous[key]]));
      if (JSON.stringify(previousDefinition) !== JSON.stringify(figure)) manifest.figures[index] = figure;
    }
    prepared.push(figure.id);
  }
}
manifest.source.digitalOutputCaptureReports = ['output/gui-capture/digital-output/provenance.json', 'output/gui-capture/digital-output/capture-review.json', 'output/gui-digital-output-review/capture-and-crop-review.json'];
await writeFile(filename, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${prepared.length} digital-output control crops, preserving all earlier figures. Render/review only: ${prepared.join(' ')}`);
