#!/usr/bin/env python3
"""Capture current production QML with the private, GPU-backed Qt harness."""
import argparse
import os
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
RUNTIME = ROOT / "output/gui-capture/runtime"
EXECUTABLE = RUNTIME / "qt-build/gui-capture"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--locales", nargs="+", choices=["en", "fr", "de", "it", "es"],
                        default=["en", "fr", "de", "it", "es"])
    args = parser.parse_args()
    if sys.platform != "darwin":
        parser.error("This native recipe uses the macOS Cocoa OpenGL platform; do not use software offscreen.")
    if not EXECUTABLE.exists():
        parser.error("Build the Qt capture harness first; see runtime/README.md.")
    for locale in args.locales:
        (ROOT / "output/gui-capture/native" / locale).mkdir(parents=True, exist_ok=True)
    environment = dict(os.environ)
    environment.pop("QT_QUICK_BACKEND", None)
    environment.update(BACTOSERVER_URL="http://127.0.0.1:18889", QT_QPA_PLATFORM="cocoa",
                       QSG_INFO="1", QSG_RENDER_LOOP="basic")
    for locale in args.locales:
        # A new native process also resets locale-dependent singleton caches.
        log = RUNTIME / ("capture-" + locale + ".log")
        tests = ["ManualGuiCapture::test_" + test + ":" + locale
                 for test in ["generic", "scientific"]]
        with log.open("w") as stream:
            result = subprocess.run([str(EXECUTABLE), "-input", str(HERE / "tst_capture.qml"), *tests],
                                    cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
        subprocess.run([sys.executable, str(HERE / "extract_trees.py"), str(log)], check=True)
        contents = log.read_text()
        if "GL_RENDERER:" not in contents or "Loading backend software" in contents:
            raise RuntimeError("GPU rendering was not proven; do not use these captures.")
        if result.returncode:
            raise RuntimeError("Native capture failed; inspect " + str(log))
        print("Captured " + locale + ": " + str(log.relative_to(ROOT)), flush=True)
    print("Current native screenshots and QML bounds captured: " + ", ".join(args.locales))


if __name__ == "__main__":
    main()
