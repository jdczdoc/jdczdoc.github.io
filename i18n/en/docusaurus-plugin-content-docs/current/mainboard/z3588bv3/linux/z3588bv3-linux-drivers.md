---
sidebar_position: 2
title: Linux Drivers and System Diagnostics
description: z3588bv3 Linux driver paths, system queries and serial debugging
---

# Linux Drivers and System Diagnostics

## Driver Locations

| Function | Example Path or File |
| --- | --- |
| Accelerometer | `kernel/drivers/input/sensors/accel/lis3dh.c`, `hardware/rockchip/sensor/st/` |
| Capacitive touch | `kernel/drivers/input/touchscreen/gslx680_9tripod.c` |
| LCD / DRM panel | `kernel/drivers/gpu/drm/panel/panel-simple.c`, `kernel/drivers/gpu/drm/` |
| Keys | `kernel/drivers/input/keyboard/rk_keys.c`, `adc-keys.c` |
| Wi-Fi / Bluetooth | `kernel/drivers/net/wireless/rockchip_wlan/` |
| Camera | `hardware/rockchip/camera/SiliconImage/isi/drv/` |

Verify the actual component, module chipset and driver in your SDK before adapting the board, including the driver used for the VS2275P wireless module.

## Inspect System Information

```bash
# Boot arguments
cat /proc/cmdline

# CPU information
cat /proc/cpuinfo

# Memory information
cat /proc/meminfo

# Partitions and block devices
cat /proc/partitions

# Kernel version
uname -a

# Network interfaces
ifconfig -a
# Or
ip addr

# Kernel boot log
 dmesg
```

The output and available entries vary by kernel configuration and system version.

## Serial Debugging

Use `minicom`, `picocom` or `kermit` with the board's DEBUG cable. Run `dmesg | grep ttyUSB` to identify the adapter device node. Example:

```bash
sudo apt-get install picocom
sudo picocom -b 115200 /dev/ttyUSB0
```

Exit picocom with `Ctrl+A`, then `Ctrl+Q`. The SecureCRT example uses 1,500,000 baud. Set the baud rate for the actual DEBUG interface and SDK.
