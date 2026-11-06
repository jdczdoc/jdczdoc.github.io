---
sidebar_position: 4
title: Android Drivers and Debug
description: x40i Android Drivers and Debug
---

# Android Drivers and Debug

## Driver Locations

| Function | Path / File |
| --- | --- |
| Orientation sensor | lichee/linux-3.10/drivers/input/sensor/ |
| Touch | lichee/linux-3.10/drivers/input/touchscreen/gslx680/gslX680.c |
| Keys | lichee/linux-3.10/drivers/input/keyboard/ |
| Wi-Fi/BT | lichee/linux-3.10/drivers/net/wireless/ |
| Audio | lichee/linux-3.10/sound/soc/ |

Select drivers matching the actual components, rebuild the kernel, package and flash. Confirm touch and sensor models from the board assembly.

## Inspect System Information

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

Run these commands through UART or `adb shell` to inspect boot arguments, CPU, memory, partitions, kernel, network and boot logs. Save the output from the actual board for diagnosis.

## NAND Adaptation

For a NAND design, trim rootfs to fit the device and update `lichee/tools/pack/chips/sun8iw11p1/configs/a40-p1/sys_partition.fex`. Partition `size` is in 512-byte sectors; plan sizes in multiples of 16 MiB. Repackage completely and validate after changes.
