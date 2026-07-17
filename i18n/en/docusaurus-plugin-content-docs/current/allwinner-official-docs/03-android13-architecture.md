---
title: Android 13 Architecture
sidebar_position: 3
description: Code distribution across the application, framework, native, HAL, and kernel layers on T527 Android 13.
---

# Android 13 Architecture

Android 13 is organized into the application, framework, native/system-service, HAL, and Linux-kernel layers. Classify a problem by layer before deciding which logs to collect or which repository to edit.

```text
Application
    ↓
Application Framework / System Service
    ↓
Native Framework / Binder / SurfaceFlinger / Media Service
    ↓
HAL
    ↓
Linux Kernel / Allwinner BSP Driver
    ↓
Hardware
```

## Common Modules and Locations

| Module | Android-side examples | Longan/BSP-side examples |
|---|---|---|
| Multimedia | `frameworks/av/media/`, `frameworks/base/media/` | CedarX/CedarC-related code and drivers |
| Display | SurfaceFlinger and `hardware/aw/display/` | Allwinner display, DRM, or DE drivers |
| Audio | AudioFlinger and the audio HAL | ALSA SoC and codec drivers |
| Camera | Camera Framework, Camera Service, and camera HAL | sensor, CSI, ISP, and media drivers |
| Wi-Fi | Wi-Fi Framework, supplicant, and Wi-Fi HAL | WLAN module and SDIO/USB drivers |
| Bluetooth | Bluetooth Framework and Bluetooth HAL | UART/USB, rfkill, and module power control |
| OTA/Recovery | recovery, update engine, and product configuration | partition layout, misc, boot, and recovery images |

Directory names vary between releases. Use searches instead of assuming a fixed path:

```bash
cd <ANDROID_TOP>

grep -Rni "camera.provider" hardware vendor device 2>/dev/null | head
grep -Rni "audio.primary" hardware vendor device 2>/dev/null | head
find longan/bsp -type d -iname '*display*' -o -iname '*camera*' -o -iname '*audio*'
```

## Identifying the Failing Layer

Kernel and hardware problems often have no device node and show probe, clock, reset, GPIO, IRQ, or timeout errors in `dmesg`.

HAL problems typically occur when the kernel device exists but Android cannot initialize it. Check `lshal`, `dumpsys`, permissions, SELinux, and VINTF configuration.

Framework and application problems occur after HAL initialization and usually appear as Java exceptions, service errors, policy errors, or incorrect overlay behavior in `logcat`.

## Basic Log Set

```bash
adb root
adb shell dmesg -w
adb logcat -b all
adb shell lshal
adb shell dumpsys
```

A complete function guide should verify both the kernel side and the Android side.
