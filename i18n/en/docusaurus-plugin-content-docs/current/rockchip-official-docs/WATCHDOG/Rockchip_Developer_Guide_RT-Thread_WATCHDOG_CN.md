# RT-Thread WATCHDOG Development Guide

ID: RK-KF-YF-103

Release Version: V1.1.0

Date: 2021-04-13

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are all registered trademarks of the Company, owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of reasonable use, no unit or individual may excerpt or copy any part or all of the content of this document without the written permission of the Company, and may not distribute it in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

**Product Versions**

| **Chip Name** | **RT-Thread Version** |
| ------------ | ------------ |
| RK2108/Pisces | 3.1.3        |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date** | **Description**           |
| ---------- | -------- | ------------ | ---------------------- |
| V1.0.0     | Simon    | 2020-02-21   | First version release         |
| V1.0.1     | Simon    | 2020-05-27   | Fixed formatting               |
| V1.1.0     | Simon    | 2021-04-13   | Added RK356X pause count function |

---

**Table of Contents**

[TOC]

---

## RT-Thread WATCHDOG Configuration

### RT-Thread WATCHDOG CONFIG

```c
scons --menuconfig

RT-Thread Components  --->
	Device Drivers  --->
		[*] Using Watch Dog device drivers
```

### RT-Thread Common API

```c
int wdt_dev_init(void)；
void rt_wdt_irqhandler(void)；
rt_err_t dw_wdt_control(rt_watchdog_t *wdt, int cmd, void *arg)；
rt_err_t dw_wdt_init(rt_watchdog_t *wdt)；
rt_err_t dw_wdt_start(uint32_t type)；
rt_err_t dw_wdt_stop(void)；
```

### RT-Thread Usage Example

Usage example:

```c
wdt_dev_init(void)；	/* Registration interrupted, device registration */
dw_wdt_init(rt_watchdog_t *wdt)； /* enableclock，initializationWDT */
dw_wdt_start(uint32_t type)； /* Set the working mode and turn it onWDT */
dw_wdt_stop(void)； /* stopWDT */
```

## TEST

### CONFIG Configuration

```
RT-Thread bsp test case  --->
    RT-Thread Common Test case  --->
        [*]     Enable BSP Common WDT TEST
```

### USAGE

Usage example:

```c
wdt_test probe dw_wdt /* OpenWDTequipment */
wdt_test settimeout 10 /* set up10seconds timeout */
wdt_test start type /* Set the operating mode and start and automatically feed the dog，type = 1:Interrupt mode，type = 0:Reboot now mode */
wdt_test reboot /* Stop feeding the dog */
```

### RK356X Pause Function

Using the io command provided by Rockchip, you can pause and resume the count.

0xfdc60504 comes from the GRF_SOC_CON1 register of SYS_GRF. Writing 1 to bit4 pauses the count, and writing 0 resumes the count. The upper 16 bits are the write enable bits.

Pause count

```shell
io -4 0xfdc60504 0x00100010
```

Resume count

```shell
io -4 0xfdc60504 0x00100000
```

## WDT Precision

WDT precision only has 16 levels. The count difference between adjacent levels is relatively large, so fine-grained counting is not possible.

```
0000: 0x0000ffff
0001: 0x0001ffff
0010: 0x0003ffff
0011: 0x0007ffff
0100: 0x000fffff
0101: 0x001fffff
0110: 0x003fffff
0111: 0x007fffff
1000: 0x00ffffff
1001: 0x01ffffff
1010: 0x03ffffff
1011: 0x07ffffff
1100: 0x0fffffff
1101: 0x1fffffff
1110: 0x3fffffff
1111: 0x7fffffff
```

Assuming the wdt clock is 100MHz, the maximum timeout is 0x7fffffff / 100MHz = 21 seconds. If a larger timeout is needed, the corresponding wdt clock needs to be adjusted.

## Development Guide

Our WDT driver follows the RTT system standard WDT driver framework, so you can directly refer to the official RTT [WDT Development Guide](https://www.rt-thread.org/document/site/programming-manual/device/watchdog/watchdog/).
