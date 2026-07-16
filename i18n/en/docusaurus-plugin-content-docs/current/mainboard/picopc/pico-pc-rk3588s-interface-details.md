---
sidebar_position: 3
title: Interface Details
description: Pico PC RK3588S external interface usage notes
---

# Interface Details

![Pico PC RK3588S interface map](./pico-pc-rk3588s-interface-map.png)

## Power and Boot Keys

The board provides a 5V Type-C power input. It includes Boot, Reset, Recovery, and Power keys. Boot is used for MaskRom or forced upgrade, Recovery is used during upgrade, Reset performs hardware reset, and Power controls power on/off.

## USB and Type-C

The board includes dual-layer USB HOST 3.0, dual-layer USB HOST 2.0, and a standard Type-C connector. Type-C can be used for firmware download, while HOST ports can connect USB disks, mouse, keyboard, USB cameras, USB wireless modules, and other peripherals.

## Display and Camera

Display interfaces include Micro HDMI output and MIPI DSI. The camera interface is MIPI CSI. In the software support table, CSI camera is supported on Android 12 and Linux + Qt, while Debian 10 and Ubuntu are marked as not supported.

## Network and Wireless

GMAC is used for Gigabit Ethernet and PCIe-related expansion. The board has an on-board dual-band Wi-Fi 5.0 and Bluetooth module.

## Audio

The headphone jack is a 4-pole connector with MIC. Audio is marked as supported on Android 12, Debian 10, Ubuntu, and Linux + Qt. Recording is marked as supported only on Android 12.

## GPIO and Debug UART

The board provides about 28 GPIO expansion pins. UART2 is a TTL-level interface and is the default debug UART.
