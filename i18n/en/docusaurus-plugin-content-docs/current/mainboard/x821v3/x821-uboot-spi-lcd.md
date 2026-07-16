---
title: U-Boot Logo and SPI LCD
sidebar_position: 12
description: "V821 U-Boot display, boot logo, and SPI DBI panel porting"
---

# U-Boot Logo and SPI LCD

## U-Boot Display Flow

1. Port the already-verified Linux panel initialization sequence to a U-Boot panel driver.
2. Enable DISP, LCD, framebuffer, and BMP/logo support in the U-Boot defconfig.
3. Check pin-mux conflicts with GMAC, SPI, PWM, and other functions.
4. Configure backlight PWM, DISP, and LCD nodes in `uboot-board.dts`.
5. Add a resource partition and package the logo image.
6. Validate solid colors before testing the BMP logo.

## Logo Image

- Use a BMP depth and compression mode supported by the bootloader; uncompressed 24-bit BMP is the safest default.
- Match the panel resolution to avoid bootloader-side scaling.
- Keep the file name, resource partition, and environment setting consistent.
- If U-Boot exceeds its size limit, remove unused commands, debug symbols, filesystems, and drivers.

## SPI LCD/DBI Architecture

A typical implementation is:

```text
U-Boot SPI controller -> DBI/panel driver -> framebuffer -> logo
Linux SPI controller -> panel/FB driver -> framebuffer or DISP -> LVGL/application
```

Device-tree example:

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

## Common Problems

| Symptom | Check first |
| --- | --- |
| Black screen | Power, backlight, reset, CS/DC, initialization sequence |
| White screen | Sleep-out command, SPI traffic, orientation, pixel format |
| Corrupted image | SPI mode, word width, RGB/BGR order, address window, excessive clock |
| Slow refresh | SPI rate, per-pixel writes, missing DMA/G2D, oversized update area |
| U-Boot works, Linux fails | Pin, clock, reset, or initialization differences between stages |
| Linux works, U-Boot fails | Missing U-Boot panel driver or incorrect resource/logo configuration |
