---
sidebar_position: 4
title: 开发环境
description: I3588 Android 和 Linux 开发环境准备
---

# 开发环境

本页合并 Android 平台用户手册和 Linux 平台用户手册中重复的环境搭建内容，只保留开发常用步骤。

## Ubuntu 系统建议

- Android 整套源码编译对 PC 性能要求较高，建议直接安装 Ubuntu 系统。
- Android 平台手册默认以 Ubuntu 20.04 64 位为例。
- Linux 平台手册提到 Ubuntu 16.04 / 18.04 也可用于源码编译环境，实际以源码包 README 和编译报错提示为准。

## 常用工具

```bash
sudo apt-get update
sudo apt-get install meld minicom picocom ckermit android-tools-adb android-tools-fastboot
```

## 串口工具

### minicom

```bash
sudo minicom -s
```

常用配置：

- 串口设备：`/dev/ttyUSB0`
- 波特率：`115200 8N1`
- 硬件流控：关闭
- 软件流控：关闭

### picocom

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

退出方式：

```text
Ctrl+a
Ctrl+q
```

### kermit

`~/.kermrc` 参考配置：

```text
set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
```

启动：

```bash
sudo kermit -c
```

## 源码依赖包

建议先安装常用依赖，再根据编译报错补齐缺失包：

```bash
sudo apt-get install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lzop liblz4-tool genext2fs make device-tree-compiler u-boot-tools libssl-dev autoconf python3-pyelftools android-tools-fastboot android-tools-adb repo p7zip p7zip-full
```

## JDK

I3588 Android 平台默认使用 JDK 8，可在编译脚本或终端中指定：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB 工具

常用命令：

```bash
adb devices
adb shell
```

## 调试串口

I3588 主板默认使用 UART2 作为调试串口。Windows 下使用 SecureCRT 时，协议选择 `Serial`，波特率按手册建议设置为 `1500000`，并关闭流控。
