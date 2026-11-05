import { spawn } from 'node:child_process';
import { readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publishApacheSite } from './publish-apache.mjs';
import { principal, sourceLocale } from '../plugins/manuals.cjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arguments_ = process.argv.slice(2);
const localeOnly = arguments_.some((argument) => argument === '--locale' || argument.startsWith('--locale='));
const requestedLocales = arguments_.flatMap((argument, index) => argument.startsWith('--locale=')
  ? [argument.slice('--locale='.length)] : argument === '--locale' && arguments_[index + 1] ? [arguments_[index + 1]] : []);
// Docusaurus' SSR evaluator reads Node globals. Browser storage is unnecessary
// during builds, and newer Node releases warn when it has no backing file.
const runtimeFlags = process.allowedNodeEnvironmentFlags.has('--no-experimental-webstorage')
  ? ['--no-experimental-webstorage']
  : [];

try {
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [
      ...runtimeFlags,
      path.join(root, 'node_modules/@docusaurus/core/bin/docusaurus.mjs'),
      'build', ...arguments_,
    ], { cwd: root, stdio: 'inherit' });
    child.once('error', reject);
    child.once('close', (status) => resolve(status ?? 1));
  });
  if (localeOnly) {
    // A single-language build is served at "/", and Docusaurus caches its CSS with
    // root-absolute font URLs under the same webpack cache names as the full build.
    // Drop that language's production cache so the next full build recompiles it.
    for (const locale of requestedLocales) for (const side of ['client', 'server']) {
      await rm(path.join(root, 'node_modules/.cache/webpack', `${side}-production-${locale}`), { recursive: true, force: true });
    }
  }
  if (code !== 0) {
    process.exitCode = code;
  } else if (localeOnly) {
    console.log('Language build complete. Run npm run build without --locale to refresh the complete public/ deployment.');
  } else {
    const manifest = JSON.parse(await readFile(path.join(root, 'output/pdf', principal.id, sourceLocale, 'manifest.json'), 'utf8'));
    await publishApacheSite(root, manifest);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
