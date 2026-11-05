#!/usr/bin/env python3
"""Capture the BactoSwitch manual screens in the actual native GUI.

  bactoswitch_capture.py build                 # private GUI snapshot + Bactoserver binary
  bactoswitch_capture.py start                 # disposable runtime + BactoSwitch teaching fixture
  bactoswitch_capture.py capture [--locales …] # native captures, one process per language
  bactoswitch_capture.py cleanup               # stop only the recorded private processes

The runtime is the BactoSense recipe (README.md): unchanged sibling GUI QML and
Bactoserver code, shipped demo archive, loopback ports, Cocoa OpenGL. macOS has no
BactoSwitch serial driver, so the fixture presents a connected BactoSwitch through
the product's own status keys in the private Redis and assigns real demo online
results to lines 1–4. Nothing is saved from the GUI and no hardware action runs.
"""
import argparse
import base64
import datetime
import json
import os
import re
import socket
import subprocess
import time
import urllib.request
from pathlib import Path

import digital_outputs_capture as runtime
import online_results_capture as snapshot

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output/gui-capture/bactoswitch"
API = "http://127.0.0.1:18889"
LOCALES = ["en", "de", "fr", "it", "es"]
runtime.OUTPUT = OUTPUT
runtime.SERVER = OUTPUT / "runtime/server"
runtime.EXECUTABLE = OUTPUT / "runtime/qt-build/online-results-capture"
snapshot.OUTPUT = OUTPUT

# Real hourly online series of the shipped demo archive; a BactoSwitch cycles its lines.
SOURCE_SERIES = "DWTP TCC after SSF"
STATUS = {  # Product status keys read by the GUI (redis-init.py names), all valves open.
    "sosd_connected": 1, "sosd_measure_flow_mlpermin": 802, "sosd_status_valve_output_state": 15,
    "sosd_setup_mounted_valve_count": 4, "sosd_status_inputblock_connected": 1,
}


def request(path, data=None):
    body = None if data is None else json.dumps(data).encode()
    req = urllib.request.Request(API + path, data=body, headers={
        "Authorization": "Basic " + base64.b64encode(b"admin:").decode(),  # Disposable admin, blank PIN.
        "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as response:
        content = response.read()
        return json.loads(content) if content else None


def redis(commands):
    with socket.create_connection(("127.0.0.1", 16389), timeout=2) as connection:
        for parts in [["SELECT", 9], *commands]:
            encoded = [str(part).encode() for part in parts]
            connection.sendall(b"*%d\r\n" % len(encoded) + b"".join(
                b"$%d\r\n" % len(part) + part + b"\r\n" for part in encoded))
            if not connection.recv(4096).startswith((b"+OK", b"+PONG")):
                raise RuntimeError("Private Redis rejected " + str(parts[0]))


def verify_private_server():
    pid = int((runtime.SERVER / "server.pid").read_text())
    command = subprocess.run(["ps", "-p", str(pid), "-o", "command="], capture_output=True, text=True).stdout
    if not all(value in command for value in [str(runtime.SERVER / "bactoserver"), "-test", "127.0.0.1:18889"]):
        raise RuntimeError("Stored PID is not the private demo server; no fixture was written")
    return pid


def build():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    runtime.helper("prepare_server").prepare()
    subprocess.run(["go", "-C", str(ROOT.parent / "bactoserver"), "build", "-trimpath", "-o",
                    str(runtime.SERVER / "bactoserver"), "."], check=True)
    gui = snapshot.build_snapshot()
    provenance = {
        "purpose": "BactoSwitch manual: unchanged native production screens with a documented teaching fixture",
        "sources": {"gui": gui, "bactoserver": {
            "commit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT.parent / "bactoserver").decode().strip(),
            "dirtyStatus": subprocess.check_output(["git", "status", "--porcelain"], cwd=ROOT.parent / "bactoserver").decode()}},
        "guiExecutableSha256": runtime.sha(runtime.EXECUTABLE),
        "bactoserverExecutableSha256": runtime.sha(runtime.SERVER / "bactoserver"),
    }
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    print("Built the private GUI snapshot and Bactoserver for BactoSwitch capture.")


def start():
    prepare = runtime.helper("prepare_server")
    prepare.prepare()
    deadline = time.monotonic() + 75
    while True:
        try:
            prepare.start()
            break
        except OSError as error:
            # Recently closed private sockets may still be in TIME_WAIT; never stop another listener.
            if getattr(error, "errno", None) != 48 or time.monotonic() >= deadline:
                raise
            time.sleep(1)
    pid = verify_private_server()
    request("/api/settings", {"sosdEnabled": True})
    redis([["SET", key, value] for key, value in STATUS.items()] + [["SET", "sosd_lastUpdate", int(time.time())]])
    results = sorted((value for value in request("/api/data/auto") if value.get("name") == SOURCE_SERIES),
                     key=lambda value: value["timestamp"])
    lines = request("/api/settings")["sosdConfigDefinition"]
    assigned = []
    for index, result in enumerate(results):
        line = lines[index % 4]
        prepared = dict(result, useSosd=True, streamId=line["streamId"], name=line["streamName"])
        request("/data/auto/" + str(result["timestamp"]), prepared)
        assigned.append({"timestamp": result["timestamp"], "streamId": line["streamId"]})
    provenance = json.loads((OUTPUT / "provenance.json").read_text())
    provenance["fixture"] = {
        "serverPid": pid, "settings": {"sosdEnabled": True},
        "status": STATUS, "statusSource": "../bactoserver/redis-init.py key names",
        "results": {"series": SOURCE_SERIES, "count": len(assigned),
                    "assignment": "Round-robin to the shipped default lines 1–4 (streamId 0–3); line name as sample name; all counts, dates and plot files unchanged",
                    "first": assigned[0], "last": assigned[-1]},
        "guiDrafts": "Valve/flow states and form drafts change only in-memory GUI models; no settings save or hardware action",
    }
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    print(json.dumps({"serverPid": pid, "resultsAssigned": len(assigned), "series": SOURCE_SERIES}))


def capture(locales, test):
    baseline = {str(path.relative_to(ROOT)): runtime.sha(path)
                for path in (ROOT / "static/img").rglob("*.png")}
    verify_private_server()
    environment = dict(os.environ)
    environment.pop("QT_QUICK_BACKEND", None)
    environment.update(BACTOSERVER_URL=API, QT_QPA_PLATFORM="cocoa", QSG_INFO="1", QSG_RENDER_LOOP="basic")
    for locale in locales:
        directory = OUTPUT / "native" / locale
        directory.mkdir(parents=True, exist_ok=True)
        log = OUTPUT / f"capture-{test}-{locale}.log"
        with log.open("w") as stream:
            result = subprocess.run([str(runtime.EXECUTABLE), "-input", str(HERE / "tst_bactoswitch.qml"),
                                     f"BactoSwitchCapture::test_{test}:{locale}"],
                                    cwd=ROOT, env=environment, stdout=stream, stderr=subprocess.STDOUT)
        contents = log.read_text()
        if result.returncode or "GL_RENDERER:" not in contents or "Loading backend software" in contents:
            raise RuntimeError("Native BactoSwitch capture failed; inspect " + str(log))
        states = []
        for line in contents.splitlines():
            tree = re.search(r"BACTOSWITCH_TREE (\w+) ([\w-]+) (\[.*\])$", line)
            if tree:
                record = {"locale": tree[1], "state": tree[2], "logicalSize": [800, 480],
                          "imageSize": [1600, 960], "objects": json.loads(tree[3])}
                (directory / (tree[2] + ".json")).write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n")
                states.append(tree[2])
            if "BACTOSWITCH_REQUESTS " in line:
                (directory / f"requests-{test}.json").write_text(line.split("BACTOSWITCH_REQUESTS ", 1)[1] + "\n")
        runtime.verify_preserved(baseline)
        print(f"{locale}: captured {len(states)} states ({', '.join(states)})", flush=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["build", "start", "capture", "cleanup"])
    parser.add_argument("--locales", nargs="+", choices=LOCALES, default=LOCALES)
    parser.add_argument("--test", default="screens")
    args = parser.parse_args()
    if args.action == "build":
        build()
    elif args.action == "start":
        start()
    elif args.action == "capture":
        capture(args.locales, args.test)
    else:
        runtime.cleanup()
        print("Stopped the private BactoSwitch runtime.")


if __name__ == "__main__":
    main()
