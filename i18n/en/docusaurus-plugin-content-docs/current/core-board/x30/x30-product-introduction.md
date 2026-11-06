---
sidebar_position: 1
title: Product introduction
description: X30 core board product introduction
---

# Product introduction

## Product overview

The X30 core board uses an eight-layer PCB with an immersion-gold finish. It is designed for tablets, vehicle terminals, learning devices, POS terminals, game consoles, industrial monitoring and similar applications. A carrier board is available for evaluation and provides peripherals demonstrating most PX30 functions: 100 Mbps Ethernet, CSI, DSI, RGB, LVDS, USB OTG, USB 2.0, audio and an infrared receiver. The hardware follows a tablet reference design and supports software power control and suspend/resume. The default display is a 7-inch MIPI or RGB panel; other sizes can be connected as required.

Applications include industrial control, power systems, communications, medical equipment, media, security, automotive electronics, finance, consumer electronics, handheld devices, gaming, display control and teaching instruments. Typical products include POS terminals, game consoles, teaching platforms, multimedia terminals, PDAs, restaurant ordering terminals and advertising displays.

## Core board features

The X30CV1 core board has the following features:

- Compact 45 mm × 45 mm footprint with sufficient GPIO pins.

- Rockchip RK809 PMU for reliable operation and low cost.

- Support for multiple eMMC brands and capacities; Toshiba or Samsung 8 GB eMMC is fitted by default.

- Single-channel DDR3, with 1 GB by default and a custom 2 GB option.

- Suspend and wake-up support.

- Support for Android 8.1, Linux, Debian 9 and Ubuntu.

- 100 Mbps wired Ethernet support.

- 144 external pins exposing the CPU signals.

- Reliability testing includes high and low temperatures, repeated rebooting, Android stability tests, AnTuTu tests and seven consecutive days of stress testing without a crash.

X30CV2 uses LPDDR3 for better cost efficiency at larger memory capacities. Apart from the memory devices, X30CV1 and X30CV2 are fully compatible in pinout, dimensions and electrical connections.

## Specifications

### System configuration

| Item | Value |
| --- | --- |
| CPU | PX30 |
| Clock frequency | Quad-core Cortex-A35, 1.3 GHz |
| Memory | X30CV1: DDR3; X30CV2: LPDDR3 |
| Storage | 4/8/16 GB eMMC; 8 GB by default |
| Power IC | RT809, with dynamic frequency scaling (designation as given in the source table) |

### Interface specifications

| Item | Value |
| --- | --- |
| LCD interface | MIPI, LVDS and RGB |
| Touch interface | Capacitive touch; resistive touch can be added through USB or UART |
| Audio interface | AC97/IIS, audio playback and recording |
| SD card interface | 1 SDIO output channel |
| eMMC interface | Onboard eMMC; pins are not exposed externally |
| Ethernet interface | 100 Mbps Ethernet |
| USB HOST2.0 interface | 3 HOST 2.0 ports |
| UART interface | 6 UARTs, including hardware flow control |
| PWM interface | 8 PWM outputs |
| IIC interface | 4 IIC outputs |
| SPI interface | 2 SPI outputs |
| ADC interface | 3 ADC outputs |
| Camera interface | 1 CSI input |

### Electrical specifications

| Item | Value |
| --- | --- |
| 5 V power input | 5V/1A |
| RTC supply | 5V/30uA |
| Output voltages | 1.8 V, 3 V, 3.3 V, 5 V |
| Operating temperature | 0 to 70°C |
| Storage temperature | -10 to 50°C |

:::note Source inconsistencies

The source specification table names the power IC as RT809 and lists three USB HOST 2.0 ports. The feature list and hardware design describe RK809 and one HOST plus one OTG port. Both source descriptions are retained; verify the selected board revision and schematic before designing a carrier board.

:::
