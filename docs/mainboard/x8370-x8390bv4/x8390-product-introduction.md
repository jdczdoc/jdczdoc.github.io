---
title: 产品介绍
sidebar_position: 1
description: X8390/X8370开发板处理器、硬件规格、接口和结构参数。
---

# 产品介绍

## 产品概述

X8390开发板基于联发科MT8390平台设计。MT8390与MT8370采用PIN兼容封装，因此同一套核心板和底板可根据项目需求配置不同处理器。

- **MT8390（Genio 700）**：6nm工艺，2个Cortex-A78性能核与6个Cortex-A55效率核，集成Mali-G57 GPU和多核AI处理器，面向边缘AI、智能家居、交互式零售、工业和商业设备。
- **MT8370（Genio 510）**：6nm工艺，2个Cortex-A78与4个Cortex-A55，集成Mali-G57 MC2、APU、DSP和HEVC编码引擎，支持双显示、摄像头和高速扩展接口。

![X8390开发板正面](./x8390-board-front.jpg)

### 开发板背面

![X8390开发板背面](./x8390-board-back.jpg)

## 系统配置

| 项目 | 参数 |
| --- | --- |
| CPU | MT8390；同底板兼容MT8370核心板 |
| MT8390 CPU | 2 × Cortex-A78 + 6 × Cortex-A55 |
| 主频 | Cortex-A78 2.2GHz；Cortex-A55 2.0GHz |
| RAM | 2GB / 4GB / 8GB |
| ROM | 4GB / 8GB / 16GB / 32GB / 64GB eMMC |
| 电源IC | MT6365 |

## 接口参数

| 接口 | 参数 |
| --- | --- |
| 电源 | 12V / 3A |
| 显示 | 1路MIPI DSI、1路eDP、1路HDMI OUT |
| 触摸 | 电容触摸，I2C接口 |
| 音频 | I2S / PCM / PDM、耳机、Line In、喇叭、数字麦克风 |
| SD卡 | 1路SDIO，板载TF卡座 |
| eMMC | 核心板板载，管脚不在底板单独引出 |
| 以太网 | 1路千兆以太网 |
| USB | 1路USB2.0 Type-A、1路全功能Type-C、1路Micro USB OTG |
| UART | 2路TTL串口 |
| Camera | 1路MIPI CSI连接器 |
| PCIe | 1路扩展接口 |
| Wi-Fi/BT | M.2 AW-CB451NF，支持Wi-Fi 6和Bluetooth 5.0 |

## 结构参数

| 项目 | 参数 |
| --- | --- |
| 开发板尺寸 | 145mm × 90mm × 1.6mm |
| 工作温度 | 0℃～70℃ |
| 储存温度 | -10℃～50℃ |

![X8390开发板尺寸图](./x8390-board-size.png)
