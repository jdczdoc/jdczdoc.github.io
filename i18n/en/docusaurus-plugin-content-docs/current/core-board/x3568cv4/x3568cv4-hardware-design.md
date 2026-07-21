---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the X3568CV4 core board
---

# Hardware Design

The RK3568 chip has a large number of overall pins and a complete range of on-chip and on-chip peripherals. During the circuit design, all the pins are not lead out and need to be reasonably allocated. RK3568 has three versions: RK3568, RK3568B2, and RK3568J. The detailed differences are as follows: Model difference: The surface of the RK3568 chip is encapsulated by aluminum sheets, which has good heat dissipation effect. The surface of the RK3568B2 chip is encapsulated by plastic. The RK3568J chip has an advantage in cost. The surface of the chip is encapsulated in plastic. There are three types of chips: wide temperature chip or higher. The pins are fully compatible. Using the latest SDK package can achieve full source code compatibility and completely consistent performance. The specific core board selection is distinguished by the core board suffix.

## DDR selection

RK3568 supportsDDR3/LPDDR3/DDR4/LPDDR4/4X. Considering the cost issue, X3568CV4 has multiple versions. According to the suffix naming difference, it is designed using commercial grade or industrial gradeLPDDR4/LPDDR4X/DDR4.

## flash choice

RK3568 can support both nand flash and EMMC. In terms of product stability and working performance, EMMC is much better than nand flash. The only disadvantage is that it is slightly more expensive than nand flash. X3568CV4 abandons nand flash and defaults to plug-in EMMC.

## Camera Interface

RK3568 can support both MIPI camera and parallel port camera. It is worth noting that the parallel port of the camera occupies a large number of IO ports. In order to reduce the number of pins, the chip manufacturer multiplexed a large number of parallel port IO and Ethernet pins. If the user does not need Ethernet, he can design it by himself according to the actual needs of the product.

## Display Interface

RK3568 can support screens with three interfaces: MIPI, LVDS, and HDMI. MIPI and LVDS are multiplexed into one set of pins, which means that MIPI and LVDS cannot be used at the same time.

## Audio Interface

RK3568 has a standard I2S Audio Interface, and the matching PMU RK809 has its own audio codec, so there is no need for an external audio decoding chip.

## SDIO interface

RK3568 has three SDIO interfaces, one of which is assigned to EMMC and has no external lead; one is assigned to the WIFI/BT module, used for connecting to SDIO interface modules such as AP6212; one is assigned to the TF card, used for expanding capacity. Note that in addition to the SDMMC0 channel being assigned to the TF card, its D0 and D1 data lines are multiplexed with UART2. During debugging, we use UART2 Monitoring information. Note that RK3568 has two UART2, one multiplexed with D0 and D1 of SDMMC0, and the other multiplexed with other GPIO. Only one UART2 is allowed to be used at any time, selected through the program.

## Power Supply Design

We only need to provide 3.3V/2A(5V/2A) power to pins 54 and 55 of the X3568CV4 core board, and the core board will run normally.

## USB Design

X3568CV4 has three HOST ports and one OTG port. The defaultUSB2.0 interface can reach a speed of 480Mbps. OTG and HOST are high-speed signal lines. When routing on the PCB, be sure to use equal-length differential lines, the impedance matching is 90 ohms, and a complete reference plane is required. Or lower is the corresponding differential line. pairSignal: Differential pin number Differential pin name 33, 34OTG_DP, OTG_DM146, 147USB2_HOST2_DM, USB2_HOST2_DP148, 149USB2_HOST3_DM, USB2_HOST3_DM27, 28USB3_HOST1_DM, USB3_HOST1_DP

## MIPI Design

MIPI is an alliance established in 2003 by ARM, Nokia, ST, TI and other companies. The purpose is to standardize the internal interfaces of mobile phones such as camera, display, radio frequency baseband interface, etc., thereby reducing the design complexity of mobile phones and increasing design flexibility. MIPI is a relatively new standard, and currently relatively mature applications include DSI(Display Interface) and CSI(Camera interface).supportsDSI and CSI, DSI Corresponds to pins 35 to 44 of the core board, used for display of the MIPI interface; CSI corresponds to pins 160 to 171 of the core board, used for the camera of the MIPI interface. The data transmission rate of the MIPI interface is much greater than that of the LVDS interface, so differential lines of equal length must be used when routing, and the impedance matching is 100 ohms.
