// Shared by the translation checker and the API sync before accepting generated Markdown.
const matches = (text, regex) => [...text.matchAll(regex)].map(match => match[1] ?? match[0]);
const markdownTables = text => [...text.matchAll(/^\|[^\n]+\n\|[\s:|\-]+\|\n(?:\|[^\n]+\n)*/gm)]
  .map(match => match[0].trim().split('\n').map(row => (row.match(/(?<!\\)\|/g) || []).length - 1));
const canonicalImage = image => image.replace(/^\/img\/gui\/(?:en|de|fr|it|es)\//, '/img/gui/{locale}/');

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
  const errors = [];
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
