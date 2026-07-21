---
title: Linux项目实战
sidebar_label: Linux项目实战
sidebar_position: 12
description: PICO2 GPIO LED和系统监控守护进程示例，以及Tina Package集成方法。
---

# Linux项目实战

## GPIO LED Demo

目录：

```text
gpio-led-demo/
├── Makefile
└── gpio_led_demo.c
```

交叉编译：

```makefile
CROSS_COMPILE ?= riscv64-unknown-linux-gnu-
CC := $(CROSS_COMPILE)gcc

all:
	$(CC) -O2 -Wall gpio_led_demo.c -o gpio_led_demo

clean:
	rm -f gpio_led_demo
```

运行前通过设备树或 sysfs/gpiod 确认目标 GPIO 没有被其他驱动占用。

## sysmon_daemon

目录：

```text
sysmon-daemon/
├── Makefile
├── main.c
├── sysmon.conf
└── S99sysmon
```

配置示例：

```ini
interval_sec = 5
log_path = /var/log/sysmon.log
```

守护进程可周期记录：

```text
CPU负载
内存
温度
磁盘
网络
关键进程
```

## 集成到 Tina Package

```text
openwrt/package/utils/<package>/
├── Makefile
└── src/
```

Package Makefile 中定义源码、依赖、编译和安装步骤，然后：

```bash
m menuconfig
m
pack
```

开机自启可使用 init 脚本或 procd 服务。应确保日志轮转和异常退出重启策略不会造成 Flash 频繁写入。
