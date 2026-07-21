---
title: 显示、U-Boot和SPI LCD
sidebar_label: 显示、U-Boot和SPI LCD
sidebar_position: 7
description: PICO2 DISP、LCD_FB、FBTFT、U-Boot开机LOGO和SPI LCD驱动配置。
---

# 显示、U-Boot和SPI LCD

PICO2 的 12Pin LCD 接口主要用于 SPI/DBI 屏幕。SDK 中可能同时存在 DISP、LCD_FB 和 FBTFT 三类实现，应根据当前方案选择一套，避免重复占用 SPI 和 GPIO。

## Kernel DISP 配置

菜单路径示例：

```text
Allwinner BSP
  → Device Drivers
    → Video Drivers
      → DISP Driver Support (sunxi-disp2)
```

![DISP配置菜单](../images/linux/image103.png)

设备树需要配置：

```text
SPI控制器
面板节点
复位和背光GPIO
LCD时序和分辨率
DISP输出绑定
```

关键参数包括：

| 参数 | 说明 |
| --- | --- |
| `lcd_driver_name` | 面板驱动名称，必须与驱动注册名称一致 |
| `lcd_if` | LCD 接口类型 |
| `lcd_x` / `lcd_y` | 有效分辨率 |
| `lcd_ht` / `lcd_vt` | 水平和垂直总周期 |
| `lcd_hbp` / `lcd_vbp` | 后肩参数 |
| `lcd_dclk_freq` | 像素时钟 |
| `lcd_start_delay` | 起屏延迟 |
| `lcd_pwm_*` | 背光 PWM |

## U-Boot 显示与 LOGO

实现流程：

```text
移植/启用面板驱动
  → U-Boot Kconfig
  → U-Boot DTS
  → DISP和LCD节点
  → boot-resource分区
  → logo文件打包
```

`boot-resource` 分区示例：

```ini
[partition]
name         = boot-resource
size         = 1024
downloadfile = "boot-resource.fex"
user_type    = 0x8000
```

LOGO 图片应满足 SDK 对 BMP 位深、尺寸、方向和文件名的要求。

## SPI LCD 调试

```bash
dmesg | grep -iE "spi|lcd|disp|pwm"
cat /sys/kernel/debug/pinctrl/*/pinmux-pins
cat /sys/kernel/debug/clk/clk_summary
```

故障顺序：

```text
供电/背光
→ RESET/CS/DC
→ SPI时钟和模式
→ 初始化寄存器
→ 颜色格式
→ 分辨率和方向
→ 刷新带宽
```
