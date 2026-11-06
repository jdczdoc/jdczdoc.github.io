---
sidebar_position: 9
title: 显示与摄像头适配
description: x8883bv3 显示与摄像头适配
---

# 显示与摄像头适配

## 启动 Logo 与 LK2

在 ProjectConfig.mk 中按屏幕分辨率设置 `BOOT_LOGO`，例如 `BOOT_LOGO=wsvga`。

```text
device/mediateksample/aiot8883p2_64_bsp_wifi/ProjectConfig.mk
vendor/mediatek/proprietary/external/BootLogo/logo
vendor/mediatek/proprietary/bootable/bootloader/lk2/project/aiot8883p2_64_bsp_wifi.mk
vendor/mediatek/proprietary/bootable/bootloader/lk2/dev/lcm/mt65xx_lcm_list.c
vendor/mediatek/proprietary/bootable/bootloader/lk2/dev/lcm/include/lcm_drv.h
```

## Kernel 显示与模块

```text
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts
kernel/kernel_device_modules-6.1/arch/arm64/configs/mgk_64_k61_defconfig
kernel/kernel_device_modules-6.1/drivers/gpu/drm/panel
kernel/kernel_device_modules-6.1/kernel/kleaf/mgk_64_k61.bzl
device/mediateksample/aiot8883p2_64_bsp_wifi/ko_order_table.csv
```

屏幕适配同时核对 LK2 与 Kernel 驱动、DSI lane/时序、电源、复位、背光和触摸 I2C/中断。LVDS 使用 LT9211D 桥接，连接器电源及信号按 J17/CN2 定义核对。驱动模块还需进入对应构建列表和加载顺序。

## 摄像头配置路径

```text
device/mediateksample/aiot8883p2_64_bsp_wifi/ProjectConfig.mk
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/cust_mt6897_camera_v4l2.dtsi
vendor/mediatek/proprietary/tools/dct/dws/mt6897/aiot8883p2_64_bsp_wifi.dws
vendor/mediatek/kernel_modules/mtkcam/imgsensor/src-v4l2/common/
```

先确认 CON3/J16 对应 C-PHY/D-PHY 模组，再核对电源电压、上电顺序、MCLK、控制总线地址、复位/PWDN 与 lane 映射。按实际传感器加入驱动、项目配置及设备树，编译打包后用 Camera 验证。

---

**参考资料**

网盘 `x8883-docs` → `X8883 Android平台用户手册-V1.0.pdf` → 第五章第 5.3 至 5.4 节。
