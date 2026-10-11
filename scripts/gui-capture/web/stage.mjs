import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';

const workspace = path.resolve(import.meta.dirname, '../../..');
const source = path.resolve(workspace, '../bactoweb');
const output = path.join(workspace, 'output/gui-capture/web');
const stage = path.join(output, 'app');
const zip = path.join(source, 'builds/dist.zip');
const require = createRequire(import.meta.url);
const less = require(path.join(output, 'deps/node_modules/less'));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

await fs.mkdir(output, {recursive: true});
await fs.cp(path.join(source, 'app'), stage, {recursive: true,
  filter: file => !file.split(path.sep).includes('bower_components')});

// Only the third-party bundles are reused. Current application scripts, views,
// translations, images, fonts and theme LESS all come from this checkout.
const vendorJsPath = 'scripts/a4a6a786.vendor.js';
const vendorCssPath = 'assets/css/653f6d99.vendor.css';
const vendorJs = execFileSync('unzip', ['-p', zip, vendorJsPath], {maxBuffer: 16 * 1024 * 1024});
const vendorCss = execFileSync('unzip', ['-p', zip, vendorCssPath], {maxBuffer: 16 * 1024 * 1024});
await fs.writeFile(path.join(stage, 'scripts/capture-vendor.js'), vendorJs);
await fs.writeFile(path.join(stage, 'assets/css/capture-vendor.css'), vendorCss);

const indexPath = path.join(stage, 'index.html');
let index = await fs.readFile(indexPath, 'utf8');
index = index.replace(/<!-- build:js scripts\/vendor\.js -->[\s\S]*?<!-- endbuild -->/,
  '<script src="scripts/capture-vendor.js"></script>\n<script src="assets/plugins/gifshot/gifshot.min.js"></script>');
index = index.replace(/<!-- build:css assets\/css\/vendor\.css -->[\s\S]*?<!-- endbuild -->/,
  '<link rel="stylesheet" href="assets/css/capture-vendor.css">');
await fs.writeFile(indexPath, index);

const lessPath = path.join(stage, 'assets/less/styles.less');
const themeLess = await fs.readFile(lessPath, 'utf8');
const css = await new Promise((resolve, reject) => {
  const parser = new less.Parser({paths: [path.dirname(lessPath)], filename: lessPath});
  parser.parse(themeLess, (error, tree) => {
    if (error) reject(error);
    else resolve(tree.toCSS({compress: false}));
  });
});
await fs.writeFile(path.join(stage, 'assets/css/styles.css'), css);

// Equivalent to the current ngtemplates task, scoped to the staged copy.
const templateRoot = path.join(stage, 'views/templates');
const templateNames = (await fs.readdir(templateRoot)).filter(x => x.endsWith('.html')).sort();
const templateLines = [];
for (const name of templateNames) {
  const content = await fs.readFile(path.join(templateRoot, name), 'utf8');
  templateLines.push(`$templateCache.put(${JSON.stringify('templates/' + name)}, ${JSON.stringify(content)});`);
}
await fs.writeFile(path.join(stage, 'scripts/templates/templates.js'),
  "angular.module('theme.templates', []).run(['$templateCache', function ($templateCache) {\n" + templateLines.join('\n') + '\n}]);\n');

const manifest = {
  capturedSource: source,
  sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], {cwd: source, encoding: 'utf8'}).trim(),
  sourceWorktree: execFileSync('git', ['status', '--short'], {cwd: source, encoding: 'utf8'}).trim(),
  staging: stage,
  applicationCode: 'All current app scripts/views/locales/assets; templates regenerated from current HTML.',
  theme: 'Current app/assets/less/styles.less and imports compiled with Less 1.7.5; current fonts retained.',
  dependencyBundle: {
    zip,
    archiveDate: '2023-10-25',
    js: {entry: vendorJsPath, sha256: sha256(vendorJs)},
    css: {entry: vendorCssPath, sha256: sha256(vendorCss)},
    limitation: 'Third-party libraries use the repository release archive because Bower dependencies are not installed. No historical application scripts or theme CSS are used.'
  },
  indexSha256: sha256(await fs.readFile(indexPath)),
  themeCssSha256: sha256(css)
};
await fs.writeFile(path.join(output, 'source-provenance.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('Staged current Bactoweb application:', stage);
