---
title: Android Build and Flash
description: The supplied Android manual identifies the source release as Android 14, archive x3562an…
---

# Android Build and Flash

## SDK

The supplied Android manual identifies the source release as Android 14, archive `x3562_android14.tar.gz`, under `DVD_x3562/source/`. Archive names may vary by release.

## Device Tree and Partition Files

The manual lists:

```text
Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3562-9tripod-evb.dtsi
rockdev/Image-rk3562/parameter.txt
```

Confirm directory case, target configuration and filename in the actual SDK checkout.

## Build

```bash
./build.sh -U   # U-Boot
./build.sh -K   # Kernel
./build.sh -A   # Android filesystem
./build.sh -h   # Help
```

Build as a normal user rather than root.

## Main Images

| File | Description |
|---|---|
| `MiniLoaderAll.bin` | Loader |
| `uboot.img` | U-Boot |
| `boot.img` | Kernel / resource boot content |
| `recovery.img` | Recovery |
| `misc.img` | Recovery / wipe boot flags |
| `dtbo.img` | Device-tree overlay |
| `super.img` | Dynamic partitions such as system, vendor and product |
| `vbmeta.img` | AVB metadata |
| `update.img` | Complete upgrade package |

The manual has inconsistent output-directory spellings (`Image-rk3562_u`, `Image-rk3562_u_r`, `Image-rkrk3562_r`). Use actual build output and logs.

## Windows Flashing

1. Install the Rockchip DriverAssitant supplied with the SDK.
2. Launch the bundled AndroidTool.
3. Select firmware upgrade and load `update.img`.
4. Enter Loader / Maskrom using the board-specific key and USB OTG sequence.
5. Start the upgrade after the tool detects the device.

Before flashing individual partitions, verify that `parameter.txt` matches the target board. An incorrect partition table or incompatible image can make the board unbootable.
