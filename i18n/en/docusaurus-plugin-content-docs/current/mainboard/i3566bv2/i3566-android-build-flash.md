---
sidebar_position: 8
title: Android Build and Flash
description: I3566 Android 11 development environment, source build, image output, and flashing
---

# Android Build and Flash

:::note
This page reuses the previously prepared X3566 software documentation template. For I3566, actual source package names, image names, partition files, tool versions, and board-level configuration should follow the current I3566 SDK and release package.
:::

This page summarizes the development environment, source installation, build process, and flashing flow for I3566 Android.

## Development Environment

Full Android source compilation requires a high-performance PC. The manual recommends installing Linux directly rather than relying on a virtual machine. Ubuntu 14.04 / Ubuntu 16.04 64-bit are used as examples.

Common tools:

```bash
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

Common serial command:

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

Exit picocom with `Ctrl+a` followed by `Ctrl+q`.

## Dependencies and JDK

The manual recommends Ubuntu 16.04 64-bit. Common dependencies include git-core, gnupg, flex, bison, gperf, build-essential, zip, curl, gcc-multilib, g++-multilib, libncurses5-dev, ccache, libxml2-utils, xsltproc, unzip, lzop, liblz4-tool, genext2fs, device-tree-compiler, u-boot-tools, libssl-dev, repo, p7zip, Android-tools-fastboot, and Android-tools-adb.

I3566 Android 11 commonly uses Java 8 in the build script:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## Toolchain

The cross-compilation toolchains are included in the source package:

```bash
prebuilts/gcc/Linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-Linux-gnu/bin/aarch64-Linux-gnu-
prebuilts/gcc/Linux-x86/aarch64/aarch64-Linux-Android-4.9/bin/aarch64-Linux-Android-
```

## Key Paths

The I3566 Android PDF manual lists:

```bash
# Device tree
kernel/arch/arm64/boot/dts/rockchip/rk3566-rk817-tablet.dts

# Partition file
rockdev/Image-rk3566_rgo/parameter.txt
```

:::note
The uploaded Word version contains an obvious inherited path from another platform: `rk3568-evb1-ddr4-v10.dts`. This template uses the I3566 PDF path `rk3566-rk817-tablet.dts` by default.
:::

## Install Source Package

The source package is obtained from the cloud-disk path:

```text
DVD_I3566&I3566/source/i3566_Android_new
```

Example:

```bash
tar -jxvf i3566_Android 11.tar.bz2
cd i3566_Android 11
git checkout .
```

If the source is split into volumes, extract `prebuilts.tar.bz2` in the `i3566_Android 11` directory.

## Build

Build as a normal user. Generated images are placed under:

```bash
rockdev/Image-rk3566_rgo
```

One-step build:

```bash
./build.sh -UKAup
```

Option summary:

| Option | Description |
| --- | --- |
| -U | Build U-Boot |
| -C | Build kernel with Clang |
| -K | Build kernel |
| -A | Build Android |
| -p | Package into IMAGE |
| -o | Build OTA package |
| -u | Build update.img |
| -v | Choose user or userdebug |
| -d | Specify kernel DTS name |
| -V | Specify version |
| -J | Set build job count |

Build example:

```bash
source build/envsetup.sh
lunch rk3566_rgo-userdebug
./build.sh -UKAu
```

Help:

```bash
./build.sh -h
```

## Output Images

Common output files:

```text
MiniLoaderAll.bin
U-Boot.img
trust.img
resource.img
boot.img
misc.img
recovery.img
boot-debug.img
dtbo.img
pcba_small_misc.img
pcba_whole_misc.img
super.img
vbmeta.img
update.img
```

## Windows Flashing

1. Install the Rockchip USB driver, commonly `DriverAssitant_v5.x`.
2. Open Rockchip AndroidTool.
3. Select the single upgrade firmware `update.img`, or use multi-device upgrade mode.
4. Put the board into Loader / Maskrom / Recovery mode as required.
5. Start upgrade and wait for completion.

## TF Card Upgrade

The Android manual also includes TF-card firmware upgrade. Typical steps are preparing the TF-card upgrade tool, selecting firmware, creating the upgrade card, inserting it into the board, and waiting for the upgrade to complete.
