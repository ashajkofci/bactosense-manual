// Register the localized BactoSwitch screenshots in maintenance/gui-screenshots.json.
// Run after the native and web captures; render and review the printed IDs, then apply.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import manualRegistry from '../../plugins/manuals.cjs';
import { bactoswitchLayouts, bactoswitchWebLayout } from './bactoswitch-layouts.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(root, 'maintenance/gui-screenshots.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const manual = manualRegistry.manuals.find(item => item.id === 'bactoswitch');
const locales = process.argv.slice(2).length ? process.argv.slice(2) : manifest.locales;
const capture = locale => path.join(root, 'output/gui-capture/bactoswitch/native', locale);
const states = ['settings-menu', 'online-mode-settings-menu', 'sample-lines', 'control-panel-all-open', 'control-panel-single-valve',
  'home-online', 'plot-start', 'wizard-protocol-selected', 'wizard-interval', 'plot-lines', 'display-settings', 'results-list',
  'result-details', 'filter-results', 'select-line', 'plot-filtered', 'results-filtered', 'alarm-line', 'digital-outputs',
  'digital-inputs-line', 'digital-inputs-scheduler', 'digital-input-source'];
const load = async locale => Object.fromEntries(await Promise.all(states.map(async state =>
  [state, JSON.parse(await readFile(path.join(capture(locale), `${state}.json`), 'utf8'))])));
const english = await load('en');
const evidence = JSON.parse(await readFile(path.join(root, 'output/gui-capture/bactoswitch/web/capture-evidence.json'), 'utf8'));

// Keep each edition's own alt text: it is translated with the chapter.
async function altTexts(locale) {
  const directory = path.join(root, manualRegistry.contentDirectory(manual, locale));
  const alts = new Map();
  for (const file of ['04-installation.md', '05-operation.md']) {
    const text = await readFile(path.join(directory, file), 'utf8');
    // Before the first apply the chapters use the PDF artwork, afterwards the localized figure.
    for (const [, alt, source] of text.matchAll(/!\[((?:\\.|[^\]\\])*)\]\((\/img\/(?:bactoswitch\/|gui\/[a-z]{2}\/bactoswitch-)[^\s)]+)/g)) alts.set(source, alt.replace(/\\([[\]])/g, '$1'));
  }
  return alts;
}

const prepared = [];
for (const locale of locales) {
  const alts = await altTexts(locale);
  const base = (name, replaced) => {
    const source = `/img/bactoswitch/${replaced}.png`, output = `/img/gui/${locale}/bactoswitch-${name}.png`;
    const alt = alts.get(output) ?? alts.get(source);
    if (alt === undefined) throw new Error(`${locale}: neither ${output} nor ${source} is used in the BactoSwitch chapters.`);
    return {id: `${locale}-bactoswitch-${name}`, locale, kind: 'screenshot', catalog: 'bactoswitch',
      output, replaces: [source], sourceIds: [], printedPages: [], originalAnnotations: [], alt};
  };
  const figures = bactoswitchLayouts(locale, await load(locale), english).map(({name, capture: state, replaces, ...layout}) => ({
    ...base(name, replaces), surface: 'native', capture: `output/gui-capture/bactoswitch/native/${locale}/${state}.png`,
    captureSize: [800, 480], ...layout}));
  const {name, replaces, ...web} = bactoswitchWebLayout(locale, evidence);
  figures.push({...base(name, replaces), surface: 'web', capture: `output/gui-capture/bactoswitch/web/${locale}/web-online-results.png`, ...web});
  for (const figure of figures) {
    const index = manifest.figures.findIndex(row => row.id === figure.id);
    if (index < 0) manifest.figures.push(figure);
    else {
      // Keep the render and review of an unchanged definition.
      const previous = manifest.figures[index];
      const definition = Object.fromEntries(Object.keys(figure).map(key => [key, previous[key]]));
      if (JSON.stringify(definition) !== JSON.stringify(figure)) manifest.figures[index] = figure;
    }
    prepared.push(figure.id);
  }
}
manifest.source.bactoswitchCaptureReports = ['output/gui-capture/bactoswitch/provenance.json', 'output/gui-capture/bactoswitch/web/capture-evidence.json'];
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Prepared ${prepared.length} BactoSwitch figures. Render/review only: ${prepared.join(' ')}`);
