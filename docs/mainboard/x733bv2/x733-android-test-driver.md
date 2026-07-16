---
title: Android 测试与驱动
sidebar_position: 10
---
# Android 测试与驱动

## 建议测试顺序

1. DC/电池供电、复位、BOOT 和电源键；
2. MIPI DSI/eDP、HDMI OUT 与背光；
3. 触摸屏、音量键和外接按键；
4. 扬声器、MIC 和耳机；
5. MIPI 摄像头与 HDMI IN；
6. Wi-Fi、蓝牙和千兆以太网；
7. TF 卡、eMMC、U 盘和 M.2；
8. USB 2.0 HUB、USB 3.0、休眠唤醒和长时间稳定性。

## 系统信息

```bash
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell uname -a
adb shell getprop
adb shell dmesg
```

## 显示、触摸和按键

```bash
adb shell dumpsys display
adb shell dumpsys input
adb shell getevent -lp
adb shell cat /proc/interrupts
```

LCD 纯色测试用于检查坏点、丢色和闪烁；触摸测试应覆盖边缘、坐标方向、多点和中断稳定性。

## 音频

```bash
adb shell cat /proc/asound/cards
adb shell tinymix
adb shell tinyplay /data/local/tmp/test.wav
adb shell tinycap /data/local/tmp/record.wav
```

扬声器为功放输出，MIC 为差分输入。无声问题需要同时检查 codec、功放使能、路由、耳机检测和 SELinux/HAL。

## 摄像头与 HDMI IN

```bash
adb shell dumpsys media.camera
adb shell dmesg | grep -iE "lt6911|mipi|csi|isp|vipp|camera|sensor"
```

检查媒体链路时不能只确认 `/dev/video*` 存在，还要验证格式、分辨率、帧率、Lane 速率、帧同步和持续采流。

## 网络与无线

```bash
adb shell ip addr
adb shell ip route
adb shell dumpsys wifi
adb shell dumpsys bluetooth_manager
adb shell ping -c 4 <gateway>
```

## USB 与存储

```bash
adb shell lsusb
adb shell lsblk
adb shell cat /proc/partitions
adb shell dmesg | grep -iE "usb|xhci|ehci|hub|mmc|sd|nvme|pcie"
```

## 驱动配置检查

驱动适配至少要同时核对：

- 原理图、供电和上电时序；
- 内核配置项与模块；
- 设备树节点、时钟、复位、regulator 和 pinctrl；
- Android HAL、权限、服务和应用调用；
- 中断计数、数据流和长时间稳定性。

仅出现设备节点不代表功能完整，必须通过真实数据传输验证。
