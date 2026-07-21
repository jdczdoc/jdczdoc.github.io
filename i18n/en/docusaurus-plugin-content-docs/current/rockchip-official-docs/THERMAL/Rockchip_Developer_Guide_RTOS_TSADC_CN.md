# Rockchip Developer Guide RTOS TSADC

ID: RK-KF-YF-050

Release Version: V1.0.0

Date: 2019-11-29

Security Level: Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are all registered trademarks of the Company, owned by the Company.

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

**Revision History**

| **Date**   | **Version** | **Author** | **Description**       |
| ---------- | -------- | -------- | ------------------ |
| 2019-11-26 | V1.0.0   | Elaine   | First version release     |

---

[TOC]

---

## HAL TSADC Configuration

### HAL CONFIG

Dependency driver enable:

```c
#ifdef CONFIG_MCU_HAL_TSADC
#define HAL_TSADC_MODULE_ENABLED
#endif
```

### HAL Differences

The differences between chips are in hal_bsp.c, which mainly defines the tsadc's CLK ID, CLK frequency, and some hardware information:

```c
#ifdef HAL_TSADC_MODULE_ENABLED
const struct HAL_TSADC_DEV g_tsadcDev =
{
    .sclkID = CLK_TSADC,
    .sclkGateID = CLK_TSADC_GATE,
    .pclkGateID = PCLK_TSADC_GATE,
    .sclkResetID = SRST_TSADC,
    .pclkResetID = SRST_P_TSADC,
    .speed = 650000,
    .polarity = TSHUT_LOW_ACTIVE,
    .mode = TSHUT_MODE_CRU,
};
#endif
```

- `sclkID`: CLK ID, which may differ between chips. It can be found in rk2206.h or soc.h and is used for frequency setting;
- `sclkGateID`: SCLK GATE ID, used for CLK switch;
- `pclkGateID`: PCLK GATE ID, used for CLK switch;
- `sclkResetID`: SCLK RESET ID, used for CLK SOFT RESET;
- `pclkResetID`: PCLK GATE ID, used for CLK SOFT RESET;
- `speed`: CLK RATE, used for frequency setting;
- `polarity`: TSHUT pin polarity, set according to hardware information. TSHUT_LOW_ACTIVE: TSHUT is high by default, and pulled low at high temperature; TSHUT_HIGH_ACTIVE: TSHUT is low by default, and pulled high at high temperature;
- `mode`: Behavior after TSHUT, set according to hardware information. TSHUT_MODE_CRU: After TSHUT occurs, reset the CRU to reboot the system; TSHUT_MODE_GPIO: After TSHUT, pull high or low the TSHUT pin to reset the hardware circuit;

### HAL Common API

```c
HAL_Status HAL_TSADC_Enable_AUTO(int chn, eTSADC_tshutPolarity polarity, eTSADC_tshutMode mode);
HAL_Status HAL_TSADC_Disable_AUTO(int chn);
HAL_Check HAL_TSADC_IsEnabled_AUTO(int chn);
int HAL_TSADC_GetTemperature_AUTO(int chn);
```

## RKOS TSADC Configuration

### RKOS TSADC CONFIG

```c
make menuconfig

→ BSP Driver
	-*- Enable TSADC
```

### RKOS Common API

```c
rk_err_t TsadcEnable(void);
rk_err_t TsadcDisable(void);
int TsadcGetTempByAutoMode(int chn);
```

### RKOS Usage Example

Usage example:

```c
int temp;

temp = TsadcGetTempByAutoMode(0);/* aisle0temperature */
```

## TEST

### CONFIG Configuration

```c
Components Config  --->
    Command shell  --->
        [*]     Enable PM_TEST Shell
```

### USAGE

```c
"    tsadc <channel>    get the temperature of <channel>\r\n"
```

Usage example:

```c
/* Read channel0temperature */
tsadc 0
```
