---
sidebar_position: 10
title: Linux Build and Flash
description: X3399V4 Linux SDK download, build, image description, and flashing
---

# Linux Build and Flash

:::note
This page reuses the previously prepared I3399 / X3399 software documentation template. For X3399V4, actual source package names, image names, partition files, and tool versions should follow the current SDK and release package.
:::

This page is organized from the newer Rockchip Linux SDK manual and keeps the workflow useful for X3399V4 / X3399.

## Development Environment

Ubuntu 16.04 64-bit is recommended. Linux SDK builds are lighter than Android builds, so a VM is usually acceptable.

```bash
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev \
build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs \
libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache \
libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev \
lib32ncurses5-dev lzop liblz4-tool proot libssl1.0.0 libssl-dev genext2fs
```

Buildroot dependencies:

```bash
sudo apt-get install libfile-which-perl sed make binutils gcc g++ bash patch \
gzip bzip2 perl tar cpio python unzip rsync file bc libmpc3 git repo \
texinfo pkg-config cmake tree
```

## Toolchain

U-Boot and Kernel toolchains are usually stored in `prebuilts/gcc`. Buildroot uses its own generated toolchain. For X3399, a common prefix is:

```bash
x3399_Linux_new/prebuilts/gcc/Linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-Linux-gnu/bin/aarch64-Linux-gnu-
```

## Get SDK Source

```bash
git clone https://gitlab.com/9tripod/x3399_Linux_new.git
cd x3399_Linux_new
```

If an initial package is used:

```bash
tar xjf x3399_Linux_new.tar.bz2
cd x3399_Linux_new
git checkout .
git remote add gitlab https://gitlab.com/9tripod/x3399_Linux_new.git
git pull gitlab master
```

## Build SDK

```bash
./mk.sh -h
./build.sh -h
```

Full build:

```bash
./build.sh
# or
./mk.sh -a
```

Separate build:

```bash
./mk.sh -u     # u-boot
./mk.sh -k     # kernel
./mk.sh -r     # recovery
./mk.sh -b     # rootfs / buildroot
./mk.sh -U     # package update image
```

## Image Files

| File | Description |
| --- | --- |
| MiniLoaderAll.bin | Loader image |
| parameter.txt | Partition configuration |
| U-Boot.img | U-Boot image |
| trust.img | Trust image |
| misc.img | Boot-mode and parameter partition |
| recovery.img | Recovery image |
| boot.img | Kernel + resource image |
| rootfs.img | Linux root filesystem |
| oem.img | Vendor application/data partition |
| userdata.img | User data partition |
| update.img | Packaged upgrade image |

## Enter Flash Mode

The board must be in Loader or Maskrom mode. Common methods:

```bash
reboot loader
```

Or hold the Recovery key while powering on or resetting the board.

## Flash with upgrade_tool

Full package:

```bash
sudo ./upgrade_tool uf update-Linux.img
```

Separate images:

```bash
sudo ./upgrade_tool ul MiniLoaderAll.bin
sudo ./upgrade_tool di -p parameter.txt
sudo ./upgrade_tool di -u U-Boot.img
sudo ./upgrade_tool di -t trust.img
sudo ./upgrade_tool di -misc misc.img
sudo ./upgrade_tool di -r recovery.img
sudo ./upgrade_tool di -b boot.img
sudo ./upgrade_tool di -rootfs rootfs.img
sudo ./upgrade_tool rd
```
