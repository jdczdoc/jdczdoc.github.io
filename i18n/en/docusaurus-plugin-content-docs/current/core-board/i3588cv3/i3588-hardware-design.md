---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the I3588 core board
---

# Hardware Design

## Pin Description

In addition to the differential pair and ADC input pins, the GPIO ports of RK3588 can be multiplexed for other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, this description is not detailed. If necessary, you can obtain more information by carefully reading the core board schematic diagram, or reading "RK3588_PinOut_V1.0_20211228.xlsx".

## GPIO Power

The power pin description of the GPIO power domains is shown below:

| Power Domain | GPIO Type | Core Board Voltage | Description |
| :--- | :--- | :--- | :--- |
| PMUIO1 | 1.8V | 1.8V | Fixed 1.8V IO supply for this GPIO domain. The voltage cannot be configured. |
| PMUIO2 | 1.8V / 3.3V | 1.8V or 3.3V | Supports 1.8V or 3.3V IO supply for this GPIO domain. |
| EMMCIO | 1.8V | 1.8V | Fixed 1.8V IO supply for this GPIO domain. The voltage cannot be configured. |
| VCCIO1 | 1.8V | 1.8V | Fixed 1.8V IO supply for this GPIO domain. The voltage cannot be configured. |
| VCCIO2 | 1.8V / 3.3V | Default 3.3V | The voltage is controlled by PMU PLDO5 and can be configured as 1.8V or 3.3V. |
| VCCIO3 | 1.8V | 1.8V | Fixed 1.8V IO supply for this GPIO domain. The voltage cannot be configured. |
| VCCIO4 | 1.8V / 3.3V | 1.8V or 3.3V | Supports 1.8V or 3.3V IO supply for this GPIO domain. |
| VCCIO5 | 1.8V / 3.3V | 3.3V | Supports 1.8V or 3.3V IO supply for this GPIO domain. |
| VCCIO6 | 1.8V / 3.3V | 3.3V | Supports 1.8V or 3.3V IO supply for this GPIO domain. |

The following GPIO power domains have fixed voltage levels and cannot be configured:

- PMUIO1
- EMMCIO
- VCCIO1
- VCCIO3

The following GPIO power domains support automatic voltage identification by RK3588 according to the hardware configuration. Software does not need to configure the IO voltage manually:

- PMUIO2
- VCCIO2
- VCCIO4 ~ VCCIO6

When designing the interface board, make sure that the IO voltage level of each GPIO power domain matches the IO voltage level of the connected peripheral devices. Otherwise, the RK3588 chip may be damaged.
## Power Supply Design

The I3588 core board requires main power supply and RTC clock power supply for normal use. The detailed power pin definition is as follows:

Pins 15 and 16: 4V/5A power input interface. To ensure stable and reliable operation of the CPU, sufficient current must be provided;

Pin 120: Core board RTC power supply terminal, default input 2.5 to 3V/5uA;

11, 12 pins: 3.3V/2A power output, can be used for interface board power supply;

13, 14 pins: 1.8V/2A power output, can be used for interface board power supply.

## USB Design

RK3588 has two HOST ports and two TYPEC ports. The TYPEC port can be used as a HOST port, DEVICE port or DP port. It can be used as a DriverVGA, HDMI, DP screen, or as an ordinary USB3.0 interface, used for connecting ordinary HOST3.0 peripherals. The default USB2.0 interface can reach a speed of 480Mbps, and USB3.0 The fastest bandwidth can reach 5Gbps, which is 10 times faster than USB2.0. Therefore, the requirements for PCB routing are higher. Or lower is the differential pair of the USB interface. When routing the PCB, be sure to use equal-length differential lines, the impedance matching is 90 ohms, and a complete reference plane is required.

## HDMI Design

The RK3588 chip comes with two HDMI OUT controllers, supports the HDMI2.0 protocol. It also comes with one HDMIRX2.0 interface, used for external reception of HDMI Signal. The corresponding HDMI differential pair on the core board must use equal-length differential lines, and the impedance matching is 100 ohms, otherwise there will be problems such as color loss and intermittent HDMI picture.

## EDP Design

The RK3588 chip comes with 2 EDP interfaces, pins and two HDMI OUT multiplexed. EDP is a differential signal line, suitable for driving higher resolution LCD screens. The total data transmission capacity of the EDP interface can reach 21.6Gbps, which is 3 times that of the LVDS interface. It can drive higher resolution LCD screens, such as 2K, 4K screens, etc. When wiring, the relevant differential The pairs must run differential lines of equal length, and the impedance matching is 100 ohms.

## MIPI Design

MIPI is an alliance established in 2003 by ARM, Nokia, ST, TI and other companies. The purpose is to standardize the internal interfaces of mobile phones such as camera, display, radio frequency baseband interface, etc., thereby reducing the design complexity of mobile phones and increasing design flexibility. MIPI is a relatively new standard. Currently, relatively mature applications include DSI(Display Interface) and CSI(Camera interface). RK3588 supports two-way DSI And six CSI interfaces, among which DSI used for DriverMIPI display, CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is much greater than that of the LVDS interface. When routing, equal-length differential lines must be used, and the impedance matching is 100 ohms.
