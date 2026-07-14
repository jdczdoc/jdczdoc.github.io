---
sidebar_position: 9
title: Android Test and Driver
description: X3566 Android test app, driver entries, and proc queries
---

# Android Test and Driver

## Android Test Application

| Test Item | Description |
| --- | --- |
| LCD | Check colors, dead pixels, and backlight |
| Touchscreen | Check touch response and coordinate mapping |
| LED | Verify LED control |
| Buzzer | Verify buzzer or PWM control |
| Backlight | Verify brightness adjustment |
| Keys | Verify volume keys, PWRKEY, RESET, and related events |
| Battery | Check battery and power status |
| ADC | Check ADC sampling |
| G-sensor | Check G-sensor driver |
| Audio | Check headphone, speaker, MIC, recording and playback |
| Camera | Check CSI/CIF/USB camera |
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

## Project Practice

Common project changes include `init.rc`, boot animation, U-Boot logo, kernel logo, MIPI panel configuration, power-off charging, low-battery precharge, and Android Surface rotation.
