# Rockchip RT-Thread SPI

ID: RK-KF-YF-093

Release Version: V1.0.1

Date: 2020-05-27

Security Level: □Top-Secret   □Secret   □Internal   ■Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are all registered trademarks of the Company, owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved** **© 2019** **Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of reasonable use, no unit or individual may excerpt or copy any part or all of the content of this document without the written permission of the Company, and may not distribute it in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the usage of the ROCKCHIP RT-Thread SPI driver.

**Product Versions**

| **Chip Name**                          | **Kernel Version** |
| ------------------------------------- | ------------ |
| All chip products using RK RT-Thread  SDK | RT-Thread    |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers
Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description** |
| ---------- | -------- | -------- | ------------ |
| 2019-07-13 | V1.0.0   | Zhao Yifeng   | Initial release     |
| 2020-05-27 | v1.0.1   | Zhao Yifeng   | Revised format     |
|            |          |          |              |

---

[TOC]

---

## Rockchip SPI Features

SPI（Serial Peripheral Interface）

* Supports 4 SPI modes
* Supports 2 chip selects
* Supports 8-bit and 16-bit transfer
* Supports interrupt transfer mode and DMA transfer mode
* 32-level FIFO depth (some chips have 64 levels)
* Configurable data sampling clock RXD

## Software

### Code Path

Framework code:

```c
components/drivers/include/drivers/spi.h
components/drivers/spi/spi_core.c
components/drivers/spi/spi_dev.c
components/drivers/spi/qspi_core.c
```

SPI driver adaptation layer:

```c
bsp/rockchip-common/drivers/drv_spi.c
bsp/rockchip-common/drivers/drv_spi.h
```

SPI test commands. User applications can completely refer to the following driver:

```c
bsp/rockchip-common/tests/spi_test.c
```

### Configuration

Enable the SPI configuration, and /dev/spi0..2 devices will be generated at the same time.

```c
RT-Thread bsp drivers  --->
    RT-Thread rockchip "project" drivers  --->
        [*] Enable SPI
        [ ]   Enable SPI0 (SPI2APB)
        [*]   Enable SPI1
        [*]   Enable SPI2
```

### SPI Test

Enable the SPI test program:

```c
RT-Thread bsp test case  --->
    [*] RT-Thread Common Test case  --->
    	[*] Enable BSP Common TEST
		[*]  Enable BSP Common SPI TEST
```

SPI test commands:

```c
1. config spi_device: op_mode, spi_mode, bit_first, speed:
	op_mode: 0 -> master mode, 1 -> slave mode
	spi_mode: 0 - 3 -> RT_SPI_MODE_0 ~ RT_SPI_MODE_3
	bit_first: 0 -> LSB, 1 -> MSB
	speed: config spi clock, the units is Hz
	/* config spi1 cs0 master mode, spi mode 0, LSB, spi clock 1 MHz*/
	example: spi_test config spi1_0 0 0 0 1000000
2. write/read/loop spi_device: times, size like:
	/* write spi1 cs0 1024 bytes 1 time*/
	example: spi_test write spi1_0 1 1024
	/* read spi1 cs1 1024 bytes 10 time */
	example: spi_test read spi1_1 10 1024
	/* loop back mode test spi2 cs0 1024 bytes 10 times */
	example: spi_test loop spi2_0 10 1024
```

### SPI Usage Configuration

When the SPI controller acts as MASTER, it can support 0-50MHz (some platforms can be configured to higher frequencies). When acting as SLAVE, it can support 0-20MHz.

The configuration function rt_spi_configure() provided by the framework can configure the frequency, mode, and transfer bit width, etc.

SPI supports 4 modes. For which mode to use, refer to the device manual.

The 4 modes are defined as follows:

```c
#define RT_SPI_MODE_0       (0 | 0)                        /* CPOL = 0, CPHA = 0 */
#define RT_SPI_MODE_1       (0 | RT_SPI_CPHA)              /* CPOL = 0, CPHA = 1 */
#define RT_SPI_MODE_2       (RT_SPI_CPOL | 0)              /* CPOL = 1, CPHA = 0 */
#define RT_SPI_MODE_3       (RT_SPI_CPOL | RT_SPI_CPHA)    /* CPOL = 1, CPHA = 1 */
```

Configuration code example:

```c
struct rt_spi_configuration cfg;

cfg.data_width = 8; /* Configuration8bitsTransmission mode */
cfg.mode = RT_SPI_MASTER | RT_SPI_MSB | RT_SPI_MODE_0;
cfg.max_hz = 20 * 1000 * 1000; /* Configuration frequency 20Mhz */
rt_spi_configure(spi_device, &cfg); /* Configuration SPI*/
```
