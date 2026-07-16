---
sidebar_position: 9
title: Android 测试与驱动
description: X8385 Android 测试项目、内核驱动和开发实战
---

# Android 测试与驱动

## Android 测试程序

| 测试项 | 说明 |
| --- | --- |
| 液晶屏测试 | 检查 7 寸 MIPI 屏、颜色、坏点、背光 |
| 触摸屏测试 | 检查电容触摸坐标和响应 |
| 发光二极管测试 | 检查可编程 LED |
| 蜂鸣器测试 | 检查蜂鸣器输出 |
| 背光测试 | 检查背光亮度调节 |
| 按键测试 | 检查 KEY1~KEY4、Power、Reset、Mode 等 |
| 电池测试 | 检查电池或供电状态 |
| 数模转换测试 | 检查 ADC |
| 重力传感器测试 | 检查 G-sensor |
| 音频测试 | 检查耳机、喇叭、MIC |
| 摄像头测试 | 检查 MIPI CSI 或 USB 摄像头 |
| 无线网络测试 | 检查 Wi-Fi / Bluetooth |
| 网络连接测试 | 检查百兆以太网 |
| 串口测试 | 检查 UART |
| 外部存储器测试 | 检查 TF 卡 |
| U 盘测试 | 检查 USB 存储 |

## Android 内核驱动

用户手册列出的 Android 内核驱动章节包括：

- G-sensor 驱动。
- 电容触摸屏驱动。
- 液晶屏驱动。
- 按键驱动。
- Wi-Fi / BT 模块驱动。
- proc 文件系统。

## proc 常用查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## Android 开发项目实战

手册目录中列出的实战项包括：

- 修改 `init.rc` 文件。
- 修改开机动画。
- 修改 U-Boot 中的开机 LOGO。
- 修改内核中的 LOGO。
- 配置使用 MIPI 屏。
- 关机充电和低电预充。
- Android Surface 旋转。
