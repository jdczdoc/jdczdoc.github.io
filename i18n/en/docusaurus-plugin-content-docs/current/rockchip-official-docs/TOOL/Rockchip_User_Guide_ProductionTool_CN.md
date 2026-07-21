# ProductionTool User Manual

ID: RK-SM-YF-001

Release Version: V1.0.3

Date: 2021-05-19

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are all registered trademarks of the Company, owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of reasonable use, no unit or individual may excerpt or copy any part or all of the content of this document without the written permission of the Company, and may not distribute it in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly introduces the usage of the Rockchip ProductionTool and the handling of common problems.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RK2206       |              |
| RK2106       |              |
| RV1108       |              |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date** | **Version** | **Author**   | **Description**               |
| -------- | -------- | ---------- | -------------------------- |
| V1.0.0   | Liu Yi     | 2018-12-25 | Initial version                   |
| V1.0.1   | Chen Weiwen   | 2019-06-27 | Modified file name and customer service email |
| V1.0.2   | Liu Yi     | 2019-11-29 | Modified document layout               |
| V1.0.3   | Huang Ying     | 2021-05-19 | Modified format                   |

---

**Table of Contents**

[TOC]

---

## Overview

ProductionTool is a production line flashing tool used in small system solutions. It can support up to 24 devices upgrading simultaneously when USB bandwidth permits.

## Directory Structure

- Language directory: language files

- Config.ini: tool configuration file

- ProductionTool.exe: flashing program

## Common Settings

![](.\Rockchip_User_Guide_ProductionTool\common_settings.png)

1. Mode selection: currently only "Firmware Upgrade" is supported; "Erase Flash" will be supported in the future.

2. "Restart Device": when checked, the device will be restarted after the firmware upgrade is complete.

3. "Readback Verification": when checked, after the firmware is flashed, all data will be read back from the device and compared with the original firmware.

4. "Msc Upgrade": when checked, the tool supports scanning for msc devices. When found, it will switch the device into upgrade mode and start the normal upgrade.

5. "Do not flash unused partition space": when checked, the tool only writes the valid data of each partition in the firmware when flashing, and the unused padding data is not flashed.

## Firmware Upgrade

### Click "Firmware" to select the firmware and Loader

![](.\Rockchip_User_Guide_ProductionTool\firmware_upgrade_step1.png)

### Click "Start" to begin waiting for the upgrade device to connect

![](.\Rockchip_User_Guide_ProductionTool\firmware_upgrade_step2.png)

**Preparation before upgrade:**

When an upgrade device is connected to the PC for the first time, the tool will record its USB port information and assign it an "ID". All devices connected to this USB port in the future will use this ID.

After clicking "Stop", connect an upgrade device to all used USB ports one by one. Each time a USB port is connected, record the ID assigned by the tool, then write the ID on a label and stick it on the USB cable. From then on, the tool uses the ID to represent the device.
![](.\Rockchip_User_Guide_ProductionTool\firmware_upgrade_step3.png)

## Common Upgrade Problems

### Boot Download Failed

![](.\Rockchip_User_Guide_ProductionTool\boot_download_fail.png)
The Boot download operation consists of two steps: first, downloading the ddr initialization code to run in sram; second, downloading the upgrade code to run in ddr. Therefore, if this step fails: 1. check the main controller; 2. check the ddr.

### Test Device Failed

![](.\Rockchip_User_Guide_ProductionTool\test_device_fail.png)
The test device operation comes after the Boot download. If the test device fails, it is mostly due to DDR problems, which cause the upgrade communication code downloaded to ddr to not run properly.

### Firmware Download Failed

![](.\Rockchip_User_Guide_ProductionTool\down_firmware_fail.png)

"Firmware Download Failed" is mainly due to two reasons:

1. Unstable USB communication. Replace the USB port or USB cable, and check the device-side USB hardware.
2. Device-side write operation error. Connect the serial port, provide the serial log, and rule out flash hardware issues.

### Firmware Verification Failed

![](.\Rockchip_User_Guide_ProductionTool\check_firmware_fail.png)
"Firmware Verification Failed": the verification process mainly reads back data for comparison. Reasons for failure:

1. Unstable USB communication. Replace the USB port or USB cable, and check the device-side USB hardware.
2. Device-side read operation error. Connect the serial port, provide the serial log, and rule out flash hardware issues.

### Firmware Verification Failed, Data Comparison Error

![](.\Rockchip_User_Guide_ProductionTool\check_firmware_data_compare_err.png)

When a data comparison error occurs, the two pieces of data being compared at that time will be exported to the tool's log directory. The file with "file" in the name is the original data, and the file with "flash" in the name is the data read back from the device. Compare the two files:

1. If the different data shows very regular individual bit errors, check the ddr.
2. If large blocks of data differ, check the flash.

### Permission Issue

When a "Boot Download" failure occurs, please first confirm whether the rockusb driver is using a version prior to v4.6. If so, you need to right-click the program and open the tool with administrator privileges.
