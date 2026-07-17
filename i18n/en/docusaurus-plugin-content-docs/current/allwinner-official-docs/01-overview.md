---
title: Documentation Overview
sidebar_position: 1
description: Scope and usage of the Allwinner basic development documentation, using T527 Android 13 and Linux 5.15 as the primary example.
---

# Allwinner Basic Development Documentation

This documentation covers board adaptation, driver configuration, and system builds for Allwinner platforms. **T527, Android 13, Linux 5.15, Longan, and the independent BSP repository** are used as the primary example only. Paths, configuration options, and test commands must be confirmed against the target SoC and SDK branch.

It is not a page-by-page conversion of the official manuals. The goal is to turn the commonly used material into executable workflows. Directory names and commands may vary slightly between SDK branches, so always confirm the active branch with `find`, `grep`, and the build-system output.

## Objectives

After reading these pages, you should be able to:

1. Decide whether a change belongs in Android, Longan, BSP, device, or kernel code.
2. Locate the target platform's SoC-level and board-level Device Tree files, using T527 as the reference example.
3. Change and save kernel configuration through Longan `menuconfig`.
4. Build the bootloader, kernel, or an Android module independently.
5. Build, package, and verify an Android 13 firmware image.
6. Add UART, I2C, SPI, GPIO, display, audio, and camera guides using one standard structure.

## Recommended Order

- [SDK Layout and Responsibilities](./02-sdk-framework.md)
- [Android 13 Architecture](./03-android13-architecture.md)
- [Longan Configuration and Build](./04-longan-build.md)
- [Independent BSP Repository](./05-bsp-repository.md)
- [Device Tree Configuration](./06-device-tree.md)
- [Kernel Configuration](./07-kernel-configuration.md)
- [Android 13 Build](./08-android13-build.md)
- [Build and Packaging Workflow](./09-build-and-pack.md)
- [Target Debugging and Verification](./10-debugging-and-verification.md)
- [Common Function Development Workflow](./functions/01-common-development-flow.md)

## Common Structure for Function Guides

Each future function guide will state:

- Driver source location.
- Device Tree location and required properties.
- The `menuconfig` path and `CONFIG_` symbol.
- How to save the configuration.
- How to build and package the change.
- How to verify it on the target.
- Common failure modes and debugging steps.

## Placeholder Variables

| Placeholder | Meaning |
|---|---|
| `<ANDROID_TOP>` | Android 13 source root |
| `<LONGAN>` | `<ANDROID_TOP>/longan` |
| `<BOARD>` | Active board target; T527 examples include `demo`, `demo_car`, `demo_linux_aiot`, or a company-specific board |
| `<PRODUCT>` | Android lunch product name |
| `<OUT>` | Android output directory |

Before following a procedure, verify the source root:

```bash
cd <ANDROID_TOP>
pwd
ls
```

The root should normally contain directories such as `build/`, `device/`, `frameworks/`, `vendor/`, and `longan/`.
