---
title: SDK Layout and Responsibilities
sidebar_position: 2
description: Relationship between the T527 Android 13 source tree, Longan, BSP, device, and kernel repositories.
---

# SDK Layout and Responsibilities

A T527 Android 13 SDK normally combines the Android source tree with `longan`. Android builds the framework, HALs, applications, and system images. Longan builds the bootloader, Linux kernel, Allwinner BSP drivers, Device Tree, and firmware packaging inputs.

## Top-Level Layout

```text
<ANDROID_TOP>/
├── build/
├── device/
├── frameworks/
├── hardware/
├── packages/
├── system/
├── vendor/
├── out/
└── longan/
    ├── brandy/
    ├── bsp/
    ├── build/
    ├── buildroot/
    ├── device/
    ├── kernel/
    ├── out/
    ├── platform/
    ├── prebuilt/
    ├── tools/
    └── build.sh
```

Some branches omit optional directories or add private vendor repositories.

## Android-Side Directories

| Directory | Responsibility |
|---|---|
| `build/` | Android build system and `envsetup.sh` |
| `device/` | Android product, board, partition, property, overlay, and product-make configuration |
| `frameworks/` | Framework, system services, media, and graphics code |
| `hardware/` | HAL interfaces and vendor HAL implementations |
| `packages/` | System and common applications |
| `system/` | Core Android system components |
| `vendor/` | Allwinner and product-specific code and prebuilt files |
| `out/` | Generated Android output; do not edit it as source |

## Longan-Side Directories

| Directory | Responsibility |
|---|---|
| `longan/brandy/` | boot0, U-Boot, and related startup code |
| `longan/bsp/` | Allwinner drivers, Kconfig, Makefile, SoC-level DTSI, and common configuration |
| `longan/device/` | Chip and board DTS, defconfig, partition, and packaging configuration |
| `longan/kernel/` | Upstream-style Linux 5.15 kernel code and links to the BSP repository |
| `longan/build/` | Configuration, build, and packaging scripts used by `build.sh` |
| `longan/out/` | Bootloader, kernel, DTB, module, and package output |
| `longan/platform/` | Allwinner private user-space components and tools |
| `longan/buildroot/` | Root file system and packages for Linux/Buildroot targets |

## The Three Most Important Repositories

```text
device: board-specific differences
   +
bsp: Allwinner drivers and SoC configuration
   +
kernel: standard Linux kernel code and interfaces
   ↓
Longan produces the kernel, DTB, modules, and firmware inputs
```

With the independent BSP design, do not assume an Allwinner driver is under `kernel/drivers/`. It is often under `longan/bsp/drivers/` or `longan/bsp/modules/`.

## Quick Layout Check

```bash
cd <ANDROID_TOP>

find longan -maxdepth 2 -type d \
    \( -name bsp -o -name device -o -name kernel -o -name out \) \
    -print

find longan/device/config/chips/t527 -maxdepth 4 -type f \
    \( -name 'board.dts' -o -name '*defconfig' -o -name 'BoardConfig.mk' \) \
    -print
```

Confirm the active board before editing so that changes are not accidentally made in another product configuration.
