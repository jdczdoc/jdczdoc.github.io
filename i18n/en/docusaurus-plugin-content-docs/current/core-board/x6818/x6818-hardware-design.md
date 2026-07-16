---
sidebar_position: 4
title: Hardware Design
description: X6818核心板 hardware design notes
---

# Hardware Design

Hardware Design

电源设计

122、123脚：电池input端，接单节4.2V锂电池，不需要电池时悬空即可。

124、125脚：电源适配器input端，4.5到5.5V/1Ainput。

126脚：电池和电源适配器公共电平output端，其电压由电池及电源适配器决定，可for 底板power supply。

145脚：DC5V_OTG该脚为对Core Boardinput，并不对外power supply5V，定制底板OTGFunction可参考x6818Development BoardOTG设计。

注意：客户在定制底板时必须给该pin设计1.8Vpower supply，电ch设计可参考x6818底板。

175脚：3.3Voutput，可for 底板power supply。在Core Board休眠时，该电平会关闭，唤醒后恢复。

20-27，93-98脚，兼容旧版（x4418CV2.0）启动配置（x4418CV3.0之后Core Board上已设计该电ch，客户定制底板无需配置），请参考x6818底板配置。

USB设计

HDMI设计

S5P6818芯片自带HDMI控制器，supports HDMI1.4协议。Core Board上第37到44共8个pin，4对差分线，必须走等长差分线，且阻抗匹配为100欧，否则会出现HDMI画面丢色，断断续续等问题。

LVDS设计

S5P6818芯片自带RGB和LVDS interface的LCD控制器，LVDS为差分Signal线，适合驱动分辨率较高的液晶屏。它包括5组传输线，其中4组为数据线，对应Core Board的48到55脚，另一组为时钟线，对应Core Board的46和47pin。

LVDS interface能够提供很高的数据传输率的同时，保证很低的功耗，其数据速率可以达到几百Mbps到2Gbps。在走线时，5组传输线必须走等长差分线，且阻抗匹配为100欧。

MIPI设计

DDR设计Description
