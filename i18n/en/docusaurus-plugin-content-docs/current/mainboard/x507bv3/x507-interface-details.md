---
title: Interface Details
sidebar_position: 4
description: "Locations, functions, and notes for X507 hardware interfaces"
---


# Interface Details

## Power Input

![Power Input](./x507-power-input.png)

The board uses a 12V DC input. The standard package in the hardware manual includes a 12V/2A adapter.

## Gigabit Ethernet

![Gigabit Ethernet](./x507-ethernet.png)

An RTL8211F Gigabit Ethernet PHY is fitted. Network configuration is handled by Android or Linux.

## TF Card

![TF Card](./x507-tf-card.png)

One TF card slot is provided for storage expansion and file transfer.

## Parallel Camera

![Parallel Camera](./x507-camera-parallel.png)

The 24-pin connector carries the parallel camera bus. Confirm the module supply voltage and LDO setting.

## MIPI CSI Camera

![MIPI CSI Camera](./x507-camera-mipi.png)

The 26-pin connector carries the MIPI CSI differential interface.

## SIM and PCIe 4G Expansion

![SIM and PCIe 4G Expansion](./x507-sim-card.png)

The SIM slot is used together with a PCIe 4G communication module.

## FEL Upgrade Key

![FEL Upgrade Key](./x507-fel-key.png)

Hold FEL and reset or reapply power to enter the Allwinner USB upgrade mode.

## Power Key

![Power Key](./x507-power-key.png)

Used for power-on, Android suspend/resume, and software shutdown.

## Reset Key

![Reset Key](./x507-reset-key.png)

Performs a hardware reset while the system is running.

## Key Header

![Key Header](./x507-key-header.png)

A 6-pin PH header exposes power, reset, and upgrade-key signals.

## UART Headers

![UART Headers](./x507-uart-headers.png)

UART0 is the TTL debug port. UART2 and UART5 are selectable as TTL or RS-232.

## I2C and SPI Headers

![I2C and SPI Headers](./x507-i2c-spi-headers.png)

I2C and SPI expansion signals. Verify pin multiplexing and voltage domains from the schematic.

## LCD and Backlight

![LCD and Backlight](./x507-lcd-connectors.png)

The connectors are for backlight, LVDS, and multiplexed LVDS/RGB display signals.

## HDMI

![HDMI](./x507-hdmi.png)

Type-A HDMI output for a monitor or television.

## USB

![USB](./x507-usb.png)

Two USB Host 2.0 Type-A ports and one Micro USB OTG port.

## RTC Battery

![RTC Battery](./x507-rtc.png)

The backup battery maintains the RTC when main power is removed.

## Wi-Fi/Bluetooth

![Wi-Fi/Bluetooth](./x507-wifi-bt.png)

On-board 2.4GHz/5GHz dual-band Wi-Fi and Bluetooth module.
