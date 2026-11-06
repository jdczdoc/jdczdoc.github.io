---
sidebar_position: 5
title: Android Drivers and Customization
description: i3568bv3 Android Drivers and Customization
---

# Android Drivers and Customization

## Drivers and Diagnostics

| Function | SDK Path |
| --- | --- |
| Accelerometer | `kernel/drivers/input/sensors/accel/lis3dh.c` |
| Capacitive touch | `kernel/drivers/input/touchscreen/` |
| LCD panel | `kernel/drivers/gpu/drm/panel/panel-simple.c` |
| Keys | `kernel/drivers/input/keyboard/` |
| Wi-Fi/Bluetooth | `kernel/drivers/net/wireless/rockchip_wlan/` |

For touch, check `gslX680.c`. For keys, check `rk_keys.c` and `adc-keys.c`. Inspect current state through the board UART or ADB shell.

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## Device Tree and Display

Check DSI0 and panel parameters in `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi`. Configure the device tree for the panel and repackage the boot image. Set `SF_PRIMARY_DISPLAY_ORIENTATION` in the product configuration to 0, 90, 180 or 270 for the Android primary display.

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```

## Init Scripts and Boot Logos

The init script is `system/core/rootdir/init.rc`. After editing, rebuild the affected system image and package it for the current partition layout. The U-Boot and kernel boot stages use `logo.bmp` and `logo_kernel.bmp` in the kernel directory. Follow the SDK’s 8-bit BMP format and compression requirements when replacing them.

## Power-Off Charging Configuration

Battery-powered product designs can configure power-off charging in the `charge-animation` device-tree node. U-Boot and Android charging modes are mutually exclusive. Set low-battery boot and display thresholds for the battery design.

```dts
charge-animation {
    compatible = "rockchip,uboot-charge";
    rockchip,uboot-charge-on = <1>;
    rockchip,android-charge-on = <0>;
    rockchip,uboot-low-power-voltage = <3400>;
    rockchip,screen-on-voltage = <3500>;
    status = "okay";
};
```

The voltages are example values in mV. See `RKDocs/android/` and `RKDocs/common/` in the SDK for SELinux, Wi-Fi, DRM, PMIC, U-Boot and other driver documentation.
