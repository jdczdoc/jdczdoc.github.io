---
sidebar_position: 5
title: Android 驱动与适配
description: x3576bv3 Android 驱动与适配
---

# Android 驱动与适配

## 内核驱动与诊断

| 功能 | 内核相对路径 |
| --- | --- |
| 重力传感器 | `drivers/input/sensors/accel/lis3dh.c` |
| 电容触摸 | `drivers/input/touchscreen/` |
| 显示面板 | `drivers/gpu/drm/panel/` |
| 按键 | `drivers/input/keyboard/` |
| 无线 | `drivers/net/wireless/rockchip_wlan/` |

按实际 SDK 的内核目录定位驱动。触摸可检查 `gslX680.c`，屏幕可检查 `panel-simple.c`，按键可检查 `rk_keys.c` 和 `adc-keys.c`。以下命令在板端串口或 ADB shell 执行。

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## 显示设备树与方向

从实际构建使用的 RK3576 板级 DTS 追踪 DSI0 节点。SDK 示例路径为 `Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3576-evb1-v10.dts`，屏参可能位于对应的 DTSI 中。Android 主屏方向通过 `SF_PRIMARY_DISPLAY_ORIENTATION` 配置，取值 0、90、180 或 270。

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```

## 启动脚本与启动图

修改 `system/core/rootdir/init.rc` 后重新构建受影响的系统镜像，并按当前分区方案打包。启动图可在内核目录检查 `logo.bmp` 与 `logo_kernel.bmp`，使用 SDK 要求的 8-bit BMP 格式及压缩设置。

## 关机充电

采用电池的产品可在设备树 `charge-animation` 节点选择 U-Boot 或 Android 关机充电，两者互斥。低电开机及亮屏阈值按电池方案核对，以下为配置示例，单位 mV。

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

SDK 内的 `RKDocs/android/` 和 `RKDocs/common/` 提供 SELinux、Wi-Fi、DRM、U-Boot、PMIC 等适配说明。
