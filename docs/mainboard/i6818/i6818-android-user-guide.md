---
sidebar_position: 10
title: Android 使用指南
description: i6818 Android 常用功能操作
---

# Android 使用指南

> 说明：本页软件流程按前面整理的 x6818 软件文档沿用。i6818 与 x6818 启动/烧录流程相近，实际命令、源码包名和镜像名以当前 i6818 SDK 为准。

i6818 Android 手册覆盖命令终端、媒体播放、网络、蓝牙、USB 外设、APK 安装、截图、存储挂载、屏幕旋转、摄像头、有线以太网、红外遥控、开关机、休眠唤醒、3G/PCIe 上网卡和 USB 摄像头等常用功能。

## 命令终端

进入 Android shell：

```bash
adb devices
adb shell
```

串口终端也可用于调试，常见波特率为 115200。

## 媒体播放

可通过 Android 命令行或系统默认播放器播放 MP3。视频、图片可通过系统播放器和图库应用打开。1080P 视频播放、优酷、电视播放等功能在手册中也有单独章节。

## Wi-Fi / 蓝牙 / 以太网

i6818 支持 USB Wi-Fi/BT、蓝牙传输和蓝牙音乐播放，也支持千兆有线以太网。网络调试常用命令：

```bash
ifconfig
netcfg
ping 8.8.8.8
```

## USB 鼠标键盘与 U 盘

USB 鼠标、键盘接入 HOST 口即可使用。U 盘和 TF 卡可挂载后访问：

```bash
mount
df -h
ls /mnt
ls /storage
```

## APK 安装

手册列出四种 APK 安装方式：

- 使用 SD 卡安装。
- 使用 ApkInstaller 安装。
- 使用 adb 工具安装。
- 在线安装。

adb 安装示例：

```bash
adb install demo.apk
adb install -r demo.apk
```

## 屏幕截图

手册中包含 Eclipse 抓图和 91 助手抓图方法。实际调试时也可使用 Android 自带 screencap：

```bash
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png
```

## 显示与旋转

手册包含 VGA 显示、HDMI 显示和屏幕旋转章节。显示异常时可从屏参、U-Boot logo、kernel logo、Android 显示服务、背光、触摸坐标映射等方向排查。

## 摄像头

Android 手册包含拍照摄像和 USB 摄像头使用章节。i6818 硬件支持 BT656 / BT601 / MIPI 摄像头接口，调试时重点检查供电、复位、I2C、MCLK、数据线、设备树和驱动。

## 开关机与休眠唤醒

i6818 支持软件开关机、休眠唤醒和 RTC。系统休眠异常时，需要检查 PWRKEY、PMU、唤醒源、外设电源保持和内核 suspend/resume 日志。
