---
sidebar_position: 8
title: Android 测试与驱动
description: Pico PC RK3588S Android 测试程序、驱动和开发实战
---

# Android 测试与驱动

## Android 测试程序

| 测试项 | 说明 |
| --- | --- |
| 液晶屏测试 | 检查 DSI / HDMI 显示、颜色、坏点、背光 |
| 触摸屏测试 | 检查电容触摸坐标和多点触摸 |
| 发光二极管测试 | 检查 LED GPIO 控制 |
| 蜂鸣器测试 | 检查蜂鸣器控制 |
| 背光测试 | 检查背光亮度调节 |
| 按键测试 | 检查 Boot、Reset、Recovery、Power 等按键 |
| 电池测试 | 检查电池 / 电源相关状态 |
| 数模转换测试 | 检查 ADC 采样 |
| 重力传感器测试 | 检查 G-sensor |
| 音频测试 | 检查耳机、MIC、HDMI 音频 |
| 摄像头测试 | 检查 CSI 或 USB 摄像头 |
| 无线网络测试 | 检查 Wi-Fi / BT |
| 网络连接测试 | 检查千兆以太网 |
| 串口测试 | 检查 UART / Debug 串口 |
| 外部存储器测试 | 检查 TF 卡 |
| U 盘测试 | 检查 USB 存储 |

## Android 内核驱动

Android 手册列出以下驱动章节：

- G-sensor 驱动。
- 电容触摸屏驱动。
- 液晶屏驱动。
- 按键驱动。
- Wi-Fi/BT 模块驱动。
- proc 文件系统。

## 开发项目实战

手册包含以下实战项：

- 修改 `init.rc`。
- 修改开机动画。
- 修改 U-Boot 开机 LOGO。
- 修改内核 LOGO。
- 配置使用 MIPI 屏。
- 关机充电和低电预充。
- Android Surface 旋转。

## MIPI 屏配置

已调好的屏幕配置文件位于：

```text
kernel/arch/arm64/boot/dts/rockchip
```

可参考：

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

重点查看 `dsi0` 相关配置，确认 panel 节点、背光、供电、reset GPIO、enable GPIO、屏参和触摸配置。

## 关机充电与低电预充

常见配置项：

| 配置项 | 说明 |
| --- | --- |
| `rockchip,U-Boot-charge-on` | U-Boot 关机充电，与 Android 关机充电互斥 |
| `rockchip,Android-charge-on` | Android 关机充电，与 U-Boot 关机充电互斥 |
| `rockchip,U-Boot-low-power-voltage` | 低电预充到允许开机的电压 |
| `rockchip,screen-on-voltage` | 低电预充到允许亮屏的电压 |
