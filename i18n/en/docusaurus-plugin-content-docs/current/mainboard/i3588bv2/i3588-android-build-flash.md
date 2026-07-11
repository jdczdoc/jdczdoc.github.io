---
sidebar_position: 5
title: Android Build and Flash
description: I3588 Android source build and firmware flashing
---

# Android Build and Flash

## Install Android Source

Copy the Android source package from the delivered network-disk resources to the Ubuntu user directory and extract it. The package name may vary by release.

## Build Android Source

Build as a normal user, not as root.

Common output images include:

```text
MiniLoaderAll.bin
uboot.img
trust.img
resource.img
boot.img
misc.img
recovery.img
boot-debug.img
dtbo.img
super.img
vbmeta.img
update.img
```

Build example:

```bash
source build/envsetup.sh
lunch rk3588_sgo-userdebug
./build.sh -UKAup
```

View help:

```bash
./build.sh -h
```

## Flash update.img on Windows

1. Install the Rockchip USB driver with `DriverAssitant_v5.1.1`.
2. Open `RKDevTool.exe`.
3. Select firmware upgrade and choose `update.img`.
4. Connect the USB OTG port.
5. Hold the BOOT key and connect USB plus 12V DC power.
6. After a MASKROM device is detected, click upgrade.

## Batch Flashing

Use FactoryTool for multi-device production flashing when needed.
