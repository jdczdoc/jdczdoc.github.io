---
sidebar_position: 4
title: Hardware Design
description: X3399CV5核心板 hardware design notes
---

# Hardware Design

Hardware Design

电源设计

37脚：Core BoardRTCpower supply端，默认input2.5到3V/5uA；

42脚：3.3V/300mAPower input interface，42脚在任何情况下，3.3V都需要常power supply，以保证Core Board上的PMU永远处于工作或是待命状态；

51、52脚：3.3V/4.3APower input interface，这两个pin只有在开机时才需要3.3Vinput，当关机后，3.3V电压为0；

53、84、182脚：Core Board公共Ground；

120脚：1.8V/1.5APower output，它可以for 给底板上1.8V的外设power supply，在休眠、关机后电压为0；

USB设计

| 差分pin编号 | 差分pinName |
| --- | --- |
| 114、115 | USB3_DM、USB3_DP |
| 116、117 | HOST0_DM、HOST0_DP |
| 118、119 | HOST1_DM、HOST1_DP |
| 109、110 | USB3_SSRXP、USB3_SSRXN |
| 107、108 | USB3_SSTXP、USB3_SSTXN |
| 105、106 | TYPEC0_DM、TYPEC0_DP |
| 103、104 | TYPEC0_TX2P、TYPEC0_TX2N |
| 101、102 | TYPEC0_RX2N、TYPEC0_RX2P |
| 99、100 | TYPEC0_TX1P、TYPEC0_TX1N |
| 97、98 | TYPEC0_RX1N、TYPEC0_RX1P |


HDMI设计

RK3399芯片自带HDMI控制器，supports HDMI2.0协议。Core Board上第85到92共8个pin，4对差分线，必须走等长差分线，且阻抗匹配为100欧，否则会出现HDMI画面丢色，断断续续等问题。

EDP设计

RK3399芯片自带EDP interface的LCD控制器，EDP为差分Signal线，适合驱动分辨率较高的液晶屏。它包括5组差分对，对应Core Board的135和144pin。

EDP interface的数据传输总容量可以达到21.6Gbps，是LVDS interface的3倍，它能够驱动更高分辨率的液晶屏，如2K、4K屏等。在走线时，5组差分对必须走等长差分线，且阻抗匹配为100欧。

MIPI设计

RTC设计

对应的I2C interface接到RK3399的I2C口，参考如下：
