---
title: Linux 驱动与调试
description: Linux 手册所述为 RK3562 Linux SDK，内核版本和设备树实际文件名应从当前源码树确认。不要将 Android SDK 的设备树路径直接套用到 Linux SD…
---

# Linux 驱动与调试

## 1. 设备树入口

Linux 手册所述为 RK3562 Linux SDK，内核版本和设备树实际文件名应从当前源码树确认。不要将 Android SDK 的设备树路径直接套用到 Linux SDK。

建议在源码中定位：

```bash
find . -iname '*rk3562*' -o -iname '*i3562*'
grep -R "model\\|compatible" kernel/arch/arm64/boot/dts/rockchip/
```

## 2. 常用驱动模块

硬件手册与 Linux 用户手册涉及以下功能：

- G-sensor
- I2C 电容触摸屏
- DRM 显示驱动（MIPI-DSI / LVDS）
- 按键
- Wi-Fi / Bluetooth
- MIPI 摄像头
- USB、以太网及音频等 SoC 外设

具体驱动文件、设备树节点和 GPIO / regulator / clock 配置应以当前 SDK 为准。

## 3. 常用系统检查命令

```bash
# 内核启动日志
dmesg

# CPU 信息
cat /proc/cpuinfo

# 内存信息
cat /proc/meminfo

# 分区信息
cat /proc/partitions

# 内核版本
cat /proc/version

# 网络接口统计
cat /proc/net/dev

# 文件系统容量
df -h
```

## 4. 外设排查建议

### 显示 / 触摸

- 确认 DSI 与 LVDS 没有同时配置。
- 检查屏幕 timing、lane 数、供电、背光 PWM、复位和触摸 I2C 地址。
- 先检查 DRM / panel / bridge 日志，再检查触摸驱动和 input 事件。

### 摄像头

- 检查 CSI lane、MCLK、I2C、RESET、PWDN 和摄像头供电。
- 确认传感器驱动、设备树 endpoint 和 media graph 匹配。

### Wi-Fi / Bluetooth

- 核对实际模块料号与 SDIO / UART / USB 接口方式。
- 检查电源使能、32 kHz 时钟、唤醒 GPIO、设备树和固件文件。

### USB / 以太网

- USB 3.0 OTG 注意 Host / Device 角色配置。
- 以太网检查 RGMII 时钟、PHY 复位、PHY 地址和链路状态。
