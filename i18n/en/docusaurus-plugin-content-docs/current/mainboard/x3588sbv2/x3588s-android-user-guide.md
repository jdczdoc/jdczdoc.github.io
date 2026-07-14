---
sidebar_position: 7
title: Android User Guide
description: X3588S mini ITX Android common functions
---

# Android User Guide

This page summarizes common operations after Android boots.

## Terminal

Use the debug UART to view boot logs. The manual screenshot marks the debug UART baud rate as 1500000 with no hardware flow control.

ADB can also be used:

```bash
adb devices
adb shell
```

If `more than one device and emulator` appears, close extra emulators or restart the adb process.

## MP3 and Video Playback

Place media files on TF card, USB disk, or internal storage and play them with the system player or a third-party player. Use hardware decoding where possible.

## Wi-Fi and Bluetooth

Enable Wi-Fi in Android Settings, select an AP, and enter the password. Bluetooth can be used for file transfer and Bluetooth speakers.

## USB Mouse and Keyboard

Connect a mouse, keyboard, or wireless receiver to a USB HOST port.

## TF Card and USB Disk

External storage is mounted automatically by Android. If it is not detected, check filesystem format, power, and driver state.

## Screen Rotation

Screen orientation can be controlled by system settings, application configuration, or Surface rotation settings.

## Camera

For CSI or USB camera testing, check power, reset, MCLK, I2C, MIPI/CSI lanes, device tree, and driver matching.

## Ethernet

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## HDMI Display

The board supports HDMI output. If there is no image, check resolution, EDID, display service, and device-tree configuration.

## Power, Suspend, and Wake-up

Power, reset, suspend, and wake-up require coordination between keys, PMIC, device tree, and system services.
