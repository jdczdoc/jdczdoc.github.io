---
sidebar_position: 6
title: Android Build and Flash
description: Pico PC RK3588S Android 12 build, image output, and RKTool flashing
---

# Android Build and Flash

The Pico PC RK3588S Android manual is based on Android 12. It recommends installing Linux directly for full Android source builds rather than relying on a virtual machine. Unless otherwise stated, Ubuntu 16.04 64-bit is recommended.

## Key Paths

| Item | Path |
| --- | --- |
| Device tree | `kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi` |
| Parameter file | `rockdev/Image-x3588s/parameter.txt` |
| Image output | `rockdev/Image-x3588s` or `rockdev/Image-rkx3588s_r`, depending on the SDK |

## Build Notes

Use a normal user account for image compilation, not root. The manual lists generated images such as `MiniLoaderAll.bin`, `U-Boot.img`, `trust.img`, `resource.img`, `boot.img`, `misc.img`, `recovery.img`, `dtbo.img`, `super.img`, `vbmeta.img`, and `update.img`.

### Build U-Boot

```bash
./build.sh -U
```

This releases files such as `rk3588_spl_loader_v1.03.107.bin`, `U-Boot.img`, and `resource.img` into the U-Boot directory.

### Build Android Kernel

```bash
./build.sh -K
```

This releases `kernel.img`, `resource.img`, `boot.img`, `zboot.img`, and related files. On Android 11/12 platforms, `kernel.img` and `resource.img` are typically packed into `boot.img`, so rebuild `boot.img` after updating the kernel.

### Build Android Filesystem

```bash
./build.sh -A
```

The generated images are released to `rockdev/Image-rkx3588s_r`.

### Help

```bash
./build.sh -h
```

| Option | Meaning |
| --- | --- |
| `-u` | Build U-Boot |
| `-k` | Build kernel |
| `-s` | Build Android filesystem |
| `-U` | Package `update.img` |
| `-j=` | Parallel build, for example `-j=20` |
| `-a` | Run all major build steps |

## Windows Flashing

### RKTool Driver

Extract `RKTools.rar` and open:

```text
SDK\RKTools\windows\Release_DriverAssitant
```

Run `DriverInstall.exe` and click driver install. If an old driver causes detection issues, uninstall it first and reinstall. The manual notes that Pico PC x3588s should use `AndroidTool_Release_v2.79`, with `DriverAssitant_v5.1.1`, otherwise flashing or device detection may fail.

### Flash update.img

After compilation, generate `update.img`. Open AndroidTool, choose the firmware upgrade tab, select `update.img`, put the board into Loader / MaskRom / Recovery download state, and click upgrade.

## TF-card Upgrade

The Android manual marks TF-card upgrade as pending verification and not yet implemented. Treat that section as a reference from other platforms and verify it on the current SDK before using it for production.
