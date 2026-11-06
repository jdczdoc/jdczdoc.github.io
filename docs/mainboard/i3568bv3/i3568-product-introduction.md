---
sidebar_position: 1
title: 产品介绍
description: i3568bv3 产品介绍
---

# 产品介绍

I3568BV3 由 X3568CV4 核心板与底板组成，采用 RK3568 或 RK3568B2 四核 Cortex-A55 处理器，主频最高 2 GHz。主板支持 Android 11 与 Linux 4.19 平台，可用于显示终端、工业控制和多媒体设备。

| 项目 | 规格 |
| --- | --- |
| 内存 | 标配 4 GB DDR4，支持 LPDDR4/LPDDR4X 配置，最高 8 GB |
| 存储 | 标配 16 GB eMMC，支持 TF 和 SATA 扩展 |
| 供电 | 主板 12 V DC 输入，核心板使用 RK809 PMU |
| 显示 | HDMI 2.0、DSI/LVDS、LVDS、eDP，支持电容触摸 |
| 摄像头 | 30-pin MIPI CSI 连接器 |
| USB | 2 路 USB 3.0 Host、3 路 USB 2.0 Host、Micro USB OTG |
| 网络 | 1 路千兆以太网、2.4/5 GHz SDIO Wi-Fi/蓝牙 |
| 扩展 | UART2 调试、UART3/4/9、CAN、I2C、ADC、GPIO |
| 音频与控制 | 耳机、喇叭、板载麦克风、RTC、红外、外接按键 |

内存、存储、无线模组和系统以实际交付配置为准。Linux 固件可采用 Buildroot、Debian 或 Ubuntu 等方案。显示屏、摄像头及其他外设需与实际固件的驱动配置匹配。

## 文档入口

- [硬件资源](./i3568-hardware-resources.md)
- [硬件接口](./i3568-interface-details.md)
- [Linux 编译](./linux/i3568-linux-build.md)
- [Android 编译](./android/i3568-android-build.md)
