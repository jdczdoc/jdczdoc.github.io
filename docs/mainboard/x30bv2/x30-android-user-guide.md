---
sidebar_position: 9
title: Android 使用指南
description: X30 Android 常用功能操作
---

# Android 使用指南

本页整理 X30 Android 系统启动后的常用操作。

## 命令终端

通过调试串口可进入 Android 终端，也可使用 adb：

```bash
adb devices
adb shell
```

若 `adb devices` 提示 `more than one device and emulator`，可结束 Windows 中的 `adb.exe` 后重新启动 adb。

## 播放 MP3 / 视频

将 MP3、视频或图片放到 SD 卡、U 盘或内部存储中，系统音乐和图库应用会自动识别可播放文件。

## Wi-Fi 上网

X30 开发板板载 Wi-Fi/BT 二合一模块，无需额外 USB Wi-Fi。进入设置，打开 Wi-Fi，选择目标热点并输入密码即可联网。

## 蓝牙传输和蓝牙音箱

进入设置中的蓝牙界面，搜索手机或蓝牙音箱，完成配对后即可进行文件传输或播放音乐。

## USB 鼠标键盘

将 USB 鼠标、键盘或无线接收器插入 USB HOST 接口即可操作 Android 界面。

## TF 卡和 U 盘

系统启动后会自动挂载 TF 卡或 U 盘到 `/storage` 目录。若未识别，优先检查文件系统格式、接口供电和设备节点。

## 屏幕旋转

X30 板载 G-sensor，移动开发板方向后，支持旋转的应用界面会随方向改变。部分应用不支持自动旋转。

## 摄像头

点击 Android 应用中的相机进入预览模式，可拍照或录像。若无画面，应检查摄像头供电、I2C、MIPI、复位、驱动和设备树配置。

## 有线以太网

接入网线后，网口指示灯正常闪烁即可使用有线网络。可通过命令检查：

```bash
ifconfig
ip addr
ping 8.8.8.8
```

## 红外遥控

X30 硬件支持红外一体化接收头，可通过遥控器操作 Android 界面。

## 开关机和休眠唤醒

X30 使用 PMU 进行电源管理。外接 12V 电源适配器后开发板自动点亮。进入系统后长按开机键弹出关机对话框；轻按开关机键，屏幕熄灭并进入深度休眠；再次轻按可唤醒。
