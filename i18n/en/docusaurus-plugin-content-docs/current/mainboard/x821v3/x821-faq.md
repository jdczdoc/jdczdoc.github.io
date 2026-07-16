---
title: FAQ
sidebar_position: 18
description: "Common X821V30 hardware, provisioning, display, camera, and development questions"
---

# FAQ

## What Products Fit the X821?

It is suitable for AI toys, desktop agents, low-power doorbells, smart locks, IPC devices, voice/vision terminals, and products with a small SPI display. With 64MB memory, it is best for tightly scoped embedded products rather than a general-purpose desktop Linux environment.

## Does It Support Dual-band Wi-Fi?

The hardware manual specifies 2.4GHz 1T1R. Do not design it as a dual-band product. Verify BLE behavior with the delivered wireless firmware and application.

## How Is Voice Interruption/Wake Implemented?

It combines dual-microphone capture, the audio codec, voice preprocessing/wake algorithms, and the application state machine. Real interruption quality also depends on echo cancellation, speaker volume, microphone placement, and model tuning.

## Which Provisioning Methods Are Supported?

The documentation lists Wi-Fi provisioning, camera QR-code provisioning, and acoustic provisioning. Bluetooth provisioning is release-dependent and must be verified with the current application image.

## How Do I Build an AI Agent?

A basic flow is:

```text
Microphone/Camera -> local preprocessing -> Wi-Fi -> cloud or LAN model
                                         -> TTS/audio playback
                                         -> SPI LCD expression/status UI
```

Plan for network loss, service authentication, acoustic echo, memory pools, caching, and OTA updates.

## The Camera Produces No Image. Where Should I Start?

Check power, MCLK, reset, and I2C ID first, then MIPI lane/rate settings, VIN/ISP link creation, and MPP configuration. Do not start by tuning ISP parameters before the sensor link is valid.

## The SPI Panel Is White. What Should I Check?

Verify panel power, backlight, RESET, CS/DC, SPI mode, initialization commands, Sleep Out, and Display On. Reading a panel ID does not prove that the initialization sequence is correct.

## Why Is the Build Still Slow with More Jobs?

Identify the bottleneck first:

```bash
nproc
free -h
iostat -xz 1
vmstat 1
```

Higher `-j` helps only parallel steps. A hard disk, network filesystem, memory pressure, or a serial packaging step can make 32 jobs only marginally faster than 12.

## How Do I Undo quick_config Changes?

There is no universal undo operation. Use Git:

```bash
git status
git diff
git restore <files>
```

Run one-way storage changes on a dedicated branch.

## Flashing Succeeds but the Board Does Not Boot

Verify the lunch target, flash type, partition table, BOOT0 storage settings, RTOS image, and U-Boot device tree. Capture the complete UART0 log from power-on; it is more useful than observing the display alone.
