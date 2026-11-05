import { copyFile, readdir, readFile, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { contentDirectory, pdfFile, principal, sourceLocale } from '../plugins/manuals.cjs';

// Installs the exported BactoSense user manual PDFs as the static downloads of
// the instrument web interface (bactoweb, Help page, INSTRUCTION MANUAL row).
// Build the manual first (npm run build); this script never builds anything.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const usage = 'Usage: npm run manual:web -- [--bactoweb <path>] [--locales en,de,fr] [--from public|output] [--dry-run]';

// Download names referenced by bactoweb/app/views/help.html. Quick guides
// (UM_40101-*) are separate documents and are not part of this export.
const targets = {
  en: 'UM_0006-EN_BactoSense_User_Manual.pdf',
  de: 'UM_0006-DE_BactoSense_Bedienungsanleitung.pdf',
  fr: "UM_0006-FR_BactoSense_Manuel_d'Utilisation.pdf",
};

function fail(message) {
  console.error(message);
  process.exit(1);
}

const options = { bactoweb: path.resolve(root, '../bactoweb'), locales: Object.keys(targets), from: 'public', dryRun: false };
const args = process.argv.slice(2);
for (let index = 0; index < args.length; index++) {
  const [name, inline] = args[index].split(/=(.*)/s);
  const value = () => inline ?? args[++index] ?? fail(`${name} needs a value.\n${usage}`);
  if (name === '--bactoweb') options.bactoweb = path.resolve(value());
  else if (name === '--locales') options.locales = value().split(',').filter(Boolean);
  else if (name === '--from') options.from = value();
  else if (name === '--dry-run') options.dryRun = true;
  else fail(usage);
}
if (!['public', 'output'].includes(options.from)) fail(usage);
const unknown = options.locales.filter(locale => !targets[locale]);
if (!options.locales.length || unknown.length) fail(`Unsupported language: ${unknown.join(', ') || '(none)'}. bactoweb offers ${Object.keys(targets).join(', ')}.`);

const appDirectory = path.join(options.bactoweb, 'app');
const helpPage = await readFile(path.join(appDirectory, 'views/help.html'), 'utf8').catch(() => null);
if (helpPage === null) fail(`Cannot read ${path.join(appDirectory, 'views/help.html')}. Use --bactoweb <path> to select the bactoweb checkout.`);
for (const locale of options.locales) {
  if (!helpPage.includes(targets[locale])) fail(`bactoweb's Help page no longer lists ${targets[locale]}; update targets in scripts/publish-bactoweb.mjs.`);
}

// public/ is the committed deployment (English at its root); output/ is the latest local build.
const sourceFile = locale => options.from === 'output'
  ? path.join(root, 'output/pdf', principal.id, locale, pdfFile(principal, locale))
  : path.join(root, 'public', locale === sourceLocale ? '' : locale, 'pdf', pdfFile(principal, locale));

async function newestChange(locale) {
  const directories = [contentDirectory(principal, locale), 'static/img/manual', path.join('static/img/gui', locale)];
  let newest = { time: 0, file: '' };
  for (const directory of directories) {
    const entries = await readdir(path.join(root, directory), { recursive: true, withFileTypes: true }).catch(error => {
      if (error.code === 'ENOENT') return [];
      throw error;
    });
    for (const entry of entries) {
      // Other manuals' artwork shares static/img/gui and must not mark this edition stale.
      if (!entry.isFile() || entry.name === '.DS_Store' || /bactoswitch/i.test(entry.name)) continue;
      const file = path.join(entry.parentPath, entry.name);
      const { mtimeMs } = await stat(file);
      if (mtimeMs > newest.time) newest = { time: mtimeMs, file: path.relative(root, file) };
    }
  }
  return newest;
}

function inspectPdf(bytes) {
  const text = bytes.toString('latin1');
  if (!text.startsWith('%PDF-') || !text.slice(-1024).includes('%%EOF')) throw new Error('not a complete PDF file');
  const pages = (text.match(/\/Type\s*\/Page(?![\w])/g) ?? []).length;
  if (!pages) throw new Error('no pages found');
  return pages;
}

const formatSize = bytes => `${(bytes / 1048576).toFixed(1)} MiB`;
const plan = [];
for (const locale of options.locales) {
  const source = sourceFile(locale);
  const bytes = await readFile(source).catch(() => null);
  if (bytes === null) fail(`Missing ${path.relative(root, source)}. Run npm run build first${options.from === 'public' ? ' (a full build refreshes public/), or use --from output after a --locale build' : ''}.`);
  let pages;
  try { pages = inspectPdf(bytes); } catch (error) { fail(`${path.relative(root, source)}: ${error.message}.`); }
  const built = (await stat(source)).mtimeMs;
  const changed = await newestChange(locale);
  if (changed.time > built) console.warn(`Warning (${locale}): ${changed.file} is newer than ${path.relative(root, source)}. Run npm run build to include it.`);
  const destination = path.join(appDirectory, targets[locale]);
  const previous = await stat(destination).then(item => item.size, () => null);
  plan.push({ locale, source, destination, pages, size: bytes.length, previous });
}

for (const item of plan) {
  if (!options.dryRun) {
    const temporary = `${item.destination}.tmp`;
    try {
      await copyFile(item.source, temporary);
      await rename(temporary, item.destination);
    } finally {
      await rm(temporary, { force: true });
    }
  }
  console.log(`${item.locale}  ${path.basename(item.destination)}  ${item.pages} pages  ${item.previous === null ? 'new' : formatSize(item.previous)} -> ${formatSize(item.size)}`);
}
console.log(`${options.dryRun ? 'Would install' : 'Installed'} ${plan.length} user manual PDF(s) from ${options.from}/ into ${appDirectory}. Quick guides were not touched; review and commit the change in bactoweb.`);
