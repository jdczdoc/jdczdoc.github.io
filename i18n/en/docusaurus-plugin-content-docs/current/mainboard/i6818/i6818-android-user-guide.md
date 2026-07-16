---
sidebar_position: 10
title: Android User Guide
description: i6818 Android common operations
---

# Android User Guide

> Note: This software page reuses the x6818 software documentation flow as requested. i6818 and x6818 have similar boot/flashing flows; actual commands, source package names, and image names should follow the current i6818 SDK.

The i6818 Android manual covers terminal access, media playback, network, Bluetooth, USB peripherals, APK installation, screenshots, storage mounting, screen rotation, camera, Ethernet, IR remote, power on/off, suspend/resume, USB 3G, PCIe data card, and USB camera.

## Terminal

```bash
adb devices
adb shell
```

The debug UART can also be used. The common baud rate is 115200.

## Media Playback

MP3 can be played through command line or the default Android player. Video and images can be opened through the system player and Gallery. 1080P video playback, Youku, and TV playback are also covered in the manual.

## Wi-Fi / Bluetooth / Ethernet

i6818 supports USB Wi-Fi/BT, Bluetooth data transfer, Bluetooth music playback, and Gigabit Ethernet. Common network commands:

```bash
ifconfig
netcfg
ping 8.8.8.8
```

## USB Mouse, Keyboard, and Storage

USB mouse and keyboard can be used through HOST ports. U disk and TF card can be mounted and checked by:

```bash
mount
df -h
ls /mnt
ls /storage
```

## APK Installation

The manual lists four APK installation methods:

- Install from SD card.
- Install with ApkInstaller.
- Install with adb.
- Online installation.

adb example:

```bash
adb install demo.apk
adb install -r demo.apk
```

## Screenshot

The manual includes Eclipse and 91 Assistant screenshot methods. Android screencap can also be used:

```bash
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png
```

## Display and Rotation

The manual includes VGA display, HDMI display, and screen rotation. For display issues, check panel timing, U-Boot logo, kernel logo, Android display service, backlight, and touch-coordinate mapping.

## Camera

The manual includes photo/video capture and USB camera usage. i6818 hardware supports BT656 / BT601 / MIPI camera interfaces. Debugging should check power, reset, I2C, MCLK, data lanes, device tree, and driver.

## Power, Suspend, and Wake-up

i6818 supports software power on/off, suspend/resume, and RTC. For suspend issues, check PWRKEY, PMU, wake sources, peripheral power hold, and kernel suspend/resume logs.
