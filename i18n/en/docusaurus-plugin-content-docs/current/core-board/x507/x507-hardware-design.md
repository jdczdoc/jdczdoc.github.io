---
sidebar_position: 3
title: Hardware Design
description: X507CV1 core-board power, USB, HDMI, display, and camera interface design notes
---

# Hardware Design

## Pin Description

The X507CV1 manual lists the signal names and interface types of all 172 pins, but it does not provide the complete GPIO multiplexing matrix or a GPIO power-domain table. Before carrier-board design, use the core-board schematic and T507 datasheet to confirm multiplexing, I/O voltage, pull resistors, and reset states.

## Power Design

The X507CV1 uses a 5V main supply.

- Pins 159 and 160 are `ACIN` 5V power inputs.
- Pins 161 and 162 are system ground.
- Pins 163 and 164 are `DCDC1` 3.3V outputs.
- The specified input supply is **5V/2A**.
- The specified 3.3V output capability is **3.3V/1.5A**.
- The RTC input specification is **3V/0.6µA**.
- Pin 23 is `PMU-PWRON` for the power key.

Confirm power sequencing, output-load limits, and decoupling requirements from the core-board schematic before PCB release.

## USB Design

The X507CV1 exposes one USB OTG interface and three USB2.0 Host interfaces:

| Interface | Pins |
|---|---|
| USB0 OTG | 47: USB0-DM; 48: USB0-DP |
| USB1 | 49: USB1-DM; 50: USB1-DP |
| USB2 | 51: CON-USB2-DM; 52: CON-USB2-DP |
| USB3 | 53: USB3-DP; 54: USB3-DM |

The source manual does not state detailed differential-impedance, VBUS-switch, or OTG role-detection requirements. Use the T507 reference design and core-board schematic as the final design references.

## HDMI Design

HDMI output signals are located on pins 55 through 66 and include CEC, DDC, HPD, the clock pair, and three data pairs.

| Function | Pins |
|---|---|
| CEC | 55: HCEC |
| DDC | 56: HSDA; 57: HSCL |
| Hot-plug detect | 58: HHPD |
| TMDS clock | 59: HTXCN; 60: HTXCP |
| TMDS data 0 | 61: HTX0N; 62: HTX0P |
| TMDS data 1 | 63: HTX1N; 64: HTX1P |
| TMDS data 2 | 65: HTX2P; 66: HTX2N |

The source manual does not specify the HDMI impedance and pair-skew limits. Follow the T507 HDMI reference design for PCB implementation.

## Display Interface Design

The RGB/LVDS multiplexed display signals are mainly located on pins 67 through 95 and include data, pixel clock, horizontal and vertical sync, data enable, and backlight PWM.

RGB and LVDS share pins. Confirm the active mode from the core-board schematic, carrier-board resistor population, and software device-tree configuration.

## Camera Interface Design

The module exposes MIPI CSI and parallel CSI interfaces:

- Pins 34 through 46 provide MIPI CSI control signals and four data lanes.
- Pins 128 through 150 provide the parallel NCSI camera bus and frame-sync signal.

Confirm sensor supply rails, reset sequencing, MCLK, I/O voltage, and lane count against the selected sensor and T507 camera reference design.
