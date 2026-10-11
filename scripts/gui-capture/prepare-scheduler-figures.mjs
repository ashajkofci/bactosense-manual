import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(root, 'maintenance/gui-screenshots.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const locales = process.argv.slice(2).length ? process.argv.slice(2) : manifest.locales;
const prepared = [];
const detailTitles = {
  en: ['New rule button', 'Set time range button', 'Preview button', 'Weekday selection', 'Selected entry time', 'New entry button', 'Copy to week button', 'Save button'],
  de: ['Schaltfläche Neue Regel', 'Schaltfläche Set time range', 'Schaltfläche Vorschau', 'Wochentag auswählen', 'Zeit des ausgewählten Eintrags', 'Schaltfläche Neu', 'Schaltfläche In Woche kopieren', 'Schaltfläche Speichern'],
  fr: ['Bouton Nouvelle règle', 'Bouton Set time range', 'Bouton Aperçu', 'Sélection du jour', 'Heure de l’entrée sélectionnée', 'Bouton Nouveau', 'Bouton Copier vers la semaine', 'Bouton Enregistrer'],
  it: ['Pulsante Nuova regola', 'Pulsante Set time range', 'Pulsante Anteprima', 'Selezione del giorno', 'Ora della voce selezionata', 'Pulsante Nuovo', 'Pulsante Copia nella settimana', 'Pulsante Salva'],
  es: ['Botón Nueva regla', 'Botón Set time range', 'Botón Vista previa', 'Selección del día', 'Hora de la entrada seleccionada', 'Botón Nuevo', 'Botón Copiar a la semana', 'Botón Guardar'],
};
function retain(figure) {
  const index = manifest.figures.findIndex(row => row.id === figure.id);
  if (index < 0) manifest.figures.push(figure);
  else {
    const previous = manifest.figures[index];
    const definition = Object.fromEntries(Object.keys(figure).map(key => [key, previous[key]]));
    if (JSON.stringify(definition) !== JSON.stringify(figure)) manifest.figures[index] = figure;
  }
  prepared.push(figure.id);
}
for (const locale of locales) {
  const directory = locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  const chapter = await readFile(path.join(root, directory, '10-measurements.md'), 'utf8');
  for (const state of ['select', 'rule', 'range', 'preview']) {
    const name = `advanced-scheduler-${state}`;
    const output = `/img/gui/${locale}/${name}.png`;
    const alt = [...chapter.matchAll(/!\[([^\]]+)\]\((\/img\/[^\s)]+)/g)].filter(match => match[2] === output).at(-1)?.[1];
    if (!alt) throw new Error(`${locale}: missing chapter reference for ${name}.`);
    const record = JSON.parse(await readFile(path.join(root, `output/gui-capture/scheduler/native/${locale}/${name}.json`), 'utf8'));
    const figure = {
      id: `${locale}-${name}`, locale, kind: 'screenshot', surface: 'native', catalog: 'advanced-scheduler',
      output, alt, replaces: [], sourceIds: [], printedPages: [], originalAnnotations: [], sections: ['10.2.4'],
      capture: `output/gui-capture/scheduler/native/${locale}/${name}.png`, captureSize: [800, 480],
    };
    if (state === 'select') {
      figure.crop = [25, 350, 310, 50];
      const control = record.objects.find(row => row.name === 'scheduleAdvancedMode');
      if (!control) throw new Error(`${locale}: missing production Advanced control.`);
      figure.highlights = [[control.x - 25, control.y - 350, control.width, control.height]];
    }
    if (state === 'range') figure.crop = [310, 298, 487, 112];
    retain(figure);
  }
  const records = {};
  for (const state of ['rule', 'range', 'preview']) records[state] = JSON.parse(await readFile(path.join(root, `output/gui-capture/scheduler/native/${locale}/advanced-scheduler-${state}.json`), 'utf8'));
  const named = (state, name) => {
    const object = records[state].objects.find(row => row.name === name);
    if (!object) throw new Error(`${locale}/${state}: missing ${name}.`);
    return [object.x, object.y, object.width, object.height];
  };
  const details = [
    ['new-rule', 'rule', named('rule', 'actionBarButton1')],
    ['time-range-button', 'range', named('range', 'scheduleTimeRange')],
    ['preview-button', 'rule', named('rule', 'actionBarButton3')],
    ['days', 'preview', [25, 107, 320, 33]],
    ['entry-time', 'preview', [382, 145, 402, 49]],
    ['new-entry', 'preview', named('preview', 'actionBarButton1')],
    ['copy-week', 'preview', named('preview', 'actionBarButton3')],
    ['save', 'preview', named('preview', 'actionBarButton4')],
  ];
  for (const [index, [detail, state, crop]] of details.entries()) {
    const name = `advanced-scheduler-${detail}`;
    const output = `/img/gui/${locale}/${name}.png`;
    if (!chapter.includes(output)) throw new Error(`${locale}: unused workflow detail ${name}.`);
    retain({
      id: `${locale}-${name}`, locale, kind: 'control', surface: 'native', catalog: 'advanced-scheduler',
      output, alt: `BactoSense — ${detailTitles[locale][index]}`, replaces: [], sourceIds: [], printedPages: [],
      originalAnnotations: [], sections: ['10.2.4'], crop,
      capture: `output/gui-capture/scheduler/native/${locale}/advanced-scheduler-${state}.png`, captureSize: [800, 480],
    });
  }
}
manifest.source.schedulerCaptureReports = ['output/gui-capture/scheduler/provenance.json', 'output/gui-capture/scheduler/capture-review.json'];
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${prepared.length} scheduler figures. Render and review: ${prepared.join(' ')}`);
