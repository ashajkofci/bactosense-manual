import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

export function countTranslations(files) {
  const count = status => files.filter(file => file.status === status).length;
  return {
    checked: files.filter(file => file.action !== 'remove').length,
    selected: files.filter(file => file.action === 'translate').length,
    selectedSections: files.reduce((sum, file) => sum + (file.sections?.length ?? 0), 0),
    removedSections: files.reduce((sum, file) => sum + (file.removedSections?.length ?? 0), 0),
    patchEdits: files.reduce((sum, file) => sum + (file.patchEdits ?? 0), 0),
    skipped: count('skipped'),
    attempted: files.filter(file => file.attempts > 0).length,
    apiAttempts: files.reduce((sum, file) => sum + (file.apiRequests ?? file.attempts), 0),
    reviewRequests: files.reduce((sum, file) => sum + (file.reviewRequests ?? 0), 0),
    reviewFindings: files.reduce((sum, file) => sum + (file.semanticReviews ?? []).reduce((total, review) => total + review.findings.length, 0), 0),
    requestRetries: files.reduce((sum, file) => sum + (file.requestRetries?.length ?? 0), 0),
    referenceLookups: files.reduce((sum, file) => sum + (file.referenceLookups?.length ?? 0), 0),
    compactions: files.reduce((sum, file) => sum + (file.compactions ?? 0), 0),
    modified: count('modified'), created: count('created'), removed: count('removed'),
    unchanged: count('unchanged'), failed: count('failed'),
    notStarted: count('not_started'), notApplied: count('not_applied'),
  };
}

const cell = value => String(value).replace(/\r?\n/g, ' ').replaceAll('|', '\\|');

export function formatSyncReport(report) {
  const counts = report.counts;
  const lines = [
    '## Translation sync report', '',
    `Result: **${report.status.replaceAll('_', ' ')}**. Model: \`${report.model}\`.`, '',
    `**${counts.modified} modified, ${counts.created} created, ${counts.removed} removed.**`, '',
    '| Metric | Count |', '| --- | ---: |',
    ...[
      ['Translation files checked', counts.checked], ['Selected for sync', counts.selected],
      ['Sections selected', counts.selectedSections], ['Obsolete sections selected for removal', counts.removedSections],
      ['Returned patch edits', counts.patchEdits],
      ['Skipped (source unchanged)', counts.skipped], ['Selected but content unchanged', counts.unchanged],
      ['Failed translations', counts.failed], ['Not started', counts.notStarted],
      ['Validated but not applied', counts.notApplied], ['API requests (including reviews, retries, tool follow-ups and repairs)', counts.apiAttempts],
      ['Semantic review API requests', counts.reviewRequests], ['Semantic review findings (including repaired)', counts.reviewFindings],
      ['Transient HTTP retries', counts.requestRetries],
      ['Reference lookups', counts.referenceLookups],
      ['Context compactions', counts.compactions],
    ].map(([label, value]) => `| ${label} | ${value} |`), '',
  ];
  if (report.conversation?.shared) lines.push(`Conversation memory is shared across this sync run. Chapters are processed sequentially; context compacts at ${report.conversation.compactThreshold} tokens.`, '');
  if (report.dryRun) lines.push('Dry run: no API requests were made and no translations were changed.', '');
  if (report.status !== 'failed' && !report.hasWork) lines.push('No translations to sync or remove. Further validation and commit steps can be skipped.', '');
  if (report.error) lines.push(`Error: ${cell(report.error)}`, '');
  if (report.byManualAndLocale.length) {
    lines.push('| Manual | Language | Modified | Created | Removed | Unchanged after sync | Skipped | Failed |', '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |');
    for (const group of report.byManualAndLocale) {
      lines.push(`| ${cell(group.manual)} | ${cell(group.locale)} | ${group.modified} | ${group.created} | ${group.removed} | ${group.unchanged} | ${group.skipped} | ${group.failed} |`);
    }
    lines.push('');
  }
  const selected = report.files.filter(file => file.status !== 'skipped');
  if (selected.length) {
    lines.push('### File details', '', '| File | Result | Sections | Patch edits | API requests | Reference lookups | Error |', '| --- | --- | --- | ---: | ---: | ---: | --- |');
    for (const file of selected) {
      const sections = [...(file.sections ?? []), ...(file.removedSections ?? []).map(id => `${id} (remove)`)].join(', ');
      lines.push(`| ${cell(file.targetPath)} | ${cell(file.status.replaceAll('_', ' '))} | ${cell(sections)} | ${file.patchEdits ?? 0} | ${file.apiRequests ?? file.attempts} | ${file.referenceLookups?.length ?? 0} | ${cell(file.error ?? '')} |`);
    }
    lines.push('');
  }
  lines.push(`Finished: ${report.finishedAt}. Duration: ${report.durationSeconds} seconds.`, '');
  return lines.join('\n');
}

export async function writeSyncReport(root, report) {
  report.finishedAt = new Date().toISOString();
  report.durationSeconds = Math.round((Date.parse(report.finishedAt) - Date.parse(report.startedAt)) / 100) / 10;
  report.counts = countTranslations(report.files);
  const groups = new Map();
  for (const file of report.files) {
    const key = `${file.manualId}/${file.locale}`;
    if (!groups.has(key)) groups.set(key, { manualId: file.manualId, manual: file.manual, locale: file.locale, files: [] });
    groups.get(key).files.push(file);
  }
  report.byManualAndLocale = [...groups.values()].map(({ files, ...group }) => ({ ...group, ...countTranslations(files) }));
  const directory = path.resolve(root, 'output/translations');
  if (!directory.startsWith(path.resolve(root) + path.sep)) throw new Error('Report directory is outside the repository.');
  await mkdir(directory, { recursive: true });
  await Promise.all([
    writeFile(path.join(directory, 'sync-report.json'), JSON.stringify(report, null, 2) + '\n'),
    writeFile(path.join(directory, 'sync-report.md'), formatSyncReport(report)),
  ]);
}

export async function writeSyncOutputs(report, filename) {
  if (!filename) return;
  await appendFile(filename, [
    `has_work=${report.hasWork}`, `selected_count=${report.counts.selected}`,
    `modified_count=${report.counts.modified}`, `created_count=${report.counts.created}`,
    `removed_count=${report.counts.removed}`, `skipped_count=${report.counts.skipped}`,
    `unchanged_count=${report.counts.unchanged}`,
  ].join('\n') + '\n');
}
