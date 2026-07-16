---
sidebar_position: 9
title: Linux Development Environment
description: Pico PC RK3588S Linux/Android shared development environment setup
---

# Linux Development Environment

The Linux manual states that the environment is shared by x1808, PX30, x3128, x3288, x3399, x3399pro, and x3588s Android / Linux. The manual focuses on VMware setup on Windows.

## VMware and Ubuntu

VMware Workstation 16.0.0 is used as the example. Ubuntu 16.04.7 and Ubuntu 18.04.5 both meet the requirement, and Ubuntu 18.04.5 is recommended.

## VM Configuration Recommendations

| Use Case | Recommendation |
| --- | --- |
| Android source build | 10GB RAM or more; otherwise build failure is likely |
| Linux source build | Usually 2GB RAM is enough; RK3399 / RK3399Pro Linux source builds need 4GB or more |
| Disk | The manual example uses a 2000GB virtual disk; adjust according to host capacity and source size |
| CPU | Allocate according to host CPU core count |

## Common Tools

```bash
sudo apt-get update
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

Serial parameters are usually 115200 8N1. USB-to-UART adapters usually appear as `/dev/ttyUSB0`.

```bash
dmesg | grep ttyUSB
sudo minicom -s
sudo picocom -b 115200 /dev/ttyUSB0
```

## adb

```bash
adb devices
adb shell
```

If adb permission fails, check udev rules, USB cable, board mode, and driver installation.
