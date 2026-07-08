# UART Development Guide

ID: RK-KF-YF-053

Release Version: V1.0.0

Date: 2019-12-02

Security Level: Internal

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are all registered trademarks of the Company, owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

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

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | --------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author** | **Date** | **Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Liu Shifang | 2019-12-02 | Initial version  |

**Table of Contents**

---

[TOC]

---

## Rockchip UART Features

UART（Universal Asynchronous Receiver/Transmitter）

* Compatible with 16550A.
* UART0 has two iomux groups, UART1 has three iomux groups, and UART2 has two iomux groups.
* Supports hardware automatic flow control (except UART1_M2).
* Supports interrupt transfer mode and DMA transfer mode.
* Supports up to 4M baud rate.

## Software Development

### Code Path

UART driver:

```c
src/driver/uart/UartDevice.c //串口驱动
include/driver/UartDevice.h
src/bsp/hal/lib/hal/src/hal_uart.c //串口硬件抽象层
src/bsp/hal/lib/hal/inc/hal_uart.h
```

UART test commands (user applications can refer to):

```c
src/subsys/shell/shell_uart.c
```

### UART Configuration

In the board-level configuration iomux.c, you can view the iomux configuration of all UART devices. In the board-level configuration board.c, you can configure UART devices through the `UartDevHwInit(uint32 DevID, uint32 Channel)` function, and configure the UART Console device through the `DebugInit(void)` function.

In menuconfig, you can configure the uart devices to be used.

```c
BSP Driver --->
    [*] Enable UART --->
        [*] Enable UART0
        [ ] Enable UART1
        [ ] Enable UART2
```

You can use the command shell command `dev.list` to view the generated UART devices.

### UART Test

Enable the UART test program:

```c
Components Config --->
    Command shell --->
        [*] Enable Uart Shell

/* 请打开DMA设备驱动 */
BSP Driver --->
    Enable DMA --->
        [*] Enable DesignWare DMA Controlle
```

UART test commands:

```c
/* send data */
uart_test w uart<value> baudrate [dma] [autoflow]
Example: uart_test w uart1 115200 1 0
/* receive data */
uart_test r uart<value> baudrate [dma] [autoflow]
Example: uart_test r uart1 115200 1 0
```

You can use the command shell command `io` to read and write UART device register values to check whether they meet expectations. For details about UART device registers, please refer to the datasheet.

### Baud Rate Support

Baud rates below 1.5M are all supported. Baud rates above 1.5M need to be tested to determine whether they are supported, because this is related to the CLK clock tree. The maximum baud rate that RK2206 can stably support is 4M.

### Console Configuration

In menuconfig, you can configure the uart device to be used as the console.

```c
Target Options --->
    Board Options --->
        (0) DEBUG_UART
```
