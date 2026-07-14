---
sidebar_position: 10
title: Android Test and Driver
description: X30 Android test app, driver entries, and proc queries
---

# Android Test and Driver

## Android Test Application

| Test Item | Description |
| --- | --- |
| LCD | Check solid colors, missing colors, and dead pixels |
| Touchscreen | Handwriting and diagonal-line coordinate test |
| LED | Turn board LEDs on and off |
| Buzzer | Hold the test key to buzz, release to stop |
| Backlight | Check brightness adjustment |
| Keys | Check independent keys, PWRKEY, and RESET |
| Battery | Check battery or power status |
| ADC | Check ADC sampling |
| G-sensor | Check G-sensor |
| Audio | Check headphone, speaker, MIC, recording and playback |
| Camera | Check CSI or USB camera |
| Wi-Fi | Check Wi-Fi scanning and connection |
| Network | Check Ethernet or Wi-Fi connectivity |
| UART | Short TX/RX for loopback test |
| External storage | Check TF card |
| USB disk | Check USB storage |

## Android Kernel Driver Entries

- G-sensor driver
- Capacitive touch driver
- LCD driver
- Key driver
- Wi-Fi/BT module driver
- Camera driver
- proc filesystem

## proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
free -m
cat /proc/partitions
cat /proc/version
uname -a
ifconfig
ip addr
dmesg
```

## Project Practice

Common project tasks include `init.rc` modification, boot animation, U-Boot logo, kernel logo, and MIPI panel configuration.
