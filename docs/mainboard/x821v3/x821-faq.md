---
title: FAQ
sidebar_position: 18
description: "X821V30常见硬件、配网、显示、摄像头和开发问题"
---

# FAQ

## X821适合什么产品？

适合AI玩具、桌面智能体、低功耗门铃、智能门锁、IPC、语音视觉交互终端和小尺寸SPI屏设备。64MB内存决定其更适合高度定制、功能明确的嵌入式产品，而不是通用桌面Linux。

## 是否支持双频Wi-Fi？

硬件手册明确为2.4GHz、1T1R，不能按双频Wi-Fi设计。BLE支持情况以当前无线固件和应用为准。

## 如何实现语音打断唤醒？

依赖双MIC采集、Audio Codec、语音前处理/唤醒算法和应用状态机。硬件提供双MIC及唤醒键，实际打断效果还受回声消除、扬声器音量、麦克风布局和模型参数影响。

## 支持哪些配网方式？

资料列出Wi-Fi配网、摄像头二维码配网和声波配网；蓝牙配网标记为软件版本相关。量产前应以当前应用固件实测确认。

## 如何搭建AI智能体？

基本链路：

```text
MIC/Camera -> 本地前处理 -> Wi-Fi网络 -> 云端或局域网模型
                         -> TTS/音频播放
                         -> SPI LCD表情/状态显示
```

需要同时规划网络断线、云服务鉴权、音频回声、内存池、缓存和OTA升级。

## 摄像头无图像怎么查？

先检查电源、MCLK、复位和I2C ID，再查MIPI lane/速率、VIN/ISP建链和MPP配置。不要一开始只改ISP参数。

## SPI屏白屏怎么查？

检查背光与面板供电、RESET、CS/DC、SPI mode、初始化命令、Sleep Out和Display On。能读ID不代表初始化时序正确。

## 编译很慢怎么办？

先确认瓶颈：

```bash
nproc
free -h
iostat -xz 1
vmstat 1
```

增加`-j`只对可并行任务有效。机械硬盘、网络盘、内存不足和单线程打包阶段都可能让32线程与12线程差别很小。

## 修改quick_config后如何恢复？

`quick_config`没有统一撤销功能。使用Git恢复：

```bash
git status
git diff
git restore <files>
```

存储介质等单向配置建议在独立分支执行。

## 固件烧录成功但不启动？

核对lunch方案、Flash类型、分区表、BOOT0存储配置、RTOS镜像和U-Boot设备树。抓取UART0从上电开始的完整日志，比只观察屏幕更有效。
