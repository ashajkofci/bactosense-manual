import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, unlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import OpenAI from 'openai';
import { planSync, syncTranslations, translateWithOpenAI } from './sync-translations.mjs';
import { translationErrors } from './translation-structure.mjs';
import { writeSyncOutputs } from './sync-translations-report.mjs';
import { createReferenceTools, createResponseConversation, responseRetryDelay, runResponseWithTools } from './translation-tools.mjs';
import { applyTranslationPatch, planTranslationPatch, sectionSnapshot, splitTranslationSections } from './translation-patches.mjs';
import { reviewTranslation } from './translation-review.mjs';

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
  const options = { root, manuals: [manual], log: silent, review: async () => [] };
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

test('tasks use product metadata and expose introductions through reference tools', async t => {
  const options = await fixture(t);
  const sourceWelcome = english.replace('sidebar_position: 1', 'sidebar_position: 0');
  const translatedWelcome = translated.replace('sidebar_position: 1', 'sidebar_position: 0');
  await writeFile(path.join(options.root, 'manuals/example/welcome.md'), sourceWelcome);
  await writeFile(path.join(options.root, path.dirname(target), 'welcome.md'), translatedWelcome);
  const plan = await planSync({ ...options, force: true });
  const task = plan.tasks.find(task => task.targetPath === target);
  assert.match(task.glossary, /Modbus/);
  assert.match(task.context, /instrument operators/);
  assert.equal(task.manualContext.id, 'example');
  assert.equal(task.manualContext.english_introduction, undefined);
  assert.equal(task.references.get('manuals/example/welcome.md'), sourceWelcome);
  assert.equal(task.references.get(path.posix.join(path.posix.dirname(target), 'welcome.md')), translatedWelcome);
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

test('technical checks reject changed quantities, ranges, units and inequality directions', () => {
  const source = english + '\nWait 30 minutes. Limit < 50 C. Range -5-10 mA. Register 0x1234.\n';
  const candidate = translated + '\n30 Minuten warten. Grenze < 50 C. Bereich -5-10 mA. Register 0x1234.\n';
  assert.deepEqual(translationErrors(source, candidate, 'de'), []);
  for (const [before, after] of [['30 Minuten', '300 Minuten'], ['30 Minuten', 'Minuten'], ['< 50', '> 50'], ['-5-10', '-5-100'], ['10 mA', '10 V'], ['0x1234', '0x1235']]) {
    assert(translationErrors(source, candidate.replace(before, after), 'de').length, `${before} -> ${after}`);
  }
});

test('technical checks accept localized decimals, grouping, units and reordered prose', () => {
  const source = english + '\nWait 30 minutes. Use 1,234.5 mL and 2.5 mA. Limit >= -5 C.\n';
  const candidates = {
    de: '2,5 mA verwenden und 1.234,5 mL. 30 Minuten warten. Grenze >= -5 C.',
    fr: '2,5 mA et 1\u202f234,5 mL. Attendre 30 minutes. Limite >= -5 C.',
    it: '2,5 mA e 1.234,5 mL. Attendere 30 minuti. Limite >= -5 C.',
    es: '2,5 mA y 1.234,5 mL. Esperar 30 minutos. L\u00edmite >= -5 C.',
  };
  for (const [locale, prose] of Object.entries(candidates)) {
    assert.deepEqual(translationErrors(source, translated.replace('/gui/de/', `/gui/${locale}/`) + `\n${prose}\n`, locale), [], locale);
  }
  assert(translationErrors(source, translated + '\nWait 30 minutes. Use 2.5 mL and 1,234.5 mA. Limit >= -5 C.\n', 'de').length);
});

test('technical checks preserve table boundaries, versions, scientific notation and apostrophe grouping', () => {
  const source = english + '\nVersion 1.4.0. <table><tr><td>TCC</td><td>100</td></tr></table>\n0 - 5\u00b4000\u00b4000 cells/mL. 488 nm. 260 \u03bcL. 30 min. 1e-3 mA.\n';
  const candidate = translated + '\nVersion 1.4.0. <table><tr><td>TCC</td><td>100</td></tr></table>\n0 - 5.000.000 Zellen/mL. 488nm. 260 \u00b5L. 30 Minuten. 0,001 mA.\n';
  assert.deepEqual(translationErrors(source, candidate, 'de'), []);
  for (const [before, after] of [['1.4.0', '1.4.1'], ['5.000.000', '50.000.000'], ['0,001 mA', '0,01 mA']]) {
    assert(translationErrors(source, candidate.replace(before, after), 'de').length);
  }
});

test('technical checks accept repeated range units, emphasized quantities and hyphenated identifier suffixes', () => {
  const source = english + '\n5 C - 40 C. Use 5 mL. RJ45 Gigabit. IP67 connector.\n';
  const candidate = translated + '\n5-40 C. **5** ml verwenden. RJ45-Gigabit. IP67-Stecker.\n';
  assert.deepEqual(translationErrors(source, candidate, 'de'), []);
  assert(translationErrors(source, candidate.replace('5-40 C', '40-5 C'), 'de').length);
  assert(translationErrors(source, candidate.replace('IP67', 'IP68'), 'de').length);
});

test('technical checks do not round distinct large integers or precise decimal values into equality', () => {
  for (const [before, after] of [['9007199254740992', '9007199254740993'], ['1.0000000000000001', '1.0000000000000002']]) {
    const source = english + `\nLimit ${before} mL.\n`;
    const candidate = translated + `\nGrenze ${before} mL.\n`;
    assert.deepEqual(translationErrors(source, candidate, 'de'), []);
    assert(translationErrors(source, candidate.replace(before, after), 'de').length);
  }
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

test('transient HTTP retries count every attempt and do not repeat reference execution', async () => {
  const payloads = [], waits = [], retries = [], lookups = [];
  let attempts = 0;
  const client = new OpenAI({ apiKey: 'test-key', fetch: async (url, init) => {
    payloads.push(init.body);
    if (payloads.length === 1 || payloads.length === 3) return Response.json({ error: { message: 'Temporary failure' } }, {
      status: payloads.length === 1 ? 429 : 503, headers: { 'retry-after-ms': '25' },
    });
    if (payloads.length === 2) return Response.json({ id: 'resp_lookup', object: 'response', status: 'completed', output: [{
      type: 'function_call', id: 'fc_retry', call_id: 'call_retry', name: 'list_reference_files', arguments: '{"prefix":""}',
    }] });
    return Response.json({ id: 'resp_done', object: 'response', status: 'completed', output: [] });
  } });
  await runResponseWithTools({ client, request: { model: 'test-model', input: 'Translate.' },
    onRequest: () => attempts++, onRetry: retry => retries.push(retry), onToolCall: lookup => lookups.push(lookup),
    sleep: async milliseconds => waits.push(milliseconds),
  });
  assert.equal(attempts, 4);
  assert.equal(lookups.length, 1);
  assert.equal(retries.length, 2);
  assert.deepEqual(waits, [25, 25]);
  assert.equal(payloads[0], payloads[1]);
  assert.equal(payloads[2], payloads[3]);
});

test('HTTP retries are bounded and permanent, vetoed and uncertain failures are not replayed', async () => {
  for (const [failure, expected] of [
    [{ status: 503 }, 3], [{ status: 429 }, 3], [{ status: 400 }, 1], [{ status: 401 }, 1],
    [{ status: 429, code: 'insufficient_quota' }, 1], [{ status: 503, headers: { 'x-should-retry': 'false' } }, 1],
    [{ name: 'APIConnectionError' }, 1], [{ status: 503, name: 'AbortError' }, 1],
  ]) {
    let attempts = 0;
    const error = Object.assign(new Error('Unavailable'), failure);
    const conversation = createResponseConversation();
    await assert.rejects(runResponseWithTools({ client: { responses: { create: async () => { throw error; } } },
      conversation, request: { model: 'test-model', input: 'Translate.' }, onRequest: () => attempts++, sleep: async () => {},
    }), error);
    assert.equal(attempts, expected, JSON.stringify(failure));
    assert.deepEqual(conversation.history, []);
    assert.equal(conversation.busy, false);
  }
});

test('retry delays respect server hints and cancellation interrupts backoff', async () => {
  const now = Date.parse('2026-01-01T00:00:00Z');
  assert.equal(responseRetryDelay({ headers: { 'retry-after-ms': '125' } }, 0), 125);
  assert.equal(responseRetryDelay({ headers: { 'retry-after': '2' } }, 0), 2000);
  assert.equal(responseRetryDelay({ headers: { 'retry-after': 'Thu, 01 Jan 2026 00:00:03 GMT' } }, 0, { now }), 3000);
  assert.equal(responseRetryDelay({}, 1, { random: 0 }), 1500);
  const controller = new AbortController();
  let attempts = 0;
  await assert.rejects(runResponseWithTools({ client: { responses: { create: async () => {
    attempts++; throw Object.assign(new Error('Rate limited'), { status: 429 });
  } } }, request: { model: 'test-model', input: 'Translate.' }, signal: controller.signal,
    onRetry: () => controller.abort(),
  }), { name: 'AbortError' });
  assert.equal(attempts, 1);
});

test('semantic reviewer uses an isolated tool-free context and grounded structured findings', async () => {
  const task = { source: english, candidate: translated, locale: 'de', glossary: 'Keep Modbus.', context: 'Operators.', record: {} };
  const finding = { section_id: 'section-1-1', category: 'safety', source_quote: 'Disconnect power before cleaning.', candidate_quote: 'Vor der Reinigung die Stromversorgung trennen.', explanation: 'Example finding.' };
  let calls = 0;
  const client = { responses: { async create(request) {
    calls++;
    assert.equal(request.input.length, 1);
    assert.deepEqual(request.tools, []);
    assert.equal(request.tool_choice, 'none');
    assert.equal(request.store, false);
    assert.equal(request.text.format.strict, true);
    const packet = JSON.parse(request.input[0].content);
    assert.equal(packet.task, 'review_translation');
    assert.equal(packet.glossary, task.glossary);
    assert(packet.sections.some(section => section.english.includes('Disconnect power before cleaning.')));
    return { id: 'resp_review', status: 'completed', output_text: JSON.stringify({ findings: calls === 1 ? [finding] : [] }), output: [] };
  } } };
  assert.deepEqual(await reviewTranslation(task, { client }), [finding]);
  assert.deepEqual(await reviewTranslation(task, { client }), []);
  assert.equal(task.record.reviewRequests, 2);
  assert.equal(task.record.apiRequests, 2);
});

test('semantic reviewer rejects incomplete, refused, malformed and ungrounded results', async () => {
  for (const response of [
    { status: 'incomplete', incomplete_details: { reason: 'max_output_tokens' } },
    { status: 'failed', error: { code: 'server_error', message: 'Review unavailable' } },
    { output: [{ type: 'message', content: [{ type: 'refusal', refusal: 'Refused' }] }] },
    { output_text: '' }, { output_text: '{invalid' }, { output_text: '{"findings":[],"extra":true}' },
    { output_text: JSON.stringify({ findings: [{ section_id: 'section-1-1', category: 'safety', source_quote: 'Invented quote', candidate_quote: '', explanation: 'Incorrect.' }] }) },
  ]) {
    const client = { responses: { async create() { return { id: 'resp_review', status: 'completed', output_text: '{"findings":[]}', output: [], ...response }; } } };
    await assert.rejects(reviewTranslation({ source: english, candidate: translated, locale: 'de' }, { client }), /semantic review failed/);
  }
});

test('semantic safety findings repair against original text before publishing references or writing files', async t => {
  const options = await fixture(t);
  const broken = translated.replace('Stromversorgung trennen.', 'Stromversorgung nicht trennen.');
  let translations = 0, reviews = 0;
  const result = await syncTranslations({ ...options, force: true,
    translate: async (task, hooks) => {
      translations++;
      hooks.onRequest();
      if (translations === 2) {
        assert.equal(task.current, translated);
        assert.match(task.feedback, /Semantic review.*safety/);
        assert.equal(task.candidate, broken);
      }
      return translations === 1 ? broken : translated;
    },
    review: async (task, hooks) => {
      reviews++;
      assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
      assert.equal(task.references.get(target), translated);
      const client = { responses: { async create() {
        return { id: 'resp_safety_review', status: 'completed', output: [], output_text: JSON.stringify({ findings: reviews === 1 ? [{
          section_id: 'section-1-1', category: 'safety', source_quote: 'Disconnect power before cleaning.',
          candidate_quote: 'Vor der Reinigung die Stromversorgung nicht trennen.', explanation: 'The translation reverses the requirement to disconnect power.',
        }] : [] }) };
      } } };
      return reviewTranslation(task, { ...hooks, client });
    },
  });
  assert.equal(translations, 2);
  assert.equal(reviews, 2);
  assert.equal(result.report.counts.apiAttempts, 4);
  assert.equal(result.report.counts.reviewRequests, 2);
  assert.equal(result.report.counts.reviewFindings, 1);
  assert.equal(result.report.counts.unchanged, 1);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
});

test('semantic review HTTP retries are counted in reports without repeating the translation', async t => {
  const options = await fixture(t);
  let translations = 0, reviews = 0;
  const client = new OpenAI({ apiKey: 'test-key', fetch: async () => {
    if (++reviews === 1) return Response.json({ error: { message: 'Rate limited' } }, { status: 429, headers: { 'retry-after-ms': '0' } });
    return Response.json({ id: 'resp_review_retry', object: 'response', status: 'completed', output: [{
      id: 'msg_review_retry', type: 'message', role: 'assistant', status: 'completed',
      content: [{ type: 'output_text', text: '{"findings":[]}', annotations: [] }],
    }] });
  } });
  const result = await syncTranslations({ ...options, force: true,
    translate: async (task, hooks) => { translations++; hooks.onRequest(); return translated; },
    review: (task, hooks) => reviewTranslation(task, { ...hooks, client }),
  });
  assert.equal(translations, 1);
  assert.equal(reviews, 2);
  assert.equal(result.report.counts.apiAttempts, 3);
  assert.equal(result.report.counts.reviewRequests, 2);
  assert.equal(result.report.counts.requestRetries, 1);
  assert.equal(result.report.files[0].requestRetries[0].phase, 'review');
});

test('technical validation catches quantities moved between sections before semantic review', async t => {
  const options = await fixture(t);
  const source = english + '\nWait 30 minutes.\n\n## Second {#second}\n\nWait 10 minutes.\n';
  const wrong = translated + '\n10 Minuten warten.\n\n## Zweite {#second}\n\n30 Minuten warten.\n';
  await writeFile(path.join(options.root, 'manuals/example/01-installation.md'), source);
  const state = await readFile(path.join(options.root, 'maintenance/translation-sync.json'), 'utf8');
  await assert.rejects(syncTranslations({ ...options, force: true, translate: async () => wrong,
    review: () => assert.fail('Deterministic failure must not request semantic review'),
  }), /section-1-1: Technical quantities differ/);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
  assert.equal(await readFile(path.join(options.root, 'maintenance/translation-sync.json'), 'utf8'), state);
});

test('unresolved semantic omissions and reviewer failures leave translations and manifest untouched', async t => {
  for (const failure of ['omission', 'http', 'outside']) {
    const options = await fixture(t);
    const stateFile = path.join(options.root, 'maintenance/translation-sync.json');
    const state = await readFile(stateFile, 'utf8');
    let calls = 0;
    await assert.rejects(syncTranslations({ ...options, force: true,
      translate: async () => { calls++; return translated.replace('Vor der Reinigung die Stromversorgung trennen.', 'Reinigung.'); },
      review: async task => {
        if (failure === 'http') {
          const client = { responses: { async create() { throw Object.assign(new Error('Unauthorized'), { status: 401, request_id: 'req_review_failed' }); } } };
          return reviewTranslation(task, { client });
        }
        return [{ section_id: failure === 'outside' ? 'unselected-section' : 'section-1-1', category: 'omission',
          source_quote: 'Disconnect power before cleaning.', candidate_quote: '', explanation: 'The disconnection instruction is missing.' }];
      },
    }), failure === 'http' ? /semantic review failed.*Unauthorized/ : failure === 'outside' ? /outside the selected sections/ : /failed validation after repair/);
    assert.equal(calls, failure === 'omission' ? 2 : 1);
    assert.equal(await readFile(stateFile, 'utf8'), state);
    assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
    assert.equal((await readReport(options)).counts.modified, 0);
  }
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
  assert.match(markdown, /API requests \(including reviews, retries, tool follow-ups and repairs\) \| 3/);
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

test('an exact-match conflict is repaired against the original sections before any file is written', async t => {
  const options = await fixture(t);
  const source = english.replace('Disconnect power before cleaning.', 'Disconnect power before cleaning. Then wait.');
  const expected = translated.replace('Vor der Reinigung die Stromversorgung trennen.', 'Vor der Reinigung die Stromversorgung trennen. Danach warten.');
  await writeFile(path.join(options.root, 'manuals/example/01-installation.md'), source);
  let requests = 0;
  const client = { responses: { async create(request) {
    const task = JSON.parse(request.input.at(-1).content);
    assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
    assert.deepEqual(task.sections.map(section => section.id), ['section-1-1']);
    if (++requests === 1) {
      const response = completedPatchResponse('resp_conflict', task.sections, expected);
      const patch = JSON.parse(response.output_text);
      patch.edits[0].search = 'This text does not occur in the original translation.';
      response.output_text = response.output[0].content[0].text = JSON.stringify(patch);
      return response;
    }
    assert.match(task.validation_feedback, /exactly once/);
    assert.equal(task.previous_candidate_sections, null);
    assert(!task.sections[0].current_translation.includes('Danach warten.'));
    return completedPatchResponse('resp_repaired', task.sections, expected);
  } } };
  const result = await syncTranslations({ ...options, translate: (task, hooks) => translateWithOpenAI(task, { ...hooks, client }) });
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), expected);
  assert.equal(result.report.counts.apiAttempts, 2);
  assert.equal(result.report.counts.selectedSections, 1);
  assert.equal(result.report.counts.patchEdits, 1);
  assert.equal(result.report.files[0].attempts, 2);
});

test('later translations can read earlier validated results before those files are committed', async t => {
  const options = await fixture(t);
  await writeFile(path.join(options.root, 'manuals/example/01-installation.md'), english + '\nNew instruction.\n');
  const expected = translated + '\nNeue Anweisung.\n';
  const french = translated.replace('/gui/de/', '/gui/fr/').replace('Sicherheit', 'Sécurité') + '\nNouvelle instruction.\n';
  let requests = 0, frenchTask;
  const client = { responses: { async create(request) {
    assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated);
    requests++;
    if (requests === 1) return completedPatchResponse('resp_german', JSON.parse(request.input.at(-1).content).sections, expected);
    if (requests === 2) {
      frenchTask = JSON.parse(request.input.at(-1).content);
      return { id: 'resp_read_staged', status: 'completed', output: [{
        id: 'fc_read_staged', type: 'function_call', call_id: 'call_read_staged', name: 'read_reference_file',
        arguments: JSON.stringify({ path: target, offset: 0, length: 16000 }),
      }] };
    }
    assert.equal(JSON.parse(request.input.at(-1).output).content, expected);
    return completedPatchResponse('resp_french', frenchTask.sections, french);
  } } };
  const result = await syncTranslations({ ...options, manuals: [{ ...manual, locales: ['en', 'de', 'fr'] }],
    translate: (task, hooks) => translateWithOpenAI(task, { ...hooks, client }),
  });
  assert.equal(result.report.counts.apiAttempts, 3);
  assert.equal(result.report.counts.referenceLookups, 1);
  assert.equal(result.report.counts.modified, 1);
  assert.equal(result.report.counts.created, 1);
});

test('section deletion and reordering need no API request when the remaining translation is valid', async t => {
  const options = await fixture(t);
  const second = '## Second {#second}\n\nAnother instruction.\n\n';
  const third = '## Third {#third}\n\nFinal instruction.\n\n';
  const germanSecond = second.replace('Second', 'Zweiter').replace('Another instruction.', 'Eine weitere Anweisung.');
  const germanThird = third.replace('Third', 'Dritter').replace('Final instruction.', 'Letzte Anweisung.');
  const sourceFile = path.join(options.root, 'manuals/example/01-installation.md');
  await writeFile(sourceFile, english + '\n' + second + third);
  await writeFile(path.join(options.root, target), translated + '\n' + germanSecond + germanThird);
  await writeFile(path.join(options.root, 'maintenance/translation-sync.json'), JSON.stringify((await planSync({ ...options, force: true })).nextState));
  // Remove the first anchored section and move the third before the second.
  const frontmatter = english.slice(0, english.indexOf('## Safety'));
  await writeFile(sourceFile, frontmatter + third + second);
  const client = { responses: { create: () => assert.fail('Layout-only changes must not access the API.') } };
  const result = await syncTranslations({ ...options, translate: (task, hooks) => translateWithOpenAI(task, { ...hooks, client }) });
  assert.equal(result.report.counts.apiAttempts, 0);
  assert.equal(result.report.counts.selectedSections, 0);
  assert.equal(result.report.counts.removedSections, 1);
  assert.equal(await readFile(path.join(options.root, target), 'utf8'), translated.slice(0, translated.indexOf('## Sicherheit')) + germanThird + germanSecond);
});

test('glossary and product guidance are refreshed after shared conversation compaction', async () => {
  const conversation = createResponseConversation({ compactThreshold: 1000 });
  const task = { source: english, current: translated, locale: 'de', glossary: 'Keep Modbus.', context: 'Operators.' };
  let requests = 0;
  const client = { responses: { async create(request) {
    const guidance = request.input.filter(item => item.role === 'user' && JSON.parse(item.content).type === 'translation_guidance');
    assert.equal(guidance.length, 1);
    assert.equal(JSON.parse(guidance[0].content).glossary, task.glossary);
    const response = completedPatchResponse(`resp_guidance_${++requests}`, JSON.parse(request.input.at(-1).content).sections, translated);
    if (requests === 1) response.output.unshift({ type: 'compaction', id: 'cmp_guidance', encrypted_content: 'opaque-memory' });
    else assert.equal(request.input[0].type, 'compaction');
    return response;
  } } };
  await translateWithOpenAI(task, { client, conversation });
  await translateWithOpenAI(task, { client, conversation });
  assert.equal(requests, 2);
  assert.equal(conversation.compactions, 1);
});

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
