# RK3399 System Suspend Configuration Guide

ID: RK-KF-YF-120

Release Version: V1.0.0

Date: 2020-07-08

Security Level: □Top-Secret □Secret □Internal ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2020 Rockchip Electronics Co., Ltd.**

Without the Company's written permission, no individual or entity may extract or copy part or all of the content of this document, or distribute it in any form, beyond the scope of fair use.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: www.rock-chips.com

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document is used to guide users on how to configure the RK3399 system suspend mode according to product requirements.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | :---------------- |
| RK3399        | 4.4, 4.19         |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Revision Description** |
| ---------- | ----------- | ---------- | ----------------------- |
| 2020-07-08 | V1.0.0      | Xu Shengfei | Initial version         |

---

[TOC]

---

## System Suspend

For all SoC platforms with trust, system suspend work is completed in trust. Since the trust implementation for system suspend varies across platforms, **the suspend configuration options/methods between different platforms have no correlation or reference value. This document applies only to the RK3399 platform**.

The system suspend flow typically involves the following operations: powering down power domains, clocks, PLLs, DDR entering self-refresh, system bus switching to a low-speed clock (24M or 32K), controlling PMIC to enter sleep mode, configuring wake-up sources, etc. To meet different product requirements for suspend modes, relevant configurations are currently passed to trust at boot time through DTS nodes.

### Driver Files

```
./drivers/soc/rockchip/rockchip_pm_config.c
./drivers/firmware/rockchip_sip.c
./include/dt-bindings/suspend/rockchip-rk3399.h
```

### DTS Node

```c
rockchip_suspend: rockchip-suspend {
	compatible = "rockchip,pm-rk3399";
	status = "okay";
	// General configuration
	rockchip,sleep-mode-config = <
		(0
		| RKPM_SLP_ARMPD
		| RKPM_SLP_PERILPPD
		| RKPM_SLP_DDR_RET
		| RKPM_SLP_CENTER_PD
		)
	>;
	// Wake-up source configuration
	rockchip,wakeup-config = <
		(0
		| RKPM_GPIO_WKUP_EN
		)
	>;
	// Power configuration
	rockchip,pwm-regulator-config = <
		(0
		| PWM2_REGULATOR_EN
		)
	>;
	// Corresponding APIO power-off
	rockchip,apios-suspend = <
		(0
		| RKPM_APIOxxx
		)
	>;
	// Sleep control GPIO level, turn off corresponding power supply
	rockchip,power-ctrl =
                <&gpioX RK_PXX GPIO_ACTIVE_HIGH>;
};
```

## DTS Configuration

Supported configuration options are defined in:

```
./include/dt-bindings/suspend/rockchip-rk3399.h
```

### General Configuration

Configuration item:

```
rockchip,sleep-mode-config = <...>;
```

Configuration sources:

```c
// Suspend CPU in WFI state, used only for debugging
#define RKPM_SLP_WFI                            (1 << 0)
// Suspend cpu_pd power down
#define RKPM_SLP_ARMPD                          (1 << 1)
// Suspend perilp_pd power down
#define RKPM_SLP_PERILPPD                       (1 << 2)
// Suspend DDR enters self-refresh and stays in retention state
#define RKPM_SLP_DDR_RET                        (1 << 3)
// Suspend PLL power down
#define RKPM_SLP_PLLPD                          (1 << 4)
// Suspend OSC disable, system clock switches to 32K
#define RKPM_SLP_OSC_DIS                        (1 << 5)
// Suspend center_pd power down
#define RKPM_SLP_CENTER_PD                      (1 << 6)
// Suspend AP_OFF is pulled high to control PMIC or other discrete power supplies entering sleep
#define RKPM_SLP_AP_PWROFF                      (1 << 7)
```

### Power Configuration

Configuration item:

```
rockchip,pwm-regulator-config = <...>;
```

Configuration sources:

```c
// Use pwm-regulator
#define PWM0_REGULATOR_EN                       (1 << 0)
#define PWM1_REGULATOR_EN                       (1 << 1)
#define PWM2_REGULATOR_EN                       (1 << 2)
#define PWM3A_REGULATOR_EN                      (1 << 3)
#define PWM3B_REGULATOR_EN                      (1 << 4)
```

Power notes:

- Determine whether to use pwm-regulator based on external hardware circuit design; must correspond to hardware.

### Wake-up Configuration

Configuration item:

```
rockchip,wakeup-config = <...>;
```

Configuration sources:

```c
// Support all interrupt wake-up
#define RKPM_CLUSTER_L_WKUP_EN                  (1 << 0)
// Support all interrupts designated to big core wake-up
#define RKPM_CLUSTER_B_WKUPB_EN                 (1 << 1)
// Support GPIO wake-up
#define RKPM_GPIO_WKUP_EN                       (1 << 2)
// Support SDIO wake-up
#define RKPM_SDIO_WKUP_EN                       (1 << 3)
// Support SDMMC wake-up
#define RKPM_SDMMC_WKUP_EN                      (1 << 4)
// Support TIMER wake-up
#define RKPM_TIMER_WKUP_EN                      (1 << 6)
// Support USB plug/unplug wake-up
#define RKPM_USB_WKUP_EN                        (1 << 7)
// Support SOFTWARE wake-up
#define RKPM_SFT_WKUP_EN                        (1 << 8)
// Support WDT wake-up
#define RKPM_WDT_M0_WKUP_EN                     (1 << 9)
// Support TIMEOUT wake-up, generally used for debugging
#define RKPM_TIME_OUT_WKUP_EN                   (1 << 10)
// Support PWM wake-up
#define RKPM_PWM_WKUP_EN                        (1 << 11)
// Support PCIE wake-up
#define RKPM_PCIE_WKUP_EN                       (1 << 13)
// Support USB protocol wake-up
#define RKPM_USB_LINESTATE_WKUP_EN              (1 << 14)
```

Wake-up source notes:

   Interrupts that do not have enable_irq_wake() registered with GIC in the kernel stage cannot wake up the system.

### Debug Configuration

Configuration item:

```
rockchip,sleep-debug-en = <...>;
```

Debug notes:

- Set to 1 to enable debug functionality. During suspend/resume, it will print ATF suspend and resume logs.

### APIO Power-off Configuration

Configuration item:

```
rockchip,apios-suspend = <...>;
```

Configuration sources:

```c
/* APIO voltage domain */
#define RKPM_APIO0_SUSPEND                      (1 << 0)
#define RKPM_APIO1_SUSPEND                      (1 << 1)
#define RKPM_APIO2_SUSPEND                      (1 << 2)
#define RKPM_APIO3_SUSPEND                      (1 << 3)
#define RKPM_APIO4_SUSPEND                      (1 << 4)
#define RKPM_APIO5_SUSPEND                      (1 << 5)
```

APIO configuration notes:

RK3399 GPIOs are divided into APIO1~APIO5. If the hardware circuit supports it, APIO can be powered off independently during suspend.

### GPIO Controlled Power Supply

Configuration item:

```
rockchip,power-ctrl = <...>
```

Configuration example:

```c
// Pull GPIO1_C1 high during suspend to control external power-off
rockchip,power-ctrl = <&gpio1 RK_PC1 GPIO_ACTIVE_HIGH>,
```

## Print Information

The following briefly introduces the meaning of trust print information during system suspend and wake-up. For annotation convenience, some print content is separated by lines. Different suspend power modes also produce different prints. All print information is subject to actual display.

**RK3399 System Suspend Print:**

```c
// Suspend mode
INFO:    sleep mode config[0xde]:
INFO:           AP_PWROFF
INFO:           SLP_ARMPD
INFO:           SLP_PLLPD
INFO:           DDR_RET
INFO:           SLP_CENTER_PD
// Supported wake-up sources
INFO:    wakeup source config[0x804]:
INFO:           GPIO interrupt can wakeup system
INFO:           PWM interrupt can wakeup system
// PWM regulators to control during suspend
INFO:    PWM CONFIG[0x4]:
INFO:           PWM: PWM2D_REGULATOR_EN
// APIOs to control during suspend
INFO:    APIOS info[0x0]:
INFO:           not config
// GPIO-controlled power supplies
INFO:    GPIO POWER INFO:
INFO:           GPIO1_C1
INFO:           GPIO1_B6
// Suspend mode register value
INFO:    PMU_MODE_CONG: 0x1466bf51
```

**RK3399 System Wake-up Print:**

```c
// Wake-up print
INFO:    RK3399 the wake up information:
INFO:    wake up status: 0x4
INFO:           GPIO interrupt wakeup
INFO:           GPIO0: 0x0
INFO:           GPIO1: 0x200000
INFO:           GPIO2: 0x0
INFO:           GPIO3: 0x0
INFO:           GPIO4: 0x0
// Wake-up source
GPIO interrupt wakeup
gpio1_c5 interrupt wakes up the system
```
