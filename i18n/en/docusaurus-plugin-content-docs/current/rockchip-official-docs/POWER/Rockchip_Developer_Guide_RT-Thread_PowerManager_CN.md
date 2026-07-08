# Rockchip RT-Thread Power Manager

ID: RK-KF-YF-104

Release Version: V1.1.1

Date: 2021-04-29

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("COMPANY") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

DUE TO PRODUCT VERSION UPGRADES OR OTHER REASONS, THIS DOCUMENT MAY BE UPDATED OR MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" are registered trademarks of the Company and owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved. ©2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no entity or individual may extract, copy, or distribute part or all of the content of this document in any form without the written permission of the Company.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides instructions on power control based on the RT-Thread platform.

**Product Versions**

| **Chip Name**                  | **Kernel Version** |
| ----------------------------- | ------------ |
| Company chips using RT-Thread system |              |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical support engineers
Software development engineers

**Revision History**

| **Version** | **Author** | **Date** | **Change Description**       |
| ---------- | -------- | :----------- | :----------------- |
| V1.0.0     | Xie Xiuxin | 2020-03-04   | Initial version           |
| V1.0.1     | Xie Xiuxin | 2020-05-27   | Fixed formatting           |
| V1.1.0     | Xu Shengfei | 2020-05-28   | Updated low power related instructions |
| V1.1.1     | Huang Ying | 2021-04-29   | Modified formatting           |

---

**Table of Contents**

[TOC]

---

## RT-Thread Power Manager Feature Support

* Supports Clock Gating
* Supports Power Gating
* Supports DVFS Dynamic Frequency and Voltage Scaling

## Power Management Methods

### Basic Concepts

**Clock Gating:** Controls CLOCK on/off

**Power Gating:** The SOC internally divides into different Power Domains. The power supply for each Power Domain can be switched on/off through internal SOC control. This switching operation is Power Gating.

**DVFS - Dynamic Frequency and Voltage Scaling:** A chip requires corresponding voltage support to run at a certain frequency. For example, operating frequencies and voltages are 400M-0.9V, 600M-0.95V. Software supports switching the frequency from 400M to 600M, with the corresponding voltage switching from 0.9V to 0.95V.

**Dynamic Power:** Dynamic power is related to operating voltage and frequency. Control methods are DVFS and Clock Gating.

**Static Power:** Static power is related to voltage and temperature. The control method is Power Gating.

### Clock Gating

When a module does not need to work, the corresponding CLOCK should be turned off. Interface:

```c
rt_err_t clk_enable(struct clk_gate *gate, int on)
```

Reference document: CLK/Rockchip_Developer_Guide_RTOS_Clock_CN.md

### Power Gating

When a module does not need to work, the first step is to turn off the corresponding CLOCK, then turn off the corresponding Power Domain. Since Power Gating takes longer than Clock Gating, Power Gating operations are generally only performed when the module is not used for an extended period. Interface:

```c
rt_err_t pd_power(struct pd *power, int on)
```

Reference document: CLK/Rockchip_Developer_Guide_RTOS_Clock_CN.md

### DVFS Control

Reference document: Rockchip_Developer_Guide_RT-Thread_DVFS_CN.md

### RT-Thread PM MODE Control

RT-Thread uses the PM MODE mechanism to control power consumption requirements under different scenarios. Refer to the official RT-Thread documentation for specific implementation parameters. The implementation cooperates with the DVFS mechanism.

#### RT-Thread PM MODE Basic Concepts

The system defines run modes and sleep modes in pm_cfg.h. Users can also extend them as needed.

```c
enum
{
    /* run modes */
    PM_RUN_MODE_HIGH = 0,
    PM_RUN_MODE_NORMAL,
    PM_RUN_MODE_LOW,

    /* sleep modes */
    PM_SLEEP_MODE_SLEEP,
    PM_SLEEP_MODE_TIMER,
    PM_SLEEP_MODE_SHUTDOWN,
};
```

#### RT-Thread PM MODE Usage

1. Request and release a mode through the following two functions:

   void rt_pm_request(rt_ubase_t mode)

   void rt_pm_release(rt_ubase_t mode)

   Parameter mode: Corresponds to PM_RUN_MODE_HIGH, PM_RUN_MODE_NORMAL, PM_RUN_MODE_LOW, PM_SLEEP_MODE_SLEEP, etc.

2. Control via commands

Check the system status via command: msh >pm_dump

```c
msh >pm_dump
| Power Management Mode | Counter | Timer |
+-----------------------+---------+-------+
|     Running High Mode |       0 |     0 |
|   Running Normal Mode |       1 |     0 |
|      Running Low Mode |       0 |     0 |
|            Sleep Mode |       1 |     0 |
|            Timer Mode |       0 |     0 |
|         Shutdown Mode |       1 |     0 |
+-----------------------+---------+-------+
pm current mode: Running Normal Mode
```

Enter mode 1 (PM_RUN_MODE_NORMAL) via command: msh >pm_request 1

Release mode 1 (PM_RUN_MODE_NORMAL) via command: msh >pm_release 1.

#### Initialization Configuration - Power Management Mode Corresponding DVFS

```c
const static struct dvfs_table dvfs_core_table[] =
{
    {
        .freq = 297000000,
        .volt = 800000,
    },
    {
        .freq = 396000000,
        .volt = 900000,
    },
};

const static struct dvfs_table dvfs_shrm_table[] =
{
    {
        .freq = 297000000,
        .volt = 800000,
    },
    {
        .freq = 396000000,
        .volt = 850000,
    },
};

struct rk_dvfs_desc dvfs_data[] =
{
    {
        .clk_id = SCLK_SHRM,
        .pwr_id = PWR_ID_CORE,
        .tbl_idx = 1,
        .table = &dvfs_shrm_table[0],
        .tbl_cnt = HAL_ARRAY_SIZE(dvfs_shrm_table),
    },
    {
        .clk_id = HCLK_M4,
        .pwr_id = PWR_ID_CORE,
        .tbl_idx = 1,
        .table = &dvfs_core_table[0],
        .tbl_cnt = HAL_ARRAY_SIZE(dvfs_core_table),
    },
};
```

This code segment configures the DVFS table. Reference: Rockchip_Developer_Guide_RT-Thread_DVFS_CN.md

#### Initialization Configuration - Power Management Mode

```c
static struct pm_mode_dvfs pm_mode_data[] =
{
    {
        .clk_id = HCLK_M4,
        .run_tbl_idx = {1, 1, 0},
        .sleep_tbl_idx = 0,
    },
    {
        .clk_id = SCLK_SHRM,
        .run_tbl_idx = {1, 1, 0},
        .sleep_tbl_idx = 0,
    },
};
```

The struct pm_mode_dvfs manages the operating frequency of each clk (specified by clk_id) in each PM MODE. The specification method is:

1.run_tbl_idx = {1, 1, 0}

Here, 1, 1, 0 specifies that the frequencies for PM_RUN_MODE_HIGH, PM_RUN_MODE_NORMAL, and PM_RUN_MODE_LOW correspond to DVFS table (taking core as an example) entries dvfs_core_table[1], dvfs_core_table[1], dvfs_core_table[0].

2.sleep_tbl_idx = 0 indicates that the frequency and voltage for SLEEP mode are defined by dvfs_data[0].

3.The system initializes through the following function:

```c
void rkpm_register_dvfs_info(struct pm_mode_dvfs *dvfs, int cnt, void (*pm_func)(uint32_t))`
```

Parameter dvfs: The address of pm_mode_data[] above.

Parameter pm_func: Used for chip-specific power control customization; currently not used.

### Runtime Power Control

In a running system, the system performs relevant power control based on the status of each module. Therefore, drivers for each module need to request and release their own running status through the following two functions:

```c
void pm_runtime_request(ePM_RUNTIME_ID runTimeId)

void pm_runtime_release(ePM_RUNTIME_ID runTimeId)
```

### Low Power (Sleep Mode) Design and Implementation

#### Main Operations

The main operations for low power are as follows:

1. Configure sleep mode
2. Determine whether to switch the system sleep clock to 32K
3. Optionally configure GPIO, TIMER, TIMEOUT interrupts as wake-up signal sources during sleep

#### Specific Implementation

1. Configure sleep mode. Based on the status of PD_DSP and PD_AUDIO when entering sleep, determine whether to turn off the corresponding PD, VD, and whether to switch the system sleep clock to 32K. Implement the corresponding operations in the following function:

```c
static void SOC_SleepModeInit(struct PMU_REG *pPmu)
```

2. Configure wake-up signal sources. The interrupts generated by enabled wake-up sources can wake the system during sleep. Supports GPIO, TIMER, TIMEOUT and other wake-up source enable configuration. GPIO and TIMER wake-up sources are enabled by default. TIMEOUT is mainly used for debugging and validation during development.

To change the default wake-up sources, e.g., disable GPIO interrupt wake-up function, simply remove the corresponding wake-up source macro from the value variable in the following function:

```c
static void SOC_WakeupSourceConfig(struct PMU_REG *pPmu)
```
