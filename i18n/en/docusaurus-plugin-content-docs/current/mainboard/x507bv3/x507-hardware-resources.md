---
title: Hardware Resources
sidebar_position: 2
description: "X507 connector layout, interface numbering, and hardware-resource summary"
---

# Hardware Resources

## Connector Layout

![X507 connector layout](./x507-interface-layout.png)

## Interface Index

| No. | Name | Description |
| --- | --- | --- |
| 1 | DC OUT | 12V and 5V DC power outputs |
| 2 | Speaker | External speaker connector |
| 3 | Microphone | Microphone expansion connector |
| 4 | Key header | 6-pin PH header for power, reset, and upgrade keys |
| 5 | Parallel camera | Standard 24-pin parallel-camera connector |
| 6 | I2C1 | I2C interface |
| 7 | SPI | SPI interface |
| 8 | UART0 | UART0 TTL-level debug port |
| 9 | UART2 | UART selectable as TTL or RS-232 through resistor population |
| 10 | UART5 | UART selectable as TTL or RS-232 through resistor population |
| 11 | Backlight | External panel backlight |
| 12 | LVDS | Connector for an LVDS panel |
| 13 | LCD | Connector for an RGB or LVDS panel |
| 14 | Infrared receiver | Integrated infrared receiver |
| 15 | SIM card slot | SIM slot for 3G/4G modules |
| 16 | HDMI | HDMI output |
| 17 | USB Host | USB 2.0 Host port |
| 18 | USB Host | USB 2.0 Host port |
| 19 | USB OTG | Firmware download interface |
| 20 | MIPI CSI | MIPI camera interface |
| 21 | Headphone | Headphone output |
| 22 | Line input | Audio input |
| 23 | Gigabit Ethernet | RTL8211F Gigabit Ethernet interface |
| 24 | TF card | TF card slot |
| 25 | DC input | 12V DC power input |
| 26 | Reset key | Hardware reset |
| 27 | FEL key | FEL key used for firmware upgrade |
| 28 | Power key | Power key |
| 29 | Wi-Fi/Bluetooth | Combined Wi-Fi/Bluetooth module |
| 30 | PCIe | PCIe connector for a 4G communication module |
| 31 | Jumper | LCD voltage-selection jumper |
| 32 | USB OTG | Firmware download interface |
| 33 | RTC battery | CR1202 RTC battery holder |

## Resource Groups

### Display and Touch

- Multiplexed RGB/LVDS LCD connector.
- Separate LVDS and backlight connectors.
- I2C capacitive-touch interface.
- Type-A HDMI output.

### Camera

- 24-pin parallel-camera connector.
- 26-pin MIPI CSI camera connector.

### Networking and Wireless

- RTL8211F Gigabit Ethernet PHY.
- SDIO dual-band Wi-Fi/Bluetooth module.
- PCIe expansion connector and SIM slot for a 4G communication module.

### Debug and Upgrade

- UART0 is the TTL-level debug port.
- UART2 and UART5 can be selected as TTL or RS-232 by resistor population.
- Micro USB OTG is used for firmware download.
- The FEL key enters the Allwinner USB upgrade mode.
