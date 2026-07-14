---
sidebar_position: 5
title: Hardware Design
description: X3288CV4 power, USB, HDMI, LVDS, and MIPI design notes
---

# Hardware Design

This page keeps only the hardware rules that matter when designing a carrier board. Connector descriptions and pin tables are placed in other pages.

## Power Design

X3288CV4 core board uses a 5 V power input. Pins 159 and 160 are the default 5 V DC input pins. Pins 166 and 167 are connected from the 5 V input through an SS34 diode and can also power the core board.

Key pins:

1. Pins 159 and 160: core-board power input, 4.5-5.5 V / 2 A recommended.
2. Pins 166 and 167: secondary power input through diode from pins 159 and 160.
3. Pin 161: 5 V / 500 mA from PC when OTG is used for image flashing or device mode.
4. Pins 162 and 163: battery input.
5. Pins 164 and 165: ground.
6. Pin 168: RTC backup power.
7. Pin 169: 3.3 V output for carrier board use; it is disabled during suspend and restored after wake-up.

## USB Design

RK3288 has two HOST ports and one OTG port. The OTG port can work as either HOST or DEVICE.

HOST1 and HOST2 have different usage characteristics. HOST1 usually requires a HUB for low-speed devices such as keyboard and mouse, while HOST2 can directly support high-speed and low-speed devices.

For PCB routing:

- HOST1_DM / HOST1_DP are a differential pair.
- HOST2_DM / HOST2_DP are a differential pair.
- OTG_DM / OTG_DP are a differential pair.
- Route each pair as length-matched differential traces with about 90 Ω differential impedance.

## HDMI Design

RK3288 integrates an HDMI controller. The HDMI pins form four differential pairs. Route all HDMI pairs as length-matched differential traces with about 100 Ω differential impedance. Poor impedance or length matching may cause color loss, intermittent display, or unstable HDMI output.

## LVDS Design

RK3288 includes RGB/LVDS display output. LVDS is suitable for higher-resolution LCD panels. LVDS data and clock pairs must be routed as length-matched differential traces with about 100 Ω differential impedance.

## MIPI Design

RK3288 supports MIPI DSI and CSI. DSI is used for MIPI display panels, and CSI is used for MIPI camera modules. MIPI lanes run at high speed and require strict differential routing, length matching, and a continuous reference plane.
