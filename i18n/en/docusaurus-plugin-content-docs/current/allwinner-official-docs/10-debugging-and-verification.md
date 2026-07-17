---
title: Target Debugging and Verification
sidebar_position: 10
description: Verify T527 source changes, kernel configuration, DTB, firmware, probe logs, and Android services.
---

# Target Debugging and Verification

A successful build does not prove that the new configuration entered the firmware or that the target driver works. Verify the source, build output, packaged image, and runtime state separately.

## Source and Configuration

```bash
cd <ANDROID_TOP>
git status --short
git diff -- longan/bsp longan/device longan/kernel device vendor hardware

cd longan
cat .buildconfig
CONFIG_FILE=$(find out -type f -path '*/kernel/build/.config' | head -1)
grep -n 'CONFIG_<TARGET_SYMBOL>' "$CONFIG_FILE"
```

## DTB and Modules

```bash
find out -type f -name '*.dtb' -print
find out -type f -name '*.ko' -print | grep -i '<module-keyword>'

dtc -I dtb -O dts -o /tmp/final.dts <dtb-path>
grep -n -A20 -B5 '<node-or-compatible>' /tmp/final.dts
```

## Firmware Identity

```bash
ls -lh --time-style=long-iso <firmware-path>
sha256sum <firmware-path>

adb shell getprop ro.build.fingerprint
adb shell getprop ro.build.date.utc
adb shell uname -a
adb shell cat /proc/version
```

## Kernel Logs

```bash
adb root
adb shell dmesg | grep -i '<driver-or-device>'
adb shell dmesg -w
```

Look for probe failures, deferred probe, clock/reset/pinctrl/regulator errors, IRQ failures, timeouts, and I/O errors.

## Android Logs and Services

```bash
adb logcat -b all
adb shell dumpsys
adb shell lshal
```

## Device Nodes and Driver Binding

```bash
adb shell ls -l /dev
adb shell ls -l /sys/class
adb shell ls -l /sys/bus/platform/drivers
adb shell 'find /sys/bus/platform/drivers -maxdepth 2 -type l 2>/dev/null | head -100'
```

## Runtime Device Tree

```bash
adb shell 'find /proc/device-tree -maxdepth 5 -type f 2>/dev/null | head -100'
adb shell 'tr -d "\000" < /proc/device-tree/<node-path>/status'
```

## Modules and Kernel Configuration

```bash
adb shell cat /proc/modules
adb shell lsmod
adb shell zcat /proc/config.gz 2>/dev/null | grep 'CONFIG_<TARGET_SYMBOL>'
```

Use the generated Longan `.config` when `/proc/config.gz` is unavailable.

## Recommended Debugging Order

```text
hardware power and pins
    ↓
Device Tree and pinctrl
    ↓
menuconfig and CONFIG symbol
    ↓
driver included in the build
    ↓
DTB/module included in firmware
    ↓
kernel probe log
    ↓
HAL and Android service
    ↓
application behavior
```

Change one variable at a time and preserve the patch, build log, and boot log for every test.
