---
title: Linux Filesystem and Qt Status
sidebar_position: 11
description: "X507 Buildroot filesystem, mount points, diagnostic tools, and Qt support status"
---

# Linux Filesystem and Qt Status

## Buildroot Filesystem

The Linux SDK uses Buildroot to generate the root filesystem:

```bash
./build.sh buildroot
```

Inspect the Buildroot output and final images after the build:

```bash
find buildroot -maxdepth 3 -type d | head
find out -maxdepth 3 -type f | sort
```

The actual output directories depend on the active SDK configuration.

## Common Filesystem Checks

```bash
cat /proc/version
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
mount
df -h
lsblk
ip addr
```

## Removable Storage

After inserting a TF card or USB drive, identify the node with `dmesg` and `lsblk`, then mount it:

```bash
mkdir -p /mnt/tf /mnt/usb
mount /dev/mmcblk1p1 /mnt/tf
mount /dev/sda1 /mnt/usb
```

Device names vary with partitioning and the number of USB devices and must not be hard-coded without checking.

## Audio Tools

```bash
aplay -l
aplay test.wav
```

Direct MP3 playback requires a decoder in the root filesystem; `aplay` is primarily a PCM/WAV tool.

## Qt Support Status

In the hardware manual, most entries in the “Linux 4.9 + Qt” column are marked as planned. The manual does not provide a complete Qt root filesystem, Qt version, or cross-build procedure. Therefore:

- Do not assume that the delivered SDK has complete Qt support solely from this manual.
- Check Buildroot for Qt5/Qt6 configuration, GPU/DRM/EGL backends, and touch-input plugins.
- When Qt is disabled, enable it in Buildroot and verify dependencies, fonts, input methods, and hardware acceleration.

## Recommended Validation

- DRM/KMS or framebuffer display nodes.
- Complete EGL/OpenGL ES libraries.
- tslib/libinput/evdev touch path.
- ALSA cards and mixer configuration.
- Fonts, Chinese glyphs, and timezone data.
- Application autostart and watchdog strategy.
