---
sidebar_position: 1
title: Product Introduction
description: X3128CV4核心板 overview, features, and specifications
---

# Product Introduction

x3128cv4Core Board简介

Product Overview

The X3128CV4 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

X3128CV4Core Board广泛应for 人机交互，智能控制系统，便携手持投影仪，机顶盒，医疗，车载，POS等领域，尤其适合于对成本敏感，性能又有较高要求的应用场景。

X3128CV4Core Board具有以下特性：

最佳尺寸，即保证精悍的体积又保证足够的GPIO口，仅45mm*45mm；

使用瑞芯微的RK816作为电源管理设计，成本低廉，性能可靠；

supports 多种品牌，多种容量的eMMC，默认使用东芝8GB eMMC，可兼容nand flash；

使用单通道DDR3设计，默认supports 1GB容量，可定制2GB，512MB容量；

supports 电源休眠唤醒；

supports Android6.0，Linux操作系统；

supports 千兆有线以太网；

产品稳定可靠，拷机7天7夜不死机；

Core Board FeaturesParameter

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3128 |
| CPU Clock | A7四核1.3GHz |
| Memory | 标配1GB，可定制2GB及512MB |
| Storage | 标配8GB eMMC，可选配nand flash |
| Power IC | 使用RK816，supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | TTL、LVDS、MIPI interface三选一 |
| Touch Interface | 电容touch，可使用USB或UART扩展电阻touch |
| Audio Interface | AC97/IIS interface，supports 录放音 |
| SD Card Interface | 2chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST Interface | 1chHOST 2.0 |
| USB OTG Interface | 1chOTG 2.0 |
| UART Interface | 3chUART，2ch带流控，1chfor DEBUG |
| PWM Interface | 3chPWMoutput |
| I2C interface | 4chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 3chADCinput |
| Camera Interface | 1chBT656/BT601 |
| HDMI Interface | HD audio/video output; LCD and HDMI are mutually exclusive |
| 启动配置 interface | No boot configuration required; core board adapts automatically |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage | 4.8~5.5V(推荐使用5Vinput) |
| Output Voltage | 3.3V/4.2V(可for 底板power supply及电池充电) |
| Operating Temperature | -10~70度 |
| Storage Temperature | -10~80度 |


## Navigation

- [Dimensions and Structure](./x3128cv4-product-size-spec)
- [Pin Definition](./x3128cv4-pin-definition)
- [Hardware Design](./x3128cv4-hardware-design)
