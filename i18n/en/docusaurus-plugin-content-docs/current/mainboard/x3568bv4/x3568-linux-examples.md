---
sidebar_position: 12
title: Linux Development Examples
description: X3568 Linux common commands, proc queries, and debug entry points
---

# Linux Development Examples

This page keeps common Linux debug commands and development entry points, with unrelated product introductions removed.

## Serial Terminal Tools

picocom:

```bash
sudo apt-get install picocom
sudo picocom -b 115200 /dev/ttyUSB0
```

Exit: press `Ctrl+a`, then press `Ctrl+q`.

minicom:

```bash
sudo apt-get install minicom
sudo minicom -s
```

Common settings are `115200 8N1`, with hardware and software flow control disabled.

## Check Serial Device

```bash
dmesg | grep ttyUSB
```

## proc Filesystem Queries

### Boot Arguments

```bash
cat /proc/cmdline
```

### CPU Information

```bash
cat /proc/cpuinfo
```

### Memory Information

```bash
cat /proc/meminfo
```

### Disk Partitions

```bash
cat /proc/partitions
```

### Kernel Version

```bash
cat /proc/version
```

### Network Devices

```bash
cat /proc/net/dev
```

### Kernel Boot Log

```bash
dmesg
cat /proc/kmsg
```

## Check Disk Partition Size

```bash
df -h
lsblk
```

## Debug Suggestions

- For driver issues, check `dmesg`, the device tree, and the corresponding kernel driver path first;
- When a peripheral does not work, check power, reset, clock, I2C/SPI/UART nodes, and pinctrl;
- When flashing fails, first verify the driver version, tool version, loader/maskrom status, and USB cable quality.
