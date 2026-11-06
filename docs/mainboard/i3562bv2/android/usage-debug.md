---
title: Android 使用与调试
description: 打开设备的 USB 调试后，在 PC 端执行：
---

# Android 使用与调试

## 1. ADB 连接

打开设备的 USB 调试后，在 PC 端执行：

```bash
adb devices
adb shell
```

如果出现多个设备或模拟器，使用：

```bash
adb devices -l
adb -s <serial> shell
```

## 2. 串口调试

硬件手册定义 UART0 为 3.3 V TTL。连接 USB 转串口工具时注意 TX/RX 交叉连接、共地及电平兼容。

Android 手册中的 SecureCRT 波特率示例与 Linux 手册存在差异。请以当前 SDK 的 U-Boot / Kernel 配置为准，不要将文档中的单一示例当作固定值。

## 3. 常用功能验证

Android 用户手册包含以下功能验证流程，可用于板级 bring-up：

- Wi-Fi 上网与蓝牙数据传输 / 音频播放
- USB 鼠标、键盘和 U 盘
- TF 卡挂载
- 屏幕旋转与 HDMI 显示
- 摄像头拍照 / 录像
- 有线以太网
- 遥控器
- 开关机与休眠唤醒

## 4. 系统信息检查

```bash
adb shell getprop
adb shell cat /proc/cpuinfo
adb shell cat /proc/meminfo
adb shell cat /proc/partitions
adb shell cat /proc/version
adb shell cat /proc/net/dev
```

## 5. 外设问题定位顺序

1. 先确认硬件供电、连接器方向、线序和模块 BOM。
2. 检查 U-Boot 是否识别外设或相关电源轨。
3. 检查 Kernel `dmesg` 中的 probe、I2C、MMC、USB、DRM 和网络日志。
4. 检查设备节点、Android HAL / framework 服务及权限。
5. 最后再定位应用层问题。
