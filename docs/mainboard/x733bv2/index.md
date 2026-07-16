---
title: X733BV2 开发板
sidebar_position: 1
slug: /mainboard/x733bv2
description: X733BV2/A733 开发板文档中心
---
# X733BV2 开发板

X733BV2 是基于全志 A733 处理器的开发板，面向平板、智能终端、商业显示、视频采集和边缘 AI 应用。本文档包含开发板硬件接口、连接器引脚、硬件设计注意事项，以及 Android 13 的源码编译、固件烧录和常用调试方法。

![X733BV2 开发板](./x733-development-board.png)

## 文档导航

| 分类 | 文档 |
|---|---|
| 硬件 | [产品介绍](./x733-product-introduction.md) · [硬件资源](./x733-hardware-resources.md) · [接口详解](./x733-interface-details.md) |
| 设计 | [接口引脚定义](./x733-pin-definition.md) · [硬件设计](./x733-hardware-design.md) · [配置清单](./x733-configuration-list.md) |
| Android | [编译与烧录](./x733-android-build-flash.md) · [用户指南](./x733-android-user-guide.md) · [测试与驱动](./x733-android-test-driver.md) |

## 快速信息

- 源码板型名称：`x733bv2`
- 处理器：全志 A733，Cortex-A76 + Cortex-A55 八核架构，集成 RISC-V E902
- 主频：最高约 2 GHz，取决于芯片版本与软件配置
- 内存：2 GB / 4 GB / 8 GB
- 存储：板载 eMMC、TF 卡、M.2 扩展
- 开发板尺寸：150 mm × 102 mm × 1.6 mm
- 输入电源：12 V DC，建议 3 A
- 显示：HDMI OUT、eDP、MIPI DSI
- 视频输入：HDMI IN，经 LT6911C 转为 MIPI CSI
- 系统资料：当前提供 Android 13 用户手册；实际系统版本以配套 SDK 和固件为准
