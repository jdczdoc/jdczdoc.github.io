# Rockchip FreeRTOS PMIC, Charger, Powerkey Developer Guide

ID: RK-GL-YF-059

Release Version: V1.0.0

Date: 2019-12-02

Security Level: Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

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

This document mainly describes the basic introduction and usage of RK2206 PMIC, Charger, Power key drivers, etc.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| RK2206        | FreeRTOS V10.0.1   |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author** | **Modification Date** | **Description** |
| ----------- | ---------- | :-------------------- | --------------- |
| V1.0.0      | Huang Xiaodong | 2019-12-02        | Initial version |

**Table of Contents**

---

[TOC]

---

## **1 PMIC**

### **1.1 Overview**

PMIC stands for Power Management Integrated Circuit. Generally, it is a chip independent from the main controller, integrating power control, power key control, charging control, and other modules.

### **1.2 Configuration**

Configuration in menuconfig:

Enable PMIC driver:

```c
    BSP Driver  --->
        [*] Enable PMIC
```

The PMIC driver is a core driver that provides interfaces for other related drivers. Simply enabling the PMIC driver alone is not effective; specific module drivers need to be enabled based on the actual situation, as shown below:

```c
BSP Driver  --->
    [*] Enable PMIC
    [*]     Enable PMIC Key
    [*]     Enable PMIC Charger
    [*]         Enable RK812 Charger
```

For a specific PMIC chip, fill in the struct rk_pmic_desc to configure specific information, as shown below:

```c
struct rk_pmic_desc
{
    int8 i2c_id;             /* I2C ID used for reading/writing PMIC registers */
    uint8 i2c_addr;          /* I2C device address */
    uint8 on_src_reg;        /* Base address of pmic_on_source register */
    uint8 int_st_reg;        /* Base address of pmic_int_st register */
    uint8 int_reg_num;       /* Number of pmic_int registers */
    uint8 int_num;           /* Number of PMIC internal interrupts */
    uint8 on_src_num;        /* Number of on sources */
    uint8 power_ctrl_reg_num[PMIC_PWR_MAX]; /* Array length of each power_ctrl_reg[i] */
    int pmic_int_pin;        /* pmic_int pin number */
    eGPIO_pinLevel pmic_int_level;            /* Trigger level of pmic_int pin */
    ePINCTRL_configParam pmic_int_ioparam;    /* Initialization parameters of pmic_int pin */
    int pmic_sleep_pin;                       /* pmic_sleep pin number */
    eGPIO_pinLevel pmic_sleep_level;          /* Active level of pmic_sleep pin */
    ePINCTRL_configParam pmic_sleep_ioparam;  /* Initialization parameters of pmic_sleep pin */
    const struct pmic_reg_data *power_ctrl_reg[PMIC_PWR_MAX]; /* Registers to configure for each PMIC power state */
    pmic_int_id *int_map;                     /* PMIC internal interrupt mapping table */
    pmic_on_src_t *on_src_map;                /* ON source mapping table */
    struct I2C_DEVICE_CLASS *i2cbus;          /* I2C device pointer */
};
```

Taking RK812 as an example, configure as follows:

- src/bsp/RK2206/board/rk2206_evb/board.c

```c
#include "driver/drv_pmic.h"

#ifdef CONFIG_DRIVER_PMIC
/* PMIC internal interrupt mapping table */
static pmic_int_id rk812_int_map[] =
{
    PKEY_FALL_INT,
    PKEY_RISE_INT,
    PKEY_INT,
    PKEY_LP_INT,
    HOTDIE_INT,
    PSW_FALL_INT,
    CLASSD_OCP_INT,
    VB_LO_INT,
    PLUG_IN_INT,
    PLUG_OUT_INT,
    CHRG_TERM_INT,
    CHRG_TIME_INT,
    CHRG_CT_INT,
    USB_OV_INT,
    VB_OV_INT,
    CHRG_BAT_HI_INT,
};

/* PMIC ON SOURCE mapping table */
static pmic_on_src_t rk812_on_src_map[] =
{
    PMIC_ON_PSW_RISE,
    PMIC_RESTART_DEV_RST,
    PMIC_RESTART_RESETB,
    PMIC_ON_PLUG_IN,
    PMIC_ON_SRC_UNKNOWN,
    PMIC_ON_SRC_UNKNOWN,
    PMIC_ON_SRC_UNKNOWN,
    PMIC_ON_KEY,
};

static const struct pmic_reg_data rk812_off_reg[] =
{
    PMIC_REG_DATA(RK812_SYS_CFG3, RK812_DEV_OFF_SHFT, RK812_DEV_OFF_MSK, 1),
};

static const struct pmic_reg_data rk812_on_reg[] =
{
    PMIC_REG_DATA(RK812_BUCK1_ON_VSEL_REG, PWM_MODE_SHFT, PWM_MODE_MSK, AUTO_PWM_MODE),
    PMIC_REG_DATA(RK812_GPIO_INT_CFG, RK812_INT_POL_SHFT, RK812_INT_POL_MSK, RK812_INT_POL_L),
};

static const struct pmic_reg_data rk812_slp_reg[] =
{
    PMIC_REG_DATA(RK812_BUCK1_ON_VSEL_REG, PWM_MODE_SHFT, PWM_MODE_MSK, AUTO_PWM_MODE),
    PMIC_REG_DATA(RK812_POWER_CFG, RK812_BUCK_LDO_BYPASS_SHFT, RK812_BUCK_LDO_BYPASS_MSK, 1),
};

static struct rk_pmic_desc pmic_desc =
{
    .pmic_int_pin = 28,
    .pmic_int_level = GPIO_LOW,
    .pmic_int_ioparam = 0,
    .pmic_sleep_pin = -1,
    .i2c_id = I2C_DEV2,
    .i2c_addr = RK812_I2C_ADDR,
    .int_st_reg = RK812_INT_STS_REG0,
    .int_reg_num = 2,
    .on_src_reg = RK812_ON_SOURCE_REG,
    .int_map = rk812_int_map,
    .int_num = HAL_ARRAY_SIZE(rk812_int_map),
    .on_src_map = rk812_on_src_map,
    .on_src_num = HAL_ARRAY_SIZE(rk812_on_src_map),
    PMIC_PWR_CTRL_REG_INIT(PMIC_PWR_OFF, rk812_off_reg),
    PMIC_PWR_CTRL_REG_INIT(PMIC_PWR_ON, rk812_on_reg),
    PMIC_PWR_CTRL_REG_INIT(PMIC_PWR_SLP, rk812_slp_reg),
};
#endif

COMMON API void System_Power_Init(void)
{
    ...

#ifdef CONFIG_DRIVER_PMIC
    pmic_desc_init(&pmic_desc);/* Register the filled struct rk_pmic_desc to PMIC driver */
#endif

    ...
}
```

### **1.3 Code and API**

- src/driver/pmic/drv_pmic.c
- include/driver/drv_pmic.h

```c
 /* Read PMIC register */
uint32 pmic_read(struct rk_pmic_desc *pmic_desc, uint16 reg);
 /* Write PMIC register */
rk_err_t pmic_write(struct rk_pmic_desc *pmic_desc, uint16 reg, uint8 data);
 /* Read specific bitfield of PMIC register */
int pmic_reg_field_read(const struct pmic_reg_field *field, unsigned int *val);
 /* Write specific bitfield of PMIC register */
int pmic_reg_field_write(const struct pmic_reg_field *field, unsigned int val);
/* Perform PMIC reset operation */
rk_err_t pmic_power_reset(void);
/* Perform PMIC off operation */
rk_err_t pmic_power_off(void);
/* Perform PMIC suspend operation */
rk_err_t pmic_power_suspend(void);
/* Perform PMIC resume operation */
rk_err_t pmic_power_resume(void);
/* Get PMIC ON SOURCE */
pmic_on_src_t pmic_get_on_source(void);
/* Bind PMIC interrupt handler */
int pmic_attach_irq(int irq, void (*hdr)(void *args), void *args);
/* Unbind PMIC interrupt handler */
int pmic_detach_irq(int irq);
/* Enable or disable specified PMIC interrupt */
int pmic_irq_enable(int irq, int enable);
/* Initialize PMIC desc */
void pmic_desc_init(struct rk_pmic_desc *desc);
/* Initialize PMIC */
int pmic_setup(void);
```

### **1.4 Usage Example**

PMIC APIs are called by specific modules. Taking power key as an example:

- src/driver/key/drv_pmic_key.c

```c
#include "driver/drv_pmic.h"

void pmic_key_setup(void)
{
    /* Bind PMIC interrupt handler */
    pmic_attach_irq(PKEY_FALL_INT, pmic_key_fall_hdl, NULL);
    pmic_attach_irq(PKEY_RISE_INT, pmic_key_rise_hdl, NULL);

    /* Enable PMIC interrupt */
    pmic_irq_enable(PKEY_FALL_INT, 1);
    pmic_irq_enable(PKEY_RISE_INT, 1);
}
```

## **2 Charger**

### **2.1 Overview**

The PMIC may integrate a charging control module for controlling battery charging voltage, current, time, etc.

### **2.2 Configuration**

Configuration in menuconfig:

Enable PMIC Charger driver (PMIC driver must be enabled first):

```c
    BSP Driver  --->
        [*] Enable PMIC
        [*]     Enable PMIC Charger
```

For a specific PMIC chip, fill in struct pmic_charger_desc to configure specific charging information, as shown below:

```c
struct pmic_charger_desc
{
    struct pmic_reg_field *reg_fields;
    uint32 max_chrg_current; /* Maximum charging current */
    uint32 max_chrg_voltage; /* Maximum charging voltage */

    uint32 max_input_current; /* Maximum input current */
    uint32 min_input_voltage; /* Maximum input voltage */
}
```

Taking RK812 as an example, configure as follows:

- src/bsp/RK2206/board/rk2206_evb/board.c

```c
#ifdef CONFIG_DRIVER_PMIC_CHARGER
static struct pmic_charger_desc pmic_charger =
{
    .max_chrg_current = 500, /* Set maximum charging current to 500mA */
    .max_chrg_voltage = 4200, /* Set maximum charging voltage to 4.2V */
};
#endif

COMMON API void System_Power_Init(void)
{
    ...

/* Register the configured struct pmic_charger_desc to the pmic_charge driver */
#ifdef CONFIG_DRIVER_PMIC_CHARGER
    pmic_charge_desc_init(&pmic_charger);
#endif

    ...
}
```

### **2.3 Code and API**

- src/driver/charger/drv_pmic_charge.c
- include/driver/drv_pmic_charge.h

```c
/* Read specific bitfield of PMIC CHARGER register */
int pmic_charge_field_read(struct pmic_charger_desc *desc, int id);
/* Write specific bitfield of PMIC CHARGER register */
int pmic_charge_field_write(struct pmic_charger_desc *desc, int id, uint8 val);
/* Get current charging progress */
charge_progress_t pmic_charge_get_charge_progress(void);
/* Initialize pmic_charger_desc */
void pmic_charge_desc_init(struct pmic_charger_desc *desc);
/* Initialize pmic charge */
void pmic_charge_setup(void);
```

Additionally, the following functions have weak attributes and must be implemented specifically for a particular PMIC:

```c
charge_progress_t pmic_charge_get_charge_progress(void);
void pmic_charge_desc_init(struct pmic_charger_desc *desc);
void pmic_charge_setup(void);
```

Taking RK812 as an example:

```c
BSP Driver  --->
    [*] Enable PMIC
    [*]     Enable PMIC Charger
    [*]         Enable RK812 Charger
```

- src/driver/charger/drv_rk812_charge.c

```c
#include "driver/drv_pmic.h"
#include "driver/drv_pmic_charger.h"

charge_progress_t pmic_charge_get_charge_progress(void)
{
    return charger.charge_prg;
}

void pmic_charge_desc_init(struct pmic_charger_desc *desc)
{
    RK_ASSERT(desc);

    charger_desc = desc;
    charger_desc->reg_fields = rk812_charge_reg_fields;
}

void pmic_charge_setup(void)
{
    RK_ASSERT(charger_desc);
    charger.charge_prg = CHARGE_STATUS_NOT_CHARGING;

    pmic_charge_pre_init();
    pmic_charge_irqs_init();

    pmic_charge_get_charge_status();
    rk_printf("max_chrg_current: %d\n"
              "max_chrg_voltage: %d\n",
              charger_desc->max_chrg_current,
              charger_desc->max_chrg_voltage);
}
```

## **3 Powerkey**

### **3.1 Overview**

The PMIC generally integrates a power key control module for detecting and controlling various power key states, such as press, release, short press, long press, etc. If the hardware connects the power key to the PMIC_INT pin, the PMIC can be used to detect and control the power key.

### **3.2 Configuration**

Configuration in menuconfig:

Enable PMIC_Key driver (PMIC driver must be enabled first):

```c
    BSP Driver  --->
        [*] Enable PMIC
        [*]     Enable PMIC Key
```

After the above configuration, the system can respond to the power key.
