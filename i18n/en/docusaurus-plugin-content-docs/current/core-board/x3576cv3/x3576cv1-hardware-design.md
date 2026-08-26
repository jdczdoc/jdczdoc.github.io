---
sidebar_position: 3
title: Hardware Design
description: X3576 core board hardware design considerations
---

# Hardware Design

## Pin Description

Except for power pins, ground pins, and pins explicitly specified as unavailable for GPIO use, the remaining GPIO pins on the X3576 core board can be configured for alternate functions supported by the chip, such as GPIO, I2C, UART, SPI, I2S, and PWM.

Due to space limitations, this document does not describe every GPIO multiplexing function in detail. During hardware design, refer to the **X3576 core board schematic** and the **RK3576 pin-function descriptions in the device specification** for confirmation.

### GPIO Voltage Levels

The X3576 core board contains multiple GPIO IO power domains. Different IO power domains support different operating voltages. The supported voltage ranges and default configurations of the X3576 core board are listed below:

| IO Power Domain | Supported Voltage | X3576 Core Board Configuration | Description |
| --- | --- | --- | --- |
| PMUIO0 | 1.8V | 1.8V | Fixed at 1.8V |
| PMUIO1 | 1.8V / 3.3V | 3.3V | Configured to 3.3V on the core board |
| VCCIO0 | 1.8V | 1.8V | Fixed at 1.8V |
| VCCIO1 | 1.8V / 3.3V | 3.3V | Configured to 3.3V by default; the voltage can be adjusted by software through LDO5 |
| VCCIO2 | 1.8V / 3.3V | 3.3V | Configured to 3.3V on the core board |
| VCCIO3 | 1.8V / 3.3V | 1.8V | Configured to 1.8V on the core board |
| VCCIO4 | 1.8V / 3.3V | 3.3V | Configured to 3.3V on the core board |
| VCCIO5 | 1.8V / 3.3V | 1.8V | Configured to 1.8V on the core board |
| VCCIO6 | 1.8V / 3.3V | 3.3V | Configured to 3.3V on the core board |
| VCCIO7 | 1.2V / 1.8V | 1.2V | Configured to 1.2V on the core board |

### Carrier Board Design Notes

When designing the carrier board, ensure that the IO voltage level of each peripheral matches the operating voltage of the X3576 GPIO IO power domain to which it is connected.

For example, if a GPIO belongs to a 1.8V IO power domain, the connected peripheral IO must also be compatible with 1.8V logic levels. If a peripheral uses 3.3V IO while the corresponding GPIO operates at 1.8V, the two must not be connected directly. Add an appropriate level-shifting circuit according to the interface requirements.

> **Note:** A mismatch between peripheral IO voltage levels and the GPIO voltage levels of the core board may cause communication failures or abnormal IO operation and, in severe cases, permanent damage to the chip IO. Always verify the corresponding IO power domain and operating voltage before designing the carrier board.

## Power Design

The X3576 core board only requires the main power supply for normal operation. The relevant power pins are described below:

- **Pins 159 and 160:** 5V/3A power input. To ensure stable and reliable CPU operation, provide sufficient current and keep the power-supply ripple below 100mV. The power traces should be as wide as possible (greater than 2mm), and no fewer than five vias should be used when changing PCB layers.
- **Pin 161:** 3.3V/1A power output. It can be used to power devices on the carrier board. Some peripherals have power-sequencing requirements; refer to the corresponding descriptions in the core-board pin definition when supplying those peripherals.
- **Pin 156:** 1.8V/500mA power output. It can be used to power the IO domains of the audio CODEC and Ethernet PHY on the carrier board.

## USB Design

The X3576 core board provides two USB 2.0 ports and two USB 3.0 ports. On the development board, one USB 2.0 port is designed for multiplexed use between firmware-upgrade Device mode and USB Host mode. External USB 5V insertion is detected to switch the port to Device mode for firmware upgrade.

USB 2.0 supports a maximum data rate of 480Mbps, while USB 3.0 supports bandwidth up to 5Gbps. Therefore, the PCB routing must meet controlled-impedance requirements. USB differential pairs must be routed as length-matched differential traces with a differential impedance of 90Ω ±10%, and a continuous reference plane must be provided.

## HDMI Design

The X3576 chip integrates one HDMI OUT controller and supports the HDMI 2.0 protocol. The HDMI differential pairs routed from the core board must use length-matched differential traces with an impedance of 100Ω ±10%. Otherwise, issues such as color loss or intermittent HDMI display may occur.

## MIPI Design

MIPI is an industry alliance established in 2003 by companies including ARM, Nokia, ST, and TI. Its purpose is to standardize internal interfaces used in mobile devices, such as camera, display, and RF/baseband interfaces, thereby reducing design complexity and improving design flexibility.

The commonly used MIPI interfaces include DSI for display and CSI for camera input. X3576 supports one MIPI DSI interface and three MIPI CSI interfaces. DSI can be used to drive a MIPI display, while CSI can be connected to MIPI cameras.

MIPI interfaces operate at high data rates. Their differential pairs must be routed as length-matched differential traces with an impedance of 100Ω ±10%.
