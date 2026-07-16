---
sidebar_position: 10
title: Interface Details
description: X8385 power, serial, HDMI, Camera, Ethernet, audio, and USB interface notes
---

# Interface Details

## Power and Connectors

The baseboard uses 12V DC input. PWRKEY is the power key and RESET is the reset key. Core-board VSYS input range is 3.1V to 5.25V.

## Debug UART

UART0 is CPU UART0 output and the default debug UART. The Android manual notes `921600` as the SecureCRT debug UART baud rate.

## HDMI

The board provides a standard HDMI connector for external display. For HDMI issues, check cable, monitor, resolution, display configuration, and power.

## Camera

The board provides MIPI CSI1 and MIPI CSI2 Camera connectors. Core-board pin definitions include RDN/RDP, RCP/RCN, and related differential pins for MIPI Camera input.

## Ethernet

Ethernet is implemented through a USB-to-100M Ethernet interface. For Ethernet issues, check USB-to-Ethernet enumeration, driver, power, and cable connection.

## Headphone, Speaker, and Recording

The board includes headphone jack, SPK speaker output, and MIC input. Core-board pins include ACCDET, AU_HPR, AU_HPL, SPK+, SPK-, AU_MICBIAS, and other audio pins.

## TF Card

The TF card provides external storage. Core-board pins `MSDC1_CLK/CMD/DAT0~DAT3` and `SD_CARD_DET_N` are SD-card related.

## Independent Keys

The board provides KEY1~KEY4 and additional PWR, RST, and MODE keys.

## OTG and USB HOST

The DIP switch selects OTG download mode or USB HOST mode. Micro USB is the OTG download port, and USB HOST provides three HOST ports.
