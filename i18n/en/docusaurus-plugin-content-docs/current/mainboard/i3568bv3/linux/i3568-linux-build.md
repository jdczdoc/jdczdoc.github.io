---
sidebar_position: 1
title: Linux Build
description: i3568bv3 Linux Build
---

# Linux Build

## Source and Dependencies

Get all archive parts from the same release in `DVD_I3568/source/rk3568_linux_v1.3` in the supplied resources. Build as a regular user in the matching 64-bit Ubuntu environment. The Buildroot build requires `expect`.

```bash
sudo apt-get install git build-essential gcc-multilib g++-multilib flex bison   libncurses5-dev libssl-dev device-tree-compiler u-boot-tools   lzop genext2fs python3-pyelftools expect
cat ./rk3568_linux_v1.3.0.tar.gz.* > rk3568_linux_v1.3.0.tar.gz
tar -xzf rk3568_linux_v1.3.0.tar.gz
cd rk3568_linux_v1.3.0
```

Install the remaining dependencies listed by the SDK README and `./build.sh check`. Confirm that all parts are present and concatenate them in filename order.

## Build and Package

Check the script help and board list, select `BoardConfig-rk3568-evb1-ddr4-v10.mk`, then build, collect and package the images.

```bash
./build.sh -h
./build.sh check
./build.sh lunch
./build.sh all
./build.sh firmware
./build.sh updateimg
```

The full package is `rockdev/update.img`. The same directory contains the loader, `uboot.img`, `boot.img`, `rootfs.img`, `recovery.img` and `parameter.txt`. Verify the board, storage capacity and partition layout before flashing.

## Build Individual Components

```bash
./build.sh uboot
./build.sh kernel
./build.sh buildroot
```

Select the command for the component you changed. Kernel and resources are packed into `boot.img`, and Buildroot produces the root filesystem. Run `./build.sh firmware` and `./build.sh updateimg` to refresh the complete package.
