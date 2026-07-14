---
sidebar_position: 8
title: Android Build and Flash
description: X30 Android 8.1 development environment, source build, image output, and flashing
---

# Android Build and Flash

This page summarizes the development environment, source installation, build process, and flashing flow for X30 Android 8.1.

## Development Environment

Full Android source compilation requires a high-performance PC. The manual recommends installing Linux directly rather than relying on a virtual machine. Ubuntu 14.04 64-bit is used as the example.

Common tools:

```bash
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
```

Serial tools:

```bash
sudo minicom -s
sudo picocom -b 115200 /dev/ttyUSB0
```

## Android Source Dependencies

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl-dev libwxgtk2.8-dev build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools libxml2-utils texinfo mercurial subversion whois
sudo apt-get install lsb-core libc6-dev-i386 g++-multilib lib32z1-dev lib32ncurses5-dev
```

PX30 Android 8 requires JDK 8. The manual uses `java-8-openjdk-amd64.tar.bz2` from the cloud-disk resource:

```bash
sudo tar xjf java-8-openjdk-amd64.tar.bz2 -C /usr/lib/jvm
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## Toolchain

The cross-compilation toolchains are included in the source package:

```bash
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-Android-4.9/
```

## Get Android Source

From cloud disk:

```bash
tar xjf px30_oreo.tar.bz2
cd px30_oreo
git checkout .
```

Example path:

```text
DVD_X30/source/px30_oreo.tar.bz2
```

Update source:

```bash
git remote add gitlab http://gitlab.com/9tripod/px30_oreo.git
git pull gitlab
```

From GitLab:

```bash
git clone http://gitlab.com/9tripod/px30_oreo.git
```

## Build Android

Build as a normal user. Images are generated under `out/release`.

### U-Boot

```bash
./mk -u
```

Outputs:

```text
MiniLoaderAll.bin
uboot.img
trust.img
```

### Kernel

```bash
./mk -k
```

Outputs:

```text
kernel.img
resource.img
```

### Android filesystem

```bash
./mk -s
```

Common outputs:

```text
MiniLoaderAll.bin
uboot.img
trust.img
resource.img
kernel.img
boot.img
misc.img
recovery.img
system.img
vendor.img
oem.img
update-Android.img
```

### Help

```bash
./mk -h
```

| Option | Description |
| --- | --- |
| -u | Build U-Boot |
| -k | Build kernel |
| -s | Build Android filesystem |
| -U | Package all images into update-Android.img |
| -j= | Set parallel build jobs, for example -j=20 |
| -a | Equivalent to ./mk -u -k -s -U |

## Windows Flashing

1. Extract `RKTools.rar`.
2. Run `DriverInstall.exe` under `SDK/RKTools/windows/Release_DriverAssitant`.
3. Open `RKTools/windows/AndroidTool/AndroidTool_Release_v2.58/AndroidTool.exe`.
4. Select `update-Android.img` in the firmware-upgrade tab.
5. Hold RECOVERY, connect Micro USB and 12V DC power.
6. When the tool detects a LOADER device, start upgrade.

## Linux Flashing

Tool path:

```text
RKTools/linux/Linux_Upgrade_Tool_v1.2
```

Example:

```bash
sudo ./upgrade_tool
Rockusb> uf update.img
```

Or flash partitions directly:

```bash
sudo upgrade_tool di -k kernel.img
sudo upgrade_tool di -s system.img
sudo upgrade_tool di resource resource.img
sudo upgrade_tool di -r recovery.img
sudo upgrade_tool uf update.img
```

## TF Card Upgrade

The TF-card upgrade section in the Android manual is reference material. The typical flow is to use `SD_Firmware_Tool.exe`, select firmware, PCBA test, or SD boot mode, then boot from the prepared card.
