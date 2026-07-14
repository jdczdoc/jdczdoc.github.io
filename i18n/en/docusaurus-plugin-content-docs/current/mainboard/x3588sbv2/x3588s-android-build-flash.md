---
sidebar_position: 6
title: Android Build and Flash
description: X3588S mini ITX Android 12 source, build, device tree, partition, and flashing
---

# Android Build and Flash

This page summarizes the Android engineering, build, and flashing workflow for the X3588S mini ITX platform.

## Development Environment

Full Android source compilation requires a high-performance Linux machine. The manual uses Ubuntu 14.04 / 16.04 64-bit as examples. For X3588S Android 12, the build script uses Java 8:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

Common dependencies include git, flex, bison, gperf, build-essential, zip, curl, gcc-multilib, g++-multilib, device-tree-compiler, u-boot-tools, libssl-dev, python-pyelftools, repo, p7zip, android-tools-fastboot, and android-tools-adb.

## Toolchain

The cross-compilation toolchains are integrated into the source package:

```bash
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/bin/aarch64-linux-android-
```

## Key Paths

Device tree:

```bash
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

Partition file:

```bash
rockdev/Image-x3588s/parameter.txt
```

## Install Source Package

```bash
tar -xvf x3588_android12.tar.gz
cd x3588s_android12
```

The real package name may vary by release.

## Build

Build as a normal user, not as root.

### U-Boot

```bash
./build.sh -U
```

### Kernel

```bash
./build.sh -K
```

After kernel changes, rebuild or repack `boot.img`.

### Android Filesystem

```bash
./build.sh -A
```

### Help

```bash
./build.sh -h
```

Common options:

| Option | Description |
| --- | --- |
| -u | Build U-Boot |
| -k | Build kernel |
| -s | Build Android filesystem |
| -U | Package update.img |
| -j= | Parallel build, for example -j=20 |
| -a | Build U-Boot, kernel, Android filesystem, and package image |

## Output Images

| File | Description |
| --- | --- |
| boot.img | Contains kernel.img and resource.img |
| boot-debug.img | Boot image for root operations on user firmware |
| config.cfg | Flash-tool configuration |
| MiniLoaderAll.bin | First-stage loader |
| misc.img | recovery-wipe boot flag |
| parameter.txt | Partition information |
| pcba_small_misc.img | Simple PCBA mode flag |
| pcba_whole_misc.img | Full PCBA mode flag |
| recovery.img | recovery-ramdisk, kernel, and dtb |
| super.img | odm, product, vendor, system, system_ext partitions |
| trust.img | Usually not required for RK3588S |
| uboot.img | U-Boot firmware |
| vbmeta.img | AVB verification information |
| update.img | Full firmware package for flashing tools |

## Windows Flashing

X3588S requires `AndroidTool_Release_v2.79` or later. `DriverAssitant_v5.1.1` is recommended.

1. Install the Rockchip USB driver.
2. Open `RKTools/windows/AndroidTool/AndroidTool_Release_v2.79/AndroidTool.exe`.
3. Select the Upgrade Firmware tab.
4. Select the generated `update.img`.
5. Hold the RECOVERY key and connect the USB cable and 12V DC power.
6. Flash after the tool detects Maskrom or Loader mode.
