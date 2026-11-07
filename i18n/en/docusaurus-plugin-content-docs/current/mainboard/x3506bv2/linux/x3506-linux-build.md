---
sidebar_position: 1
title: "Linux Build"
description: "x3506bv2 Linux Build"
---

# Linux Build

## Unpack the SDK

Get the x3506 Linux archive from `DVD_x3506/source/linux` in the supplied resources and copy it to a local directory on your Ubuntu host. This example uses `x3506_linux_20241204.tar.gz`. Build as a regular user and install the dependencies for your SDK release.

```bash
tar -xzvf x3506_linux_20241204.tar.gz
cd x3506_linux_20241204
./build.sh -h
```

## Select a Configuration and Build

Confirm that the SDK contains the x3506 board configuration. These commands apply to the SDK release shown above.

```bash
./build.sh lunch:rockchip_rk3506_b_9tripod_defconfig
./build.sh
```

## Build Output

Find the build output in `rockdev/` under the SDK root. After building the images, run the command below to package `rockdev/update.img`, then follow [Firmware Flashing](./x3506-linux-flash.md).

```bash
./build.sh updateimg
```

| File | Purpose |
| --- | --- |
| `update.img` | Complete firmware update image |
| `MiniLoaderAll.bin` | Loader used by the flashing tool |
| `boot.img` | Kernel and boot resources |
| `rootfs.img / rootfs.ext4` | Root filesystem image |
| `parameter.txt` | Partition configuration |
| `uboot.img` | U-Boot image |
