---
sidebar_position: 4
title: Hardware Design
description: X7110CV1 core board hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO levels

The description of the power pins of the GPIO power domain is as follows:

| power domain | GPIO power supply voltage | Description | JH7110Core BoardCore BoardIO level |
| --- | --- | --- | --- |
| GPIO1 Domain | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| GPIO2 Domain | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| GPIO3 Domain | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| GPIO4 Domain | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |


When designing the baseboard, pay attention to the IO level of the peripheral chip to be consistent with the IO level of the Core Board, otherwise the CPU will be burned out.

Power supply design

JH7110Core Board only requires main power supply for normal use. The detailed power pin definition is as follows:

91、Pins 92 and 93: 5V/3A Power input interface. To ensure stable and reliable operation of the CPU, be sure to provide sufficient current and ensure that the power supply ripple voltage is controlled below 100MV. In addition, the power supply traces should be as wide as possible (more than 2MM), and there should be no less than 5 layer-changing vias;

Pins 88, 89, and 90: 3.3V/1A Power output, can be used for interface board power supply (some peripherals have power-on timing requirements, please refer to the description of the above Core BoardPin Definition for the corresponding peripheral power supply);

Pins 97, 98, and 99: 3.3V/1A Power output, can be used for interface board power supply (some peripherals have power-on timing requirements, please refer to the description of the above Core BoardPin Definition for the corresponding peripheral power supply);

100, 101 pins: 1.8V/500MAPower output, can be used for the IO domain power supply of the baseboard audioCODEC and network PHY chip.

USB design

JH7110Core Board has 1chUSB 2.0 and 1chUSB 3.0 ports. The USB 2.0 port is designed on the Development Board for firmware upgrade (device) and USB HOSTmuxed as, and is used for firmware upgrade through external USB 5V insertion for detection and switching to DEVICE.

By default, the USB 2.0 interface can reach a speed of 480Mbps, while USB 3.0 can reach a bandwidth of 5Gbps at the fastest. Therefore, the PCB trace requires characteristic impedance matching. When routing the differential pairs of the USB interface on the PCB, the differential lines must be of equal length, the characteristic impedance is 90 ohms -/+10%, and a complete reference plane is required.

HDMI design

The JH7110 chip comes with a HDMI OUT controller and supports HDMI2.0 protocol. The corresponding HDMI differential pairs on the Core Board must use differential lines of equal length, and the impedance matching is 100 ohms -/+10%, otherwise problems such as color loss and intermittent HDMI screen will occur.

MIPI design

JH7110 supports 1chMIPI DSI and 1chMIPI CSI interface, where DSIfor drives the MIPI display and CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is high. Differential lines of equal length must be used when routing, and the impedance matching is 100 ohms -/+10%.
