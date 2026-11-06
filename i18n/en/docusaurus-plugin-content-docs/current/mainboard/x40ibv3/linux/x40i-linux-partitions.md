---
sidebar_position: 4
title: Linux Partitions and Packaging
description: x40i Linux Partitions and Packaging
---

# Linux Partitions and Packaging

## Partition Configuration

Edit the active `sys_partition.fex` or `sys_partition_linux.fex` under `tools/pack/chips/sun8iw11p1/configs/<board>/`. Back up existing data before changing partitions. `size` is measured in 512-byte sectors; the filesystem image size must also match.

```ini
[partition]
name = usr
size = 2097152
downloadfile = "usr-resource.fex"
user_type = 0x8000
```

This example reserves 1 GiB. `downloadfile` identifies the image, `keydata` marks important user data and `verify` controls write verification. Retain other attributes required by the firmware scheme.

## Create a Data Partition Image

Create a content directory `usr-resource/` and `usr-resource.ini` under `tools/pack/chips/sun8iw11p1/usr-resource/`. Copy the boot-resource template, change its names to usr-resource and configure the image name, content path and size.

```ini
[fsinfo]
fsname=.\usr-resource.fex
size=1048576
rootcnt=1
root0=.\usr-resource
```

Here `size` is in KiB; 1048576 corresponds to 1 GiB. Add usr-resource copying and `fsbuild` to the prepare/generation flow in `tools/pack/pack`, then package and check `tools/pack/out/usr-resource.fex`. Put preinstalled files into the content directory before packaging.

```bash
./build.sh pack
```

## Verify on the Board

Inspect the actual partition layout before mounting the new data partition. `mmcblk0p8` below is an example; use the device from the current firmware.

```bash
cat /proc/partitions
fdisk -l
mkdir -p /mydata
mount /dev/mmcblk0p8 /mydata
df -h
```

`fdisk` and `/proc/partitions` report partition capacity; `df` reports mounted filesystem capacity. If a 1 GiB partition exposes only about 128 MiB, check the INI size used to create its filesystem image.
