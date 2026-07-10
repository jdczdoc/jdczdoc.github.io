---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the X3128CV4 core board
---

# Pin Definition

This section lists the pin definition of the X3128CV4 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin | Signal | Description |
|---|---|---|
| 1 | VCC_SYS | core board main power output, 4.2V |
| 2 | CIF_PDN0 | GPIO3_D7, general-purpose GPIO |
| 3 | PWM0 | GPIO0_D2, multiplexedPWM0 |
| 4 | PWM1 | GPIO0_D3, multiplexedPWM1 |
| 5 | PWM2 | GPIO0_D4, multiplexedPWM2 |
| 6 | UART0_RTS | GPIO0_C1, multiplexedUART0 |
| 7 | UART0_RXD | GPIO2_D3, multiplexedUART0 |
| 8 | UART0_CTS | GPIO2_D5, multiplexedUART0 |
| 9 | UART0_TXD | GPIO2_D2, multiplexedUART0 |
| 10 | IR_RX | GPIO3_D2, multiplexed红外接收口 |
| 11 | SPDIF_TX | GPIO3_D3, multiplexed光纤输出 |
| 12 | TX_C- | HDMIdifferential pair |
| 13 | TX_C+ | HDMIdifferential pair |
| 14 | TX_0- | HDMIdifferential pair |
| 15 | TX_0+ | HDMIdifferential pair |
| 16 | TX_1- | HDMIdifferential pair |
| 17 | TX_1+ | HDMIdifferential pair |
| 18 | TX_2- | HDMIdifferential pair |
| 19 | TX_2+ | HDMIdifferential pair |
| 20 | VDAC_OUTP | 数模转换输出 |
| 21 | OTG_ID | OTG ID pin |
| 22 | OTG_DET | OTG detect pin |
| 23 | HOST_DP | HOSTdifferential pair |
| 24 | HOST_DM | HOSTdifferential pair |
| 25 | OTG_DP | OTGdifferential pair |
| 26 | OTG_DM | OTGdifferential pair |
| 27 | SDMMC_DET | SDMMC0Pin对 |
| 28 | SDMMC_CMD | SDMMC0Pin对 |
| 29 | SDMMC_D0 | SDMMC0Pin对 |
| 30 | SDMMC_D1 | SDMMC0Pin对 |
| 31 | SDMMC_D2 | SDMMC0Pin对 |
| 32 | SDMMC_D3 | SDMMC0Pin对 |
| 33 | SDMMC_CLK | SDMMC0Pin对 |
| 34 | I2C3_SDA | GPIO0_A7, multiplexedI2C3_SDA |
| 35 | I2C3_SCL | GPIO0_A6, multiplexedI2C3_SCL |
| 36 | VCC_IO | 3.3V DC-DC输出 |

## Core Board Pin Definition2

| Pin | Signal | Description |
|---|---|---|
| 37 | VCC_IO | 3.3V DC-DC输出 |
| 38 | HDMI_HPD | GPIO0_B7, multiplexedHDMI |
| 39 | HDMI_CEC | GPIO0_C4, multiplexedHDMI1 |
| 40 | UART1_TX | GPIO1_B1, multiplexedUART1 |
| 41 | UART1_RX | GPIO1_B2, multiplexedUART1 |
| 42 | UART1_RTS | GPIO1_B3, multiplexedUART1 |
| 43 | SPI_CLK | GPIO0_B1, multiplexedSPI |
| 44 | SPI_CSn0 | GPIO0_B6, multiplexedSPI |
| 45 | SPI_TXD | GPIO0_B3, multiplexedSPI |
| 46 | SPI_RXD | GPIO0_B5, multiplexedSPI |
| 47 | SPI_CSn1 | GPIO1_B4, multiplexedSPI |
| 48 | SDMMC1_CLK | SDMMC1数据对 |
| 49 | SDMMC1_D3 | SDMMC1数据对 |
| 50 | SDMMC1_D2 | SDMMC1数据对 |
| 51 | SDMMC1_D1 | SDMMC1数据对 |
| 52 | SDMMC1_D0 | SDMMC1数据对 |
| 53 | SDMMC_PWR | SDMMC1数据对 |
| 54 | I2C1_SDA/SDMMC1_CMD | SDMMC1数据对, multiplexedI2C1 |
| 55 | I2C1_SCL | GPIO0_A2, multiplexedI2C1 |
| 56 | I2C0_SCL | GPIO0_A0, multiplexedI2C0 |
| 57 | I2C0_SDA | GPIO0_A1, multiplexedI2C0 |
| 58 | GSENSOR_INT | GPIO0_B4, multiplexedI2S接口 |
| 59 | TP_INT | GPIO1_B0, multiplexedUART1 |
| 60 | SPK_CTL | GPIO0_D6, general-purpose GPIO |
| 61 | TP_RST | GPIO0_D1, 利用UART2 |
| 62 | HP_CTL | GPIO3_C4, general-purpose GPIO |
| 63 | LCD_RST | GPIO0_D0, multiplexedUART2 |
| 64 | GPIO3_C7 | GPIO3_C7, general-purpose GPIO |
| 65 | GPIO1_C7 | GPIO1_C7, general-purpose GPIO |
| 66 | GPIO2_A2 | GPIO2_A2, general-purpose GPIO |
| 67 | GPIO1_A7 | GPIO1_A7, general-purpose GPIO |
| 68 | GPIO2_A0 | GPIO2_A0, multiplexedSPI |
| 69 | GPIO2_A1 | GPIO2_A1, general-purpose GPIO |
| 70 | GPIO0_C7 | GPIO0_C7, general-purpose GPIO |
| 71 | GPIO2_A6 | GPIO2_A6, general-purpose GPIO |
| 72 | GND | GND |

## Core Board Pin Definition3

| Pin | Signal | Description |
|---|---|---|
| 73 | GND | Ground |
| 74 | GPIO2_A4 | GPIO2_A4, general-purpose GPIO |
| 75 | GPIO3_C6 | GPIO3_C6, general-purpose GPIO |
| 76 | GPIO2_A3 | GPIO2_A3, general-purpose GPIO |
| 77 | GPIO1_A3 | GPIO1_A3, multiplexedI2S |
| 78 | GPIO3_C5 | GPIO3_C5, general-purpose GPIO |
| 79 | CODEC_AOL | audio output |
| 80 | CODEC_AOR | audio output |
| 81 | MICBIAS | MIC偏置 |
| 82 | MICIN-P | audio input |
| 83 | MICIN-N | audio input |
| 84 | HP_DET | headphone detect pin |
| 85 | LCD_D23 | GPIO2_D1, multiplexedLCD, MAC |
| 86 | LCD_D22 | GPIO2_D0, multiplexedLCD, MAC |
| 87 | LCD_D21 | GPIO2_C7, multiplexedLCD, MAC |
| 88 | LCD_D20 | GPIO2_C6, multiplexedLCD, MAC |
| 89 | I2C2_SCL_LCD_19 | GPIO2_C5, multiplexedLCD, MAC,<br />I2C2 |
| 90 | I2C2_SDA_LCD_18 | GPIO2_C4, multiplexedLCD, MAC,<br />I2C2 |
| 91 | LCD_D17 | GPIO2_C3, multiplexedLCD, MAC |
| 92 | LCD_D16 | GPIO2_C2, multiplexedLCD, MAC |
| 93 | LCD_D15 | GPIO2_C1, multiplexedLCD, MAC |
| 94 | LCD_D14 | GPIO2_C0, multiplexedLCD, MAC |
| 95 | LCD_D13 | GPIO2_B7, multiplexedLCD, MAC |
| 96 | LCD_D12 | GPIO2_B6, multiplexedLCD, MAC |
| 97 | LCD_D11 | GPIO2_B5, multiplexedLCD, MAC |
| 98 | LCD_D10 | GPIO2_B4, multiplexedLCD, MAC |
| 99 | LCD_D9 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 100 | LCD_D8 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 101 | LCD_D7 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 102 | LCD_D6 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 103 | LCD_D5 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 104 | LCD_D4 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 105 | LCD_D3 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 106 | LCD_D2 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 107 | LCD_D1 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |
| 108 | LCD_D0 | multiplexedRGB, LVDS, MIPI口,<br />不能作为独立的GPIO |

## Core Board Pin Definition4

| Pin | Signal | Description |
|---|---|---|
| 109 | GND | Ground |
| 110 | GND | Ground |
| 111 | LCD_HSYNC | GPIO2_B1, multiplexedLCD |
| 112 | LCD_VSYNC | GPIO2_B2, multiplexedLCD |
| 113 | LCD_CLK | GPIO2_B0, multiplexedLCD |
| 114 | LCD_DEN | GPIO2_B3, multiplexedLCD |
| 115 | VCC_RK816IN | core board power input, 4.8到5.5V |
| 116 | VCC_RK816IN | core board power input, 4.8到5.5V |
| 117 | VCC_RK816IN | core board power input, 4.8到5.5V |
| 118 | PWRON | PMU上电管脚, active low |
| 119 | VCC_RTC | RTC供电管脚, 3V输入 |
| 120 | BAT_P | 电池输入管脚 |
| 121 | BAT_N | 电池输入管脚 |
| 122 | RTC_CLKOUT | 32768Hzclock output |
| 123 | VCC28_CIF | PMU LDO1输出, 电压可调 |
| 124 | VCC18_CIF | PMU LDO2输出, 电压可调 |
| 125 | VCC_TP | PMU LDO6输出, 电压可调 |
| 126 | VCCA_CODEC | PMU LDO5输出, 电压可调 |
| 127 | RESET | CPU复位脚, active low |
| 128 | ADCIN2 | ADC输入管脚, 3.3V基准源 |
| 129 | ADCIN1 | ADC输入管脚, 3.3V基准源 |
| 130 | ADCIN0 | ADC输入管脚, 3.3V基准源 |
| 131 | CIF_CLKOUT | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 132 | CIF_CLKIN | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 133 | CIF_HREF | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 134 | CIF_VSYNC | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 135 | CIF_D7 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 136 | CIF_D6 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 137 | CIF_D5 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 138 | CIF_D4 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 139 | CIF_D3 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 140 | CIF_D2 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 141 | CIF_D1 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 142 | CIF_D0 | BT656/BT601camera数据对,<br />无法当作general-purpose GPIO使用 |
| 143 | CIF_PDN1 | GPIO3_D7, general-purpose GPIO |
| 144 | VCC_SYS | core board main power output |
