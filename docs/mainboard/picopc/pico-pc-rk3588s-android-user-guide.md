---
sidebar_position: 7
title: Android 使用指南
description: Pico PC RK3588S Android 常用功能使用
---

# Android 使用指南

Android 平台用户手册包含命令终端、MP3 播放、视频播放、Wi-Fi、蓝牙、USB 鼠标键盘、TF 卡、U 盘、屏幕旋转、拍照摄像、有线以太网、遥控器、HDMI、开关机和休眠唤醒等功能。

## adb 与命令终端

```bash
adb devices
adb shell
```

进入 shell 后可使用 `cat /proc/cpuinfo`、`cat /proc/meminfo`、`cat /proc/partitions`、`cat /proc/version`、`ifconfig`、`dmesg` 等命令查看系统状态。

## 媒体播放

Android 系统支持 MP3 与视频播放。调试音视频时优先确认 HDMI / DSI 输出、音频输出设备、媒体文件格式、系统播放器和硬件编解码状态。

## Wi-Fi / Bluetooth / Ethernet

主板板载双频 Wi-Fi / BT，并支持千兆以太网。网络调试常用命令：

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## USB 鼠标键盘、TF 卡和 U 盘

USB HOST 口可连接鼠标、键盘、U 盘等设备。TF 卡与 U 盘挂载异常时，可查看：

```bash
mount
df -h
cat /proc/partitions
dmesg
```

## 屏幕旋转

Android Surface 旋转可配置为 `0/90/180/270`。修改后需要重启或重新打包验证，触摸坐标也要同步检查。

## HDMI 显示

Micro HDMI 用于 HDMI OUT。无显示时先确认 HDMI 线材、显示器 EDID、分辨率、U-Boot logo、kernel logo、Android 显示服务和设备树显示节点。

## 摄像头

Android 12 支持 CSI 摄像头和 USB 口摄像头。调试时重点检查电源、复位、MCLK、I2C、MIPI lane、摄像头驱动、设备树和 Android Camera HAL。

## 开关机与休眠唤醒

Android 手册包含开关机和休眠唤醒章节。休眠唤醒调试重点包括 Power Key、PMIC、唤醒源、外设电源保持、内核 suspend/resume 日志。
