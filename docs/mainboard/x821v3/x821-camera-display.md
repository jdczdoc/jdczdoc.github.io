---
title: Camera与LCD显示
sidebar_position: 11
description: "V821 Camera驱动、DISP、LCD FB和显示时序配置"
---

# Camera与LCD显示

## Camera通路

V821摄像头链路由Sensor、MIPI CSI/DVP接收、VIN、ISP、编码器和应用组成。驱动适配时按链路逐级确认：

1. I2C能否读到Sensor ID。
2. MCLK、复位、PWDN和电源时序是否正确。
3. MIPI lane数、数据率、VC/DT和分辨率是否一致。
4. VIN/ISP是否正常建链并输出帧。
5. H.264/JPEG编码和应用缓冲是否匹配。

常用目录：

```text
bsp/drivers/vin/                    VIN/CSI/ISP相关驱动
bsp/drivers/vin/modules/sensor/     Sensor驱动
platform/allwinner/eyesee-mpp/      多媒体应用和Sample
```

使用`quick_config`切换Sensor后，仍需检查`board.dts`中的I2C地址、GPIO、电源和MIPI通道。

## 显示架构

![V821显示驱动架构](./linux-display-architecture.png)

V821资料包含三类显示路径：

- DISP驱动：使用`/dev/disp`，提供图层、旋转和显示控制。
- LCD_FB：通过framebuffer接口输出。
- FBTFT/SPI DBI：适合小尺寸SPI LCD。

## 设备树配置

典型配置包括：

```dts
&disp {
    status = "okay";
};

&lcd0 {
    lcd_used = <1>;
    lcd_driver_name = "panel_name";
    lcd_if = <...>;
    lcd_x = <240>;
    lcd_y = <320>;
    lcd_dclk_freq = <...>;
    status = "okay";
};
```

关键时序参数：

| 参数 | 含义 |
| --- | --- |
| `lcd_x` / `lcd_y` | 有效分辨率 |
| `lcd_ht` | 水平总周期 |
| `lcd_hbp` | 水平后沿相关参数 |
| `lcd_vt` | 垂直总周期 |
| `lcd_vbp` | 垂直后沿相关参数 |
| `lcd_dclk_freq` | 像素时钟，单位按驱动约定 |
| `lcd_start_delay` | TCON启动延时 |
| `lcd_width` / `lcd_height` | 物理尺寸，用于DPI计算 |

## 调试顺序

- 先确认背光和面板电源。
- 检查SPI/DBI波形和复用是否正确。
- 使用纯色测试排除应用层问题。
- 花屏通常优先检查分辨率、像素格式、RGB/BGR顺序和行列地址范围。
- 无显示但背光亮时，检查复位和初始化命令是否执行。
