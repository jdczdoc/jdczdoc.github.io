# Rockchip CAN FD Development Guide

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

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | ------------------ |
| RK356X        | 4.4 & 4.19         |

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

## CAN FD Driver

### Driver Files

Driver file location:

`drivers/net/can/rockchip/rockchip_canfd.c`

### DTS Node Configuration

Main parameters:

- `interrupts = <GIC_SPI 1 IRQ_TYPE_LEVEL_HIGH>;`
  Generates an interrupt signal upon completion.

- `clock`

```
	clocks = <&cru CLK_CAN1>, <&cru PCLK_CAN1>;
	clock-names = "baudclk", "apb_pclk";
	resets = <&cru SRST_CAN1>, <&cru SRST_P_CAN1>;
	reset-names = "can", "can-apb";
```

  Clock properties for the driver to enable/disable clk; reset properties for resetting the bus each time.

- `pinctrl`

```
&can1 {
	assigned-clocks = <&cru CLK_CAN1>;
	assigned-clock-rates = <200000000>;
	pinctrl-names = "default";
	pinctrl-0 = <&can1m1_pins>;
	status = "okay";
};
```

  The clock frequency can be modified. If the CAN bit rate is less than or equal to 3M, it is recommended to set the CAN clock to 100M for better signal stability. For bit rates higher than 3M, a clock setting of 200M is sufficient.

  Configure the iomux of can_h and can_l for CAN functionality.

### Kernel Configuration

```
Symbol: CANFD_ROCKCHIP [=y]
  | Type  : tristate
  | Prompt: Rockchip CANFD controller
  |   Location:
  |     -> Networking support (NET [=y])
  |       -> CAN bus subsystem support (CAN [=y])
  |         -> CAN Device Drivers
  |           -> Platform CAN drivers with Netlink support (CAN_DEV [=y])
  |   Defined at drivers/net/can/rockchip/Kconfig:10
  |   Depends on: NET [=y] && CAN [=y] && CAN_DEV [=y] && ARCH_ROCKCHIP [=y]
```

### CAN FD Communication Test Tools

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

### CAN FD Common Command Interface

1. Query current network devices:

`ifconfig -a`

2. CAN FD startup:

Bring CAN down:

`ip link set can0 down`

Set arbitration segment 1M baud rate, data segment 3M baud rate:

`ip link set can0 type can bitrate 1000000 dbitrate 3000000 fd on`

Print can0 information:

`ip -details link show can0`

Bring CAN up:

`ip link set can0 up`

3. CAN FD transmission:

Send (standard frame, data frame, ID:123, data:DEADBEEF):

`cansend can0 123##1DEADBEEF`

Send (extended frame, data frame, ID:00000123, data:DEADBEEF):

`cansend can0 00000123##1DEADBEEF`

4. CAN FD reception:

Enable printing, wait for reception:

`candump can0`
