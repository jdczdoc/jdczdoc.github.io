---
sidebar_position: 4
title: Hardware Design
description: X3576CV1 core board hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO levels

The description of the power pins of the GPIO power domain is as follows:

| power domain | GPIO power supply voltage | Description | X3576Core BoardIO levels |
| --- | --- | --- | --- |
| PMUIO0 | 1.8V | IO voltage domain is only 1.8V | 1.8V |
| PMUIO1 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO0 | 1.8V | IO voltage domain is only 1.8V | 1.8V |
| VCCIO1 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. The default is 3.3V. The voltage of LDO5 can be controlled through the program. | 3.3V |
| VCCIO2 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO3 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 1.8V. | 1.8V |
| VCCIO4 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO5 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 1.8V. | 1.8V |
| VCCIO6 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO7 | 1.2V/1.8V | The IO voltage domain can be configured to 1.2V or 1.8V. Our Core Board is uniformly configured to 1.2V. | 1.2V |


When designing the baseboard, pay attention to the IO level of the peripheral chip to be consistent with the IO level of the Core Board, otherwise the CPU will be burned out.

Power supply design

X3576Core Board only requires main power supply for normal use. The detailed power pin definition is as follows:

159、Pin 160: 5V/3A Power input interface. To ensure stable and reliable operation of the CPU, be sure to provide sufficient current and ensure that the power supply ripple voltage is controlled below 100MV. In addition, the power supply traces should be as wide as possible (more than 2MM), and there should be no less than 5 layer-changing vias;

Pin 161: 3.3V/1APower output, can be used for interface board power supply (some peripherals have power-on timing requirements, please refer to the description of the above Core BoardPin Definition for power supply of the corresponding peripherals);

Pin 156: 1.8V/500MAPower output, can be used for the IO domain power supply of the baseboard audioCODEC and network PHY chip.

USB design

X3576Core Board has 2chUSB 2.0 and 2chUSB 3.0 ports. The USB 2.0 port is designed on the Development Board for firmware upgrade (device) and USB HOSTmuxed as, and is used for firmware upgrade through external USB 5V insertion for detection and switching to DEVICE.

By default, the USB 2.0 interface can reach a speed of 480Mbps, while USB 3.0 can reach a bandwidth of 5Gbps at the fastest. Therefore, the PCB trace requires characteristic impedance matching. When routing the differential pairs of the USB interface on the PCB, the differential lines must be of equal length, the characteristic impedance is 90 ohms -/+10%, and a complete reference plane is required.

HDMI design

The X3576 chip comes with a HDMI OUT controller and supports HDMI2.0 protocol. The corresponding HDMI differential pairs on the Core Board must use differential lines of equal length, and the impedance matching is 100 ohms -/+10%, otherwise problems such as color loss and intermittent HDMI screen will occur.

MIPI design

X3576 supports 1chMIPI DSI and 3chMIPI CSI interface, where DSIfor drives the MIPI display and CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is high. Differential lines of equal length must be used when routing, and the impedance matching is 100 ohms -/+10%.
