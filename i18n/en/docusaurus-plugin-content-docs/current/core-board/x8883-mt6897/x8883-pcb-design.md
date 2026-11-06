---
sidebar_position: 4
title: PCB Design and Layout
description: X8883CV1 PCB Design and Layout
---

# PCB Design and Layout

## Impedance Control

| Signal | Target Impedance | Notes |
| --- | --- | --- |
| USB 2.0 differential | 90 Ω | D+/D- |
| USB 3.2 SuperSpeed | 90 Ω | RX/TX |
| DP AUX | 100 Ω | Auxiliary channel |
| PCIe Gen3 | 85 Ω | TX/RX |
| PCIe reference clock | 100 Ω | REFCLK |
| MIPI DSI/CSI D-PHY | 100 Ω | Display / camera |
| MIPI C-PHY | 100 Ω | CSI / DSI; source value |
| UFS | 100 Ω | Onboard |
| Cellular / Wi-Fi / GNSS antenna | 50 Ω | RF feed |
| I2S / low speed | 50 Ω single-ended | Match clock/data lengths |

The table retains the source recommendations. Final routing rules must account for PHY mode, stack-up, component reference designs and the PCB fabricator impedance report.

## High-speed Routing

- Keep differential pairs on one layer where possible. Add return-ground vias at transitions and maintain continuous reference planes.
- Keep away from buck inductors, crystals, reset lines and switching nodes. The manual recommends up to 5 mil intra-pair mismatch and typically 20 mil inter-pair mismatch; protocol requirements govern the final constraints.
- Place ESD near connectors and minimize stubs. Provide PCIe TX AC coupling, and USB VBUS current limiting and TVS protection.
- Avoid crossing USB SuperSpeed and USB 2.0 routes; separate PCIe REFCLK from TX/RX and maintain good MIPI return paths and shielding.

## RF and Power

Use 50 Ω antenna feeds and keep copper, metal and batteries out of antenna clearance areas. Evaluate cellular/Wi-Fi/GNSS matching, grounding, enclosure and thermal behavior. Battery designs must check charging efficiency, temperature rise, protection and MT6375 power-path trace width. No RGMII is provided; assess USB/PCIe Ethernet devices if required.

## Carrier Review

- Verify the 200-pin footprint, pin orientation, carrier cutout and keepout areas.
- Review VSYS/VSYS_S, protection, decoupling, I/O back-power prevention and loads on low-current outputs.
- Check BOOT, PWRKEY, reset, default pulls, UART levels and download access.
- Review multiplexing, voltage, connector polarity, ESD, shields and mounting pins for every interface.
- Validate antennas, cooling, charging and high-speed interfaces on prototypes.
