---
title: Independent BSP Repository
sidebar_position: 5
description: Responsibilities of the T527 BSP, device, and kernel repositories and their configuration priority.
---

# Independent BSP Repository

The Linux 5.15 independent BSP design separates Allwinner drivers and SoC configuration from the base kernel, reducing coupling between private drivers and a specific kernel version.

```text
longan/
├── bsp/       # Allwinner drivers, Kconfig, Makefile, SoC DTSI, common config
├── device/    # board DTS, board defconfig, BoardConfig, partitions
└── kernel/    # standard Linux kernel code and interfaces
```

## BSP Layout

```text
bsp/
├── configs/
├── drivers/
├── include/
├── Kconfig
├── Makefile
├── modules/
├── platform/
└── ramfs/
```

`configs/` contains SoC-level DTSI and common defconfig files. `drivers/` contains most Allwinner drivers. `modules/` contains independently managed components such as NAND or GPU. `include/` exports BSP headers.

## Board Configuration

Board-specific T527 files are usually below:

```text
longan/device/config/chips/t527/configs/<BOARD>/
```

A branch may contain `board.dts`, `linux-5.15/board.dts`, `bsp_defconfig`, `BoardConfig.mk`, `sys_config.fex`, and `sys_partition.fex`.

## Kernel Link to BSP

After `./build.sh config`, the kernel tree may contain a link such as:

```text
longan/kernel/linux-5.15/bsp -> ../../bsp
```

Edit and commit the real files under `longan/bsp/`, not an assumed copied tree reached through the link.

## defconfig Priority

When files with the same name exist, the usual priority is:

```text
board-level configuration
    >
SoC/default configuration
    >
BSP common configuration
```

Typical locations are:

```text
longan/device/config/chips/t527/configs/<BOARD>/linux-5.15/bsp_defconfig
longan/device/config/chips/t527/configs/default/linux-5.15/bsp_defconfig
longan/bsp/configs/linux-5.15/*_defconfig
```

Some branches place the board defconfig directly under `<BOARD>`. Always verify with:

```bash
find longan/device/config/chips/t527 longan/bsp/configs/linux-5.15 \
    -type f -name '*defconfig' -print
```

## Find a Driver Correctly

```bash
cd <ANDROID_TOP>/longan

grep -Rni "config.*SUNXI.*UART\|SERIAL_SUNXI" bsp kernel device 2>/dev/null | head -50
find bsp kernel -type f \
    \( -iname '*uart*.c' -o -iname '*serial*.c' \) \
    -print
```

After locating it, identify the local `Kconfig`, `Makefile`, Device Tree `compatible`, and final `CONFIG_` symbol.

## Minimum Files for a New Driver

```text
bsp/drivers/<module>/
├── Kconfig
├── Makefile
├── <driver>.c
└── <driver>.h
```

Add the directory to its parent Kconfig and Makefile, then complete Device Tree, defconfig, build, and target verification.
