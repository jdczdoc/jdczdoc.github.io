---
title: Camera驱动适配
sidebar_label: Camera驱动适配
sidebar_position: 6
description: PICO2 VIN、MIPI CSI、Sensor驱动、设备树和摄像头切换流程。
---

# Camera驱动适配

PICO2 提供 2-lane MIPI CSI 接口，参考配置可使用 GC2083 等 Sensor。

## 软件链路

```text
Sensor
  → MIPI CSI/Combo PHY
  → VIN
  → ISP
  → MPP/VENC/应用
```

![Camera通路框架](../images/linux/image99.png)

## 驱动目录

Sensor 驱动示例：

```text
bsp/drivers/vin/modules/sensor/gc1084_mipi.c
```

实际使用 GC2083 时，应找到对应驱动文件、寄存器初始化表和 `sensor_list` 配置。

## 适配步骤

1. 确认硬件供电：1.2 V、1.8 V、2.8 V。
2. 确认 MCLK、RESET、PWDN、TWI 地址和 Lane 数。
3. 在 DTS 中启用 VIN、MIPI CSI、ISP 和 Sensor 节点。
4. 配置 Sensor 名称、I2C 地址、分辨率、帧率和数据格式。
5. Kernel 打开 VIN、V4L2、ISP 和 Sensor 驱动。
6. 重新编译 Kernel/DTB。
7. 板端检查媒体拓扑和视频节点。

```bash
dmesg | grep -iE "vin|csi|mipi|isp|sensor"
media-ctl -p
v4l2-ctl --list-devices
v4l2-ctl --list-formats-ext -d /dev/video0
```

## 常见故障

- Sensor I2C 无 ACK：检查电源、复位、地址和 TWI pinmux。
- CSI 无中断：检查 Lane 顺序、MCLK、时序和数据速率。
- ISP 图像异常：检查 Bayer 顺序、曝光、增益、调校文件和分辨率。
- 切换摄像头后不出图：同时检查 quick_config、DTS、Sensor 列表和固件中的 ISP 配置。
