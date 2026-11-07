---
sidebar_position: 3
title: "Linux Usage and Debugging"
description: "x3506bv2 Linux Usage and Debugging"
---

# Linux Usage and Debugging

## UART0 Serial Console

Connect a 3.3 V USB-to-TTL adapter to the [UART0 debug connector](../x3506-interface-details.md). Connect adapter TX to board RX, adapter RX to board TX, and ground to ground. Power the board through its DC input and connect only TX, RX and GND on the adapter.

Configure the terminal for **1500000 baud, 8 data bits, no parity and 1 stop bit**, with hardware and software flow control disabled. Open the terminal before powering on the board to capture boot logs.

## ADB Debugging

If the firmware enables ADB, connect the board to the host through Type-C OTG and run these commands on the host.

```bash
adb devices
adb shell
```

## Inspect System State

From the serial console or ADB shell, inspect the system version, memory, partitions, network interfaces and kernel logs.

```bash
uname -a
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/net/dev
df -h
dmesg
```
