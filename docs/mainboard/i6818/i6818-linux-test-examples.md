---
sidebar_position: 14
title: Linux 测试与示例
description: i6818 Qt 测试程序、Linux 底层开发和应用开发示例
---

# Linux 测试与示例

> 说明：本页软件流程按前面整理的 x6818 软件文档沿用。i6818 与 x6818 启动/烧录流程相近，实际命令、源码包名和镜像名以当前 i6818 SDK 为准。

## qttest 测试程序

Linux 手册包含 qttest / Qt_demo 测试程序，测试项包括：

| 测试项 | 说明 |
| --- | --- |
| LED | 测试开发板 LED |
| 蜂鸣器 | 测试蜂鸣器开关 |
| 背光 | 调节背光亮度 |
| 按键 | 测试独立按键 |
| ADC 电压 | 读取 ADC 电压 |
| 音频 | 测试录放音 |
| 触摸屏 | 测试触摸坐标 |
| 串口 | 测试串口通信 |
| 网络 | 测试以太网或 Wi-Fi |
| TF 卡 | 测试 TF 卡挂载与读写 |
| U 盘 | 测试 U 盘挂载与读写 |
| 休眠唤醒 | 测试 suspend/resume |
| 重启 | 测试 reboot |
| 关机 | 测试 poweroff |

## Linux 底层开发示例

### 播放 MP3

```bash
mplayer test.mp3
```

### 后台运行程序

```bash
./app &
```

### 中止程序运行

```bash
ps
kill <pid>
killall app
```

### 挂载 TF 卡

```bash
mkdir -p /mnt/sdcard
mount /dev/mmcblk0p1 /mnt/sdcard
```

### 挂载 U 盘

```bash
mkdir -p /mnt/udisk
mount /dev/sda1 /mnt/udisk
```

### 保存系统时钟

```bash
date
hwclock -w
hwclock -r
```

### 掉电保存数据到 Flash

```bash
sync
```

### 查看内存信息

```bash
cat /proc/meminfo
free -m
```

### U-Boot 使用 TFTP 下载内核

```bash
setenv ipaddr 192.168.1.100
setenv serverip 192.168.1.10
tftp 0x48000000 uImage
bootm 0x48000000
```

### 挂载 NFS 网络文件系统

```bash
mount -t nfs -o nolock 192.168.1.10:/nfsroot /mnt
```

## Linux 应用开发示例

手册中的应用开发示例包括：

- Hello World。
- LED 测试程序。
- 数学函数库调用。
- 多线程编程。
- 多进程编程。
- Makefile 编程。
- mplayer 移植。
- madplayer 移植。
- gsnap 屏幕抓图工具移植。

## Hello World

```c
#include <stdio.h>

int main(void)
&#123;
    printf("Hello i6818 Linux!\\n");
    return 0;
&#125;
```

编译运行：

```bash
gcc hello.c -o hello
./hello
```
