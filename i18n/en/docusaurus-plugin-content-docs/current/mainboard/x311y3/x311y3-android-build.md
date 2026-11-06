---
sidebar_position: 9
title: Android builds and OTA
description: x311y3 Android builds and OTA
---

# Android builds and OTA

The SDK example is `x311y3_android16`, with U-Boot target `a9_by401` and Android targets `akee_*`. Run each documented stage from the working directory required by the SDK.

## Dual-display environment

```bash
export BOARD_COMPILE_HDMITX_ONLY=false
export BOARD_COMPILE_ATV=false
export BOARD_COMPILE_CTS=true
```

## U-Boot

```bash
cd bootloader/uboot-repo
./mk a9_by401 --fastboot-write --avb2 --vab 2>&1 | tee ../../build_uboot.log
cp build/u-boot.bin.signed ../../device/amlogic/akee/bootloader.img
cp build/u-boot.bin.sd.bin.signed ../../device/amlogic/akee/upgrade/u-boot.bin.sd.bin.signed
cp build/u-boot.bin.usb.signed ../../device/amlogic/akee/upgrade/u-boot.bin.usb.signed
```

## Kernel

The kernel target is `common16-6.12`; the project specifies GKI 2.0 support by default.

```bash
./mk akee -v common16-6.12 -j50 2>&1 | tee build_kernel.log
```

## AOSP Android and OTA

```bash
. build/envsetup.sh && lunch akee_arm64-bp4a-userdebug
make installclean
make -j80 2>&1 | tee build_aosp_android.log
make otapackage -j20 2>&1 | tee build_aosp_ota.log
```

## GMS / EDLA Android and OTA

```bash
. build/envsetup.sh && lunch akee_arm64_gms-bp4a-userdebug
make installclean
make -j80 2>&1 | tee build_gms_android.log
make otapackage -j20 2>&1 | tee build_gms_ota.log
```

## build_amlogic.sh wrapper

| Argument | Description |
| --- | --- |
| u | U-Boot |
| k | Kernel |
| a | AOSP Android |
| g | GMS Android |
| an | U-Boot → Kernel → AOSP Android |
| gn | U-Boot → Kernel → GMS Android |
| ao | U-Boot → Kernel → AOSP OTA |
| go | U-Boot → Kernel → GMS OTA |
| h | Help |

```bash
./build_amlogic.sh an
./build_amlogic.sh gn
./build_amlogic.sh u
./build_amlogic.sh k
./build_amlogic.sh a
./build_amlogic.sh g
./build_amlogic.sh ao
./build_amlogic.sh go
./build_amlogic.sh h
```

Run the wrapper from the SDK root. Its default is `-j10`, while manual examples use `-j50` for Kernel and `-j80` for Android; adjust to host resources. The script enters `bootloader/uboot-repo`, so another starting directory causes path failures.
