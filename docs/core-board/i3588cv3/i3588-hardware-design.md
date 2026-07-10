---
sidebar_position: 3
title: 硬件设计
description: I3588核心板硬件设计注意事项
---

# 硬件设计

## 管脚描述

RK3588 除差分对、ADC 输入脚外的GPIO 口都可以复用作其他功能，如I2C、UART、SPI、I2S、PWM 等等。因篇幅有限，本文描述不尽详细，如有需要，可以通过仔细阅读核心板原理图，或阅读《RK3588_PinOut_V1.0_20211228.xlsx》获取更多信息。

## GPIO 电源

GPIO 电源域的电源脚描述如下：电源域GPIO 类型描述I3588 核心板电平PMUIO11.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VPMUIO21.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).3.3VEMMCIO1.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO11.8V1.8V Only IO supplyfor this GPIO domain1.8V(group).VCCIO21.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).程序控制，由PMU的PLDO5 决定，默认3.3VVCCIO31.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO41.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).1.8VVCCIO51.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).3.3VVCCIO61.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).3.3V其中PMUIO1、EMMCIO、VCCIO1、VCCIO3 为固定电平电源域，不可进行配置。PMUIO2 、VCCIO2 ，VCCIO[4 ：6] 电源域 RK3588 芯片可以自动识别硬件配置的电压，不需要软件根据硬件供电电压进行配置。在做接口板设计时，注意电源域的IO 电平要与对接外设芯片/器件的IO 电平保持一致，否则会烧坏CPU。

## 电源设计

I3588 核心板需要主电源供电及RTC 时钟供电即可正常使用。详细的电源管脚定义如下：

15、16 脚：4V/5A 电源输入接口，为确保CPU 稳定可靠工作，务必保证提供足额电流；

120 脚：核心板RTC 供电端，默认输入2.5 到3V/5uA；

11、12 脚：3.3V/2A 电源输出，可用于接口板电源供电；

13、14 脚：1.8V/2A 电源输出，可用于接口板电源供电。

## USB 设计

RK3588 有两路HOST 口和两路TYPEC 口。其中TYPEC 口可用作HOST 口、DEVICE口或DP 口。它即能驱动VGA、HDMI、DP 屏，也能当作普通的USB3.0 接口，用于连接普通的HOST3.0 外设。默认USB2.0 接口能达到480Mbps 的速度，而USB3.0 最快能达到5Gbps 的带宽，比USB2.0 要快10 倍，因此，对PCB 走线的要求更高。以下为USB 接口的差分对，在PCB走线时，务必走等长差分线，阻抗匹配为90 欧，而且需要有完整的参考平面。

## HDMI 设计

RK3588 芯片自带两路HDMI OUT 控制器，支持HDMI2.0 协议。同时还自带一路HDMIRX2.0 接口，用于对外接收HDMI 信号。核心板上相应的HDMI 差分对，必须走等长差分线，且阻抗匹配为100 欧，否则会出现HDMI 画面丢色，断断续续等问题。

## EDP 设计

RK3588 芯片自带2 路EDP 接口，管脚和两路HDMI OUT 复用。EDP 为差分信号线，适合驱动分辨率较高的液晶屏。EDP 接口的数据传输总容量可以达到21.6Gbps，是LVDS接口的3 倍，它能够驱动更高分辨率的液晶屏，如2K、4K 屏等。在走线时，相关差分对必须走等长差分线，且阻抗匹配为100 欧。

## MIPI 设计

MIPI 是2003 年由ARM，Nokia，ST，TI 等公司成立的一个联盟，目的是把手机内部的接口如摄像头、显示屏、射频基带接口等标准化，从而减少手机的设计复杂度，增加设计的灵活性。MIPI 是一个比较新的标准，目前比较成熟的应用有DSI（显示接口）和CSI（摄相头接口）。RK3588 支持两路DSI 和六路CSI 接口，其中DSI 用于驱动MIPI 显示屏，CSI 可以外接MIPI 摄像头。MIPI 接口的数据传输率要远大于LVDS 接口，在走线时一定要走等长差分线，且阻抗匹配为100 欧。
