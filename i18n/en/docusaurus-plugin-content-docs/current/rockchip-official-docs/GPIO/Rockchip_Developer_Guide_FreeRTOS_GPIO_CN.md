# Rockchip GPIO Developer Guide

ID: RK-KF-YK-056

Release Version: V1.0.0

Date: 2019-12-02

Security Level: Public

---

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

Customer Service Email: [fae@rock-chips.com]

---

**Preface**

**Overview**

This document provides usage instructions for the GPIO module interface. Developers can find corresponding interfaces in this document; for detailed information, please refer directly to the module implementation.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | :--------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author**   | **Date**    | **Description** |
| ---------- | -------- | :----------- | ------------ |
| V1.0.0     | Xu Jianqun   | 2019-12-02   | Initial version |

**Table of Contents**

---

[TOC]

## Overview

The Rockchip FreeRTOS GPIO module provides a user-level interface to control the direction and level of IO PADs, i.e., configuring input mode, output high level mode, and output low level mode.

For IO PAD pull-up/pull-down configuration, it is implemented and described in the PINCTRL module.

## Software Framework

### Driver Layer Driver Files

The driver layer files are located in `src/driver/gpio/drv_gpio.c`, with header file in `include/driver/drv_gpio.h`, providing the following interfaces:

```C
int rk_pin_attach_irq(int pin, int mode, void (*hdr)(void *args), void *args);
int rk_pin_detach_irq(int pin);
int rk_pin_irq_enable(int pin, int enabled);
int rk_hw_gpio_init(void);
```

pin is the GPIO port number. In hardware schematics, it is usually labeled as GPIO0_A1_u, where u indicates the port has default internal weak pull-up, and d indicates default internal weak pull-down.

In software, GPIO port numbers are continuous: 0~31 is GPIO0, 32~63 is GPIO1, and so on; 0~7 is port A, 8~15 is port B, 16~23 is port C, 24~31 is port D.

For example, GPIO0_A1_u has port number 1, i.e., 0×32 + 0×8 + 1 = 1; GPIO1_B2_d has port number 1×32 + 1×8 + 2 = 42.

In software, automatic calculation can be done through the macro definition `BANK_PIN(b,p)`, where b is the bank number and p is the pin number.

Examples:

`BANK_PIN(0, 1)` is GPIO0_A1

`BANK_PIN(1, 10)` is GPIO1_B2

### HAL Layer Driver Files

The HAL layer files are located in `src/bsp/hal`. The HAL layer GPIO driver is in lib/hal/src/hal_gpio.c, with header file in `lib/hal/inc/hal_gpio.h`.

The application layer interfaces provided are as follows:

```C
HAL_GPIO_GetPinDirection(struct GPIO_REG *pGPIO, uint32_t pin);
HAL_GPIO_GetPinLevel(struct GPIO_REG *pGPIO, uint32_t pin);
HAL_GPIO_SetPinLevel(struct GPIO_REG *pGPIO, uint32_t pin, eGPIO_pinLevel pinLevel);
HAL_GPIO_SetPinDirection(struct GPIO_REG *pGPIO, uint32_t pin, eGPIO_pinDirection pinDir);
HAL_GPIO_SetPinsLevel(struct GPIO_REG *pGPIO, uint32_t mPins, eGPIO_pinLevel pinLevel);
HAL_GPIO_SetPinsDirection(struct GPIO_REG *pGPIO, uint32_t mPins, eGPIO_pinDirection pinDir);
HAL_GPIO_GetPinData(struct GPIO_REG *pGPIO, uint32_t pin);
HAL_GPIO_GetBankLevel(struct GPIO_REG *pGPIO);
```

In the HAL driver, `lib/CMSIS/Device/RK2206/Include/rk2206.h` defines the GPIOx supported by the chip, such as:

```C
#define GPIO0               ((struct GPIO_REG *) GPIO0_BASE)
#define GPIO1               ((struct GPIO_REG *) GPIO1_BASE)
```

The first parameter of the HAL layer API is GPIO0 or GPIO1; see function parameter descriptions for other parameters.

### Driver Layer Test Cases

In the driver layer `src/subsys/shell/shell_gpio.c`, there are GPIO-related test cases, mainly provided for hardware automated GPIO testing.

## Common Interface Description

Since the GPIO module is relatively simple, users can call APIs in two ways:

### HAL Layer API

As introduced in section 2.2 above, the HAL interface directly operates registers.

### Driver Layer API

As introduced in section 2.1 above, the Driver layer API is more standardized and easier to extend.

For example, if dynamic switching of pclk_gpiox is added, the HAL API may not work correctly because pclk is not enabled.
