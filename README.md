# 🪐 ChatGPT Duo Skin｜双人聊天皮肤

**把 ChatGPT 网页装成你和 AI 的私人聊天室。** 自定义双人头像、昵称、渐变气泡、壁纸、每轮状态栏，以及一个可拖拽、自动贴边的小土星主题工坊。

> **公开源码 · 免费非商用 · 非官方社区项目**  
> 许可证：**PolyForm Noncommercial 1.0.0**。可以为非商业目的使用、修改和按许可证再分发，**不得未经许可商业使用、付费打包、收费转售或作为商业服务出售**。它是 source-available，不属于 OSI 定义的开源许可证。

![公共版桌面效果](examples/preview.svg)

## ✨ 有什么功能

| 功能 | 说明 |
|---|---|
| 🖼 双人头像与昵称 | 双方独立上传头像，用户在右、助手在左；开箱为中性 AI / ME 头像 |
| 💬 渐变气泡 | 助手、用户两套颜色；逐段、整条或原生布局可切换 |
| 🎨 主题工坊 | 内置极夜深海蓝、暮紫星云、芭比玫粉；主色自动生成渐变，支持自定义与删除（深海蓝除外） |
| 🌫 背景壁纸 | 本地上传，奶白蒙层单独调节 |
| 🪪 每轮状态栏 | 消息首次识别时写入时间快照；状态短句由脚本根据本地可见文字选择，并非 GPT 内部情绪 |
| 🪐 小土星 | 可拖拽、贴边、收起设置；LIVE 北京时钟不会改动历史快照 |
| 🔒 本地运行 | 不需要 ChatGPT API、Token、第三方图床；源代码不包含账号私密数据 |

## 🖥️ 安装环境

**首次验证：Windows 10/11 + Chrome 桌面浏览器 + Tampermonkey + chatgpt.com。** 其他桌面浏览器、安卓网页端可能适配，但**尚未作为首发支持环境验证**。不能直接应用于 ChatGPT 原生手机 App。

1. 在 Chrome 安装 [Tampermonkey（篡改猴）](https://www.tampermonkey.net/)。
2. Chrome 地址栏打开 `chrome://extensions` → 篡改猴 → 详情 → 开启 **「允许用户脚本 / Allow User Scripts」**。
3. 下载 [`dist/chatgpt-duo-skin.user.js`](dist/chatgpt-duo-skin.user.js)，在 Tampermonkey 中 **新建用户脚本**，全选替换编辑器内容并粘贴脚本，`Ctrl+S` 保存。也可试试浏览器打开 `.user.js` 触发 Tampermonkey 安装页面。
4. 打开 `https://chatgpt.com/`，按 `Ctrl+Shift+R` 刷新。右下角出现迷你土星 🪐 即已运行。
5. 点击土星 → 选择主题 → 上传自己的头像、壁纸 → 配置昵称和可选纪念日。每项存到本机篡改猴存储区。

完整图文步骤见 [`docs/INSTALL_CN.md`](docs/INSTALL_CN.md)。

## 🌈 定制自己的版本

打开主题工坊：
- **主题色：** 选预设或新建主题，选主色后自动生成同色渐变；可分别改助手、用户气泡。
- **身份与状态栏：** 头像、昵称、是否显示每轮状态栏、**可选纪念日起点**。公开版默认不带任何私人日期。
- **双人气泡：** 逐段独立 / 整条一颗 / 原生样式，玻璃浓度与圆角。
- **背景壁纸：** 上传自己的壁纸，调节奶白蒙层以保证文字可读。

不知道从哪里改？把 [`docs/AI_CUSTOMIZE_PROMPT_CN.md`](docs/AI_CUSTOMIZE_PROMPT_CN.md) 发给自己的 AI，告诉它喜欢的颜色和风格。

## 🧷 卸载与回退

篡改猴管理面板可以**关闭**本脚本，官方 ChatGPT 网页立即恢复默认。关闭不删除配置；若想完全清空，还需要在篡改猴脚本存储中删除 `cds.public.v1.*` 设置。

**请勿同时运行多个美化脚本。** ChatGPT 不定期更新网页结构，可能导致头像或气泡错位。若异常，请先停用其他脚本、刷新，并附匿名诊断提交 Issue。不要上传聊天截图、个人头像或包含敏感内容的控制台日志。

## 🔐 隐私与安全

脚本需要访问 ChatGPT 网页元素来改样式，因此**技术上能读取当前网页内容**；代码本身不调用外部上传接口。只使用 Tampermonkey 的 `GM_getValue`、`GM_setValue`，在扩展本地存储中保存头像、壁纸、主题设置和**不含聊天正文**的短状态快照。详见 [`docs/PRIVACY.md`](docs/PRIVACY.md)。

## 📜 使用许可

[PolyForm Noncommercial 1.0.0](LICENSE)：允许规定范围内的非商业使用、修改、免费再分发，要求保留许可和作者 Required Notice。**未经单独书面授权，不得商用或作为付费服务出售。** 此限制使它不属于严格 OSI 开源。

**Made with ♡ by Soren & Dudusya**  
*Not affiliated with or endorsed by OpenAI.*