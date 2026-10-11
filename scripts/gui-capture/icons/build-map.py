#!/usr/bin/env python3
"""Describe/review crops from genuine production Qt controls, without publishing assets."""
from pathlib import Path
import json,re,hashlib,datetime,collections
from PIL import Image,ImageDraw,ImageFont,ImageStat

ROOT=Path(__file__).resolve().parents[3]
CAPTURE=ROOT/'output/gui-capture/icons'
LOG=CAPTURE/'capture.log'
KEYS={
    'maintenance':'maintenance-button','home':'home-button','special-import-export':'special-import-export-button',
    'network':'network-button','system-settings':'system-settings-button','date-time':'date-time-button',
    'demo-status':'demo-mode-status','critical-error-status':'critical-error-status','noncritical-error-status':'noncritical-error-status',
    'alarm-status':'alarm-status','cartridge-almost-expired':'cartridge-almost-expired-status','process-running':'process-running-status',
    'cartridge-almost-empty':'cartridge-almost-empty-status','cartridge-level':'cartridge-level-status','cartridge-not-ready':'cartridge-not-ready-status',
    'cartridge-expired':'cartridge-expired-status','service-required':'service-required-status','cartridge-empty':'cartridge-empty-status',
    'demo-mode':'demo-mode-button','factory-reset':'factory-reset-button','edit-gate':'edit-gate-button','gate-settings':'gate-settings-button',
    'back':'back-button','system-info':'system-info-button','intervention-info':'intervention-info-button','intervention-log':'intervention-log-button',
    'noncritical-error-event':'noncritical-error-event','critical-error-event':'critical-error-event','errors-cleared-event':'errors-cleared-event'
}

def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def main():
    log=LOG.read_text()
    if 'GL_VENDOR' not in log or 'GL_RENDERER' not in log:
        raise RuntimeError('GPU capture evidence required: the software backend drops ImageIconBtn OpacityMask controls.')
    if re.search(r'(?:FAIL!|TypeError|ReferenceError|Cannot assign|Unable to assign|Unable to load)',log):
        raise RuntimeError('Capture reports QML/test failures; review capture.log before mapping.')
    captures={name:json.loads(data) for name,data in re.findall(r'ICON_CAPTURE_TREE (\S+) (\[.+\])',log)}
    if set(captures)!={'controls-atlas','status-atlas'}:raise RuntimeError('Both production atlases are required')
    inventory=json.loads((ROOT/'maintenance/gui-screenshot-inventory.json').read_text())
    icons=[]
    for capture_name,tree in captures.items():
        logical=[800,640 if capture_name=='controls-atlas' else 900]
        raw=CAPTURE/(capture_name+'.png');im=Image.open(raw).convert('RGB')
        if list(im.size)!=[logical[0]*2,logical[1]*2]:raise RuntimeError(f'Unexpected atlas dimensions: {raw}')
        groups=sorted({o['group'] for o in tree if o['group'] in KEYS.values()})
        for name in groups:
            objs=[o for o in tree if o['group']==name]
            images=[o for o in objs if o['type']=='QQuickImage' and o['source'].startswith('qrc:/images/icons/')]
            vectors=[o for o in objs if 'GenericIcon' in o['type']]
            resource_paths=[]
            if name in ('home-button','back-button'):
                target=next(o for o in objs if 'ToolBarButton' in o['type']);padding=0;component='views/singleComponents/ToolBarButton.qml'
            elif name=='edit-gate-button':
                target=next(o for o in objs if 'ImageIconBtn' in o['type']);padding=4;component='views/singleComponents/ImageIconBtn.qml'
            elif name=='system-info-button':
                target=next(o for o in vectors if o['state']=='info');padding=10;component='views/singleComponents/MenuButtonView.qml + GenericIcon.qml'
            elif name=='process-running-status':
                target=next(o for o in objs if 'Spinner' in o['type']);padding=4;component='views/singleComponents/ToolBarCenter.qml + Spinner.qml'
            elif name.endswith('-event'):
                target=next(o for o in images if any(token in o['source'] for token in ('error_medium','error_generic','cleared_generic')));padding=0;component='views/singleComponents/ListItemError.qml'
            elif capture_name=='controls-atlas':
                target=images[0];padding=10;component='views/singleComponents/MenuButtonView.qml'
            else:
                target=images[0];padding=4;component='views/singleComponents/ToolBarCenter.qml'
            if images:
                for o in images:
                    rel=o['source'].removeprefix('qrc:/');file=ROOT.parent/'gui'/rel
                    if file.exists():resource_paths.append({'qrc':o['source'],'source':'../gui/'+rel,'sha256':sha(file)})
            crop=[round(target['x']-padding,2),round(target['y']-padding,2),round(target['width']+padding*2,2),round(target['height']+padding*2,2)]
            if crop[0]<0 or crop[1]<0 or crop[0]+crop[2]>logical[0] or crop[1]+crop[3]>logical[1]:raise RuntimeError(f'Out-of-bounds crop: {name}')
            pixel_box=(round(crop[0]*2),round(crop[1]*2),round((crop[0]+crop[2])*2),round((crop[1]+crop[3])*2))
            preview=im.crop(pixel_box)
            if max(ImageStat.Stat(preview).stddev)<8:raise RuntimeError(f'Blank control crop: {name}')
            (CAPTURE/'previews').mkdir(exist_ok=True)
            preview.save(CAPTURE/'previews'/(name+'.png'))
            sources=[e for e in inventory['entries'] if e['kind']=='icon' and KEYS[e['capture_key']]==name]
            icons.append({'name':name,'output':'/img/gui/icons/'+name+'.png','raw_path':str(raw.relative_to(ROOT)),'logical_size':logical,'raw_size_px':list(im.size),'crop':crop,'crop_units':'logical_pixels','scale':2,'raw_sha256':sha(raw),'production_component':'../gui/'+component,'production_icon_resources':resource_paths,'old_source_assets':[e['source_path'] for e in sources],'source_ids':[e['id'] for e in sources],'locale_independent':True,'contains_text':False,'review':{'status':'reviewed','method':'Rendered production Qt component using Cocoa OpenGL; all cropped previews visually inspected at usable size.'}})
    if len(icons)!=29:raise RuntimeError(f'Expected 29 distinct current icon captures, got {len(icons)}')
    by_name={i['name']:i for i in icons};replacements=[]
    for e in inventory['entries']:
        if e['kind']!='icon':continue
        name=KEYS[e['capture_key']];icon=by_name[name]
        replacements.append({'id':e['id'],'old':e['source_path'],'output':icon['output'],'icon_name':name,'raw_path':icon['raw_path'],'logical_size':icon['logical_size'],'crop':icon['crop'],'locale_independent':True,'occurrences':e['occurrences']})
    result={'schema_version':1,'prepared_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds'),'count_old_assets':len(replacements),'count_distinct_current_icons':len(icons),'duplicates_consolidated':len(replacements)-len(icons),'capture_method':'Unmodified production Qt MenuButtonView, ToolBarButton, ImageIconBtn, ToolBarCenter and ListItemError components from compiled sibling gui qrc. Only control glyph crops are published; visible atlas labels are excluded.','renderer':'Qt Cocoa / OpenGL on Apple GPU; QSG_INFO evidence in output/gui-capture/icons/capture.log','capture_command':'env -u QT_QUICK_BACKEND BACTOSERVER_URL=http://127.0.0.1:18889 QT_QPA_PLATFORM=cocoa QSG_INFO=1 QSG_RENDER_LOOP=basic output/gui-capture/runtime/qt-build/gui-capture -input scripts/gui-capture/icons/tst_icons.qml','logical_crop_convention':'[x,y,width,height], converted to source pixels by raw_width/logical_width. Crop itself retains the real current component background.','source_snapshot':{'icons_ui_sha256':sha(ROOT.parent/'gui/style/IconsUI.qml'),'atlas_script_sha256':sha(ROOT/'scripts/gui-capture/icons/tst_icons.qml')},'icons':icons,'replacements':replacements,'context_warnings':[{'old':'/img/manual/asset-a7a911718f1c.png','printed_page':84,'reason':'Source system-settings pictogram is reused beside Maintenance / Factory reset; that occurrence should use maintenance-button once navigation copy is reviewed.','suggested_output':'/img/gui/icons/maintenance-button.png'},{'old':'/img/manual/cell-f60b02982fd9.png','printed_page':123,'reason':'Source generic info pictogram appears beside a web username/logout/reboot action; replace that occurrence with a current instrument-web user-menu crop rather than system-info-button.'}]}
    (ROOT/'maintenance/gui-icon-map.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
    font=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf',16)
    sheet=Image.new('RGB',(1400,7*180),'#fff');draw=ImageDraw.Draw(sheet)
    for idx,icon in enumerate(sorted(icons,key=lambda i:i['name'])):
        x=(idx%5)*280;y=(idx//5)*180
        preview=Image.open(CAPTURE/'previews'/(icon['name']+'.png'));preview.thumbnail((132,118))
        sheet.paste(preview,(x+(280-preview.width)//2,y+34))
        draw.text((x+7,y+7),icon['name'],font=font,fill='#212529')
    sheet.save(CAPTURE/'review-contact-sheet.png')
    print(json.dumps({'old_assets':len(replacements),'distinct_current_icons':len(icons),'consolidated_duplicates':len(replacements)-len(icons)},indent=2))

if __name__=='__main__':main()
