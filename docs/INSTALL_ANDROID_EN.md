# 📱 Android Firefox Mobile Beta v0.3.0

**Requirements:** Android Firefox + Tampermonkey on `chatgpt.com`. This userscript does **not** run in the native ChatGPT Android/iOS apps. [Desktop guide](INSTALL_CN.md).

## Install

1. Install/enable Tampermonkey in Firefox's Add-ons menu (availability depends on the current Firefox extension catalog).
2. Open [the Android userscript](../dist/chatgpt-duo-skin-android.user.js), copy all its text, create a new Tampermonkey script, paste and save. You can also accept the extension's install flow if offered.
3. Disable any old private Duo Skin or competing chat skin script. Reopen `https://chatgpt.com/` and tap the floating planet.
4. Customize two avatars, role names, wallpaper, bubbles, theme colors and an **optional** anniversary date.

## What differs from desktop

Mobile-specific mirrored cards, a touch/keyboard-aware collapsible theme studio, a continuous HSV picker plus HEX input, a one-slot visual spacing scheme for older DOM structures, and a viewport-fixed wallpaper that avoids stretching to a very tall chat thread.

The app ships with **generic placeholder images and role names**, no private photographs or hardcoded anniversary. The public version uses `cds.public.v1.*` storage keys and **never reads private skin keys**. Upload your own images to your local Tampermonkey storage. Device settings are not cloud-synced.

AI-authored status `DUO_SKIN_STATE_V1` is available on an opt-in basis and **off by default**. [Details](AUTHORED_STATE_EN.md). The on-page timestamp is when the browser first observed a message, not guaranteed to be its original send time.

## Troubleshooting & privacy

If you see duplicate cards, make sure no two scripts run simultaneously. If ChatGPT UI changes break selectors, use the planet → Advanced → anonymized diagnostics (never post raw conversation logs or avatar JSON backups).

Chat DOM text is read locally to style messages; no author-operated server upload, chat syncing, analytics or hidden API calls. Private images and configuration remain in local extension storage.

Licensed under [PolyForm Noncommercial 1.0.0](../LICENSE): source-available, **not OSI open source**. Unofficial and unaffiliated with OpenAI. Browser compatibility remains beta.
