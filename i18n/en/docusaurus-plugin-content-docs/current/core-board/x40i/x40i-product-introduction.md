---
sidebar_position: 1
title: Product introduction
description: X40I core board product introduction
---

# Product introduction

## Product overview

X40i is a core board based on the Allwinner A40i processor, independently developed, manufactured and sold by Shenzhen JiuDing ChuangZhan Technology Co., Ltd.

A40i targets industrial control applications. It integrates four ARM Cortex-A7 cores running at up to 1.2 GHz and a Mali-400 MP2 GPU supporting OpenGL ES 1.1/2.0 and OpenVG 1.1. It supports 1080p at 60 fps multi-format hardware decoding and 1080p at 45 fps H.264 hardware encoding. Display capabilities include RGB, dual LVDS, MIPI DSI, HDMI 1.4, CVBS and independent dual displays. Native peripherals include eight UARTs, four SPI controllers, five TWI controllers, four SD/MMC controllers, three USB 2.0 ports, Gigabit Ethernet and SATA. An integrated audio codec handles audio input and output without an external codec. Storage support includes eMMC 5.0, SD 3.0, NAND flash, SPI NOR flash and SATA expansion. The manual specifies an industrial operating range of -20°C to +85°C, with the A40i chip meeting the AEC-Q100 Grade 3 temperature range down to -40°C, and a supply lifecycle exceeding ten years. Applications include industrial controllers, HMI, energy terminals, commercial displays, self-service terminals, vehicle displays and security systems.

A40i succeeds the A20 platform with a focus on industrial applications. The manual compares it with RK3399: typical core board consumption is approximately 2.5 W at full load and 1 W at idle, enabling fanless operation. It describes industrial temperature capability of -40°C to +85°C, 100 ppm quality and a supply lifecycle exceeding ten years. Native interfaces include eight UARTs, Gigabit Ethernet, SATA and multiple displays; RK3399 requires SPI expansion for CAN. Memory support includes DDR2/DDR3/DDR3L/LPDDR2/LPDDR3 with a 32-bit bus and up to 2 GB, alongside eMMC, NAND and SATA storage. The manual describes lower platform cost and the ability to obtain 100% domestic-content certification from the China Saibao Laboratory (the Fifth Electronics Research Institute). A40i has no NPU and provides 1080p rather than 4K video processing, so it is unsuitable for demanding AI inference or 4K applications. For the core board operating range, see the electrical specifications below.

## Core board features

The X40iCV2 core board has the following features:

- Compact 45 mm × 45 mm footprint.

- 172 external pins exposing nearly all CPU signals.

- AXP221S PMU for reliable operation.

- Single-channel 32-bit DDR3 or LPDDR3, supporting 1 GB or 2 GB.

- Android and Linux support.

- Gigabit wired Ethernet support.

- Reliability testing includes high and low temperatures and repeated rebooting.

## Specifications

### System configuration

| Item | Value |
| --- | --- |
| CPU | A40I |
| Clock frequency | Quad-core Cortex-A7, 1.2 GHz |
| Memory | 1 GB by default; LPDDR3 option supports 2 GB |
| Storage | 4/8/16/32/64/128 GB eMMC; 8 GB by default |
| Power IC | AXP221S, with dynamic frequency scaling |

### Interface specifications

| Item | Value |
| --- | --- |
| LCD interface | RGB/LVDS/MIPI/HDMI outputs |
| Touch interface | Capacitive touch |
| Audio interface | Direct headphone/speaker output; playback and recording |
| SD card interface | 2 SDIO output channels |
| eMMC interface | Onboard eMMC; pins are not exposed externally |
| Ethernet interface | Gigabit Ethernet |
| USB HOST2.0 interface | 2 HOST 2.0 ports |
| OTG interface | 1 OTG port |
| UART interface | 8 TTL UARTs |
| PWM interface | 8 PWM outputs |
| IIC interface | 5 IIC outputs |
| SPI interface | 4 SPI outputs |
| ADC interface | 1 ADC output |
| Camera interface | 1 BT656 input |
| SATA interface | 1 |
| CVBS interface | 1 |
| TVIN interface | 1 |

### Electrical specifications

| Item | Value |
| --- | --- |
| 5 V input | 5V/2A |
| Operating temperature | -20°C to +85°C (CPU supports down to -40°C) |
| Storage temperature | -10°C to +40°C |
