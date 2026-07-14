---
sidebar_position: 9
title: Android Test and Driver
description: X3288 Android test application, driver entry points, and common proc queries
---

# Android Test and Driver

This page keeps hardware verification and driver-debugging information. Unrelated product lists are removed.

## Android Test Application

The Android test application can verify common hardware functions from a graphical interface. Swipe left or right, or use a mouse, to switch between test items.

### LCD Test

Tap the color area to change screen colors and check for missing colors or dead pixels.

### Touchscreen Test

Start the touch test and draw diagonal lines to verify the touch panel and touch controller.

### LED Test

Tap an LED icon. Red indicates the LED should be on; gray indicates off.

### Buzzer Test

Press and hold the start button to make the buzzer sound. Release it to stop.

### Backlight Test

Drag the slider to verify backlight brightness adjustment.

### Key Test

Press and release the board keys. The UI should show the corresponding press and release events.

### ADC Test

Monitor ADC voltage values and adjust the on-board potentiometer to verify voltage changes.

### Audio and Camera Tests

Use the audio test to verify speaker output. Connect a camera and use the camera test to verify preview.

### Network, UART, TF Card, and USB Disk Tests

Use the network test for wired/wireless access, short UART TXD/RXD for loopback test, and insert TF card or USB disk to verify external storage detection.

## Kernel Driver Entry Points

Common driver areas include LCD, touch panel, keys, Wi-Fi/Bluetooth, audio, camera, Ethernet, USB, and storage. The exact path depends on the SDK version.

## Common proc Queries

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```
