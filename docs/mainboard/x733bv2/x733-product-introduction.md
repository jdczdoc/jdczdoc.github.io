---
title: 产品介绍
sidebar_position: 2
description: X733BV2 开发板与 A733 平台概览
---
# 产品介绍

X733BV2 开发板基于全志 A733 处理器设计。A733 采用 Cortex-A76 与 Cortex-A55 组合的八核 CPU 架构，集成 RISC-V E902 核心，可选 NPU，适用于平板电脑、笔记本、智能显示、视频终端和边缘计算设备。

![X733BV2 开发板](./x733-development-board.png)

## 主要特性

- A733 八核处理器，最高主频约 2 GHz
- 2 GB / 4 GB / 8 GB 内存配置
- 4 GB / 8 GB / 16 GB / 32 GB / 64 GB eMMC 配置
- AXP318W 电源管理芯片，支持动态调频
- 12 V / 3 A 直流输入，同时支持电池供电接口
- HDMI 2.0 OUT 与 HDMI IN；HDMI IN 由 LT6911C 转为 MIPI CSI
- MIPI DSI、eDP 和 MIPI CSI 接口
- 1 路 USB 3.0、4 路 USB 2.0、1 路 Type-C OTG
- 1 路 RTL8211F 千兆以太网
- 板载 AW869A Wi-Fi 6 / Bluetooth 5.2
- TF 卡、M.2 存储扩展
- 双路 MIC、双声道 3 W@8 Ω 扬声器、耳机输出

## 源码命名

在源码、设备树、产品配置和文档目录中统一使用板型名称：

```text
x733bv2
```

源码压缩包可能以 `a733_android13` 或 `x733_android13` 命名，但构建产品和设备树应选择当前 SDK 中的 `x733bv2` 配置。
