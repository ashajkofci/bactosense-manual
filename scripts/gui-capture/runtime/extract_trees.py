#!/usr/bin/env python3
"""Extract native QML element coordinates and capture provenance from Qt logs."""
from pathlib import Path
import json
import re
import sys

root = Path(__file__).resolve().parents[3]
for argument in sys.argv[1:]:
    log = Path(argument)
    for line in log.read_text().splitlines():
        match = re.search(r"CAPTURE_TREE (\w+)/([\w-]+) (\[.*\])$", line)
        if not match:
            continue
        locale, name, serialized = match.groups()
        objects = json.loads(serialized)
        target = root / "output/gui-capture/native" / locale / f"{name}.json"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(json.dumps({"state": name, "locale": locale,
                                     "logicalSize": [800,480], "imageSize": [1600,960],
                                     "objects": objects}, indent=2) + "\n")
    for key in ["FIXTURE_RESULT", "FIXTURE_ERRORS", "FIXTURE_WARNINGS", "FIXTURE_CHART"]:
        records = [json.loads(line.split(key + " ",1)[1])
                   for line in log.read_text().splitlines() if key + " " in line]
        if records:
            (root / "output/gui-capture/runtime" / f"{key.lower()}.json").write_text(
                json.dumps(records,indent=2)+"\n")
