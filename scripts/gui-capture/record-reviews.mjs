// Record visual reviews in maintenance/gui-screenshots.json.
//   node scripts/gui-capture/record-reviews.mjs verdicts.json [--reviewer NAME] [--method TEXT]
// verdicts.json: [{id, status: "pass" | "fail", sha256, note}]. A verdict counts only for
// the exact rendered image it names: its sha256 must equal the figure's current render.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(root, 'maintenance/gui-screenshots.json');
const args = process.argv.slice(2);
const option = name => { const index = args.indexOf(name); return index < 0 ? undefined : args.splice(index, 2)[1]; };
const reviewer = option('--reviewer') || 'manual maintainer';
const method = option('--method') || 'individual visual inspection of the final rendered image';
if (args.length !== 1) throw new Error('Usage: record-reviews.mjs verdicts.json [--reviewer NAME] [--method TEXT]');
const verdicts = JSON.parse(await readFile(path.resolve(args[0]), 'utf8'));
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const reviewedAt = new Date().toISOString();
let recorded = 0;
const failures = [];
for (const verdict of verdicts) {
  const figure = manifest.figures.find(row => row.id === verdict.id);
  if (!figure) throw new Error(`Unknown figure ${verdict.id}.`);
  if (verdict.sha256 !== figure.sha256) throw new Error(`${verdict.id}: the verdict is for another render; review the current image.`);
  if (verdict.status !== 'pass') { failures.push(`${verdict.id}: ${verdict.note}`); continue; }
  figure.review = { status: 'reviewed', sha256: figure.sha256, reviewedAt, reviewer, method, notes: verdict.note };
  recorded++;
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Recorded ${recorded} reviews.${failures.length ? ` Not recorded (failed):\n${failures.join('\n')}` : ''}`);
