---
sidebar_position: 1
title: Linux Build and Flashing
description: Build, package and flash the z3588bv3 Linux SDK
---

# Linux Build and Flashing

## Source Archive

Extract the example archive below. Confirm the archive name and instructions in the supplied SDK `readme.txt`.

```bash
tar -xzvf x3588_linux_20240820.tar.gz
cd x3588_linux_20240820
```

## Build Environment

The SDK examples use 64-bit Ubuntu 16.04 or 18.04. Install dependencies for the SDK and host distribution. The listed packages are:

```bash
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev \
  libwxgtk3.0-dev build-essential zip curl zlib1g-dev gcc-multilib \
  g++-multilib genromfs libc6-dev-i386 libncurses5-dev x11proto-core-dev \
  libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip \
  lsb-core lib32z1-dev lib32ncurses5-dev texinfo mercurial subversion \
  whois g++ git lzop liblz4-tool genext2fs make device-tree-compiler \
  u-boot-tools libssl-dev autoconf python-pyelftools python3-pyelftools \
  libusb-1.0 git tig repo p7zip p7zip-full rar unrar \
  android-tools-fastboot android-tools-adb
```

The source package includes cross-compilers under:

```text
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/
```

## Select a Board Configuration

From the SDK root, read the instructions and script help.

```bash
cat readme.txt
./build.sh -h
```

```bash
./build.sh lunch
```

Select the matching Z3588/RK3588 configuration by name. Menu indices vary by SDK release.

## Build

Run the following as a regular user and select the root filesystem for your target.

```bash
# Build U-Boot
./build.sh uboot

# Build the Linux 5.10 kernel
./build.sh kernel-5.10

# Select the Buildroot or Debian root filesystem
./build.sh buildroot
./build.sh debian

# Package the full update image
./build.sh updateimg
```

Check `rockdev/` for the build outputs, which can include `MiniLoaderAll.bin`, `misc.img`, `parameter.txt`, `rootfs.img`, `update.img`, `boot.img`, `oem.img`, `recovery.img`, `uboot.img` and `userdata.img`. Files depend on the selected configuration.

## Flash update.img on Windows

1. Install the Rockchip USB driver with `DriverInstall.exe` from `RKTools/windows/Release_DriverAssitant`. Remove an older driver first if installed.
2. Open the supplied AndroidTool, for example `RKTools/windows/AndroidTool/AndroidTool_Release_v2.81/AndroidTool.exe`.
3. Select Upgrade Firmware and load `rockdev/update.img`.
4. Hold BOOT/RECOVERY while connecting the Type-C OTG data cable and 12 V DC supply.
5. When the tool detects a MASKROM device, verify the firmware and start the upgrade.

Use the tools supplied with your SDK. The documented examples use AndroidTool v2.81 and DriverAssistant v5.1.1. Before editing partitions, flashing individual partitions or erasing storage, verify `parameter.txt`, `readme.txt` and the tool configuration.
