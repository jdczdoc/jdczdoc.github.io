---
sidebar_position: 5
title: Software Support
description: Pico PC RK3588S Android, Debian, Ubuntu, and Linux + Qt driver support table
---

# Software Support

Pico PC RK3588S supports Android 12, Linux, Ubuntu, Debian, and Buildroot resources. The table below is organized from the hardware manual.

| System / Driver | Linux + Android 12 | Linux + Debian 10 | Linux + Ubuntu | Linux + Qt |
| --- | --- | --- | --- | --- |
| 7-inch MIPI panel (1024 x 600) | ✓ | ✓ | ✓ | ✓ |
| Backlight driver | ✓ | ✓ | ✓ | ✓ |
| PMIC driver (RK806) | ✓ | ✓ | ✓ | ✓ |
| Capacitive touch | ✓ | ✓ | ✓ | ✓ |
| eMMC driver | ✓ | ✓ | ✓ | ✓ |
| SD-card driver | ✓ | ✓ | ✓ | ✓ |
| ADC driver | ✓ | ✓ | ✓ | ✓ |
| Power on/off | ✓ | ✓ | ✓ | ✓ |
| Suspend / wake-up | ✓ |  |  |  |
| Dual USB HOST 2.0 driver | ✓ | ✓ | ✓ | ✓ |
| Dual USB HOST 3.0 driver | ✓ | ✓ | ✓ | ✓ |
| One Type-C driver | ✓ | ✓ | ✓ | ✓ |
| RTC driver | ✓ | ✓ | ✓ | ✓ |
| Audio | ✓ | ✓ | ✓ | ✓ |
| Recording | ✓ | Not supported | Not supported | Not supported |
| Wi-Fi / BT | ✓ | ✓ | ✓ | ✓ |
| CSI camera driver | ✓ | Not supported | Not supported | ✓ |
| USB port camera driver | ✓ | ✓ | ✓ | ✓ |
| UART | ✓ | ✓ | ✓ | ✓ |
| HDMI OUT | ✓ | ✓ | ✓ | ✓ |
| Gigabit Ethernet | ✓ | ✓ | ✓ | ✓ |
| USB mouse / keyboard | ✓ | ✓ | ✓ | ✓ |


## Notes

- 7-inch MIPI panel, backlight, RK806 PMIC, capacitive touch, eMMC, SD card, ADC, power on/off, USB HOST 2.0, USB HOST 3.0, Type-C, RTC, audio, Wi-Fi/BT, USB camera, UART, HDMI OUT, Gigabit Ethernet, USB mouse, and USB keyboard are marked as supported on all four listed systems.
- Suspend / wake-up is marked as supported only on Android 12.
- Recording is marked as supported only on Android 12.
- CSI camera is marked as supported on Android 12 and Linux + Qt, and not supported on Debian 10 and Ubuntu.
