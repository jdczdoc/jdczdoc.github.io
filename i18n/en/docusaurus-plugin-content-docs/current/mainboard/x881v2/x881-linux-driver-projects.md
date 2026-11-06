---
sidebar_position: 22
title: Linux drivers and project integration
description: x881 Linux drivers and project integration
---

# Linux drivers and project integration

## Driver integration

```text
bsp/drivers/vendor/mydevice/
  Kconfig
  Makefile
  mydevice.c
```

Reference the directory from parent Kconfig/Makefile and choose built-in or module compilation. Match device-tree compatible with of_match_table and acquire registers, IRQs, clocks, resets, GPIO and regulators in probe. Use actual hardware addresses, pins and interrupts.

```make
obj-$(CONFIG_MYDEVICE) += mydevice.o
```

## Debug and application interfaces

Applications use /dev read/write/ioctl/poll or documented sysfs interfaces; debugfs is for development. Verify binding, resource acquisition and interrupts before application integration.

```bash
dmesg | tail -n 100
ls -l /dev
cat /proc/interrupts
ls /sys/kernel/debug
```

## Daemons and deployment

Monitor system state through /proc/stat, /proc/meminfo, /proc/uptime and thermal nodes. Implement log rotation, signal handling, configuration validation and recovery, then package the program and init script as a Tina package.

For AI glasses, validate camera capture, microphone recording, JL7018 wake, networking, display and battery suspend current in stages. Record firmware/test configuration and isolate changes to make failures traceable.
