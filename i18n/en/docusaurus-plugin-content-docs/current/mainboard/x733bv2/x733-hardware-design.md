---
title: Hardware Design
sidebar_position: 6
---
# Hardware Design

This page summarizes second-level development and board-debugging considerations. See [Connector Pinout](./x733-pin-definition.md) for baseboard connector definitions.

## Power design

- The main input is 12 V; use an adapter rated for at least 3 A.
- Budget peak power when USB 3.0, M.2, HDMI, panel backlight, speaker amplifiers and the fan are active together.
- Battery `TS` is a temperature-sense input and the battery pack must match the PMIC sensing network.
- The eDP connector carries both 3.3 V panel power and 12 V backlight power; never attach a cable based only on connector shape.
- The camera connector carries 1.2 V, 1.8 V and 2.8 V rails; verify sensor requirements and sequencing.

## High-speed routing

| Interface | Differential impedance | Key requirements |
|---|---:|---|
| USB 2.0 | 90 Ω | Pair matching and an uninterrupted reference plane |
| USB 3.0 | 90 Ω | Tight SuperSpeed matching and low via/connector loss |
| HDMI | 100 Ω | TMDS intra-pair/group matching and low-capacitance ESD |
| MIPI DSI/CSI | 100 Ω | Lane polarity/order/rate must match device tree |
| eDP | 100 Ω | Control main-link and AUX routing separately |
| M.2/PCIe-class links | 85 Ω | Clock, reset, power sequencing and insertion loss |

## HDMI input path

HDMI IN is not a native A733 HDMI receiver. LT6911C converts HDMI to MIPI CSI:

```text
HDMI Connector -> ESD/HPD/DDC -> LT6911C -> MIPI D-PHY -> A733 CSI -> Android Camera/Video Pipeline
```

Check LT6911C power, clock, I2C address, firmware, reset, interrupt, output format, lane count and lane rate.

## Display and touch

- DSI and eDP are separate connectors, but concurrent output depends on A733 display pipelines, device tree and Android display HAL.
- Panel power, reset, backlight enable and PWM sequencing must follow the panel specification.
- Validate touch I2C independently from display data and power.
- A panel replacement usually requires timing, lane, init-command, GPIO, regulator and touch-mapping changes.

## USB hub

One Type-A USB 2.0 port and three 4-pin headers are expanded by FE1.1S. For enumeration failures, verify hub power/reset, the upstream port, VBUS, differential routing and downstream load before focusing on a single connector.

## Audio and thermal

- Do not parallel the 3 W@8 Ω amplifier outputs or use an undersized load.
- Route differential microphone inputs away from DC/DC converters, backlight PWM and high-speed signals.
- Use a heatsink for sustained A733 workloads and enable the 12 V fan according to measured temperature.
