# Rockchip Developer Guide FreeRTOS WATCHDOG

ID: RK-KF-YF-061

Release Version: V1.0.0

Date: 2019-12-03

Security Level: Public

------

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" shall be Rockchip's registered trademarks and owned by Rockchip.

All other registered trademarks or trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2019. Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no unit or individual may excerpt or copy any part or all of the content of this document without written permission from Rockchip, and may not distribute it in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

------

**Preface**

**Overview**

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ---------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers
Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description** |
| ---------- | -------- | -------- | -------------- |
| 2019-12-03 | V1.0.0   | Simon    | First release |

------

[TOC]

------

## HAL WATCHDOG Configuration

### HAL CONFIG

Depends on driver being enabled:

```c
#ifdef CONFIG_MCU_HAL_WDT
#define HAL_WDT_MODULE_ENABLED
#endif
```

### HAL Differences

The main differences between chips are in the CLK ID and CLK frequency, which can be found in rk2206.h or soc.h.

PCLK_WDT0_GATE: PCLK GATE ID, used for CLK on/off;

PCLK_MCU_BUS: Parent clock of PCLK_WDT0, used for frequency setting and getting, used to convert time to counter value.

### HAL Common API

```c
HAL_Status HAL_WDT_Init(uint32_t freq, struct WDT_REG *wdt);
HAL_Status HAL_WDT_SetTimeout(uint32_t top);
HAL_Status HAL_WDT_KeepAlive(void);
HAL_Status HAL_WDT_Start(enum WDT_RESP_MODE mode);
uint32_t HAL_WDT_ClearInterrupt(void);
```

## RKOS WATCHDOG Configuration

### RKOS WATCHDOG CONFIG

```c
make menuconfig

→ BSP Driver
	-*- Enable WatchDog
```

### RKOS Common API

```
INIT FUN rk_err_t WDTDevInit(WDT_DEVICE_CLASS *pstWDTDev);
COMMON API rk_err_t WDTDevSetTimeout(HDC dev, uint32 timeout);

```

### RKOS Usage Example

Usage example:

```c
HAL_WDT_Init(wdt_freq, WDT0); /* Set reference clock frequency */

HAL_WDT_SetTimeout(10); /* Set timeout to 10 seconds */

HAL_WDT_Start(INDIRECT_SYSTEM_RESET); /* Set timeout to directly restart, and start WATCHDOG */
```

## TEST

### CONFIG Configuration

```c
Components Config  --->
    Command shell  --->
        [*]     Enable WDT shell cmd
```

### USAGE

Usage example:

```c
wdt.create 1 /* Create WATCHDOG device */
adc.test 1 10 /* Set 10-second timeout and start WATCHDOG */
```
