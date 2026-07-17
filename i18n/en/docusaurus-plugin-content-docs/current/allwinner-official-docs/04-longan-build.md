---
title: Longan Configuration and Build
sidebar_position: 4
description: T527 Longan target selection, partial builds, menuconfig, and common commands.
---

# Longan Configuration and Build

Longan builds the T527 bootloader, kernel, BSP, Device Tree, and firmware inputs. Run its configuration and build commands from the Longan root.

```bash
cd <ANDROID_TOP>/longan
pwd
ls build.sh bsp device kernel
```

## Select a Target

```bash
./build.sh config
```

A typical Linux BSP selection is:

```text
platform  : linux
linux_dev : bsp
kern_ver  : linux-5.15
ic        : t527
board     : <BOARD>
flash     : default
```

A typical Android selection is:

```text
platform  : android
ic        : t527
board     : <BOARD>
flash     : default
```

Use the board list printed by the current branch. Common names include `demo`, `demo_car`, and `demo_linux_aiot`, but company branches may use custom targets.

Inspect the generated configuration:

```bash
cat .buildconfig
```

Important variables include `LICHEE_PLATFORM`, `LICHEE_IC`, `LICHEE_BOARD`, `LICHEE_KERN_VER`, `LICHEE_KERN_DEFCONF`, `LICHEE_PACK_HOOK`, and `LICHEE_OUT_DIR`.

## Common Commands

| Command | Purpose |
|---|---|
| `./build.sh config` | Select platform, chip, board, and flash |
| `./build.sh` | Build the current Longan target |
| `./build.sh bootloader` | Build boot0 and U-Boot components |
| `./build.sh kernel` | Build kernel, BSP, DTS, and modules |
| `./build.sh menuconfig` | Open kernel configuration |
| `./build.sh saveconfig` | Save kernel configuration |
| `./build.sh loadconfig <defconfig>` | Load a selected defconfig |
| `./build.sh buildroot` | Build the Buildroot target |
| `./build.sh buildroot_menuconfig` | Open Buildroot configuration |
| `./build.sh buildroot_saveconfig` | Save Buildroot configuration |
| `./build.sh pack` | Package a Linux image or invoke the configured pack hook |
| `./build.sh pack_debug` | Package with the debug serial-port setting |
| `./build.sh clean` | Clean the current target output |
| `./build.sh distclean` | Remove additional generated configuration and output |

Full Android firmware is commonly packaged from the Android root with `pack` or `build -p`. Whether `./build.sh pack` works for Android depends on the branch and `LICHEE_PACK_HOOK`.

## Directory Shortcuts

Some SDKs provide:

```bash
source build/envsetup.sh
cbsp
ckernel
cconfigs
```

Use direct paths and `find` when those shell functions are not available.

## Locate Output

```bash
find out -maxdepth 5 -type f \
    \( -name 'vmlinux' -o -name '*.dtb' -o -name '*.ko' -o -name '*.img' \) \
    -print | head -100
```

Common locations include `out/t527/<BOARD>/kernel/build/`, `kernel/staging/`, `pack_out/`, and the top-level image output.
