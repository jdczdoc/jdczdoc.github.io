---
sidebar_position: 11
title: Linux QT Filesystem
description: X3288 Buildroot, QT5 examples, QT Creator, and QT_demo tests
---

# Linux QT Filesystem

This page summarizes Buildroot/QT filesystem construction and QT_demo hardware-test entry points.

## Buildroot Configuration

Download Buildroot from the official Buildroot site and extract it on Ubuntu. Enter the Buildroot directory and run:

```bash
make menuconfig
```

Typical configuration points:

- Target architecture: ARM little endian.
- Binary format: ELF.
- CPU variant: Cortex-A9.
- ABI: EABIhf.
- Floating point strategy: Soft float.
- Select Qt5 under target packages.
- Configure filesystem image generation under filesystem images.

Back up the configuration after it is complete:

```bash
cp .config x3288_config
```

Build:

```bash
make
```

The generated root filesystem is usually placed under `output/images`.

## Test QT5 Examples

After flashing U-Boot, kernel, and rootfs, enter the Linux filesystem and test QT examples under `/usr/lib/qt/examples`:

```bash
cd /usr/lib/qt/examples/gui/analogclock
./analogclock &
```

```bash
cd /usr/lib/qt/examples/gui/rasterwindow
./rasterwindow &
```

## QT Creator

Configure cross compiler, qmake, sysroot, and kit in QT Creator according to the SDK toolchain paths. Use the Buildroot output directory and prebuilt toolchain path delivered with the SDK as the reference.

## QT_demo Tests

QT_demo can be used to test LEDs, buzzer, backlight, keys, audio, touch panel, network, TF card, USB disk, reboot, and shutdown functions.
