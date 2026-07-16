---
sidebar_position: 5
title: Hardware Design
description: X3399V4 power, USB, HDMI, EDP, and MIPI baseboard design notes
---

# Hardware Design

## Power Design

X3399CV3 and X3399CV4 use the same baseboard hardware design. The core board uses 3.3V power. The baseboard must provide 3.3V / 4.3A to pins 51 and 52, 3.3V / 300mA to pin 42, and 2.5V to 3V to the RTC pin 37.

:::warning
Do not merge the 3.3V supply of pins 51/52 with the 3.3V supply of pin 42. Otherwise, the power-off state may become undefined.
:::

| Pin | Description |
| --- | --- |
| 37 | RTC power input, default 2.5V to 3V / 5uA |
| 42 | 3.3V / 300mA input, always powered to keep PMU active or standby |
| 51, 52 | 3.3V / 4.3A input, required only when powered on; 0V after shutdown |
| 53, 84, 182 | Common ground |
| 120 | 1.8V / 1.5A output for 1.8V baseboard peripherals; 0V after suspend or shutdown |

## USB Design

USB 2.0 can reach 480Mbps, while USB 3.0 can reach 5Gbps. USB differential pairs must be routed as length-matched differential traces, with 90Ω impedance and a complete reference plane.

| Differential Pins | Signal Pair |
| --- | --- |
| 114、115 | USB3_DM、USB3_DP |
| 116、117 | HOST0_DM、HOST0_DP |
| 118、119 | HOST1_DM、HOST1_DP |
| 109、110 | USB3_SSRXP、USB3_SSRXN |
| 107、108 | USB3_SSTXP、USB3_SSTXN |
| 105、106 | Type-C0_DM、Type-C0_DP |
| 103、104 | Type-C0_TX2P、Type-C0_TX2N |
| 101、102 | Type-C0_RX2N、Type-C0_RX2P |
| 99、100 | Type-C0_TX1P、Type-C0_TX1N |
| 97、98 | Type-C0_RX1N、Type-C0_RX1P |


## HDMI Design

RK3399 has an integrated HDMI controller and supports HDMI 2.0. Core-board pins 85 to 92 are four differential pairs. They must be routed as length-matched differential traces with 100Ω impedance. Otherwise, HDMI color loss or intermittent display may occur.

## EDP Design

RK3399 includes an EDP LCD controller. EDP is a differential interface for high-resolution panels. It includes five differential pairs corresponding to core-board pins 135 to 144. The total EDP data bandwidth can reach 21.6Gbps, about three times LVDS, and can drive 2K or 4K panels. Route the five differential pairs length-matched with 100Ω impedance.

## MIPI Design

RK3399 supports DSI and CSI. DSI corresponds to core-board pins 74 to 83 for MIPI displays, and CSI corresponds to pins 64 to 73 for MIPI Cameras. Another MIPI interface can be used as either DSI or CSI and corresponds to pins 54 to 63. MIPI data rate is high, so route the signals as length-matched differential traces with 100Ω impedance.
