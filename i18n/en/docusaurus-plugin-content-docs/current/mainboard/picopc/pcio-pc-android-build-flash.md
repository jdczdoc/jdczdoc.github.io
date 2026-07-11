---
sidebar_position: 4
title: Android Build and Flash
description: Pico PC RK3588S Android build and firmware flashing
---

# Android Build and Flash

## Install Android Source

The Android source package is obtained from:

```text
DVD_Pcio PC/source/
```

Example package:

```text
x3588_android12.tar.gz
```

Extraction example:

```bash
tar -xvf x3588_android12.tar.gz
```

## Build Android Source

Build as a normal user, not as root.

Common output directories:

```text
rockdev/Image-x3588s
rockdev/Image-x3588s_r
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

The manual recommends `AndroidTool_Release_v2.79` and `DriverAssitant_v5.1.1`.

1. Open `AndroidTool.exe`.
2. Select firmware upgrade.
3. Choose `update.img`.
4. Hold the RECOVERY key.
5. Connect microUSB and 12V DC power.
6. Upgrade after MASKROM is detected.

## TF Card Upgrade

TF card upgrade is marked as not yet verified in the manual and should be treated as reference only.
