---
sidebar_position: 4
title: Interface Details
description: X3568V4 external interface descriptions
---

# Interface Details

This page describes the purpose and connection notes of the external interfaces on the mainboard. It does not repeat the full pin definition table.

## Power Switch and DC Jack

![X3568 power switch and DC jack](./x3568-dc12v.png)

The X3568 uses a 12V DC power supply. The round jack shown in the figure is the 12V DC input connector. The red PH connector on the right can also be used as an alternative 12V power input. Select one of them according to the product design.

## Debug UART

![X3568 debug UART](./x3568-uart2-debug.png)

UART2 is used as the default debug UART. The debug UART can be changed by modifying the software configuration.

## HDMI Interface

![X3568 HDMI interface](./x3568-hdmi.png)

The mainboard uses a mini-HDMI connector. With a mini-HDMI cable, audio and video can be output to HDMI2.0-compatible TVs, monitors, or other display devices.

## Camera Interface

![X3568 camera interface](./x3568-camera.png)

This is a general-purpose 30PIN camera connector and supports OV-series cameras. Different camera modules require matching power supply and driver configuration.

## Ethernet Interface

![X3568 Ethernet interface](./x3568-ethernet.png)

The X3568V4 supports two Gigabit Ethernet ports. The Ethernet PHY has been updated from RTL8211F to YT8521CA.

## Headset Interface

![X3568 headset interface](./x3568-headset.png)

A headset can be connected to this interface for audio output. The signal can also be routed to an amplifier input.

## Speaker Interface

![X3568 speaker interface](./x3568-speaker.png)

The mainboard supports one 2W speaker output.

## Microphone Interface

![X3568 microphone interface](./x3568-mic.png)

The mainboard supports recording input, and the MIC circuit is implemented on the board.

## TF Card Slot

![X3568 TF card slot](./x3568-tf-card.png)

An external TF card can be used for firmware upgrade or for storing multimedia files.

## Independent Keys

![X3568 independent keys](./x3568-keys.png)

The X3568 has four keys: two independent keys, one PWRKEY, and one reset key. The independent keys are detected through ADC sampling.

## USB OTG Interface

![X3568 USB OTG interface](./x3568-usb-otg.png)

The RK3568 OTG interface is multiplexed with one USB3.0 interface. Host / Device mode is selected by the hardware DIP switch. Device mode can be used for firmware download.

## HOST2.0 Interface

![X3568 HOST2.0 interface](./x3568-usb-host2.png)

The RK3568 provides two standard Type-A HOST2.0 ports. Three additional HOST2.0 ports are routed through PH connectors for USB peripheral expansion.

## HOST3.0 Interface

![X3568 HOST3.0 interface](./x3568-usb-host3.png)

The RK3568 provides two HOST3.0 ports. The USB2.0 function of the right-side HOST3.0 port is multiplexed with OTG, so it depends on the DIP switch status.

## Power Key

![X3568 power key](./x3568-power-key.png)

After connecting the external power adapter, long-press PWRKEY to power on. In Android, short-pressing the key enters suspend / wake-up, and long-pressing it opens the shutdown dialog.

## Reset Key

![X3568 reset key](./x3568-reset-key.png)

Pressing RESET while the system is running triggers a hardware reset and reboots the board.

## Recovery Key

![X3568 Recovery key](./x3568-recovery-key.png)

The Volume Up key can be used as the Recovery key during flashing. Hold it during flashing to enter recovery / loader-related modes.

## LCD Interface

![X3568 LCD interface](./x3568-lcd.png)

RK3568 supports dual DSI, LVDS, EDP, and other display interfaces. The left connector is a DSI/LVDS interface selected by software. The right connector is a DSI/EDP interface selected by 0Ω resistor configuration on the core board.

## Backup Battery

![X3568 backup battery](./x3568-rtc-battery.png)

The backup battery keeps the RTC running after power loss, ensuring that the system time is not lost. The X3568 core board has an external RTC chip with operating current below 0.6uA.

## Integrated IR Receiver

![X3568 integrated IR receiver](./x3568-ir.png)

The board uses an HS0038B integrated IR receiver, suitable for infrared remote-control and set-top-box applications.

## Optical Audio Interface

![X3568 optical audio interface](./x3568-spdif.png)

Audio can be output through the speaker, headset, HDMI, or optical interface. The optical interface can connect to speakers or amplifiers with optical input.

## WIFI / Bluetooth Module

![X3568 WIFI / Bluetooth module](./x3568-wifi-bt.png)

The standard configuration includes a 2.4G / 5G dual-band WIFI6 SDIO WIFI/BT combo module, compatible with AP6398S, AP6375S, and Ofilm dual-band WIFI modules.

## UART Interfaces

![X3568 UART interfaces](./x3568-uart-gpio-map.png)

RK3568 provides 10 UART ports. The mainboard reserves three TTL UARTs through PH connectors, corresponding to UART3, UART4, and UART9. UART2 is also reserved as the debug UART.

## PCIe Interface

![X3568 PCIe interface](./x3568-pcie.png)

Compared with RK3288, RK3568 adds a PCIe bus. The mainboard reserves a standard PCIe connector for external PCIe devices.

## Reserved GPIO Interface

![X3568 reserved GPIO interface](./x3568-gpio.png)

The mainboard reserves a GPIO box-header connector for GPIO expansion and common control-type peripheral connections.

## Key Mapping

| Key | Function |
| --- | --- |
| VOL+ | Volume Up |
| VOL- | Volume Down |
| PWRKEY | Power key |
| RESET | Reset key |
