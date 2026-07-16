---
title: LVGL and G2D
sidebar_position: 13
description: "V821 LVGL graphics and G2D rotation/scaling guidance"
---

# LVGL and G2D

## LVGL

LVGL can use either the framebuffer or DISP path. Start by checking:

```bash
ls -l /dev/fb* /dev/disp
fbset -i
```

The port requires:

- A display flush callback that writes the LVGL color buffer to the framebuffer or a DISP layer.
- An input callback for I2C touch events.
- Tick and task-handler integration.
- Conservative double-buffer, image-cache, and font settings because the system has only 64MB memory.

A full-screen 240×320 RGB565 buffer is about 150KB; double buffering is about 300KB. ARGB8888 double buffering is about 600KB. Leave memory for the application, ISP, encoder, and RTOS as well.

## G2D

G2D accelerates rotation, mirroring, scaling, and pixel-format conversion through `/dev/g2d` after the required kernel and Tina options are enabled.

Common restrictions:

- Physical addresses and strides must follow driver alignment rules.
- Some formats require width alignment to 2, 4, 8, or 16 pixels.
- Input and output dimensions may have minimum limits.
- YUV/RGB conversion requires the correct color space and plane addresses.
- Framebuffer memory is not always suitable as a generic contiguous DMA buffer; allocate through the platform API when required.

## Performance Guidance

- Refresh only dirty LVGL areas instead of copying the full screen every frame.
- Use G2D for large-image scaling and rotation.
- On an SPI LCD, bus bandwidth is usually the final bottleneck. G2D reduces CPU time but cannot exceed the SPI transfer limit.
- Measure UI thread CPU time, G2D time, and SPI transfer time separately to distinguish computation from transport bottlenecks.
