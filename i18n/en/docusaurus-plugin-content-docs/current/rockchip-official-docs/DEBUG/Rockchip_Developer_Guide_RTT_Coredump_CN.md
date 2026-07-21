# RTT Coredump Introduction

ID: RK-KF-YF-111

Release Version: V1.1.0

Date: 2020-04-15

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip.

All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2020 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, neither any entity nor individual shall extract, copy, or distribute this document in any form in whole or in part without the written approval of Rockchip.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel:  +86-4007-700-590

Customer service Fax:  +86-591-83951833

Customer service e-Mail:  [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

​	This document mainly introduces coredump-related content.

**Product Version**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RK2108    | RTT     |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date** | **Change Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Hong Huibin | 2020-04-15 | Initial version     |
| V1.1.0 | Hong Huibin | 2020-06-22 | Updated company name, simplified coredump command |

---

**Table of Contents**

[TOC]

---

## Coredump Function Description

​	This is aimed at scenarios where a machine under test cannot be connected to a serial port to obtain debugging information in real time. In this case, if the machine hangs, it can only be rebooted, but after rebooting no useful information is visible. For MCU-type products, the SRAM is relatively small, so the entire SRAM space and instruction space can be saved in a certain format to a file or a certain partition, and then copied to a PC for analysis.

## Code

```
bsp/rockchip/common/drivers/coredump/drv_coredump.c
bsp/rockchip/common/drivers/coredump/drv_coredump.h
bsp/rockchip/common/drivers/coredump/drv_coredump_flash.c
bsp/rockchip/common/drivers/coredump/drv_coredump_sdcard.c
bsp/rockchip/common/drivers/coredump/drv_coredump_arm.s
bsp/rockchip/common/drivers/coredump/drv_coredump_iar.s
bsp/rockchip/common/drivers/coredump/drv_coredump_gcc.S
```

drv_coredump.c mainly provides struct definitions, the coredump file data format, the code framework, etc.

drv_coredump_flash.c is the implementation that saves directly to flash without going through the file system, such as NOR FLASH.

drv_coredump_sdcard.c saves to the /sdcard/ directory through the file system, for storage devices such as SD cards or EMMC.

## Compile Configuration

```
RT-Thread rockchip common drivers  --->
	RT-Thread rockchip coredump driver  --->
		[*] Enable coredump
		[*] Enable coredump by Sdcard
		[*] Enable coredump by flash
```

If the development board supports an SD card, you can enable coredump by Sdcard and save it to the SD card, which makes it more convenient to copy the coredump data out, as follows:

```
core_dump_Thu_Jan_22_05_07_55_2015.bin
```

If the development board does not support an SD card, you can only coredump to a certain flash partition, then enter loader mode and export it with a tool, as follows:

```
RL 0x7000 0xa81 core_dump.bin
```

Note: There are currently 2 conditions for coredump: exception and assert. Relatively speaking, the system is still fairly normal during an assert, so you can choose to coredump to the SD card (based on the file system). An exception may indicate a more serious problem, and generally it is written directly to flash.

* When coredump to sd card and flash: assert will coredump to the SD card, and exception will coredump to flash.
* When coredump to flash only: both exception and assert will coredump to flash.

## Testing

### Windows Environment

* Run the coredump command in the serial command line to trigger an assert and hang

* Reboot the device into maskrom mode, flash the loader separately, and enter loader mode (for some chips, the tool may still prompt maskrom, but it has actually entered loader mode)

* Run Android_Console_Tool.exe

* Enter 1 according to the prompt

* Then enter RL 0x7000 0xa81 A:\coredump\core_dump.bin

  Regarding the RL command, refer to the following:

  Taking rk2108 as an example, find the breakpad partition configuration in the following file:

  ```
  bsp/rockchip/rk2108/board/recording_pen/setting.ini

  [UserPart5]
  Name=breakpad
  Type=
  PartOffset=0x7000
  PartSize=
  Flag=0x305
  File=

  RL starting_sector number_of_sectors filename (the sector size is 512 bytes)
  RL 0x7000 0xa81 core_dump.bin
  ```

![img](Rockchip_Developer_Guide_RTT_Coredump_CN/3.png)

* Simply check whether core_dump.bin is valid; the beginning must be 78 56 34 012

![img](Rockchip_Developer_Guide_RTT_Coredump_CN/4.png)

### Linux Environment

This mainly introduces how to export core_dump.bin; for other steps, please refer to section 4.1.

```
sudo upgrade_tool db Image/rk2108_db_Loader.bin
sudo upgrade_tool rl 0x7000 0x305 core_dump.bin
```

## Parsing

ARM MCU ECLIPSE + GDB + OPENOCD + virtual adapter + virtual cortex-m device.

OPENOCD supports a variety of JTAG adapters, such as JLINK, FT2232H, etc., and is mainly responsible for communicating with the debugged board. But here the virtual adapter is mainly a stand-in, because reading memory data, cpu registers, etc. can be obtained directly from core_dump.bin. The virtual cortex-m device mainly modifies the way of obtaining memory data and cpu register values. Normally this is done through a JTAG adapter, but now it is changed to obtain them from core_dump.bin.

![img](Rockchip_Developer_Guide_RTT_Coredump_CN/2.png)

For specific configuration, please refer to another document "Rockchip_Developer_Guide_GNU_MCU_Eclipse_OpenOCD.md". Note the following here:

```
-r rk_cortex_m4_virt   uses a dummy adapter and a virtual device
-c "load_coredump /mnt/hgfs/A/coredump/core_dump.bin"   specifies the coredump file path; slashes / are still used here
```

After the configuration is complete, connect for debugging:

![img](Rockchip_Developer_Guide_RTT_Coredump_CN/1.png)
