---
sidebar_position: 6
title: Hardware Design
description: X3128BV3 core board, power, USB, HDMI, and LCD design notes
---

# Hardware Design

## Core Board Design

Capacitor pads are reserved on the back side of the X3128 core board. Since RK3128 is an entry-level chip, many low-cost designs use 100M Ethernet. Therefore, these capacitors are not populated by default. For projects requiring Gigabit Ethernet, it is recommended to populate the back-side capacitors to reduce packet loss. Baseboard mechanical openings should refer to the development board design and avoid interference with the back-side capacitors.

For differentiation, the core board without these capacitors is X3128CV4, while the populated version is X3128CV4P.

## Power Design

The X3128CV4 core board uses 5V power input. Supplying 5V DC to pins 115, 116, and 117 powers the core board.

Key power pins:

- Pins 115, 116, and 117: core-board power input, 4.8V to 5.5V / 1A by default.
- Pin 119: RTC power input, 3V / 50mA.
- Pins 120 and 121: battery interface.
- Pins 72, 73, 109, and 110: common ground.
- Pins 1 and 144: PMU common power output, usually 3.5V to 5V depending on input voltage, available for system power.
- Pins 123, 124, 125, and 126: PMU LDO1, LDO2, LDO6, and LDO5 outputs, adjustable voltage.
- Pins 36 and 37: 3.3V output for baseboard power.

## USB Design

RK3128 provides one HOST port and one OTG port. The OTG port can work as either HOST or DEVICE.

For PCB routing, pins 23 and 24, HOST_DP / HOST_DM, form one USB differential pair. Pins 25 and 26, OTG_DP / OTG_DM, form another USB differential pair. Length matching and impedance control are recommended. The target differential impedance is about 90 ohms; otherwise, USB transmission may become unstable.

## HDMI Design

RK3128 integrates an HDMI controller and supports HDMI 2.0. Pins 12 to 19 of the core board are four HDMI differential pairs. These traces require length matching and approximately 100-ohm differential impedance control. Otherwise, HDMI color loss or intermittent display may occur.

## LCD Interface Design

RK3128 integrates RGB, LVDS, and MIPI LCD controllers. To reduce cost, these three groups of LCD pins are fully multiplexed. Only one of RGB / LVDS / MIPI can be used at a time. When configured as LVDS or MIPI, the interface is suitable for higher-resolution LCD panels. Differential pair length matching and impedance control are required, with a recommended impedance of about 100 ohms.
