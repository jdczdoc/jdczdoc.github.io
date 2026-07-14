---
sidebar_position: 8
title: Android 使用指南
description: X3566 Android 常用功能操作
---

# Android 使用指南

本页整理 X3566 Android 系统启动后的常用功能操作。

## 命令终端

通过调试串口可查看系统启动日志，也可以使用 adb：

```bash
adb devices
adb shell
```

如果 `adb devices` 提示 `more than one device and emulator`，可结束 Windows 进程中的 `adb.exe` 后重新启动 adb。

## 播放 MP3 / 视频

可将媒体文件放入 TF 卡、U 盘或内部存储，通过系统播放器或第三方播放器播放。

## Wi-Fi 和蓝牙

进入系统设置打开 Wi-Fi，选择热点并输入密码。蓝牙可用于文件传输，也可连接蓝牙音箱播放音乐。

## USB 鼠标键盘

将 USB 鼠标、键盘或无线接收器插入 USB HOST 接口即可使用。

## TF 卡和 U 盘

系统支持挂载 TF 卡和 U 盘。若无法识别，优先检查文件系统格式、供电和接口连接。

## 屏幕旋转

可通过 Android 设置、系统属性或应用配置调整屏幕方向。项目中建议在系统配置中统一设置方向。

## 摄像头

开发板支持 CIF/CSI 摄像头，也支持 USB 摄像头。若无图像，应检查摄像头供电、复位、MCLK、I2C、MIPI/并口信号、设备树和驱动。

## 有线以太网

接入网线后可通过设置界面或命令查看网络状态：

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## HDMI 显示

X3566 支持 HDMI 输出。若无显示，应确认 HDMI 线材、显示器输入源、EDID、分辨率和显示驱动配置。

## 开关机与休眠唤醒

接入外部电源后，长按 PWRKEY 开机。进入系统后，轻按 PWRKEY 可休眠，再次按下可唤醒，长按可进入关机界面。RESET 键用于硬复位。
