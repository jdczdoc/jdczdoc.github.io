---
sidebar_position: 3
title: "Interface Resources"
description: "td133 Interface Resources"
---

# Interface Resources

The tables below show the main interfaces and their pads. See [Pin Definitions](./td133-pin-definition.md) for the complete signal list. Account for shared pads when designing the carrier and configuring firmware.

## Display and Cameras

| Interface | Pins | Description |
| --- | --- | --- |
| MIPI DSI | 20–29 | Four differential data lanes and one clock pair, shared with LVDS0 |
| LVDS0 | 20–29 | Shares pads with MIPI DSI |
| LVDS1 | 12, 13, 18, 19, 30–35 | LVDS1 data and clock signals |
| MCSIA | 52–61 | Four differential data lanes and one clock pair |
| MCSIB | 62–67 | Two differential data lanes and one clock pair |
| MIPI_MCLK0 | 47 | Camera reference clock |

Use a PWM function on pins 14–17 or `S_PWM` on pin 101 for backlight control. Pin 63 is listed as `MCSIB-D0P` in the pin table. If a separate MCLK1 is required, check the schematic for the board revision.

## USB, Networking and Storage

| Interface | Pins | Description |
| --- | --- | --- |
| USB1 | 37–38 | DM and DP |
| USB0 | 40–41, 140 | DM, DP and USB0-DRVVBUS |
| RGMII / MDC / MDIO | 90, 93, 100, 102, 116–119 | Management, data and control signals listed in the manual |
| SDC0 | 83, 85–89 | 4-bit microSD interface. Pins 86 and 89 can also serve as UART0 |

Check the full RGMII mapping in the schematic for the board revision before connecting an external Gigabit PHY. The pin table lists the microSD signals as 1.8 V. Verify socket power and level shifting when designing the carrier.

## Audio and Low-Speed Interfaces

| Interface | Pins | Description |
| --- | --- | --- |
| Audio | 68–78, 80, 139 | Headphone outputs, detect, bias, line out, two microphone inputs and headphone ground reference |
| UART0 | 110–111 | 3.3 V debug UART, RX and TX |
| UART2 | 95–98 | Includes flow control |
| UART3 / SPI1 | 122–125 | Shared UART3 and SPI1 pins |
| UART4 | 12, 13, 15, 16 | Shared with display-related signals |
| TWI2 / TWI3 | 48–51 | 1.8 V camera control bus signals |
| SPI2 | 90–93, 95–98 | Two alternate pin groups. See the pin tables |
| I2S0 / I2S2 / I2S3 | 43–46, 90–94, 99, 100, 102, 104, 106–109, 127, 129, 131, 133 | Serial audio buses selected through pin multiplexing |
| LRADC | 120 | Low-speed ADC input |
