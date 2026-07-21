---
sidebar_position: 4
title: Hardware Design
description: X3562 core board hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

Core BoardGPIO levels

The description of the power pins of the GPIO power domain is as follows:

| power domain | GPIO power supply voltage | Description | X3562Core BoardIO levels |
| --- | --- | --- | --- |
| PMUIO0 | VCC3V3_PMU | The IO voltage domain is only 3.3V | 3.3V |
| PMUIO1 | VCCA1V8_PMU/VCC3V3_PMU | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO1 | VCCIO_ACODEC | The IO voltage domain can be configured as 1.8V or 3.3V. Our Core Board is uniformly configured as | 3.3V |
| VCCIO2 | VCCIO_FLASH | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 1.8V. | 1.8V |
| VCCIO3 | VCCIO_SD | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| VCCIO4 | VCCA1V8_PMU/VCC3V3_PMU | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 3.3V. | 3.3V |
| SARADC_AVDD | VCC_1V8 | IO voltage domain is only 1.8V | 1.8V |
| VCCIO5 | VCC1V8_DVP | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 1.8V. | 1.8V |
| VCCIO6 | VCC_1V8/VCC_3V3 | The IO voltage domain can be configured to 1.8V or 3.3V. Our Core Board is uniformly configured to 1.8V. | 1.8V |


When designing the baseboard, pay attention to the IO level of the peripheral chip to be consistent with the IO level of the Core Board, otherwise the CPU will be burned out.

Power supply design

X3562Core Board only requires main power supply for normal use. The detailed power pin definition is as follows:

45、Pin 46: 5V/3A Power input interface. In order to ensure stable and reliable operation of the CPU, it is necessary to ensure that sufficient current is provided and the power supply ripple voltage is controlled below 100MV. In addition, the power supply traces should be as wide as possible (more than 2MM), and there should be no less than 5 layer-changing vias;

47、48-pin: 3.3V/3A Power input interface. To ensure stable and reliable operation of the CPU, it is necessary to ensure that sufficient current is provided and the power supply ripple voltage is controlled below 100MV. In addition, the power supply traces should be as wide as possible (more than 2MM), and there should be no less than 5 layer-changing vias.

Pin 65: 1.8V/2.5A Power output, can be used for interface board power supply (some peripherals have power-on timing requirements, please refer to the description of the above Core BoardPin Definition for the corresponding peripheral power supply);

Pin 49: 3.0V/400MAPower output, can be used for the IO domain power supply of the baseboard audioCODEC and network PHY chip.

USB design

X3562Core Board has 2chUSB 2.0 and 1chUSB 3.0 ports. The USB 2.0 port is designed on the Development Board for firmware upgrade (device) and USB HOSTmuxed as, and is used for firmware upgrade through external USB 5V insertion for detection and switching to DEVICE.

By default, the USB 2.0 interface can reach a speed of 480Mbps, while USB 3.0 can reach a bandwidth of 5Gbps at the fastest. Therefore, the PCB trace requires characteristic impedance matching. When routing the differential pairs of the USB interface on the PCB, the differential lines must be of equal length, the characteristic impedance is 90 ohms -/+10%, and a complete reference plane is required.

MIPI design

X3562 supports 1chMIPI DSI and 2chMIPI CSI interface, where DSIfor drives the MIPI display and CSI can be connected to an external MIPI camera. The data transmission rate of the MIPI interface is high. Differential lines of equal length must be used when routing, and the impedance matching is 100 ohms -/+10%.
