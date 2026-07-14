---
sidebar_position: 7
title: Android 使用指南
description: X3588S mini ITX Android 常用功能操作
---

# Android 使用指南

本页整理 Android 系统启动后的常用功能操作，便于客户测试和技术支持快速引用。

## 命令终端

连接调试串口后可查看启动日志。调试串口波特率按手册截图标注为 1500000，不使用硬件流控。

也可以使用 adb：

```bash
adb devices
adb shell
```

如果 `adb devices` 提示 `more than one device and emulator`，可关闭多余模拟器或结束旧的 adb 进程后重新执行。

## 播放 MP3 / 视频

将音频或视频文件放入 TF 卡、U 盘或内部存储后，可通过系统播放器或第三方播放器播放。对于 RK3588S 支持硬解的视频格式，建议优先使用硬解。

## Wi-Fi 与蓝牙

进入系统设置，打开 Wi-Fi，选择无线网络并输入密码。蓝牙可用于文件传输，也可连接蓝牙音箱播放音乐。

## USB 鼠标键盘

将 USB 鼠标、键盘或无线接收器接入 USB HOST 接口后，即可操作 Android 界面。

## TF 卡和 U 盘

插入 TF 卡或 U 盘后，系统会自动挂载为外部存储。若无法识别，需检查文件系统格式、供电和 USB/SD 驱动状态。

## 屏幕旋转

可通过系统设置、应用方向配置或 Surface 旋转配置控制屏幕方向。项目中如需固定横竖屏，建议在系统配置中统一处理。

## 摄像头

连接 CSI 或 USB 摄像头后，可使用系统相机或测试程序预览图像。若无图像，应检查供电、复位、MCLK、I2C、MIPI/CSI lane、设备树和驱动匹配。

## 有线以太网

连接网线后可通过设置界面或命令查看 IP 状态：

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## HDMI 显示

主板支持 HDMI 输出，可用于外接显示器、电视或采集设备。若 HDMI 无显示，应确认分辨率、EDID、显示服务和设备树配置。

## 开关机与休眠唤醒

开关机、休眠唤醒依赖按键、电源管理 IC、设备树和系统服务共同配合。调试时建议同时查看串口日志、`dmesg` 和 Android logcat。
