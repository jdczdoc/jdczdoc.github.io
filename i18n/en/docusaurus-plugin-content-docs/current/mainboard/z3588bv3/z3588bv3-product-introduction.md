---
sidebar_position: 1
title: Product Introduction
description: z3588bv3 specifications and documentation
---

# z3588bv3 Product Introduction

The Z3588 development board uses the Rockchip RK3588 processor and was developed by Shenzhen 9tripod Technology. The pictured board has the PCB marking `LGA3588BV2_20250121`. Check the marking on your board when selecting hardware documentation and firmware.

![Z3588BV3 front board photograph](./z3588bv3-board-front.png)

## Specifications

| Item | Specification |
| --- | --- |
| SoC | Rockchip RK3588, 8 nm |
| CPU | Four Cortex-A76 and four Cortex-A55 cores, specified up to 2.4 GHz |
| GPU / NPU | Arm GPU and 6 TOPS NPU |
| RAM | 8 GB |
| Storage | 128 GB onboard eMMC |
| PMIC | RK806-2 |
| PCB dimensions | 150 mm × 90 mm × 1.6 mm |
| Operating temperature | 0 to 70 °C |
| Storage temperature | -10 to 50 °C |
| Input power | 12 V DC, recommended 12 V / 3 A |

## Interface Overview

- Display and capture: one MIPI DSI interface, HDMI IN and HDMI OUT. Check the port markings and system configuration.
- Camera: two MIPI CSI connectors.
- USB: one USB 2.0 Type-A port, one USB 3.0 Type-A port and one Type-C OTG port.
- Networking: two Gigabit Ethernet ports, RTL8211F via GMAC/RGMII and RTL8111 via PCIe.
- Wireless: VS2275P Wi-Fi 6 and Bluetooth 5.3 module.
- Audio: MIC input, headphone output and stereo speaker connector.
- Expansion: two 2×20 GPIO headers, TF, M.2, fan and RTC battery connectors.

## Documentation

- [Hardware Resources](./z3588bv3-hardware-resources.md)
- [Hardware Interface Definitions](./z3588bv3-interface-details.md)
- [Linux Build and Flashing](./linux/z3588bv3-linux-build-flash.md)
- [Linux Drivers and System Diagnostics](./linux/z3588bv3-linux-drivers.md)
- [Android Build and Flashing](./android/z3588bv3-android-build-flash.md)
- [Android Usage and Functional Checks](./android/z3588bv3-android-usage.md)
