---
sidebar_position: 11
title: Linux Qt Filesystem
description: X3399V4 Buildroot, Qt5 examples, and Qt Creator setup
---

# Linux Qt Filesystem

:::note
This page reuses the previously prepared I3399 / X3399 software documentation template. For X3399V4, actual source package names, image names, partition files, and tool versions should follow the current SDK and release package.
:::

This page keeps Buildroot/Qt filesystem notes, Qt5 examples, and Qt Creator setup.

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
cp .config x3399v4_buildroot_config
```

## Build

```bash
make
```

If the build fails, install the missing package according to the error message.

## Qt5 Examples

```bash
cd /usr/lib/qt/examples
cd gui/analogclock
./analogclock &
```

```bash
cd gui/rasterwindow
./rasterwindow &
```

## Qt Creator

Configure the cross compiler, qmake, sysroot, and Kit according to the SDK output directories. Use `prebuilts`, `buildroot/output/.../host`, and the actual build log as references.

## Qt_demo

Qt_demo can verify LEDs, buzzer, backlight, keys, audio, touchscreen, network, TF card, USB disk, reboot, and shutdown. Supported items depend on the actual firmware and hardware configuration.
