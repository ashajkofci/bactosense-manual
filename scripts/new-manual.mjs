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
const collectionId = option('--collection');
const manualVersion = option('--version') || (collectionId ? '1' : '1.0.0');
const [id, title, documentId] = args;
const usage = 'Usage: npm run manual:new -- <id> "<Title>" <document ID> [--software <version>] [--collection <id>] [--version <revision>]\nExample: npm run manual:new -- new-kit "New Kit" UM-0012 --collection other-manuals';

function fail(message) {
  console.error(`${message}\n${usage}`);
  process.exit(1);
}

if (args.length !== 3 || !id || !title || !documentId) fail('Expected an id, a title and a document ID.');
if (!/^[a-z][a-z0-9-]*$/.test(id)) fail(`Invalid id "${id}": use lowercase letters, digits and hyphens; it becomes the URL /${id}/.`);
if (collectionId) {
  const collection = manuals.find(manual => manual.id === collectionId && manual.pdfMode === 'chapter');
  if (!collection) fail(`No chapter collection named "${collectionId}" exists.`);
  const directory = path.join(root, collection.path);
  const file = path.join(directory, `${id}.md`);
  if (existsSync(file) || manualRegistry.pdfManuals(collection).some(manual => manual.chapterId === id)) fail(`Chapter "${id}" already exists in ${collectionId}.`);
  const position = readdirSync(directory).filter(name => /\.mdx?$/.test(name))
    .reduce((maximum, name) => Math.max(maximum, Number(readFileSync(path.join(directory, name), 'utf8').match(/^sidebar_position:\s*(\d+)/m)?.[1] || 0)), 0) + 1;
  writeFileSync(file, `---\nid: ${id}\ntitle: ${JSON.stringify(title)}\nsidebar_position: ${position}\nslug: /${id}\ndocument_id: ${JSON.stringify(documentId)}\nmanual_version: ${JSON.stringify(manualVersion)}\n${softwareVersion ? `software_version: ${JSON.stringify(softwareVersion)}\n` : ''}---\n\n## Intended use {#intended-use}\n\nDescribe the intended use of ${title}.\n\n## Instructions {#instructions}\n\nWrite the instructions using Markdown and the shared manual notices, tables and image tags.\n`);
  console.log(`Created ${path.relative(root, file)}.\nIt will appear at /${collectionId}/${id}/ with its own generated PDF.\nComplete its content, then run npm run manual:check and npm run build.\nTo remove it, delete this Markdown file and rebuild.`);
  process.exit(0);
}
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
  version: manualVersion,
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
