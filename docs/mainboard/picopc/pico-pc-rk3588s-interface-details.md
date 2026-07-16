---
sidebar_position: 3
title: 接口说明
description: Pico PC RK3588S 外部接口使用说明
---

# 接口说明

![Pico PC RK3588S 接口图](./pico-pc-rk3588s-interface-map.png)

## 电源与启动按键

Pico PC RK3588S 提供 5V Type-C 供电口。板上包含 Boot、Reset、Recovery 和 Power 独立按键：Boot 可用于 MaskRom 或强制升级，Recovery 用于升级流程，Reset 用于硬复位，Power 用于开关机控制。

## USB 与 Type-C

主板包含双层 USB HOST 3.0、双层 USB HOST 2.0 和标准 Type-C 接口。Type-C 接口可用于程序下载等场景，USB HOST 可连接 U 盘、鼠标、键盘、USB 摄像头、USB 无线模块等外设。

## 显示与摄像头

显示侧包含 Micro HDMI 输出接口和 MIPI DSI 显示接口。摄像头侧包含 MIPI CSI 摄像头接口。硬件手册的软件资源表中，Android 12 支持 CSI 摄像头，Linux + Qt 也支持 CSI 摄像头；Debian 10 与 Ubuntu 列为不支持 CSI 摄像头。

## 网络与无线

GMAC 用于千兆以太网接口，并与 PCIe 相关。板载 Wi-Fi / BT 模块支持双频 Wi-Fi 5.0 和 Bluetooth。

## 音频

耳机座为 4 级带 MIC 耳机座。软件资源表中，音频在 Android 12、Debian 10、Ubuntu 和 Linux + Qt 下均支持；录音仅 Android 12 支持，Debian 10、Ubuntu 和 Linux + Qt 标记为不支持。

## GPIO 与调试串口

主板提供约 28 个 GPIO 扩展口。UART2 为 TTL 电平接口，默认作为调试串口使用。
