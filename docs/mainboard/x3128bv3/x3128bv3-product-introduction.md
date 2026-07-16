---
sidebar_position: 1
title: 产品介绍
description: X3128BV3 主板产品简介、功能特性和特性参数
---

# 产品介绍

X3128BV3 开发板基于瑞芯微 RK3128 平台设计，由邮票孔核心板、底板和液晶板组成。核心板采用 6 层板工艺，适用于平板电脑、车机、学习机、POS 机、游戏机和行业监控等应用场景。底板提供丰富外设接口，可用于验证 RK3128 的主要硬件功能。

![X3128BV3 主板外观](./x3128bv3-product-overview.png)

## 功能特性

- RK3128 四核 Cortex-A7，主频 1.3GHz。
- Mali400-MP2 GPU，支持 OpenGL ES 1.1 / 2.0。
- 内存标配 1GB DDR3，可兼容 256MB / 512MB / 2GB DDR3。
- 存储支持 4GB / 8GB / 16GB eMMC 可选，标配 8GB eMMC。
- 显示支持 LVDS / MIPI，核心板可支持 24 位 RGB；HDMI 与 LCD 二选一显示。
- 板载 RT8723 Wi-Fi / BT 模块，支持千兆以太网 RTL8211E。
- 提供 USB HOST、USB OTG、TF 卡、UART、GPIO、音频、MIC、RTC、GPS、GPRS 等接口。
- 支持软件开关机、休眠唤醒、背光无级调节、红外接收、USB 鼠标键盘。

## 系统配置

| CPU | RK3128 |
| --- | --- |
| 主频 | A7四核1.3GHz |
| 内存 | 标配1GB，可定制2GB及512MB |
| 存储器 | 标配8GB eMMC，可选配nand flash |
| 电源IC | 使用RK816，支持动态调频 |


## 接口参数

| LCD接口 | TTL、LVDS、MIPI接口三选一 |
| --- | --- |
| Touch接口 | 电容触摸，可使用USB或串口扩展电阻触摸 |
| 音频接口 | AC97/IIS接口，支持录放音 |
| SD卡接口 | 2路SDIO输出通道 |
| eMMC接口 | 板载eMMC接口，管脚不另外引出 |
| 以太网接口 | 支持千兆以太网 |
| USB HOST接口 | 1路HOST 2.0 |
| USB OTG接口 | 1路OTG 2.0 |
| UART接口 | 3路串口，2路带流控，1路用于DEBUG |
| PWM接口 | 3路PWM输出 |
| I2C接口 | 4路I2C输出 |
| SPI接口 | 1路SPI输出 |
| ADC接口 | 3路ADC输入 |
| Camera接口 | 1路BT656/BT601 |
| HDMI接口 | 高清音视频输出接口，LCD和HDMI二选一 |
| 启动配置接口 | 无需启动配置，核心板自动适配 |


## 电气特性

| 输入电压 | 4.8~5.5V(推荐使用5V输入) |
| --- | --- |
| 输出电压 | 3.3V/4.2V(可用于底板供电及电池充电) |
| 工作温度 | -10~70度 |
| 储存温度 | -10~80度 |


## 驱动支持列表

| system / driver | Linux3.10+ / Android6.0 | Linux3.10+ / QT |
| --- | --- | --- |
| 7寸MIPI LCD(1024*600) | ● | ● |
| PMIC驱动(RK816) | ● | ● |
| 电容触摸 | ● | ● |
| eMMC驱动 | ● | ● |
| SD卡驱动 | ● | ● |
| 独立按键 | ● | ● |
| 红外遥控 | ● | ● |
| 开关机 | ● | ● |
| 休眠唤醒 | ● | no need |
| 2路USB HOST驱动 | ● | ● |
| 1路USB OTG驱动 | ● | ● |
| 音频 | ● | coming soon |
| 录音 | ● | coming soon |
| USB Wi-Fi/BT4.0（RT8723BU） | ● | coming soon |
| USB口摄像头驱动 | ● | ● |
| 串口 | ● | ● |
| HDMI | ● | coming soon |
| 3G模块(3G dongle) | ● | no need |
| GPS模块 | ● | ● |
| 千兆以太网 | ● | ● |
| USB鼠标键盘 | ● | ● |

