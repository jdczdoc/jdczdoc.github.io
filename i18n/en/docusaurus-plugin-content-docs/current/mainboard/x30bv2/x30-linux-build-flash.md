---
sidebar_position: 11
title: Linux Build and Flash
description: X30/PX30 Linux SDK source, build, image description, boot modes, and flashing tools
---

# Linux Build and Flash

This page summarizes SDK retrieval, build, image outputs, and flashing flow for the X30/PX30 new Linux platform.

## rockchip-linux Overview

Rockchip provides a Linux 4.4-based open Linux SDK, published through repo/GitHub. The RK Linux SDK includes a Buildroot-based Linux system and a Linaro-based Debian system. 9Tripod adapts PX30/RK3288/RK3399 and provides Ubuntu, Debian, Buildroot/Qt images or build methods.

## Development Environment

The Linux SDK is smaller and less demanding than Android. A Windows PC with VMware and Ubuntu 16.04 64-bit is acceptable. Recommended virtual machine resources are at least 2GB RAM/swap and more than 30GB disk space.

Dependencies:

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev lib32ncurses5-dev lzop liblz4-tool proot libssl1.0.0 libssl-dev genext2fs
```

Buildroot dependencies:

```bash
sudo apt-get install libfile-which-perl sed make binutils gcc g++ bash patch gzip bzip2 perl tar cpio python unzip rsync file bc libmpc3 git repo texinfo pkg-config cmake tree
```

## Toolchain

PX30 Linux U-Boot / Kernel toolchain example:

```bash
px30_linux/prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
```

Buildroot uses its own generated toolchain:

```bash
buildroot/output/rockchip_px30_64/host/bin/aarch64-linux-
```

## Get SDK Source

```bash
git clone https://gitlab.com/9tripod/px30_linux.git
```

From cloud-disk initial package:

```bash
tar xjf px30_linux.tar.bz2
cd px30_linux
git checkout .
git remote add gitlab https://gitlab.com/9tripod/px30_linux.git
git pull gitlab master
```

## Build Linux SDK

The SDK may contain both `build.sh` and `mk.sh`. `build.sh` is the official Rockchip script, while `mk.sh` is a simplified script. If `mk.sh` is unavailable, use `build.sh`.

```bash
./mk.sh -h
./build.sh -h
```

Full build:

```bash
./build.sh
./mk.sh -a
```

Module build:

```bash
./mk.sh -u
./build.sh uboot

./mk.sh -k
./build.sh kernel

./mk.sh -r
./build.sh recovery

./mk.sh -b
./build.sh buildroot

./mk.sh -U
./build.sh updateimg
```

`build.sh` outputs to `rockdev`; `mk.sh` outputs to `output`.

## Image Description

| Image | Description |
| --- | --- |
| MiniLoaderAll.bin | Loader image copied from U-Boot `*_loader_*.bin` |
| parameter.txt | Partition table |
| uboot.img | U-Boot image |
| trust.img | Trust image |
| misc.img | Boot-mode switch and recovery parameter passing |
| recovery.img | Recovery image |
| boot.img | Linux kernel image containing Image and resource.img |
| rootfs.img | Root filesystem image: Buildroot, Ubuntu, or Debian |
| oem.img | Vendor applications or data, read-only |
| userdata.img | User data partition |
| update-linux.img | Packaged full upgrade firmware |

## Boot / Flash Modes

| Mode | Flashing Supported | Description |
| --- | --- | --- |
| Maskrom | Yes | Used when flash is blank or Loader cannot boot |
| Loader | Yes | Common flashing mode for full firmware or partition images |
| Recovery | No | Upgrade or factory reset |
| Normal Boot | No | Normal rootfs boot for development |

Enter Loader:

```bash
adb reboot loader
```

Or hold Recovery during power-on/reset. If Loader is damaged, shorting eMMC CLK or data pins to GND can force Maskrom by making the flash appear blank.

## Windows Flashing

Common tools:

- AndroidTool: single-board debug and partition flashing.
- FactoryTool: batch flashing.
- Rockchip USB driver: usually `tools/windows/DriverAssitant_v4.x.zip`.

## Linux Flashing

Use `upgrade_tool`:

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

Full firmware:

```bash
sudo ./upgrade_tool uf update-linux.img
```

## TF Card Upgrade

Use `SD_Firmware_Tool.exe` to create an upgrade card. Modes include firmware upgrade, PCBA test, and SD boot. Creating a boot card formats the SD card, so back up data first.
