# FT232H USB2JTAG

ID: RK-KF-YF-118

Release Version: V1.0.0

Date: 2020-06-03

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

This document mainly introduces the use of the Rockchip FT232H USB-to-JTAG adapter board.

**Product Version**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------------ |
|      all      |              |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Date** | **Change Description** |
| ---------- | ---------- | :--------- | ------------ |
| V1.0.0    | Hong Huibin | 2020-06-03 | Initial version     |

---

**Table of Contents**

[TOC]

---

## Description

FT232H is a chip from "Future Technology Devices International Ltd." that converts USB to various interfaces. Here we mainly use the USB-to-JTAG/SWD function.

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/1.png)

## Rockchip FT232H Adapter Board

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/2.png)

FT232H adapter board:

* LED indicators: LED1: power indicator; LED2: off: not connected, blinking: connected; LED3: not defined yet;
* USB interface: available in both TYPEC and mini USB interfaces
* ARM 20PIN JTAG interface
* DIP switch
    * SWD mode: 1, 3, 5 off, 2, 4, 6 on
    * JTAG mode: 1, 3, 5 on, 2, 4, 6 off
* Pin headers: VCC, TCS, TCK, GND, which can be connected to the board with flying wires
* Button: pressing it pulls TMS low

## Configuring FT232H EEPROM Information under Windows

### Install the EEPROM Programming Tool FT_Prog_v3.8.128.448 Installer.exe

Extract gnumcueclipse_v1.0.zip, and install RK\FTDI\FT_Prog_v3.8.128.448 Installer.exe

Or download it from the web:

```
https://www.ftdichip.com/Support/Utilities.htm#FT_PROG
```

### Run FT_Prog.exe

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/6.png)

* 1 Click the DEVICES menu
* 2 Scan device
* 3 Scan result

### Configure Driver Properties

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/7.png)

* 1 Click and open Hardware Specific
* 2 Click and open Port A
* 3 Select Driver
* 4 Select D2XX Direct

### Configure JTAG/SWD Drive Strength

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/8.png)

* 1 Click to open IO Pins
* 2 Select Group AD
* 3 Set Drive to 8mA, which can improve the TCK 30MHz waveform

## Driver Installation

### Ubuntu 16.04 and Above Driver Configuration

#### Install the Driver

```
sudo apt-get install libftdi-dev
```

#### Add USB Information

Open or create /etc/udev/rules.d/60-openocd.rules:

```
sudo gedit /etc/udev/rules.d/60-openocd.rules
```

Add the following configuration:

```
# Original FT232H VID:PID
ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6014", MODE="660", GROUP="plugdev", TAG+="uaccess"
```

Note: Step 4.1.1 is required when OpenOCD uses FT232H.

### Windows Driver Configuration

Different software uses different drivers when using FT232H, so the USB driver of FT232H needs to be modified according to your needs.

The following uses OpenOCD with FT232H as an example:

#### Run RK\OpenOCD\drivers\UsbDriverTool.exe

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/3.png)

#### Change the FT232H Default Driver to the WinUSB Driver

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/4.png)

#### Installation Successful

![img](Rockchip_Developer_Guide_FT232H_USB2JTAG/5.png)

Note: During installation, keep the device plugged in. If it cannot be used after a successful installation, please unplug and replug it.

Note: Before each use, please first confirm whether the device exists. If not, repeat step 4.2.

Replacing it with an identical FT232H adapter board also requires reinstalling the driver.
