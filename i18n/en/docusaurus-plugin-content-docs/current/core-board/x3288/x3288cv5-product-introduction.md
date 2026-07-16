---
sidebar_position: 1
title: Product Introduction
description: X3288CV5核心板 overview, features, and specifications
---

# Product Introduction

X3288CV5Core Board简介

Product Overview

The X3288 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

X3288CV5相对X3288CV3，X3288CV4，将PMU由5T620换成了ACT8846，优化了电源设计，二者pin上完全兼容，程序上只需要打一下PMU的补丁即可。

X3288CV5Core Board具有以下特性：

最佳尺寸，即保证精悍的体积又保证足够的GPIO口，仅55mm*55mm；

使用理光的RC5T620的PMU作为电源管理设计，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC，默认使用东芝8GB eMMC(19nm MLC工艺)；

使用双通道DDR3设计，默认supports 2GB容量，可定制4GB容量；

supports 电源休眠唤醒；

supports Android4.4、Android5.1操作系统；

supports 千兆有线以太网；

拒绝掉程序，远离使用nand flash批量掉程序的烦恼；

产品稳定可靠，拷机7天7夜不死机；

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3288 |
| CPU Clock | A17四核1.8GHz |
| Memory | 标配2GB，可定制4GB |
| Storage | 4GB/8GB/16GB eMMC可选，标配16GB |
| Power IC | 使用ACT8846，supports dynamic frequency scaling等 |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 同时supports TTL、LVDS、MIPI interfaceoutput |
| Touch Interface | 电容touch，可使用USB或UART扩展电阻touch |
| Audio Interface | AC97/IIS interface，supports 录放音 |
| SD Card Interface | 2chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | 2chHOST 2.0 |
| USB OTG Interface | 1chOTG 2.0 |
| UART Interface | 4chUART，supports 带流控UART |
| PWM Interface | 2chPWMoutput |
| I2C interface | 4chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 1chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | 高清音视频output interface，音视频同步output |
| VGA interface | 使用LCDoutput interface扩展 |
| 启动配置 interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage | 3.7~5.5V(推荐使用5Vinput) |
| Output Voltage | 3.3V/4.2V(可for 底板power supply及电池充电) |
| Operating Temperature | -10~70度 |
| Storage Temperature | -10~80度 |


## Navigation

- [Dimensions and Structure](./x3288cv5-product-size-spec)
- [Pin Definition](./x3288cv5-pin-definition)
- [Hardware Design](./x3288cv5-hardware-design)
