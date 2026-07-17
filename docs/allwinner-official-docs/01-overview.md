---
title: 文档说明
sidebar_position: 1
description: 全志平台基础开发文档的定位、范围和使用方式，以T527 Android 13和Linux 5.15为主要示例。
---

# 全志基础开发文档说明

本组文档面向全志平台的板级适配、驱动配置和系统编译工作，并以 **T527、Android 13、Linux 5.15、Longan 和 BSP 独立仓库**作为主要示例。T527 仅用于统一说明目录和命令，具体路径、配置项和测试方法应以当前芯片及 SDK 分支为准。

本文档不是官方资料的逐页转换，而是把常用内容整理成可以直接执行的开发流程。不同 SDK 分支的目录和命令可能有小幅差异，遇到差异时应先通过 `find`、`grep` 和构建系统实际输出确认。

## 文档目标

完成本组文档后，应能够理解并执行以下工作：

1. 判断代码应该修改在 Android、Longan、BSP、device 还是 kernel 中。
2. 找到目标平台的 SoC 级和板级设备树，并能以 T527 为例理解两者关系。
3. 通过 Longan 的 `menuconfig` 修改并保存内核配置。
4. 单独编译 bootloader、kernel 或 Android 模块。
5. 完成 Android 13 固件编译、打包和板端验证。
6. 按统一模板继续增加 UART、I2C、SPI、GPIO、显示、音频和摄像头文档。

## 推荐阅读顺序

- [SDK目录与职责](./02-sdk-framework.md)
- [Android 13系统架构](./03-android13-architecture.md)
- [Longan配置与编译](./04-longan-build.md)
- [BSP独立仓库](./05-bsp-repository.md)
- [设备树配置](./06-device-tree.md)
- [Kernel配置](./07-kernel-configuration.md)
- [Android 13编译](./08-android13-build.md)
- [编译与打包流程](./09-build-and-pack.md)
- [板端调试与验证](./10-debugging-and-verification.md)
- [基础功能开发流程](./functions/01-common-development-flow.md)

## 统一约定

后续功能文档统一回答以下问题：

- 驱动源码在哪里。
- 设备树在哪里修改。
- 设备树需要配置哪些属性。
- `menuconfig` 需要打开哪个选项。
- 对应的 `CONFIG_` 宏是什么。
- 修改后如何保存配置。
- 如何单独编译和打包。
- 板端如何确认驱动已经生效。
- 常见异常如何定位。

## 示例变量

文档中使用以下占位符：

| 占位符 | 含义 |
|---|---|
| `<ANDROID_TOP>` | Android 13 源码根目录 |
| `<LONGAN>` | `<ANDROID_TOP>/longan` |
| `<BOARD>` | 当前板级方案；T527 示例包括 `demo`、`demo_car`、`demo_linux_aiot` 或公司自定义板型 |
| `<PRODUCT>` | Android lunch 产品名 |
| `<OUT>` | Android 编译输出目录 |

实际操作前先执行：

```bash
cd <ANDROID_TOP>
pwd
ls
```

确认根目录中存在 `build/`、`device/`、`frameworks/`、`vendor/` 和 `longan/` 等目录。
