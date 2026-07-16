---
sidebar_position: 1
title: 产品介绍
description: ibox3568 主板简介、功能特性、主板特性和软件资源
---

# 产品介绍

ibox3568 主板基于 Rockchip RK3568 / RK3568B2 平台设计，采用一体化 PCBA 结构，集成双千兆以太网、HDMI 输入输出、SATA、PCIe、CAN、MIPI Camera、显示、音频、USB、串口和 GPIO 等常用资源，适合嵌入式产品开发、系统移植、接口验证和驱动调试。

![ibox3568 主板外观](./ibox3568-board-overview.png)

## 功能特性

- ARM Cortex-A55 四核，主频 2GHz × 4。
- 内存支持 1GB / 2GB / 4GB / 8GB LPDDR4 / LPDDR4X，标配 2GB。
- Flash 支持 4GB / 8GB / 16GB / 32GB / 64GB / 128GB eMMC 可选，标配 16GB。
- 2 路 USB HOST 2.0、2 路 USB HOST 3.0，以及一路 Micro USB OTG 接口。
- 4 路 TTL 串口（含 1 路调试串口）、1 路 TF 卡接口、1 路 CAN 接口。
- 1 路 HDMI OUT、1 路 HDMI IN、1 路 SATA、1 路标准 PCIe 3.0 接口。
- 支持 DSI / LVDS、DSI / EDP 显示接口、MIPI 摄像头接口、电容触摸和背光调节。
- 板载 Wi-Fi 6 / BT 模块，支持双路千兆以太网 YT8521。

## 规格概览

| 项目 | 参数 |
| --- | --- |
| SoC | Rockchip RK3568 / RK3568B2 |
| CPU | 四核 Cortex-A55 2GHz |
| 内存 | 1GB / 2GB / 4GB / 8GB LPDDR4 / LPDDR4X，标配 2GB |
| 存储 | 4GB / 8GB / 16GB / 32GB / 64GB / 128GB eMMC 可选，标配 16GB |
| 显示 | HDMI OUT、HDMI IN、DSI / LVDS、DSI / EDP |
| 网络 | 双路千兆以太网 YT8521，Wi-Fi 6 / BT |
| 扩展 | SATA、CAN、PCIe 3.0、MIPI CSI、GPIO、串口 |
| 电源 | 12V DC 输入，6.5V~16V / 2A |
| 主板尺寸 | 150mm × 100mm × 3mm |


## 主板特性

- 一体化 PCBA 设计，主板尺寸 150mm × 100mm。
- 使用 RK809 PMU，保证工作稳定可靠。
- 单片 LPDDR4 / LPDDR4X 设计，兼容性更强、成本更低。
- 内存支持 1GB / 2GB / 4GB / 8GB，eMMC 支持多种容量，标配 16GB。
- 内存稳定工作在 1560MHz。
- 支持 Android / Linux / Ubuntu / Debian 操作系统。
- 支持双路千兆以太网、标准 PCIe、HDMI IN、多种外围接口扩展。
- 经过高低温、反复重启等可靠性实验。

## 系统配置

| CPU | RK3568/RK3568B2 |
| --- | --- |
| 主频 | 四核A55(2GHz) |
| 内存 | 标配2GB，硬件兼容1GB，4GB，8GB |
| 存储器 | 4GB/8GB/16GB eMMC可选，标配16GB |
| 电源IC | 使用RK809，支持动态调频等 |


## 接口参数

| LCD接口 | 支持DSI/LVDS/EDP/HDMI接口输出 |
| --- | --- |
| Touch接口 | 电容触摸 |
| 音频接口 | 支持耳机喇叭直接输出，支持录放音 |
| SD卡接口 | 1路 |
| 以太网接口 | 支持2路千兆以太网 |
| USB HOST 2.0接口 | 2路HOST 2.0 |
| USB HOST 3.0接口 | 2路HOST 3.0 |
| OTG接口 | 1路OTG接口（和其中一路USB 3.0复用） |
| UART接口 | 4路 |
| Camera接口 | 1路CSI接口 |
| CAN接口 | 1路 |
| PCIe3.0接口 | 1路 |


## 电气特性

| 12V输入电压 | 6.5V~16V，2A |
| --- | --- |
| RTC输入电压 | 3V/0.6uA |
| 工作温度 | -10~70度 |
| 储存温度 | -10~40度 |


## 软件资源

ibox3568 支持 Android 11 和 Linux 系统，驱动支持情况如下：

| system / driver | Linux4.19+ / Android11 | Linux4.19+ / Debian10 | Linux4.19+ / Ubuntu | Linux4.19+QT |
| --- | --- | --- | --- | --- |
| 7寸MIPI屏(1024*600) | ● | ● | ● | ● |
| 10.1寸EDP屏(1920*1080) | ● | ● | ● | ● |
| 背光驱动 | ● | ● | ● | ● |
| PMIC驱动(RK809) | ● | ● | ● | ● |
| 电容触摸 | ● | ● | ● | ● |
| eMMC驱动 | ● | ● | ● | ● |
| SD卡驱动 | ● | ● | ● | ● |
| 独立按键 | ● | ● | ● | ● |
| ADC驱动 | ● | ● | ● | ● |
| 开关机 | ● | ● | ● | ● |
| 休眠唤醒 | ● | ● | ● | ● |
| 两路USB HOST 2.0驱动 | ● | ● | ● | ● |
| 两路USB HOST 3.0驱动 | ● | ● | ● | ● |
| 一路OTG驱动 | ● | ● | ● | ● |
| SATA | ● | ● | ● | ● |
| PCIe总线驱动 | ● | ● | ● | ● |
| 光纤驱动 | ● | 未验证 | 未验证 | ● |
| RTC驱动 | ● | ● | 未验证 | ● |
| 音频 | ● | ● | 未验证 | 即将支持 |
| 录音 | ● | 不支持 | 不支持 | 即将支持 |
| 双频Wi-Fi/BT4.0 | ● | ● | ● | 即将支持 |
| GPS | ● | ● | ● | ● |
| CSI摄像头驱动 | ● | 不支持 | 不支持 | 即将支持 |
| USB口摄像头驱动 | ● | ● | ● | ● |
| 串口 | ● | ● | ● | ● |
| HDMI 2.0 | ● | ● | ● | ● |
| HDMI IN | ● | 未验证 | 未验证 | 未验证 |
| 双路千兆以太网 | ● | ● | ● | ● |
| USB鼠标键盘 | ● | ● | ● | ● |
| U-Boot | ● | ● | ● | ● |

