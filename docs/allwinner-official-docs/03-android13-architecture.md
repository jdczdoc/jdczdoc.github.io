---
title: Android 13系统架构
sidebar_position: 3
description: 从应用、Framework、Native、HAL和Kernel层理解T527 Android 13代码分布。
---

# Android 13系统架构

Android 13 自上而下可分为应用层、Framework、Native/System Service、HAL 和 Linux Kernel。调试功能时，先判断问题位于哪一层，再决定抓取什么日志和修改哪个目录。

## 分层关系

```text
Application
    ↓
Application Framework / System Service
    ↓
Native Framework / Binder / SurfaceFlinger / Media Service
    ↓
HAL
    ↓
Linux Kernel / Allwinner BSP Driver
    ↓
Hardware
```

## 常见模块与代码位置

| 模块 | Android侧常见位置 | Longan/BSP侧常见位置 |
|---|---|---|
| 多媒体 | `frameworks/av/media/`、`frameworks/base/media/` | CedarX/CedarC 相关驱动与私有库 |
| 显示 | `frameworks/native/services/surfaceflinger/`、`hardware/aw/display/` | `longan/bsp/drivers/video/` 或 DRM/DE 驱动目录 |
| 音频 | `frameworks/av/services/audioflinger/`、音频 HAL | `longan/bsp/drivers/sound/`、ALSA SoC 驱动 |
| Camera | Camera Framework、Camera Service、Camera HAL | `longan/bsp/drivers/media/`、CSI/ISP/Sensor 驱动 |
| Wi-Fi | Wi-Fi Framework、wpa_supplicant、Wi-Fi HAL | WLAN 模组驱动、SDIO/USB 总线驱动 |
| 蓝牙 | Bluetooth Framework、Bluetooth HAL | UART/USB、rfkill、模组电源控制 |
| OTA/Recovery | `bootable/recovery/`、update_engine、产品配置 | 分区表、misc、boot/recovery 镜像 |

目录名称会随 SDK 分支变化，应使用下面的方式查找：

```bash
cd <ANDROID_TOP>

grep -Rni "camera.provider" hardware vendor device 2>/dev/null | head
grep -Rni "audio.primary" hardware vendor device 2>/dev/null | head
find longan/bsp -type d -iname '*display*' -o -iname '*camera*' -o -iname '*audio*'
```

## 判断问题所在层

### 内核和硬件层

典型现象：

- `/dev` 中没有对应设备节点。
- `dmesg` 出现 probe、clock、reset、GPIO、IRQ 或超时错误。
- I2C/SPI 总线无法读到设备。

优先检查：设备树、内核配置和 BSP 驱动。

### HAL层

典型现象：

- 内核设备节点存在，但 Android 服务找不到设备。
- `lshal`、`dumpsys` 或 HAL 日志显示初始化失败。

优先检查：HAL 服务、权限、SELinux、VINTF 和产品配置。

### Framework和应用层

典型现象：

- HAL 已正常工作，但设置界面或应用行为不正确。
- `logcat` 中出现 Java exception、Service 或权限错误。

优先检查：Framework、System Service、Overlay 和应用配置。

## 基本日志组合

```bash
adb root
adb shell dmesg -w
adb logcat -b all
adb shell lshal
adb shell dumpsys
```

驱动功能文档会同时给出内核层和 Android 层验证方法，避免只看到设备节点就判断功能已经完整可用。
