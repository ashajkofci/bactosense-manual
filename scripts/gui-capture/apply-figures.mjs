import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const manifest = JSON.parse(await readFile(path.join(root, 'maintenance/gui-screenshots.json'), 'utf8'));
const replacements = new Map();
const contextual = [];
for (const figure of manifest.figures) {
  if (!figure.sha256 || figure.review?.sha256 !== figure.sha256) throw new Error(`${figure.id}: review the final rendered figure before applying it.`);
  const locale = figure.locale || 'all';
  if (!replacements.has(locale)) replacements.set(locale, new Map());
  const localeReplacements = replacements.get(locale);
  for (const context of figure.contextReplacements || []) contextual.push({locale,figure,...context});
  for (const source of figure.replaces) {
    if (localeReplacements.has(source) && localeReplacements.get(source).output !== figure.output) throw new Error(`Conflicting replacements for ${source}.`);
    localeReplacements.set(source, figure);
  }
}
const directories = [{ locale: 'en', directory: 'docs' }, ...['de', 'fr', 'it', 'es'].map(locale => ({ locale, directory: `i18n/${locale}/docusaurus-plugin-content-docs/current` }))];
let count = 0;
for (const { locale, directory } of directories) {
  const localeReplacements = new Map([...(replacements.get('all') || []), ...(replacements.get(locale) || [])]);
  for (const file of await readdir(path.join(root, directory))) {
    if (!/\.mdx?$/.test(file)) continue;
    const filename = path.join(root, directory, file);
    const original = await readFile(filename, 'utf8');
    const choose = (source, alt) => {
      const override = contextual.find(context=>(context.locale==='all' || context.locale===locale) && context.source===source &&
        (!context.printedPage || new RegExp(`(^|\\D)${context.printedPage}(\\D|$)`).test(alt)));
      return override?.figure || localeReplacements.get(source);
    };
    let updated = original.replace(/<img\b[^>]*>/g, match => {
      const source = match.match(/\bsrc="([^"]+)"/)?.[1];
      const alt = match.match(/\balt="([^"]+)"/)?.[1] || '';
      const replacement = choose(source, alt);
      if (!replacement) return match;
      count++;
      let result=match.replace(`src="${source}"`, `src="${replacement.output}"`)
        .replace(/\balt="[^"]*"/, `alt="${(replacement.alts?.[locale] || replacement.alt).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"`);
      if (replacement.kind==='icon') {
        const width=Math.min(48,replacement.crop[2],Number(match.match(/\bwidth="(\d+)"/)?.[1] || 48));
        result=result.replace(/\bwidth="[^"]*"/,`width="${width}"`);
        if (/\bclassName=/.test(result)) result=result.replace(/\bclassName="[^"]*"/,'className="manual-icon"');
        else result=result.replace('<img ','<img className="manual-icon" ');
      } else if (replacement.id.endsWith('home-settings-button') && !/\bwidth="/.test(result)) result=result.replace('<img ',`<img width="${Math.ceil(replacement.crop[2])}" `);
      return result;
    });
    updated = updated.replace(/!\[((?:\\.|[^\]\\])*)\]\((\/img\/[^\s)]+)(?:\s+"([^"]*)")?\)/g, (match,alt,source,title) => {
      const replacement = choose(source, alt);
      if (!replacement) return match;
      count++;
      const attributes = new Map((title || '').split(' ').filter(Boolean).map(value=>value.split('=')));
      if (replacement.kind==='icon') {
        attributes.set('width',String(Math.min(48,replacement.crop[2],Number(attributes.get('width') || 48))));
        attributes.set('class','manual-icon');
      } else if (replacement.id.endsWith('home-settings-button') && !attributes.has('width')) attributes.set('width',String(Math.ceil(replacement.crop[2])));
      const layout=[...attributes].map(([key,value])=>`${key}=${value}`).join(' ');
      const description=(replacement.alts?.[locale] || replacement.alt).replace(/[\\[\]]/g,'\\$&');
      return `![${description}](${replacement.output}${layout ? ` "${layout}"` : ''})`;
    });
    if (updated !== original) await writeFile(filename, updated);
  }
}
console.log(`Updated ${count} screenshot references in their existing chapter positions across ${directories.length} languages.`);
