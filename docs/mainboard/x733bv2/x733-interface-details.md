---
title: 接口详解
sidebar_position: 4
---
# 接口详解

## 正面接口位置

![X733BV2 正面接口](./x733-interface-front.png)

| 编号 | 接口 | 用途 |
|---:|---|---|
| 1 | HDMI IN | HDMI 输入，经 LT6911C 转换 |
| 2 | HDMI OUT | A733 原生 HDMI 输出 |
| 3 | 千兆以太网 | RTL8211F，RGMII |
| 4 | USB 3.0 | USB 3.0 Host |
| 5 | USB 2.0 Type-A | USB 2.0 Host |
| 6 | Type-C | OTG、固件下载、ADB |
| 7 | 4 PIN 电源座 | 12 V 辅助输入 |
| 8 | DC 座 | 12 V 直流输入 |
| 9 | 风扇接口 | 12 V 风扇 |
| 10 | 电池座 | 电池供电与温度检测 |
| 11 | 按键扩展 | BOOT、RST、PWRON |
| 12 | 耳机座 | 耳机/耳麦输出 |
| 13 | 喇叭 | 双声道扬声器输出 |
| 14 | MIC | 两路模拟麦克风输入 |
| 15 | TF 卡 | 启动或数据存储 |
| 16 | eDP 屏接口 | 40 PIN eDP |
| 17 | MIPI 屏接口 | 30 PIN MIPI DSI |
| 18 | MIPI 摄像头 | 30 PIN 4-Lane MIPI CSI |
| 19 | 独立按键 | VOL-、VOL+、RST、BOOT、PWRON |
| 20 | Wi-Fi/BT | AW869A 模组 |
| 21 | 调试串口 | UART0，4 PIN 1.25 mm |
| 22 | 4 PIN USB | 三路 USB 2.0 扩展座 |
| 23 | 闪光灯 | 3.3 V 闪光灯供电接口 |
| 24 | LT6911C 烧录座 | LT6911C 配置/烧录 |

## 反面接口位置

![X733BV2 反面接口](./x733-interface-back.png)

反面提供 M.2 插座，用于扩展 M.2 存储设备。实际支持的 Key、协议、尺寸和供电能力应以原理图及 BOM 为准。

## 电源与电池

开发板采用 12 V 直流输入，建议使用 12 V / 3 A 电源适配器。DC 座和 4 PIN 电源座为同一类 12 V 输入通道，接线前必须确认极性。

电池座引出 `VBAT`、`TS` 和 `GND`。`TS` 为电池温度检测信号，不得悬空替代电源脚，也不能直接接入外部高电平。

## USB

- Type-C 为 OTG/Device 接口，用于 PhoenixSuit 烧录和 ADB 调试。
- USB 3.0 Type-A 为一路 Host。
- USB 2.0 由 FE1.1S HUB 扩展：一路 Type-A 和三路 4 PIN 插座。
- 4 PIN USB 插座可连接 USB 触摸、摄像头或其他 USB 2.0 外设。

## HDMI 输入与输出

HDMI OUT 为 A733 原生输出。HDMI IN 经 LT6911C 转换为 MIPI CSI，系统侧按视频采集/摄像头链路使用：

```text
HDMI Source -> LT6911C -> MIPI CSI -> CSI/ISP/VIPP -> Android Application
```

调试 HDMI IN 时需要同时检查 LT6911C 固件、I2C、复位、中断、MIPI Lane、视频格式和媒体拓扑。

## 显示与摄像头

- MIPI DSI 连接器包含 4 组数据 Lane、时钟 Lane、面板电源、触摸 I2C、触摸中断/复位、背光 PWM 和面板复位。
- eDP 连接器包含 4 Lane 主链路、AUX、HPD、3.3 V 面板电源、12 V 背光电源、背光使能/PWM 和触摸 I2C。
- MIPI CSI 连接器包含 4 组数据 Lane、时钟 Lane、I2C、MCLK、复位/待机和摄像头电源。

完整定义见[接口引脚定义](./x733-pin-definition.md)。

## 音频、按键和散热

- 板载两路 MIC 接口，每路使用 `MICP/MICN` 差分输入。
- 双声道扬声器输出能力为 3 W@8 Ω，接错负载可能导致功放保护或损坏。
- 五个板载按键依次为 `VOL-`、`VOL+`、`RST`、`BOOT`、`PWRON`。
- 风扇接口输出 12 V，不能直接连接 5 V 风扇。
