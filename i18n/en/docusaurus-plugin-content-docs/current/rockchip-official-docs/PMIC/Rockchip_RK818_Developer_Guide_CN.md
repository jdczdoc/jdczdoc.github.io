# **RK818 Developer Guide**

Release Version: 1.0

Author Email: zhangqing@rock-chips.com

Date: 2019.11

Security Level: Public

---

**Preface**

**Overview**

This document mainly introduces the sub-modules of the RK818, including related concepts, features, DTS configuration, and analysis and troubleshooting of common issues.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ---------------- |
| RK818        | 3.10, 4.4, 4.19 |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description**     |
| ---------- | -------- | -------- | ---------------- |
| 2019.11.25 | V1.0     | Zhang Qing | Initial version         |

---
[TOC]

---

## Basics

### Overview

RK818 is a high-performance PMIC. The RK818 integrates 4 high-current DCDCs, 1 high-current boost BOOST, 9 LDOs, 1 SWITCH, an HDMI 5V output, an OTG output, 1 RTC, adjustable power-on sequencing, and also integrates switching charging, smart power path management, fuel gauge, and other functions.

The power rails in the system are generally divided into two types: DCDC and LDO. The general characteristics of the two types are as follows (please search for detailed information):

1. DCDC: High efficiency when the input-output voltage difference is large, but suffers from relatively large ripple and higher cost, so it is used for large voltage differences and high current loads. Generally has two operating modes. PWM mode: good ripple and transient response, low efficiency; PFM mode: high efficiency, but poor load capacity.
2. LDO: Low efficiency when the input-output voltage difference is large, low cost. To improve the conversion efficiency of LDOs, system-level optimizations can be performed, such as: if the LDO output voltage is 1.1V, its input voltage can be taken from the VCCIO_3.3V DCDC output to improve efficiency. Therefore, if the circuit allows, try to connect the LDO to the DCDC output rail, but pay attention to the power-on sequence.

### Functions

From the user's perspective, the functions of the RK818 can be summarized into 4 parts:

1. Regulator function: Controls the status of each DCDC and LDO power rail;
2. RTC function: Provides clock timing, alarms, and other functions;
3. CLK function: Has two 32.768KHz clock outputs, one always-on (uncontrollable) and one software-controllable.
4. Charging and fuel gauge functions: Not described in detail in this document, please refer to the document *Rockchip_RK818_RK816_Developer_Guide_Fuel_Gauge_CN*.

### Chip Pin Functions

![RK818-pins-list](Rockchip_RK818_Developer_Guide\RK818_pins_list.png)

In the following description, the SLEEP and INT pins require special attention:

![RK818-pins-function-1](Rockchip_RK818_Developer_Guide\RK818_pins_function_1.png)

![RK818-pins-function-2](Rockchip_RK818_Developer_Guide\RK818_pins_function_2.png)

![RK818-pins-function-3](Rockchip_RK818_Developer_Guide\RK818_pins_function_3.png)

![RK818-pins-function-4](Rockchip_RK818_Developer_Guide\RK818_pins_function_4.png)

### Important Concepts

- I2C Address

      7-bit slave address: 0x1c

- PMIC has 3 operating modes

    1. PMIC normal mode

    When the system is running normally, the PMIC is in normal mode, with pmic_sleep at low level.

    2. PMIC sleep mode

    When the system suspends, standby power consumption should be as low as possible. The PMIC switches to sleep mode to reduce its own power consumption. Generally, this involves reducing the output voltage of some rails or turning off outputs directly, which can be configured based on actual product requirements. When the system is in standby, the AP configures pmic_sleep to sleep mode via I2C commands, then pulls pmic_sleep high to make the PMIC enter the sleep state; when the SoC wakes up, pmic_sleep returns to low level, and the PMIC exits sleep mode.

    3. PMIC shutdown mode

    When the system enters the shutdown sequence, the PMIC needs to complete the power-down operation for the entire system. The AP configures pmic_sleep to shutdown mode via I2C commands, then pulls pmic_sleep high to make the PMIC enter the shutdown state.

- pmic_sleep pin

    Normally low, the PMIC is in normal mode. When the pin is pulled high, it switches to sleep or shutdown mode.

- pmic_int pin

    Normally high, becomes low when an interrupt is generated. If the interrupt is not serviced, it remains low.

- pmic_pwron pin

    The pwrkey function requires the hardware power button to be connected to this pin. The driver determines press/release through this pin.

- Operating modes of each DCDC

    DCDCs have PWM (also called force PWM) and PFM modes, but the PMIC has a mode that dynamically switches between PWM and PFM, which is commonly referred to as AUTO mode. The PMIC supports PWM and AUTO PWM/PFM modes. AUTO mode is more efficient but has worse ripple and transient response. For system stability, PWM mode is used during runtime, and it switches to AUTO PWM/PFM when the system enters sleep.

- DCDC3 Voltage Adjustment

    The DCDC3 power rail is special. Its voltage cannot be modified through registers; it can only be adjusted through external voltage divider resistors. Therefore, if you need to change the voltage, modify the external hardware. In Rockchip designs, it is typically used as VCC_DDR.

- Runtime voltage adjustment range for DCDC and LDO

1. DCDC voltage range is continuous:

    1. DCDC voltage range is continuous:

       | Voltage Range (V) | Step (mV) | Specific Values (V)                     |
       | ------------- | ---------- | --------------------------------- |
       | 0.7125 ~ 1.45 | 12.5       | 0.7125, 0.725, 0.7375, ..., 1.45 |
       | 1.8 ~ 3.3     | 100        | 1.8, 1.9, 2.0, 2.2..., 3.3       |

    2. LDO voltage is continuous:

       | Voltage Range (V) | Step (mV) | Specific Values (V)                        |
       | ------------- | ---------- | ------------------------------------ |
       | 0.8 ~ 3.4     | 100        | 0.8, 0.9, 1.0, 1.1, 1.2, ..., 3.4     |

### Power-On Conditions and Sequence

1. Power-On Conditions

    The PMIC powers on if any of the following conditions is met:

- EN signal transitions from low to high
- EN signal remains high and RTC alarm interrupt triggers
- EN signal remains high and the PWRON key is pressed

2. Power-On Sequence

    Each SoC platform may have different power-on sequence requirements for each power rail. The current power-on sequences are as follows. Please refer to the latest datasheet for details:

![RK818-power-start-seq1](Rockchip_RK818_Developer_Guide\RK818_power_start_seq1.png)

![RK818-power-start-seq2](Rockchip_RK818_Developer_Guide\RK818_power_start_seq2.png)

## Configuration

### Driver and Menuconfig

**3.10 Kernel Configuration**

RK818 driver files:

```c
drivers/mfd/rk818.c
drivers/mfd/rk818-irq.c
drivers/rtc/rtc-rk818.c
drivers/power/rk818-battery.c
```

RK818 DTS files for reference:

```c
arch/arm/boot/dts/rk818.dtsi
arch/arm64/boot/dts/rk3368-p9_818.dts
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK818
CONFIG_RTC_RK818
CONFIG_BATTERY_RK818
```

**4.4 Kernel Configuration**

RK818 driver files:

```c
drivers/mfd/rk808.c
drivers/rtc/rtc-rk808.c
drivers/regulator/rk808-regulator.c
drivers/clk/clk-rk808.c
drivers/power/rk818_charger.c
drivers/power/rk818_battery.c
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK808
CONFIG_RTC_RK808
CONFIG_REGULATOR_RK808
CONFIG_BATTERY_RK818
CONFIG_CHARGER_RK818
CONFIG_COMMON_CLK_RK808
```

**4.19 Kernel Configuration**

RK818 driver files:

```c
drivers/mfd/rk808.c
drivers/rtc/rtc-rk808.c
drivers/regulator/rk808-regulator.c     // Different from 4.4 kernel
drivers/clk/clk-rk808.c
drivers/power/supply/rk818_battery.c
drivers/power/supply/rk818_charger.c
```

Corresponding macro configuration in menuconfig:

```c
CONFIG_MFD_RK808
CONFIG_RTC_RK808
CONFIG_REGULATOR_RK808
CONFIG_BATTERY_RK818
CONFIG_CHARGER_RK818
CONFIG_COMMON_CLK_RK808
```

### DTS Configuration

**3.10 Kernel DTS Configuration**

DTS configuration includes: I2C attachment, main body, regulator, RTC, poweroff, etc.

```c
&i2c1 {
	rk818: rk818@1c {
		reg = <0x1c>;
		status = "okay";
	};
};

/include/ "../../../arm/boot/dts/rk818.dtsi"
&rk818 {
	gpios =<&gpio0 GPIO_A1 GPIO_ACTIVE_HIGH>,<&gpio0 GPIO_A0 GPIO_ACTIVE_LOW>;
	rk818,system-power-controller;
	pinctrl-names = "default";
	pinctrl-0 = <&gpio0_c1>;

	regulators {
		rk818_dcdc1_reg: regulator@0{
			regulator-name= "vdd_arm";/*vcc arm*/
			regulator-min-microvolt = <700000>;/*<725000>;*/
			regulator-max-microvolt = <1500000>;
			regulator-initial-mode = <0x2>;
			regulator-initial-state = <3>;
			regulator-state-mem {
				regulator-state-mode = <0x2>;
				regulator-state-disabled;
				regulator-state-uv =<900000>;
			};
		};

		rk818_dcdc2_reg: regulator@1 {
			regulator-name= "vdd_logic";/*vcc gpu*/
			regulator-min-microvolt = <700000>;
			regulator-max-microvolt = <1200000>;
			regulator-initial-mode = <0x2>;
			regulator-initial-state = <3>;
			regulator-state-mem {
				regulator-state-mode = <0x2>;
				regulator-state-enabled;
				regulator-state-uv = <1200000>;
			};
		};
		rk818_dcdc3_reg: regulator@2 {
					.............
		};
		.................................
	};
};
```

1. I2C Attachment

    The entire rk818 node is attached under the corresponding I2C node, with status configured as "okay".

2. Main Body

- Unmodifiable parts

```
rk818,system-power-controller: Declares that the RK818 has the capability to manage system power-off;
```

- Modifiable parts

  gpios: Specifies the pmic_int (first) and pmic_sleep (second) pins;

3. Regulator Part

- `regulator-name`: Power rail name, recommended to match the hardware schematic. Used with the regulator_get interface;
- `regulator-min-microvolt`: Minimum adjustable voltage during runtime;
- `regulator-max-microvolt`: Maximum adjustable voltage during runtime;
- `regulator-initial-mode`: DCDC operating mode during runtime, typically configured as 1. 1: force pwm, 2: auto pwm/pfm;
- `regulator-state-mode`: DCDC operating mode during sleep, typically configured as 2. 1: force pwm, 2: auto pwm/pfm;
- `regulator-initial-state`: Suspend mode, must be configured as 3;

- `regulator-boot-on`: When this attribute exists, this power rail is enabled when the regulator is registered;
- `regulator-always-on`: When this attribute exists, this power rail is not allowed to be turned off during runtime and is enabled at registration;
- `regulator-state-enabled`: Keeps power on during sleep. To turn off this rail, change to "regulator-state-disabled";
- `regulator-state-uv`: Standby voltage when power is not cut during sleep.

**Note:**

	If regulator-min-microvolt and regulator-max-microvolt are equal, the system framework will set this voltage and enable this power rail by default during regulator registration, without user intervention.

	If regulator-boot-on or regulator-always-on is present, the system framework will enable this regulator by default during registration. The voltage at this point has 2 cases: if regulator-min-microvolt and regulator-max-microvolt are equal, the system framework will set the voltage to this value; if they are not equal, the voltage will be the PMIC's own hardware default power-on voltage.

4. RTC Part

If you do not want to enable the RTC function (e.g., on box products), you need to add the node as shown above and explicitly set status = "disabled". If you want to enable it, you can either remove the entire RTC node or set status = "okay".

5. Poweroff Part

Because the RK808 driver automatically intercepts shutdown commands and writes I2C commands to turn off the PMIC output.

rk818_shutdown is registered as a syscore shutdown, used for preparatory work such as disabling RTC interrupts and other special operations.

```c
static void rk818_shutdown(void)
{
	int ret;
	struct rk818 *rk818 = g_rk818;

	pr_info("%s\n", __func__);
	ret = rk818_set_bits(rk818, RK818_INT_STS_MSK_REG1,(0x3<<5),(0x3<<5)); //close rtc int when power off
	ret = rk818_clear_bits(rk818, RK818_RTC_INT_REG,(0x3<<2)); //close rtc int when power off
	/*disable otg_en*/
	ret = rk818_clear_bits(rk818, RK818_DCDC_EN_REG, (0x1<<7));

	mutex_lock(&rk818->io_lock);
	mdelay(100);
}

static struct syscore_ops rk818_syscore_ops = {
	.shutdown = rk818_shutdown,
};
```

rk818_device_shutdown is the actual I2C write that turns off the PMIC output.

```c
void rk818_device_shutdown(void)
{
	int ret, i;
	u8 reg = 0;
	struct rk818 *rk818 = g_rk818;

	for (i = 0; i < 10; i++) {
		pr_info("%s\n", __func__);
		ret = rk818_i2c_read(rk818, RK818_DEVCTRL_REG, 1, &reg);
		if (ret < 0)
			continue;
		ret = rk818_i2c_write(rk818, RK818_DEVCTRL_REG, 1,
				     (reg | (0x1 << 0)));
		if (ret < 0) {
			pr_err("rk818 power off error!\n");
			continue;
		}
	}
	while(1) wfi();
}
EXPORT_SYMBOL_GPL(rk818_device_shutdown);
```

**4.4 Kernel DTS Configuration**

DTS configuration includes: I2C attachment, main body, RTC, CLK, regulator, charger, battery, etc.

```c

&i2c1 {
	status = "okay";
	rk818: pmic@1c {
		compatible = "rockchip,rk818";
		reg = <0x1c>;
		status = "okay";

		clock-output-names = "rk818-clkout1", "wifibt_32kin";
		interrupt-parent = <&gpio0>;
		interrupts = <1 IRQ_TYPE_LEVEL_LOW>;
		pinctrl-names = "default";
		pinctrl-0 = <&pmic_int_l>;
		rockchip,system-power-controller;
		wakeup-source;
		#clock-cells = <1>;

		vcc1-supply = <&vcc_sys>;
		vcc2-supply = <&vcc_sys>;
		vcc3-supply = <&vcc_sys>;
		vcc4-supply = <&vcc_sys>;
		vcc6-supply = <&vcc_sys>;
		vcc7-supply = <&vcc_sys>;
		vcc8-supply = <&vcc_sys>;
		vcc9-supply = <&vcc_io>;

		regulators {
			vdd_logic: DCDC_REG1 {
				regulator-name = "vdd_logic";
				regulator-always-on;
				regulator-boot-on;
				regulator-min-microvolt = <750000>;
				regulator-max-microvolt = <1450000>;
				regulator-ramp-delay = <6001>;
				regulator-state-mem {
					regulator-on-in-suspend;
					regulator-suspend-microvolt = <1000000>;
				};
			};

			vdd_gpu: DCDC_REG2 {
				regulator-name = "vdd_gpu";
				regulator-always-on;
				regulator-boot-on;
				regulator-min-microvolt = <800000>;
				regulator-max-microvolt = <1250000>;
				regulator-ramp-delay = <6001>;
				regulator-state-mem {
					regulator-on-in-suspend;
					regulator-suspend-microvolt = <1000000>;
				};
			};
			vcc_ddr: RK818_DCDC3@2 {
				.................
			};
			.............................
		};
	};
};
```

1. I2C Attachment

The entire rk818 node is attached under the corresponding I2C node, with status configured as "okay".

2. Main Body

- Unmodifiable:

```c
compatible = "rockchip,rk818";
reg = <0x1c>;
rockchip,system-power-controller;
wakeup-source;
#clock-cells = <1>;
```

- Modifiable (following pinctrl rules)

interrupt-parent: Which gpio the pmic_int belongs to;
interrupts: Pin index number and polarity of pmic_int on the interrupt-parent gpio;
pinctrl-names: Do not modify, fixed as "default";
pinctrl-0: Reference the pmic_int pin defined in pinctrl;

3. RTC

If the module is selected in menuconfig but the drivers are not actually needed, you can add an RTC node in the DTS and explicitly set status = "disabled", so the driver will not be enabled. However, error logs may appear during boot, which can be ignored. To enable the driver, remove the corresponding node or set status = "okay".

4. Regulator

- `regulator-compatible`: The name that must be matched during driver registration. Do not change, otherwise loading will fail;
- `regulator-name`: Power rail name, recommended to match the hardware schematic. Used with regulator_get interface;
- `regulator-init-microvolt`: Initialization voltage during the u-boot stage, invalid in the kernel stage;
- `regulator-min-microvolt`: Minimum adjustable voltage during runtime;
- `regulator-max-microvolt`: Maximum adjustable voltage during runtime;
- `regulator-initial-mode`: DCDC operating mode during runtime, typically 1. 1: force pwm, 2: auto pwm/pfm;
- `regulator-mode`: DCDC operating mode during sleep, typically 2. 1: force pwm, 2: auto pwm/pfm;
- `regulator-initial-state`: Suspend mode, must be configured as 3;
- `regulator-boot-on`: When present, this power rail is enabled at regulator registration;
- `regulator-always-on`: When present, this power rail cannot be turned off during runtime and is enabled at registration;
- `regulator-ramp-delay`: DCDC voltage rise time, fixed at 12500;
- `regulator-on-in-suspend`: Keeps power on during sleep. To turn off, change to "regulator-off-in-suspend";
- `regulator-suspend-microvolt`: Standby voltage when power is not cut during sleep.

5. Poweroff Part

On 4.4, pm_power_off_prepare is used to implement preparatory work before PMIC shutdown, such as disabling RTC interrupts and configuring some special registers.
A syscore shutdown is registered for the actual PMIC shutdown.

6. CLK Part

If a node needs to use the RK808's clock, the reference format is as follows:

`clocks = <&rk818 1>;`
     First parameter: &rk818 (fixed, do not change);
     Second parameter: Which clock of rk818 to reference, can only be 0 or 1, where 0: rk818-clkout1, 1: rk818-clkout2;

**4.19 Kernel DTS Configuration**

Please refer to the 4.4 kernel DTS configuration. Difference: The 4.19 kernel DTS configuration no longer requires gpio sub-nodes, but other modules still use `gpios = <&rk818 0 GPIO_ACTIVE_LOW>;` to reference and use rk818 pins.

### Function Interfaces

The following interfaces can meet daily usage needs, including regulator on/off, voltage setting, and voltage retrieval:

1. Get regulator:

   `struct regulator *regulator_get(struct device *dev, const char *id)`

   dev can be filled as NULL by default; id corresponds to the regulator-name attribute in the DTS.

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

   When passing parameters, ensure min_uV = max_uV. This is the caller's responsibility.

7. Example

```c
struct regulator *rdev_logic;

rdev_logic = regulator_get(NULL, "vdd_logic");			// Get vdd_logic
regulator_enable(rdev_logic);							// Enable vdd_logic
regulator_set_voltage(rdev_logic, 1100000, 1100000);	// Set voltage to 1.1v
regulator_disable(rdev_logic);							// Disable vdd_logic
regulator_put(rdev_logic);								// Release vdd_logic
```

Note: The 4.4 or 4.19 kernel also provides `devm_` prefixed regulator interfaces to help developers manage requested resources.

## Debug

### Kernel

Because PMIC-related drivers are not complex in usage logic, the focus is mainly on register settings. The common debug method is to directly view the rk818 registers through the following node:

`/sys/rk818/rk818_test`

Read register:

`echo r [addr]  > /sys/rk818/rk818_test`

Write register:

`echo w [addr] [value] > /sys/rk818/rk818_test`

### Kernel

The command format is the same as the 3.10 kernel, only the node path differs. The debug node path on the 4.4 kernel is:

`/sys/rk8xx/rk8xx_dbg`

### Kernel

Please refer to the 4.4 kernel commands.
