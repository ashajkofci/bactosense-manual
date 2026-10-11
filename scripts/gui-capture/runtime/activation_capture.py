#!/usr/bin/env python3
"""Capture activation/navigation without replacing previously reviewed GUI images."""
import argparse
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import urllib.request

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output/gui-capture/activation"
SERVER = OUTPUT / "runtime/server"
EXECUTABLE = ROOT / "output/gui-capture/runtime/qt-build/gui-capture"


def helper(name):
    spec = importlib.util.spec_from_file_location("activation_" + name, HERE / (name + ".py"))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    module.RUNTIME = SERVER
    return module


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def preserved_images():
    return {str(path.relative_to(ROOT)): sha(path)
            for directory in [ROOT / "static/img/gui", ROOT / "output/gui-capture/native"]
            for path in sorted(directory.rglob("*.png"))}


def verify_preserved():
    baseline = json.loads((OUTPUT / "preserved-image-sha256.json").read_text())
    for relative, expected in baseline.items():
        path = ROOT / relative
        if not path.exists() or sha(path) != expected:
            raise RuntimeError("Previously reviewed image changed: " + relative)
    return len(baseline)


def prepare():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    baseline = OUTPUT / "preserved-image-sha256.json"
    if not baseline.exists():
        baseline.write_text(json.dumps(preserved_images(), indent=2) + "\n")
    else:
        verify_preserved()
    runtime = helper("prepare_server")
    runtime.prepare()
    source_binary = ROOT / "output/gui-capture/runtime/server/bactoserver"
    if not source_binary.exists():
        raise RuntimeError("Build the existing disposable Bactoserver binary first; see README.md.")
    shutil.copy2(source_binary, SERVER / "bactoserver")
    # InternalTestMode adds test package flags after loading these files. The
    # isolated API seed below clears only Scientific to illustrate activation.
    config = json.loads((SERVER / "settings-capture.yaml").read_text())
    config.update({"Scientific package Option key": "", "User Management Option key": ""})
    (SERVER / "settings-capture.yaml").write_text(json.dumps(config, indent=2) + "\n")
    provenance = {"api": "http://127.0.0.1:18889", "redisPort": 16389,
                  "purpose": "Read-only activation-key entry and native menu navigation",
                  "scientificPackageActivated": False, "managementPackageDemoFlagRetained": True,
                  "activationKeyEnteredOrSubmitted": False,
                  "fixture": "Private copy of shipped demo archive/settings and hardware stubs; no licence activation or hardware actions.",
                  "bactoserverBinarySha256": sha(SERVER / "bactoserver"),
                  "sources": {name: subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT.parent / name).decode().strip()
                              for name in ["gui", "bactoserver"]}}
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    print("Prepared isolated activation capture; preserved images: " + str(verify_preserved()))


def start():
    helper("prepare_server").start()
    seed()


def seed():
    pid = int((SERVER / "server.pid").read_text())
    command = subprocess.check_output(["ps", "-p", str(pid), "-o", "command="]).decode()
    if not all(value in command for value in [str(SERVER / "bactoserver"), "-test", "127.0.0.1:18889"]):
        raise RuntimeError("Fixture may only change this recorded private demo instance")
    headers = {"Authorization": "Basic YWRtaW46", "Content-Type": "application/json"}
    req = urllib.request.Request("http://127.0.0.1:18889/api/settings", headers=headers)
    with urllib.request.urlopen(req, timeout=10) as response:
        original = json.load(response)
    # Empty key returns from the production setter before any activation call.
    payload = {"scientificPackageOptionKey": ""}
    req = urllib.request.Request("http://127.0.0.1:18889/api/settings", headers=headers,
                                 data=json.dumps(payload).encode())
    with urllib.request.urlopen(req, timeout=10) as response:
        response.read()
    req = urllib.request.Request("http://127.0.0.1:18889/api/settings", headers=headers)
    with urllib.request.urlopen(req, timeout=10) as response:
        settings = json.load(response)
    if settings["scientificPackageOptionKey"] or settings["userManagementOptionKey"] != "test":
        raise RuntimeError("Scientific must be absent and the shipped Management demo flag retained")
    provenance = json.loads((OUTPUT / "provenance.json").read_text())
    provenance["originalPackageFlags"] = {key: original[key] for key in ["scientificPackageOptionKey", "userManagementOptionKey"]}
    provenance["privateFixturePayload"] = payload
    provenance["fixtureExplanation"] = "-test adds both 'test' flags in main.go. Clearing only the Scientific flag with an empty value returns before the activation implementation. No key was entered or licence activated."
    provenance["effectiveSettings"] = {key: settings[key] for key in ["simulationMode", "scientificPackageOptionKey", "userManagementOptionKey", "autoMode"]}
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    files = subprocess.check_output(["lsof", "-p", str(pid), "-Fn"]).decode().splitlines()
    databases = sorted(set(line[1:] for line in files if line.startswith("n/private/tmp/bactoserver-") and line.endswith(".db")))
    (SERVER / "temporary-databases.json").write_text(json.dumps(databases, indent=2) + "\n")
    print("Scientific demo flag cleared; Management 'test' flag retained; API ready.")


def capture(locales, tests):
    if sys.platform != "darwin" or not EXECUTABLE.exists():
        raise RuntimeError("Build the native Cocoa Qt capture harness first.")
    environment = dict(os.environ)
    environment.pop("QT_QUICK_BACKEND", None)
    environment.update(BACTOSERVER_URL="http://127.0.0.1:18889", QT_QPA_PLATFORM="cocoa",
                       QSG_INFO="1", QSG_RENDER_LOOP="basic")
    for locale in locales:
        directory = OUTPUT / "native" / locale
        directory.mkdir(parents=True, exist_ok=True)
        log = OUTPUT / ("capture-" + locale + ".log")
        selected = ["ActivationNavigationCapture::test_" + test + ":" + locale for test in tests]
        with log.open("w") as stream:
            result = subprocess.run([str(EXECUTABLE), "-input", str(HERE / "tst_activation.qml"), *selected],
                                    cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
        contents = log.read_text()
        for line in contents.splitlines():
            match = re.search(r"ACTIVATION_TREE (\w+)/([\w-]+) (\[.*\])$", line)
            if match:
                tag, name, serialized = match.groups()
                (OUTPUT / "native" / tag / (name + ".json")).write_text(json.dumps({
                    "state": name, "locale": tag, "logicalSize": [800, 480], "imageSize": [1600, 960],
                    "objects": json.loads(serialized)}, indent=2) + "\n")
        route_records = [json.loads(line.split("NAVIGATION_EVIDENCE ", 1)[1])
                         for line in contents.splitlines() if "NAVIGATION_EVIDENCE " in line]
        (OUTPUT / ("navigation-" + locale + ".json")).write_text(json.dumps(route_records, ensure_ascii=False, indent=2) + "\n")
        if "GL_RENDERER:" not in contents or "Loading backend software" in contents:
            raise RuntimeError("Actual GPU rendering is required; inspect " + str(log))
        if result.returncode:
            raise RuntimeError("Native activation/navigation capture failed; inspect " + str(log))
        print("Captured " + locale + ": " + str(log.relative_to(ROOT)), flush=True)
    print("Preserved " + str(verify_preserved()) + " existing reviewed images.")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["prepare", "start", "seed", "capture", "check-preserved", "cleanup"])
    parser.add_argument("--locales", nargs="+", choices=["en", "de", "fr", "it", "es"], default=["en", "de", "fr", "it", "es"])
    parser.add_argument("--tests", nargs="+", choices=["activation", "navigation", "roles"], default=["activation", "navigation", "roles"])
    args = parser.parse_args()
    if args.action == "prepare":
        prepare()
    elif args.action == "start":
        start()
    elif args.action == "seed":
        seed()
    elif args.action == "capture":
        capture(args.locales, args.tests)
    elif args.action == "cleanup":
        helper("cleanup").main()
        print("Preserved " + str(verify_preserved()) + " existing reviewed images.")
    else:
        print("Preserved " + str(verify_preserved()) + " existing reviewed images.")


if __name__ == "__main__":
    main()
