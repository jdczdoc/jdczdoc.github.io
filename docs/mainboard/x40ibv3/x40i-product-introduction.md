---
sidebar_position: 1
title: 产品介绍
description: x40i 产品介绍
---

# 产品介绍

X40I 开发板采用 **X40iCV2 核心板 + 底板**结构，基于全志 A40I 四核 Cortex-A7 处理器，支持 Linux 与 Android，适用于工业控制、显示终端、音视频设备和物联网网关。

| 项目 | 参数 |
| --- | --- |
| CPU | 全志 A40I，四核 Cortex-A7，1.2 GHz |
| 内存 | 标配 1 GB DDR3；可选容量及 LPDDR3 配置按交付版本确认 |
| 存储 | 标配 8 GB eMMC，支持其他容量选配 |
| 电源管理 | AXP221S PMU |
| 主板供电 | 12 V DC |
| 显示 | MIPI DSI、RGB/LVDS、Mini HDMI |
| 网络 | RTL8211E 千兆以太网；板载 2.4 GHz SDIO Wi-Fi/BT 模组 |
| USB | 2 路 Type-A USB 2.0 Host、1 路 PH 座 Host、1 路 Micro USB OTG |
| 串口 | UART0/2/4/5/7；部分可经电阻配置为 RS232/RS485 |
| 存储扩展 | TF 卡、SATA |
| 音视频 | 24-pin 并口摄像头、TVIN/CVBS、耳机、MIC、喇叭 |
| 无线扩展 | 4G 模组扩展座及 SIM 卡座 |
| 软件 | Linux 3.10、Qt 5.4.1；Android 7 SDK |

内存、存储、无线模组及系统版本以实际交付配置为准。主板使用 12 V 输入；核心板电源和扩展座电压应按对应原理图核对。

## 文档导航

- [硬件资源](./x40i-hardware-resources.md)
- [硬件接口](./x40i-interface-details.md)

### Linux

- [Linux 编译](./linux/x40i-linux-build.md)
- [Qt 与显示配置](./linux/x40i-linux-qt.md)
- [根文件系统与软件包](./linux/x40i-linux-rootfs.md)
- [Linux 分区与打包](./linux/x40i-linux-partitions.md)
- [Linux 摄像头与多媒体](./linux/x40i-linux-multimedia.md)
- [Linux 固件烧录](./linux/x40i-linux-flashing.md)
- [Linux 故障排查](./linux/x40i-linux-troubleshooting.md)

### Android

- [Android 编译](./android/x40i-android-build.md)
- [Android 使用指南](./android/x40i-android-guide.md)
- [Android 功能测试](./android/x40i-android-tests.md)
- [Android 驱动与调试](./android/x40i-android-drivers.md)
- [Android 固件烧录](./android/x40i-android-flashing.md)
- [Android 故障排查](./android/x40i-android-troubleshooting.md)
