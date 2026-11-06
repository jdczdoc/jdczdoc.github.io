---
sidebar_position: 3
title: Linux 驱动与调试
description: x3576bv3 Linux 驱动与调试
---

# Linux 驱动与调试

## 串口与 ADB

连接 UART0 Debug，建议先按 X3576 示例使用 1500000、8N1、无流控。若输出乱码，核对固件设置与转换器能力。ADB 使用 Type-C OTG，需固件启用相应服务。

```bash
adb devices
adb shell
```

## 驱动位置

| 功能 | 内核相对路径 |
| --- | --- |
| 重力传感器 | `drivers/input/sensors/accel/lis3dh.c` |
| 电容触摸 | `drivers/input/touchscreen/` |
| 显示面板 | `drivers/gpu/drm/panel/` |
| 按键 | `drivers/input/keyboard/` |
| 无线 | `drivers/net/wireless/rockchip_wlan/` |

触摸、屏幕和按键可检查 `gslx680_9tripod.c`、`panel-simple.c`、`rk_keys.c` 与 `adc-keys.c`。摄像头适配时同时检查模组设备树、CSI 连接与实际 SDK 的摄像头驱动。

## 板端信息查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
df -h
```

使用串口或 ADB 终端查询启动参数、内存、分区、网络及内核日志。分区表用于确认块设备布局，挂载后容量用 `df -h` 查看。
