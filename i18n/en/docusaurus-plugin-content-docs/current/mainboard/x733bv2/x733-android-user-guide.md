---
title: Android User Guide
sidebar_position: 9
---
# Android User Guide

## ADB

Enable Developer options and USB debugging, then connect the Type-C port:

```bash
adb devices
adb shell
```

Common operations:

```bash
adb push local_file /data/local/tmp/
adb pull /sdcard/file .
adb install app.apk
adb reboot
```

Select a device when multiple targets are connected:

```bash
adb -s <serial> shell
```

## Serial console

UART0 is the default debug console. A typical configuration is 115200 8N1 with all flow control disabled:

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

The connector is logic-level UART and must not be connected directly to an RS232 port.

## Wi-Fi and Bluetooth

AW869A provides Wi-Fi and Bluetooth. Enable them in Settings or inspect them with:

```bash
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell rfkill list
```

## TF card, USB storage and M.2

```bash
adb shell lsblk
adb shell df -h
adb shell mount
```

Android normally mounts removable media through `vold`. M.2 detection also depends on protocol, kernel support and power.

## Ethernet

```bash
adb shell ip link show
adb shell ip addr show eth0
adb shell ip route
adb shell ping -c 4 8.8.8.8
```

## HDMI and internal panels

```bash
adb shell dumpsys display
adb shell dumpsys SurfaceFlinger --display-id
adb shell wm size
adb shell wm density
```

The active combination of HDMI OUT, MIPI DSI and eDP is controlled by device tree, display drivers and the Android display HAL.

## Camera and HDMI input

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "lt6911|mipi|csi|isp|vipp|camera|sensor"
```

Because HDMI IN is converted by LT6911C into MIPI CSI, source-format changes, bridge timing and CSI receiver settings must agree.

## Suspend, wake and reboot

```bash
adb shell input keyevent 26
adb reboot
adb reboot recovery
```

For suspend/wake failures, save serial logs, `logcat`, `dmesg` and wake-source information together.
