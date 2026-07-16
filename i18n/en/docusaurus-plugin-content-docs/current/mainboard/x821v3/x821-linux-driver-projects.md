---
title: Linux Drivers and Projects
sidebar_position: 17
description: "V821 Linux driver integration, device tree, GPIO applications, and daemon development"
---

# Linux Drivers and Projects

## Driver Integration Layout

A new driver commonly contains:

```text
drivers/vendor/mydevice/
├── Kconfig
├── Makefile
└── mydevice.c
```

The parent `Kconfig` and `Makefile` must include the directory. A driver can be built in with `=y` or built as a module with `=m`.

## Device-tree Matching

```dts
mydevice@10000000 {
    compatible = "vendor,mydevice";
    reg = <0x0 0x10000000 0x0 0x1000>;
    interrupts = <...>;
    clocks = <&ccu ...>;
    resets = <&ccu ...>;
    pinctrl-names = "default";
    pinctrl-0 = <&mydevice_pins>;
    status = "okay";
};
```

The driver matches `compatible` through `of_match_table` and obtains registers, interrupts, clocks, resets, GPIOs, and regulators in `probe()`.

## User-space Interfaces

- `/dev`: stable read/write/ioctl/poll interface.
- sysfs: small attributes and state.
- debugfs: development debugging, not a stable ABI.
- procfs: legacy compatibility; prefer sysfs/debugfs for new interfaces.
- netlink: event delivery and control messages.

## GPIO LED Application

New kernels favor the GPIO character device and libgpiod. If the current SDK still enables sysfs GPIO, a temporary test is:

```bash
echo 102 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio102/direction
echo 1 > /sys/class/gpio/gpio102/value
```

GPIO 102 is only an example. Confirm the actual LED pin from the X821 schematic and device tree.

Cross-build Makefile:

```make
CROSS_COMPILE ?= riscv64-unknown-linux-gnu-
CC := $(CROSS_COMPILE)gcc
CFLAGS := -Wall -O2

all: gpio_led_demo

gpio_led_demo: src/gpio_led_demo.c
	$(CC) $(CFLAGS) -o $@ $<

clean:
	rm -f gpio_led_demo
```

## System-monitor Daemon

A daemon can periodically read:

```text
/proc/stat
/proc/meminfo
/proc/uptime
/sys/class/thermal/
```

Include log rotation, signal-based shutdown, configuration validation, watchdog heartbeat, and write-rate limiting. Storage is limited on the V821; logs must not grow without bounds.

## SDK Integration

Package the application as an OpenWrt package, install the binary under `/usr/bin`, configuration under `/etc`, and the init script under `/etc/init.d`. This integrates menuconfig, dependencies, rootfs packaging, and version control.
