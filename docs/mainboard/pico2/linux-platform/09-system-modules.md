---
title: 常用系统模块
sidebar_label: 常用系统模块
sidebar_position: 9
description: PICO2登录、Boot、UART、GPIO、EMAC、Wi-Fi、GPADC、PWM和低功耗配置。
---

# 常用系统模块

## 登录与权限

- 串口登录密码由 rootfs 配置和登录服务控制。
- ADB 或调试服务应仅在开发固件中开启。
- SSH 推荐使用普通用户和密钥认证。

## BOOT0 与 U-Boot

Boot0 负责最早期硬件初始化和介质加载，U-Boot 负责二级引导、环境变量、设备树和内核启动。调试时按启动阶段区分日志来源。

## UART、GPIO 和 Pinctrl

```bash
grep -Rni "uart_debug_port" device/config/chips/v821
cat /sys/kernel/debug/pinctrl/*/pinmux-pins
cat /sys/kernel/debug/gpio
```

## EMAC 和 Wi-Fi

PICO2 本体主要面向无线视觉场景。配置 Wi-Fi 时需同时确认：

```text
SDIO/USB总线
电源和复位GPIO
固件文件
Kernel模块
wpa_supplicant
网络接口配置
```

## GPADC 和 PWM

GPADC 可用于模拟采样或按键，PWM 常用于 LCD 背光。修改采样通道和 PWM 引脚时必须核对排针复用。

## 电源管理

PMC、Standby、SID、HWSPINLOCK 等模块参与低功耗、芯片信息和多核同步。进入待机前应确认 Linux 与 RTOS 对共享资源的状态一致。

常用日志：

```bash
dmesg | grep -iE "pm|standby|suspend|resume|sid|wakeup"
cat /sys/power/wakeup_count
cat /sys/kernel/debug/wakeup_sources
```
