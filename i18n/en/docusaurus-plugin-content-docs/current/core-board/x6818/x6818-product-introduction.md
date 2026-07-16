---
sidebar_position: 1
title: Product Introduction
description: X6818核心板 overview, features, and specifications
---

# Product Introduction

X6818Core Board简介

Product Overview

Typical application fields include industrial control, commercial display, multimedia terminals, edge computing, POS, vehicle-mounted systems, and other embedded scenarios.

X6818CV3Core Board具有以下特性：

最佳尺寸，即保证精悍的体积又保证足够的GPIO口，仅68mm*48mm；

使用x-powers的AXP228 PMU电源管理设计，在保证工作稳定可靠的同时， 成本足够低廉；

supports 多种品牌，多种容量的eMMC，默认使用东芝8GB eMMC(19nm MLC工艺)；

使用单通道DDR3设计，默认supports 1GB容量，可定制2GB容量；

supports 电源休眠唤醒；

supports Android5.1操作系统；

板载千兆有线以太网；

拒绝掉程序，远离使用nand flash批量掉程序的烦恼；

产品稳定可靠，拷机7天7夜不死机；

Specifications

### Mechanical Parameters

| Item | Parameter |
| --- | --- |
| Package | Castellated-hole package |
| Core Board Size | 68mm*48mm*3mm |
| Pin Pitch | 1.2mm |
| Pad Size | 1.8mm*0.8mm |
| Pin Count | 180PIN |
| PCB Layers | 8层 |
| Warpage | Less than 0.5% |


### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | S5P6818 |
| CPU Clock | 64位八核1.4+GHz |
| Memory | 标配1GB，可定制2GB |
| Storage | 4GB/8GB/16GB/32GB eMMC可选，标配8GB |
| Power IC | 使用AXP228，supports dynamic frequency scaling，库仑计等 |
| 以太网 | 使用RTL8211E千兆以太网PHY |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 同时supports TTL、LVDS、MIPI interfaceoutput |
| Touch Interface | 电容touch，可使用USB或UART扩展电阻touch |
| Audio Interface | AC97/IIS interface，supports 录放音 |
| SD Card Interface | 2chSDIOoutput通道 |
| Nand interface | 淘汰技术，未引出 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | 一chHOST 2.0，一chHSIC |
| USB OTG Interface | 一chOTG 2.0 |
| UART Interface | 6chUART，supports 带流控UART |
| PWM Interface | 4chPWMoutput |
| I2C interface | 2chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 2chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | 高清音视频output interface，音视频同步output |
| VGA interface | 使用LCDoutput interface扩展 |
| 启动配置 interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage | 3.7~5.5V(推荐使用5Vinput) |
| Output Voltage | 3.3V/4.2V(可for 底板power supply及电池充电) |
| Operating Temperature | -40~80度 |
| Storage Temperature | -10~80度 |


## Navigation

- [Dimensions and Structure](./x6818-product-size-spec)
- [Pin Definition](./x6818-pin-definition)
- [Hardware Design](./x6818-hardware-design)
