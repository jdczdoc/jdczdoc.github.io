---
sidebar_position: 4
title: Hardware Design
description: X3288CV5 core board hardware design notes
---

# Hardware Design

Hardware Design

Power supply design

X3288CV5Core Board adopts 5V power supply method. Users only need to supply 5V DC power to pin 159 and 160, and the Core Board can work normally. In addition, the Core Board has some other power pins, which are specifically defined as follows:

1、Pins 159 and 160: Core Board power supply terminal, default input is 4.5 to 5.5V/2A;

2、Pin 161: When using OTG to program the image, or when connecting a device, the PC inputs 5V/500mA voltage through the USB extension cable. Usually this pin is connected to the power end of the OTG;

3、162, 163 feet: hanging in the air;

4、164, 165 feet: Core Board public ground;

5、Pins 166 and 167: floating or connected to pins 159 and 160;

6、Pin 168: RTC power supply pin, usually this pin is powered by a backup battery to maintain the real-time clock;

7、Pin 169: 3.3Voutput, can be used for baseboard power supply.

USB design

RK3288 has two chHOST ports and one chOTG port. The OTG port can be used as a HOST port or a DEVICE, which is a standard OTG port.

Note that there is a difference between HOST1 port and HOST2 port. By default, HOST1 port cannot directly connect to low-speed USB devices, such as mouse and keyboard, etc. It needs to go through the HUB chip to connect to some low-speed devices, while HOST2 can directly use various high-speed and low-speed devices. This problem will no longer exist on subsequent Core Boards with the RK3288W chip attached.

HDMI design

The RK3288 chip comes with an HDMI controller and supports the HDMI2.0 protocol. There are a total of 8 pins from 47th to 54th on the Core Board, and 4 pairs of differential lines. Differential lines must be of equal length, and the impedance must be matched to 100 ohms, otherwise problems such as color loss and intermittence of the HDMI picture will occur.

LVDS design

The RK3288 chip comes with an LCD controller for RGB and LVDS interfaces. LVDS is a differential signal line and is suitable for driving LCD screens with higher resolutions. It includes 12 sets of transmission lines, 10 of which are data lines, and the other two are clock lines, corresponding to Core Board's 5 and 28 pins.

The LVDS interface can provide high data transmission rates while ensuring very low power consumption. Its data rate can reach several hundred Mbps to 2Gbps. When routing, the 12 sets of transmission lines must be equal-length differential lines, and the impedance matching is 100 ohms.

MIPI design
