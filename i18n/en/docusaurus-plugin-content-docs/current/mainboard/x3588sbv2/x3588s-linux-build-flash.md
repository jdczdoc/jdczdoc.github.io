---
sidebar_position: 9
title: Linux Build and Flash
description: X3588S mini ITX Linux SDK build, image files, and flashing
---

# Linux Build and Flash

This page summarizes the Linux source installation, build, and flashing workflow for X3588S mini ITX.

## Development Environment

The Linux manual uses VMware with Ubuntu 16.04/18.04 as examples. Ubuntu 16.04 and Ubuntu 18.04 can both satisfy the requirements; Ubuntu 18.04.5 is used in later examples.

For Android source compilation, more than 10GB RAM is recommended. For Linux source compilation, 2GB RAM is usually enough, while some platforms require 4GB or more.

## Dependencies

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 libncurses5-dev \
x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils \
xsltproc unzip lzop liblz4-tool genext2fs make device-tree-compiler \
u-boot-tools libssl-dev python-pyelftools python3-pyelftools repo p7zip p7zip-full
```

## Install Source Package

```bash
tar -xvf x3588s_linux.tar.gz
cd x3588s_linux
```

The real filename depends on the delivered package.

## Source Directory

Typical entries:

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

## Build Help

```bash
./build.sh -h
```

The help includes BoardConfig, lunch, uboot, spl, loader, kernel, modules, toolchain, rootfs, buildroot, ramboot, debian, distro, pcba, recovery, all, cleanall, firmware, updateimg, otapackage, sdpackage, and save.

## Build U-Boot

```bash
./edge build -u
```

## Build Kernel

```bash
./edge build -k
```

## Build rootfs

```bash
./edge build -r
```

## Package Firmware

```bash
./build.sh updateimg
```

Common output files:

| File | Description |
| --- | --- |
| boot.img | Contains kernel.img and resource.img |
| MiniLoaderAll.bin | Download-tool loader |
| misc.img | Misc device resource |
| oem.img | User adaptation packages or data |
| parameter.txt | Partition file |
| recovery.img | Recovery image |
| rootfs.ext4 | ext4 partition image |
| rootfs.img | Root filesystem image |
| update.img | Full upgrade package |

## Windows Flashing

1. Extract `RKTools.rar`.
2. Run `DriverInstall.exe` under `SDK/RKTools/windows/Release_DriverAssitant`.
3. Use `AndroidTool_Release_v2.79` or later. The Linux source package may include `AndroidTool_Release_v2.81`.
4. Select `update.img`, put the board into Loader or Maskrom mode, and run the upgrade.
