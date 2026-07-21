# Rockchip RK2206 Display

ID: RK-KF-YF-401

Release Version: V1.0.0

Date: 2019-11-29

Security Level: Internal

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

This document provides a standard template for reference. Subsequent templates will be based on this document.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ---------------- |
| RK2206       | FreeRTOS V10.0.1 |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers
Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author**   | **Description** |
| ---------- | -------- | :------- | ------------ |
| 2019-11-29 | V1.0.0   | Huang Jiacha | Initial version |

---

## **Table of Contents**

[TOC]

---

## **1 Code Path**

### **1.1 Driver Code Path**

RKOS Display includes the following module drivers

| Module   | Path                                                         |
| ------- | ------------------------------------------------------------ |
| display | src/driver/display/DisplayDevice.c                           |
| vop     | src/driver/vop/VopDevice.c                                   |
| panel   | src/driver/lcd/LCDDriver.c<br />src/driver/lcd/GC9306Driver.c |

### **1.2 Test Code Path**

```c
src/subsys/shell/shell_vop.c
src/subsys/shell/shell_vop_test_data.h
src/subsys/shell/display_test_pattern/
```

## **2 Configuration Method**

### **2.1 Display Driver Configuration Method**

```c
cd app/wlan_demo/gcc
make rk2206_defconfig
make menuconfig
BSP Driver  --->
		[*] Enable DISPLAY
		[*] Enable LCD
		[*]     Enable LCD GC9306
		[ ]     Enable LCD ST7735
		[*] Enable VOP
```

### **2.2 Display Test Configuration Method**

```c
Components Config  --->
	Command shell  --->
		[*]     Enable Display Shell
		[*]     Enable Lcd Shell
```

## **3 API and Usage**

### **3.1 Display Driver API**

| API                                                          | Description             |
| :----------------------------------------------------------- | ------------------- |
| DisplayDev_SetWindow(HDC dev, int x, int y, int xSize, int ySize) | Set window size and position |
| DisplayDev_ClrRect(HDC dev, uint8 R, uint8 G, uint8 B, uint8 transparency) | Clear window with specified RGB data |
| DisplayDev_Write(HDC dev, void *color, uint32 size, uint8 Mode) | Send data to the screen |

### **3.2 Display Test Description**

```c
    /* Open dma device */
    stVopDevArg.hDma = rkdev_open(DEV_CLASS_DMA, dmaId, NOT_CARE);
    if (stVopDevArg.hDma <= 0)
    {
        shell_output(dev, "\r\n  Open dma device %d failure", 0);
        goto err;
    }
    /* Create VOP device */
    ret = rkdev_create(DEV_CLASS_VOP, 0, &stVopDevArg);
    if (ret != RK_SUCCESS)
    {
        shell_output(dev, "\r\n  Create Vop device failure\n", 0);
        goto err;
    }
    /* Open VOP device */
    stLcdDevArg.hBus = rkdev_open(DEV_CLASS_VOP, 0, NOT_CARE);
    if (stLcdDevArg.hBus == NULL)
    {
        shell_output(dev, "\r\n  Open Lcd device failure\n", 0);
        goto err;
    }
    /* Create LCD device */
    ret = rkdev_create(DEV_CLASS_LCD, 0, &stLcdDevArg);
    if (ret != RK_SUCCESS)
    {
        shell_output(dev, "\r\n  Create Lcd device failure\n", 0);
        rkdev_close(stLcdDevArg.hBus);
        goto err;
    }
    /* Open LCD device */
    stDisplayDevArg.h_lcd = rkdev_open(DEV_CLASS_LCD, 0, NOT_CARE);
    if (stDisplayDevArg.h_lcd == NULL)
    {
        shell_output(dev, "\r\n  Open DEV_CLASS_LCD failure", 0);
        goto err;
    }
    /* Create display device */
    ret = rkdev_create(DEV_CLASS_DISPLAY, 0, &stDisplayDevArg);
    if (ret != RK_SUCCESS)
    {
        shell_output(dev, "\r\n  Display device0 create failure", 0);
        rkdev_close(stDisplayDevArg.h_lcd);
        goto err;
    }
    /* Open display device */
    hDisplay = rkdev_open(DEV_CLASS_DISPLAY, 0, NOT_CARE);
    if (hDisplay == NULL)
    {
        shell_output(dev, "Open Display device failure\n", 0);
        goto err;
    }
    /* Set window size and position */
    DisplayDev_SetWindow(hDisplay, 0, 0, VOP_WIDTH, VOP_HEIGHT);

    /* Send a frame of full red data */
    DisplayDev_SendData(hDisplay, 255, 0, 0, 0);
```

### **3.3 Shell Usage**

```c
vop.create
vop.test
```

## **4 New Panel Configuration Guide**

Refer to ST7735SDriver.c for implementing the new panel configuration file:

1. Update the panel initialization commands based on the reference code from the panel manufacturer

   ```c
   LCD_INIT_CONFIG InitTab[] = {
   	//data, cmd,
   	……
   };
   ```

2. Modify the resolution

   ```c
   #define LCD_WIDTH  240 //depend on lcd spec
   #define LCD_HEIGHT 320 //depend on lcd spec
   ```
