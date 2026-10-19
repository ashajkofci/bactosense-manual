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
// Merged cells use the markers handled by plugins/manual-tables.cjs: `\<` joins the cell on the left, `^` the cell above.
const NOTICE = /^(:{3,})(info|warning|danger|caution|explosion|gloves|tip|note)\[([^\]\n]*)\]\s*$/;
let rejection = null;
const reject = reason => { rejection = reason; return null; };
function joinLines(lines) {
  return lines.map((line, index) => index === lines.length - 1 ? line.trim() : / {2,}$/.test(line) ? line.trimEnd() + '<br />' : line.trim() + ' ').join('');
}
function paragraphs(lines) {
  const result = []; let current = [];
  for (const line of [...lines, '']) {
    if (line.trim()) current.push(line);
    else if (current.length) { result.push(joinLines(current)); current = []; }
  }
  return result;
}
// A pipe-table cell holds one line: paragraphs are separated by <br /><br /> and a notice becomes `:::type[Title] text :::`.
function cellMarkdown(html) {
  const lines = html.trim().split('\n'), parts = [];
  if (/<(?:ul|ol|p|table|pre|Admonition)\b/.test(html)) return reject('block HTML in a cell');
  let plain = [];
  const flush = () => { parts.push(...paragraphs(plain).map(text => ({text}))); plain = []; };
  for (let index = 0; index < lines.length; index++) {
    const open = lines[index].match(NOTICE);
    if (open) {
      flush();
      const body = []; let end = index + 1;
      while (end < lines.length && lines[end].trim() !== open[1]) body.push(lines[end++]);
      if (end >= lines.length || body.some(line => /^:{3,}\S/.test(line))) return reject('nested or unclosed notice in a cell');
      const text = paragraphs(body).join('<br /><br />');
      parts.push({text: `:::${open[2]}[${open[3]}] ${text} :::`, notice: true});
      index = end;
    } else if (/^:{3,}/.test(lines[index].trim())) return reject('unmatched notice fence in a cell');
    else plain.push(lines[index]);
  }
  flush();
  const text = parts.reduce((joined, part, index) => index === 0 ? part.text
    : joined + (part.notice || parts[index - 1].notice ? ' ' : '<br /><br />') + part.text, '');
  if (/^\s*(?:[-*+]|\d+[.)])\s|^\s*(?:#{1,6}\s|>|```)/m.test(text.replace(/<br \/>/g, '\n'))) return reject('list, heading or code block in a cell');
  if (/^(?:\\?<|\^)$/.test(text)) return reject('cell text collides with a merge marker');
  return inline(text, true);
}
// Cells hold Markdown, so only the table tags are parsed; any other angle brackets stay untouched text.
function parseTable(source) {
  const rows = []; let row, cell, className = '';
  for (const tag of source.matchAll(/<(\/?)(table|tr|th|td)\b([^>]*)>/g)) {
    const [text, closing, name, attributes] = tag;
    if (name === 'table' && !closing) className = attributes.match(/className="([^"]*)"/)?.[1] ?? '';
    else if (name === 'tr') { if (closing) rows.push(row); else row = []; }
    else if (name === 'th' || name === 'td') {
      if (closing) { cell.html = source.slice(cell.start, tag.index); row.push(cell); }
      else cell = {name, start: tag.index + text.length, colSpan: Number(attributes.match(/colSpan="(\d+)"/)?.[1]) || 1, rowSpan: Number(attributes.match(/rowSpan="(\d+)"/)?.[1]) || 1};
    }
  }
  return {rows, className};
}
function convertTable(source) {
  if ((source.match(/<table\b/g) || []).length !== 1) return reject('nested table');
  const {rows, className} = parseTable(source);
  if (!rows.length || !rows[0].length) return reject('empty table');
  const grid = [], sections = new Set();
  const hasHeader = rows[0].every(cell => cell.name === 'th');
  for (const [r, cells] of rows.entries()) {
    grid[r] ??= []; let c = 0;
    for (const cell of cells) {
      while (grid[r][c] !== undefined) c++;
      let markdown = cellMarkdown(cell.html);
      if (markdown === null) return null;
      if (cell.name === 'th' && (r > 0 || !hasHeader)) {
        // A full-width header cell between rows is a section row; the plugin renders it as a header cell.
        if (cells.length !== 1 || !markdown) return reject('header cell outside the first row');
        if (!/^\*\*[\s\S]*\*\*$/.test(markdown)) markdown = `**${markdown}**`;
        sections.add(r);
      }
      for (let i = 0; i < cell.rowSpan; i++) for (let j = 0; j < cell.colSpan; j++) {
        grid[r + i] ??= [];
        grid[r + i][c + j] = i === 0 && j === 0 ? markdown : i > 0 ? '^' : '\\<';
      }
      c += cell.colSpan;
    }
  }
  const columns = Math.max(...grid.map(row => row.length));
  // A row that ends early extends its last cell to the table edge.
  for (const row of grid) for (let c = 1; c < columns; c++) if (row[c] === undefined && row[c - 1] !== undefined) row[c] = '\\<';
  if (sections.size && [...sections].some(r => grid[r].length !== columns)) return reject('section row narrower than the table');
  const line = cells => '| ' + Array.from({length: columns}, (_, c) => cells?.[c] ?? '').join(' | ') + ' |';
  // The rehype plugin removes an empty header row, preserving headerless table layout.
  const lines = [line(hasHeader ? grid[0] : []), line(Array(columns).fill('---')), ...grid.slice(hasHeader ? 1 : 0).map(line)];
  const classes = className.split(/\s+/).filter(name => name && name !== 'manual-table');
  return {markdown: lines.join('\n'), classes};
}
function markdownTable(source) {
  const table = convertTable(source);
  if (!table) return null;
  return table.classes.length ? `@@WRAP[${table.classes.join(' ')}]@@\n\n${table.markdown}\n\n@@/WRAP@@` : table.markdown;
}
// Formatting classes live on a wrapper div; reuse an existing wrapper when the table is already inside one.
function wrapTables(text) {
  const merge = (...lists) => [...new Set(lists.join(' ').split(/\s+/).filter(Boolean))].join(' ');
  return text
    .replace(/<div className="([^"]*)">\s*@@WRAP\[([^\]]*)\]@@\s*([\s\S]*?)\s*@@\/WRAP@@\s*<\/div>/g,
      (_, existing, added, table) => `<div className="${merge(existing, added)}">\n\n${table}\n\n</div>`)
    .replace(/@@WRAP\[([^\]]*)\]@@\s*([\s\S]*?)\s*@@\/WRAP@@/g, (_, classes, table) => `<div className="${classes}">\n\n${table}\n\n</div>`);
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
  return wrapTables(result).replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

const directories = ['docs', ...['de', 'fr', 'it', 'es'].map(locale => `i18n/${locale}/docusaurus-plugin-content-docs/current`)];
const reports = [], kept = [];
for (const file of (await readdir(path.join(root, 'docs'))).filter(file => /\.mdx?$/.test(file))) {
  const contents = await Promise.all(directories.map(dir => readFile(path.join(root, dir, file), 'utf8')));
  const tableSets = contents.map(text => tableRanges(text).map(([a,b]) => text.slice(a,b)));
  const plan = tableSets[0].map((_, index) => tableSets.every((tables, locale) => {
    rejection = null;
    const converted = tables[index] && markdownTable(tables[index]) !== null;
    if (!converted) kept.push(`${directories[locale]}/${file}: table ${index + 1} stays HTML (${rejection ?? 'differs between editions'})`);
    return converted;
  }));
  for (let i=0; i<directories.length; i++) {
    const updated = simplifyMarkdown(contents[i], plan);
    if (updated !== contents[i]) await writeFile(path.join(root, directories[i], file), updated);
    reports.push({file: `${directories[i]}/${file}`, tablesConverted:plan.filter(Boolean).length, htmlTagsBefore:(contents[i].match(/<\/?[A-Za-z][^>]*>/g)||[]).length,htmlTagsAfter:(updated.match(/<\/?[A-Za-z][^>]*>/g)||[]).length});
  }
}
// Reviewed chapter bodies in scripts/editorial/ must stay equal to their docs/ counterparts.
const editorialDirectory = path.join(root, 'scripts/editorial');
for (const file of (await readdir(editorialDirectory)).filter(file => /\.mdx?$/.test(file))) {
  const editorial = path.join(editorialDirectory, file);
  const editorialText = await readFile(editorial, 'utf8');
  if (file !== '14-bactocloud.md' && !/<table\b/.test(editorialText)) continue;
  const simplifiedEditorial = simplifyMarkdown(editorialText);
  if (simplifiedEditorial !== editorialText) await writeFile(editorial, simplifiedEditorial);
}
await mkdir(path.join(root, 'output/cleanup'), {recursive:true});
await writeFile(path.join(root, 'output/cleanup/markdown.json'), JSON.stringify(reports,null,2)+'\n');
if (kept.length) console.log(kept.join('\n'));
console.log(`Simplified ${reports.length} documents; converted ${reports.reduce((n,r)=>n+r.tablesConverted,0)} tables to Markdown.`);
