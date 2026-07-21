---
sidebar_position: 1
title: Product Introduction
description: X7110CV1 core board overview, features, and specifications
---

# Product Introduction

Introduction to JH7110Core Board

Product Overview

X7110CV1 is a Core Board based on Saifang Technology JH7110 CPU. It is independently developed, produced and sold by Shenzhen Jiuding Chuangzhan Technology Co., Ltd.

Core Board Features

JH7110Core Board has the following features:

The optimal size ensures that all GPIO ports are accessible while the size is only 45mm*45mm;

The system power supply uses PMU, which ensures stable and reliable operation and is low enough in cost;

supports eMMC of multiple brands and capacities;

Using LPDDR4 design, the maximum supports 8GB capacity;

supports power sleep wakeup;

supports dual Gigabit Ethernet, MIPI-CSI, MIPI-DSI, PCIE, USB 3.0 and other high-speed buses;

Using 172PINCastellated-hole package;

Various reliability experiments have been verified;

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | JH7110 |
| CPU Clock | 1.5GHz |
| RAM | 2GB or 4GB or 8GB |
| ROM | 4GB or 8GB or 16GB or 32GB or 64GB |
| Power IC | Using AXP15060, supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | MIPI-DSI(MAX 2K@30fps) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Dual Gigabit Ethernet supported |
| USB HOST 2.0 Interface | 1ch |
| USB HOST 3.0 Interface | 1ch |
| UART Interface | 6ch |
| PWM Interface | 8chPWMoutput |
| I2C interface | 7ch |
| SPI Interface | 7ch |
| CAN Interface | 2ch |
| Camera Interface | 1chMIPI-CSIinput |
| HDMI Interface | 1chHDMI2.0 TX |
| PCIe Interface | 1chPCIe2.0 |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS/3A |
| Output Voltage / Current | VCC_3V3_SYS_OUT/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_1/500MA(for Same voltage domainIOpull-up)； / VDD33_IO/1A（for same-voltage-domain peripheralspower supply）； |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~50 degrees |


## Navigation

- [Dimensions and Structure](./x7110cv1-product-size-spec)
- [Pin Definition](./x7110cv1-pin-definition)
- [Hardware Design](./x7110cv1-hardware-design)
