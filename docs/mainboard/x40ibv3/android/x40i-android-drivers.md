---
sidebar_position: 4
title: Android 驱动与调试
description: x40i Android 驱动与调试
---

# Android 驱动与调试

## 驱动位置

| 功能 | 路径/文件 |
| --- | --- |
| 重力传感器 | lichee/linux-3.10/drivers/input/sensor/ |
| 触摸 | lichee/linux-3.10/drivers/input/touchscreen/gslx680/gslX680.c |
| 按键 | lichee/linux-3.10/drivers/input/keyboard/ |
| Wi-Fi/BT | lichee/linux-3.10/drivers/net/wireless/ |
| 音频 | lichee/linux-3.10/sound/soc/ |

选择与实际器件匹配的驱动，重新编译内核并打包烧录。触摸和传感器型号按板卡装配确认。

## 系统信息查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

以上命令在板端串口或 `adb shell` 中执行，用于检查启动参数、CPU、内存、分区、内核、网络和启动日志。保存当前板卡的实际输出用于排查。

## NAND 适配

NAND 方案需按器件容量裁剪 rootfs，并修改 `lichee/tools/pack/chips/sun8iw11p1/configs/a40-p1/sys_partition.fex`。分区 `size` 以 512 字节扇区为单位，建议按 16 MiB 整数倍规划；变更后完整打包并验证。
