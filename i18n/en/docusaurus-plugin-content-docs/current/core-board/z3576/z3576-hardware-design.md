---
sidebar_position: 4
title: Hardware Design
description: Z3576 core board hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO levels

The description of the power pins of the GPIO power domain is as follows:

| power domain | GPIO power supply voltage | Description | Core BoardIO levels |
| --- | --- | --- | --- |
| PMUIOO | 1.8V | IO voltage domain is only 1.8V | 1.8V |
| PMUIO1 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V. It is derived from the Core Boardpin and is powered by the baseboard power supply. | It is determined by the voltage supplied by the baseboard to Core BoardPMUIO1 pinpower. |
| VCCIO0 | 1.8V | IO voltage domain is only 1.8V | 1.8V |
| VCCIO1 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the base board to Core BoardVCCIO1pinpower. |
| VCCIO2 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the baseboard to Core BoardVCCIO2pinpower. |
| VCCIO3 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the baseboard to Core BoardVCCIO3pinpower. |
| VCCIO4 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the baseboard to Core BoardVCCIO4pinpower. |
| VCCIO5 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the baseboard to Core BoardVCCIO5pinpower. |
| VCCIO6 | 1.8V/3.3V | The IO voltage domain can be configured to 1.8V or 3.3V, which is supplied by the backplane power supply | It is determined by the voltage supplied by the baseboard to Core BoardVCCIO6pinpower. |
| VCCIO7 | 1.2V/1.8V | The IO voltage domain can be configured to 1.2V or 1.8V. Our Core Board is uniformly configured to 1.8V. | 1.8V |


When designing the baseboard, pay attention to the IO level of the peripheral chip to be consistent with the IO level of the Core Board, otherwise the CPU will be burned out.

Power supply design

Z3576Core Board only requires main power supply for normal use. The detailed power pin definition is as follows:

144、Pins 146, 147, and 148: 5V/3A Power input interface. In order to ensure stable and reliable operation of the CPU, it is necessary to ensure that sufficient current is provided and the power supply ripple voltage is controlled below 100MV. In addition, the power supply traces should be as wide as possible (more than 2MM), and there should be no less than 5 layer-changing vias;

Pin 301: 3.3V/0.5A Power output, can be used for interface board power supply (some peripherals have power-on timing requirements, please refer to the description of the above Core BoardPin Definition for the corresponding peripheral power supply);

318、Pins 319, 320, and 321: 3.3V/5A Power output, can be used for power supply with higher baseboard current requirements.

The picture below shows the core power supply pins for the CPU, NPU, GPU, and DDR power supply, which are led out from the Core Board. When designing the baseboard, capacitor filtering needs to be added to the baseboard to enhance stability;

USB design

Z3576 Core Board has 2ch USB 2.0 and 2ch USB 3.0 ports. The USB 2.0 port is designed on the Development Board for firmware upgrade (device) and USB HOST muxed as, and is used for firmware upgrade by plugging in an external USB 5V for detection and switching to DEVICE.

HDMI design

The Z3576 chip comes with a HDMI OUT controller and supports HDMI2.0 protocol. The corresponding HDMI differential pairs on the Core Board must use differential lines of equal length, and the impedance matching is 100 ohms -/+10%, otherwise problems such as color loss and intermittent HDMI screen will occur.

MIPI design

Z3576 supports 1chMIPI DSI and 2chMIPI CSI interface, where DSIfor drives the MIPI display and CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is high. Differential lines of equal length must be used when routing, and the impedance matching is 100 ohms -/+10%.
