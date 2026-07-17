---
title: Hardware Design
sidebar_position: 3
description: X8390/X8370 carrier-board power, USB, HDMI, and MIPI high-speed design requirements.
---

# Hardware Design

## Pin Multiplexing

Except for dedicated high-speed signals, power pins, and grounds, selected signals can be multiplexed as I2C, UART, SPI, I2S, PWM, or GPIO. Before carrier-board release, verify:

- Reset state and pull resistors.
- I/O voltage domains.
- Multiplexing conflicts.
- Drive capability and external loading.

## Power Design

- Pins 101, 102, and 103 are VSYS 5V inputs; use a supply rated for at least 3A.
- Keep main-supply ripple below 100mV.
- Use power traces wider than 2mm where possible and at least five vias for layer transitions.
- Pin 77 is VIO18_PMU. The hardware-design text states approximately 600mA, while the feature table states 500mA. Use the current schematic, PMIC configuration, and measured margin for production.
- Pin 79, VCN33_1_PMU, is a 3.3V output rated at 800mA in the manual.
- Pin 80, VCN18_PMU, is a 1.8V output rated at 1.2A.
- Pin 81, VIO28_PMU, is a 2.8V output rated at 200mA.

## USB Design

The core board exposes three USB2.0 interfaces and one USB3.0 interface. Micro USB on the development board is used as the firmware-upgrade Device port.

- USB2.0 nominal bandwidth: 480Mbps.
- USB3.0 nominal bandwidth: up to 5Gbps.
- Route differential pairs length-matched.
- Control differential impedance to 90Ω ±10%.
- Maintain a continuous reference plane and avoid unnecessary vias.

## HDMI Design

The MT8390 integrates HDMI OUT with HDMI 2.0 support.

- Match lengths within and between the high-speed pairs.
- Control differential impedance to 100Ω ±10%.
- Maintain a continuous reference plane.
- Minimize vias, stubs, and connector discontinuities.

Poor impedance or skew control can cause missing colors, intermittent output, or no display.

## MIPI Design

The core board supports two MIPI DSI and two MIPI CSI interfaces.

- Route differential pairs length-matched.
- Control differential impedance to 100Ω ±10%.
- Confirm whether multiplexed pins operate as DSI or CSI in the target design.
- Match camera supplies, MCLK, RESET, PWDN, and I2C voltage to the sensor.
- Follow the panel specification for display power, reset, backlight, and touch sequencing.

## PCIe, DP, and eDP

PCIe, DisplayPort, and eDP are high-speed interfaces. The supplied manual does not provide a complete loss, length, and via budget. Use the MediaTek hardware design guide, core-board schematic, and target connector specification as the final PCB references.
