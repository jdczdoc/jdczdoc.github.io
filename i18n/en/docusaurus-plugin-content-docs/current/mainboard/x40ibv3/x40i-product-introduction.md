---
sidebar_position: 1
title: Product Introduction
description: x40i Product Introduction
---

# Product Introduction

The X40I development board combines an **X40iCV2 core board and carrier** based on the Allwinner A40I quad-core Cortex-A7 processor. It supports Linux and Android for industrial control, display terminals, multimedia devices and IoT gateways.

| Item | Specification |
| --- | --- |
| CPU | Allwinner A40I, quad-core Cortex-A7, 1.2 GHz |
| Memory | Standard 1 GB DDR3; confirm optional capacities and LPDDR3 configuration for the delivered revision |
| Storage | Standard 8 GB eMMC; other capacities available |
| Power management | AXP221S PMU |
| Board supply | 12 V DC |
| Display | MIPI DSI, RGB/LVDS, Mini HDMI |
| Networking | RTL8211E Gigabit Ethernet; onboard 2.4 GHz SDIO Wi-Fi/BT module |
| USB | Two Type-A USB 2.0 Host ports, one PH-header Host port and one Micro USB OTG port |
| UART | UART0/2/4/5/7; selected ports support RS232/RS485 through resistor configuration |
| Storage expansion | TF card, SATA |
| Multimedia | 24-pin parallel camera, TVIN/CVBS, headphones, microphones and speaker |
| Wireless expansion | 4G module expansion socket and SIM socket |
| Software | Linux 3.10 and Qt 5.4.1; Android 7 SDK |

Memory, storage, wireless module and system versions depend on the delivered configuration. The carrier accepts 12 V; check the matching schematic for core-board and expansion-header voltages.

## Documentation

- [Hardware Resources](./x40i-hardware-resources.md)
- [Hardware Interfaces](./x40i-interface-details.md)

### Linux

- [Linux Build](./linux/x40i-linux-build.md)
- [Qt and Display Configuration](./linux/x40i-linux-qt.md)
- [Root Filesystem and Packages](./linux/x40i-linux-rootfs.md)
- [Linux Partitions and Packaging](./linux/x40i-linux-partitions.md)
- [Linux Camera and Multimedia](./linux/x40i-linux-multimedia.md)
- [Linux Firmware Flashing](./linux/x40i-linux-flashing.md)
- [Linux Troubleshooting](./linux/x40i-linux-troubleshooting.md)

### Android

- [Android Build](./android/x40i-android-build.md)
- [Android User Guide](./android/x40i-android-guide.md)
- [Android Functional Tests](./android/x40i-android-tests.md)
- [Android Drivers and Debug](./android/x40i-android-drivers.md)
- [Android Firmware Flashing](./android/x40i-android-flashing.md)
- [Android Troubleshooting](./android/x40i-android-troubleshooting.md)
