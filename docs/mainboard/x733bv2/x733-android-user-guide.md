---
title: Android 用户指南
sidebar_position: 9
---
# Android 用户指南

## ADB 连接

开启开发者选项和 USB 调试，使用 Type-C 连接电脑：

```bash
adb devices
adb shell
```

常用操作：

```bash
adb push local_file /data/local/tmp/
adb pull /sdcard/file .
adb install app.apk
adb reboot
```

多设备连接时指定序列号：

```bash
adb -s <serial> shell
```

## 调试串口

UART0 默认为调试串口，常用配置为 115200 8N1、无硬件/软件流控。Linux 主机可使用：

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

调试串口是逻辑电平 UART，不能直接连接 PC 的 RS232 串口。

## Wi-Fi 与蓝牙

开发板使用 AW869A Wi-Fi/BT 模组。可在系统设置中启用，也可通过命令排查：

```bash
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell rfkill list
```

## TF 卡、U 盘与 M.2

```bash
adb shell lsblk
adb shell df -h
adb shell mount
```

Android 通常由 `vold` 自动挂载 TF 卡和 U 盘。M.2 设备是否识别还取决于接口协议、内核驱动和供电。

## 有线网络

```bash
adb shell ip link show
adb shell ip addr show eth0
adb shell ip route
adb shell ping -c 4 8.8.8.8
```

## HDMI 与内置屏

```bash
adb shell dumpsys display
adb shell dumpsys SurfaceFlinger --display-id
adb shell wm size
adb shell wm density
```

HDMI OUT、MIPI DSI、eDP 的启用关系由设备树、显示驱动和 Android 显示 HAL 共同决定。

## 摄像头与 HDMI IN

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "lt6911|mipi|csi|isp|vipp|camera|sensor"
```

HDMI IN 经 LT6911C 进入 MIPI CSI 链路，因此 HDMI 源分辨率变化、LT6911C 输出时序和 CSI 接收参数必须匹配。

## 休眠、唤醒与电源键

```bash
adb shell input keyevent 26
adb reboot
adb reboot recovery
```

排查休眠唤醒问题时，应同时保存串口日志、`logcat`、`dmesg` 和唤醒源信息。
