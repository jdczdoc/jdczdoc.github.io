---
sidebar_position: 10
title: Linux 编译与烧录
description: X3399V4 Linux SDK 获取、编译、镜像说明和固件烧录
---

# Linux 编译与烧录

:::note
本页软件流程沿用前面整理的 I3399 / X3399 软件文档模板。X3399V4 实际源码包名、镜像名、分区文件和工具版本，以当前 SDK 和发布资料为准。
:::

本页按照新版 Rockchip Linux SDK 手册整理，保留 X3399V4 / X3399 常用的 SDK 获取、编译、镜像说明和烧录流程。

## 开发环境

建议使用 Ubuntu 16.04 64bit。Linux SDK 相比 Android SDK 体积小、编译压力低，虚拟机也可满足一般编译需求。

安装常用依赖：

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev \
build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs \
libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache \
libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev \
lib32ncurses5-dev lzop liblz4-tool proot libssl1.0.0 libssl-dev genext2fs
```

Buildroot 相关依赖：

```bash
sudo apt-get install libfile-which-perl sed make binutils gcc g++ bash patch \
gzip bzip2 perl tar cpio python unzip rsync file bc libmpc3 git repo \
texinfo pkg-config cmake tree
```

## 交叉编译工具

RK Linux SDK 的 U-Boot 和 Kernel 工具链通常预置在 `prebuilts/gcc` 目录。Buildroot 使用自身编译得到的工具链。以 x3399 为例，常见路径为：

```bash
x3399_Linux_new/prebuilts/gcc/Linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-Linux-gnu/bin/aarch64-Linux-gnu-
```

## 获取 SDK 源码

```bash
git clone https://gitlab.com/9tripod/x3399_Linux_new.git
cd x3399_Linux_new
```

如果通过网盘获取初始源码包，可解压后进入源码目录并添加远程仓库：

```bash
tar xjf x3399_Linux_new.tar.bz2
cd x3399_Linux_new
git checkout .
git remote add gitlab https://gitlab.com/9tripod/x3399_Linux_new.git
git pull gitlab master
```

## 编译 Linux SDK

查看帮助：

```bash
./mk.sh -h
./build.sh -h
```

整体编译：

```bash
./build.sh
# 或
./mk.sh -a
```

单独编译：

```bash
./mk.sh -u          # u-boot
./mk.sh -k          # kernel
./mk.sh -r          # recovery
./mk.sh -b          # rootfs / buildroot
./mk.sh -U          # 打包 update 镜像
```

Rockchip 原生脚本对应命令：

```bash
./build.sh U-Boot
./build.sh kernel
./build.sh recovery
./build.sh buildroot
./build.sh updateimg
```

## 镜像文件说明

常见输出文件包括：

| 文件 | 说明 |
| --- | --- |
| MiniLoaderAll.bin | Loader 镜像 |
| parameter.txt | 分区配置文件 |
| U-Boot.img | U-Boot 镜像 |
| trust.img | Trust 镜像 |
| misc.img | 启动模式切换和参数传递分区 |
| recovery.img | Recovery 镜像 |
| boot.img | Kernel + resource 打包镜像 |
| rootfs.img | Linux 文件系统镜像 |
| oem.img | 厂商 APP 或数据分区 |
| userdata.img | 用户数据分区 |
| update.img | 打包升级固件 |

## 进入烧录模式

烧录需要开发板处于 Loader 或 Maskrom 模式。常见方式：

1. 未烧录固件时上电，芯片可能直接进入 Maskrom。
2. 按住 Recovery 键上电或复位，进入 Loader。
3. 系统正常启动后，使用工具“切换”进入 Loader。
4. 通过串口或 adb 执行：

```bash
reboot loader
```

## Windows 烧录

Windows 下可使用 AndroidTool 或 FactoryTool。先安装 Rockchip USB 驱动，进入 Loader/Maskrom 后选择 `update-Linux.img` 或分区镜像并执行烧录。

## Linux 烧录

烧写完整固件：

```bash
sudo ./upgrade_tool uf update-Linux.img
```

烧写分区镜像：

```bash
sudo ./upgrade_tool ul MiniLoaderAll.bin
sudo ./upgrade_tool di -p parameter.txt
sudo ./upgrade_tool di -u U-Boot.img
sudo ./upgrade_tool di -t trust.img
sudo ./upgrade_tool di -misc misc.img
sudo ./upgrade_tool di -r recovery.img
sudo ./upgrade_tool di -b boot.img
sudo ./upgrade_tool di -rootfs rootfs.img
sudo ./upgrade_tool di -oem oem.img
sudo ./upgrade_tool di -userdata userdata.img
sudo ./upgrade_tool rd
```

## TF 卡升级

新版 Linux 手册也包含 TF 卡升级流程。一般步骤为：准备升级卡工具、选择固件、制作升级卡、插入开发板并按升级流程启动。量产或现场维护时可按项目需求选择。
