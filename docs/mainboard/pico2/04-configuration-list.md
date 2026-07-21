---
title: 配置清单
sidebar_label: 配置清单
sidebar_position: 4
description: PICO2开发板标准配置、选配件和首次使用准备。
---

# 配置清单

## 标准配置

- PICO2 开发板一套
- Type-C 数据线一根
- USB 转串口转接板一个
- SDK、烧录工具和资料网盘链接

## 选配硬件

- 4 Ω / 3 W 喇叭
- 8 GB 或更大容量 TF 卡
- GC2083 MIPI 摄像头
- 2.0 英寸 240×320 SPI TFT LCD

## 首次上电建议

1. 将 USB 转串口接到 UART0 DEBUG 接口。
2. 串口参数通常使用 `115200 8N1`。
3. 使用支持数据传输的 Type-C 线缆连接电脑。
4. 首次烧录时准备 PhoenixSuit/LiveSuit 类工具及对应 USB 驱动。
5. 摄像头和 LCD 接入前先确认 FPC 触点方向和供电电压。
