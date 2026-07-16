---
title: 接口详解
sidebar_position: 4
description: "X507开发板各硬件接口的位置、用途和注意事项"
---


# 接口详解

## 电源输入

![电源输入](./x507-power-input.png)

开发板使用12V直流电源输入。硬件手册标配清单为12V/2A适配器。

## 千兆以太网

![千兆以太网](./x507-ethernet.png)

板载RTL8211F千兆以太网PHY。连接网线后可由Android或Linux网络栈配置。

## TF卡槽

![TF卡槽](./x507-tf-card.png)

提供一路TF卡槽，用于扩展存储或文件交换。

## 并行摄像头

![并行摄像头](./x507-camera-parallel.png)

24PIN并行摄像头接口。不同摄像头模组的供电电压需要通过主板LDO配置确认。

## MIPI CSI摄像头

![MIPI CSI摄像头](./x507-camera-mipi.png)

26PIN MIPI CSI接口，用于差分摄像头模组。

## SIM卡与PCIe 4G扩展

![SIM卡与PCIe 4G扩展](./x507-sim-card.png)

SIM卡槽配合PCIe 4G通信模块使用。SIM卡本身不是独立通信接口。

## FEL升级键

![FEL升级键](./x507-fel-key.png)

按住FEL键并复位或重新上电，可进入全志USB升级模式。

## 开关机键

![开关机键](./x507-power-key.png)

用于开机、Android休眠/唤醒和软件关机操作。

## 复位键

![复位键](./x507-reset-key.png)

系统运行时按下复位键执行硬件复位。

## 按键扩展座

![按键扩展座](./x507-key-header.png)

6PIN PH座引出开机、复位和升级等按键信号。

## 串口座

![串口座](./x507-uart-headers.png)

UART0为TTL调试串口；UART2和UART5可通过电阻配置成TTL或RS-232。

## I2C与SPI座

![I2C与SPI座](./x507-i2c-spi-headers.png)

提供I2C和SPI扩展信号。具体复用和电压域应核对原理图。

## LCD与背光

![LCD与背光](./x507-lcd-connectors.png)

从上到下为背光、LVDS和LVDS/RGB显示连接器。

## HDMI

![HDMI](./x507-hdmi.png)

Type-A HDMI输出，用于外接显示器或电视。

## USB

![USB](./x507-usb.png)

两路USB Host 2.0 Type-A接口和一路Micro USB OTG接口。

## RTC电池

![RTC电池](./x507-rtc.png)

后备电池用于断电后保持RTC时钟。

## Wi-Fi/Bluetooth

![Wi-Fi/Bluetooth](./x507-wifi-bt.png)

板载2.4GHz/5GHz双频Wi-Fi和Bluetooth二合一模块。
