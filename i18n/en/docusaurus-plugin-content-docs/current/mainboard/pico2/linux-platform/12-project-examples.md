---
title: Linux Project Examples
sidebar_label: Linux Project Examples
sidebar_position: 12
description: GPIO LED, monitoring daemon, and Tina package integration examples.
---

# Linux Project Examples

## GPIO LED

```text
gpio-led-demo/
├── Makefile
└── gpio_led_demo.c
```

Use the SDK cross compiler and verify that the selected GPIO is not owned by another device.

## Monitoring Daemon

```ini
interval_sec = 5
log_path = /var/log/sysmon.log
```

A monitoring daemon may collect CPU load, memory, temperature, storage, network, and process status.

## Tina Package Integration

```text
openwrt/package/utils/<package>/
├── Makefile
└── src/
```

Enable the package in `menuconfig`, rebuild the root filesystem, and package the firmware. Use log rotation and a controlled restart policy to protect SPI NOR endurance.
