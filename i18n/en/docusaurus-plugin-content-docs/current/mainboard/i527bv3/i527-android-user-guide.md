---
title: Android User Guide
sidebar_position: 9
---
# Android User Guide

## ADB connection

Enable Developer options and USB debugging, then run:

```bash
adb devices
adb shell
```

Common file operations:

```bash
adb push local_file /data/local/tmp/
adb pull /sdcard/file .
adb install app.apk
```

When multiple devices are connected:

```bash
adb -s <serial> shell
```

## Wi-Fi and Bluetooth

Enable the onboard Wi-Fi/Bluetooth module from Android Settings.

Useful diagnostics:

```bash
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell rfkill list
```

## TF card and USB storage

Check inserted storage devices with:

```bash
adb shell lsblk
adb shell df -h
adb shell mount
```

Android normally mounts removable storage through `vold`. Avoid manually changing system mount points.

## Ethernet

```bash
adb shell ip link show
adb shell ip addr show eth0
adb shell ip route
adb shell ping -c 4 8.8.8.8
```

## Display and HDMI

After connecting HDMI, inspect the display state:

```bash
adb shell dumpsys display
adb shell dumpsys SurfaceFlinger --display-id
```

LCD, HDMI, and touch-to-display mapping depend on the device tree, display HAL, and Android input configuration.

## Suspend, wake, and reboot

```bash
adb shell input keyevent 26
adb reboot
adb reboot recovery
```

For reboot or wake-up failures, capture the serial log, `logcat`, and `dmesg` together.
