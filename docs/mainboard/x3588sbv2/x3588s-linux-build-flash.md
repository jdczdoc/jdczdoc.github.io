---
sidebar_position: 9
title: Linux 编译与烧录
description: X3588S mini ITX Linux SDK 编译、镜像说明和烧录
---

# Linux 编译与烧录

本页整理 X3588S mini ITX Linux 平台源码安装、编译和烧录相关内容。

## 开发环境

Linux 手册以 Windows 下 VMware 虚拟机搭建 Ubuntu 16.04/18.04 环境为例。文档中说明 Ubuntu 16.04 和 Ubuntu 18.04 都可满足编译要求，其中 Ubuntu 18.04.5 作为后续示例环境。

编译 Android 源码建议配置 10GB 以上内存；单独编译 Linux 源码通常 2GB 内存即可，部分平台建议 4GB 以上。

## 安装依赖

常用依赖包括：

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 libncurses5-dev \
x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils \
xsltproc unzip lzop liblz4-tool genext2fs make device-tree-compiler \
u-boot-tools libssl-dev python-pyelftools python3-pyelftools repo p7zip p7zip-full
```

## 安装 Linux 源码包

源码包可从交付网盘或项目仓库获取。解压后进入源码根目录，例如：

```bash
tar -xvf x3588s_linux.tar.gz
cd x3588s_linux
```

实际文件名以交付资料为准。

## 源码目录

常见目录包括：

```text
app
buildroot
debian
docs
external
kernel
prebuilts
rkbin
rockdev
u-boot
build.sh
device
envsetup.sh
Makefile
mk.sh
README
rkflash.sh
tools
yocto
```

## 查看编译帮助

```bash
./build.sh -h
```

帮助中包含 BoardConfig、lunch、uboot、spl、loader、kernel、modules、toolchain、rootfs、buildroot、ramboot、debian、distro、pcba、recovery、all、cleanall、firmware、updateimg、otapackage、sdpackage、save 等选项。

## 编译 U-Boot

```bash
./edge build -u
```

编译完成后，`uboot.img` 会释放到 `out/release` 目录。

## 编译 Linux 内核

```bash
./edge build -k
```

编译完成后，`kernel.img`、`resource.img` 会打包成 `boot.img` 并释放到 `out/release` 目录。

## 编译 rootfs 文件系统

```bash
./edge build -r
```

编译完成后，文件系统镜像会释放到 `out/release` 目录。

## 打包固件

```bash
./build.sh updateimg
```

打包后常见输出文件如下：

| 文件 | 说明 |
| --- | --- |
| boot.img | 包含 kernel.img 和 resource.img |
| MiniLoaderAll.bin | 下载工具引导文件 |
| misc.img | 杂项设备资源 |
| oem.img | 用户适配包或数据 |
| parameter.txt | 分区文件，可修改 uboot、kernel、文件系统加载地址 |
| recovery.img | 急救模式镜像 |
| rootfs.ext4 | ext4 分区文件 |
| rootfs.img | 文件系统镜像 |
| update.img | 统一升级固件 |

## Windows 烧录

1. 解压 `RKTools.rar`。
2. 进入 `SDK/RKTools/windows/Release_DriverAssitant`，运行 `DriverInstall.exe` 安装驱动。
3. 使用 `AndroidTool_Release_v2.79` 或更高版本；Linux 源码包内通常带有 `AndroidTool_Release_v2.81`。
4. 选择 `update.img`，让板子进入 Loader 或 Maskrom 模式后执行升级。

:::note
X3588S 使用的烧写工具版本要求高于 PX30/RK3288/RK3399/RK3399Pro 等老平台，驱动建议使用 `DriverAssitant_v5.1.1`。如果工具未发现设备，优先检查驱动版本和板子是否进入烧写模式。
:::
