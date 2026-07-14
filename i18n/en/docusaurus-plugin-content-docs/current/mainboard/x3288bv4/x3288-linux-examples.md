---
sidebar_position: 12
title: Linux Development Examples
description: X3288 Linux low-level commands, application examples, and Ubuntu notes
---

# Linux Development Examples

This page keeps common Linux commands and application examples. Unrelated product lists are removed.

## MP3 Playback

Login account: `root / 123456`.

Mount TF card:

```bash
cd /
mkdir sdcard
mount /dev/mmcblk1p1 /sdcard
cd sdcard
```

Play media:

```bash
./mplayer *.avi
./mplayer *.mp3
```

## Run Programs in Background

Add `&` after the command:

```bash
./mplayer *.mp3 &
```

## Stop a Program

Use `Ctrl+C` for foreground programs, or use `kill` with the process ID for background programs.

## Screenshot

```bash
gsnap test_pic.jpg /dev/fb0
```

## Mount TF Card

```bash
mkdir /sdcard
mount /dev/mmcblk1p1 /sdcard
```

## Mount USB Disk

```bash
mkdir /udisk
mount /dev/sda4 /udisk
```

## Save System Time

Use the RTC and system date tools according to the Linux image configuration.

## Auto-start Application

Place the target application startup command in the system startup script or init configuration according to the rootfs used by the SDK.

## Application Development Examples

Typical examples include Hello World, math library calls, multithreading, multiprocessing, Makefile projects, `mplayer` porting, `madplayer` porting, and `gsnap` screenshot tool porting.
