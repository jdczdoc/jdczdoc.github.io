---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the X3588S core board
---

# Hardware Design

## Pin Description

In addition to the differential pair and ADC input pin, the GPIO ports of RK3588S can be multiplexed for other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, this description is not detailed. If necessary, you can obtain more information by carefully reading the core board schematic diagram, or reading "RK3588S_PinOut_V10_20220107.xlsx".

## GPIO Power

The power supply pin Description of the GPIO Power domain is as follows: Power DomainGPIO TypeDescription IO supplyfor this GPIO domain(group).1.8VVCCIO11.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO21.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group). Program control, determined by PLDO5 of PMU, default3.3VVCCIO31.8V1.8V Only IO supplyfor this GPIO domain(group).1.8VVCCIO41.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).1.8VVCCIO61.8V/3.3V1.8Vor3.3VIOsupply for this GPIOdomain (group).3.3V where PMUIO1, EMMCIO, VCCIO1, VCCIO3 are fixed level Power Domain and cannot be configured. PMUIO2, VCCIO2, VCCIO[4: 6] Power The DomainRK3588 chip can automatically identify the voltage of the hardware configuration and does not require software to configure according to the hardware supply voltage. When designing the interface board, pay attention to the IO level of the Power Domain to be consistent with the IO level of the connected peripheral chip/device, otherwise the CPU will be burned out.

## Power Supply Design

The X3588S core board only requires main power supply for normal use. The detailed power pin definitions are as follows:

Pins 61, 62, 63: 4V/5A power input interface. To ensure stable and reliable operation of the CPU, sufficient current must be provided;

60 pin: 3.3V/2A power output, can be used for interface board power supply;

Pin 71: 1.8V/2A power output, can be used for interface board power supply.

## USB Design

RK3588S has two HOST ports, one TYPEC port and one USB3.0 port. The TYPEC port can be used as a HOST port, DEVICE port or DP port. It can drive VGA, HDMI, DP screens, and can also be used as an ordinary USB3.0 interface, used for connecting ordinary HOST3.0 peripherals. The default USB2.0 interface can reach a speed of 480Mbps. USB3.0 can reach the fastest bandwidth of 5Gbps, which is 10 times faster than USB2.0. Therefore, the requirements for PCB routing are higher. Or lower is the differential pair of the USB interface. When routing the PCB, be sure to use equal-length differential lines, the impedance matching is 90 ohms, and a complete reference plane is required.

## HDMI Design

The RK3588S chip comes with an HDMI OUT controller that supports the HDMI2.0 protocol. Compared with the RK3588, it does not support the HDMI IN function. The corresponding HDMI differential pair on the core board must use equal-length differential lines, and the impedance matching is 100 ohms, otherwise problems such as HDMI screen color loss and intermittent will occur.

## EDP Design

The RK3588S chip comes with 1 EDP interface, pins and HDMI OUT multiplexed. EDP is a differential signal line, suitable for driving higher resolution LCD screens. The total data transmission capacity of the EDP interface can reach 21.6Gbps, which is 3 times that of the LVDS interface. It can drive higher resolution LCD screens, such as 2K, 4K screens, etc. When routing, the relevant differential The pairs must run differential lines of equal length, and the impedance matching is 100 ohms.

## MIPI Design

MIPI is an alliance established in 2003 by ARM, Nokia, ST, TI and other companies. The purpose is to standardize the internal interfaces of mobile phones such as camera, display, radio frequency baseband interface, etc., thereby reducing the design complexity of mobile phones and increasing design flexibility. MIPI is a relatively new standard. Currently, relatively mature applications include DSI(display interface) and CSI(Camera interface). RK3588S supports two-way DSI And four CSI interfaces, of which DSI is used for driving MIPI display, CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is much greater than that of the LVDS interface. When routing, equal-length differential lines must be used, and the impedance matching is 100 ohms.

## Core Board Version

Affected by the storage market, X3588SCV4 can update the RAM from LPDDR4 to LPDDR5 while retaining the size and pin compatibility of X3588SCV3 and X3588SCV3. Users can seamlessly replace it at zero cost. Affected by the difference in DDR performance, it is recommended to verify samples when switching to LPDDR5.
