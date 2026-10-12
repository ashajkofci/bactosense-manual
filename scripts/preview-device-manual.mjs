import { spawn } from 'node:child_process';
import { access, cp, mkdir, readFile, readdir, symlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== '--locale')) {
  console.error('Usage: npm run manual:preview -- [--locale en|de|fr|it|es]');
  process.exit(1);
}
const locale = args.length ? args[1] : '';
try {
  await access(path.join(root, '../gui/manual/en/index.json'));
  await access(path.join(root, '../gui/views/manual/ManualReader.qml'));
} catch {
  console.error('Build and install the device bundle first: npm run manual:device -- --gui ../gui');
  process.exit(1);
}
const inventory = JSON.parse(await readFile(path.join(root, '../gui/manual/locales.json'), 'utf8')
  .catch(error => { if (error.code === 'ENOENT') return '{"availableLocales":["en"]}'; throw error; }));
if (locale && !inventory.availableLocales.includes(locale)) {
  console.error(`Manual language is not installed: ${locale}. Available: ${inventory.availableLocales.join(', ')}.`);
  process.exit(1);
}
async function run(command, args) {
  const code = await new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', status => resolve(status ?? 1));
  });
  if (code !== 0) process.exit(code);
}
const build = path.join(root, 'output/device-prototype/preview-build');
const prefix = process.env.QT5_CMAKE_PREFIX || (process.platform === 'darwin' ? '/opt/homebrew/opt/qt@5' : null);
async function prepareKeyboard() {
  const candidates = [process.env.QT5_QML_PATH, prefix && path.join(prefix, 'qml'),
    '/usr/lib/x86_64-linux-gnu/qt5/qml', '/usr/lib/aarch64-linux-gnu/qt5/qml', '/usr/lib/qt5/qml'].filter(Boolean);
  let source;
  for (const candidate of candidates) {
    const keyboard = path.join(candidate, 'QtQuick/VirtualKeyboard');
    try { await access(keyboard); source = keyboard; break; } catch { /* Try the next Qt installation. */ }
  }
  if (!source) throw new Error('Qt 5 Virtual Keyboard is required. Set QT5_QML_PATH to the Qt QML module directory.');
  const imports = path.join(root, 'output/device-prototype/preview-qml');
  const keyboard = path.join(imports, 'QtQuick/VirtualKeyboard');
  await mkdir(path.join(keyboard, 'Styles'), { recursive: true });
  async function link(from, to) {
    try { await symlink(from, to); } catch (error) { if (error.code !== 'EEXIST') throw error; }
  }
  for (const name of await readdir(source)) {
    if (name !== 'Styles') await link(path.join(source, name), path.join(keyboard, name));
  }
  for (const name of await readdir(path.join(source, 'Styles'))) {
    await link(path.join(source, 'Styles', name), path.join(keyboard, 'Styles', name));
  }
  await cp(path.join(root, '../gui/CustomVirtualKeyboardStyle'), path.join(keyboard, 'Styles/BactosenseStyle'), { recursive: true });
  return {
    QT_IM_MODULE: 'qtvirtualkeyboard', QT_VIRTUALKEYBOARD_STYLE: 'BactosenseStyle',
    QT_VIRTUALKEYBOARD_LAYOUT_PATH: path.join(root, '../gui/CustomVirtualKeyboardLayout'),
    QML2_IMPORT_PATH: [imports, process.env.QML2_IMPORT_PATH].filter(Boolean).join(path.delimiter),
  };
}
let keyboardEnvironment;
try {
  keyboardEnvironment = await prepareKeyboard();
  await run('cmake', ['-S', path.join(root, 'scripts/device-prototype'), '-B', build,
    ...(prefix ? [`-DCMAKE_PREFIX_PATH=${prefix}`] : [])]);
  await run('cmake', ['--build', build, '--target', 'manual-preview', '-j', '4']);
} catch (error) {
  console.error(`Could not build the Qt 5 preview: ${error.message}. Install CMake and Qt 5, and set QT5_CMAKE_PREFIX if needed.`);
  process.exit(1);
}
const child = spawn(path.join(build, 'manual-preview'), [path.join(root, 'scripts/device-prototype/preview.qml'), locale], {
  cwd: root, stdio: 'inherit', env: { ...process.env, ...keyboardEnvironment, QML_XHR_ALLOW_FILE_READ: '1' },
});
child.once('error', error => {
  console.error(`Could not start the Qt 5 preview: ${error.message}`);
  process.exitCode = 1;
});
child.once('exit', code => { process.exitCode = code ?? 1; });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
