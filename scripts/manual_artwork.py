"""Apply the online manual's artwork choices after PDF parsing."""
import json
import re
from html import escape
from pathlib import Path
from native_notices import markdown, plain

ROOT = Path(__file__).resolve().parents[1]
WORK_STEP_ASSETS = {
 '/img/manual/icon-procedure.png',
 '/img/manual/asset-fefd092894c7.png',
 '/img/manual/asset-742605dcc5f0.png',
 '/img/manual/asset-45698338cb50.png',
}
# Include rendered variants of the same verified hand pictogram.
extraction_manifest = ROOT/'extraction/manifest.json'
for page in json.loads(extraction_manifest.read_text())['pages'] if extraction_manifest.is_file() else []:
 for image in page['images']:
  if image['path'] in WORK_STEP_ASSETS:
   WORK_STEP_ASSETS.update(image[k] for k in ('original_path','rendered_path') if k in image)
INFO = r'<img\b[^>]*src="/img/manual/icon-information\.png"[^>]*/?>'
GLOVES = r'<img\b[^>]*src="/img/manual/icon-gloves\.png"[^>]*/?>'
INFO_TITLES = [
 ('Additional information about', 'Additional information'),
 ('The intended use', 'Intended use'),
 ('Note the following points', 'Choose a suitable location'),
 ('The electrical plug', 'Keep the power disconnect accessible'),
 ('The following procedure only applies', 'Using a different power connector'),
 ('If the power supply cable', 'Power cable requirements'),
 ('As an alternative', 'Modbus TCP alternative'),
 ('Carefully read the technical', 'Review the specifications'),
 ('The Common (port 18)', 'Digital input requirements'),
 ('Review the technical', 'Check the I/O connections'),
 ('Only Admin users', 'Admin access required'),
 ('For the transmission', 'Precise output values'),
 ('If time synchronization', 'Automatic time synchronization'),
 ('Ask your network', 'Network settings'),
]

def _replace_gui_fragment(content, entry):
 """Apply a reviewed fragment only inside its named section, when supplied."""
 def literal(body):
  # A replacement can contain its source fragment (for example, added instructions).
  return entry['new'].join(part.replace(entry['old'],entry['new']) for part in body.split(entry['new']))
 def replace(body):
  if 'table_step' not in entry:
   return literal(body)
  def step(value):
   return re.sub(r'<[^>]*>','',value).strip().replace('\\.','.')
  def markdown_row(match):
   parts = re.split(r'((?<!\\)\|)',match[0])
   index = entry['table_column']*2
   if len(parts) > index and step(parts[2]) == entry['table_step']:
    parts[index] = literal(parts[index])
   return ''.join(parts)
  def html_row(match):
   row = match[0]
   cells = list(re.finditer(r'<td\b[^>]*>(.*?)</td>',row,re.S))
   index = entry['table_column']-1
   if len(cells) > index and step(cells[0][1]) == entry['table_step']:
    cell = cells[index]
    row = row[:cell.start(1)]+literal(cell[1])+row[cell.end(1):]
   return row
  body = re.sub(r'^[ \t]*\|[^\n]*\|[ \t]*$',markdown_row,body,flags=re.M)
  return re.sub(r'<tr\b[^>]*>.*?</tr>',html_row,body,flags=re.S)
 sections = entry.get('sections')
 if not sections:
  return replace(content)
 headings = list(re.finditer(r'^#{1,6}[^\n]*\{#section-([\d-]+)\}[^\n]*(?:\n|$)',content,re.M))
 # Work backwards so an earlier insertion cannot move a later section boundary.
 for index in range(len(headings)-1,-1,-1):
  heading = headings[index]
  if heading[1] in sections:
   end = headings[index+1].start() if index+1 < len(headings) else len(content)
   content = content[:heading.start()]+replace(content[heading.start():end])+content[end:]
 return content

def normalize_gui_artwork(content, source_file=None):
 """Keep reviewed current figures and their navigation when importing the old PDF."""
 manifest_path = ROOT/'maintenance/gui-screenshots.json'
 if not manifest_path.is_file():
  return content
 updates_path = ROOT/'maintenance/gui-content-updates.json'
 if updates_path.is_file() and source_file is not None:
  source = Path(source_file)
  if source.is_absolute():
   source = source.relative_to(ROOT)
  source = source.as_posix()
  # Editorial bodies are imported as their corresponding English chapter.
  files = {source}
  if source.startswith('scripts/editorial/'):
   files.add('docs/'+source.removeprefix('scripts/editorial/'))
  updates = json.loads(updates_path.read_text())
  for entry in updates['entries']+updates.get('navigation_import_entries',[]):
   if entry['locale'] == 'en' and entry['file'] in files:
    content = _replace_gui_fragment(content,entry)
 figures = [figure for figure in json.loads(manifest_path.read_text())['figures'] if figure['locale'] in ('en','all')]
 replacements = {source:figure for figure in figures for source in figure['replaces']}
 contextual = [(context,figure) for figure in figures for context in figure.get('contextReplacements',[])]
 def choose(source,alt):
  for context,figure in contextual:
   if context['source'] == source and (not context.get('printedPage') or re.search(r'(^|\D)'+str(context['printedPage'])+r'(\D|$)',alt)):
    return figure
  return replacements.get(source)
 def image(match):
  tag = match[0]
  source = re.search(r'\bsrc="([^"]+)"',tag)
  alt = re.search(r'\balt="([^"]*)"',tag)
  figure = choose(source[1],alt[1] if alt else '') if source else None
  if not figure:
   return tag
  tag = tag.replace('src="'+source[1]+'"','src="'+figure['output']+'"')
  description = escape(figure.get('alts',{}).get('en',figure['alt']),quote=True)
  tag = re.sub(r'\balt="[^"]*"','alt="'+description+'"',tag) if alt else tag.replace('<img ','<img alt="'+description+'" ')
  width = re.search(r'\bwidth="(\d+)"',tag)
  if figure['kind'] == 'icon':
   value = min(48,figure['crop'][2],int(width[1]) if width else 48)
   tag = re.sub(r'\bwidth="[^"]*"',f'width="{value}"',tag) if width else tag.replace('<img ',f'<img width="{value}" ')
   tag = re.sub(r'\bclassName="[^"]*"','className="manual-icon"',tag) if 'className=' in tag else tag.replace('<img ','<img className="manual-icon" ')
  elif figure['id'].endswith('home-settings-button') and not width:
   from math import ceil
   tag = tag.replace('<img ','<img width="'+str(ceil(figure['crop'][2]))+'" ',1)
  return tag
 content = re.sub(r'<img\b[^>]*>',image,content)
 def markdown_image(match):
  alt,source,title = match.groups()
  figure = choose(source,alt)
  if not figure:
   return match[0]
  attributes = dict(part.split('=',1) for part in (title or '').split() if '=' in part)
  if figure['kind'] == 'icon':
   attributes['width'] = str(min(48,figure['crop'][2],int(attributes.get('width',48))))
   attributes['class'] = 'manual-icon'
  elif figure['id'].endswith('home-settings-button') and 'width' not in attributes:
   from math import ceil
   attributes['width'] = str(ceil(figure['crop'][2]))
  layout = ' '.join(key+'='+value for key,value in attributes.items())
  title = ' "'+layout+'"' if layout else ''
  description = re.sub(r'([\\\[\]])',r'\\\1',figure.get('alts',{}).get('en',figure['alt']))
  return '!['+description+']('+figure['output']+title+')'
 return re.sub(r'!\[((?:\\.|[^\]\\])*)\]\((/img/[^\s)]+)(?:\s+"([^"]*)")?\)',markdown_image,content)

def normalize_artwork(content, source_file=None):
 def image(match):
  return '' if match[1] in WORK_STEP_ASSETS else match[0]
 content = re.sub(r'<img\b[^>]*src="([^"]+)"[^>]*/?>', image, content)
 # Remove the legend entry whose pictogram is no longer used.
 content = content.replace('<p>Practical procedures when working with the BactoSense.</p>', '')
 content = re.sub(r'^:::note\[', ':::info[', content, flags=re.M)
 def cell(match):
  opening, body = match.groups()
  if not re.search(INFO,body):
   return match[0]
  body = re.sub(INFO,'',body).strip()
  return opening+'<Admonition type="info" title="Additional information">'+body+'</Admonition></td>'
 content = re.sub(r'(<td\b[^>]*>)(.*?)</td>',cell,content,flags=re.S)
 # A margin information icon belongs to the immediately following text/list or table.
 def block(match):
  body = match[1].strip()
  if body.startswith('<table'):
   title = 'Recycling and disposal' if 'DISPOSAL POSSIBILITIES' in body else 'Supporting documentation'
  else:
   title = next((title for prefix,title in INFO_TITLES if plain(body).startswith(prefix)),None)
   if title is None:
    raise ValueError('Add an info-box title for: '+plain(body)[:100])
   body = markdown(body)
  return f':::info[{title}]\n\n{body}\n\n:::\n\n'
 body = r'((?:(?:<p>.*?</p>|<ul>.*?</ul>|<ol>.*?</ol>)\s*)+|<table\b.*?</table>)'
 content = re.sub(INFO+r'\s*'+body,block,content,flags=re.S)
 if re.search(INFO,content):
  raise ValueError('Unmatched information icon: inspect its surrounding content')
 # Mandatory glove reminders use the same native box as the maintenance notices.
 def gloves(match):
  return ':::gloves[Wear protective gloves]\n\n'+markdown(match[1])+'\n\n:::\n\n'
 content = re.sub(GLOVES+r'\s*'+body,gloves,content,flags=re.S)
 if re.search(GLOVES,content):
  raise ValueError('Unmatched gloves icon: inspect its surrounding content')
 content = content.replace('/img/manual/cell-27e561e22ac1.png', '/img/safety/gloves.svg')
 # Keep the reviewed legend, including the mandatory-gloves symbol, on re-import.
 legend = ROOT/'scripts/editorial/02-safety-symbols.md'
 if legend.is_file():
  content = re.sub(r'^## 2\.3[^\n]*\n.*?(?=^## 2\.4)', lambda _: legend.read_text().rstrip()+'\n\n', content, flags=re.M|re.S)
 # Keep the reviewed scheduler supplement when importing the older source PDF.
 if source_file == 'docs/10-measurements.md' and '{#section-10-2-4}' not in content:
  scheduler = ROOT/'scripts/editorial/10-advanced-scheduler.md'
  if scheduler.is_file():
   content = re.sub(r'(?=^## 10\.3\b)', lambda _: scheduler.read_text().rstrip()+'\n\n', content, count=1, flags=re.M)
 # Keep the embedded-manual instructions when importing the older source PDF.
 if source_file == 'docs/15-maintenance.md' and '{#section-15-4}' not in content:
  embedded_manual = ROOT/'scripts/editorial/15-embedded-manual.md'
  if embedded_manual.is_file():
   content = content.rstrip()+'\n\n'+embedded_manual.read_text().rstrip()+'\n'
 if source_file == 'docs/20-index.md' and '/maintenance#section-15-4' not in content:
  content = content.replace('## E\n\n', '## E\n\n- Embedded manual [15.4](/maintenance#section-15-4)\n', 1)
 return normalize_gui_artwork(re.sub(r'\n{3,}', '\n\n', content), source_file)

if __name__ == '__main__':
 for path in (ROOT/'docs').glob('*.md'):
  original = path.read_text()
  converted = normalize_artwork(original, str(path.relative_to(ROOT)))
  if original != converted:
   path.write_text(converted)
   print(path.name)
