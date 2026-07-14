---
sidebar_position: 8
title: Android Test and Driver
description: X3588S mini ITX Android test application, driver entries, and proc queries
---

# Android Test and Driver

This page keeps the items useful for hardware verification and driver debugging.

## Android Test Application

| Test Item | Description |
| --- | --- |
| LCD | Switch solid colors to check color loss, dead pixels, and backlight |
| Touchscreen | Draw lines to check touch response and coordinate mapping |
| LED | Verify LED control |
| Buzzer | Verify PWM or GPIO control |
| Backlight | Verify brightness adjustment |
| Keys | Verify independent and power-key events |
| Battery / ADC | Check sampling and power information |
| G-sensor | Check sensor driver and HAL |
| Audio | Check speaker, headphone, MIC, and LINE IN |
| Camera | Check CSI or USB camera preview |
| Wi-Fi | Check scanning and connection |
| Network | Check Ethernet or Wi-Fi connectivity |
| UART | Short TX and RX for loopback test |
| External storage / USB disk | Check TF card and USB disk mounting |

## Kernel Driver Entries

- G-sensor
- Capacitive touch
- LCD
- Keys
- Wi-Fi / Bluetooth
- proc filesystem

## Common proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
uname -a
ifconfig
ip addr
dmesg
```

## Android Project Practice

Common customization items include `init.rc`, boot animation, U-Boot logo, kernel logo, MIPI panel configuration, power-off charging, low-battery precharge, and Android Surface rotation.
