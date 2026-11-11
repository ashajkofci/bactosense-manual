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

export async function runResponseWithTools({ client, request, references, onRequest = () => {}, onToolCall = () => {}, signal = AbortSignal.timeout(600_000), maxToolRounds = 6, maxToolCalls = 24 }) {
  const harness = createReferenceTools(references);
  const input = typeof request.input === 'string' ? [{ role: 'user', content: request.input }] : [...request.input];
  let response, callCount = 0;
  try {
    for (let round = 0; round <= maxToolRounds; round++) {
      onRequest();
      response = await client.responses.create({
        ...request, store: false, tools: harness.definitions, include: ['reasoning.encrypted_content'],
        tool_choice: round === maxToolRounds || callCount === maxToolCalls ? 'none' : 'auto',
        input: [...input],
      }, { signal, maxRetries: 0 });
      if (response.status !== 'completed') return response;
      const calls = (response.output ?? []).filter(item => item.type === 'function_call');
      if (!calls.length) return response;
      if (round === maxToolRounds || callCount + calls.length > maxToolCalls) {
        throw Object.assign(new Error('Translation exceeded the reference lookup limit.'), { code: 'reference_lookup_limit' });
      }
      callCount += calls.length;
      // Load the SDK helper only when needed; planning and dry runs need no API SDK.
      const { toResponseInputItems } = await import('openai/lib/responses/ResponseInputItems');
      input.push(...toResponseInputItems(response.output));
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
  }
}
