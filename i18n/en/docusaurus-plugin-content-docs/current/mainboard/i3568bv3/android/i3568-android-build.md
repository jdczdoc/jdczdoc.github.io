---
sidebar_position: 1
title: Android Build
description: i3568bv3 Android Build
---

# Android Build

## Prepare the Sources

Get all Android 11 SDK archive parts from `DVD_i3568/source/x3568_android11_new` in the supplied resources. Build as a regular user in the matching 64-bit Ubuntu environment. Select the JDK required by the SDK script. The documented script example uses Java 8.

```bash
cat ./x3568_android11_new.tar.gz.* > x3568_android11_new.tar.gz
tar -xzf x3568_android11_new.tar.gz
cd x3568_android11_new
./build.sh -h
```

## Select Build Options for the SDK

Check the help and entry point of the supplied SDK script first. Option meanings can differ between scripts, including letter case. Confirm whether `-U` selects U-Boot or packaging in your script.

| Target | Example Options | Action |
| --- | --- | --- |
| U-Boot | `-U` or `-u` | Use the option explicitly listed for U-Boot |
| Kernel | `-K` or `-k` | Repackage boot.img after building |
| Android system | `-A` or `-s` | Build system files and partition images |
| Full package | `-U` on the packaging script | Use the option listed for generating update.img |

If the SDK uses `mk.sh`, select options from its help. For a kernel-only update, use the supplied `./mkimage.sh` to regenerate `boot.img`. Flash the packaged images from `rockdev/Image-rk3568_r/`.

## Output Files

| File | Purpose |
| --- | --- |
| `update.img` | Complete firmware package |
| `MiniLoaderAll.bin`, `uboot.img` | Download loader and U-Boot |
| `boot.img`, `dtbo.img` | Boot image and device-tree overlays |
| `super.img` | Contains system, vendor, product, odm, system_ext and other logical partitions |
| `parameter.txt`, `config.cfg` | Partition layout and flashing-tool configuration |
| `recovery.img`, `vbmeta.img` | Recovery system and AVB verification metadata |
