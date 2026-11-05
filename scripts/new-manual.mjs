// Create a new manual on bNovate Manuals:
//   npm run manual:new -- <id> "<Title>" <document ID> [--software <version>]
// Adds an English starter chapter in manuals/<id>/ and registers it in manuals.json.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import manualRegistry from '../plugins/manuals.cjs';

const { root, manuals, principal, contentDirectory, sourceLocale } = manualRegistry;
const args = process.argv.slice(2);
const option = name => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args.splice(index, 2)[1];
};
const softwareVersion = option('--software');
const [id, title, documentId] = args;
const usage = 'Usage: npm run manual:new -- <id> "<Title>" <document ID> [--software <version>]\nExample: npm run manual:new -- bactocontrol "BactoControl" UM-0012 --software 1.0.0';

function fail(message) {
  console.error(`${message}\n${usage}`);
  process.exit(1);
}

if (args.length !== 3 || !id || !title || !documentId) fail('Expected an id, a title and a document ID.');
if (!/^[a-z][a-z0-9-]*$/.test(id)) fail(`Invalid id "${id}": use lowercase letters, digits and hyphens; it becomes the URL /${id}/.`);
if (manuals.some(manual => manual.id === id)) fail(`A manual with id "${id}" already exists.`);

// The id is the manual's top-level URL. It must not shadow site files, a language
// directory, or a former root-level chapter URL of the principal manual.
const principalDirectory = path.join(root, contentDirectory(principal, sourceLocale));
const legacySlugs = readdirSync(principalDirectory).filter(file => /\.mdx?$/.test(file))
  .map(file => readFileSync(path.join(principalDirectory, file), 'utf8').match(/^slug:\s*["']?\/([^"'\s/]+)/m)?.[1])
  .filter(Boolean);
const reserved = new Set(['assets', 'img', 'pdf', 'search', 'device-manual', 'en', 'de', 'fr', 'it', 'es', ...legacySlugs]);
if (reserved.has(id)) fail(`The id "${id}" is reserved: /${id}/ is already used by the site or by a former ${principal.title} URL.`);

const directory = path.join(root, 'manuals', id);
if (existsSync(directory)) fail(`${path.relative(root, directory)} already exists.`);
mkdirSync(directory, { recursive: true });
writeFileSync(path.join(directory, 'welcome.md'), `---
title: ${JSON.stringify(title)}
sidebar_label: About this manual
sidebar_position: 0
slug: /
description: ${JSON.stringify(`${title} user manual.`)}
---

This manual describes ${title}. Document ID: **${documentId}**.

Start with [1. Getting started](01-getting-started.md).
`);
writeFileSync(path.join(directory, '01-getting-started.md'), `---
title: "1. Getting started"
sidebar_label: "1. Getting started"
slug: /getting-started
sidebar_position: 1
---

## 1.1 Overview {#section-1-1}

Write the first chapter of the ${title} manual here. Each chapter is one Markdown file named \`NN-topic.md\`.
`);

const registryFile = path.join(root, 'manuals.json');
const registry = JSON.parse(readFileSync(registryFile, 'utf8'));
registry.push({
  id,
  title,
  description: { en: `${title} user manual.` },
  documentId,
  version: '1.0.0',
  ...(softwareVersion ? { softwareVersion } : {}),
  locales: [sourceLocale],
  logo: principal.logo,
});
writeFileSync(registryFile, `${JSON.stringify(registry, null, 2)}\n`);

console.log(`Created manuals/${id}/ and registered "${title}" in manuals.json.
Its pages are served at /${id}/; other languages show English until you add translations.
Next steps:
  - Write chapters in manuals/${id}/ (shared images go in static/img/${id}/).
  - Edit its version and PDF logo in manuals.json, and add an "image" (instrument
    picture for the home page card, e.g. /img/home/${id}.webp).
  - To translate, add the language to "locales" and copy the chapters to
    i18n/<locale>/docusaurus-plugin-content-docs-${id}/current/.
  - Run npm run manual:check and npm start, then npm run build.`);
