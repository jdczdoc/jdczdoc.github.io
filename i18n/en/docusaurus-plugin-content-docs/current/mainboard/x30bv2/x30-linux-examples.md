---
sidebar_position: 13
title: Linux Examples
description: X30/PX30 Linux low-level and application development examples
---

# Linux Examples

## Low-level Examples

### Play MP3

```bash
mplayer test.mp3
```

### Run in Background

```bash
./app &
```

### Stop a Program

```bash
ps
kill <pid>
killall app
```

### Screenshot

Use `gsnap` or the platform screenshot tool.

### Mount TF Card

```bash
mkdir -p /mnt/sdcard
mount /dev/mmcblk1p1 /mnt/sdcard
```

### Mount USB Disk

```bash
mkdir -p /mnt/udisk
mount /dev/sda1 /mnt/udisk
```

### Save System Clock

```bash
date
hwclock -w
hwclock -r
```

### Save Data Before Power Loss

```bash
sync
```

### Auto-start Program

Use init scripts, systemd services, or rc.local depending on the rootfs.

### Memory Information

```bash
cat /proc/meminfo
free -m
```

## Application Examples

The Linux manual includes:

- Hello World
- Math library call
- Multi-thread programming
- Multi-process programming
- Makefile programming
- mplayer porting
- madplayer porting
- gsnap screenshot tool porting

## Hello World

```c
#include <stdio.h>

int main(void)
&#123;
    printf("Hello X30 Linux!\\n");
    return 0;
&#125;
```

Compile:

```bash
gcc hello.c -o hello
./hello
```

## Makefile

```makefile
CC = gcc
TARGET = hello
SRCS = hello.c

all:
	$(CC) $(SRCS) -o $(TARGET)

clean:
	rm -f $(TARGET)
```
