# Rockchip Developer Guide RT-Thread KEYCTRL

ID: RK-KF-YF-071

Release Version: V1.0.0

Date: 2019-12-23

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
| ------------ | ----------------- |
| RK2108       | RT-Thread V10.0.1 |

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers
Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description** |
| ---------- | -------- | -------- | -------------- |
| 2019-12-23 | V1.0.0   | Simon    | First release |

------

[TOC]

------

## HAL KEYCTRL Configuration

### HAL CONFIG

Depends on driver being enabled:

```c
#ifdef RT_USING_KEYCTRL
#define HAL_KEYCTRL_MODULE_ENABLED
#endif
```

### HAL Differences

The main differences between chips are in the CLK ID, which can be found in rk2108.h or soc.h.

CLK_KEY_GATE: SCLK GATE ID, used for CLK on/off;

PCLK_KEY_GATE: PCLK GATE ID, used for CLK on/off;

### HAL Common API

```c
HAL_Status HAL_KeyCtrl_Init(struct KEY_CTRL_REG *reg, uint32_t keyDetectionTh, uint32_t keyCalculatePeriodTh, uint32_t keyFilterIrqTh);
uint32_t HAL_KeyCtrl_GetValue(struct KEY_CTRL_REG *reg);
void HAL_KeyCtrl_ClearInt(struct KEY_CTRL_REG *reg);
```

## RT-Thread KEYCTRL Configuration

### RT-Thread CONFIG

```c
scons --menuconfig

→ RT-Thread rockchip rk2108 drivers
	-*- Enable KEYCTRL
```

### RT-Thread Common API

```
static rt_bool_t rt_keyctrl_check_range(rt_uint32_t key_value, rt_uint32_t target);
static rt_uint8_t rt_keyctrl_map_long_time_keycode(rt_uint8_t keycode);
static rt_uint8_t rt_keyctrl_map_keycode(rt_uint32_t key_value);
static void rt_keyctrl_save_key_code(char key_code);
static void rt_keyctrl_ind_callback(void);
static void rt_keyctrl_scan_timer_func(void *parameter);
static void rt_keyctrl_irqhandler(void);
static rt_err_t rt_keyctrl_init(rt_device_t dev);
static rt_size_t rt_keyctrl_read(rt_device_t dev, rt_off_t pos, void *buffer, rt_size_t size);
static rt_err_t rt_keyctrl_control(rt_device_t dev, int cmd, void *args);
static int rt_keyctrl_dev_init(void);
```

### RT-Thread Usage Example

Usage example:

```
rt_keyctrl_dev_init(void); /* Initialize clock, register device */
rt_keyctrl_init(rt_device_t dev); /* Initialize device, enable device */
rt_keyctrl_scan_timer_func(void *parameter); /* Process key */
rt_keyctrl_save_key_code(char key_code); /* Save key */
rt_keyctrl_ind_callback(void); /* Actively upload key */
```

## TEST

### CONFIG Configuration

```c
RT-Thread bsp test case  --->
    RT-Thread Common Test case  --->
        [*]     Enable BSP Common KEYCTRL TEST
```

### USAGE

Usage example:

```c
keyctrl_test probe keyctrl /* Open KEYCTRL device */
keyctrl_test read /* Read saved key value */
keyctrl_test set_ind callback 1 /* Actively upload key value */
```
