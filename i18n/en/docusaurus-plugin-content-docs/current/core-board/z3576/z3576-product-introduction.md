---
sidebar_position: 1
title: Product Introduction
description: Z3576核心板 overview, features, and specifications
---

# Product Introduction

Z3576Core Board简介

Product Overview

Z3576 是基于瑞芯微科技 RK3576 CPU 的一款Core Board，它由深圳市九鼎创展科技有限

公司自主研发，生产并销售。

RK3576 是瑞芯微第二代 8nm 高性能 AIOT 平台，它集成了独立的 6TOPS（Tera

Operations Per Second，每秒万亿次操作）NPU（神经网络处理单元），for 处理人工智能

相关的任务。此外，RK3576 还supports  UFS（Universal Flash Storage，通用闪存存储）存储，

提供了高效的数据存储和读取能力。适for 多种应用场景，尤其是商业显示设备、视频直播

设备、工业控制主机/工控板、汽车电子等嵌入式系统和智能设备的迭代升级。

Core Board Features

Z3576Core Board具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅40mm*40mm；

系统power supply使用 PMU，在保证工作稳定可靠的同时，成本足够低廉；

supports 多种品牌，多种容量的eMMC；

使用LPDDR4x设计，最高supports 16GB；

supports 电源休眠唤醒；

Gigabit Ethernet supported、MIPI-CSI、MIPI-DSI、PCIE、USB 3.0等高速总线；

采用447PIN LGA package；

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3576 (Quad A72 + Quad A53) |
| CPU Clock | 2.2GHz |
| RAM | 2GB/4GB/8GB/16GB |
| ROM | 8GB/16GB/32GB/64GB/128GB/256GB/512GB |
| Power IC | 使用 RK806-S，supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 1 ch MIPI-DSI(MAX 2K@60Hz) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1 ch SDIO output通道 |
| eMMC Interface | 板载 eMMC  interface，pin不另外引出 |
| Ethernet Interface | One Gigabit Ethernet interface supported |
| USB HOST 2.0 Interface | 2 ch |
| USB HOST 3.0 Interface | 2ch |
| UART Interface | 11ch |
| PWM | 16ch |
| I2C interface | 10ch |
| Camera Interface | 3 ch MIPI-CSI input |
| HDMI Interface | 1 ch HDMI2.0 TX |
| PCIe Interface | 1 ch PCIE2.0 |


### Electrical Characteristics

| Item | Parameter |
| --- | --- |
| Input Voltage / Current | VCC5V0_SYS_S5/3A |
| Output Voltage / Current | VCC_3V3_S0/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_S3/500MA(for 同电压域 IO 上 / 拉)； |
| Operating Temperature | 0~70度 |
| Storage Temperature | -10~50度 |


## Navigation

- [Dimensions and Structure](./z3576-product-size-spec)
- [Pin Definition](./z3576-pin-definition)
- [Hardware Design](./z3576-hardware-design)
