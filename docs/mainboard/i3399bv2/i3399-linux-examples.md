---
sidebar_position: 12
title: Linux 开发示例
description: I3399 Linux 底层开发和应用开发常用示例
---

# Linux 开发示例

本页整理 Linux 系统下常用调试命令和应用开发示例，删除其他产品介绍。

## 播放 MP3

挂载存放音频文件的 TF 卡或 U 盘后，可使用播放器播放：

```bash
mkdir /sdcard
mount /dev/mmcblk1p1 /sdcard
cd /sdcard
./mplayer *.mp3
```

后台播放：

```bash
./mplayer *.mp3 &
```

## 中止程序运行

前台程序可通过 `Ctrl+C` 退出。后台程序可通过 `ps` 查找 PID 后使用 `kill` 结束：

```bash
ps
kill <PID>
```

## 屏幕抓图

```bash
gsnap test_pic.jpg /dev/fb0
```

执行后会在当前目录生成 framebuffer 截图文件。

## 挂载 TF 卡

```bash
mkdir /sdcard
mount /dev/mmcblk1p1 /sdcard
ls /sdcard
```

## 挂载 U 盘

```bash
mkdir /udisk
mount /dev/sda1 /udisk
ls /udisk
```

设备节点可能因分区不同而变化，可通过 `dmesg` 或 `ls /dev/sd*` 确认。

## 保存系统时钟

```bash
date
hwclock -w
hwclock -r
```

## 设置开机自启动

常见方式是在启动脚本中加入应用程序启动命令，例如：

```bash
vi /etc/init.d/S99app
chmod +x /etc/init.d/S99app
```

也可按 systemd、busybox init 或项目实际文件系统方式配置。

## 查看内存信息

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

交叉编译示例：

```bash
aarch64-linux-gnu-gcc hello.c -o hello
```

拷贝到主板后运行：

```bash
chmod +x hello
./hello
```

## 多线程 / 多进程 / Makefile

Linux 应用开发可按标准 POSIX 方式编写多线程和多进程程序。建议为工程编写 Makefile，并将交叉编译器、库路径、头文件路径统一配置，便于后续维护。
