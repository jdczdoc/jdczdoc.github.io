---
sidebar_position: 4
title: Interface Details
description: i6818 power, USB, GPIO, HDMI, Ethernet, audio, camera, and LCD interface notes
---

# Interface Details

## Power and Battery

The board provides a 5V small DC jack for DC input and a single-cell lithium battery connector. A battery area is reserved inside the product enclosure.

## USB HOST and OTG

The top side provides three USB HOST 2.0 ports for mouse, keyboard, USB disk, and other USB devices. The side USB OTG connector is used for program flashing and PC connection.

## GPIO / DEBUG Expansion

The two USB-3.0-shaped connectors on the top are GPIO expansion connectors, not USB 3.0 data interfaces. The DEBUG expansion port can route the debug UART through an external serial adapter, TTL level by default.

## HDMI and Display

The side provides a mini HDMI connector. The default display is an 8-inch 1024 x 768 LVDS IPS screen. The core-board signal set also includes RGB, MIPI, and LVDS related interfaces.

## Camera and Touch

The board integrates a 5MP MIPI camera with autofocus support. A capacitive touchscreen connector is also provided.

## Ethernet and Wireless

The board provides Gigabit Ethernet and built-in Wi-Fi / BT.

## Audio

The board integrates dual stereo speakers and MIC input, and provides an external headphone output.

## Boot and Flashing

i6818 uses the same boot mode as x6818. During boot, the board searches for bootloader from SD0, SD2, and USB device in order. SD0 is connected to the external TF card by default, SD2 is connected to eMMC on the core board, and USB device is connected to the PC through OTG for online flashing with fastboot.

When eMMC is empty, boot from an external TF card. Flash U-Boot to the TF card, insert it into the SD0 channel, boot from the SD card, and then use Micro USB plus fastboot to update the full image. For a board with a valid image, long-press POWER to boot normally.
