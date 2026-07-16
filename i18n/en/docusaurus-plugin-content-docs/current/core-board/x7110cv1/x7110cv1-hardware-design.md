---
sidebar_position: 4
title: Hardware Design
description: X7110CV1核心板 hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO电平

GPIO电源域的电源脚Description如下：

| 电源域 | GPIOpower supply电压 | Description | JH7110Core BoardCore BoardIO电平 |
| --- | --- | --- | --- |
| GPIO1 Domain | 1.8V/3.3V | IO电压域可配置成1.8V或3.3V，我司Core Board统一配置为3.3V | 3.3V |
| GPIO2 Domain | 1.8V/3.3V | IO电压域可配置成1.8V或3.3V，我司Core Board统一配置为3.3V | 3.3V |
| GPIO3 Domain | 1.8V/3.3V | IO电压域可配置成1.8V或3.3V，我司Core Board统一配置为3.3V | 3.3V |
| GPIO4 Domain | 1.8V/3.3V | IO电压域可配置成1.8V或3.3V，我司Core Board统一配置为3.3V | 3.3V |


在做底板设计时，注意外设芯片的IO电平要与Core Board的IO电平保持一致，否则会烧坏CPU。

电源设计

JH7110Core Board仅需要主电源power supply即可正常使用。详细的电源pin定义如下：

91、92、93脚：5V/3APower input interface，为确保CPU稳定可靠工作，务必保证提供足额电流且保证电源纹波电压控制在100MV以下，另外电源走线尽可能宽（大于2MM），换层过孔不小于5个；

88，89，90脚：3.3V/1APower output，可for  interface板电源power supply（部分外设上电时序有要求，可参考上述Core BoardPin Definition的Description给对应外设power supply）；

97，98，99脚：3.3V/1APower output，可for  interface板电源power supply（部分外设上电时序有要求，可参考上述Core BoardPin Definition的Description给对应外设power supply）；

100，101脚：1.8V/500MAPower output，可for 底板audioCODEC和网络PHY芯片的 IO域power supply。

USB设计

JH7110Core Board有1chUSB 2.0和1chUSB 3.0口。其中USB 2.0口在Development Board上设计为固件升级（device）和USB HOSTmuxed as ，通过外部USB 5V插入做检测并切换为DEVICE而升级固件用。

默认USB 2.0 interface能达到480Mbps的速度，而USB 3.0最快能达到5Gbps的带宽，，因此，对PCB走线的要求做特性阻抗匹配。USB interface的差分对在PCB走线时，务必走等长差分线，特性阻抗为90欧-/+10%，而且需要有完整的参考平面。

HDMI设计

JH7110芯片自带一chHDMI OUT控制器，supports HDMI2.0协议。Core Board上相应的HDMI差分对，必须走等长差分线，且阻抗匹配为100欧-/+10%，否则会出现HDMI画面丢色，断断续续等问题。

MIPI设计

JH7110supports 1chMIPI DSI和1chMIPI CSI interface，其中DSIfor 驱动MIPI显示屏，CSI可以外接MIPIcamera。MIPI interface的数据传输率较高，在走线时一定要走等长差分线，且阻抗匹配为100欧 -/+10%。
