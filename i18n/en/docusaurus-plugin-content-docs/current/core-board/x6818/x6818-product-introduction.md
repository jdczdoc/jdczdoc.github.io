---
sidebar_position: 1
title: Product Introduction
description: X6818 core board overview, features, and specifications
---

# Product Introduction

Introduction to X6818Core Board

Product Overview

Typical application fields include industrial control, commercial display, multimedia terminals, edge computing, POS, vehicle-mounted systems, and other embedded scenarios.

X6818CV3Core Board has the following features:

The optimal size, which ensures both compact size and sufficient GPIO ports, is only 68mm*48mm;

Using x-powers' AXP228 PMU power management design, the cost is low enough while ensuring stable and reliable operation;

supports eMMC of multiple brands and capacities, the default is Toshiba 8GB eMMC(19nm MLCCraftsmanship);

Using single-channel DDR3 design, the default supports 1GB capacity, and 2GB capacity can be customized;

supports power sleep wakeup;

supports Android5.1 operating system;

Onboard Gigabit wired Ethernet;

Refuse to delete programs and stay away from the trouble of using nand flash to delete programs in batches;

The product is stable and reliable, and the machine does not crash 7 days and 7 nights;

Specifications

### Mechanical Parameters

| Item | Parameter |
| --- | --- |
| Package | Castellated-hole package |
| Core Board Size | 68mm*48mm*3mm |
| Pin Pitch | 1.2mm |
| Pad Size | 1.8mm*0.8mm |
| Pin Count | 180PIN |
| PCB Layers | 8th floor |
| Warpage | Less than 0.5% |


### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | S5P6818 |
| CPU Clock | 64-bit octa-core 1.4+GHz |
| Memory | 1GB standard, 2GB can be customized |
| Storage | 4GB/8GB/16GB/32GB eMMC optional, 8GB standard |
| Power IC | Using AXP228, supports dynamic frequency scaling, coulomb counter, etc. |
| Ethernet | Using the RTL8211E Gigabit Ethernet PHY |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | Also supports TTL, LVDS, MIPI interfaceoutput |
| Touch Interface | Capacitive touch, USB or UART expansion resistor touch can be used |
| Audio Interface | AC97/IIS interface, supports audio recording and playback |
| SD Card Interface | 2chSDIOoutput channel |
| Nand interface | Obsolete technology, not introduced |
| eMMC interface | Onboard eMMC interface, the pin is not lead out separately |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | One chHOST 2.0, one chHSIC |
| USB OTG Interface | 1chOTG 2.0 |
| UART Interface | 6chUART, supports UART with flow control |
| PWM Interface | 4chPWMoutput |
| I2C interface | 2chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 2chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | High-definition audio and video output interface, audio and video synchronization output |
| VGA interface | Use LCDoutput interface extension |
| startup configuration interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage | 3.7~5.5V(Recommended5Vinput) |
| Output Voltage | 3.3V/4.2V(Canfor base platepower supplyand battery charging) |
| Operating Temperature | -40~80 degrees |
| Storage Temperature | -10~80 degrees |


## Navigation

- [Dimensions and Structure](./x6818-product-size-spec)
- [Pin Definition](./x6818-pin-definition)
- [Hardware Design](./x6818-hardware-design)
