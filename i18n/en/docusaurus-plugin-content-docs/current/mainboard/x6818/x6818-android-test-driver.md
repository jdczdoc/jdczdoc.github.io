---
sidebar_position: 8
title: Android Test and Driver
description: X6818 Android test application, kernel drivers, and proc queries
---

# Android Test and Driver

## Android Test Application

| Test Item | Description |
| --- | --- |
| LCD | Check colors, dead pixels, and display issues |
| Touchscreen | Check 5-point capacitive touch and coordinates |
| LED | Check four LEDs |
| Buzzer | Check active buzzer |
| Backlight | Check brightness adjustment |
| Keys | Check Return, Volume, Menu, Power, Reset |
| Battery | Check battery and PMU state |
| DAC / ADC | Check ADC sampling |
| G-sensor | Check gravity sensor |
| Audio | Check speaker, headphone, MIC, recording and playback |
| Camera | Check parallel, MIPI, or USB camera |
| Wi-Fi | Check Wi-Fi scanning and connection |
| Network | Check Ethernet or Wi-Fi network |
| UART | TX/RX loopback or UART cross-test |
| External storage | Check TF card |
| USB disk | Check USB storage |

## Android Kernel Drivers

The manual lists the following driver sections:

- LED driver.
- Kernel heartbeat monitor driver.
- G-sensor driver.
- Capacitive touchscreen driver.
- LCD driver.
- Key driver.
- USB Wi-Fi driver.
- VGA driver.
- HDMI driver.
- proc filesystem.

## proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
ifconfig
dmesg
```

## Android Practical Projects

The manual includes:

- Create a hello x6818 project.
- Run hello x6818 on the board.
- Write an LED test program from scratch.
- Create the first APK and call low-level drivers through JNI + NDK.
- Modify VGA resolution.
- Modify init.rc.
- Modify boot animation.
- Modify U-Boot boot logo.
- Modify kernel logo.
- Use Git for source control.
- Package the whole Android BSP.
- Use the mm command for partial build.
- Configure minicom on Ubuntu.
