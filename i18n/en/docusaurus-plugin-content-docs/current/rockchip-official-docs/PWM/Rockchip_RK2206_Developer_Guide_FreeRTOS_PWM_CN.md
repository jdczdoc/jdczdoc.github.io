# Rockchip RK2206 PWM Development Guide

ID: RK-KF-YF-064

Release Version: V1.0.0

Date: 2019-12-03

Security Level: Public

---

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the configuration and usage of the RK2206 PWM.

**Product Versions**

| **Chip Name** | **Kernel Version**         |
| -------- | ---------------- |
| RK2206   | FreeRTOS V10.0.1 |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author** | **Revision Date** | **Description** |
| ------- | -------- | :--------- | -------- |
| V1.0.0  | David.Wu | 2019-12-03 | Initial version |

**Table of Contents**

---

[TOC]

---

## PWM Bus Interface Purpose

Pulse Width Modulation (PWM) is very common in embedded systems. It is a very effective technique for controlling analog circuits using a microprocessor's digital output, widely used in many fields from measurement and communication to power control and conversion.
Rockchip PWM supports three modes: Continuous mode, One-shot mode, and Capture mode. One PWM controller has 4 built-in channels.

## PWM Configuration

### menuconfig Configuration

In menuconfig, check DRIVER_PWM for the controller driver, and simultaneously check the PWM controller(s) to be used based on the current hardware situation. Multiple selections are allowed.

```c
    BSP Driver  --->
        [*] Enable PWM
```

For example, to select the PWM1 controller:

```c
[ ]  Enable PWM0 (NEW)
[*]  Enable PWM1
[ ]  Enable PWM2 (NEW)
```

If shell test commands need to be used for testing, check the PWM test shell:

```c
    Components Config --->
        Command shell  --->
            [*] Enable PWM Shell
```

### Board-Level File Configuration

For board-level configuration, modify the PwmDevHwInit() function in the board.c file of the corresponding project. The main task is iomux configuration. Note that one PWM channel may have several iomux options (m0, m1...). Select the correct configuration based on the actual hardware schematic.

```c
void PwmDevHwInit(uint32 DevID)
{
    switch (DevID)
    {
    case PWM_DEV0:
        break;
    case PWM_DEV1:
        iomux_config_pwm7_m1();
        break;
    case PWM_DEV2:
        break;
    default:
        break;
    }
}
```

Here, pwm0~pwm3 pins correspond to the four pins of the four channels of the first PWM controller, pwm4~pwm7 represent the second, and so on.

## Code and API Usage

### Code Location

- Controller driver layer code: ./src/driver/pwm/PwmDevice.c
- Controller HAL layer code: ./src/bsp/hal/lib/hal/src/hal_pwm.c
- PWM shell test code: ./src/subsys/shell/shell_pwm.c

### PWM API Interfaces

```c
extern rk_err_t PwmDev_Control(HDC dev, RK_PWM_CMD cmd, void *arg);
extern rk_err_t PwmDev_Write(HDC dev);
extern rk_err_t PwmDev_Read(HDC dev);
extern rk_err_t PwmDev_Delete(uint8 DevID, void *arg);
extern HDC PwmDev_Create(uint8 DevID, void *arg);
extern void PwmDevHwInit(uint32 DevID);
extern void PwmDevHwDeInit(uint32 DevID);
```

### API Interface Usage

#### Creating a PWM Instance

Use PwmDev_Create() to create, and rkdev_open() to obtain the PWM device. You can first find before this action. If it has already been created, it can be used directly. For example:

```c
    pwm_dev = rkdev_find(DEV_CLASS_PWM, DevID);
    if (pwm_dev == NULL)
    {
        rkdev_create(DEV_CLASS_PWM, DevID, NULL);
        pwm_dev = rkdev_open(DEV_CLASS_PWM, DevID, NOT_CARE);
        if (pwm_dev == NULL)
        {
            shell_output(dev, "\r\n Can't find pwm%d dev", DevID);
            return RK_ERROR;
        }
    }
```

#### PWM Configuration

Call PwmDev_Control() to configure the PWM duty cycle, period, and polarity.
Continuous mode configuration:

```c
RK_PWM_CONFIG *config

config->channel = channel; //channel number
config->period = period; //PWM period time, unit ns
config->pulse = duty; //Duty time, unit ns

if (polarity) //pwm polarity
    polarity = RK_PWM_POLARITY_INVERTED;

config->polarity = polarity;
PwmDev_Control(g_pwm_dev, RK_PWM_CMD_SET, config);
```

One-shot mode configuration. The previous configuration is the same as Continuous mode, with an additional count configuration.

```c
RK_PWM_ONESHOT_CONFIG oneshot_config;
RK_PWM_CONFIG *config = &oneshot_config.config;

config->channel = channel; //channel number
config->period = period; //pwm period time, unit ns
config->pulse = duty; //Duty time, unit ns

if (polarity) //pwm polarity
    polarity = RK_PWM_POLARITY_INVERTED;

config->polarity = polarity;
oneshot_config.count = count;
PwmDev_Control(g_pwm_dev, RK_PWM_CMD_SET_ONESHOT, &oneshot_config);
```

In principle, configure PWM first, then enable.

#### PWM On/Off

Enable:

```c
RK_PWM_ENABLED_CONFIG config;

config.channel = channel; //channel number
config.mode = mode;
PwmDev_Control(g_pwm_dev, RK_PWM_CMD_ENABLE, &config);
```

Disable:

```c
PwmDev_Control(g_pwm_dev, RK_PWM_CMD_DISABLE, channel);
```

## SHELL Test and Output

### PWM Continuous Mode Test

The configuration command takes the following inputs in order: pwm device number, pwm channel number, period ns, duty ns, polarity (1 for negative, 0 for positive). The following example tests channel 3 of the pwm1 controller, frequency 10K, duty cycle 50%, negative polarity.
First configure:

```c
RK2206>pwm_test set pwm1 3 100000 50000 1
```

Then enable the pwm. Enter in order: pwm device number, pwm channel number, PWM mode (0:Continuous Mode, 1:Oneshot Mode, 2:Capture Mode)

```c
RK2206>pwm_test enable pwm1 3 0
```

### PWM One-shot Mode Test

The configuration command takes the following inputs in order: pwm device number, pwm channel number, period ns, duty ns, polarity (1 for negative, 0 for positive), count. The following example tests channel 0 of the pwm0 controller, frequency 100K, duty cycle 20%, positive polarity, count 10 (outputs 10+1 waveforms).
First configure:

```c
RK2206>pwm_test set pwm0 0 10000 2000 0 10
```

Then enable the pwm. Enter in order: pwm device number, pwm channel number, PWM mode (0:Continuous Mode, 1:Oneshot Mode, 2:Capture Mode)

```c
RK2206>pwm_test enable pwm0 0 1
```
