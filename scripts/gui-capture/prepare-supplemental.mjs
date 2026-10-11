import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { supplementalLayouts } from './supplemental-layouts.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(root, 'maintenance/gui-screenshots.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const locales = process.argv.slice(2).length ? process.argv.slice(2) : manifest.locales;
const states = ['activation-home','settings-menu','system-settings-menu','scientific-package-upgrades','scientific-package-activation-key','bactocloud-settings'];
const prepared = [];
for (const locale of locales) {
  const records = {};
  for (const state of states) records[state] = JSON.parse(await readFile(path.join(root, `output/gui-capture/activation/native/${locale}/${state}.json`), 'utf8'));
  for (const {name,capture,replaces=[],...layout} of supplementalLayouts(locale, records)) {
    const figure = {id:`${locale}-${name}`,locale,kind:'screenshot',surface:'native',catalog:'activation-and-enrolment',
      output:`/img/gui/${locale}/${name}.png`,replaces,sourceIds:[],printedPages:[],originalAnnotations:[],
      capture:`output/gui-capture/activation/native/${locale}/${capture}.png`,captureSize:[800,480],...layout};
    const index = manifest.figures.findIndex(row => row.id === figure.id);
    if (index < 0) manifest.figures.push(figure);
    else {
      const previous = manifest.figures[index];
      const definition = Object.fromEntries(Object.keys(figure).map(key => [key,previous[key]]));
      if (JSON.stringify(definition) !== JSON.stringify(figure)) manifest.figures[index] = figure;
    }
    prepared.push(figure.id);
  }
}
manifest.source.supplementalCaptureReports = ['output/gui-capture/activation/provenance.json','output/gui-capture/activation/capture-review.json'];
await writeFile(manifestPath, JSON.stringify(manifest,null,2)+'\n');
console.log(`Prepared ${prepared.length} supplemental figures while preserving the existing reviewed catalog. Render/review only: ${prepared.join(' ')}`);
