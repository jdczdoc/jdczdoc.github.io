---
sidebar_position: 23
title: FAQ
description: x881 FAQ
---

# FAQ

## X881 适合哪些产品？

AI 眼镜、语音视觉交互、AI 直播摄像头、手持相机等。实际算力、视频规格和功耗需结合当前固件及硬件版本验证。

## V881 与 JL7018 如何分工？

V881 承担 Linux、多媒体和主要业务；JL7018 配合低功耗唤醒及其音频扩展。分别核对两侧 MIC、喇叭、GPIO 和串口。

## 内存容量如何确认？

硬件表内存字段为 128KB，Linux 手册中还有通用平台的容量示例。以当前板卡物料、启动日志、/proc/meminfo 和 ramparser 核对，应用按实测可用内存规划。

## 应选择哪个 lunch 方案？

本次手册明确为 v861-9tripod_aiglass-tina。SDK 更新后检查 lunch 实际列表、README 和交付版本。

## 为什么界面亮但没有图像？

先检查 DBI 转 SPI 转接、面板电源、复位和背光，再检查 CS/DC、SPI 模式、初始化命令和像素格式。

## 摄像头如何排查？

按供电 → MCLK/复位 → I2C ID → MIPI lane → VIN/ISP → 应用/编码顺序检查。

## 烧录失败如何处理？

核对 USB 数据线、供电和 UsbDriver，确认 PhoenixSuit 已识别设备。成功后不启动时，检查方案、存储及分区并抓取完整 UART 日志。

## quick_config 如何恢复？

查看执行输出和 git diff，按变更文件恢复；它没有统一撤销命令。恢复后重新编译与打包。

## 录流为何导致系统空间不足？

挂载目录没有挂载外部介质时，写入会落到根文件系统 overlay。先检查 mount、df 和实际写入位置。

## 编译提速从哪里开始？

先检查 CPU、内存、交换空间和磁盘 I/O，再调整 -j。网络盘或机械硬盘、内存不足和单线程打包都可能成为瓶颈。

```bash
nproc
free -h
df -h
vmstat 1
# If sysstat is installed
iostat -xz 1
```
