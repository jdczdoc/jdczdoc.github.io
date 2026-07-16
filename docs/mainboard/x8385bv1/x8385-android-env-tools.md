---
sidebar_position: 6
title: Android 开发环境
description: X8385 Android 开发环境、adb 和串口工具
---

# Android 开发环境

Android 源码整编对 PC 硬件要求较高，手册建议直接安装 Linux 操作系统，不建议依赖虚拟机完整开发。手册示例以 Ubuntu 14.04 64 位系统为例，但依赖包章节推荐使用 Ubuntu 16.04 64 位系统。

## Ubuntu 与常用工具

```bash
sudo apt-get update
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

## 串口工具

### minicom

```bash
sudo minicom -s
```

USB 转串口通常为 `/dev/ttyUSB0`，串口参数一般设置为 115200 8N1，无硬件/软件流控。

### picocom

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

退出 picocom：先按 `Ctrl+a`，再按 `Ctrl+q`。

### kermit

`~/.kermrc` 示例：

```text
set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
```

打开串口：

```bash
sudo kermit -c
```

## JDK

Android 编译需要 JDK。手册说明可以根据 SDK 编译脚本要求指定 JDK，例如 x8385 Android12 编译脚本 `mk.sh` 中使用：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## 设备树与分区文件路径

```text
ap-sdk/kernel-4.19/arch/arm64/boot/dts/mediatek/tb8788p1_64_Wi-Fi_k419.dts
output/MT6771_Android_scatter.txt
```

## adb 工具

```bash
adb devices
adb shell
```

如果提示 `error: more than one device and emulator`，Windows 下可以结束 `adb.exe` 进程后重新启动 adb。

## SecureCRT 串口

Windows 下可以使用 SecureCRT 连接调试串口。手册中串口工具章节标注波特率使用 `921600`，协议选择 `Serial`，流控选项 DTR/DSR、RTS/CTS、XON/XOFF 均不要勾选。
