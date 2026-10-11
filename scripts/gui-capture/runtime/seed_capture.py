#!/usr/bin/env python3
"""Prepare documented teaching examples in this task's disposable demo only."""
import base64
import copy
import datetime
import hashlib
import json
import re
import subprocess
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT.parent / "bactoserver"
OUT = ROOT / "output/gui-capture/runtime"
BASE = "http://127.0.0.1:18889"


def request(path, data=None):
    body = None if data is None else json.dumps(data).encode()
    req = urllib.request.Request(BASE + path, data=body, headers={
        "Authorization": "Basic " + base64.b64encode(b"admin:").decode(),
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req, timeout=15) as response:
        content = response.read()
        return json.loads(content) if content else None


def dates(timestamp):
    utc = datetime.datetime.fromtimestamp(timestamp, datetime.timezone.utc)
    local = utc.astimezone(datetime.timezone(datetime.timedelta(hours=2)))
    return {"dateUtc": utc.strftime("%Y-%m-%d %H:%M:%S"),
            "date": local.strftime("%Y-%m-%d %H:%M:%S")}


def source_info(relative):
    return {"path": "../bactoserver/" + relative,
            "sha256": hashlib.sha256((SOURCE / relative).read_bytes()).hexdigest()}


def main():
    # The exact loopback endpoint and owned process make these writes isolated.
    pid = int((OUT / "server/server.pid").read_text())
    process = subprocess.run(["ps", "-p", str(pid), "-o", "command="],
                             capture_output=True, text=True, check=True)
    required = [str(OUT / "server/bactoserver"), "-test", "127.0.0.1:18889"]
    if not all(value in process.stdout for value in required):
        raise RuntimeError("Stored PID is not the private demo server; no fixture was written")
    subprocess.run(["lsof", "-a", "-p", str(pid), "-iTCP:18889", "-sTCP:LISTEN"],
                   capture_output=True, text=True, check=True)
    settings = request("/api/settings")
    manual = request("/api/data/manual")
    record = next(value for value in manual if value.get("gateType") == "ICC")
    original = copy.deepcopy(record)
    custom_gate = copy.deepcopy(settings["gateSetsDefault"]["icc_default"])
    custom_gate["name"] = "ICC Water"
    custom_gate["gates"]["icc"]["points"][0][0] = 4.3
    custom_gate["gates"]["icc"]["points"][1][0] = 4.3
    gate_sets = copy.deepcopy(settings["gateSets"])
    gate_sets["icc_manual_example"] = custom_gate
    request("/api/settings", {"gateSets": gate_sets})

    warning_timestamp = record["timestamp"] + 30
    warning = {"id": "DEMO", "warningId": str(warning_timestamp) + "-manual-example",
               "timestamp": warning_timestamp, "measurementId": record["timestamp"],
               "name": "HighOffsetSSC", "bucket": "manual", **dates(warning_timestamp)}
    record["warnings"] = [warning]
    request("/data/manual/" + str(record["timestamp"]), record)
    request("/data/warnings/" + warning["warningId"], warning)
    warning_result = next(value for value in manual if value.get("fl1SscPath")
                          and value.get("gateType") == "TCC")
    detail_timestamp = warning_result["timestamp"] + 30
    detail_warning = {"id": "DEMO", "warningId": str(detail_timestamp) + "-manual-example",
                      "timestamp": detail_timestamp, "measurementId": warning_result["timestamp"],
                      "name": "HighOffsetSSC", "bucket": "manual", **dates(detail_timestamp)}
    request("/data/warnings/" + detail_warning["warningId"], detail_warning)

    # Shipped product mock event types; dates moved beside the current demo archive.
    errors = []
    for timestamp, name, severity, count in [
        (1776333600, "ErrorsCleared", "", 1),
        (1776333540, "CartridgeMissingError", "critical", 1),
        (1776333480, "MixerInflationError", "non-critical", 1),
    ]:
        event = {"timestamp": timestamp, "measurementId": None, "id": "DEMO",
                 "severity": severity, "name": name, "count": count, **dates(timestamp)}
        request("/data/errors/" + str(timestamp), event)
        errors.append(event)

    text = (SOURCE / "mock/data/self_check.yaml").read_text()
    result_block = re.search(r"  results: \|\n(.*?)  date:", text, re.S).group(1)
    result_text = "\n".join(line[4:] for line in result_block.rstrip().splitlines()) + "\n"
    check_timestamp = 1776330000
    self_check = {"timestamp": check_timestamp, "success": True, "results": result_text,
                  "id": "DEMO", **dates(check_timestamp)}
    request("/data/self_check/" + str(check_timestamp), self_check)
    provenance = {
        "api": BASE, "serverPid": pid, "purpose": "Disposable manual teaching examples",
        "sources": [source_info("mock/data/errors.yaml"),
                    source_info("mock/data/warnings.yaml"),
                    source_info("mock/data/self_check.yaml"),
                    source_info("settings-default.yaml")],
        "originalResult": original, "preparedResult": record, "warning": warning,
        "warningDetailExample": detail_warning, "warningDetailResult": warning_result,
        "preparedErrors": errors, "preparedSelfCheck": self_check, "customGate": custom_gate,
        "unchangedEvidence": "All result counts, dates, archive URLs and plot files retained.",
        "localDrafts": {
            "systemServices": {"portWeb": ":80", "portModbus": ":502"},
            "digitalInput": {"enabled": True, "autoMode": True, "autoInterval": 60,
                             "protocol": "analysis_water", "gates": "icc_default",
                             "otherInputsEnabled": False},
            "alarmSources": {"source": "Cartridge Remaining", "condition": "<", "threshold": 0.2},
            "gateDefinition": "Unmodified shipped TCC and ICC templates, no save action",
        },
        "hardwareFixture": {"currentIp": "192.0.2.50", "timezone": "Europe/Zurich",
                            "usb": "The product mock/fdisk.sh disks, no export or import execution"},
    }
    (OUT / "capture-fixture-provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    print(json.dumps({"resultTimestamp": record["timestamp"], "warning": warning["name"],
                      "errorTypes": [value["name"] for value in errors],
                      "customGate": custom_gate["name"], "serverPid": pid}))


if __name__ == "__main__":
    main()
