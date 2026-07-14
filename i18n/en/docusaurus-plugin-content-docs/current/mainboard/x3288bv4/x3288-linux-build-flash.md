---
sidebar_position: 10
title: Linux Build and Flash
description: X3288 Linux QT build, image generation, and firmware flashing
---

# Linux Build and Flash

This page keeps Linux QT build, `boot.img` / `system.img` generation, and flashing procedures.

## Dependency Packages

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev \
build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs \
libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache \
libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev \
lib32ncurses5-dev lzop
```

## Build U-Boot and Kernel

The QT system uses the same U-Boot and kernel source tree as Android. The difference is that `boot.img` is generated with BusyBox and `system.img` is generated with Buildroot.

For QT display and touch adaptation, configure the related macros in the touch and LCD drivers according to the SDK instructions.

## Generate boot.img with BusyBox

```bash
tar -xvf busybox-1.19.4.tar.gz
cd busybox-1.19.4
make
make install
dd if=/dev/zero of=initrd.img bs=1k count=8192
sudo mkfs.ext2 -F initrd.img
sudo mkdir /mnt/initrd
sudo mount -t ext2 -o loop initrd.img /mnt/initrd
sudo cp _install/* /mnt/initrd -a
sudo umount /mnt/initrd
gzip --best -c initrd.img > ramdisk.img
sudo chmod 777 ramdisk.img
```

Use the Rockchip `mkkrnlimg` tool from the Android tree to generate `boot.img`.

## Build Buildroot Rootfs

Extract `buildroot-x3288.tar.gz`, enter the Buildroot directory, configure it if needed, and build the root filesystem. The generated filesystem image is used as the Linux QT rootfs.

## Flash Linux Images

Use AndroidTool / RKTool on Windows or `upgrade_tool` on Linux to flash the generated images. Put the board into loader or maskrom mode before flashing.
