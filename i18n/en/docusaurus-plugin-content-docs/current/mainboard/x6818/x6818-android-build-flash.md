---
sidebar_position: 6
title: Android Build and Flash
description: X6818 Android 5.1 environment, source build, boot card, and fastboot flashing
---

# Android Build and Flash

The X6818 Android manual is based on Android 5.1, with Ubuntu 14.04 64-bit as the example development environment. Because Android source trees are large after Android 4.0, the manual recommends installing Linux directly rather than compiling the full Android tree in a virtual machine.

## Development Environment

Common tools:

```bash
sudo apt-get update
sudo apt-get install vim
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install openssh-server
```

minicom setup:

```bash
sudo minicom -s
```

The serial port is usually configured as 115200 8N1 with hardware and software flow control disabled. A USB-to-serial adapter usually appears as `/dev/ttyUSB0`.

## Android Development Tools

The manual covers:

- SlickEdit / Eclipse code editors.
- adb installation, device status, and adb shell.
- SecureCRT serial terminal.

Common adb commands:

```bash
adb devices
adb shell
adb install app.apk
adb push local_file /data/local/tmp/
adb pull /data/local/tmp/file ./
```

## Install Android Source Package

The manual covers dependency packages, cross-compilation toolchain, and source package installation. After installation, verify script permissions, toolchain path, and environment variables.

## Build Android

Common build targets include U-Boot, kernel, Android filesystem, and package generation. Use the actual scripts provided by the source package.

```bash
# Build U-Boot
./mk -u

# Build Android kernel
./mk -k

# Build Android filesystem
./mk -s

# Help
./mk -h
```

## U-Boot Environment Variables

The manual has a dedicated U-Boot environment section. X6818 may require different boot media, bootargs, display parameters, and rootfs parameters when switching among flashing, TF-card boot, eMMC boot, Ubuntu, Android, and Linux.

## Flash Android Images

The manual covers Ubuntu and Windows flashing flows: fastboot, boot-card creation, offline TF-card update, and U-Boot update when eMMC has no bootloader.

### fastboot on Ubuntu

```bash
sudo apt-get install Android-tools-fastboot
```

Configure `51-Android.rules` if USB permission is insufficient.

### Boot Card on Ubuntu

The boot card helps X6818 / iBox6818 enter flashing or upgrade flow. After creation, insert the TF card and power on according to the manual.

### Flash Images on Ubuntu

If eMMC has no firmware, use the boot card or fastboot to enter a download environment, then flash U-Boot, boot, system, and other images. If eMMC already has a valid system, enter fastboot directly or reboot to download mode from the system.

### Windows Flashing

Windows requires fastboot or bundled tools. Typical commands:

```cmd
fastboot devices
fastboot flash boot boot.img
fastboot flash system system.img
fastboot reboot
```

### Offline TF-card Update

Offline TF-card update is useful for field upgrades without a PC. Create the upgrade card, place the upgrade image in the required location, and boot from the card.

## Update U-Boot Without Bootloader

If eMMC has no bootloader, first use a boot card or low-level download method to enter a flashable state, recover U-Boot, and then flash the full system image.
