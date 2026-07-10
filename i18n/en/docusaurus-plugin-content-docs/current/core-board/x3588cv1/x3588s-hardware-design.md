---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the X3588S core board
---

# Hardware Design

## Pin Description

RK3588S 除differential pair, ADC 输入脚外的GPIO 口都可以multiplexed作其他功能, 如I2C, UART,SPI, I2S, PWM 等等. 因篇幅有限, 本文Description不尽详细, 如有需要, 可以通过仔细阅读核心板原理图, 或阅读《RK3588S_PinOut_V10_20220107.xlsx》获取更多信息.

## GPIO Power

GPIO Power域的电源脚Description如下:Power DomainGPIO TypeDescriptionX3588S Core Board LevelPMUIO11.8V1.8V Only IO supply1.8Vfor this GPIO domain(group).PMUIO21.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).1.8VEMMCIO1.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO11.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO21.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).程序控制, 由PMU的PLDO5 决定, default3.3VVCCIO31.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO41.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).1.8VVCCIO51.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).1.8VVCCIO61.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).3.3V其中PMUIO1, EMMCIO, VCCIO1, VCCIO3 为固定电平Power Domain, 不可进行配置.PMUIO2 , VCCIO2 , VCCIO[4 : 6] Power DomainRK3588 芯片可以自动识别硬件配置的电压,不需要软件根据硬件供电电压进行配置. 在做接口板设计时, 注意Power Domain的IO 电平要与对接外设芯片/器件的IO 电平保持一致, 否则会烧坏CPU.

## Power Supply Design

X3588S 核心板仅需要主电源供电即可正常使用. 详细的电源管脚定义如下:

61, 62, 63 脚: 4V/5A power input接口, 为确保CPU 稳定可靠工作, 务必保证提供足额电流;

60 脚: 3.3V/2A power output, can be used for接口板电源供电;

71 脚: 1.8V/2A power output, can be used for接口板电源供电.

## USB Design

RK3588S 有两路HOST 口, 一路TYPEC 口及一路USB3.0 口. 其中TYPEC 口可用作HOST 口, DEVICE 口或DP 口. 它即能驱动VGA, HDMI, DP 屏, 也能当作普通的USB3.0接口, used for连接普通的HOST3.0 外设.defaultUSB2.0 接口能达到480Mbps 的速°C, 而USB3.0 最快能达到5Gbps 的带宽, 比USB2.0 要快10 倍, 因此, 对PCB 走线的要求更高. or lower为USB 接口的differential pair, 在PCB走线时, 务必走等长差分线, 阻抗匹配为90 欧, 而且需要有完整的参考平面.

## HDMI Design

RK3588S 芯片自带一路HDMI OUT 控制器, supportsHDMI2.0 协议. 相比RK3588, 它不supportsHDMI IN 功能. 核心板上相应的HDMI differential pair, 必须走等长差分线, 且阻抗匹配为100 欧, 否则会出现HDMI 画面丢色, 断断续续等问题.

## EDP Design

RK3588S 芯片自带1 路EDP 接口, 管脚和HDMI OUT multiplexed. EDP 为差分Signal线, 适合驱动分辨率较高的液晶屏. EDP 接口的数据传输总容量可以达到21.6Gbps, 是LVDS 接口的3 倍, 它能够驱动更高分辨率的液晶屏, 如2K, 4K 屏等. 在走线时, 相关differential pair必须走等长差分线, 且阻抗匹配为100 欧.

## MIPI Design

MIPI 是2003 年由ARM, Nokia, ST, TI 等公司成立的一个联盟, 目的是把手机内部的接口如camera, display, 射频基带接口等标准化, 从而减少手机的设计复杂°C, 增加设计的灵活性. MIPI 是一个比较新的标准, 目前比较成熟的应用有DSI(显示接口)和CSI(摄相头接口).RK3588S supports两路DSI 和四路CSI 接口, 其中DSI used for驱动MIPI display, CSI 可以外接MIPI camera. MIPI 接口的数据传输率要远大于LVDS 接口, 在走线时一定要走等长差分线, 且阻抗匹配为100 欧.

## Core Board Version

受存储行情影响, X3588SCV4 在保留硬件和X3588SCV3 尺寸, 管脚完全兼容的前提下, RAM由LPDDR4 更新到LPDDR5, 用户可零成本无缝替代. 受DDR 性能差异影响, 建议在切换到LPDDR5 时, 验证样品.
