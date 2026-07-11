---
sidebar_position: 8
title: 驱动与调试
description: Pico PC RK3588S Android 和 Linux 驱动路径及调试命令
---

# 驱动与调试

本页合并 Android 平台用户手册和 Linux 平台用户手册中的驱动路径、proc 查询命令和项目实战内容。

## 常见驱动路径

| 功能 | 参考路径 |
|---|---|
| G-sensor | `kernel/drivers/input/sensors/accel/lis3dh.c`，`hardware/rockchip/sensor/st` |
| 电容触摸屏 | `kernel/drivers/input/touchscreen/` |
| 液晶屏 | `kernel/drivers/gpu/drm/panel/`，`panel-simple.c` |
| 按键 | `kernel/drivers/input/keyboard/`，`rk_keys.c`，`adc-keys.c` |
| Wi-Fi / BT | `kernel/drivers/net/wireless/rockchip_wlan` |
| 摄像头 | `hardware/rockchip/camera/SiliconImage/isi/drv` |

## 常用 proc 查询命令

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
cat /proc/kmsg
df -h
```

## Android 项目实战

### 修改 init.rc

在 `system/core/rootdir` 目录下修改 `init.rc`，修改后重新编译并烧写对应镜像。

### 修改 U-Boot 开机 LOGO

U-Boot 和内核 LOGO 通常对应 `logo.bmp`、`logo_kernel.bmp` 等资源文件，图片格式和尺寸需要满足平台显示要求。

### 配置 MIPI 屏

MIPI 屏配置可查看 Rockchip DTS 目录，并结合当前主板的显示接口配置修改。

### 关机充电和低电预充

可参考 Rockchip 充电相关设备树节点，例如 `charge-animation` 等配置。

## Linux 项目实战

Linux 下配置 MIPI 屏时，可在以下路径查看已有屏幕配置：

```text
kernel/arch/arm64/boot/dts/rockchip
```
