---
sidebar_position: 9
title: Android 编译与 OTA
description: x311y3 Android 编译与 OTA
---

# Android 编译与 OTA

SDK 示例为 `x311y3_android16`，U-Boot 目标 `a9_by401`，Android 目标 `akee_*`。以下命令按项目手册保留，各阶段在 SDK 要求的工作目录执行。

## 双屏环境变量

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

Kernel 目标 `common16-6.12`，项目资料说明默认支持 GKI 2.0。

```bash
./mk akee -v common16-6.12 -j50 2>&1 | tee build_kernel.log
```

## AOSP Android 与 OTA

```bash
. build/envsetup.sh && lunch akee_arm64-bp4a-userdebug
make installclean
make -j80 2>&1 | tee build_aosp_android.log
make otapackage -j20 2>&1 | tee build_aosp_ota.log
```

## GMS / EDLA Android 与 OTA

```bash
. build/envsetup.sh && lunch akee_arm64_gms-bp4a-userdebug
make installclean
make -j80 2>&1 | tee build_gms_android.log
make otapackage -j20 2>&1 | tee build_gms_ota.log
```

## 一键脚本 build_amlogic.sh

| 参数 | 说明 |
| --- | --- |
| u | U-Boot |
| k | Kernel |
| a | AOSP Android |
| g | GMS Android |
| an | U-Boot → Kernel → AOSP Android |
| gn | U-Boot → Kernel → GMS Android |
| ao | U-Boot → Kernel → AOSP OTA |
| go | U-Boot → Kernel → GMS OTA |
| h | 显示帮助 |

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

从 SDK 根目录运行脚本。当前脚本默认 `-j10`，手工示例 Kernel 使用 `-j50`，Android 使用 `-j80`，按主机资源调整。脚本会进入 `bootloader/uboot-repo`，从错误目录运行会导致路径失败。
