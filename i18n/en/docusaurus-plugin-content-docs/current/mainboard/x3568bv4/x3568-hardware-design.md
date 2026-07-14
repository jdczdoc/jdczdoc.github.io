---
sidebar_position: 5
title: Hardware Design
description: X3568V4 power, USB, display, camera, Ethernet, and high-speed interface design notes
---

# Hardware Design

This page keeps only the hardware rules that are useful when designing a carrier board or connecting external peripherals. It does not repeat connector descriptions or pin tables.

## Power Design

The X3568V4 mainboard uses a 12V DC power supply. When extending the carrier board or external peripherals, ensure that the input power has sufficient current capacity, widen power traces where possible, and maintain a good ground return path.

Key electrical parameters of the core-board side:

| Item | Parameter |
| --- | --- |
| 3.3V input | 3.3V / 2A |
| RTC input | 3V / 0.6uA |
| Output voltage | 3.3V / 1.5A, available for carrier-board power supply |
| Operating temperature | -10~70°C |
| Storage temperature | -10~40°C |

## USB Design

RK3568 provides USB HOST2.0, HOST3.0, and OTG interfaces. The OTG interface is multiplexed with one USB3.0 interface, so the product design must define the DIP switch or hardware multiplexing state clearly.

PCB routing recommendations:

- Route USB2.0 D+/D- as length-matched differential pairs and control the differential impedance at about 90Ω;
- USB3.0 TX/RX high-speed differential pairs require strict length matching, continuous reference planes, and impedance control;
- For the OTG flashing port, ensure that VBUS, ID, D+/D-, and ESD protection are designed correctly.

## Display Interface Design

RK3568 supports DSI, LVDS, EDP, and HDMI output. On X3568V4, the left connector can switch between DSI/LVDS by software, while the right connector is assigned to DSI/EDP by 0Ω resistor configuration on the core board.

Design notes:

- DSI / LVDS / EDP high-speed differential pairs require length matching, impedance control, and continuous reference planes;
- Backlight power, backlight enable, PWM dimming, and touch I2C / interrupt / reset signals must match the display module specification;
- HDMI differential pairs should follow high-speed signal routing rules and include reliable ESD protection.

## Camera Interface Design

The camera connector is a 30PIN camera interface. For different OV-series camera modules, check the power rails, reset, PWDN, MCLK, I2C, and MIPI / parallel data line definitions. When replacing a camera module, also check the device tree, driver, power sequence, and clock configuration.

## Ethernet Design

The X3568V4 supports dual Gigabit Ethernet, and the PHY is YT8521CA. Pay attention to RGMII trace length, clock, reset, PHY address, power supply, and Ethernet transformer routing. Reliable ESD and common-mode protection are recommended near the Ethernet connectors.

## PCIe / SATA Design

PCIe and SATA are high-speed interfaces. Differential impedance, length matching, reference-plane continuity, and connector layout must be carefully controlled. Peripheral compatibility issues are often related to clock, power, reset timing, and high-speed signal quality.

## GPIO / UART Expansion

GPIO, UART, I2C, SPI, PWM, and other interfaces share multiplexed pins. Before connecting external devices, confirm the default function, IO voltage domain, pull-up / pull-down state, and device-tree configuration of the corresponding pins.
