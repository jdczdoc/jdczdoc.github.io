---
sidebar_position: 1
title: Product Introduction
description: Product introduction, hardware resources, specifications, and mechanical information for the X3588S core board
---

# Product Introduction

## Overview

X3588S is a core board based on the Rockchip RK3588S processor. It is intended for embedded product development and provides a compact hardware platform with rich peripheral interfaces.

## Features

- 最佳尺寸, 保证引出全部GPIO 口的同时, 尺寸仅55mm*55mm
- 使用RK 自身的RK806 PMU, 在保证工作稳定可靠的同时, 成本足够低廉
- supports多种品牌, 多种容量的emmc, 最大supports512GB
- 使用双通道LPDDR4(X)或LPDDR5 设计, 可supports2GB/4GB/8GB/16GB/32GB 容量
- supports电源休眠唤醒
- supportsandroid12.0, linux, debian, ubuntu 等操作系统
- supportsGigabit Ethernet, SATA, PCIE, USB3.0 等高速总线
- 采用200PIN Castellated-hole package
- 已验证各种可靠性实验

## Appearance and Mechanical Structure

![X3588S appearance and mechanical drawing](./x3588s-figure-1.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-2.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-3.jpeg)

![X3588S appearance and mechanical drawing](./x3588s-figure-4.jpeg)

## Specifications

### System Configuration

| CPU | RK3588S |
|---|---|
| Frequency | 四核A76+四核A55(2.4GHz) |
| RAM / Storage | 4G&amp;16G或8G&amp;32Goptional |
| Power IC | 使用RT806, supports动态调频等 |

### Interface Parameters

| LCD Interface | 同时supportsMIPI, EDP, HDMI Interface输出; 最<br />大supports6路同显, 4路异显 |
|---|---|
| Touch Interface | 电容触摸, 可使用USB或I2C接口触摸 |
| Audio Interface | IIS/PCM/TDM接口 |
| SPDIF Interface | 2路8通道光纤audio output接口 |
| SD Card Interface | 2路SDIO输出通道 |
| eMMC Interface | 板载eMMC Interface, 管脚不另外引出 |
| Ethernet Interface | 可supports双千兆Ethernet Interface |
| USBHOST2.0接口 | 2路HOST2.0 |
| USBHOST3.0接口 | 2路USBOTG3.0/2.0/TypeC |
| UART Interface | 10路串口, supports带流控串口 |
| PWM接口 | 16路PWM输出 |
| IIC Interface | 9路IIC输出 |
| SPI Interface | 5路SPI输出 |
| ADC Interface | 8路ADC输出 |
| CAN Interface | 3路CAN输出 |
| Camera Interface | 4路CSI输入 |
| HDMI Interface | 1路HDMI2.1TX |
| PCIE Interface | PCIe2.0 |
| SATA Interface | 2xSATA3.0/PCIe2.0 |

### Electrical Characteristics

| 4VInput Voltage | 4V/5A(推荐使用4V/8A输入) |
|---|---|
| Output Voltage | 3.3V/2A, 1.8V/2A(can be used for底板供电) |
| Operating Temperature | 0~70°C |
| Storage Temperature | -10~50°C |

### Mechanical Parameters

| Package | Board-to-board connector package |
|---|---|
| Core Board Size | 55mm*55mm*3mm |
| Pin Pitch | 0.5mm |
| Number of Pins | 200PIN |
| PCB Layers | LPDDR4方案: 10层 LPDDR5方案: 12层 |
| Warpage | less than0.5% |

## Related Pages

- [Pin Definition](./x3588s-pin-definition)
- [Hardware Design](./x3588s-hardware-design)
