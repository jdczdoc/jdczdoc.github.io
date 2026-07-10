---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the Z3576 core board
---

# Hardware Design

## Pin Description

Z3576 除上述not available as GPIO 口, 电源引脚和Ground外的Signal引脚的其他GPIO 口都可以multiplexed作其他功能,如I2C, UART, SPI, I2S, PWM 等等. 因篇幅有限,本文Description不尽详细, 如有需要, 可以通过仔细阅读核心板原理图或Z3576 的规格书中相关引脚Description获取更多信息.2.5.2 核心板GPIO 电平GPIO Power域的电源脚Description如下:Power DomainGPIO 供电电压Description核心板IO 电平PMUIOO1.8VIO 电压域只有1.8V1.8VPMUIO11.8V/3.3VIO 电压域可配置成1.8V 或3.3V,核心板管脚引出, 由底板供电由底板给核心板PMUIO1 管脚供电电压决定VCCIO01.8VIO 电压域只有1.8V1.8VVCCIO11.8V/3.3VIO 电压域可配置成1.8V 或3.3V, 由底板供电由底板给核心板VCCIO1 管脚供电电压决定VCCIO21.8V/3.3VIO 电压域可配置成1.8V 或3.3V,由底板供电由底板给核心板VCCIO2 管脚供电电压决定VCCIO31.8V/3.3VIO 电压域可配置成1.8V 或3.3V,由底板供电由底板给核心板VCCIO3 管脚供电电压决定VCCIO41.8V/3.3VIO 电压域可配置成1.8V 或3.3V,由底由底板给核心板VCCIO4 管脚供电电压板供电决定VCCIO51.8V/3.3VIO 电压域可配置成1.8V 或3.3V,由底板供电由底板给核心板VCCIO5 管脚供电电压决定VCCIO61.8V/3.3VIO 电压域可配置成1.8V 或3.3V,由底板供电由底板给核心板VCCIO6 管脚供电电压决定VCCIO71.2V/1.8VIO 电压域可配置成1.2V 或1.8V,我司核心板统一配置为1.8V1.8V在做底板设计时, 注意外设芯片的IO 电平要与核心板的IO 电平保持一致, 否则会烧坏CPU.

## Power Supply Design

Z3576 核心板仅需要主电源供电即可正常使用. 详细的电源管脚定义如下:

144, 146, 147, 148 脚: 5V/3A power input接口, 为确保CPU 稳定可靠工作, 务必保证提供足额电流且保证电源纹波电压控制在100MV or lower, 另外电源走线尽可能宽(大于2MM), 换层过孔不less than5 个;

301 脚: 3.3V/0.5A power output, can be used for接口板电源供电(部分外设上电时序有要求, 可参考上述Core Board Pin Definition的Description给对应外设供电);

318, 319, 320, 321 脚: 3.3V/5A power output, can be used for底板电流要求较高的电源供电.

下图为给CPU, NPU, GPU, DDR 供电的核心电源管脚, 核心板对外引出, 在底板设计时, 需在底板上增加电容滤波, 以增强稳定性;

## USB Design

Z3576 核心板有2 路USB2.0 和2 路USB3.0 口. 其中USB2.0 口在development board上设计为固件升级(device)和USB HOST multiplexed,通过外部USB 5V 插入做检测并切换为DEVICE 而升级固件用.defaultUSB2.0 接口能达到480Mbps 的速°C, 而USB3.0 最快能达到5Gbps 的带宽, , 因此,对PCB 走线的要求做特性阻抗匹配. USB 接口的differential pair在PCB 走线时, 务必走等长差分线, 特性阻抗为90 欧-/+10%, 而且需要有完整的参考平面.

## HDMI Design

Z3576 芯片自带一路HDMI OUT 控制器, supportsHDMI2.0 协议. 核心板上相应的HDMIdifferential pair, 必须走等长差分线, 且阻抗匹配为100 欧-/+10%, 否则会出现HDMI 画面丢色,断断续续等问题.

## MIPI Design

MIPI 是2003 年由ARM, Nokia, ST, TI 等公司成立的一个联盟, 目的是把手机内部的接口如camera, display, 射频基带接口等标准化, 从而减少手机的设计复杂°C, 增加设计的灵活性. MIPI 是一个比较新的标准, 目前比较成熟的应用有DSI(显示接口)和CSI(摄相头接口).Z3576 supports1 路MIPI DSI 和2 路MIPI CSI 接口, 其中DSI used for驱动MIPI display, CSI可以外接MIPI camera. MIPI 接口的数据传输率较高, 在走线时一定要走等长差分线, 且阻抗匹配为100 欧-/+10%.
