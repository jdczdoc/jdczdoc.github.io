---
sidebar_position: 10
title: 接口说明
description: X8385 开发板电源、串口、HDMI、Camera、以太网、音频和 USB 接口说明
---

# 接口说明

## 电源开关和插座

开发板底板使用 12V DC 输入。PWRKEY 为开机按键，RESET 为复位按键。核心板 VSYS 电源输入范围为 3.1V 到 5.25V。

## 调试串口

UART0 为 CPU 输出串口 0，默认作为调试串口。Android 手册的 SecureCRT 章节提示调试串口波特率设置为 921600。

## HDMI 接口

开发板提供标准 HDMI 接口，可用于外接显示器。调试 HDMI 时需要检查线材、显示器、分辨率、系统显示配置和供电。

## Camera 接口

开发板提供 MIPI CSI1 和 MIPI CSI2 两路摄像头接口。核心板引脚定义中 RDN/RDP、RCP/RCN 等差分管脚用于 MIPI 摄像头输入。

## 以太网接口

开发板以太网为 USB 转百兆以太网接口。无网口时，优先确认 USB 转网芯片枚举、驱动、供电和网线连接。

## 耳机、喇叭和录音接口

板上包含耳机座、SPK 扬声器输出和 MIC 输入。核心板引脚包含 ACCDET、AU_HPR、AU_HPL、SPK+、SPK-、AU_MICBIAS 等音频相关引脚。

## TF 卡槽

TF 卡用于外部存储。核心板引脚中 `MSDC1_CLK/CMD/DAT0~DAT3` 与 `SD_CARD_DET_N` 与 SD 卡相关。

## 独立按键

开发板包含 KEY1~KEY4 四路独立按键，另外还有 PWR、RST 和 MODE。

## OTG 与 USB HOST

拨码开关用于切换 OTG 下载模式和 USB HOST 模式。Micro USB 座为 OTG 下载口，USB HOST 为三路 USB HOST 口。
