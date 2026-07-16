---
sidebar_position: 7
title: Android User Guide
description: Pico PC RK3588S Android common operations
---

# Android User Guide

The Android manual covers terminal access, MP3 playback, video playback, Wi-Fi, Bluetooth, USB mouse and keyboard, TF card, USB disk, screen rotation, camera, Ethernet, remote control, HDMI, power on/off, and suspend / wake-up.

## adb and Terminal

```bash
adb devices
adb shell
```

Useful commands in shell:

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
ifconfig
dmesg
```

## Media Playback

Android supports MP3 and video playback. For audio/video debugging, check HDMI / DSI output, audio output device, media format, system player, and hardware codec status.

## Wi-Fi / Bluetooth / Ethernet

The board has on-board dual-band Wi-Fi / BT and Gigabit Ethernet.

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## USB Mouse, Keyboard, TF Card, and USB Disk

HOST ports can connect mouse, keyboard, USB disk, and other peripherals. For TF-card or USB-disk issues:

```bash
mount
df -h
cat /proc/partitions
dmesg
```

## Screen Rotation

Android Surface rotation can be configured as `0/90/180/270`. After modification, reboot or repackage for verification and also check touch coordinate mapping.

## HDMI Output

Micro HDMI provides HDMI OUT. If there is no display, check cable, monitor EDID, resolution, U-Boot logo, kernel logo, Android display service, and display device tree nodes.

## Camera

Android 12 supports CSI camera and USB camera. Check power, reset, MCLK, I2C, MIPI lanes, camera driver, device tree, and Android Camera HAL.

## Power and Suspend

The manual covers power on/off and suspend / wake-up. Debugging should focus on Power Key, PMIC, wake sources, peripheral power retention, and kernel suspend/resume logs.
