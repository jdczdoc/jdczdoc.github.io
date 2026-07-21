---
sidebar_position: 1
title: Product Introduction
description: X3288CV5 core board overview, features, and specifications
---

# Product Introduction

Introduction to X3288CV5Core Board

Product Overview

The X3288 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

Compared with X3288CV3 and X3288CV4, X3288CV5 replaces the PMU from 5T620 to ACT8846, which optimizes the power supply design. The two are fully compatible on pins and only need to patch the PMU in the program.

X3288CV5Core Board has the following features:

The optimal size, which ensures both compact size and sufficient GPIO ports, is only 55mm*55mm;

Using Ricoh's RC5T620 PMU as the power management design ensures stable and reliable operation and is low enough in cost;

supports eMMC of multiple brands and capacities, the default is Toshiba 8GB eMMC(19nm MLCCraftsmanship);

Using dual-channel DDR3 design, the default supports 2GB capacity, and 4GB capacity can be customized;

supports power sleep wakeup;

supports Android4.4, Android5.1 operating systems;

supports Gigabit wired Ethernet;

Refuse to delete programs and stay away from the trouble of using nand flash to delete programs in batches;

The product is stable and reliable, and the machine does not crash 7 days and 7 nights;

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3288 |
| CPU Clock | A17 Quad Core 1.8GHz |
| Memory | Standard 2GB, customizable 4GB |
| Storage | 4GB/8GB/16GB eMMC optional, 16GB standard |
| Power IC | Using ACT8846, supports dynamic frequency scaling, etc. |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | Also supports TTL, LVDS, MIPI interfaceoutput |
| Touch Interface | Capacitive touch, USB or UART expansion resistor touch can be used |
| Audio Interface | AC97/IIS interface, supports audio recording and playback |
| SD Card Interface | 2chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | 2chHOST 2.0 |
| USB OTG Interface | 1chOTG 2.0 |
| UART Interface | 4chUART, supports UART with flow control |
| PWM Interface | 2chPWMoutput |
| I2C interface | 4chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 1chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | High-definition audio and video output interface, audio and video synchronization output |
| VGA interface | Use LCDoutput interface extension |
| startup configuration interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage | 3.7~5.5V(Recommended5Vinput) |
| Output Voltage | 3.3V/4.2V(Canfor base platepower supplyand battery charging) |
| Operating Temperature | -10~70 degrees |
| Storage Temperature | -10~80 degrees |


## Navigation

- [Dimensions and Structure](./x3288cv5-product-size-spec)
- [Pin Definition](./x3288cv5-pin-definition)
- [Hardware Design](./x3288cv5-hardware-design)
