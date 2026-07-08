# Rockchip Developer Guide FreeRTOS TOUCHKEY

ID: RK-KF-YF-063

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

## HAL TOUCHKEY Configuration

### HAL CONFIG

Depends on driver being enabled:

```c
#ifdef CONFIG_MCU_HAL_TOUCHKEY
#define HAL_TOUCHKEY_MODULE_ENABLED
#endif
```

### HAL Differences

The main differences between chips are in the CLK ID and CLK frequency, which can be found in rk2206.h or soc.h.

CLK_TOUCH_DETECT_GATE: SCLK GATE ID, used for CLK on/off;

PCLK_TOUCH_DETECT_GATE: PCLK GATE ID, used for CLK on/off;

### HAL Common API

```c
HAL_Status HAL_TouchKey_Init(uint32_t chn_num, struct TOUCH_SENSOR_REG *touchkey);
uint32_t HAL_TouchKey_GetIntNeg(struct TOUCH_SENSOR_REG *touchkey);
uint32_t HAL_TouchKey_GetIntPos(struct TOUCH_SENSOR_REG *touchkey);
void HAL_TouchKey_ClearIntNeg(uint32_t irq, struct TOUCH_SENSOR_REG *touchkey);
void HAL_TouchKey_ClearIntPos(uint32_t irq, struct TOUCH_SENSOR_REG *touchkey);
uint32_t HAL_TouchKey_GetIntRaw(struct TOUCH_SENSOR_REG *touchkey);
```

## RKOS TOUCHKEY Configuration

### RKOS TOUCHKEY CONFIG

```c
make menuconfig

→ BSP Driver
	-*- Enable Enable KEY
		-*- Enable Touch Key
```

### RKOS Common API

```
rk_err_t TouchKeyDevInit(void);
static COMMON FUN void TouchKeyScanTimerFunc(pTimer timer);
void TOUCHKEY_HandlePosIrq(void);
void TOUCHKEY_HandleNegIrq(void);
void TouchKeyCallback(void);
rk_err_t TouchKeyRead(uint32_t *buffer, uint32_t size);
uint32_t TouchKeyChannelToKey(uint32_t raw_status);
void TouchKeySaveKeyCode(uint32_t key_code);
```

### RKOS Usage Example

Usage example:

```c
rk_err_t TouchKeyDevInit(void); /* Initialize TOUCHKEY, enable TOUCHKEY */
```

## TEST

### CONFIG Configuration

```c
Components Config  --->
    Command shell  --->
        [*]     Enable key shell cmd
```

### USAGE

Usage example:

```c
key.test 0 /* Get key value */
```
