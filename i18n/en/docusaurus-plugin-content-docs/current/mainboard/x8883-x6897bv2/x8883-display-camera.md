---
sidebar_position: 9
title: Display and Camera Adaptation
description: x8883bv3 Display and Camera Adaptation
---

# Display and Camera Adaptation

## Boot Logo and LK2

Set `BOOT_LOGO` in ProjectConfig.mk for the panel resolution, for example `BOOT_LOGO=wsvga`.

```text
device/mediateksample/aiot8883p2_64_bsp_wifi/ProjectConfig.mk
vendor/mediatek/proprietary/external/BootLogo/logo
vendor/mediatek/proprietary/bootable/bootloader/lk2/project/aiot8883p2_64_bsp_wifi.mk
vendor/mediatek/proprietary/bootable/bootloader/lk2/dev/lcm/mt65xx_lcm_list.c
vendor/mediatek/proprietary/bootable/bootloader/lk2/dev/lcm/include/lcm_drv.h
```

## Kernel Display and Modules

```text
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts
kernel/kernel_device_modules-6.1/arch/arm64/configs/mgk_64_k61_defconfig
kernel/kernel_device_modules-6.1/drivers/gpu/drm/panel
kernel/kernel_device_modules-6.1/kernel/kleaf/mgk_64_k61.bzl
device/mediateksample/aiot8883p2_64_bsp_wifi/ko_order_table.csv
```

Panel adaptation requires checking LK2 and kernel drivers, DSI lanes/timing, power, reset, backlight, and touch I2C/interrupts. LVDS uses an LT9211D bridge; verify connector power/signals against J17/CN2. Driver modules must also be included in the build lists and load order.

## Camera Configuration Paths

```text
device/mediateksample/aiot8883p2_64_bsp_wifi/ProjectConfig.mk
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/cust_mt6897_camera_v4l2.dtsi
vendor/mediatek/proprietary/tools/dct/dws/mt6897/aiot8883p2_64_bsp_wifi.dws
vendor/mediatek/kernel_modules/mtkcam/imgsensor/src-v4l2/common/
```

Identify the C-PHY/D-PHY module for CON3/J16, then check supply voltages, sequencing, MCLK, control-bus address, reset/PWDN and lane mapping. Add the sensor driver, project configuration and device-tree settings; build, package and validate with Camera.

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Android Platform User Manual V1.0 → Chapter 5, Sections 5.3 to 5.4.
