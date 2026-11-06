---
title: Android Usage and Debugging
description: "Enable USB debugging, then run:"
---

# Android Usage and Debugging

## ADB

Enable USB debugging, then run:

```bash
adb devices
adb shell
```

For multiple connected devices:

```bash
adb devices -l
adb -s <serial> shell
```

## Serial Console

UART0 is 3.3 V TTL. When using a USB-to-UART adapter, cross TX/RX and connect GND; confirm voltage compatibility. The Android and Linux manuals show different SecureCRT baud-rate examples. Verify the active rate from the current U-Boot / kernel configuration.

## Functional Checks

The Android manual includes tests for Wi-Fi, Bluetooth data and audio, USB mouse / keyboard / storage, TF card mounting, display rotation, HDMI, camera capture, wired Ethernet, IR remote control, power management and suspend / resume.

## System Information

```bash
adb shell getprop
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell cat /proc/version
adb shell cat /proc/net/dev
```

## Recommended Debugging Order

1. Verify power, connector orientation, pinout and module BOM.
2. Check U-Boot detection and peripheral power rails.
3. Inspect kernel `dmesg` for probe, I2C, MMC, USB, DRM and network messages.
4. Check device nodes, Android HAL / framework services and permissions.
5. Investigate application-layer issues only after lower layers are confirmed.
