---
sidebar_position: 4
title: Linux 显示配置
description: x3576bv3 Linux 显示配置
---

# Linux 显示配置

在 `kernel/arch/arm64/boot/dts/rockchip/rk3576-9tripod-x3576-evb.dtsi` 中检查 `dsi0` 相关配置。按实际屏幕确认分辨率、时序、排线、背光控制及 I2C 触摸电压。修改设备树后重新编译并打包。

```bash
./build.sh kernel
./build.sh updateimg
```

启动后用串口确认系统状态，再检查 DRM、面板、背光和触摸日志。HDMI OUT 用于接显示器，HDMI IN 采集依赖 LT6911C 和匹配的固件配置。
