---
sidebar_position: 8
title: Android User Guide
description: X8385 Android common feature usage
---

# Android User Guide

The Android manual covers terminal access, MP3 playback, video playback, Wi-Fi, Bluetooth, USB mouse and keyboard, TF card, USB disk, screen rotation, Camera, wired Ethernet, remote control, HDMI, power on/off, and suspend / wake-up.

## Terminal

Connect the debug UART. After Android boots, it enters the Android terminal automatically. Useful commands:

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
ifconfig
dmesg
```

## MP3 Playback

Place MP3 files on the external SD card. Open the music player; the system detects audio files automatically and plays the selected file.

## Video Playback

Android provides video playback through Gallery. Gallery scans the external SD card for recognizable video and image files. Items with a play icon are videos; items without it are images.

## Wi-Fi

X8385 has an on-board Wi-Fi / BT combo module, so no extra USB Wi-Fi is needed.

```text
Settings -> Network & Internet -> Wi-Fi
```

Turn on Wi-Fi, select the wireless network, enter the password, and connect.

## Bluetooth File Transfer

```text
Settings -> Connected devices -> Bluetooth
```

Turn on Bluetooth, search for devices, select a target device, and pair. After pairing, images can be sent from Gallery through Bluetooth sharing.

## Bluetooth Audio

Prepare a Bluetooth speaker and switch it to Bluetooth mode. Search and connect it from the board Bluetooth page. After connection, audio/video playback uses the Bluetooth speaker.

## USB Mouse and Keyboard

Connect a USB mouse, keyboard, or wireless mouse/keyboard receiver to the USB HOST port to operate the Android UI.

## TF Card and USB Disk

Mounted TF cards and USB disks can be checked under `/storage`.

```bash
ls /storage
mount
df -h
```

## Screen Rotation

Screen rotation requires both Android display direction and touch coordinate direction to be checked. Reboot and verify after modification.

## Camera, Ethernet, and HDMI

- Camera: check MIPI CSI Camera connection, power, reset, and Android Camera app.
- Ethernet: X8385 uses a USB-to-100M Ethernet interface.
- HDMI: the standard HDMI connector is used for external display.
