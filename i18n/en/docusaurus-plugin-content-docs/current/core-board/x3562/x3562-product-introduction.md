---
sidebar_position: 1
title: Product Introduction
description: X3562核心板 overview, features, and specifications
---

# Product Introduction

X3562Core Board简介

Product Overview

X3562CV2是基于瑞芯微RK3562 CPU的一款邮票孔Core Board，它由深圳市九鼎创展科技有限公司自主研发，生产并销售。

Core Board Features

X3562Core Board具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅45mm*45mm；

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
| Power IC | 使用RK809-5A，supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 1chMIPI DSI/LVDSmuxed as  interface |
| Audio Interface | 1chaudioinput interface，2chaudiooutput interface，6chI2S interface，3chSPDIF，2chPDM |
| SDIO Interface | 2chSDIO Interface |
| eMMC interface | 板载eMMC |
| Ethernet Interface | 1chRGMII interface |
| USB HOST 2.0 Interface | 2chUSB 2.0 interface |
| USB HOST 3.0 Interface | 1chUSB 3.0 interface |
| UART Interface | 16chUARTUART |
| PWM | 31chPWM |
| I2C interface | 11chI2C interface |
| Camera Interface | 2chMIPI_CSI interface |
| PCIe Interface | 1chPCIE2.0 interface |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS/3A，VCC3V3_SYS/3A |
| Output Voltage / Current | VCC_RSV1/400mA(3V)，VCC_1V8/2.5A |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


## Navigation

- [Dimensions and Structure](./x3562-product-size-spec)
- [Pin Definition](./x3562-pin-definition)
- [Hardware Design](./x3562-hardware-design)
