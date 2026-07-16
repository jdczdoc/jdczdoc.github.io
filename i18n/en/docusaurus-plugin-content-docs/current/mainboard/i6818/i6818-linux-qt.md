---
sidebar_position: 13
title: Qt Root Filesystem
description: i6818 Qt filesystem setup, Buildroot, Qt5.4 examples, and Qt Creator
---

# Qt Root Filesystem

> Note: This software page reuses the x6818 software documentation flow as requested. i6818 and x6818 have similar boot/flashing flows; actual commands, source package names, and image names should follow the current i6818 SDK.

The i6818 Linux manual covers Qt filesystem setup, Buildroot configuration, Qt5.4 default example testing, Qt Creator installation, and default example compilation.

## Download Buildroot

Enter the source directory and download or extract Buildroot. Directory structure may differ by SDK version.

## Configure Buildroot

```bash
make menuconfig
```

Key items:

- Target architecture and cross-toolchain.
- Root filesystem type.
- Qt5 / Qt5.4 components.
- Touch, fonts, input method, network, audio, and library dependencies.
- Example applications and debug tools.

## Build Buildroot

```bash
make
```

After the build, obtain the rootfs image, cross-toolchain, and target libraries from the output directory.

## Test Qt5.4 Default Examples

After flashing the Qt filesystem, run the default examples to verify display, touch, keys, audio, UART, network, and storage mounting.

## Install Qt Creator

On the PC, configure:

- C/C++ compiler.
- qmake.
- sysroot.
- Target device or remote debug settings.
- Qt version and Kit.

## Compile Qt Creator Default Example

Create a Qt example project, select the cross-build Kit, build the target program, copy it to i6818, and run it.
