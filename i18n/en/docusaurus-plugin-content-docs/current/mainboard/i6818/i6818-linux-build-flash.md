---
sidebar_position: 12
title: Linux Build and Flash
description: i6818 Linux + Qt build, boot card, fastboot, and image flashing
---

# Linux Build and Flash

> Note: This software page reuses the x6818 software documentation flow as requested. i6818 and x6818 have similar boot/flashing flows; actual commands, source package names, and image names should follow the current i6818 SDK.

The i6818 Linux manual uses an Ubuntu 15.04 virtual machine as the example environment. Linux development requires less PC performance than Android, so VMware is acceptable. Installing Ubuntu directly still provides better build performance.

## VMware and Ubuntu

The manual covers VMware Workstation installation, Ubuntu installation in VMware, and VMware Tools installation. The virtual disk should be at least 100GB.

## Build Linux + Qt

The manual includes installing U-Boot and kernel source packages, building U-Boot, building the kernel, and building the filesystem.

```bash
# Build U-Boot
make

# Build kernel
make

# Build filesystem
make
```

Use the scripts and commands shipped in the actual SDK. Before building, confirm cross-toolchain, environment variables, and source paths.

## Flash Linux Qt Images

The flashing chapter covers both Ubuntu and Windows.

### fastboot on Ubuntu

```bash
sudo apt-get install Android-tools-fastboot
fastboot devices
```

If permission is insufficient, configure `51-Android.rules`.

### Boot Card on Ubuntu

The boot card is used to enter download mode or perform offline upgrade. Select the correct TF-card device node to avoid formatting the host disk by mistake.

### Flash Images on Ubuntu

If eMMC has no firmware, boot from the boot card first and then flash images. If eMMC already has a valid system, use fastboot or a system command to enter the upgrade flow.

### Windows Flashing

Windows flow includes fastboot installation, boot-card creation, and fastboot image flashing.

```cmd
fastboot devices
fastboot flash boot boot.img
fastboot flash system system.img
fastboot reboot
```

## U-Boot Update

The manual covers two cases:

- Update U-Boot when eMMC has no bootloader.
- Update U-Boot when eMMC already has a bootloader.

If the bootloader is damaged, enter low-level download or boot-card mode first, recover U-Boot, then flash the full image.

## U-Boot Environment Variables

Linux/Qt, ramdisk, NFS, and Ubuntu boot modes may require different bootargs, rootfs, and display parameters. Save the environment and reboot for verification after changes.
