---
sidebar_position: 9
title: 驱动与调试
description: I3588 Android 和 Linux 驱动路径及调试命令
---

# 驱动与调试

本页合并 Android 平台用户手册和 Linux 平台用户手册中的驱动路径、proc 查询命令和项目实战内容。

## 常见驱动路径

| 功能 | 参考路径 |
|---|---|
| G-sensor | `kernel/drivers/input/sensors/accel/lis3dh.c`，`hardware/rockchip/sensor/st` |
| 电容触摸屏 | `kernel/drivers/input/touchscreen/` |
| 液晶屏 | `kernel/drivers/gpu/drm/panel/`，`panel-simple.c` |
| 按键 | `kernel/drivers/input/keyboard/`，`rk_keys.c`，`adc-keys.c` |
| Wi-Fi / BT | `kernel/drivers/net/wireless/rockchip_wlan` |
| 摄像头 | `hardware/rockchip/camera/SiliconImage/isi/drv` |

## 常用 proc 查询命令

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
cat /proc/kmsg
df -h
```

## Android 项目实战

### 修改 init.rc

在 `system/core/rootdir` 目录下找到 `init.rc`，修改后重新编译对应镜像并烧写。

### 修改开机动画

Android 开机动画可参考 RKDocs 中 Android 相关文档进行定制。

### 修改 U-Boot 开机 LOGO

U-Boot 默认读取 kernel 根目录下的：

```text
logo.bmp
logo_kernel.bmp
```

`logo.bmp` 用作 U-Boot 开机 LOGO，`logo_kernel.bmp` 用作内核 LOGO。图片格式和尺寸需要满足 U-Boot 显示要求。

### 配置 MIPI 屏

MIPI 屏配置文件位于：

```text
kernel5.10/arch/arm64/boot/dts/rockchip
```

需要配置屏幕 timing、接口类型以及使用的 VOP 通道。

### 关机充电和低电预充

相关配置可参考设备树中的 `charge-animation` 节点：

```dts
charge-animation {
    compatible = "rockchip,uboot-charg";
    rockchip,uboot-charge-on = <1>;
    rockchip,android-charge-on = <0>;
    rockchip,uboot-low-power-voltage = <3400>;
    rockchip,screen-on-voltage = <3500>;
    status = "okay";
};
```

### Android Surface 旋转

Android 显示旋转可修改 Surface Flinger 方向配置，常见值为 `0 / 90 / 180 / 270`。

## Linux 项目实战

Linux 下配置 MIPI 屏时，可在以下路径查看已有屏幕配置：

```text
kernel/arch/arm64/boot/dts/rockchip
```

再结合主板 DTSI 中的 DSI 配置进行修改。
