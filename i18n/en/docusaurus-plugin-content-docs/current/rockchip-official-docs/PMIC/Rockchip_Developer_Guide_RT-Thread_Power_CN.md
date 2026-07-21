# Rockchip RT-Thread Power Configuration Guide

ID: RK-KF-YF-112

Release Version: 1.1.1

Date: 2020-05-28

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

| **Chip Name** | **Version**   |
| ------------- | ------------- |
| PISCES        | RT-THREAD&HAL |
| RK2108        | RT-THREAD&HAL |
| RV1108        | RT-THREAD&HAL |
| RK1808        | RT-THREAD&HAL |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Revision Description**           |
| ---------- | ----------- | ---------- | :--------------------------------- |
| 2019-07-17 | V1.0        | Elaine     | First interim release              |
| 2020-03-06 | V1.1.0      | Tony.xie   | Added SOC integrated LDO power module support description |
| 2020-05-28 | V1.1.1      | Elaine     | Format correction                  |

---

[TOC]

---

## RT-Thread REGULATOR Features

* Supports I2C interface PMIC voltage regulation and output enable (e.g., RK808, RK818, RK809, RK817...)
* Supports I2C interface independent DCDC voltage regulation and output enable (e.g., SYR82X, TCS452X...)
* Supports voltage regulation and output enable for SOC integrated LDO and other power modules (e.g., RK2108, PISCES...)

## Software

### Code Paths

**REGULATOR Interface:**

```c
struct regulator_desc *regulator_get_desc_by_pwrid(ePWR_ID pwrId);
rt_err_t regulator_set_voltage(struct regulator_desc *desc, int volt);
uint32_t regulator_get_voltage(struct regulator_desc *desc);
rt_err_t regulator_set_suspend_voltage(struct regulator_desc *desc, int volt);
uint32_t regulator_get_suspend_voltage(struct regulator_desc *desc);
uint32_t regulator_get_real_voltage(struct regulator_desc *desc);
rt_err_t regulator_enable(struct regulator_desc *desc);
rt_err_t regulator_disable(struct regulator_desc *desc);
void regulator_desc_init(struct regulator_desc *descs, uint32_t cnt);
```

**External PMIC Interface:**

```c
rt_uint32_t pmic_get_voltage(struct pwr_i2cbus_desc *desc);
rt_err_t pmic_set_voltage(struct pwr_i2cbus_desc *desc,
                          rt_uint32_t voltUv);
rt_uint32_t pmic_get_suspend_voltage(struct pwr_i2cbus_desc *desc);
rt_err_t pmic_set_suspend_voltage(struct pwr_i2cbus_desc *desc,
                                  rt_uint32_t voltUv);
rt_err_t pmic_set_enable(struct pwr_i2cbus_desc *desc, rt_uint32_t enable);
rt_uint32_t pmic_is_enabled(struct pwr_i2cbus_desc *desc);
int pmic_desc_init(struct pwr_i2cbus_desc *descs, uint32_t cnt);
void pmic_desc_deinit(void);
rt_err_t pmic_check_desc_by_pwrId(struct pwr_i2cbus_desc *pdesc, ePWR_ID pwrId);
```

**Internal SOC Integrated Voltage Regulation Interface:**

```c
int HAL_PWR_GetEnableState(struct PWR_INTREG_DESC *desc);
uint32_t HAL_PWR_GetVoltage(struct PWR_INTREG_DESC *desc);
uint32_t HAL_PWR_GetVoltageSuspend(struct PWR_INTREG_DESC *desc);
uint32_t HAL_PWR_GetVoltageReal(struct PWR_INTREG_DESC *desc);
HAL_Status HAL_PWR_SetVoltage(struct PWR_INTREG_DESC *desc, uint32_t volt);
HAL_Status HAL_PWR_SetVoltageSuspend(struct PWR_INTREG_DESC *desc, uint32_t volt);
HAL_Status HAL_PWR_Enable(struct PWR_INTREG_DESC *desc);
HAL_Status HAL_PWR_Disable(struct PWR_INTREG_DESC *desc);
HAL_Check HAL_PWR_CheckDescByPwrId(struct PWR_INTREG_DESC *pdesc,
                                   ePWR_ID pwrId);
```

### Configuration

#### Enable REGULATOR Configuration

hal_conf.h

```c
#define HAL_PWR_MODULE_ENABLED
```

#### Enable PMIC Configuration

```c
RT-Thread bsp drivers  --->
    RT-Thread rockchip common drivers  --->
        [*] Enable PMIC
```

```c
RT-Thread Components  --->
    Device Drivers  --->
        [*] Using I2C device drivers
```

```c
RT-Thread bsp drivers  --->
    RT-Thread rockchip rk1808 drivers  --->
        Enable I2C  --->
            [*] Enable I2C0
```

hal_conf.h

```c
#ifdef RT_USING_I2C
#define HAL_I2C_MODULE_ENABLED
#endif

#ifdef RT_USING_PMIC
#define HAL_PWR_I2C8_MODULE_ENABLED
#define HAL_PWR_MODULE_ENABLED
#endif
```

#### Enable Internal SOC Voltage Regulation

hal_conf.h

```c
#define HAL_PWR_INTBUS_MODULE_ENABLED
```

Note:
Configure according to the actual product hardware. If only external PMIC voltage regulation is needed, configure sections 2.2.1 and 2.2.2 (e.g., RK1808 project). If only internal SOC voltage regulation is needed, configure sections 2.2.1 and 2.2.3 (e.g., PISCES project). If both external PMIC and internal SOC voltage regulation are supported, configure sections 2.2.1, 2.2.2, and 2.2.3.

### Initialization

In board.c, a desc structure needs to be filled, mainly describing the hardware information of each power rail (whether it is I2C or internal, I2C address, register related information).

```c
#ifdef HAL_PWR_MODULE_ENABLED
struct regulator_desc regulators[] =
{
    /****** vdd_npu **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = {
            .flag = DESC_FLAG_LINEAR(PWR_CTRL_VOLT_SSPD),
            .info = {
                .pwrId = PWR_ID_DSP_CORE,
            },
            .i2c8.name = "i2c0",
            .i2c8.i2cAddr = 0x1c,
            PWR_DESC_I2C8_SHIFT_RUN(0x10, 0),
            PWR_DESC_I2C8_SHIFT_SSPD(0x11, 0),
            PWR_DESC_I2C8_SHIFT_EN(0x10, 1 << 7),
            .voltMask = 0x7f,
            PWR_DESC_LINEAR_VOLT(600000, 1300000, 6250),
        },
    },
    /****** vdd_log **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = {
            .flag = DESC_FLAG_LINEAR(PWR_CTRL_VOLT_SSPD | PWR_FLG_ENMASK),
            .info = {
                .pwrId = PWR_ID_LOG,
            },
            .i2c8.name = "i2c0",
            .i2c8.i2cAddr = 0x20,
            PWR_DESC_I2C8_SHIFT_RUN(0xBB, 0),
            PWR_DESC_I2C8_SHIFT_SSPD(0xBC, 0),
            PWR_DESC_I2C8_SHIFT_EN(0xB1, 1 << 0),
            .voltMask = 0x7f,
            PWR_DESC_LINEAR_VOLT(500000, 1300000, 12500),
        },
    },
    /****** vdd_cpu **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = {
            .flag = DESC_FLAG_LINEAR(PWR_CTRL_VOLT_SSPD | PWR_FLG_ENMASK),
            .info = {
                .pwrId = PWR_ID_CORE,
            },
            .i2c8.name = "i2c0",
            .i2c8.i2cAddr = 0x20,
            PWR_DESC_I2C8_SHIFT_RUN(0xBE, 0),
            PWR_DESC_I2C8_SHIFT_SSPD(0xBF, 0),
            PWR_DESC_I2C8_SHIFT_EN(0xB1, 1 << 1),
            .voltMask = 0x7f,
            PWR_DESC_LINEAR_VOLT(500000, 1300000, 12500),
        },
    },
};

const struct regulator_init regulator_inits[] =
{
    DUMP_REGULATOR("vdd_npu", PWR_ID_DSP_CORE, 875000),
    DUMP_REGULATOR("vdd_log", PWR_ID_LOG, 800000),
    DUMP_REGULATOR("vdd_arm", PWR_ID_CORE, 800000),
};
const rt_uint32_t regulator_init_num = HAL_ARRAY_SIZE(regulator_inits);
#endif
```

1. **desc parameter details**

* **flag**: Supports the following configurations
  * **REGULATOR_FLG_I2C8**: 8-bit I2C transfer device
  * **REGULATOR_FLG_INTREG**: Internal SOC voltage regulation device
  * **REGULATOR_FLG_LOCK**: Whether a lock is needed (I2C devices all need it; internal voltage regulation depends on scenario and application)
* **desc.i2c_desc**:
  * **flag**: Supports the following configurations
    * **PWR_FLG_FIXED**: Fixed voltage, voltage adjustment not supported
    * **PWR_FLG_ALWAYSON**: Always on, output shutdown not supported
    * **PWR_FLG_ENMASK**: Whether the enable bit has a mask (RK808, RK818 do not have MASK function; RK816, RK805, RK817, RK809 all have MASK function)
  * **info**: ePWR_ID, the pwrId corresponding to each regulator, used for desc structure retrieval
* **i2c8.name**: i2c0\i2c1... used for i2c device retrieval
* **i2c8.i2cAddr**: I2C address
* **PWR_DESC_I2C8_SHIFT_RUN**: Run voltage configuration (register, offset)
* **PWR_DESC_I2C8_SHIFT_SSPD**: Suspend voltage configuration (register, offset)
* **PWR_DESC_I2C8_SHIFT_EN**: Enable output (register, offset)
* **voltMask**: Voltage mask
* **PWR_DESC_LINEAR_VOLT**: Voltage setting step (minimum voltage, maximum voltage, step value)
* **desc.intreg_desc**: (Similar to i2c_desc):
  * **PWR_INTREG_SHIFT_RUN**: Run voltage configuration (register, offset)
  * **PWR_INTREG_SHIFT_SSPD**: Suspend voltage configuration (register, offset)

2. **init parameter details**

```c
DUMP_REGULATOR("vdd_npu", PWR_ID_DSP_CORE, 875000),
```

vdd_npu: Power name, for printing only
PWR_ID_DSP_CORE: ePWR_ID pwrId, used for desc structure retrieval
875000: Init voltage. If set to 0, this rail voltage will not be set during initialization.

### Example

vdd_cpu voltage regulation

```c
#include "drv_regulator.h"
{
struct regulator_desc *desc;

desc = regulator_get_desc_by_pwrid(PWR_ID_CORE);

regulator_set_voltage(desc, 900000);

regulator_enable(desc);
}
```

### Dump Interface

Enable dump config configuration:

```c
RT-Thread bsp drivers  --->
    RT-Thread rockchip common drivers  --->
        [*] Enable REGULATOR_DUMP
```

REGULATOR DUMP can only dump some of the power rails in the regulator_inits[] structure. To add more clocks, follow the regulator_inits[] structure.

REGULATOR DUMP uses FINSH_FUNCTION_EXPORT. In the shell command line, switch to finsh and type regulator_dump().
