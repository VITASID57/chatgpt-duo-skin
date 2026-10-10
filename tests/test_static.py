from pathlib import Path
import hashlib,re
root=Path(__file__).resolve().parents[1]
src=(root/'src/chatgpt-duo-skin.user.js').read_bytes()
dist=(root/'dist/chatgpt-duo-skin.user.js').read_bytes()
txt=(root/'dist/chatgpt-duo-skin.txt').read_bytes()
assert src==dist==txt, 'Distributed script must match source'
s=src.decode()
for needle in ['@version      0.2.0','PolyForm-Noncommercial-1.0.0','DUO_SKIN_STATE_V1:',"'cds.public.v1.config'","'cds.public.v1.face.'", "authoredState: false", "anniversaryDate: ''"]:
    assert needle in s, f'Missing {needle}'
assert len(re.findall(r'data:image/webp;base64,',s))==2, 'Only two neutral placeholder portraits should be embedded'
assert 'https://chatgpt.com/*' in s
print('Static checks passed:',len(s.splitlines()),'lines, sha256',hashlib.sha256(src).hexdigest())
