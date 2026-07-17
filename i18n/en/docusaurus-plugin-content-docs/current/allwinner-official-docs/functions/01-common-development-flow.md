---
title: Common Function Development Workflow
sidebar_position: 1
description: Standard workflow used by future UART, I2C, SPI, GPIO, display, audio, and camera guides, with T527 as the primary example.
---

# Common Function Development Workflow

Every future function guide follows this workflow so that it covers Device Tree, kernel configuration, build, packaging, and target commands instead of providing isolated snippets. T527 is the primary example, while the same workflow applies to other Allwinner platforms using Longan and the independent BSP repository.

```text
confirm schematic and pins
    ↓
identify controller and pin multiplexing
    ↓
find BSP driver and compatible string
    ↓
edit SoC or board Device Tree
    ↓
enable menuconfig and save defconfig
    ↓
build the kernel
    ↓
decompile the DTB and verify output
    ↓
package and flash
    ↓
check probe, nodes, and real function on target
```

## Hardware Information

Record the interface, controller number, GPIO bank and pin, voltage domain, supply, interrupt, reset, enable signal, external device model, and bus address.

## Driver Source

```bash
cd <ANDROID_TOP>/longan

grep -Rni '<compatible-or-CONFIG-symbol>' bsp kernel device
find bsp kernel -type f -iname '*<function-keyword>*'
```

Document the driver directory, source file, Kconfig, Makefile, compatible string, and module name.

## Device Tree

Document the SoC DTSI, board DTS, pinctrl node, device node, and key properties. Prefer board-level label overrides.

## Kernel Configuration

```bash
cd <ANDROID_TOP>/longan
./build.sh menuconfig
./build.sh saveconfig
```

State the menu path, `CONFIG_` symbol, recommended `y` or `m` value, and dependencies.

## Build and DTB Verification

```bash
./build.sh kernel 2>&1 | tee /tmp/<function>-kernel-build.log

dtc -I dtb -O dts -o /tmp/final.dts <dtb-path>
grep -n -A20 -B5 '<node-name>' /tmp/final.dts
```

## Package and Flash

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
pack
```

Use the project-specific `build -p` or Longan pack hook when provided by the current branch.

## Target Verification

Each guide must include at least:

```bash
adb shell dmesg | grep -i '<keyword>'
adb shell ls -l <device-node-or-sysfs-path>
adb shell '<real-function-test-command>'
```

## Standard Failure Checklist

Check node status, pinctrl function, supply and reset sequencing, final `CONFIG_` value, driver build output, packaged DTB/module, resource conflicts, HAL permissions, and SELinux.

Suggested future files include `uart.md`, `rs485.md`, `i2c.md`, `spi.md`, `gpio.md`, `pwm.md`, `usb.md`, `ethernet.md`, `lvds.md`, `mipi-dsi.md`, `hdmi.md`, `audio.md`, `camera.md`, and `watchdog.md`. New pages are discovered automatically and do not require a `sidebars.ts` update.

## Available module guides

- [GPIO](./gpio/01-overview.md)
- [GPADC](./gpadc/01-overview.md)
- [LRADC](./lradc/01-overview.md)
- [TWI / I2C](./twi/01-overview.md)
- [SPI-NG](./spi-ng/01-overview.md)
- [UART / RS485](./uart/01-overview.md)
- [IR-RX](./ir-rx/01-overview.md)
- [RTC](./rtc/01-overview.md)
- [USB 2.0](./usb2/01-overview.md)
- [USB 3.0](./usb3/01-overview.md)
- [PCIe](./pcie/01-overview.md)
