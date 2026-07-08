# U-Boot next-dev and rkdevelop Differences

ID: RK-SM-YF-134

Release Version: V1.1.1

Date: 2021-03-02

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

There are currently two branch versions of U-Boot on the Rockchip platform: rkdevelop (v2014-10) and next-dev (v2017-09). This document provides a brief description of the status and differences between these two branches, aiming to help readers understand the general situation between them.

**Product Versions**

| **Chip Name** | **U-Boot Version** |
| ------------ | -------------- |
| All Chips | next-dev/rkdevelop |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Revision Date** | **Description**                                 |
| ---------- | -------- | :----------- | ------------- |
| V1.0.0     | Chen Jianhong | 2018-02-28   | Initial version      |
| V1.1.0     | Chen Jianhong | 2019-11-12   | Added product version list |
| V1.1.1     | Huang Ying | 2021-03-02   | Format modification |

---

**Table of Contents**

[TOC]

---

## Rockchip U-Boot Overview

There are currently two versions of U-Boot on the Rockchip platform: the old version is the rkdevelop branch, and the new version is the next-dev branch.

### rkdevelop Overview

rkdevelop is a version branched from the official U-Boot v2014.10 release for development. Currently, most chips (before 2018) that use U-Boot use this version. The chips currently supported by this version include: RK3036/RK312X/RK322X/RK3288/RK3328/RK322XH/RK3368/RK3399/some PX series.

Currently, the main features supported by rkdevelop are:

- Support for Android platform firmware boot;
- Support for RockUSB and Google Fastboot flashing methods;
- Support for Secure boot firmware signature encryption protection mechanism;
- Support for LVDS, EDP, MIPI, HDMI, CVBS and other display devices;
- Support for SDCard, eMMC, Nand Flash, USB drive and other storage devices;
- Support for boot logo display, charging animation display, low battery management, power management;
- Support for I2C, SPI, PMIC, CHARGE, FUEL GUAGE, USB, GPIO, PWM, DMA, GMAC, EMMC, NAND interrupt and other drivers;

For readers interested in the above features and usage, please refer to the "Rockchip U-Boot Development Guide V3.8-20170214".

### next-dev Overview

next-dev is a version branched from the official U-Boot v2017.09 release for development. As upstream U-Boot functionality becomes increasingly complete and our actual product requirements for U-Boot become more diverse, upgrading the U-Boot version became necessary, leading to the next-dev development. As an upgrade from rkdevelop, next-dev currently supports chips including: RV1108/RK3188/RK3036/RK3066/RK312X/RK322X/RK3288/RK3328/RK322XH/RK3326/RK3368/RK3399/some PX series.

In short, all chips supported by rkdevelop are also supported in next-dev. Most software features supported by rkdevelop are also supported in next-dev.

### Differences Between next-dev and rkdevelop

#### Base Version Differences

As mentioned above, the rkdevelop branch is developed based on version v2014.10 and no longer updates upstream code. The next-dev branch is developed based on version v2017.09 and will continue to update upstream code in the future.

#### Code Style

The overall code style of rkdevelop tends to be more "customized", with many aspects of coding style and functional implementation not being standardized enough, mostly following Rockchip's own set of flows or frameworks. The main reasons are that the v2014.10 version's system framework itself was not complete enough, the first U-Boot development also lacked experience, the engineers' awareness of standardized development was insufficient, and subsequent product requirements became increasingly diverse.

Through the development experience gained from rkdevelop, we have better overall planning and understanding for next-dev. Therefore, the code of the next-dev branch strictly follows upstream specifications for development, and all driver implementations try to follow existing common framework flows, making it easier to continuously update and extend functionality in the future.

#### DM (Driver Model) Framework

The DM framework is the collective term for all driver framework models in U-Boot. It mainly includes uclass, driver, and device. Official detailed documentation can be found in U-Boot's doc directory:

> Uclass - a group of devices which operate in the same way.
>
> A uclass provides a way of accessing individual devices within the group, but always using the same interface. For example a GPIO uclass provides operations for get/set value. An I2C uclass may have 10 I2C ports, 4 with one driver, and 6 with another.
>
> Driver - some code which talks to a peripheral and presents a higher-level interface to it.
>
> Device - an instance of a driver, tied to a particular port or peripheral.

The DM model is similar to the kernel's device-driver framework model, specifying a unified standard framework for various driver modules. Engineers only need to fit the hardware-related parts into this framework. Currently, U-Boot supports a relatively complete set of framework types. The drivers of the next-dev branch basically follow the existing framework flows. For example:

```c
./drivers/block/blk-uclass.c
./drivers/power/pmic/pmic-uclass.c
./drivers/power/regulator/regulator-uclass.c
./drivers/power/domain/power-domain-uclass.c
./drivers/thermal/thermal-uclass.c
./drivers/pinctrl/pinctrl-uclass.c
./drivers/gpio/gpio-uclass.c
./drivers/core/syscon-uclass.c
./drivers/core/uclass.c
./drivers/rtc/rtc-uclass.c
./drivers/reset/reset-uclass.c
./drivers/cpu/cpu-uclass.c
./drivers/clk/clk-uclass.c
......
```

#### Code Open Source

Currently, the base code for all chip platforms has been merged into the official branch, meeting customers' requirements for downloading source code to compile and flash. Our engineers will continue to work on upstreaming each chip platform.

#### Pre-loader Support

```c
Maskrom -> Pre-loader -> Trust -> U-Boot -> kernel -> Android
```

The above is the boot flow of the entire system when using the rkdevelop branch: Pre-loader loads Trust and U-Boot, then U-Boot loads the kernel. The Pre-loader mentioned above can be called a first-stage loader, and U-Boot is called a second-stage loader. On the Rockchip platform, Pre-loader is not open source, only bin files are provided for external use.

What if customer products require fully open source code? The next-dev branch U-Boot supports SPL/TPL as Pre-loader for booting the system, which can load Trust and U-Boot. SPL/TPL themselves are features provided by U-Boot itself, just not used in rkdevelop.

Among them, TPL's main function is DDR initialization, and SPL's main function is loading and booting trust/U-Boot modules. rkdevelop only supports Rockchip miniloader as pre-loader. Each chip platform on next-dev supports two boot methods: SPL/TPL and Rockchip miniloader.

#### Partition Support

1. rkdevelop only supports rk format parameter.txt partitions, no other partitions.
   rkdevelop also parses CMDLINE information from parameter.txt.

2. next-dev supports GPT partitions and rk parameter partitions.
   To maintain consistency between GPT and rkparameter, next-dev recommends using kernel dts bootargs to define cmdline, rather than using parameter CMDLINE.

#### Supported Firmware Types

**From firmware packaging format perspective:**

1. next-dev supports RK independent partition firmware boot, called boot rockchip.
2. next-dev supports AOSP format boot, called boot android.
3. next-dev supports FIT format packaged firmware, rkdevelop does not support.

rkdevelop supports the above two boot commands (1 and 2) for firmware, but the code for the two features is intermingled with high coupling. On next-dev, the two are separated into independent boot commands.

**From firmware boot method perspective:**

1. next-dev supports tftpboot and pxe boot (network-based).
2. next-dev supports Linux Distro Boot (Linux Distribution EFI boot).
3. next-dev supports AOSP firmware (Android AVB verification and A/B partitions).

#### File System

1. next-dev supports file systems; rkdevelop does not support file systems.
2. next-dev supports fat and ext2/4 file systems.

#### rkbin Repository

rkdevelop's U-Boot project stores many bin files and script tools. Storage paths are as follows:

```c
tools/rk_tools/bin/
tools/rk_tools/RKBOOT/
tools/rk_tools/RKTRUST/
tools/resource_tool/
tools/boot_merger.c
tools/trust_merger.c
......
```

On the next-dev branch, these bin files and script tools are no longer stored in the U-Boot project. They are unified in the "rkbin" repository. Therefore, users need to additionally download the rkbin repository to use with next-dev. When compiling uboot.img, the compilation script will index the corresponding platform's bin files and tools from the rkbin repository, then compile and package them. Ultimately, as with the rkdevelop branch, related firmware such as uboot.img, trust.img, loader, etc., will still be generated under the U-Boot project.

#### Secure Boot

The rkdevelop branch supports rk secure boot; next-dev does not support it.
The next-dev branch supports AVB (Android) and FIT signature verification; rkdevelop does not support them.

#### Rockusb and Flashing

rkdevelop supports all Rockusb commands; next-dev supports WL commands and necessary information interaction commands.
next-dev does not support ul, write pba, write vendor storage and other commands.
Previously, firmware flashing mainly consisted of usbplug + miniloader. usbplug used the ul command to flash miniloader, then reboot (or directly proceed to this step) to enter miniloader, where the remaining firmware flashing was completed.
The new flashing process can be completed entirely in the usbplug phase, eliminating the reboot step. Including writing vendor storage, everything is done directly in usbplug without miniloader assistance.

#### Storage Medium Flashing Address

Old method:
NAND: IDB is stored in a special boot partition, invisible at the system stage. Subsequent data is written according to the addresses defined in parameter at actual physical addresses.
EMMC: Since boot partitions are not used, and normal partitions are used instead, the first 4MB (0x2000 blocks) is reserved in software (driver or partition layer) for idb loader data. Subsequent data is written to eMMC at addresses defined in parameter plus 4MB offset.
New method:
Both EMMC and NAND provide block interfaces based on actual physical available space. During flashing, rockusb can directly use the WL command to flash all space.
