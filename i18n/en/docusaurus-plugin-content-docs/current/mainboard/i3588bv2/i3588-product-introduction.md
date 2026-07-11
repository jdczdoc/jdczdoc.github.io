---
sidebar_position: 1
title: Product Introduction
description: I3588 mainboard product introduction, features, specifications, and software resources
---

# Product Introduction

## Overview

The I3588 mainboard is based on the Rockchip RK3588 platform. It expands display, camera, network, audio, storage, debug, and high-speed interfaces from the I3588 core board, and is suitable for RK3588 platform evaluation, system porting, driver debugging, and application development.

## Features

- Based on the Rockchip RK3588 high-performance processor platform.
- Provides rich display, camera, network, audio, storage, and high-speed expansion interfaces.
- Supports Android, Linux, Ubuntu, and Debian software platforms.
- Supports dual Gigabit Ethernet, SATA, PCIe, USB3.0, HDMI, MIPI, EDP, and other high-speed interfaces.
- Suitable for product evaluation, embedded development, driver debugging, and multimedia applications.

## Core Board Features

- Compact core board design with rich GPIO resources.
- Uses Rockchip RK806 PMU for stable and cost-effective power management.
- Uses LPDDR4/LPDDR4X memory design.
- Supports power sleep and wake-up.
- Supports Android12, Linux, Debian, and Ubuntu systems.
- Supports stable long-term operation in embedded application scenarios.

## Appearance and Structure



## Specifications

| CPU | RK3588 |
|---|---|
| 主频 | 四核A76 +四核A55(2.4GHz) |
| 内存/存储器 | 4G&amp;16G或8G&amp;32G可选 |
| PowerIC | 使用RT806，Supported动态调频等 |


| LCD接口 | 同时Supported MIPI、EDP、HDMI接口输出；最<br />大Supported6路同显，4路异显 |
|---|---|
| Touch接口 | 电容触摸，可使用USB或I2C接口触摸 |
| Audio Interface | IIS/PCM/TDM接口 |
| SPDIF接口 | 2路8通道光纤音频输出接口 |
| SD卡接口 | 2路SDIO输出通道 |
| emmc接口 | 板载emmc接口，管脚不另外引出 |
| Ethernet Interface | 双千兆Ethernet Interface |
| USB HOST2.0接口 | 2路HOST2.0 |
| USB HOST3.0接口 | 2路USB OTG 3.0/2.0/TypeC |
| UART接口 | 10路串口，Supported带流控串口 |
| PWM接口 | 16路PWM输出 |
| IIC接口 | 9路IIC输出 |
| SPI接口 | 5路SPI输出 |
| ADC接口 | 8路ADC输出 |
| CAN接口 | 3路CAN输出 |
| Camera接口 | 6路CSI输入 |
| HDMI接口 | 2路HDMI2.1 TX，1路HDMI RX2.0 |
| PCIE接口 | PCIe3.0 (2x2,1x4,4x1) |
| SATA接口 | 2x SATA3.3/PCIe2.1 |


| 4VInput Voltage | 4V/5A(推荐使用4V/8A输入) |
|---|---|
| RTCInput Voltage | 2.5到3V/100uA，外接纽扣电池供电即可 |
| Output Voltage | 3.3V/2A，1.8V/2A(可用于底板供电) |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


| Driver | linux5.1+ android12 | linux5.1+ debain10 | linux5.1+ ubuntu | linux5.1+ QT |
|---|---|---|---|---|
| 7寸MIPI屏(1024*600) | ● | Planned | Planned | Planned |
| PMIC驱动(RK806) | ● | Planned | Planned | Planned |
| 电容触摸 | ● | Planned | Planned | Planned |
| EMMC驱动 | ● | Planned | Planned | Planned |
| SD卡驱动 | ● | Planned | Planned | Planned |
| 独立按键 | ● | Planned | Planned | Planned |
| ADC驱动 | ● | Planned | Planned | Planned |
| 开关机 | ● | Planned | Planned | Planned |
| 休眠唤醒 | ● | Planned | Planned | Planned |
| 两路USB HOST2.0驱动 | ● | Planned | Planned | Planned |
| 一路USB HOST3.0驱动 | ● | Planned | Planned | Planned |
| 一路TypeC驱动 | ● | Planned | Planned | Planned |
| PCIE总线驱动 | ● | Planned | Planned | Planned |
| SATA驱动 | ● | Planned | Planned | Planned |
| RTC驱动 | ● | Planned | Planned | Planned |
| 音频 | ● | Planned | Planned | Planned |
| 录音 | ● | Not supported | Not supported | Planned |
| WIFI6/BT5.0 | ● | Planned | Planned | Planned |
| CSI摄相头驱动 | Planned | Not supported | Not supported | Planned |
| USB口摄相头驱动 | ● | Planned | Planned | Planned |
| 串口 | ● | Planned | Planned | Planned |
| CAN总线 | ● | Planned | Planned | Planned |
| HDMI OUT | ● | Planned | Planned | Planned |
| HDMI IN | Planned | Planned | Planned | Planned |
| 双路千兆以太网 | ● | Planned | Planned | Planned |
| USB鼠标键盘 | ● | Planned | Planned | Planned |


## Related Pages

- [Hardware Resources](./i3588-hardware-resources)
- [Interface Details](./i3588-interface-details)
- [Development Environment](./i3588-development-environment)
- [Android Build and Flash](./i3588-android-build-flash)
- [Linux Build and Flash](./i3588-linux-build-flash)
