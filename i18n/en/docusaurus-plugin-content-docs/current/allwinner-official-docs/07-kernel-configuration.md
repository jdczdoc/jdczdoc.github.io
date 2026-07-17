---
title: Kernel Configuration
sidebar_position: 7
description: Manage the T527 Linux 5.15 configuration with Longan menuconfig, loadconfig, and saveconfig.
---

# Kernel Configuration

With the independent BSP build, use Longan to manage kernel configuration. Running a traditional `make menuconfig` directly under `kernel/linux-5.15` may update a `.config` that the Longan build does not use.

```bash
cd <ANDROID_TOP>/longan
./build.sh menuconfig
```

Press `/` in menuconfig and search by feature name or `CONFIG_` symbol. The search result shows the menu path, current value, dependencies, and selecting options.

## Save Configuration

```bash
./build.sh saveconfig
```

Some branches accept a target name:

```bash
./build.sh saveconfig bsp_defconfig
```

Confirm which source file changed:

```bash
git status --short
find device/config/chips/t527 bsp/configs/linux-5.15 \
    -type f -name '*defconfig' -mmin -10 -print
```

## Load a Selected Configuration

```bash
./build.sh loadconfig <defconfig-name-or-path>
./build.sh menuconfig
./build.sh saveconfig <defconfig-name-or-path>
```

Do not copy the full generated `.config` over a defconfig. The two files serve different purposes and a direct copy can preserve temporary dependency selections.

## Verify the Final .config

```bash
find out -type f -path '*/kernel/build/.config' -print

CONFIG_FILE=$(find out -type f -path '*/kernel/build/.config' | head -1)
echo "$CONFIG_FILE"
grep -n 'CONFIG_<TARGET_SYMBOL>' "$CONFIG_FILE"
```

Values are normally `y`, `m`, or not set.

## Configuration and Device Tree Must Agree

A working feature usually requires all of the following:

```text
driver source exists
  +
Kconfig is enabled
  +
Makefile includes the object
  +
Device Tree node is enabled and correct
  +
hardware wiring and power are correct
```

Build and record the log:

```bash
./build.sh kernel 2>&1 | tee /tmp/t527-kernel-build.log
```

Then search the log or generated module:

```bash
grep -i '<driver-or-module>' /tmp/t527-kernel-build.log
find out -type f -name '<module>.ko' -print
```

Built-in drivers do not produce a `.ko`; verify them through `.config`, symbols, and boot logs.
