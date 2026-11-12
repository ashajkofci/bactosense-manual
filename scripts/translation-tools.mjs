import { setTimeout as delay } from 'node:timers/promises';

const tool = (name, description, properties) => ({
  type: 'function', name, description, strict: true,
  parameters: { type: 'object', properties, required: Object.keys(properties), additionalProperties: false },
});
const prefix = { type: 'string', maxLength: 500, description: 'Repository path prefix to filter references; use an empty string for all files.' };
const definitions = [
  tool('list_reference_files', 'List available manual chapters and translation guidance, with their character counts.', { prefix }),
  tool('search_reference_files', 'Find a literal phrase across reference files, ignoring case. Results include character offsets for reading context.', {
    query: { type: 'string', minLength: 1, maxLength: 200 }, prefix,
  }),
  tool('read_reference_file', 'Read a chunk of an available reference file. Offsets and lengths count characters, starting at zero. Use next_offset to continue.', {
    path: { type: 'string', minLength: 1, maxLength: 500 }, offset: { type: 'integer', minimum: 0 }, length: { type: 'integer', minimum: 1, maximum: 16000 },
  }),
];

// The planner supplies document snapshots. Tool arguments never become filesystem paths.
export function createReferenceTools(references = new Map()) {
  const files = new Map([...references].sort(([left], [right]) => left.localeCompare(right)));
  return {
    definitions,
    execute(name, args) {
      const definition = definitions.find(tool => tool.name === name);
      if (!definition) throw new Error('Unknown reference tool.');
      const keys = definition.parameters.required;
      if (!args || Array.isArray(args) || typeof args !== 'object' || Object.keys(args).length !== keys.length || keys.some(key => !Object.hasOwn(args, key))) {
        throw new Error('Invalid reference tool arguments.');
      }
      if ('prefix' in args && (typeof args.prefix !== 'string' || args.prefix.length > 500)) throw new Error('Invalid reference path prefix.');
      if (name === 'list_reference_files') {
        const matches = [...files].filter(([path]) => path.startsWith(args.prefix));
        return { files: matches.slice(0, 200).map(([path, text]) => ({ path, characters: text.length })), total: matches.length, truncated: matches.length > 200 };
      }
      if (name === 'search_reference_files') {
        if (typeof args.query !== 'string' || !args.query.trim() || args.query.length > 200) throw new Error('Search query must contain 1 to 200 characters.');
        const matches = [], query = args.query.toLowerCase();
        for (const [path, text] of files) {
          if (!path.startsWith(args.prefix)) continue;
          const lower = text.toLowerCase();
          for (let at = lower.indexOf(query); at >= 0; at = lower.indexOf(query, at + query.length)) {
            if (matches.length === 30) return { matches, truncated: true };
            matches.push({ path, offset: at, excerpt: text.slice(Math.max(0, at - 100), at + query.length + 100) });
          }
        }
        return { matches, truncated: false };
      }
      if (typeof args.path !== 'string' || !files.has(args.path)) throw new Error('File is not an available reference. Use list_reference_files to find valid paths.');
      const text = files.get(args.path);
      if (!Number.isInteger(args.offset) || args.offset < 0 || args.offset > text.length || !Number.isInteger(args.length) || args.length < 1 || args.length > 16000) {
        throw new Error('Read offset must be within the file; length must be an integer from 1 to 16000.');
      }
      const end = Math.min(text.length, args.offset + args.length);
      return { path: args.path, offset: args.offset, content: text.slice(args.offset, end), next_offset: end < text.length ? end : null, total_characters: text.length };
    },
  };
}

export function createResponseConversation({ compactThreshold = 200_000 } = {}) {
  if (!Number.isInteger(compactThreshold) || compactThreshold < 1000) throw new Error('Compaction threshold must be an integer of at least 1000 tokens.');
  return { history: [], guidance: new Map(), compactThreshold, compactions: 0, busy: false };
}

export function responseRetryDelay(error, retry, { now = Date.now(), random = Math.random() } = {}) {
  const headers = new Headers(error.headers);
  const milliseconds = headers.get('retry-after-ms');
  if (milliseconds !== null && Number.isFinite(Number(milliseconds)) && Number(milliseconds) >= 0) return Number(milliseconds);
  const after = headers.get('retry-after');
  if (after !== null) {
    if (after.trim() && Number.isFinite(Number(after)) && Number(after) >= 0) return Number(after) * 1000;
    const date = Date.parse(after);
    if (Number.isFinite(date)) return Math.max(0, date - now);
  }
  return Math.min(30_000, 1000 * 2 ** retry) * (0.75 + random * 0.25);
}

async function createResponse({ client, payload, signal, onRequest, onRetry, maxRetries, sleep, retryDelay }) {
  for (let retry = 0; ; retry++) {
    signal.throwIfAborted();
    onRequest();
    try { return await client.responses.create(payload, { signal, maxRetries: 0 }); }
    catch (error) {
      const status = error.status;
      const veto = new Headers(error.headers).get('x-should-retry') === 'false';
      const permanent = ['insufficient_quota', 'billing_hard_limit_reached', 'invalid_api_key', 'account_deactivated'].includes(error.code ?? error.error?.code);
      const transient = [408, 409, 429].includes(status) || (status >= 500 && status <= 599);
      if (signal.aborted || error.name === 'AbortError' || error.name === 'APIUserAbortError' || retry >= maxRetries || veto || permanent || !transient) throw error;
      const delayMs = retryDelay(error, retry);
      if (!Number.isFinite(delayMs) || delayMs < 0 || delayMs > 600_000) throw error;
      onRetry({ retry: retry + 1, status, delayMs, requestId: error.request_id ?? null });
      await sleep(delayMs, signal);
    }
  }
}

export async function runResponseWithTools({ client, request, references, conversation = createResponseConversation(), onRequest = () => {}, onToolCall = () => {}, onCompaction = () => {}, onRetry = () => {}, signal = AbortSignal.timeout(600_000), maxToolRounds = 6, maxToolCalls = 24, maxRetries = 2, referenceTools = true, sleep = (milliseconds, signal) => delay(milliseconds, undefined, { signal }), retryDelay = responseRetryDelay }) {
  if (!Number.isInteger(maxRetries) || maxRetries < 0 || maxRetries > 5) throw new Error('Request retries must be an integer from 0 to 5.');
  if (conversation.busy) throw new Error('This conversation is already processing a translation. Shared conversations must run sequentially.');
  const harness = createReferenceTools(references);
  const messages = typeof request.input === 'string' ? [{ role: 'user', content: request.input }] : request.input;
  const input = [...conversation.history, ...messages];
  let response, callCount = 0;
  conversation.busy = true;
  try {
    for (let round = 0; round <= maxToolRounds; round++) {
      const payload = {
        ...request, store: false, tools: referenceTools ? harness.definitions : [], include: ['reasoning.encrypted_content'],
        context_management: [{ type: 'compaction', compact_threshold: conversation.compactThreshold }],
        tool_choice: !referenceTools || round === maxToolRounds || callCount === maxToolCalls ? 'none' : 'auto',
        input: [...input],
      };
      response = await createResponse({ client, payload, signal, onRequest, onRetry, maxRetries, sleep, retryDelay });
      if (response.status !== 'completed') return response;
      const calls = (response.output ?? []).filter(item => item.type === 'function_call');
      if (calls.length && (!referenceTools || round === maxToolRounds || callCount + calls.length > maxToolCalls)) {
        throw Object.assign(new Error('Translation exceeded the reference lookup limit.'), { code: 'reference_lookup_limit' });
      }
      callCount += calls.length;
      // Load the SDK helper only when needed; planning and dry runs need no API SDK.
      const { toResponseInputItems } = await import('openai/lib/responses/ResponseInputItems');
      const output = toResponseInputItems(response.output ?? []);
      input.push(...output);
      const compactedAt = input.findLastIndex(item => item.type === 'compaction');
      if (compactedAt > 0) input.splice(0, compactedAt);
      for (const item of output.filter(item => item.type === 'compaction')) {
        conversation.compactions++;
        onCompaction({ responseId: response.id, itemId: item.id });
      }
      if (!calls.length) {
        // Commit only complete turns, so failed tool loops cannot leave dangling calls in memory.
        conversation.history = input;
        return response;
      }
      const results = await Promise.all(calls.map(async call => {
        let args, result, status = 'success';
        try {
          args = JSON.parse(call.arguments);
          result = harness.execute(call.name, args);
        } catch (error) {
          status = 'error';
          result = { error: error instanceof SyntaxError ? 'Tool arguments must be valid JSON.' : error.message };
        }
        onToolCall({ tool: call.name, arguments: args ?? null, status, ...(status === 'error' ? result : {}) });
        return { type: 'function_call_output', call_id: call.call_id, output: JSON.stringify(result) };
      }));
      input.push(...results);
    }
  } catch (error) {
    error.translationResponse = response;
    throw error;
  } finally {
    conversation.busy = false;
  }
}
