import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, unlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import OpenAI from 'openai';
import { planSync, syncTranslations, translateWithAgent } from './sync-translations.mjs';
import { translationErrors } from './translation-structure.mjs';
import { writeSyncOutputs } from './sync-translations-report.mjs';

const english = `---
title: Installation
slug: /installation
sidebar_position: 1
---

## Safety {#section-1-1}

:::warning[Disconnect power]

Disconnect power before cleaning.

:::

![Home](/img/gui/en/home-overview.png)

| Step | Action |
| --- | --- |
| 1 | Read [Safety](/safety#section-2-1). |
`;
const translated = english.replace('title: Installation', 'title: Montage').replace('## Safety', '## Sicherheit')
  .replace('Disconnect power before cleaning.', 'Vor der Reinigung die Stromversorgung trennen.').replace('/gui/en/', '/gui/de/');
const manual = { id: 'example', title: 'Example', path: 'manuals/example', docsPluginId: 'default', locales: ['en', 'de'] };
const target = 'i18n/de/docusaurus-plugin-content-docs/current/01-installation.md';
const silent = () => {};
const readReport = async options => JSON.parse(await readFile(path.join(options.root, 'output/translations/sync-report.json'), 'utf8'));

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'manual-translation-test-'));
  // Deletion is confined to the exact disposable directory created above.
  assert(path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [filename, text] of Object.entries({
    'maintenance/translation-glossary.md': 'Keep BactoSense and Modbus unchanged.',
    'maintenance/translation-context.md': 'Technical manuals for instrument operators.',
    'manuals/example/01-installation.md': english,
    [target]: translated,
  })) {
    await mkdir(path.dirname(path.join(root, filename)), { recursive: true });
    await writeFile(path.join(root, filename), text);
  }
  const options = { root, manuals: [manual], log: silent };
  const baseline = await planSync(options);
  await writeFile(path.join(root, 'maintenance/translation-sync.json'), JSON.stringify(baseline.nextState, null, 2) + '\n');
  return options;
}

test('unchanged chapters and human translation edits make no API calls', async t => {
  const options = await fixture(t);
  await writeFile(path.join(options.root, target), translated + '\nManuell verbessert.\n');
  const plan = await syncTranslations({ ...options, translate: () => assert.fail('Unexpected API call') });
  assert.equal(plan.tasks.length, 0);
  assert.equal(plan.report.hasWork, false);
  assert.equal(plan.report.counts.skipped, 1);
  assert.equal(plan.report.counts.modified, 0);
  assert.equal(plan.report.counts.apiAttempts, 0);
  assert.equal((await readReport(options)).status, 'success');
  const summary = await readFile(path.join(options.root, 'output/translations/sync-report.md'), 'utf8');
  assert.match(summary, /0 modified, 0 created, 0 removed/);
  assert.match(summary, /No translations to sync or remove/);
  const outputs = path.join(options.root, 'output/github-outputs.txt');
  await writeSyncOutputs(plan.report, outputs);
  assert.match(await readFile(outputs, 'utf8'), /has_work=false\n/);
  assert.match(await readFile(path.join(options.root, target), 'utf8'), /Manuell verbessert/);
});

test('a changed English chapter is synced and a second run is a no-op', async t => {
  const options = await fixture(t);
  await writeFile(path.join(options.root, 'manuals/example/01-installation.md'), english + '\nNew instruction.\n');
  let calls = 0;
  const translate = async task => { calls++; assert.match(task.source, /New instruction/); return translated + '\nNeue Anweisung.\n'; };
  const first = await syncTranslations({ ...options, translate });
  assert.equal(first.tasks.length, 1);
  assert.equal(first.report.counts.modified, 1);
  assert.equal(first.report.counts.created, 0);
  assert.equal(first.report.counts.apiAttempts, 1);
  assert.equal(first.report.files[0].status, 'modified');
  assert.equal((await syncTranslations({ ...options, translate })).tasks.length, 0);
  assert.equal(calls, 1);
});

test('glossary changes, missing editions and force select the affected translations', async t => {
  const options = await fixture(t);
  assert.equal((await planSync({ ...options, force: true })).tasks.length, 1);
  await writeFile(path.join(options.root, 'maintenance/translation-glossary.md'), 'Revised terminology.');
  assert.equal((await planSync(options)).tasks.length, 1);
  await unlink(path.join(options.root, target));
  assert.equal((await planSync(options)).tasks[0].current, null);
});

test('dry-run does not translate, delete files or advance the manifest', async t => {
  const options = await fixture(t);
  const stateFile = path.join(options.root, 'maintenance/translation-sync.json');
  const before = await readFile(stateFile, 'utf8');
  await syncTranslations({ ...options, force: true, dryRun: true, translate: () => assert.fail('Unexpected API call') });
  assert.equal(await readFile(stateFile, 'utf8'), before);
  const report = await readReport(options);
  assert.equal(report.status, 'dry_run');
  assert.equal(report.counts.selected, 1);
  assert.equal(report.counts.apiAttempts, 0);
  assert.equal(report.counts.modified, 0);
  assert.equal(report.files[0].status, 'would_translate');
});

test('each task includes the glossary, product context, introductions and neighboring terminology in reading order', async t => {
  const options = await fixture(t);
  const sourceWelcome = english.replace('sidebar_position: 1', 'sidebar_position: 0');
  const translatedWelcome = translated.replace('sidebar_position: 1', 'sidebar_position: 0');
  await writeFile(path.join(options.root, 'manuals/example/welcome.md'), sourceWelcome);
  await writeFile(path.join(options.root, path.dirname(target), 'welcome.md'), translatedWelcome);
  const plan = await planSync({ ...options, force: true });
  const task = plan.tasks.find(task => task.targetPath === target);
  assert.match(task.glossary, /Modbus/);
  assert.match(task.context, /instrument operators/);
  assert.equal(task.manualContext.english_introduction, sourceWelcome);
  assert.equal(task.manualContext.translated_introduction, translatedWelcome);
  assert.equal(task.manualContext.chapter_outline[0].filename, 'welcome.md');
  assert.equal(task.manualContext.neighboring_chapters[0].filename, 'welcome.md');
  assert.match(task.manualContext.neighboring_chapters[0].translated_excerpt, /Sicherheit/);
  await writeFile(path.join(options.root, 'maintenance/translation-context.md'), 'Updated audience and tone.');
  assert.equal((await planSync(options)).tasks.length, 2);
});

test('validation rejects changed links, anchors, notice types, tables and screenshot languages', () => {
  assert.deepEqual(translationErrors(english, translated, 'de'), []);
  for (const [before, after] of [
    ['/safety#section-2-1', '/other'], ['section-1-1', 'section-1-2'], [':::warning', ':::info'],
    ['| 1 | Read', '| 1 | extra | Read'], ['/gui/de/', '/gui/en/'], ['slug: /installation', 'slug: /other'],
  ]) assert(translationErrors(english, translated.replace(before, after), 'de').length > 0, `${before} should fail`);
});

test('one repair is attempted, and invalid batches leave files and state untouched', async t => {
  const options = await fixture(t);
  const stateFile = path.join(options.root, 'maintenance/translation-sync.json');
  const state = await readFile(stateFile, 'utf8');
  let calls = 0;
  await assert.rejects(syncTranslations({ ...options, force: true, translate: async task => {
    calls++;
    if (calls === 2) assert.match(task.feedback, /notices/);
    return translated.replace(':::warning', ':::info');
  } }), /failed validation/);
  assert.equal(calls, 2);
  assert.equal(await readFile(stateFile, 'utf8'), state);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
  const report = await readReport(options);
  assert.equal(report.status, 'failed');
  assert.equal(report.counts.modified, 0);
  assert.equal(report.counts.failed, 1);
  assert.equal(report.counts.apiAttempts, 2);
  assert.match(report.files[0].error, /failed validation/);
});

test('a failed concurrent batch stops starting further paid translations', async t => {
  const options = await fixture(t);
  for (const number of [2, 3, 4, 5]) {
    await writeFile(path.join(options.root, `manuals/example/0${number}-chapter.md`), english);
  }
  let calls = 0;
  await assert.rejects(syncTranslations({ ...options, force: true, translate: async task => {
    calls++;
    if (task.targetPath === target) return translated.replace(':::warning', ':::info');
    await new Promise(resolve => setTimeout(resolve, 20));
    return translated;
  } }), /failed validation/);
  assert.equal(calls, 3); // Two attempts on the failing chapter; only one already in flight.
  const report = await readReport(options);
  assert.equal(report.counts.modified, 0);
  assert.equal(report.counts.notApplied, 1);
  assert.equal(report.counts.notStarted, 3);
});

test('an obsolete translated chapter is removed without touching locale metadata', async t => {
  const options = await fixture(t);
  const directory = path.dirname(path.join(options.root, target));
  await writeFile(path.join(directory, '02-obsolete.md'), 'Obsolete chapter');
  await writeFile(path.join(directory, 'metadata.json'), '{}');
  const plan = await syncTranslations(options);
  assert.equal(plan.removals.length, 1);
  assert.equal(plan.report.hasWork, true);
  assert.equal(plan.report.counts.removed, 1);
  await assert.rejects(readFile(path.join(directory, '02-obsolete.md')), { code: 'ENOENT' });
  assert.equal(await readFile(path.join(directory, 'metadata.json'), 'utf8'), '{}');
});

test('reports distinguish forced unchanged translations from newly created files by language', async t => {
  const options = await fixture(t);
  const logs = [];
  const plan = await syncTranslations({ ...options, manuals: [{ ...manual, locales: ['en', 'de', 'fr'] }], force: true,
    log: message => logs.push(message),
    translate: async task => task.locale === 'de' ? translated : translated.replace('/gui/de/', '/gui/fr/').replace('Sicherheit', 'Sécurité'),
  });
  assert.equal(plan.report.counts.selected, 2);
  assert.equal(plan.report.counts.modified, 0);
  assert.equal(plan.report.counts.created, 1);
  assert.equal(plan.report.counts.unchanged, 1);
  assert.equal(plan.report.counts.apiAttempts, 2);
  const report = await readReport(options);
  assert.equal(report.byManualAndLocale.find(row => row.locale === 'de').unchanged, 1);
  assert.equal(report.byManualAndLocale.find(row => row.locale === 'fr').created, 1);
  assert(logs.some(line => line.includes('0 modified, 1 created, 0 removed, 1 unchanged after sync')));
  const outputs = path.join(options.root, 'output/github-outputs.txt');
  await writeSyncOutputs(report, outputs);
  assert.match(await readFile(outputs, 'utf8'), /has_work=true\nselected_count=2\nmodified_count=0\ncreated_count=1\n/);
});

test('reports include planning failures without claiming file modifications', async t => {
  const options = await fixture(t);
  await writeFile(path.join(options.root, 'maintenance/translation-sync.json'), '{broken JSON');
  await assert.rejects(syncTranslations(options));
  const report = await readReport(options);
  assert.equal(report.status, 'failed');
  assert.equal(report.counts.modified, 0);
  assert.equal(report.counts.apiAttempts, 0);
  assert(report.error);
});

test('registry paths outside the checkout are rejected before any API call', async t => {
  const options = await fixture(t);
  await assert.rejects(planSync({ ...options, manuals: [{ ...manual, path: '../outside' }] }), /outside the repository/);
});

function fakeClient({ failure = false, incomplete = false } = {}) {
  const seen = { deleted: [], cancelled: [], aborted: false };
  const stream = {
    withResultCollection() {},
    controller: { abort() { seen.aborted = true; } },
    async *[Symbol.asyncIterator]() {
      yield { type: 'agent.session.created', session: { id: 'sess_test' } };
      if (!incomplete) yield { type: failure ? 'agent.session.turn.failed' : 'agent.session.turn.completed', turn: { subagent_id: null } };
    },
    async finalResult() {
      if (failure || incomplete) throw new Error(failure ? 'failed turn' : 'incomplete stream');
      return { session_id: 'sess_test', turn: { status: 'completed' }, output_text: JSON.stringify({ markdown: translated }) };
    },
  };
  const client = { beta: { agents: { sessions: {
    async create(body) { seen.request = body; return stream; },
    async delete(id) { seen.deleted.push(id); },
    events: { async create(id, body) { seen.cancelled.push({ id, body }); } },
  } } } };
  return { client, seen };
}

test('Agents API receives a structured translation task and completed sessions are deleted', async () => {
  const { client, seen } = fakeClient();
  const actual = await translateWithAgent({ manual: 'Example', locale: 'de', source: english, current: translated, glossary: 'Terms' }, { client, model: 'test-model' });
  assert.equal(actual, translated);
  assert.equal(seen.request.agent.model, 'test-model');
  assert.deepEqual(seen.request.environment, { type: 'none' });
  assert.deepEqual(seen.request.agent.text.format, {
    type: 'json_schema',
    schema: { type: 'object', properties: { markdown: { type: 'string' } }, required: ['markdown'], additionalProperties: false },
  });
  assert.deepEqual(seen.deleted, ['sess_test']);
  assert.deepEqual(seen.cancelled, []);
  assert(seen.aborted);
});

test('failed or disconnected agent turns are rejected and cancellation is requested', async () => {
  for (const behavior of [{ failure: true }, { incomplete: true }]) {
    const { client, seen } = fakeClient(behavior);
    await assert.rejects(translateWithAgent({ locale: 'de' }, { client }), /failed turn|incomplete stream/);
    assert.equal(seen.cancelled[0].body.events[0].type, 'agent.session.input.cancel');
    assert.deepEqual(seen.deleted, ['sess_test']);
  }
});

test('the installed SDK consumes the real Agents API event format without a network request', async () => {
  const requests = [];
  const turn = { id: 'turn_wire', session_id: 'sess_wire', subagent_id: null, status: 'in_progress' };
  const events = [
    { type: 'agent.session.created', session: { id: 'sess_wire' } },
    { type: 'agent.session.turn.created', turn_id: turn.id, turn },
    { type: 'agent.session.turn.item.done', turn_id: turn.id, output_index: 0, item: {
      id: 'msg_wire', turn_id: turn.id, type: 'message', role: 'assistant', status: 'completed', phase: 'final_answer',
      content: [{ type: 'output_text', text: JSON.stringify({ markdown: translated }), annotations: [] }],
    } },
    { type: 'agent.session.turn.completed', turn_id: turn.id, turn: { ...turn, status: 'completed' } },
    { type: 'agent.session.idle', session: { id: 'sess_wire' } },
  ];
  const client = new OpenAI({ apiKey: 'test-key', maxRetries: 0, fetch: async (url, init) => {
    requests.push({ url: String(url), method: init.method, headers: new Headers(init.headers), body: init.body });
    if (init.method === 'DELETE') return Response.json({ id: 'sess_wire', deleted: true });
    assert.equal(init.method, 'POST');
    return new Response(events.map(event => `event: ${event.type}\ndata: ${JSON.stringify(event)}\n\n`).join(''), {
      headers: { 'content-type': 'text/event-stream' },
    });
  } });
  const result = await translateWithAgent({ manual: 'Example', locale: 'de', source: english, current: translated, glossary: 'Terms' }, { client });
  assert.equal(result, translated);
  assert.equal(requests.length, 2);
  assert.equal(requests[0].url, 'https://api.openai.com/v1/agents/sessions');
  assert.equal(requests[0].headers.get('OpenAI-Beta'), 'agents=v1');
  const request = JSON.parse(requests[0].body);
  // Agents JSON-schema formats accept only type and schema.
  assert.deepEqual(Object.keys(request.agent.text.format).sort(), ['schema', 'type']);
  assert.equal(request.agent.model, 'gpt-6.1-terra');
  assert.equal(requests[1].url, 'https://api.openai.com/v1/agents/sessions/sess_wire');
});
