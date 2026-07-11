---
sidebar_position: 4
title: Development Environment
description: I3588 Android and Linux development environment
---

# Development Environment

This page summarizes the Android and Linux development environment preparation.

## Ubuntu Recommendation

- Full Android source compilation requires high PC performance. Installing Ubuntu directly is recommended.
- The Android platform uses Ubuntu 20.04 64-bit as the typical environment.
- Linux source compilation can also use Ubuntu 16.04 / 18.04 depending on the delivered SDK.

## Common Tools

```bash
sudo apt-get update
sudo apt-get install meld minicom picocom ckermit android-tools-adb android-tools-fastboot
```

## Serial Tool

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

Exit:

```text
Ctrl+a
Ctrl+q
```

## JDK

The Android platform commonly uses JDK 8:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB

```bash
adb devices
adb shell
```

## Debug UART

The default debug UART is UART2. When using SecureCRT on Windows, select `Serial`, use the baud rate required by the platform, and disable flow control.
