---
sidebar_position: 12
title: Linux 编译与烧录
description: i6818 Linux + Qt 编译、启动卡、fastboot 和镜像烧写
---

# Linux 编译与烧录

> 说明：本页软件流程按前面整理的 x6818 软件文档沿用。i6818 与 x6818 启动/烧录流程相近，实际命令、源码包名和镜像名以当前 i6818 SDK 为准。

i6818 Linux 平台用户手册以 Ubuntu 15.04 虚拟机环境为例。Linux 开发对 PC 性能要求低于 Android，因此可使用 VMware 虚拟机；如果直接安装 Ubuntu，编译效率会更高。

## VMware 与 Ubuntu 环境

手册包含 VMware Workstation 安装、在虚拟机安装 Ubuntu、安装 VMware Tools 等步骤。建议虚拟机硬盘不小于 100GB。

## 编译 Linux + Qt

手册中的 Linux + Qt 编译包括安装 U-Boot、内核源码包，编译 U-Boot、编译内核、编译文件系统。

```bash
# 编译 U-Boot
make

# 编译内核
make

# 编译文件系统
make
```

具体命令以源码包提供的脚本为准。编译前应确认交叉编译工具链、环境变量和源码路径。

## 烧写 Linux Qt 映像

烧录章节包含 Ubuntu 和 Windows 两种方式。

### Ubuntu 下 fastboot

```bash
sudo apt-get install Android-tools-fastboot
fastboot devices
```

如设备权限不足，需要配置 `51-Android.rules`。

### Ubuntu 下制作启动卡

启动卡用于辅助进入下载环境或离线升级。制作时注意选择正确 TF 卡设备节点，避免误格式化电脑磁盘。

### Ubuntu 下烧写映像文件

当 eMMC 中无固件时，需要使用启动卡引导再烧写。eMMC 中已有可正常启动映像时，可通过 fastboot 或系统命令进入升级流程。

### Windows 下烧写

Windows 侧包括 fastboot 安装、启动卡制作和 fastboot 烧写映像。常用命令示例：

```cmd
fastboot devices
fastboot flash boot boot.img
fastboot flash system system.img
fastboot reboot
```

## U-Boot 更新

手册包含两种场景：

- eMMC 中不存在 bootloader 时更新 U-Boot。
- eMMC 中存在 bootloader 时更新 U-Boot。

如果 bootloader 损坏，需要优先进入底层下载或启动卡模式，先恢复 U-Boot，再烧写系统镜像。

## U-Boot 环境变量

Linux / Qt、ramdisk、NFS、Ubuntu 系统等不同启动方式可能需要不同的 bootargs、rootfs 和显示参数。修改后应保存环境变量并重启验证。
