import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(root, 'maintenance/gui-screenshots.json');
const sha256 = data => createHash('sha256').update(data).digest('hex');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const args = process.argv.slice(2);
const requested = args.filter(arg => !arg.startsWith('--'));
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const selected = manifest.figures.filter(figure => !requested.length || requested.includes(figure.id));
if (!selected.length) throw new Error('No matching GUI figures.');
const browser = await chromium.launch({ headless: true });
const rendered = [];
try {
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  for (const figure of selected) {
    const panels = figure.panels || [{ capture: figure.capture, captureSize: figure.captureSize, crop: figure.crop, at: [0, 0] }];
    const inputs = [];
    let width = figure.canvasSize?.[0] || 0, height = figure.canvasSize?.[1] || 0;
    for (const panel of panels) {
      const input = await readFile(path.resolve(root, panel.capture));
      if (input.subarray(1, 4).toString() !== 'PNG') throw new Error(`${figure.id}: capture must be a PNG.`);
      const naturalWidth = input.readUInt32BE(16), naturalHeight = input.readUInt32BE(20);
      const [logicalWidth, logicalHeight] = panel.captureSize || [800, 480];
      if (Math.abs(naturalWidth / naturalHeight - logicalWidth / logicalHeight) > 0.01) throw new Error(`${figure.id}: unexpected capture aspect ratio.`);
      const [cropX, cropY, cropWidth, cropHeight] = panel.crop || [0, 0, logicalWidth, logicalHeight];
      if (cropX < 0 || cropY < 0 || cropX + cropWidth > logicalWidth || cropY + cropHeight > logicalHeight) throw new Error(`${figure.id}: crop is outside the current screen.`);
      const [x, y] = panel.at || [0, 0];
      const [displayWidth, displayHeight] = panel.displaySize || [cropWidth, cropHeight];
      if (Math.abs(displayWidth / displayHeight - cropWidth / cropHeight) > 0.01) throw new Error(`${figure.id}: do not stretch a screenshot panel.`);
      width = Math.max(width, x + displayWidth);
      height = Math.max(height, y + displayHeight);
      inputs.push({ input, logicalWidth, logicalHeight, cropX, cropY, cropWidth, cropHeight, x, y, displayWidth, displayHeight });
    }
    const [left, top, right, bottom] = figure.padding || (figure.callouts?.length || figure.regions?.length ? [44, 44, 44, 44] : [0, 0, 0, 0]);
    const outputWidth = Math.ceil(left + width + right), outputHeight = Math.ceil(top + height + bottom);
    let marks = '';
    for (const region of figure.regions || []) {
      const [x, y, w, h] = region.box;
      marks += `<rect x="${left + x}" y="${top + y}" width="${w}" height="${h}" rx="4" fill="none" stroke="#b82230" stroke-width="2"/>`;
      if (region.label) marks += `<text x="${left + width + 18}" y="${top + y + h / 2 + 6}" fill="#b82230" font-size="20" font-weight="700">${escape(region.label)}</text>`;
    }
    for (const callout of figure.callouts || []) {
      const [x, y] = callout.at, [targetX, targetY] = callout.target;
      if (targetX < 0 || targetY < 0 || targetX > width || targetY > height) throw new Error(`${figure.id}: callout ${callout.label} target is outside its crop.`);
      const ax = left + x, ay = top + y, tx = left + targetX, ty = top + targetY;
      if (ax < 14 || ay < 14 || ax > outputWidth - 14 || ay > outputHeight - 14) throw new Error(`${figure.id}: callout ${callout.label} badge is clipped.`);
      const bends = (callout.via || []).map(([vx, vy]) => `${left + vx},${top + vy}`);
      marks += `<polyline points="${[[ax, ay].join(','), ...bends, [tx, ty].join(',')].join(' ')}" fill="none" stroke="#234f6b" stroke-width="1.5" stroke-linejoin="round"/>`;
      marks += `<circle cx="${tx}" cy="${ty}" r="3" fill="#234f6b" stroke="#fff" stroke-width="1"/>`;
      marks += `<circle cx="${ax}" cy="${ay}" r="13" fill="#fff" stroke="#234f6b" stroke-width="1.5"/>`;
      marks += `<text x="${ax}" y="${ay + 5.5}" text-anchor="middle" fill="#163d56" font-size="17" font-weight="600">${escape(callout.label)}</text>`;
    }
    for (const arrow of figure.arrows || []) {
      const [x, y] = arrow.from, [tx, ty] = arrow.to;
      const angle = Math.atan2(ty - y, tx - x), length = 11;
      const points = [[left + tx, top + ty], [left + tx - length * Math.cos(angle - 0.45), top + ty - length * Math.sin(angle - 0.45)], [left + tx - length * Math.cos(angle + 0.45), top + ty - length * Math.sin(angle + 0.45)]];
      marks += `<line x1="${left + x}" y1="${top + y}" x2="${left + tx}" y2="${top + ty}" stroke="#fff" stroke-width="5"/><line x1="${left + x}" y1="${top + y}" x2="${left + tx}" y2="${top + ty}" stroke="#b82230" stroke-width="2.5"/><polygon points="${points.map(p => p.join(',')).join(' ')}" fill="#b82230" stroke="#fff" stroke-width="0.6"/>`;
    }
    for (const box of figure.highlights || []) {
      const [x, y, w, h] = box;
      marks += `<rect x="${left + x}" y="${top + y}" width="${w}" height="${h}" rx="3" fill="none" stroke="#b82230" stroke-width="2"/>`;
    }
    for (const label of figure.textLabels || []) {
      const [x, y] = label.at;
      marks += `<text x="${left + x}" y="${top + y}" text-anchor="middle" fill="#163d56" font-size="17" font-weight="600">${escape(label.text)}</text>`;
    }
    const screenshots = inputs.map((panel, index) => {
      const { input, logicalWidth, logicalHeight, cropX, cropY, cropWidth, cropHeight, x, y, displayWidth, displayHeight } = panel;
      return `<svg x="${left + x}" y="${top + y}" width="${displayWidth}" height="${displayHeight}" viewBox="${cropX} ${cropY} ${cropWidth} ${cropHeight}" overflow="hidden"><image width="${logicalWidth}" height="${logicalHeight}" href="data:image/png;base64,${input.toString('base64')}"/></svg>`;
    }).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${outputWidth}" height="${outputHeight}" viewBox="0 0 ${outputWidth} ${outputHeight}"><title>${escape(figure.alt)}</title><rect width="100%" height="100%" fill="#fff"/>${screenshots}${marks}</svg>`;
    await page.setViewportSize({ width: outputWidth, height: outputHeight });
    await page.setContent(`<!doctype html><meta charset="utf-8"><style>html,body{margin:0;line-height:0}svg{display:block;font-family:Arial,sans-serif}</style>${svg}`);
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.querySelectorAll('image')].map(node => new Promise((resolve, reject) => { const image = new Image(); image.onload = resolve; image.onerror = reject; image.src = node.getAttribute('href'); }))); });
    const output = path.join(root, 'static', figure.output);
    await mkdir(path.dirname(output), { recursive: true });
    const bytes = await page.screenshot({ path: output, animations: 'disabled' });
    figure.inputSha256 = sha256(Buffer.concat(inputs.map(panel => panel.input)));
    figure.sha256 = sha256(bytes);
    figure.pixelSize = [outputWidth * 2, outputHeight * 2];
    rendered.push({ id: figure.id, output: figure.output, sha256: figure.sha256, pixelSize: figure.pixelSize });
  }
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const reportDir = path.join(root, 'output/gui-capture');
  await mkdir(reportDir, { recursive: true });
  await writeFile(path.join(reportDir, 'render-report.json'), `${JSON.stringify({ renderedAt: new Date().toISOString(), figures: rendered }, null, 2)}\n`);
  console.log(`Rendered ${rendered.length} current GUI figures with ${rendered.reduce((n, row) => n + (manifest.figures.find(f => f.id === row.id).callouts?.length || 0), 0)} labeled callouts.`);
} finally {
  await browser.close();
}
