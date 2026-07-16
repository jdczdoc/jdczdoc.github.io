---
title: Android 用户指南
sidebar_position: 9
---
# Android 用户指南

## ADB 连接

开启开发者选项和 USB 调试后，在电脑端执行：

```bash
adb devices
adb shell
```

常用文件操作：

```bash
adb push local_file /data/local/tmp/
adb pull /sdcard/file .
adb install app.apk
```

多设备连接时使用序列号：

```bash
adb -s <serial> shell
```

## Wi-Fi 与蓝牙

开发板使用板载 Wi-Fi/BT 模组时，可在系统设置中启用 Wi-Fi 和蓝牙。

排查命令：

```bash
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell rfkill list
```

## TF 卡与 U 盘

插入存储设备后可通过以下命令查看：

```bash
adb shell lsblk
adb shell df -h
adb shell mount
```

Android 通常由 `vold` 自动挂载可移动存储，不建议手工修改系统挂载点。

## 有线网络

```bash
adb shell ip link show
adb shell ip addr show eth0
adb shell ip route
adb shell ping -c 4 8.8.8.8
```

## 显示与 HDMI

连接 HDMI 后可检查显示状态：

```bash
adb shell dumpsys display
adb shell dumpsys SurfaceFlinger --display-id
```

LCD、HDMI 和触摸映射由设备树、显示 HAL 与 Android 输入配置共同决定。

## 休眠、唤醒与重启

```bash
adb shell input keyevent 26
adb reboot
adb reboot recovery
```

调试异常重启或唤醒问题时，同时保存串口日志、`logcat` 和 `dmesg`。
