---
sidebar_position: 23
title: FAQ
description: x881 FAQ
---

# FAQ

## Which products suit X881?

AI glasses, voice/vision devices, AI streaming cameras and handheld cameras. Validate performance, video modes and power with the actual hardware/firmware.

## How are V881 and JL7018 divided?

V881 handles Linux, multimedia and primary applications; JL7018 supports low-power wake and its audio expansion. Check each device microphone, speaker, GPIO and UART resources separately.

## How should memory be checked?

The hardware memory field says 128 KB and the Linux manual includes generic capacity examples. Verify board components, boot logs, /proc/meminfo and ramparser; budget applications using measured available memory.

## Which lunch board should be selected?

The supplied manual specifies v861-9tripod_aiglass-tina. For another SDK release, check the actual lunch list, README and delivery version.

## Why is the display lit but blank?

Check DBI-to-SPI adaptation, panel power, reset and backlight, then CS/DC, SPI mode, initialization and pixel format.

## How should the camera be debugged?

Check power → MCLK/reset → I2C ID → MIPI lanes → VIN/ISP → application/encoding.

## How should flashing failures be diagnosed?

Check the USB data cable, power and UsbDriver, and confirm PhoenixSuit detection. For no boot after flashing, verify board target, storage/partitions and full UART logs.

## How can quick_config changes be reverted?

Review the tool output and git diff and restore the changed files; there is no universal undo command. Rebuild/package afterward.

## Why can recording exhaust storage?

Without an external mount, writes land in the rootfs overlay. Check mounts, df and the actual destination before recording.

## How should slow builds be investigated?

Check CPU, RAM, swap and disk I/O before changing -j. Network shares, hard disks, memory shortage and serial packaging can be bottlenecks.

```bash
nproc
free -h
df -h
vmstat 1
# If sysstat is installed
iostat -xz 1
```
