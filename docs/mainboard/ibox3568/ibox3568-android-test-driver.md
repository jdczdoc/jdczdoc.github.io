---
sidebar_position: 8
title: Android 测试与驱动
description: iboibox3568 Android 测试程序、驱动入口和常用 proc 查询
---

# Android 测试与驱动

:::note
本页软件流程沿用前面整理的 X3568 软件文档模板。ibox3568 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 ibox3568 SDK 和发布资料为准。
:::

本页只保留对硬件验证和驱动调试有用的内容，删除其他产品列表和无关 RKDocs 清单。

## Android 测试程序

原手册说明：iboibox3568 当时尚未完全移植 Android 测试程序，测试项说明主要沿用 x3288、x3399、x30、x3399pro 等平台。实际可用测试项以当前固件集成的测试 APK 为准。

### 液晶屏测试

点击纯色区域可切换颜色，用于观察 LCD 是否有丢色、坏点等问题。

### 触摸屏测试

点击开始测试后，可在屏幕上手写。量产时通常通过画对角线验证触摸电路是否正常。

### LED / 蜂鸣器 / 背光测试

- LED 测试：点击灯图标，红色表示亮，灰色表示灭；
- 蜂鸣器测试：按住开始测试蜂鸣器鸣叫，松开停止；
- 背光测试：拖动滑块，背光亮度随之变化。

### 按键测试

按下或抬起主板上的独立按键，界面应显示对应按键的按下和抬起动作。

### ADC / G-sensor 测试

ADC 测试用于监测电压通道变化；G-sensor 测试用于观察 X、Y、Z 轴数据随主板姿态变化。

### 音频 / 摄像头测试

音频测试用于确认喇叭或耳机输出；摄像头测试用于确认摄像头预览和采集功能。

### Wi-Fi / 有线网络 / 串口 / 存储测试

- Wi-Fi 测试可扫描附近网络；
- 网络连接测试用于确认有线或无线网络是否可用；
- 串口测试时将 TXD 和 RXD 短接，验证自发自收；
- TF 卡和 U 盘测试用于确认外部存储识别。

## Android 内核驱动

常见驱动调试方向包括 G-sensor、电容触摸屏、液晶屏、按键、Wi-Fi/BT 模块和 proc 文件系统。驱动路径和配置以当前 SDK 为准。

## 常用 proc 查询

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
cat /proc/kmsg
```

## Android 项目实战

### 修改 init.rc

在 `system/core/rootdir` 目录下修改 `init.rc` 后执行：

```bash
./mk.sh -s
```

重新生成 `system.img` 并烧写。若修改不生效，可先删除 `out` 目录下的旧 `init.rc` 后再编译。

### 修改开机动画

Android 开机动画可定制，具体文件位置和打包方式以当前 Android11 SDK 为准。

### 修改 U-Boot / Kernel LOGO

U-Boot 读取 kernel 目录下的 `logo.bmp` 和 `logo_kernel.bmp`。`logo.bmp` 用于 U-Boot LOGO，`logo_kernel.bmp` 用于内核 LOGO。图片格式和尺寸需符合 U-Boot 显示要求。

### 配置 MIPI 屏

屏配置文件位于：

```text
kernel/arch/arm64/boot/dts/rockchip
```

示例 7 寸 MIPI 屏配置文件：

```text
lcd-dsi0-mipi1024x600-WY070ML.dtsi
```

在 `rk3568-evb1-ddr4-v10.dtsi` 中选择对应液晶模组即可。

### 关机充电和低电预充

可在 U-Boot 充电节点中配置：

```dts
charge-animation {
    compatible = "rockchip,U-Boot-charge";
    rockchip,U-Boot-charge-on = <1>;
    rockchip,Android-charge-on = <0>;
    rockchip,U-Boot-low-power-voltage = <3400>;
    rockchip,screen-on-voltage = <3500>;
    status = "okay";
};
```

其中低电预充和亮屏电压可根据产品需求调整。

### Android Surface 旋转

Surface Flinger 旋转参数可配置为 0 / 90 / 180 / 270：

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```
