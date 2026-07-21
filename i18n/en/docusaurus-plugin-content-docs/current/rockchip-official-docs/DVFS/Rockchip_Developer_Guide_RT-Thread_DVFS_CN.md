# Rockchip RT-Thread DVFS Usage Guide

ID: RK-KF-YF-115

Release Version: V1.0.1

Date: 2020-05-17

Security Level: □Top-Secret □Secret □Internal ■Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Without the Company's written permission, no individual or entity may extract or copy part or all of the content of this document, or distribute it in any form, beyond the scope of fair use.

Fuzhou Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

**Product Versions**

| **Chip Name** | **RT-Thread Version** |
| ----------------------- | ----------------- |
| All chips using RT-Thread |                   |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Revision Description** |
| ---------- | ----------- | ---------- | ------------------------ |
| 2019-07-19 | V1.0.0      | Tony Xie   | Initial release          |
| 2020-05-27 | V1.0.1      | Tony Xie   | Format correction        |

---

[TOC]

---

## RT-Thread DVFS Features

* Manages the frequency and voltage requirements of an IC module
* Supports multiple IC modules sharing one regulator power supply
* Supports different drivers/applications requesting frequency and voltage for the same IC module

## Software

### Code Paths

**Regulator req interface:**

```c
void regulator_req_init(void);
void regulator_req_desc_init(struct req_pwr_desc *desc_arr, uint8_t cnt);
struct req_pwr_desc  *regulator_get_req_volt_id(ePWR_ID pwrid, uint8_t *req_id);
rt_err_t regulator_req_set_voltage(struct req_pwr_desc *req_pwr, uint8_t req_id,
                                   uint32_t volt);
uint32_t regulator_req_get_voltage(struct req_pwr_desc *req_pwr);
uint32_t regulator_req_get_max_voltage(struct req_pwr_desc *req_pwr);
uint32_t regulator_req_get_set_voltage(struct req_pwr_desc *req_pwr, uint8_t req_id);
rt_err_t regulator_req_voltage_release(struct req_pwr_desc *req_pwr, uint8_t req_id);
rt_err_t regulator_req_release(struct req_pwr_desc *req_pwr, uint8_t req_id);
```

**CLK req interface:**

```c
void clk_req_desc_init(struct req_clk_desc *desc_array, uint8_t cnt);
void clk_req_init(void);
struct req_clk_desc  *clk_get_req_rate_id(eCLOCK_Name clk_id, uint8_t *req_id);
rt_err_t clk_req_set_rate(struct req_clk_desc *req_clk, uint8_t req_id, uint32_t rate);
uint32_t clk_req_get_rate(struct req_clk_desc *req_clk);
uint32_t clk_req_get_max_rate(struct req_clk_desc *req_clk);
uint32_t clk_req_get_set_rate(struct req_clk_desc *req_clk, uint8_t req_id);
rt_err_t clk_req_rate_release(struct req_clk_desc *req_clk, uint8_t req_id);
rt_err_t clk_req_release(struct req_clk_desc *req_clk, uint8_t req_id);
```

**DVFS interface:**

```c
rt_err_t dvfs_set_rate(struct rk_dvfs_desc *dvfs_desc, uint8_t dvfs_clk_req_id, uint32_t rate);
rt_err_t dvfs_set_rate_by_idx(struct rk_dvfs_desc *dvfs_desc,
                              uint8_t tbl_idx, uint8_t dvfs_clk_req_id);
struct rk_dvfs_desc *dvfs_get_by_clk(eCLOCK_Name clk_id, uint8_t *dvfs_clk_req_id);
uint32_t dvfs_req_get_rate(struct rk_dvfs_desc *dvfs_desc);
uint32_t dvfs_req_get_max_rate(struct rk_dvfs_desc *dvfs_desc);
uint32_t dvfs_req_get_set_rate(struct rk_dvfs_desc *dvfs_desc, uint8_t dvfs_clk_req_id);
void rk_dvfs_req_rate_release(struct rk_dvfs_desc *dvfs_desc,
                              uint8_t dvfs_clk_req_id);
void rk_dvfs_req_release(struct rk_dvfs_desc *dvfs_desc,  uint8_t dvfs_clk_req_id);
void dvfs_desc_init(struct rk_dvfs_desc *dvfs_array, uint32_t cnt);
void dvfs_init(void);
```

### Configuration

#### Enable DVFS Configuration

```c
RT-Thread rockchip common drivers  --->
    RT-Thread rockchip pm drivers  --->
        [*] Enble dvfs
```

#### Enable Regulator req Configuration

```c
RT-Thread rockchip common drivers  --->
    RT-Thread rockchip pm drivers  --->
        [*] Enable request regulator vol
```

#### Enable CLK req Configuration

```
RT-Thread rockchip common drivers  --->
    RT-Thread rockchip pm drivers  --->
        [*] Enable request clk
```

#### Enable Debug Log

```c
RT-Thread rockchip common drivers  --->
    RT-Thread rockchip pm drivers  --->
        [*] Enable request clk
```

### Regulator Req Usage

This feature is used when multiple IC modules share one power supply. It finds the highest voltage request among all module requests and configures that voltage.

#### Initialization Configuration

```c
static uint32_t core_pwr_req[2];
static struct req_pwr_desc req_pwr_array[] =
{
    {
        .pwr_id = PWR_ID_CORE,
        .req_ctrl = {
            .info.ttl_req = HAL_ARRAY_SIZE(core_pwr_req), /* for core & shrm */
            .req_vals = &core_pwr_req[0],
        }
    }
};

```

1. pwr_id corresponds to the Regulator ID of this power rail. Refer to: Rockchip_Developer_Guide_RT_Thread_Power_CN.md

2. core_pwr_req[2] is an array that records voltage values requested by each module. Here, core and shrm two modules share this power rail, so the array size is 2.

3. The following code initializes power rails that support the Regulator req feature:

```c
void rt_hw_board_init()
{
    regulator_req_desc_init(req_pwr_array, HAL_ARRAY_SIZE(req_pwr_array));
}
```

#### Usage

1. Apply for a struct req_pwr_desc description pointer and a req_id through the regulator id. req_id is used to manage which module requested the voltage. Function:

```c
struct req_pwr_desc  *regulator_get_req_volt_id(ePWR_ID pwrid, uint8_t *req_id)
```

2. When setting voltage, configure through the struct regulator_desc description pointer and corresponding req_id. Function:

```c
rt_err_t regulator_req_set_voltage(struct req_pwr_desc *req_pwr, uint8_t req_id,
                                   uint32_t volt)
```

### CLK Req Usage

This feature is used when multiple references or modules request performance for a certain module. For example, MCU at 300M requests SRAM to run at 300M, VOP module requests SRAM to run at 200M. This feature selects 300M as the SRAM operating frequency.

#### Initialization Configuration

```c
static uint32_t clk_shrm_req[2];
static struct req_clk_desc req_clk_array[] =
{
    {
        .clk_id = SCLK_SHRM,
        .req_ctrl = {
            .info.ttl_req = HAL_ARRAY_SIZE(clk_shrm_req),
            .req_vals = &clk_shrm_req[0],
        }
    }
};

```

1. clk_id corresponds to a clock id. Refer to: Rockchip-Clock-Developer-Guide-RTOS-CN.md

2. clk_shrm_req[2] is an array that records CLK frequencies requested by each module. Here, core and vop two modules have sram requirements, so the array size is 2.

3. The following code initializes CLK modules that support the CLK req feature:

```c
void rt_hw_board_init()
{
    clk_req_desc_init(req_clk_array, HAL_ARRAY_SIZE(req_clk_array));
}
```

#### Usage

1. Apply for a struct req_clk_desc description pointer and a req_id through the clk id. req_id is used to manage which module requested the frequency. Function:

```c
struct req_clk_desc  *clk_get_req_rate_id(eCLOCK_Name clk_id, uint8_t *req_id);
```

2. When setting frequency, configure through the struct req_clk_desc description pointer and corresponding req_id. Function:

```c
rt_err_t clk_req_set_rate(struct req_clk_desc *req_clk, uint8_t req_id, uint32_t rate);
```

### dvfs Usage

Configure the frequency of a module through clk id and configure the corresponding voltage according to the pre-configured frequency-voltage table.

#### Initialization Configuration

```c
static struct dvfs_table dvfs_core_table[] =
{
    {
        .freq = 200000000,
        .volt = 950000,
    },
    {
        .freq = 300000000,
        .volt = 950000,
    },
};

static struct dvfs_table dvfs_shrm_table[] =
{
    {
        .freq = 200000000,
        .volt = 950000,
    },
    {
        .freq = 300000000,
        .volt = 950000,
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

1. dvfs_data[] specifies two clocks that need dvfs control: HCLK_M4 and SCLK_SHRM (specified by clk_id).

2. The power module corresponding to each clock is PWR_ID_CORE (specified by pwr_id).

3. table: dvfs table corresponding to each CLK, e.g., dvfs_shrm_table.

4. tbl_idx indicates which entry in the dvfs table to use for initializing frequency and voltage.

5. Use the following function to specify clocks requiring dvfs control:

```c
    dvfs_desc_init(&dvfs_data, HAL_ARRAY_SIZE(dvfs_data));
```

#### Usage

1. Apply for a struct rk_dvfs_desc description pointer and a req_id for the clock (dvfs_clk_req_id) through the clk id. Function:

```c
struct rk_dvfs_desc *dvfs_get_by_clk(eCLOCK_Name clk_id, uint8_t *dvfs_clk_req_id);
```

2. The dvfs_clk_req_id records the request information of each module referencing the CLK corresponding to this dvfs node, same as the req_id in CLK req above.

3. Directly set the frequency value through the struct rk_dvfs_desc description pointer and corresponding dvfs_clk_req_id. Function:

```c
rt_err_t dvfs_set_rate(struct rk_dvfs_desc *dvfs_desc, uint8_t dvfs_clk_req_id, uint32_t rate);
```

4. The corresponding voltage can be set through the table entry index of the dvfs node's frequency-voltage table. The parameter tbl_idx specifies which entry in struct dvfs_table dvfs_core_table[] to configure the frequency from. Function:

```c
rt_err_t dvfs_set_rate_by_idx(struct rk_dvfs_desc *dvfs_desc,
                              uint8_t tbl_idx, uint8_t dvfs_clk_req_id);
```
