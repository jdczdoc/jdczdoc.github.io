---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the Z3588 core board
---

# Hardware Design

## Pin Description

In addition to the differential pair and ADC input pins, the GPIO ports of RK3588 can be multiplexed for other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, this description is not detailed. If necessary, you can obtain more information by carefully reading the core board schematic diagram, or reading "Z3588_PinOut_V1_20250308.xls".

## GPIO Power

The power pin Description of the GPIO Power domain is as follows: Power DomainGPIO TypeDescriptionZ3588 Core Board LevelPMUIO11.8V1.8V Only1.8VPMUIO21.8V/3.3V1.8V or 3.3V3.3VEMMCIO1.8V1.8V Only1.8VVCCIO11.8V1.8V Only1.8VVCCIO21.8V/3.3V1.8V or 3.3Vdefault3.3V, adjustable VCCIO31.8V1.8V through PMIC PLDO5 Only1.8VVCCIO41.8V/3.3V1.8V or 3.3V development boarddefault1.8V, VCCIO51.8V/3.3V1.8V or can be jumped through the backplane resistor 3.3V development boarddefault3.3V, VCCIO61.8V/3.3V1.8V or 3.3V development boarddefault3.3V can be selected through the backplane resistor. PMUIO1, EMMCIO, VCCIO1, VCCIO3 are fixed level Power Domain and cannot be configured. PMUIO2, VCCIO2, VCCIO[4: 6]Power The DomainRK3588 chip can automatically identify the voltage of the hardware configuration and does not require software to configure according to the hardware supply voltage. When designing the interface board, pay attention to the IO level of the Power Domain to be consistent with the IO level of the connected peripheral chip/device, otherwise the CPU will be burned out.

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
