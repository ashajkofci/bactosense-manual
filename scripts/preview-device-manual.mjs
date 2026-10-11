import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
try {
  await access(path.join(root, '../gui/manual/en/index.json'));
  await access(path.join(root, '../gui/views/manual/ManualReader.qml'));
} catch {
  console.error('Build and install the device bundle first: npm run manual:device -- --gui ../gui');
  process.exit(1);
}
const qmlscene = process.env.QMLSCENE || (process.platform === 'darwin' ? '/opt/homebrew/opt/qt@5/bin/qmlscene' : 'qmlscene');
const child = spawn(qmlscene, [path.join(root, 'scripts/device-prototype/preview.qml')], {
  cwd: root, stdio: 'inherit', env: { ...process.env, QML_XHR_ALLOW_FILE_READ: '1' },
});
child.once('error', error => {
  console.error(`Could not start Qt 5 qmlscene: ${error.message}. Set QMLSCENE to your Qt installation's qmlscene executable.`);
  process.exitCode = 1;
});
child.once('exit', code => { process.exitCode = code ?? 1; });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
