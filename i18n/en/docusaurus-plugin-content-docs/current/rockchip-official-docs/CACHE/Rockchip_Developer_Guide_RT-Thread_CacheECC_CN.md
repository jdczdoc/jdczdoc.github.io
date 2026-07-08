# Rockchip RT-Thread Cache ECC

ID: RK-KF-YF-163

Release Version: V1.0.0

Date: 2021-05-28

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip" is a registered trademark of the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may excerpt, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides the Cache ECC test method for the RT-Thread platform.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| RK356X        | RT-Thread          |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical support engineers

Software development engineers

**Revision History**

| **Version** | **Author** | **Date**   | **Description**  |
| ----------- | ---------- | ---------- | ---------------- |
| V1.0.0      | Xie Xiuxin | 2021-05-28 | Initial version  |

---

**Table of Contents**

[TOC]

---

## Feature Support

Cache ECC operations need to be performed in a secure environment. Since customers need to evaluate this feature, the related operations provided here are only for customer evaluation purposes.

- Read/Write operations of Cache ECC related ARM internal registers
- Cache ECC interrupts
- Cache error injection test

## Operation Permission Description

AArch64 EL1 mode or AArch32 SVC mode does not have permission to access ECC-related registers. If customers need to use the features described in this document to test or develop Cache ECC related functionality, they need to request that Trusted Firmware-A (TF-A) grant AArch64 EL1 mode or AArch32 SVC mode permission to access Cache ECC related registers. Granting permissions in TF-A involves security concerns and is recommended for testing purposes only.

## Register Description

Cache ECC registers involve two modules: L1-L2 corresponding ECC registers and DSU-L3 corresponding ECC registers. The following uses AArch64 registers as examples.

Cache ECC registers exist in a single set in ARM. Therefore, when configuring L1-L2 or DSU-L3 ECC registers, the ERRSELR_EL1 register must be used for selection control. Taking the Cache error information register ERXSTATUS_EL1 as an example:

- When ERRSELR_EL1 is 0, ERXSTATUS_EL1 corresponds to the L1-L2 register ERR0STATUS.
- When ERRSELR_EL1 is 1, ERXSTATUS_EL1 corresponds to the DSU-L3 register ERR1STATUS.

ECC-related registers are described as follows:

- ERXCTLR_EL1: Corresponds to register ERR0CTLR or ERR1CTLR, controls the enabling of each ECC feature.
- ERXFR_EL1: Corresponds to register ERR0FR or ERR1FR, shows the supported ECC features.
- ERXPFGCTLR_EL1: Corresponds to register ERR0PFGCTLR or ERR1PFGCTLR, controls injection of Cache anomalies for ECC testing.
- ERXPFGFR_EL1: Corresponds to register ERR0PFGFR or ERR1PFGFR, shows the types of injectable Cache anomalies.
- ERXSTATUS_EL1: Corresponds to register ERR0STATUS or ERR1STATUS, displays error information after a Cache error, used to determine the cause of the Cache error.
- ERXMISC0_EL1: Corresponds to register ERR0MISC0 or ERR1MISC0, supplements the ERXSTATUS_EL1 information.

Refer to the ARM official documentation for related register descriptions:

- [*Arm DynamIQ Shared Unit Technical Reference Manual*](https://developer.arm.com/documentation/100453/)
- [*Arm Cortex-A55 Core Technical Reference Manual*](https://developer.arm.com/documentation/100442/)

## Interrupts

### Interrupt Type Description

When a Cache error is detected, a fault or error IRQ is generated. Below is the A55 documentation:

> If enabled in the ERXCTLR/ERXCTLR_EL1 register, all errors that are detected cause a fault handling interrupt. The fault handling interrupt is generated on the nFAULTIRQ[0] pin for L3 and snoop filter errors, or on the nFAULTIRQ[n+1] pin for core n L1 and L2 errors.
>
> Uncorrectable errors in the L1 tag or dirty RAMs, or in the L2 tag RAMs, causes the nERRIRQ[n +1] pin to be asserted for core n, if enabled.
>
> Uncorrectable errors in the L3 tag RAMs or SCU snoop filter RAMs causes the nERRIRQ[0] pin to be asserted, if enabled.

Interrupt description:

- FAULTIRQ[0] signal corresponds to DSU-L3 CACHE.
- nFAULTIRQ[n+1] corresponds to L1-L2 anomalies of each CPU; nFAULTIRQ[1] corresponds to CPU0.
- nERRIRQ[0] signal corresponds to DSU-L3 CACHE.
- nERRIRQ[n+1] corresponds to L1-L2 anomalies of each CPU; nERRIRQ[1] corresponds to CPU0.

RK356X Cache ECC interrupts:

```c
  NFAULT0_IRQn           = 272,      /*!< DSU L3 CACHE ECC FAULT Interrupt */
  NFAULT1_IRQn           = 273,      /*!< CPU0 L1-L2 CACHE ECC FAULT Interrupt */
  NFAULT2_IRQn           = 274,      /*!< CPU1 L1-L2 CACHE ECC FAULT Interrupt */
  NFAULT3_IRQn           = 275,      /*!< CPU2 L1-L2 CACHE ECC FAULT Interrupt */
  NFAULT4_IRQn           = 276,      /*!< CPU3 L1-L2 CACHE ECC FAULT Interrupt */
  NERR0_IRQn             = 277,      /*!< DSU L3 CACHE ECC ERROR Interrupt */
  NERR1_IRQn             = 278,      /*!< CPU0 L1-L2 CACHE ECC ERROR Interrupt */
  NERR2_IRQn             = 279,      /*!< CPU1 L1-L2 CACHE ECC ERROR Interrupt */
  NERR3_IRQn             = 280,      /*!< CPU2 L1-L2 CACHE ECC ERROR Interrupt */
  NERR4_IRQn             = 281,      /*!< CPU3 L1-L2 CACHE ECC ERROR Interrupt */
```

After an anomaly, ECC error information can be obtained via ERXSTATUS_EL1 & ERXMISC0_EL1 in the nFAULTIRQ interrupt callback function.

### Anomaly Interrupt Registration

In RT-Thread, all CACHE ECC interrupts are registered via the following function:

```c
int rk_cache_ecc_init(uint32_t err1_irq_cpu)
```

- The err1_irq_cpu parameter of rk_cache_ecc_init() specifies which CPU the DSU-L3 FAULTIRQ[0] and nERRIRQ[0] interrupts are associated with.
- Each CPU's L1-L2 corresponding nFAULTIRQ[n+1] and nERRIRQ[n+1] interrupts are associated with its own CPU.

The RT-Thread interrupt function prints the register ERXSTATUS_EL1 and ERXMISC0_EL1 values when a Cache error occurs. The cause of the error can be determined from these register values.

## Operations

### Enabling Each Feature

The following function controls the enabling of each ECC feature. Configuration is done in Trusted Firmware-A, so no configuration is needed in RT-Thread. If customers have special requirements, they can use this function to make changes.

```c
HAL_Status HAL_CACHE_ECC_SetErxctlr(uint32_t err0ctlr, uint32_t err1ctlr)
```

- Parameter err0ctlr: controls the enabling of L1-L2 ECC features.
- Parameter err1ctlr: controls the enabling of DSU-L3 ECC features.

### Error Information Retrieval

Use the following two functions to obtain information from ERXSTATUS_EL1 and ERXMISC0_EL1.

```c
uint32_t HAL_CACHE_ECC_GetErxstatus(eCACHE_ECC_RecodeID errSel)
uint32_t HAL_CACHE_ECC_GetErxmisc0(eCACHE_ECC_RecodeID errSel)
```

Parameter errSel: selects whether to retrieve the L1-L2 or DSU-L3 corresponding register.

### Error Injection Test

Since Cache errors cannot be simulated externally, Cache ECC testing cannot be performed through external means. ARM provides a Cache error injection feature that can be used to verify Cache ECC functionality. Because of this Cache error injection feature, the operations provided in this document can only be used by customers to verify Cache ECC functionality. Production versions of Trusted Firmware-A will not grant Cache ECC operation permissions.

Inject errors into Cache using the following function:

```c
HAL_Status HAL_CACHE_ECC_Inject(eCACHE_ECC_RecodeID errSel, eCACHE_ECC_InjectFault injectFault)
```

- Parameter errSel: selects whether to inject errors into L1-L2 or DSU-L3.
- Parameter injectFault: the type of error to inject.

## Test Demo

When operating Cache ECC in RT-Thread, a Trusted Firmware-A with Cache ECC related register operation permissions is required first. The corresponding Trusted Firmware-A will print the following information at boot:

```shell
INFO:    Cache ECC registers are write-accessible from EL1 Non-secure.
```

Add the following code in RT-Thread for Cache ECC testing:

```c
rk_cache_ecc_init(0);
HAL_CACHE_ECC_Inject(CACHE_ECC_ERR0, CACHE_ECC_INJECT_UC);
```

- Function rk_cache_ecc_init(): registers the handler to notify IRQ when a Cache error occurs.
- Function HAL_CACHE_ECC_Inject(): injects an error into the Cache.
