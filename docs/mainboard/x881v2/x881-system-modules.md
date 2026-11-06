---
sidebar_position: 19
title: 常用系统模块
description: x881 常用系统模块
---

# 常用系统模块

## 账号与调试权限

量产时配置 ADB 公钥认证与串口登录密码。Tina menuconfig 启用 ADB 权限功能，BusyBox 启用 login/passwd 后为 root 设置密码；重新构建验证登录流程。

## BOOT0、U-Boot 与串口

```text
mboot0
printenv
# Inspect UART settings in the active bootloader configuration
CONFIG_SPECIFY_CONSOLE_INDEX
CONFIG_CONS_INDEX
CONFIG_BAUDRATE
```

BOOT0 通过板级 `sys_config.fex` 选择 UART、存储和日志，波特率宏可能是 `UART_BAUD` 或 `CFG_UART_BAUD_1500000`。U-Boot 版本按实际 `brandy/` 目录，Linux console 与 earlyprintk、RTOS 调试串口需同步规划。

## GPIO、I2C、SPI、PWM 与 ADC

通过 pinctrl 配置默认/休眠复用、上拉和驱动能力；GPIO 引脚的 Linux 编号要从设备树计算，不能将接口表中的封装坐标直接当作编号。TWI 用于传感器和触摸，PWM 用于背光/驱动，GPADC 用于按键和模拟采样。

## 网络与低功耗

X881 使用板载无线模块连接网络，Wi-Fi 模式由 wifimanager、softap manager、hostapd 等组件管理。EMAC 是 SDK 通用网络模块，不能据此认定本板存在 RJ45。

```bash
ip addr
ifconfig
route
udhcpc -i wlan0
```

PMC/Standby 涉及 Linux APP 域、RTOS MCU 域、pwrctrl 和共享资源。休眠前关闭或保存外设状态，核对唤醒源和电池电流；SID 用于芯片标识，HWSPINLOCK 用于跨核资源互斥。
