---
title: Linux内核驱动开发
sidebar_label: Linux内核驱动开发
sidebar_position: 11
description: PICO2 Linux驱动架构、Kconfig/Makefile、Device Tree和用户空间接口。
---

# Linux内核驱动开发

## 驱动集成方式

- `=y`：内建进内核，适合启动早期和基础控制驱动。
- `=m`：编译为 `.ko`，适合独立加载和调试。

驱动目录一般位于：

```text
bsp/drivers/
kernel/linux-5.4-ansc/drivers/
```

新增驱动应同时维护：

```text
Kconfig
Makefile
源文件
设备树绑定
板级节点
```

## Device Tree 常用属性

```text
compatible
reg
interrupts
clocks / clock-names
resets / reset-names
pinctrl-0 / pinctrl-names
gpios
status
```

Platform 驱动框架：

```c
static const struct of_device_id demo_of_match[] = {
    { .compatible = "tripod,pico2-demo" },
    { }
};

static struct platform_driver demo_driver = {
    .probe = demo_probe,
    .remove = demo_remove,
    .driver = {
        .name = "pico2-demo",
        .of_match_table = demo_of_match,
    },
};
module_platform_driver(demo_driver);
```

## 编译和加载

```bash
m kernel
find out -name '*.ko'

insmod demo.ko
dmesg | tail
lsmod
rmmod demo
```

## 用户空间接口

常见方式：

- 字符设备：`open/read/write/ioctl/poll`
- `sysfs`
- `debugfs`
- `procfs`
- Netlink
- V4L2、ALSA、Input、IIO 等标准子系统

优先使用内核标准子系统，避免为已有功能重复创建私有字符设备。
