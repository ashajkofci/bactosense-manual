#!/usr/bin/env python3
"""Capture only the real scrolled digital-output rows; retain every existing image."""
import argparse
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import threading
import urllib.request

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output/gui-capture/digital-output"
SERVER = OUTPUT / "runtime/server"
EXECUTABLE = ROOT / "output/gui-capture/runtime/qt-build/gui-capture"


def helper(name):
    spec = importlib.util.spec_from_file_location("digital_outputs_" + name, HERE / (name + ".py"))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    module.RUNTIME = SERVER
    return module


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def settings():
    request = urllib.request.Request("http://127.0.0.1:18889/api/settings", headers={"Authorization": "Basic YWRtaW46"})
    with urllib.request.urlopen(request, timeout=10) as response:
        return json.load(response)


def verify_preserved(baseline):
    for relative, expected in baseline.items():
        path = ROOT / relative
        if not path.is_file() or sha(path) != expected:
            raise RuntimeError("Existing reviewed image changed: " + relative)


def cleanup():
    # This wrapper owns the child processes itself. Reap them while the shared
    # PID-checked cleanup waits for termination, so a zombie cannot appear live.
    def reap():
        for name in ["server", "redis"]:
            record = SERVER / (name + ".pid")
            if record.exists():
                try:
                    os.waitpid(int(record.read_text()), 0)
                except ChildProcessError:
                    pass
    reaper = threading.Thread(target=reap, daemon=True)
    reaper.start()
    helper("cleanup").main()
    reaper.join(timeout=1)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--locales", nargs="+", choices=["en", "de", "fr", "it", "es"], default=["en", "de", "fr", "it", "es"])
    args = parser.parse_args()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    baseline = {str(path.relative_to(ROOT)): sha(path)
                for directory in [ROOT / "static/img/gui", ROOT / "output/gui-capture/native", ROOT / "output/gui-capture/activation/native"]
                for path in directory.rglob("*.png")}
    (OUTPUT / "preserved-image-sha256.json").write_text(json.dumps(baseline, indent=2) + "\n")
    runtime = helper("prepare_server")
    runtime.prepare()
    shutil.copy2(ROOT / "output/gui-capture/runtime/server/bactoserver", SERVER / "bactoserver")
    provenance = {"purpose": "Digital-output configuration row examples using real mouse-click navigation and wheel scrolling",
                  "api": "http://127.0.0.1:18889", "redisPort": 16389,
                  "sources": {name: subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT.parent / name).decode().strip()
                              for name in ["gui", "bactoserver"]},
                  "qmlSha256": sha(HERE / "tst_digital_outputs.qml"), "guiExecutableSha256": sha(EXECUTABLE),
                  "bactoserverExecutableSha256": sha(SERVER / "bactoserver"),
                  "fixture": "Private unmodified shipped demo settings. Alarm 2 is enabled only in the unsaved QML form; no API settings write.",
                  "settingsSaved": False, "hardwareActionsRun": False, "existingImageCount": len(baseline)}
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    try:
        runtime.start()
        original = settings()
        provenance["originalDigitalOutputs"] = original["digitalOutputs"]
        provenance["originalAlarms"] = original["alarms"]
        provenance["serverPid"] = int((SERVER / "server.pid").read_text())
        provenance["redisPid"] = int((SERVER / "redis.pid").read_text())
        (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
        environment = dict(os.environ)
        environment.pop("QT_QUICK_BACKEND", None)
        environment.update(BACTOSERVER_URL="http://127.0.0.1:18889", QT_QPA_PLATFORM="cocoa", QSG_INFO="1", QSG_RENDER_LOOP="basic")
        for locale in args.locales:
            directory = OUTPUT / "native" / locale
            directory.mkdir(parents=True, exist_ok=True)
            log = OUTPUT / ("capture-" + locale + ".log")
            with log.open("w") as stream:
                result = subprocess.run([str(EXECUTABLE), "-input", str(HERE / "tst_digital_outputs.qml"),
                                         "DigitalOutputsCapture::test_lower_list:" + locale],
                                        cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
            contents = log.read_text()
            if result.returncode or "GL_RENDERER:" not in contents or "Loading backend software" in contents:
                raise RuntimeError("Native Cocoa capture failed; inspect " + str(log))
            for line in contents.splitlines():
                tree = re.search(r"DIGITAL_OUTPUTS_TREE (\w+) (\[.*\])$", line)
                if tree:
                    objects = json.loads(tree[2])
                    rows = []
                    for item in objects:
                        if item['type'].startswith('ListItemDigitalOutput'):
                            texts = [obj['text'] for obj in objects if obj.get('text')
                                     and item['y'] <= obj['y'] < item['y'] + item['height']]
                            rows.append({'state': item['state'], **{key: item[key] for key in ['x', 'y', 'width', 'height']},
                                         'bounds': [item[key] for key in ['x', 'y', 'width', 'height']],
                                         'label': texts[0] if texts else '', 'values': texts[1:5],
                                         'fullyVisible': item['y'] >= 124 and item['y'] + item['height'] <= 410})
                    (directory / "digital-outputs-lower.json").write_text(json.dumps({
                        "state": "digital-outputs-lower", "locale": tree[1], "logicalSize": [800, 480], "imageSize": [1600, 960],
                        "objects": objects, "rows": rows}, ensure_ascii=False, indent=2) + "\n")
                if "DIGITAL_OUTPUTS_EVIDENCE " in line:
                    evidence = json.loads(line.split("DIGITAL_OUTPUTS_EVIDENCE ", 1)[1])
                    (directory / "digital-outputs-lower-evidence.json").write_text(json.dumps(evidence, ensure_ascii=False, indent=2) + "\n")
            verify_preserved(baseline)
            print("Captured real lower digital-output list: " + locale, flush=True)
        final = settings()
        if any(final[key] != original[key] for key in ["digitalOutputs", "alarms"]):
            raise RuntimeError("The disposable server's output/alarm settings must remain unchanged")
        provenance["serverSettingsUnchanged"] = True
        (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    finally:
        cleanup()
        verify_preserved(baseline)
        print("Stopped only the dedicated capture runtime; preserved " + str(len(baseline)) + " existing images.")


if __name__ == "__main__":
    main()
