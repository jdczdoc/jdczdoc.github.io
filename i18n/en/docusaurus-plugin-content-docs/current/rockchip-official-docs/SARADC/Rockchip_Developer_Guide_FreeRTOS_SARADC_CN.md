# Rockchip Developer Guide FreeRTOS SARADC

ID: RK-KF-YF-062

Release Version: V1.0.0

Date: 2019-12-03

Security Level: Public

------

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip.

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

## HAL SARADC Configuration

### HAL CONFIG

Depends on driver being enabled:

```c
#ifdef CONFIG_MCU_HAL_SARADC
#define HAL_SARADC_MODULE_ENABLED
#endif
```

### HAL Differences

The main differences between chips are in the CLK ID and CLK frequency, which can be found in rk2206.h or soc.h.

CLK_SARADC_GATE: SCLK GATE ID, used for CLK on/off;

PCLK_SARADC_CONTROL_GATE: PCLK GATE ID, used for CLK on/off;

### HAL Common API

```c
HAL_Status HAL_SARADC_Start(struct SARADC_REG *reg, eSARADC_mode mode, uint32_t chn);
HAL_Status HAL_SARADC_Stop(struct SARADC_REG *reg);
void HAL_SARADC_IrqHandler(struct SARADC_REG *reg);
void HAL_SARADC_ClearIrq(struct SARADC_REG *reg);
uint32_t HAL_SARADC_GetRaw(struct SARADC_REG *reg);
```

## RKOS SARADC Configuration

### RKOS SARADC CONFIG

```c
make menuconfig

→ BSP Driver
	-*- Enable ADC
```

### RKOS Common API

```c
COMMON FUN rk_err_t ADCDev_Start(ADC_DEVICE_CLASS *ADCDevHandler);
static COMMON FUN rk_err_t ADCDev_Stop(ADC_DEVICE_CLASS *ADCDevHandler);
COMMON API rk_err_t ADCDev_Read(HDC dev, uint16 channel, uint16 size, uint16 clk);
COMMON API rk_err_t ADCDev_GetAdcBufData(HDC dev, uint16 *buf, uint16 size, uint16 clk, uint16 channel);
```

### RKOS Usage Example

Usage example:

```c
ADCDev_Start(ADCDevHandler); /* Configure sampling channel, enable interrupt mode, start sampling */

HAL_SARADC_GetRaw(SARADC); /* Get sampling value */

HAL_SARADC_Stop(SARADC); /* Clear interrupt, disable SARADC */
```

## TEST

### CONFIG Configuration

```c
Components Config  --->
    Command shell  --->
        [*]     Enable SARADC shell cmd
```

### USAGE

Usage example:

```c
adc.create 0 /* Create SARADC device 0 */
adc.test 0 /* Get the value of the corresponding channel of SARADC device 0 */, output as follows:
Adc channel 3 read value = 254
```
