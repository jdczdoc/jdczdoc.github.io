---
sidebar_position: 4
title: Carrier Connector Pins
description: x3576bv3 Carrier Connector Pins
---

# Carrier Connector Pins

Confirm Pin 1 using the connector images and silkscreen. Verify module supplies and signal levels before wiring. DSI, CSI0 and CSI1 each have a separate 30-pin definition.

## 12 V Power Header

| Pin | Signal |
| --- | --- |
| 1 | `12V` |
| 2 | `12V` |
| 3 | `GND` |
| 4 | `GND` |

## UART0 Debug

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `UART0_RX_M0_DEBUG` |
| 3 | `UART0_TX_M0_DEBUG` |
| 4 | `3.3V` |

## TTL Expansion UART

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `USRT3_RX_M2` |
| 3 | `USRT3_TX_M2` |
| 4 | `VCC1V8` |

## RS232

| Pin | Signal |
| --- | --- |
| 1 | `3.3V` |
| 2 | `RS232_TX` |
| 3 | `RS232_RX` |
| 4 | `GND` |

## USB 2.0 Header

| Pin | Signal |
| --- | --- |
| 1 | `5V` |
| 2 | `USB_DM` |
| 3 | `USB_DP` |
| 4 | `GND` |

## LT6911C Programming Header

| Pin | Signal |
| --- | --- |
| 1 | `CSDA` |
| 2 | `CSCL` |
| 3 | `GND` |
| 4 | `3.3V` |

## I2C Touch

| Pin | Signal |
| --- | --- |
| 1 | `3.3V / 1.8V` |
| 2 | `GND` |
| 3 | `TP_INT_L` |
| 4 | `TP_RST_L` |
| 5 | `SDA` |
| 6 | `SCL` |

## External Keys

| Pin | Signal |
| --- | --- |
| 1 | `PWRON_L` |
| 2 | `GND` |
| 3 | `GPIO4_B0` |
| 4 | `GND` |
| 5 | `BOOT_KEY` |

## ADC

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `SARADC_VIN3_HP_HOOK` |
| 3 | `SARAC_VIN1_KEY/RECOVERY` |
| 4 | `1.8V` |

## GPIO

| Pin | Signal |
| --- | --- |
| 1 | `3.3V` |
| 2 | `GPIO0_D1` |
| 3 | `GPIO0_A0` |
| 4 | `GPIO0_C3` |
| 5 | `GPIO0_D3` |
| 6 | `GND` |

## Fan

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `12V` |

## IR

| Pin | Signal |
| --- | --- |
| 1 | `PWM0_CH0_M0_IR` |
| 2 | `GND` |
| 3 | `3.3V` |

## MIPI DSI

| Pin | Signal |
| --- | --- |
| 1 | `VCC_5V0` |
| 2 | `VCC_5V0` |
| 3 | `VCC_5V0` |
| 4 | `VCC3V3_S3` |
| 5 | `VCC3V3_S3` |
| 6 | `I2C0_SCL_M1_TP` |
| 7 | `I2C0_SDA_M1_TP` |
| 8 | `TP_INT_L` |
| 9 | `TP_RST_L` |
| 10 | `VCC3V3_S3` |
| 11 | `VCC3V3_S3` |
| 12 | `LCD_BL_PWM1_CH1_M0` |
| 13 | `MIPI_DSI_RST` |
| 14 | `NC` |
| 15 | `LCD_PWREN_H` |
| 16 | `GND` |
| 17 | `MIPI_DPHY_DSI_TX_D3N` |
| 18 | `MIPI_DPHY_DSI_TX_D3P` |
| 19 | `GND` |
| 20 | `MIPI_DPHY_DSI_TX_D2N` |
| 21 | `MIPI_DPHY_DSI_TX_D2P` |
| 22 | `GND` |
| 23 | `MIPI_DPHY_DSI_TX_CLKN` |
| 24 | `MIPI_DPHY_DSI_TX_CLKP` |
| 25 | `GND` |
| 26 | `MIPI_DPHY_DSI_TX_D1N` |
| 27 | `MIPI_DPHY_DSI_TX_D1P` |
| 28 | `GND` |
| 29 | `MIPI_DPHY_DSI_TX_D0N` |
| 30 | `MIPI_DPHY_DSI_TX_D0P` |

## MIPI CSI0

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `MIPI_DPHY_CSI0_RX_CLKP` |
| 3 | `MIPI_DPHY_CSI0_RX_CLKN` |
| 4 | `GND` |
| 5 | `MIPI_DPHY_CSI0_RX_D0P` |
| 6 | `MIPI_DPHY_CSI0_RX_D0N` |
| 7 | `GND` |
| 8 | `MIPI_DPHY_CSI0_RX_D1P` |
| 9 | `MIPI_DPHY_CSI0_RX_D1N` |
| 10 | `GND` |
| 11 | `MIPI_DPHY_CSI0_RX_D2P` |
| 12 | `MIPI_DPHY_CSI0_RX_D2N` |
| 13 | `GND` |
| 14 | `MIPI_DPHY_CSI0_RX_D3P` |
| 15 | `MIPI_DPHY_CSI0_RX_D3N` |
| 16 | `GND` |
| 17 | `NC` |
| 18 | `NC` |
| 19 | `MIPI_AF` |
| 20 | `I2C4_SCL_M3_MIPI_CAM0/2` |
| 21 | `I2C4_SDA_M3_MIPI_CAM0/2` |
| 22 | `MIPI_DPHY_CSI_CAM2_CLKOUT` |
| 23 | `MIPI_DCPHY_CSI_CAM0_CLKOUT` |
| 24 | `MIPI_DPHY_CSI_CAM2_PDN_H` |
| 25 | `MIPI_DCPHY_CSI_CAM0_PDN_H` |
| 26 | `MIPI_DPHY_CSI_CAM2_RST_H` |
| 27 | `MIPI_DCPHY_CSI_CAM0_RST_H` |
| 28 | `VCC1V8_CAM3` |
| 29 | `VCC2V8_CAM3` |
| 30 | `MIPI_1.2V_CAM3` |

## MIPI CSI1

| Pin | Signal |
| --- | --- |
| 1 | `GND` |
| 2 | `MIPI_DPHY_CSI1_RX_D0P` |
| 3 | `MIPI_DPHY_CSI1_RX_D0N` |
| 4 | `GND` |
| 5 | `MIPI_DPHY_CSI1_RX_D1P` |
| 6 | `MIPI_DPHY_CSI1_RX_D1N` |
| 7 | `GND` |
| 8 | `MIPI_DPHY_CSI1_RX_CLKP` |
| 9 | `MIPI_DPHY_CSI1_RX_CLKN` |
| 10 | `GND` |
| 11 | `MIPI_DPHY_CSI1_RX_D2P` |
| 12 | `MIPI_DPHY_CSI1_RX_D2N` |
| 13 | `GND` |
| 14 | `MIPI_DPHY_CSI1_RX_D3P` |
| 15 | `MIPI_DPHY_CSI1_RX_D3N` |
| 16 | `GND` |
| 17 | `MIPI_DPHY_CSI1_CAM_CLKOUT` |
| 18 | `MIPI_DCPHY_CSI_CAM1_RST_H` |
| 19 | `GND` |
| 20 | `MIPI_DPHY_CSI_CAM1_PWREN_H` |
| 21 | `VCC_3V3` |
| 22 | `VCC_3V3` |
| 23 | `I2C5_SDA_M3_MIPI_CSI1` |
| 24 | `I2C5_SCL_M3_MIPI_CSI1` |
| 25 | `VCC_5V0` |
| 26 | `VCC_5V0` |
| 27 | `VCC_5V0` |
| 28 | `MIPI_DPHY_CSI_CAM1_PDN_H` |
| 29 | `GND` |
| 30 | `GND` |

The tables retain the supplied `USRT3` and `SARAC` signal spellings. Also check UART3 and SARADC naming in the matching schematic.
