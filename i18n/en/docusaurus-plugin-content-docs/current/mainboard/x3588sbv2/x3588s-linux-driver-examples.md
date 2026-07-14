---
sidebar_position: 10
title: Linux Driver and Debug
description: X3588S mini ITX Linux driver entries, proc queries, and debugging examples
---

# Linux Driver and Debug

This page summarizes common Linux driver entries, proc queries, and debug commands.

## Kernel Driver Entries

- G-sensor
- Capacitive touch
- LCD
- Keys
- Wi-Fi / Bluetooth
- Camera
- proc filesystem

## proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
free -m
cat /proc/partitions
lsblk
cat /proc/version
uname -a
ifconfig
ip addr
dmesg
dmesg | grep -i error
```

## Partition Size

```bash
df -h
lsblk
cat /proc/partitions
```

## MIPI Panel Configuration

Check the following items when enabling a MIPI panel:

- Panel power and backlight power.
- Reset, enable, and backlight PWM pins.
- DSI lane count, clock, polarity, and initialization commands.
- Touchscreen I2C address, interrupt pin, and reset pin.
- `dmesg` logs for panel, DSI, backlight, and touch.

## UART Debug

Use a USB-to-UART adapter with the debug UART. Example:

```bash
sudo picocom -b 1500000 /dev/ttyUSB0
```

Exit picocom with `Ctrl+a` followed by `Ctrl+q`.
