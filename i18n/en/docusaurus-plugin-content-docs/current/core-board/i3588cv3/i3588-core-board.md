---
sidebar_position: 1
title: Product Introduction
description: Product introduction, hardware resources, specifications, and mechanical information for the I3588 core board
---

# Product Introduction

## Overview

I3588 is a core board based on the Rockchip RK3588 processor. It is intended for embedded product development and provides a compact hardware platform with rich peripheral interfaces.

## Features

- 最佳尺寸, 保证引出全部GPIO 口的同时, 尺寸仅61mm*67mm
- 使用RK 自身的RK806 PMU, 在保证工作稳定可靠的同时, 成本足够低廉
- supports多种品牌, 多种容量的emmc
- 使用双通道LPDDR4(X)设计, 可supports2GB/4GB/8GB/16GB/32GB 容量
- supports电源休眠唤醒
- supportsandroid12.0, linux, debain, ubuntu 等操作系统
- supports双千兆有线以太网, SATA, PCIE, USB3.0 等高速总线
- 采用松下board-to-board connector, 接触稳定可靠
- 产品稳定可靠, 经过大量高低温, 反复重启, 安卓稳定性测试, 安兔兔测试等可靠性实验, 拷机7 天7 夜不死机

## Appearance and Mechanical Structure

![I3588 appearance and mechanical drawing](./i3588-figure-1.png)

![I3588 appearance and mechanical drawing](./i3588-figure-2.jpeg)

## Specifications

### System Configuration

| CPU | RK3588 |
|---|---|
| Frequency | quad-coreA76 +quad-coreA55(2.4GHz) |
| RAM / Storage | 4G&amp;16G或8G&amp;32Goptional |
| Power IC | 使用RT806, supports动态调频等 |

### Interface Parameters

| LCD Interface | 同时supports MIPI, EDP, HDMI Interface输出; 最<br />大supports6路同显, 4路异显 |
|---|---|
| Touch Interface | capacitive touch, 可使用USB或I2C Interface触摸 |
| Audio Interface | IIS/PCM/TDM接口 |
| SPDIF接口 | 2路8通道光纤audio output接口 |
| SD Card Interface | 2路SDIO输出通道 |
| eMMC Interface | on-boardeMMC Interface, 管脚not routed out separately |
| Ethernet Interface | 双千兆Ethernet Interface |
| USB HOST2.0接口 | 2路HOST2.0 |
| USB HOST3.0接口 | 2路USB OTG 3.0/2.0/TypeC |
| UART Interface | 10路串口, supports带流控串口 |
| PWM Interface | 16路PWM输出 |
| IIC Interface | 9路IIC输出 |
| SPI Interface | 5路SPI输出 |
| ADC Interface | 8路ADC输出 |
| CAN接口 | 3路CAN输出 |
| Camera Interface | 6路CSI输入 |
| HDMI Interface | 2路HDMI2.1 TX, 1路HDMI RX2.0 |
| PCIE接口 | PCIe3.0 (2x2,1x4,4x1) |
| SATA接口 | 2x SATA3.3/PCIe2.1 |

### Electrical Characteristics

| 4VInput Voltage | 4V/5A(推荐使用4V/8A输入) |
|---|---|
| RTCInput Voltage | 2.5到3V/100uA, 外接纽扣电池供电即可 |
| Output Voltage | 3.3V/2A, 1.8V/2A(can be used for底板供电) |
| Operating Temperature | 0~70°C |
| Storage Temperature | -10~50°C |

### Mechanical Parameters

| Package | Board-to-board connector package |
|---|---|
| Core Board Size | 67mm*61mm*6mm |
| Pin Pitch | 0.5mm |
| Connector Specification | 松下AXK6F80537YG |
| Number of Pins | 320PIN |
| PCB Layers | 10层 |
| Warpage | less than0.5% |

## Related Pages

- [Pin Definition](./i3588-pin-definition)
- [Hardware Design](./i3588-hardware-design)
