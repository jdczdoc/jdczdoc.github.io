---
title: LRADC 模块概述
sidebar_position: 1
description: LRADC 模块功能、适用范围、源码结构和阅读顺序。
---

# LRADC 模块概述
本页先明确模块边界和平台差异。后续配置示例以 T527 和 Linux 5.15 为主要参考，但最终属性、路径和宏必须以当前 SDK 分支为准。
## 整理依据
- 原始文档：Linux LRADC 开发指南
- 版本：1.4
- 发布日期：2025-10-18
## 适用范围

适用于 Linux 5.10 及以上 `sunxi-lradc.c` 驱动；用于低速按键电阻分压输入。

## 模块能力

- 低速 ADC 按键检测
- 参考电压与 6 位量化
- 多按键电压边界计算
- 采样滤波、input 事件和中断统计

## 典型软件路径

```text
bsp/drivers/input/keyboard/
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
