#!/usr/bin/env python3
"""Diagnose source text recall by chapter using maintenance/source-sections.json.

Printed source pages identify PDF input only; the Markdown has no page boundaries.
This token diagnostic cannot prove semantic accuracy, reading order, or page-level
coverage. Rewritten index labels and text inside figures may lower measured recall.
"""
from pathlib import Path
from collections import Counter, defaultdict
import re, html, json, unicodedata
import fitz

ROOT = Path(__file__).resolve().parents[1]


def words(text):
    text = unicodedata.normalize('NFKC', html.unescape(text)).lower()
    text = re.sub(r'(\w)-\s+(\w)', r'\1\2', text)
    return Counter(re.findall(r'[\w]+', text))


def visible(text):
    # Keep visible link labels and titles; URLs, attributes and heading IDs are metadata.
    title = re.search(r'^title:\s*(.+)$', text, re.M)
    text = re.sub(r'^---\n.*?\n---\n', '', text, count=1, flags=re.S)
    text = re.sub(r'<!--.*?-->', '', text, flags=re.S)
    text = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'\{#[^}]+\}', '', text)
    text = re.sub(r'^:::\w+\[([^\]]*)\]', r'\1', text, flags=re.M)
    text = re.sub(r'<(?:br\s*/?|/?(?:td|th|tr|p|li|ul|ol|div|table|figure|figcaption))\b[^>]*>', ' ', text)
    text = re.sub(r'<[^>]+>', '', text)
    return (title[1] + '\n' if title else '') + text


def main():
    pdf_path = ROOT / 'UM_0006-EN_BactoSense_User_Manual.pdf'
    if not pdf_path.is_file():
        raise SystemExit('Restore the original English source PDF in the repository root before running this diagnostic.')
    mapping = json.loads((ROOT / 'maintenance/source-sections.json').read_text())
    expected_pages = set(range(1, 167))
    if set(map(int, mapping)) != expected_pages:
        raise SystemExit('The source-section map must cover all 166 printed content pages exactly once.')
    chapters = defaultdict(list)
    for printed, target in mapping.items():
        chapters[target['document']].append(int(printed))
    report = []
    with fitz.open(pdf_path) as pdf:
        for name, pages in sorted(chapters.items()):
            document = ROOT / 'docs' / name
            if not document.is_file():
                raise SystemExit(f'Mapped chapter is missing: {document}')
            source = '\n'.join(
                block[4]
                for printed in sorted(pages)
                for block in pdf[printed + 5].get_text('blocks')
                if len(block) > 6 and block[6] == 0 and block[1] > 65 and block[3] < 782
            )
            expected, actual = words(source), words(visible(document.read_text()))
            missing = expected - actual
            total = sum(expected.values())
            report.append({
                'document': name, 'printed_source_pages': sorted(pages),
                'source_tokens': total,
                'text_recall': round(1 - sum(missing.values()) / max(total, 1), 4),
                'missing_tokens': dict(missing),
            })
    total = sum(item['source_tokens'] for item in report)
    missed = sum(sum(item['missing_tokens'].values()) for item in report)
    result = {
        'granularity': 'chapter',
        'mapping': 'maintenance/source-sections.json',
        'limitations': [
            'Matching tokens anywhere in a chapter cannot localize omissions to source pages.',
            'Token counts do not verify semantics, reading order, table alignment, or visual fidelity.',
            'Figure labels may remain inside images; index source page numbers are intentionally replaced with section labels.',
            'This diagnostic compares English source content only; it does not validate translations or later editorial additions.',
        ],
        'all_source_pages_mapped': True,
        'source_tokens': total,
        'text_recall': round(1 - missed / max(total, 1), 4),
        'chapters': report,
    }
    output = ROOT / 'extraction/text-coverage.json'
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
    for item in sorted(report, key=lambda entry: entry['text_recall']):
        print(f"{item['document']}: {item['text_recall']:.1%} token recall; "
              f"{len(item['printed_source_pages'])} source pages; "
              f"missing={sum(item['missing_tokens'].values())} tokens")
    print(f'Overall chapter text-token recall: {result["text_recall"]:.2%}; all 166 source pages mapped.')
    print('Diagnostic only: inspect flagged chapters. Text in images and rewritten index references are intentional differences.')
    print(f'Detailed limitations and missing-token counts: {output.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
