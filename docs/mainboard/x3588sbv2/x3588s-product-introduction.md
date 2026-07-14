---
sidebar_position: 1
title: 产品介绍
description: X3588S mini ITX 主板产品介绍、功能特性和核心板参数
---

# 产品介绍

X3588S mini ITX 主板基于 Rockchip RK3588S 平台，采用 Mini-ITX 板型，适配通用 ITX 机箱。主板集成 X3588SCV1 核心板，并在底板上引出 USB、串口、HDMI、VGA、MIPI DSI、MIPI CSI、SATA、以太网、音频、按键、RTC、Wi-Fi/BT、mini PCIe 等常用接口，适合高性能边缘计算、工业控制、多媒体显示、AI 推理、摄像头采集和嵌入式整机方案验证。

![X3588S mini ITX 主板外观](./x3588s-board-overview.png)

## 功能特性

- 内核：ARM Cortex-A76 四核 + Cortex-A55 四核。
- 主频：2.4GHz。
- 内存：1GB/2GB/4GB/8GB/16GB/32GB LPDDR4/LPDDR4X。
- Flash：支持 4GB/8GB/16GB/32GB/64GB/128GB eMMC 可选。
- 6 路 USB HOST2.0 接口，1 路 USB HOST3.0 接口，1 路 Type-C 接口。
- 7 路 TTL 串口接口，其中包含 1 路调试串口，可配置为 2 路 RS232 和 2 路 RS485。
- 1 路 TF 卡接口。
- 1 个复位按钮、1 个开关机按钮、1 个强制升级按钮、2 路独立按键。
- 1 路 HDMI 输出接口、2 路 DSI 显示接口、1 路 EDP 显示接口，EDP 与 HDMI OUT 复用。
- 1 路 SATA 接口。
- 外置喇叭接口、LINE IN、MIC 输入、耳机输出接口。
- 支持电容触摸。
- 板载高速双频 WIFI 蓝牙模块。
- 支持 RTC 时钟实时保存。
- 支持千兆有线以太网。
- 最大支持四路 CSI 摄像头接口。
- 支持 mini PCIe 无线模块接口。

## 核心板特性

- X3588SCV1 核心板尺寸 55mm × 55mm，在保证引出全部 GPIO 的同时保持较小尺寸。
- 使用 RK806 PMU，在保证工作稳定可靠的同时降低成本。
- 使用双通道 LPDDR4/LPDDR4X 设计，最大支持 32GB 容量。
- 支持电源休眠唤醒。
- 支持 Android 12.0、Linux、Debian、Ubuntu 等操作系统。
- 支持千兆以太网、SATA、PCIe、USB3.0 等高速总线。
- 采用邮票孔封装，接触稳定可靠。
- 经过多项可靠性实验。

## 系统配置

| CPU | RK3588S |
| --- | --- |
| 主频 | 四核A76 +四核A55(2.4GHz) |
| 内存/存储器 | 4G&16G或8G&32G可选 |
| 电源IC | 使用RT806，支持动态调频等 |


## 接口参数

| LCD接口 | 同时支持MIPI、EDP、HDMI接口输出；最大支持6路同显，4路异显 |
| --- | --- |
| Touch接口 | 电容触摸，可使用USB或I2C接口触摸 |
| 音频接口 | IIS/PCM/TDM接口 |
| SPDIF接口 | 2路8通道光纤音频输出接口 |
| SD卡接口 | 2路SDIO输出通道 |
| emmc接口 | 板载emmc接口，管脚不另外引出 |
| 以太网接口 | 千兆以太网接口 |
| USB HOST2.0接口 | 2路HOST2.0 |
| USB HOST3.0接口 | 2路USB OTG 3.0/2.0/TypeC |
| UART接口 | 10路串口，支持带流控串口 |
| PWM接口 | 16路PWM输出 |
| IIC接口 | 9路IIC输出 |
| SPI接口 | 5路SPI输出 |
| ADC接口 | 8路ADC输出 |
| CAN接口 | 3路CAN输出 |
| Camera接口 | 6路CSI输入 |
| HDMI接口 | 1路HDMI2.1 TX |
| PCIE接口 | PCIe2.0 |
| SATA接口 | 2x SATA3.0/PCIe2.1 |


## 电气特性

| 4V输入电压 | 4V/5A(推荐使用4V/8A输入) |
| --- | --- |
| RTC输入电压 | 2.5到3V/100uA，外接纽扣电池供电即可 |
| 输出电压 | 3.3V/2A，1.8V/2A(可用于底板供电) |
| 工作温度 | 0~70度 |
| 储存温度 | -10~50度 |


:::note
硬件手册的电气特性表中原文写有“4V 输入电压”，但接口图、配置清单和 DC 插座标识均指向 12V 供电。实际产品设计、售前资料和原理图中应统一确认输入电源标称值。
:::
