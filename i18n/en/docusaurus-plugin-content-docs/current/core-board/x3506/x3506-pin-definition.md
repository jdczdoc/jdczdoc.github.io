---
sidebar_position: 2
title: Pin Definition
description: 120-pin definition of the X3506 core board
---

# Pin Definition

This section lists the 120-pin definition of the X3506 core board. When designing a carrier board, always verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and the RK3506 datasheet.

## Pin Definition 1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | UART5_TX_M0/RMII1_MDC | GPIO multiplexing | GPIO3_B4 |
| 2 | UART5_RX_M0/RMII1_TXEN | GPIO multiplexing | GPIO3_B3 |
| 3 | UART5_CTSN_M0/RMII1_TXD1 | GPIO multiplexing | GPIO3_B2 |
| 4 | SAI2_LRCK_M0/RMII1_TXD0 | GPIO multiplexing | GPIO3_B1 |
| 5 | SAI2_SDO_M0/RMII1_CLK | GPIO multiplexing | GPIO3_B0 |
| 6 | SAI2_SCLK_M0/RMII1_RXD1 | GPIO multiplexing | GPIO3_A7 |
| 7 | SAI2_SDI_M0/RMII1_RXD0 | GPIO multiplexing | GPIO3_A6 |
| 8 | GND | System ground |  |
| 9 | SDMMC_CLK/EMMC_CLKOUT |  | GPIO3_A0 |
| 10 | GND | System ground |  |
| 11 | SDMMC_CMD/EMMC_CMD | GPIO multiplexing | GPIO3_A1 |
| 12 | SDMMC_D3/EMMC_D3 | GPIO multiplexing | GPIO3_A5 |
| 13 | SDMMC_D2/EMMC_D2 | GPIO multiplexing | GPIO3_A4 |
| 14 | SDMMC_D1/EMMC_D1 | GPIO multiplexing | GPIO3_A3 |
| 15 | SDMMC_D0/EMMC_D0 | GPIO multiplexing | GPIO3_A2 |
| 16 | GND | System ground |  |
| 17 | RMII0_RXDV_CRS | GPIO multiplexing | GPIO2_C0 |
| 18 | RMII0_MDIO | GPIO multiplexing | GPIO2_B7 |
| 19 | RMII0_MDC | GPIO multiplexing | GPIO2_B6 |
| 20 | RMII0_RXD1 | GPIO multiplexing | GPIO2_B1 |
| 21 | RMII0_RXD0 | GPIO multiplexing | GPIO2_B0 |
| 22 | RMII0_TXEN | GPIO multiplexing | GPIO2_B5 |
| 23 | RMII0_TXD1 | GPIO multiplexing | GPIO2_B4 |
| 24 | RMII0_TXD0 | GPIO multiplexing | GPIO2_B3 |
| 25 | RMII0_CLK | GPIO multiplexing | GPIO2_B2 |
| 26 | GND | System ground |  |
| 27 | BT_WAKE_HOST_H | GPIO multiplexing | GPIO4_B3 |
| 28 | HOST_WAKE_BT_H | GPIO multiplexing | GPIO4_B2 |
| 29 | SARADC_IN1_RECOVER/KEY | GPIO multiplexing | GPIO4_B1 |
| 30 | BOOT | GPIO multiplexing | GPIO4_B0 |

## Pin Definition 2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 31 | ACODEC_ADC_INN | Audio input | Not available as GPIO |
| 32 | ACODEC_ADC_INP | Audio input | Not available as GPIO |
| 33 | GND | System ground |  |
| 34 | USB20_OTG0_ID | USB ID | Not available as GPIO |
| 35 | USB20_OTG0_VBUSDET | USB detection signal | Not available as GPIO |
| 36 | USB20_OTG0_DM | USB signal | Not available as GPIO |
| 37 | USB20_OTG0_DP | USB signal | Not available as GPIO |
| 38 | USB20_OTG1_DM | USB signal | Not available as GPIO |
| 39 | USB20_OTG1_DP | USB signal | Not available as GPIO |
| 40 | GND | System ground |  |
| 41 | MIPI_DPHY_DSI_TX_D0N/USB20_OTG1_DRV_H | GPIO multiplexing | GPIO4_A4 |
| 42 | MIPI_DPHY_DSI_TX_CLKP | GPIO multiplexing | GPIO4_A5 |
| 43 | MIPI_DPHY_DSI_TX_D1P/RMII1_RSTN | GPIO multiplexing | GPIO4_A3 |
| 44 | MIPI_DPHY_DSI_TX_D1N/SPK_CTRL | GPIO multiplexing | GPIO4_A2 |
| 45 | MIPI_DPHY_DSI_TX_D0N/USB20_OTG0_DRV_H | GPIO multiplexing | GPIO4_A0 |
| 46 | MIPI_DPHY_DSI_TX_D0P/WIFI_REG_ON_H | GPIO multiplexing | GPIO4_A1 |
| 47 | GND | System ground |  |
| 48 | VO_LCDC_DEN/DSMC_CLKP | GPIO multiplexing | GPIO1_A0 |
| 49 | VO_LCDC_VSYNC/DSMC_INT0 | GPIO multiplexing | GPIO1_A1 |
| 50 | VO_LCDC_HSYNC/DSMC_DQS0 | GPIO multiplexing | GPIO1_A2 |
| 51 | VO_LCDC_CLK/DSMC_D0 | GPIO multiplexing | GPIO1_A3 |
| 52 | GND | System ground |  |
| 53 | VO_LCDC_D23/DSMC_D1 | GPIO multiplexing | GPIO1_A4 |
| 54 | VO_LCDC_D22/DSMC_D2 | GPIO multiplexing | GPIO1_A5 |
| 55 | VO_LCDC_D21/DSMC_D3 | GPIO multiplexing | GPIO1_A6 |
| 56 | VO_LCDC_D20/DSMC_D4 | GPIO multiplexing | GPIO1_A7 |
| 57 | VO_LCDC_D19/DSMC_D5 | GPIO multiplexing | GPIO1_B0 |
| 58 | VO_LCDC_D18/UART4_CTSN | GPIO multiplexing | GPIO1_B1 |
| 59 | VO_LCDC_D17/CAN1_TX | GPIO multiplexing | GPIO1_B2 |
| 60 | VO_LCDC_D16/CAN1_RX | GPIO multiplexing | GPIO1_B3 |

## Pin Definition 3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 61 | VO_LCDC_D15/DSMC_D6 | GPIO multiplexing | GPIO1_B4 |
| 62 | VO_LCDC_D14/DSMC_D7 | GPIO multiplexing | GPIO1_B5 |
| 63 | VO_LCDC_D13/DSMC_CSN0 | GPIO multiplexing | GPIO1_B6 |
| 64 | VO_LCDC_D12/DSMC_RDYN | GPIO multiplexing | GPIO1_B7 |
| 65 | VO_LCDC_D11/DSMC_RESETN | GPIO multiplexing | GPIO1_C0 |
| 66 | VO_LCDC_D10/DSM_AUD_RN | GPIO multiplexing | GPIO1_C1 |
| 67 | VO_LCDC_D9/DSM_AUD_RP | GPIO multiplexing | GPIO1_C2 |
| 68 | VO_LCDC_D8/MIPI_DPHY_DSI_TX_TE | GPIO multiplexing | GPIO1_C3 |
| 69 | GND | System ground |  |
| 70 | VO_LCDC_D7/USB20_OTG0_DRV_H | GPIO multiplexing | GPIO1_C4 |
| 71 | VO_LCDC_D6/WIFI_REG_ON_H | GPIO multiplexing | GPIO1_C5 |
| 72 | VO_LCDC_D5/SPK_CTRL | GPIO multiplexing | GPIO1_C6 |
| 73 | VO_LCDC_D4/RMII1_RSTN | GPIO multiplexing | GPIO1_C7 |
| 74 | VO_LCDC_D3/USB20_OTG1_DRV_H | GPIO multiplexing | GPIO1_D0 |
| 75 | VO_LCDC_D2/UART4_RTSN | GPIO multiplexing | GPIO1_D1 |
| 76 | VO_LCDC_D1/UART4_RX | GPIO multiplexing | GPIO1_D2 |
| 77 | VO_LCDC_D0/UART4_TX | GPIO multiplexing | GPIO1_D3 |
| 78 | GND | System ground |  |
| 79 | WIFI_WAKE_HOST_H | GPIO multiplexing | GPIO0_D0 |
| 80 | UART0_RX/DEBUG | GPIO multiplexing | GPIO0_C7 |
| 81 | UART0_TX/DEBUG | GPIO multiplexing | GPIO0_C6 |
| 82 | GND | System ground |  |
| 83 | CAN0_RX/ETH_CLK0_25M_OUT | GPIO multiplexing | GPIO0_C4 |
| 84 | GND | System ground |  |
| 85 | CAN0_TX/ETH_CLK1_25M_OUT | GPIO multiplexing | GPIO0_C3 |
| 86 | GND | System ground |  |
| 87 | CLK32K_RTC2WIFI | 32K clock output |  |
| 88 | GND | System ground |  |
| 89 | RESET | System reset signal |  |
| 90 | RTC | RTC power input |  |

## Pin Definition 4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 91 | UART3_TX | GPIO multiplexing | GPIO0_B6 |
| 92 | UART3_RX | GPIO multiplexing | GPIO0_B7 |
| 93 | UART1_TX | GPIO multiplexing | GPIO0_C1 |
| 94 | UART1_RX | GPIO multiplexing | GPIO0_C0 |
| 95 | RMII0_RSTN | GPIO multiplexing | GPIO0_C2 |
| 96 | UART3_RTSN/485PE | GPIO multiplexing | GPIO0_B5 |
| 97 | GND | System ground |  |
| 98 | SAI1_SDO0/UART3_CTSN/485DE | GPIO multiplexing | GPIO0_B4 |
| 99 | SAI1_MCLK/SPI0_CLK | GPIO multiplexing | GPIO0_B0 |
| 100 | SAI1_SDI/SPI0_CSN0 | GPIO multiplexing | GPIO0_B3 |
| 101 | SAI1_LRCK/SPI0_MISO | GPIO multiplexing | GPIO0_B2 |
| 102 | SAI1_SCLK/SPI0_MOSI | GPIO multiplexing | GPIO0_B1 |
| 103 | GND | System ground |  |
| 104 | TP_RST_L | GPIO multiplexing | GPIO0_A7 |
| 105 | TP_INT_L | GPIO multiplexing | GPIO0_A6 |
| 106 | I2C2_SDA | GPIO multiplexing | GPIO0_A5 |
| 107 | I2C2_SCL | GPIO multiplexing | GPIO0_A4 |
| 108 | LCD_PWREN_H | GPIO multiplexing | GPIO0_A1 |
| 109 | PWM0_CH2_LCD_BL | GPIO multiplexing | GPIO0_A3 |
| 110 | UART2_RX/PWM0_CH3_IR_RX | GPIO multiplexing | GPIO0_A0 |
| 111 | UART2_TX/WIFI_PWREN_L | GPIO multiplexing | GPIO0_A2 |
| 112 | GND | System ground |  |
| 113 | GND | System ground |  |
| 114 | GND | System ground |  |
| 115 | VCC5V0_SYS | 5V power input | 5V/2A or higher recommended |
| 116 | VCC5V0_SYS | 5V power input | 5V/2A or higher recommended |
| 117 | VCC5V0_SYS | 5V power input | 5V/2A or higher recommended |
| 118 | GND | System ground |  |
| 119 | BT_REG_ON_H/RMII1_RXDV_CRS | GPIO multiplexing | GPIO3_B6 |
| 120 | UART5_RTSN_M0/RMII1_MDIO | GPIO multiplexing | GPIO3_B5 |
