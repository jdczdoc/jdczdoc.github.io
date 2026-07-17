---
title: USB 3.0 模块概述
sidebar_position: 1
description: USB 3.0 模块功能、适用范围、源码结构和阅读顺序。
---

# USB 3.0 模块概述
本页先明确模块边界和平台差异。后续配置示例以 T527 和 Linux 5.15 为主要参考，但最终属性、路径和宏必须以当前 SDK 分支为准。
## 整理依据
- 原始文档：Linux USB 3.0 开发指南
- 版本：1.8
- 发布日期：2025-10-20
## 适用范围

T527 Linux 5.10/5.15 在适用列表中。覆盖 xHCI、DWC3、DRD、Type-C、Gadget、U2/U3 信号和性能测试。

## 模块能力

- xHCI Host 与 DWC3 Device/DRD
- USB2 PHY、SuperSpeed PHY/ComboPHY 与 Type-C mux
- SuperSpeed Gadget 和复合功能
- DWC3/xHCI 调试、U2/U3 信号测试与性能分析

## 典型软件路径

```text
kernel/linux-5.15/drivers/usb/
bsp/drivers/usb/
bsp/configs/linux-5.15/*.dtsi
device/config/chips/t527/configs/<BOARD>/linux-5.15/board.dts
```
## 配置前检查

1. 根据原理图确认接口编号、引脚、电压域、供电、复位和中断。
2. 在最终 SoC dtsi 中确认控制器 label、compatible、clock/reset 和默认状态。
3. 在板级 `board.dts` 中只覆盖板级差异，不复制整段 SoC 资源。
4. 通过当前驱动源码确认属性名称、单位和默认值。
5. 记录修改前后的 DTB、defconfig 和板端日志，便于回退。
## 本目录

- [模块配置](./02-configuration.md)
- [开发与测试](./03-development-and-testing.md)
- [调试与常见问题](./04-debugging-and-faq.md)
