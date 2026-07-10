---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the X3399CV5 core board
---

# Hardware Design

## Power Supply Design

X3399CV3, X3399CV4, X3399CV5 核心板在底板Hardware Design上没有任何区别, 采用3.3V供电的方式, 用户需要给第51, 52 管脚供3.3V/4.3A 的直流电, 给第42 脚供3.3V/300mA的直流电, 给第37 脚的RTC 管脚供2.5 到3V 的电, 核心板即可以正常工作. 注意, 第51,52 脚的3.3V 供电和第42 脚的3.3V 供电不能合并, 否则会出现关机状态未知的现象. 详细的电源管脚定义如下:

37 脚: 核心板RTC 供电端, default输入2.5 到3V/5uA;

42 脚: 3.3V/300mA power input接口, 42 脚在任何情况下, 3.3V 都需要常供电, 以保证核心板上的PMU 永远处于工作或是待命状态;

51, 52 脚: 3.3V/4.3A power input接口, 这两个管脚只有在开机时才需要3.3V 输入, 当关机后, 3.3V 电压为0;

53, 84, 182 脚: core board common ground;

120 脚: 1.8V/1.5A power output, 它可以used for给底板上1.8V 的外设供电, 在休眠, 关机后电压为0;

## USB Design

RK3288 有两路HOST 口和两路TYPEC 口, 其中一路TPYEC 接口核心板通过USB3.0接口引出, 另一路通过TYPEC 接口引出. 其中TYPEC 口即可作HOST 口也可作DEVICE用, 它除了具备标准的OTG 口外, 还能DriverVGA, HDMI, DP 屏. USB3.0 接口used for连接普通的HOST3.0 外设.defaultUSB2.0 接口能达到480Mbps 的速°C, 而USB3.0 最快能达到5Gbps 的带宽, 比USB2.0 要快10 倍, 因此, 对PCB 走线的要求更高. or lower为USB 接口的differential pair, 在PCB走线时, 务必走等长差分线, 阻抗匹配为90 欧, 而且需要有完整的参考平面.差分管脚编号差分管脚名称114, 115USB3_DM, USB3_DP116, 117HOST0_DM, HOST0_DP118, 119HOST1_DM, HOST1_DP109, 110USB3_SSRXP, USB3_SSRXN107, 108USB3_SSTXP, USB3_SSTXN105, 106TYPEC0_DM, TYPEC0_DP103, 104TYPEC0_TX2P, TYPEC0_TX2N101, 102TYPEC0_RX2N, TYPEC0_RX2P99, 100TYPEC0_TX1P, TYPEC0_TX1N97, 98TYPEC0_RX1N, TYPEC0_RX1P

## HDMI Design

RK3399 芯片自带HDMI 控制器, supportsHDMI2.0 协议. 核心板上第85 到92 共8 个管脚, 4 对差分线, 必须走等长差分线, 且阻抗匹配为100 欧, 否则会出现HDMI 画面丢色,断断续续等问题.

## EDP Design

RK3399 芯片自带EDP 接口的LCD 控制器, EDP 为差分Signal线, 适合Driver分辨率较高的液晶屏. 它包括5 组differential pair, 对应核心板的135 和144 管脚.EDP 接口的数据传输总容量可以达到21.6Gbps, 是LVDS 接口的3 倍, 它能够Driver更高分辨率的液晶屏, 如2K, 4K 屏等. 在走线时, 5 组differential pair必须走等长差分线, 且阻抗匹配为100 欧.

## MIPI Design

MIPI 是2003 年由ARM, Nokia, ST, TI 等公司成立的一个联盟, 目的是把手机内部的接口如camera, display, 射频基带接口等标准化, 从而减少手机的设计复杂°C, 增加设计的灵活性. MIPI 是一个比较新的标准, 目前比较成熟的应用有DSI(Display Interface)和CSI(摄相头接口).RK3399 supportsDSI 和CSI, DSI 对应核心板的第74 到83 脚, used for接MIPI 接口的display;CSI 对应核心板的第74 到73 脚, used for接MIPI 接口的摄相头. 另外RK3399 还有一路MIPI接口, 即可以做DSI 也可以做CSI, 对应核心板的第54 到63 管脚, 用户可以根据自己的需求灵活选用. MIPI 接口的数据传输率要远大于LVDS 接口, 在走线时一定要走等长差分线,且阻抗匹配为100 欧.

## RTC Design

default瑞芯微提供的PMU RK808 或RK818 均已自带RTC 功能, 但是它的RTC 工作电流达到了30uA or higher. 用一颗常规的CR1220 的纽扣电池, 一个月内电量就耗尽了. 如产品设计对RTC 工作时间有要求, 推荐使用武汉芯景科技的AT8563 或AT8563S, 它的RTC 工作维持电流仅需要0.6uA, 电池使用寿命延长了50 倍. 推荐参考电路如下:对应的I2C 接口接到RK3399 的I2C 口, 参考如下:
