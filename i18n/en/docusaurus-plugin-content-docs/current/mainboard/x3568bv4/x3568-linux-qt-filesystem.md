---
sidebar_position: 11
title: Linux QT Filesystem
description: X3568 Buildroot, QT filesystem, and MIPI display configuration
---

# Linux QT Filesystem

This page summarizes X3568 Linux / QT filesystem content, focusing on Buildroot compilation and the MIPI display configuration entry.

## Buildroot Filesystem

The `build.sh` script in the X3568 Linux SDK integrates the Buildroot rootfs build target:

```bash
./build.sh buildroot
```

To build U-Boot, Kernel, rootfs, and recovery completely, run:

```bash
./build.sh all
```

After the build, the rootfs image is released to the `rockdev` directory.

## Package Firmware

```bash
./build.sh firmware
./build.sh updateimg
```

`update.img` is used for unified firmware upgrade through RKDevTool.

## Configure a MIPI Display

Display configuration files are located at:

```text
kernel/arch/arm64/boot/dts/rockchip
```

Example 7-inch MIPI display configuration file:

```text
lcd-dsi0-mipi1024x600-WY070ML.dtsi
```

Select the required LCD module in `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi`. For example, to use a 7-inch MIPI display:

```dts
//#include "lcd-dsi0-mipi1024x600-WY070ML.dtsi"
#include "lcd-dsi1-mipi1024x600-WY070ML.dtsi"
```

Actual projects should be checked together with the LCD interface hardware connection, backlight, touch, and device-tree configuration.
