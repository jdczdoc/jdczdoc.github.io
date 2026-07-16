---
sidebar_position: 10
title: Linux Build and Flash
description: Pico PC RK3588S Linux source build, image output, and RKTool flashing
---

# Linux Build and Flash

The Linux manual uses `X3588_Linux_edge_20220630` as an example source package. The actual name may vary by release date. Use a normal user account for compilation. Output images are placed under a directory similar to:

```text
out/rk3588/X3588S/images
```

Generated files include `boot.img`, `MiniLoaderAll.bin`, `misc.img`, `oem.img`, `parameter.txt`, `recovery.img`, `rootfs.ext4`, `rootfs.img`, `update.img`, and `userdata.img`.

## Extract Source

```bash
tar -xvf X3588_Linux_edge_20220630.tar.gz
cd X3588_Linux_edge_20220630
```

## Help

```bash
cat readme.txt
```

## Build U-Boot

```bash
./edge build -u
```

This releases `U-Boot.img`.

## Build Linux Kernel

```bash
./edge build -k
```

`kernel.img` and `resource.img` are packed into `boot.img` and released to the output directory.

## Build rootfs

```bash
./edge build -r
```

Rootfs files are released to the `out` directory.

## Package Firmware

```bash
./build.sh updateimg
```

This generates unified upgrade firmware `update.img` and releases it to `rockdev`.

## Image Description

| File | Description |
| --- | --- |
| `boot.img` | Contains kernel.img and resource.img |
| `MiniLoaderAll.bin` | Loader file for download tools |
| `misc.img` | Misc device resource |
| `oem.img` | User adaptation package data |
| `parameter.txt` | Partition file; can change U-Boot, kernel, and filesystem load addresses |
| `recovery.img` | Recovery image |
| `rootfs.ext4` | ext4 partition file |
| `rootfs.img` | Root filesystem image |
| `U-Boot.img` | U-Boot firmware |
| `update.img` | Unified upgrade image containing U-Boot, kernel, filesystem, etc. |
| `userdata.img` | User data image |

## Windows Flashing

Driver path:

```text
SDK\RKTools\windows\Release_DriverAssitant
```

Run `DriverInstall.exe`. The manual notes that Pico PC requires `AndroidTool_Release_v2.79` or later; the Linux source package includes `AndroidTool_Release_v2.81`. The driver should be `DriverAssitant_v5.1.1`.

Tool path example:

```text
RKTools\windows\AndroidTool\AndroidTool_Release_v2.81\AndroidTool.exe
```

Choose the firmware upgrade tab and select `update.img`. Hold Recovery, connect OTG and power, wait until the tool detects a MaskRom device, and click upgrade.
