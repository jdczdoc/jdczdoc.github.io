---
sidebar_position: 1
title: Product Introduction
description: X3399CV5核心板 overview, features, and specifications
---

# Product Introduction

x3399Core Board简介

Product Overview

X3399CV5是基于瑞芯微RK3399的一款Core Board，它由深圳市九鼎创展科技有限公司自主研发，生产并销售。RK3399代表了国产芯片的顶尖水平，它是一款由四核A53，双核A72大小核组合而成的六核高性能CPU，CPU Clock高达2GB。

Core Board Features

X3399CV5Core Board具有以下特性：

最佳尺寸，即保证精悍的体积又保证足够的GPIO口，仅55mm*55mm；

使用RK自身的RK808 PMU，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC，默认使用东芝16GB eMMC；

使用双通道LPDDR4设计，默认supports 2GB容量，可定制4GB容量；

supports 电源休眠唤醒；

supports Android6.0、Android7.0、Linux、Debian9、Ubuntu等操作系统；

supports 千兆有线以太网；

引出高达200PINpin，几乎囊括CPU所有pin；

产品稳定可靠，经过大量high/low temperature，repeated reboot，安卓stability test，安兔兔测试等可靠性实验，拷机7天7夜不死机；

X3399CV4/X3399CV5Core Board相对原来的X3399CV3的基础上，将LPDDR3调整为LPDDR4，pin完全兼容。针对Android7.0及以上操作系统，代码完全兼容。

注意，目前Android6.0版本不supports LPDDR4，需要使用X3399CV4/X3399CV5Core Board的用户，请谨慎选择。

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3399 |
| CPU Clock | 四核A53(1.4GHz) + 双核A72(2GHz) |
| Memory | 标配2GB，无缝兼容4GB |
| Storage | 标配16GB，其他容量可选 |
| Power IC | 使用RT808，supports dynamic frequency scaling等 |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 同时supports MIPI、EDP、HDMI Interfaceoutput |
| Touch Interface | 电容touch，可使用USB或UART扩展电阻touch |
| Audio Interface | AC97/IIS interface，supports 录放音 |
| SD Card Interface | 2chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Gigabit Ethernet supported |
| USB HOST 2.0 Interface | 2chHOST 2.0 |
| USB HOST 3.0 Interface | 2chTYPE3.0 |
| UART Interface | 5chUART，supports 带流控UART |
| PWM Interface | 4chPWMoutput |
| I2C interface | 7chI2Coutput |
| SPI Interface | 1chSPIoutput |
| ADC Interface | 1chADCoutput |
| Camera Interface | 1chBT656/BT601，1chMIPIoutput |
| HDMI Interface | 高清音视频output interface，音视频同步output |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| 主3.3VInput Voltage | 3.3V/4.3A(推荐使用3.3V/5Ainput) |
| 副3.3VInput Voltage | 3.3V/300mA(不能和主3.3V混用) |
| RTCInput Voltage | 2.5到3V/100uA |
| Output Voltage | 1.8V(可for 底板power supply，休眠后为0V) |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


## Navigation

- [Dimensions and Structure](./x3399cv5-product-size-spec)
- [Pin Definition](./x3399cv5-pin-definition)
- [Hardware Design](./x3399cv5-hardware-design)
