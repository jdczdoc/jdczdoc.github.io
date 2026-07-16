---
title: Linux文件系统与Qt状态
sidebar_position: 11
description: "X507 Buildroot文件系统、挂载目录、调试工具和Qt支持状态"
---

# Linux文件系统与Qt状态

## Buildroot文件系统

Linux SDK使用Buildroot生成根文件系统：

```bash
./build.sh buildroot
```

完成后可检查Buildroot输出目录和最终镜像：

```bash
find buildroot -maxdepth 3 -type d | head
find out -maxdepth 3 -type f | sort
```

实际输出目录由当前SDK配置决定。

## 常用文件系统检查

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

## 可移动存储

TF卡或U盘插入后，先通过`dmesg`和`lsblk`确认设备节点，再创建挂载点：

```bash
mkdir -p /mnt/tf /mnt/usb
mount /dev/mmcblk1p1 /mnt/tf
mount /dev/sda1 /mnt/usb
```

设备节点会随分区和USB设备数量变化，不应固定写死。

## 音频工具

```bash
aplay -l
aplay test.wav
```

MP3是否可直接播放取决于根文件系统中是否集成对应解码器。`aplay`本身主要用于PCM/WAV。

## Qt支持状态

硬件手册的软件资源表将“Linux 4.9 + Qt”一列的大部分功能标为“即将支持”，并没有给出完整Qt根文件系统、Qt版本和交叉编译流程。因此：

- 不能仅根据该手册认定现有SDK已经完整支持Qt。
- 应在交付SDK中检查Buildroot的Qt5/Qt6配置、GPU/DRM/EGL后端和触摸输入插件。
- 若SDK未启用Qt，需要在Buildroot中重新配置并验证依赖、字体、输入法和硬件加速。

## 建议验证项

- DRM/KMS或Framebuffer显示节点。
- EGL/OpenGL ES库是否完整。
- tslib/libinput/evdev触摸链路。
- ALSA声卡和混音配置。
- 字体、中文显示和时区数据。
- Qt应用的自启动和看门狗策略。
