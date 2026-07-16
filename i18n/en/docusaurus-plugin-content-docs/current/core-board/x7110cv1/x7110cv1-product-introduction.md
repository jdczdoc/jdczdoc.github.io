---
sidebar_position: 1
title: Product Introduction
description: X7110CV1核心板 overview, features, and specifications
---

# Product Introduction

JH7110Core Board简介

Product Overview

X7110CV1是基于赛昉科技JH7110 CPU的一款Core Board，它由深圳市九鼎创展科技有限公司自主研发，生产并销售。

Core Board Features

JH7110Core Board具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅45mm*45mm；

系统power supply使用 PMU，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC；

使用LPDDR4设计，最大supports 8GB容量；

supports 电源休眠唤醒；

supports 双千兆以太网、MIPI-CSI、MIPI-DSI、PCIE、USB 3.0等高速总线；

采用172PINCastellated-hole package；

已验证各种可靠性实验；

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | JH7110 |
| CPU Clock | 1.5GHz |
| RAM | 2GB或4GB或8GB |
| ROM | 4GB或8GB或16GB或32GB或64GB |
| Power IC | 使用AXP15060，supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | MIPI-DSI(MAX 2K@30fps) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | Dual Gigabit Ethernet supported |
| USB HOST 2.0 Interface | 1ch |
| USB HOST 3.0 Interface | 1ch |
| UART Interface | 6ch |
| PWM Interface | 8chPWMoutput |
| I2C interface | 7ch |
| SPI Interface | 7ch |
| CAN Interface | 2ch |
| Camera Interface | 1chMIPI-CSIinput |
| HDMI Interface | 1chHDMI2.0 TX |
| PCIe Interface | 1chPCIe2.0 |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS/3A |
| Output Voltage / Current | VCC_3V3_SYS_OUT/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_1/500MA(for 同电压域IOpull-up)； / VDD33_IO/1A（for same-voltage-domain peripheralspower supply）； |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


## Navigation

- [Dimensions and Structure](./x7110cv1-product-size-spec)
- [Pin Definition](./x7110cv1-pin-definition)
- [Hardware Design](./x7110cv1-hardware-design)
