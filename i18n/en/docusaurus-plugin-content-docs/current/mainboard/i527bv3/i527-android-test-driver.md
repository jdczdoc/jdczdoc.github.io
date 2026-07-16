---
title: Android Tests and Drivers
sidebar_position: 10
---
# Android Tests and Drivers

## Recommended test order

1. LCD, HDMI, and backlight.
2. Touchscreen and keys.
3. Audio playback, recording, and headphone detection.
4. Cameras.
5. Wi-Fi, Bluetooth, and Ethernet.
6. TF card, eMMC, and USB storage.
7. UART, I2C, SPI, CAN, GPIO, and PWM.
8. Suspend, wake-up, reboot, and long-duration stability.

## System information

```bash
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell uname -a
adb shell getprop
adb shell dmesg
```

## Display and touch

```bash
adb shell dumpsys display
adb shell dumpsys input
adb shell getevent -lp
adb shell cat /proc/interrupts
```

## Audio

```bash
adb shell cat /proc/asound/cards
adb shell tinymix
adb shell tinyplay /data/local/tmp/test.wav
adb shell tinycap /data/local/tmp/record.wav
```

## Camera

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "csi|isp|vipp|camera|sensor"
```

## Network

```bash
adb shell ip addr
adb shell ip route
adb shell dumpsys wifi
adb shell ping -c 4 <gateway>
```

## Driver configuration checklist

Driver bring-up requires checks at four levels:

- Schematic and power sequence.
- Kernel configuration.
- Device-tree nodes and pinctrl.
- Android HAL, permissions, and service configuration.

The presence of a device node alone does not prove that the function is complete. Verify interrupts, clocks, supplies, data flow, and user-space access.
