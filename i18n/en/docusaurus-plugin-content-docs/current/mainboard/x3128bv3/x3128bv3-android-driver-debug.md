---
sidebar_position: 12
title: Driver and Debugging
description: X3128 Android kernel information query and common project modifications
---

# Driver and Debugging

This page summarizes Android kernel driver check items and common project modifications, such as init.rc, boot animation, logo, and MIPI display configuration.

## Common Driver Items

Driver topics listed in the original manual include:

- G-sensor driver.
- Capacitive touch driver.
- LCD driver.
- Key driver.
- Wi-Fi / BT module driver.
- Camera driver.
- VGA driver.
- HDMI driver.
- proc file system information query.

## proc File System Queries

Query boot arguments:

```bash
cat /proc/cmdline
```

Query CPU information:

```bash
cat /proc/cpuinfo
```

Query memory information:

```bash
cat /proc/meminfo
```

Query disk partitions:

```bash
cat /proc/partitions
```

Query kernel version:

```bash
cat /proc/version
```

Query network devices:

```bash
cat /proc/net/dev
```

Query kernel boot messages:

```bash
cat /proc/kmsg
```

## Modify init.rc

Permanent method: modify `init.rc` under `system/core/rootdir`, then rebuild the system image:

```bash
./mk.sh -s
```

If the change does not take effect, remove the old `init.rc` under the out directory and rebuild.

Temporary method: `init.rc` is located in ramdisk, and ramdisk is packed into `boot.img`. To modify it temporarily, unpack `boot.img`, edit the ramdisk contents, and repack `boot.img`.

## Modify Boot Animation

The default Android boot animation can be customized by replacing the boot animation resource and repacking the relevant partition.

## Modify U-Boot Logo

Rockchip U-Boot reads `logo.bmp` and `logo_kernel.bmp` from the kernel directory:

- `logo.bmp`: used as the U-Boot-stage boot logo.
- `logo_kernel.bmp`: used as the kernel-stage logo.

To display only one image, remove `logo_kernel.bmp`. To replace the U-Boot logo, convert the image to BMP, convert it to 8-bit mode, and replace `kernel/logo.bmp`.

## Modify Kernel Logo

The kernel logo also needs to be converted to BMP and compressed with tools such as GIMP on Linux. The original manual notes that the default Rockchip kernel logo solution has limited resolution and may show color distortion. For a perfect logo, use the standard Linux boot logo solution.

## Configure MIPI Display

The known working MIPI panel configuration file is located at:

```text
kernel/arch/arm/boot/dts/lcd-mipi-7inch-wy070ml.dtsi
```

When replacing the display panel, modify this file according to the new panel parameters.
