# Rockchip RK2206 Secure Digital IO

ID: RK-KF-YF-049

Release Version: 1.0.0

Date: 2019-11-29

Security Level: Public

---

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("COMPANY") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

DUE TO PRODUCT VERSION UPGRADES OR OTHER REASONS, THIS DOCUMENT MAY BE UPDATED OR MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" are registered trademarks of the Company and owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved. ©2019 Fuzhou Rockchip Electronics Co., Ltd.**

Fuzhou Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

 **Preface**

 **Overview**

This document mainly describes the configuration and usage of the RK2206 SDIO.

**Product Versions**

| **Chip Name** | **Kernel Version**     |
| ------------ | ---------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical support engineers

Software development engineers

 **Revision History**

| **Date**   | **Version** | **Author**  | **Change Description** |
| ---------- | -------- | :-------- | ------------ |
| 2019-11-26 | V1.0.0   | Shawn Lin | Initial version |

---

## **Table of Contents**

[TOC]

---

## **1 SDIO (Secure Digital IO)**

### **1.1 Purpose**

Used as an external bus for connecting slave devices. Supported peripheral types include SD/TF cards, SDIO function devices (common Wi-Fi, BT, etc.), MMC (Multi-media card), eMMC (embedded MMC).

### **1.2 Configuration**

First, enable the controller driver DRIVER_SDMMC

```c
    BSP Driver  --->
        [*] Enable SDMMC
```

Select the corresponding protocol stack according to the required external device (to reduce code size, select as needed):

```c
    BSP Driver  --->
       [*] Enable SD
       [*] Enable SDIO
       [*] Enable EMMC
```

If shell test commands are needed for testing, enable the corresponding test tools:

```c
    Components Config --->
        Command shell  --->
            [*] Enable Sdmmc Shell
            [*] Enable SD Card Shell
            [*] Enable Sdio Shell
            [*] Enable Emmc Shell
```

If board-level configuration needs to be modified, please modify the board.c file of the corresponding project.

```c
INIT API void SdMmcDevHwInit(uint32 DevID, uint32 Channel, struct HAL_MMC_HOST *host)
{
    if (DevID != 0)
    {
        rk_printf("%s invalid DevID\n", __func__);
        return;
    }

    ClkEnableById(HCLK_SDMMC_GATE);
    ClkEnableById(CLK_SDMMC_DT50_GATE);
    /* To modify the interface frequency, set 2 times the frequency value. Currently works at 48MHz */
    ClkSetRate(CLK_SDMMC, 96000000);

    host->pReg = (struct MMC_REG *)SDMMC_BASE;
    host->irq = SD_MMC_IRQn;

    iomux_config_sdmmc();
    GRF->SOC_CON15 = GRF_SOC_CON15_GRF_SARADC_IEN_MASK << 16;
    /* Currently, both sample delay and output delay are set at the first falling edge of the clock, i.e., 90 degrees. Can be modified as needed */
    CRU->SDMMC_CON[0] = CRU_SDMMC_CON00_INIT_STATE_MASK | CRU_SDMMC_CON00_INIT_STATE_MASK << 16;
    CRU->SDMMC_CON[0] = (0x2 << CRU_SDMMC_CON00_DRV_DEGREE_SHIFT) | (CRU_SDMMC_CON00_DRV_DEGREE_MASK << 17);
    CRU->SDMMC_CON[1] = (0x1 << CRU_SDMMC_CON01_SAMPLE_DEGREE_SHIFT) | (CRU_SDMMC_CON01_SAMPLE_DEGREE_MASK << 17);
    CRU->SDMMC_CON[0] = CRU_SDMMC_CON00_INIT_STATE_MASK << 16;

    rk_interrupt_register(host->irq, SdcIntIRQ0);
    rk_interrupt_pending_clear(host->irq);
    rk_interrupt_unmask(host->irq);
}

```

### **1.3 Code and API**

- Controller driver src/driver/sdmmc/SdMmcDevice.c, not to be referenced outside the protocol stack
- SDIO enumeration protocol stack src/driver/sdio/SdioDevice.c
- SD/TF card enumeration protocol stack src/driver/sd/SdDevice.c
- (e)MMC enumeration protocol stack src/driver/emmc/EmmcDevice.c

```c
/* SD/TF card and EMMC len are in sector units, i.e., 512 Bytes */
extern rk_size_t SdDev_Write(HDC dev, rk_size_t LBA, const uint8 *buffer, rk_size_t len);
extern rk_size_t SdDev_Read(HDC dev, rk_size_t LBA, uint8 *buffer, rk_size_t len);
extern rk_size_t EmmcDev_Read(HDC dev, rk_size_t LBA, uint8 *buffer, rk_size_t len);
extern rk_size_t EmmcDev_Write(HDC dev, rk_size_t LBA, const uint8 *buffer, rk_size_t len);

/* SDIO count is in Bytes */
extern rk_err_t SdioDev_Memcpy_FromIo(HDC hSdioFun, void *dst, uint32 addr, uint32 count);
extern rk_err_t SdioDev_Memcpy_ToIo(HDC hSdioFun, uint32 addr, void *src, uint32 count);
extern rk_err_t SdioDevDelete(uint8 DevID, void *arg);
extern rk_err_t SdioDev_DisalbeInt(HDC dev, uint32 FuncNum);
extern rk_err_t SdioDev_EnableInt(HDC dev, uint32 FunNum);
extern HDC SdioDev_GetFuncHandle(HDC dev, uint32 FuncNum);
extern rk_err_t SdioDev_Writew(HDC hSdioFun, uint32 b, uint32 addr);
extern rk_err_t SdioDev_Readw(HDC hSdioFunc, uint32 addr);
extern rk_err_t SdioDev_Writel(HDC hSdioFun, uint32 b, uint32 addr);
extern rk_err_t SdioDev_Readl(HDC hSdioFun, uint32 addr);
extern rk_err_t SdioDev_SetBlockSize(HDC hSdioFun, uint32 BlockSize);
extern rk_err_t SdioDev_WriteSb(HDC hSdioFun, uint32 addr, void *src, uint32 count);
extern rk_err_t SdioDev_ReadSb(HDC hSdioFun, void *dst, uint32 addr, uint32 count);
extern rk_err_t SdioDev_Readb(HDC hSdioFunc, uint32 addr);
extern rk_err_t SdioDev_Writeb(HDC hSdioFunc, uint8 b, uint32 addr);
extern rk_err_t SdioDev_DisableFunc(HDC hSdioFunc);
extern rk_err_t SdioDev_EnalbeFunc(HDC hSdioFunc);
extern HDC SdioDev_Create(uint8 DevID, void *arg);
extern void SdioIrqTask(void *pvParameters);
extern rk_err_t SdioIntIrqInit(void *pvParameters, void *arg);
extern rk_err_t SdioIntIrqDeInit(void *pvParameters);
extern int SdioDev_Claim_irq(void *_func, sdio_irq_handler_t *handler);
extern int sdio_release_irq(void *func);

```

## **2 SHELL Test and Output**

### **2.1 SD/TF Card Test Commands**

*2.1.1 Read/Write Test*

SD card testing may damage the SD card file system. Please back up SD card data before testing and format it after testing.
In SD card test commands, ensure the parameters are valid, such as the SD card operation address.
The SD card device number is fixed at 0.

```c
RK2206>sd.write 0 0x8e9c 4 0x77
0 represents the device number. Write 4 blocks of data at SD card address 0x8e9c (the SD card operation address can be specified, must be within a valid address range), with data filled with byte 0x77 (can be any byte value).

RK2206>sd.read 0 0x8e9c 4
0 represents the device number. Read 4 blocks of data at SD card address 0x8e9c (same as the write address above).
```

Test log:

```
RK2206>sd.write 0 0x8e9c 4 0x77create thread classId = -1, objectid = 8, name = SdTestTask, remain = 4085528
[A.14.00][001588.482627]
RK2206>DevID = 0, LBA = 36508, blks = 4 value = 0x77
[A.SdTes][001588.489430]
[A.SdTes][001588.503002]  sd Write Data success
[A.SdTes][001588.507076]delete thread classId = -1, objectid = 8, name = SdTestTask, remain = 4069136.
[A.SdTes][001588.519801]

RK2206>sd.read 0 0x8e9c 4create thread classId = -1, objectid = 3, name = SdTestTask, remain = 6211448
[A.14.00][000029.571868]
RK2206>DevID = 0, LBA = 36508, blks = 4
[A.SdTes][000029.581561]
[A.SdTes][000029.587681]  sd Read Data success
[A.SdTes][000029.594030]
[A.SdTes][000029.603383][381109c0]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.619609][381109d0]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.632840][381109e0]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.643058][381109f0]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.651280][38110a00]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.666512][38110a10]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.678728][38110a20]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.687951][38110a30]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
[A.SdTes][000029.704184][38110a40]77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77
```

*2.1.2 Consistency Test*

Test command:

```
sd.test 0 0x8e9c 4
Device number 0, at SD card address 0x8e9c (the SD card operation address can be specified, must be within a valid address range), perform read-write consistency test on 4 blocks.
```

Test log:

```
RK2206>
RK2206>sd.test 0 0x8e9c 4create thread classId = -1, objectid = 4, name = SdTestTask, remain = 6146584
[A.14.00][005590.823303]
RK2206>DevID = 0, LBA = 36508, blks = 4
[A.SdTes][005590.837009]
[A.SdTes][005590.851304]  Sd write-read-compare Test Successfully 0
[A.SdTes][005590.855812]
[A.SdTes][005590.863215]  Sd write-read-compare Test Successfully 1
[A.SdTes][005590.876049]
[A.SdTes][005590.882452]  Sd write-read-compare Test Successfully 2
[A.SdTes][005590.893286]
[A.SdTes][005590.900238]  Sd write-read-compare Test Successfully 3
[A.SdTes][005590.909515]
[A.SdTes][005590.921914]  Sd write-read-compare Test Successfully 4
```

*2.1.3 Performance Test*

```
RK2206>file.setpath C:\

RK2206>file.test 512 512 1
Test a total of 512 blocks, each block size 512 bytes, test 1 block at a time (can be changed to 4 blocks at a time).
```

[^Note]: During read/write speed testing, data read-write consistency is automatically compared. If inconsistent, the log will show file data error.

Test log:

```
[A.14.00][000068.429157]total clk = 3022, 6853, 6853read: LBA = 0x000001fc, Len = 1, readus = 34497
[A.14.00][000068.442706]total clk = 2410, 6854, 6854read: LBA = 0x000001fd, Len = 1, readus = 34557
[A.14.00][000068.454297]total clk = 2790, 6855, 6855read: LBA = 0x000001fe, Len = 1, readus = 34626
[A.14.00][000068.464846]total clk = 2558, 6856, 6856read: LBA = 0x000001ff, Len = 1, readus = 34689
  test end: totalsize = 262144, blocksize = 512, writerate = 30577 byte/s, readrate = 7710117 byte/s
```

### **2.2 eMMC Test**

eMMC testing only requires changing "sd.write/sd.read" in the SD card test commands to "emmc.write/emmc.read". Other parameters remain unchanged.

### **2.3 SD/TF Card Auto Enumeration Output Information**

Generally, boards with SD/TF cards perform auto enumeration at boot. If correctly enumerated, the following print will show the specific card type and capacity information.

```c
***************************************************************************
*    Copyright (C) Fuzhou Rockchips Electronics CO.,Ltd                   *
*                                                                         *
*        Welcome to Use RKOS V2.0.0(D):a9b6f04d, 195d803                   *
*        Built : 08:41:43, Nov 13 2019                                    *
***************************************************************************
RK2206>
[a][000000.593663] sdc resp timout
[a][000000.601058]
[A.19.00][000000.760803]30.01GB SDHC Card

```
