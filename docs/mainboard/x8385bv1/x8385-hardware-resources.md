---
sidebar_position: 3
title: 硬件资源
description: X8385 开发板硬件接口描述和位置图
---

# 硬件资源

下图为 X8385 开发板硬件接口位置图。板上标出了 OTG/HOST 拨码、Micro USB OTG、三路 USB 2.0 HOST、GPIO、MIPI DSI、HDMI、KEY1~KEY4、DC 12V、PWR、RST、MODE、SPK、PHONE、TF Card、Camera1、Camera2、UART0_Debug、I2C 转串口和百兆以太网等接口。

![X8385 开发板接口图](./x8385-dev-board-interface-map.png)

## 硬件接口介绍

| 标号 | 名称 | 说明 |
| --- | --- | --- |
| 【1】 | 拨码开关 | 拨到左边为OTG下载模式，拨到右边为USB HOST模式 |
| 【2】 | Micro USB座 | OTG下载口 |
| 【3】 | USB HOST | 三路USB HOST口 |
| 【4】 | GPIO | 扩展GPIO口 |
| 【5】 | DSI | MIPI显示接口 |
| 【6】 | HDMI | 标准HDMI接口 |
| 【7】 | 独立按键 | KEY1 |
| 【8】 | 独立按键 | KEY2 |
| 【9】 | 独立按键 | KEY3 |
| 【10】 | 独立按键 | KEY4 |
| 【11】 | 直流电源输入 | 12V直流输入 |
| 【12】 | 开机按键 | PWRKEY |
| 【13】 | 复位按键 | RESET |
| 【14】 | MODE | eMMC程序为空时，跳线帽跳到右边开机烧写程序；程序烧写完成后跳到左边 |
| 【15】 | SPK | 扬声器输出 |
| 【16】 | 耳机座 | 耳机输出 |
| 【17】 | TF卡 | TF卡座 |
| 【18】 | MIPI CSI1 | MIPI摄像头接口 |
| 【19】 | MIPI CSI2 | MIPI摄像头接口 |
| 【20】 | UART0 | CPU输出串口0，默认为调试串口 |
| 【21】 | I2C转串口3 | UART3，由串口转换芯片转出 |
| 【22】 | I2C转串口2 | UART2，由串口转换芯片转出 |
| 【23】 | I2C转串口0 | UART0，由串口转换芯片转出 |
| 【24】 | I2C转串口1 | UART1，由串口转换芯片转出 |
| 【25】 | 串口1 | CPU输出串口1 |
| 【26】 | 以太网接口 | USB转百兆以太网接口 |


## 关键接口说明

- 拨码开关拨到左边为 OTG 下载模式，拨到右边为 USB HOST 模式。
- Micro USB 座用于 OTG 下载。
- USB HOST 提供三路 USB HOST 口。
- MODE 跳线在 eMMC 程序为空时用于辅助开机烧写，程序烧写完成后需要跳回左边。
- UART0 为 CPU 输出串口 0，默认作为调试串口。
- 以太网接口为 USB 转百兆以太网接口。
