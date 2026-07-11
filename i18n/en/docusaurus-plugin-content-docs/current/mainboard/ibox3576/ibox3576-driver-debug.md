---
sidebar_position: 8
title: Driver and Debug
description: IBOX3576 Android driver paths and debug commands
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

## Project Notes

Common customization items include `init.rc`, boot logo, MIPI panel configuration, shutdown charging, and low-power precharge.
