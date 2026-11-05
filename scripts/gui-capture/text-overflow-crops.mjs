// Crop each text-overflow finding (runtime/text_overflow.py report) from its capture for visual review.
// Red: painted text. Blue: the text box. Green: its nearest container. Output: output/gui-capture/text-overflow/crops/.
import { mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '../..');
const folder = path.join(root, 'output/gui-capture/text-overflow');
const {findings} = JSON.parse(await readFile(path.join(folder, 'report.json'), 'utf8'));
const kinds = process.argv.slice(2);
await rm(path.join(folder, 'crops'), {recursive: true, force: true});
await mkdir(path.join(folder, 'crops'), {recursive: true});
const seen = new Set();
let written = 0;
for (const finding of findings) {
  if (kinds.length && !kinds.includes(finding.kind)) continue;
  const key = `${finding.kind}|${finding.state}|${finding.locale}|${finding.box.map(Math.round)}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const container = finding.ancestors.find(a => a.width > 1 && a.height > 1 && !a.type.includes('Text'));
  const rects = [['#d00', finding.painted], ['#06f', finding.box]];
  if (container) rects.push(['#090', [container.x, container.y, container.x + container.width, container.y + container.height]]);
  const near = rects.slice(0, 2).map(([, r]) => r);
  const x0 = Math.max(0, Math.min(...near.map(r => r[0])) - 40), y0 = Math.max(0, Math.min(...near.map(r => r[1])) - 30);
  const x1 = Math.min(800, Math.max(...near.map(r => r[2])) + 40), y1 = Math.min(480, Math.max(...near.map(r => r[3])) + 30);
  const s = 2, width = Math.round((x1 - x0) * s), height = Math.round((y1 - y0) * s);
  if (width < 4 || height < 4) continue;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${rects.map(([color, r]) =>
    `<rect x="${(r[0] - x0) * s}" y="${(r[1] - y0) * s}" width="${(r[2] - r[0]) * s}" height="${(r[3] - r[1]) * s}" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="${color === '#090' ? '6 4' : ''}"/>`).join('')}</svg>`;
  const name = `${String(written).padStart(3, '0')}-${finding.kind}-${finding.state}-${finding.locale}.png`;
  await sharp(path.join(root, finding.capture)).extract({left: Math.round(x0 * s), top: Math.round(y0 * s), width, height})
    .composite([{input: Buffer.from(svg)}]).png().toFile(path.join(folder, 'crops', name));
  written++;
}
console.log(`Wrote ${written} crops to ${path.relative(root, path.join(folder, 'crops'))}`);
