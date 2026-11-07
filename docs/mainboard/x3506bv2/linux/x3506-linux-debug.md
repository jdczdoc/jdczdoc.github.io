---
sidebar_position: 3
title: "Linux 使用与调试"
description: "x3506bv2 Linux 使用与调试"
---

# Linux 使用与调试

## UART0 串口控制台

使用 3.3 V USB 转 TTL 适配器接到 [UART0 调试串口](../x3506-interface-details.md)。适配器 TX 接主板 RX，适配器 RX 接主板 TX，GND 对接。主板由 DC 电源供电，调试线连接 TX、RX 和 GND 即可。

串口终端设置为 **1500000 baud、8 个数据位、无校验、1 个停止位**，关闭硬件和软件流控。打开终端后给主板上电，即可查看启动日志。

## ADB 调试

若固件已启用 ADB，通过 Type-C OTG 将主板连接到电脑，在电脑端运行以下命令。

```bash
adb devices
adb shell
```

## 查询系统状态

进入串口控制台或 ADB shell 后，可查询系统版本、内存、分区、网口和内核日志。

```bash
uname -a
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/net/dev
df -h
dmesg
```
