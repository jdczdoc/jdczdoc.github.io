---
sidebar_position: 3
title: Hardware Design
description: X733 core-board GPIO levels and carrier-board guidance for power, USB, HDMI, and MIPI
---

# Hardware Design

## Pin Description

Except for interfaces explicitly marked as non-GPIO, power pins, and ground pins, the remaining X733 GPIOs can normally be multiplexed to I2C, UART, SPI, I2S, PWM, and other functions. Confirm multiplexing from the core-board schematic and A733 datasheet.

## GPIO Levels

Carrier-board peripheral I/O levels must match the corresponding X733 power domains. A mismatch can damage the SoC or peripheral.

| Power Domain | Supply | Description | X733 I/O Level |
|---|---|---|---|
| VCC-PC | 1.8V | Fixed | 1.8V |
| VCC-PD | 1.8V | Fixed | 1.8V |
| VCC-LVDS | 1.8V | Fixed | 1.8V |
| VCC-PE | 1.8V | Fixed | 1.8V |
| VCC-IO | 3.3V | Fixed | 3.3V |
| VCC18-PF | 1.8V | Fixed | 1.8V |
| VCC-PG | 1.8V | Fixed | 1.8V |
| VCC-PH | 3.3V | Fixed | 3.3V |
| VCC-PJ | 3.3V | Fixed | 3.3V |
| VCC-PK | 1.8V | Fixed | 1.8V |
| VCC-PL | 3.3V | Fixed | 3.3V |
| VCC-PM | 3.3V | Fixed | 3.3V |

## Power Design

According to the X733 pin table:

- Pins 17, 18, and 19 are `PS` 5V main power inputs.
- The recommended current is at least **3A**, with ripple below **100mV**.
- Use power traces wider than **2mm** where possible.
- Use at least **five vias** when the main supply changes layers.
- Pin 20 is the `DLDO5` 3.3V output for carrier-board audio CODEC and PHY I/O supplies.
- Pin 21 is the `BLDO5` 1.8V output for carrier-board audio CODEC and PHY I/O supplies.

> **Incorrect pin numbers in the source text:** The hardware-design paragraph identifies pins 159 and 160 as 5V inputs, pin 161 as a 3.3V output, and pin 156 as a 1.8V output. These numbers do not match the X733 200-pin table and appear to have been copied from another board. Use pins 17 through 21 and verify them against the schematic before PCB release.

## USB Design

The hardware-design text states two USB2.0 and two USB3.0 ports, while the feature table states three USB2.0 and two USB3.0 ports. The pin table exposes USB0, USB1, and USB2 USB2.0 differential pairs. Confirm the active port count and multiplexing from the schematic.

- USB2.0 nominal bandwidth is 480Mbps.
- USB3.0 nominal bandwidth is up to 5Gbps.
- Route differential pairs length-matched.
- The specified differential impedance is **90Ω ±10%**.
- Maintain a continuous reference plane below the pairs.

## HDMI Design

The X733 manual states that the SoC integrates one HDMI OUT controller with HDMI2.0 support.

- Route the HDMI high-speed pairs length-matched.
- The specified differential impedance is **100Ω ±10%**.
- Poor impedance or skew control can cause missing colors, intermittent video, or no display.

## MIPI Design

The X733 documentation contains different interface counts:

- The feature table lists two MIPI DSI interfaces and 4 + 4 + 2-lane MIPI CSI.
- The hardware-design text lists one MIPI DSI and two MIPI CSI interfaces.

Use the A733 datasheet, core-board schematic, and resistor population to determine the active interfaces and lane multiplexing.

Route MIPI high-speed pairs length-matched with **100Ω ±10%** differential impedance.
