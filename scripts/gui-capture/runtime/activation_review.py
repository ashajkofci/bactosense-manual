#!/usr/bin/env python3
"""Record hashes and actual labels after the 30 supplemental raws are reviewed."""
import datetime
import hashlib
import json
from pathlib import Path
import re
import struct
import subprocess

ROOT = Path(__file__).resolve().parents[3]
OUTPUT = ROOT / "output/gui-capture/activation"
LOCALES = ["en", "de", "fr", "it", "es"]
STATES = ["activation-home", "settings-menu", "system-settings-menu",
          "scientific-package-upgrades", "scientific-package-activation-key",
          "bactocloud-settings"]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def bounds(obj):
    return [obj[key] for key in ["x", "y", "width", "height"]]


def item(data, name=None, kind=None, x=None, y=None):
    return next(obj for obj in data["objects"]
                if (name is None or obj["name"] == name)
                and (kind is None or obj["type"].startswith(kind))
                and (x is None or obj["x"] == x)
                and (y is None or obj["y"] == y))


def main():
    reviewed = []
    labels = {}
    for locale in LOCALES:
        log_path = OUTPUT / ("capture-activation-" + locale + ".log")
        route_path = OUTPUT / ("navigation-activation-" + locale + ".json")
        if locale == "en" and not log_path.exists():
            log_path = OUTPUT / "capture-en.log"
            route_path = OUTPUT / "navigation-en.json"
        log = log_path.read_text()
        assert "GL_RENDERER:" in log and "Loading backend software" not in log
        assert "Cannot find style" not in log and "FAIL!" not in log
        assert re.search(r"Totals:\s+3 passed, 0 failed", log)
        records = {row["name"]: row for row in json.loads(route_path.read_text())}
        assert all(not request["body"] for request in records["activation-network-requests"]["detail"]["requests"])
        trees = {}
        for state in STATES:
            png = OUTPUT / "native" / locale / (state + ".png")
            tree = png.with_suffix(".json")
            dimensions = struct.unpack(">II", png.read_bytes()[16:24])
            assert dimensions == (1600, 960)
            data = trees[state] = json.loads(tree.read_text())
            reviewed.append({"locale": locale, "state": state,
                "png": str(png.relative_to(ROOT)), "sha256": digest(png),
                "tree": str(tree.relative_to(ROOT)), "treeSha256": digest(tree),
                "logicalSize": [800, 480], "pixelSize": list(dimensions),
                "visualReview": "accepted: genuine controls and labels, complete frame, no text clipping or overlap",
                "log": str(log_path.relative_to(ROOT)), "logSha256": digest(log_path)})
        settings = records["settings-menu"]
        system = records["system-settings-menu"]
        system_entry = next(entry for entry in settings["menu"] if entry["screen"].endswith("SettingsMenuSystemSettingsScreen.qml"))
        upgrades = next(entry for entry in system["menu"] if entry["screen"].endswith("SettingsUpgrades.qml"))
        cloud = next(entry for entry in system["menu"] if entry["screen"].endswith("SettingsCloudScreen.qml"))
        home_target = next(obj for obj in trees["activation-home"]["objects"]
                           if obj["type"].startswith("HomeBarActionButton") and obj["label"] == settings["header"])
        upgrade_button = item(trees["scientific-package-upgrades"], kind="SmallButton")
        keyboard = trees["scientific-package-activation-key"]
        keyboard_input = item(keyboard, name="keyboardInput")
        keyboard_confirm = item(keyboard, name="keyboardConfirm")
        assert keyboard_input["text"] == "" and keyboard_confirm["disabled"]
        cloud_tree = trees["bactocloud-settings"]
        labels[locale] = {"settings": settings["header"], "systemSettings": system["header"],
            "upgrades": records["scientific-package-upgrades"]["header"],
            "upgrade": upgrade_button["text"],
            "activationPrompt": item(keyboard, kind="CustomText", x=37, y=40)["text"],
            "cloudSettings": records["bactocloud-settings"]["header"],
            "enroll": records["bactocloud-settings"]["actions"][2],
            "organizationLabel": item(cloud_tree, kind="CustomText", x=60, y=190)["text"],
            "connectionStatus": item(cloud_tree, kind="CustomText", x=400, y=216)["text"],
            "targets": {"homeSettings": bounds(home_target), "systemSettingsTile": system_entry["bounds"],
                "upgradesTile": upgrades["bounds"], "bactocloudTile": cloud["bounds"],
                "upgradeButton": bounds(upgrade_button), "activationKeyInput": bounds(keyboard_input),
                "cloudEnroll": bounds(item(cloud_tree, name="actionBarButton2"))},
            "actualRole": settings["role"], "scientificPackage": False, "managementPackageDemoFlag": True}
    preserved = json.loads((OUTPUT / "preserved-image-sha256.json").read_text())
    renames = []
    for relative, expected in preserved.items():
        path = ROOT / relative
        if not path.exists() and relative.startswith("static/img/gui/") and relative.endswith("/web-plots-date-range.png"):
            path = path.with_name("web-plots-measurement-time.png")
            renames.append({"from": relative, "to": str(path.relative_to(ROOT)), "sha256": expected})
        assert path.exists() and digest(path) == expected
    provenance = json.loads((OUTPUT / "provenance.json").read_text())
    provenance.pop("managementPackageActivated", None)
    provenance["managementPackageDemoFlagRetained"] = True
    (OUTPUT / "provenance.json").write_text(json.dumps(provenance, indent=2) + "\n")
    source_clean = {name: not subprocess.check_output(["git", "status", "--porcelain"], cwd=ROOT.parent / name).decode().strip()
                    for name in ["gui", "bactoserver"]}
    report = {"status": "accepted", "reviewedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "captureCount": len(reviewed), "localeCount": len(LOCALES), "captures": reviewed,
        "labelsAndTargets": labels, "previousReviewedImageCount": len(preserved), "previousImagesUnchanged": True,
        "explicitReviewedFileRenames": renames,
        "sourceWorktreesClean": source_clean, "provenance": provenance,
        "captureMechanism": "Real production Qt QML/qrc and compiled qm translations; actual native mouse handlers after initial Home setup; Cocoa OpenGL; app-native grabToImage",
        "keyboardDeployment": "Private import copy of unmodified GUI CustomVirtualKeyboardStyle with actual CustomVirtualKeyboardLayout; QT_IM_MODULE=qtvirtualkeyboard",
        "actions": "Opened empty activation keyboard and cancelled; no activation key entered/submitted, no purchase, no enrollment, no settings save, no hardware execution",
        "observedTranslationDifference": "Current compiled EN qm renders Not connected source string as Offline; native labels are authoritative."}
    navigation = OUTPUT / "navigation-review.json"
    if navigation.exists():
        native = json.loads(navigation.read_text())
        report["nativeNavigationReview"] = {"path": str(navigation.relative_to(ROOT)), "sha256": digest(navigation),
                                           "passedRouteStates": native["routeStateCount"]}
    final_state = OUTPUT / "final-runtime-state.json"
    if final_state.exists():
        report["finalRuntimeState"] = json.loads(final_state.read_text())
    report["runtimeHelperHashes"] = {str(path.relative_to(ROOT)): digest(path)
        for path in [Path(__file__).resolve().with_name(name) for name in
                     ["activation_capture.py", "tst_activation.qml", "activation_review.py", "navigation_review.py"]]}
    (OUTPUT / "labels-and-targets.json").write_text(json.dumps(labels, ensure_ascii=False, indent=2) + "\n")
    (OUTPUT / "capture-review.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print("Accepted 30 supplemental raw captures across 5 locales; preserved " + str(len(preserved)) + " previous images.")


if __name__ == "__main__":
    main()
