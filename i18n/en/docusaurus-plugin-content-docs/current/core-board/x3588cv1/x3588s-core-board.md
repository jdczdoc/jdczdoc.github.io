---
sidebar_position: 1
title: Product Introduction
description: Product introduction, hardware resources, specifications, and mechanical information for the X3588S core board
---

# Product Introduction

## Overview

X3588S is a core board based on the Rockchip RK3588S processor. It is intended for embedded product development and provides a compact hardware platform with rich peripheral interfaces.

## Features

- The best size, ensuring that all GPIO ports are lead out, the size is only 55mm*55mm
- Using RK's own RK806 PMU, the cost is low enough while ensuring stable and reliable operation.
- supports emmc of multiple brands and capacities, up to 512GB
- Using dual-channel LPDDR4(X) or LPDDR5 design, it can support 2GB/4GB/8GB/16GB/32GB capacity
- supports power sleep wake up
- supports android12.0, linux, debian, ubuntu and other operating systems
- supportsGigabit Ethernet, SATA, PCIE, USB3.0 and other high-speed buses
- Using 200PIN Castellated-hole package
- Various reliability experiments have been verified

## Appearance and Mechanical Structure

![X3588S appearance and mechanical drawing](./x3588s-figure-1.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-2.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-3.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-4.jpeg)

## Specifications

### System Configuration

| CPU | RK3588S |
|---|---|
| Frequency | Quad-core A76+quad-core A55(2.4GHz) |
| RAM / Storage | 4G&16G or 8G&32Goptional |
| Power IC | Using RT806, supports dynamic frequency modulation, etc. |

### Interface Parameters

| LCD Interface | At the same time supports MIPI, EDP, HDMI Interface output; the maximum <br /> supports 6 channels of simultaneous display and 4 channels of different display |
|---|---|
| Touch Interface | Capacitive touch, can use USB or I2C interface touch |
| Audio Interface | IIS/PCM/TDM interface |
| SPDIF Interface | 2-way 8-channel optical fiber audio output interface |
| SD Card Interface | 2 SDIO output channels |
| eMMC Interface | Onboard eMMC Interface, no pins are lead out separately |
| Ethernet Interface | Can support dual Gigabit Ethernet Interface |
| USBHOST2.0 interface | 2-way HOST2.0 |
| USBHOST3.0 interface | 2-way USBOTG3.0/2.0/TypeC |
| UART Interface | 10-way serial port, supports serial port with flow control |
| PWM interface | 16 channels of PWM output |
| IIC Interface | 9 channels IIC output |
| SPI Interface | 5 SPI outputs |
| ADC Interface | 8 ADC outputs |
| CAN Interface | 3 channels CAN output |
| Camera Interface | 4 CSI inputs |
| HDMI Interface | 1 channel HDMI2.1TX |
| PCIE Interface | PCIe2.0 |
| SATA Interface | 2xSATA3.0/PCIe2.0 |

### Electrical Characteristics

| 4VInput Voltage | 4V/5A(Recommended4V/8Aenter) |
|---|---|
| Output Voltage | 3.3V/2A, 1.8V/2A(can be used forBackplane powered) |
| Operating Temperature | 0~70°C |
| Storage Temperature | -10~50°C |

### Mechanical Parameters

| Package | Board-to-board connector package |
|---|---|
| Core Board Size | 55mm*55mm*3mm |
| Pin Pitch | 0.5mm |
| Number of Pins | 200PIN |
| PCB Layers | LPDDR4 solution: 10 layers LPDDR5 solution: 12 layers |
| Warpage | less than0.5% |

## Related Pages

- [Pin Definition](./x3588s-pin-definition)
- [Hardware Design](./x3588s-hardware-design)
