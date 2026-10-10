# Changelog

## v0.3.0 · Android Firefox Mobile Beta (2026-10-10)

- Add a **separate Android Firefox + Tampermonkey userscript** in `src/` and `dist/`; desktop v0.2.0 files remain unchanged.
- Carry forward mobile-tested responsive mirrored cards, one-slot message spacing, Firefox touch controls, keyboard-aware panel, HSV spectrum picker, and viewport-only wallpaper (no zoom on long chats).
- Replace owner photographs and role-specific intimate copy with generic placeholder avatars and neutral scene captions; anniversary date starts **blank and editable**.
- Isolate all mobile settings under the **public** `cds.public.v1.*` storage prefix; never read private skin keys. Use `DUO_SKIN_STATE_V1` only when explicitly opted in.
- Add Chinese/English mobile installation guides, static release verification and mobile platform status.
- Verification: JS syntax + 320/393/430px simulated Android layouts, dynamic message/slot re-render. Community device/browser combinations remain Beta.


## v0.2.0 · Desktop Beta (2026-10-10)

- Upgrade desktop user script to mirrored **two-person status cards** with larger avatars and independent messages.
- Add an **expression avatar library** (10 uploadable slots for each role) with locally inferred role-appropriate selection.
- Add **optional AI-authored states**, using the generic `DUO_SKIN_STATE_V1` protocol and optional `userCard` for both sides. Disabled by default; no API calls.
- Retain gradient bubbles, theme customizer, wallpaper veil, and draggable planet panel.
- Remove owner-specific images, personal nicknames, dates and local storage identifiers; public `cds.public.v1.*` storage namespace stays compatible with v0.1.
- Add independent **Android Firefox support-in-progress** note. Desktop remains the only first-class beta target.
- Add privacy, instructions, optional-state tutorial and release checks.

## v0.1.0 · First source-available desktop beta

- Initial public noncommercial script with neutral sample avatars and desktop customization.
