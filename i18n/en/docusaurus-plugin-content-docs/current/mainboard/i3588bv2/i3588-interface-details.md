---
sidebar_position: 3
title: Interface Details
description: I3588 mainboard hardware interface descriptions
---

# Interface Details

This page summarizes the hardware interfaces and keeps the interface images from the original hardware manual.

## Power Switch and DC Jack

![Power Switch and DC Jack](./i3588-电源开关和插座-1.jpeg)

The mainboard uses a 12V DC power input. Use a suitable power adapter according to the hardware design requirements.


## Debug UART

![Debug UART](./i3588-调试串口-1.jpeg)

The default debug UART is UART2. The debug port can be used to view boot logs and enter the system console.


## HDMI Interface

![HDMI Interface](./i3588-HDMI-接口-1.jpeg)

The mainboard provides HDMI input/output interfaces. The exact display path and supported modes depend on the firmware configuration.


## Camera Interface

![Camera Interface](./i3588-camera-接口-1.jpeg)

The mainboard provides FPC camera connectors for external MIPI CSI cameras. Check lane configuration and power sequence before connecting a camera.


## Ethernet Interface

![Ethernet Interface](./i3588-以太网接口-1.jpeg)

The mainboard provides wired Ethernet interfaces for network access.


## Headphone Interface

![Headphone Interface](./i3588-耳机接口-1.jpeg)

The headphone jack can be used for audio output.


## LINE IN Interface

![LINE IN Interface](./i3588-LINE-IN-接口-1.jpeg)

The LINE IN connector is used for external audio input.


## Speaker Interface

![Speaker Interface](./i3588-喇叭接口-1.jpeg)

The speaker connector is used for external speaker output.


## Microphone Interface

![Microphone Interface](./i3588-录音接口-1.jpeg)

The microphone connector is used for recording input.


## TF Card Slot

![TF Card Slot](./i3588-TF-卡槽-1.jpeg)

The TF card slot can be used for removable storage or related boot/update functions depending on firmware support.


## Buttons

![Buttons](./i3588-独立按键-1.jpeg)

The independent buttons are used for power, reset, boot, recovery, and other board control functions.


## Type-C Interface

![Type-C Interface](./i3588-TypeC-接口-1.jpeg)

The Type-C interface is mainly used for program download, ADB debugging, or USB OTG functions depending on the board design.


## USB HOST2.0 Interface

![USB HOST2.0 Interface](./i3588-HOST2-0-接口-1.jpeg)

USB HOST2.0 can be used to connect USB mouse, keyboard, flash disk, or other USB peripherals.


## Power Button

![Power Button](./i3588-开机按钮-1.jpeg)

The power button is used to power on, shut down, suspend, or wake the system depending on firmware behavior.


## Reset Button

![Reset Button](./i3588-复位按钮-1.jpeg)

The reset button is used to reset the system.


## BOOT Button

![BOOT Button](./i3588-boot-按钮-1.jpeg)

The BOOT button is used for firmware download or forcing the board into upgrade mode.


## Recovery Button

![Recovery Button](./i3588-Recovery-按钮-1.jpeg)

The Recovery button is used to enter recovery or loader-related modes.


## LCD Interface

![LCD Interface](./i3588-LCD-接口-1.jpeg)

The LCD interface is used for external display modules. Confirm timing, power, and backlight configuration before use.


## Backup Battery

![Backup Battery](./i3588-后备电池-1.jpeg)

The backup battery provides RTC power so the system time can be retained after power loss.


## Wi-Fi / Bluetooth Module

![Wi-Fi / Bluetooth Module](./i3588-WIFI-蓝牙模块-1.jpeg)

The onboard Wi-Fi/Bluetooth module provides wireless network and Bluetooth connectivity.


## UART Interfaces

![UART Interfaces](./i3588-串口-1.jpeg)

UART connectors are provided for external serial devices or debugging.


## PCIe Interface

![PCIe Interface](./i3588-PCIE-接口-1.jpeg)

The PCIe interface can be used for supported high-speed peripherals.


## SATA Interface

![SATA Interface](./i3588-SATA-接口-1.jpeg)

The SATA interface can be used for supported storage devices.
