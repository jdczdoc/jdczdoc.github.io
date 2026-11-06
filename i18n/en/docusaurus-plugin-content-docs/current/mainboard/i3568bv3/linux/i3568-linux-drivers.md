---
sidebar_position: 3
title: Linux Drivers and Debugging
description: i3568bv3 Linux Drivers and Debugging
---

# Linux Drivers and Debugging

## Driver Locations

| Function | SDK Path |
| --- | --- |
| Accelerometer | `kernel/drivers/input/sensors/accel/lis3dh.c` |
| Capacitive touch | `kernel/drivers/input/touchscreen/` |
| LCD panel | `kernel/drivers/gpu/drm/panel/panel-simple.c` |
| Keys | `kernel/drivers/input/keyboard/` |
| Wi-Fi/Bluetooth | `kernel/drivers/net/wireless/rockchip_wlan/` |
| Camera | `hardware/rockchip/camera/SiliconImage/isi/drv/` |

For Linux touch, check `gslx680_9tripod.c`. For keys, check `rk_keys.c` and `adc-keys.c`. Verify the peripheral model, source revision, device tree and firmware support before editing a driver.

## Inspect System State

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

Log in over UART2 to inspect boot arguments, memory, partitions, interfaces and kernel logs. The partition table describes block devices, while `df -h` reports mounted filesystem capacity. Record the image version, peripheral model and complete boot log when debugging.
