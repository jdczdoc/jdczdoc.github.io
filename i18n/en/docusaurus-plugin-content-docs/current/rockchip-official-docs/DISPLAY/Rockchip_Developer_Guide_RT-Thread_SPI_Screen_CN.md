# SPI Screen Development Guide

ID: RK-KF-YF-351

Release Version: V1.0.0

Date: 2020-03-27

Security Level: □Top-Secret   □Secret   □Internal   ■Public

------

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip" is a registered trademark of the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2020 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may excerpt, copy, or distribute any part or all of the content of this document in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

## Preface

**Overview**

SPI screens are screens that transmit display data and configuration parameters only through SPI lines. The resolution of such screens is generally no higher than QVGA (320x240). The controller only needs to send the display buffer to the RAM inside the screen; the screen self-refreshes to maintain the display. Using SPI screens can greatly save GPIO resources.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| Universal     | RT-Thread 3.1.x    |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical support engineers
Software development engineers

**Revision History**

| **Version** | **Author** | **Date**   | **Description**  |
| ----------- | ---------- | :--------- | ---------------- |
| V1.0.0      | Zhong Yongwang | 2020-03-27 | Initial version  |

## Table of Contents

------

[TOC]

------

## Rockchip SPI Screen Interface Features

SPI screens are typically divided into two types: 3-wire 9-bit and 4-wire 8-bit. For 3-wire 9-bit screens, the first bit represents DATA or CMD. For 4-wire 8-bit screens, an additional D/CX pin is needed to determine whether the transmitted data is data or a command.

Rockchip SPI does not support 9-bit data transmission, so only 4-wire 8-bit screens are supported. For a 320x240 16-bit screen, the frame data size is 320x240x16=1228800, so the maximum frame rate for a 50MHz SPI screen is 40fps.

## Software

### Code Paths

Driver code:

```shell
bsp/rockchip/common/drivers/drv_spi_screen.c
```

SPI screen configuration files:

```shell
bsp/rockchip/common/drivers/panel_cfg/kgm281g44pvaa_panel_cfg.h
bsp/rockchip/common/drivers/panel_cfg/h20b1301a_panel_cfg.h
```

SPI screen test code:

```shell
bsp/rockchip/common/tests/spi_screen_test.c
```

### Compilation Configuration

Enable the SPI screen switch RT_USING_SPI_SCREEN:

```shell
RT-Thread rockchip rk2108 drivers --->
     [*] Enable Display
         Display Controller (Enable SPI Transfer)  --->
```

Select a screen, e.g.:

```shell
RT-Thread rockchip common drivers --->
     SPI Panel Type (KGM281G44PVAA SPI panel, resolution is 80x160)  --->
```

### SPI Screen Test

Enable the SPI screen test program:

```shell
RT-Thread bsp test case  --->
    [*] RT-Thread Common Test case  --->
    	[*] Enable BSP Common TEST
    	    [*] Enable BSP Common SPI Screen TEST
```

SPI screen test command:

```shell
spi_screen_test
```

A color bar test image will be displayed on the screen.

## Configuration

### SPI Screen Usage Configuration

RK2108 supports SPI1_M0, SPI1_M1, SPI2_M0, SPI2_M1, and SPI2 also supports CS0 and CS1, totaling 6 connection methods. In an actual product, first confirm which SPI port on the board is connected to the screen. Adjust the SPI configuration function in the board-level iomux.c file. For example, if SPI2_M0 is used, call spi2_m0_iomux_config in board/rk2108_evb/iomux.c:

```c
void rt_hw_iomux_config(void)
{
    ...
    spi2_m0_iomux_config();
    ...
}
```

The spi2_m0_iomux_config function is implemented in bsp/rockchip/rk2108/board/common/iomux_base.c:

```c
RT_UNUSED static void spi2_m0_iomux_config(void)
{
    HAL_PINCTRL_SetIOMUX(GPIO_BANK1,
                         GPIO_PIN_A0 |  // SPI_MST2_CS0_M0
                         GPIO_PIN_A1 |  // SPI_MST2_CLK_M0
                         GPIO_PIN_A2 |  // SPI_MST2_MISO_M0
                         GPIO_PIN_A3 |  // SPI_MST2_MOSI_M0
                         GPIO_PIN_A5,   // SPI_MST2_CS1
                         PIN_CONFIG_MUX_FUNC3);

    /* set SPI master 2 IOMUX selection to M0 */
    WRITE_REG_MASK_WE(GRF->SOC_CON5,
                      GRF_SOC_CON5_GRF_CON_SPIMST2_IOMUX_SEL_MASK,
                      (0 << GRF_SOC_CON5_GRF_CON_SPIMST2_IOMUX_SEL_SHIFT));

#ifdef RT_USING_SPI_SCREEN
    /*
     * set GPIO0_C4 to be GPIO function, it is used as the A0(DCX) pin of
     * the SPI screen
     */
    HAL_PINCTRL_SetIOMUX(GPIO_BANK0,
                         GPIO_PIN_C4,
                         PIN_CONFIG_MUX_FUNC0);
#endif
}
```

Additionally, define the SPI interface, CS pin, transfer frequency, and GPIO used by the screen in the board/common/board_base.h file:

```c
#ifdef RT_USING_SPI_SCREEN
#define HAL_SPI_PANEL_SCLK      50000000  // SPI frequency set to 50Mhz
#define HAL_PANEL_SPI           "spi2_1"  // SPI2 cs1, whether M0 or M1 is determined by the iomux function above
#define GPIO_DCX_GPIO_PORT      GPIO0     // D/CX pin uses GPIO0_C4, this PIN must be set to GPIO function (FUNC0) in spi2_m0_iomux_config
#define GPIO_DCX_GPIO_PIN_OUT   GPIO_PIN_C4
#endif
```

### How to Add a New SPI Screen Configuration File

Take bsp/rockchip/common/drivers/panel_cfg/kgm281g44pvaa_panel_cfg.h as an example:

```c
#define RT_HW_SPI_SCREEN_XRES          80     /* Screen width 80 columns */
#define RT_HW_SPI_SCREEN_YRES          160    /* Screen height 160 rows */
#define RT_HW_SPI_SCREEN_BPP           16     /* Screen color depth */
#define RT_HW_SPI_SCREEN_BUS_FORMAT    RTGRAPHIC_PIXEL_FORMAT_RGB565 /* RT-Thread supported display format */

const static struct rockchip_cmd spi_screen_cmd_on[] =
{
    {0x00, 0x78, 0x01, {0x11}}, // 00: This is a command; 78: delay 120ms after sending; 01: 1 command parameter; 11: content to send
    ...
    {0x01, 0x00, 0x01, {0x05}}, // 01: This is data; 00: no delay after sending; 01: 1 data parameter; 05: content to send
};
const static struct rockchip_cmd spi_screen_cmd_off[] =
{}
```

Modify bsp/rockchip/common/drivers/drv_panel_cfg.h to add a new screen configuration file.
