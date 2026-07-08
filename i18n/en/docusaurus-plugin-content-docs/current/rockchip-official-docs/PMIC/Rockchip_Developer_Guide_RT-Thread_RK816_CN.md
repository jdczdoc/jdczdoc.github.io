# RK816 Development Guide

ID: RK-KF-YF-074

Release Version: V1.3.0

Date: 2020-07-22

Security Level: □Top Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2020 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

------

**Preface**

**Overview**

This document mainly guides readers on how to develop RK816 on RT-THREAD.

**Product Versions**

| **Chip Name** | **RT-Thread Version** |
| ------------- | --------------------- |
| RK816 Chip    |                       |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date**   | **Description**                  |
| ----------- | ---------- | :--------- | :------------------------------- |
| V1.0.0      | Chen Jianhong | 2020-01-06 | Initial version                  |
| V1.1.0      | Chen Jianhong | 2020-05-26 | Added battery temperature function |
| V1.2.0      | Chen Jianhong | 2020-06-29 | Improved Charger and NTC sections |
| V1.3.0      | Chen Jianhong | 2020-07-22 | Added RTC alarm function         |

**Table of Contents**

[TOC]

RK816 is a high-performance PMIC. RK816 integrates 4 high-current DCDCs, 1 boost BOOST, 6 LDOs, 1 OTG output, 1 RTC, adjustable power-on sequencing, and also integrates switch charging, intelligent power path management, coulomb counting, and other functions.

From the user's perspective, the RK816 functions can be summarized as follows:

- regulator: Controls DCDC, LDO power
- rtc: Provides clock timing, timer, and other functions
- gpio: Two push-pull output pins (out1 and out2, output only), can be used as regular gpio
- pwrkey: Power button detection
- charger: Controls battery charging current, battery charging voltage, system input current
- fuel gauge: Battery power statistics
- NTC sensor: Battery temperature detection

## PMIC

### Driver Files

```
./bsp/rockchip/common/drivers/drv_pmic.h
./bsp/rockchip/common/drivers/drv_pmic.c
```

### Configuration Enable

```
CONFIG_RT_USING_PMIC
CONFIG_RT_USING_PMIC_RK816

HAL_PWR_MODULE_ENABLED
HAL_PWR_I2C8_MODULE_ENABLED
```

### Board-Level Definition

Users need to define the PMIC I2C hardware information in board.c. For example:

```c
struct pwr_i2c_desc pmic_pwr_i2c_desc =
{
    .name = "i2c0",
    .addr = RK816_I2C_ADDR,
};
```

### User Interface

```c
rt_uint32_t pmic_get_voltage(struct pwr_i2cbus_desc *desc);
rt_err_t pmic_set_voltage(struct pwr_i2cbus_desc *desc,
                          rt_uint32_t voltUv);
rt_uint32_t pmic_get_suspend_voltage(struct pwr_i2cbus_desc *desc);
rt_err_t pmic_set_suspend_voltage(struct pwr_i2cbus_desc *desc,
                                  rt_uint32_t voltUv);
rt_err_t pmic_set_enable(struct pwr_i2cbus_desc *desc, rt_uint32_t enable);
rt_err_t pmic_set_suspend_enable(struct pwr_i2cbus_desc *desc, rt_uint32_t enable);
rt_uint32_t pmic_is_enabled(struct pwr_i2cbus_desc *desc);
int pmic_desc_init(struct pwr_i2cbus_desc *descs, uint32_t cnt);
void pmic_desc_deinit(void);
rt_err_t pmic_check_desc_by_pwrId(struct pwr_i2cbus_desc *pdesc, ePWR_ID pwrId);

// System power off
void pmic_power_off(void);
// Register access
rt_uint32_t pmic_read(struct rt_i2c_bus_device *pmic_i2c_bus,
                      rt_uint8_t addr, rt_uint16_t reg);
rt_err_t pmic_write(struct rt_i2c_bus_device *pmic_i2c_bus,
                    rt_uint8_t addr, rt_uint16_t reg, rt_uint8_t data);
rt_err_t pmic_update_bits(struct rt_i2c_bus_device *pmic_i2c_bus,
                          rt_uint8_t addr, rt_uint16_t reg,
                          rt_uint8_t mask, rt_uint8_t data);
// Submodule gets PMIC board-level definition
struct pwr_i2c_desc *pmic_get_i2c_desc(void);
```

## Regulator

### Driver Files

```
./bsp/rockchip/common/drivers/drv_regulator.c
./bsp/rockchip/common/drivers/drv_regulator.h
```

### Configuration Enable

No additional configuration items needed; just enable the PMIC configuration.

### Definition Interface

Please use dedicated macros when defining:

```c
// Define RK816 regulator
RK816_BUCK1_2(ID, PWR_ID) // For buck1 and buck2;
RK816_BUCK4(ID, PWR_ID)   // For buck4;
RK816_LDO1_4(ID, PWR_ID)  // For ldo1, ldo2, ldo3, ldo4;
RK816_LDO5_6(ID, PWR_ID)  // For ldo5 and ldo6
// Note: buck3 gets a fixed voltage through an external voltage divider circuit, so no interface declaration is made. Generally, peripherals do not need to reference buck3.

// Define regulator init state
REGULATOR_INIT(NAME, ID, VOLTUV, EN, SSPDVOL, SSPDEN)
```

Meanings are as follows:

```c
// @ID:      Enum type, indicates the current regulator ID;
// @PWR_ID:  Index ID, peripherals index the corresponding regulator through this unique ID!
#define RK816_BUCK1_2(ID, PWR_ID)

// @NAME:    Name
// @ID:      Unique pwr_id of the regulator
// @VOLTUV:  Initialization voltage
// @EN:      Enable or not
// @SSPDVOL: Suspend voltage
// @SSPDEN:  Suspend enable or not
REGULATOR_INIT(NAME, ID, VOLTUV, EN, SSPDVOL, SSPDEN)
```

### Board-Level Definition

Users need to define regulators[] in board.c. For example:

```c
static struct regulator_desc regulators[] =
{
    ......

    /* BUCK4 */
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK816_BUCK4(RK816_ID_DCDC4, PWR_ID_VCCIO_3V3),
        .desc.i2c_desc.i2c = &pmic_pwr_i2c_desc, // Reference PMIC board-level definition
    },
    /* LDO2 */
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK816_LDO1_4(RK816_ID_LDO2, PWR_ID_VCCIO_1V8),
        .desc.i2c_desc.i2c = &pmic_pwr_i2c_desc,
    },
    /* LDO5 */
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK816_LDO5_6(RK816_ID_LDO5, PWR_ID_VCC_AUDIO),
        .desc.i2c_desc.i2c = &pmic_pwr_i2c_desc,
    },
    /* LDO6 */
    {
        .flag = REGULATOR_FLG_I2C8 | REGULATOR_FLG_LOCK,
        .desc.i2c_desc = RK816_LDO5_6(RK816_ID_LDO6, PWR_ID_VCC_MIPI),
        .desc.i2c_desc.i2c = &pmic_pwr_i2c_desc,
    },

    ......
};
```

Users need to define regulator_inits[] in board.c. For example:

```c
const struct regulator_init regulator_inits[] =
{
    REGULATOR_INIT("dcdc1", PWR_ID_VCCIO_1V8,    1250000, 0, 1400000, 1),
    REGULATOR_INIT("dcdc2", PWR_ID_BUCK_1V8,     1250000, 0, 1400000, 1),
    REGULATOR_INIT("ldo1",  PWR_ID_VCCIO_1V8_PMU,1200000, 0, 1400000, 1),
    REGULATOR_INIT("ldo3",  PWR_ID_MEMORY,       1200000, 0, 1400000, 1),
    REGULATOR_INIT("ldo4",  PWR_ID_TOP,          1200000, 0, 1400000, 1),
    REGULATOR_INIT("ldo5",  PWR_ID_VDD_1V1,      1200000, 0, 1400000, 1),
    REGULATOR_INIT("ldo6",  PWR_ID_VCCIO_3V3,    1200000, 0, 1400000, 1),
}
```

### User Interface

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

## RTC/Alarm

The RTC driver implements the following functions:

- Real-time time configuration and retrieval

  Time range: year, month, day, hour, minute, second.

- Alarm time configuration and retrieval

  Time range: year, month, day, hour, minute, second, but setting an expired alarm is not supported. Trigger method: single trigger only.

### Driver Files

```c
./bsp/rockchip/common/drivers/pmic/rk816_rtc.c

// User-layer interface
./components/drivers/rtc/rtc.c
./components/drivers/include/drivers/rtc.h
./components/drivers/rtc/alarm.c
./components/drivers/include/drivers/alarm.h
```

### Configuration Enable

```
CONFIG_RT_USING_PMIC
CONFIG_RT_USING_RTC
CONFIG_RT_USING_ALARM
CONFIG_RT_USING_ALARM_CMD
CONFIG_RT_USING_RTC_RK816
```

### User Interface

Real-time time and date setting

```c
rt_err_t set_time(rt_uint32_t hour, rt_uint32_t minute, rt_uint32_t second);
rt_err_t set_date(rt_uint32_t year, rt_uint32_t month, rt_uint32_t day);
```

Real-time time and date retrieval: RTC time is generally obtained through the time management framework interface. For example:

```c
struct tm* localtime(const time_t* t)
```

Alarm time operations

```c
rt_alarm_t rt_alarm_create(rt_alarm_callback_t callback, struct rt_alarm_setup *setup);
rt_err_t rt_alarm_control(rt_alarm_t alarm, int cmd, void *arg);
void rt_alarm_update(rt_device_t dev, rt_uint32_t event);
rt_err_t rt_alarm_delete(rt_alarm_t alarm);
rt_err_t rt_alarm_start(rt_alarm_t alarm);
rt_err_t rt_alarm_stop(rt_alarm_t alarm);
```

Users can directly refer to the RT-Thread official API manual:

alarm: https://www.rt-thread.org/document/api/group__alarm.html

rtc: https://www.rt-thread.org/document/api/group__rtc.html

### Test Commands

The `date` command is used to read and write rtc time. Implementation code:

```
./components/drivers/rtc/rtc.c
```

Example:

```c
msh />date 2018 04 01 12 25 07  // Set time: 2018-04-01 12:15:07
msh />date                      // Get current time
Sun Apr  1 12:25:07 2018
```

The `alarm` command is used to read and write alarm time. Implementation code:

```c
./components/drivers/rtc/alarm.c
```

Example:

```c
// Alarm list (currently empty)
msh />alarm
No alarm
// Before setting an alarm, confirm the current time to avoid setting an expired alarm (not supported by the framework)
msh />date
Sun Apr  1 12:25:07 2018
// Set 3 alarms
msh />alarm 2018 04 01 12 30 30
msh />alarm 2018 04 01 12 30 40
msh />alarm 2018 04 01 12 30 50
// View alarm list, where "*" indicates the alarm that is about to trigger or the last one triggered.
// If a triggered alarm is not deleted by calling rt_alarm_delete(), it will remain in the alarm list.
msh />alarm
Alarm list:
    Sun Apr  1 12:30:50 2018
    Sun Apr  1 12:30:40 2018
  * Sun Apr  1 12:30:30 2018

// After setting the alarms, wait for them to trigger. When an alarm triggers, the following will be printed (only for alarm command):
Alarm is ringing: Sun Apr  1 12:30:30 2018
Alarm is ringing: Sun Apr  1 12:30:40 2018
Alarm is ringing: Sun Apr  1 12:30:50 2018
// Check the alarm list again, "*" points to the last triggered alarm.
msh />alarm
Alarm list:
  * Sun Apr  1 12:30:50 2018
    Sun Apr  1 12:30:40 2018
    Sun Apr  1 12:30:30 2018
```

## Charger

### Driver Files

```c
bsp/rockchip/common/drivers/pmic/rk816_charger.c
bsp/rockchip/common/drivers/pmic/rk816_charger.h

// User-layer interface
components/drivers/pm/charger.c
components/drivers/include/drivers/charger.h
```

Users can only access the charger device via `rt_device_control()`:

```c
rt_err_t rt_device_control(rt_device_t dev, int cmd, void *arg)

// Definitions of cmd in rt_device_control(), "charging parameters" refer to: charging voltage, current, input voltage, etc.
#define RT_DEVICE_CTRL_CHAGER_LIMIT_GET     (1) // Get the minimum and maximum values of each charging parameter supported by the charger
#define RT_DEVICE_CTRL_CHAGER_STATUS_GET    (2) // Get the current charging parameters
#define RT_DEVICE_CTRL_CHAGER_BATVOL_SET    (3) // Set the battery charging voltage, i.e., full charge voltage, unit: mV
#define RT_DEVICE_CTRL_CHAGER_BATCUR_SET    (4) // Set the battery charging current, unit: mA
#define RT_DEVICE_CTRL_CHAGER_FNSCUR_SET    (5) // Set the battery charging termination current, unit: mA
#define RT_DEVICE_CTRL_CHAGER_SRCCUR_SET    (6) // Set the input current from the adapter, unit: mA
```

### Configuration Enable

```
CONFIG_RT_USING_CHARGER
CONFIG_RT_USING_CHARGER_RK816
```

### Basic Concepts

- Maximum Charging Current

  RK816 has intelligent power path management. Power from the adapter is prioritized for the system, and the remainder is used to charge the battery. The maximum remaining current allowed to charge the battery configured in software is called the maximum charging current.

  ioctl access method: `RT_DEVICE_CTRL_CHAGER_BATCUR_SET`.

- Maximum Input Current

  The maximum current configured in software that can be drawn from the adapter is called the "maximum input current". For example, for a 5V/2A adapter, we generally configure the maximum input current to 2A in software (it can also be set to 1.8A...).

  ioctl access method: `RT_DEVICE_CTRL_CHAGER_SRCCUR_SET`.

- Maximum Charging Voltage

  The voltage at which the battery is fully charged.

  ioctl access method: `RT_DEVICE_CTRL_CHAGER_BATVOL_SET`.

- Charge Termination Current

  The minimum current threshold at which the PMIC stops charging the battery.

  ioctl access method: `RT_DEVICE_CTRL_CHAGER_FNSCUR_SET`.

- Sense Resistor

  The sense resistor between the positive and negative terminals of the battery on the board. The PMIC completes voltage and current acquisition through the sense resistor. By changing the resistance of the sense resistor, users can expand (amplify or reduce) the charging current and charging termination current levels. In hardware design, a 20mR sense resistor is typically used. This parameter needs to be specified in the board-level configuration (see subsequent sections).

### Hardware Levels

Depending on the resistance of the sense resistor, users can expand (amplify or reduce) the charging current and charging termination current levels, but the maximum charging voltage and maximum input current are not affected. The following lists the hardware levels based on the register definition order:

- Maximum Charging Voltage Levels (7 levels):

```c
[4050, 4100, 4150, 4200, 4250, 4300, 4350]
```

- Maximum Input Current Levels (7 levels):

```c
[450, 80, 850, 1000, 1250, 1500, 1750, 2000]  // Note: the second item is 80, not 800
```

- Maximum Charging Current Levels (8 levels, different values for different sense resistors):

```c
10mR:     [2000, 2400, 2800, 3200, 3600, 4000, 4500, 4800]
20mR:     [1000, 1200, 1400, 1600, 1800, 2000, 2250, 2400]
40mR:     [500,   600,  700,  800,  900, 1000, 1125, 1200]
100mR:    [200,   240,  280,  320,  360,  400,  450,  480]
```

- Charge Termination Current Levels (4 levels, different values for different sense resistors):

```c
10mR:     [300, 400, 600, 800]
20mR:     [150, 200, 300, 400]
40mR:     [75,  100, 150, 200]
100mR:    [30,   40,  60,  80]
```

Precautions:

- The parameter level values corresponding to different sense resistors above are fixed and cannot be modified by the user.
- Users can only access the device via `rt_device_control()` and can only pass the specific level values listed above. For example, with a 100mR sense resistor, only 8 level values can be passed for maximum charging current: 200, 240, 280, 320, 360, 400, 450, 480. Under 40mR, the 8 level values are: 500, 600, 700, 800, 900, 1000, 1125, 1200.
- Users do not need to pass the sense resistor value through the `rt_device_control()` interface. This value needs to be defined in the board-level configuration (see subsequent sections), and the rk816_charger.c driver will automatically obtain this configuration during initialization.

### Board-Level Definition

Users only need to define the resistance of the sense resistor (unit: milliohm) in board.c according to the actual hardware design of the board. For example:

```c
struct rk816_charger_platform_data rk816_charger_pdata =
{
    .sample_res = 100, // Currently 100mR
};
```

### User Interface

As mentioned in the above section, users need to access the charger device via the `rt_device_control()` interface. Below are more detailed usage instructions:

```c
rt_err_t rt_device_control(rt_device_t dev, int cmd, void *arg)

// Definitions of cmd in rt_device_control(), "charging parameters" refer to: charging voltage, current, input voltage, etc.
#define RT_DEVICE_CTRL_CHAGER_LIMIT_GET     (1) // Get the minimum and maximum values of each charging parameter supported by the charger
#define RT_DEVICE_CTRL_CHAGER_STATUS_GET    (2) // Get the current charging parameters
#define RT_DEVICE_CTRL_CHAGER_BATVOL_SET    (3) // Set the battery charging voltage, i.e., full charge voltage, unit: mV
#define RT_DEVICE_CTRL_CHAGER_BATCUR_SET    (4) // Set the battery charging current, unit: mA
#define RT_DEVICE_CTRL_CHAGER_FNSCUR_SET    (5) // Set the battery charging termination current, unit: mA
#define RT_DEVICE_CTRL_CHAGER_SRCCUR_SET    (6) // Set the input current from the adapter, unit: mA
```

- RT_DEVICE_CTRL_CHAGER_LIMIT_GET:

  Usage: rt_device_control(device, RT_DEVICE_CTRL_CHAGER_LIMIT_GET, &limit);

  limit is a variable of type `struct rt_charger_limit`, which holds the max and min levels of charging voltage, charging current, input current, and termination current read from the charger.

- RT_DEVICE_CTRL_CHAGER_STATUS_GET:

  Usage: rt_device_control(device, RT_DEVICE_CTRL_CHAGER_STATUS_GET, &status);

  status is a variable of type `struct rt_charger_status`, which holds the current charging voltage, charging current, input current, and termination current values read from the charger.

- RT_DEVICE_CTRL_CHAGER_BATVOL_SET:

  Usage: rt_device_control(device, RT_DEVICE_CTRL_CHAGER_BATVOL_SET, &voltage);

  voltage is a variable of type rt_int32_t, used to configure the charging voltage.

- RT_DEVICE_CTRL_CHAGER_BATCUR_SET:

- RT_DEVICE_CTRL_CHAGER_FNSCUR_SET:

- RT_DEVICE_CTRL_CHAGER_SRCCUR_SET:

  Similar to the usage of RT_DEVICE_CTRL_CHAGER_BATVOL_SET.

> It is recommended to read the implementation of the rk816_charger_control() function in bsp/rockchip/common/drivers/pmic/rk816_charger.c.

**Precautions**

The configured level value should strictly follow the level table given in the previous section. Otherwise:

- If the configured level value exceeds the min and max levels, it returns failure.
- If the configured level value does not exceed the min and max levels but does not match exactly, a lower level will be used for configuration.

**Usage Example**

```c
struct rt_charger_status status;
struct rt_charger_limit limit;
rt_device_t device;
rt_uint32_t bat_volt = 4350;
rt_uint32_t bat_cur = 240;

device = rt_device_find("charger");
if (device == RT_NULL)
{
	return -RT_ERROR;
}

// This is for example reference only
ret = rt_device_control(device, RT_DEVICE_CTRL_CHAGER_LIMIT_GET, &limit);
...
ret = rt_device_control(device, RT_DEVICE_CTRL_CHAGER_STATUS_GET, &status);
...
ret = rt_device_control(device, RT_DEVICE_CTRL_CHAGER_BATVOL_SET, &bat_volt);
...
ret = rt_device_control(device, RT_DEVICE_CTRL_CHAGER_BATCUR_SET, &bat_cur);
...
```

## Fuel Gauge

### Driver Files

```c
bsp/rockchip/common/drivers/pmic/rk816_fg.c
bsp/rockchip/common/drivers/pmic/rk816_fg.h

// User-layer interface
components/drivers/pm/fuel_gauge.c
components/drivers/include/drivers/fuel_gauge.h
```

### Configuration Enable

```
RT_USING_PM_FG
RT_USING_FG_RK816
```

### Board-Level Definition

Users need to define the fuel gauge configuration information in board.c. For example:

```c
struct rk816_fg_platform_data rk816_fg_pdata =
{
    .ocv_table = {
        3400, 3650, 3693, 3707, 3731, 3749, 3760,
        3770, 3782, 3796, 3812, 3829, 3852, 3882,
        3915, 3951, 3981, 4047, 4086, 4132, 4182,
    },
    .design_capacity = 4000,
    .design_qmax = 4500,
    .bat_res = 85,
    .sample_res = 10,
    .power_off_thresd = 3400,
    .zero_algorithm_vol = 3950,
    .virtual_power = 0,
    .max_soc_offset = 80,
    .monitor_sec = 5,
};
```

Parameter Description:

- `ocv table`
  Each battery has its own battery characteristic curve. According to the principle that a specific OCV voltage corresponds to a specific power level, we divide the 0%~100% power into 21 points with a step of 5% power, thus obtaining a set/table of "voltage --> power". This table is used for calibrating the coulomb counter when the battery is first connected after power-on, after long-term shutdown, or after long-term sleep. This data table can be provided by the battery manufacturer or measured by the RK Shenzhen branch. Please consult the relevant engineers at the Shenzhen branch for details. For example:

  ```c
  ocv_table = <3400 3599 3671 3701 3728 3746 3762 ...... 4088 4132 4183>;
  // The correspondence in the table is: 3400mv: 0%, 3599mv: 5%, 3671mv: 10%, ...... 4183mv: 100%
  ```

- `design_capacity`
  Actual battery capacity: the actual usable capacity determined after actual measurement. For example, if the nominal capacity is 4000mah but the actual measured capacity is 3850mah, this value should be filled as 3850.

- `design_qmax`
  Maximum capacity value, mainly used as one of the error correction conditions in software processing. Currently, please fill in 1.1 times the nominal capacity: i.e., nominal capacity * 1.1.

- `bat_res`
  Battery internal resistance. It is mainly used in the discharge algorithm and is very important! This value is obtained together with the ocv_table measurement, so please pay attention to the measurement of this parameter and do not omit it.

- `power_off_thresd` **Please read and understand carefully**

  Expected system shutdown voltage, unit: mV. Special note: This value refers to the **instantaneous voltage of VSYS**, not the voltage at the Vbat terminal (but the fuel gauge collects the voltage at the Vbat terminal)! Principle explanation: The voltage at the Vbat terminal passes through a mos tube with a resistance of about 50 milliohms (in addition to the impedance caused by PCB traces) before being converted to VSYS for the system. Therefore, using VSYS as the shutdown point basis is correct. From this, we can understand: at the same Vbat terminal voltage, the larger the current load, the lower the VSYS terminal voltage; conversely, under the same VSYS, the larger the current load, the higher the corresponding Vbat voltage.

  It is not recommended on RK platforms for the VSYS terminal voltage to be lower than 3.4V, as this can easily cause unstable power supply for VCC_IO (3.3V) and other DCDC/LDOs.

- `zero_algorithm_vol`

  The voltage value for entering the voltage + coulomb counter discharge mode, unit: mV. Below this value, the software discharge algorithm combining voltage and coulomb counter is entered. Recommendation: set to 3850mv for 4.2V batteries and 3950mv for 4.3V and above batteries.

- `sample_res`

  The sense resistor size at the battery end, unit: milliohm. Keep it consistent with the charger board-level definition.

- `virtual_power`

  Test mode, reserved for future expansion. Currently, fill in 0 by default.

- `max_soc_offset`

  The maximum power error allowed during boot calibration. If the device has been off for at least 30 minutes, an OCV table power query will be performed at boot, and the power before shutdown is compared. If the deviation exceeds max_soc_offset, forced calibration is performed, and the power is set to the true value corresponding to the OCV table. For example, if the current displayed power is 20%, but the actual power calculated from the OCV voltage is 80%, the displayed power will directly show 80%. This situation usually occurs after a crash. This value depends on the customer's acceptable range and can be set by the customer. It is not recommended to set this value below 60.

- `monitor_sec`

  Polling time (seconds). The fuel gauge driver needs constant polling to work properly. Currently, 5~10s is recommended, with 5s being optimal.

### Self-Initialization

At boot, the fuel gauge driver completes self-initialization through `INIT_DEVICE_EXPORT()` and creates a fuel gauge thread that runs the power calculation algorithm every `monitor_sec` seconds to update the internal state. Therefore, users only need to properly configure the board-level configuration and enable the driver.

### User Interface

```c
rt_err_t rt_device_control(rt_device_t dev, int cmd, void *arg)

// Definitions of cmd in rt_device_control():
#define RT_DEVICE_CTRL_FG_GET       (1) /* Get fuel gauge status */
```

Users can obtain the current battery level, battery voltage, battery capacity, and other statuses through this interface.

**Example:**

```c
struct rt_fg_status status;
rt_device_t device;
rt_uint32_t volt = 4350;

device = rt_device_find("fuel_gauge");
if (device == RT_NULL)
{
	return -RT_ERROR;
}

// This is for example reference only (return value check omitted)
rt_device_control(device, RT_DEVICE_CTRL_FG_GET, &status);
```

### Debug Switch

If users need to stress test the fuel gauge function or encounter abnormal power issues during use, they need to enable the fuel gauge debug switch to capture debug information. After enabling the debug switch, the fuel gauge driver will print debug information every `monitor_sec` seconds.

There are currently two ways to enable debug information:

- Static Compilation

  Enable the debug switch in rk816_fg.c and recompile the firmware:

  ```c
  static int dbg_enable = 0;  // 1: enable debug information  0: disable
  ```

- Dynamic Configuration

  Execute in the shell command:

  ```c
  fg_rk816 1 // 1: enable debug information  0: disable
  ```

## NTC Sensor

### Driver Files

```c
bsp/rockchip/common/drivers/pmic/rk816_sensor.c
bsp/rockchip/common/drivers/pmic/rk816_sensor.h

// User-layer interface
components/drivers/sensors/sensor.c
components/drivers/include/drivers/sensor.h
```

### Configuration Enable

```c
CONFIG_RT_USING_SENSOR
CONFIG_RT_USING_SENSOR_RK816
```

### Basic Concepts

Battery temperature detection principle: The battery has different internal resistances at different temperatures. After the user obtains the battery resistance through some method, the corresponding battery temperature can be obtained based on the "temperature-resistance" table in the battery specification. Generally, temperature and resistance are inversely proportional.

RK816 provides a module similar to a constant current source internally, which outputs a fixed current pulse to the battery through the TS pin, creating a certain voltage drop at the battery terminal. RK816 collects the voltage drop across the internal resistance of the battery NTC pin through the TS pin, calculates the current battery resistance, and then obtains the current battery temperature based on the "temperature-resistance" table.

### Board-Level Definition

Users need to define the battery NTC configuration information in board.c. For example:

```c
// 1. Any number of values can be defined in the array; values are in ohms
// 2. The maximum NTC value supported by rk816 is 110000, please do not exceed
static const rt_uint32_t rk816_ntc_table[] = {
    42450, 33930, 27280, 22070, 17960, 14700, 12090, /* -10 ~ 20'C */
    10000, 8310,  6490,  5830,  4910,  4160,  3540,  /* 25  ~ 55'C */
};

struct rk816_sensor_platform_data rk816_sensor_pdata =
{
    .ntc_table = &rk816_ntc_table[0],
    .ntc_num = 14,            // Equivalent to: ARRAY_SIZE(rk816_ntc_table)
    .ntc_degree_min = -10,    // Temperature corresponding to rk816_ntc_table[0], i.e., minimum temperature.
    .ntc_degree_step = 5,     // Temperature step, i.e., the step between the above NTC values
};
```

The above `rk816_ntc_table` data needs to be obtained from the battery specification, which usually contains a table of resistance temperature and internal resistance data.

### User Interface

```c
rt_size_t rt_device_read (rt_device_t dev, rt_off_t pos, void *buffer, rt_size_t size);
```

**Example:**

```c
rt_device_t dev = RT_NULL;
struct rt_sensor_data sensor_data;

device = rt_device_find("temp_rk816");
if (device == RT_NULL)
{
	return -RT_ERROR;
}

// This is for example reference only (return value check omitted)
// 1. Temperature will be stored in: sensor_data.data.temp
// 2. Temperature unit: degrees Celsius * 10.
res = rt_device_read(dev, 0, &sensor_data, 1);
...
```

### Test Commands

The framework provides cmd implementation:

```c
./components/drivers/sensors/sensor_cmd.c
```

Supported commands:

```c
msh />sensor

sensor  [OPTION] [PARAM]
         probe <dev_name>      Probe sensor by given name
         info                  Get sensor info
         sr <var>              Set range to var
         sm <var>              Set work mode to var
         sp <var>              Set power mode to var
         sodr <var>            Set output date rate to var
         read [num]            Read [num] times sensor
                                num default 5
```

Commands supported by RK816:

```c
sensor probe temp_rk816  // Must execute this command first to complete the driver probe, then other commands can be executed
sensor info              // Sensor information (not very useful)
sensor read              // Read temperature
```

## Other Documents

《Rockchip_Developer_Guide_RT-Thread_Power_CN.md》
