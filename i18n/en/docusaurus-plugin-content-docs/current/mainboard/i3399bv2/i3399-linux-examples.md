---
sidebar_position: 12
title: Linux Development Examples
description: I3399 Linux command and application development examples
---

# Linux Development Examples

This page summarizes common Linux debugging commands and application-development examples.

## Play MP3

```bash
mkdir /sdcard
mount /dev/mmcblk1p1 /sdcard
cd /sdcard
./mplayer *.mp3
```

Run in background:

```bash
./mplayer *.mp3 &
```

## Stop a Program

```bash
ps
kill <PID>
```

## Screenshot

```bash
gsnap test_pic.jpg /dev/fb0
```

## Mount TF Card

```bash
mkdir /sdcard
mount /dev/mmcblk1p1 /sdcard
ls /sdcard
```

## Mount USB Disk

```bash
mkdir /udisk
mount /dev/sda1 /udisk
ls /udisk
```

## System Clock

```bash
date
hwclock -w
hwclock -r
```

## Auto-start Application

```bash
vi /etc/init.d/S99app
chmod +x /etc/init.d/S99app
```

## Memory Information

```bash
cat /proc/meminfo
free -m
```

## Hello World

```c
#include <stdio.h>

int main(void)
{
    printf("Hello World!\\n");
    return 0;
}
```

Cross compile:

```bash
aarch64-linux-gnu-gcc hello.c -o hello
chmod +x hello
./hello
```

## Threads, Processes, and Makefile

Use standard POSIX APIs for multithread and multiprocess applications. A Makefile is recommended to manage compiler prefix, include paths, library paths, and output files.
