---
sidebar_position: 4
title: 开发环境
description: IBOX3576 Android 开发环境准备
---

# 开发环境

本页整理 Android 平台用户手册中的环境搭建内容，只保留主板开发常用步骤。

## Ubuntu 系统建议

- Android 整套源码编译对 PC 性能要求较高，建议直接安装 Ubuntu 系统。
- IBOX3576 Android14 平台手册默认以 Ubuntu 20.04 64 位为例。
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

## JDK

Android14 平台可按源码编译脚本指定 JDK 环境，常见配置如下：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB 工具

```bash
adb devices
adb shell
```

## 设备树和分区文件

```text
Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3576-evb1-v10.dts
rockdev\Image-rk3576_u/parameter.txt
```
