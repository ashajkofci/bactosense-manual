#!/usr/bin/env python3
"""Capture genuine Online result panels and prove their plot-touch navigation."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import xml.etree.ElementTree as ET

import digital_outputs_capture as runtime

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output/gui-capture/online-results"
REVIEW = ROOT / "output/gui-online-results-review"
runtime.OUTPUT = OUTPUT
runtime.SERVER = OUTPUT / "runtime/server"
runtime.EXECUTABLE = OUTPUT / "runtime/qt-build/online-results-capture"


def build_snapshot():
    source = ROOT.parent / "gui"
    snapshot = OUTPUT / "runtime/gui-source"
    relative_paths = {"qml.qrc", "image.qrc", "test/integration/main.cpp",
                      "UserActivityFilter.cpp", "UserActivityFilter.h", "QmlTranslator.cpp", "QmlTranslator.h"}
    for resource in ["qml.qrc", "image.qrc"]:
        relative_paths.update(item.text for item in ET.parse(source / resource).iter("file"))
    hashes = {}
    for relative in sorted(relative_paths):
        original = source / relative
        destination = snapshot / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        data = original.read_bytes()
        destination.write_bytes(data)
        hashes[relative] = hashlib.sha256(data).hexdigest()
    if any(runtime.sha(source / name) != sha for name, sha in hashes.items()):
        raise RuntimeError("GUI resource changed during the snapshot; rerun without changing sibling files")
    project = OUTPUT / "runtime/qt-project"
    project.mkdir(parents=True, exist_ok=True)
    (project / "CMakeLists.txt").write_text('''cmake_minimum_required(VERSION 3.21)
project(OnlineResultsCapture LANGUAGES CXX)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_CXX_STANDARD 11)
find_package(Qt5 5.12 REQUIRED COMPONENTS QuickTest Quick Widgets)
set(GUI_ROOT "''' + snapshot.as_posix() + '''")
add_executable(online-results-capture "${GUI_ROOT}/test/integration/main.cpp"
 "${GUI_ROOT}/UserActivityFilter.cpp" "${GUI_ROOT}/QmlTranslator.cpp"
 "${GUI_ROOT}/qml.qrc" "${GUI_ROOT}/image.qrc")
target_link_libraries(online-results-capture PRIVATE Qt5::QuickTest Qt5::Quick Qt5::Widgets)
''')
    log = OUTPUT / "build.log"
    with log.open("w") as stream:
        subprocess.run(["cmake", "-S", str(project), "-B", str(runtime.EXECUTABLE.parent),
                        "-DCMAKE_PREFIX_PATH=/opt/homebrew/opt/qt@5"], stdout=stream, stderr=subprocess.STDOUT, check=True)
        subprocess.run(["cmake", "--build", str(runtime.EXECUTABLE.parent), "-j4"], stdout=stream, stderr=subprocess.STDOUT, check=True)
    return {"commit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=source).decode().strip(),
            "dirtyStatus": subprocess.check_output(["git", "status", "--porcelain"], cwd=source).decode(),
            "resourceFileSha256": hashes,
            "resourceFingerprint": hashlib.sha256(json.dumps(hashes, sort_keys=True).encode()).hexdigest()}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--locales", nargs="+", choices=["en", "de", "fr", "it", "es"], default=["en", "de", "fr", "it", "es"])
    parser.add_argument("--reuse-snapshot", action="store_true", help="Reuse the already built private GUI snapshot for focused reruns")
    args = parser.parse_args()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    REVIEW.mkdir(parents=True, exist_ok=True)
    baseline = {str(path.relative_to(ROOT)): runtime.sha(path)
                for directory in [ROOT / "static/img/gui", ROOT / "output/gui-capture/native",
                                  ROOT / "output/gui-capture/activation/native", ROOT / "output/gui-capture/digital-output/native",
                                  ROOT / "output/gui-capture/scheduler/native"] for path in directory.rglob("*.png")}
    (REVIEW / "preserved-image-sha256.json").write_text(json.dumps(baseline, indent=2) + "\n")
    if args.reuse_snapshot:
        if not runtime.EXECUTABLE.exists():
            raise RuntimeError("Build the private GUI snapshot before reusing it")
        gui = json.loads((REVIEW / "provenance.json").read_text())["guiSourceSnapshot"]
    else:
        print("Building a consistent private current-source Qt snapshot.", flush=True)
        gui = build_snapshot()
    print("Private current-source Qt build complete; starting disposable API.", flush=True)
    prepare = runtime.helper("prepare_server")
    prepare.prepare()
    shutil.copy2(ROOT / "output/gui-capture/runtime/server/bactoserver", runtime.SERVER / "bactoserver")
    provenance = {"purpose": "Real Online TCC selected result, same-record metrics/dotplot, actual plot touch to Online chart",
                  "guiSourceSnapshot": gui, "bactoserverCommit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT.parent / "bactoserver").decode().strip(),
                  "captureQmlSha256": runtime.sha(HERE / "tst_online_results.qml"), "guiExecutableSha256": runtime.sha(runtime.EXECUTABLE),
                  "bactoserverExecutableSha256": runtime.sha(runtime.SERVER / "bactoserver"),
                  "fixture": "Unmodified shipped demo archive/settings. Only the in-memory GUI mode/bucket/index and chart date selection are changed; no data or scientific values are seeded.",
                  "existingImageCount": len(baseline), "settingsSaved": False, "hardwareActionsRun": False}
    (REVIEW / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    try:
        prepare.start()
        original = runtime.settings()
        environment = dict(os.environ)
        environment.pop("QT_QUICK_BACKEND", None)
        environment.update(BACTOSERVER_URL="http://127.0.0.1:18889", QT_QPA_PLATFORM="cocoa", QSG_INFO="1", QSG_RENDER_LOOP="basic")
        for locale in args.locales:
            directory = OUTPUT / "native" / locale
            directory.mkdir(parents=True, exist_ok=True)
            log = OUTPUT / ("capture-" + locale + ".log")
            with log.open("w") as stream:
                result = subprocess.run([str(runtime.EXECUTABLE), "-input", str(HERE / "tst_online_results.qml"),
                                         "OnlineResultsCapture::test_results:" + locale], cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
            text = log.read_text()
            for line in text.splitlines():
                tree = re.search(r"ONLINE_RESULT_TREE (\w+) ([\w-]+) (\[.*\])$", line)
                if tree:
                    (directory / (tree[2] + ".json")).write_text(json.dumps({"locale": tree[1], "state": tree[2],
                        "logicalSize": [800, 480], "imageSize": [1600, 960], "objects": json.loads(tree[3])}, ensure_ascii=False, indent=2) + "\n")
                if "ONLINE_RESULT_EVIDENCE " in line:
                    evidence = json.loads(line.split("ONLINE_RESULT_EVIDENCE ", 1)[1])
                    (directory / "evidence.json").write_text(json.dumps(evidence, ensure_ascii=False, indent=2) + "\n")
            if result.returncode or "GL_RENDERER:" not in text or "Loading backend software" in text:
                raise RuntimeError("Actual current-source Cocoa capture failed; inspect " + str(log))
            runtime.verify_preserved(baseline)
            print("Captured and click-verified Online result: " + locale, flush=True)
        final = runtime.settings()
        if original != final:
            raise RuntimeError("Capture must leave every API setting unchanged")
        provenance["allServerSettingsUnchanged"] = True
        (REVIEW / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    finally:
        runtime.cleanup()
        runtime.verify_preserved(baseline)
        print("Private runtime stopped; every existing image preserved.", flush=True)


if __name__ == "__main__":
    main()
