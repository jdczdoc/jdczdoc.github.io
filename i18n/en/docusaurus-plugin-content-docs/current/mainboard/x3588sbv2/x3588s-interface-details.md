---
sidebar_position: 3
title: Interface Details
description: X3588S mini ITX external interface descriptions
---

# Interface Details

This page organizes the interfaces by function for wiring, driver debugging, and documentation reuse.

![X3588S mini ITX top connector map](./x3588s-interface-map-top.png)

![X3588S mini ITX side connector map](./x3588s-interface-map-side.png)

## mini PCIe

Used for a 4G wireless communication module together with the SIM slot.

## TF Card

On-board TF card slot for external storage or upgrade use cases.

## UART

UART6 and UART4 are RS485-level interfaces and can be configured as TTL. UART3 and UART0 are RS232-level interfaces. UART5 and UART7 are TTL. UART2 is the default debug UART.

## USB

The board provides multiple USB HOST2.0 ports, a stacked USB host connector, USB HOST3.0, and Type-C. Type-C can be used for firmware download.

## Display

HDMI OUT, VGA, DSI0, DSI1, and EDP are available. EDP is shared with HDMI OUT.

## Audio

LINE IN, headphone output, MIC input, speaker output, and HDMI audio output are supported.

## Network

GMAC is the Gigabit Ethernet interface. The board also includes dual-band Wi-Fi/Bluetooth and supports mini PCIe wireless expansion.

## SATA

SATA power and signal connectors are provided for SATA SSD/HDD expansion.

## Camera

MIPI CSI0, CSI1, and CSI2 camera connectors are available. The board supports up to four CSI cameras.

## Keys and Expansion Signals

Volume up/down, boot, reset, PWRKEY, power control, recovery, update, and GPIO expansion signals are exported.

## Power

DC jack, 12V IN, 12V OUT, and fan power connector are provided. 12V OUT and fan power can be GPIO-controlled.

## RTC

The coin-cell battery keeps the RTC running after main power is removed.

