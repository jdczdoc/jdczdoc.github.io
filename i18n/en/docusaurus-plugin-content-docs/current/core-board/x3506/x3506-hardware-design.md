---
sidebar_position: 3
title: Hardware Design
description: GPIO voltage, power, USB, and MIPI design notes for the X3506 core board
---

# Hardware Design

## Pin Description

Except for pins that cannot be used as GPIO, power pins, and ground pins, most signal pins of the X3506 core board can be multiplexed as I2C, UART, SPI, I2S, PWM, and other functions. For final hardware design, check the core board schematic and RK3506 datasheet carefully.

## GPIO Voltage Domains

When designing a carrier board, make sure that the IO voltage of external devices matches the corresponding IO voltage domain of the core board. Otherwise, the CPU or external devices may be damaged.

| Power Domain | GPIO Supply Voltage | Description | Default IO Level |
|---|---|---|---|
| PMUIO_VCC3V3 | 3.3V | Fixed voltage domain | 3.3V |
| SYS_PLL_AVDD1V8 | 1.8V | Fixed voltage domain | 1.8V |
| VCCIO2_VCC | 1.8V/3.3V | Configurable voltage domain | 3.3V |
| SARADC_AVDD1V8 | 1.8V | Fixed voltage domain | 1.8V |
| MIPI_DPHY_AVDD1V8 | 1.8V | Fixed voltage domain | 1.8V |
| VCCIO1_VCC | 1.8V/3.3V | Configurable voltage domain | 3.3V |
| VCCIO3_VCC | 1.8V/3.3V | Configurable voltage domain | 3.3V |
| VCCIO4_VCC | 1.8V/3.3V | Configurable voltage domain | 1.8V |

## Power Supply Design

The X3506 core board only requires the main power supply to operate normally.

- Pins 115, 116, and 117 are `VCC5V0_SYS`, used as the 5V power input.
- Recommended power input: **5V/3A**.
- To ensure stable CPU operation, power ripple should be kept below **100mV**.
- Power traces should be as wide as possible, preferably greater than **2mm**.
- Use at least **5 vias** when changing power layers.

## USB Design

The X3506 core board provides two USB2.0 ports. The USB2.0 port can be designed for both firmware upgrade Device mode and USB Host mode. Device mode can be selected by detecting external USB 5V insertion.

USB2.0 supports up to 480Mbps, so PCB routing should follow these rules:

- Route USB differential pairs with matched length.
- Differential impedance should be **90Ω ±10%**.
- Keep a continuous reference plane.

## MIPI DSI Design

X3506 supports one MIPI DSI interface for driving MIPI displays. Since MIPI runs at a high data rate, PCB routing should follow these rules:

- Route MIPI differential pairs with matched length.
- Differential impedance should be **100Ω ±10%**.
- Keep traces short, reduce layer transitions, and maintain a continuous reference plane.
