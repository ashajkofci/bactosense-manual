#!/usr/bin/env python3
"""Create a private copy of the real Bactoserver demo runtime and seed Redis."""
from pathlib import Path
import argparse
import json
import os
import runpy
import signal
import shutil
import socket
import subprocess
import sys
import time
import types
import urllib.request

ROOT = Path(__file__).resolve().parents[3]
SERVER_SOURCE = ROOT.parent / "bactoserver"
RUNTIME = ROOT / "output/gui-capture/runtime/server"


def redis_command(*parts, port=16389):
    encoded = [str(part).encode() for part in parts]
    request = b"*%d\r\n" % len(encoded) + b"".join(
        b"$%d\r\n" % len(part) + part + b"\r\n" for part in encoded
    )
    with socket.create_connection(("127.0.0.1", port), timeout=2) as connection:
        connection.sendall(request)
        return connection.recv(16384)


def prepare():
    RUNTIME.mkdir(parents=True, exist_ok=True)
    (RUNTIME / "state").mkdir(exist_ok=True)
    tracked = subprocess.check_output(
        ["git", "ls-files", "-z", "--", "mock", "demodata-sigrist", "fonts"],
        cwd=SERVER_SOURCE,
    ).decode().split("\0")
    for relative in filter(None, tracked):
        destination = RUNTIME / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(SERVER_SOURCE / relative, destination)
        if relative.startswith("mock/") and destination.suffix in [".sh", ".py"]:
            # The shipped Docker runtime makes these product demo scripts executable.
            destination.chmod(destination.stat().st_mode | 0o111)
    for name in ["config-default.yaml", "settings-default.yaml", "settings-schema.json", "redis-init.py", "settings-demo.yaml"]:
        shutil.copy2(SERVER_SOURCE / name, RUNTIME / name)
    shutil.copy2(SERVER_SOURCE / "settings-demo.yaml", RUNTIME / "demodata-sigrist/settings-demo.yaml")
    state = RUNTIME / "state"
    (state / "timezone").write_text("Europe/Zurich\n")
    dummy = RUNTIME / "capture-dummy.sh"
    dummy.write_text("#!/bin/sh\nprintf '%s\\n' 'IPv4.Address = 192.0.2.50'\nexit 0\n")
    dummy.chmod(0o755)
    config = {
        "redis host": "127.0.0.1:16389", "redis DB number": 9,
        "set redis config?": True, "user database file": str(state / "users.yaml"),
        "user settings file": str(state / "settings-user.yaml"),
        "system settings file": str(RUNTIME / "settings-capture.yaml"),
        "cloud DB file path": str(state / "cloud.db"),
        "path to config folder": str(state), "network interfaces file": str(state / "interfaces"),
        "resolv conf file": str(state / "resolv.conf"), "ntp config file": str(state / "ntp.conf"),
        "timezone file": str(state / "timezone"), "localtime file": str(state / "localtime"),
        "zoneinfo folder": str(Path("/usr/share/zoneinfo").resolve()),
        "path to timezone name file": str(state / "timezone"),
        "path to local timezone definition": str(state / "localtime"),
        "path to screensaver config": str(state / "screensaver"),
        "web port file": str(state / "webport"), "vnc port file": str(state / "vncport"),
        "enable pprof": False, "M7 connected": False, "SHT21 connected": False,
        "FPGA connected": False, "Outputs connected": False, "Wifi connected": False,
        "network init script": "/usr/bin/true", "ntp init command": "/usr/bin/true",
        "ssh command": "/usr/bin/true", "smb command": "/usr/bin/true",
        "vnc command": "/usr/bin/true", "date command": "/usr/bin/true",
        "hwclock command": "/usr/bin/true", "dummy command": str(dummy),
    }
    (RUNTIME / "config-capture.yaml").write_text(json.dumps(config, indent=2) + "\n")
    (RUNTIME / "settings-capture.yaml").write_text(json.dumps({
        "Instrument ID": "BactoSense Demo", "WEB Service toggle": True,
        "WEB SSL Service toggle": False, "SSL Service toggle": False,
        "Modbus Service toggle": False, "FTP Service toggle": False,
        "SSH Service toggle": False, "SMB Service toggle": False,
        "VNC Service toggle": False, "Digital inputs enabled": False,
        "Auto mode active": False, "Auto mode auto restart": False,
        "Mirror backup interval [minutes]": 0,
        "User Management Option toggle": True,
    }, indent=2) + "\n")


def start_server():
    environment = dict(os.environ, BACTOSERVER_INTEGRATION_FIXTURE="1",
                       BACTOSERVER_MOCK_API="http://127.0.0.1:18889")
    server_log = (RUNTIME / "server.log").open("a")
    server = subprocess.Popen([
        str(RUNTIME / "bactoserver"), "-test", "-port", "127.0.0.1:18889",
        "-modbus", ":11502", "-variant", "bactosense", "-configFile", "config-capture.yaml",
    ], cwd=RUNTIME, env=environment, stdout=server_log, stderr=subprocess.STDOUT,
       start_new_session=True)
    (RUNTIME / "server.pid").write_text(str(server.pid))
    for _ in range(100):
        if server.poll() is not None:
            raise RuntimeError("Disposable Bactoserver exited; inspect server.log")
        try:
            ready = urllib.request.Request("http://127.0.0.1:18889/api/status", headers={
                "Authorization": "Basic YWRtaW46",  # Shipped disposable admin with blank PIN.
            })
            with urllib.request.urlopen(ready, timeout=1) as response:
                if response.status == 200:
                    break
        except OSError:
            time.sleep(.1)
    else:
        raise RuntimeError("Disposable Bactoserver did not become ready")
    files = subprocess.check_output(["lsof", "-p", str(server.pid), "-Fn"]).decode().splitlines()
    databases = sorted(set(line[1:] for line in files if line.startswith("n/private/tmp/bactoserver-")
                           and line.endswith(".db")))
    artifacts_path = RUNTIME / "temporary-databases.json"
    previous = json.loads(artifacts_path.read_text()) if artifacts_path.exists() else []
    artifacts_path.write_text(json.dumps(sorted(set(previous + databases)), indent=2) + "\n")
    print(json.dumps({"api": "http://127.0.0.1:18889", "server_pid": server.pid,
                      "redis_pid": int((RUNTIME / "redis.pid").read_text())}))


def restart_server():
    pid = int((RUNTIME / "server.pid").read_text())
    command = subprocess.check_output(["ps", "-p", str(pid), "-o", "command="]).decode()
    if str(RUNTIME / "bactoserver") not in command:
        raise RuntimeError("Stored PID is not this disposable server")
    os.kill(pid, signal.SIGTERM)
    for _ in range(50):
        with socket.socket() as probe:
            if probe.connect_ex(("127.0.0.1", 18889)) != 0:
                break
            time.sleep(.1)
    else:
        raise RuntimeError("Disposable API did not stop")
    start_server()


def start():
    for port in [16389, 18889]:
        with socket.socket() as probe:
            probe.bind(("127.0.0.1", port))
    redis_log = (RUNTIME / "redis.log").open("w")
    redis = subprocess.Popen([
        "/opt/homebrew/bin/redis-server", "--bind", "127.0.0.1", "--port", "16389",
        "--save", "", "--appendonly", "no", "--dir", str(RUNTIME / "state"),
    ], cwd=RUNTIME, stdout=redis_log, stderr=subprocess.STDOUT, start_new_session=True)
    (RUNTIME / "redis.pid").write_text(str(redis.pid))
    for _ in range(50):
        try:
            if redis_command("PING") == b"+PONG\r\n":
                break
        except OSError:
            time.sleep(.1)
    # Load the product's shipped status seed without installing a Python Redis client.
    sys.modules["redis"] = types.ModuleType("redis")
    sys.argv = ["redis-init.py", "-n", "9"]
    keys = runpy.run_path(str(RUNTIME / "redis-init.py"))["keys_demo"]
    with socket.create_connection(("127.0.0.1", 16389), timeout=2) as connection:
        def send(*parts):
            encoded = [str(part).encode() for part in parts]
            connection.sendall(b"*%d\r\n" % len(encoded) + b"".join(
                b"$%d\r\n" % len(part) + part + b"\r\n" for part in encoded))
            return connection.recv(16384)
        send("SELECT", 9)
        for key, value in keys:
            send("SET", key, value)
    start_server()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--start", action="store_true")
    parser.add_argument("--restart-server", action="store_true")
    args = parser.parse_args()
    prepare()
    if args.restart_server:
        restart_server()
    elif args.start:
        start()
