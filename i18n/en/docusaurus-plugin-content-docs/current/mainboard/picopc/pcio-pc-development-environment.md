---
sidebar_position: 3
title: Development Environment
description: Pico PC RK3588S Android and Linux development environment
---

# Development Environment

This page merges duplicated environment setup content from the Android and Linux user manuals.

## Ubuntu Recommendation

- Full Android source compilation requires high PC performance. Installing Ubuntu directly is recommended.
- Linux source compilation can use Ubuntu 16.04 / 18.04 depending on the SDK.
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

## ADB

```bash
adb devices
adb shell
```

## Device Tree and Partition File

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
rockdev\Image-x3588s/parameter.txt
```
