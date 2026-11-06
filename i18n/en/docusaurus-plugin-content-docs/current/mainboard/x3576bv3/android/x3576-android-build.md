---
sidebar_position: 1
title: Android Build
description: x3576bv3 Android Build
---

# Android Build

## Extract and Prepare

Get `x3576_android14.tar.gz` from the supplied `source/` directory. Build as a regular user with the 64-bit Ubuntu release, JDK and dependencies required by the SDK. Enter the source directory created by extraction.

```bash
tar -xzf x3576_android14.tar.gz
# Run from the extracted SDK root
./build.sh -h
```

## Build and Packaging Options

Check the supplied SDK script help before running build commands. The step-by-step and help examples use different option casing. Confirm whether `-U` builds U-Boot or packages firmware.

| Target | Example Options | Usage |
| --- | --- | --- |
| U-Boot | `-U` / `-u` | Use the option listed for U-Boot |
| Kernel | `-K` / `-k` | Regenerate the boot image before flashing |
| Android system | `-A` / `-s` | Build the system and logical partition images |
| Full package | `-U` | Use when the script help identifies this as packaging |

If help lists `-a` as a full build, use `./build.sh -a`. If the SDK supplies `mkimage.sh`, follow its usage to repackage an updated kernel into `boot.img`.

## Inspect Outputs

Inspect the actual output directory under `rockdev/` for `update.img`, the loader, `uboot.img`, `boot.img`, `dtbo.img`, `super.img`, `recovery.img`, `vbmeta.img` and `parameter.txt`. The flashing example uses `rockdev/Image-rk3576_u/`. Use images and the partition layout produced by the same build.
