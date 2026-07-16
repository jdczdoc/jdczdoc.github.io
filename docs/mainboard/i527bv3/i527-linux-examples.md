---
title: Linux 应用示例
sidebar_position: 12
---
# Linux 应用示例

## 查看系统信息

```bash
uname -a
cat /proc/cpuinfo
cat /proc/meminfo
lsblk
df -h
dmesg
```

## TF 卡

插入 TF 卡后确认设备节点：

```bash
lsblk
dmesg | tail -n 30
```

手工挂载示例：

```bash
mkdir -p /mnt/tf
mount /dev/mmcblk1p1 /mnt/tf
ls -al /mnt/tf
```

设备节点应以实际 `lsblk` 输出为准。

## U 盘

```bash
mkdir -p /mnt/udisk
lsblk
mount /dev/sda1 /mnt/udisk
ls -al /mnt/udisk
```

## 音频播放

```bash
aplay -l
aplay test.wav
```

MP3 是否可以直接播放取决于文件系统中是否集成对应解码器。`aplay` 原生用于 WAV/PCM 音频。

## 以太网

```bash
ip link show
ip addr show eth0
ip route
ethtool eth0
ping -c 4 <gateway>
```

## 串口

```bash
stty -F /dev/ttyS1 115200 cs8 -cstopb -parenb -ixon -ixoff
cat /dev/ttyS1
echo "I527BV3 UART test" > /dev/ttyS1
```

串口节点和复用引脚需根据实际设备树调整。

## GPIO 与中断

```bash
cat /sys/kernel/debug/gpio
cat /proc/interrupts
```

较新的内核优先使用 GPIO character device 与 `libgpiod` 工具。
