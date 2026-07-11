---
sidebar_position: 5
title: Linux Build and Flash
description: Pico PC RK3588S Linux build and firmware flashing
---

# Linux Build and Flash

## Install Linux Source

The Linux / Debian source package is obtained from:

```text
DVD_PcioPC/source/Debian
```

Example packages:

```text
x3588_linux_edge_20220510.tar.gz
X3588_linux_edge_20220630.tar.gz
```

Extraction example:

```bash
tar -xvf X3588_linux_edge_20220630.tar.gz
```

## Output Directory

```text
out/rk3588/X3588S/images
```

## Build Commands

```bash
cat readme.txt
./edge build -a
./edge build -u
./edge build -k
./edge build -r
```

## Package Firmware

```bash
./build.sh updateimg
```

## Flash Linux Firmware

Use `AndroidTool_Release_v2.79` or later. Select `update.img`, hold RECOVERY, connect OTG and 12V DC power, then upgrade after MASKROM is detected.

## Loader / Maskrom

```bash
reboot bootloader
```

You can also enter Loader or Maskrom mode using board keys.
