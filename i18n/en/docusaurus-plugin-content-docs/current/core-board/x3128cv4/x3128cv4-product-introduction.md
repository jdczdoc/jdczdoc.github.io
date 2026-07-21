---
sidebar_position: 1
title: Product Introduction
description: X3128CV4 core board overview, features, and specifications
---

# Product Introduction

Introduction to x3128cv4Core Board

Product Overview

The X3128CV4 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

X3128CV4Core Board is widely used in human-computer interaction, intelligent control systems, portable handheld projectors, set-top boxes, medical, automotive, POS and other fields. It is especially suitable for cost-sensitive application scenarios with high performance requirements.

X3128CV4Core Board has the following features:

The optimal size, which ensures both compact size and sufficient GPIO ports, is only 45mm*45mm;

Using Rockchip's RK816 as a power management design, it has low cost and reliable performance;

supports eMMC of multiple brands and capacities. The default is Toshiba 8GB eMMC, which is compatible with nand flash;

Using single-channel DDR3 design, the default supports 1GB capacity, and can be customized with 2GB and 512MB capacities;

supports power sleep wakeup;

supports Android6.0, Linux operating system;

supports Gigabit wired Ethernet;

The product is stable and reliable, and the machine does not crash 7 days and 7 nights;

Core Board FeaturesParameter

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3128 |
| CPU Clock | A7 Quad Core 1.3GHz |
| Memory | Standard 1GB, customizable 2GB and 512MB |
| Storage | Standard 8GB eMMC, optional nand flash |
| Power IC | Using RK816, supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | Choose one of TTL, LVDS, MIPI interface |
| Touch Interface | Capacitive touch, USB or UART expansion resistor touch can be used |
| Audio Interface | AC97/IIS interface, supports audio recording and playback |
| SD Card Interface | 2chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | 1chHOST 2.0 |
| USB OTG Interface | 1chOTG 2.0 |
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
| Input Voltage | 4.8~5.5V(Recommended5Vinput) |
| Output Voltage | 3.3V/4.2V(Canfor base platepower supplyand battery charging) |
| Operating Temperature | -10~70 degrees |
| Storage Temperature | -10~80 degrees |


## Navigation

- [Dimensions and Structure](./x3128cv4-product-size-spec)
- [Pin Definition](./x3128cv4-pin-definition)
- [Hardware Design](./x3128cv4-hardware-design)
