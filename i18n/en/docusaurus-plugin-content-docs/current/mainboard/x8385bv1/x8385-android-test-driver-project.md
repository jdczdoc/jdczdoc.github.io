---
sidebar_position: 9
title: Android Test and Driver
description: X8385 Android test items, kernel drivers, and projects
---

# Android Test and Driver

## Android Test Items

| Test Item | Description |
| --- | --- |
| LCD | Check 7-inch MIPI panel, colors, dead pixels, and backlight |
| Touchscreen | Check capacitive touch coordinates and response |
| LED | Check programmable LEDs |
| Buzzer | Check buzzer output |
| Backlight | Check backlight brightness control |
| Keys | Check KEY1~KEY4, Power, Reset, Mode, etc. |
| Battery | Check battery or power status |
| ADC | Check ADC sampling |
| G-sensor | Check gravity sensor |
| Audio | Check headphone, speaker, and MIC |
| Camera | Check MIPI CSI or USB Camera |
| Wireless | Check Wi-Fi / Bluetooth |
| Network | Check 100M Ethernet |
| UART | Check UART |
| External storage | Check TF card |
| USB disk | Check USB storage |

## Android Kernel Drivers

The user manual lists:

- G-sensor driver.
- Capacitive touchscreen driver.
- LCD driver.
- Key driver.
- Wi-Fi / BT module driver.
- proc filesystem.

## proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## Android Development Projects

The manual lists these project examples:

- Modify `init.rc`.
- Modify boot animation.
- Modify U-Boot boot LOGO.
- Modify kernel LOGO.
- Configure MIPI panel.
- Power-off charging and low-voltage pre-charge.
- Android Surface rotation.
