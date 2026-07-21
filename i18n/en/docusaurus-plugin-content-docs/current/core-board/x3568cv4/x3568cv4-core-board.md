---
sidebar_position: 1
title: Product Introduction
description: Product introduction, hardware resources, specifications, and mechanical information for the X3568CV4 core board
---

# Product Introduction

## Overview

X3568CV4 is a core board based on the Rockchip RK3568 processor. It is intended for embedded product development and provides a compact hardware platform with rich peripheral interfaces.

## Features

- The best size, which ensures both compact size and sufficient GPIO ports, is only 45mm*45mm.
- Using RK's own RK809 PMU, the cost is low enough while ensuring stable and reliable operation.
- supports EMMC of multiple brands and capacities. The default uses Samsung EMMC, which are 8GB version and 16GB version respectively.
- Using dual-channel LPDDR4X or DDR4 design, available in 1GB/2GB/4GB/8GB versions
- supports power sleep wake up
- supports android8.1, linux, debain9, ubuntu and other operating systems
- supports dual-channel Gigabit Wired Ethernet
- Lead out 200PIN pins to basically meet various application needs
- The product is stable and reliable. After a lot of high and low temperatures, repeated restarts, Android stability tests, AnTuTu tests and other reliability experiments, the machine did not crash for 7 days and 7 nights.

## Appearance and Mechanical Structure

![X3568CV4 appearance and mechanical drawing](./x3568cv4-figure-1.jpeg)

![X3568CV4 appearance and mechanical drawing](./x3568cv4-figure-2.jpeg)

![X3568CV4 appearance and mechanical drawing](./x3568cv4-figure-3.jpeg)

## Specifications

### System Configuration

| CPU | RK3568/RK3568B2 |
|---|---|
| Frequency | quad-coreA55(2GHz) |
| RAM | standard2GB, hardware compatible 4GB, 8GB |
| Storage | 8GB/16GBEMMCoptional, standard16GB |
| Power IC | Using RK809, supports dynamic frequency modulation, etc. |

### Interface Parameters

| LCD Interface | supportsDSI/LVDS/EDP/HDMI Interface output |
|---|---|
| Touch Interface | capacitive touch |
| Audio Interface | supports direct output from headphone speakers, supports recording and playback |
| SD Card Interface | 2 SDIO output channels |
| eMMC Interface | on-boardeMMC Interface, pins not routed out separately |
| Ethernet Interface | supports2-way Gigabit Ethernet |
| USBHOST2.0 interface | 2-way HOST2.0 |
| USBHOST3.0 interface | 2-way HOST3.0 |
| OTG interface | 1-way OTG interface (and one of themUSB3.0multiplexed) |
| UART Interface | 10-way serial port, supports serial port with flow control |
| PWM Interface | 16 channels of PWM output |
| IIC Interface | 6 IIC outputs |
| SPI Interface | 4 SPI outputs |
| ADC Interface | 2 ADC outputs (have6The road does not lead out) |
| Camera Interface | CSI/BT601/BT656/BT1120/RAW input |

### Electrical Characteristics

| 3.3VInput Voltage | 3.3V/2A |
|---|---|
| RTCInput Voltage | 3V/0.6uA |
| Output Voltage | 3.3V/1.5A(can be used forBackplane powered) |
| Operating Temperature | commercial grade: -10~70°C industrial grade : -40~85°C |
| Storage Temperature | -10~40°C |

### Mechanical Parameters

| Package | Castellated-hole package |
|---|---|
| Core Board Size | 45mm*45mm*3mm |
| Pin Pitch | 1.0mm |
| Pad Size | 1.3mm*0.6mm |
| Number of Pins | 172PIN |
| PCB Layers | 8th floor |
| Warpage | not greater than0.5% |

## Related Pages

- [Pin Definition](./x3568cv4-pin-definition)
- [Hardware Design](./x3568cv4-hardware-design)
