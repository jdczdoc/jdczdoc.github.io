---
sidebar_position: 8
title: Android User Guide
description: I3399 Android common function usage
---

# Android User Guide

This page summarizes common functions after Android boots.

## Terminal

Use the debug UART or adb shell:

```bash
adb shell
```

## MP3 and Video Playback

Place media files on TF card, USB disk, or internal storage, then play them with the system player or a third-party player. Use hardware decoding when the format is supported by RK3399.

## Wi-Fi

Open Android Settings, enable Wi-Fi, select an access point, and enter the password. The board includes a dual-band Wi-Fi/Bluetooth module.

## Bluetooth File Transfer

Enable Bluetooth, scan for the target device, pair the devices, and use the Android share menu to send files.

## Bluetooth Audio

Pair a Bluetooth speaker in the Bluetooth settings. After pairing, system audio can be routed to the Bluetooth speaker.

## USB Mouse and Keyboard

Connect a mouse, keyboard, or wireless receiver to the USB HOST interface.

## TF Card and USB Disk

The Android system automatically mounts external storage. The actual mount path depends on the firmware version. Use a file manager or the `mount` command to check it.

## Camera

Connect the camera module and confirm that power, reset, clock, I2C, MIPI/CSI, and driver configuration match the module.

## Ethernet

Connect the Ethernet cable and check the network state from Settings or with commands:

```bash
ifconfig
ping 8.8.8.8
```

## HDMI Display

Connect an HDMI monitor or TV to verify external display and video playback.

## Power, Suspend, and Wake-up

Power key, reset, suspend, and wake-up require cooperation between hardware, PMU, device tree, and system services.
