---
sidebar_position: 2
title: Linux 驱动与系统查询
description: z3588bv3 Linux 驱动路径、proc 查询与串口调试
---

# Linux 驱动与系统查询

## 驱动源码位置

Linux 用户手册列出的主要驱动路径如下。实际源码以对应 SDK 版本为准：

| 功能 | 源码路径/文件 |
| --- | --- |
| G-sensor | `kernel/drivers/input/sensors/accel/lis3dh.c`；`hardware/rockchip/sensor/st/` |
| 电容触摸屏 | `kernel/drivers/input/touchscreen/gslx680_9tripod.c` |
| LCD / DRM Panel | `kernel/drivers/gpu/drm/panel/panel-simple.c`；显示驱动还涉及 `kernel/drivers/gpu/drm/` |
| 按键 | `kernel/drivers/input/keyboard/rk_keys.c`、`adc-keys.c` |
| Wi-Fi / BT | `kernel/drivers/net/wireless/rockchip_wlan/` |
| 摄像头 | `hardware/rockchip/camera/SiliconImage/isi/drv/` |

以上是手册提供的通用路径示例，不代表每个模块都一定对应当前 PCB 的实际器件或当前 SDK 中的同名文件。特别是硬件手册标注的 Wi-Fi 模组为 VS2275P，而 Linux 手册没有确认该模组驱动与此型号一一对应；移植前应核对 BOM、模块芯片及 SDK 驱动。

## 常用系统信息查询

```bash
# 启动参数与环境信息
cat /proc/cmdline

# CPU 信息
cat /proc/cpuinfo

# 内存信息
cat /proc/meminfo

# 分区与块设备
cat /proc/partitions

# 内核版本
uname -a

# 网络接口
ifconfig -a
# 或
ip addr

# 内核启动日志
 dmesg
```

手册还介绍通过 `/proc` 查询启动环境变量、CPU、内存、磁盘分区、内核版本、网络设备及启动日志。具体节点内容随内核配置和系统版本变化。

## 串口调试

Linux 手册给出的串口工具包括 `minicom`、`picocom` 和 `kermit`。USB 转串口设备节点通常形如 `/dev/ttyUSB0`，应通过 `dmesg | grep ttyUSB` 确认实际节点。

```bash
sudo apt-get install picocom
sudo picocom -b 115200 /dev/ttyUSB0
```

退出 picocom：按 `Ctrl+A`，再按 `Ctrl+Q`。手册的 SecureCRT 示例使用 1,500,000 baud，但该参数应结合当前板卡 DEBUG 串口定义和实际 SDK 配置确认；不要将其直接当作所有调试接口的通用参数。
