---
sidebar_position: 7
title: Android Build and Flash
description: X3399V4 Android 7.1 tools, source installation, compilation, and flashing
---

# Android Build and Flash

:::note
This page reuses the previously prepared I3399 / X3399 software documentation template. For X3399V4, actual source package names, image names, partition files, and tool versions should follow the current SDK and release package.
:::

This page keeps Android 7.1 development items directly related to X3399V4 / X3399 build and flashing. Generic Ubuntu installation tutorials are not included.

## Environment Recommendation

- Use a native Linux host for full Android source compilation.
- The original manual uses Ubuntu 14.04 64-bit as an example.
- Android 7.0 and later source trees normally require at least 8GB RAM.
- Common tools include `adb`, serial terminal, RKTool / AndroidTool, `upgrade_tool`, Rkflashkit, SecureCRT, and picocom.

## ADB

```bash
adb devices
adb shell
```

If `more than one device and emulator` appears, close extra emulators or restart the adb server.

## Install Dependencies

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl-dev libwxgtk2.8-dev \
build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools \
libxml2-utils texinfo mercurial subversion whois
```

Older SDKs may require JDK 1.6 / 1.7. Install the version required by the delivered SDK.

## Get Android Source

```bash
git clone <sdk_git_url>
cd <sdk_dir>
git pull
```

If the SDK is delivered as a compressed package, extract it on Linux and enter the SDK root directory.

## Build

Common build flow:

```bash
source build/envsetup.sh
lunch
make U-Boot
make bootimage
make -j$(nproc)
```

Some RK SDKs provide wrapper scripts:

```bash
./build.sh U-Boot
./build.sh kernel
./build.sh Android
./build.sh updateimg
```

## Generate update-Android.img

After a full build, the upgrade package is usually named `update-Android.img` and is located in the SDK output directory or a `rockdev/Image-*` directory.

## Flash on Windows

1. Install the Rockchip USB driver.
2. Put the board into Loader or Maskrom mode.
3. Select `update-Android.img` or separate partition images.
4. Click Run / Upgrade and wait until the tool reports success.

## Flash on Linux

Flash the full package:

```bash
sudo ./upgrade_tool uf update-Android.img
```

Flash separate images:

```bash
sudo ./upgrade_tool ul MiniLoaderAll.bin
sudo ./upgrade_tool di -p parameter.txt
sudo ./upgrade_tool di -u U-Boot.img
sudo ./upgrade_tool di -b boot.img
sudo ./upgrade_tool di -s system.img
sudo ./upgrade_tool rd
```
