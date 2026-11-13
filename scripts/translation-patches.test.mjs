import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, rename, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { applyTranslationPatch, planTranslationPatch, sectionSnapshot, sourceHash, splitTranslationSections } from './translation-patches.mjs';
import { createSourceHistory } from './translation-source-history.mjs';
import { planSync, syncTranslations } from './sync-translations.mjs';

const exec = promisify(execFile);
const metadata = '---\ntitle: Overview\nslug: /overview\nsidebar_position: 1\n---\n\n';
const section = (id, title, body) => `## ${title} {#${id}}\n\n${body}\n\n`;
const first = section('a', 'Setup', 'Wait 10 minutes.');
const second = section('b', 'Cleaning', 'Use a soft cloth.');
const germanFirst = section('a', 'Einrichtung', '10 Minuten warten.');
const germanSecond = section('b', 'Reinigung', 'Ein weiches Tuch verwenden. <!-- reviewed wording -->');
const original = metadata + first + second;
const current = metadata.replace('Overview', 'Übersicht') + germanFirst + germanSecond;
const changed = original.replace('10 minutes', '20 minutes');
const plan = extra => planTranslationPatch({ source: changed, current, previousSource: original, locale: 'de', ...extra });

test('section boundaries preserve frontmatter and preamble, and ignore heading examples in fenced code', () => {
  const source = metadata + 'Opening prose.\n\n' + first + '```md\n## Example {#fake}\n```\n\n' + second;
  const parts = splitTranslationSections(source);
  assert.deepEqual(parts.map(part => part.id), ['@frontmatter', '@preamble', 'a', 'b']);
  assert.equal(parts.map(part => part.text).join(''), source);
  assert.deepEqual(splitTranslationSections(metadata + 'A chapter without anchored headings.\n').map(part => part.id), ['@frontmatter', '@body']);
  assert.throws(() => splitTranslationSections(original + first), /Duplicate translation section ID: a/);
});

test('only changed sections are selected, with hash baselines available even without old English text', () => {
  const withHistory = plan();
  assert.deepEqual(withHistory.sections.map(part => part.id), ['a']);
  assert.match(withHistory.sections[0].english_change[0].before, /10 minutes/);
  assert.match(withHistory.sections[0].english_change[0].after, /20 minutes/);
  const withHashes = plan({ previousSource: null, previousSnapshot: sectionSnapshot(original) });
  assert.equal(withHashes.baseline, 'section_hashes');
  assert.deepEqual(withHashes.sections.map(part => part.id), ['a']);
  assert.equal(withHashes.sections[0].english_change, null);
  const result = applyTranslationPatch(withHashes, { edits: [{ section_id: 'a', search: '10 Minuten', replace: '20 Minuten' }] });
  assert.equal(result, current.replace('10 Minuten', '20 Minuten'));
  assert.equal(splitTranslationSections(result).find(part => part.id === 'b').text, germanSecond);
});

test('English change excerpts keep distant modifications in separate small hunks', () => {
  const lines = Array.from({ length: 24 }, (_, index) => `Instruction ${index + 1}.`).join('\n');
  const before = metadata + section('a', 'Setup', lines);
  const after = before.replace('Instruction 3.', 'Updated instruction 3.').replace('Instruction 21.', 'Updated instruction 21.');
  const scoped = plan({ source: after, current: before.replace('Overview', 'Übersicht'), previousSource: before });
  const hunks = scoped.sections[0].english_change;
  assert.equal(hunks.length, 2);
  assert.match(hunks[0].before, /Instruction 3\./);
  assert.match(hunks[0].after, /Updated instruction 3\./);
  assert(!hunks[0].after.includes('Instruction 12.'));
  assert.match(hunks[1].after, /Updated instruction 21\./);
  assert(hunks[1].new_start_line > hunks[0].new_start_line);
});

test('new sections are inserted while removed sections and reordering are handled deterministically', () => {
  const third = section('c', 'Retired procedure', 'An obsolete instruction.');
  const added = section('d', 'Storage', 'Keep dry.');
  const germanAdded = section('d', 'Lagerung', 'Trocken halten.');
  const scoped = plan({ source: metadata + second + added + first, current: current + third, previousSource: original + third });
  assert.deepEqual(scoped.sections.map(part => part.id), ['d']);
  assert.deepEqual(scoped.removed, ['c']);
  const result = applyTranslationPatch(scoped, { edits: [{ section_id: 'd', search: '', replace: germanAdded }] });
  assert.equal(result, metadata.replace('Overview', 'Übersicht') + germanSecond + germanAdded + germanFirst);
  assert.throws(() => applyTranslationPatch(scoped, { edits: [] }), /section boundaries/);
});

test('invalid exact matches, edits outside the requested scope and damaged boundaries cannot modify the plan', () => {
  const scoped = plan();
  const before = [...scoped.target];
  for (const patch of [
    { markdown: current },
    { edits: [], extra: true },
    { edits: [{ section_id: 'b', search: 'Tuch', replace: 'Schwamm' }] },
    { edits: [{ section_id: 'a', search: '', replace: germanFirst }] },
    { edits: [{ section_id: 'a', search: 'absent text', replace: 'replacement' }] },
    { edits: [{ section_id: 'a', search: '{#a}', replace: '{#different}' }] },
    { edits: [{ section_id: 'a', search: '10 Minuten', replace: '20 Minuten', extra: true }] },
    { edits: [
      { section_id: 'a', search: '10 Minuten', replace: '20 Minuten' },
      { section_id: 'a', search: 'missing after the first edit', replace: 'x' },
    ] },
  ]) {
    assert.throws(() => applyTranslationPatch(scoped, patch), { code: 'translation_patch_conflict' });
    assert.deepEqual([...scoped.target], before);
  }
  const repeated = plan({ current: current.replace('10 Minuten warten.', 'Prüfen. Prüfen.') });
  assert.throws(() => applyTranslationPatch(repeated, { edits: [{ section_id: 'a', search: 'Prüfen.', replace: 'Warten.' }] }), /exactly once/);
});

test('structural damage selects an otherwise unchanged section for repair', () => {
  const source = original.replace('Use a soft cloth.', 'Read [Safety](/safety).');
  const damaged = current.replace('Ein weiches Tuch verwenden.', 'Siehe [Sicherheit](/wrong).');
  const scoped = plan({ source, current: damaged, previousSource: source });
  assert.deepEqual(scoped.sections.map(part => [part.id, part.reason]), [['b', 'structure_repair']]);
  assert.equal(applyTranslationPatch(scoped, { edits: [{ section_id: 'b', search: '](/wrong)', replace: '](/safety)' }] }), damaged.replace('/wrong', '/safety'));
});

test('an existing translation requires a trusted baseline unless a full refresh is requested', () => {
  assert.throws(() => plan({ previousSource: null }), /No trusted English section baseline/);
  assert.equal(plan({ previousSource: null, refreshAll: true }).sections.filter(part => part.id === 'b').length, 1);
  const fresh = plan({ current: null, previousSource: null });
  const parts = splitTranslationSections(current.replace('10 Minuten', '20 Minuten'));
  const result = applyTranslationPatch(fresh, { edits: parts.filter(part => part.text.trim()).map(part => ({ section_id: part.id, search: '', replace: part.text })) });
  assert.equal(result, current.replace('10 Minuten', '20 Minuten'));
});

test('legacy source hashes can be recovered through Git renames and normalized CRLF blobs', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'translation-history-test-'));
  assert(path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep));
  t.after(() => rm(root, { recursive: true, force: true }));
  const git = (...args) => exec('git', args, { cwd: root, windowsHide: true });
  const commit = message => git('-c', 'user.name=Translation Test', '-c', 'user.email=test@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '--quiet', '-m', message);
  await git('init', '--quiet');
  await git('config', 'core.autocrlf', 'false');
  await mkdir(path.join(root, 'manuals'));
  await writeFile(path.join(root, 'old.md'), original.replace(/\n/g, '\r\n'));
  await git('add', 'old.md');
  await commit('Original English');
  await rename(path.join(root, 'old.md'), path.join(root, 'manuals/current.md'));
  await git('add', '-A');
  await commit('Move chapter');
  await writeFile(path.join(root, 'manuals/current.md'), changed);
  await git('add', 'manuals/current.md');
  await commit('Revise instruction');
  const lookup = createSourceHistory(root);
  assert.equal(await lookup('manuals/current.md', sourceHash(original)), original);
  assert.equal(await lookup('manuals/current.md', sourceHash(changed)), changed);
  assert.equal(await lookup('manuals/current.md', sourceHash('unknown')), null);

  const target = 'i18n/de/docusaurus-plugin-content-docs/current/current.md';
  const glossary = 'Keep product names unchanged.', context = 'Technical operators.';
  const state = { schemaVersion: 1, glossarySha256: sourceHash(glossary), contextSha256: sourceHash(context), translations: { [target]: sourceHash(original) } };
  for (const [filename, text] of Object.entries({
    'maintenance/translation-glossary.md': glossary, 'maintenance/translation-context.md': context,
    'maintenance/translation-sync.json': JSON.stringify(state), [target]: current,
  })) {
    await mkdir(path.dirname(path.join(root, filename)), { recursive: true });
    await writeFile(path.join(root, filename), text);
  }
  const options = { root, manuals: [{ id: 'example', title: 'Example', path: 'manuals', docsPluginId: 'default', locales: ['en', 'de'] }], log: () => {} };
  const pending = await planSync(options);
  assert.equal(pending.tasks[0].patchPlan.baseline, 'git');
  assert.deepEqual(pending.tasks[0].record.sections, ['a']);
  assert.equal(JSON.parse(await readFile(path.join(root, 'maintenance/translation-sync.json'), 'utf8')).schemaVersion, 1);
  await syncTranslations({ ...options, review: async () => [], translate: async task => applyTranslationPatch(task.patchPlan, { edits: [{ section_id: 'a', search: '10 Minuten', replace: '20 Minuten' }] }) });
  const saved = JSON.parse(await readFile(path.join(root, 'maintenance/translation-sync.json'), 'utf8'));
  assert.equal(saved.schemaVersion, 2);
  assert.equal(saved.sourceSections['manuals/current.md'].sha256, sourceHash(changed));
  assert(!JSON.stringify(saved).includes('Wait 20 minutes'));
  assert.equal((await planSync(options)).tasks.length, 0);
});
