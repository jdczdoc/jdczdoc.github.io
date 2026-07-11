---
sidebar_position: 3
title: 开发环境
description: Pico PC RK3588S Android 和 Linux 开发环境准备
---

# 开发环境

本页合并 Android 平台用户手册和 Linux 平台用户手册中重复的环境搭建内容，只保留主板开发常用步骤。

## Ubuntu 系统建议

- Android 整套源码编译对 PC 性能要求较高，建议直接安装 Ubuntu 系统。
- Linux 源码可使用 Ubuntu 16.04 / 18.04 环境，实际以源码包 README 和编译报错提示为准。
- 如果依赖包安装失败，可先跳过，后续根据编译报错补齐。

## 常用工具

```bash
sudo apt-get update
sudo apt-get install meld minicom picocom ckermit android-tools-adb android-tools-fastboot
```

## 串口工具

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

退出方式：

```text
Ctrl+a
Ctrl+q
```

## ADB 工具

```bash
adb devices
adb shell
```

## 设备树和分区文件

Android 手册中给出的路径：

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
rockdev\Image-x3588s/parameter.txt
```
