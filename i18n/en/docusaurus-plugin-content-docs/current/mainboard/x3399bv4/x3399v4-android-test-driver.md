---
sidebar_position: 9
title: Android Test and Driver
description: X3399V4 Android test application, driver entries, and proc queries
---

# Android Test and Driver

:::note
This page reuses the previously prepared I3399 / X3399 software documentation template. For X3399V4, actual source package names, image names, partition files, and tool versions should follow the current SDK and release package.
:::

This page keeps the items useful for hardware verification and driver debugging.

## Android Test Application

The test application is used during development and production to verify hardware functions.

### LCD and Touch

- LCD test: switch colors to check missing colors, dead pixels, and backlight.
- Touch test: draw diagonal lines to verify touch response and coordinate mapping.

### LED, Buzzer, Backlight, and Keys

- LED: click the LED icon to toggle the corresponding LED.
- Buzzer: press and hold the test button to sound the buzzer.
- Backlight: move the slider and check brightness changes.
- Keys: press each key and check whether the UI reports press/release events.

### Battery, ADC, and Sensors

Battery, ADC, G-sensor, gyro, compass, and light-sensor pages verify the corresponding hardware and HAL/driver configuration.

### Audio and Camera

Use the audio test for speaker, headset, MIC, and LINE IN. Use the Camera test to verify preview output and driver matching.

### Network and Serial Port

Network tests verify Wi-Fi and Ethernet. For serial testing, short TXD and RXD and check self-send/self-receive.

## Kernel Driver Entries

Common driver areas include:

- G-sensor
- Light sensor
- Capacitive touch
- LCD
- Keys
- Wi-Fi / Bluetooth
- Camera
- HDMI
- proc filesystem queries

## Common proc Queries

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
uname -a
ifconfig
ip addr
dmesg
```

## Android Project Practice

Common customization items include `init.rc`, boot animation, U-Boot logo, and kernel logo. It is recommended to keep these changes as source patches and verify them through a full build and flash process.
