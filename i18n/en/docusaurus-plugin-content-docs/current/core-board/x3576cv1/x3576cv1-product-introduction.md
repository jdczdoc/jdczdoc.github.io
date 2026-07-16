---
sidebar_position: 1
title: Product Introduction
description: X3576CV1核心板 overview, features, and specifications
---

# Product Introduction

X3576Core Board简介

Product Overview

X3576 是基于瑞芯微科技 RK3576 CPU 的一款Core Board，它由深圳市九鼎创展科技有限公司自主研发，生产并销售。

Typical application fields include industrial control, commercial display, multimedia terminals, edge computing, POS, vehicle-mounted systems, and other embedded scenarios.

Core Board Features

X3576Core Board具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅55mm*55mm；

系统power supply使用 PMU，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC；

使用LPDDR4x设计，最高supports 16GB；

supports 电源休眠唤醒；

Gigabit Ethernet supported、MIPI-CSI、MIPI-DSI、PCIE、USB 3.0等高速总线；

采用208PINCastellated-hole package；

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3576 (Quad A72 + Quad A53) |
| CPU Clock | 1.8GHz |
| RAM | 2GB 或 4GB 或 8GB |
| ROM | 4GB 或 8GB 或 16GB 或 32GB 或 64GB |
| Power IC | 使用RK806-S，supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 1chMIPI-DSI(MAX 2K@60Hz) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1chSDIOoutput通道 |
| eMMC interface | 板载eMMC interface，pin不另外引出 |
| Ethernet Interface | One Gigabit Ethernet interface supported |
| USB HOST 2.0 Interface | 2ch |
| USB HOST 3.0 Interface | 2ch |
| UART Interface | 11ch |
| PWM | 16ch |
| I2C interface | 10ch |
| Camera Interface | 3chMIPI-CSIinput |
| HDMI Interface | 1chHDMI2.0 TX |
| PCIe Interface | 1chPCIE2.0 |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS_S5/3A |
| Output Voltage / Current | VCC_3V3_S0/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_S3/500MA(for 同电压域IOpull-up)； |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


## Navigation

- [Dimensions and Structure](./x3576cv1-product-size-spec)
- [Pin Definition](./x3576cv1-pin-definition)
- [Hardware Design](./x3576cv1-hardware-design)
