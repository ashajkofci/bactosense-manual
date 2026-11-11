import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, unlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import OpenAI from 'openai';
import { planSync, syncTranslations, translateWithOpenAI } from './sync-translations.mjs';
import { translationErrors } from './translation-structure.mjs';
import { writeSyncOutputs } from './sync-translations-report.mjs';
import { createReferenceTools, createResponseConversation, runResponseWithTools } from './translation-tools.mjs';
import { applyTranslationPatch, planTranslationPatch, sectionSnapshot, splitTranslationSections } from './translation-patches.mjs';

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

test('a failed shared-conversation run stops before starting further translations', async t => {
  const options = await fixture(t);
  for (const number of [2, 3, 4, 5]) {
    await writeFile(path.join(options.root, `manuals/example/0${number}-chapter.md`), english);
  }
  let calls = 0;
  await assert.rejects(syncTranslations({ ...options, force: true, translate: async task => {
    calls++;
    if (task.targetPath === target) return translated.replace(':::warning', ':::info');
    assert.fail('No further chapter should start after the first chapter fails.');
  } }), /failed validation/);
  assert.equal(calls, 2);
  const report = await readReport(options);
  assert.equal(report.counts.modified, 0);
  assert.equal(report.counts.notApplied, 0);
  assert.equal(report.counts.notStarted, 4);
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

function fakeClient({ response = {}, error } = {}) {
  const seen = {};
  const client = { responses: { async create(body, options) {
    seen.request = body;
    seen.options = options;
    if (error) throw error;
    return { id: 'resp_test', _request_id: 'req_test', status: 'completed', output_text: JSON.stringify({ edits: [] }), ...response };
  } } };
  return { client, seen };
}

test('Responses API receives only changed sections and returns patches with minimal product context', async () => {
  const { client, seen } = fakeClient();
  const original = english + '\n## Unchanged {#unchanged}\n\nUNRELATED ENGLISH CONTENT.\n';
  const current = translated + '\n## Unverändert {#unchanged}\n\nUNRELATED TRANSLATED CONTENT.\n';
  const source = original.replace('Disconnect power before cleaning.', 'Disconnect power and remove USB before cleaning.');
  const task = { manual: 'Example', locale: 'de', source, current, glossary: 'Terms',
    context: 'Technical operators.', manualContext: { title: 'Example', english_introduction: 'DO NOT INLINE THE INTRODUCTION' }, candidate: current, feedback: 'Repair links.',
    patchPlan: planTranslationPatch({ source, current, previousSource: original, locale: 'de' }),
  };
  const actual = await translateWithOpenAI(task, { client, model: 'test-model' });
  assert.equal(actual, current);
  assert.equal(seen.request.model, 'test-model');
  assert.equal(seen.request.store, false);
  assert.equal(seen.options.maxRetries, 0);
  assert(seen.options.signal instanceof AbortSignal);
  assert.equal(seen.request.text.format.name, 'translation_patch');
  assert.equal(seen.request.text.format.strict, true);
  assert.deepEqual(seen.request.text.format.schema.required, ['edits']);
  assert.deepEqual(seen.request.tools.map(tool => tool.name), ['list_reference_files', 'search_reference_files', 'read_reference_file']);
  assert.deepEqual(JSON.parse(seen.request.input[0].content), { type: 'translation_guidance', glossary: 'Terms', translation_context: task.context });
  const packet = JSON.parse(seen.request.input.at(-1).content);
  assert.equal(packet.locale, 'de');
  assert.equal(packet.sections.length, 1);
  assert.equal(packet.sections[0].id, 'section-1-1');
  assert.equal(packet.english, undefined);
  assert.equal(packet.current_translation, undefined);
  assert.deepEqual(packet.manual_context, { title: 'Example' });
  assert.equal(packet.validation_feedback, task.feedback);
  assert(!JSON.stringify(seen.request).includes('UNRELATED ENGLISH CONTENT'));
  assert(!JSON.stringify(seen.request).includes('UNRELATED TRANSLATED CONTENT'));
  assert(!JSON.stringify(seen.request).includes('DO NOT INLINE'));
});

test('failed, incomplete and refused responses are rejected even when partial Markdown is present', async () => {
  for (const [response, expected, code] of [
    [{ status: 'failed', error: { code: 'server_error', message: 'The model service failed.' } }, /The model service failed/, 'server_error'],
    [{ status: 'incomplete', incomplete_details: { reason: 'max_output_tokens' } }, /max_output_tokens/, 'max_output_tokens'],
    [{ output: [{ type: 'message', content: [{ type: 'refusal', refusal: 'Request refused.' }] }] }, /Request refused/, null],
    [{ output_text: '' }, /returned no patch/, null],
    [{ output_text: JSON.stringify({ markdown: ' ' }) }, /Return an edits array/, 'translation_patch_conflict'],
    [{ output_text: '{invalid JSON' }, /JSON/, null],
  ]) {
    const { client } = fakeClient({ response });
    await assert.rejects(translateWithOpenAI({ locale: 'de', source: english, current: translated, targetPath: target }, { client }), error => {
      assert.match(error.message, expected);
      assert(error.message.includes(target));
      assert.equal(error.apiError.code, code);
      assert.equal(error.apiError.responseId, 'resp_test');
      assert.equal(error.apiError.requestId, 'req_test');
      return true;
    });
  }
});

test('HTTP failures preserve the API error code, request ID and rejected parameter', async () => {
  const failure = Object.assign(new Error('Unsupported output schema.'), {
    code: 'invalid_request_error', request_id: 'req_http', param: 'text.format.schema',
  });
  const { client } = fakeClient({ error: failure });
  await assert.rejects(translateWithOpenAI({ locale: 'de', source: english, current: translated }, { client }), error => {
    assert.match(error.message, /\[invalid_request_error\] Unsupported output schema/);
    assert.equal(error.apiError.requestId, 'req_http');
    assert.equal(error.apiError.param, 'text.format.schema');
    assert.equal(error.cause, failure);
    return true;
  });
});

test('API diagnostics reach both sync reports while translations and the manifest stay untouched', async t => {
  const options = await fixture(t);
  const stateFile = path.join(options.root, 'maintenance/translation-sync.json');
  const before = await readFile(stateFile, 'utf8');
  const { client } = fakeClient({ response: { status: 'failed', error: { code: 'server_error', message: 'The model service failed.' } } });
  await assert.rejects(syncTranslations({ ...options, force: true, translate: task => translateWithOpenAI(task, { client }) }), /server_error/);
  const report = await readReport(options);
  assert.equal(report.files[0].apiError.code, 'server_error');
  assert.equal(report.files[0].apiError.requestId, 'req_test');
  assert.equal(report.counts.apiAttempts, 1);
  assert.equal(report.counts.modified, 0);
  const markdown = await readFile(path.join(options.root, 'output/translations/sync-report.md'), 'utf8');
  assert.match(markdown, /server_error.*The model service failed/);
  assert.match(markdown, /req_test/);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
  assert.equal(await readFile(stateFile, 'utf8'), before);
});

test('the installed SDK sends reference tool results back through the Responses API without a network request', async () => {
  const requests = [];
  const client = new OpenAI({ apiKey: 'test-key', maxRetries: 0, fetch: async (url, init) => {
    requests.push({ url: String(url), method: init.method, headers: new Headers(init.headers), body: init.body });
    assert.equal(init.method, 'POST');
    if (requests.length === 1) return Response.json({ id: 'resp_lookup', object: 'response', status: 'completed', output: [{
      type: 'function_call', id: 'fc_lookup', call_id: 'call_lookup', name: 'read_reference_file',
      arguments: JSON.stringify({ path: 'maintenance/translation-glossary.md', offset: 0, length: 1000 }), status: 'completed',
    }] });
    return Response.json({ id: 'resp_wire', object: 'response', status: 'completed', output: [{
      id: 'msg_wire', type: 'message', role: 'assistant', status: 'completed',
      content: [{ type: 'output_text', text: JSON.stringify({ edits: [] }), annotations: [] }],
    }] });
  } });
  const result = await translateWithOpenAI({ manual: 'Example', locale: 'de', source: english, current: translated, glossary: 'Terms',
    references: new Map([['maintenance/translation-glossary.md', 'Keep BactoSense unchanged.']]),
  }, { client });
  assert.equal(result, translated);
  assert.equal(requests.length, 2);
  assert.equal(requests[0].url, 'https://api.openai.com/v1/responses');
  assert.equal(requests[0].headers.has('OpenAI-Beta'), false);
  const request = JSON.parse(requests[0].body);
  assert.equal(request.text.format.strict, true);
  assert.equal(request.text.format.name, 'translation_patch');
  assert.equal(request.model, 'gpt-6.1-terra');
  assert.equal(request.store, false);
  const continuation = JSON.parse(requests[1].body);
  const toolOutput = continuation.input.find(item => item.type === 'function_call_output');
  assert.equal(toolOutput.call_id, 'call_lookup');
  assert.equal(JSON.parse(toolOutput.output).content, 'Keep BactoSense unchanged.');
  assert.equal(continuation.store, false);
  assert.equal(continuation.previous_response_id, undefined);
});

test('the installed SDK exposes failed response diagnostics and HTTP request IDs', async () => {
  const client = new OpenAI({ apiKey: 'test-key', maxRetries: 0, fetch: async () => Response.json({
    id: 'resp_failed', object: 'response', status: 'failed', output: [],
    error: { code: 'server_error', message: 'An internal model error occurred.' },
  }, { headers: { 'x-request-id': 'req_failed' } }) });
  await assert.rejects(translateWithOpenAI({ locale: 'de', source: english, current: translated, targetPath: target }, { client }), error => {
    assert.match(error.message, /\[server_error\] An internal model error occurred/);
    assert.equal(error.apiError.responseId, 'resp_failed');
    assert.equal(error.apiError.requestId, 'req_failed');
    return true;
  });
});

test('reference tools read document snapshots and cannot expose unrelated files or credentials', async t => {
  const options = await fixture(t);
  await writeFile(path.join(options.root, '.env'), 'OPENAI_API_KEY=never-return-this');
  await writeFile(path.join(options.root, 'private.md'), 'Private reference outside the manual inventory.');
  const plan = await planSync({ ...options, force: true });
  const harness = createReferenceTools(plan.tasks[0].references);
  await writeFile(path.join(options.root, target), 'Edited after planning.');
  const listed = harness.execute('list_reference_files', { prefix: 'manuals/' });
  assert.deepEqual(listed.files.map(file => file.path), ['manuals/example/01-installation.md']);
  const read = harness.execute('read_reference_file', { path: target, offset: 0, length: 20 });
  assert.equal(read.content, translated.slice(0, 20));
  assert.equal(read.next_offset, 20);
  const rest = harness.execute('read_reference_file', { path: target, offset: 20, length: 16000 });
  assert.equal(read.content + rest.content, translated);
  assert.equal(rest.next_offset, null);
  for (const filename of ['.env', '../.env', 'manuals/example/../../.env', 'private.md', 'C:\\secret.md', '/etc/passwd']) {
    assert.throws(() => harness.execute('read_reference_file', { path: filename, offset: 0, length: 100 }), /not an available reference/);
  }
  assert.throws(() => harness.execute('run_shell', { command: 'anything' }), /Unknown reference tool/);
  assert.throws(() => harness.execute('read_reference_file', { path: target, offset: -1, length: 100 }), /offset/);
  assert.throws(() => harness.execute('read_reference_file', { path: target, offset: 0, length: 16001 }), /length/);
  assert.throws(() => harness.execute('search_reference_files', { prefix: '', query: '' }), /Search query/);
});

test('reference search returns literal case-insensitive excerpts with bounded results', () => {
  const harness = createReferenceTools(new Map([
    ['manuals/example/chapter.md', 'BactoSense [Safety].\n' + 'BactoSense '.repeat(40)],
    ['maintenance/translation-glossary.md', 'Keep [Safety] literal.'],
  ]));
  const literal = harness.execute('search_reference_files', { query: '[safety]', prefix: 'manuals/' });
  assert.equal(literal.matches.length, 1);
  assert.equal(literal.matches[0].offset, 11);
  assert.match(literal.matches[0].excerpt, /BactoSense \[Safety\]/);
  const many = harness.execute('search_reference_files', { query: 'bactosense', prefix: '' });
  assert.equal(many.matches.length, 30);
  assert.equal(many.truncated, true);
});

test('tool continuations preserve reasoning and assistant phases, recover denied reads and report every API request', async t => {
  const options = await fixture(t);
  const requests = [];
  const functionCall = (id, name, args) => ({ type: 'function_call', id: `fc_${id}`, call_id: id, name, arguments: JSON.stringify(args) });
  const reasoning = { type: 'reasoning', id: 'rs_test', summary: [], encrypted_content: 'opaque-reasoning' };
  const commentary = { type: 'message', id: 'msg_context', role: 'assistant', phase: 'commentary', content: [{ type: 'output_text', text: 'Checking terminology.', annotations: [] }] };
  const client = { responses: { async create(request) {
    requests.push(request);
    if (requests.length === 1) return { id: 'resp_one', status: 'completed', output: [reasoning, commentary,
      functionCall('call_list', 'list_reference_files', { prefix: 'i18n/de/' }),
      functionCall('call_search', 'search_reference_files', { prefix: '', query: 'Modbus' }),
      functionCall('call_denied', 'read_reference_file', { path: '.env', offset: 0, length: 100 }),
    ] };
    if (requests.length === 2) {
      assert.deepEqual(request.input.find(item => item.type === 'reasoning'), reasoning);
      assert.equal(request.input.find(item => item.type === 'message').phase, 'commentary');
      const results = request.input.filter(item => item.type === 'function_call_output');
      assert.equal(results.length, 3);
      assert.equal(JSON.parse(results.find(item => item.call_id === 'call_list').output).files[0].path, target);
      assert.match(JSON.parse(results.find(item => item.call_id === 'call_denied').output).error, /not an available reference/);
      assert.equal(JSON.parse(results.find(item => item.call_id === 'call_search').output).matches[0].path, 'maintenance/translation-glossary.md');
      return { id: 'resp_two', status: 'completed', output: [functionCall('call_read', 'read_reference_file', { path: target, offset: 0, length: 16000 })] };
    }
    assert.equal(JSON.parse(request.input.find(item => item.call_id === 'call_read' && item.type === 'function_call_output').output).content, translated);
    return { id: 'resp_final', status: 'completed', output_text: JSON.stringify({ edits: [] }) };
  } } };
  const result = await syncTranslations({ ...options, force: true,
    translate: (task, hooks) => translateWithOpenAI(task, { ...hooks, client }),
  });
  assert.equal(result.report.counts.apiAttempts, 3);
  assert.equal(result.report.counts.referenceLookups, 4);
  assert.equal(result.report.files[0].attempts, 1);
  assert.equal(result.report.files[0].referenceLookups[2].status, 'error');
  assert.equal(result.report.files[0].referenceLookups[3].arguments.path, target);
  assert(requests.every(request => request.store === false && request.tools.length === 3));
  const markdown = await readFile(path.join(options.root, 'output/translations/sync-report.md'), 'utf8');
  assert.match(markdown, /API requests \(including tool follow-ups and repairs\) \| 3/);
  assert.match(markdown, /Reference lookups \| 4/);
});

test('malformed tool calls become tool errors and repeated lookups have a finite request limit', async () => {
  const seen = [], audit = [];
  const client = { responses: { async create(request) {
    seen.push(request);
    return { id: `resp_${seen.length}`, status: 'completed', output: [{
      type: 'function_call', id: `fc_${seen.length}`, call_id: `call_${seen.length}`, name: 'read_reference_file', arguments: '{broken',
    }] };
  } } };
  await assert.rejects(runResponseWithTools({ client, request: { model: 'test-model', input: 'Read references.' },
    references: new Map(), maxToolRounds: 1, onToolCall: lookup => audit.push(lookup),
  }), error => {
    assert.equal(error.code, 'reference_lookup_limit');
    assert.equal(error.translationResponse.id, 'resp_2');
    return true;
  });
  assert.equal(seen.length, 2);
  assert.equal(seen[1].tool_choice, 'none');
  assert.equal(audit[0].status, 'error');
  assert.match(JSON.parse(seen[1].input.find(item => item.type === 'function_call_output').output).error, /valid JSON/);
});

function completedResponse(id, markdown) {
  return { id, status: 'completed', output_text: JSON.stringify({ markdown }), output: [{
    id: `msg_${id}`, type: 'message', role: 'assistant', phase: 'final_answer', status: 'completed',
    content: [{ type: 'output_text', text: JSON.stringify({ markdown }), annotations: [] }],
  }] };
}

function completedPatchResponse(id, sections, markdown) {
  const wanted = new Map(splitTranslationSections(markdown).map(part => [part.id, part.text]));
  const edits = sections.filter(section => wanted.get(section.id) !== section.current_translation).map(section => ({
    section_id: section.id, search: section.current_translation, replace: wanted.get(section.id),
  }));
  const response = completedResponse(id, '');
  response.output_text = JSON.stringify({ edits });
  response.output[0].content[0].text = response.output_text;
  return response;
}

test('all languages share one sequential conversation, with fresh memory for the next sync run', async t => {
  const options = await fixture(t);
  const contexts = [], requests = [];
  const french = translated.replace('/gui/de/', '/gui/fr/').replace('Sicherheit', 'Sécurité');
  let active = 0, peak = 0;
  const client = { responses: { async create(request) {
    requests.push(request);
    const task = JSON.parse(request.input.at(-1).content);
    if (task.locale === 'de') assert.equal(request.input.length, 2, 'Each sync run starts with guidance and its first task.');
    else {
      assert.equal(task.locale, 'fr');
      const previous = request.input.find(item => item.role === 'assistant');
      assert(Array.isArray(JSON.parse(previous.content[0].text).edits));
      const validation = request.input.filter(item => item.role === 'user').map(item => JSON.parse(item.content)).find(item => item.translation_validation);
      assert.equal(validation.locale, 'de');
      assert.equal(validation.translation_validation, 'passed');
      assert.equal(task.language, 'French');
      assert(task.sections.some(section => section.english.includes('Disconnect power before cleaning.')));
      assert.equal(request.input.filter(item => item.role === 'user' && JSON.parse(item.content).type === 'translation_guidance').length, 1);
    }
    return completedPatchResponse(`resp_${requests.length}`, task.sections, task.locale === 'de' ? translated : french);
  } } };
  const translate = async (task, hooks) => {
    contexts.push(hooks.conversation);
    peak = Math.max(peak, ++active);
    try { return await translateWithOpenAI(task, { ...hooks, client }); }
    finally { active--; }
  };
  for (let run = 0; run < 2; run++) {
    const plan = await syncTranslations({ ...options, manuals: [{ ...manual, locales: ['en', 'de', 'fr'] }], force: true, translate });
    assert.equal(plan.report.conversation.shared, true);
    assert.equal(plan.report.conversation.scope, 'sync_run');
    assert.equal(plan.report.counts.apiAttempts, 2);
  }
  assert.equal(peak, 1);
  assert.equal(contexts[0], contexts[1]);
  assert.equal(contexts[2], contexts[3]);
  assert.notEqual(contexts[0], contexts[2]);
});

test('compaction preserves the latest encrypted memory and final reply for the next chapter', async () => {
  const conversation = createResponseConversation({ compactThreshold: 1000 });
  conversation.history.push({ role: 'user', content: 'Older chapter context.' });
  const compactions = [], requests = [];
  const latest = { type: 'compaction', id: 'cmp_latest', encrypted_content: 'opaque-current-memory' };
  const first = completedResponse('resp_compacted', translated);
  first.output.unshift({ type: 'compaction', id: 'cmp_older', encrypted_content: 'opaque-old-memory' }, latest);
  const client = { responses: { async create(request) {
    requests.push(request);
    assert.deepEqual(request.context_management, [{ type: 'compaction', compact_threshold: 1000 }]);
    if (requests.length === 1) return first;
    assert.deepEqual(request.input, [latest, first.output.at(-1), { role: 'user', content: 'Next chapter.' }]);
    return completedResponse('resp_next', translated);
  } } };
  await runResponseWithTools({ client, conversation, request: { model: 'test-model', input: 'First chapter.' }, onCompaction: item => compactions.push(item) });
  assert.equal(conversation.compactions, 2);
  assert.equal(compactions.length, 2);
  assert.deepEqual(conversation.history, [latest, first.output.at(-1)]);
  await runResponseWithTools({ client, conversation, request: { model: 'test-model', input: 'Next chapter.' } });
  assert.equal(conversation.history.at(-1).id, 'msg_resp_next');
  assert.equal(conversation.busy, false);
});

test('failed tool loops do not poison shared memory with unresolved function calls', async () => {
  const conversation = createResponseConversation();
  const remembered = { role: 'user', content: 'Remembered terminology.' };
  conversation.history.push(remembered);
  let requests = 0;
  const client = { responses: { async create() {
    if (++requests === 2) throw new Error('Connection lost.');
    return { id: 'resp_tool', status: 'completed', output: [{
      id: 'fc_pending', type: 'function_call', call_id: 'call_pending', name: 'list_reference_files', arguments: '{"prefix":""}',
    }] };
  } } };
  await assert.rejects(runResponseWithTools({ client, conversation, request: { model: 'test-model', input: 'Read references.' } }), /Connection lost/);
  assert.deepEqual(conversation.history, [remembered]);
  assert.equal(conversation.busy, false);
});

test('simultaneous requests cannot fork the same conversation history', async () => {
  const conversation = createResponseConversation();
  let release, requests = 0;
  const client = { responses: { create() {
    requests++;
    return new Promise(resolve => { release = resolve; });
  } } };
  const first = runResponseWithTools({ client, conversation, request: { model: 'test-model', input: 'First chapter.' } });
  await assert.rejects(runResponseWithTools({ client, conversation, request: { model: 'test-model', input: 'Concurrent chapter.' } }), /already processing/);
  release(completedResponse('resp_one', translated));
  await first;
  assert.equal(requests, 1);
  assert.equal(conversation.busy, false);
});

test('a later failure preserves the original files despite earlier validated conversation turns', async t => {
  const options = await fixture(t);
  const stateFile = path.join(options.root, 'maintenance/translation-sync.json');
  const before = await readFile(stateFile, 'utf8');
  await writeFile(path.join(options.root, 'manuals/example/01-installation.md'), english + '\nNew instruction.\n');
  let requests = 0;
  const client = { responses: { async create(request) {
    if (++requests === 1) return completedPatchResponse('resp_valid', JSON.parse(request.input.at(-1).content).sections, translated + '\nNeue Anweisung.\n');
    return { id: 'resp_failed', status: 'failed', error: { code: 'server_error', message: 'Model failure.' } };
  } } };
  await assert.rejects(syncTranslations({ ...options, manuals: [{ ...manual, locales: ['en', 'de', 'fr'] }],
    translate: (task, hooks) => translateWithOpenAI(task, { ...hooks, client }),
  }), /Model failure/);
  const report = await readReport(options);
  assert.equal(report.counts.notApplied, 1);
  assert.equal(report.counts.failed, 1);
  assert.equal(report.counts.modified, 0);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
  assert.equal(await readFile(stateFile, 'utf8'), before);
});
