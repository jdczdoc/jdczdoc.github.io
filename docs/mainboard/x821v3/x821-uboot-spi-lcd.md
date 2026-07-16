---
title: U-Boot LOGO与SPI LCD
sidebar_position: 12
description: "V821 U-Boot显示、开机LOGO和SPI DBI屏移植流程"
---

# U-Boot LOGO与SPI LCD

## U-Boot显示流程

1. 将已验证的内核面板初始化逻辑移植到U-Boot面板驱动。
2. 在U-Boot defconfig中启用DISP、LCD、framebuffer和BMP/LOGO支持。
3. 检查GMAC、SPI、PWM等引脚复用冲突。
4. 在`uboot-board.dts`配置背光PWM、DISP和LCD节点。
5. 在分区表中加入资源分区并打包LOGO图片。
6. 启动时先验证纯色，再验证BMP LOGO。

## LOGO图片

- 使用驱动支持的BMP位深和压缩格式，通常选择未压缩24位BMP。
- 分辨率最好与LCD一致，避免U-Boot中额外缩放。
- 图片文件名、资源分区和环境变量必须一致。
- U-Boot体积超限时检查调试符号、命令、文件系统和未使用驱动。

## SPI LCD/DBI方案

SPI LCD通常包含：

```text
U-Boot SPI控制器 -> DBI/面板驱动 -> framebuffer -> LOGO
Linux SPI控制器 -> panel/FB驱动 -> framebuffer或DISP -> LVGL/应用
```

设备树示例：

```dts
&spi0 {
    status = "okay";

    panel@0 {
        compatible = "vendor,panel-model";
        reg = <0>;
        spi-max-frequency = <48000000>;
        reset-gpios = <&pio ...>;
        dc-gpios = <&pio ...>;
        status = "okay";
    };
};
```

## 常见问题

| 现象 | 优先检查 |
| --- | --- |
| 全黑 | 供电、背光、复位、CS/DC、初始化命令 |
| 白屏 | 面板未退出Sleep、SPI无数据、方向/像素格式错误 |
| 花屏 | SPI mode、位宽、RGB/BGR、窗口范围、时钟过高 |
| 刷新慢 | SPI频率、逐像素写、未使用DMA/G2D、刷新区域过大 |
| U-Boot亮内核黑 | 两阶段引脚、时钟、复位或面板初始化不一致 |
| 内核亮U-Boot黑 | U-Boot未编入面板驱动或资源分区/LOGO配置错误 |
