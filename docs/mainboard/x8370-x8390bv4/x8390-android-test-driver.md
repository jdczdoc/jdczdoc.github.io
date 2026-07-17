---
title: Android测试与系统信息
sidebar_position: 8
description: X8390/X8370 Android硬件测试项目和常用系统信息查询命令。
---

# Android测试与系统信息

## 硬件测试程序

测试程序用于研发验证和量产检测，可通过触摸或鼠标切换测试页面。

### LCD与触摸

![LCD测试](./android-test-lcd.jpg)

![触摸测试](./android-test-touch.jpg)

- LCD测试：切换纯色画面，检查坏点、亮点、偏色和丢色。
- 触摸测试：绘制直线和对角线，检查触摸连续性和边缘区域。

### LED、蜂鸣器和背光

![LED测试](./android-test-led.jpg)

![蜂鸣器测试](./android-test-buzzer.jpg)

![背光测试](./android-test-backlight.jpg)

### 按键和电池

![按键测试](./android-test-key.jpg)

![电池测试](./android-test-battery.jpg)

### ADC和重力传感器

![ADC测试](./android-test-adc.jpg)

![重力传感器测试](./android-test-gsensor.jpg)

### 音频和摄像头

![音频测试](./android-test-audio.jpg)

![摄像头测试](./android-test-camera.jpg)

### 网络和存储

![Wi-Fi测试](./android-test-wifi.jpg)

![网络连接测试](./android-test-network.jpg)

![串口测试](./android-test-uart.jpg)

![TF卡测试](./android-test-tf.jpg)

![U盘测试](./android-test-usb.jpg)

串口环回测试时，应将待测串口TXD与RXD短接；存储测试前应确认TF卡或U盘已正确插入。

## 常用系统查询

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

持续查看内核消息可使用：

```bash
cat /proc/kmsg
```

## 驱动源码说明

MT8390/MT8370属于MediaTek平台，驱动目录、内核版本和模块名称会随SDK版本变化。实际适配应从当前设备树、`kernel/drivers/`和项目编译配置反查，不使用其他SoC平台的示例路径作为依据。
