# Rockchip CAN Development Guide

Release Version: V1.0.0

Date: 2021-01-26

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip" is a registered trademark of the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may excerpt, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides a standard template for reference. Subsequent templates will be based on this document for modifications.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| RV1126        | 4.4 & 4.19         |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical support engineers

Software development engineers

**Revision History**

| **Date**     | **Version** | **Author** | **Description**      |
| ------------ | ----------- | ---------- | -------------------- |
| 2021-01-26   | V1.0.0      | Elaine     | First version release |

---

**Table of Contents**

[TOC]

---

## CAN Driver

### Driver Files

Driver file location:

`drivers/net/can/rockchip/rockchip_can.c`

### DTS Node Configuration

Main parameters:

- `interrupts = <GIC_SPI 100 IRQ_TYPE_LEVEL_HIGH>;`
  Generates an interrupt signal upon completion.

- `clock`

```
	assigned-clocks = <&cru CLK_CAN>;
	assigned-clock-rates = <200000000>;
	clocks = <&cru CLK_CAN>, <&cru PCLK_CAN>;
	clock-names = "baudclk", "apb_pclk";
```

  The clock frequency can be modified. If the CAN bit rate is 1M, it is recommended to set the CAN clock to 300M for better signal stability. For bit rates lower than 1M, a clock setting of 200M is sufficient.

- `pinctrl`

```
&can {
	pinctrl-names = "default";
	pinctrl-0 = <&canm0_pins>;
	status = "okay";
};
```

  Configure the iomux of can_h and can_l for CAN functionality.

### Kernel Configuration

```
Symbol: CAN_ROCKCHIP [=y]
  | Type  : tristate
  | Prompt: Rockchip CAN controller
  |   Location:
  |     -> Networking support (NET [=y])
  |       -> CAN bus subsystem support (CAN [=y])
  |         -> CAN Device Drivers
  |           -> Platform CAN drivers with Netlink support (CAN_DEV [=y])
  |   Defined at drivers/net/can/rockchip/Kconfig:1
  |   Depends on: NET [=y] && CAN [=y] && CAN_DEV [=y] && ARCH_ROCKCHIP [=y]
```

### CAN Communication Test Tools

canutils is a commonly used CAN communication test tool package, containing 5 independent programs: canconfig, candump, canecho, cansend, cansequence. The functions of these programs are briefly described below:

`canconfig`

Used to configure CAN bus interface parameters, mainly baud rate and mode.

`candump`

Receives data from the CAN bus interface and prints it to standard output in hexadecimal, or outputs to a specified file.

`canecho`

Resends all data received from the CAN bus interface back to the CAN bus interface.

`cansend`

Sends specified data to the specified CAN bus interface.

`cansequence`

Automatically and repeatedly sends incrementing numbers to the specified CAN bus interface, or specifies a receive mode to verify the received incrementing numbers.

`ip`

CAN baud rate, function, and other configurations.

Note: busybox also includes the ip tool, but the busybox version is a stripped-down version that does not support CAN operations. Therefore, verify the ip command version (iproute2) before use.

The above tool packages have detailed compilation instructions available online. If compiling buildroot yourself, simply enable the macros to support the above tool packages:

```
BR2_PACKAGE_CAN_UTILS=y
BR2_PACKAGE_IPROUTE2=y
```

### CAN Common Command Interface

1. Query current network devices:

`ifconfig -a`

2. CAN startup:

Bring CAN down:

`ip link set can0 down`

Set bit rate 500KHz:

`ip link set can0 type can bitrate 500000`

Print can0 information:

`ip -details link show can0`

Bring CAN up:

`ip link set can0 up`

3. CAN transmission:

Send (standard frame, data frame, ID:123, data:DEADBEEF):

`cansend can0 123#DEADBEEF`

Send (standard frame, remote frame, ID:123):

`cansend can0 123#R`

Send (extended frame, data frame, ID:00000123, data:DEADBEEF):

`cansend can0 00000123#12345678`

Send (extended frame, remote frame, ID:00000123):

`cansend can0 00000123#R`

4. CAN reception:

Enable printing, wait for reception:

`candump can0`
