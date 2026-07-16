---
sidebar_position: 10
title: Linux QT 文件系统
description: iboibox3568 Buildroot、QT 文件系统和 MIPI 屏配置
---

# Linux QT 文件系统

:::note
本页软件流程沿用前面整理的 X3568 软件文档模板。ibox3568 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 ibox3568 SDK 和发布资料为准。
:::

本页整理 iboibox3568 Linux / QT 文件系统相关内容，重点保留 Buildroot 编译和 MIPI 屏配置入口。

## Buildroot 文件系统

iboibox3568 Linux SDK 的 `build.sh` 脚本已集成 Buildroot rootfs 编译目标：

```bash
./build.sh buildroot
```

如果需要完整编译 U-Boot、Kernel、rootfs 和 recovery，可执行：

```bash
./build.sh all
```

编译完成后，rootfs 镜像会释放到 `rockdev` 目录。

## 打包固件

```bash
./build.sh firmware
./build.sh updateimg
```

`update.img` 用于通过 RKDevTool 进行统一固件升级。

## 配置使用 MIPI 屏

屏配置文件位于：

```text
kernel/arch/arm64/boot/dts/rockchip
```

7 寸 MIPI 屏配置文件示例：

```text
lcd-dsi0-mipi1024x600-WY070ML.dtsi
```

在 `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi` 中选择需要使用的液晶模组。例如需要使用 7 寸 MIPI 屏时：

```dts
//#include "lcd-dsi0-mipi1024x600-WY070ML.dtsi"
#include "lcd-dsi1-mipi1024x600-WY070ML.dtsi"
```

实际项目应结合 LCD 接口硬件连接、背光、触摸和设备树配置进行确认。
