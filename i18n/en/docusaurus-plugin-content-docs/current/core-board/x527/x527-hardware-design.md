---
sidebar_position: 3
title: Hardware Design
description: X527 core-board GPIO levels and carrier-board guidance for power, USB, HDMI, and MIPI
---

# Hardware Design

## Pin Description

Except for interfaces explicitly marked as non-GPIO, power pins, and ground pins, the remaining X527 GPIOs can normally be multiplexed to I2C, UART, SPI, I2S, PWM, and other functions. Confirm multiplexing from the core-board schematic and T527/A527 datasheet.

## GPIO Levels

Carrier-board peripheral I/O levels must match the corresponding X527 power domains. A mismatch can damage the SoC or peripheral.

| Power Domain | Supported Supply | X527 I/O Level |
|---|---|---|
| VCC-PC | 1.8V / 3.3V | 1.8V |
| VCC-PD | 1.8V / 3.3V | 3.3V |
| VCC-IO | 3.3V | 3.3V |
| VCC-PG | 1.8V | 1.8V |
| VCC-PE | 1.8V / 3.3V | 1.8V |
| VCC-PI | 3.3V | 3.3V |
| VCC-PJ | 1.8V / 3.3V | 3.3V |
| VCC-PM | 1.8V / 3.3V | 1.8V |
| VCC-PL | 1.8V / 3.3V | 3.3V |
| VCC-PK | 1.8V / 3.3V | 3.3V |
| VCC-LVDS0 | 1.8V | 1.8V |
| VCC-LVDS1 | 1.8V | 1.8V |
| VCC-MCSI | 1.8V | 1.8V |

## Power Design

The X527 requires only the main supply for normal operation.

- Pins 101, 102, and 103 are `VCC-SYS-5V` main power inputs.
- The recommended supply capability is **5V/3A**.
- Keep supply ripple below **100mV**.
- Use power traces wider than **2mm** where possible.
- Use at least **five vias** when the main supply changes layers.
- Pin 109 is the `DCDC4` 3.3V output.
- Pin 110 is the `CLDO3` 3.3V output.

> **Parameter difference:** The feature table rates DCDC4 at 3.3V/3A and CLDO3 at 3.3V/500mA, while the hardware-design text describes pins 109 and 110 together as a 3.3V/1A output. Use the core-board schematic, AXP717B configuration, and measurements as the final production references.

## USB Design

The X527 provides three USB2.0 ports and one USB3.0 port. One USB2.0 port is used as a Device Type-C firmware-upgrade interface on the development board.

- USB2.0 nominal bandwidth is 480Mbps.
- USB3.0 nominal bandwidth is up to 5Gbps.
- Route differential pairs length-matched.
- The specified differential impedance is **90Ω ±10%**.
- Maintain a continuous reference plane below the pairs.

## HDMI Design

The X527 integrates one HDMI OUT controller with HDMI2.0 support.

- Route the HDMI high-speed pairs length-matched.
- The specified differential impedance is **100Ω ±10%**.
- Poor impedance or skew control can cause missing colors, intermittent video, or no display.

## MIPI Design

The hardware-design chapter states that the X527 supports one MIPI DSI interface and three MIPI CSI interfaces:

- MIPI DSI connects to a display panel.
- MIPI CSI connects to camera sensors.
- Route the MIPI high-speed pairs length-matched.
- The specified differential impedance is **100Ω ±10%**.

Confirm the number of active interface instances, lane multiplexing, and resistor population from the core-board schematic.
