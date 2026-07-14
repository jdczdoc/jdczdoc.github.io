---
sidebar_position: 1
title: Product Introduction
description: X3288BV4 mainboard introduction, core board features, and hardware specifications
---

# Product Introduction

X3288BV4 is a mainboard based on the Rockchip RK3288 platform. The core board is X3288CV4. RK3288 integrates a quad-core ARM Cortex-A17 CPU with a clock rate up to 1.8 GHz, and is suitable for multimedia terminals, industrial control, in-vehicle devices, financial terminals, display control, education, and development verification.

The X3288 mainboard consists of a stamp-hole core board, a carrier board, and an LCD board. The carrier board exposes common interfaces such as HDMI, Camera, Gigabit Ethernet, USB, LCD, MIPI, audio, keys, and expansion interfaces, making it convenient for system porting, driver debugging, and application verification.

## Core Board Features

- Compact 55 mm × 55 mm size while keeping enough GPIO pins.
- Ricoh RC5T620 PMU for stable and cost-effective power management.
- Supports multiple eMMC brands and capacities; Toshiba 8 GB eMMC is used by default.
- Dual-channel DDR3 design; 2 GB by default and 4 GB optional.
- Supports suspend and wake-up.
- Supports Android 4.4, Android 5.1, Linux, and Ubuntu.
- Supports Gigabit Ethernet.
- Designed for stable long-time operation.

## Product Appearance

![X3288 mainboard appearance](./x3288-board-overview.png)

## System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3288 |
| Main frequency | Quad-core Cortex-A17, 1.8 GHz |
| Memory | 2 GB by default, 4 GB optional |
| Storage | 4 GB / 8 GB / 16 GB eMMC optional, 16 GB by default |
| Power IC | RC5T620, dynamic frequency scaling and coulometer support |

## Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD | TTL, LVDS, and MIPI display output |
| Touch | Capacitive touch; USB or serial resistive touch can be expanded |
| Audio | AC97 / IIS, recording and playback |
| SD | 2 SDIO channels |
| eMMC | On-board eMMC, pins are not exported separately |
| Ethernet | Gigabit Ethernet |
| USB HOST | 2 × USB HOST 2.0 |
| USB OTG | 1 × USB OTG 2.0 |
| UART | 4 UART ports, including flow-control capable UART |
| PWM | 2 PWM outputs |
| I2C | 4 I2C outputs |
| SPI | 1 SPI output |
| ADC | 1 ADC output |
| Camera | 1 BT656/BT601 interface and 1 MIPI camera interface |
| HDMI | HD audio/video output |
| VGA | Expanded from LCD output interface |
| Boot configuration | No external boot configuration required; the core board adapts automatically |

## Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input voltage | 3.7-5.5 V, 5 V recommended |
| Output voltage | 3.3 V / 4.2 V, can be used for carrier-board power and battery charging |
| Operating temperature | -10 to 70 °C |
| Storage temperature | -10 to 80 °C |

## Structure Parameters

| Item | Parameter |
| --- | --- |
| Form factor | Stamp-hole module |
| Core board size | 55.8 mm × 55.8 mm × 3 mm |
| Pin pitch | 1.2 mm |
| Pad size | 1.8 mm × 0.7 mm |
| Pin count | 180 pins |
| PCB layers | 8 layers |
| Warpage | ≤ 0.5% |
