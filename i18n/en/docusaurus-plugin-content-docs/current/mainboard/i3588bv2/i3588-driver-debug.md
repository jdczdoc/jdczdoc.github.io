---
sidebar_position: 9
title: Driver and Debug
description: I3588 Android and Linux driver paths and debug commands
---

# Driver and Debug

## Common Driver Paths

| Function | Reference Path |
|---|---|
| G-sensor | `kernel/drivers/input/sensors/accel/lis3dh.c`, `hardware/rockchip/sensor/st` |
| Touchscreen | `kernel/drivers/input/touchscreen/` |
| LCD panel | `kernel/drivers/gpu/drm/panel/`, `panel-simple.c` |
| Keys | `kernel/drivers/input/keyboard/`, `rk_keys.c`, `adc-keys.c` |
| Wi-Fi / BT | `kernel/drivers/net/wireless/rockchip_wlan` |
| Camera | `hardware/rockchip/camera/SiliconImage/isi/drv` |

## Common proc Commands

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
cat /proc/kmsg
df -h
```

## Android Project Notes

Common customization items include `init.rc`, boot animation, U-Boot logo, kernel logo, MIPI panel configuration, shutdown charging, and display rotation.

## Linux Project Notes

For MIPI display configuration, check the Rockchip DTS directory and modify the board DTS/DTSI according to the panel timing and interface wiring.
