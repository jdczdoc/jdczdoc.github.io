---
sidebar_position: 1
title: Product Introduction
description: I3128 core board overview, features, and specifications
---

# Product Introduction

Introduction to i3128Core Board

Product Overview

The I3128 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

I3128CV1Core Board is widely used in human-computer interaction, intelligent control systems, portable handheld projectors, set-top boxes, medical, automotive, POS and other fields. It is especially suitable for cost-sensitive application scenarios with high performance requirements.

Core Board Features

I3128CV1Core Board has the following features:

The optimal size ensures that all GPIO ports are accessible while the size is only 38mm*38mm;

Using RK's own RK816 PMU, the cost is low enough while ensuring stable and reliable operation;

supports eMMC of multiple brands and capacities;

Using single-chip DDR3 design, supports 512MB/1GB/2GB capacity, default 512MB;

supports power sleep wakeup;

supports Android6.0, Linux and other operating systems;

supports SPI, I2C, UART and other communication buses;

supports Gigabit wired Ethernet;

The product is stable and reliable. After a large number of high/low temperature, repeated reboot, Android stability test, Antutu test and other reliability experiments, the machine did not crash for 7 days and 7 nights;

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3128 |
| CPU Clock | A7 Quad Core 1.3GHz |
| Memory | Standard 512MB, 1GB and 2GB can be customized |
| Storage | Standard 4GB eMMC, optional nand flash |
| Power IC | Using RK816, supports dynamic frequency scaling, etc. |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | Choose one of TTL, LVDS, MIPI interface |
| Touch Interface | Capacitive touch, USB or I2C interfacetouch can be used |
| Audio Interface | AC97/IIS interface, supports audio recording and playback |
| SD Card Interface | 2chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Gigabit Ethernet supported |
| USB OTG Interface | 1chOTG 2.0 |
| USB HOST Interface | 1chHOST 2.0 |
| UART Interface | 3chUART, 2ch with flow control, 1chfor DEBUG |
| PWM Interface | 3chPWMoutput |
| I2C interface | 4chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 3chADCinput |
| Camera Interface | 1chBT656/BT601 |
| HDMI Interface | HD audio/video output; LCD and HDMI are mutually exclusive |
| startup configuration interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| 4VInput Voltage | 4.8~5.5V(Recommended5Vinput) |
| Output Voltage | 3.3V/4.2V(Canfor base platepower supplyand battery charging) |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~40 degrees |


## Navigation

- [Dimensions and Structure](./i3128-product-size-spec)
- [Pin Definition](./i3128-pin-definition)
- [Hardware Design](./i3128-hardware-design)
