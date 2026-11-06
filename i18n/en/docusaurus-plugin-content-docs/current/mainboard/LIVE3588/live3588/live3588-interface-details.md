---
sidebar_position: 3
title: Interface Definitions
description: Interface Definitions
---

# Hardware Interface Definitions

Verify the silkscreen, connector orientation and hardware revision before wiring.

## Interface Overview

| Interface Overview |  | Interface Overview |
| --- | --- | --- |
| Callout | Name | Description |
| 1 | Onboard button | BOOT key for Maskrom or forced firmware upgrade |
| 2 | Onboard button | Reset button |
| 3 | Onboard button | PWRKEY |
| 4 | IR receiver header | For an optional external IR receiver |
| 5 | Power and LED header | Connects the enclosure power button and indicator LED |
| 6 | RTC | 3 V RTC battery connector |
| 7 | Camera connector | Connects a MIPI camera |
| 8 | WIFI-BT | Dual-band Wi-Fi 6 and Bluetooth module |
| 9 | Touch connector | I2C touchscreen connector |
| 10 | Display connector | eDP display connector |
| 11 | Display connector | Dual-channel 8-bit LVDS display connector |
| 12 | Backlight connector | Panel backlight connector. On supported large-screen configurations, the unused connector can accept 12 V DC to power the board. |
| 13 | HOST2.0 | USB 2.0 expansion for a daughterboard with one to four Host ports |
| 14 | USB expansion header | USB 2.0 Host on a 4-pin, 1.25 mm vertical surface-mount header |
| 15 | Line IN | Line-level audio input |
| 16 | HOST2.0 | USB 2.0 Host |
| 17 | Phone/MIC | Headset jack with microphone support |
| 18 | GMAC | Gigabit Ethernet port |
| 19 | HOST3.0 | USB 3.0 Host |
| 20 | HDMI OUT | HDMI output |
| 21 | HDMI IN | HDMI input for an HD HDMI camera |
| 22 | USB Type-C connector | USB Type-C for firmware download and other functions |
| 23 | DC power jack | 12 V DC input |
| 24 | Fan power header | 12 V DC fan supply controlled by GPIO |
| 25 | Speaker connector | External left speaker |
| 26 | Audio connector | Left and right audio channels for an external amplifier |
| 27 | Speaker connector | External right speaker |
| 28 | UART2 | TTL-level UART2, default debug port |

## Connector Pinout (Manual Table 6)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC_5V | Supply |
|  | 2 | D- | DM |
|  | 3 | D+ | DP |
|  | 4 | GND | Ground |

## Connector Pinout (Manual Table 7)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC_5V | Supply |
|  | 2 | VCC_5V | Supply |
|  | 3 | VCC_5V | Supply |
|  | 4 | VCC_5V | Supply |
|  | 5 | D- | DM |
|  | 6 | D+ | DP |
|  | 7 | GND | Ground |
|  | 8 | GND | Ground |
|  | 9 | GND | Ground |
|  | 10 | GND | Ground |

## Connector Pinout (Manual Table 8)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 2 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 3 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 4 | GND | Ground |
|  | 5 | GND | Ground |
|  | 6 | GND | Ground |
|  | 7 | TXA0N | LVDS differential signal |
|  | 8 | TXA0P | LVDS differential signal |
|  | 9 | TXA1N | LVDS differential signal |
|  | 10 | TXA1P | LVDS differential signal |
|  | 11 | TXA2N | LVDS differential signal |
|  | 12 | TXA2P | LVDS differential signal |
|  | 13 | GND | Ground |
|  | 14 | GND | Ground |
|  | 15 | TXACN | LVDS differential signal |
|  | 16 | TXACP | LVDS differential signal |
|  | 17 | TXA3N | LVDS differential signal |
|  | 18 | TXA3P | LVDS differential signal |
|  | 19 | TXB0N | LVDS differential signal |
|  | 20 | TXB0P | LVDS differential signal |
|  | 21 | TXB1N | LVDS differential signal |
|  | 22 | TXB1P | LVDS differential signal |
|  | 23 | TXB2N | LVDS differential signal |
|  | 24 | TXB2P | LVDS differential signal |
|  | 25 | GND | Ground |
|  | 26 | GND | Ground |
|  | 27 | TXBCN | LVDS differential signal |
|  | 28 | TXBCP | LVDS differential signal |
|  | 29 | TXB3N | LVDS differential signal |
|  | 30 | TXB3P | LVDS differential signal |

## Connector Pinout (Manual Table 9)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC12V | 12 V supply output |
|  | 2 | VCC12V | 12 V supply output |
|  | 3 | LCD_BL | Backlight enable pin |
|  | 4 | PWM | Backlight PWM control |
|  | 5 | GND | Ground |
|  | 6 | GND | Ground |

## Connector Pinout (Manual Table 10)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | TP_RST_L | Control signal |
|  | 2 | TP_INT_L | Control signal |
|  | 3 | VCC3V3_S3 | Supply |
|  | 4 | SCL | I2C signal |
|  | 5 | SDA | I2C signal |
|  | 6 | GND | Ground |

## Connector Pinout (Manual Table 11)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | TP_RST_L | Control signal |
|  | 2 | GND |  |
|  | 3 | EDP0_TX_D3N | eDP differential signal |
|  | 4 | EDP0_TX_D3P | eDP differential signal |
|  | 5 | GND |  |
|  | 6 | EDP0_TX_D2N | eDP differential signal |
|  | 7 | EDP0_TX_D2P | eDP differential signal |
|  | 8 | GND |  |
|  | 9 | HDMI0_TX1N_PORT/EDP0_TX_D1N | eDP differential signal |
|  | 10 | HDMI0_TX1P_PORT/EDP0_TX_D1P | eDP differential signal |
|  | 11 | GND | Ground |
|  | 12 | HDMI0_TX0N_PORT/EDP0_TX_D0N | eDP differential signal |
|  | 13 | HDMI0_TX0P_PORT/EDP0_TX_D0P | eDP differential signal |
|  | 14 | GND | Ground |
|  | 15 | HDMI0_TX_SBDP/EDP0_TX_AUXP | eDP differential signal |
|  | 16 | HDMI0_TX_SBDN/EDP0_TX_AUXN | eDP differential signal |
|  | 17 | GND | Ground |
|  | 18 | VCC3V3_S3 | 3.3 V supply |
|  | 19 | VCC3V3_S3 | 3.3 V supply |
|  | 20 | VCC3V3_S3 | 3.3 V supply |
|  | 21 | VCC3V3_S3 | 3.3 V supply |
|  | 22 | BIST | Control signal |
|  | 23 | GND | Ground |
|  | 24 | GND | Ground |
|  | 25 | GND | Ground |
|  | 26 | GND | Ground |
|  | 27 | GPIO1_B3 | Control signal |
|  | 28 | LED- | Backlight |
|  | 29 | LED- | Backlight |
|  | 30 | LED- | Backlight |
|  | 31 | LED- | Backlight |
|  | 32 | LCD_BL | Backlight enable |
|  | 33 | PWM | Backlight PWM |
|  | 34 | I2C4_SCL_M1_SENSOR | Touch I2C signal |
|  | 35 | I2C4_SDA_M1_SENSOR | Touch I2C signal |
|  | 36 | VCC12V_DCIN | Backlight |
|  | 37 | VCC12V_DCIN | Backlight |
|  | 38 | VCC12V_DCIN | Backlight |
|  | 39 | VCC12V_DCIN | Backlight |
|  | 40 | TP_INT | Touch interrupt |

## Connector Pinout (Manual Table 12)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | PWRON_L | Power on |
|  | 2 | GND | Ground |
|  | 3 | POW-LED | LED drive |
|  | 4 | GND | Ground |
|  | 5 | VOL+- | Independent switch signal |

## Connector Pinout (Manual Table 13)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | GND | Ground |
|  | 2 | UART2_RX_M0_DEBUG | Debug UART RX |
|  | 3 | UART2_TX_M0_DEBUG | Debug UART TX |
|  | 4 | VCC_3V3_S3 | Supply |

## Connector Pinout (Manual Table 14)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VO2 | Left channel − |
|  | 2 | VO1 | Left channel + |

## Connector Pinout (Manual Table 15)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VO2 | Right channel − |
|  | 2 | VO1 | Right channel + |

## Connector Pinout (Manual Table 16)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | GND | Ground |
|  | 2 | VCC | 12 V supply controlled by GPIO |

## Electrical Characteristics

| Category |  | Minimum | Typical | Maximum |
| --- | --- | --- | --- | --- |
| Standard supply parameters | Voltage | 11V | 12V | 13.5V |
| Standard supply parameters | Ripple | / |  | ±3% |
| Standard supply parameters | Current | 2A | 3A | / |
| A 24 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |  | A 24 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |  | A 24 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |

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
