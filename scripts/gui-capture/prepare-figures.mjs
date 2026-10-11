import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { nativeLayouts, nativeLayoutForLocale, webLayouts, localizedTitles } from './layouts.mjs';
import { iconTitles } from './icon-titles.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const readJson = async file => JSON.parse(await readFile(path.join(root,file),'utf8'));
const inventory = await readJson('maintenance/gui-screenshot-inventory.json');
const icons = await readJson('maintenance/gui-icon-map.json');
const webEvidence = await readJson('output/gui-capture/web/capture-evidence.json');
const locales = process.argv.slice(2).length ? process.argv.slice(2) : ['en','de','fr','it','es'];
const filename = path.join(root,'maintenance/gui-screenshots.json');
let previous;
try { previous = JSON.parse(await readFile(filename,'utf8')); } catch { previous = {figures:[]}; }
const entries = new Map(inventory.entries.map(row=>[Number(row.id.replace('gui-source-','')),row]));
const figures = previous.figures.filter(figure=>figure.locale && !locales.includes(figure.locale) && figure.locale!=='all');
const pngSize = async capture => {
  const bytes = await readFile(path.join(root,capture));
  if (bytes.subarray(1,4).toString()!=='PNG') throw new Error(`Expected a PNG: ${capture}`);
  return [bytes.readUInt32BE(16)/2,bytes.readUInt32BE(20)/2];
};
for (const locale of locales) {
  if (!localizedTitles[locale] || !webEvidence.locales[locale]) throw new Error(`Missing current captures for ${locale}.`);
  const layouts = [...nativeLayouts.map(layout=>nativeLayoutForLocale(layout,locale)),...webLayouts(webEvidence.locales[locale])];
  if (layouts.length!==localizedTitles[locale].length) throw new Error('Figure titles do not match the catalog.');
  for (const [index,layout] of layouts.entries()) {
    const {name,sourceIds,surface} = layout;
    const geometry=structuredClone(layout);
    delete geometry.name;delete geometry.sourceIds;delete geometry.surface;
    const sourceRows = sourceIds.map(id=>entries.get(id));
    const annotations = sourceRows.flatMap(row=>row.annotations || []);
    const raw = name => `output/gui-capture/${surface}/${locale}/${name}.png`;
    if (name==='home-settings-button' || name==='home-overview') {
      const home=await readJson(`output/gui-capture/native/${locale}/home.json`);
      const buttons=home.objects.filter(row=>row.name==='homeBarButtonBackground').sort((a,b)=>a.x-b.x);
      if (buttons.length!==4) throw new Error(`Expected the four current home controls in ${locale}.`);
      if (name==='home-settings-button') {
        const button=buttons[1];geometry.crop=[button.x,button.y,button.width,button.height];
      } else {
        for (const [annotation,buttonIndex] of [['7',0],['8',2],['9',3]]) {
          const button=buttons[buttonIndex],callout=geometry.callouts.find(row=>row.label===annotation);
          callout.at[0]=callout.target[0]=button.x+button.width/2;
        }
      }
    }
    if (geometry.panels) {
      delete geometry.capture;
      for (const panel of geometry.panels) { panel.capture=raw(panel.capture);panel.captureSize=await pngSize(panel.capture); }
    } else { geometry.capture=raw(geometry.capture);geometry.captureSize=await pngSize(geometry.capture); }
    for (const callout of geometry.callouts || []) callout.meaning=geometry.annotationChanges?.[callout.label] || annotations.find(row=>row.label===callout.label)?.meaning || '';
    figures.push({id:`${locale}-${name}`,locale,kind:'screenshot',surface,
      output:`/img/gui/${locale}/${name}.png`,
      alt:`BactoSense — ${localizedTitles[locale][index]}`,
      replaces:sourceRows.map(row=>row.source_path),sourceIds:sourceRows.map(row=>row.id),
      printedPages:[...new Set(sourceRows.flatMap(row=>row.printed_pages))],
      originalAnnotations:annotations,...geometry});
  }
}
for (const icon of icons.icons) {
  const replaces=icon.old_source_assets.filter(source=>!['/img/manual/cell-f60b02982fd9.png','/img/manual/cell-71bc4e13a72d.png','/img/manual/cell-2633a4bc793a.png'].includes(source));
  figures.push({id:`icon-${icon.name}`,locale:'all',kind:'icon',surface:'native',
    capture:icon.raw_path,captureSize:icon.logical_size,crop:icon.crop,
    output:icon.output,alt:`BactoSense — ${iconTitles[icon.name].en}`,
    alts:Object.fromEntries(Object.entries(iconTitles[icon.name]).map(([locale,title])=>[locale,`BactoSense — ${title}`])),replaces,
    sourceIds:icons.replacements.filter(row=>replaces.includes(row.old)).map(row=>row.id),
    productionComponent:icon.production_component,
    ...(icon.name==='maintenance-button' ? {contextReplacements:[{source:'/img/manual/asset-a7a911718f1c.png',printedPage:84}]} : {})});
}
const manifest={version:1,capturedDate:'2026-10-11',locales:['en','de','fr','it','es'],
  source:{manual:inventory.source_manual,
    guiCommit:'afa2595ffe3b9d8dda369d22805fef5b266b5547',
    bactoserverCommit:'26b9cbaad199dc1387d1a8ace72fef02b3fa1c64',
    bactowebCommit:'515cb39e9d12493103c3a63319b8964022650365',
    nativeRenderer:'Qt 5.15 Cocoa OpenGL; grabToImage at 2x, unmodified production QML resources',
    webRenderer:'Playwright Chromium at 2x, current source and current localized interface',
    fixture:'Isolated local Bactoserver test mode with copied demo archives; teaching event and gate fixtures only in the disposable runtime',
    captureReports:['output/gui-capture/runtime/capture-fixture-provenance.json','output/gui-capture/web/source-provenance.json','output/gui-capture/web/capture-evidence.json'],
    originalScreenshotAssets:36,originalControlAssets:38,preservedScientificAssets:8,preservedNonGuiAssets:29},
  figures};
// Additive procedure catalogs have their own capture and preparation workflows;
// refreshing legacy replacements must not drop those document images.
manifest.figures.push(...previous.figures.filter(figure=>figure.catalog && locales.includes(figure.locale)));
if (previous.source?.supplementalCaptureReports) manifest.source.supplementalCaptureReports=previous.source.supplementalCaptureReports;
if (previous.source?.digitalOutputCaptureReports) manifest.source.digitalOutputCaptureReports=previous.source.digitalOutputCaptureReports;
await writeFile(filename,JSON.stringify(manifest,null,2)+'\n');
console.log(`Prepared ${manifest.figures.length} figures. Render and visually review before applying them.`);
