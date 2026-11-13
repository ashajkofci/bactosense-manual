import { spawn } from 'node:child_process';
import { copyFile, readdir, readFile, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { contentDirectory, pdfFile, principal, sourceLocale } from '../plugins/manuals.cjs';

// Installs the exported BactoSense user manual PDFs as the static downloads of
// the instrument web interface (bactoweb, Help page, INSTRUCTION MANUAL row).
// Build the manual first (npm run build); this script never builds anything.
// --optimize recompresses the images with Ghostscript (150 dpi), which keeps the
// links, bookmarks and fonts but cuts the 22 MiB Chromium PDFs to about 6 MiB.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const usage = 'Usage: npm run manual:web -- [--bactoweb <path>] [--locales en,de,fr] [--from public|output] [--optimize] [--dry-run]';

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

const options = { bactoweb: path.resolve(root, '../bactoweb'), locales: Object.keys(targets), from: 'public', optimize: false, dryRun: false };
const args = process.argv.slice(2);
for (let index = 0; index < args.length; index++) {
  const [name, inline] = args[index].split(/=(.*)/s);
  const value = () => inline ?? args[++index] ?? fail(`${name} needs a value.\n${usage}`);
  if (name === '--bactoweb') options.bactoweb = path.resolve(value());
  else if (name === '--locales') options.locales = value().split(',').filter(Boolean);
  else if (name === '--from') options.from = value();
  else if (name === '--optimize') options.optimize = true;
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

async function ghostscript(input, output) {
  const candidates = process.platform === 'win32' ? ['gswin64c.exe', 'gswin32c.exe', 'gs'] : ['gs'];
  if (process.platform === 'win32') {
    const roots = new Set([process.env.ProgramW6432, process.env.ProgramFiles, process.env['ProgramFiles(x86)']].filter(Boolean));
    for (const directory of roots) {
      const installations = await readdir(path.join(directory, 'gs')).catch(error => {
        if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return [];
        throw error;
      });
      installations.sort((left, right) => right.localeCompare(left, undefined, { numeric: true }));
      for (const installation of installations) {
        for (const executable of ['gswin64c.exe', 'gswin32c.exe']) {
          candidates.push(path.join(directory, 'gs', installation, 'bin', executable));
        }
      }
    }
  }
  for (const executable of candidates) {
    try {
      await new Promise((resolve, reject) => {
        const child = spawn(executable, ['-q', '-dNOPAUSE', '-dBATCH', '-dSAFER', '-sDEVICE=pdfwrite', '-dCompatibilityLevel=1.5',
          '-dPDFSETTINGS=/ebook', `-sOutputFile=${output}`, input], { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true });
        // Skia PDFs make Ghostscript repeat a harmless blending-colour-space warning for every page; show stderr only on failure.
        let errors = '';
        child.stderr.on('data', chunk => { errors = (errors + chunk).slice(-2000); });
        child.once('error', reject);
        child.once('close', status => status === 0 ? resolve() : reject(new Error(`Ghostscript failed with status ${status}.\n${errors}`)));
      });
      return;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  throw new Error(process.platform === 'win32'
    ? 'Ghostscript is required for --optimize. Install Ghostscript for Windows from https://ghostscript.com/releases/gsdnld.html (standard Program Files installation), add gswin64c.exe or gswin32c.exe to PATH, or omit --optimize.'
    : 'Ghostscript (gs) is required for --optimize. Install it (brew install ghostscript) or omit --optimize.');
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
  let note = options.optimize && options.dryRun ? ' (would optimize)' : '';
  if (!options.dryRun) {
    const temporary = `${item.destination}.tmp`;
    let failure;
    try {
      if (options.optimize) {
        await ghostscript(item.source, temporary);
        const optimized = await readFile(temporary);
        let pages;
        try { pages = inspectPdf(optimized); } catch (error) { throw new Error(`Optimized ${item.locale} PDF is invalid: ${error.message}.`); }
        if (pages !== item.pages) throw new Error(`Optimized ${item.locale} PDF has ${pages} pages instead of ${item.pages}.`);
        if (optimized.length < item.size) { item.size = optimized.length; note = ' (optimized)'; }
        else { await copyFile(item.source, temporary); note = ' (optimization did not reduce it; copied as is)'; }
      } else {
        await copyFile(item.source, temporary);
      }
      await rename(temporary, item.destination);
    } catch (error) {
      failure = error;
    } finally {
      await rm(temporary, { force: true });
    }
    // Report after the temporary file is gone; earlier languages stay installed.
    if (failure) fail(`${item.locale}: ${failure.message}`);
  }
  console.log(`${item.locale}  ${path.basename(item.destination)}  ${item.pages} pages  ${item.previous === null ? 'new' : formatSize(item.previous)} -> ${formatSize(item.size)}${note}`);
}
console.log(`${options.dryRun ? 'Would install' : 'Installed'} ${plan.length} user manual PDF(s) from ${options.from}/ into ${appDirectory}. Quick guides were not touched; review and commit the change in bactoweb.`);
