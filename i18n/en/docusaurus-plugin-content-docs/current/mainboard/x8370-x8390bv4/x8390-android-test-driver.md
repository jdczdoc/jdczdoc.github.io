---
title: Android Tests and System Information
sidebar_position: 8
description: X8390/X8370 Android hardware tests and common system-information commands.
---

# Android Tests and System Information

## Hardware Test Application

The test application is intended for engineering validation and production testing.

### LCD and Touch

![LCD test](./android-test-lcd.jpg)

![Touch test](./android-test-touch.jpg)

- LCD: switch solid colors to check dead pixels, bright pixels, color shift, and missing channels.
- Touch: draw lines and diagonals to check continuity and edge coverage.

### LED, Buzzer, and Backlight

![LED test](./android-test-led.jpg)

![Buzzer test](./android-test-buzzer.jpg)

![Backlight test](./android-test-backlight.jpg)

### Keys and Battery

![Key test](./android-test-key.jpg)

![Battery test](./android-test-battery.jpg)

### ADC and Gravity Sensor

![ADC test](./android-test-adc.jpg)

![Gravity-sensor test](./android-test-gsensor.jpg)

### Audio and Camera

![Audio test](./android-test-audio.jpg)

![Camera test](./android-test-camera.jpg)

### Network and Storage

![Wi-Fi test](./android-test-wifi.jpg)

![Network test](./android-test-network.jpg)

![UART test](./android-test-uart.jpg)

![TF-card test](./android-test-tf.jpg)

![USB-drive test](./android-test-usb.jpg)

Short TXD and RXD together for UART loopback. Insert the target TF card or USB drive before starting storage tests.

## Common System Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

For a continuous kernel message stream:

```bash
cat /proc/kmsg
```

## Driver Source Note

MT8390/MT8370 is a MediaTek platform. Driver paths, kernel versions, and module names vary with the SDK release. Trace the current device tree, `kernel/drivers/`, and build configuration instead of using examples from a different SoC platform.
