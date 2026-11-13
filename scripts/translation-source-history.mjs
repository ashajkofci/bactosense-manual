import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';
import { sourceHash } from './translation-patches.mjs';

const exec = promisify(execFile);

// Recover legacy SHA-256 baselines from Git blobs, including file renames. No Git writes.
export function createSourceHistory(root) {
  const cache = new Map();
  async function versions(filename) {
    let raw;
    try {
      ({ stdout: raw } = await exec('git', ['log', '--follow', '--format=', '--raw', '--no-abbrev', '--', filename], {
        cwd: root, encoding: 'utf8', timeout: 30_000, maxBuffer: 8 * 1024 * 1024, windowsHide: true,
      }));
    } catch { return new Map(); }
    const ids = [...new Set([...raw.matchAll(/^:\d{6} \d{6} ([a-f0-9]+) ([a-f0-9]+) /gm)]
      .flatMap(match => [match[1], match[2]]).filter(id => !/^0+$/.test(id)))];
    if (!ids.length) return new Map();
    const data = await new Promise((resolve, reject) => {
      const child = spawn('git', ['cat-file', '--batch'], { cwd: root, windowsHide: true, stdio: ['pipe', 'pipe', 'ignore'] });
      const chunks = [];
      let size = 0;
      const timer = setTimeout(() => { child.kill(); reject(new Error('Git source lookup timed out.')); }, 30_000);
      child.on('error', reject);
      child.stdout.on('data', chunk => {
        size += chunk.length;
        if (size > 64 * 1024 * 1024) { child.kill(); reject(new Error('Git source history exceeds the lookup limit.')); }
        else chunks.push(chunk);
      });
      child.on('close', code => {
        clearTimeout(timer);
        if (code) reject(new Error('Could not read Git source history.'));
        else resolve(Buffer.concat(chunks));
      });
      child.stdin.on('error', reject);
      child.stdin.end(ids.join('\n') + '\n');
    });
    const result = new Map();
    for (let at = 0; at < data.length;) {
      const end = data.indexOf(10, at);
      if (end < 0) break;
      const header = data.subarray(at, end).toString('utf8').match(/^\S+ blob (\d+)$/);
      if (!header) break;
      const size = Number(header[1]);
      const text = data.subarray(end + 1, end + 1 + size).toString('utf8').replace(/\r\n/g, '\n');
      result.set(sourceHash(text), text);
      at = end + 1 + size + 1;
    }
    return result;
  }
  return async (filename, hash) => {
    if (!hash) return null;
    if (!cache.has(filename)) cache.set(filename, versions(filename));
    return (await cache.get(filename)).get(hash) ?? null;
  };
}
