---
sidebar_position: 4
title: Hardware Design
description: X3399CV5 core board hardware design notes
---

# Hardware Design

Hardware Design

Power supply design

Pin 37: Core BoardRTC power supply terminal, the default input is 2.5 to 3V/5uA;

Pin 42: 3.3V/300mAPower input interface, pin 42 requires constant power supply of 3.3V under any circumstances to ensure that the PMU on the Core Board is always working or on standby;

51、Pin 52: 3.3V/4.3A Power input interface. These two pins only require 3.3V input when the computer is turned on. When the computer is turned off, the 3.3V voltage is 0;

53、84, 182 feet: Core Board public ground;

Pin 120: 1.8V/1.5A Power output, which can provide power supply to 1.8V peripherals on the base board. The voltage is 0 after sleep or shutdown;

USB design

| Differential pin number | Differential pinName |
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


HDMI design

The RK3399 chip comes with an HDMI controller and supports the HDMI2.0 protocol. There are a total of 8 pins from 85th to 92nd on the Core Board, and 4 pairs of differential lines. Differential lines must be of equal length, and the impedance must be matched to 100 ohms. Otherwise, problems such as color loss and intermittent interruption in the HDMI screen may occur.

EDP ​​design

The RK3399 chip comes with an LCD controller with an EDP interface. EDP is a differential signal line and is suitable for driving LCD screens with higher resolutions. It includes 5 sets of differential pairs, corresponding to Core Board's 135 and 144 pins.

The total data transmission capacity of the EDP interface can reach 21.6Gbps, which is three times that of the LVDS interface. It can drive higher resolution LCD screens, such as 2K, 4K screens, etc. When routing, the five sets of differential pairs must use differential lines of equal length, and the impedance matching is 100 ohms.

MIPI design

RTC design

The corresponding I2C interface is connected to the I2C port of RK3399. The reference is as follows:
