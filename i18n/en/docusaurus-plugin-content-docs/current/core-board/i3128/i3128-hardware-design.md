---
sidebar_position: 4
title: Hardware Design
description: I3128 core board hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

In addition to the differential pair and ADC input pin, all GPIO ports of RK3128 can be muxed as other functions, such as I2C, UART, SPI, I2S, PWM, etc. Due to limited space, this description is not detailed. If necessary, you can get more information by carefully reading the Core Board schematic diagram.

GPIO power

The description of the power pins of the GPIO power domain is as follows:

| power domain | GPIOType | Description | I3128Core Board level |
| --- | --- | --- | --- |
| VLDO1 | 2.8V | VCC28_CIF | 2.8V |
| VLDO2 | 1.8V | VCC18_CIF | 1.8V |
| VLDO3 | 1.1V | VDD_11 | 1.1V |
| VLDO4 | 1.1V | VDD_11_HDMI | 1.1V |
| VLDO5 | 3.0V | VCCA_CODEC | 3.0V |
| VLDO6 | 3.0V | VCC_TP/VCC33_HDMI | 3.0V |
| DCDC1 | 1.1V | VDD_ARM | 1.1V |
| DCDC2 | 1.1V | VDD_LOG | 1.1V |
| DCDC3 | 1.5V | VCC_DDR | 1.5V |
| DCDC4 | 3.3V | VCC_IO/VCCIO_WL/VCC_SD / FLASH/VCC_LCD | 3.3V |


Power supply design

I3128CV1Core Board uses 5V power supply. Users only need to supply 5V DC power to pins 59, 60, and 61, and the Core Board can work normally. In addition, the Core Board has some other power pins, which are specifically defined as follows:

1、Pins 59, 60, and 61: Core Board power supply terminal, default input is 4.8 to 5.5V/1A;

2、Pin 56: RTCPower input, 3V/50mA;

3、Pins 57 and 58: battery interface, for battery power supply;

4、24, 25, 48, 49 pins: Core Board public ground;

5、Pins 53 and 54: After supplying power to the Core Board through the power adapter or battery, the PMU's public Power output terminal usually has a voltage between 3.5V and 5V, depending on the Input Voltage. It can supply power to the entire machine;

6、Pins 62 and 63: 3.3Voutput, can be used for baseboard power supply.
