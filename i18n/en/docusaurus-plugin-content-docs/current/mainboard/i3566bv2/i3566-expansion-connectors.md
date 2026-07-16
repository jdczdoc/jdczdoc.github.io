---
sidebar_position: 6
title: Expansion Connector Definition
description: I3566 PH connectors, GPIO, UART, display, backlight, and USB expansion connector definitions
---

# Expansion Connector Definition

This page summarizes board-side expansion connectors in addition to the 172-pin core-board interface, including IO/IIC, DEBUG, SPI/ADC, RTC, GPIO, RS485, RS232, TTL UART, audio, IR, touch, EDP, fan, VIN, LVDS/DSI, backlight, and USB 2.0 connectors.

## J45: IO / IIC

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | GPIO4_A3 | GPIO output | 3.3V GPIO |
| 3 | GPIO4_A2 | GPIO output | 3.3V GPIO |
| 4 | GPIO4_A1 | GPIO output | 3.3V GPIO |
| 5 | GPIO4_A0 | GPIO output | 3.3V GPIO |
| 6 | GPIO3_D7 | GPIO output | 3.3V GPIO |
| 7 | GPIO3_D6 | GPIO output | 3.3V GPIO |
| 8 | I2C2_SCL_M1 | GPIO output | 3.3V GPIO，Can be multiplexed as I2C |
| 9 | I2C2_SDA_M1 | GPIO output | 3.3V GPIO，Can be multiplexed as I2C |
| 10 | GND | Ground |  |

## J22: DEBUG UART

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | UART2_TX_M0 | 调试UART输出 | 1.8V GPIO，默认用作调试UART |
| 3 | UART2_RX_M0 | 调试UART输出 | 1.8V GPIO，默认用作调试UART |
| 4 | GND | Ground |  |

## J43: SPI / ADC

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | GND | Ground |  |
| 3 | SPI2_MOSI | GPIO output | 3.3V GPIO，Can be multiplexed as SPI |
| 4 | SPI2_CS0 | GPIO output | 3.3V GPIO，Can be multiplexed as SPI |
| 5 | SPI2_CS1 | GPIO output | 3.3V GPIO，Can be multiplexed as SPI |
| 6 | SPI2_MISO | GPIO output | 3.3V GPIO，Can be multiplexed as SPI |
| 7 | SPI2_CLK | GPIO output | 3.3V GPIO，Can be multiplexed as SPI |
| 8 | GND | Ground |  |
| 9 | ADC2 | ADC input | Analog input, 1.8V reference |
| 10 | ADC1 | ADC input | Analog input, 1.8V reference |

## J37: RTC

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GND | Ground |  |
| 2 | RTC_VBAT | RTC power | 3V / 0.6uA battery power |

## J29: GPIO

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | GPIO4_C0 | GPIO output | 3.3V GPIO |
| 3 | GPIO4_C1 | GPIO output | 3.3V GPIO |
| 4 | GPIO4_B6 | GPIO output | 3.3V GPIO |
| 5 | GPIO4_B7 | GPIO output | 3.3V GPIO |
| 6 | GND | Ground |  |

## J31: RS485

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | RS485_4B | RS485输出 |  |
| 3 | RS485_4A | RS485输出 |  |
| 4 | GND | Ground |  |

## J7: RS232

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | NC |  |  |
| 2 | RS232_TXD1 | UART TX signal | RS232 level |
| 3 | RS232_RXD1 | UART RX signal | RS232 level |
| 4 | GND | Ground |  |

## J26: TTL 3.3V UART

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | UART6_TX | UART TX signal | 3.3V TTL level |
| 3 | UART6_RX | UART RX signal | 3.3V TTL level |
| 4 | GND | Ground |  |

## J21: TTL 1.8V UART

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | UART0_TX | UART TX signal | 1.8V TTL level |
| 3 | UART0_RX | UART RX signal | 1.8V TTL level |
| 4 | GND | Ground |  |

## J23: Speaker

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | SPKN_OUT | Speaker output |  |
| 2 | SPKP_OUT | Speaker output |  |

## J28: MIC

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | MIC1_N | Headset / MIC interface | Microphone input |
| 2 | MIC1_P | Headset / MIC interface | Microphone input |

## J24: IR

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | PWM3_IR | IR interface | IR remote signal input |
| 2 | GND | Ground |  |
| 3 | VCC_3V3 | Power output | 3.3V output for external devices |

## J36: Touch Panel

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | TP_RST_L | GPIO | 3.3V GPIO，Touch panel reset |
| 3 | TP_INT_L | GPIO | 3.3V GPIO，Touch panel interrupt |
| 4 | I2C4_SDA_M0_TP | GPIO | 3.3V GPIO，Touch panel I2C control |
| 5 | I2C4_SCL_M0_TP | GPIO | 3.3V GPIO，Touch panel I2C control |
| 6 | GND | Ground |  |

## J34: EDP

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | Power output | 3.3V output for external devices |
| 2 | VCC_3V3 | Power output | 3.3V output for external devices |
| 3 | GND | Ground | GND |
| 4 | GND | Ground | GND |
| 5 | EDP_TX_D0N | EDP differential signal | EDP interface for driving EDP panels |
| 6 | EDP_TX_D0P | EDP differential signal | EDP interface for driving EDP panels |
| 7 | EDP_TX_D1N | EDP differential signal | EDP interface for driving EDP panels |
| 8 | EDP_TX_D1P | EDP differential signal | EDP interface for driving EDP panels |
| 9 | EDP_TX_D2N | EDP differential signal | EDP interface for driving EDP panels |
| 10 | EDP_TX_D2P | EDP differential signal | EDP interface for driving EDP panels |
| 11 | EDP_TX_D3N | EDP differential signal | EDP interface for driving EDP panels |
| 12 | EDP_TX_D3P | EDP differential signal | EDP interface for driving EDP panels |
| 13 | GND | Ground |  |
| 14 | GND | Ground |  |
| 15 | EDP_AUXN | EDP differential signal | EDP interface for driving EDP panels |
| 16 | EDP_AUXP | EDP differential signal | EDP interface for driving EDP panels |
| 17 | GND | Ground |  |
| 18 | GND | Ground |  |
| 19 | GPIO1_B0 | GPIO | 3.3V GPIO |
| 20 | LCD_BL_PWM | GPIO | GPIO，复用作PWM，用于背光控制 |

## J9: FAN

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GND | Ground |  |
| 2 | VCC12V | 12V power output | Program-controlled 12V output for fan |

## J44: VIN Power Input

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GND | Ground |  |
| 2 | GND | Ground |  |
| 3 | VIN | 12V power input | External 12V DC input, shared with J1; use either one as input |
| 4 | VIN | 12V power input | External 12V DC input, shared with J1; use either one as input |

## J32: LVDS / DSI

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC_OUT | Power output | Panel power output, selectable 12V / 5V / 3.3V through J33 jumper |
| 2 | VCC_OUT | Power output | Panel power output, selectable 12V / 5V / 3.3V through J33 jumper |
| 3 | VCC_OUT | Power output | Panel power output, selectable 12V / 5V / 3.3V through J33 jumper |
| 4 | GND | Ground |  |
| 5 | GND | Ground |  |
| 6 | GND | Ground |  |
| 7 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 8 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 9 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 10 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 11 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 12 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 13 | GND | Ground |  |
| 14 | GND | Ground |  |
| 15 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 16 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 17 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 18 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | DSI / LVDS differential pair | DSI / LVDS differential signal output, selected by software |
| 19 | GND | Ground |  |
| 20 | GND | Ground |  |

## J42: Backlight

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | VCC12V_DCIN | Power output | 12V output for external devices |
| 2 | VCC12V_DCIN | Power output | 12V output for external devices |
| 3 | LCD_PWREN_H | GPIO | 3.3V GPIO |
| 4 | LCD_BL_PWM | GPIO | 3.3V or 5V PWM control, level configurable by resistor, default 3.3V |
| 5 | GND | Ground |  |
| 6 | GND | Ground |  |

## J38 / J39 / J40: USB 2.0

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | USB_5V | Power output | 对外5V电压输出 |
| 2 | HOST_DM | USB differential pair | USB HOST signal for external USB devices |
| 3 | HOST_DP | USB differential pair | USB HOST signal for external USB devices |
| 4 | GND | Ground |  |


