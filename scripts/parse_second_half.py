#!/usr/bin/env python3
"""Rebuild chapters 10–20 from native PDF text, table geometry and source artwork.

Text is reflowed, tables are semantic HTML, and source figures retain annotations.
Reviewed chapter bodies in scripts/editorial/ override their PDF-derived content.
Run extraction and parse_first_half.py first, then this script. The final pass
normalizes all generated Markdown through scripts/simplify-markdown.mjs.
"""
from pathlib import Path
import re,json,html,hashlib,subprocess
import fitz,pdfplumber
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
PDF=ROOT/'UM_0006-EN_BactoSense_User_Manual.pdf'
OUT=ROOT/'docs';OUT.mkdir(exist_ok=True)
FIG=ROOT/'static/img/figures-second';FIG.mkdir(parents=True,exist_ok=True)
chapters=[(10,94,103,'measurements','Measurements'),(11,104,119,'results-and-data-analysis','Results and Data Analysis'),(12,120,124,'data-access-and-export','Data Access and Export'),(13,125,129,'web-user-interface','Web User Interface'),(14,130,130,'bactocloud','BactoCloud'),(15,131,144,'maintenance','Maintenance'),(16,145,157,'warnings-errors-and-troubleshooting','Warnings, Errors and Troubleshooting'),(17,158,164,'storage-transport-and-disposal','Storage, Transport and Disposal'),(18,165,168,'supply-scope-accessories-and-consumables','Supply Scope, Accessories and Consumables'),(19,169,169,'contact','Contact'),(20,170,172,'index','Index')]
doc=fitz.open(PDF);plumb=pdfplumber.open(PDF)
manifest=json.loads((ROOT/'extraction/manifest.json').read_text())
audit=[]
source_sections=json.loads((ROOT/'maintenance/source-sections.json').read_text())
SYMBOLS={'\uf0b4':'×','\uf081':'①','\uf082':'②','\uf083':'③','\uf084':'④','\uf085':'⑤','\uf086':'⑥','\uf087':'⑦','\uf088':'⑧','\uf089':'⑨','\uf08a':'⑩','\uf08b':'⑪','\uf08c':'⑫','\uf08d':'⑬','\uf08e':'⑭','\uf08f':'⑮','\uf090':'⑯'}
def clean(s):
 for a,b in SYMBOLS.items():s=s.replace(a,b)
 return s.replace('\x00','').replace('\u00ad','')
def esc(s):return html.escape(clean(s),quote=False).replace('{','&#123;').replace('}','&#125;').replace('|','&#124;')
def inside(b,r):return r[0]-.8 <= (b[0]+b[2])/2 <=r[2]+.8 and r[1]-.8 <=(b[1]+b[3])/2<=r[3]+.8
def textblock(b):return ' '.join(''.join(s['text'] for s in l['spans']).strip() for l in b['lines']).strip()
def crop(page,rect,prefix):
 rect=fitz.Rect(rect)&page.rect;pix=page.get_pixmap(matrix=fitz.Matrix(2.5,2.5),clip=rect,alpha=False)
 im=Image.frombytes('RGB',(pix.width,pix.height),pix.samples);sha=hashlib.sha256(str(im.size).encode()+im.tobytes()).hexdigest()[:14]
 name=prefix+'-'+sha+'.webp';path=FIG/name
 if not path.exists():im.save(path,'WEBP',lossless=True)
 return '/img/figures-second/'+name

def imgtag(im,alt='Illustration from the BactoSense user manual'):
 b=im['bbox'];w=max(20,round((b[2]-b[0])*1.65));path=im.get('composite_path') or ((im.get('rendered_path') or im['path']) if w>80 else im['path'])
 cls='manual-icon' if w<80 else 'manual-figure'
 return f'<img src="{path}" alt="{html.escape(alt,quote=True)}" width="{w}" className="{cls}" loading="lazy" />'

def reflow(s):
 lines=s.splitlines();out=''
 for line in lines:
  line=esc(line.strip())
  if not line:continue
  if line.startswith('•'):
   out+=('<br />' if out else '')+'• '+line[1:].strip()
  else:out+=(' ' if out else '')+line
 return out

def celltext(page,cell,excluded=()):
 # Native line spans retain superscripts, mathematical symbols and embedded URL text.
 lines=[]
 for b in page.get_text('dict')['blocks']:
  for l in b.get('lines',[]):
   if inside(l['bbox'],cell) and not any(inside(l['bbox'],r) for r in excluded):lines.append(l)
 lines.sort(key=lambda l:(round(l['bbox'][1]/2)*2,l['bbox'][0]))
 out=[];prev=None
 for l in lines:
  st=''
  for s in l['spans']:
   t=esc(s['text'])
   if s['flags']&1:t='<sup>'+t+'</sup>'
   st+=t
  st=st.strip()
  if st=='i':continue
  if st:
   if prev and abs(l['bbox'][1]-prev)<3 and out:out[-1]+=' '+st
   else:out.append(st)
   prev=l['bbox'][1]
 return reflow('\n'.join(html.unescape(x) if '<sup>' not in x else x for x in out)).replace('&lt;sup&gt;','<sup>').replace('&lt;/sup&gt;','</sup>')

def render_table(page,table,images,num,ti,alltables=()):
 rows=table.rows;xs=sorted(set(round(c[0],2) for c in table.cells)|set(round(c[2],2) for c in table.cells));ys=sorted(set(round(c[1],2) for c in table.cells)|set(round(c[3],2) for c in table.cells));parts=['<table className="manual-table"><tbody>']
 first=table.extract()[0];isheader=any(x and any(w in x for w in ['WORK STEP','NAME','DESCRIPTION','PARAMETER','ART. NO.','ERROR','MODE','MATERIAL','ACTION','GATE','TYPE','IMAGE','FREQUENCY']) for x in first)
 for ri,row in enumerate(rows):
  parts.append('<tr>')
  for cell in row.cells:
   if not cell:continue
   children=[t for t in alltables if t is not table and inside(t.bbox,cell) and t.bbox[0]>=cell[0] and t.bbox[2]<=cell[2]]
   txt=celltext(page,cell,[t.bbox for t in children])
   hasinfo=any(''.join(s['text'] for s in l['spans']).strip()=='i' and inside(l['bbox'],cell) for b in page.get_text('dict')['blocks'] for l in b.get('lines',[]))
   if hasinfo:txt='<img src="/img/manual/icon-information.png" alt="Information" width="28" className="manual-icon" /> '+txt
   for child in children:txt+=render_table(page,child,images,num,ti)
   if num==123 and 'Name Description ipaddress' in txt:
    before,rest=txt.split('Name Description ipaddress',1)
    labels=['port','filename','extension','myhash'];vals=re.split(r' (?=port Port|filename Name|extension File|myhash Security)',rest.strip());names=['ipaddress']+labels
    pairs=[]
    for j,val in enumerate(vals):
     if j:val=val[len(names[j]):].strip()
     pairs.append('<tr><td><code>'+names[j]+'</code></td><td>'+val+'</td></tr>')
    txt=before+'<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody>'+''.join(pairs)+'</tbody></table>'
   ims=[im for im in images if inside(im['bbox'],cell)]
   # Capturing the full image footprint plus adjacent vector arrows preserves procedure annotations.
   for im in ims:
    txt+=('<br />' if txt else '')+imgtag(im,f'Illustration for table on manual page {num-6}')
   # Correct the native PDF equation ordering into explicit accessible formulae.
   if num in (107,108,109) and ('relative to' in txt or 'percentage of HNA' in txt):
    base={107:'TCC',108:'ICC',109:'ACC'}[num];txt=txt.split(':')[0]+f':<br />HNAP = (HNAC / {base}) × 100'
   if num==109 and txt.startswith('The percentage of HACC among ACC.'):txt='The percentage of HACC among ACC.<br />HACP = (HACC / ACC) × 100'
   tag='th' if ri==0 and isheader else 'td';attr=' scope="col"' if tag=='th' else ''
   spanx=sum(cell[0]-.1<=x<cell[2]-.1 for x in xs);spany=sum(cell[1]-.1<=y<cell[3]-.1 for y in ys)
   if spanx>1:attr+=f' colSpan="{spanx}"'
   if spany>1:attr+=f' rowSpan="{spany}"'
   parts.append(f'<{tag}{attr}>{txt}</{tag}>')
  parts.append('</tr>')
 parts.append('</tbody></table>')
 return ''.join(parts)

def prose(block):
 lines=block['lines'];ss=[s for l in lines for s in l['spans']];raw=textblock(block);size=max(s['size'] for s in ss)
 if re.match(r'^\d{2}(\.\d+)+\s',raw) and size>=13:
  number=raw.split()[0];level=min(4,number.count('.')+1)
  return '#' * level+' '+esc(raw)+' {#section-'+number.replace('.','-')+'}'
 if size>=19 and re.match(r'^\d{2}\s',raw):return ''
 if raw.startswith(('Storage ', 'Re-installation ', 'Transportation ')):
  key=raw.split()[0];return '**'+key+'**\n\n'+esc(raw[len(key):].strip())
 if raw.startswith('Figure '):return '*'+esc(raw)+'*'
 if raw.startswith('Table '):return '**'+esc(raw)+'**'
 result=[];current=[]
 for l in lines:
  s=''.join(s['text'] for s in l['spans']).strip()
  if not s:continue
  if s.startswith('•'):
   if current:result.append(' '.join(current));current=[]
   result.append('- '+esc(s[1:].strip()))
  elif result and result[-1].startswith('- ') and not current:result[-1]+=' '+esc(s)
  else:current.append(esc(s))
 if current:result.append(' '.join(current))
 return '\n'.join(result)

def render_page(num):
 page=doc[num-1];blocks=page.get_text('dict')['blocks'];textblocks=[b for b in blocks if b['type']==0 and b['bbox'][1]>=60 and b['bbox'][3]<785 and textblock(b)]
 inventory=ROOT/f'extraction/pages/page-{num:03}-inventory.json'
 pageinfo=manifest['pages'][num-1]
 images=list(pageinfo['images'])
 for t in pageinfo['tables']:
  for ci in t.get('cell_images',[]):
   images=[im for im in images if not inside(im['bbox'],ci['bbox'])]
   images.append(ci)
 for vi in pageinfo.get('vector_icons',[]):
  if vi['name'] in ('procedure','screenshot'):
   images=[im for im in images if not inside(im['bbox'],vi['bbox'])]
   images.append(vi)
 # Repeated raster images occur once per placement in the inventory.
 seen=set();images=[im for im in images if not (tuple(im['bbox']) in seen or seen.add(tuple(im['bbox'])))]
 tables=[t for t in plumb.pages[num-1].find_tables() if t.bbox[2]-t.bbox[0]>100 and len(t.rows)>=2]
 # For each captioned composite figure, retain all screenshot pieces, arrows and labels together.
 figures=[]
 for caption in [b for b in textblocks if textblock(b).startswith('Figure ')]:
  end=caption['bbox'][1];candidates=[im for im in images if im['bbox'][3]<=end+2 and im['bbox'][0]>135 and not any(inside(im['bbox'],t.bbox) for t in tables)]
  if not candidates:continue
  last=max(candidates,key=lambda im:im['bbox'][3]);start=last['bbox'][1]
  # Walk adjoining images upwards if no body prose separates them.
  for im in sorted(candidates,key=lambda im:-im['bbox'][3]):
   between=[b for b in textblocks if b['bbox'][1]>im['bbox'][3]+2 and b['bbox'][3]<start-2 and len(textblock(b))>25]
   if im['bbox'][3]>=start-24 and not between:start=min(start,im['bbox'][1])
  members=[im for im in candidates if im['bbox'][1]>=start-2]
  rect=[min(im['bbox'][0] for im in members)-14,start-12,max(im['bbox'][2] for im in members)+14,max(end-2,max(im['bbox'][3] for im in members)+1)]
  rect[0]=max(rect[0],140)
  prior=[b['bbox'][3] for b in textblocks if b['bbox'][3]<=start and len(textblock(b))>25]
  if prior:rect[1]=min(start,max(rect[1],max(prior)+1))
  fig={'bbox':rect,'composite_path':crop(page,rect,'figure'),'caption':textblock(caption)};figures.append(fig)
 # Original vector warning/info/glove symbols sit in the left margin alongside a notice.
 margin=[]
 for b in textblocks:
  raw=textblock(b)
  if b['bbox'][2]<148 and (raw in ('i','WARNING!','CAUTION!','DANGER!')):
   margin.append((b,raw))
 notices=[]
 for b,label in margin:
  y=b['bbox'][1];near=[x for x in textblocks if x['bbox'][0]>=145 and x['bbox'][1]>y-(8 if label=='i' else 60) and x['bbox'][1]<y+15 and not any(inside(x['bbox'],t.bbox) for t in tables)]
  if not near:continue
  for following in sorted(textblocks,key=lambda x:x['bbox'][1]):
   currentbottom=max(x['bbox'][3] for x in near)
   if textblock(following).startswith('•') and currentbottom<=following['bbox'][1]<currentbottom+20:
    near.append(following)
  bottom=max(x['bbox'][3] for x in near);top=min(x['bbox'][1] for x in near)
  # Include bold safety notice titles immediately above the main paragraph.
  rect=[145,top,550,bottom];iconrect=[b['bbox'][0]-5,max(60,y-(32 if label!='i' else 2)),b['bbox'][2]+5,b['bbox'][3]+3]
  icon={'bbox':[0,0,24,28],'path':'/img/manual/icon-'+('information' if label=='i' else ('danger' if label=='DANGER!' else 'warning'))+'.png'}
  notices.append({'bbox':rect,'blocks':near,'kind':'note' if label=='i' else 'danger' if label=='DANGER!' else 'caution' if label=='CAUTION!' else 'warning','icon':icon,'label':'Note' if label=='i' else label.rstrip('!').title()})
 # Gloves are vector-only; the distinctive mandatory protective-glove notices are retained as admonitions.
 for b in textblocks:
  if textblock(b).startswith(('Wear nitrile gloves','Wear fresh, non-powdered nitrile gloves')) and not any(b in n['blocks'] for n in notices):
   r=b['bbox'];ir=[91 if num%2==0 else 100,r[1]-5,124 if num%2==0 else 133,r[3]+10]
   notices.append({'bbox':r,'blocks':[b],'kind':'gloves','icon':{'bbox':[0,0,28,28],'path':'/img/manual/icon-gloves.png'},'label':'Protective gloves'})
 events=[];usedtexts=[]
 for ti,t in enumerate(tables):
  if any(other is not t and other.bbox[0]<=t.bbox[0] and other.bbox[2]>=t.bbox[2] and other.bbox[1]<t.bbox[1] and other.bbox[3]>t.bbox[3] for other in tables):continue
  events.append((t.bbox[1],render_table(page,t,images,num,ti,tables)))
 for f in figures:events.append((f['bbox'][1],imgtag(f,f['caption'])))
 for n in notices:
  txt='\n\n'.join(prose(b) for b in sorted(n['blocks'],key=lambda b:b['bbox'][1]));events.append((n['bbox'][1],f':::{n["kind"]}[{n["label"]}]\n\n{imgtag(n["icon"],n["label"]+" symbol")}\n\n{txt}\n\n:::'))
 for im in images:
  if im['bbox'][1]<60 or any(inside(im['bbox'],t.bbox) for t in tables) or any(inside(im['bbox'],f['bbox']) for f in figures):continue
  # Work-step pointer icons remain visible, at original icon size.
  iy=im['bbox'][1]
  if im['bbox'][2]<145:
   nearby=[t.bbox[1] for t in tables if abs(t.bbox[1]-iy)<30]
   if nearby:iy=min(nearby)-.1
  events.append((iy,imgtag(im)))
 for b in textblocks:
  if any(inside(b['bbox'],t.bbox) for t in tables) or any(inside(b['bbox'],f['bbox']) for f in figures) or any(b in n['blocks'] for n in notices) or any(b is m[0] for m in margin):continue
  # Block can overlap a table boundary: filter each line individually before emitting.
  kept=[l for l in b['lines'] if not any(inside(l['bbox'],t.bbox) for t in tables)]
  if not kept:continue
  c={**b,'lines':kept};txt=prose(c)
  if txt:events.append((b['bbox'][1],txt));usedtexts.append(textblock(c))
 events.sort(key=lambda e:e[0]);out='\n\n'.join(t for _,t in events)
 audit.append({'pdf_page':num,'printed_page':num-6,'tables':len(tables),'images':len(images),'composite_figures':len(figures),'figure_regions':figures,'notices':len(notices)+(1 if num in (105,157) else 0),'native_characters':len(page.get_text()),'output_characters':len(out)})
 return out

def index():
 out=['Select a section number to open the corresponding section of this manual.']
 for num in range(170,173):
  lines=[l for b in doc[num-1].get_text('dict')['blocks'] for l in b.get('lines',[]) if l['bbox'][1]>110 if num==170] if num==170 else [l for b in doc[num-1].get_text('dict')['blocks'] for l in b.get('lines',[]) if 60<l['bbox'][1]<780]
  lines=[l for l in lines if l['bbox'][3]<780]
  columns=[(149,280),(280,411),(411,560)] if num%2==0 else [(158,289),(289,420),(420,560)]
  for lo,hi in columns:
   ls=sorted([l for l in lines if lo-1<=l['bbox'][0]<hi-1],key=lambda l:l['bbox'][1])
   for l in ls:
    raw=clean(''.join(s['text'] for s in l['spans']).strip())
    if not raw:continue
    if re.fullmatch('[A-Z]',raw):out.append('\n## '+raw+'\n');continue
    def section_link(match):
     target=source_sections.get(match[1])
     if not target:raise ValueError(f'No section mapping for printed source page {match[1]}')
     return f"[{target['section']}]({target['path']})"
    text=re.sub(r'(?<!\w)(\d+)(?!\w)',section_link,raw)
    level=1 if l['bbox'][0]>lo+10 else 0
    if re.match(r'^\[\d+(?:\.\d+)*\]',text) and out:out[-1]+=' '+text
    else:out.append(('  ' if level else '')+'- '+text)
  audit.append({'pdf_page':num,'printed_page':num-6,'index_lines':len(lines),'native_characters':len(doc[num-1].get_text())})
 return '\n'.join(out)

def repair_notices(content):
 info='<img src="/img/manual/icon-information.png" alt="Information" width="28" className="manual-icon" />'
 for sentence in [
  'Multiple selection &amp; batch operations: In the list of measurements, long-press on one measurement to activate the selection of multiple measurements, then select Delete / Re-gate or Export.',
  'Measurements can be delayed if extensive heating is necessary. To avoid this, keep the instrument temperature above 10 °C (50 °F).'
 ]:
  content=content.replace(sentence+' i',':::note[Note]\n\n'+info+'\n\n'+sentence+'\n\n:::')
 content=content.replace('**Table 17-2 Materials and their recycling or disposal**','**Table 17-2 Materials and their recycling or disposal**\n\n'+info)
 content=content.replace('Do not disassemble nor dispose the CAUTION! cartridge.','<img src="/img/manual/icon-warning.png" alt="Caution" width="28" className="manual-icon" /> <strong>CAUTION!</strong><br />Do not disassemble nor dispose the cartridge.')
 return content

from native_notices import normalize_notices
from manual_artwork import normalize_artwork

for number,start,end,slug,title in chapters:
 content=index() if number==20 else '\n\n'.join(render_page(num) for num in range(start,end+1))
 content=repair_notices(content)
 editorial=ROOT/'scripts/editorial'/f'{number:02}-{slug}.md'
 if editorial.is_file():content=editorial.read_text().strip()
 header=f'---\ntitle: "{number}. {title}"\nsidebar_label: "{number}. {title}"\nsidebar_position: {number}\nslug: /{slug}\n---\n\n'
 content=content.replace('www.bnovate.com/ distribution-partners','[www.bnovate.com/distribution-partners](https://www.bnovate.com/distribution-partners)')
 content=content.replace('http://ipaddress:port/export/filename.extension?hash=myhash','<code>http&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code>').replace('https://ipaddress:port/export/filename.extension?hash=myhash','<code>https&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code>')
 filename=f'docs/{number:02}-{slug}.md'
 (ROOT/filename).write_text(normalize_artwork(normalize_notices(header+content+'\n'),filename))
 print(number,title,flush=True)
(ROOT/'extraction/chapters-10-20-audit.json').write_text(json.dumps(audit,indent=2)+'\n')

# This directory is owned by this generator; remove obsolete intermediate crops.
referenced=''.join((OUT/f'{n:02}-{slug}.md').read_text() for n,_,_,slug,_ in chapters)
for asset in FIG.glob('*.webp'):
 if '/img/figures-second/'+asset.name not in referenced:asset.unlink()

# Normalize only after the complete two-pass extraction sequence.
subprocess.run(['node',str(ROOT/'scripts/simplify-markdown.mjs')],cwd=ROOT,check=True)
