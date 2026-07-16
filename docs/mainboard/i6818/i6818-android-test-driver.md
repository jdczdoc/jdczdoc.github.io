---
sidebar_position: 11
title: Android 测试与驱动
description: i6818 Android 测试程序、内核驱动和 proc 查询
---

# Android 测试与驱动

> 说明：本页软件流程按前面整理的 x6818 软件文档沿用。i6818 与 x6818 启动/烧录流程相近，实际命令、源码包名和镜像名以当前 i6818 SDK 为准。

## Android 测试程序

i6818 Android 手册包含一套测试程序，用于验证开发板常见硬件。

| 测试项 | 说明 |
| --- | --- |
| 液晶屏测试 | 检查颜色、坏点、显示异常 |
| 触摸屏测试 | 检查电容屏五点触摸和坐标 |
| 发光二极管测试 | 检查四路 LED |
| 蜂鸣器测试 | 检查有源蜂鸣器 |
| 背光测试 | 检查背光亮度调节 |
| 按键测试 | 检查返回、音量、菜单、电源、复位 |
| 电池测试 | 检查电池和 PMU 相关状态 |
| 数模转换测试 | 检查 ADC 采样 |
| 重力传感器测试 | 检查 G-sensor |
| 音频测试 | 检查喇叭、耳机、MIC、录放音 |
| 摄像头测试 | 检查并口、MIPI 或 USB 摄像头 |
| 无线网络测试 | 检查 Wi-Fi 扫描和连接 |
| 网络连接测试 | 检查以太网或 Wi-Fi 网络 |
| 串口测试 | TX/RX 短接或串口互测 |
| 外部存储器测试 | 检查 TF 卡 |
| U 盘测试 | 检查 USB 存储设备 |

## Android 内核驱动

手册中列出的驱动章节包括：

- LED 驱动。
- 内核心脏监测驱动。
- G-sensor 驱动。
- 电容触摸屏驱动。
- 液晶屏驱动。
- 按键驱动。
- USB 接口 Wi-Fi 驱动。
- VGA 驱动。
- HDMI 驱动。
- proc 文件系统。

## proc 查询

常用查询命令：

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
ifconfig
dmesg
```

## Android 项目实战

手册项目实战包含：

- 创建 hello i6818 工程。
- 在 i6818 开发板上运行 hello i6818 测试程序。
- 从零开始编写 LED 测试程序。
- 建立第一个 APK，通过 JNI + NDK 调用底层驱动。
- 修改 VGA 分辨率。
- 修改 init.rc。
- 修改开机动画。
- 修改 U-Boot 开机 LOGO。
- 修改内核 LOGO。
- 使用 Git 管理源码。
- 打包整个 Android BSP。
- 使用 mm 指令局部编译。
- Ubuntu 下 minicom 设置。
