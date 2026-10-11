import fs from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright';
import {captureServer} from './server.mjs';

const workspace = path.resolve(import.meta.dirname, '../../..');
const output = path.join(workspace, 'output/gui-capture/web');
const port = Number(process.env.BACTOWEB_CAPTURE_PORT || 18910);
const api = process.env.BACTOWEB_CAPTURE_API || 'http://127.0.0.1:18889';
const origin = `http://127.0.0.1:${port}`;
const languageNames = {en:'English',de:'Deutsch',fr:'Français',it:'Italiano',es:'Español'};
const locales = (process.env.BACTOWEB_CAPTURE_LOCALES || 'en,de,fr,it,es').split(',');
const viewport = {width:1280,height:800};
const server = await captureServer({root:path.join(output,'app'),port,api});
const browser = await chromium.launch({headless:true});
const evidence = {api,viewport,deviceScaleFactor:2,locales:{}};
const redact = text => text.replace(/([?&](?:hash|sessionKey|key)=)[^&\s"']+/g,'$1[redacted]');

async function captureLocale(locale) {
  if (!languageNames[locale]) throw new Error(`Unsupported capture locale: ${locale}`);
  const translations = JSON.parse(await fs.readFile(path.join(output,'app/assets/locales',`locale-${locale}.json`),'utf8'));
  const folder = path.join(output,locale);
  await fs.mkdir(folder,{recursive:true});
  const context = await browser.newContext({viewport,deviceScaleFactor:2,locale:'en-GB'});
  const page = await context.newPage();
  const record = evidence.locales[locale] = {screenshots:[],errors:[],failedResponses:[],hiddenResultColumns:[]};
  page.on('pageerror',error=>record.errors.push(redact(error.message)));
  page.on('response',response=>{
    if(response.status()>=400) record.failedResponses.push({url:redact(response.url()),status:response.status()});
  });

  async function settle() {
    await page.evaluate(async()=>{
      await document.fonts.ready;
      const images=[...document.images].filter(image=>image.offsetParent&&image.src);
      await Promise.all(images.map(image=>image.complete?null:new Promise(resolve=>{
        image.addEventListener('load',resolve,{once:true});image.addEventListener('error',resolve,{once:true});
        setTimeout(resolve,10000);
      })));
      await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    });
    await page.waitForTimeout(700);
  }

  async function screen(name,note) {
    await settle();
    const filename=name+'.png';
    await page.screenshot({path:path.join(folder,filename),animations:'disabled'});
    record.screenshots.push({filename,route:new URL(page.url()).hash,note,size:viewport});
  }

  async function crop(name,locator,note) {
    await locator.scrollIntoViewIfNeeded();
    await settle();
    const filename=name+'.png';
    const bounds=await locator.boundingBox();
    await locator.screenshot({path:path.join(folder,filename),animations:'disabled'});
    record.screenshots.push({filename,route:new URL(page.url()).hash,note,bounds});
  }

  async function clip(name,bounds,note) {
    const filename=name+'.png';
    await page.screenshot({path:path.join(folder,filename),clip:bounds,animations:'disabled'});
    record.screenshots.push({filename,route:new URL(page.url()).hash,note,bounds});
  }

  async function region(name,locator,{padding=0,extraHeight=0,extraWidth=0}={},note) {
    await locator.scrollIntoViewIfNeeded();
    await settle();
    const box=await locator.boundingBox();
    const bounds={x:Math.max(0,box.x-padding),y:Math.max(0,box.y-padding),
      width:Math.min(viewport.width-Math.max(0,box.x-padding),box.width+padding*2+extraWidth),
      height:Math.min(viewport.height-Math.max(0,box.y-padding),box.height+padding*2+extraHeight)};
    await clip(name,bounds,note);
  }

  async function navigate(route,ready) {
    const link=page.locator(`#sidebar a[href="#/${route}"]`);
    if(await link.count()) {
      await link.click();
      await page.waitForFunction(expected=>location.hash===expected,'#/'+route);
    } else {
      await page.goto(origin+'/#/'+route,{waitUntil:'domcontentloaded'});
    }
    await page.locator(ready).first().waitFor({state:'visible'});
    await settle();
    await page.evaluate(()=>window.scrollTo(0,0));
  }

  try {
    await page.goto(origin+'/#/login',{waitUntil:'domcontentloaded'});
    await page.locator('#user').waitFor({state:'visible'});
    await page.locator('#user').fill('admin');
    await page.locator('.verticalcenter a[ng-click="logIn()"]').click();
    await page.waitForFunction(()=>location.hash==='#/'||location.hash==='#');
    await page.locator('[ng-controller="CountsCtrl"] .info-text').first().waitFor({state:'visible'});
    if(locale!=='en') {
      await page.locator('header.navbar > ul > li.dropdown > a.dropdown-toggle').filter({hasText:/^English/}).click();
      await page.locator('a[ng-click="changeLanguage(key)"]').filter({hasText:languageNames[locale]}).click();
      await page.locator('header.navbar > ul > li.dropdown > a.dropdown-toggle').filter({hasText:languageNames[locale]}).waitFor({state:'visible'});
      await settle();
    }
    record.languageControl = await page.locator('header.navbar > ul > li.dropdown > a.dropdown-toggle').allTextContents();
    await screen('web-dashboard','Current dashboard; local disposable Admin fixture, actual language selection and real Bactoserver status.');
    record.dashboardText=await page.locator('body').innerText();

    await navigate('results','[ui-grid="manualGridOptions"] .ui-grid-row');
    // The fixture data is historical: select the real translated All data range.
    await page.locator('button[daterangepicker]').first().click();
    await page.locator('.daterangepicker:visible .ranges li').filter({hasText:translations['ALL DATA']}).click();
    await page.waitForFunction(()=>{
      const plot=document.querySelector('.js-plotly-plot');
      return plot&&plot.data&&plot.data.some(series=>series.x&&series.x.length>1);
    });
    await page.evaluate(()=>window.scrollTo(0,0));
    await screen('web-results','Real Results trend with summary downloads and actual measurement rows; All data selected.');
    record.resultsText=await page.locator('body').innerText();
    const downloads=page.locator('a[download$="history_auto.xlsx"]').locator('xpath=ancestor::div[contains(concat(" ",normalize-space(@class)," ")," panel ")][1]');
    await crop('web-results-summary-downloads',downloads,'Download results panel with Online/Manual/Validation XLSX, CSV and PDF controls.');
    const zipForm=page.locator('button[ng-click="downloadZip(\'manual\')"]').locator('xpath=ancestor::form[1]');
    await zipForm.scrollIntoViewIfNeeded();
    await settle();
    const dateBox=await zipForm.locator('button[daterangepicker]').boundingBox();
    const zipBox=await zipForm.locator('button[ng-click="downloadZip(\'manual\')"]').boundingBox();
    await clip('web-results-zip-download',{x:dateBox.x-4,y:dateBox.y-4,width:zipBox.x+zipBox.width-dateBox.x+8,height:Math.max(dateBox.height,zipBox.height)+8},'Real Manual results date range and Download ZIP; no download submitted.');
    const manualGrid=page.locator('[ui-grid="manualGridOptions"]');
    await manualGrid.scrollIntoViewIfNeeded();
    // ui-grid gives Files only its 30px minimum with many metrics. Use the
    // product's Hide Column action to expose the existing img/fcs links.
    for(const metric of ['CBC','NBC','HACC','Gate+','ACC','TCC','LNAC']) {
      const header=manualGrid.locator('.ui-grid-header-cell').filter({hasText:new RegExp('^'+metric.replace('+','\\+')+'\\s')});
      if(!await header.count()) continue;
      await header.locator('.ui-grid-column-menu-button').click();
      await page.locator('.ui-grid-menu-mid:visible .ui-grid-menu-item').filter({has:page.locator('.ui-grid-icon-cancel')}).last().click();
      await header.waitFor({state:'detached'});
      record.hiddenResultColumns.push(metric);
    }
    await crop('web-results-table',manualGrid,'Actual Manual results table after hiding unnecessary metric columns using the product column menu.');
    const gridBox=await manualGrid.boundingBox();
    const hnapBox=await manualGrid.locator('.ui-grid-header-cell').filter({hasText:/^HNAP/}).boundingBox();
    const fcs=manualGrid.locator('a').filter({hasText:/^fcs$/}).first();
    const fcsBox=await fcs.boundingBox();
    if(fcsBox.x+fcsBox.width>gridBox.x+gridBox.width) throw new Error('FCS link remains clipped after column selection.');
    await clip('web-results-fcs-download',{x:hnapBox.x-4,y:gridBox.y,width:gridBox.x+gridBox.width-hnapBox.x+4,height:150},'Real HNAP results and complete img | fcs links from three actual measurements.');
    record.fcsBounds=fcsBox;

    await navigate('dotplots','[ng-controller="DotplotsCtrl"] img.img-responsive');
    await page.waitForFunction(()=>{
      const image=document.querySelector('[ng-controller="DotplotsCtrl"] img.img-responsive');
      return image&&image.complete&&image.naturalWidth>0;
    });
    await screen('web-dotplots','Current Plots page, actual archive summary plot with date slider and animation controls.');
    record.dotplotsText=await page.locator('body').innerText();
    await crop('web-dotplots-navigation',page.locator('[ng-controller="DotplotsCtrl"] .form-horizontal').first(),'Animation speed, Play, Rewind, Previous/Next, Download GIF and Download FCS.');
    await region('web-dotplots-date-slider',page.locator('.rzslider').locator('xpath=ancestor::div[contains(concat(" ",normalize-space(@class)," ")," form-group ")][1]'),{padding:0},'Current date slider with date labels and real fixture dates.');
    await crop('web-dotplots-play-button',page.locator('button[ng-click="toggleAnimation()"]').locator('xpath=parent::div'),'Actual idle Play and neighboring animation controls; animation remains stopped.');

    await navigate('settings','input[ng-model="auto.autoInterval"]');
    await screen('web-settings','Current settings page with actual automatic measurement interval.');
    record.settingsText=await page.locator('body').innerText();
    const intervalPanel=page.locator('input[ng-model="auto.autoInterval"]').locator('xpath=ancestor::div[contains(concat(" ",normalize-space(@class)," ")," panel ")][1]');
    await crop('web-settings-measurement-interval',intervalPanel,'Online sample name, measurement interval and Save; form untouched.');

    await navigate('diagnostics','button[ng-click="getScreenshot()"]');
    await screen('web-system-info','Current System info route, actual device information.');
    const screenshotPanel=page.locator('button[ng-click="getScreenshot()"]').locator('xpath=ancestor::div[contains(concat(" ",normalize-space(@class)," ")," panel ")][1]');
    await crop('web-system-info-get-screenshot',screenshotPanel,'Get screenshot on current System info; capture endpoint not invoked.');

    await navigate('','[ng-controller="CountsCtrl"] .info-text');
    const userLink=page.locator('a.dropdown-toggle').filter({hasText:/^Admin$/});
    await userLink.click();
    const rebootLink=page.locator('a[ng-click="openRebootModal()"]');
    await rebootLink.waitFor({state:'visible'});
    await settle();
    const userBox=await userLink.boundingBox();
    const menuBox=await rebootLink.locator('xpath=ancestor::ul[contains(concat(" ",normalize-space(@class)," ")," userinfo ")][1]').boundingBox();
    const left=Math.max(0,Math.min(userBox.x,menuBox.x)-12);
    const top=Math.max(0,Math.min(userBox.y,menuBox.y)-12);
    const right=Math.min(viewport.width,Math.max(userBox.x+userBox.width,menuBox.x+menuBox.width)+12);
    const bottom=Math.min(viewport.height,Math.max(userBox.y+userBox.height,menuBox.y+menuBox.height)+12);
    await clip('web-user-reboot-menu',{x:left,y:top,width:right-left,height:bottom-top},'Actual Admin control and open menu with Reboot/Sign out; no reboot invoked.');
    console.log(`Captured ${locale}: ${record.screenshots.length} screenshots, ${record.errors.length} browser errors.`);
  } catch(error) {
    record.failure={message:error.message,route:new URL(page.url()).hash};
    await page.screenshot({path:path.join(folder,'capture-failure.png'),fullPage:true});
    throw error;
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
