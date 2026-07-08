# RK818/RK816 Fuel Gauge Developer Guide

Release Version: 2.0

Author Email: chenjh@rock-chips.com

Date: 2018.05

Security Level: Public

---

**Preface**

**Overview**

This document mainly introduces the RK818/RK816 sub-module of Rockchip: the fuel gauge. It introduces related concepts, functions, DTS configuration, and analysis of some common issues.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ----------- | --------------- |
| RK818    | 3.10, 4.4 |
| RK816    | 3.10     |

**Intended Audience**

This document (guide) is mainly suitable for the following engineers:

Field Application Engineer

Software Development Engineer

**Revision History**

| **Date**     | **Version** | **Author** | **Revision Description** |
| ---------- | --------- | --------- | --------------- |
| 2016.07.25 | V1.0   | Chen Jianhong | Initial draft, rk818 usage on kernel 4.4 |
| 2017.05.25 | V2.0   | Chen Jianhong | Added rk816, rk818 usage on kernel 3.10; corrected charge voltage/current description errors |
| 2018.05.31 | V2.1   | Chen Jianhong | Adjusted document format and typographical errors, no major content updates |

---
[TOC]
---

## Overview RK818/RK816 Fuel Gauge

RK818/RK816 is a high-performance PMIC that integrates multiple high-current DCDCs, multiple LDOs, 1 linear switch, 1 USB 5V and boost output, as well as switching charging, smart power path management, coulomb counter, RTC, and adjustable power-on sequencing. Among them, "switching charging, smart power path management, fuel gauge (coulomb counter)" are the functions covered in this document.

1. Charge management: includes input current limit, trickle charging, constant current/constant voltage charging, charge termination, charge timeout safety protection, etc.
2. Smart power path management: can adjust the output voltage to provide the power required by the system load, while also charging the battery. When entering the input current limit state, input power is preferentially supplied to the system load, and the remaining power is used for battery charging. In addition, when the power required by the system load exceeds the limited input power, or when the power input is disconnected, the smart power path management function automatically turns on the switch between the battery and the system load, allowing the battery to provide additional power to the system load simultaneously.
3. Fuel gauge (coulomb counter): By using proprietary patented technology algorithms, this fuel gauge can accurately measure battery capacity based on the charge/discharge characteristic curves of different batteries, and provide battery capacity information to the system main chip via the I2C interface. It also features low current charging for over-discharged batteries, battery temperature detection, charge safety timer, and chip thermal protection.

## Fuel Gauge Principle

1. Three basic principles:
   a) The open circuit voltage vs. battery capacity percentage (OCV-SOC) curve mainly depends on the battery's material and manufacturing process, and is less affected by temperature, aging, etc. That is, once the battery is produced, the SOC-OCV curve remains largely unchanged.

   b) During operation, due to battery polarization, it is difficult to calculate the battery's OCV voltage from the battery port voltage. Therefore, usable OCV voltage can only be obtained when the battery is not polarized (e.g., after long-term shutdown or long-term low-current operation), and SOC can be derived from OCV.

   c) The coulomb counter can measure the actual charge flowing into or out of the battery. If the total battery capacity is known, the SOC value can be easily obtained. However, the cumulative error of the coulomb counter is large, and the total battery capacity will be affected by factors such as temperature and aging. Therefore, the coulomb counter method can only guarantee good accuracy over a short period and requires periodic updates of the total battery capacity.

   d) Currently, good fuel gauges are based on the above OCV estimation and coulomb counter calculation to obtain real-time remaining capacity status.

2. Coulomb Counter Method

   A current sense resistor is connected in series between the positive and negative terminals of the battery. When current flows through the resistor, a V_delta is generated. By detecting V_delta, the current flowing through the battery can be calculated. This allows precise tracking of battery capacity changes, with accuracy reaching 1%. Additionally, by combining battery voltage and temperature, the impact of battery aging and other factors on measurement results can be greatly reduced.

3. Current Signal Conditioning

   A 20 or 10 milliohm resistor is used for current sensing. A bias is provided through a constant current source to raise the negative current signal to a positive value. It is then amplified by an operational amplifier to the reference voltage Vref range and converted to a digital value by the ADC module.

4. Voltage Acquisition

   The battery voltage is divided (division ratio 0.5) to within the Vref range through a voltage divider circuit, and then converted to a digital output by the ADC module.

5. Average Current Acquisition

   The digital section adds the corrected current value to a multi-bit accumulator 256 times per second. At the end of each second, the accumulator value is divided by 256 to obtain the average current value.

6. Coulomb Counter Update

   The coulomb counter automatically accumulates once when the average current is updated.

## Important Concepts

- `ocv voltage`
   Open circuit voltage. The PMIC collects this during the power-on sequence because the load is very small at that time, close to an open circuit state, so this voltage is accurate. Purpose: When the device has been shut down for at least 30 minutes, we consider the battery polarization to be basically eliminated. The OCV voltage obtained at this time is valid. Therefore, this voltage is used to query the ocv_table to obtain a new battery capacity value to update the coulomb counter value, performing a coulomb counter calibration.

- `ocv table`
   Each battery has its own characteristic curve. Based on the principle that a specific OCV voltage corresponds to a specific capacity, we divide the capacity from 0% to 100% into 21 points with 5% steps, thereby creating a table of "voltage vs. capacity". The purpose of this table is to serve as the basis for coulomb counter calibration when the battery is first connected and powered on, after a long shutdown, or after a long sleep. For example:

```c
ocv_table = <3400 3599 3671 3701 3728 3746 3762 ...... 4088 4132 4183>;
```

   Correspondence: 3400mv: 0%, 3599mv: 5%, 3671mv: 10%, …… 4183mv: 100%;

- `max input current and max charge current`
   The maximum current that can be obtained from the adapter configured in software is called the "max input current". For example, for a 5V/2A adapter, we generally configure the max input current to 2A in software (it can also be set to 1.8A, etc.). The RK818/816 has smart power path management, meaning power from the adapter is preferentially supplied to the system, and the remaining power is used for battery charging. The maximum remaining current allowed for battery charging configured in software is called the "max charge current".

- `input current limit occurs`
   Simply put, when the combined current demand for the battery and system exceeds the max input current, this "insufficient" situation is called "input current limit has occurred". Alternatively, it can be understood as: when the battery cannot be charged with the maximum charge current under the required battery conditions, an input current limit has occurred. This function is mainly used as one of the three conditions for charge termination (the other two being charge termination voltage and termination current).

- `relaxation mode`
   Under extremely low load conditions (currently only applies to secondary standby), if the system load current remains below a certain threshold (software configurable) for a certain period, the fuel gauge module enters relaxation mode.

- `relaxation voltage`
   In relaxation mode, the fuel gauge collects a set of voltages every 8 minutes, which we call the relaxation voltage. Purpose: The load during secondary standby is very small, so we approximate the relaxation voltage as the open circuit voltage. Therefore, in the driver, when the system wakes from secondary standby and certain conditions are met, it queries the ocv_table for coulomb counter calibration.

- `finish charge termination signal`
   When battery charging is terminated, a status signal is generated in the register, called the finish signal. Purpose: The software only considers charging as truly terminated by hardware upon receiving this signal, and then enters the corresponding algorithm flow to adjust the displayed capacity.

- `chip thermal protection`
   PMIC's self-protection mechanism, which is actually a feedback mechanism: when the chip temperature exceeds the set threshold, the input current is gradually reduced, thereby reducing the PMIC workload and chip heat. This feedback process is completed automatically by hardware, with no software involvement. There is no strict correspondence between temperature and current. Under extreme conditions, charging may even be stopped.

- `charge termination conditions`
   When the charging current reaches the termination current, the voltage reaches the termination voltage, and no input current limit has occurred, a charge termination signal is generated and charging stops. At this point, we consider the battery fully charged. (The input current limit condition is needed for judgment; otherwise, it is impossible to distinguish whether the charging current is genuinely small or simply small because the system load is large.)

## Driver and menuconfig

### Fuel Gauge Driver Functions

1. Battery capacity statistics and display;
2. Charge current and voltage settings (based on battery and charger type), supporting single-port/dual-port charging;
3. 5V power supply for OTG devices;
4. Battery temperature detection.

### Kernel 4.4

rk818 driver and macro configuration (too large in functionality, split into 2 drivers):

```c
drivers/power/rk818_battery.c            // Handles battery capacity display
drivers/power/rk818_charger.c            // Handles charger detection, charge voltage and current settings
```

```c
CONFIG_BATTERY_RK818
CONFIG_CHARGER_RK818
```

rk816 driver and macro configuration:

```c
drivers/power/rk816_battery.c            // Handles battery capacity display + charger detection, charge voltage and current settings
```

```c
CONFIG_BATTERY_RK816
```

### Kernel 3.10

rk818 driver and macro configuration:

```c
drivers/power/rk818_battery.c           // Handles battery capacity display + charger detection, charge voltage and current settings
```

```c
CONFIG_BATTERY_RK818
```

rk816 driver and macro configuration:

```c
drivers/power/rk816_battery.c           // Handles battery capacity display + charger detection, charge voltage and current settings
```

```c
CONFIG_BATTERY_RK816
```

## DTS Configuration

### Kernel 4.4

DTS configuration includes two parts:

1. battery part: Required.

   A complete battery node is shown below. This node is placed inside the RK818 node. Both the RK818 battery and charger sub-device drivers use the information within the battery node. ntc_table, ntc_degree_from, dc_det_gpio are optional, the rest are required.

```c
battery {
    compatible = "rk818-battery"
    ocv_table = <3400 3599 3671 3701 3728 3746 3762
                 3772 3781 3792 3816 3836 3866 3910
                 3942 3971 4002 4050 4088 4132 4183>;
    ntc_table = <43662 41676 39793 38005 36308 34696 33164
                 31709 30326 29011 27760 26570 25438 24361
                 23335 22358 21427 20540 19695 18890 18121
                 17389 16690 16022 14778 14197 13642 13113
                 12606 12122 11659 11216 10793 10388 10000
                 9629 9273 8933 8607 8295>;
    ntc_degree_from = <1 10>;
    design_capacity = <4000>;
    design_qmax = <4100>;
    bat_res = <120>;
    max_input_current = <2000>;
    max_chrg_current = <1800>;
    max_chrg_voltage = <4200>;
    sleep_enter_current = <300>;
    sleep_exit_current = <300>;
    power_off_thresd = <3400>;
    zero_algorithm_vol = <3850>;
    energy_mode = <0>;
    fb_temperature = <105>;
    sample_res = <10>;
    max_soc_offset = <60>;
    monitor_sec = <5>;
    virtual_power = <0>;
    power_dc2otg = <1>;
    dc_det_gpio = <&gpio0 GPIO_C1 GPIO_ACTIVE_LOW>;
};
```

2. charger part: Optional.

   If typec charging is not supported, no configuration is needed for this part. For devices supporting a typec charging port, add a reference `"extcon= <&fusbn>"` node (where n=0,1.., refer to actual hardware) under the rk818 root node, as shown below. This is because rk818_charger.c needs this reference to register the typec notification chain to obtain typec charger type detection information.

```c
rk818: pmic@1c {
    compatible = "rockchip,rk818";
    status = "okay";
    reg = <0x1c>;
    clock-output-names = "xin32k", "wifibt_32kin";
    interrupt-parent = <&gpio1>;
    interrupts = <21 IRQ_TYPE_LEVEL_LOW>;
    pinctrl-names = "default";
    pinctrl-0 = <&pmic_int_l>;
    rockchip,system-power-controller;
    rk818,support_dc_chg = <1>; /*1: dc chg; 0:usb chg*/
    wakeup-source;
    extcon = <&fusb0>;       // Important!!!
    #clock-cells = <1>;

    battery {
            ...........
            ...........
    };
};
```

### Kernel 3.10

The RK816 and RK818 node information is basically the same, with only a few attribute differences. The following takes RK818 as an example.

A complete battery node is shown below. This node is placed inside the RK818 node. ntc_table, ntc_degree_from, dc_det_gpio, dc_det_adc are optional, the rest are required.

```c
battery {
    compatible = "rk818-battery"  // If rk816, change to "rk816-battery"
    ocv_table = <3400 3599 3671 3701 3728 3746 3762
                 3772 3781 3792 3816 3836 3866 3910
                 3942 3971 4002 4050 4088 4132 4183>;
    ntc_table = <43662 41676 39793 38005 36308 34696 33164
                 31709 30326 29011 27760 26570 25438 24361
                 23335 22358 21427 20540 19695 18890 18121
                 17389 16690 16022 14778 14197 13642 13113
                 12606 12122 11659 11216 10793 10388 10000
                 9629 9273 8933 8607 8295>;
    ntc_degree_from = <1 10>;
    design_capacity = <4000>;
    design_qmax = <4100>;
    bat_res = <120>;
    max_input_current = <2000>;
    max_chrg_current = <1800>;
    max_chrg_voltage = <4200>;
    sleep_enter_current = <300>;
    sleep_exit_current = <300>;
    sleep_filter_current = <100>;  // rk818 does not need this attribute
    power_off_thresd = <3400>;
    zero_algorithm_vol = <3850>;
    energy_mode = <0>;
    fb_temperature = <105>;
    max_soc_offset = <60>;
    monitor_sec = <5>;
    virtual_power = <0>;
    power_dc2otg = <1>;
    dc_det_gpio = <&gpio0 GPIO_C1 GPIO_ACTIVE_LOW>;
    dc_det_adc = <1>;  // rk818 does not need this attribute, rk816 may need it
};
```

Parameter description:

- `ocv_table`
   Open circuit voltage vs. capacity table. That is, "voltage corresponds to capacity". There are 21 voltage values, corresponding to 0% --> 100%. The capacity step between voltage values is 5%. This data table can be provided by the battery manufacturer, measured by RK Shenzhen branch, or obtained using RK's measurement tool. Please consult the relevant engineers at the Shenzhen branch for details.

- `ntc_table`
   Battery ntc table, unit: ohms. If battery temperature detection is needed, fill in the corresponding ntc values. One value represents one temperature, with adjacent values having a temperature step of 1 degree Celsius, increasing from left to right. If battery temperature detection is not needed, remove this attribute field. The above example shows ntc values corresponding to -10~30 degrees Celsius.

- `ntc_degree_from`
   The temperature corresponding to ntc_table[0], i.e., the starting temperature value. Therefore, add this attribute only when ntc_table is configured. Since DTS cannot pass negative numbers, ntc_degree_from consists of two fields: the first indicates the sign (1: negative, 0: positive); the second indicates the temperature magnitude. For example, `ntc_degree_from = <1, 10>` means -10 degrees Celsius.

- `design_capacity`
   Actual battery capacity. The actual usable capacity determined after actual measurement. For example, if the nominal value is 4000mAh but the actual measured value is only 3850mAh, fill in 3850.

- `design_qmax`
   Maximum capacity value, mainly used as one of the error correction conditions in software processing. Currently, please fill in 1.1 times the nominal capacity: i.e., nominal capacity * 1.1.

- `bat_res`
   Battery internal resistance. It is used in the discharge algorithm and is very important! This value is obtained together with the ocv_table measurement, so pay attention to measuring this parameter. Do not omit it.

- `max_input_current`

Maximum input current. Currently available levels (unit: mA):

```c
RK818: <450, 80, 850, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000>
RK816: <450, 80, 850, 1000, 1250, 1500, 1750, 2000>
```

Note that the 2nd level is 80, not 800! Generally, do not set the 80mA level.

- `max_chrg_current`

Maximum charge current. Currently available levels (unit: mA):

```c
RK818: <1000, 1200, 1400, 1600, 1800, 2000, 2250, 2400, 2600, 2800, 3000>
RK816: <1000, 1200, 1400, 1600, 1800, 2000, 2250, 2400>
```

- `max_chrg_voltage`

Maximum charge voltage, i.e., the termination voltage for full charge. Currently available levels (unit: mV):

```c
RK818: <4050, 4100, 4150, 4200, 4250, 4300, 4350>
RK816: <4050, 4100, 4150, 4200, 4250, 4300, 4350>
```

- `sleep_enter_current`

One of the conditions for entering relaxation mode. Currently fill in 300, do not change.

- `sleep_exit_current`

One of the conditions for exiting relaxation mode. Currently fill in 300, do not change.

- `sleep_filter_current`

Used to filter invalid relaxation current. Currently fill in 100, do not change.

- `power_off_thresd` **Please read and understand carefully**

Expected system shutdown voltage, unit: mV. Special note: This value refers to the **instantaneous voltage of VSYS**, not the voltage at the Vbat terminal (but the fuel gauge collects the voltage at the Vbat terminal)!

Principle explanation: The Vbat terminal voltage passes through a MOSFET with a resistance of approximately 50 milliohms (in addition to PCB trace impedance) before being converted to VSYS for the system. Therefore, using VSYS as the shutdown point is correct. From this, we know: for the same Vbat voltage, the larger the current load, the lower the VSYS voltage; conversely, for the same VSYS, the larger the current load, the higher the corresponding Vbat voltage.

RK platform recommends that the VSYS voltage should not fall below 3.4V, as this may cause instability in VCC_IO (3.3V) and other DCDC/LDO power supplies.

- `zero_algorithm_vol`

The voltage value for entering the voltage + coulomb counter discharge mode, unit: mV. Below this value, the software discharge algorithm combining voltage and coulomb counter is used. Recommendation: set to 3850mV for 4.2V batteries, and 3950mV for 4.3V and higher voltage batteries.

- `energy_mode`

Some customers care about curve smoothness, while others care more about whether the battery can be fully discharged. It is difficult to balance both. Therefore, this attribute is reserved. When set to 1, it means to discharge the battery as much as possible; when set to 0, it means to prioritize curve smoothness and reasonableness (e.g., if shutdown is set at 3.4V, shutdown may sometimes occur at 3.5V). The driver has been designed to balance curve smoothness and shutdown voltage point as much as possible. It is recommended to set this to 0. If testing reveals that the shutdown voltage point cannot meet requirements, set it to 1 to try, or directly contact the driver maintainer for optimization.

- `fb_temperature`

Chip thermal protection temperature threshold. There are currently four temperature levels (unit: degrees Celsius):

```c
< 85, 95, 105, 115>
```

Currently, VR selects 115, and all others select 105. If set to 0, the temperature feedback function is disabled. This value is generally only used for troubleshooting (see "1.5 Common Problem Analysis and Troubleshooting"). Under normal use, the temperature feedback function must never be disabled.

- `sample_res`

The size of the sampling resistor near the battery terminal, unit: milliohm. The coulomb counter uses this resistor to determine the current system current. Fill in the actual hardware resistor value. Currently, only 10mR or 20mR is supported.

Note: Only supported by the rk818 battery driver on kernel 4.4. Neither kernel 3.10 driver supports this; the default is 20mR.

- `max_soc_offset`

The maximum capacity error allowed during boot calibration. If the device has been shut down for at least 30 minutes, an ocv table lookup is performed on boot, and compared with the capacity before shutdown. If the deviation exceeds max_soc_offset, a forced calibration is performed, setting the capacity to the true value from the ocv table. For example: the currently displayed capacity is 20%, but the actual capacity calculated from the OCV voltage is 80%. In this case, the displayed capacity is directly set to 80%. This situation usually occurs after a system crash, causing large capacity deviations. The value depends on the customer's acceptable range and is set by the customer. It is recommended not to set this value below 60.

- `monitor_sec`

Polling interval (seconds). The fuel gauge driver requires continuous polling to work properly, involving many I2C read/write operations. However, considering the varying robustness of I2C on different platforms, this configuration option is reserved. Currently, 5~10s is recommended, with 5s being the optimal choice.

- `virtual_power`

Test mode. Sometimes during stress testing, you do not want the system to shut down due to insufficient power caused by battery capacity or charging current. Set this value to 1 to remove the charging current limit, and the system input current is always at max_input_current to meet power supply. In this mode, the driver always reports to Android that it is currently charging, with a capacity of 66%.

- `power_dc2otg`

Whether to support OTG devices getting 5V power from DC. For machines supporting dual-port charging, the hardware circuit supports supplying 5V power to OTG devices directly from DC when DC is plugged in, without requiring additional 5V output from the RK818. Set to 1 if supported; set to 0 if not supported or if there is no DC port.

- `dc_det_gpio`

Specifies the GPIO corresponding to the DC pin. If this function is not available, remove this attribute.

- `dc_det_adc`

Whether to use saradc to detect the DC pin. 1: supported, 0: not supported. Generally, this attribute and "dc_det_gpio" are mutually exclusive.

## Starting Fuel Gauge Development

### Preparation

1. Measure the battery's OCV curve and internal resistance: Each battery has its own voltage-capacity characteristic curve (ocv_table) and internal resistance. RK Shenzhen company can perform these measurements.
2. Fill in the DTS parameters, refer to section 1.5 for correct configuration.
3. Calibrate the battery, refer to section 1.7.
4. Begin normal use.

### Troubleshooting

1. If an anomaly occurs during use, immediately enable debug information and capture the on-site log for analysis;
2. If you think the charge/discharge curve is abnormal, e.g., jumping, too fast/too slow, capture a complete (0~100% or 100%~0%, principle: cover as large a capacity range as possible) charge/discharge log;
3. If you cannot analyze the cause yourself, capture the on-site or reproducible log and submit it to Redmine.
   Note: The captured log must have the fuel gauge debug information enabled!! For some common issues, refer to section 8.

## Battery Calibration

### Battery Calibration Principle

1. After shutdown, the PMIC only turns off the various DCDC/LDOs but does not completely power down; it maintains power-on state with a very low load. The PMIC provides some blank data registers for storing fuel gauge data. Currently, the stored information includes the capacity before shutdown, coulomb counter capacity, and battery full charge capacity (design_capacity). When the fuel gauge driver initializes on each boot, these values are not affected by DTS; instead, they read the data before shutdown and continue using it.
2. To calibrate the above three pieces of information, the PMIC must be completely powered down to clear these data. When completely powered down and then powered back on, the battery's GGSTS_REG[4] ("first power-on") status bit is set. Therefore, this can be achieved by removing the battery.
3. When the battery is reconnected, the driver determines that it is a "first power-on" and all related data is re-read from DTS, calculating the battery capacity, percentage, etc. This gives us a calibrated accurate state.
4. Regarding point 3, note that after removing the battery, you should confirm that polarization is basically eliminated before reconnecting it (let the battery sit to eliminate polarization). Otherwise, the OCV voltage on boot will also be inaccurate. For example: when removing the battery during a high-load discharge, the battery is still in a polarized state, and the voltage will slowly recover. If you reconnect it immediately, the collected OCV voltage will be inaccurate!

**We must ensure:** that the battery is in a state where polarization is basically eliminated during calibration, so that the first OCV voltage after power-on is accurate, and accurate capacity can be obtained.

### Battery Calibration Methods

There are currently two methods for battery calibration, choose one:

Method 1 - Hardware method: Remove the battery for about 10 seconds, then reconnect it;

Method 2 - Software method: Use serial port to perform the following operations:

1. Find the bat node path: `busybox find /sys/ -name bat`, for example, the path is "/sys/rk818/bat"; (if rk816, the path is "/sys/rk816/bat", same below)

2. Execute: `echo m > /sys/rk818/bat`;

3. Read back to confirm: `echo r > /sys/rk818/bat`, the return value's BIT(4) should be 1;

4. Then power off normally, wait at least 30 minutes before powering on again (to get accurate OCV voltage).

Supplement: To clear the operation in step 2, execute: `echo c > /sys/rk818/bat`;

### When Calibration is Needed

1. When the DTS-configured battery capacity has changed;
2. When the capacity is clearly inaccurate (causes may include system crash, certain special non-fuel-gauge stress tests, etc.);
3. Calibrate once before dedicated fuel gauge stress testing to ensure the battery is accurate at the start of testing. This is meaningful (only needs to be calibrated once at the beginning of all tests, not before each case).

## Common Problem Analysis

1. How to enable debug information and capture logs?

   Method 1: Change `static int dbg_enable = 0` on the first line of the driver to 1 before compilation.
   Method 2: If the firmware does not have dbg_enable enabled, you can also toggle it via serial port commands during runtime:
   Enable: `echo 1 > /sys/module/rk818_battery/parameters/dbg_level`
   Disable: `echo 0 > /sys/module/rk818_battery/parameters/dbg_level`

   If rk816, change the node to: `/sys/module/rk816_battery/parameters/dbg_level`

2. Why does the device restart immediately after shutdown when plugged into an adapter or USB, unable to shut down?
   The PMIC chip is designed so that as long as a charger is plugged in, it cannot be shut down.

3. Why does the status indicated by the GGSTS[4] (battery presence) register differ from the actual situation after hot-plugging the battery during operation?
   The PMIC does not support hot-plug battery detection; it only performs one detection when powered on.

4. Why is the shutdown voltage different from the DTS-configured shutdown point, with the device shutting down at a much higher voltage?
   The shutdown voltage is based on the real-time voltage printed in the final log. This shutdown voltage is the VSYS voltage (see section 1.5.2 for details). We need to ensure that the real-time voltage does not fall below the preset shutdown point. After shutdown, the system powers off, and lithium battery polarization gradually disappears, leading to a voltage recovery. This is a characteristic of lithium batteries.

5. Why does the capacity hardly change during stress testing such as power on/off, reboot, and secondary standby, while the voltage gradually drops?

   The driver cannot enter the normal polling working state, so these stress tests are not supported. The QA department and customers do not need to test these three items when performing fuel gauge testing.

6. Why is the charging current always very small when the battery charger is connected?

   a) Check if the charging cable quality is poor with high impedance, causing the actual VBUS voltage to be far below 5V. Try using an external regulated power supply with appropriately increased voltage to observe if the current increases;

   b) Enter the screen-off state (primary standby) and observe if the charging current increases to determine whether it is related to operating power consumption;

   c) A nearly full battery will definitely have a small charging current, so note the battery voltage;

   d) Under high temperature and high load conditions, the PMIC temperature may rise, triggering input current limiting. First, increase the feedback temperature (fb_temperature) to see if it helps. If not, directly disable temperature control (set fb_temperature to 0).

7. Why does the capacity change after removing and reinserting the battery? Our requirement is that the capacity should not jump after battery removal. Can this be satisfied?
   a) When the battery is removed, the PMIC is completely powered off. On the next power-on, it can only use OCV voltage to query ocv_table to derive capacity. This is normal and is a battery recalibration;
   b) Is it possible to prevent the capacity from jumping after removal? Almost impossible, unless the software performs avoidance: write the capacity before shutdown to a file, and read it after power-on. If the customer requires this, they need to add this avoidance code themselves.

8. The PMIC has a temperature feedback function to adjust the input current. How can we know the internal temperature of the PMIC at this time?
   There is no way to know. This function was not provided in the design.

9. Why is the current printed in the log so unreasonable, with reversed sign or a value far from the actual current?

   Confirm that a 20/10 milliohm sampling resistor is used with sufficient precision; secondly, ensure the solder joints are clean. The sampling resistor should be placed between BAT- and GND.

10. Why does it report finish when the battery is not yet full, e.g., only at 3.9V?
    Generally, it is due to poor battery quality and an excessively large configured maximum charging current, causing the battery board to trigger self-protection, thereby causing the PMIC to falsely report the finish state.

11. Why does the current value fluctuate around zero (with small values) in the finish state?
    This is the current zero-point error after full charge. It is not a concern.

12. Why does the displayed capacity show only around 90% instead of 100% when finish is reported?
    Since the coulomb counter has cumulative error, and charging termination is completed by hardware, there is some error between the two. It is impossible to precisely capture the timing of the finish signal. Therefore, this situation is normal. The software will handle this by gradually approaching 100% capacity. End users will not notice this, so there is no usage issue.

13. Why is the fuel gauge capacity so inaccurate during operation, differing so much from the ocv_table value?
    Conceptual confusion. The ocv_table is the voltage-capacity ratio under open circuit (no-load) conditions, and we only use this table during boot calibration and sleep calibration. Therefore, such a comparison is meaningless and does not hold in principle.

14. Is it supported to replace the battery with a different specification?
    Not supported. If the battery is changed, parameters such as the OCV curve, internal resistance, and capacity need to be retested and filled in.

15. What are the conditions for the PMIC to determine that the battery is fully charged?
    Three conditions must be met simultaneously: voltage reaches the termination voltage, current reaches the finish current, and no input current limit occurs.

16. Why does the battery icon always show 50% charging?
    Disable the test_power driver.

17. Why does the battery icon always show 66% charging?
    No battery is currently connected; or the DTS virtual_power is configured as 1. Configure it as 0.

18. Why is charger plug/unplug not detected?

    a) Kernel 4.4:
       rk818_charger.c is responsible for charger detection. USB charger and OTG device plug/unplug depend on the USB notification chain. Check the serial log for "rk818-charger: recieve xxx notifier event: xxx" messages. If not present, the USB notification chain was not registered successfully (unlikely), or there is a USB driver issue.

    b) Kernel 3.10:
       rk818_battery.c is responsible for charger detection (including battery capacity). USB charger and OTG device plug/unplug depend on the USB notification chain. Check the serial log for "rk818-bat: recieve xxx notifier event: xxx" messages. If not present, the USB notification chain was not registered successfully (unlikely), or there is a USB driver issue.
