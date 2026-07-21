# Rockchip FreeRTOS TIMER

ID: RK-KF-YF-072

Release Version: V1.0.0

Date: 2019-12-13

Security Level: Public

---

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip.

All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, neither any entity nor individual shall extract, copy, or distribute this document in any form in whole or in part without the written approval of Rockchip.

Fuzhou Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel:  +86-4007-700-590

Customer service Fax:  +86-591-83951833

Customer service e-Mail:  [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly describes the principle and usage of the ROCKCHIP FreeRTOS TIMER.

**Product Version**

| **Chip Name** | **Kernel Version**    |
| ------------ | --------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author** | **Date** | **Change Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Lin Dingqiang | 2019-12-13 | Initial version     |

**Table of Contents**

---
[TOC]
---

## **1 TIMER**

### **1.1 Principle**

The timer is a programmable timer peripheral. This component is an APB slave device.

The Timer driver under FreeRTOS implements the following functions:

- Set the timer as free running, trigger an interrupt at a fixed period, and call the registered callback function
- Based on us as the scale, set the timer period and obtain the time information of the timer count register (incrementing clock: obtain elapsed time; decrementing clock: obtain remaining time)
- Based on the timer clock as the scale, set the timer period and obtain the time information of the timer count register (no distinction between incrementing and decrementing)

### **1.2 Configuration**

Macro configuration:

```c
    BSP Driver  --->
        [*] Enable TIMER
```

### **1.3 Code and Function Interfaces**

**Code**

"src/driver/timer/TimerDevice.c"
"include/driver/TimerDevice.h"

**All Public Function Interfaces**

```c
void TimerIntIsr(uint32 devID);
__irq void TimerIntIsr0(void);
__irq void TimerIntIsr1(void);
__irq void TimerIntIsr2(void);
__irq void TimerIntIsr3(void);
__irq void TimerIntIsr4(void);
__irq void TimerIntIsr5(void);
__irq void TimerIntIsr6(void);
rk_err_t TimerDev_Start(HDC dev);
rk_err_t TimerDev_Stop(HDC dev);
rk_err_t TimerDev_SetTimeCount(HDC dev, uint64 cnt);
uint64_t TimerDev_GetTimeCount(HDC dev);
rk_err_t TimerDev_Register(HDC dev, uint64 usTick, pFunc TimerCallBack);
rk_err_t TimerDev_PeriodSet(HDC dev, uint64 usTick);
rk_err_t TimerDev_UnRegister(HDC dev);

rk_err_t TimerDev_Task_Init(void *pvParameters, void *arg);
rk_err_t TimerDev_Task_DeInit(void *pvParameters);
void TimerDev_Task_Enter(void *pvParameters);

HDC TimerDev_Create(uint8 DevID, void *arg);
rk_err_t TimerDev_Delete(uint8 DevID, void *arg);
```

**Create/Delete Device Interface**

```c
HDC TimerDev_Create(uint8 DevID, void *arg);
rk_err_t TimerDev_Delete(uint8 DevID, void *arg);
```

Where the arg parameter currently has no practical meaning and does not need to be passed.

**Timer General Interface**

Timer interrupt handler functions:

```c
void TimerIntIsr(uint32 devID);  /* General Timer interrupt handler */
__irq void TimerIntIsr0(void);  /* Timer0 interrupt handler */
__irq void TimerIntIsr1(void);  /* Timer1 interrupt handler */
__irq void TimerIntIsr2(void);  /* Timer2 interrupt handler */
__irq void TimerIntIsr3(void);  /* Timer3 interrupt handler */
__irq void TimerIntIsr4(void);  /* Timer4 interrupt handler */
__irq void TimerIntIsr5(void);  /* Timer5 interrupt handler */
__irq void TimerIntIsr6(void);  /* Timer6 interrupt handler */
```

Register the clock device as a timer:

```c
rk_err_t TimerDev_Register(HDC dev, uint64 usTick, pFunc TimerCallBack); /* The callback function can be NULL */
rk_err_t TimerDev_UnRegister(HDC dev);
```

Adjust timer parameters and obtain timer information:

```c
rk_err_t TimerDev_CountSetReloadNum(HDC dev, uint64 cnt); /* Adjust the timer period based on the Timer clock */
uint64_t TimerDev_CountGetCurNum(HDC dev);
rk_err_t TimerDev_PeriodSetReloadVal(HDC dev, uint64 usTick); /* Adjust the timer period based on us */
uint64 TimerDev_PeriodGetCurVal(HDC dev);
```

Enable/disable the timer:

```c
rk_err_t TimerDev_Start(HDC dev);
rk_err_t TimerDev_Stop(HDC dev);
```

### Function Interface Call Example

Refer to shell_timer.c.

### **1.5 Shell Usage Example**

**Create Device**

```c
timer.create <timer devid>   /* e.g.: timer.create 0 */
```

**Test Timer Function**

```c
timer.test <timer devid> <period in us> /* e.g. timer.test 0 1000000  */
```
