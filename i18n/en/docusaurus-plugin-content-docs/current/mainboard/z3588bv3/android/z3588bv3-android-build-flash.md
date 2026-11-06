---
sidebar_position: 1
title: Android Build and Flashing
description: Build, package and flash the z3588bv3 Android 12 SDK
---

# Android Build and Flashing

## Host and Source Archive

Use the SDK's recommended 64-bit Ubuntu 20.04 host for a full build. Get the archive parts from `DVD_Z3588/source/Android` in the supplied materials and check the names against the current release.

```bash
cat x3588_android12_r10.tar.gz.part.* > x3588_android12_r10.tar.gz
tar -xzf x3588_android12_r10.tar.gz
```

## Build

Run as a regular user from the source root. Check that the example lunch target and options exist in the installed SDK with `./build.sh -h`.

```bash
source build/envsetup.sh
lunch i3588-userdebug
```

```bash
./build.sh -UCKAu
```

| Option | Action |
| --- | --- |
| `-U` | Build U-Boot |
| `-C` | Build the kernel with Clang |
| `-K` | Build the kernel |
| `-A` | Build Android |
| `-p` | Package in the IMAGE directory |
| `-o` | Generate an OTA package |
| `-u` | Generate update.img |
| `-v` | Select user or userdebug |
| `-d` | Specify the kernel DTS name |
| `-V` | Specify a version |
| `-J` | Set parallel build jobs |

## Output Images

The example output directory is `rockdev/Image-i3588/`. Depending on the configuration, it can contain `MiniLoaderAll.bin`, `uboot.img`, `trust.img`, `resource.img`, `boot.img`, `misc.img`, `recovery.img`, `boot-debug.img`, `dtbo.img`, `pcba_small_misc.img`, `pcba_whole_misc.img`, `super.img`, `vbmeta.img` and `update.img`.

## Flash update.img on Windows

1. Install the USB driver using `SDK/RKTools/windows/DriverAssitant_v5.1.1/DriverInstall.exe`. Remove an older driver first if installed.
2. Extract the SDK's `RKTools/windows/AndroidTool/RKDevTool_Release_v2.84.zip`.
3. Open `RKDevTool.exe`, choose Upgrade Firmware and select `rockdev/Image-i3588/update.img`.
4. Hold BOOT/RECOVERY while connecting Type-C OTG and 12 V power.
5. Verify the firmware once the tool detects the device, then start the upgrade.

Use the RKDevTool and driver versions supplied with the current SDK.
