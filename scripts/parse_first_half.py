#!/usr/bin/env python3
"""Rebuild chapters 1–9 from PDF text, table geometry and figures.

Run parse_second_half.py next; that final pass normalizes both halves with
simplify-markdown.mjs. Reviewed documents must be backed up before regeneration.
"""
import fitz, re, json, html, hashlib
from native_notices import normalize_notices
from manual_artwork import normalize_artwork, WORK_STEP_ASSETS
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PDF=ROOT/'UM_0006-EN_BactoSense_User_Manual.pdf'
OUT=ROOT/'docs'; OUT.mkdir(exist_ok=True)
FIG=ROOT/'static/img/figures-first'; FIG.mkdir(parents=True,exist_ok=True)
pdf=fitz.open(PDF)
CHAPTERS=[(1,'Glossary','glossary',7,7),(2,'General User Information','general-user-information',8,12),(3,'Instrument Overview','instrument-overview',13,19),(4,'Safety','safety',20,22),(5,'Installation','installation',23,36),(6,'I/O-Box','io-box',37,52),(7,'Field Bus Interface','field-bus-interface',53,63),(8,'General Operations and Configurations','general-operations-and-configurations',64,90),(9,'Upgrade Packages','upgrade-packages',91,93)]
coverage=[]
MANIFEST={p['pdf_page']:p for p in json.loads((ROOT/'extraction/manifest.json').read_text())['pages']}
def esc(s):
 return html.escape(s,quote=False).replace('{','&#123;').replace('}','&#125;').replace('\uf0fc','✓').replace('\uf081','①').replace('\uf082','②').replace('\uf083','③').replace('\uf084','④')
def plain(s):
 return re.sub(r'\s+',' ',s.replace('\u00ad','')).strip()
def inside(r,box):
 r=fitz.Rect(r);box=fitz.Rect(box)
 return box.x0-1 <= (r.x0+r.x1)/2 <=box.x1+1 and box.y0-1 <= (r.y0+r.y1)/2 <=box.y1+1
def crop(pg,box,prefix='figure'):
 r=fitz.Rect(box)&pg.rect;pix=pg.get_pixmap(matrix=fitz.Matrix(2,2),clip=r,alpha=False)
 data=pix.tobytes('png');name=f'{prefix}-{hashlib.sha256(data).hexdigest()[:14]}.png';(FIG/name).write_bytes(data)
 return '/img/figures-first/'+name

def image_tag(path,alt,width=None):
 w=f' width="{round(width)}"' if width else ''
 return f'<img src="{path}" alt="{esc(alt)}"{w} loading="lazy" />'

def get_images(pg,n):
 inv=ROOT/f'extraction/pages/page-{n:03}-inventory.json'
 if inv.exists():
  entries=MANIFEST.get(n,json.loads(inv.read_text())).get('images',[])
  return [dict(x,path=x['path']) for x in entries]
 return [{'bbox':x['bbox'],'path':crop(pg,x['bbox'])} for x in pg.get_image_info()]

def markup_block(block):
 lines=[]
 for l in block['lines']:
  parts=[]
  for s in l['spans']:
   t=esc(s['text']);font=s['font'].lower()
   if not t.strip():parts.append(t);continue
   if 'bold' in font:t='<strong>'+t+'</strong>'
   elif 'itali' in font:t='<em>'+t+'</em>'
   parts.append(t)
  lines.append(''.join(parts))
 text=' '.join(lines)
 # Bullets in a source block become semantic lists, retaining complete wrapped items.
 if '•' in text:
  bits=text.split('•');prefix=bits.pop(0).strip();text=('<p>'+prefix+'</p>' if prefix else '')+'<ul>'+''.join('<li>'+x.strip()+'</li>' for x in bits if x.strip())+'</ul>'
 else:text='<p>'+text+'</p>'
 return text

# Borderless glossary and technical tables are organized by aligned label lines.
def borderless(pg,n,blocks):
 cutoff=280 if n==7 else 325 if n%2==0 else 334
 rows=[];events=[];start=None
 for b in blocks:
  if b['bbox'][1]<65 or b['bbox'][3]>780:continue
  txt=plain(' '.join(s['text'] for l in b['lines'] for s in l['spans']))
  size=max(s['size'] for l in b['lines'] for s in l['spans'])
  if size>=14 or txt.startswith('Table '):
   events.append((b['bbox'][1],(('#'*(2 if size>=15 else 3)+' '+txt) if size>=14 and size<19 else '' if size>=19 else '*'+txt+'*')));continue
  if start is None:start=b['bbox'][1]
  left=[];right=[]
  for l in b['lines']:
   t=plain(''.join(s['text'] for s in l['spans']))
   (left if l['bbox'][0]<cutoff else right).append(t)
  if left:rows.append([' '.join(left),'\n'.join(right)])
  elif right and rows:rows[-1][1]+='\n'+'\n'.join(right)
 if n==7:
  header=rows.pop(0);table='<table><thead><tr><th>Term</th><th>Explanation</th></tr></thead><tbody>'
 else:table='<table><thead><tr><th>Property</th><th>Specification</th></tr></thead><tbody>'
 for left,right in rows:
  if not right:table+='<tr><th colSpan="2">'+esc(left)+'</th></tr>'
  else:table+='<tr><td>'+esc(left)+'</td><td>'+esc(right).replace('\n','<br />')+'</td></tr>'
 table+='</tbody></table>';events.append((start or 100,table));return events

def page_content(n):
 pg=pdf[n-1];blocks=[]
 for b in pg.get_text('dict')['blocks']:
  if b['type']!=0 or b['bbox'][1]<=65 or b['bbox'][3]>=782:continue
  main=[]
  for line in b['lines']:
   txt=plain(''.join(s['text'] for s in line['spans']))
   if line['bbox'][0]<150 and txt in ['i','DANGER!','WARNING!','CAUTION!','EXPLOSION','HAZARD!']:
    blocks.append(dict(type=0,bbox=line['bbox'],lines=[line]))
   else:main.append(line)
  if main:
   r=fitz.Rect(main[0]['bbox'])
   for line in main:r|=fitz.Rect(line['bbox'])
   blocks.append(dict(type=0,bbox=tuple(r),lines=main))
 images=get_images(pg,n);used_images=set();events=[];exclude=[];notice_count=0
 if n in [7,16,17,18,19]:
  events=borderless(pg,n,blocks);events=[(y,re.sub(r'^(#{2,4}) ([0-9.]+) (.+)$',lambda m:m[0]+' {#section-'+m[2].replace('.','-')+'}',v)) for y,v in events];return '\n\n'.join(v for _,v in sorted(events) if v),dict(pdf_page=n,tables=1,images=0,notices=0)
 tables=pg.find_tables().tables
 # Drop nested tables: their text is contained in the outer table and remains searchable there.
 tables=[t for t in tables if not any(t is not other and fitz.Rect(other.bbox).contains(fitz.Rect(t.bbox)) for other in tables)]
 for ti,t in enumerate(tables):
  rows=t.extract();xs=sorted(set(round(c[0],1) for c in t.cells if c)|set(round(c[2],1) for c in t.cells if c))
  ys=sorted(set(round(c[1],1) for c in t.cells if c)|set(round(c[3],1) for c in t.cells if c))
  table='<table><tbody>';seen=set()
  for ri,row in enumerate(t.rows):
   table+='<tr>'
   for ci,cell in enumerate(row.cells):
    if cell is None or tuple(cell) in seen:continue
    seen.add(tuple(cell));r=fitz.Rect(cell);text=plain(re.sub(r'(?<!\w)i(?!\w)', '', rows[ri][ci] or ''))
    colspan=sum(r.x0+.5 < x < r.x1-.5 for x in xs)+1;rowspan=sum(r.y0+.5 < y < r.y1-.5 for y in ys)+1
    ishead=ri==0 and any(w in ' '.join(str(x) for x in rows[0]).upper() for w in ['WORK STEP','REGISTER','RIGHT','DESCRIPTION','TERMINAL','ICON','CONNECTIVITY','STANDARDS'])
    tag='th' if ishead else 'td';attrs=(f' colSpan="{colspan}"' if colspan>1 else '')+(f' rowSpan="{rowspan}"' if rowspan>1 else '')
    content=esc(text)
    if not any('WORK STEP' in str(x) for x in rows[0]):
     raw=rows[ri][ci] or ''
     content=esc(raw).replace('\n','<br />')
    if any(w in text for w in ['CAUTION!','DANGER!','WARNING!']):
     glyph='danger' if 'DANGER!' in text else 'warning'
     content=image_tag('/img/manual/icon-'+glyph+'.png',glyph,30)+' '+content
    if re.search(r'(?<!\w)i(?!\w)',rows[ri][ci] or ''):
     content=image_tag('/img/manual/icon-information.png','Information',24)+' '+content
    # Some symbol cells are pure vector artwork, not embedded raster images.
    cell_assets=[a for mt in MANIFEST[n]['tables'] for a in mt.get('cell_images',[]) if inside(a['bbox'],r)]
    if cell_assets and not any(inside(img['bbox'],r) for img in images):
     for a in cell_assets:content+=(('<br />' if content else '')+image_tag(a['path'],a.get('description','Manual illustration'),min(500,r.width*1.4)))
     used_images.update(ii for ii,img in enumerate(images) if inside(img['bbox'],r))
    if n==49 and ri==2 and ci==1:
     content='If selected, interpolates the chosen cell count value range with a logarithmic scale as follows:<br /><code>ratio = 1 + 9 × (counts − low) / (high − low)</code><br /><code>output = 4 mA + log<sub>10</sub>(ratio) × 16 mA</code><br /><br />counts: Measured cell count<br />low: Lower cell count limit<br />high: Higher cell count limit<br />output: Current amplitude in mA'
    for ii,img in enumerate(images):
     if ii not in used_images and inside(img['bbox'],r):
      used_images.add(ii);iw=fitz.Rect(img['bbox']).width
      content+=(('<br />' if content else '')+image_tag(img['path'],f'Illustration for {text[:140]}' if text else f'Procedure illustration, printed page {n-6}',min(520,max(30,iw*1.7))))
    table+=f'<{tag}{attrs}>'+content+f'</{tag}>'
   table+='</tr>'
  table+='</tbody></table>';events.append((t.bbox[1],table));exclude.append(t.bbox)
 # Safety notices are bounded by horizontal rules in the original. Keep exact notice title and body.
 horizontal=[]
 for d in pg.get_drawings():
  r=d['rect']
  if r.width>300 and r.height<1 and r.y0>65 and 140<r.x0<170:horizontal.append(r.y0)
 horizontal=sorted(set(horizontal))
 for b in blocks:
  text=plain(' '.join(s['text'] for l in b['lines'] for s in l['spans']))
  if text not in ['DANGER!','WARNING!','CAUTION!','EXPLOSION','EXPLOSION HAZARD!']:continue
  if b['bbox'][0]>150 or any(inside(b['bbox'],r) for r in exclude):continue
  y=b['bbox'][1];above=[v for v in horizontal if v<y];below=[v for v in horizontal if v>y]
  if not above or not below:
   nearby=[x for x in blocks if x['bbox'][0]>145 and x['bbox'][1]>=y-65 and x['bbox'][1]<y+15 and not any(inside(x['bbox'],r) for r in exclude)]
   if not nearby:continue
   top=min(x['bbox'][1] for x in nearby)-3;bottom=max(x['bbox'][3] for x in nearby)+3
  else:top=above[-1];bottom=below[0]
  box=(145,top,550,bottom)
  body=[x for x in blocks if inside(x['bbox'],box)]
  if not body:continue
  title=plain(' '.join(s['text'] for l in body[0]['lines'] for s in l['spans']))
  kind='danger' if 'DANGER' in text or 'EXPLOSION' in text else 'warning'
  icon='/img/manual/icon-'+('explosion' if 'EXPLOSION' in text else 'danger' if 'DANGER' in text else 'warning')+'.png'
  content=f':::{kind}[{text if text!="EXPLOSION" else "EXPLOSION HAZARD!"}]\n\n'+image_tag(icon,text,62)+'\n\n'+'\n\n'.join(markup_block(x) for x in sorted(body,key=lambda b:b['bbox'][1]))+'\n\n:::'
  events.append((top,content));exclude.append((65,top,552,bottom));notice_count+=1
 for b in blocks:
  if any(inside(b['bbox'],r) for r in exclude):continue
  # Filter decorative margin icons (the information letter is represented by a reusable asset).
  txt=plain(' '.join(s['text'] for l in b['lines'] for s in l['spans']))
  if txt=='i':
   events.append((b['bbox'][1]-24,image_tag('/img/manual/icon-information.png','Additional information',32)))
   continue
  if txt in ['DANGER!','WARNING!','CAUTION!','EXPLOSION','HAZARD!']:continue
  spans=[s for l in b['lines'] for s in l['spans']];size=max(s['size'] for s in spans)
  if size>=19 and re.match(r'^\d\s',txt):continue
  if size>=13 and re.match(r'^\d+(?:\.\d+)+\s',txt):
   level=min(4,len(re.match(r'^[\d.]+',txt)[0].split('.')));section=re.match(r'^[\d.]+',txt)[0].rstrip('.');value='#'*level+' '+txt+' {#section-'+section.replace('.','-')+'}'
  else:value=markup_block(b)
  if n==11 and txt.startswith('Practical procedures'):
   value=image_tag('/img/manual/icon-procedure.png','Practical procedure',40)+'\n\n'+value
  events.append((b['bbox'][1],value))
 for ii,img in enumerate(images):
  if ii in used_images:continue
  r=fitz.Rect(img['bbox'])
  if r.y0<65 or r.y1>782:continue
  img_y=r.y0
  if r.x1<150:
   path='/img/manual/icon-procedure.png' if img['path'] in WORK_STEP_ASSETS else img['path']
   for t in tables:
    if t.bbox[1]-5 < r.y0 < t.bbox[1]+50:img_y=t.bbox[1]-1
  else:path=img['path']
  events.append((img_y,image_tag(path,f'Original manual illustration, printed page {n-6}',min(950,max(40,r.width*1.7)))))
 for icon in MANIFEST[n].get('vector_icons',[]):
  if icon['name'] not in ['procedure','gloves']:continue
  if any(inside(icon['bbox'],r) for r in exclude):continue
  if any(inside(icon['bbox'],img['bbox']) for img in images):continue
  if n==11:continue
  iy=icon['bbox'][1]
  for t in tables:
   if t.bbox[1]-5 < iy < t.bbox[1]+50:iy=t.bbox[1]-1
  events.append((iy,image_tag(icon['path'],{'procedure':'Practical procedure','gloves':'Wear protective gloves'}[icon['name']],32)))
 return '\n\n'.join(v for _,v in sorted(events,key=lambda x:x[0]) if v),dict(pdf_page=n,tables=len(tables),images=len(images),notices=notice_count)

def main():
 for ch,title,slug,start,end in CHAPTERS:
  chunks=[f'---\ntitle: "{ch}. {title}"\nsidebar_label: "{ch}. {title}"\nslug: /{slug}\nsidebar_position: {ch}\ndescription: "BactoSense user manual: {title}."\n---\n']
  for n in range(start,end+1):
   body,audit=page_content(n);coverage.append(audit)
   chunks.append(body)
  (OUT/f'{ch:02}-{slug}.md').write_text(normalize_artwork(normalize_notices('\n\n'.join(chunks)+'\n')))
 (ROOT/'extraction/first-half-coverage.json').write_text(json.dumps(coverage,indent=2)+'\n')
 print('Generated',len(CHAPTERS),'chapters from',len(coverage),'pages')
 print('Next: run scripts/parse_second_half.py to finish extraction and normalize Markdown for both halves.')
if __name__=='__main__':main()
