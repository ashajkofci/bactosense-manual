// BactoSwitch manual: online-mode results with their line column in the current
// Bactoweb, against the disposable BactoSwitch runtime (bactoswitch_capture.py start).
// Same staging, login and language selection as capture.mjs; nothing is saved or downloaded.
import fs from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright';
import {captureServer} from './server.mjs';

const workspace = path.resolve(import.meta.dirname, '../../..');
const app = path.join(workspace, 'output/gui-capture/web/app');
const output = path.join(workspace, 'output/gui-capture/bactoswitch/web');
const port = Number(process.env.BACTOWEB_CAPTURE_PORT || 18910);
const api = process.env.BACTOWEB_CAPTURE_API || 'http://127.0.0.1:18889';
const origin = `http://127.0.0.1:${port}`;
const languageNames = {en:'English',de:'Deutsch',fr:'Français',it:'Italiano',es:'Español'};
const locales = (process.env.BACTOWEB_CAPTURE_LOCALES || 'en,de,fr,it,es').split(',');
const viewport = {width:1280,height:800};
const server = await captureServer({root:app,port,api});
const browser = await chromium.launch({headless:true});
const evidence = {api,viewport,deviceScaleFactor:2,locales:{}};

async function captureLocale(locale) {
  const translations = JSON.parse(await fs.readFile(path.join(app,'assets/locales',`locale-${locale}.json`),'utf8'));
  const folder = path.join(output,locale);
  await fs.mkdir(folder,{recursive:true});
  const context = await browser.newContext({viewport,deviceScaleFactor:2,locale:'en-GB'});
  const page = await context.newPage();
  const record = evidence.locales[locale] = {errors:[],failedResponses:[],requests:[]};
  page.on('pageerror',error=>record.errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400) record.failedResponses.push({url:response.url().replace(/([?&](?:hash|sessionKey|key)=)[^&]+/g,'$1[redacted]'),status:response.status()});});
  page.on('request',request=>{if(request.method()!=='GET') record.requests.push({method:request.method(),url:new URL(request.url()).pathname});});
  try {
    await page.goto(origin+'/#/login',{waitUntil:'domcontentloaded'});
    await page.locator('#user').fill('admin');
    await page.locator('.verticalcenter a[ng-click="logIn()"]').click();
    await page.waitForFunction(()=>location.hash==='#/'||location.hash==='#');
    if(locale!=='en') {
      await page.locator('header.navbar > ul > li.dropdown > a.dropdown-toggle').filter({hasText:/^English/}).click();
      await page.locator('a[ng-click="changeLanguage(key)"]').filter({hasText:languageNames[locale]}).click();
      await page.locator('header.navbar > ul > li.dropdown > a.dropdown-toggle').filter({hasText:languageNames[locale]}).waitFor({state:'visible'});
    }
    await page.locator('#sidebar a[href="#/results"]').click();
    await page.locator('[ui-grid="autoGridOptions"]').waitFor({state:'attached'});
    // Historical fixture data: the product's translated All data range.
    await page.locator('button[daterangepicker]').first().click();
    await page.locator('.daterangepicker:visible .ranges li').filter({hasText:translations['ALL DATA']}).click();
    await page.locator('[ui-grid="autoGridOptions"] .ui-grid-row').first().waitFor({state:'visible',timeout:20000});
    const panel = page.locator('.panel').filter({has:page.locator('[ui-grid="autoGridOptions"]')}).first();
    await panel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    const header = name => panel.locator('.ui-grid-header-cell').filter({hasText:translations[name]}).first();
    const bounds = async locator => locator.boundingBox();
    // The product's Name column filter (section 5.2.2): only the BactoSwitch lines remain.
    await header('NAME').locator('input.ui-grid-filter-input').fill('Unnamed');
    await page.waitForTimeout(1000);
    record.nameFilter = 'Unnamed';
    const box = await bounds(panel);
    const columns = {name:await bounds(header('NAME')), streamId:await bounds(header('STREAM ID'))};
    if(!columns.name || !columns.streamId) throw new Error(`${locale}: the online results must show the Name and line columns.`);
    const rows = await panel.locator('[ui-grid="autoGridOptions"] .ui-grid-row').allInnerTexts();
    await page.screenshot({path:path.join(folder,'web-online-results.png'),clip:box,animations:'disabled'});
    Object.assign(record,{panel:box,columns,rows:rows.slice(0,6),labels:{results:translations['RESULTS'],section:translations['AUTO MODE RESULTS'],name:translations['NAME'],streamId:translations['STREAM ID']}});
    if(record.requests.some(request=>!/\/api\/login$/.test(request.url))) throw new Error(`${locale}: unexpected write request`);
    console.log(`Captured ${locale} online results (${rows.length} rows).`);
  } finally {
    await fs.writeFile(path.join(output,'capture-evidence.json'),JSON.stringify(evidence,null,2)+'\n');
    await context.close();
  }
}

try {
  for(const locale of locales) await captureLocale(locale);
} finally {
  await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));
}
