---
sidebar_position: 5
title: Android 驱动与适配
description: i3568bv3 Android 驱动与适配
---

# Android 驱动与适配

## 驱动与系统诊断

| 功能 | SDK 路径 |
| --- | --- |
| 重力传感器 | `kernel/drivers/input/sensors/accel/lis3dh.c` |
| 电容触摸 | `kernel/drivers/input/touchscreen/` |
| 液晶屏 | `kernel/drivers/gpu/drm/panel/panel-simple.c` |
| 按键 | `kernel/drivers/input/keyboard/` |
| Wi-Fi/蓝牙 | `kernel/drivers/net/wireless/rockchip_wlan/` |

触摸适配可检查 `gslX680.c`，按键可检查 `rk_keys.c` 和 `adc-keys.c`。在板端串口或 ADB shell 查看当前状态。

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## 设备树与显示

在 `kernel/arch/arm64/boot/dts/rockchip/rk3568-evb1-ddr4-v10.dtsi` 中检查 DSI0 与屏参。根据屏幕配置设备树并重新打包启动镜像。Android 主屏方向可在产品配置中设置 `SF_PRIMARY_DISPLAY_ORIENTATION`，取值为 0、90、180 或 270。

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```

## 启动脚本与标志

启动脚本位于 `system/core/rootdir/init.rc`。修改后重新构建受影响的系统镜像，按当前分区布局打包更新。U-Boot 与内核阶段的启动图分别使用内核目录下的 `logo.bmp` 和 `logo_kernel.bmp`，替换时遵循 SDK 所要求的 8-bit BMP 格式及压缩规则。

## 关机充电配置

带电池的产品方案可在设备树的 `charge-animation` 节点配置关机充电。U-Boot 与 Android 充电模式互斥，低电开机和亮屏阈值须按电池方案设置。

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

以上电压为配置示例，单位 mV。SDK 的 `RKDocs/android/` 和 `RKDocs/common/` 可查找 SELinux、Wi-Fi、DRM、PMIC、U-Boot 与其他驱动的开发说明。
