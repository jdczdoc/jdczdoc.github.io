---
sidebar_position: 1
title: 产品介绍
description: x8883bv3 产品介绍
---

# 产品介绍

X8883 主板型号为 **X8883BV3**，采用 X8883CV1 核心板与底板结构，面向边缘 AI、智能视觉、商业显示、视频会议与工业控制。硬件版本为 **X8883BV3_20260725**。

## 平台参数

| 项目 | 规格 |
| --- | --- |
| 处理器 | MT8883，4 nm；4× Cortex-A715（1×3.0 GHz + 3×2.8 GHz）+ 4× Cortex-A510 @2.0 GHz |
| GPU | Mali-G615 MC6 @900 MHz，OpenGL ES / Vulkan / OpenCL |
| NPU | 第 7 代 NPU，24 TOPS |
| 内存/存储 | LPDDR5X，最高 24 GB；UFS 4.0（平台规格） |
| 视频/影像 | 最高 4K60 编解码、200 MP 影像输入 |
| 无线 | Wi-Fi 6E 2×2、BT 5.3、GNSS L1+L5；处理器含 5G Rel.16 Modem |
| 主板供电 | 12 V DC；建议 12 V / 2 A 或更高电流能力适配器 |
| 显示 | LVDS J17、MIPI DSI U39、屏幕电源 CN2 |
| 摄像头 | C-PHY CON3、D-PHY J16 |
| USB | Type-C J10、USB 2.0 Host J22/J9506/J9507，另有 J9505 |
| 有线网络 | PCIe → RTL8111H → RJ45，10/100/1000 M |
| 其他 | TF、耳机、MIC、喇叭、IMU/地磁、UART 调试 |

内存、存储容量及系统版本以实际交付配置为准。

## 文档导航

- [硬件资源](./x8883-hardware-resources.md)

- [板载接口定义](./x8883-interface-details.md)

- [电源与调试](./x8883-power-debug.md)

- [Android 编译](./x8883-android-build.md)

- [Android 烧录](./x8883-android-flashing.md)

- [Android 功能测试](./x8883-android-tests.md)

- [DTS、GPIO 与总线](./x8883-device-tree-gpio.md)

- [显示与摄像头适配](./x8883-display-camera.md)

- [故障排查](./x8883-troubleshooting.md)

---

**参考资料**

网盘 `x8883-docs` → `X8883开发板硬件手册.pdf` → 第一章“产品概述”。 接口定义见硬件手册第三章；Android 配置见同目录《X8883 Android平台用户手册-V1.0.pdf》第五章。
