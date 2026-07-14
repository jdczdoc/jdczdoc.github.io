---
sidebar_position: 13
title: Linux 示例
description: X30/PX30 Linux 底层开发示例和应用开发示例
---

# Linux 示例

## 底层开发示例

### 播放 MP3

可使用 mplayer、madplay 或系统默认播放器播放音频文件。

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

### 屏幕抓图

可使用 `gsnap` 或平台自带截图工具进行抓图。

### 挂载 TF 卡

```bash
mkdir -p /mnt/sdcard
mount /dev/mmcblk1p1 /mnt/sdcard
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

重要数据写入后建议执行同步，降低断电丢失风险：

```bash
sync
```

### 设置开机自动运行程序

可通过 init 脚本、systemd 服务或 rc.local 启动用户程序，具体取决于当前 rootfs 类型。

### 查看内存信息

```bash
cat /proc/meminfo
free -m
```

## 应用开发示例

Linux 手册包含以下应用开发示例：

- Hello World
- 数学函数库调用
- 多线程编程
- 多进程编程
- Makefile 编程
- mplayer 移植
- madplayer 移植
- gsnap 屏幕抓图工具移植

## Hello World 示例

```c
#include <stdio.h>

int main(void)
&#123;
    printf("Hello X30 Linux!\\n");
    return 0;
&#125;
```

编译：

```bash
gcc hello.c -o hello
./hello
```

## Makefile 示例

```makefile
CC = gcc
TARGET = hello
SRCS = hello.c

all:
	$(CC) $(SRCS) -o $(TARGET)

clean:
	rm -f $(TARGET)
```
