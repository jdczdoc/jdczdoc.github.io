---
sidebar_position: 5
title: Hardware Design
description: I3399BV2 power, USB, HDMI, EDP, and MIPI design notes
---

# Hardware Design

This page keeps carrier-board design rules only and avoids repeating connector descriptions and pin tables.

## Power Design

The X3399 core board uses 3.3V power. Pins 51 and 52 require 3.3V/4.3A, and pin 42 requires 3.3V/300mA. The main 3.3V rail on pins 51/52 must not be merged with the secondary 3.3V rail on pin 42, otherwise the power-off state may become undefined.

- Pin 42: 3.3V/300mA always-on input for the PMU.
- Pins 51 and 52: 3.3V/4.3A main input, enabled only when the board is powered on.
- Pins 53, 84, and 182: common ground.
- Pin 120: 1.8V/1.5A output for carrier-board peripherals. It becomes 0V after suspend or power-off.

## USB Design

RK3399 provides USB HOST and Type-C interfaces. USB2.0 supports up to 480Mbps, while USB3.0 supports up to 5Gbps, so routing quality is critical. Differential pairs must be length-matched, routed with a complete reference plane, and designed for approximately 90Ω differential impedance.

## USB Differential Pairs

| Differential Pin No. | Differential Signal |
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


## HDMI Design

RK3399 includes an HDMI controller and supports HDMI2.0. Pins 85 to 92 carry four HDMI differential pairs. They must be length-matched and designed for approximately 100Ω differential impedance to avoid color errors, flickering, or intermittent link loss.

## EDP Design

The EDP interface includes five differential pairs corresponding to pins 135 to 144. It can drive high-resolution displays such as 2K and 4K panels. Route the pairs with length matching and approximately 100Ω differential impedance.

## MIPI Design

RK3399 supports DSI for display and CSI for camera. MIPI lanes have much higher data rates than LVDS, so differential length matching, impedance control, fewer vias, and a continuous reference plane are required.
