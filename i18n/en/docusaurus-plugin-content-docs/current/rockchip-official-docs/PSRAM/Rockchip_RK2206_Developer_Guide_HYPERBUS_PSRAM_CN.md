# Rockchip RK2206 Developer Guide HYPERBUS PSRAM

ID: RK-KF-YF-051

Release Version: V1.0.0

Date: 2019-11-28

Security Level: Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip" is a registered trademark of the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may excerpt, copy, or distribute any part or all of the content of this document in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the principles and usage of the RK2206 HYPERBUS PSRAM.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| RK2206        | FreeRTOS V10.0.1   |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

        Technical support engineers

        Software development engineers

---

**Revision History**

| **Version** | **Author** | **Date**   | **Description**  |
| ----------- | ---------- | :--------- | ---------------- |
| V1.0.0      | He Zhihuan | 2019-11-28 | Initial version  |

**Table of Contents**

---

[TOC]

---

## **1 HYPERBUS PSRAM**

### **1.1 Principles**

HYPERBUS interface is a type of Low Signal Count Spec, supporting both FLASH and PSRAM. This document only covers the PSRAM case.

PSRAM, Pseudo SRAM, has an SRAM-like stable interface with a DRAM internal storage architecture (refresh is internally generated). The HYPER PSRAM (i.e., HYPERBUS PSRAM) interface has an 8-bit width with Double-Data Rate (DDR) data transfer.

### **1.2 HYPER PSRAM as Memory**

If some modules require large-capacity memory as a cache buffer, HYPER PSRAM can be used.

#### **1.2.1 Configuration**

The CONFIG_DRIVER_HYPERPSRAM macro must be enabled.

```c
    BSP Driver  --->
        [*] Enable HYPERBUS psram
```

#### **1.2.2 Code and API**

- src/driver/hyperbus/HyperPsramDevice.c

- include/driver/HyperPsramDevice.h

```c
/* Initialize HYPERPSRAM */
INIT API rk_err_t HYPERPSRAM_Init(void);
/* Modify HYPERPSRAM Init parameters, called after initialization and each time the HYPERPSRAM frequency changes */
COMMON API rk_err_t HYPERPSRAM_ModifyInit(void);
```

#### **1.2.3 Usage Example**

RK2206 usage example

```c
#include "driver/HyperPsramDevice.h"

HYPERPSRAM_Init();
HYPERPSRAM_ModifyInit();

```

### **1.3 Running RKOS on HYPER PSRAM**

HYPER PSRAM can be used as memory to run RKOS code.

#### **1.3.1 Configuration**

Select the linker script name as PSRAM

```c
    Compiler Options  --->
        Linker Section Features  --->
        	Linker Script Name (SRAM)  --->
        		( ) SRAM
				(X) PSRAM
				( ) XIP
```

Enable the CONFIG_DRIVER_HYPERPSRAM macro.

```c
    BSP Driver  --->
        [*] Enable HYPERBUS psram
```

#### **1.3.2 Code and API**

- src/bsp/RK2206/common/chip.c

- src/driver/hyperbus/HyperPsramDevice.c
- include/driver/HyperPsramDevice.h

```c
/* Initialize HYPERPSRAM */
INIT API rk_err_t HYPERPSRAM_Init(void);
/* Modify HYPERPSRAM Init parameters, called after initialization and each time the HYPERPSRAM frequency changes */
COMMON API rk_err_t HYPERPSRAM_ModifyInit(void);

```

#### **1.3.3 Usage Example**

The above operations are sufficient.

### **1.4 Shell Debug Commands**

Enable the COMPONENTS_SHELL_PM_TEST macro:

```c
Components Config  --->
    Command shell  --->
        [*]     Enable HYPERPSRAM shell command
```

Commands:

```c
RK2206>hyperpsram

        help            <command>    get help information
        memtest         memtest hyperpsram
        performtest     performtest hyperpsram
        q               <command>    exit package
```

```c
RK2206>hyperpsram.memtest 0x38300000 0x100000 0

[A.14.00][000019.557480]Loop 1:
[A.14.00][000019.564805]  Random Value        : ok
[A.14.00][000019.598206]  Compare XOR         : ok
[A.14.00][000019.610904]  Compare SUB         : ok
[A.14.00][000019.621590]  Compare MUL         : ok
[A.14.00][000019.631275]  Compare DIV         : ok
[A.14.00][000019.640299]  Compare OR          : ok
[A.14.00][000019.658005]  Compare AND         : ok
[A.14.00][000019.674690]  Sequential Increment: ok
[A.14.00][000019.688740]  Solid Bits          : ok
[A.14.00][000020.357231]  Block Sequential    : ok
[A.14.00][000022.994510]  Checkerboard        : ok
[A.14.00][000023.652442]  Bit Spread          : ok
[A.14.00][000024.324932]  Bit Flip            : ok
[A.14.00][000026.956999]  Walking Ones        : ok
[A.14.00][000027.623273]  Walking Zeroes      : ok
[A.14.00][000028.294573]  8-bit Writes        : ok
[A.14.00][000028.346596]  16-bit Writes       : ok
```
