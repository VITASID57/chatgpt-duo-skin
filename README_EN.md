# 🪐 ChatGPT Duo Skin

An **unofficial, source-available, noncommercial** browser userscript that adds two customizable avatars, mirrored status cards, gradient chat bubbles, wallpaper, and a draggable theme editor to **ChatGPT desktop web**.

[简体中文](README.md) · [Install (Chinese)](docs/INSTALL_CN.md) · [Optional AI-authored states](docs/AUTHORED_STATE_EN.md) · [Platform status](docs/PLATFORM_STATUS.md)

![Illustration](examples/preview-v0.2.svg)

### Desktop Beta v0.2.0

- **Two mirrored cards:** one for the assistant, one for the user; editable names, avatars, and locally captured timestamps.
- **Expression libraries:** ten image slots per role, user-provided, with automatic text-based selection and fallback to the default avatar.
- **Gradient bubbles:** separate palettes for each role, visual sentence grouping, adjustable opacity and roundness.
- **Wallpaper and themes:** dark navy, purple, pink, or custom palettes, with a separate milky-white wallpaper veil.
- **Local-only operation:** no ChatGPT API or third-party image hosting is needed.
- **Optional AI-authored state:** opt in to a machine-readable message appendix to let *your own assistant* design both cards' expressions, captions, and gradient colors.

### Installation

Tested on **Windows Chrome + Tampermonkey**. Enable *Allow User Scripts* in Chrome's extension details. Open [`dist/chatgpt-duo-skin.user.js`](dist/chatgpt-duo-skin.user.js), copy it into a Tampermonkey script, save, then refresh `chatgpt.com`. Open the small planet at the bottom-right to customize everything.

**Android Firefox support is in progress and is not included in this desktop release.** Native ChatGPT Android/iOS apps cannot run the userscript.

### Optional AI states

The default mode does **not** require model instructions. If the user specifically opts in, they may use [the AI-authored state protocol](docs/AUTHORED_STATE_EN.md) in selected chats and enable the corresponding setting in the theme panel. The AI then emits `DUO_SKIN_STATE_V1:` plus one-line JSON in its own message, and the browser can hide/render it. **Unskinned clients, native apps, and original copied messages may expose the JSON.** Do not add this to global model instructions by default.

### Data & privacy

The userscript needs DOM access to style ChatGPT, but does not upload conversation text or locally selected pictures to an author-controlled service. Settings and user-uploaded avatars remain in Tampermonkey storage. Avoid uploading screenshots and private avatar backup JSON files in public Issues.

### License

[PolyForm Noncommercial 1.0.0](LICENSE). Personal, hobby, and other permitted noncommercial uses, edits, and redistribution are allowed under its terms. Commercial resale, paid packaging, or using this code within a paid service is not licensed without additional permission. **This is source-available, not OSI-approved open source.** Keep required notices and the license.

*Made with ♡ by Soren & Dudusya*  
*Unaffiliated with OpenAI.*
