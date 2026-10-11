import {readFile, writeFile, readdir, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {load} from 'cheerio';

// Keep merged/nested table layout while using Markdown for prose and sized images.
const root = path.resolve(import.meta.dirname, '..');
const sections = JSON.parse(await readFile(path.join(root, 'maintenance/source-sections.json'), 'utf8'));
function inline(source, inTable = false) {
  let text = source.replace(/<code>([\s\S]*?)<\/code>/g, (_, content) => '`' + content.replace(/&#58;/g, ':') + '`');
  for (const [tag, marker] of [['em', '*'], ['strong', '**']]) {
    text = text.replace(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'), (match, content, offset, original) => {
      const leading = content.match(/^\s*/)[0], trailing = content.match(/\s*$/)[0];
      const next = original[offset + match.length] || '';
      const boundary = !trailing && /[\p{L}\p{N}]/u.test(next) ? ' ' : trailing;
      return leading + marker + content.trim() + marker + boundary;
    });
  }
  if (inTable) text = text.replace(/(?<!\\)\|/g, '\\|');
  else text = text.replace(/<br\s*\/>/g, '  \n');
  return text;
}
function tableRanges(text) {
  const ranges = []; let depth = 0, start;
  for (const match of text.matchAll(/<\/?table\b[^>]*>/g)) {
    if (!match[0].startsWith('</')) { if (depth++ === 0) start = match.index; }
    else if (--depth === 0) ranges.push([start, match.index + match[0].length]);
  }
  return ranges;
}
function markdownTable(source) {
  if ((source.match(/<table\b/g) || []).length !== 1 || /\b(?:rowSpan|colSpan)=|<(?:Admonition|ul|ol|p)\b|^\s*:::/m.test(source)) return null;
  const $ = load(source, {xmlMode: true, decodeEntities: false}, false);
  const rows = $('tr').toArray().map(row => $(row).children('td, th').toArray());
  if (!rows.length || !rows[0].length) return null;
  const hasHeader = rows[0].every(cell => cell.name === 'th');
  if (rows.slice(hasHeader ? 1 : 0).some(row => row.some(cell => cell.name !== 'td') || row.length !== rows[0].length)) return null;
  if ($('table').attr('className') && $('table').attr('className') !== 'manual-table') return null;
  const lines = rows.map(row => '| ' + row.map(cell => inline($(cell).html().trim(), true)).join(' | ') + ' |');
  // The rehype plugin removes this empty header, preserving headerless table layout.
  if (!hasHeader) lines.unshift('| ' + rows[0].map(() => '').join(' | ') + ' |');
  lines.splice(1, 0, '| ' + rows[0].map(() => '---').join(' | ') + ' |');
  return lines.join('\n');
}
function prose(text) {
  const tables = [];
  text = text.replace(/^\|[^\n]*(?:\n\|[^\n]*)*/gm, table => {
    tables.push(table);
    return `@@MARKDOWN_TABLE_${tables.length - 1}@@`;
  });
  text = text.replace(/<p>([\s\S]*?)<\/p>/g, (_, content) => '\n\n' + inline(content.trim()) + '\n\n');
  text = text.replace(/<ul>([\s\S]*?)<\/ul>/g, (source, contents) => {
    if (/<(?:ul|ol)\b/.test(contents)) return source;
    return '\n\n' + [...contents.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(match => '- ' + inline(match[1].trim()).replace(/\n/g, '\n  ')).join('\n') + '\n\n';
  });
  return inline(text).replace(/@@MARKDOWN_TABLE_(\d+)@@/g, (_, index) => tables[index]);
}
export function simplifyMarkdown(text, tablePlan) {
  // The index keeps its labels but uses section numbers and semantic heading links.
  text = text.replace(/\[\d+\]\([^)]*#manual-page-(\d+)\)/g, (match, page) => {
    const target = sections[page];
    if (!target) throw new Error(`Missing source section ${page}`);
    return `[${target.section}](${target.path})`;
  });
  text = text.replace(/<span id="(?:manual|pdf)-page-\d+"\s*\/>\s*/g, '');
  const blocks = tableRanges(text), chunks = []; let previous = 0;
  blocks.forEach(([start, end], index) => {
    chunks.push(prose(text.slice(previous, start)));
    const table = text.slice(start, end), converted = markdownTable(table);
    chunks.push(tablePlan?.[index] === false ? inline(table, true) : converted ?? inline(table, true));
    previous = end;
  });
  chunks.push(prose(text.slice(previous)));
  let result = chunks.join('');
  result = result.replace(/<img\b[^>]*\/?\s*>/g, tag => {
    const $ = load(tag, {xmlMode: true}, false), image = $('img');
    const src = image.attr('src');
    if (!src) return tag;
    const alt = (image.attr('alt') || '').replace(/[\\[\]]/g, '\\$&');
    const layout = ['width', 'height', 'className'].filter(key => image.attr(key))
      .map(key => `${key === 'className' ? 'class' : key}=${image.attr(key)}`).join(' ');
    return `![${alt}](${src}${layout ? ` "${layout}"` : ''})`;
  });
  result = result.replace(/<a href="([^"]+)">([\s\S]*?)<\/a>/g, (_, href, label) => `[${label}](${href})`);
  // Convert innermost notices first; longer outer fences preserve nested notices.
  const notice = /<Admonition type="(info|warning|danger|caution|explosion|gloves|tip|note)" title="([^"]*)">((?:(?!<Admonition)[\s\S])*?)<\/Admonition>/g;
  while (/<Admonition\b/.test(result)) {
    const updated = result.replace(notice, (_, type, title, body) => {
      const longest = Math.max(2, ...[...body.matchAll(/^(:{3,})/gm)].map(match => match[1].length));
      const fence = ':'.repeat(longest + 1);
      return `\n\n${fence}${type}[${title}]\n\n${body.trim()}\n\n${fence}\n\n`;
    });
    if (updated === result) break;
    result = updated;
  }
  return result.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

const directories = ['docs', ...['de', 'fr', 'it', 'es'].map(locale => `i18n/${locale}/docusaurus-plugin-content-docs/current`)];
const reports = [];
for (const file of (await readdir(path.join(root, 'docs'))).filter(file => /\.mdx?$/.test(file))) {
  const contents = await Promise.all(directories.map(dir => readFile(path.join(root, dir, file), 'utf8')));
  const tableSets = contents.map(text => tableRanges(text).map(([a,b]) => text.slice(a,b)));
  const plan = tableSets[0].map((_, index) => tableSets.every(tables => tables[index] && markdownTable(tables[index]) !== null));
  for (let i=0; i<directories.length; i++) {
    const updated = simplifyMarkdown(contents[i], plan);
    if (updated !== contents[i]) await writeFile(path.join(root, directories[i], file), updated);
    reports.push({file: `${directories[i]}/${file}`, tablesConverted:plan.filter(Boolean).length, htmlTagsBefore:(contents[i].match(/<\/?[A-Za-z][^>]*>/g)||[]).length,htmlTagsAfter:(updated.match(/<\/?[A-Za-z][^>]*>/g)||[]).length});
  }
}
const editorial = path.join(root, 'scripts/editorial/14-bactocloud.md');
const editorialText = await readFile(editorial, 'utf8');
const simplifiedEditorial = simplifyMarkdown(editorialText);
if (simplifiedEditorial !== editorialText) await writeFile(editorial, simplifiedEditorial);
await mkdir(path.join(root, 'output/cleanup'), {recursive:true});
await writeFile(path.join(root, 'output/cleanup/markdown.json'), JSON.stringify(reports,null,2)+'\n');
console.log(`Simplified ${reports.length} documents; converted ${reports.reduce((n,r)=>n+r.tablesConverted,0)} tables to Markdown.`);
