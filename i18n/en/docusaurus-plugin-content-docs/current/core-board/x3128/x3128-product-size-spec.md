---
sidebar_position: 2
title: Dimensions and Structure
description: X3128开发板硬件 appearance, drawings, and mechanical parameters
---

# Dimensions and Structure

Core Board Appearance

Core Board正面图

Core Board背面图

Mechanical Drawing

Core Board结构尺寸及pin排列：

### Mechanical Parameters

| Item | Parameter |
| --- | --- |
| Package | Castellated-hole package |
| Core Board Size | 45mm*45mm*3mm |
| Pin Pitch | 1.2mm |
| Pad Size | 1.8mm*0.7mm |
| Pin Count | 144PIN |
| PCB Layers | 6层 |


底板Package

产品Function特性

内核：ARM Cortex-A7四核；

CPU Clock：1.3GHz*4；

Memory：1GB DDR3，可兼容256M/512M/2GB DDR3；

Flash：supports 4GB/8GB/16GB eMMC可选，标配8GB eMMC，兼容nand flash；

LVDS/MIPI interface，Core Board可supports 24位RGB interface；

2chUSB HOST interface；

USB OTG interface；

2chTTLUART；

1chTF卡 interface（muxed as 调试UARTUART2）；

复位按钮；

软件Key机按钮；

四ch独立按键；

supports 外接扬声器；

MICinput；

耳机output interface；

supports SPDIF光纤audiooutput；

supports 背光无级调节；

supports HDMI Interface（HDMI和LCD二选一，不能同时显示）；

supports 5点电容touch；

板载RT8723 WIFI/BT模块；

supports G-sensor；

supports 多种SPI，I2C，UART，PWM等外围器件扩展；

supports MPEG4，H.263，H.264，MJPEG视频编码；

supports 几乎全格式视频解码；

supports 2D，3D高性能图形加速；

supports RTC时钟实时保存；

supports 千兆有线以太网RTL8211E；

supports BT656/BT601摄像头 interface；

supports GPS interface；

supports GPRS interface；

supports PCIe Interface3G、4G模块；

supports USB鼠标，键盘；

supports 红外一体化接收头；

软件资源

x3128Development Boardsupports Android6.0操作系统，Linux系统即将supports ，详细的驱动supports 列表如下：

### x3128Development Board驱动supports 列表

| system / driver | Linux3.10+ / Android6.0 | Linux3.10+ / QT |
| --- | --- | --- |
| 7寸MIPI LCD(1024*600) | ● | ● |
| PMIC驱动(RK816) | ● | ● |
| 电容touch | ● | ● |
| eMMC驱动 | ● | ● |
| SD卡驱动 | ● | ● |
| 独立按键 | ● | ● |
| Gsensor | ● | no need |
| 蜂鸣器驱动 | ● | ● |
| 红外遥控 | ● | ● |
| Key机 | ● | ● |
| 休眠唤醒 | ● | no need |
| 2chUSB HOST驱动 | ● | ● |
| 1chUSB OTG驱动 | ● | ● |
| audio | ● | coming soon |
| 录音 | ● | coming soon |
| USB WIFI/BT4.0（RT8723BU） | ● | coming soon |
| 并口摄像头驱动 | ● | coming soon |
| USB口摄像头驱动 | ● | ● |
| UART | ● | ● |
| HDMI | ● | coming soon |
| 3G模块(3G dongle) | ● | no need |
| 3G模块(PCIe Interface) | ● | no need |
| GPS模块 | ● | ● |
| 千兆以太网 | ● | ● |
| USB鼠标键盘 | ● | ● |


硬件资源

硬件 interfaceDescription

### 硬件 interface介绍

| 标号 | Name | Description |
| --- | --- | --- |
| 【1】 | CPU | RK3128，ARM Cortex A7,4*1.3GHz |
| 【2】 | DDR3 | H5TQ4G63AFR，DDR3，1GBytes |
| 【3】 | eMMC | THGBMBG6D1KBAIL，8GB MLC eMMC |
| 【4】 | PCIe Interface | 3G、4G通信模块 interface |
| 【5】 | RESET | 复位按键 |
| 【6】 | GPIO | GPIO扩展口 |
| 【7】 | 独立按键 | Recovery刷机键，按键K1 |
| 【8】 | 独立按键 | 按键K2 |
| 【9】 | 独立按键 | 按键K3 |
| 【10】 | 独立按键 | 按键K4 |
| 【11】 | POWER | 电源按键 |
| 【12】 | WIFI/BT | RT8723BU WIFI/BT二合一模块 |
| 【13】 | UART2 | UART2，TTL电平，默认调试UART |
| 【14】 | TF卡 | TF卡座 |
| 【15】 | SIM卡座 | 3G、4G通信模块手机卡 interface |
| 【16】 | MIPI/LVDS interface | 接MIPI或LVDS interface的屏 |
| 【17】 | 蜂鸣器 | 直流蜂鸣器 |
| 【18】 | 红外接收头 | HS0038红外一体化接收头 |
| 【19】 | LED | 四ch独立LED口 |
| 【20】 | RTC电池插座 | RTC电池座，3V |
| 【21】 | 锂电池 interface | 3.7V锂电池 interface |
| 【22】 | UART1 | UART1，TTL电平 |
| 【23】 | UART0 | UART0，TTL电平 |
| 【24】 | 麦克风 | 麦克风input |
| 【25】 | 喇叭 interface | 外置扬声器 interface |
| 【26】 | 耳机座 | 耳机output，需接标准3线耳机 |
| 【27】 | SPDIF | 光纤audiooutput |
| 【28】 | camera interface | 标准 24PIN 摄像头 interface |
| 【29】 | 千兆网口 | RT8211E  interface |
| 【30】 | HDMI | HDMIoutput interface |
| 【31】 | USB HOST | HUB芯片扩展，HOST |
| 【32】 | USB HOST | HUB芯片扩展，HOST |
| 【33】 | USB OTG | USB OTG Interface |
| 【34】 | DC座 | 12V DCPower input |
