---
title: Hardware Design
sidebar_position: 6
---
# Hardware Design

The I527BV3 is a complete carrier board. This page summarizes constraints for extensions and debugging. See [Core-board Pinout](./i527-pin-definition.md) for the X527CV2 200-pin module.

## Power

- Board input is 12 V; 3 A or more is recommended.
- Account for peak current from USB 3.0, M.2, 4G, displays, backlight and fan.
- Display connectors carry 3.3 V, 5 V and 12 V rails. Verify every pin before connecting a panel.
- Panel, camera and LT6911C power/reset sequences must be implemented in regulators, GPIOs and drivers.

## High-speed routing

| Interface | Nominal differential impedance | Main constraints |
|---|---:|---|
| USB 2.0 | 90 Ω | Pair matching and continuous reference plane |
| USB 3.0 | 90 Ω | Tight SuperSpeed matching, few vias/stubs |
| HDMI | 100 Ω | TMDS matching and low-capacitance ESD |
| MIPI DSI/CSI | 100 Ω | Lane mapping, polarity and bitrate must match software |
| eDP/LVDS | 100 Ω | Controlled differential routing |
| PCIe | 85 Ω | REFCLK, PERST, CLKREQ and power sequencing |

## Display multiplexing

LVDS0 and MIPI DSI0 share the 30-pin/40-pin connectors. Switching the interface requires matching resistor population, device-tree nodes, pinctrl, panel power/backlight/reset and panel timing/initialization. Never enable both functions on the same pins.

## HDMI IN pipeline

```text
HDMI source -> LT6911C -> MIPI CSI D-PHY -> CSI/VIPP/ISP -> application
```

Debug LT6911C firmware, I2C/reset/interrupt, output lanes and bitrate, format changes and the kernel media graph as one complete pipeline.

## Low-speed buses

RS232, RS485 and CAN connectors are behind transceivers. Debug UARTs are 3.3 V logic and must not be connected directly to an RS232 voltage-level port. ADC inputs belong to a 1.8 V analog domain and must stay within the permitted range.
