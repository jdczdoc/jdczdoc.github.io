---
sidebar_position: 3
title: Linux Drivers and Debugging
description: x3576bv3 Linux Drivers and Debugging
---

# Linux Drivers and Debugging

## UART and ADB

Connect UART0 Debug and start with the X3576 example settings of 1500000 baud, 8N1 and no flow control. If output is garbled, verify the firmware settings and adapter capability. ADB uses Type-C OTG and requires the service to be enabled in firmware.

```bash
adb devices
adb shell
```

## Driver Locations

| Function | Path Relative to Kernel Root |
| --- | --- |
| Accelerometer | `drivers/input/sensors/accel/lis3dh.c` |
| Capacitive touch | `drivers/input/touchscreen/` |
| Display panel | `drivers/gpu/drm/panel/` |
| Keys | `drivers/input/keyboard/` |
| Wireless | `drivers/net/wireless/rockchip_wlan/` |

For touch, display and keys, check `gslx680_9tripod.c`, `panel-simple.c`, `rk_keys.c` and `adc-keys.c`. When adapting a camera, check the module device tree, CSI connection and camera drivers in the actual SDK.

## Inspect the Running Board

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
df -h
```

Use UART or ADB to inspect boot arguments, memory, partitions, networking and kernel logs. Check block-device layout in the partition table and mounted filesystem capacity with `df -h`.
