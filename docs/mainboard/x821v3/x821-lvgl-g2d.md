---
title: LVGL与G2D
sidebar_position: 13
description: "V821 LVGL图形界面和G2D旋转缩放使用要点"
---

# LVGL与G2D

## LVGL

V821可通过framebuffer或DISP接入LVGL。基本检查：

```bash
ls -l /dev/fb* /dev/disp
fbset -i
```

LVGL移植需要实现：

- 显示flush回调，将LVGL颜色缓冲写入framebuffer或DISP图层。
- 输入设备回调，读取I2C触摸事件。
- Tick和task handler。
- 根据64MB内存限制控制双缓冲大小、图片缓存和字体。

240×320、RGB565全屏单缓冲约150KB，双缓冲约300KB；ARGB8888双缓冲约600KB。还需给应用、ISP、编码器和RTOS预留内存。

## G2D

G2D用于旋转、镜像、缩放和像素格式转换。启用对应内核和Tina软件包后，通过`/dev/g2d`调用。

常见限制：

- 物理地址和stride需要按驱动要求对齐。
- 某些格式宽度必须2、4、8或16像素对齐。
- 输入/输出宽高存在最小值限制。
- YUV与RGB转换需要正确设置色彩空间和plane地址。
- framebuffer内存不一定连续，使用DMA buffer时应按平台API分配。

## 性能建议

- LVGL只刷新脏区域，不要每帧全屏复制。
- 大图缩放、旋转优先使用G2D。
- SPI LCD的瓶颈通常在总线带宽，G2D只能降低CPU处理时间，不能突破SPI传输上限。
- 监控刷新线程CPU、G2D耗时和SPI发送时间，区分计算瓶颈与传输瓶颈。
