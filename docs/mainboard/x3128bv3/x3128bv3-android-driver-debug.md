---
sidebar_position: 12
title: 驱动与调试
description: X3128 Android 内核信息查询和常见项目修改
---

# 驱动与调试

本页整理 Android 内核驱动相关的常用检查方法，以及 init.rc、开机动画和 LOGO 等常见项目修改点。

## 常见驱动项

原手册列出的 Android 内核驱动方向包括：

- G-sensor 驱动。
- 电容触摸屏驱动。
- 液晶屏驱动。
- 按键驱动。
- Wi-Fi / BT 模块驱动。
- 摄像头驱动。
- VGA 驱动。
- HDMI 驱动。
- proc 文件系统信息查询。

## proc 文件系统查询

查看启动环境变量：

```bash
cat /proc/cmdline
```

查看 CPU 信息：

```bash
cat /proc/cpuinfo
```

查看内存信息：

```bash
cat /proc/meminfo
```

查看磁盘分区：

```bash
cat /proc/partitions
```

查看内核版本：

```bash
cat /proc/version
```

查看网络设备：

```bash
cat /proc/net/dev
```

查看内核启动信息：

```bash
cat /proc/kmsg
```

## 修改 init.rc

永久修改方式：在 `system/core/rootdir` 目录下修改 `init.rc`，然后重新编译 system 分区：

```bash
./mk.sh -s
```

如果编译后没有生效，可先删除 out 目录下旧的 `init.rc` 再重新编译。

临时修改方式：`init.rc` 默认位于 ramdisk 中，而 ramdisk 会被打包到 `boot.img`。因此临时修改时需要先解包 `boot.img`，修改 ramdisk 内容后再重新打包。

## 修改开机动画

Android 默认开机动画可以定制。一般需要替换系统中的开机动画资源，再重新打包对应分区。

## 修改 U-Boot 开机 LOGO

Rockchip 官方 U-Boot 会读取 kernel 目录下的 `logo.bmp` 和 `logo_kernel.bmp`：

- `logo.bmp`：用于 U-Boot 阶段开机 LOGO。
- `logo_kernel.bmp`：用于内核阶段 LOGO。

如果要只显示一幅图，可删除 `logo_kernel.bmp`。如果更换 U-Boot LOGO，需要将图片转换为 BMP 格式，并转换为 8bit 模式后替换 `kernel/logo.bmp`。

## 修改内核 LOGO

内核 LOGO 也需要转换为 BMP，并在 Linux 下使用 GIMP 等工具进行压缩处理。原手册说明默认 Rockchip 方案的内核 LOGO 分辨率不高，颜色丰富时容易失真。如果需要完美显示，建议使用 Linux 标准开机 LOGO 方案。

## 配置 MIPI 屏

已调通的 MIPI 屏配置文件位于：

```text
kernel/arch/arm/boot/dts/lcd-mipi-7inch-wy070ml.dtsi
```

更换屏幕时，可根据新屏参数修改该文件。
