---
sidebar_position: 1
title: Product Introduction
description: X6818 development board overview, S5P6818 platform features, and system parameters
---

# Product Introduction

The X6818 development board is based on Samsung S5P6818. Its CPU is a 64-bit ARM Cortex-A53 octa-core processor with a maximum clock of 1.4GHz. The board consists of a stamp-hole core board, a carrier board, and an LCD board. It targets industrial control, power systems, communication, medical devices, media, security, automotive, finance, consumer electronics, handheld devices, game consoles, display control, teaching instruments, POS, advertising players, and multimedia terminals.

X6818 is an upgrade from X4418. The CPU core is upgraded from quad-core Cortex-A9 to octa-core Cortex-A53, while maintaining downward compatibility with X4418CV3. The hardware manual explains that S5P6818 and S5P4418 are mostly identical in process, cache, and pin definition; the main differences are the CPU core and Ethernet capability.

![X6818 board appearance](./x6818-board-overview.png)

## S5P4418 and S5P6818 Comparison

|  | S5P4418 | S5P6818 |
| --- | --- | --- |
| 上市时间 | Oct. 2014 | 2014 |
| 工艺制程 | 28 nm | 28 nm |
| CPU主频 | 1.4 GHz | 1.4 GHz+ |
| 封装尺寸 | 0.65 mm pin pitch, 17 x 17 mm², 513-FCBGA package | 0.65 mm pin pitch, 17 x 17 mm², 513-FCBGA package |
| CPU架构 | Quad-core Cortex-A9 | Octa-core Cortex-A53 |
| 缓存容量 | 32 KB x 4 I/D cache, 1 MB L2 cache | 32 KB x 4 I/D cache, 1 MB L2 cache |
| DDR3接口 | Single-channel 32-bit data bus, up to 800 MHz | Single-channel 32-bit data bus, up to 800 MHz |
| 多媒体解码 | H.263, H.264, MPEG1/2/4, VC1, VP8, Theora, AVS, RV8/9/10, MJPEG | H.263, H.264, MPEG1/2/4, VC1, VP8, Theora, AVS, RV8/9/10, MJPEG |
| 多媒体编码 | H.263, H.264, MPEG4, MJPEG | H.263, H.264, MPEG4, MJPEG |
| 显示接口 | RGB, MIPI, LVDS | RGB, MIPI, LVDS |
| 最大显示分辨率 | 2048 x 1280 | 2048 x 1280 |
| Ethernet connector | Requires address-bus expansion | Integrated Gigabit Ethernet controller |
| GPIO电平 | 3.3 V | 3.3 V |
| ADC | 8-channel 12-bit ADC, 0 to 1.8 V | 8-channel 12-bit ADC, 0 to 1.8 V |
| USB接口 | 1 HOST, 1 HSIC, 1 OTG | 1 HOST, 1 HSIC, 1 OTG |
| 芯片ID | Supports 128-bit unique ID | Supports 128-bit unique ID |


## Feature Highlights

- ARM Cortex-A53 octa-core CPU, 1.4GHz x 8.
- 1GB DDR3, customizable to 2GB DDR3.
- Standard 8GB eMMC, optional 4GB / 8GB / 16GB / 32GB eMMC.
- 24-bit RGB, 8-bit LVDS, MIPI DSI, and mini HDMI display interfaces.
- Three USB HOST ports and one USB OTG port.
- Two RS232 UARTs and three TTL UARTs.
- Two TF-card interfaces, four LED indicators, independent keys, reset key, and software power key.
- External speaker, MIC input, and headphone output.
- PCIe connector for 3G/4G modules.
- Stepless backlight control and 5-point capacitive touch support.
- USB Wi-Fi/BT, G-sensor, and integrated IR receiver support.
- MPEG4, H.263, H.264, and MJPEG video encoding; nearly full-format video decoding.
- High-performance 2D / 3D graphics acceleration.
- RTC time retention.
- Gigabit Ethernet through RTL8211E.
- BT656, BT601, and MIPI camera interfaces.
- GPS, GPRS, USB 3G, USB mouse, and USB keyboard support.

## System and Interface Parameters

| Item | Parameter |
| --- | --- |
| CPU | S5P6818, ARM Cortex-A53 octa-core, 1.4GHz x 8 |
| Memory | 1GB DDR3, customizable to 2GB DDR3 |
| Storage | Standard 8GB eMMC; optional 4GB / 8GB / 16GB / 32GB eMMC |
| PMU | AXP228 PMU |
| Display | 24-bit RGB, 8-bit LVDS, MIPI DSI, mini HDMI, up to 2048 x 1280 |
| Touch | 5-point capacitive touch |
| USB | 3 USB HOST ports, 1 USB OTG port |
| UART | 2 RS232 UARTs, 3 TTL UARTs, independent debug UART |
| Network | Gigabit Ethernet RTL8211E, USB 3G module and PCIe 3G/4G module support |
| Camera | BT656 / BT601 / MIPI camera interfaces |
| Audio | External speaker, MIC input, headphone output |
| Expansion | PCIe, SPI, I2C, UART, ADC, GPIO, GPS, GPRS |
| Other | RTC, G-sensor, integrated IR receiver, buzzer, keys, LEDs |


## Dimensions

- X6818 core board size: 48mm x 68mm.
- X6818 carrier board size: 185mm x 110mm.

## Software Scope

The X6818 documentation includes Android and Linux user manuals. The Android manual covers environment setup, source installation, compilation, flashing, system functions, test application, kernel drivers, and practical projects. The Linux manual covers VMware/Ubuntu setup, Linux + Qt build, flashing, Qt root filesystem, Qt tests, low-level Linux development, ramdisk, Linux application development, and Ubuntu 12.04 evaluation.
