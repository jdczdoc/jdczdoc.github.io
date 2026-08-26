---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the Z3588 core board
---

# Hardware Design

## Pin Description

In addition to the differential pair and ADC input pins, the GPIO ports of RK3588 can be multiplexed for other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, this description is not detailed. If necessary, you can obtain more information by carefully reading the core board schematic diagram, or reading "Z3588_PinOut_V1_20250308.xls".

## GPIO Power Domains

The Z3588 core board contains multiple GPIO IO power domains. Different IO power domains support different operating voltages. The supported voltage ranges and default configurations of the Z3588 core board are listed below:

| IO Power Domain | Supported Voltage | Z3588 Core Board Configuration | Description |
| --- | --- | --- | --- |
| PMUIO1 | 1.8V | 1.8V | Fixed at 1.8V |
| PMUIO2 | 1.8V / 3.3V | 3.3V | Supports 1.8V or 3.3V |
| EMMCIO | 1.8V | 1.8V | Fixed at 1.8V |
| VCCIO1 | 1.8V | 1.8V | Fixed at 1.8V |
| VCCIO2 | 1.8V / 3.3V | 3.3V by default | Supports 1.8V or 3.3V; the voltage can be adjusted through PMIC PLDO5 |
| VCCIO3 | 1.8V | 1.8V | Fixed at 1.8V |
| VCCIO4 | 1.8V / 3.3V | 1.8V by default | Supports 1.8V or 3.3V; selectable through carrier-board resistors |
| VCCIO5 | 1.8V / 3.3V | 3.3V by default | Supports 1.8V or 3.3V; selectable through carrier-board resistors |
| VCCIO6 | 1.8V / 3.3V | 3.3V by default | Supports 1.8V or 3.3V; selectable through carrier-board resistors |

**PMUIO1, EMMCIO, VCCIO1, and VCCIO3** are fixed-voltage IO power domains and their operating voltages cannot be configured.

**PMUIO2, VCCIO2, and VCCIO4 to VCCIO6** support multiple IO operating voltages. According to the current hardware design, the RK3588 can identify the corresponding hardware voltage configuration, and no additional software configuration is required according to the actual supply voltage.

### Carrier Board Design Notes

When designing the carrier board or interface board, ensure that the IO voltage level of each peripheral matches the operating voltage of the corresponding Z3588 GPIO IO power domain.

For example, if a GPIO belongs to a 1.8V IO power domain, the connected peripheral interface must also be compatible with 1.8V logic levels. If the peripheral uses 3.3V IO while the corresponding GPIO operates at 1.8V, the two signals must not be connected directly. An appropriate level-shifting circuit should be added according to the interface requirements.

> **Note:** A mismatch between peripheral IO voltage levels and the GPIO voltage levels of the core board may cause communication failures or abnormal IO operation, and in severe cases may result in permanent damage to the SoC IO. Always verify the corresponding IO power domain and its actual operating voltage before designing the carrier board.

## Power Supply Design

The Z3588 core board requires main power supply for normal use. The detailed power pin definition is as follows:

DA38, DA39, DA40, DB38, DB39 pin: 4V/5A power input interface. To ensure stable and reliable operation of the CPU, sufficient current must be provided;

Pin CD17: 3.3V/5A power output, can be used for interface board power supply;

BD36 pin: 1.8V/2.5A power output, can be used for interface board power supply.

## USB Design

RK3588 has two HOST ports and two TYPEC ports. The TYPEC port can be used as a HOST port, DEVICE port or DP port. It can drive VGA, HDMI, DP screens, and can also be used as an ordinary USB3.0 interface, used for connecting ordinary HOST3.0 peripherals. The default USB2.0 interface can reach a speed of 480Mbps, and USB3.0 The fastest bandwidth can reach 5Gbps, which is 10 times faster than USB2.0. Therefore, the requirements for PCB routing are higher. Or lower is the differential pair of the USB interface. When routing the PCB, be sure to use equal-length differential lines, the impedance matching is 90 ohms, and a complete reference plane is required.

## HDMI Design

The RK3588 chip comes with two HDMI OUT controllers, supports the HDMI2.0 protocol. It also comes with one HDMIRX2.0 interface, used for external reception of HDMI Signal. The corresponding HDMI differential pair on the core board must use equal-length differential lines, and the impedance matching is 100 ohms, otherwise there will be problems such as color loss and intermittent HDMI picture.

## EDP Design

The RK3588 chip comes with 2 EDP interfaces, pins and two HDMI OUT multiplexed. EDP is a differential signal line, suitable for driving higher resolution LCD screens. The total data transmission capacity of the EDP interface can reach 21.6Gbps, which is 3 times that of the LVDS interface. It can drive higher resolution LCD screens, such as 2K, 4K screens, etc. When routing, the relevant differential The pairs must run differential lines of equal length, and the impedance matching is 100 ohms.

## MIPI Design

MIPI is an alliance established in 2003 by ARM, Nokia, ST, TI and other companies. The purpose is to standardize the internal interfaces of mobile phones such as camera, display, radio frequency baseband interface, etc., thereby reducing the design complexity of mobile phones and increasing design flexibility. MIPI is a relatively new standard. Currently, relatively mature applications include DSI(display interface) and CSI(Camera interface). RK3588 supports two-way DSI And six CSI interfaces, of which DSI is used for driving MIPI display, CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is much greater than that of the LVDS interface. When routing, equal-length differential lines must be used, and the impedance matching is 100 ohms.
