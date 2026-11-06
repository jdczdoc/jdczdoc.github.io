---
sidebar_position: 3
title: Linux 驱动与调试
description: i3568bv3 Linux 驱动与调试
---

# Linux 驱动与调试

## 驱动位置

| 功能 | SDK 路径 |
| --- | --- |
| 重力传感器 | `kernel/drivers/input/sensors/accel/lis3dh.c` |
| 电容触摸 | `kernel/drivers/input/touchscreen/` |
| 液晶屏 | `kernel/drivers/gpu/drm/panel/panel-simple.c` |
| 按键 | `kernel/drivers/input/keyboard/` |
| Wi-Fi/蓝牙 | `kernel/drivers/net/wireless/rockchip_wlan/` |
| 摄像头 | `hardware/rockchip/camera/SiliconImage/isi/drv/` |

Linux 触摸驱动可检查 `gslx680_9tripod.c`，按键可检查 `rk_keys.c` 和 `adc-keys.c`。在修改驱动前核对外设型号、实际源码版本、设备树及对应固件支持。

## 查询系统状态

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

通过 UART2 登录板端，查看启动参数、内存、分区、网口及内核日志。分区表显示块设备分区，`df -h` 显示已挂载文件系统的容量。排查时记录镜像版本、外设型号和完整启动日志。
