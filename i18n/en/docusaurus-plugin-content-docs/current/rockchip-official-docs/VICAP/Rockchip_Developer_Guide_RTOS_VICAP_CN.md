# Rockchip VICAP Developer Guide

ID: RK-KF-YF-402

Release Version: V1.0.1

Date: 2020-05-27

Security Level: □Top Secret   □Secret   □Internal   ■Public

------

**DISCLAIMER**

This document is provided "as is". Fuzhou Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2019 Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute part or all of the content of this document in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

------

**Preface**

**Overview**
VICAP (video capture unit) is used for receiving parallel port data, mainly supporting the following features:

- BT601 YCbCr 422 8bit input
- BT656 YCbCr 422 8bit input
- YUYV/YVYU/UYVY/VYUY input
- RAW 8/10/12 bit input
- JPEG input
- Window cropping
- Virtual stride when write to DDR
- Different stored address for Y and UV
- YUV 422/420 output
- Configurable for the polarity of pixel_clk, hsync, vsync

**Product Versions**

| Chip Name | Version |
| :----: | :----: |
| RK2108 | RT-Thread & HAL |
| PISCES | RT-Thread & HAL |
| RK2206 | RKOS & HAL |

**Intended Audience**

This document is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| Date | Version | Author | Description |
| :----: | :----: | :----: | :----: |
| 2019-07-16 | V1.0.0 | Huang Jianglong | Initial version |
| 2020-05-27 | V1.0.1 | Zhong Yongwang | Format correction |

[TOC]

## Using HAL

### HAL Description

The HAL layer encapsulates the specific functions of the VICAP controller into individual function interfaces at the register level for the upper OS to call.
The OS layer directly calls the function interfaces of the HAL layer to achieve target functions, and is responsible for managing concurrency for the corresponding registers of the HAL layer, while the HAL does not handle this, such as performing lock operations.
Refer to the corresponding chip manual for details on VICAP function settings.

### Main HAL Function Interfaces

The HAL function interfaces are organized according to the register functions of the VICAP.

#### Register: VICAP_DVP_CTRL

```c
HAL_Status HAL_VICAP_SetAxiBurstType(struct VICAP_REG *pReg, eVICAP_axiBurstType type);
HAL_Status HAL_VICAP_SetCaptureEnable(struct VICAP_REG *pReg, bool enable);
HAL_Status HAL_VICAP_SetWorkmode(struct VICAP_REG *pReg, eVICAP_workMode workMode);
```

#### Register: VICAP_DVP_INTEN/VICAP_DVP_INTSTAT

Interrupt enable/disable functions:

```c
HAL_Status HAL_VICAP_SetIrqEnable(struct VICAP_REG *pReg);
HAL_Status HAL_VICAP_SetIrqDisable(struct VICAP_REG *pReg);
```

Interrupt status get/clear functions:

```c
uint32_t HAL_VICAP_GetIrqStatus(struct VICAP_REG *pReg);
HAL_Status HAL_VICAP_ClearIrqStatus(struct VICAP_REG *pReg, uint32_t mask);
```

#### Register: VICAP_DVP_FOR

The VICAP_DVP_FOR register is an important register of the VICAP controller, involving related configurations for data input and output formats. It needs to be carefully confirmed.

```c
HAL_Status HAL_VICAP_SetUvStoreOrder(struct VICAP_REG *pReg, eVICAP_uvStoreOrder order);
HAL_Status HAL_VICAP_SetRawEnd(struct VICAP_REG *pReg, eVICAP_rawEnd type);
HAL_Status HAL_VICAP_SetOut420Order(struct VICAP_REG *pReg, eVICAP_out420Order type);
HAL_Status HAL_VICAP_SetOutFormat(struct VICAP_REG *pReg, eVICAP_outputFormat type);
HAL_Status HAL_VICAP_SetYmodeOnly(struct VICAP_REG *pReg, bool enable);
HAL_Status HAL_VICAP_SetRawWidth(struct VICAP_REG *pReg, eVICAP_rawWidth width);
HAL_Status HAL_VICAP_SetJpegMode(struct VICAP_REG *pReg, eVICAP_jpegMode mode);
HAL_Status HAL_VICAP_SetFieldOrder(struct VICAP_REG *pReg, eVICAP_fieldOrder order);
HAL_Status HAL_VICAP_SetYuvInOrder(struct VICAP_REG *pReg, eVICAP_yuvInOrder order);
HAL_Status HAL_VICAP_SetInputMode(struct VICAP_REG *pReg, eVICAP_inputMode mode);
HAL_Status HAL_VICAP_SetHrefVsynPol(struct VICAP_REG *pReg, eVICAP_hrefPol hpol,  eVICAP_vsyncPol vpol);
```

#### Register: VICAP_DVP_FRM0_ADDR_Y/VICAP_DVP_FRM0_ADDR_UV

Required when VICAP uses oneframe mode or frame pingpong mode.

```c
HAL_Status HAL_VICAP_SetFrm0YAddr(struct VICAP_REG *pReg, uint32_t yAddr);
HAL_Status HAL_VICAP_SetFrm0UvAddr(struct VICAP_REG *pReg, uint32_t uvAddr);
```

#### Register: VICAP_DVP_FRM1_ADDR_Y/VICAP_DVP_FRM1_ADDR_UV

Required when VICAP uses oneframe mode or frame pingpong mode.

```c
HAL_Status HAL_VICAP_SetFrm1YAddr(struct VICAP_REG *pReg, uint32_t yAddr);
HAL_Status HAL_VICAP_SetFrm1UvAddr(struct VICAP_REG *pReg, uint32_t uvAddr);
```

#### Register: VICAP_DVP_VIR_LINE_WIDTH

The virtual width is defined as the difference between the start addresses of two adjacent rows of image data when storing image data. This register is readable and writable.

```c
HAL_Status HAL_VICAP_SetVirtualLineWidth(struct VICAP_REG *pReg, uint32_t width);
uint32_t HAL_VICAP_GetVirtualLineWidth(struct VICAP_REG *pReg);
```

#### Register: VICAP_DVP_SET_SIZE

The VICAP_DVP_SET_SIZE register is used to set the width and height that the upper application requires the VICAP to output.

```c
HAL_Status HAL_VICAP_SetReceivedSize(struct VICAP_REG *pReg, uint32_t height, uint32_t width);
```

#### Register: VICAP_DVP_BLOCK_LINE_NUM

When VICAP uses block pingpong mode, this register must be set.
Calculation formula:
$$num=height \div blocknum$$
height refers to the actual output height of VICAP, consistent with the height of the VICAP_DVP_SET_SIZE register.
blocknum refers to the total number of blocks into which the complete output image of VICAP is divided.
It must be noted that the height set by the VICAP_DVP_SET_SIZE register must be divisible by blocknum to ensure that the allocated buf addresses are aligned.

```c
HAL_Status HAL_VICAP_SetBlockLineNum(struct VICAP_REG *pReg, uint32_t num);
```

#### Register: VICAP_DVP_BLOCK0_ADDR_Y/VICAP_DVP_BLOCK0_ADDR_UV

Required when VICAP uses block pingpong mode.

```c
HAL_Status HAL_VICAP_SetBlock0YAddr(struct VICAP_REG *pReg, uint32_t yAddr);
HAL_Status HAL_VICAP_SetBlock0UvAddr(struct VICAP_REG *pReg, uint32_t uvAddr);
```

#### Register: VICAP_DVP_BLOCK1_ADDR_Y/VICAP_DVP_BLOCK1_ADDR_UV

Required when VICAP uses block pingpong mode.

```c
HAL_Status HAL_VICAP_SetBlock1YAddr(struct VICAP_REG *pReg, uint32_t yAddr);
HAL_Status HAL_VICAP_SetBlock1UvAddr(struct VICAP_REG *pReg, uint32_t uvAddr);
```

#### Register: VICAP_DVP_BLOCK_STATUS

The VICAP_DVP_BLOCK_STATUS register is used to indicate the block status of VICAP in block pingpong mode. It needs to be cleared accordingly after each block sample is completed.

```c
uint32_t HAL_VICAP_GetBlockStatus(struct VICAP_REG *pReg);
uint32_t HAL_VICAP_ClearBlockStatus(struct VICAP_REG *pReg, uint32_t mask);
```

#### Register: VICAP_DVP_CROP

The VICAP_DVP_CROP register is used for cropping the output image.

```c
HAL_Status HAL_VICAP_SetCropOrdinate(struct VICAP_REG *pReg, uint32_t startY, uint32_t startX);
```

#### Register: VICAP_DVP_FRAME_STATUS

The VICAP_DVP_FRAME_STATUS register is used to indicate the sample status of VICAP in oneframe mode or frame pingpong mode. Frame pingpong mode does not require clearing this register, but oneframe mode does.

```c
uint32_t HAL_VICAP_GetFrameStatus(struct VICAP_REG *pReg);
uint32_t HAL_VICAP_ClearFrameStatus(struct VICAP_REG *pReg, uint32_t mask);
```

## RTOS VICAP Framework

The VICAP framework abstracts the device object based on RT-Thread/RKOS into struct rt_VICAP_device for implementation.
To capture image data from a camera connected via VICAP, the following three parts of work must be completed:

- Implement the camera driver
- Complete the custom functions required by the VICAP driver
- Complete the application-side collection application

Detailed description follows.

### Adapter Layer

The Adapter layer acts as an adaptation layer, bridging the relevant system variables and interfaces of RT-Thread and RKOS, providing unified interfaces and variables for the vicap driver to operate on both systems. Users do not need to care about the specific implementation. It mainly includes the following three files:

| file name | description|
|:----:|:----:|
|adapter.c | Implements system interface bridging|
|adapter.h | Implements system object variable bridging|
|adapter_type.h| Implements system integer variable bridging|

### Camera Device Driver

The overall framework of the Camera device driver is implemented based on the device object of RT-Thread/RKOS. This framework encapsulates the struct rt_camera_device object based on the kernel objects struct rk_device/struct _DEVICE_CLASS. This camera object provides a unified implementation for the VICAP driver to implement camera-type device drivers. Mainly includes the following files:

| filename | description |
|:----:|:----:|
| camera.c | Implements the camera framework |
| camera.h| Declares camera device related objects |
| camera_mediabus.h | Declares media-bus related parameters and objects |

#### Creating and Registering a Camera Device

The camera object struct rt_camera_device is described in detail as follows.

```c
struct rk_camera_device
{
    rk_device parent;
    char name[RK_CAMERA_DEVICE_NAME_SIZE];
    struct rk_camera_info info;
    const struct rk_camera_ops *ops;
    char i2c_name[RK_CAMERA_I2C_NAME_SIZE];
    rk_i2c_bus_device *i2c_bus;
#if defined(__RK_OS__)
    uint8_t class_id;
    uint8_t object_id;
#endif
};
```

| field | description |
|  :----:  |  :----: |
| parent | The camera object is derived from the kernel device object; rk_device is implemented by the adapter layer |
| name | Used to set the specific camera name, must be unique, and is the unique identifier for the kernel to find the device. Set by the driver during camera device registration.|
| info | Used to set the camera output resolution, mediabus, etc., which can be obtained by the upper application for image configuration. Set by the driver.|
| ops | Used to implement specific camera access and control. Set by the driver.|
| i2c_name | Used to specify the name of the I2C bus where the specific camera is mounted. This name must match the I2C bus driver name of the corresponding system. Set by the driver.|
| i2c_bus | Obtained by the system interface rk_device_find(...) through i2c_name, used to control the camera. Generally assigned during the init phase. Set by the driver.|

Among them, struct rk_camera_ops *ops is the key for users to implement specific camera drivers. The related functions are implemented by the user as corresponding callbacks. Detailed description:

```c
struct rk_camera_ops
{
    ret_err_t (*init)(struct rk_camera_device *dev);
    ret_err_t (*open)(struct rk_camera_device *dev, uint16_t oflag);
    ret_err_t (*close)(struct rk_camera_device *dev);
    ret_err_t (*control)(struct rk_camera_device *dev, dt_cmd_t cmd, void *arg);
    ret_err_t (*rx_indicate)(struct rk_camera_device *dev, ret_size_t size);
};
```

| field | description |
| :----: | :----: |
| init | This callback must be implemented. It is called via the system interface rk_device_init(...) or rk_device_open(...). Related configurations such as camera struct rk_camera_info and i2c_name are generally completed in this function.|
| open | This callback must be implemented. It is called via the system interface rk_device_open(...). Parameter checks or initial settings can be done here. Used in pairs with close.|
| close | This callback must be implemented. It is called via the system interface rk_device_close(...). Parameter checks or initial settings can be done here. Used in pairs with open.|
| control | This callback must be implemented. It is called via the system interface rk_device_control(...). Various custom controls for the camera can be defined here.|
| rx_indicate | This callback is optional and is used for additional processing when the device receives data.|

For the above control callback, the current framework only defines three control commands for the application. If users have additional control requirements, they can add their own implementations. Existing controls are as follows:

| command name | description |
| :----: | :----: |
| RK_DEVICE_CTRL_CAMERA_STREAM_ON | This command streams on the device|
| RK_DEVICE_CTRL_CAMERA_STREAM_OFF |This command streams off the device|
| RK_DEVICE_CTRL_CAMERA_GET_FORMAT| This command gets the format information of the device|

Camera instances created based on struct rk_camera_device are registered into the RTOS device manager via the framework interface rk_camera_register(...). The struct rk_camera_device instance can be static or dynamic.

Generally, the struct rk_camera_device object is embedded into a user-defined device object, and then rk_camera_register(...) is called for registration. Example:

```c
struct gc2145_dev
{
    struct rk_camera_device parent;
    char name[RK_CAMERA_DEVICE_NAME_SIZE];

#if RT_USING_GC2145_OPS
    struct gc2145_ops *ops;
#endif

    int32_t pin_rst;
    int32_t pin_pwdn;
    int32_t pin_clkout;
    struct mclk mclk;
    char i2c_name[RK_CAMERA_I2C_NAME_SIZE];
    rk_i2c_bus_device *i2c_bus;
    struct rk_mutex mutex_lock;
};
```

In the vicap driver, all registered cameras must have a device name. The current unified naming format is: "sensor_index", where index is the index of the camera device in the system. The first camera is called sensor_0, the second is sensor_1, and so on. Currently, the vicap driver only supports a single sensor, so the unified camera device name is sensor_0.
After implementing the camera device driver, the camera device needs to be registered into the VICAP device driver so that the VICAP driver can operate the camera. The registration method is:

```c
ret_err_t rk_camera_register(struct rk_camera_device *camera, const char *name, void *data);
```

#### Accessing the Camera Device

For the camera, the upper application accesses it by calling the RT-Thread system I/O device management interface, which in turn calls the corresponding control functions of struct rk_camera_ops *ops to perform hardware operations on the specific camera. The flow for the upper application to operate the camera device is as follows:

- step 1: Find the camera device to obtain the camera device registered in the kernel

```c
dev = rk_device_find(name);
```

- step 2: After obtaining the device handle in step 1, initialize the device

```c
rk_device_init(dev);
```

- step 3: After successfully initializing the device in step 2, open the device

```c
rk_device_open(dev);
```

- step 4: After successfully opening the device in step 3, control the device

```c
rk_device_control(dev, cmd, &arg)
```

- step 5: After completing various device controls, close the device

```c
rk_device_close(dev);
```

### VICAP Driver Framework

#### VICAP Driver Framework Description

The VICAP driver framework encapsulates the struct rk_VICAP_device object based on the RTOS device object, thereby implementing the VICAP driver framework to implement a specific VICAP device driver.

The current VICAP device driver has already implemented most of its main functions. Users do not need to care about the specific usage of the VICAP controller to implement the VICAP driver. Users only need to focus on controlling the VICAP from the application side.

#### VICAP Application

The application layer must follow the following flow to use the VICAP function:
Important note:
When using the vicap block mode, the height set via the RK_DEVICE_CTRL_VICAP_SET_FMT command must be divisible by the block num set via the RK_DEVICE_CTRL_VICAP_SET_BLOCK_NUM command; otherwise, address misalignment will cause errors.

- step1: Find out the VICAP device by device name:

```c
vicapdev = rk_device_find(name);
```

- step2: Open the found VICAP device in step1 to init device:

```c
ret = rk_device_open(vicapdev, RT_DEVICE_OFLAG_RDWR);
```

- step3: Set the work mode of VICAP device after opening device:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_SET_WORKMODE, &workmode);
```

- step4: Set the format for outputing:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_SET_FMT, &format);
```

- step5: Set the crop information if it is required:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_CROP_IMAGE, &crop);
```

- step6: Set the block num if the VICAP's block mode is required:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_SET_BLOCK_NUM, &num);
```

- step7: Set the buf num required by application to capture image:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_REQBUF, &reqbuf);
```

- step8: Query the buffers have been allocated in step 7):

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_QUERYBUF, &buf);
```

- step9: Queue all the buffers have been checked in step 8 into VICAP drivers:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_QBUF, &buf);
```

- step10: Stream on the VICAP device to capture image:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_STREAM_ON, RK_NULL);
```

- step11: Dqueue the buf filled with image data from driver for processing in application:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_DQBUF, &buf);
```

- step12: Queue the buf has been processed in application into driver:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_QBUF, &buf);
```

- step13:Loop step11 and step 12 untill application stops streaming;

```c
do something user needs.
```

- step14: Stop streaming:

```c
ret = rk_device_control(vicapdev, RK_DEVICE_CTRL_VICAP_STREAM_OFF, RK_NULL);
```

- step15: Close device

```c
ret = rk_device_close(vicapdev);
```

### VICAP Testing

vicap implements the vicap_test command in the system to provide vicap functionality demonstration.
Entering vicap_test help in the console provides corresponding usage tips.
The current test demo app only supports capturing nv12.

#### RT-Thread Testing

##### Config Configuration

- step1: Enable vicap test

```c
| Symbol: RT_USING_COMMON_TEST_VICAP [=y]
| Type  : boolean
| Prompt: Enable BSP Common VICAP TEST
|   Location:
|     -> RT-Thread bsp test case
|       -> RT-Thread Common Test case
| (1)     -> Enable BSP Common TEST (RT_USING_COMMON_TEST [=y])
|   Defined at ./../common/tests/Kconfig:117
|   Depends on: RT_USING_COMMON_TEST [=y] && RT_USING_VICAP [=y] && RT_USING_CAMERA [=y]

```

- step2: Set serial command length

```c
| Symbol: RT_CONSOLEBUF_SIZE [=512]
| Type  : integer
| Prompt: the buffer size for console log printf
|   Location:
|      -> RT-Thread Kernel
|       -> Kernel Device Object
| (1)   -> Using console for rt_kprintf (RT_USING_CONSOLE [=y])
|   Defined at ../../../src/Kconfig:300
|  Depends on: RT_USING_CONSOLE [=y]
```

```c
| Symbol: FINSH_ARG_MAX [=12]
| Type  : integer
| Prompt: The command arg num for shell
|   Location:
|     -> RT-Thread Components
|       -> Command shell
|         -> finsh shell (RT_USING_FINSH [=y])
| (1)       -> Using module shell (FINSH_USING_MSH [=y])
|   Defined at ../../../components/finsh/Kconfig:74
|   Depends on: RT_USING_FINSH [=y] && FINSH_USING_MSH [=y]
```

```c
| Symbol: FINSH_CMD_SIZE [=256]
| Type  : integer
| Prompt: The command line size for shell
|   Location:
|     -> RT-Thread Components
|       -> Command shell
| (1)     -> finsh shell (RT_USING_FINSH [=y])
|   Defined at ../../../components/finsh/Kconfig:41
|   Depends on: RT_USING_FINSH [=y]
```

##### Enable vicap

- step1: Set vicap format

For specific format and usage, run vicap_test help for details.
If using block mode, the set height or crop height must be an integer multiple of the block num.

```c
vicap_test dev_set --set-dev=vicap_0 --set-workmode=block --set-blocks=6 --set-format=fourcc=NV12,width=320,height=240 --stream-buf=7 --stream-count=2 --stream-mode=photo
```

- step2: Enable vicap

```c
vicap_test dev_streamon
```

In photo mode, normal completion prints log: release buf; in preview mode, normal execution continuously prints log: fps: frame rate, indicating frame rate.

#### RKOS Testing

##### Config Configuration

Enable vicap shell option

```c
COMPONENTS_SHELL_VICAP(=y) "Enable VICAP shell command"
```

##### Enable vicap

- step1: Create file storage directory

```c
file.setpath A:\\
```

- step2: Create image storage file

```c
file.mf cif.yuv
```

- step3: Create device

```c
vicap_test dev_create
```

- step4: Set vicap format

For specific format and usage, run vicap_test help for details.
If using block mode, the set height or crop height must be an integer multiple of the block num.

```c
vicap_test dev_set --set-dev=vicap_0 --set-workmode=oneframe --set-blocks=6 --set-format=fourcc=NV12,width=640,height=480 --stream-buf=3 --stream-count=2 --stream-mode=photo
```

- step5: Enable vicap

```c
vicap_test dev_streamon
```

- step6: Delete image storage file

```c
file.df cif.yuv
```
