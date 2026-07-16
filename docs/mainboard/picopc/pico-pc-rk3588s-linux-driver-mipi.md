---
sidebar_position: 11
title: Linux 驱动与 MIPI
description: Pico PC RK3588S Linux 驱动查询和 MIPI 屏配置
---

# Linux 驱动与 MIPI

## Linux 内核驱动

Linux 手册列出的驱动章节包括：

- G-sensor 驱动。
- 电容触摸屏驱动。
- 液晶屏驱动。
- 按键驱动。
- Wi-Fi/BT 模块驱动。
- 摄像头驱动。
- proc 文件系统。

## proc 常用查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## 磁盘分区大小查询

可结合以下命令查看分区和容量：

```bash
cat /proc/partitions
df -h
lsblk
```

## 配置使用 MIPI 屏

Linux 手册说明，已经调试好的液晶屏配置文件位于：

```text
kernel/arch/arm64/boot/dts/rockchip
```

可在以下文件中查看 `dsi0` 位置相关配置并参考处理：

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

调屏时建议重点检查：

- `dsi0` 节点是否启用。
- panel compatible、初始化序列和显示时序。
- reset GPIO、enable GPIO、供电 regulator。
- 背光节点和 PWM。
- 触摸 I2C、INT、RST 和坐标方向。
- U-Boot 与 kernel 阶段是否使用一致的屏参和 logo 配置。
