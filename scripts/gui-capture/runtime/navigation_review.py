#!/usr/bin/env python3
"""Create a compact evidence matrix from the genuine native click audit."""
import datetime
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[3]
OUTPUT = ROOT / "output/gui-capture/activation"
LOCALES = ["en", "de", "fr", "it", "es"]


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    locales = []
    routes = {}
    for locale in LOCALES:
        path = OUTPUT / ("navigation-navigation-roles-" + locale + ".json")
        log_path = OUTPUT / ("capture-navigation-roles-" + locale + ".log")
        log = log_path.read_text()
        assert re.search(r"Totals:\s+4 passed, 0 failed", log), locale + " must pass all actual click checks"
        assert "GL_RENDERER:" in log and "Loading backend software" not in log
        records = json.loads(path.read_text())
        supplement_path = OUTPUT / ("navigation-additional-" + locale + ".json")
        supplement_log = OUTPUT / ("capture-additional-" + locale + ".log")
        supplement = None
        if not any(record["name"] == "advanced/maintenance-menu" for record in records):
            contents = supplement_log.read_text()
            assert re.search(r"Totals:\s+3 passed, 0 failed", contents)
            assert "GL_RENDERER:" in contents and "Loading backend software" not in contents
            records.extend(json.loads(supplement_path.read_text()))
            supplement = {"log": str(supplement_log.relative_to(ROOT)), "logSha256": sha(supplement_log),
                          "detailedEvidence": str(supplement_path.relative_to(ROOT)), "evidenceSha256": sha(supplement_path)}
        rows = []
        for record in records:
            if record["name"].endswith("network-requests"):
                requests = record["detail"]["requests"]
                assert not any(request["path"].startswith(("/api/run", "/api/clear")) for request in requests)
                for request in requests:
                    if request["path"] == "/api/settings" and request["body"]:
                        value = json.loads(request["body"])
                        assert set(value) == {"guiMode"} and value["guiMode"] in ["manual", "auto"]
                continue
            visible_text = list(dict.fromkeys(obj["text"] or obj["label"] for obj in record["objects"]
                                              if obj["text"] or obj["label"]))
            controls = [{key: obj[key] for key in ["name", "x", "y", "width", "height", "disabled", "levelMax"]}
                        for obj in record["objects"] if obj["name"].startswith("actionBarButton")]
            row = {"route": record["name"], "role": record["role"], "mode": record["mode"],
                   "screen": record["screen"], "header": record["header"], "actions": record["actions"],
                   "visibleText": visible_text, "controls": controls, "detail": record["detail"]}
            if "menu" in record:
                row["menu"] = record["menu"]
            rows.append(row)
            routes.setdefault(record["name"], {})[locale] = {key: value for key, value in row.items() if key != "route"}
        required = ["settings/gates/new", "advanced/maintenance-menu", "home/manual-wizard/prime-instructions",
                    "home/online-wizard/scheduler", "basic/change-password/edit/change-pin",
                    "system/configuration/advanced-user-management-unsaved", "admin/users/edit/change-pin"]
        assert all(any(row["route"] == required_route for row in rows) for required_route in required), locale + " missing final expanded click checks"
        locales.append({"locale": locale, "status": "pass", "routeStateCount": len(rows),
                        "log": str(log_path.relative_to(ROOT)), "logSha256": sha(log_path),
                        "detailedEvidence": str(path.relative_to(ROOT)), "evidenceSha256": sha(path),
                        "focusedSupplement": supplement, "rows": rows})
    report = {"status": "pass", "reviewedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "localeCount": len(locales), "routeStateCount": sum(locale["routeStateCount"] for locale in locales),
        "locales": locales, "routeLabelMatrix": routes,
        "mechanism": "Real Cocoa/OpenGL current QML; actual mouse clicks on production controls with real disposable Basic, Advanced and Admin logins; no direct navigation after initial Home setup",
        "findings": [
            "Home Manual Measure opens Manual measurement wizard; Home Online Start opens Online instruction wizard, then Next shows scheduler controls.",
            "Settings has Online mode settings; there is no separate Manual mode settings menu tile.",
            "Basic Settings has Change password, Logs, System info and Cartridge change; no System settings or Maintenance.",
            "Basic Change password leads to User management; own user Edit > Change PIN reveals PIN and Confirm PIN fields.",
            "Admin System settings > Users > Settings opens User security settings; Users > own user > Edit > Change PIN opens unsaved PIN fields.",
            "Test outputs is reachable under both Maintenance and Online mode settings for Admin/Service; Maintenance omits the tile for Advanced despite the individual control's levelMax1.",
            "System configuration Advanced user management mode is an unsaved checkbox and commits with Save; no Next action exists.",
            "System services commits with Apply; reboot prompt behavior is source-verified only, because Apply would change server settings.",
            "Basic idle BactoSense shows enabled Clear errors with levelMax2; no clear action executed.",
            "Logs Results (manual mode) and Results (online mode) select their corresponding data buckets; Home Results follows current mode.",
            "Special export import shows Import settings, Export diagnostics and Export all; there is no Export settings action.",
            "Gate settings > New picks the installed-cartridge template and opens Gate wizard; no gate type dropdown is required.",
            "Manual Prime selection > Next opens real maintenance instructions with Start; no maintenance command was executed.",
            "Admin/Service-only Upgrades, System services and Audit trail controls remain restricted under a real Advanced account."
        ],
        "executionBoundary": "Navigation only. Empty activation keyboard cancelled; no key entered/submitted, enrollment, form Save/Apply, user modification, clear, self-check rerun, import/export, firmware update, measurement, maintenance or scheduler execution.",
        "allowedPrivateWrites": "GUI mode switching and its audit event only, plus the separately documented initial empty Scientific demo flag seed."}
    (OUTPUT / "navigation-review.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print("Passed " + str(report["routeStateCount"]) + " real native route states across 5 locales.")


if __name__ == "__main__":
    main()
