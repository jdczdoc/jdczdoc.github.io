---
title: Android 测试与驱动
sidebar_position: 10
---
# Android 测试与驱动

## 基础测试项目

建议按以下顺序验证板卡：

1. LCD、HDMI 和背光；
2. 触摸屏与按键；
3. 音频播放、录音和耳机检测；
4. 摄像头；
5. Wi-Fi、蓝牙和以太网；
6. TF 卡、eMMC 和 U 盘；
7. UART、I2C、SPI、CAN、GPIO 和 PWM；
8. 休眠、唤醒、重启和长时间稳定性。

## 系统信息

```bash
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell uname -a
adb shell getprop
adb shell dmesg
```

## 显示与触摸

```bash
adb shell dumpsys display
adb shell dumpsys input
adb shell getevent -lp
adb shell cat /proc/interrupts
```

## 音频

```bash
adb shell cat /proc/asound/cards
adb shell tinymix
adb shell tinyplay /data/local/tmp/test.wav
adb shell tinycap /data/local/tmp/record.wav
```

## 摄像头

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "csi|isp|vipp|camera|sensor"
```

## 网络

```bash
adb shell ip addr
adb shell ip route
adb shell dumpsys wifi
adb shell ping -c 4 <gateway>
```

## 驱动配置检查

驱动调试至少需要核对以下四层：

- 原理图和电源时序；
- 内核配置项；
- 设备树节点与 pinctrl；
- Android HAL、权限和服务配置。

仅看到设备节点并不代表功能完整，应结合中断计数、时钟、电源、数据流和用户态调用验证。
