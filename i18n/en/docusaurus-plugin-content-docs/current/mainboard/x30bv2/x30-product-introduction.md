---
sidebar_position: 1
title: Product Introduction
description: X30 development board overview, PX30 features, core-board parameters, and software resources
---

# Product Introduction

The X30 development board is based on the Rockchip PX30 platform and uses the X30CV1 or X30CV2 core board. It consists of a stamp-hole core board, a carrier board, and an LCD panel. It can be used in tablets, vehicle systems, learning devices, POS terminals, game consoles, industrial surveillance, advertising players, PDAs, teaching platforms, and multimedia terminals.

PX30 is a quad-core Cortex-A35 application processor for industrial applications. It supports RGB/LVDS/MIPI-DSI display output, MIPI CSI and DVP sensor input, 100M RMII, SDIO3.0, USB2.0 HOST/OTG, I2C, UART, SPI, PWM, and other common embedded interfaces.

![X30 development board appearance](./x30-board-overview.png)

## PX30 Specification

| Item | Parameter |
| --- | --- |
| CPU | Quad-core Cortex-A35 |
| GPU | Mali-G31 GPU, OpenGL ES 3.2, Vulkan 1.0, OpenCL 2.0 |
| 2D | Integrated high-performance 2D acceleration hardware |
| Video decode | Multi-format 1080p 60fps decode: H.265, H.264, VC-1, MPEG-1/2/4, VP8 |
| Video encode | 1080p encode, H.264 and VP8 |
| Display | RGB / LVDS / MIPI-DSI, up to 1920 x 1080; dual-display output supported |
| Memory | 32-bit DDR4-1600 / DDR3-1600 / DDR3L-1600 / LPDDR3-1600 / LPDDR2-1066 |
| Storage | MLC NAND, eMMC 4.51, serial NOR flash |
| Camera | MIPI CSI and DVP sensor interface, integrated 8MP ISP |
| Audio | 1x 8ch I2S/TDM, 1x 8ch PDM, 2x 2ch I2S/PCM |
| Ethernet | 100M RMII |
| Interfaces | SDIO3.0, USB2.0 HOST/OTG, 4 I2C, 6 UART, 2 SPI, 8 PWM |


## Feature Highlights

- Quad-core ARM Cortex-A35 CPU.
- 1.3GHz x 4.
- 1GB/2GB DDR3/DDR4 memory, standard 1GB DDR3.
- 4GB/8GB/16GB/32GB/64GB eMMC options, standard 8GB eMMC.
- 3 USB USB HOST2.0 ports and 1 OTG port.
- 3 TTL UARTs, with UART2 used for debugging.
- TF-card interface; TF D0/D1 are multiplexed with UART0.
- Reset key, software power key, and four independent keys.
- External speaker, MIC input, and headphone output.
- Stepless backlight control and multi-touch capacitive panel support.
- On-board AP6212 Wi-Fi/BT.
- G-sensor support.
- MPEG-4, H.264, H.265/HEVC, VC-1, and VP8 video decode support.
- H.264 video encode support.
- High-performance 2D/3D graphics acceleration.
- RTC time retention.
- 100M wired Ethernet.
- CSI camera interface.
- External USB 3G module and PCIe module support.
- USB mouse, keyboard, and integrated IR receiver support.

## Core Board Features

- X30CV1 core board size is 45mm x 45mm, with 144 pins exported.
- X30CV1 uses DDR3, standard 1GB and customizable to 2GB; X30CV2 uses LPDDR3 for larger-memory cost-sensitive designs.
- Except for the memory device, X30CV1 and X30CV2 are pin-, size-, and electrical-connection compatible.
- RK809 PMU supports power management, dynamic frequency scaling, suspend, and wake-up.
- Android 8.1, Linux, Debian 9, and Ubuntu are supported.
- 100M Ethernet is supported.
- Reliability testing includes high/low temperature, repeated reboot, Android stability test, Antutu test, and long-duration burn-in.

## System and Interface Parameters

| Item | Parameter |
| --- | --- |
| CPU | PX30 |
| Clock | Quad-core Cortex-A35, 1.3GHz |
| Memory | X30CV1 uses DDR3; X30CV2 uses LPDDR3 |
| Storage | 4GB/8GB/16GB eMMC optional, standard 8GB |
| PMIC | RK809 / RT809 as listed in the manual, supports dynamic frequency scaling |
| LCD | MIPI, LVDS, and RGB interfaces |
| Touch | Capacitive touch; USB or UART resistive touch can be extended |
| Audio | AC97 / I2S interface, recording and playback |
| SD | 1 SDIO output channel |
| eMMC | On-board eMMC; pins are not exported separately |
| Ethernet | 100M Ethernet |
| USB USB HOST2.0 | 3 USB HOST2.0 ports |
| UART | 6 UARTs, flow-control UART supported |
| PWM | 8 PWM outputs |
| I2C | 4 I2C outputs |
| SPI | 2 SPI outputs |
| ADC | 3 ADC outputs |
| Camera | 1 CSI input |


## Electrical Characteristics

| Item | Parameter |
| --- | --- |
| 5V input | 5V / 1A |
| RTC input | 5V / 30uA |
| Output voltages | 1.8V, 3V, 3.3V, 5V |
| Operating temperature | -20°C to 80°C |
| Storage temperature | -10°C to 50°C |


## Software Resources

The X30 development board supports Android 8.1, QT5.9, Debian 9, and Ubuntu 16.04. The driver support matrix from the hardware manual is kept below:

| system / driver | linux4.4+ / Android 8.1 | linux4.4+ / QT5.9 | linux4.4+ / debian9 | linux4.4+ / ubuntu16.04 |
| --- | --- | --- | --- | --- |
| Four-way programmable LED lights | Supported | Supported | Coming soon | Coming soon |
| 7-inch MIPI screen (1024*600) | Supported | Supported | Supported | Supported |
| Backlight driver | Supported | Supported | Supported | Supported |
| PMIC driver (RK808) | Supported | Supported | Supported | Supported |
| capacitive touch | Supported | Supported | Supported | Supported |
| eMMC driver | Supported | Supported | Supported | Supported |
| SD card driver | Supported | Supported | Supported | Supported |
| Independent buttons | Supported | Supported | Supported | Supported |
| ADC driver | Supported | Supported | Supported | Supported |
| Gsensor | Supported | Not required | Not required | Not required |
| buzzer driver | Supported | Supported | Supported | Supported |
| Infrared remote control | Supported | Supported | Supported | Supported |
| Turn on and off | Supported | Supported | Supported | Supported |
| wake up from sleep | Supported | Supported | Coming soon | Coming soon |
| Three-way USB USB HOST2.0 driver | Supported | Supported | Supported | Supported |
| All the way OTG driver | Supported | Supported | Supported | Supported |
| Audio (RK809) | Supported | Supported | Supported | Supported |
| Recording(RK809) | Supported | Not required | Coming soon | Coming soon |
| SDIOWIFI/BT | Supported | Supported | Coming soon | Coming soon |
| CSI camera driver | Supported | Coming soon | Coming soon | Coming soon |
| USB port camera driver | Supported | Supported | Supported | Supported |
| serial port | Supported | Supported | Supported | Supported |
| 4G module (PCIEinterface) | Supported | Not required | Not required | Not required |
| GPS module | Supported | Supported | Supported | Supported |
| 100M Ethernet | Supported | Supported | Supported | Supported |
| USB mouse keyboard | Supported | Supported | Supported | Supported |
| uboot | Supported | Supported | Supported | Supported |
| SD card offline update image | Supported | Supported | Supported | Supported |

