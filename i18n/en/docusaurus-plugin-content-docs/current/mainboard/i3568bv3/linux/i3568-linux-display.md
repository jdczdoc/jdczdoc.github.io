---
sidebar_position: 4
title: Linux Display Configuration
description: i3568bv3 Linux Display Configuration
---

# Linux Display Configuration

Select the device-tree configuration for the fitted panel in `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi`. For the 7-inch 1024×600 MIPI panel, use the example below and enable only one panel configuration for the same DSI output.

```dts
#include "lcd-dsi0-mipi1024x600-WY070ML.dtsi"
//#include "lcd-dsi0-mipi-lvds-1080p.dtsi"
```

Check the display cable, backlight jumper and touch connector. Rebuild the kernel, collect the images and repackage after editing.

```bash
./build.sh kernel
./build.sh firmware
./build.sh updateimg
```

After boot, inspect DRM, backlight and touch logs over UART. For a blank screen, confirm the system has booted, then verify panel timing, interface mode and supply.
