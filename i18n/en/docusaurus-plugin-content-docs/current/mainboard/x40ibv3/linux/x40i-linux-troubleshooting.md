---
sidebar_position: 7
title: Linux Troubleshooting
description: x40i Linux Troubleshooting
---

# Linux Troubleshooting

| Symptom | Checks |
| --- | --- |
| No startup | Check 12 V, adapter capacity, POWER, reset and UART0 logs |
| Missing or garbled UART | Verify UART0, 115200-8-N-1, TX/RX, ground and electrical levels |
| USB flashing not detected | Check OTG data cable and driver; hold FEL during power-up/reset |
| Qt build fails | Build the system first, open a new shell and reduce makeall parallelism in setenvs.sh |
| Qt missing from Linux image | Run qtLibAutoBuild.sh, confirm Qt installation, rebuild and package |
| Black screen after Linux boot | Check sys_config.fex panel parameters, backlight and framebuffer, then DvrUI |
| Camera preview covered | Stop DvrUI before running sdktest; source /qt5.sh |
| sdktest exits after about 800 seconds | Inspect the test exit timer and adjust the endurance test |
| Log client cannot find server | Start sdktest first and check working directories and Loglevel_server path |
| Data partition too small | Check both partition sectors and filesystem-image INI capacity |
| Wi-Fi/Bluetooth failure | Verify fitted module, driver, firmware and antenna |
| UART loopback fails | Check TTL/RS232/RS485 configuration and wiring |

Record the board revision, memory/storage configuration, system version, changes, reproduction steps and complete UART logs.
