---
sidebar_position: 8
title: Android User Guide
description: X3566 Android common operations
---

# Android User Guide

This page summarizes common operations after X3566 Android boots.

## Terminal

Use the debug UART to view boot logs, or use adb:

```bash
adb devices
adb shell
```

If `adb devices` reports `more than one device and emulator`, terminate `adb.exe` in Windows and start adb again.

## MP3 and Video Playback

Place media files on TF card, USB disk, or internal storage, and play them using the system player or a third-party player.

## Wi-Fi and Bluetooth

Enable Wi-Fi in Android Settings, select an AP, and enter the password. Bluetooth can be used for file transfer and Bluetooth speakers.

## USB Mouse and Keyboard

Connect a USB mouse, keyboard, or wireless receiver to a USB HOST port.

## TF Card and USB Disk

The system supports TF card and USB disk mounting. If storage is not detected, check filesystem format, power, and connector state.

## Screen Rotation

Screen orientation can be adjusted through Android settings, system properties, or application configuration.

## Camera

The board supports CIF/CSI cameras and USB cameras. If no image is shown, check camera power, reset, MCLK, I2C, MIPI/parallel signals, device tree, and driver matching.

## Ethernet

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## HDMI Display

X3566 supports HDMI output. If there is no image, check HDMI cable, monitor input source, EDID, resolution, and display-driver configuration.

## Power, Reset, Suspend, and Wake-up

After external power is connected, hold PWRKEY to power on. In Android, press PWRKEY briefly to suspend, press again to wake up, and hold it to enter the power-off UI. RESET performs hardware reset.
