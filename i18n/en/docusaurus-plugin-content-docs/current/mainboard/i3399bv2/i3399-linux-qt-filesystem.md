---
sidebar_position: 11
title: Linux QT Filesystem
description: I3399 Buildroot, QT5 examples, and QT Creator setup
---

# Linux QT Filesystem

This page keeps Buildroot/QT filesystem notes, QT5 examples, and QT Creator setup.

## Buildroot

```bash
./build.sh buildroot
# or
./mk.sh -b
```

The generated filesystem image is used as `rootfs.img` or included in the final `update.img`.

## Configure Buildroot

```bash
cd buildroot
make menuconfig
```

Main configuration areas:

- Target Architecture
- Toolchain
- System configuration
- Target packages
- Filesystem images

Back up the final configuration:

```bash
cp .config i3399_buildroot_config
```

## Build

```bash
make
```

If the build fails, install the missing package according to the error message.

## QT5 Examples

```bash
cd /usr/lib/qt/examples
cd gui/analogclock
./analogclock &
```

```bash
cd gui/rasterwindow
./rasterwindow &
```

## QT Creator

Configure the cross compiler, qmake, sysroot, and Kit according to the SDK output directories. Use `prebuilts`, `buildroot/output/.../host`, and the actual build log as references.

## QT_demo

QT_demo can verify LEDs, buzzer, backlight, keys, audio, touchscreen, network, TF card, USB disk, reboot, and shutdown. Supported items depend on the actual firmware and hardware configuration.
