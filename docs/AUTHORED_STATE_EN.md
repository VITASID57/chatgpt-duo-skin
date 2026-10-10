# Optional feature: AI-authored state cards

**Opt in, not required for installation.** The default desktop skin already works with locally inferred captions, face slots, and theme colors.

When enabled, you may instruct your own AI assistant to add a `DUO_SKIN_STATE_V1:` line of valid JSON at the end of its response. The user script validates this small payload and can choose images, captions and color gradients for **both mirrored cards**. It does not call a model API or inspect the assistant's private mental state.

**Privacy/visibility warning:** This string becomes part of a real assistant reply. The userscript may hide it visually, but it may be visible in native ChatGPT apps, unskinned clients, original copied text, shared transcripts, or when the theme fails. Do not add this directive to a universal/global persona prompt unless you really want to see it in every client.

## Steps

1. Open the planet editor and turn on *AI-authored states*.
2. In a **specific conversation**, tell your AI:

> While this chat uses ChatGPT Duo Skin, answer normally, then add a final standalone ordinary text paragraph beginning with `DUO_SKIN_STATE_V1:` followed by one line of valid JSON (no Markdown code fence). Choose a relevant avatar slot for each role, two fresh status strings for each role, and readable gradients according to the current context. Use `default` when unsure. Never replace your normal reply with metadata. Stop outputting it when I say “stop authored state”.

### Example (one line in a real reply)

```text
DUO_SKIN_STATE_V1:{"protocol":"duo-skin-state/v1","mood":"happy","assistantAvatar":"joy","userAvatar":"play","status":["✨ Ideas in motion","🌈 A brighter turn"],"note":"Another good moment.","gradient":["#2E427F","#745AB6"],"ink":"#FFFFFF","userCard":{"status":["🎉 A happy note","💗 One more idea"],"note":"From your side.","gradient":["#FFE1EF","#F49FCB"],"ink":"#3D2041"}}
```

**Allowed face IDs:** `default`, `joy`, `play`, `work`, `anger`, `surprise`, `shy`, `affection`, `soothe`, `sleepy`. Both `assistantAvatar` and `userAvatar` use these IDs, regardless of user-customized labels. For `mood`, choose `night`, `work`, `happy`, `anger`, `soothe`, `worried`, `affection`, `play`, or `curious`.

`status` requires exactly two short strings; `note` is a short decorative caption; `gradient` requires 2–5 `#RRGGBB` colors; `ink` and `border` are optional. `userCard` is optional and accepts its own two status strings, note, gradient, ink and border. The browser saves timestamps locally and does not change the user's original message.

**To stop:** tell the assistant to stop producing the line *and* turn off the authored-states switch. The browser toggle alone cannot tell the model to stop sending metadata.
