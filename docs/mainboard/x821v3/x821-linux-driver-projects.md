---
title: Linux驱动与项目实战
sidebar_position: 17
description: "V821 Linux驱动集成、设备树、GPIO程序和守护进程开发"
---

# Linux驱动与项目实战

## 驱动集成结构

新增驱动通常需要：

```text
drivers/vendor/mydevice/
├── Kconfig
├── Makefile
└── mydevice.c
```

上级`Kconfig`和`Makefile`还要引用该目录。驱动可内建`=y`或编译为模块`=m`。

## 设备树匹配

```dts
mydevice@10000000 {
    compatible = "vendor,mydevice";
    reg = <0x0 0x10000000 0x0 0x1000>;
    interrupts = <...>;
    clocks = <&ccu ...>;
    resets = <&ccu ...>;
    pinctrl-names = "default";
    pinctrl-0 = <&mydevice_pins>;
    status = "okay";
};
```

驱动通过`of_match_table`与`compatible`匹配，在`probe()`中获取寄存器、中断、时钟、复位、GPIO和电源资源。

## 调试接口

- `/dev`：read/write/ioctl/poll正式接口。
- sysfs：少量属性和状态。
- debugfs：开发调试，不作为稳定ABI。
- procfs：兼容旧接口，新功能优先sysfs/debugfs。
- netlink：事件推送和控制消息。

## GPIO LED应用示例

新内核更推荐GPIO character device/libgpiod；若当前SDK仍启用sysfs GPIO，可临时测试：

```bash
echo 102 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio102/direction
echo 1 > /sys/class/gpio/gpio102/value
```

GPIO编号只是示例，必须从X821设备树和原理图确认实际LED引脚。

交叉编译Makefile：

```make
CROSS_COMPILE ?= riscv64-unknown-linux-gnu-
CC := $(CROSS_COMPILE)gcc
CFLAGS := -Wall -O2

all: gpio_led_demo

gpio_led_demo: src/gpio_led_demo.c
	$(CC) $(CFLAGS) -o $@ $<

clean:
	rm -f gpio_led_demo
```

## 系统监控守护进程

守护进程可周期读取：

```text
/proc/stat
/proc/meminfo
/proc/uptime
/sys/class/thermal/
```

设计时应包含日志轮转、信号退出、配置校验、看门狗心跳和写盘频率限制。V821存储空间有限，不要无限增长日志。

## 集成到SDK

将应用封装为OpenWrt package，安装到`/usr/bin`，配置文件放`/etc`，init脚本放`/etc/init.d`。这样能被menuconfig、依赖管理、rootfs打包和版本控制统一管理。
