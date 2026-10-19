import { spawn } from 'node:child_process';
import { cp, readFile, access, mkdir, rename, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeDeviceManualResources } from './export-device-manual.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (args.length && (args[0] !== '--gui' || args.length !== 2)) {
  console.error('Usage: npm run manual:device -- [--gui ../gui]');
  process.exit(1);
}
const gui = args[0] === '--gui' ? path.resolve(args[1]) : null;
if (gui) await access(path.join(gui, 'gui.pro'));
const configuration = createRequire(import.meta.url)(path.join(root, 'docusaurus.config.js'));
const locales = configuration.i18n.locales;
if (!locales.includes('en') || locales.some(locale => !/^[a-z]{2}(?:-[a-z0-9]+)*$/i.test(locale)))
  throw new Error('Device manual requires an English fallback and valid configured language IDs.');
const bundle = path.join(root, 'output/device-manual');
const staging = `${bundle}.tmp`;
await rm(staging, { recursive: true, force: true });
await mkdir(staging, { recursive: true });
const flags = process.allowedNodeEnvironmentFlags.has('--no-experimental-webstorage') ? ['--no-experimental-webstorage'] : [];
const code = await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [...flags, path.join(root, 'node_modules/@docusaurus/core/bin/docusaurus.mjs'),
    'build', '--out-dir', 'output/device-site'], {
    cwd: root, stdio: 'inherit', env: { ...process.env, MANUAL_DEVICE_ONLY: '1', MANUAL_DEVICE_EXPORT_DIR: staging },
  });
  child.once('error', reject);
  child.once('close', status => resolve(status ?? 1));
});
if (code !== 0) process.exit(code);
const reports = [];
for (const locale of locales) {
  const report = JSON.parse(await readFile(path.join(staging, locale, 'report.json'), 'utf8'));
  if (report.locale !== locale || !report.chapterCount) throw new Error(`Device export is incomplete: ${locale}`);
  reports.push(report);
}
await writeDeviceManualResources(staging, locales);
await rm(bundle, { recursive: true, force: true });
await rename(staging, bundle);
if (gui) {
  // Replace the configured generated languages only. Keep README and unrelated
  // checkout files; verify all existing indices before beginning installation.
  for (const locale of locales) {
    const previous = await readFile(path.join(gui, 'manual', locale, 'index.json'), 'utf8').catch(error => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
    if (previous && JSON.parse(previous).schemaVersion !== 1)
      throw new Error(`Unknown existing GUI manual bundle (${locale}); refusing to replace it.`);
  }
  for (const locale of locales) {
    await rm(path.join(gui, 'manual', locale), { recursive: true, force: true });
    await cp(path.join(bundle, locale), path.join(gui, 'manual', locale), { recursive: true });
  }
  await cp(path.join(bundle, 'manual.qrc'), path.join(gui, 'manual/manual.qrc'));
  await cp(path.join(bundle, 'locales.json'), path.join(gui, 'manual/locales.json'));
  console.log(`Installed ${reports.reduce((count, report) => count + report.chapterCount, 0)} chapters in ${locales.length} languages (${locales.join(', ')}) in ${path.join(gui, 'manual')}. The GUI build copies every manual beside the executable; none is embedded.`);
} else {
  console.log(`Device bundle (${locales.join(', ')}): ${bundle}`);
}
