---
title: Product Introduction
sidebar_position: 1
description: "X821V30 specifications, features, mechanics, and software resources"
---

# Product Introduction

## Overview

The X821V30 is based on the Allwinner V821 family and targets AI agents, AI toys, smart locks, low-power doorbells, IPC products, and multi-camera network cameras. The SoC combines a Linux RISC-V CPU and a RISC-V MCU and integrates an ISP, H.264/JPEG engines, Wi-Fi, LDOs, an IR-cut driver, and an audio codec.

![X821V30 main board](./x821-board.jpg)

## Main Specifications

| Item | Specification |
| --- | --- |
| SoC | V821M2-WBX |
| Linux CPU | RISC-V, up to 1GHz |
| MCU | RISC-V MCU, up to 600MHz |
| Memory | 64MB embedded DDR2 |
| Storage | 128MB external flash |
| Video encoder | H.264 BP/MP/HP; JPEG up to 8192×8192 |
| Video decoder | JPEG up to 8192×8192 |
| ISP | Offline 3264×2448; online 1920×1920 |
| Camera | GC2083 listed as the default sensor; one MIPI CSI input |
| Audio | One DAC, one ADC, dual microphones, 8Ω/3W speaker |
| Wireless | 2.4GHz 1T1R Wi-Fi and BLE |
| Display | SPI LCD; the optional list specifies a 2.0-inch 240×320 panel |
| Touch | I2C capacitive-touch connector |
| Removable storage | TF card |
| Provisioning | Wi-Fi, camera QR code, and acoustic provisioning; verify Bluetooth provisioning in the delivered release |
| AI services | Tuya, Xiaozhi, and related solutions |

## Mechanical and Environmental Data

![X821V30 mechanical drawing](./x821-size.png)

| Item | Specification |
| --- | --- |
| Board size | 78mm × 45mm × 1.0mm |
| Operating temperature | 0°C to 70°C |
| Storage temperature | -10°C to 50°C |

## Software Resources

| Item | Description |
| --- | --- |
| Operating system | Linux |
| Kernel | Linux 5.4 |
| SDK | Tina Linux 5.0 / V821 SDK |
| Heterogeneous processing | Linux CPU plus RISC-V MCU with AMP cooperation |
