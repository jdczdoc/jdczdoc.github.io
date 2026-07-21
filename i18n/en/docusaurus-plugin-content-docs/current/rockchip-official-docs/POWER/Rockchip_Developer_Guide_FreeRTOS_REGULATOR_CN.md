# Rockchip FreeRTOS Regulator Developer Guide

ID: RK-KF-YF-060

Release Version: V1.0.1

Date: 2021-04-29

Security Level: □Top-Secret □Secret □Internal ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Without the Company's written permission, no individual or entity may extract or copy part or all of the content of this document, or distribute it in any form, beyond the scope of fair use.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the basic introduction and usage of RK2206 PMIC, Charger, Power key and other drivers.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ----------------- |
| RK2206        | FreeRTOS V10.0.1  |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers
Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date**   | **Revision Description**   |
| ----------- | ---------- | ---------- | -------------------------- |
| V1.0.0      | Huang Xiaodong | 2019-12-02 | Initial version         |
| V1.0.1      | Huang Ying | 2021-04-29 | Modified copyright info and format |

---

**Table of Contents**

[TOC]

---

## Regulator

### Overview

Regulator refers to a "stabilizer", including voltage regulator or current regulator, referring to a device that can automatically maintain a constant voltage (or current). Voltage regulators are more commonly used compared to current regulators. From a driver perspective, regulator control mainly involves output enable/disable and control of output voltage or current magnitude.

### Configuration

Configuration in menuconfig:

Enable regulator driver:

```c
    BSP Driver  --->
        [*] Enable REGULATOR
```

The regulator driver is a core driver that provides interfaces for other related drivers. Simply enabling the regulator driver alone has no practical effect; other drivers need to be enabled based on the specific regulator type, as follows:

```c
    BSP Driver  --->
        [*] Enable REGULATOR
        [*]     Enable PMIC REGULATOR
```

For a specific hardware system, the struct regulator_desc needs to be populated to configure specific information for all regulators in that system. The global variable const struct regulator_init regulator_inits[] also needs to be initialized to set the initial voltage for all regulators, as follows:

```c
union U_PWR_REG_DESC
{
    struct PWR_INTREG_DESC intreg_desc; /* If the regulator is controlled by internal registers, use this structure */
    struct pwr_i2cbus_desc i2c_desc; /* If the regulator is controlled by I2C bus, use this structure */
};

struct regulator_desc
{
    uint8 flag;
    union U_PWR_REG_DESC desc; /* Hardware parameter information */
    regulator_mutex_t lock; /* lock */
    uint16 setup_fixed; /* Fixed boost delay uS */
    uint16 setup_step; /* Boost rate, mV/uS */
    uint32 currentVolt; /* Current voltage value uV */
};

struct regulator_init
{
    const char *name; /* Name */
    uint32 pwrId; /* id, unique identifier in a system */
    uint32 init_voltage; /* Initial voltage value uV */
    uint32 suspend_voltage; /* Voltage value in sleep mode uV */
    uint32 suspend_enable; /* Whether to enable in sleep mode */
};

/* Set initial voltage for each regulator */
const struct regulator_init regulator_inits[] =
{
    REGULATOR_INIT("buck1_out", PWR_ID_BUCK_1V8, 1800000, 0, 0),
    REGULATOR_INIT("vcc_3v3", PWR_ID_VCCIO_3V3, 3300000, 0, 0),
    REGULATOR_INIT("ldo2_out", PWR_ID_VDD_1V1, 1100000, 0, 0),
    REGULATOR_INIT("vcc_1v8", PWR_ID_VCCIO_1V8, 1800000, 0, 0),
    REGULATOR_INIT("vcc1v8_pmic", PWR_ID_VCCIO_1V8_PMU, 1800000, 0, 0),
    { 0 },
};
```

Taking the RK812 regulator module as an example, the following related information can be configured:

- src/bsp/RK2206/board/rk2206_evb/board.c

```c
#include "driver/drv_regulator.h"

#ifdef CONFIG_DRIVER_REGULATOR
/* Configure basic information for each regulator */
static struct regulator_desc regulators[] =
{
#if CONFIG_DRIVER_PMIC_REGULATOR
    /****** buck1_out **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK812_BUCK(RK812_ID_DCDC1, I2C_DEV2, PWR_ID_BUCK_1V8),
    },
    /****** vcc_3v3 **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK812_LDO(RK812_ID_LDO1, I2C_DEV2, PWR_ID_VCCIO_3V3),
    },
    /****** ldo2_out **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK812_LDO2(RK812_ID_LDO2, I2C_DEV2, PWR_ID_VDD_1V1),
    },
    /****** vcc_1v8 **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK812_LDO(RK812_ID_LDO4, I2C_DEV2, PWR_ID_VCCIO_1V8),
    },
    /****** vcc1v8_pmic **********/
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK812_LDO(RK812_ID_LDO5, I2C_DEV2, PWR_ID_VCCIO_1V8_PMU),
    },
#endif
};

/* Set initial voltage for each regulator */
const struct regulator_init regulator_inits[] =
{
    REGULATOR_INIT("buck1_out", PWR_ID_BUCK_1V8, 1800000, 0, 0),
    REGULATOR_INIT("vcc_3v3", PWR_ID_VCCIO_3V3, 3300000, 0, 0),
    REGULATOR_INIT("ldo2_out", PWR_ID_VDD_1V1, 1100000, 0, 0),
    REGULATOR_INIT("vcc_1v8", PWR_ID_VCCIO_1V8, 1800000, 0, 0),
    REGULATOR_INIT("vcc1v8_pmic", PWR_ID_VCCIO_1V8_PMU, 1800000, 0, 0),
    { 0 },
};
#endif

COMMON API void System_Power_Init(void)
{
    ...

/* Register the populated struct regulator_desc to the regulator driver */
#if CONFIG_DRIVER_REGULATOR
    regulator_desc_init(regulators, HAL_ARRAY_SIZE(regulators));
#endif

    ...
}
```

### Code and API

- src/driver/regulator/drv_regulator.c
- include/driver/drv_regulator.h

```c
/* Set specified regulator voltage */
rk_err_t regulator_set_voltage(struct regulator_desc *desc, int volt);
/* Get specified regulator voltage */
uint32 regulator_get_voltage(struct regulator_desc *desc);
/* Set specified regulator sleep mode voltage */
rk_err_t regulator_set_suspend_voltage(struct regulator_desc *desc, int volt);
/* Get specified regulator sleep mode voltage */
uint32 regulator_get_suspend_voltage(struct regulator_desc *desc);
/* Get specified regulator real voltage */
uint32 regulator_get_real_voltage(struct regulator_desc *desc);
/* Enable specified regulator */
rk_err_t regulator_enable(struct regulator_desc *desc);
/* Disable specified regulator */
rk_err_t regulator_disable(struct regulator_desc *desc);
/* Enable specified regulator in sleep mode */
rk_err_t regulator_suspend_enable(struct regulator_desc *descs);
/* Disable specified regulator in sleep mode */
rk_err_t regulator_suspend_disable(struct regulator_desc *descs);
/* Get regulator_desc by pwrid */
struct regulator_desc *regulator_get_desc_by_pwrid(ePWR_ID pwrId);
/* Get regulator_desc by name */
struct regulator_desc *regulator_get_desc_by_name(const char *name);
/* Initialize regulator_desc */
void regulator_desc_init(struct regulator_desc *descs, uint32 cnt);
/* Initialize regulator */
void regulator_setup(void);
```

### Usage Example

Regulator APIs are called by specific modules. Taking dvfs as an example:

- src/driver/dvfs/drv_dvfs.c

```c
#include "driver/drv_regulator.h"

rk_err_t regulator_req_set_voltage(struct req_pwr_desc *req_pwr, uint8_t req_id,
                                   uint32_t volt)
{
    ...

    volt_new = req_val_updata_val(req_ctrl, req_id, volt);

    if (volt_new)
        ret = regulator_set_voltage(req_pwr->desc, volt_new);

    ...
}
```

## PMIC Regulator

### Overview

Certain types of regulators have registers accessed via I2C. Regulators integrated inside PMICs are typically of this type. We uniformly abstract them as pmic regulators.

### Configuration

Configuration in menuconfig:

Enable pmic regulator driver (regulator driver must be enabled first):

```c
    BSP Driver  --->
        [*] Enable REGULATOR
        [*]     Enable PMIC REGULATOR
```

After the above configuration, the pmic regulator driver is ready for use.

### Code and API

- src/driver/regulator/drv_pmic_regulator.c
- include/driver/drv_pmic_regulator.h

```c
/* Get specified pmic regulator voltage */
uint32 pmic_get_voltage(struct pwr_i2cbus_desc *desc);
/* Set specified pmic regulator voltage */
rk_err_t pmic_set_voltage(struct pwr_i2cbus_desc *desc,
                          uint32 voltUv);
/* Get sleep mode voltage of specified pmic regulator */
uint32 pmic_get_suspend_voltage(struct pwr_i2cbus_desc *desc);
/* Set sleep mode voltage of specified pmic regulator */
rk_err_t pmic_set_suspend_voltage(struct pwr_i2cbus_desc *desc,
                                  uint32 voltUv);
/* Enable/disable specified pmic regulator */
rk_err_t pmic_set_enable(struct pwr_i2cbus_desc *desc, uint32 enable);
/* Set whether specified pmic regulator is enabled in sleep mode */
rk_err_t pmic_set_suspend_enable(struct pwr_i2cbus_desc *desc, uint32 enable);
/* Check if specified pmic regulator is enabled */
uint32 pmic_is_enabled(struct pwr_i2cbus_desc *desc);
/* Check if specified pmic regulator matches specified pwrid */
rk_err_t pmic_check_desc_by_pwrId(struct pwr_i2cbus_desc *pdesc, ePWR_ID pwrId);
```

### Usage Example

PMIC regulator APIs are typically called by the regulator driver, as shown below:

- src/driver/regulator/drv_regulator.c

```c
#include "driver/drv_pmic_regulator.h"

static rk_err_t __regulator_set_voltage(struct regulator_desc *descs, int volt)
{
    ...

#ifdef CONFIG_DRIVER_PMIC_REGULATOR
    if (REGULATOR_CHK_I2C8(descs))
    {
        return pmic_set_voltage(&descs->desc.i2c_desc, volt);
    }
#endif

    ...
}
```
