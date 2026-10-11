#!/usr/bin/env python3
"""Capture an unsaved weekly scheduler example in the actual native GUI."""
import argparse
import errno
import json
import os
import re
import shutil
import subprocess
import time
from pathlib import Path

import digital_outputs_capture as runtime

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output/gui-capture/scheduler"
runtime.OUTPUT = OUTPUT
runtime.SERVER = OUTPUT / "runtime/server"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--locales", nargs="+", choices=["en", "de", "fr", "it", "es"],
                        default=["en", "de", "fr", "it", "es"])
    args = parser.parse_args()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    baseline = {str(path.relative_to(ROOT)): runtime.sha(path)
                for path in (ROOT / "static/img/gui").rglob("*.png")}
    prepare = runtime.helper("prepare_server")
    prepare.prepare()
    shutil.copy2(ROOT / "output/gui-capture/runtime/server/bactoserver", runtime.SERVER / "bactoserver")
    provenance = {
        "purpose": "Advanced scheduler documentation: unchanged native production screens, unsaved example, real preview API",
        "sources": {name: subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT.parent / name).decode().strip()
                    for name in ["gui", "bactoserver"]},
        "qmlSha256": runtime.sha(HERE / "tst_scheduler.qml"),
        "guiExecutableSha256": runtime.sha(runtime.EXECUTABLE),
        "bactoserverExecutableSha256": runtime.sha(runtime.SERVER / "bactoserver"),
        "fixture": "Unsaved hourly Online Sampling Device rule, Monday-Friday, 08:00-16:59, default ICC gates; localized example name",
        "scheduleSaved": False, "hardwareActionsRun": False,
        "existingImageCount": len(baseline),
    }
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    try:
        deadline = time.monotonic() + 75
        while True:
            try:
                prepare.start()
                break
            except OSError as error:
                # Recently closed capture sockets may still be in TIME_WAIT.
                # Never stop another listener to acquire these private ports.
                if error.errno != errno.EADDRINUSE or time.monotonic() >= deadline:
                    raise
                time.sleep(1)
        original = runtime.settings()
        environment = dict(os.environ)
        environment.pop("QT_QUICK_BACKEND", None)
        environment.update(BACTOSERVER_URL="http://127.0.0.1:18889", QT_QPA_PLATFORM="cocoa",
                           QSG_INFO="1", QSG_RENDER_LOOP="basic")
        for locale in args.locales:
            directory = OUTPUT / "native" / locale
            directory.mkdir(parents=True, exist_ok=True)
            log = OUTPUT / ("capture-" + locale + ".log")
            with log.open("w") as stream:
                result = subprocess.run([str(runtime.EXECUTABLE), "-input", str(HERE / "tst_scheduler.qml"),
                                         "SchedulerCapture::test_scheduler:" + locale],
                                        cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
            contents = log.read_text()
            if result.returncode or "GL_RENDERER:" not in contents or "Loading backend software" in contents:
                raise RuntimeError("Native scheduler capture failed; inspect " + str(log))
            for line in contents.splitlines():
                tree = re.search(r"SCHEDULER_TREE (\w+) ([\w-]+) (\[.*\])$", line)
                if tree:
                    record = {"locale": tree[1], "state": tree[2], "logicalSize": [800, 480],
                              "imageSize": [1600, 960], "objects": json.loads(tree[3])}
                    (directory / (tree[2] + ".json")).write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n")
                if "SCHEDULER_EVIDENCE " in line:
                    evidence = json.loads(line.split("SCHEDULER_EVIDENCE ", 1)[1])
                    (directory / "evidence.json").write_text(json.dumps(evidence, ensure_ascii=False, indent=2) + "\n")
            runtime.verify_preserved(baseline)
            print("Captured unsaved native weekly scheduler: " + locale, flush=True)
        final = runtime.settings()
        for key in ["autoMode", "weeklyAutoSchedule", "autoArgs", "autoInterval"]:
            if original.get(key) != final.get(key):
                raise RuntimeError("Capture unexpectedly changed scheduler settings: " + key)
        provenance["serverSchedulerSettingsUnchanged"] = True
        (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    finally:
        runtime.cleanup()
        runtime.verify_preserved(baseline)
        print("Stopped the private runtime and preserved all existing reviewed screenshots.")


if __name__ == "__main__":
    main()
