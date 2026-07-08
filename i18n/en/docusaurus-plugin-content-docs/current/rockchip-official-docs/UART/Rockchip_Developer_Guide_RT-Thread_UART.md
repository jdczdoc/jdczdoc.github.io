# RT-Thread UART Development Guide

ID: RK-KF-YF-90

Release Version: V1.1.0

Date: 2020-05-15

Security Level: □Top-Secret   □Secret   □Internal   ■Public

---

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" shall be Rockchip's registered trademarks and owned by Rockchip.

All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, neither any entity nor individual shall extract, copy, or distribute this document in any form in whole or in part without the written approval of Rockchip.

Fuzhou Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel:  +86-4007-700-590

Customer service Fax:  +86-591-83951833

Customer service e-Mail:  [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

**Product Version**

| **Supported Chip**  | **RT-Thread Version** |
| -------------- | ---------------------- |
| RK2108  | lts-v3.1.x/master  |
| RK2206  | lts-v3.1.x/master  |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers, Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date**   | **Change Description** |
| --------- | --------- | ---------- | -------- |
|  V1.0.0   | Hong Huibin | 2019-06-13 | Initial version     |
|  V1.1.0  | Liu Shifang | 2020-05-15 | Format revision     |

---
[TOC]
---

## Rockchip UART Features

UART (Universal Asynchronous Receiver/Transmitter)

* Compatible with 16550A
* Some UART ports support hardware auto flow control, while others do not. See the data sheet for details
* Supports interrupt transfer mode and DMA transfer mode
* Supports baud rates up to 4M, compatible with 16550A

## Software

### Code Path

UART framework:

```c
components/drivers/include/drivers/serial.h
components/drivers/serial/serial.c device driver
components/libc/termios/posix_termios.c tty configuration similar to linux
components/libc/termios/posix_termios.h
```

UART driver adaptation layer:

```c
bsp/rockchip-pisces/drivers/drv_uart.c
bsp/rockchip-pisces/drivers/drv_uart.h
```

UART test commands. The UART user application can completely refer to the following driver:

```c
bsp/rockchip-common/tests/termios_test.c
```

### Configuration

Enable the UART configuration, and /dev/uart0..9 devices will be generated at the same time.

```c
RT-Thread bsp drivers  --->
    RT-Thread rockchip common drivers  --->
        [*] Enable UART
        [*]   Enable UART0
        [ ]   Enable UART1
        [*]   Enable UART2
        [ ]   Enable UART3
        [ ]   Enable UART4
        [ ]   Enable UART5
        [ ]   Enable UART6
        [ ]   Enable UART7
        [ ]   Enable UART8
        [ ]   Enable UART9
```

Run the command to see the generated UART devices:

~~~c
msh >list_device
device         type         ref count
------ -------------------- ----------
uart7  Character Device     0
uart6  Character Device     0
uart5  Character Device     0
uart4  Character Device     2
uart3  Character Device     0
uart2  Character Device     0
uart1  Character Device     0
uart0  Character Device     0
~~~

### UART Test

Enable the UART test program:

~~~c
RT-Thread bsp test case  --->
    [*] Enable BSP Common TEST
    [*] Enable BSP Common UART TEST

RT-Thread bsp test case  --->
    [*] Enable BSP Private TEST

RT-Thread Components  --->
    Device virtual file system  --->
        [*] Using device virtual file system
        -*- Using devfs for device objects
    POSIX layer and C standard library  --->
        [*] Enable termios feature
~~~

UART test commands:

~~~c
    receive data:
    termtest r /dev/uart4 115200
    send data:
    termtest s /dev/uart4 115200
    receive then send:
    termtest t /dev/uart4 115200
~~~

### Baud Rate Support

Baud rates below 1.5M are all supported. Baud rates above 1.5M need to be tested to see whether they are supported, because this is related to the CLK clock tree.

### Console Configuration

~~~c
RT-Thread Kernel  --->
    Kernel Device Object  --->
    [*] Using console for rt_kprintf
        (128) the buffer size for console log printf
        (uart2) the device name for console
        (1500000) the baud rate for console
~~~
