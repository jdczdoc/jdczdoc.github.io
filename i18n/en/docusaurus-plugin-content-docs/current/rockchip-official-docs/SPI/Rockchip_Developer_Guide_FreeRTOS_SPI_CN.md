# Rockchip FreeRTOS SPI

ID: RK-KF-YF-047

Release Version: V1.0.0

Date: 2019-12-03

Security Level: Public

---

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("COMPANY") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

DUE TO PRODUCT VERSION UPGRADES OR OTHER REASONS, THIS DOCUMENT MAY BE UPDATED OR MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" are registered trademarks of the Company and owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved. ©2019 Fuzhou Rockchip Electronics Co., Ltd.**

Fuzhou Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the principles and usage of ROCKCHIP FreeRTOS SPI.

**Product Versions**

| **Chip Name** | **Kernel Version**    |
| ------------ | --------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical support engineers
Software development engineers

---

**Revision History**

| **Version** | **Author** | **Date** | **Change Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Lin Dingqiang | 2019-12-03 | Initial version |

**Table of Contents**

---
[TOC]
---

## **1 SPI**

### **1.1 Principle**

The SPI device interface is an APB slave device. It is Motorola's four-wire full-duplex serial protocol. The serial clock phase and polarity have four possible combinations. The clock phase (SCPH) determines whether the serial transmission starts from the falling edge of the select signal or the first edge of the serial clock. When SPI is idle or disabled, the select line remains high. This SPI controller can work in master or slave mode.

### **1.2 Configuration**

Macro configuration:

```c
    BSP Driver  --->
        [*] Enable SPI  --->
            [*] Enable SPI0
            [*] Enable SPI1
```

### **1.3 Code and Function Interfaces**

**Code**

"src/driver/spi/SpiDevice.c"
"include/driver/SpiDevice.h"

**All Public Function Interfaces**

```c
rk_err_t SpiDev_Configure(HDC dev, struct RK_SPI_CONFIG *config);

/*
 * SPI data transfer
 * Send only: sendBuf valid, recvBuf invalid
 * Receive only: sendBuf invalid, recvBuf valid
 * Duplex: sendBuf and recvBuf both valid
 */
rk_size_t SpiDev_Transfer(HDC dev, uint8_t ch, const void *sendBuf, void *recvBuf, rk_size_t length);
rk_size_t SpiDev_Write(HDC dev, uint8_t cs, const void *sendBuf, uint32_t length);
rk_size_t SpiDev_Read(HDC dev, uint8_t cs, void *recvBuf, uint32_t length);
rk_err_t SpiDev_SendThenSend(HDC dev, uint8_t ch, const void *sendBuf0, rk_size_t len0, const void *sendBuf1, rk_size_t len1);
rk_err_t SpiDev_SendThenRecv(HDC dev, uint8_t ch, const void *sendBuf, rk_size_t len0, void *recvBuf, rk_size_t len1);
HDC SpiDev_Create(uint8 DevID, void *arg);
```

**Create Device Interface**

```c
HDC SpiDev_Create(uint8 DevID, void *arg);
```

The arg parameter has no practical meaning and can be omitted. All SPI device parameter adjustments are done through the dedicated parameter configuration interface.

**Parameter Configuration Interface**

```c
rk_err_t SpiDev_Configure(HDC dev, struct RK_SPI_CONFIG *config);
```

The config parameter structure in Spidev_Configure is as follows:

```c
/* Rockchip SPI configuration */
struct RK_SPI_CONFIG
{
    uint8_t mode;      /* SPI general configuration */
    uint8_t dataWidth; /* Minimum transfer bits per data, configurable 8bits, 16bits */
    uint8_t reserved;
    uint32_t maxHz;    /* SPI frequency, actual frequency is limited by CRU configurable frequency range */
};
```

By configuring the corresponding bit fields of the mode parameter, SPI polarity, sample phase, endianness, master/slave mode, and CSM parameters can be configured. The specific bit field information is as follows:

```c
/* RK_SPI_CONFIG mode */
#define RK_SPI_CPHA             (1<<0)                         /* bit[0]:CPHA, clock phase */
#define RK_SPI_CPOL             (1<<1)                         /* bit[1]:CPOL, clock polarity */
/**
 * At CPOL=0 the base value of the clock is zero
 *  - For CPHA=0, data are captured on the clock's rising edge (low->high transition)
 *    and data are propagated on a falling edge (high->low clock transition).
 *  - For CPHA=1, data are captured on the clock's falling edge and data are
 *    propagated on a rising edge.
 * At CPOL=1 the base value of the clock is one (inversion of CPOL=0)
 *  - For CPHA=0, data are captured on clock's falling edge and data are propagated
 *    on a rising edge.
 *  - For CPHA=1, data are captured on clock's rising edge and data are propagated
 *    on a falling edge.
 */
#define RK_SPI_MODE_0           (0 | 0)                        /* CPOL = 0, CPHA = 0 */
#define RK_SPI_MODE_1           (0 | RK_SPI_CPHA)              /* CPOL = 0, CPHA = 1 */
#define RK_SPI_MODE_2           (RK_SPI_CPOL | 0)              /* CPOL = 1, CPHA = 0 */
#define RK_SPI_MODE_3           (RK_SPI_CPOL | RK_SPI_CPHA)    /* CPOL = 1, CPHA = 1 */
#define RK_SPI_MODE_MASK        (RK_SPI_CPHA | RK_SPI_CPOL | RK_SPI_MSB)

#define RK_SPI_LSB              (0<<2)                         /* bit[2]: 0-LSB */
#define RK_SPI_MSB              (1<<2)                         /* bit[2]: 1-MSB */

#define RK_SPI_MASTER           (0<<3)                         /* SPI master device */
#define RK_SPI_SLAVE            (1<<3)                         /* SPI slave device */

#define RK_SPI_CSM_SHIFT        (4)
#define RK_SPI_CSM_MASK         (0x3 << 4)                     /* SPI master ss_n hold cycles for MOTO SPI master */
```

**Data Transfer Interface**

```c
/*
 * SpiDev_Transfer is a flexible SPI transfer interface supporting simplex and duplex transfer.
 * The cs pin is enabled at the start of transfer:
 * Send only: sendBuf valid, recvBuf invalid
 * Receive only: sendBuf invalid, recvBuf valid
 * Duplex: sendBuf and recvBuf both valid
 */
rk_size_t SpiDev_Transfer(HDC dev, uint8_t ch, const void *sendBuf, void *recvBuf, rk_size_t length);
```

```C
/* Wrapped SpiDev_Transfer simplex write interface, enables cs pin at start of transfer */
rk_size_t SpiDev_Write(HDC dev, uint8_t cs, const void *sendBuf, uint32_t length);
/* Wrapped SpiDev_Transfer simplex read interface, enables cs pin at start of transfer */
rk_size_t SpiDev_Read(HDC dev, uint8_t cs, void *recvBuf, uint32_t length);
```

```c
/* SPI simplex transfer, complete SPI write first then SPI write in one cs valid period */
rk_err_t SpiDev_SendThenSend(HDC dev, uint8_t ch, const void *sendBuf0, rk_size_t len0, const void *sendBuf1, rk_size_t len1);
/* SPI simplex transfer, complete SPI write first then SPI read in one cs valid period */
rk_err_t SpiDev_SendThenRecv(HDC dev, uint8_t ch, const void *sendBuf, rk_size_t len0, void *recvBuf, rk_size_t len1);
```

### Function Interface Usage Example

Refer to shell_spi.c.

### **1.5 Shell Usage Example**

**Create Device**

```c
spi.create <spi devid>   /* e.g.: spi.create 0 */
```

**Configure Device**

```c
spi.config <spi devid> <mode> <data width> <clk> /* e.g. spi.config 0 0 8 10000 */
```

Refer to section 1.3 for configurable parameters.

Example 2: Configure SPI0 as master, mode3, csm 3, data width 8, speed 50MHz.

```c
spi.config 0 0x33 8 50000000
```

**Check Configuration**

```c
spi.pcb <spi devid> /* e.g.  spi.pcb 1 */

RK2206>spi.pcb 1

  .gSpiDevISR[1]
      .stSpiDevice
          .next = 00000000
          .use_cnt = 1
          .suspend_cnt = 0
          .dev_class_id = 1
          .dev_object_id = 1
          .suspend = 0008ef6d
          .resume = 0008ef69
      .osSpiOperReqSem = 537119200
      .osSpiOperSem = 537119280
      .status = 0
      .hDma = 20028dcc
      cr0 = 00002c00
      cr0->opmode = 00000000
      cr0->nBytes = 00000000
      cr0->clkPolarity = 00000000
      cr0->clkPhase = 00000000
      cr0->firstBit = 00000000
      cr0->csm = 00000000
```

**Read/Write Device**

```c
spi.read <spi devid> <cs> <data length> <loop> /* e.g.  spi.read 0 0 256 1 */

spi.write <spi devid> <cs> <data length> <loop> /* e.g. spi.write 0 0 256 1 */
```
