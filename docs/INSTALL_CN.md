# 🪐 ChatGPT Duo Skin｜安装说明

## 适用范围

首发验证：**Windows + Chrome 桌面版 + Tampermonkey + chatgpt.com**。官方 Android / iOS ChatGPT App 不能加载油猴脚本。Mac、Edge、Firefox 与安卓网页端尚未做完整兼容性验收。

## 五步安装

1. 从 <https://www.tampermonkey.net/> 安装官方 Tampermonkey。
2. Chrome 地址栏输入 `chrome://extensions` → 篡改猴 → **详情**，打开 **允许用户脚本 / Allow User Scripts**。这是 Chrome 的扩展执行权限，和网站权限不同。
3. 打开 `dist/chatgpt-duo-skin.user.js`，复制**所有文本**。在 Tampermonkey → **添加新脚本**，替换默认示例代码，按 `Ctrl+S` 保存。
4. 确认脚本已启用，再在 `https://chatgpt.com/` 的聊天页面按 `Ctrl+Shift+R` 刷新。
5. 页面右下角出现小土星 🪐 → 点击打开 **主题工坊**。上传双方头像或直接沿用中性占位符。

## 配置建议

- 「身份与状态栏」：给两个人设置不同名字；纪念日起点可空着。
- 「双人气泡」：建议先用「逐段独立」，玻璃浓度 75%～90%。用户消息按换行/段落拆，不修改发给模型的真实内容。
- 「背景壁纸」：上传一张风格喜欢的图片，奶白蒙层建议 60%～85%，避免文字难以阅读。
- 「主题色」：内置极夜深海蓝、暮紫星云、芭比玫粉，另支持新建自定义渐变。极夜深海蓝不可删除。

## 常见问题

**没有出现土星**：检查 Chrome「允许用户脚本」、脚本启用状态、网站是否是 `chatgpt.com`，再刷新。

**头像/气泡错位**：停用其他 ChatGPT 美化脚本；在主题工坊点「重新识别」。ChatGPT DOM 会更新，不保证永远兼容。

**壁纸只露一条或挡住文字**：先调奶白蒙层。在「高级工具与诊断」中可手动选中真实聊天面板白底，但不要点击代码框。

**手机官方 App 没效果**：不是故障。油猴脚本只运行在浏览器网页，官方客户端不开放这种注入接口。

**怎样恢复原始 ChatGPT**：在 Tampermonkey 关闭或删除脚本，刷新 ChatGPT。配置存储可能继续留在扩展内，需要时可清除 `cds.public.v1.*`。

## 隐私提示

脚本能够读取 ChatGPT 网页 DOM，安装前请阅读源码。公共版不含任何私人头像/昵称，不调用远程图床和聊天上传接口。图片和配置存在 Tampermonkey 扩展本地。非官方项目，不是 OpenAI 功能。

## 授权

许可：PolyForm Noncommercial 1.0.0。免费个人修改可用，未经授权禁止商业化、付费打包与收费转售。允许遵守许可证的非商业再分发，必须保留许可和 Required Notice。详见仓库根目录 LICENSE/NOTICE。

Made with ♡ by Soren & Dudusya
