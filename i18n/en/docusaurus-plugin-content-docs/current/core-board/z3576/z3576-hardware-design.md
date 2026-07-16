---
sidebar_position: 4
title: Hardware Design
description: Z3576核心板 hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO电平

GPIO电源域的电源脚Description如下：

| 电源域 | GPIOpower supply电压 | Description | Core BoardIO电平 |
| --- | --- | --- | --- |
| PMUIOO | 1.8V | IO 电压域只有1.8V | 1.8V |
| PMUIO1 | 1.8V/3.3V | IO 电压域可配置成1.8V或3.3V,Core Boardpin引出，由底板power supply | 由底板给Core BoardPMUIO1pinpower supply电压决定 |
| VCCIO0 | 1.8V | IO 电压域只有1.8V | 1.8V |
| VCCIO1 | 1.8V/3.3V | IO 电压域可配置成1.8V 或3.3V, 由底板power supply | 由底板给Core BoardVCCIO1pinpower supply电压决定 |
| VCCIO2 | 1.8V/3.3V | IO 电压域可配置成1.8V或3.3V,由底板power supply | 由底板给Core BoardVCCIO2pinpower supply电压决定 |
| VCCIO3 | 1.8V/3.3V | IO 电压域可配置成1.8V 或3.3V,由底板power supply | 由底板给Core BoardVCCIO3pinpower supply电压决定 |
| VCCIO4 | 1.8V/3.3V | IO 电压域可配置成1.8V 或3.3V,由底板power supply | 由底板给Core BoardVCCIO4pinpower supply电压决定 |
| VCCIO5 | 1.8V/3.3V | IO 电压域可配置成1.8V 或3.3V,由底板power supply | 由底板给Core BoardVCCIO5pinpower supply电压决定 |
| VCCIO6 | 1.8V/3.3V | IO 电压域可配置成1.8V 或3.3V,由底板power supply | 由底板给Core BoardVCCIO6pinpower supply电压决定 |
| VCCIO7 | 1.2V/1.8V | IO 电压域可配置成1.2V或1.8V,我司Core Board统一配置为1.8V | 1.8V |


在做底板设计时，注意外设芯片的IO电平要与Core Board的IO电平保持一致，否则会烧坏CPU。

电源设计

Z3576Core Board仅需要主电源power supply即可正常使用。详细的电源pin定义如下：

144、146、147、148脚：5V/3APower input interface，为确保CPU稳定可靠工作，务必保证提供足额电流且保证电源纹波电压控制在100MV以下，另外电源走线尽可能宽（大于2MM），换层过孔不小于5个；

301脚：3.3V/0.5APower output，可for  interface板电源power supply（部分外设上电时序有要求，可参考上述Core BoardPin Definition的Description给对应外设power supply）；

318、319、320、321脚：3.3V/5APower output，可for 底板电流要求较高的电源power supply。

下图为给CPU，NPU，GPU，DDRpower supply的核心电源pin，Core Board对外引出，在底板设计时，需在底板上增加电容滤波，以增强稳定性；

USB设计

Z3576 Core Board有2chUSB 2.0 和2ch USB 3.0口。其中 USB 2.0口在Development Board上设计为固件升级(device)和USB HOST muxed as ,通过外部 USB 5V 插入做检测并切换为DEVICE 而升级固件用。

HDMI设计

Z3576芯片自带一chHDMI OUT控制器，supports HDMI2.0协议。Core Board上相应的HDMI差分对，必须走等长差分线，且阻抗匹配为100欧-/+10%，否则会出现HDMI画面丢色，断断续续等问题。

MIPI设计

Z3576supports 1chMIPI DSI和2chMIPI CSI interface，其中DSIfor 驱动MIPI显示屏，CSI可以外接MIPIcamera。MIPI interface的数据传输率较高，在走线时一定要走等长差分线，且阻抗匹配为100欧 -/+10%。
