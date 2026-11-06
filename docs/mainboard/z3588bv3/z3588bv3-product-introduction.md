---
sidebar_position: 1
title: 产品介绍
description: z3588bv3 主板产品规格与文档导航
---

# z3588bv3 主板产品介绍

Z3588 开发板基于 Rockchip RK3588 处理器，由深圳市九鼎创展科技有限公司研发。硬件手册封面及板卡照片显示该板卡为 Z3588 系列；正面 PCB 丝印可见 `LGA3588BV2_20250121`，因此本目录按用户指定的产品目录名 `Z3588BV3` 组织，实际 PCB 版本标识仍应以实物为准。

![Z3588BV3 主板正面](./z3588bv3-board-front.png)

## 主要规格

| 项目 | 手册标注 |
| --- | --- |
| SoC | Rockchip RK3588，8 nm |
| CPU | 四核 Cortex-A76 + 四核 Cortex-A55，最高标注 2.4 GHz |
| GPU / NPU | Arm GPU；NPU 算力标注 6 TOPS |
| RAM | 8 GB |
| 存储 | 128 GB；板载 eMMC，未引出独立管脚 |
| PMIC | RK806-2 |
| PCB 尺寸 | 150 mm × 90 mm × 1.6 mm |
| 工作温度 | 0 至 70 °C |
| 存储温度 | -10 至 50 °C |
| 主板输入电源 | 12 V DC；硬件说明建议 12 V/3 A |

## 接口能力概览

- 显示：1 路 MIPI DSI；另有 HDMI IN 与 HDMI OUT。手册参数表将 HDMI 标注为 HDMI2.0 TX 与 HDMI OUT，实际端口用途请以板上丝印和系统配置为准。
- 摄像头：2 路 MIPI CSI。
- USB：1 路 USB 2.0 Type-A、1 路 USB 3.0 Type-A、1 路 Type-C OTG。
- 网络：2 路千兆以太网；以太网 1 使用 RTL8211F（GMAC/RGMII），以太网 2 使用 RTL8111（PCIe）。
- 无线：板载 VS2275P Wi-Fi 6 / Bluetooth 5.3 模组（按硬件手册描述）。
- 音频：MIC 输入、耳机输出、双声道扬声器接口。
- 扩展：两组 2×20 GPIO 排针、TF 卡、M.2 接口、风扇接口、RTC 电池接口。

## 文档导航

- [硬件资源](./z3588bv3-hardware-resources.md)
- [硬件接口定义](./z3588bv3-interface-details.md)
- [Linux 编译与烧录](./linux/z3588bv3-linux-build-flash.md)
- [Linux 驱动与系统查询](./linux/z3588bv3-linux-drivers.md)
- [Android 编译与烧录](./android/z3588bv3-android-build-flash.md)
- [Android 使用与功能验证](./android/z3588bv3-android-usage.md)
