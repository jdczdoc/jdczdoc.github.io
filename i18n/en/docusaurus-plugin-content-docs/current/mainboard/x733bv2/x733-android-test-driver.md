---
title: Android Testing and Drivers
sidebar_position: 10
---
# Android Testing and Drivers

## Recommended test order

1. DC/battery power, reset, BOOT and power keys;
2. MIPI DSI/eDP, HDMI OUT and backlight;
3. Touch, volume keys and external keys;
4. Speakers, microphones and headphone;
5. MIPI camera and HDMI IN;
6. Wi-Fi, Bluetooth and Gigabit Ethernet;
7. TF card, eMMC, USB storage and M.2;
8. USB 2.0 hub, USB 3.0, suspend/wake and long-duration stability.

## System information

```bash
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell uname -a
adb shell getprop
adb shell dmesg
```

## Display, touch and keys

```bash
adb shell dumpsys display
adb shell dumpsys input
adb shell getevent -lp
adb shell cat /proc/interrupts
```

Use solid-color LCD tests for missing colors, bad pixels and flicker. Touch testing must cover edges, orientation, multi-touch and interrupt stability.

## Audio

```bash
adb shell cat /proc/asound/cards
adb shell tinymix
adb shell tinyplay /data/local/tmp/test.wav
adb shell tinycap /data/local/tmp/record.wav
```

Speaker outputs are amplified and microphones are differential. A no-audio issue may involve codec routing, amplifier enable, headphone detection, HAL or SELinux.

## Camera and HDMI input

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "lt6911|mipi|csi|isp|vipp|camera|sensor"
```

The presence of `/dev/video*` does not prove a working pipeline. Verify format, resolution, frame rate, lane rate, frame synchronization and sustained streaming.

## Network and wireless

```bash
adb shell ip addr
adb shell ip route
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell ping -c 4 <gateway>
```

## USB and storage

```bash
adb shell lsusb
adb shell lsblk
adb shell cat /proc/partitions
adb shell dmesg | grep -iE "usb|xhci|ehci|hub|mmc|sd|nvme|pcie"
```

## Driver integration checklist

Validate all layers together:

- Schematic, power rails and sequencing;
- Kernel configuration and modules;
- Device-tree nodes, clocks, resets, regulators and pinctrl;
- Android HAL, permissions, services and application calls;
- Interrupt counts, real data flow and long-term stability.

A device node alone does not prove functional hardware; validate actual data transfer.
