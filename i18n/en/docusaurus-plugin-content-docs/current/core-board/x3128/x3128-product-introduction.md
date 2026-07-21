---
sidebar_position: 1
title: Product Introduction
description: X3128 development board hardware overview, features, and specifications
---

# Product Introduction

Introduction to x3128Development Board

Thank you very much for choosing the Jiuding Chuangzhan x3128 development platform. This document describes the hardware resources of the x3128 development platform, the circuit principle and the supports interface, etc.

RK3128 is a highly cost-effective CPU launched by Rockchip after the RK3188. It beats Samsung's entire series of chips in terms of price and can meet most application needs in the industry in terms of performance. It forms a domestic duo with the Allwinner quad-core series. It is currently widely used in China. Its main parameters are as follows:

CPU: Quad-core Cortex-A7, CPU Clock up to 1.3GHz;

GPU：Mali400-MP2，supports OpenGL ES1.1/2.0；

Process: 40nm process;

Image processing: Embedded high-performance 2D acceleration hardware; 1080P video encoding and decoding in multiple formats, including 1080P H265 hardware decoding;

Memory：supports LPDDR2，DDR3，DDR3L；

Integration: Integrated CVBS, HDMI, Gigabit Ethernet, SPDIF, Audio DAC, USB, etc.;

Product Overview

The X3128 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

X3128CV2Core Board is widely used in human-computer interaction, intelligent control systems, portable handheld projectors, set-top boxes, medical, automotive, POS and other fields. It is especially suitable for cost-sensitive application scenarios with high performance requirements.

X3128CV2Core Board has the following features:

The optimal size, which ensures both compact size and sufficient GPIO ports, is only 45mm*45mm;

Using Rockchip's RK816 as a power management design, it has low cost and reliable performance;

supports eMMC of multiple brands and capacities. The default is Toshiba 8GB eMMC, which is compatible with nand flash;

Using single-channel DDR3 design, the default supports 1GB capacity, and can be customized with 2GB and 512MB capacities;

supports power sleep wakeup;

supports Android5.1, Linux operating system;

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

- [Dimensions and Structure](./x3128-product-size-spec)
- [Pin Definition](./x3128-pin-definition)
- [Hardware Design](./x3128-hardware-design)
