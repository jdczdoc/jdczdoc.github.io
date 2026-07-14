---
sidebar_position: 4
title: Interface Details
description: X3288BV4 connector usage and interface notes
---

# Interface Details

This page describes the external connectors on the X3288 mainboard. It avoids repeating the full pin-definition tables and only keeps the usage notes needed when connecting peripherals.

## Power Input

![X3288 DC input](./x3288-dc12v.png)

The board uses a 12 V DC power input. Use a power adapter with enough current margin. Avoid hot-plugging high-current peripherals while the board is unstable during debugging.

## Debug UART

![X3288 debug UART](./x3288-uart2-debug.png)

UART2 is used as the default debug serial port. Other UARTs can be used for external devices after software configuration. Use a serial converter board when the connector level needs to be converted to RS232.

## HDMI Interface

![X3288 HDMI interface](./x3288-hdmi.png)

The board uses a mini HDMI connector. With a mini HDMI cable, audio and video can be output to monitors, TVs, or other HDMI receivers.

## Camera Interfaces

![X3288 CIF camera interface](./x3288-cif-camera.png)

The 24-pin camera connector supports common OV-series camera modules. For different camera modules, adjust the output voltage and driver configuration according to the camera specification.

![X3288 MIPI camera interface](./x3288-mipi-camera.png)

The board also provides a 26-pin MIPI camera connector.

## Ethernet Interface

![X3288 Ethernet interface](./x3288-ethernet.png)

The board supports Gigabit Ethernet through an on-board RTL8211E PHY.

## Headset, Speaker, and Microphone

![X3288 headset interface](./x3288-headset.png)

The headset connector provides audio output and can also be connected to an external amplifier input. Use a three-wire headset; headsets with microphone wiring may cause distorted output.

![X3288 speaker interface](./x3288-speaker.png)

The speaker connector supports direct speaker output.

![X3288 microphone input](./x3288-mic.png)

The board supports microphone input. The microphone circuit is already on the board, so an external preamplifier is normally not required.

## TF Card Slot

![X3288 TF card slot](./x3288-tf-card.png)

The external TF card slot can be used for firmware upgrade or media-file storage.

## Keys

![X3288 keys](./x3288-keys.png)

| Key | Function |
| --- | --- |
| Recovery / K1 | User key / recovery key |
| K2 | User key |
| K3 | User key |
| K4 | User key |

![X3288 power key](./x3288-power-key.png)

![X3288 reset key](./x3288-reset-key.png)

![X3288 recovery key](./x3288-recovery-key.png)

## USB Interfaces

![X3288 USB OTG](./x3288-usb-otg.png)

The USB OTG connector can be used as a device port for firmware download and debugging.

![X3288 USB HOST](./x3288-usb-host.png)

The USB HOST connector can be used for USB mouse, keyboard, U disk, and other USB peripherals.

## LCD and MIPI Display

![X3288 40-pin LCD interface](./x3288-lcd40p.png)

The LCD interface can be used for TTL/LVDS display expansion according to the display configuration.

![X3288 MIPI LCD interface](./x3288-mipi-lcd.png)

The MIPI DSI interface is used for MIPI display panels.

## RTC Battery and IR Receiver

![X3288 RTC battery](./x3288-rtc-battery.png)

The backup battery keeps the RTC running when the main power is removed.

![X3288 IR receiver](./x3288-ir.png)

The IR receiver can be used for remote-control scenarios.
