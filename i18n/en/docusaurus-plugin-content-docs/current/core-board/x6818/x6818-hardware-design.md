---
sidebar_position: 4
title: Hardware Design
description: X6818 core board hardware design notes
---

# Hardware Design

Hardware Design

Power supply design

122、Pin 123: Battery input terminal, connected to a single 4.2V lithium battery, just leave it unconnected when the battery is not needed.

124、Pin 125: Input terminal of power adapter, 4.5 to 5.5V/1A input.

Pin 126: The common level output terminal of the battery and power adapter. Its voltage is determined by the battery and power adapter and can be used for the baseboard power supply.

Pin 145: DC5V_OTG This pin is for Core Board input and does not supply 5V to the external power supply. For customized baseboard OTGFunction, please refer to the x6818Development BoardOTG design.

Note: Customers must design a 1.8V power supply for this pin when customizing the baseboard. For circuit design, please refer to the x6818 baseboard.

Pin 175: 3.3Voutput, can be used for baseboard power supply. This level will be turned off when the Core Board is sleeping and restored after waking up.

20-27, 93-98 pins, compatible with the old version (x4418CV2.0) startup configuration (this circuit has been designed on the Core Board after x4418CV3.0, no configuration is required for customer-customized baseboards), please refer to the x6818 baseboard configuration.

USB design

HDMI design

The S5P6818 chip comes with an HDMI controller and supports the HDMI1.4 protocol. There are a total of 8 pins from 37th to 44th on the Core Board, and 4 pairs of differential lines. The differential lines must be of equal length and the impedance matching is 100 ohms. Otherwise, problems such as color loss and intermittent interruption in the HDMI screen will occur.

LVDS design

The S5P6818 chip comes with an LCD controller for RGB and LVDS interfaces. LVDS is a differential signal line and is suitable for driving LCD screens with higher resolutions. It includes 5 sets of transmission lines, 4 of which are data lines, corresponding to pins 48 to 55 of the Core Board, and the other set is clock lines, corresponding to pins 46 and 47 of the Core Board.

The LVDS interface can provide high data transmission rates while ensuring very low power consumption. Its data rate can reach several hundred Mbps to 2Gbps. When routing, the five sets of transmission lines must be equal-length differential lines, and the impedance matching is 100 ohms.

MIPI design

DDR designDescription
