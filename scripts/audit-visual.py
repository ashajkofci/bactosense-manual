#!/usr/bin/env python3
"""Retired source-page geometry audit; use current asset checks and visual review.

The published manual uses semantic sections, native notices and current GUI
captures. Original source image placement is therefore not a valid acceptance
criterion, and chapter-wide image presence cannot establish visual fidelity.
"""
import sys


def main():
    print(
        'The legacy PDF geometry audit is retired. It cannot verify the current '\
        'manual after source pagination and duplicate artwork were removed.\n'
        'Run `npm run manual:check` and `npm run translations:check` to check '\
        'current asset references and localized structure, then `npm run build`.\n'
        'Review rendered figures, annotations, and notices against '\
        '`maintenance/gui-screenshot-inventory.json`, `maintenance/gui-screenshots.json`, '\
        'and `maintenance/gui-icon-map.json`. Use `maintenance/source-sections.json` '\
        'to locate the chapter and semantic heading for a printed source page.\n'
        'These checks do not claim PDF visual equivalence; inspect the rendered '\
        'manual and generated PDFs for clipping, missing labels, and wrong images.',
        file=sys.stderr,
    )
    return 2


if __name__ == '__main__':
    raise SystemExit(main())
