---
sidebar_position: 1
title: Linux Build
description: x3576bv3 Linux Build
---

# Linux Build

## Prepare the Sources

Get all parts of `x3576_linux_20240723.tar.gz` from the supplied `source/` directory. Join them in the order in `readme.txt`, verify the MD5 and extract the archive. Use the part numbers for the actual release.

```bash
cat ./x3576_linux_20240723.tar.gz.[0-9][0-9] > x3576_linux_20240723.tar.gz
md5sum x3576_linux_20240723.tar.gz
tar -xzf x3576_linux_20240723.tar.gz
cd x3576_linux_20240723
./build.sh -h
```

This example assumes the current directory contains the complete set of two-digit parts from one release. Configure Ubuntu dependencies using Rockchip_RK3576_Quick_Start_Linux_CN.pdf under `docs/cn/RK3576/Quick-start/`. Build as a regular user.

## SDK Directories

| Path | Purpose |
| --- | --- |
| device/rockchip | Board configuration and packaging scripts |
| kernel / u-boot | Kernel and bootloader |
| buildroot / debian / yocto | Root filesystem options |
| app / external | Application examples and third-party components |
| prebuilts / rkbin | Toolchains, Rockchip binaries and tools |
| rockdev / output | Output images and build records |

## Full and Component Builds

Confirm the X3576 board configuration and selected root filesystem in the SDK help, then build from the source root.

```bash
./build.sh
```

For a component update, select its command below. When replacing the Debian filesystem, use the `linaro-rootfs.img` for the selected configuration.

```bash
./build.sh uboot
./build.sh kernel
./build.sh rootfs
./build.sh updateimg
```

Check `rockdev/` for the full `update.img` package. Typical component outputs include `MiniLoaderAll.bin`, `uboot.img`, `boot.img`, `rootfs.img`, `recovery.img` and `parameter.txt`. Use the files produced by the build.
