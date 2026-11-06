---
sidebar_position: 4
title: Linux 显示配置
description: i3568bv3 Linux 显示配置
---

# Linux 显示配置

在 `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi` 中选择与实际屏幕匹配的设备树配置。7 英寸 1024×600 MIPI 屏可使用以下配置，确保同一路 DSI 只启用一套屏参。

```dts
#include "lcd-dsi0-mipi1024x600-WY070ML.dtsi"
//#include "lcd-dsi0-mipi-lvds-1080p.dtsi"
```

检查排线、背光跳线和触摸接口。修改后重新编译内核、汇总镜像并打包。

```bash
./build.sh kernel
./build.sh firmware
./build.sh updateimg
```

启动后从串口查看 DRM、背光及触摸相关日志。黑屏时先判断系统是否已启动，再核对屏参、接口模式和供电。
