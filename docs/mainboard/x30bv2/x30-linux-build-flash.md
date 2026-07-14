---
sidebar_position: 11
title: Linux 编译与烧录
description: X30/PX30 Linux SDK 获取、编译、镜像说明、烧录模式和烧录工具
---

# Linux 编译与烧录

本页整理 X30/PX30 新版 Linux 平台的 SDK 获取、编译、镜像输出和烧录流程。

## rockchip-linux 简介

Rockchip 官方基于 Linux 4.4 定制了一套具有普适性的开源 Linux 系统，通过 repo 发布代码到 GitHub。RK Linux SDK 包括基于 Buildroot 构建的 Linux 系统和基于 Linaro 构建的 Debian 系统。九鼎在此基础上适配 PX30/RK3288/RK3399 等平台，并提供 Ubuntu、Debian、Buildroot/Qt 等系统镜像或构建方法。

## 开发环境

Linux SDK 体积和编译要求低于 Android SDK，Windows 电脑也可以使用 VMware 安装 Ubuntu 16.04 64 位进行编译。虚拟机建议至少 2GB RAM/swap 和 30GB 以上磁盘空间。

依赖包示例：

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev lib32ncurses5-dev lzop liblz4-tool proot libssl1.0.0 libssl-dev genext2fs
```

Buildroot 依赖：

```bash
sudo apt-get install libfile-which-perl sed make binutils gcc g++ bash patch gzip bzip2 perl tar cpio python unzip rsync file bc libmpc3 git repo texinfo pkg-config cmake tree
```

## 交叉编译工具

PX30 Linux SDK 的 U-Boot / Kernel 交叉编译工具链示例：

```bash
px30_linux/prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
```

Buildroot 使用自身编译得到的工具链：

```bash
buildroot/output/rockchip_px30_64/host/bin/aarch64-linux-
```

## 获取 SDK 源码

GitLab 项目示例：

```bash
git clone https://gitlab.com/9tripod/px30_linux.git
```

如果通过网盘获取初始源码包：

```bash
tar xjf px30_linux.tar.bz2
cd px30_linux
git checkout .
git remote add gitlab https://gitlab.com/9tripod/px30_linux.git
git pull gitlab master
```

## 编译 Linux SDK

SDK 中可能同时存在 `build.sh` 和 `mk.sh`。`build.sh` 是 Rockchip 官方脚本，`mk.sh` 是简化脚本。若没有 `mk.sh`，使用 `build.sh`。

查看帮助：

```bash
./mk.sh -h
./build.sh -h
```

整体编译：

```bash
./build.sh
./mk.sh -a
```

分模块编译：

```bash
# U-Boot
./mk.sh -u
./build.sh uboot

# Kernel
./mk.sh -k
./build.sh kernel

# Recovery
./mk.sh -r
./build.sh recovery

# Rootfs / Buildroot
./mk.sh -b
./build.sh buildroot

# 打包 update 镜像
./mk.sh -U
./build.sh updateimg
```

使用 `build.sh` 编译时输出到 `rockdev` 目录；使用 `mk.sh` 编译时输出到 `output` 目录。

## 镜像文件说明

常见镜像如下：

| 镜像 | 说明 |
| --- | --- |
| MiniLoaderAll.bin | Loader 镜像，复制自 U-Boot 生成的 `*_loader_*.bin` |
| parameter.txt | 分区表文件 |
| uboot.img | U-Boot 镜像 |
| trust.img | Trust 镜像 |
| misc.img | 启动模式切换和 recovery 参数传递 |
| recovery.img | 急救模式映像 |
| boot.img | Linux 内核镜像，包含内核 Image 和 resource.img |
| rootfs.img | 文件系统分区镜像，可为 Buildroot、Ubuntu 或 Debian |
| oem.img | 厂家 APP 或数据，只读 |
| userdata.img | 用户数据分区，占用剩余空间 |
| update-linux.img | 打包后的完整升级固件 |

## 烧写模式

Rockchip 平台常见模式：

| 模式 | 是否支持工具烧录 | 说明 |
| --- | --- | --- |
| Maskrom | 支持 | Flash 未烧录或 Loader 无法正常启动时进入，可用于初次烧写或救砖 |
| Loader | 支持 | 常用烧写模式，可升级固件或单独烧写分区 |
| Recovery | 不支持 | 用于升级和恢复出厂设置 |
| Normal Boot | 不支持 | 正常启动 rootfs，主要用于开发调试 |

进入 Loader 的常用方法：

```bash
adb reboot loader
```

也可按住 Recovery 键上电或复位进入 Loader。若 Loader 损坏，可通过短接 eMMC CLK 或数据脚到 GND 的方式制造“空 Flash”假象，让芯片进入 Maskrom。

## Windows 烧写

常用工具：

- AndroidTool：适合单板调试和单个分区下载。
- FactoryTool：适合批量刷机。
- Rockchip USB 驱动：通常位于 `tools/windows/DriverAssitant_v4.x.zip`。

AndroidTool 可用于“下载镜像”或“升级固件”。升级完整固件时选择 `update-linux.img` 后执行。

## Linux 烧写

Linux 下使用 `upgrade_tool`：

```bash
sudo ./upgrade_tool ul MiniLoaderAll.bin
sudo ./upgrade_tool di -p parameter.txt
sudo ./upgrade_tool di -u uboot.img
sudo ./upgrade_tool di -t trust.img
sudo ./upgrade_tool di -misc misc.img
sudo ./upgrade_tool di -r recovery.img
sudo ./upgrade_tool di -b boot.img
sudo ./upgrade_tool di -rootfs rootfs.img
sudo ./upgrade_tool di -oem oem.img
sudo ./upgrade_tool di -userdata userdata.img
sudo ./upgrade_tool rd
```

烧写完整固件：

```bash
sudo ./upgrade_tool uf update-linux.img
```

## TF 卡升级

通过 `SD_Firmware_Tool.exe` 制作升级卡，可选择固件升级、PCBA 测试或 SD 启动。制作启动卡会格式化 SD 卡，需要提前备份数据。
