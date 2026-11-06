---
sidebar_position: 3
title: Interface Definitions
description: Interface Definitions
---

# Hardware Interface Definitions

Verify the silkscreen, connector orientation and hardware revision before wiring.

## Interface Overview

| Front Interfaces |  | Front Interfaces |
| --- | --- | --- |
| Callout | Name | Description |
| 1 | PDM connector | Connects a PDM device |
| 2 | MIPI camera connector | Supports a MIPI camera up to 50 MP |
| 3 | Bluetooth antenna connector | Connects the wireless module antenna |
| 4 | Battery connector | Supports a 7.4 V battery with I2C |
| 5 | Debug UART connector | Connects a serial adapter for debugging |
| 6 | IR | Supports IR remote control |
| 7 | Touchscreen connector | Supports an I2C touchscreen |
| 8 | Left speaker connector | Connects a speaker |
| 9 | Right speaker connector | Connects a speaker |
| 10 | MIPI display connector | Connects a MIPI display |
| 11 | IC programming header | LT6911C programming header |
| 12 | Microphone connector | Connects a microphone |
| 13 | Power button | Controls sleep and power on/off |

## Connector Pinout (Manual Table 7)

|  | 1 | GND |
| --- | --- | --- |
|  | 2 | PDM_CLK |
|  | 3 | PDM_SDI |
|  | 4 | VCC_1.8V |

## Connector Pinout (Manual Table 8)

|  | 1 | GND | 16 | GND |
| --- | --- | --- | --- | --- |
|  | 2 | MIPI_CSI0_RX_D0P | 17 | MIPI_CAM2_CLKOUT |
|  | 3 | MIPI_CSI0_RX_D0N | 18 | CAM_RST |
|  | 4 | GND | 19 | GND |
|  | 5 | MIPI_CSI0_RX_D1P | 20 | MIPI_CAM2_PWREN |
|  | 6 | MIPI_CSI0_RX_D1N | 21 | VCC_3V3_S3 |
|  | 7 | GND | 22 | VCC_3V3_S3 |
|  | 8 | MIPI_CSI0_RX_CLK0P | 23 | I2C8_SDA_M2 |
|  | 9 | MIPI_CSI0_RX_CLK0N | 24 | I2C8_SCL_M2 |
|  | 10 | GND | 25 | VCC_5V0 |
|  | 11 | MIPI_CSI0_RX_D2P | 26 | VCC_5V0 |
|  | 12 | MIPI_CSI0_RX_D2N | 27 | VCC_5V0 |
|  | 13 | GND | 28 | MIPI_CAM2_PDN |
|  | 14 | MIPI_CSI0_RX_D3P | 29 | GND |
|  | 15 | MIPI_CSI0_RX_D3N | 30 | GND |

## Connector Pinout (Manual Table 9)

|  | 1 | I2C8_SCL |
| --- | --- | --- |
|  | 2 | I2C8_SDA |
|  | 3 | GND |
|  | 4 | GND |
|  | 5 | GND |
|  | 6 | VBAT |
|  | 7 | VBAT |
|  | 8 | VBAT |

## Connector Pinout (Manual Table 10)

|  | 1 | GND |
| --- | --- | --- |
|  | 2 | UART2_RX |
|  | 3 | UART2_TX |

## Connector Pinout (Manual Table 11)

|  | 1 | IR |
| --- | --- | --- |
|  | 2 | GND |
|  | 3 | VCC_3V3 |

## Connector Pinout (Manual Table 12)

|  | 1 | TP_RST |
| --- | --- | --- |
|  | 2 | TP_INT |
|  | 3 | VCC_3V3 |
|  | 4 | I2C4_SCL |
|  | 5 | I2C4_SDA |
|  | 6 | GND |

## Connector Pinout (Manual Table 13)

|  | 1 | LO2 |
| --- | --- | --- |
|  | 2 | LO1 |

## Connector Pinout (Manual Table 14)

|  | 1 | RO2 |
| --- | --- | --- |
|  | 2 | RO1 |

## Connector Pinout (Manual Table 15)

|  | 1 | NC | 21 | MIPI_DPHY0_TX_D3P |
| --- | --- | --- | --- | --- |
|  | 2 | VCC_3V3_S3 | 22 | GND |
|  | 3 | VCC_3V3_S3 | 23 | NC |
|  | 4 | NC | 24 | NC |
|  | 5 | BITSET | 25 | GND |
|  | 6 | NC | 26 | NC |
|  | 7 | GND | 27 | NC |
|  | 8 | MIPI_DPHY0_TX_D0N | 28 | NC |
|  | 9 | MIPI_DPHY0_TX_D0P | 29 | NC |
|  | 10 | GND | 30 | GND |
|  | 11 | MIPI_DPHY0_TX_D1N | 31 | LED- |
|  | 12 | MIPI_DPHY0_TX_D1P | 32 | LED- |
|  | 13 | GND | 33 | NC |
|  | 14 | MIPI_DPHY0_TX_CLKN | 34 | NC |
|  | 15 | MIPI_DPHY0_TX_CLKP | 35 | NC |
|  | 16 | GND | 36 | NC |
|  | 17 | MIPI_DPHY0_TX_D2N | 37 | NC |
|  | 18 | MIPI_DPHY0_TX_D2P | 38 | NC |
|  | 19 | GND | 39 | LED+ |
|  | 20 | MIPI_DPHY0_TX_D3N | 40 | LED+ |

## Connector Pinout (Manual Table 16)

|  | 1 | MIC |
| --- | --- | --- |
|  | 2 | GND |

## Connector Pinout (Manual Table 17)

|  | 1 | POWER |
| --- | --- | --- |
|  | 2 | GND |

## Connector Pinout (Manual Table 18)

|  | 1 | VCC_5V0 |
| --- | --- | --- |
|  | 2 | DM |
|  | 3 | DP |
|  | 4 | GND |

## Connector Pinout (Manual Table 19)

|  | 1 | VCC |
| --- | --- | --- |
|  | 2 | VCC |
|  | 3 | VCC |
|  | 4 | LCD_EN |
|  | 5 | PWM |
|  | 6 | GND |
|  | 7 | GND |
|  | 8 | GND |

## Connector Pinout (Manual Table 20)

|  | 1 | VCC | 16 | RXOC+ |
| --- | --- | --- | --- | --- |
|  | 2 | VCC | 17 | RXO3- |
|  | 3 | VCC | 18 | RXO3+ |
|  | 4 | GND | 19 | RXE0- |
|  | 5 | GND | 20 | RXE0+ |
|  | 6 | GND | 21 | RXE1- |
|  | 7 | RXO0- | 22 | RXE1+ |
|  | 8 | RXO0+ | 23 | RXE2- |
|  | 9 | RXO1- | 24 | RXE2+ |
|  | 10 | RXO1+ | 25 | GND |
|  | 11 | RXO2- | 26 | GND |
|  | 12 | RXO2+ | 27 | RXEC- |
|  | 13 | GND | 28 | RXEC+ |
|  | 14 | GND | 29 | RXE3- |
|  | 15 | RXOC- | 30 | RXE3+ |

## Connector Pinout (Manual Table 21)

|  | 1 | VBAT |
| --- | --- | --- |
|  | 2 | VBAT |
|  | 3 | NC |
|  | 4 | GND |
|  | 5 | GND |

## Connector Pinout (Manual Table 22)

|  | 1 | RO2 |
| --- | --- | --- |
|  | 2 | RO1 |
|  | 3 | LO2 |
|  | 4 | LO1 |

## Electrical Characteristics

| Rear Interfaces |  | Rear Interfaces |
| --- | --- | --- |
| Callout | Name | Description |
| 1 | Power button header | Connects an external sleep and power button |
| 2 | SIM card | Insert a SIM for optional 4G data service |
| 3 | LINE IN | Audio input |
| 4 | LINE OUT | Audio output |
| 5 | USB connector | USB2.0 |
| 6 | USB connector | USB2.0 |
| 7 | HDMI OUT | HDMI output |
| 8 | HDMI IN | HDMI input |
| 9 | TYPE-C | PD charging, OTG and firmware upgrade |
| 10 | USB connector | USB 2.0 on a 4-pin, 1.25 mm header |
| 11 | Backlight connector | Optional LVDS panel backlight supply |
| 12 | LVDS connector | Connects an optional LVDS panel |
| 13 | Battery connector | Supports an optional 8.4 V battery |
| 14 | Speaker connector | Connects two optional speakers |

## Electrical Characteristics

| Category |  | Minimum | Typical | Maximum |
| --- | --- | --- | --- | --- |
| Standard supply parameters | Voltage | 11V | 12V | 13.5V |
| Standard supply parameters | Ripple | / |  | ±3% |
| Standard supply parameters | Current | 2A | 3A | / |

## Electrical Characteristics

| Category |  | Minimum | Typical | Maximum |
| --- | --- | --- | --- | --- |
| Supply current with display and peripherals disconnected | Operating current | / | 260mA | 350mA |
| Supply current with display and peripherals disconnected | Standby current | / | 10mA | 30mA |
| Supply current with display and peripherals disconnected | Battery operating current | / | 0.0024mA | / |

## Electrical Characteristics

| USB connector | Voltage | Typical current | Maximum current |
| --- | --- | --- | --- |
| OTG_USB | 5V | 500mA | 1.5A |
| HOST_USB | 5V | 500mA | 1.5A |
