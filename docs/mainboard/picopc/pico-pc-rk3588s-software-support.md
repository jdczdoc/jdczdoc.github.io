---
sidebar_position: 5
title: 软件资源
description: Pico PC RK3588S Android、Debian、Ubuntu、Linux + Qt 驱动支持表
---

# 软件资源

Pico PC RK3588S 主板支持 Android 12、Linux、Ubuntu、Debian 和 Buildroot 等系统。下表整理硬件手册中的驱动支持列表。

| system / driver | Linux+ / Android12 | Linux+ / Debian10 | Linux+ / Ubuntu | Linux+QT |
| --- | --- | --- | --- | --- |
| 7寸MIPI屏(1024*600) | ● | ● | ● | ● |
| 背光驱动 | ● | ● | ● | ● |
| PMIC驱动(RK806) | ● | ● | ● | ● |
| 电容触摸 | ● | ● | ● | ● |
| eMMC驱动 | ● | ● | ● | ● |
| SD卡驱动 | ● | ● | ● | ● |
| ADC驱动 | ● | ● | ● | ● |
| 开关机 | ● | ● | ● | ● |
| 休眠唤醒 | ● |  |  |  |
| 两路USB HOST 2.0驱动 | ● | ● | ● | ● |
| 两路USB HOST 3.0驱动 | ● | ● | ● | ● |
| 一路Type-C驱动 | ● | ● | ● | ● |
| RTC驱动 | ● | ● | ● | ● |
| 音频 | ● | ● | ● | ● |
| 录音 | ● | 不支持 | 不支持 | 不支持 |
| Wi-Fi/BT | ● | ● | ● | ● |
| CSI摄像头驱动 | ● | 不支持 | 不支持 | ● |
| USB口摄像头驱动 | ● | ● | ● | ● |
| 串口 | ● | ● | ● | ● |
| HDMI OUT | ● | ● | ● | ● |
| 千兆以太网 | ● | ● | ● | ● |
| USB鼠标键盘 | ● | ● | ● | ● |


## 支持情况说明

- 7 寸 MIPI 屏、背光、RK806 PMIC、电容触摸、eMMC、SD 卡、ADC、开关机、USB HOST 2.0、USB HOST 3.0、Type-C、RTC、音频、Wi-Fi/BT、USB 摄像头、串口、HDMI OUT、千兆以太网、USB 鼠标键盘在四类系统中均标记为支持。
- 休眠唤醒仅 Android 12 标记为支持。
- 录音仅 Android 12 标记为支持，Debian 10、Ubuntu、Linux + Qt 标记为不支持。
- CSI 摄像头 Android 12 与 Linux + Qt 标记为支持，Debian 10 与 Ubuntu 标记为不支持。
