---
sidebar_position: 4
title: Hardware Design
description: X3128 development board hardware hardware design notes
---

# Hardware Design

Hardware Design

Power supply design

X3128CV2Core Board adopts 5V power supply method. Users only need to supply 5V DC power to pins 115, 116, and 117, and the Core Board can work normally. In addition, the Core Board has some other power pins, which are specifically defined as follows:

1、Pins 115, 116, and 117: Core Board power supply terminal, the default input is 4.8 to 5.5V/1A;

2、Pin 119: RTCPower input, 3V/50mA;

3、Pins 120 and 121: battery interface, for battery power supply;

4、72, 73, 109, 110 feet: Core Board public ground;

5、1. Pin 144: After supplying power to the Core Board through the power adapter or battery, the PMU's public Power output terminal usually has a voltage between 3.5V and 5V, depending on the Input Voltage. It can supply power to the entire machine;

6、123, 124, 125, 126 pins: PMU's LDO1, LDO2, LDO6, LDO5 voltage output, specific Adjustable voltage;

7、Pins 36 and 37: 3.3Voutput, can be used for baseboard power supply.

USB design

RK3128 has a chHOST port and a chOTG port. The OTG port can be used as a HOST port or a DEVICE, which is a standard OTG port.

When routing the PCB, the 23rd and 24th pins of the Core Board, namely HOST_DP and HOST_DMpin, are a pair of differential lines, and the 25th and 26th pins, namely OTG_DP and OTG_DMpin, are a pair of nutrient lines. They must be equal-length differential lines and have an impedance matching of 90 ohms, otherwise USB transmission instability will occur.

HDMI design

The RK3128 chip comes with an HDMI controller and supports the HDMI2.0 protocol. There are a total of 8 pins from 12th to 19th on the Core Board, and 4 pairs of differential lines. Differential lines must be of equal length and have an impedance matching of 100 ohms. Otherwise, problems such as discoloration and intermittent HDMI screen may occur.

LCD Interface Design

Impedance matching is 100 ohms.
