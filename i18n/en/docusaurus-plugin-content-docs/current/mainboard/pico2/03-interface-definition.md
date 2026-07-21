---
title: Interface Definitions
sidebar_label: Interface Definitions
sidebar_position: 3
description: PICO2 camera, display, audio, UART, TF card, and 40-pin expansion definitions.
---

# Interface Definitions

## 20-pin MIPI CSI Camera

| Pin | Signal | Pin | Signal |
| ---: | --- | ---: | --- |
| 1 | MIPI_CSI_D0P | 11 | GND |
| 2 | MIPI_CSI_D0N | 12 | TWI0_SCK |
| 3 | GND | 13 | TWI0_SDA |
| 4 | MIPI_CSI_D1P | 14 | MIPI_CSI_RSTN0 |
| 5 | MIPI_CSI_D1N | 15 | GND |
| 6 | GND | 16 | LDOB-2V8 |
| 7 | MIPI_CSI_CKP | 17 | LDOB-2V8 |
| 8 | MIPI_CSI_CKN | 18 | LDOA-1V8 |
| 9 | GND | 19 | VCC-1V2 |
| 10 | MIPI_CSI_MCLK0 | 20 | NC |

## 12-pin SPI LCD

| Pin | Signal | Pin | Signal |
| ---: | --- | ---: | --- |
| 1 | GND | 7 | LCD-RST |
| 2 | LCD-K | 8 | SDA |
| 3 | VCC-3V3 | 9 | SCL |
| 4 | VCC-3V3 | 10 | RS/DC |
| 5 | VCC-3V3 | 11 | CS |
| 6 | NC | 12 | GND |

## UART0 Debug

| Pin | Signal |
| ---: | --- |
| 1 | GND |
| 2 | UART0-RX |
| 3 | UART0-TX |
| 4 | NC |

Use a 3.3 V TTL USB-to-UART adapter and cross TX/RX.

## 40-pin Expansion Header

| Pin | Signal | Pin | Signal |
| ---: | --- | ---: | --- |
| 1 | VBUS | 21 | SCL |
| 2 | VBUS | 22 | SDA |
| 3 | GND | 23 | GND |
| 4 | VCC-3V3 | 24 | PD4 |
| 5 | VCC-3V3 | 25 | RS |
| 6 | CS | 26 | PD6 |
| 7 | GPADC0-0 | 27 | LCD-PWM |
| 8 | GND | 28 | GND |
| 9 | UART3-RX | 29 | PD8 |
| 10 | UART3-TX | 30 | PD9 |
| 11 | TWI0-SDA | 31 | PD10 |
| 12 | TWI0-SCK | 32 | PD11 |
| 13 | GND | 33 | GND |
| 14 | GPADC0-2 | 34 | PD12 |
| 15 | SPI0-HOLD | 35 | PD14 |
| 16 | SPI0-WP | 36 | PD16 |
| 17 | PL1 | 37 | PD17 |
| 18 | GND | 38 | GND |
| 19 | PL2 | 39 | PD18 |
| 20 | PL7 | 40 | PD19 |
