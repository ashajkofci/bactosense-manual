#!/usr/bin/env python3
"""Stop only the recorded task-owned local server and Redis after capture review."""
import json
import os
from pathlib import Path
import signal
import subprocess
import time

ROOT = Path(__file__).resolve().parents[3]
RUNTIME = ROOT / "output/gui-capture/runtime/server"


def stop(name, required):
    record = RUNTIME / (name + ".pid")
    if not record.exists():
        return
    pid = int(record.read_text())
    result = subprocess.run(["ps", "-p", str(pid), "-o", "command="],
                            stdout=subprocess.PIPE, text=True)
    if result.returncode == 0:
        if not all(value in result.stdout for value in required):
            raise RuntimeError("Stored " + name + " PID belongs to another process; left running")
        os.kill(pid, signal.SIGTERM)
        for _ in range(50):
            try:
                os.kill(pid, 0)
            except ProcessLookupError:
                break
            time.sleep(.1)
        else:
            raise RuntimeError("Owned " + name + " did not exit")
    record.unlink()


def main():
    stop("server", [str(RUNTIME / "bactoserver"), "-test", "18889"])
    stop("redis", ["redis-server", "16389"])
    artifacts = RUNTIME / "temporary-databases.json"
    if artifacts.exists():
        for value in json.loads(artifacts.read_text()):
            path = Path(value)
            if path.parent != Path("/private/tmp") or not path.name.startswith("bactoserver-") or path.suffix != ".db":
                raise RuntimeError("Unexpected temporary database path; left untouched")
            path.unlink(missing_ok=True)
        artifacts.unlink()
    print("Stopped recorded private capture processes and removed their tracked temporary databases.")


if __name__ == "__main__":
    main()
