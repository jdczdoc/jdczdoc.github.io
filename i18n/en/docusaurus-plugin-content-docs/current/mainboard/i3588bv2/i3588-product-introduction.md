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
| Main frequency | Quad-core A76 + Quad-core A55(2.4GHz) |
| memory/storage | 4G&16G or 8G&32G optional |
| PowerIC | Using RT806, Supported dynamic FM, etc. |


| LCD interface | Supported MIPI, EDP, and HDMI interface output at the same time; the maximum supported is 6 channels of simultaneous display and 4 channels of separate display. |
|---|---|
| Touch interface | Capacitive touch, can use USB or I2C interface touch |
| Audio Interface | IIS/PCM/TDM interface |
| SPDIF interface | 2-way 8-channel optical audio output interface |
| SD card interface | 2 SDIO output channels |
| emmc interface | Onboard emmc interface, no pins are lead out separately |
| Ethernet Interface | Dual Gigabit Ethernet Interface |
| USB HOST2.0 interface | 2-way HOST2.0 |
| USB HOST3.0 interface | 2-way USB OTG 3.0/2.0/TypeC |
| UART interface | 10-channel serial port, Supported serial port with flow control |
| PWM interface | 16 channels of PWM output |
| IIC interface | 9 channels IIC output |
| SPI interface | 5 SPI outputs |
| ADC interface | 8 ADC outputs |
| CAN interface | 3 channels CAN output |
| Camera interface | 6 CSI inputs |
| HDMI interface | 2 channels HDMI2.1 TX, 1 channel HDMI RX2.0 |
| PCIE interface | PCIe3.0 (2x2,1x4,4x1) |
| SATA interface | 2x SATA3.3/PCIe2.1 |


| 4VInput Voltage | 4V/5A(Recommended4V/8Aenter) |
|---|---|
| RTCInput Voltage | 2.5 to 3V/100uA, can be powered by an external button battery |
| Output Voltage | 3.3V/2A，1.8V/2A(Can be used for backplane power supply) |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~50 degrees |


| Driver | linux5.1+ android12 | linux5.1+ debain10 | linux5.1+ ubuntu | linux5.1+ QT |
|---|---|---|---|---|
| 7-inch MIPI screen (1024*600) | ● | Planned | Planned | Planned |
| PMIC driver (RK806) | ● | Planned | Planned | Planned |
| capacitive touch | ● | Planned | Planned | Planned |
| EMMC driver | ● | Planned | Planned | Planned |
| SD card driver | ● | Planned | Planned | Planned |
| Independent buttons | ● | Planned | Planned | Planned |
| ADC driver | ● | Planned | Planned | Planned |
| Turn on and off | ● | Planned | Planned | Planned |
| wake up from sleep | ● | Planned | Planned | Planned |
| Two-way USB HOST2.0 driver | ● | Planned | Planned | Planned |
| All the way USB HOST3.0 driver | ● | Planned | Planned | Planned |
| All the way TypeC driver | ● | Planned | Planned | Planned |
| PCIE bus driver | ● | Planned | Planned | Planned |
| SATA driver | ● | Planned | Planned | Planned |
| RTC driver | ● | Planned | Planned | Planned |
| Audio | ● | Planned | Planned | Planned |
| recording | ● | Not supported | Not supported | Planned |
| WIFI6/BT5.0 | ● | Planned | Planned | Planned |
| CSI camera driver | Planned | Not supported | Not supported | Planned |
| USB mouth camera driver | ● | Planned | Planned | Planned |
| serial port | ● | Planned | Planned | Planned |
| CAN bus | ● | Planned | Planned | Planned |
| HDMI OUT | ● | Planned | Planned | Planned |
| HDMI IN | Planned | Planned | Planned | Planned |
| Dual Gigabit Ethernet | ● | Planned | Planned | Planned |
| USB mouse keyboard | ● | Planned | Planned | Planned |


## Related Pages

- [Hardware Resources](./i3588-hardware-resources)
- [Interface Details](./i3588-interface-details)
- [Development Environment](./i3588-development-environment)
- [Android Build and Flash](./i3588-android-build-flash)
- [Linux Build and Flash](./i3588-linux-build-flash)
