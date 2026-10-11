import { spawn } from 'node:child_process';
import { cp, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (args.length && (args[0] !== '--gui' || args.length !== 2)) {
  console.error('Usage: npm run manual:device -- [--gui ../gui]');
  process.exit(1);
}
const gui = args[0] === '--gui' ? path.resolve(args[1]) : null;
if (gui) await access(path.join(gui, 'gui.pro'));
const flags = process.allowedNodeEnvironmentFlags.has('--no-experimental-webstorage') ? ['--no-experimental-webstorage'] : [];
const code = await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [...flags, path.join(root, 'node_modules/@docusaurus/core/bin/docusaurus.mjs'),
    'build', '--locale', 'en', '--out-dir', 'output/device-site'], {
    cwd: root, stdio: 'inherit', env: { ...process.env, MANUAL_DEVICE_ONLY: '1' },
  });
  child.once('error', reject);
  child.once('close', status => resolve(status ?? 1));
});
if (code !== 0) process.exit(code);
const bundle = path.join(root, 'output/device-site/device-manual');
const report = JSON.parse(await readFile(path.join(bundle, 'en/report.json'), 'utf8'));
if (report.locale !== 'en' || !report.chapterCount) throw new Error('English device export is incomplete.');
if (gui) {
  // Update only generated manual files; retain GUI source and other locales.
  const index = path.join(gui, 'manual/en/index.json');
  const previous = await readFile(index, 'utf8').catch(error => {
    if (error.code === 'ENOENT') return null;
    throw error;
  });
  if (previous && JSON.parse(previous).schemaVersion !== 1) throw new Error('Unknown existing GUI manual bundle; refusing to replace it.');
  const { rm } = await import('node:fs/promises');
  await rm(path.join(gui, 'manual/en'), { recursive: true, force: true });
  await cp(path.join(bundle, 'en'), path.join(gui, 'manual/en'), { recursive: true });
  await cp(path.join(bundle, 'manual.qrc'), path.join(gui, 'manual/manual.qrc'));
  console.log(`Installed ${report.chapterCount} English chapters in ${path.join(gui, 'manual')}. Rebuild the GUI to embed them.`);
} else {
  console.log(`English device bundle: ${bundle}`);
}
