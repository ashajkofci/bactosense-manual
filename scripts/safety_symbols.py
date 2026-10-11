"""Export only the source PDF's safety vector paths, without text or page crops."""
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]


def export_safety_symbols(document):
    registry = json.loads((ROOT / 'maintenance/safety-symbols.json').read_text())

    def number(value):
        return f'{value:.3f}'.rstrip('0').rstrip('.')

    def point(value):
        return f'{number(value.x)} {number(value.y)}'

    def color(value):
        return '#' + ''.join(f'{round(channel * 255):02x}' for channel in value)

    for name, entry in registry['symbols'].items():
        page = document[entry['pdfPage'] - 1]
        bounds = (pymupdf.Rect(entry['bounds']) if 'bounds' in entry
                  else page.cluster_drawings()[entry['cluster']])
        paths = []
        for drawing in page.get_drawings():
            if not (bounds + (-0.01, -0.01, 0.01, 0.01)).contains(drawing['rect']):
                continue
            commands = []
            previous = None
            for item in drawing['items']:
                if item[0] not in ('l', 'c'):
                    raise ValueError(f'Unsupported safety path in {name}: {item[0]}')
                if previous != item[1]:
                    commands.append('M' + point(item[1]))
                if item[0] == 'l':
                    commands.append('L' + point(item[2]))
                else:
                    commands.append('C' + ' '.join(point(p) for p in item[2:]))
                previous = item[-1]
            if drawing['closePath']:
                commands.append('Z')
            attributes = [f'd="{" ".join(commands)}"',
                          f'fill="{color(drawing["fill"]) if drawing["fill"] else "none"}"']
            if drawing['even_odd']:
                attributes.append('fill-rule="evenodd"')
            if drawing['color']:
                attributes.extend([f'stroke="{color(drawing["color"])}"',
                                   f'stroke-width="{number(drawing["width"])}"'])
            paths.append('  <path ' + ' '.join(attributes) + '/>')
        if 'glyph' in entry:
            # The source's information "i" is an embedded font outline.
            # Inline just that outline, without a font, text node or shared SVG ID.
            svg = ET.fromstring(page.get_svg_image(text_as_path=True))
            definitions = {element.get('id'): element for element in svg.iter()
                           if element.get('id')}
            glyphs = []
            for use in svg.iter('{http://www.w3.org/2000/svg}use'):
                if use.get('data-text') != entry['glyph']:
                    continue
                transform = use.get('transform', '')
                matrix = [float(v) for v in re.findall(r'[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?', transform)]
                if len(matrix) != 6 or not bounds.contains(pymupdf.Point(*matrix[4:])):
                    continue
                reference = use.get('{http://www.w3.org/1999/xlink}href', '').lstrip('#')
                outline = definitions[reference].get('d')
                glyphs.append(f'  <path d="{outline}" transform="{transform}" fill="{use.get("fill", "#000000")}"/>')
            if len(glyphs) != 1:
                raise ValueError(f'Expected one {entry["glyph"]} outline for {name}')
            paths.extend(glyphs)
        if not paths:
            raise ValueError(f'No vector paths found for {name}')
        padded = bounds + (-1, -1, 1, 1)
        viewbox = ' '.join(number(v) for v in (padded.x0, padded.y0, padded.width, padded.height))
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">\n'
               f'  <!-- Original PDF safety artwork, page {entry["pdfPage"]}. -->\n'
               + '\n'.join(paths) + '\n</svg>\n')
        target = ROOT / 'static' / entry['asset'].lstrip('/')
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(svg)


if __name__ == '__main__':
    source = json.loads((ROOT / 'maintenance/safety-symbols.json').read_text())['source']
    with pymupdf.open(ROOT / source) as document:
        export_safety_symbols(document)
