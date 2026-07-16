---
sidebar_position: 4
title: Hardware Design
description: I3128核心板 hardware design notes
---

# Hardware Design

Hardware Design

pinDescription

RK3128除差分对、ADCinput脚外的GPIO口都可以muxed as 作其他Function，如I2C、UART、SPI、I2S、PWM等等。因篇幅有限，本文Description不尽详细，如有需要，可以通过仔细阅读Core Board原理图获取更多信息。

GPIO电源

GPIO电源域的电源脚Description如下：

| 电源域 | GPIOType | Description | I3128Core Board电平 |
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


电源设计

I3128CV1Core Board采用5Vpower supply的方式，用户只需给第59、60、61pin供5V的直流电，Core Board即可以正常工作。另外，Core Board还有一些其他的电源pin，具体定义如下：

1、59、60、61脚：Core Board电源power supply端，默认input4.8到5.5V/1A；

2、56脚：RTCPower input，3V/50mA；

3、57、58脚：电池 interface，for 电池power supply；

4、24、25、48、49脚：Core Board公共Ground；

5、53、54脚：通过电源适配器或电池给Core Boardpower supply后，PMU的公共Power output端，通常电压在3.5V到5V之间，具体受Input Voltage决定，它可以给整机power supply；

6、62、63脚：3.3Voutput，可for 底板power supply。
