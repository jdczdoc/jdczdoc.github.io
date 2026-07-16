---
sidebar_position: 1
title: 产品介绍
description: i6818 开发板简介、功能特性和规格概览
---

# 产品介绍

i6818 开发板采用 S5P6818 芯片设计。S5P6818 为 64 位 Cortex-A53 八核架构，和 S5P4418 在工艺、二级缓存、管脚定义等方面保持兼容，主要差异在 ARM 内核架构。九鼎创展在硬件上采用 AXP228 电源管理芯片，软件上搭载 Android 5.1 操作系统。

i6818 开发板不是传统裸露 PCBA 形态，而是一体成型的 8 寸平板形态。外围提供以太网、三路 USB HOST、两路 GPIO 扩展接口、mini HDMI、TF 卡、OTG、耳机座、DC 座和复位孔。底板默认板载 Wi-Fi、蓝牙、摄像头、HDMI、音频、千兆以太网、双喇叭和 5000mAh 电池。

i6818 开发板及 i6818CV3 核心板适用于工控、电力、通信、医疗、媒体、安防、车载、金融、消费电子、手持设备、游戏机、显示控制和教学仪器等场景。

![i6818 开发板外观](./i6818-board-overview.png)

## 功能特性

- 采用双 100PIN 板对板连接器接口的核心板，核心板尺寸 50mm × 40mm。
- CPU：ARM Cortex-A53 1.4GHz 八核。
- 内存：1GB DDR3，可定制 2GB DDR3。
- Flash：支持 4GB / 8GB / 16GB / 32GB eMMC 可选，标配 8GB eMMC。
- 标配 8 寸 LVDS 接口 1024 × 768 高清 IPS 屏。
- 外置三路 USB HOST 2.0 接口，并提供 USB OTG 接口。
- 预留五路 TTL UART、一路 I2C、一路 PWM，可通过 USB 接口转接板扩展。
- 内置 Wi-Fi / BT、G-sensor、双立体声喇叭、MIC，外置耳机输出。
- 支持千兆有线以太网、mini HDMI、TF 卡、MIPI 摄像头和 USB 鼠标键盘。
- 默认内置 500 万像素 MIPI 摄像头，支持自动对焦。

## 规格概览

| 项目 | 参数 |
| --- | --- |
| SoC | Samsung / Nexell S5P6818 |
| CPU | ARM Cortex-A53 八核，1.4GHz |
| 内存 | 1GB DDR3，支持定制 2GB DDR3 |
| 存储 | 标配 8GB eMMC，支持 4GB / 8GB / 16GB / 32GB eMMC |
| 显示 | 8 寸 LVDS 1024 × 768 IPS 屏，另支持 RGB / MIPI / LVDS |
| Camera | 内置 500 万像素 MIPI 摄像头，支持自动对焦 |
| 网络 | 内置 Wi-Fi / BT，千兆有线以太网 |
| USB | 3 路 USB HOST 2.0，1 路 USB OTG |
| 音频 | 内置双喇叭、MIC，外置耳机接口 |
| 尺寸 | 核心板 50mm × 40mm；开发板 201.9mm × 150.8mm × 17mm |
| 供电 | 5V DC 输入，单节锂电池接口 |


## S5P4418 / S5P6818 对照

|  | S5P4418 | S5P6818 |
| --- | --- | --- |
| 上市时间 | 2014年10月 | 2014年 |
| 工艺制程 | 28nm | 28nm |
| CPU主频 | 1.4G | 1.4G |
| 封装尺寸 | 0.65mm引脚间距，17*17mm2 513-FCBGA封装 | 0.65mm引脚间距，17*17mm2 513-FCBGA封装 |
| CPU架构 | Cortex-A9四核 | Cortex-A53八核 |
| 缓存容量 | 32KB*4 I/D缓存，1MB二级缓存 | 32KB*4 I/D缓存，1MB二级缓存 |
| DDR3接口 | 单通道32位数据总线，高达800MHz工作频率 | 单通道32位数据总线，高达800MHz工作频率 |
| 多媒体解码 | H.263，H.264，MPEG1，MPEG2，MPEG4，VC1，VP8，Theora，AVS，RV8/9/10，MJPEG(几乎全格式) | H.263，H.264，MPEG1，MPEG2，MPEG4，VC1，VP8，Theora，AVS，RV8/9/10，MJPEG(几乎全格式) |
| 多媒体编码 | H.263，H.264，MPEG4，MJPEG | H.263，H.264，MPEG4，MJPEG |
| 显示接口 | RGB，MIPI，LVDS | RGB，MIPI，LVDS |
| 最大显示分辨率 | 2048*1280 | 2048*1280 |
| 以太网接口 | 需通过地址总线扩展 | 集成千兆以太网控制器 |
| GPIO电平 | 3.3V | 3.3V |
| ADC | 8路12 bit 0~1.8V | 8路12 bit 0~1.8V |
| USB接口 | 1路HOST，1路HSIC，1路OTG | 1路HOST，1路HSIC，1路OTG |
| 芯片ID | 支持128BIT唯一ID号 | 支持128BIT唯一ID号 |


## 版本信息

| 版本号 | 日期 | 作者 | 描述 |
| --- | --- | --- | --- |
| Rev.01 | 2017-6-30 | lqm | 原始版本 |

