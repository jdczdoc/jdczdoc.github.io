---
sidebar_position: 1
title: Product Introduction
description: X3576CV1 core board overview, features, and specifications
---

# Product Introduction

Introduction to X3576Core Board

Product Overview

X3576 is a Core Board based on Rockchip RK3576 CPU. It is independently developed, produced and sold by Shenzhen Jiuding Chuangzhan Technology Co., Ltd.

Typical application fields include industrial control, commercial display, multimedia terminals, edge computing, POS, vehicle-mounted systems, and other embedded scenarios.

Core Board Features

X3576Core Board has the following features:

The optimal size ensures that all GPIO ports are accessible while the size is only 55mm*55mm;

The system power supply uses PMU, which ensures stable and reliable operation and is low enough in cost;

supports eMMC of multiple brands and capacities;

Using LPDDR4x design, supports up to 16GB;

supports power sleep wakeup;

Gigabit Ethernet supported, MIPI-CSI, MIPI-DSI, PCIE, USB 3.0 and other high-speed buses;

Using 208PINCastellated-hole package;

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3576 (Quad A72 + Quad A53) |
| CPU Clock | 1.8GHz |
| RAM | 2GB or 4GB or 8GB |
| ROM | 4GB or 8GB or 16GB or 32GB or 64GB |
| Power IC | Using RK806-S, supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 1chMIPI-DSI(MAX 2K@60Hz) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | One Gigabit Ethernet interface supported |
| USB HOST 2.0 Interface | 2ch |
| USB HOST 3.0 Interface | 2ch |
| UART Interface | 11ch |
| PWM | 16ch |
| I2C interface | 10ch |
| Camera Interface | 3chMIPI-CSIinput |
| HDMI Interface | 1chHDMI2.0 TX |
| PCIe Interface | 1chPCIE2.0 |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS_S5/3A |
| Output Voltage / Current | VCC_3V3_S0/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_S3/500MA(for Same voltage domainIOpull-up)； |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~50 degrees |


## Navigation

- [Dimensions and Structure](./x3576cv1-product-size-spec)
- [Pin Definition](./x3576cv1-pin-definition)
- [Hardware Design](./x3576cv1-hardware-design)
