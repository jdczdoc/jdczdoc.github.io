---
sidebar_position: 9
title: Android User Guide
description: X30 Android common operations
---

# Android User Guide

This page summarizes common operations after X30 Android boots.

## Terminal

Use the debug UART or adb:

```bash
adb devices
adb shell
```

If `adb devices` reports `more than one device and emulator`, terminate `adb.exe` on Windows and start adb again.

## MP3 and Video Playback

Place media files on SD card, USB disk, or internal storage. Android Music and Gallery apps will detect playable files.

## Wi-Fi

X30 has an on-board Wi-Fi/BT module. Open Settings, enable Wi-Fi, select an AP, and enter the password.

## Bluetooth Transfer and Speaker

Open Bluetooth settings, search for a phone or Bluetooth speaker, and pair it. After pairing, files can be transferred or audio can be played through the speaker.

## USB Mouse and Keyboard

Connect a USB mouse, keyboard, or wireless receiver to a USB HOST port.

## TF Card and USB Disk

The system automatically mounts TF cards and USB disks under `/storage`. If the device is not detected, check filesystem format, power, and device nodes.

## Screen Rotation

The board has a G-sensor. Applications that support rotation will follow board orientation.

## Camera

Open the Camera application for preview, photo capture, or video recording. If there is no image, check camera power, I2C, MIPI, reset, driver, and device tree.

## Ethernet

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## IR Remote

The X30 hardware supports an integrated IR receiver, so an IR remote can operate the Android UI.

## Power, Suspend, and Wake-up

After a 12V adapter is connected, the board powers on automatically. In Android, hold the power key for the power-off dialog. Press the power key briefly to enter suspend; press it again to wake up.
