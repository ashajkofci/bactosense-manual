import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publishApacheSite } from './publish-apache.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arguments_ = process.argv.slice(2);
const localeOnly = arguments_.some((argument) => argument === '--locale' || argument.startsWith('--locale='));
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
  if (code !== 0) {
    process.exitCode = code;
  } else if (localeOnly) {
    console.log('Language build complete. Run npm run build without --locale to refresh the complete public/ deployment.');
  } else {
    const manifest = JSON.parse(await readFile(path.join(root, 'output/pdf/en/manifest.json'), 'utf8'));
    await publishApacheSite(root, manifest);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
