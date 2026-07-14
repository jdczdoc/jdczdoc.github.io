---
sidebar_position: 12
title: Linux Ubuntu and Qt
description: X30/PX30 Ubuntu rootfs build, NFS/TF/USB boot, and Qt filesystem setup
---

# Linux Ubuntu and Qt

## ARM Ubuntu Build Concept

The new Linux kernel can boot by mounting the root filesystem directly, without an intermediate ramdisk stage. The rootfs can be built through TF/SD card, USB disk, or NFS. The manual uses X30/PX30 as an example, and the method also applies to RK3288/RK3399.

## Preparation

1. Flash `update-linux.img` and ensure the board boots Linux.
2. Prepare a TF card, SD card, USB card reader, or USB disk, formatted as ext4.
3. For NFS, connect the PC and board to the same network.
4. After changing bootargs, usually only `boot.img` needs to be rebuilt and flashed.

## bootargs Location

PX30 / X30:

```bash
kernel/arch/arm64/boot/dts/rockchip/rk3326-linux.dtsi
```

Other examples:

```bash
# RK3288
kernel/arch/arm/boot/dts/rk3288-linux.dtsi

# RK3399
kernel/arch/arm64/boot/dts/rockchip/rk3399-linux.dtsi
```

Search:

```bash
grep -R "bootargs" kernel/arch/arm64/boot/dts/rockchip/
```

PX30 original bootargs example:

```dts
chosen &#123;
    bootargs = "earlycon=uart8250,mmio32,0xff160000 swiotlb=1 console=ttyFIQ0 root=PARTUUID=614e0000-0000 rootwait";
&#125;;
```

## Boot from TF / USB Rootfs

Modify the root parameter according to the actual device node, such as `/dev/mmcblk1p1` or `/dev/sda1`, and add `rootfstype=ext4 rootwait`. Rebuild the kernel and flash `boot.img`.

## NFS Rootfs

Configure the NFS server on the PC and set bootargs similar to:

```text
root=/dev/nfs nfsroot=<server_ip>:/path/to/rootfs,v3,tcp rw ip=dhcp
```

After first boot into the NFS rootfs, configure user, network, desktop environment, and packages.

## Qt Filesystem

The Linux manual builds the Qt filesystem through Buildroot:

```bash
cd buildroot
make menuconfig
make
```

Buildroot output contains the rootfs image and host toolchain.

## Qt5 Examples

Run Qt5 default examples to verify display, touch, input, and library dependencies.

## Qt Creator

Install Qt Creator on the host for Qt application development. For cross-compilation, configure toolchain, sysroot, qmake, and runtime environment.
