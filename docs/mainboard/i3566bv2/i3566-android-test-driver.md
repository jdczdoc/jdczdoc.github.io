---
sidebar_position: 10
title: Android 测试与驱动
description: I3566 Android 测试程序、驱动入口和 proc 查询
---

# Android 测试与驱动

:::note
本页软件流程沿用前面整理的 X3566 软件文档模板。I3566 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 I3566 SDK 和发布资料为准。
:::

## Android 测试程序

| 测试项 | 说明 |
| --- | --- |
| 液晶屏测试 | 检查颜色、坏点和背光 |
| 触摸屏测试 | 检查触摸响应和坐标映射 |
| 发光二极管测试 | 检查 LED 控制 |
| 蜂鸣器测试 | 检查蜂鸣器或 PWM 控制 |
| 背光测试 | 检查背光亮度调节 |
| 按键测试 | 检查音量键、PWRKEY、RESET 等 |
| 电池测试 | 检查电池和电源相关状态 |
| 数模转换测试 | 检查 ADC 采样 |
| 重力传感器测试 | 检查 G-sensor |
| 音频测试 | 检查耳机、喇叭、MIC 和录放音 |
| 摄像头测试 | 检查 CSI/CIF/USB 摄像头 |
| 无线网络测试 | 检查 Wi-Fi 扫描和连接 |
| 网络连接测试 | 检查以太网或 Wi-Fi 连通性 |
| 串口测试 | TX/RX 短接自发自收 |
| 外部存储器测试 | 检查 TF 卡 |
| U 盘测试 | 检查 USB 存储设备 |

## Android 内核驱动

手册中的 Android 内核驱动入口包括：

- G-sensor 驱动
- 电容触摸屏驱动
- 液晶屏驱动
- 按键驱动
- Wi-Fi/BT 模块驱动
- proc 文件系统

## proc 文件系统查询

### 启动环境变量

```bash
cat /proc/cmdline
```

### CPU 信息

```bash
cat /proc/cpuinfo
```

### 内存信息

```bash
cat /proc/meminfo
free -m
```

### 磁盘分区信息

```bash
cat /proc/partitions
lsblk
```

### 内核版本

```bash
cat /proc/version
uname -a
```

### 网络设备

```bash
ifconfig
ip addr
```

### 查看内核启动信息

```bash
dmesg
dmesg | grep -i error
```

## 项目实战入口

常见项目修改包括：

- 修改 `init.rc` 文件。
- 修改开机动画。
- 修改 U-Boot 中的开机 LOGO。
- 修改内核中的 LOGO。
- 配置 MIPI 屏。
- 关机充电和低电预充。
- Android Surface 旋转。
