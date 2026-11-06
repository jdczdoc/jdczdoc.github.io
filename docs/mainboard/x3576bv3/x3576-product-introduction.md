---
sidebar_position: 1
title: 产品介绍
description: x3576bv3 产品介绍
---

# 产品介绍

X3576BV3 是基于瑞芯微 RK3576 的八核开发板，支持 Android 14 和 Linux。主板提供 HDMI 输入与输出、MIPI 显示与摄像头接口，适合边缘计算、智能终端和多媒体应用。

| 项目 | 规格 |
| --- | --- |
| 处理器 | RK3576，4× Cortex-A72 + 4× Cortex-A53，手册配置主频 1.8 GHz |
| 内存 | 2 / 4 / 8 GB |
| 存储 | 4 / 8 / 16 / 32 / 64 GB eMMC，支持 TF 卡 |
| 供电 | 12 V DC，建议 12 V / 3 A 适配器，RK806-S PMIC |
| 显示与采集 | 1 路 MIPI DSI，最高 2K@60 Hz，另有 HDMI OUT、HDMI IN 和 2 路 MIPI CSI |
| 网络 | RTL8211F 千兆网口、VS2275P Wi-Fi 6 / 蓝牙，PCIe 扩展座配 SIM 卡座 |
| USB | 1 路 USB 3.0 Host、5 路 USB 2.0 Host、Type-C OTG |
| 扩展 | TTL 调试与扩展串口、RS232、GPIO、ADC、红外、触摸及风扇 |
| 音频 | 耳机、LINE IN、板载麦克风、双路 0.5 W 喇叭输出 |

内存、存储及外设驱动以实际板卡和固件版本为准。

## 文档入口

- [硬件资源](./x3576-hardware-resources.md)
- [硬件接口](./x3576-interface-details.md)
- [板载接口引脚](./x3576-connector-pins.md)
- [Linux 编译](./linux/x3576-linux-build.md)
- [Android 编译](./android/x3576-android-build.md)
