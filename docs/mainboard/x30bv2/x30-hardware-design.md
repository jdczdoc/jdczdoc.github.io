---
sidebar_position: 6
title: 硬件设计
description: X30/PX30 底板设计要点，包括 DDR、Flash、摄像头、显示、音频、SDIO、电源、USB 和 MIPI
---

# 硬件设计

PX30 芯片整体管脚数量不多，但片内外设较完整。底板设计时要合理分配复用功能，重点关注显示、摄像头、以太网、TF 卡、UART、USB、MIPI 和电源时序。

## DDR 的选择

PX30 支持 DDR3、DDR4、DDR3L、LPDDR3、LPDDR2 等类型。X30CV1 使用 DDR3 设计，默认 1GB，可定制 2GB；X30CV2 使用 LPDDR3，单片即可支持到 2GB，针对大容量内存客户性价比更高。

## Flash 的选择

PX30 支持 NAND Flash 和 eMMC。硬件手册中建议从产品稳定性和工作效率角度优先使用 eMMC。X30CV1 默认外挂 8GB eMMC。

## 摄像头接口

PX30 支持 MIPI 摄像头和并口摄像头。并口摄像头会占用大量 IO，且与以太网管脚复用。X30 开发板只预留 MIPI 摄像头接口，并口摄像头管脚被用作百兆以太网。

## 显示接口

PX30 支持 MIPI、LVDS、RGB 三种显示接口。MIPI 和 LVDS 复用一组管脚，不能同时使用；RGB 为独立管脚组。开发板预留一个 MIPI/LVDS 接口和一个 RGB 接口。

:::note
PX30 本身没有 HDMI 输出接口，如需 HDMI 输出，需要外扩转换芯片。
:::

## 音频接口

PX30 具备标准 I2S 音频接口，配套 RK809 PMU 自带音频 codec，不需要外加音频解码芯片。

## SDIO 接口

PX30 有 3 路 SDIO：一路给 eMMC，一路给 Wi-Fi/BT 模块，一路给 TF 卡。SDMMC0 除了给 TF 卡外，D0/D1 与 UART2 复用，调试时需确认 UART2 复用组选择。

## 电源设计

核心板第 109、110 脚为 5V/1A 主电源输入，第 115 脚为 RTC 电源输入。硬件手册强调：第 115 脚 RTC 供电不能晚于第 110 脚主电源供电，原则上 RTC 供电电压不能低于主电源输入电压。

![X30 RTC 电源参考电路](./x30-rtc-power-reference.png)

关键电源脚位：

- 95 脚：PMU LDO7 输出，最大 400mA，电压可程控。
- 96 脚：PMU LDO8 输出，最大 400mA，电压可程控。
- 109、110 脚：5V/1A 主电源输入。
- 111、112 脚：公共地。
- 113 脚：PMU 控制脚，可用于使能外部电源。
- 114 脚：PMU 5V/1.5A 电源输出。
- 115 脚：RTC 电源输入。
- 116 脚：PMU DC 输出，1.5V 到 3.6V 可程控，最大 2.5A。
- 117 脚：PMU LDO4 输出，最大 400mA。
- 118 脚：PMU LDO2 输出，最大 400mA。

## USB 设计

PX30 有一路 HOST 口和一路 OTG 口，USB2.0 默认速率可达 480Mbps。OTG 和 HOST 都是高速信号线，PCB 设计时要走等长差分线，阻抗匹配 90Ω，并保证完整参考平面。

| 差分管脚编号 | 差分管脚名称 |
| --- | --- |
| 119、120 | OTG_DP、OTG_DM |
| 123、124 | USB_HOST_DM、USB_HOST_DP |


## MIPI 设计

PX30 支持 DSI 和 CSI。DSI 对应核心板第 7 到 16 脚，用于 MIPI 显示屏；CSI 对应核心板第 81 到 90 脚，用于 MIPI 摄像头。MIPI 数据速率高，走线必须等长差分，阻抗匹配 100Ω。
