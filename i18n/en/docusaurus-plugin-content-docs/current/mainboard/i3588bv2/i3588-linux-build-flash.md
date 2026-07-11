---
sidebar_position: 6
title: Linux Build and Flash
description: I3588 Linux source build and firmware flashing
---

# Linux Build and Flash

## Install Linux Source

Download the Linux source package from the delivered resources, verify it, and extract it according to `readme.txt`.

## Output Directory

Generated images are placed under:

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

## Flash Linux Firmware

Use the Rockchip AndroidTool version required by the SDK. Select `update.img`, connect the OTG port and 12V power, and upgrade after the tool detects the device.

## Loader / Maskrom Mode

```bash
reboot bootloader
```

You can also use the board keys to enter Loader or Maskrom mode depending on the hardware design.
