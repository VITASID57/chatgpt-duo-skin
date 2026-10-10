from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parents[1]
src = (root / "src/chatgpt-duo-skin-android.user.js").read_bytes()
dist = (root / "dist/chatgpt-duo-skin-android.user.js").read_bytes()
txt = (root / "dist/chatgpt-duo-skin-android.txt").read_bytes()
assert src == dist == txt, "Android distributed scripts must match source"
s = src.decode("utf-8")
for required in [
    "@version      0.3.0", "PolyForm-Noncommercial-1.0.0",
    "DUO_SKIN_STATE_V1:", "duo-skin-state/v1",
    "window.__CHATGPT_DUO_SKIN_PUBLIC_MOBILE__",
    "const STORAGE = 'cds.public.v1.config'",
    "const FACE_PREFIX='cds.public.v1.face.'",
    "anniversaryDate: ''", "authoredState: false",
    "jdw517-picker", "jdw518-gap-slot", "display:contents",
    "v0.3.0 Android FIX", "fixed to the viewport"
]:
    assert required in s, f"Android missing required public/mobile feature: {required}"
for forbidden in [
    "2025-05-12", "Date.UTC(2025", "SOREN_STATE_V1:",
    "soren-state/v1", "jishuAvatar", "duduAvatar",
    "jdw4.config", "jdw4.avatar.", "jdw4.wallpaper",
    "jdw511.face.", "jdw57.message.snapshots", "jdw514.user.cards",
    "沈嘟嘟", "纪叙", "JISHU", "Soren_Dudusya_私人表情头像库",
]:
    assert forbidden not in s, f"Android includes private marker: {forbidden}"
assert len(re.findall(r"data:image/webp;base64,", s)) == 2, "Only two generic placeholders can ship"
assert not re.search(r"\b(?:fetch|XMLHttpRequest|GM_xmlhttpRequest)\s*\(", s), "No data exfiltration network API"
print("Android public static checks passed:",
      len(s.splitlines()), "lines, sha256", hashlib.sha256(src).hexdigest())
