---
sidebar_position: 4
title: PCB design and layout
description: X311Y3CV1 PCB design and layout
---

# PCB design and layout

## 4.1 Impedance control

Apply the impedance requirements in Table 4-1 consistently to all routes between the core board and carrier board connectors.

**Table 4-1 PCB impedance requirements**

| Signal type | Target impedance | Notes |
| --- | --- | --- |
| USB 2.0 differential | 90Ω | D+/D- |
| USB3.0/PCIe2.0/HSGMII | 95Ω | Shared group |
| USB3.0Type-C/DP | 90Ω | Type-C/DP multiplexing |
| DPAUX | 100Ω | Auxiliary channel |
| PCIe 3.0 data | 85Ω | LANE0/1 |
| PCIe reference clock | 100Ω | REFCLK |
| LVDS/MIPI/VX1/eDP | 100Ω | Display / camera |
| HDMITX/RX | 90Ω | TMDS |
| HDMIeARC | 100Ω | Audio return |
| RGMII | 50 Ω single-ended | Match clock and data lengths |

## 4.2 High-speed differential interfaces

Apply the following rules to HDMI, USB 3.0, PCIe, MIPI, eDP and LVDS differential interfaces:

- Keep each pair on the same layer where possible. At layer transitions, place ground-return vias near the signal vias.

- Maintain continuous reference planes without splits; keep pairs away from DC/DC inductors, crystals, clocks and reset signals.

- Match intra-pair lengths to the manual recommendation of ≤5 mil. Match inter-pair lengths according to the protocol, typically ≤20 mil in the manual.

- Arrange connectors, ESD devices and common-mode chokes in signal-flow order, minimize stubs and place ESD devices close to connectors.

- Add PCIe TX AC coupling, current limiting and TVS protection to HDMI/USB +5 V, and role-appropriate Type-C CC resistors.

Avoid long parallel HDMI TMDS runs. Do not cross USB 3.0 SSRX/SSTX with USB 2.0 D+/D-. Keep PCIe REFCLK away from TX/RX and provide ground shielding between MIPI CSI clocks and data pairs.

## 4.3 Ethernet and Wi-Fi

Route RGMII at 50 Ω single-ended with data/clock length and skew control. Place the PHY near RJ45 and magnetics; avoid plane splits. Add MDC/MDIO pulls and ESD protection. Follow the PHY reference design for RJ45 shielding and Bob Smith termination.

Route Wi-Fi/Bluetooth SDIO at 50 Ω with clock/data length matching. Provide separate LDO/DC/DC power and 10 µF + 0.1 µF decoupling. Keep the 32.768 kHz clock away from SDIO and power circuits. Use a 50 Ω antenna feed and keep copper, batteries and metal parts out of the antenna keep-out.

Validate antenna matching, keep-outs, grounding and enclosure effects during early prototypes if Wi-Fi certification is required; do not postpone antenna placement changes until production.

## 4.4 Carrier board design checklist

- Stack-up and impedance: are HDMI/USB/PCIe/MIPI/eDP/RGMII rules consistent with Table 4-1?

- Reference planes: are they continuous under high-speed pairs, free of splits and supported by sufficient ground-return vias?

- Power: are 12 V input protection, bulk capacitors and 3.3 V/1.8 V decoupling provided?

- Reset/boot: are RESET_N, PWR_KEY and POC pulls and switches correct?

- ESD: are external interfaces protected with TVS devices close to their connectors?

- Connectors: are HDMI/USB/PCIe/Type-C/RJ45 pinouts, polarity, shields and mounting pads correct?

- Clocks: are crystals, RTC, PCIe REFCLK and RGMII clocks isolated from interference?
