---
sidebar_position: 1
title: Product Introduction
description: I3128核心板 overview, features, and specifications
---

# Product Introduction

i3128Core Board简介

Product Overview

The I3128 is a core board developed by Shenzhen 9Tripod Technology Co., Ltd. It is based on the processor platform described in the original manual and is intended for embedded and industrial applications.

I3128CV1Core Board广泛应for 人机交互，智能控制系统，便携手持投影仪，机顶盒，医疗，车载，POS等领域，尤其适合于对成本敏感，性能又有较高要求的应用场景。

Core Board Features

I3128CV1Core Board具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅38mm*38mm；

使用RK自身的RK816 PMU，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC；

使用单片DDR3设计，可supports 512MB/1GB/2GB容量,默认512MB；

supports 电源休眠唤醒；

supports Android6.0、Linux等操作系统；

supports SPI、I2C、UART等通讯总线；

supports 千兆有线以太网；

产品稳定可靠，经过大量high/low temperature，repeated reboot，安卓stability test，安兔兔测试等可靠性实验，拷机7天7夜不死机；

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3128 |
| CPU Clock | A7四核1.3GHz |
| Memory | 标配512MB，可定制1GB及2GB |
| Storage | 标配4GB eMMC，可选配nand flash |
| Power IC | 使用RK816，supports dynamic frequency scaling等 |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | TTL、LVDS、MIPI interface三选一 |
| Touch Interface | 电容touch，可使用USB或I2C interfacetouch |
| Audio Interface | AC97/IIS interface，supports 录放音 |
| SD Card Interface | 2chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Gigabit Ethernet supported |
| USB OTG Interface | 1chOTG 2.0 |
| USB HOST Interface | 1chHOST 2.0 |
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
| 4VInput Voltage | 4.8~5.5V(推荐使用5Vinput) |
| Output Voltage | 3.3V/4.2V(可for 底板power supply及电池充电) |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~40度 |


## Navigation

- [Dimensions and Structure](./i3128-product-size-spec)
- [Pin Definition](./i3128-pin-definition)
- [Hardware Design](./i3128-hardware-design)
