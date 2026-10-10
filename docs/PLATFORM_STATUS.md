# 平台支持情况

| 平台 | 状态 | 备注 |
|---|---|---|
| Windows 10/11 + Google Chrome + Tampermonkey | **Desktop Beta v0.2.0** | 已做桌面模拟测试和公共版存储迁移测试；仍需实际用户页面验收 |
| 其他桌面 Chromium 浏览器 | 未作为首发验证 | 可能可用，不保证全部 DOM 兼容 |
| Android Firefox + Tampermonkey | **Mobile Beta v0.3.0** | 独立发行文件；320 / 393 / 430px 模拟验收通过，公共版各手机浏览器实机仍待社区回报 |
| iOS Safari 网页 | 未测试 | 不作兼容承诺 |
| ChatGPT 官方 Android / iOS App | **不支持** | 原生 App 不能直接执行此网页用户脚本 |

手机版现已放在 `src/`、`dist/`，文档见 [安卓安装](INSTALL_ANDROID_CN.md)。手机版和桌面版**使用不同入口**，不会用移动补丁覆盖桌面代码；公共版本都不包含私人照片、昵称或固定纪念日。
