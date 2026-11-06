---
sidebar_position: 4
title: Linux Display Configuration
description: x3576bv3 Linux Display Configuration
---

# Linux Display Configuration

Inspect `dsi0` in `kernel/arch/arm64/boot/dts/rockchip/rk3576-9tripod-x3576-evb.dtsi`. Verify panel resolution, timing, cable, backlight control and I2C touch voltage. Rebuild and package after editing the device tree.

```bash
./build.sh kernel
./build.sh updateimg
```

Check boot state over UART, then inspect DRM, panel, backlight and touch logs. Connect displays to HDMI OUT. HDMI IN capture depends on LT6911C and matching firmware configuration.
