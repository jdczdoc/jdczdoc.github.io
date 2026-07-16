---
title: Hardware Design
sidebar_position: 5
description: "X507 power, USB, display, camera, Ethernet, and high-speed-interface design notes"
---

# Hardware Design

## Design References

The final carrier-board references are the X507CV1 schematic, the T507 datasheet, and the current SDK. The hardware manual lists the pin functions but does not provide a complete set of impedance, skew, and power-sequencing limits for every high-speed interface.

## Power

- The development board uses a 12V input; the standard adapter is 12V/2A.
- Core-module pins 159 and 160 are 5V inputs; pins 163 and 164 are 3.3V outputs.
- The core-module table specifies a 5V/2A input and a 3.3V/1.5A output.
- Before using the 3.3V output for carrier-board peripherals, verify peak load, sequencing, and PMIC configuration.
- The RTC input is specified as 3V/0.6µA.

## I/O Voltage

The supplied manual does not contain a complete GPIO voltage-domain table. Verify the actual voltage of every GPIO, UART, I2C, SPI, LCD, and camera signal from the schematic before PCB release; do not assume 3.3V from the interface name.

## USB

- USB0 is the OTG interface; USB1, USB2, and USB3 are USB 2.0 Host pairs.
- The carrier board fits two Type-A Host ports and one Micro USB OTG port.
- The OTG port is used by PhoenixSuit for firmware download.
- The manual does not specify impedance or skew limits; follow the T507 reference design.

## HDMI

The HDMI signals include CEC, DDC, HPD, the TMDS clock pair, and three TMDS data pairs. Use the T507 HDMI reference design and the PCB fabricator's impedance calculation because the supplied manual does not state the detailed routing limits.

## RGB/LVDS Display

RGB and LVDS share pins. The active mode depends on resistor population, connectors, device tree, and the display driver. Confirm at least the following items:

- I/O voltage and panel supplies.
- Backlight power, enable polarity, and PWM polarity.
- RGB/LVDS multiplexing.
- Resolution, pixel clock, and timing parameters.

## Camera

- MIPI CSI exposes four differential data lanes and control signals.
- The parallel connector carries BT.656/NCSI-style signals.
- Design AVDD, DVDD, IOVDD, MCLK, RESET, and PWDN sequencing for the selected sensor.

## Gigabit Ethernet

The module exposes RGMII and the carrier board fits an RTL8211F PHY. Verify RGMII clock direction, TX/RX delay configuration, PHY reset, the 25MHz reference clock, and PHY I/O power.

## PCIe and 4G Module

PCIe is used for a 4G communication module together with the SIM slot. In addition to the PCIe pairs, check peak module current, reset, wake, optional USB signals, and SIM-line ESD protection.

## Documentation Note

The board feature list states two USB Host 2.0 ports, while the core-module interface table states three Host channels. These can both be true: the core module exposes three Host signal groups, but only two Type-A Host connectors are fitted on the development board.
