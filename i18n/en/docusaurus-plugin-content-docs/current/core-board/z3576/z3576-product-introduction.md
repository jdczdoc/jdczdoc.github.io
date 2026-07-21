---
sidebar_position: 1
title: Product Introduction
description: Z3576 core board overview, features, and specifications
---

# Product Introduction

Introduction to Z3576Core Board

Product Overview

Z3576 is a Core Board based on Rockchip RK3576 CPU. It is manufactured by Shenzhen Jiuding Chuangzhan Technology Co., Ltd.

The company independently develops, produces and sells products.

RK3576 is Rockchip’s second-generation 8nm high-performance AIOT platform. It integrates an independent 6TOPS (Tera

Operations Per Second, NPU (Neural Network Processing Unit), for processing artificial intelligence

related tasks. In addition, RK3576 also supports UFS (Universal Flash Storage) storage,

Provides efficient data storage and reading capabilities. Suitable for a variety of application scenarios, especially commercial display equipment and live video

Iterative upgrades of embedded systems and smart devices such as equipment, industrial control hosts/industrial control boards, and automotive electronics.

Core Board Features

Z3576Core Board has the following features:

The optimal size ensures that all GPIO ports are accessible while the size is only 40mm*40mm;

The system power supply uses PMU, which ensures stable and reliable operation and is low enough in cost;

supports eMMC of multiple brands and capacities;

Using LPDDR4x design, supports up to 16GB;

supports power sleep wakeup;

Gigabit Ethernet supported, MIPI-CSI, MIPI-DSI, PCIE, USB 3.0 and other high-speed buses;

Using 447PIN LGA package;

Specifications

### System Configuration

| Item | Parameter |
| --- | --- |
| CPU | RK3576 (Quad A72 + Quad A53) |
| CPU Clock | 2.2GHz |
| RAM | 2GB/4GB/8GB/16GB |
| ROM | 8GB/16GB/32GB/64GB/128GB/256GB/512GB |
| Power IC | Using RK806-S, supports dynamic frequency scaling |


### Interface Parameters

| Item | Parameter |
| --- | --- |
| LCD Interface | 1 ch MIPI-DSI(MAX 2K@60Hz) |
| Touch Interface | Capacitive touch, I2C interface |
| Audio Interface | IIS/PCM/PDM/SPDIF |
| SD Card Interface | 1 ch SDIO output channel |
| eMMC Interface | Onboard eMMC interface, no pins are drawn out separately |
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
| Output Voltage / Current | VCC_3V3_S0/1A（for same-voltage-domain peripheralspower supply）； / VCC_1V8_S3/500MA(for Same voltage domain IO superior / pull)； |
| Operating Temperature | 0~70 degrees |
| Storage Temperature | -10~50 degrees |


## Navigation

- [Dimensions and Structure](./z3576-product-size-spec)
- [Pin Definition](./z3576-pin-definition)
- [Hardware Design](./z3576-hardware-design)
