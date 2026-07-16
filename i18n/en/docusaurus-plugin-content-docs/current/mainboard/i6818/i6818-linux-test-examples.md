---
sidebar_position: 14
title: Linux Tests and Examples
description: i6818 Qt tests, low-level Linux development, and application examples
---

# Linux Tests and Examples

> Note: This software page reuses the x6818 software documentation flow as requested. i6818 and x6818 have similar boot/flashing flows; actual commands, source package names, and image names should follow the current i6818 SDK.

## qttest Application

The Linux manual includes qttest / Qt_demo items:

| Test Item | Description |
| --- | --- |
| LED | Test board LEDs |
| Buzzer | Test buzzer on/off |
| Backlight | Adjust backlight brightness |
| Keys | Test independent keys |
| ADC voltage | Read ADC voltage |
| Audio | Test recording and playback |
| Touchscreen | Test touch coordinates |
| UART | Test serial communication |
| Network | Test Ethernet or Wi-Fi |
| TF card | Test TF-card mount and read/write |
| USB disk | Test USB disk mount and read/write |
| Suspend/resume | Test suspend and wake-up |
| Reboot | Test reboot |
| Poweroff | Test shutdown |

## Low-level Linux Examples

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

### Mount TF Card

```bash
mkdir -p /mnt/sdcard
mount /dev/mmcblk0p1 /mnt/sdcard
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

### Memory Information

```bash
cat /proc/meminfo
free -m
```

### U-Boot TFTP Kernel Download

```bash
setenv ipaddr 192.168.1.100
setenv serverip 192.168.1.10
tftp 0x48000000 uImage
bootm 0x48000000
```

### Mount NFS Root or Directory

```bash
mount -t nfs -o nolock 192.168.1.10:/nfsroot /mnt
```

## Linux Application Examples

The manual includes:

- Hello World.
- LED test program.
- Math library call.
- Multi-thread programming.
- Multi-process programming.
- Makefile programming.
- mplayer porting.
- madplayer porting.
- gsnap screenshot tool porting.

## Hello World

```c
#include <stdio.h>

int main(void)
&#123;
    printf("Hello i6818 Linux!\\n");
    return 0;
&#125;
```

Compile and run:

```bash
gcc hello.c -o hello
./hello
```
