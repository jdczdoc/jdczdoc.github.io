---
sidebar_position: 10
title: Android 测试与驱动
description: X30 Android 测试程序、驱动入口和 proc 查询
---

# Android 测试与驱动

## Android 测试程序

X30 开发板提供 Android 测试程序，可用于量产测试和硬件验证。

| 测试项 | 说明 |
| --- | --- |
| 液晶屏测试 | 检查纯色显示、丢色和坏点 |
| 触摸屏测试 | 手写和画对角线测试触摸坐标 |
| LED 测试 | 控制开发板 LED 点亮和熄灭 |
| 蜂鸣器测试 | 按住开始测试键蜂鸣，松开停止 |
| 背光测试 | 检查背光亮度调节 |
| 按键测试 | 检查独立按键、PWRKEY、RESET |
| 电池测试 | 检查电池或电源相关状态 |
| ADC 测试 | 检查 ADC 采样 |
| G-sensor 测试 | 检查重力传感器 |
| 音频测试 | 检查耳机、喇叭、MIC 和录放音 |
| 摄像头测试 | 检查 CSI 或 USB 摄像头 |
| 无线网络测试 | 检查 Wi-Fi 扫描和连接 |
| 网络连接测试 | 检查以太网或 Wi-Fi 连通性 |
| 串口测试 | TX/RX 短接自发自收 |
| 外部存储器测试 | 检查 TF 卡 |
| U 盘测试 | 检查 USB 存储设备 |

## Android 内核驱动

Android 手册中的驱动入口包括：

- G-sensor 驱动
- 电容触摸屏驱动
- 液晶屏驱动
- 按键驱动
- Wi-Fi/BT 模块驱动
- 摄像头驱动
- proc 文件系统

## proc 查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
free -m
cat /proc/partitions
cat /proc/version
uname -a
ifconfig
ip addr
dmesg
```

## 项目实战入口

常见项目修改包括：

- 修改 `init.rc` 文件，包括永久修改和临时修改。
- 修改开机动画。
- 修改 U-Boot 中的开机 LOGO。
- 修改内核中的 LOGO。
- 配置使用 MIPI 屏。
