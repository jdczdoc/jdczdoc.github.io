---
title: TWI / I2C 模块概述
sidebar_position: 1
description: TWI / I2C 模块功能、适用范围、源码结构和阅读顺序。
---

# TWI / I2C 模块概述
本页先明确模块边界和平台差异。后续配置示例以 T527 和 Linux 5.15 为主要参考，但最终属性、路径和宏必须以当前 SDK 分支为准。
## 整理依据
- 原始文档：Linux TWI / I2C 开发指南
- 版本：1.3
- 发布日期：2023-11-17
## 适用范围

原指南主要覆盖 Linux 4.9/5.4。T527 Linux 5.15 的节点、Kconfig 和 DMA 属性必须以当前 BSP 源码为准，本文给出迁移与验证方法。

## 模块能力

- I2C/TWI master 与 slave 模式
- engine 与 drv 传输模式、DMA 和总线速率
- 内核 I2C core 与 `/dev/i2c-*` 接口
- i2c-tools 和控制器调试节点

## 典型软件路径

```text
bsp/drivers/i2c/ 或 kernel/linux-5.15/drivers/i2c/busses/
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
