---
sidebar_position: 10
title: Qt Root Filesystem
description: X6818 Qt filesystem setup, Buildroot, Qt5.4 examples, and Qt Creator
---

# Qt Root Filesystem

The X6818 Linux manual covers Qt filesystem setup, Buildroot configuration, Qt5.4 default example testing, Qt Creator installation, and default example compilation.

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

Create a Qt example project, select the cross-build Kit, build the target program, copy it to X6818, and run it.
