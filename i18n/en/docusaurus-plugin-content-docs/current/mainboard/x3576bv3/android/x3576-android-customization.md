---
sidebar_position: 5
title: Android Drivers and Customization
description: x3576bv3 Android Drivers and Customization
---

# Android Drivers and Customization

## Kernel Drivers and Diagnostics

| Function | Path Relative to Kernel Root |
| --- | --- |
| Accelerometer | `drivers/input/sensors/accel/lis3dh.c` |
| Capacitive touch | `drivers/input/touchscreen/` |
| Display panel | `drivers/gpu/drm/panel/` |
| Keys | `drivers/input/keyboard/` |
| Wireless | `drivers/net/wireless/rockchip_wlan/` |

Locate drivers under the kernel directory used by the SDK. Check `gslX680.c` for touch, `panel-simple.c` for display, and `rk_keys.c` and `adc-keys.c` for keys. Run these commands on the board over UART or ADB shell.

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## Display Device Tree and Orientation

Trace DSI0 from the RK3576 board DTS selected by the build. The SDK example is `Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3576-evb1-v10.dts`, with panel parameters potentially in an included DTSI. Set `SF_PRIMARY_DISPLAY_ORIENTATION` to 0, 90, 180 or 270 for the Android primary display.

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```

## Init Scripts and Boot Logos

After editing `system/core/rootdir/init.rc`, rebuild affected system images and package them for the current partition layout. Check `logo.bmp` and `logo_kernel.bmp` in the kernel directory and use the 8-bit BMP format and compression settings required by the SDK.

## Power-Off Charging

Battery-powered products can select either U-Boot or Android power-off charging in the `charge-animation` node. Set low-battery boot and display thresholds for the battery design. Example values below are in mV.

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

SDK directories `RKDocs/android/` and `RKDocs/common/` contain adaptation guides for SELinux, Wi-Fi, DRM, U-Boot and PMICs.
