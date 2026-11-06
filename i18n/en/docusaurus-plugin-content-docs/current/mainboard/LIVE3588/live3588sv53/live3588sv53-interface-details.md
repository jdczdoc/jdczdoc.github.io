---
sidebar_position: 3
title: Interface Definitions
description: Interface Definitions
---

# Hardware Interface Definitions

Verify the silkscreen, connector orientation and hardware revision before wiring. The USB pinout with GND on pin 1 and VCC_5V0 on pin 4 has conflicting signal descriptions. Check the schematic before connecting power.

## Interface Overview

| Interface Overview |  | Interface Overview |
| --- | --- | --- |
| Callout | Name | Description |
| 1 | GPIO connector | GPIO expansion |
| 2 | 6.35 mm microphone jack | 6.35 mm condenser microphone input |
| 3 | Line IN | Line input without noise reduction for an instrument |
| 4 | Line IN | Line input with noise reduction for a lavalier microphone |
| 5 | Monitoring headphones | Headphone output |
| 6 | Upgrade button | Firmware download button |
| 7 | Reset button | System reset button |
| 8 | USB Type-C connector | USB Type-C for firmware download and other functions |
| 9 | USB 3.0 connector | USB 3.0 Host |
| 10 | USB 2.0 connector | USB 2.0 Host |
| 11 | USB 3.0 connector | Listed as USB 2.0 Host and USB 3.0 capture output. Connect the capture output to a PC using a USB extension cable for streaming with the PC companion app. |
| 12 | GMAC | Gigabit Ethernet port |
| 13 | HDMI OUT | HDMI output |
| 14 | HDMI IN | HDMI input up to 1080p/60 fps |
| 15 | DC power jack | 12 V DC input |
| 16 | 4-pin power header | 12 V DC input |
| 17 | Battery holder | Two-cell lithium battery holder |
| 18 | Programming header | LT6911 programming header |
| 19 | Fill-light header | 5 V fill-light header |
| 20 | Fan connector | System fan connector with selectable 12 V or 5 V |
| 21 | WIFI-BT | Dual-band Wi-Fi 6 and Bluetooth module |
| 22 | Debug UART | System debug UART |
| 23 | Power and LED header | Connects the enclosure power button and indicator LED |
| 24 | Camera connector | Connects a MIPI camera |
| 25 | IR receiver | Receiver for IR remote control |
| 26 | eDP connector | eDP display connector |
| 27 | USB connector | USB connector for a USB camera or touchscreen |
| 28 | Backlight connector | Panel backlight connector. On supported large-screen configurations, the unused connector can accept 12 V DC to power the board. |
| 29 | LVDS connector | Dual-channel 8-bit LVDS display connector |
| 30 | Antenna connector | Bluetooth audio antenna connector for the USB sound card |
| 31 | USB programming header | Programming header for the USB sound card |
| 32 | Speaker connector | External left speaker |
| 33 | Speaker connector | External right speaker |
| 34 | MIC | Internal microphone connector for an electret microphone |

## Connector Pinout (Manual Table 7)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | GND | Ground |
|  | 2 | GPIO1_B4_U | GPIO |
|  | 3 | GPIO1_C6_D | GPIO |
|  | 4 | GPIO1_C2_D | GPIO |
|  | 5 | GPIO1_D5_D | GPIO |
|  | 6 | GPIO1_C3_D | GPIO |
|  | 7 | GPIO1_D4_D | GPIO |
|  | 8 | GPIO1_C7_D | GPIO |
|  | 9 | GPIO1_C4_D | GPIO |
|  | 10 | 5V | Supply |

## Connector Pinout (Manual Table 8)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | DC_IN | Supply |
|  | 2 | DC_IN | Supply |
|  | 3 | GND | Ground |
|  | 4 | GND | Ground |

## Connector Pinout (Manual Table 9)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | I2C8_SCL_M2 | I2C signal |
|  | 2 | I2C8_SDA_M2 | I2C signal |
|  | 3 | GND | Ground |
|  | 4 | GND | Ground |
|  | 5 | GND | Ground |
|  | 6 | VCC_BAT+ | Supply |
|  | 7 | VCC_BAT+ | Supply |
|  | 8 | VCC_BAT+ | Supply |

## Connector Pinout (Manual Table 10)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | 3.3V | Supply |
|  | 2 | GND | Ground |
|  | 3 | CSCL | I2C signal |
|  | 4 | CSDA | I2C signal |

## Connector Pinout (Manual Table 11)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC_5V0 | Supply |
|  | 2 | UART6_RX | UART signal |
|  | 3 | UART6_TX | UART signal |
|  | 4 | GND | Ground |

## Connector Pinout (Manual Table 12)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | 12V/5V | Selectable 12 V or 5 V fan supply |
|  | 2 | GND | Ground |

## Connector Pinout (Manual Table 13)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | UART2_TX_M0 | UART signal |
|  | 2 | UART2_RX_M0 | UART signal |
|  | 3 | GND | Ground |

## Connector Pinout (Manual Table 14)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | PWRON_L | Power on |
|  | 2 | GND | Ground |
|  | 3 | POW-LED | LED drive |
|  | 4 | GND | Ground |
|  | 5 | VOL+- | Independent switch signal |

## Connector Pinout (Manual Table 15)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | GND | Ground |
|  | 2 | GND | Ground |
|  | 3 | MIPI_CAM2_PDN_IO1A7U18 | MIPI insertion detect |
|  | 4 | 5V | 5 V camera supply |
|  | 5 | 5V | 5 V camera supply |
|  | 6 | 5V | 5 V camera supply |
|  | 7 | I2C8_SCL_M2 | Camera I2C signal |
|  | 8 | I2C8_SDA_M2 | Camera I2C signal |
|  | 9 | NC | Unused |
|  | 10 | NC | Unused |
|  | 11 | MIPI_CAM2_PWREN_IO1A4D18 | Camera power enable |
|  | 12 | GND | Ground |
|  | 13 | CAM_RST_IO1B3D18 | Camera reset |
|  | 14 | MIPI_CAM2_CLKOUT_IO1B7U18 | Camera clock |
|  | 15 | GND | Ground |
|  | 16 | MIPI_CSI0_RX_D3N | MIPI differential signal |
|  | 17 | MIPI_CSI0_RX_D3P | MIPI differential signal |
|  | 18 | GND | Ground |
|  | 19 | MIPI_CSI0_RX_D2N | MIPI differential signal |
|  | 20 | MIPI_CSI0_RX_D2P | MIPI differential signal |
|  | 21 | GND | Ground |
|  | 22 | MIPI_CSI0_RX_CLK0N | MIPI differential clock |
|  | 23 | MIPI_CSI0_RX_CLK0P | MIPI differential clock |
|  | 24 | GND | Ground |
|  | 25 | MIPI_CSI0_RX_D1N | MIPI differential signal |
|  | 26 | MIPI_CSI0_RX_D1P | MIPI differential signal |
|  | 27 | GND | Ground |
|  | 28 | MIPI_CSI0_RX_D0N | MIPI differential signal |
|  | 29 | MIPI_CSI0_RX_D0P | MIPI differential signal |
|  | 30 | GND | Ground |

## Connector Pinout (Manual Table 16)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | TP_RST_L | Control signal |
|  | 2 | GND |  |
|  | 3 | EDP_TX3N | eDP differential signal |
|  | 4 | EDP_TX3P | eDP differential signal |
|  | 5 | GND |  |
|  | 6 | EDP_TX2N | eDP differential signal |
|  | 7 | EDP_TX2P | eDP differential signal |
|  | 8 | GND |  |
|  | 9 | EDP_TX1N | eDP differential signal |
|  | 10 | EDP_TX1P | eDP differential signal |
|  | 11 | GND | Ground |
|  | 12 | EDP_TX0N | eDP differential signal |
|  | 13 | EDP_TX0P | eDP differential signal |
|  | 14 | GND | Ground |
|  | 15 | EDP_AUXP | eDP differential signal |
|  | 16 | EDP_AUXN | eDP differential signal |
|  | 17 | GND | Ground |
|  | 18 | VCC3V3_S3 | 3.3 V supply |
|  | 19 | VCC3V3_S3 | 3.3 V supply |
|  | 20 | VCC3V3_S3 | 3.3 V supply |
|  | 21 | VCC3V3_S3 | 3.3 V supply |
|  | 22 | BITSET_IO4A6D33 | Control signal |
|  | 23 | GND | Ground |
|  | 24 | GND | Ground |
|  | 25 | GND | Ground |
|  | 26 | GND | Ground |
|  | 27 | EDP_HPD_IO4B5D33 | Control signal |
|  | 28 | GND | Ground |
|  | 29 | GND | Ground |
|  | 30 | GND | Ground |
|  | 31 | GND | Ground |
|  | 32 | LCD_EN | Backlight enable |
|  | 33 | LCD_PWM11_M1 | Backlight PWM |
|  | 34 | I2C4_SCL_M3 | Touch I2C signal |
|  | 35 | I2C4_SDA_M3 | Touch I2C signal |
|  | 36 | VCC12V | Backlight |
|  | 37 | VCC12V | Backlight |
|  | 38 | VCC12V | Backlight |
|  | 39 | VCC12V | Backlight |
|  | 40 | TP_INT | Touch interrupt |

## Connector Pinout (Manual Table 17)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | 5V | Supply |
|  | 2 | DM2 | USB signal |
|  | 3 | DP2 | USB signal |
|  | 4 | GND | Ground |

## Connector Pinout (Manual Table 18)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC12V | 12 V supply output |
|  | 2 | VCC12V | 12 V supply output |
|  | 3 | LVDS_BL_EN | Backlight enable pin |
|  | 4 | LCD_BL_PWM14_M1 | Backlight PWM control |
|  | 5 | GND | Ground |
|  | 6 | GND | Ground |

## Connector Pinout (Manual Table 19)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 2 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 3 | VCC12V/VCC3.3V/VCC5V | Selectable supply from three options |
|  | 4 | GND | Ground |
|  | 5 | GND | Ground |
|  | 6 | GND | Ground |
|  | 7 | RXO0- | LVDS differential signal |
|  | 8 | RXO0+ | LVDS differential signal |
|  | 9 | RXO1- | LVDS differential signal |
|  | 10 | RXO1+ | LVDS differential signal |
|  | 11 | RXO2- | LVDS differential signal |
|  | 12 | RXO2+ | LVDS differential signal |
|  | 13 | GND | Ground |
|  | 14 | GND | Ground |
|  | 15 | RXOC- | LVDS differential signal |
|  | 16 | RXOC+ | LVDS differential signal |
|  | 17 | RXO3- | LVDS differential signal |
|  | 18 | RXO3+ | LVDS differential signal |
|  | 19 | RXE0- | LVDS differential signal |
|  | 20 | RXE0+ | LVDS differential signal |
|  | 21 | RXE1- | LVDS differential signal |
|  | 22 | RXE1+ | LVDS differential signal |
|  | 23 | RXE2- | LVDS differential signal |
|  | 24 | RXE2+ | LVDS differential signal |
|  | 25 | GND | Ground |
|  | 26 | GND | Ground |
|  | 27 | RXEC- | LVDS differential signal |
|  | 28 | RXEC+ | LVDS differential signal |
|  | 29 | RXE3- | LVDS differential signal |
|  | 30 | RXE3+ | LVDS differential signal |

## Connector Pinout (Manual Table 20)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | GND | Verify this pin against the schematic |
|  | 2 | USB_DP | USB signal |
|  | 3 | USB_DM | USB signal |
|  | 4 | VCC_5V0 | Verify this pin against the schematic |

## Connector Pinout (Manual Table 21)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | LO1 | Left channel − |
|  | 2 | LO2 | Left channel + |

## Connector Pinout (Manual Table 22)

| Connector view | Pin | Signal | Description |
| --- | --- | --- | --- |
|  | 1 | RO1 | Right channel − |
|  | 2 | RO2 | Right channel + |

## Electrical Characteristics

| Interface Overview |  | Interface Overview |
| --- | --- | --- |
| Callout | Name | Description |
| 1 | GPIO connector | GPIO expansion |
| 2 | 6.35 mm microphone jack | 6.35 mm condenser microphone input |
| 3 | Line IN | Line input without noise reduction for an instrument |
| 4 | Line IN | Line input with noise reduction for a lavalier microphone |
| 5 | Monitoring headphones | Headphone output |
| 6 | Upgrade button | Firmware download button |
| 7 | Reset button | System reset button |
| 8 | USB Type-C connector | USB Type-C for firmware download and other functions |
| 9 | USB 3.0 connector | USB 3.0 Host |
| 10 | USB 2.0 connector | USB 2.0 Host |
| 11 | USB 3.0 connector | Listed as USB 2.0 Host and USB 3.0 capture output. Connect the capture output to a PC using a USB extension cable for streaming with the PC companion app. |
| 12 | GMAC | Gigabit Ethernet port |
| 13 | HDMI OUT | HDMI output |
| 14 | HDMI IN | HDMI input up to 1080p/60 fps |
| 15 | DC power jack | 12 V DC input |
| 16 | 4-pin power header | 12 V DC input |
| 17 | Battery holder | Two-cell lithium battery holder |
| 18 | Programming header | LT6911 programming header |
| 19 | Fill-light header | 5 V fill-light header |
| 20 | Fan connector | System fan connector with selectable 12 V or 5 V |
| 21 | WIFI-BT | Dual-band Wi-Fi 6 and Bluetooth module |
| 22 | Debug UART | System debug UART |
| 23 | Power and LED header | Connects the enclosure power button and indicator LED |
| 24 | Camera connector | Connects a MIPI camera |
| 25 | IR receiver | Receiver for IR remote control |
| 26 | eDP connector | eDP display connector |
| 27 | USB connector | USB connector for a USB camera or touchscreen |
| 28 | Backlight connector | Panel backlight connector. On supported large-screen configurations, the unused connector can accept 12 V DC to power the board. |
| 29 | LVDS connector | Dual-channel 8-bit LVDS display connector |
| 30 | Antenna connector | Bluetooth audio antenna connector for the USB sound card |
| 31 | USB programming header | Programming header for the USB sound card |
| 32 | Speaker connector | External left speaker |
| 33 | Speaker connector | External right speaker |
| 34 | MIC | Internal microphone connector for an electret microphone |

## Electrical Characteristics

| Category |  | Minimum | Typical | Maximum |
| --- | --- | --- | --- | --- |
| Standard supply parameters | Voltage | 11V | 12V | 13.5V |
| Standard supply parameters | Ripple | / |  | ±3% |
| Standard supply parameters | Current | 2A | 3A | / |
| A 16 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |  | A 16 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |  | A 16 V DC input is specified only for a confirmed configuration with a higher-voltage backlight powered from DC input. Verify the board and backlight configuration before use. |

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
