---
sidebar_position: 4
title: 接口说明
description: i6818 电源、USB、GPIO、HDMI、以太网、音频、Camera 和 LCD 接口说明
---

# 接口说明

## 电源与电池

开发板提供 5V 细头 DC 座作为直流电源输入，并提供单节锂电池接口。板内预留电池存放区域，开发板装成成品后该区域用于放置锂电池。

## USB HOST 与 OTG

开发板顶部有三路 USB HOST 2.0 接口，可连接鼠标、键盘、U 盘等 USB 设备。侧面提供 USB OTG 座，用于程序烧录和 PC 连接。

## GPIO / DEBUG 扩展口

顶部两个 USB 3.0 外观座实际为 GPIO 扩展接口，并非 USB 3.0 数据接口。DEBUG 扩展口可以通过外置串口调试板引出调试串口，默认 TTL 电平。

## HDMI 与显示

侧面提供 mini HDMI 接口。开发板默认使用 8 寸 LVDS 接口 1024 × 768 高清 IPS 屏，核心板信号同时覆盖 RGB、MIPI 和 LVDS 相关接口。

## Camera 与触摸

开发板底部默认集成 500 万像素 MIPI 摄像头并支持自动对焦。板上提供电容触摸屏接口。

## 以太网与无线

开发板提供千兆以太网接口，并内置 Wi-Fi / BT 模块。

## 音频接口

开发板内置双立体声喇叭和 MIC 输入，外置耳机输出接口。

## 启动与烧录

i6818 和 x6818 开发板一样采用免启动配置启动模式。开发板启动时会依次从 SD0、SD2 和 USB device 寻找 bootloader。默认 SD0 接外部 TF 卡，SD2 在核心板上接 eMMC，USB device 通过 OTG 线连接 PC，可通过 fastboot 在线烧写。

当 eMMC 中没有程序时，可以通过外接 TF 卡启动烧写。将 U-Boot 烧写到 TF 卡上，再将 TF 卡插到开发板 SD0 通道，通过 SD 卡启动后，再使用 Micro USB 延长线通过 fastboot 更新整个映像。已经正常烧写映像的开发板，长按 POWER 键即可开机。
