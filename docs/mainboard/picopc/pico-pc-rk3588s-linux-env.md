---
sidebar_position: 9
title: Linux 开发环境
description: Pico PC RK3588S Linux/Android 通用开发环境搭建
---

# Linux 开发环境

Pico PC RK3588S Linux 平台用户手册说明，x1808、PX30、x3128、x3288、x3399、x3399pro、x3588s Android / Linux 环境通用。Linux 手册重点讲 Windows 平台下 VMware 虚拟机环境搭建。

## VMware 与 Ubuntu

手册使用 VMware Workstation 16.0.0 作为示例，Ubuntu 16.04.7 和 Ubuntu 18.04.5 均可满足要求，并推荐使用 Ubuntu 18.04.5。

## 虚拟机配置建议

| 用途 | 建议 |
| --- | --- |
| Android 源码编译 | 内存建议 10GB 以上，否则较大概率编译失败 |
| Linux 源码编译 | 一般 2GB 内存可满足；RK3399 / RK3399Pro Linux 源码建议 4GB 以上 |
| 磁盘 | 手册示例使用 2000GB 虚拟磁盘，实际可按电脑空间和源码体积调整 |
| CPU | 按主机 CPU 核心数合理分配 |

## 常用工具

```bash
sudo apt-get update
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

串口调试常用参数为 115200 8N1。USB 转串口通常为 `/dev/ttyUSB0`。

```bash
dmesg | grep ttyUSB
sudo minicom -s
sudo picocom -b 115200 /dev/ttyUSB0
```

## adb 工具

```bash
adb devices
adb shell
```

如果 adb 无权限，需要检查 udev 规则、USB 线、板卡模式和驱动安装。
