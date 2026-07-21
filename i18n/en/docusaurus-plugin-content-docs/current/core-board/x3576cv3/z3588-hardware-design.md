---
sidebar_position: 3
title: Hardware design
description: Z3588 core board hardware design considerations
---

# Hardware design

## Pin description

In addition to the differential pair and ADC input pin, the GPIO ports of RK3588 can be multiplexed for other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, the description in this article is not detailed. If necessary, you can obtain more information by carefully reading the core board schematic diagram or reading "Z3588_PinOut_V1_20250308.xls".

## GPIO power

The power pin description of the GPIO power domain is as follows: Power domain GPIO type description Z3588 Core board level PMUIO11.8V1.8V Only1.8VPMUIO21.8V/3.3V1.8V or 3.3V3.3VEMMCIO1.8V1.8V Only1.8VVCCIO11.8V1.8V Only1.8VVCCIO21.8V/3.3V1.8V or 3.3V defaults to 3.3V, VCCIO31.8V1.8V is adjustable through PMIC PLDO5 Only1.8VVCCIO41.8V/3.3V1.8V or 3.3V development board defaults to 1.8V, VCCIO51.8V/3.3V1.8V or can be selected through the backplane resistor The 3.3V development board defaults to 3.3V, which can be selected through the backplane resistor. VCCIO61.8V/3.3V1.8V or The 3.3V development board defaults to 3.3V, which can be selected through the backplane resistor. PMUIO1, EMMCIO, VCCIO1, and VCCIO3 are fixed-level power domains and cannot be configured. PMUIO2, VCCIO2, VCCIO[4:6] power domain RK3588 chip can automatically identify the voltage configured by the hardware, and does not require software to configure according to the hardware supply voltage. When designing the interface board, pay attention to the IO level of the power domain to be consistent with the IO level of the connected peripheral chip/device, otherwise the CPU will be burned out.

## Power supply design

The Z3588 core board requires main power supply for normal use. The detailed power pin definition is as follows:

DA38, DA39, DA40, DB38, DB39 pins: 4V/5A power input interface. To ensure stable and reliable operation of the CPU, sufficient current must be provided;

CD17 pin: 3.3V/5A power output, which can be used to power the interface board;

BD36 pin: 1.8V/2.5A power output, which can be used to power the interface board.

## USB design

RK3588 has two HOST ports and two TYPEC ports. Among them, TYPEC port can be used as HOST port, DEVICE port or DP port. It can drive VGA, HDMI, DP screens, and can also be used as an ordinary USB3.0 interface for connecting ordinary HOST3.0 peripherals. The default USB2.0 interface can reach a speed of 480Mbps, while USB3.0 can reach a bandwidth of 5Gbps at the fastest, which is 10 times faster than USB2.0. Therefore, the requirements for PCB routing are higher. The following is the differential pair of the USB interface. When routing the PCB, the differential lines must be of equal length, the impedance matching is 90 ohms, and a complete reference plane is required.

## HDMI design

The RK3588 chip comes with two HDMI OUT controllers and supports HDMI2.0 protocol. It also comes with a HDMIRX2.0 interface for external reception of HDMI signals. The corresponding HDMI differential pairs on the core board must use equal-length differential lines, and the impedance matching is 100 ohms, otherwise problems such as HDMI screen discoloration and intermittence will occur.

## EDP ​​design

The RK3588 chip comes with 2 EDP interfaces, and the pins are multiplexed with the two HDMI OUTs. EDP ​​is a differential signal line, suitable for driving LCD screens with higher resolution. The total data transmission capacity of the EDP interface can reach 21.6Gbps, which is 3 times that of the LVDS interface. It can drive higher resolution LCD screens, such as 2K, 4K screens, etc. When routing, the relevant differential pairs must run differential lines of equal length, and the impedance matching is 100 ohms.

## MIPI design

MIPI is an alliance established in 2003 by ARM, Nokia, ST, TI and other companies. The purpose is to standardize the internal interfaces of mobile phones, such as cameras, displays, radio frequency baseband interfaces, etc., thereby reducing the design complexity of mobile phones and increasing design flexibility. MIPI is a relatively new standard. Currently, the more mature applications include DSI (Display Interface) and CSI (Camera Interface). RK3588 supports two DSI and six CSI interfaces, of which DSI is used to drive MIPI display and CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is much higher than that of the LVDS interface. Differential lines of equal length must be used when routing, and the impedance matching is 100 ohms.
