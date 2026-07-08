# **RK805 Developer Guide**

Release Version: 1.1

Author Email: chenjh@rock-chips.com

Date: 2019.11

Security Level: Public

---

**Preface**

**Overview**

This document mainly introduces the various sub-modules of the RK805, including related concepts, functions, dts configuration, and analysis of common issues.

**Product Versions**

| **Chip Name** | **Kernel Version**  |
| ------------ | ----------------- |
| RK805        | 3.10, 4.4, 4.19 |

**Intended Audience**

This document (guide) is mainly suitable for the following engineers:

Field Application Engineer

Software Development Engineer

**Revision History**

| **Date**   | **Version** | **Author** | **Revision Description** |
| ---------- | --------- | --------- | ----------------- |
| 2017.05.28 | V1.0     | Chen Jianhong | Initial version |
| 2019-11-11 | V1.1     | Chen Jianhong | Added 4.19 kernel support |

---
[TOC]

---

## Basics

### Overview

The RK805 is a high-performance PMIC that integrates 4 high-current DCDCs, 3 LDOs, 1 RTC, and adjustable power-on sequencing.

The power supplies in the system are generally divided into two types: DCDC and LDO. The overall characteristics of the two types are as follows (search for detailed information yourself):

1. DCDC: High efficiency when the input-output voltage difference is large, but has relatively large ripple and higher cost. Therefore, it is used for large voltage differences and high current loads. Generally has two operating modes. PWM mode: good ripple transient response, low efficiency; PFM mode: high efficiency, but poor load capability.
2. LDO: Low efficiency when the input-output voltage difference is large, low cost. To improve LDO conversion efficiency, system optimization can be performed, e.g., if the LDO output voltage is 1.1V, its input voltage can come from the VCCIO_3.3V DCDC output. Therefore, if the circuit allows, try to connect LDOs to DCDC output paths, but pay attention to power-on sequencing.

### Functions

From the user's perspective, the RK805 functions can be summarized into 4 parts:

1. Regulator function: controls the power state of each DCDC and LDO;
2. RTC function: provides clock timing, alarm, and other functions;
3. GPIO function: out1 and out2 are two push-pull output pins (output only), can be used as regular GPIOs;
4. PWRKEY function: detects power button press/release, can save one GPIO for the AP.

### Chip Pin Functions

![RK805-pins-list](Rockchip_RK805_Developer_Guide/RK805_pins_list.png)

In the following description, the SLEEP and INT pins require special attention:

![RK805-pins-function-1](Rockchip_RK805_Developer_Guide/RK805_pins_function_1.png)

![RK805-pins-function-2](Rockchip_RK805_Developer_Guide/RK805_pins_function_2.png)

### Important Concepts

- I2C Address

     7-bit slave address: 0x18

- PMIC has 3 operating modes

     1. PMIC normal mode

     The PMIC is in normal mode during normal system operation. At this time, pmic_sleep is low.

     2. PMIC sleep mode

     When the system enters sleep, standby power consumption needs to be as low as possible. The PMIC switches to sleep mode to reduce its own power consumption. Generally, the output voltage of certain paths is reduced, or the output is directly turned off. This can be configured according to actual product requirements. During standby, the AP configures pmic_sleep to sleep mode via I2C commands, then pulls pmic_sleep high to put the PMIC into sleep state; when the SoC wakes up, pmic_sleep returns to low and the PMIC exits sleep mode.

     3. PMIC shutdown mode

     When the system enters the shutdown process, the PMIC needs to complete the power-down operation of the entire system. The AP configures pmic_sleep to shutdown mode via I2C commands, then pulls pmic_sleep high to put the PMIC into shutdown state.

- pmic_sleep pin

     Normally low, the PMIC is in normal mode. When the pin is pulled high, it switches to sleep or shutdown mode.

- pmic_int pin

     Normally high, goes low when an interrupt is generated. If the interrupt is not handled, it stays low.

- out1/out2 pins

     These two pins can be used as regular GPIOs (push-pull output), but only in GPIO output mode.

- pmic_pwron pin

     For the pwrkey function, the power button must be connected to this pin in hardware. The driver determines press/release through this pin.

- DCDC operating modes

     DCDC has PWM (also called force PWM) and PFM modes. However, the PMIC has a mode that dynamically switches between PWM and PFM, which is commonly referred to as AUTO mode. The PMIC supports PWM and AUTO PWM/PFM modes. AUTO mode has high efficiency but poor ripple transient response. For system stability, it is set to PWM mode during operation and switched to AUTO PWM/PFM during sleep.

- DCDC3 Voltage Adjustment

     The DCDC3 power path is special. Its voltage cannot be modified through registers; it can only be adjusted through an external voltage divider resistor circuit. Therefore, if the voltage needs to be modified, change the external hardware. In Rockchip solutions, it is generally used as VCC_DDR.

- DCDC and LDO Operating Voltage Range

1. DCDC voltage range is non-continuous:

     | Voltage Range (V) | Step (mV) | Specific Level Values (V) |
     | -------------- | ------- | -------------------------------- |
     | 0.7125 ~ 1.45 | 12.5    | 0.7125, 0.725, 0.7375, ..., 1.45 |
     | 1.8 ~ 2.2     | 200     | 1.8, 2.0, 2.2                     |
     | 2.3           | None    | 2.3                              |

2. LDO voltage is continuous:

     | Voltage Range (V) | Step (mV) | Specific Level Values (V) |
     | ---------- | ------- | -------------------------------- |
     | 0.8 ~ 3.4 | 100     | 0.8, 0.9, 1.0, 1.1, 1.2, ... 3.4 |

### Power-On Conditions and Timing

1. Power-On Conditions

    PMIC power-on can be triggered by any of the following conditions:

- EN signal transitions from low to high
- EN signal is high and RTC alarm interrupt triggers
- EN signal is high and PWRON key is pressed

2. Power-On Timing

    Each SOC platform may have different power-on timing requirements for each power rail. Currently, the power-on timing includes the following cases. Refer to the latest datasheet for details:

![RK805-power-start-seq](Rockchip_RK805_Developer_Guide/RK805_power_start_seq.png)

## Configuration

### Driver and menuconfig

**3.10 Kernel Configuration**

RK805 driver files (reuses RK816 driver):

```c
drivers/mfd/rk816.c
drivers/input/misc/rk816-pwrkey.c
drivers/rtc/rtc-rk816.c
drivers/gpio/gpio-rk816.c
drivers/regulator/rk816-regulator.c
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK816
CONFIG_GPIO_RK816
CONFIG_RTC_RK816
CONFIG_REGULATOR_RK816
CONFIG_INPUT_RK816_PWRKEY
```

**4.4 Kernel Configuration**

RK805 driver files:

```c
drivers/mfd/rk808.c
drivers/input/misc/rk8xx-pwrkey.c
drivers/rtc/rtc-rk808.c
drivers/gpio/gpio-rk8xx.c
drivers/regulator/rk818-regulator.c
drivers/clk/clk-rk808.c
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK808
CONFIG_RTC_RK808
CONFIG_GPIO_RK8XX
CONFIG_REGULATOR_RK818
CONFIG_INPUT_RK8XX_PWRKEY
CONFIG_COMMON_CLK_RK808
```

**4.19 Kernel Configuration**

RK805 driver files:

```c
drivers/mfd/rk808.c
drivers/input/misc/rk805-pwrkey.c       // Different from 4.4 kernel
drivers/rtc/rtc-rk808.c
drivers/pinctrl/pinctrl-rk805.c         // Different from 4.4 kernel
drivers/regulator/rk808-regulator.c     // Different from 4.4 kernel
drivers/clk/clk-rk808.c
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK808
CONFIG_RTC_RK808
CONFIG_PINCTRL_RK805
CONFIG_REGULATOR_RK808
CONFIG_INPUT_RK805_PWRKEY
CONFIG_COMMON_CLK_RK808
```

### DTS Configuration

**3.10 Kernel Configuration**

DTS configuration includes: I2C attachment, main body, regulator, rtc, poweroff, etc.

```c
&i2c1 {
    rk805: rk805@18 {
        reg = <0x18>;
        status = "okay";
    };
};

#include "../../../arm/boot/dts/rk805.dtsi"
&rk805 {
    gpios = <&gpio2 GPIO_A6 GPIO_ACTIVE_HIGH>, <&gpio2 GPIO_D2 GPIO_ACTIVE_LOW>;
    rk805,system-power-controller;
    gpio-controller;
    #gpio-cells = <2>;

    rtc {
        status = "disabled";
    };

    regulators {
        rk805_dcdc1_reg: regulator@0 {
            regulator-name = "vdd_logic";
            regulator-min-microvolt = <700000>;
            regulator-max-microvolt = <1500000>;
            regulator-initial-mode = <0x1>;
            regulator-initial-state = <3>;
            regulator-boot-on;
            regulator-always-on;
            regulator-state-mem {
                regulator-state-mode = <0x2>;
                regulator-state-enabled;
                regulator-state-uv = <1000000>;
            };
        };
        rk805_dcdc2_reg: regulator@1 {
                    .............
        };
        rk805_dcdc3_reg: regulator@2 {
                    .............
        };
        .................................
    };
};
```

1. I2C Attachment

     The complete rk805 node is placed under the corresponding i2c node with status = "okay";

2. Main Body

- Non-modifiable parts

```
    rk805,system-power-controller: Declares that RK805 has the capability to manage system power-off;
    gpio-controller: Declares that RK805 has GPIO functionality;
    #gpio-cells: The number of parameters required when referencing RK805's GPIO;
```

**Note:** If a node needs to reference RK805's GPIO, the reference format is as follows:

`gpios = <&rk805 0 GPIO_ACTIVE_LOW>;`
     First parameter: &rk805 is fixed, do not change;
     Second parameter: Which gpio of rk805 to reference, can only be 0 or 1, where 0: out1, 1: out2;
     Third parameter: GPIO polarity.

- Modifiable parts

   gpios: specifies the pmic_int (first) and pmic_sleep (second) pins;

3. Regulator Part

- `regulator-name`: Power supply name, recommended to match the hardware schematic. Used with the regulator_get interface;
- `regulator-min-microvolt`: Minimum adjustable voltage during operation;
- `regulator-max-microvolt`: Maximum adjustable voltage during operation;
- `regulator-initial-mode`: DCDC operating mode during operation, generally configured as 1. 1: force pwm, 2: auto pwm/pfm;
- `regulator-state-mode`: DCDC operating mode during sleep, generally configured as 2. 1: force pwm, 2: auto pwm/pfm;
- `regulator-initial-state`: Suspend mode, must be configured as 3;

- `regulator-boot-on`: When present, this power rail is enabled when the regulator is registered;
- `regulator-always-on`: When present, this power rail cannot be turned off during operation and is enabled at registration;
- `regulator-state-enabled`: Keeps power on during sleep; to turn off this rail, change to "regulator-state-disabled";
- `regulator-state-uv`: Standby voltage when power is not cut during sleep.

**Notes:**

    If regulator-min-microvolt and regulator-max-microvolt are equal, the system framework will set this voltage and enable this power rail by default when registering the regulator, without user intervention.

    If regulator-boot-on or regulator-always-on is present, the system framework will enable this regulator by default upon registration. The voltage of this regulator has 2 cases: if regulator-min-microvolt and regulator-max-microvolt are equal, the system framework sets the voltage to that value; if they are not equal, the voltage is the PMIC's hardware default power-on voltage.

4. RTC Part

If you do not want to enable the RTC function (e.g., on box products), add a node as shown above, explicitly specifying status = "disabled". If you need to enable it, you can remove the RTC node or set the status to "okay".

5. Poweroff Part

```c
gpio_poweroff {
    compatible = "gpio-poweroff";
    gpios = <&gpio2 GPIO_D2 GPIO_ACTIVE_HIGH>;
    status = "okay";
};
```

Because the RK805 supports pulling the pmic_sleep pin high for complete PMIC power-off, this node needs to be added under the root node. The gpios part is modifiable, used to specify the pmic_sleep pin.

**4.4 Kernel Configuration**

DTS configuration includes: i2c attachment, main body, rtc, pwrkey, gpio, regulator, etc.

```c
&pinctrl {
    pmic {
        pmic_int_l: pmic-int-l {
        rockchip,pins =
            <2 6 RK_FUNC_GPIO &pcfg_pull_up>;   /* gpio2_a6 */
        };
    };
};

&i2c1 {
    status = "okay";
    rk805: rk805@18 {
        compatible = "rockchip,rk805";
        status = "okay";
        reg = <0x18>;
        interrupt-parent = <&gpio2>;
        interrupts = <6 IRQ_TYPE_LEVEL_LOW>;
        pinctrl-names = "default";
        pinctrl-0 = <&pmic_int_l>;
        rockchip,system-power-controller;
        wakeup-source;
        gpio-controller;
        #gpio-cells = <2>;
        rtc {
            status = "disabled";
        };
        pwrkey {
            status = "disabled";
        };
        gpio {
            status = "okay";
        };
        regulators {
            compatible = "rk805-regulator";
            status = "okay";
            #address-cells = <1>;
            #size-cells = <0>;
            vdd_logic: RK805_DCDC1@0 {
                regulator-compatible = "RK805_DCDC1";
                regulator-name = "vdd_logic";
                regulator-init-microvolt = <1100000>;
                regulator-min-microvolt = <712500>;
                regulator-max-microvolt = <1450000>;
                regulator-initial-mode = <0x1>;
                regulator-ramp-delay = <12500>;
                regulator-boot-on;
                regulator-always-on;
                regulator-state-mem {
                    regulator-mode = <0x2>;
                    regulator-on-in-suspend;
                    regulator-suspend-microvolt = <1000000>;
                };
            };

            vdd_arm: RK805_DCDC2@1 {
                .................
            };
            vcc_ddr: RK805_DCDC3@2 {
                .................
            };
            .............................
        };
    };
};
```

1. i2c Attachment

The complete rk805 node is placed under the corresponding i2c node with status = "okay";

2. Main Body

- Non-modifiable:

```c
compatible = "rockchip,rk805";
reg = <0x18>;
rockchip,system-power-controller;
wakeup-source;
gpio-controller;
#gpio-cells = <2>;
```

- Modifiable (follow pinctrl rules)

interrupt-parent: Which gpio does pmic_int belong to;
interrupts: Pin index number and polarity of pmic_int on the interrupt-parent gpio;
pinctrl-names: Do not modify, fixed as "default";
pinctrl-0: Reference the pmic_int pin defined in pinctrl;

3. rtc, pwrkey, gpio

If these modules are selected in menuconfig but not actually needed, you can add rtc, pwrkey, gpio nodes in dts and explicitly set status = "disabled". This will prevent the driver from being enabled, but an error log will be reported during boot, which can be ignored. To enable the driver, either remove the corresponding node or set status = "okay".

4. Regulator

- `regulator-compatible`: Name required for driver registration. Cannot be changed, otherwise loading will fail;
- `regulator-name`: Power supply name, recommended to match the hardware schematic. Used with the regulator_get interface;
- `regulator-init-microvolt`: Initialization voltage for the u-boot stage, invalid during kernel stage;
- `regulator-min-microvolt`: Minimum adjustable voltage during operation;
- `regulator-max-microvolt`: Maximum adjustable voltage during operation;
- `regulator-initial-mode`: DCDC operating mode during operation, generally configured as 1. 1: force pwm, 2: auto pwm/pfm;
- `regulator-mode`: DCDC operating mode during sleep, generally configured as 2. 1: force pwm, 2: auto pwm/pfm;
- `regulator-initial-state`: Suspend mode, must be configured as 3;
- `regulator-boot-on`: When present, this power rail is enabled when the regulator is registered;
- `regulator-always-on`: When present, this power rail cannot be turned off during operation and is enabled at registration;
- `regulator-ramp-delay`: DCDC voltage rise time, fixed at 12500;
- `regulator-on-in-suspend`: Keeps power on during sleep; to turn off this rail, change to "regulator-off-in-suspend";
- `regulator-suspend-microvolt`: Standby voltage when power is not cut during sleep.

**4.19 Kernel Configuration**

Refer to the 4.4 kernel DTS configuration. Difference: The 4.19 kernel DTS configuration no longer requires a gpio sub-node, but other modules still use `gpios = <&rk805 0 GPIO_ACTIVE_LOW>;` to reference and use rk805 pin functions.

### Function Interfaces

The following interfaces can meet daily usage needs, including regulator on, off, voltage setting, and voltage retrieval:

1. Get regulator:

   `struct regulator *regulator_get(struct device *dev, const char *id)`

   dev can be NULL by default, id corresponds to the regulator-name attribute in dts.

2. Release regulator
   `void regulator_put(struct regulator *regulator)`

3. Enable regulator
   `int regulator_enable(struct regulator *regulator)`

4. Disable regulator

   `int regulator_disable(struct regulator *regulator)`

5. Get regulator voltage

  `int regulator_get_voltage(struct regulator *regulator)`

6. Set regulator voltage

  `int regulator_set_voltage(struct regulator *regulator, int min_uV, int max_uV)`

   Ensure min_uV = max_uV when passing parameters; this is guaranteed by the caller.

7. Example

```c
struct regulator *rdev_logic;

rdev_logic = regulator_get(NULL, "vdd_logic");          // Get vdd_logic
regulator_enable(rdev_logic);                            // Enable vdd_logic
regulator_set_voltage(rdev_logic, 1100000, 1100000);    // Set voltage 1.1v
regulator_disable(rdev_logic);                           // Disable vdd_logic
regulator_put(rdev_logic);                               // Release vdd_logic
```

Note: The 4.4 or 4.19 kernel also provides `devm_` prefixed regulator interfaces to help developers manage requested resources.

## Debug

### Kernel

Because the PMIC drivers are not complex in usage logic, the focus is on the final register settings. Therefore, the common debug method is to directly view the rk805 registers through the following node:

`/sys/rk816/rk816_test`

Read register:

`echo r [addr] > /sys/rk816/rk816_test`

Write register:

`echo w [addr] [value] > /sys/rk816/rk816_test`

Example:

`echo r 0x2f > /sys/rk816/rk816_test            // Read 0x2f register value, returns 0x9b`

![RK805-debug-read-cmd-kernel3.10](Rockchip_RK805_Developer_Guide/RK805_debug_read_cmd_kernel3.10.png)

`echo w 0x2f 0x9c > /sys/rk816/rk816_test    // Set 0x2f register to 0x9c`

After a write operation, it is generally best to read again to confirm the write was successful.

![RK805-debug-write-cmd-kernel3.10](Rockchip_RK805_Developer_Guide/RK805_debug_read_cmd_kernel3.10.png)

### Kernel

The command format is the same as the 3.10 kernel, but the node path is different. The debug node path on the 4.4 kernel is:

`/sys/rk8xx/rk8xx_dbg`

### Kernel

Refer to the 4.4 kernel commands.
