---
sidebar_position: 8
title: Android 使用指南
description: X8385 Android 常用功能使用说明
---

# Android 使用指南

Android 用户手册包含命令终端、MP3 播放、视频播放、Wi-Fi、蓝牙、USB 鼠标键盘、TF 卡、U 盘、屏幕旋转、拍照摄像、有线以太网、遥控器、HDMI、开关机和休眠唤醒等内容。

## 命令终端

连接调试串口，进入 Android 系统后会自动进入 Android 终端。常用命令：

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
ifconfig
dmesg
```

## 播放 MP3

将 MP3 文件放入外置 SD 卡，点击音乐播放器，系统会自动识别音频文件，点击即可播放。

## 播放视频

Android 自带视频处理功能，应用界面中显示为“图库”。点击图库后，系统会在外置 SD 卡中自动查找可识别的视频和图片文件。带播放符号的是视频文件，不带的是图片文件。

## Wi-Fi 上网

X8385 开发板自带 Wi-Fi / BT 二合一模组，无需额外 USB Wi-Fi。路径：

```text
Settings -> Network & Internet -> Wi-Fi
```

打开 Wi-Fi 开关，选择无线网络，输入密码后连接。

## 蓝牙传输数据

路径：

```text
Settings -> Connected devices -> Bluetooth
```

打开蓝牙，搜索设备，选择目标设备并配对。配对完成后，可在图库中选择图片，通过分享功能选择蓝牙发送。

## 蓝牙播放音乐

准备蓝牙音箱并切换到蓝牙模式，在开发板蓝牙界面搜索设备并连接。连接成功后，开发板播放音视频时声音会从蓝牙音箱输出。

## USB 鼠标键盘

将 USB 鼠标、键盘或无线鼠标键盘接到 USB HOST 接口，即可操作 Android 界面。

## TF 卡和 U 盘

TF 卡与 U 盘挂载后可以在 `/storage` 目录下查看。调试可用：

```bash
ls /storage
mount
df -h
```

## 屏幕旋转

屏幕旋转需要同时关注 Android 显示方向和触摸坐标方向。修改后需要重启验证。

## 摄像头、以太网、HDMI

- 摄像头：检查 MIPI CSI 摄像头连接、供电、复位和 Android Camera 应用。
- 有线以太网：X8385 底板为 USB 转百兆以太网接口。
- HDMI：标准 HDMI 接口用于外接显示器。
