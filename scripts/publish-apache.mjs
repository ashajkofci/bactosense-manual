import { cp, mkdtemp, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function publishApacheSite(root, manifest) {
  const source = path.resolve(root, manifest.outDir);
  const destination = path.join(root, 'public');
  if (source === destination || source.startsWith(`${destination}${path.sep}`)) {
    throw new Error('Build into build/ or another temporary directory; public/ is the generated Apache deployment.');
  }
  for (const file of ['index.html', '404.html', 'pdf/bactosense-manual-en.pdf']) {
    if (!(await stat(path.join(source, file))).isFile()) throw new Error(`Missing deployment file: ${file}`);
  }
  const entries = await readdir(source);
  if (!entries.some((file) => /^search-index.*\.json$/.test(file))) {
    throw new Error('The Apache deployment requires the generated search index.');
  }
  const template = await readFile(path.join(root, 'apache/public.htaccess'), 'utf8');
  const staging = await mkdtemp(path.join(root, '.public-build-'));
  const previous = `${staging}-previous`;
  let published = false;
  try {
    await cp(source, staging, {
      recursive: true,
      filter: (file) => path.basename(file) !== '.DS_Store' && !file.endsWith('.tmp'),
    });
    await writeFile(path.join(staging, '.htaccess'), template.replaceAll('__MANUAL_BASE_PATH__', manifest.baseUrl));
    let movedPrevious = false;
    try {
      await rename(destination, previous);
      movedPrevious = true;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    try {
      await rename(staging, destination);
      published = true;
    } catch (error) {
      if (movedPrevious) await rename(previous, destination);
      throw error;
    }
    console.log(`Apache deployment ready in public/ for ${new URL(manifest.baseUrl, manifest.siteUrl).href}`);
  } finally {
    await rm(staging, { recursive: true, force: true, maxRetries: 5 });
    if (published) await rm(previous, { recursive: true, force: true, maxRetries: 5 });
  }
}
