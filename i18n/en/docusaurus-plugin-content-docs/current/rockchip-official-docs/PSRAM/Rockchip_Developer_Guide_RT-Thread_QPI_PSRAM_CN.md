# Rockchip RT-Thread QPI PSRAM

ID: RK-KF-YF-131

Release Version: V1.0.0

Date: 2020-10-28

Security Level: □Top-Secret □Secret □Internal ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2020 Rockchip Electronics Co., Ltd.**

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

This document mainly describes the principles and usage of ROCKCHIP RT-Thread SPI / QPI Psram (hereinafter referred to as QPI Psram).

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------------------------------- | ------------ |
| All chip products using RK RT-Thread SDK | RT-Thread    |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers
Software Development Engineers

---

**Revision History**

| **Version** | **Author** | **Modification Date** | **Revision Description** |
| ----------- | ---------- | :------------------- | ------------------------ |
| V1.0.0      | Lin Dingqiang | 2020-10-28         | Initial version           |

---

**Table of Contents**

[TOC]

---

## Introduction

### Supported Devices

QPI Psram, a pseudo-static memory, has the following features:

* Supports up to 4 I/O pins, operating in SPI (Serial Peripheral Interface) or QPI (Quad Peripheral Interface) mode;
* Frequency up to 144 MHz;
* Integrated self-refresh mechanism.

### Controller

RK platforms support QPI Psram devices through FSPI and SPI controllers.

FSPI (Flexible Serial Peripheral Interface) is a flexible serial transmission controller with the following main features:

* Supports SPI Nor, SPI Nand, SPI protocol Psram and SRAM
* Supports QPI Psram 1-wire, 2-wire, and 4-wire transmission
* XIP technology
* DMA transfer

SPI (Serial Peripheral Interface) is a general-purpose serial transmission controller that supports external SPI Nor, SPI Nand, and QPI Psram (1-wire data transfer only).

### XIP Technology

XIP (eXecute In Place) means that the CPU directly fetches instructions from the memory space through the mapped address, i.e., the application can run directly in the flash memory without having to read the code into system RAM first. Therefore, the run address of in-place execution code is the corresponding mapped address.

For QPI Psram, XIP technology makes it behave like SRAM, meaning the bus or other masters can directly access QPI Psram, supporting both read and write operations.

In addition to CPU XIP access to QPI Psram, FSPI also supports other modules such as DSP to obtain QPI Psram data in a similar way, like accessing SRAM. For detailed FSPI information, refer to the FSPI chapter in the TRM.

### Driver Framework

The entire driver framework is divided into four layers:

* Psram framework layer
* RTOS Driver layer, completing the following logic:
  * RTOS device framework
  * Register controller and operation interfaces to the HAL_QPIPSRAM protocol layer
  * Encapsulate read/write/erase interfaces for users
* HAL_QPIPSRAM protocol layer based on QPI Psram transfer protocol
* Controller layer

**RT-Thread implementation based on FSPI controller**:

* OS driver layer: drv_qpipsram.c implements:
  * Encapsulate SPI_Xfer based on FSPI HAL layer read/write interfaces, register FSPI host and SPI_Xfer to the HAL_QPIPSRAM protocol layer
  * Encapsulate read/write/erase interfaces provided by the HAL_QPIPSRAM protocol layer
  * Register OS device driver to the MTD framework layer
* Protocol layer: hal_qpipsram.c in the HAL package implements the QPI Psram protocol layer
* Controller layer: hal_fspi.c in the HAL package implements the FSPI controller driver code

**RT-Thread implementation based on SPI controller**:

* OS driver layer: drv_qpipsram.c implements:
  * Encapsulate SPI_Xfer based on SPI OS driver read/write interfaces, register SPI host and SPI_Xfer to the HAL_QPIPSRAM protocol layer
  * Encapsulate read/write/erase interfaces provided by the HAL_QPIPSRAM protocol layer
  * Register OS device driver to the Psram framework layer
* Protocol layer: hal_qpipsram.c in the HAL package implements the QPI Psram protocol layer
* Controller layer: hal_spi.c in the HAL package implements the SPI controller low-layer driver code; SpiDevice.c implements RTOS SPI DRIVER device registration and interface encapsulation

Note:

1. Since RK SPI DMA transfer related code is in the OS Driver layer, and the SPI controller is also used for many other devices besides QPI Psram, there is hardware resource boundary protection. Therefore, the SPI controller in the QPI Psram framework should not directly use the HAL layer hal_spi.c driver but should use the SPI interface from the OS Driver.

## Configuration

Before configuration, determine the controller type corresponding to the selected QPI Psram in the hardware to choose the appropriate solution.

### FSPI Controller Solution

General configuration:

```
RT-Thread rockchip common drivers  --->
    [*] Enable ROCKCHIP QPI Psram  --->
    (80000000) Reset the speed of QPI Psram in Hz
    Choose QPI Psram Adapter (Attach FSPI controller to QPI Psram)  --->
      Attach FSPI controller to QPI Psram
    [*]       Extend QPI Psram on FSPI cs1
    [*]         Extend QPI Psram on FSPI cs1 with cs-gpio
    [*]       Extend QPI Psram on FSPI cs2
    [*]         Extend QPI Psram on FSPI cs2 with cs-gpio
    [*]       Extend QPI Psram on FSPI cs3
    [*]         Extend QPI Psram on FSPI cs3 with cs-gpio
```

cs-gpio extension configuration:

cs-gpio extension is a solution for mounting multiple QPI Psram devices on the FSPI controller using GPIO to simulate CS.

1. defconfig configuration reference:

   ```
   +CONFIG_RT_USING_QPIPSRAM=y
   +CONFIG_RT_QPIPSRAM_SPEED=133000000
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST=y
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS1=y
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS1_GPIO=y		/* Extend gpio as cs1 */
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS2=y
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS2_GPIO=y		/* Extend gpio as cs2 */
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS3=y
   +CONFIG_RT_USING_QPIPSRAM_FSPI_HOST_CS3_GPIO=y		/* Extend gpio as cs3 */
   ```

2. Add cs-gpio related function implementation (required):

    Function references are already declared in drv_qpipsram.c.

    Function name requirements:

    ```c
    void rt_hw_qpipsram_cs##ID##_gpio_take(void) // (##ID## corresponds to cs).
    {
        // to-do;
    }
    void rt_hw_qpipsram_cs##ID##_gpio_release(void)
    {
        // to-do;
    }
    ```

    Taking GPIO1_C0 simulating cs1 as an example, add the following functions in the corresponding iomux.c:

    ```c
    RT_UNUSED void rt_hw_qpipsram_cs1_gpio_init(void)
    {
        HAL_PINCTRL_SetIOMUX(GPIO_BANK1,
                             GPIO_PIN_C0,
                             PIN_CONFIG_MUX_FUNC0);
        HAL_GPIO_SetPinDirection(GPIO1, GPIO_PIN_C0, GPIO_OUT);
        HAL_GPIO_SetPinLevel(GPIO1, GPIO_PIN_C0, GPIO_HIGH);
    }

    RT_UNUSED void rt_hw_qpipsram_cs1_gpio_take(void)
    {
        HAL_GPIO_SetPinLevel(GPIO1, GPIO_PIN_C0, GPIO_LOW);
    }

    RT_UNUSED void rt_hw_qpipsram_cs1_gpio_release(void)
    {
        HAL_GPIO_SetPinLevel(GPIO1, GPIO_PIN_C0, GPIO_HIGH);
    }
    ```

3. Add cs-gpio initialization in iomux.c

    ```c
    void rt_hw_iomux_config(void)
    {
    	...
    #ifdef RT_USING_QPIPSRAM_FSPI_HOST_CS1_GPIO
        rt_hw_qpipsram_cs1_gpio_init();
    #endif
    }
    ```

4. Adjust IO drive strength

    Since FSPI multi-chip select involves IO multiplexing, at high speeds the IO may not be driven properly, requiring increased drive strength.

5. Driver mount success indication

    RK QPI Psram driver mounts each cs's psram separately onto the device driver framework. For example, psram0 is the device on cs0, psram1 is the device on cs1.

Notes:

1. Devices using cs-gpio can only be accessed through the Psram framework layer interface; XIP access is not supported.

### SPI Controller Solution

```
RT-Thread rockchip common drivers  --->
    [*] Enable ROCKCHIP QPI Psram  --->
    (50000000) Reset the speed of QPI Psram in Hz
    Choose QPI Psram Adapter (Attach SPI controller to QPI Psram)  --->
      Attach SPI controller to QPI Psram
    (spi2_0)  the name of the SPI device which is used as QPIPSRAM adapter (NEW)
```

```
RT-Thread rockchip RK2108 drivers  --->
        Enable SPI  --->
        [*] Enable SPI2 /* Configure corresponding SPI controller */
```

## XIP Access

As introduced earlier, XIP functionality is enabled. If the following conditions are met, the driver automatically enables XIP functionality, allowing the CPU or some masters to read/write QPI Psram directly through the XIP map address:

* FSPI controller solution is selected
* The cs corresponding to the QPI Psram device is FSPI_CS, not a GPIO-simulated chip select

## Function Interface Call Example

There is a Psram framework layer above the QPI Psram driver.

Code:

```c
drv_psram.c/h
```

Main interfaces:

```c
rt_size_t rk_psram_read(struct rk_psram_device *dev, rt_off_t pos, rt_uint8_t *data, rt_size_t size);  /* Read interface */
rt_size_t rk_psram_write(struct rk_psram_device *dev, rt_off_t pos, const rt_uint8_t *data, rt_size_t size);  /* Write interface */
rt_err_t rk_psram_suspend(void); /* Suspend all mounted Psram devices */
rt_err_t rk_psram_resume(void);  /* Resume all mounted Psram devices */
```

For specific call interfaces, refer to psram_test.c.

## Test Driver

It is recommended to include the following test procedure in the QPI Psram development process to perform simple read/write test validation.

### Test Driver Configuration

```
    RT-Thread bsp test case  --->
        RT-Thread Common Test case  --->
            [*] Enable BSP Common TEST
            [*]   Enable BSP Common PSRAM TEST (NEW)
```

If configured successfully, the psram_test command will be available in msh.

### Device Mount Success

```
msh />list_device
device           type         ref count
-------- -------------------- ----------
...
psram3   Character Device     0    /* QPI Psram mounted on FSPI cs3 */
psram2   Character Device     0    /* QPI Psram mounted on FSPI cs2 */
psram1   Character Device     0    /* QPI Psram mounted on FSPI cs1 */
psram0   Character Device     0    /* QPI Psram mounted on FSPI cs0, mounted on SPI device */
...
```

### Test Commands

Enter the command psram_test for detailed instructions. All command units are in bytes.

```
1. psram_test dev write offset size loop
2. psram_test dev read offset size loop
3. psram_test dev stress offset size loop
4. psram_test dev suspend(code should be place in sram)
5. psram_test dev resume(code should be place in sram)
6. psram_test dev read_test offset loop
like:
        psram_test psram0 write 2097152 4096 2000
        psram_test psram0 read 2097152 4096 2000
        psram_test psram0 stress 2097152 2097152 5000
        psram_test psram0 suspend
        psram_test psram0 resume
        psram_test psram0 read_test 0 1000
```

Typical usage, the following command performs a simple test on the corresponding QPI Psram:

```
psram_test psram0 stress 2097152 2097152 1
```
