---
title: SDK Layout and Build Environment
sidebar_position: 6
description: "V821 Tina Linux 5.0 directories, shortcuts, and build environment"
---

# SDK Layout and Build Environment

## SDK Directories

Common Tina Linux 5.0 directories:

```text
brandy/                    BOOT0, U-Boot, and boot tools
bsp/                       Linux BSP device trees, drivers, and headers
build/                     SDK build and packaging scripts
device/config/chips/v821/  V821 board-level configuration
kernel/linux-5.4-ansc/     Upstream-style Linux kernel tree
openwrt/                   Root filesystem and user-space packages
platform/allwinner/        MPP and platform applications
prebuilt/                  Host tools and cross toolchains
rtos/                      RTOS source for the RISC-V MCU
out/                       Build and package output
```

![SDK top-level tree](./linux-sdk-tree.png)

## Initialize the Environment

All shortcut commands depend on the environment script:

```bash
cd <sdk-root>
source build/envsetup.sh
lunch
```

The X821 manual uses `v821-aitoy-tina` as the board example. A delivered SDK may add storage, UART, or fast-boot suffixes; treat the current `lunch` list and `README.txt` as authoritative.

## Common Shortcuts

| Command | Purpose |
| --- | --- |
| `croot` | Return to the SDK root |
| `cconfigs` | Open the board BSP configuration directory |
| `cplat` | Open the OpenWrt board directory |
| `cboot` / `cboot0` | Open the U-Boot/BOOT0 directories |
| `cbsp` | Open the BSP directory |
| `crtos` | Open the RTOS directory |
| `cout` | Open the selected board output directory |
| `make menuconfig` | Configure Tina packages |
| `make kernel_menuconfig` | Configure the Linux kernel |
| `mrtos menuconfig` | Configure the RTOS |
| `m` / `make` | Build the SDK |
| `pack` | Package firmware |

## Parallel Build Jobs

```bash
nproc
m -j$(nproc)
```

Increasing `-j` does not provide linear speedup when memory, disk I/O, or serial build steps are the bottleneck. For stable builds, start near the number of physical cores and measure.
