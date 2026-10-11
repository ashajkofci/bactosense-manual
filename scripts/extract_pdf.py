#!/usr/bin/env python3
"""Reproducibly preserve PDF text, layout, tables and reusable figure assets.

Run with .venv/bin/python scripts/extract_pdf.py. Requires PyMuPDF and Pillow.
Exact pixel-equivalent embedded assets share one canonical path. Similar images
are reported for review, never destructively merged without visual confirmation.
"""
from pathlib import Path
import argparse, hashlib, io, json, re
import pymupdf
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]

def digest(data): return hashlib.sha256(data).hexdigest()
def rectlist(rect): return [round(float(x),3) for x in rect]
def jsonwrite(path,data): path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
def enrich(doc,manifest,assetsdir,pagesdir):
    """Recover vector-only pictograms and image-only table cells as canonical assets."""
    from PIL import ImageChops, ImageStat, ImageOps
    def raster(page,box,scale=4):
        pix=page.get_pixmap(matrix=pymupdf.Matrix(scale,scale),clip=box,alpha=False)
        return Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
    reference_page=doc[10];clusters=reference_page.cluster_drawings();references=[];icons=[]
    for name,index in [('danger',0),('explosion',1),('warning',2),('information',4),('procedure',5),('screenshot',6)]:
        box=clusters[index];path=f'/img/manual/icon-{name}.png';raster(reference_page,box+(-1,-1,1,1)).save(ROOT/'static'/path.lstrip('/'))
        references.append((name,box.width/box.height,raster(reference_page,box).resize((64,64),Image.Resampling.LANCZOS)))
        icons.append({'name':name,'path':path,'source_pdf_page':11,'bbox':rectlist(box),'reused_for':['warning','caution'] if name=='warning' else [name]})
    glove_page=doc[28];glove_box=pymupdf.Rect(95.699,322.430,136.616,363.348)
    raster(glove_page,glove_box+(-1,-1,1,1)).save(assetsdir/'icon-gloves.png')
    references.append(('gloves',glove_box.width/glove_box.height,raster(glove_page,glove_box).resize((64,64),Image.Resampling.LANCZOS)))
    icons.append({'name':'gloves','path':'/img/manual/icon-gloves.png','source_pdf_page':29,'bbox':rectlist(glove_box),'reused_for':['mandatory protective gloves']})
    report={'method':'Vector clusters rendered to 64x64 RGB; conservative aspect-ratio and mean absolute pixel difference comparison against visually verified PDF page 11 pictograms. Warning and caution share identical exclamation glyph; their text labels remain separate.','thresholds':{'mean_absolute_error':7,'procedure_mean_absolute_error':17,'information_and_screenshot_mean_absolute_error':10,'minimum_runner_up_margin':3},'matches':[],'unmatched_candidates':[]}
    # Visually reviewed equivalents: same procedure-hand artwork in three raster sizes.
    # Keep every original pixel asset for provenance; use the largest in documentation.
    canonical_hand='/img/manual/asset-fefd092894c7.png'
    hand_variants=['/img/manual/asset-742605dcc5f0.png','/img/manual/asset-45698338cb50.png',canonical_hand]
    def dhash(im):
        pixels=list(im.convert('L').resize((9,8),Image.Resampling.LANCZOS).getdata())
        return sum((pixels[y*9+x]>pixels[y*9+x+1]) << (y*8+x) for y in range(8) for x in range(8))
    small=[]
    for asset in manifest['assets'].values():
        if asset['path'] in hand_variants:asset['canonical_path']=canonical_hand
        if asset['width']<=160 and asset['height']<=160:
            im=Image.open(ROOT/'static'/asset['path'].lstrip('/'));small.append((asset,dhash(im)))
    report['perceptual_hash_candidates']=[]
    for ai,(a,ha) in enumerate(small):
        for b,hb in small[ai+1:]:
            distance=bin(ha^hb).count('1')
            if distance<=8:
                report['perceptual_hash_candidates'].append({'first':a['path'],'second':b['path'],'difference_hash_hamming_distance':distance,'canonical_path':canonical_hand if a['path'] in hand_variants and b['path'] in hand_variants else None,'review':'Same procedure-hand artwork, visually verified; use largest raster' if a['path'] in hand_variants and b['path'] in hand_variants else 'Preserved separately; perceptual similarity alone is not identity'})
    for index,page in enumerate(doc):
        record=manifest['pages'][index];record['vector_icons']=[]
        for occurrence in record['images']:
            if occurrence['path'] in hand_variants:
                occurrence.setdefault('original_path',occurrence['path']);occurrence['path']=canonical_hand
        for box in page.cluster_drawings():
            if not (10<box.width<70 and 10<box.height<70):continue
            candidate=raster(page,box).resize((64,64),Image.Resampling.LANCZOS)
            scores=sorted((sum(ImageStat.Stat(ImageChops.difference(candidate,ref)).mean)/3,name) for name,aspect,ref in references if abs(box.width/box.height/aspect-1)<.2)
            if not scores:continue
            score,name=scores[0];margin=scores[1][0]-score if len(scores)>1 else 255
            match={'pdf_page':index+1,'bbox':rectlist(box),'name':name,'mean_absolute_error':round(score,3),'runner_up_margin':round(margin,3)}
            if score<=({'procedure':17,'information':10,'screenshot':10}.get(name,7)) and margin>=3:
                match['path']=f'/img/manual/icon-{name}.png';record['vector_icons'].append(match);report['matches'].append(match)
            elif box.x0<145:report['unmatched_candidates'].append(match)
        try:tables=list(page.find_tables().tables)
        except Exception:tables=[]
        for table,entry in zip([t for t in tables if t.row_count>=2],record['tables']):
            entry['cell_images']=[];rows=table.extract()
            for ri,row in enumerate(table.rows):
                for ci,coords in enumerate(row.cells):
                    if coords is None or (rows[ri][ci] or '').strip():continue
                    box=pymupdf.Rect(coords)+(3,3,-3,-3)
                    if box.width<4 or box.height<4:continue
                    im=raster(page,box);gray=im.convert('L');mask=gray.point(lambda x:255 if x<225 else 0);ink=mask.getbbox()
                    if ink is None or sum(mask.histogram()[1:])/(im.width*im.height)<.005:continue
                    im=ImageOps.expand(im.crop(ink),border=4,fill='white');sha=digest(str(im.size).encode()+im.tobytes());name=f'cell-{sha[:12]}.png';im.save(assetsdir/name,optimize=True)
                    description=next((str(c).replace('\n',' ') for c in rows[ri][ci+1:] if c),'Table illustration')
                    entry['cell_images'].append({'row':ri,'column':ci,'bbox':rectlist(box),'path':'/img/manual/'+name,'description':description})
        jsonwrite(pagesdir/f'page-{index+1:03}-inventory.json',record)
    manifest['icons']=icons;manifest['statistics']['canonical_embedded_assets_after_visual_review']=len(manifest['assets'])-2;manifest['statistics']['canonical_vector_icons']=len(icons);manifest['statistics']['reused_vector_icon_occurrences']=len(report['matches']);manifest['statistics']['table_cell_illustrations']=sum(len(t.get('cell_images',[])) for p in manifest['pages'] for t in p['tables'])
    jsonwrite(ROOT/'extraction/icons.json',icons);jsonwrite(ROOT/'extraction/icon-reuse-audit.json',report)

def main():
    ap=argparse.ArgumentParser();ap.add_argument('--pdf',default='UM_0006-EN_BactoSense_User_Manual.pdf');ap.add_argument('--render-previews',action='store_true',help='Write optional page previews under ignored extraction/previews, never static assets');args=ap.parse_args()
    source=ROOT/args.pdf;doc=pymupdf.open(source)
    pagesdir=ROOT/'extraction/pages';assetsdir=ROOT/'static/img/manual';renders=ROOT/'extraction/previews'
    for d in (pagesdir,assetsdir):d.mkdir(parents=True,exist_ok=True)
    if args.render_previews:renders.mkdir(parents=True,exist_ok=True)
    manifest={'source':{'file':source.name,'sha256':digest(source.read_bytes()),'page_count':len(doc),'document_number':'UM_0006-01EN','valid_from':'Software version 3.1.0'},'extraction':{'engine':'PyMuPDF','version':pymupdf.VersionBind,'image_deduplication':'SHA-256 of decoded RGBA pixels, including dimensions; alpha masks preserved','near_duplicates':'Not automatically merged; screenshots with different text or controls must remain distinct'},'assets':{},'pages':[]}
    cache={}
    for index,page in enumerate(doc):
        num=index+1;stem=f'page-{num:03}';text=page.get_text(sort=True)
        (pagesdir/(stem+'.txt')).write_text(text)
        layout=page.get_text('dict');layout['blocks']=[{k:v for k,v in b.items() if k not in ('image','mask')} if b['type']==1 else b for b in layout['blocks']]
        jsonwrite(pagesdir/(stem+'.json'),layout)
        record={'pdf_page':num,'printed_page':num-6 if 7<=num<=172 else None,'width':page.rect.width,'height':page.rect.height,'text':f'extraction/pages/{stem}.txt','layout':f'extraction/pages/{stem}.json','images':[],'tables':[],'drawings_count':len(page.get_drawings())}
        for item in page.get_images(full=True):
            xref,smask=item[0],item[1]
            if xref not in cache:
                pix=pymupdf.Pixmap(doc,xref)
                if pix.colorspace and pix.colorspace.n>3:pix=pymupdf.Pixmap(pymupdf.csRGB,pix)
                if smask:
                    if pix.alpha:pix=pymupdf.Pixmap(pix,0)
                    mask=pymupdf.Pixmap(doc,smask)
                    if (pix.width,pix.height)==(mask.width,mask.height):pix=pymupdf.Pixmap(pix,mask)
                    else:
                        color=Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGBA');alpha=Image.open(io.BytesIO(mask.tobytes('png'))).convert('L').resize(color.size,Image.Resampling.LANCZOS);color.putalpha(alpha)
                        buffer=io.BytesIO();color.save(buffer,format='PNG');pix=pymupdf.Pixmap(buffer.getvalue())
                raw=pix.tobytes('png');im=Image.open(io.BytesIO(raw)).convert('RGBA')
                sha=digest(str(im.size).encode()+im.tobytes());name=f'asset-{sha[:12]}.png';path='/img/manual/'+name
                if sha not in manifest['assets']:
                    im.save(assetsdir/name,optimize=True)
                    manifest['assets'][sha]={'path':path,'width':im.width,'height':im.height,'alpha':bool(smask or pix.alpha),'xrefs':[],'occurrences':[]}
                manifest['assets'][sha]['xrefs'].append(xref);cache[xref]=(sha,path)
            sha,path=cache[xref]
            for bbox in page.get_image_rects(xref):
                occ={'bbox':rectlist(bbox),'path':path,'xref':xref,'sha256':sha}
                crop=page.get_pixmap(matrix=pymupdf.Matrix(2,2),clip=bbox+(-3,-3,3,3),alpha=False)
                cropim=Image.frombytes('RGB',(crop.width,crop.height),crop.samples);cropsha=digest(str(cropim.size).encode()+cropim.tobytes());cropname=f'render-{cropsha[:12]}.webp'
                if not (assetsdir/cropname).exists():cropim.save(assetsdir/cropname,'WEBP',lossless=True)
                occ['rendered_path']='/img/manual/'+cropname
                if occ not in record['images']:
                    record['images'].append(occ);manifest['assets'][sha]['occurrences'].append({'pdf_page':num,'bbox':occ['bbox']})
        try:
            for ti,table in enumerate(page.find_tables().tables):
                if table.row_count<2:continue
                bbox=pymupdf.Rect(table.bbox)
                record['tables'].append({'bbox':rectlist(bbox),'rows':table.extract(),'row_count':table.row_count,'column_count':table.col_count})
        except Exception as exc:record['table_extraction_error']=str(exc)
        # Optional diagnostic previews stay outside published static assets.
        if args.render_previews:
            preview=page.get_pixmap(matrix=pymupdf.Matrix(1,1),alpha=False)
            preview.save(renders/(stem+'.png'))
        record['images'].sort(key=lambda im:(im['bbox'][1],im['bbox'][0]));manifest['pages'].append(record)
        jsonwrite(pagesdir/(stem+'-inventory.json'),record)
        if num%20==0:print(f'Extracted {num}/{len(doc)} pages',flush=True)
    manifest['statistics']={'pages':len(doc),'unique_embedded_assets':len(manifest['assets']),'embedded_image_occurrences':sum(len(p['images']) for p in manifest['pages']),'tables':sum(len(p['tables']) for p in manifest['pages'])}
    enrich(doc,manifest,assetsdir,pagesdir)
    jsonwrite(ROOT/'extraction/manifest.json',manifest)
    print(json.dumps(manifest['statistics']),flush=True)
if __name__=='__main__':main()
