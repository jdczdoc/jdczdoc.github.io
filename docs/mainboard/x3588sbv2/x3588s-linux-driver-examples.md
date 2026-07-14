---
sidebar_position: 10
title: Linux 驱动与调试
description: X3588S mini ITX Linux 驱动入口、proc 查询和开发调试示例
---

# Linux 驱动与调试

本页整理 Linux 平台常用驱动入口、proc 查询和调试命令。

## Linux 内核驱动

手册中的驱动入口包括：

- G-sensor 驱动
- 电容触摸屏驱动
- 液晶屏驱动
- 按键驱动
- WIFI/BT 模块驱动
- 摄像头驱动
- proc 文件系统

## proc 文件系统查询

### 启动环境变量

```bash
cat /proc/cmdline
```

### CPU 信息

```bash
cat /proc/cpuinfo
```

### 内存信息

```bash
cat /proc/meminfo
free -m
```

### 磁盘分区信息

```bash
cat /proc/partitions
lsblk
```

### 内核版本

```bash
cat /proc/version
uname -a
```

### 网络设备

```bash
ifconfig
ip addr
```

### 内核启动信息

```bash
dmesg
dmesg | grep -i error
```

## 磁盘分区大小查询

```bash
df -h
lsblk
cat /proc/partitions
```

## 配置使用 MIPI 屏

配置 MIPI 屏通常需要确认：

- 屏幕供电和背光电源是否正确。
- 复位脚、使能脚、背光 PWM 脚是否与设备树一致。
- DSI lane 数、时钟、极性、初始化命令是否与屏幕规格书一致。
- 触摸屏 I2C 地址、中断脚和复位脚是否正确。
- 启动后查看 `dmesg` 中 panel、dsi、backlight、touch 相关日志。

## 串口调试

调试串口通常使用 USB 转串口连接到主板调试口。串口工具可使用 SecureCRT、minicom、picocom 或 kermit。常用 Linux 命令：

```bash
sudo picocom -b 1500000 /dev/ttyUSB0
```

退出 picocom：先按 `Ctrl+a`，再按 `Ctrl+q`。
