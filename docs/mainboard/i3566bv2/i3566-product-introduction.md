---
sidebar_position: 1
title: 产品介绍
description: I3566 主板简介、功能特性、核心板特性和软件资源
---

# 产品介绍

I3566 主板基于 Rockchip RK3566 平台设计，面向嵌入式产品开发、系统移植、接口验证和驱动调试。主板集成显示、网络、音频、USB、串口、GPIO、4G 扩展等常用外设资源，可用于评估 RK3566 平台和快速搭建应用原型。

![I3566 主板外观](./i3566-board-overview.png)

## 功能特性

- ARM Cortex-A55 四核，主频 1.8GHz × 4。
- 内存支持 1GB / 2GB / 4GB / 8GB LPDDR4 / LPDDR4X，标配 2GB。
- Flash 标配 16GB。
- 4 路 USB HOST 2.0，其中 1 路 Type-A USB 座复用为 USB OTG，另外 3 路通过 PH 座引出。
- 1 路 USB HOST 3.0、3 路 TTL 串口、1 路 RS232、1 路 RS485、1 路 TF 卡接口。
- 1 路 HDMI 输出、1 路 DSI 或 LVDS 显示接口、1 路 EDP 显示接口。
- 支持电容触摸、背光无级调节、红外接收、外置喇叭、MIC 输入和耳机输出。
- 板载双频 Wi-Fi / BT 模块，支持千兆以太网 YT8521 和 PCIe 4G 模块扩展。

## 规格概览

| 项目 | 参数 |
| --- | --- |
| SoC | Rockchip RK3566 |
| CPU | 四核 Cortex-A55 1.8GHz |
| 内存 | 1GB / 2GB / 4GB / 8GB LPDDR4 / LPDDR4X，标配 2GB |
| 存储 | 4GB / 8GB / 16GB eMMC 可选，标配 16GB |
| 显示 | DSI / LVDS / EDP / HDMI |
| 网络 | 千兆以太网 YT8521，双频 Wi-Fi / BT |
| USB | 4 路 USB HOST 2.0，1 路 USB HOST 3.0，1 路 OTG |
| 串口 | 3 路 TTL 串口、1 路 RS232、1 路 RS485 |
| 电源 | 主板 12V DC 输入；核心板 VBUS 5V / 2A，VBAT 3.5V 到 4.2V |
| 核心板尺寸 | 45mm × 45mm × 3mm，172PIN 邮票孔 |


## 核心板特性

- 核心板尺寸 45mm × 45mm。
- 引出 172PIN 管脚。
- 使用 RK817 PMU，保证工作稳定可靠。
- LPDDR4 / LPDDR4X 设计，支持 1GB / 2GB / 4GB / 8GB 容量。
- 支持 Android / Linux 操作系统。
- 支持千兆有线以太网。
- 经过高低温、反复重启等可靠性实验。

## 系统配置

| CPU | RK3566 |
| --- | --- |
| 主频 | 四核A55(1.8GHz) |
| 内存 | 标配2GB，硬件兼容1GB/4GB/8GB |
| 存储器 | 4GB/8GB/16GB eMMC可选，标配16GB |
| 电源IC | 使用RK817，支持适配器、电池供电 |


## 接口参数

| LCD接口 | 支持DSI/LVDS/EDP/HDMI接口输出 |
| --- | --- |
| Touch接口 | 电容触摸 |
| 音频接口 | 支持耳机喇叭直接输出，支持录放音 |
| SD卡接口 | 2路SDIO输出通道 |
| eMMC接口 | 板载eMMC接口，管脚不另外引出 |
| 以太网接口 | 支持1路千兆以太网 |
| USB HOST 2.0接口 | 1路HOST 2.0 |
| USB HOST 3.0接口 | 1路HOST 3.0 |
| OTG接口 | 1路OTG接口 |
| UART接口 | 10路串口，支持带流控串口 |
| PWM接口 | 16路PWM输出 |
| IIC接口 | 6路IIC输出 |
| SPI接口 | 4路SPI输出 |
| ADC接口 | 2路ADC输出（有6路未引出） |
| Camera接口 | CSI/BT601/BT656/BT1120/RAW输入 |


## 电气特性

| VBUS输入电压 | 5V/2A |
| --- | --- |
| VBAT输入电压 | 3.5到4.2V，典型值3.7V |
| 工作温度 | -10~70度 |
| 储存温度 | -10~40度 |


## 软件资源

I3566 支持 Android 11 和 Linux / Qt 系统，驱动支持情况如下：

| system / driver | Linux4.19+ / Android11 | Linux4.19+QT |
| --- | --- | --- |
| 7寸MIPI屏(1024*600) | ● | ● |
| 背光驱动 | ● | ● |
| PMIC驱动(RK817) | ● | ● |
| 电容触摸 | ● | ● |
| eMMC驱动 | ● | ● |
| SD卡驱动 | ● | ● |
| 独立按键 | ● | ● |
| ADC驱动 | ● | ● |
| 开关机 | ● | ● |
| 休眠唤醒 | ● | ● |
| 两路USB HOST 2.0驱动 | ● | ● |
| 一路USB HOST 3.0驱动 | ● | ● |
| 一路OTG驱动 | ● | ● |
| PCIE总线驱动 | ● | ● |
| 光纤驱动 | ● | ● |
| RTC驱动 | ● | ● |
| 音频 | ● | ● |
| 录音 | ● | ● |
| 双频Wi-Fi/BT4.0 | ● | ● |
| GPS | ● | ● |
| CSI摄像头驱动 | ● | ● |
| USB口摄像头驱动 | ● | ● |
| 串口 | ● | ● |
| HDMI 2.0 | ● | ● |
| 千兆以太网 | ● | ● |
| USB鼠标键盘 | ● | ● |
| U-Boot | ● | ● |

