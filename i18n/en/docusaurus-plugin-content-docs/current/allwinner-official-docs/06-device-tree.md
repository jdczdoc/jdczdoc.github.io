---
title: Device Tree Configuration
sidebar_position: 6
description: T527 SoC-level and board-level Device Tree locations, overrides, build, and verification.
---

# Device Tree Configuration

Device Tree describes CPUs, buses, peripherals, registers, interrupts, GPIOs, clocks, and resets. The bootloader passes the DTB to Linux, which creates platform, I2C, SPI, and other devices from it.

## T527 Device Tree Layers

```text
SoC common DTSI
    ↓
platform/controller DTSI
    ↓
board.dts
    ↓
DTC produces DTB
    ↓
bootloader passes DTB to Linux
```

T527 commonly uses the SoC identifier `sun55iw3p1`. A common SoC-level path is:

```text
longan/bsp/configs/linux-5.15/sun55iw3p1.dtsi
```

Board files commonly use one of these layouts:

```text
longan/device/config/chips/t527/configs/<BOARD>/board.dts
longan/device/config/chips/t527/configs/<BOARD>/linux-5.15/board.dts
```

Find the actual files first:

```bash
cd <ANDROID_TOP>/longan

find bsp/configs/linux-5.15 device/config/chips/t527 \
    -type f \( -name '*.dts' -o -name '*.dtsi' \) \
    -print | sort
```

## Editing Rules

- Put configuration shared by every board in the SoC-level DTSI.
- Put board-specific pinctrl, GPIO, supply, reset, enable, and panel parameters in `board.dts`.
- Prefer overriding a labelled node with `&label` instead of copying an entire SoC node.

```dts
&uart7 {
        pinctrl-names = "default", "sleep";
        pinctrl-0 = <&uart7_pins_a>;
        pinctrl-1 = <&uart7_pins_sleep>;
        status = "okay";
};
```

Common properties include `compatible`, `reg`, `interrupts`, `clocks`, `resets`, `pinctrl-0`, supply references, and `status`.

## Find Nodes and Drivers

```bash
grep -Rni "uart7" bsp/configs/linux-5.15 device/config/chips/t527
grep -Rni "uart7:" bsp/configs/linux-5.15 device/config/chips/t527
grep -Rni 'compatible.*sunxi.*uart' bsp/drivers kernel/linux-5.15
```

## Build

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
find out -type f -name '*.dtb' -print
```

## Decompile the Actual DTB

```bash
dtc -I dtb -O dts \
    -o /tmp/t527-final.dts \
    <actual-generated-DTB>

grep -n -A20 -B5 "uart7" /tmp/t527-final.dts
```

Do not stop at checking the source file. Verify the DTB that is actually packaged.

## Runtime Device Tree

```bash
adb root
adb shell 'cat /proc/device-tree/model 2>/dev/null'
adb shell 'find /proc/device-tree -maxdepth 4 -type f 2>/dev/null | head'
```

Read a string property without its trailing NUL byte:

```bash
adb shell 'tr -d "\000" < /proc/device-tree/<node-path>/status'
```

Only after the source, generated DTB, and runtime Device Tree agree should driver probe debugging continue.
