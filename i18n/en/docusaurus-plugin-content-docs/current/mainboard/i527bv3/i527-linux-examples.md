---
title: Linux Examples
sidebar_position: 12
---
# Linux Examples

## System information

```bash
uname -a
cat /proc/cpuinfo
cat /proc/meminfo
lsblk
df -h
dmesg
```

## TF card

After inserting a card:

```bash
lsblk
dmesg | tail -n 30
```

Manual mount example:

```bash
mkdir -p /mnt/tf
mount /dev/mmcblk1p1 /mnt/tf
ls -al /mnt/tf
```

Use the device name reported by `lsblk` on the actual system.

## USB storage

```bash
mkdir -p /mnt/udisk
lsblk
mount /dev/sda1 /mnt/udisk
ls -al /mnt/udisk
```

## Audio playback

```bash
aplay -l
aplay test.wav
```

Direct MP3 playback depends on the codecs and player packages included in the root file system. `aplay` natively handles WAV/PCM audio.

## Ethernet

```bash
ip link show
ip addr show eth0
ip route
ethtool eth0
ping -c 4 <gateway>
```

## UART

```bash
stty -F /dev/ttyS1 115200 cs8 -cstopb -parenb -ixon -ixoff
cat /dev/ttyS1
echo "I527BV3 UART test" > /dev/ttyS1
```

Adjust the device node and pin multiplexing according to the device tree.

## GPIO and interrupts

```bash
cat /sys/kernel/debug/gpio
cat /proc/interrupts
```

On newer kernels, prefer the GPIO character-device interface and `libgpiod` tools.
