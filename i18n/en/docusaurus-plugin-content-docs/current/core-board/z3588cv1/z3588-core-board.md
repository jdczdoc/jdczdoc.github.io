---
sidebar_position: 1
title: Product Introduction
description: Product introduction, hardware resources, specifications, and mechanical information for the Z3588 core board
---

# Product Introduction

## Overview

Z3588 is a core board based on the Rockchip RK3588 processor. It is intended for embedded product development and provides a compact hardware platform with rich peripheral interfaces.

## Features

- The best size, ensuring that all GPIO ports are lead out, the size is only 50mm*62mm
- Using RK's own RK806 PMU, the cost is low enough while ensuring stable and reliable operation.
- supports multiple brands and various capacities of emmc
- Using dual-channel LPDDR4(X) design, it can support 2GB/4GB/8GB/16GB/32GB capacity
- supports power sleep wake up
- supports android12.0, linux, debain, ubuntu and other operating systems
- supportsdual Gigabit Ethernet, SATA, PCIE, USB3.0 and other high-speed buses
- Adopting LGA package form, the contact is stable and reliable
- The product is stable and reliable. After a lot of high and low temperatures, repeated restarts, Android stability tests, AnTuTu tests and other reliability experiments, the machine did not crash for 7 days and 7 nights.

## Appearance and Mechanical Structure

![Z3588 appearance and mechanical drawing](./z3588-figure-1.jpeg)

![Z3588 appearance and mechanical drawing](./z3588-figure-2.jpeg)

![Z3588 appearance and mechanical drawing](./z3588-figure-3.jpeg)

![Z3588 appearance and mechanical drawing](./z3588-figure-4.jpeg)

## Specifications

### System Configuration

| CPU | RK3588 |
|---|---|
| Frequency | Quad-core A76+quad-core A55(2.4GHz) |
| RAM / Storage | 4G&16G or 8G&32Goptional |
| Power IC | Using RK806-2, supports dynamic frequency modulation, etc. |

### Interface Parameters

| LCD Interface | At the same time, it supports MIPI, EDP, and HDMI Interface output; the maximum <br /> supports 6 channels of simultaneous display and 4 channels of separate display. |
|---|---|
| Touch Interface | Capacitive touch, can use USB or I2C interface touch |
| Audio Interface | IIS/PCM/TDM interface |
| SPDIF Interface | 2-way 8-channel optical fiber audio output interface |
| SD Card Interface | 2 SDIO output channels |
| eMMC Interface | Onboard eMMC Interface, no pins are lead out separately |
| Ethernet Interface | Dual Gigabit Ethernet Interface |
| USBHOST2.0 interface | 2-way HOST2.0 |
| USBHOST3.0 interface | 2-way USBOTG3.0/2.0/TypeC |
| UART Interface | 10-way serial port, supports serial port with flow control |
| PWM interface | 16 channels of PWM output |
| IIC Interface | 9 channels IIC output |
| SPI Interface | 5 channels SPI output |
| ADC Interface | 8 ADC outputs |
| CAN Interface | 3 channels CAN output |
| Camera Interface | 6 CSI inputs |
| HDMI Interface | 2 channels HDMI2.1TX, 1 channel HDMIRX2.0 |
| PCIE Interface | PCIe3.0(2x2,1x4,4x1) |
| SATA Interface | 2xSATA3.3/PCIe2.1 |

### Electrical Characteristics

| 4VInput Voltage | 4V/5A(Recommended 4V/8Aenter) |
|---|---|
| Output Voltage | 3.3V/2A, 1.8V/2A(can be used forBackplane powered) |
| Operating Temperature | 0~70°C |
| Storage Temperature | -10~50°C |

### Mechanical Parameters

| Core Board Size | 62mm*50mm*1.2mm |
|---|---|
| Number of Pins | 660PIN |
| PCB Layers | 12th floor |
| Warpage | less than 0.5% |

## Related Pages

- [Pin Definition](./z3588-pin-definition)
- [Hardware Design](./z3588-hardware-design)
