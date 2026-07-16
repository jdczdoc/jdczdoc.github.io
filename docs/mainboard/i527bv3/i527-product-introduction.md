---
title: 产品介绍
sidebar_position: 2
description: I527BV3 开发板与 X527CV2 核心板概览
---
# 产品介绍

I527BV3 开发板基于全志 T527/A527 系列处理器设计，搭载 X527CV2 核心板。核心板集成处理器、LPDDR4X、eMMC 与 AXP717B 电源管理单元；底板引出显示、网络、USB、音频、通信、摄像头和存储扩展接口。

![I527BV3 开发板](./i527-development-board.jpeg)

## 开发板特性

- 尺寸：150 mm × 102 mm × 1.6 mm
- 12 V 直流供电，建议使用 12 V / 3 A 适配器
- 1 路千兆以太网，PHY 为 RTL8211F
- 1 路 USB 3.0、2 路 USB 2.0（双层座，经过 HUB）
- 1 路 HDMI OUT，1 路 HDMI IN；HDMI IN 由 LT6911C 转换为 MIPI CSI
- 1 路 eDP、2 路 LVDS，其中一路与 MIPI DSI 复用
- 1 路 MIPI CSI 摄像头接口
- 2 路 CAN、1 路 RS485、1 路 RS232、2 路调试串口
- 板载 AW869A 双频 Wi-Fi 6 / Bluetooth 5.2 模组
- 支持 TF 卡、PCIe 4G 扩展和 M.2 存储扩展
- 双路 0.5 W 扬声器输出、MIC、耳机和 LINE IN

## X527CV2 核心板

![X527CV2 核心板](./i527-core-board.png)

| 项目 | 规格 |
|---|---|
| CPU | T527/T527N/A527 系列，Arm Cortex-A55 |
| 主频 | 最高约 2.0 GHz，取决于芯片型号与系统配置 |
| 内存 | 2 GB / 4 GB LPDDR4X |
| 存储 | 板载 eMMC，多容量可选 |
| PMIC | AXP717B |
| 尺寸 | 55 mm × 55 mm × 1.2 mm |
| 封装 | 200 PIN 邮票孔，1.0 mm 间距 |

## 源码命名

I527BV3 在源码、设备树、产品配置和文档目录中统一使用板型名称：

```text
i527bv3
```

源码压缩包或仓库名称可能包含 `x527`/`t527`，但选择产品配置、设备树和输出目录时应以当前 SDK 中的 `i527bv3` 为准。
