---
sidebar_position: 1
title: Product Introduction
description: X3399CV5 core board overview, features, and specifications
---

# Product Introduction

Introduction to x3399Core Board

Product Overview

X3399CV5 is a Core Board based on Rockchip RK3399. It is independently developed, produced and sold by Shenzhen Jiuding Chuangzhan Technology Co., Ltd. RK3399 represents the top level of domestic chips. It is a six-core high-performance CPU composed of quad-core A53 and dual-core A72 large and small cores. The CPU Clock is up to 2GB.

Core Board Features

X3399CV5Core Board has the following features:

The optimal size, which ensures both compact size and sufficient GPIO ports, is only 55mm*55mm;

Using RK's own RK808 PMU, the cost is low enough while ensuring stable and reliable operation;

supports eMMC of multiple brands and capacities, Toshiba 16GB eMMC is used by default;

Using dual-channel LPDDR4 design, the default supports 2GB capacity, and 4GB capacity can be customized;

supports power sleep wakeup;

supports Android6.0, Android7.0, Linux, Debian9, Ubuntu and other operating systems;

supports Gigabit wired Ethernet;

Lead to up to 200PIN pins, covering almost all pins of the CPU;

The product is stable and reliable. After a large number of high/low temperature, repeated reboot, Android stability test, Antutu test and other reliability experiments, the machine did not crash for 7 days and 7 nights;

Based on the original X3399CV3, X3399CV4/X3399CV5Core Board adjusts LPDDR3 to LPDDR4, and the pins are fully compatible. For Android 7.0 and above operating systems, the code is fully compatible.

Note that the current Android 6.0 version does not support LPDDR4. Users who need to use X3399CV4/X3399CV5Core Board, please choose carefully.

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3399 |
| CPU Clock | Quad-core A53(1.4GHz) + dual-core A72(2GHz) |
| Memory | Standard 2GB, seamlessly compatible with 4GB |
| Storage | 16GB standard, other capacities optional |
| Power IC | Using RT808, supports dynamic frequency scaling, etc. |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | Also supports MIPI, EDP, HDMI Interfaceoutput |
| Touch Interface | Capacitive touch, USB or UART expansion resistor touch can be used |
| Audio Interface | AC97/IIS interface, supports audio recording and playback |
| SD Card Interface | 2chSDIOoutput channel |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST 2.0 Interface | 2chHOST 2.0 |
| USB HOST 3.0 Interface | 2chTYPE3.0 |
| UART Interface | 5chUART, supports UART with flow control |
| PWM Interface | 4chPWMoutput |
| I2C interface | 7chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 1chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | High-definition audio and video output interface, audio and video synchronization output |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Main 3.3VInput Voltage | 3.3V/4.3A(Recommended3.3V/5Ainput) |
| Vice 3.3VInput Voltage | 3.3V/300mA(Can't be with the Lord3.3VMix) |
| RTCInput Voltage | 2.5 to 3V/100uA |
| Output Voltage | 1.8V(Canfor base platepower supply，After sleeping, it is0V) |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~50 degrees |


## Navigation

- [Dimensions and Structure](./x3399cv5-product-size-spec)
- [Pin Definition](./x3399cv5-pin-definition)
- [Hardware Design](./x3399cv5-hardware-design)
