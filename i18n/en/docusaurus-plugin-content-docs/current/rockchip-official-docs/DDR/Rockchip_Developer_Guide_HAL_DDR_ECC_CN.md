# Rockchip Developer Guide HAL DDR ECC

ID: RK-KF-YF-169

Release Version: V1.0.0

Date: 2021-03-29

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip.

All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, neither any entity nor individual shall extract, copy, or distribute this document in any form in whole or in part without the written approval of Rockchip.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel:  +86-4007-700-590

Customer service Fax:  +86-591-83951833

Customer service e-Mail:  [fae@rock-chips.com](mailto:fae@rock-chips.com)

------

**Preface**

**Overview**

This document mainly describes the principle and usage of DDR ECC under the HAL bare-metal system.

**Product Version**

| **Chip Name** | **Kernel Version**    |
| ------------ | --------------- |
| RK356X       | HAL |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

------

**Revision History**

| **Version** | **Author** | **Date** | **Change Description** |
| ---------- | -------- | ----------- | ------------ |
| V1.0.0     | He Zhihuan   | 2021-03-29   | Initial version     |

**Table of Contents**

------

[TOC]

------

## Glossary

| Abbreviation in this document | Definition in this document                                     |
| ------------ | ------------------------------------------------ |
| ECC          | Error Correcting Code                            |
| SEC ECC      | Single Bit Single Error Correction Code          |
| DED ECC      | Double Error Detection Error Correction Code     |
| DDR          | Double Data Rate SDRAM                           |
| CE           | Correctable Error, refers to a single-bit detectable and correctable error     |
| UE           | Uncorrectable Error, refers to a double-bit detectable but uncorrectable error |
| cs           | chip select                                      |
| Row          | Refers to the DDR row address                                |
| Chip ID      | Refers to the DDR chip id; this function is not activated, please ignore             |
| BankGroup    | Refers to the DDR4 Bank Group address; ignore for other DDR types     |
| Bank         | Refers to the DDR bank address                               |
| Col          | Refers to the DDR column address                             |
| Bit position | Refers to the bit corrected by CE                              |

## Introduction

ECC stands for Error Correcting Code, and DDR ECC performs error checking and correction on DDR data. RK3568 only supports SEC/DED ECC. Currently only SideBand ECC is supported, that is, a DDR channel dedicated to storing ECC data is added alongside the DDR data channel. A 32-bit wide DDR requires at least 7-bit wide ECC, a 16-bit wide DDR requires at least 6-bit wide ECC, and an 8-bit wide DDR requires at least 5-bit wide ECC. For PCB design, please refer to designs with DDR ECC, such as RK_EVB6_RK3568_DDR3P416_ECCP216_DD6_V10.

## Enabling DDR ECC

For DDR channels that meet the SideBand ECC requirements, the loader will recognize this design and automatically enable DDR ECC.

## Obtaining DDR ECC Information in HAL

The specific error checking and correction behavior of DDR ECC is performed by a hardware algorithm, and software can obtain the relevant information.

### Configuration

Enable the DDR ECC module in the hal_conf.h of the corresponding project. For rk3568, add the following code in project/rk3568/src/hal_conf.h:

```c
#define HAL_DDR_ECC_MODULE_ENABLED
```

### Code and API

- lib/hal/src/hal_ddr_ecc.c

- lib/hal/inc/hal_ddr_ecc.h

```c
/* Initialize DDR ECC related information */
HAL_Status HAL_DDR_ECC_Init(struct DDR_ECC_CNT *p);

/* Obtain the cumulative statistical information of DDR ECC, including the number of single-bit correctable errors and the number of double-bit detectable but uncorrectable errors */
HAL_Status HAL_DDR_ECC_GetInfo(struct DDR_ECC_CNT *p);

```

### Usage Example

Upper-layer software can obtain DDR ECC information in two ways: software polling and hardware interrupt.

- Software polling mode

  Example:

  ```c
  struct DDR_ECC_CNT eccInfo;

  void HAL_DDR_ECC_TEST_POLL(void)
  {
      uint32_t cpuID;

      cpuID = HAL_CPU_TOPOLOGY_GetCurrentCpuId();
      if (cpuID == 0) {                      /* Use one cpu, thread, or other means to initialize and poll the DDR ECC status */
          HAL_DDR_ECC_Init(&eccInfo);
          while (1) {                        /* After initializing the DDR ECC information, poll to obtain DDR ECC information */
              HAL_DDR_ECC_GetInfo(&eccInfo); /* The cumulative CE and UE counts are stored in the eccInfo struct */
              HAL_DelayMs(50);               /* Polling interval; other APIs that let the cpu idle can be used */
          }
      }
  }
  ```

- Hardware interrupt mode

  Example:

  ```c
  struct DDR_ECC_CNT eccInfo;

  void HAL_DDR_ECC_IRQHandler(uint32_t irq)
  {
      HAL_DDR_ECC_GetInfo(&eccInfo);
  }

  void HAL_DDR_ECC_TEST_INT(void)
  {
      uint32_t cpuID;

      cpuID = HAL_CPU_TOPOLOGY_GetCurrentCpuId();
      if (cpuID == 0) {                                                /* Use one cpu, thread, or other means to initialize DDR ECC related settings */
          HAL_DDR_ECC_Init(&eccInfo);
          HAL_GIC_SetHandler(DDR_ECC_CE_IRQn, HAL_DDR_ECC_IRQHandler); /* Attach the CE interrupt service routine */
          HAL_GIC_SetHandler(DDR_ECC_UE_IRQn, HAL_DDR_ECC_IRQHandler); /* Attach the UE interrupt service routine */
          HAL_GIC_Enable(DDR_ECC_CE_IRQn);                             /* Enable the CE interrupt service */
          HAL_GIC_Enable(DDR_ECC_UE_IRQn);                             /* Enable the UE interrupt service */
      }
  }
  ```

- If an ECC error is detected, the obtained ECC information is printed.

  ```shell
  # Detected 2 CEs (correctable errors)
  [HAL WARNING] DDR ECC error: CE, 2 errors, the last is in DDR cs 0, Row 0xa0, ChipID 0x0, BankGroup 0x0, Bank 0x5, Col 0x318, Bit position 0x10000000

  # Detected 1 UE (uncorrectable error)
  [HAL ERROR] DDR ECC error: UE, 1 errors, the last is in DDR cs 0, Row 0xa0, ChipID 0x0, bankGroup 0x0, Bank 0x5, Col 0x354
  ```
