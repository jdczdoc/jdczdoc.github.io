---
sidebar_position: 5
title: Android Build and Flash
description: IBOX3576 Android build and firmware flashing
---

# Android Build and Flash

## Install Android Source

The Android source package is obtained from the delivered network-disk resources. The manual mentions:

```text
ibox3576_android14.tar.gz
```

Extraction example:

```bash
tar -xvf x3576_android14.tar.gz
```

## Build Android Source

Build as a normal user, not as root.

Common output directories include:

```text
rockdev/Image-IBOX3576
rockdev/Image-IBOX3576_r
rockdev/Image-rk3576_u
```

Build U-Boot:

```bash
./build.sh -U
```

Build Android kernel:

```bash
./build.sh -K
```

Build Android filesystem:

```bash
./build.sh -A
```

View help:

```bash
./build.sh -h
```

## Flash update.img

Use `DriverAssitant_v5.1.1` to install the Rockchip USB driver. The manual recommends `AndroidTool_Release_v2.79`.

Basic flow:

1. Open `AndroidTool.exe`.
2. Select firmware upgrade.
3. Choose `update.img`.
4. Hold the BOOT key.
5. Connect the Type-C cable and 12V DC power.
6. Upgrade after a MASKROM device is detected.

## Batch Flashing

Use `FactoryTool_v1.66` for multi-device batch flashing.
