---
sidebar_position: 7
title: Android Build and Flash
description: X3568 Android11 source installation, build, and firmware flashing
---

# Android Build and Flash

This page keeps the content directly related to installing, building, and flashing the X3568 Android11 source tree. Generic Ubuntu installation and Windows XP boot-menu content are not included.

## Development Environment Notes

- Android source compilation requires high PC performance. Native Linux is recommended; a virtual machine is not recommended for a full build;
- The original manual uses Ubuntu 14.04 / 16.04 64-bit as a reference. For X3568 Android11, follow the actual SDK requirements;
- The Android11 build script uses OpenJDK 8. You can see a similar path in `mk.sh`:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB and Serial Tools

Check ADB connection:

```bash
adb devices
```

Enter shell:

```bash
adb shell
```

The debug UART uses UART2. The common setting is `115200 8N1`, with hardware and software flow control disabled.

## Install Android Source Package

Obtain the Android11 source package from the `DVD_X3568/source/` directory, for example:

```text
x3568_android11.tar.bz2
```

Copy it to the Ubuntu user directory and extract it:

```bash
tar -xvf x3568_android11.tar.bz2
```

The actual package name may vary by release date. Use the actual file name in the delivered resource package.

## Build Android Source

Build images as a normal user. The generated images are placed under:

```text
rockdev/Image-rk3568_r
```

Common images include `MiniLoaderAll.bin`, `uboot.img`, `trust.img`, `resource.img`, `boot.img`, `misc.img`, `recovery.img`, `dtbo.img`, `super.img`, and `vbmeta.img`.

### Build U-Boot

```bash
./mk.sh -u
```

After the build, files such as `rk356x_spl_loader_v1.03.107.bin`, `uboot.img`, and `resource.img` are generated.

### Build Android Kernel

```bash
./mk.sh -k
```

In Android11, `kernel.img` and `resource.img` are included in `boot.img`. After updating the kernel, run the following command in the Android root directory:

```bash
./mkimage.sh
```

Then flash `boot.img` under the `rockdev` directory.

### Build Android Filesystem

```bash
./mk.sh -s
```

### Pack update.img

```bash
./mk.sh -U
```

A full build can also be started with:

```bash
./mk.sh -a
```

`-a` is equivalent to `./mk.sh -u -k -s -U`.

## Flash update.img on Windows

1. Extract and install the Rockchip driver in `Release_DriverAssitant`;
2. Use `AndroidTool_Release_v2.79` or the version specified by the SDK;
3. Select the “Upgrade Firmware” tab and choose the generated `update.img`;
4. Hold the RECOVERY key, then connect the Micro USB cable and the 12V DC power cable;
5. Click upgrade after the tool detects a `LOADER` device;
6. If an `ADB` device is detected, click switch to enter `LOADER` mode.

## Batch Flashing

For batch production flashing, use `FactoryTool_v1.66`: choose `update.img`, select “Upgrade”, click “Start”, and connect boards one by one for automatic upgrade.

## TF Card Upgrade Notes

The TF-card upgrade function in the original manual is marked as “pending verification, not implemented yet”. Treat the related content only as a reference for other platforms. Actual support depends on the current SDK and delivered firmware.
