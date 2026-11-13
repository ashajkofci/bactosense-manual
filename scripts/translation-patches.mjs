import { createHash } from 'node:crypto';
import { structure } from './translation-structure.mjs';

export const sourceHash = text => createHash('sha256').update(text.replace(/\r\n/g, '\n')).digest('hex');

export function splitTranslationSections(markdown) {
  if (!markdown) return [];
  const starts = [];
  const frontmatter = markdown.match(/^---\n[\s\S]*?\n---(?:\n|$)/);
  const bodyStart = frontmatter?.[0].length ?? 0;
  if (frontmatter) starts.push({ id: '@frontmatter', start: 0 });
  let fence, offset = bodyStart;
  for (const line of markdown.slice(bodyStart).split(/(?<=\n)/)) {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (fence) {
      if (marker && marker[1][0] === fence[0] && marker[1].length >= fence.length && /^ {0,3}(?:`+|~+)\s*$/.test(line)) fence = null;
    } else if (marker) fence = marker[1];
    else {
      const heading = line.match(/^#{1,6}\s+.*?\{#([^}]+)\}[^\n]*(?:\n|$)/);
      if (heading) starts.push({ id: heading[1], start: offset });
    }
    offset += line.length;
  }
  const firstHeading = starts.find(part => part.id !== '@frontmatter');
  if (!firstHeading || firstHeading.start > bodyStart) starts.push({ id: firstHeading ? '@preamble' : '@body', start: bodyStart });
  starts.sort((left, right) => left.start - right.start);
  const ids = new Set();
  return starts.map((part, index) => {
    if (ids.has(part.id)) throw new Error(`Duplicate translation section ID: ${part.id}`);
    ids.add(part.id);
    const text = markdown.slice(part.start, starts[index + 1]?.start ?? markdown.length);
    return { id: part.id, text, sha256: sourceHash(text) };
  });
}

export function sectionSnapshot(source) {
  return { sha256: sourceHash(source), sections: splitTranslationSections(source).map(({ id, sha256 }) => ({ id, sha256 })) };
}

function sameStructure(english, translated, locale, id) {
  if (JSON.stringify(structure(english)) !== JSON.stringify(structure(translated))) return false;
  if ([...translated.matchAll(/\/img\/gui\/(en|de|fr|it|es)\//g)].some(match => match[1] !== locale)) return false;
  if (id === '@frontmatter') for (const key of ['slug', 'sidebar_position']) {
    const field = text => text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
    if (field(english) !== field(translated)) return false;
  }
  return true;
}

function changeExcerpt(before, after) {
  if (before === undefined) return null;
  const oldLines = before.split('\n'), newLines = after.split('\n');
  if (oldLines.length * newLines.length <= 1_000_000) {
    const width = newLines.length + 1;
    const lcs = new Uint32Array((oldLines.length + 1) * width);
    for (let i = oldLines.length - 1; i >= 0; i--) for (let j = newLines.length - 1; j >= 0; j--) {
      lcs[i * width + j] = oldLines[i] === newLines[j] ? lcs[(i + 1) * width + j + 1] + 1
        : Math.max(lcs[(i + 1) * width + j], lcs[i * width + j + 1]);
    }
    const operations = [];
    for (let i = 0, j = 0; i < oldLines.length || j < newLines.length;) {
      if (i < oldLines.length && j < newLines.length && oldLines[i] === newLines[j]) {
        operations.push({ kind: ' ', old: i, next: j, text: oldLines[i] }); i++; j++;
      } else if (j < newLines.length && (i === oldLines.length || lcs[i * width + j + 1] >= lcs[(i + 1) * width + j])) {
        operations.push({ kind: '+', old: i, next: j, text: newLines[j++] });
      } else operations.push({ kind: '-', old: i, next: j, text: oldLines[i++] });
    }
    const ranges = [];
    operations.forEach((operation, index) => {
      if (operation.kind === ' ') return;
      const start = Math.max(0, index - 2), end = Math.min(operations.length, index + 3);
      if (ranges.length && start <= ranges.at(-1).end) ranges.at(-1).end = end;
      else ranges.push({ start, end });
    });
    return ranges.map(({ start, end }) => ({
      old_start_line: operations[start].old + 1, new_start_line: operations[start].next + 1,
      before: operations.slice(start, end).filter(item => item.kind !== '+').map(item => item.text).join('\n'),
      after: operations.slice(start, end).filter(item => item.kind !== '-').map(item => item.text).join('\n'),
    }));
  }
  let first = 0, oldEnd = oldLines.length, newEnd = newLines.length;
  while (first < oldEnd && first < newEnd && oldLines[first] === newLines[first]) first++;
  while (oldEnd > first && newEnd > first && oldLines[oldEnd - 1] === newLines[newEnd - 1]) { oldEnd--; newEnd--; }
  return [{
    before: oldLines.slice(Math.max(0, first - 2), oldEnd + 2).join('\n'),
    after: newLines.slice(Math.max(0, first - 2), newEnd + 2).join('\n'),
  }];
}

export function planTranslationPatch({ source, current, previousSource, previousSnapshot, locale, refreshAll = false }) {
  const english = splitTranslationSections(source);
  const translated = new Map(splitTranslationSections(current).map(part => [part.id, part.text]));
  const previous = previousSource === null || previousSource === undefined ? null : splitTranslationSections(previousSource);
  const oldHashes = new Map((previous ?? previousSnapshot?.sections ?? []).map(part => [part.id, part.sha256]));
  const oldText = new Map((previous ?? []).map(part => [part.id, part.text]));
  const hasBaseline = Boolean(previous || previousSnapshot);
  if (current !== null && !refreshAll && !hasBaseline) {
    throw new Error('No trusted English section baseline is available. Run with --force once to establish it; future syncs will patch only changed sections.');
  }
  const target = new Map();
  const sections = [];
  for (const part of english) {
    const existing = translated.get(part.id);
    target.set(part.id, existing ?? (part.text.trim() ? '' : part.text));
    const changed = oldHashes.get(part.id) !== part.sha256;
    const repair = existing !== undefined && !sameStructure(part.text, existing, locale, part.id);
    if (part.text.trim() && (refreshAll || current === null || changed || existing === undefined || repair)) {
      sections.push({
        id: part.id, reason: existing === undefined ? 'added' : refreshAll ? 'refresh' : changed ? 'source_changed' : 'structure_repair',
        english: part.text, current_translation: existing ?? '',
        english_change: changeExcerpt(oldText.get(part.id), part.text),
      });
    }
  }
  return {
    order: english.map(part => part.id), target, sections,
    removed: [...translated.keys()].filter(id => !target.has(id)),
    baseline: previous ? 'git' : previousSnapshot ? 'section_hashes' : 'new_translation',
  };
}

const conflict = message => Object.assign(new Error(message), { code: 'translation_patch_conflict' });

export function applyTranslationPatch(plan, patch) {
  if (!patch || !Array.isArray(patch.edits) || Object.keys(patch).some(key => key !== 'edits')) throw conflict('Return an edits array, not a complete Markdown document.');
  const allowed = new Set(plan.sections.map(section => section.id));
  const result = new Map(plan.target);
  for (const edit of patch.edits) {
    if (!edit || !allowed.has(edit.section_id)) throw conflict(`Patch section ${edit?.section_id} is outside the requested changes.`);
    if (Object.keys(edit).length !== 3 || Object.keys(edit).some(key => !['section_id', 'search', 'replace'].includes(key))) throw conflict('Patch edits must contain only section_id, search and replace.');
    if (typeof edit.search !== 'string' || typeof edit.replace !== 'string') throw conflict('Patch search and replace fields must be strings.');
    const text = result.get(edit.section_id);
    if (!edit.search) {
      if (text !== '') throw conflict(`Empty search is only allowed for a new, empty section: ${edit.section_id}`);
      result.set(edit.section_id, edit.replace);
    } else {
      const at = text.indexOf(edit.search);
      if (at < 0 || text.indexOf(edit.search, at + 1) >= 0) throw conflict(`Search must match exactly once in section ${edit.section_id}. Re-read its current_translation and return a corrected patch.`);
      result.set(edit.section_id, text.slice(0, at) + edit.replace + text.slice(at + edit.search.length));
    }
  }
  const markdown = plan.order.map(id => result.get(id)).join('');
  let actual;
  try { actual = splitTranslationSections(markdown).map(part => part.id); }
  catch (error) { throw conflict(`Patch damaged the section layout: ${error.message}`); }
  if (JSON.stringify(actual) !== JSON.stringify(plan.order)) throw conflict('Patch changed section boundaries, heading IDs or YAML frontmatter. Preserve the supplied section layout and separating newlines.');
  return markdown;
}

export const translationPatchFormat = {
  type: 'json_schema', name: 'translation_patch', strict: true,
  schema: {
    type: 'object', additionalProperties: false, required: ['edits'],
    properties: { edits: { type: 'array', items: {
      type: 'object', additionalProperties: false, required: ['section_id', 'search', 'replace'],
      properties: { section_id: { type: 'string' }, search: { type: 'string' }, replace: { type: 'string' } },
    } } },
  },
};
