// Shared by the translation checker and the API sync before accepting generated Markdown.
const matches = (text, regex) => [...text.matchAll(regex)].map(match => match[1] ?? match[0]);
const markdownTables = text => [...text.matchAll(/^\|[^\n]+\n\|[\s:|\-]+\|\n(?:\|[^\n]+\n)*/gm)]
  .map(match => match[0].trim().split('\n').map(row => (row.match(/(?<!\\)\|/g) || []).length - 1));
const canonicalImage = image => image.replace(/^\/img\/gui\/(?:en|de|fr|it|es)\//, '/img/gui/{locale}/');

const unitGroups = [
  ['min', 'minutes', 'minute', 'Minuten', 'Minute', 'minuti', 'minuto', 'minutos', 'minuto'],
  ['s', 'seconds', 'second', 'Sekunden', 'Sekunde', 'secondes', 'seconde', 'secondi', 'secondo', 'segundos', 'segundo', 'sec'],
  ['h', 'hours', 'hour', 'Stunden', 'Stunde', 'heures', 'heure', 'ore', 'ora', 'horas', 'hora'],
  ['d', 'days', 'day', 'Tage', 'Tagen', 'Tag', 'jours', 'jour', 'giorni', 'giorno', 'd\u00edas', 'd\u00eda'],
  ['C', 'C', '\u00b0C'], ['F', 'F', '\u00b0F'], ['%', '%'],
  ...['mL/min', 'L/min', 'gal/min', 'nm', 'mm', 'cm', 'm', 'kg', 'mg/L', 'mg', 'g', 'bar', 'mbar', 'psi', 'Pa', 'kPa', 'MPa', 'V', 'mV', 'A', 'mA', 'W', 'Hz', 'kHz', 'MHz', 'ppm', 'ppb', 'CFU/mL', 'TCC/mL'].map(unit => [unit, unit]),
  ['mL', 'mL', 'ml'], ['L', 'L', 'l'],
  ['cells/mL', 'cells/mL', 'Zellen/mL', 'cellules/mL', 'cellule/mL', 'c\u00e9lulas/mL'],
  ['uL', 'uL', '\u00b5L', '\u03bcL'], ['um', 'um', '\u00b5m', '\u03bcm'],
];
const unitAliases = new Map(unitGroups.flatMap(([canonical, ...aliases]) => [canonical, ...aliases].map(alias => [alias, canonical])));
const escapePattern = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const unitPattern = [...unitAliases.keys()].sort((left, right) => right.length - left.length).map(escapePattern).join('|');
const numberPattern = '[+-]?\\d+(?:[.,\\u00a0\\u202f\\x20\\x27\\u00b4\\u2018\\u2019]\\d+)*(?:[eE][+-]?\\d+)?';

function numberForms(raw, locale) {
  const compact = raw.replace(/[\s'\u00b4\u2018\u2019]/g, '');
  const forms = new Set();
  for (const language of ['en', locale]) {
    const parts = new Intl.NumberFormat(language).formatToParts(12345.6);
    const decimal = parts.find(part => part.type === 'decimal')?.value ?? '.';
    const group = parts.find(part => part.type === 'group')?.value;
    const [mantissa, exponent] = compact.split(/[eE]/);
    let normalized = mantissa;
    if (group && normalized.includes(group)) {
      const integer = normalized.split(decimal)[0].replace(/^[+-]/, '');
      if (!new RegExp(`^\\d{1,3}(?:${escapePattern(group)}\\d{3})+$`).test(integer)) continue;
      normalized = normalized.replaceAll(group, '');
    }
    normalized = normalized.replace(decimal, '.');
    if (!/^[+-]?\d+(?:\.\d+)?$/.test(normalized)) continue;
    const negative = normalized.startsWith('-');
    const digits = normalized.replace(/^[+-]/, '').replace('.', '').replace(/^0+/, '');
    if (!digits) { forms.add('0'); continue; }
    const coefficient = digits.replace(/0+$/, '');
    const decimalPlaces = normalized.split('.')[1]?.length ?? 0;
    const power = BigInt(exponent ?? '0') - BigInt(decimalPlaces) + BigInt(digits.length - coefficient.length);
    forms.add(`${negative ? '-' : ''}${coefficient}e${power}`);
  }
  if (!forms.size) forms.add(`literal:${compact}`);
  return forms;
}

function technicalValues(markdown, locale) {
  const text = markdown.replace(/^---\n[\s\S]*?\n---(?:\n|$)/, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\{#[^}]+\}/g, '')
    .replace(/\*\*|__|`/g, '')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ').replace(/^\s*\d+[.)]\s+/gm, '')
    .replace(/[\u2212]/g, '-').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\u2264/g, '<=').replace(/\u2265/g, '>=');
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])([<>]=?)?\\s*(${numberPattern})(?:\\s*(${unitPattern})?\\s*(?:-|\\u2013|\\u2014|to|bis|a|\\u00e0)\\s*(${numberPattern}))?\\s*(${unitPattern})?(?![\\p{L}\\p{N}_])`, 'gu');
  const values = [...text.matchAll(pattern)].map(([, operator = '', first, firstUnit, last, unit = firstUnit ?? '']) => ({
    operator, first: numberForms(first, locale), last: last === undefined ? null : numberForms(last, locale),
    unit: firstUnit && unitAliases.get(firstUnit) !== unitAliases.get(unit) ? `${unitAliases.get(firstUnit)}:${unitAliases.get(unit)}` : unitAliases.get(unit) ?? '',
    literal: `${operator}${first}${last === undefined ? '' : `-${last}`} ${unit}`.trim(),
  }));
  for (const [identifier] of text.matchAll(/\b(?:0x[\da-fA-F]+|(?=[A-Z\d_-]*\d)[A-Z](?:[A-Z\d_-]*[A-Z\d])?)\b/g)) {
    values.push({ operator: '', first: new Set([identifier]), last: null, unit: 'identifier', literal: identifier });
  }
  return values;
}

export function technicalValueErrors(source, translated, locale) {
  const expected = technicalValues(source, 'en'), actual = technicalValues(translated, locale);
  const overlaps = (left, right) => [...left].some(value => right.has(value));
  const compatible = (left, right) => left.operator === right.operator && left.unit === right.unit && overlaps(left.first, right.first)
    && (left.last === null ? right.last === null : right.last !== null && overlaps(left.last, right.last));
  const assigned = new Map();
  const assign = (index, visited) => {
    for (let candidate = 0; candidate < actual.length; candidate++) {
      if (visited.has(candidate) || !compatible(expected[index], actual[candidate])) continue;
      visited.add(candidate);
      if (!assigned.has(candidate) || assign(assigned.get(candidate), visited)) { assigned.set(candidate, index); return true; }
    }
    return false;
  };
  const missing = expected.filter((value, index) => !assign(index, new Set())).map(value => value.literal);
  if (!missing.length && expected.length === actual.length) return [];
  return [`Technical quantities differ from English${missing.length ? `; missing or changed: ${missing.join(', ')}` : '; unexpected numerical values'}.`];
}

export const structure = text => ({
  anchors: matches(text, /\bid="([^"]+)"/g),
  headings: matches(text, /\{#([^}]+)\}/g),
  images: matches(text, /(?:src="|\]\()(\/img\/[^\s"')>]+)/g).map(canonicalImage),
  tableTags: matches(text, /<(\/?(?:table|thead|tbody|tr|td|th))(?=[\s>])/g),
  markdownTables: markdownTables(text),
  spans: matches(text, /\b((?:rowSpan|colSpan)="\d+")/g),
  notices: [...text.matchAll(/(?:^:{3,}([a-z][\w-]*)\[|<Admonition\s+type="([^"]+)")/gm)].map(match => match[1] || match[2]),
  markdownLinks: matches(text, /\]\(([^)]+)\)/g).filter(link => !link.startsWith('/img/')).sort(),
  htmlLinks: matches(text, /\bhref="([^"]+)"/g).sort(),
});

export function translationErrors(source, translated, locale) {
  const errors = technicalValueErrors(source, translated, locale);
  if (!translated.startsWith('---\n')) errors.push('Missing YAML frontmatter.');
  if (translated.trim() === source.trim()) errors.push('The document is still identical to English.');
  const field = (text, key) => text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
  for (const key of ['slug', 'sidebar_position']) {
    if (field(source, key) !== field(translated, key)) errors.push(`${key} differs from English.`);
  }
  const expected = structure(source), actual = structure(translated);
  for (const key of Object.keys(expected)) {
    if (JSON.stringify(expected[key]) !== JSON.stringify(actual[key])) errors.push(`${key} differs from English.`);
  }
  // Check the actual paths too: canonicalization above only compares figure identities.
  for (const match of translated.matchAll(/\/img\/gui\/(en|de|fr|it|es)\//g)) {
    if (match[1] !== locale) errors.push(`Use ${locale} GUI captures, not ${match[1]}.`);
  }
  if (/@@IT\d+@@|\[INSERT|\[PLACEHOLDER|[\uE000-\uF8FF\uFFFD]/u.test(translated)) errors.push('Unresolved placeholder or PDF glyph.');
  return [...new Set(errors)];
}
