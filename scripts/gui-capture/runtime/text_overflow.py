#!/usr/bin/env python3
"""Find text that does not fit its box or container in captured native GUI states.

Input:  capture logs containing `CAPTURE_TEXT <locale>/<state> <json>` lines (textMetrics.js).
Output: output/gui-capture/text-overflow/report.json and a summary on stdout, one line per
        finding grouped by (state, text item) across locales.
Findings (logical 800 x 480 pixels, tolerance TOL):
  self      painted text larger than its own box (Fit could not shrink it enough)
  container painted text outside the nearest sized ancestor that holds the box
  box       the box itself extends outside that ancestor (a wrong width; visible once text is long)
  clipped   painted text cut by a non-scrolling clip ancestor
  screen    painted text outside the screen
  overlap   painted text overlapping another text
  elided    Qt elided the text
Text scrolled out of a list/flickable viewport is ignored.
"""
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "output/gui-capture/text-overflow"
TOL = 2.0
LEFT, RIGHT, HCENTER, JUSTIFY = 1, 2, 4, 8
TOP, BOTTOM, VCENTER = 32, 64, 128


def painted_rect(row):
    width, height = row["paintedWidth"], row["paintedHeight"]
    x, y = row["x"], row["y"]
    if row["horizontalAlignment"] == RIGHT:
        x += row["width"] - width
    elif row["horizontalAlignment"] == HCENTER:
        x += (row["width"] - width) / 2
    if row["verticalAlignment"] == BOTTOM:
        y += row["height"] - height
    elif row["verticalAlignment"] == VCENTER:
        y += (row["height"] - height) / 2
    return [x, y, x + width, y + height]


def box(row):
    return [row["x"], row["y"], row["x"] + row["width"], row["y"] + row["height"]]


def outside(inner, outer):
    """Largest distance by which inner extends past outer, per side."""
    return max(outer[0] - inner[0], inner[2] - outer[2], outer[1] - inner[1], inner[3] - outer[3])


def intersect(a, b):
    return [max(a[0], b[0]), max(a[1], b[1]), min(a[2], b[2]), min(a[3], b[3])]


SCROLLING = ("ListView", "GridView", "PathView", "Flickable", "Tumbler")


def scrolling(ancestor):
    return ancestor["flickable"] or any(name in ancestor["type"] for name in SCROLLING)


def layer(row):
    """The navigation host's child holding the text: the screen, a modal, or the top/action bar."""
    chain = row["ancestors"]
    for index, ancestor in enumerate(chain):
        if ancestor["name"] == "navigationHost":
            return chain[index - 1]["name"] or chain[index - 1]["type"] if index else "host"
    return chain[-2]["type"] if len(chain) > 1 else "root"


def analyse(rows):
    findings, visible = [], []
    layers = [layer(row) for row in rows]
    modal = "modalLoader" in layers  # an open modal covers the screen beneath it
    for index, row in enumerate(rows):
        if modal and layers[index] == "screenLoader":
            continue
        paint = painted_rect(row)
        screen = [0, 0, 800, 480]
        view = None  # the viewport of the scrolling ancestors, if any
        clip = None
        for ancestor in row["ancestors"]:
            if ancestor["width"] <= 0 or ancestor["height"] <= 0:
                continue
            if scrolling(ancestor):
                # Outside a list viewport, text is clipped or covered by design.
                view = intersect(view or screen, box(ancestor))
            elif ancestor["clip"] and clip is None:
                clip = (ancestor, box(ancestor))
        seen = intersect(paint, view or screen)
        if seen[2] - seen[0] <= 0 or seen[3] - seen[1] <= 0:
            continue  # scrolled out of its list or flickable
        partly_scrolled = view is not None and outside(paint, view) > TOL
        visible.append((index, row, intersect(seen, clip[1]) if clip else seen))
        found = []
        if row["paintedWidth"] > row["width"] + TOL or row["paintedHeight"] > row["height"] + 2 * TOL:
            found.append(("self", f"painted {row['paintedWidth']:.0f}x{row['paintedHeight']:.0f} in box {row['width']:.0f}x{row['height']:.0f}"))
        # The nearest sized ancestor is the text's container: a button, field, cell or panel.
        # A label that holds its value as a child text is not the value's container.
        container = next((a for a in row["ancestors"] if a["width"] > 1 and a["height"] > 1
                          and not scrolling(a) and "Text" not in a["type"]), None)
        if container:
            rect = box(container)
            label = f"{container['type']}{'#' + container['name'] if container['name'] else ''} {rect[2]-rect[0]:.0f}x{rect[3]-rect[1]:.0f}@{rect[0]:.0f},{rect[1]:.0f}"
            if not partly_scrolled and outside(paint, rect) > TOL:
                found.append(("container", f"painted past {label} by {outside(paint, rect):.0f}px"))
            elif outside(box(row), rect) > TOL:
                found.append(("box", f"box past {label} by {outside(box(row), rect):.0f}px"))
        if clip and outside(paint, clip[1]) > TOL and not partly_scrolled:
            found.append(("clipped", f"cut by clipping {clip[0]['type']} by {outside(paint, clip[1]):.0f}px"))
        if not partly_scrolled and outside(paint, [0, 0, 800, 480]) > TOL:
            found.append(("screen", f"painted {outside(paint, [0, 0, 800, 480]):.0f}px off screen"))
        if row["truncated"]:
            found.append(("elided", "Qt elided the text"))
        for kind, detail in found:
            findings.append({"kind": kind, "detail": detail, "index": index})
    for i, (ia, a, pa) in enumerate(visible):
        for ib, b, pb in visible[i + 1:]:
            if layers[ia] != layers[ib]:
                continue
            if a["text"] == b["text"] and abs(a["x"] - b["x"]) < 1 and abs(a["y"] - b["y"]) < 1:
                continue  # the same label drawn twice (e.g. a shadow) is not an overlap
            common = intersect(pa, pb)
            if common[2] - common[0] > 3 and common[3] - common[1] > 3:
                findings.append({"kind": "overlap", "index": ia, "other": ib,
                                 "detail": f"overlaps \"{b['text'][:40]}\" by {common[2]-common[0]:.0f}x{common[3]-common[1]:.0f}"})
    return findings


def capture_path(log, locale, state):
    """Each helper writes <its output folder>/native/<locale>/<state>.png beside its logs."""
    folder = Path(log).parent
    if folder.name == "runtime":  # the main capture logs to runtime/ and writes to native/
        folder = folder.parent
    return str(folder / "native" / locale / f"{state}.png")


def main():
    logs = [Path(argument).resolve() for argument in sys.argv[1:]]
    if not logs:
        sys.exit("Usage: text_overflow.py <capture logs...>")
    states = {}
    for log in logs:
        for line in log.read_text(errors="replace").splitlines():
            match = re.search(r"CAPTURE_TEXT (\w+)/([\w-]+) (\[.*\])$", line)
            if match:
                states[(match[2], match[1])] = {"log": str(log.relative_to(ROOT)), "rows": json.loads(match[3])}
    report, groups = [], {}
    for (state, locale), record in sorted(states.items()):
        for finding in analyse(record["rows"]):
            row = record["rows"][finding["index"]]
            entry = {"state": state, "locale": locale, "kind": finding["kind"], "detail": finding["detail"],
                     "text": row["text"], "type": row["type"], "textState": row["state"],
                     "box": [round(v, 1) for v in box(row)], "painted": [round(v, 1) for v in painted_rect(row)],
                     "pixelSize": row["pixelSize"], "fontSizeMode": row["fontSizeMode"],
                     "hasWidthMax": row["hasWidthMax"], "nbrLinesMax": row["nbrLinesMax"],
                     "ancestors": row["ancestors"][:4], "log": record["log"],
                     "capture": capture_path(record["log"], locale, state)}
            report.append(entry)
            groups.setdefault((state, finding["kind"], row["type"], row["state"], round(row["x"]), round(row["y"])), []).append(entry)
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "report.json").write_text(json.dumps({"states": len(states), "findings": report}, indent=2) + "\n")
    print(f"{len(states)} states, {len(report)} findings in {len(groups)} groups")
    for (state, kind, type_, text_state, x, y), entries in sorted(groups.items()):
        locales = ",".join(entry["locale"] for entry in entries)
        print(f"{kind:9} {state:32} {type_.split('_QML')[0]}[{text_state}] @{x},{y} {locales}: "
              f"{entries[0]['detail']} | \"{entries[0]['text'][:50]}\"".replace(chr(10), ' / '))


if __name__ == "__main__":
    main()
