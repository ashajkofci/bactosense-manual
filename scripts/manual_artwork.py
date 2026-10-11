"""Apply the online manual's artwork choices after PDF parsing."""
import json
import re
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
for page in json.loads((ROOT/'extraction/manifest.json').read_text())['pages']:
 for image in page['images']:
  if image['path'] in WORK_STEP_ASSETS:
   WORK_STEP_ASSETS.update(image[k] for k in ('original_path','rendered_path') if k in image)
INFO = r'<img\b[^>]*src="/img/manual/icon-information\.png"[^>]*/?>'
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

def normalize_artwork(content):
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
 return re.sub(r'\n{3,}', '\n\n', content)

if __name__ == '__main__':
 for path in (ROOT/'docs').glob('*.md'):
  original = path.read_text()
  converted = normalize_artwork(original)
  if original != converted:
   path.write_text(converted)
   print(path.name)
