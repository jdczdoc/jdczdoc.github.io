---
sidebar_position: 4
title: Development Environment
description: IBOX3576 Android development environment
---

# Development Environment

This page summarizes the Android development environment preparation for IBOX3576.

## Ubuntu Recommendation

- Full Android source compilation requires high PC performance. Installing Ubuntu directly is recommended.
- The IBOX3576 Android14 manual uses Ubuntu 20.04 64-bit as the recommended environment.
- If some packages cannot be installed, skip them first and resolve missing dependencies according to build errors.

## Common Tools

```bash
sudo apt-get update
sudo apt-get install meld minicom picocom ckermit android-tools-adb android-tools-fastboot
```

## Serial Tool

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

## JDK

The Android14 platform can use the JDK environment specified by the build script:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB

```bash
adb devices
adb shell
```

## Device Tree and Partition File

```text
Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3576-evb1-v10.dts
rockdev\Image-rk3576_u/parameter.txt
```
