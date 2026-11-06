---
sidebar_position: 3
title: 硬件接口
description: x3576bv3 硬件接口
---

# 硬件接口

## 电源、按键与散热

使用 12 V / 3 A 适配器。板载 POWER、RESET、BOOT 用于开关机、复位和下载操作。12 V 风扇座按板载标记接线。外接按键、电源座及风扇线序见板载接口引脚页。

![12 V 输入](./x3576-dc-input.png)

![板载按键](./x3576-keys.png)

![风扇电源](./x3576-fan.png)

## 调试串口与扩展

UART0 为 TTL 调试串口。主板上标 UART2 的扩展座按接口定义连接 UART3，参考电源为 1.8 V。RS232 座经 MAX3232 转换，使用匹配的 RS232 设备。连接 TTL 串口前核对电平，TX/RX 交叉并共地。

![UART0 调试座](./x3576-debug-uart.png)

![TTL 扩展串口](./x3576-ttl-uart.png)

![RS232 座](./x3576-rs232.png)

![ADC 扩展座](./x3576-adc.png)

## USB 与 TF

Type-C OTG 用于固件下载和 ADB。USB 3.0 Type-A 用于外接高速设备，USB 2.0 由 Hub 扩展为一个 Type-A 与四个 4-pin 2.0 mm 座。TF 卡可用于外部存储，启动功能取决于固件。

![Type-C OTG](./x3576-typec-otg.png)

![USB 2.0 Type-A](./x3576-usb2.png)

![USB 2.0 扩展座](./x3576-usb2-header.png)

![USB 3.0 Type-A](./x3576-usb3.png)

![TF 卡座](./x3576-tf-card.png)

## 显示、摄像头与触摸

HDMI OUT 输出音视频，HDMI IN 通过 LT6911C 转为 MIPI 输入。显示使用 MIPI DSI，触摸使用 6-pin I2C 座，电源可选 3.3 V 或 1.8 V。两路 CSI 的线序和供电不同，接入模组前逐脚核对。

![HDMI 输出](./x3576-hdmi-out.png)

![HDMI 输入](./x3576-hdmi-in.png)

![MIPI DSI](./x3576-dsi.png)

![MIPI CSI0](./x3576-csi0.png)

![MIPI CSI1](./x3576-csi1.png)

## 网络与 4G

RJ45 支持千兆以太网。板载 VS2275P 提供 Wi-Fi 6 和蓝牙。4G 模组接入 PCIe 扩展座后，配合 SIM 卡、天线和对应驱动使用。

![千兆以太网](./x3576-ethernet.png)

![Wi-Fi/蓝牙模组](./x3576-wifi-bt.png)

![SIM 卡座](./x3576-sim.png)

![PCIe 扩展座](./x3576-pcie.png)

## 音频与红外

耳机座可连接耳机或功放输入，LINE IN 提供音频输入。板载麦克风可用于录音。左右声道各有一路 0.5 W 喇叭输出，红外接收头用于匹配的遥控器。

![耳机座](./x3576-headphones.png)

![LINE IN](./x3576-line-in.png)

![左右声道喇叭座](./x3576-speaker.png)

![红外接收头](./x3576-ir.png)
