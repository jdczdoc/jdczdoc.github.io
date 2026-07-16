---
sidebar_position: 3
title: Pin Definition
description: X3128CV4核心板 pin definition
---

# Pin Definition

interface定义

Core BoardPin Definition1

### Core BoardPin Definition1

| Pin No. | Signal | Description |
| --- | --- | --- |
| 1 | VCC_SYS | Core-board main power output，4.2V |
| 2 | CIF_PDN0 | GPIO3_D7，General-purpose GPIO口 |
| 3 | PWM0 | GPIO0_D2，muxed as PWM0 |
| 4 | PWM1 | GPIO0_D3，muxed as PWM1 |
| 5 | PWM2 | GPIO0_D4，muxed as PWM2 |
| 6 | UART0_RTS | GPIO0_C1，muxed as UART0 |
| 7 | UART0_RXD | GPIO2_D3，muxed as UART0 |
| 8 | UART0_CTS | GPIO2_D5，muxed as UART0 |
| 9 | UART0_TXD | GPIO2_D2，muxed as UART0 |
| 10 | IR_RX | GPIO3_D2，muxed as 红外接收口 |
| 11 | SPDIF_TX | GPIO3_D3，muxed as 光纤output |
| 12 | TX_C- | HDMI差分对 |
| 13 | TX_C+ | HDMI差分对 |
| 14 | TX_0- | HDMI差分对 |
| 15 | TX_0+ | HDMI差分对 |
| 16 | TX_1- | HDMI差分对 |
| 17 | TX_1+ | HDMI差分对 |
| 18 | TX_2- | HDMI差分对 |
| 19 | TX_2+ | HDMI差分对 |
| 20 | VDAC_OUTP | 数模转换output |
| 21 | OTG_ID | OTG ID脚 |
| 22 | OTG_DET | OTG检测脚 |
| 23 | HOST_DP | HOST差分对 |
| 24 | HOST_DM | HOST差分对 |
| 25 | OTG_DP | OTG差分对 |
| 26 | OTG_DM | OTG差分对 |
| 27 | SDMMC_DET | SDMMC0引脚对 |
| 28 | SDMMC_CMD | SDMMC0引脚对 |
| 29 | SDMMC_D0 | SDMMC0引脚对 |
| 30 | SDMMC_D1 | SDMMC0引脚对 |
| 31 | SDMMC_D2 | SDMMC0引脚对 |
| 32 | SDMMC_D3 | SDMMC0引脚对 |
| 33 | SDMMC_CLK | SDMMC0引脚对 |
| 34 | I2C3_SDA | GPIO0_A7，muxed as I2C3_SDA |
| 35 | I2C3_SCL | GPIO0_A6，muxed as I2C3_SCL |
| 36 | VCC_IO | 3.3V DC-DCoutput |


Core BoardPin Definition2

### Core BoardPin Definition2

| Pin No. | Signal | Description |
| --- | --- | --- |
| 37 | VCC_IO | 3.3V DC-DCoutput |
| 38 | HDMI_HPD | GPIO0_B7，muxed as HDMI |
| 39 | HDMI_CEC | GPIO0_C4，muxed as HDMI1 |
| 40 | UART1_TX | GPIO1_B1，muxed as UART1 |
| 41 | UART1_RX | GPIO1_B2，muxed as UART1 |
| 42 | UART1_RTS | GPIO1_B3，muxed as UART1 |
| 43 | SPI_CLK | GPIO0_B1，muxed as SPI |
| 44 | SPI_CSn0 | GPIO0_B6，muxed as SPI |
| 45 | SPI_TXD | GPIO0_B3，muxed as SPI |
| 46 | SPI_RXD | GPIO0_B5，muxed as SPI |
| 47 | SPI_CSn1 | GPIO1_B4，muxed as SPI |
| 48 | SDMMC1_CLK | SDMMC1数据对 |
| 49 | SDMMC1_D3 | SDMMC1数据对 |
| 50 | SDMMC1_D2 | SDMMC1数据对 |
| 51 | SDMMC1_D1 | SDMMC1数据对 |
| 52 | SDMMC1_D0 | SDMMC1数据对 |
| 53 | SDMMC_PWR | SDMMC1数据对 |
| 54 | I2C1_SDA/SDMMC1_CMD | SDMMC1数据对，muxed as I2C1 |
| 55 | I2C1_SCL | GPIO0_A2，muxed as I2C1 |
| 56 | I2C0_SCL | GPIO0_A0，muxed as I2C0 |
| 57 | I2C0_SDA | GPIO0_A1，muxed as I2C0 |
| 58 | GSENSOR_INT | GPIO0_B4，muxed as I2S interface |
| 59 | TP_INT | GPIO1_B0，muxed as UART1 |
| 60 | SPK_CTL | GPIO0_D6，General-purpose GPIO |
| 61 | TP_RST | GPIO0_D1，利用UART2 |
| 62 | HP_CTL | GPIO3_C4，General-purpose GPIO |
| 63 | LCD_RST | GPIO0_D0，muxed as UART2 |
| 64 | GPIO3_C7 | GPIO3_C7，General-purpose GPIO |
| 65 | GPIO1_C7 | GPIO1_C7，General-purpose GPIO |
| 66 | GPIO2_A2 | GPIO2_A2，General-purpose GPIO |
| 67 | GPIO1_A7 | GPIO1_A7，General-purpose GPIO |
| 68 | GPIO2_A0 | GPIO2_A0，muxed as SPI |
| 69 | GPIO2_A1 | GPIO2_A1，General-purpose GPIO |
| 70 | GPIO0_C7 | GPIO0_C7，General-purpose GPIO |
| 71 | GPIO2_A6 | GPIO2_A6，General-purpose GPIO |
| 72 | GND | GND |


Core BoardPin Definition3

### Core BoardPin Definition3

| Pin No. | Signal | Description |
| --- | --- | --- |
| 73 | GND | Ground |
| 74 | GPIO2_A4 | GPIO2_A4，General-purpose GPIO |
| 75 | GPIO3_C6 | GPIO3_C6，General-purpose GPIO |
| 76 | GPIO2_A3 | GPIO2_A3，General-purpose GPIO |
| 77 | GPIO1_A3 | GPIO1_A3，muxed as I2S |
| 78 | GPIO3_C5 | GPIO3_C5，General-purpose GPIO |
| 79 | CODEC_AOL | audiooutput |
| 80 | CODEC_AOR | audiooutput |
| 81 | MICBIAS | MIC偏置 |
| 82 | MICIN-P | audioinput |
| 83 | MICIN-N | audioinput |
| 84 | HP_DET | 耳机检测脚 |
| 85 | LCD_D23 | GPIO2_D1，muxed as LCD，MAC |
| 86 | LCD_D22 | GPIO2_D0，muxed as LCD，MAC |
| 87 | LCD_D21 | GPIO2_C7，muxed as LCD，MAC |
| 88 | LCD_D20 | GPIO2_C6，muxed as LCD，MAC |
| 89 | I2C2_SCL_LCD_19 | GPIO2_C5，muxed as LCD，MAC，I2C2 |
| 90 | I2C2_SDA_LCD_18 | GPIO2_C4，muxed as LCD，MAC，I2C2 |
| 91 | LCD_D17 | GPIO2_C3，muxed as LCD，MAC |
| 92 | LCD_D16 | GPIO2_C2，muxed as LCD，MAC |
| 93 | LCD_D15 | GPIO2_C1，muxed as LCD，MAC |
| 94 | LCD_D14 | GPIO2_C0，muxed as LCD，MAC |
| 95 | LCD_D13 | GPIO2_B7，muxed as LCD，MAC |
| 96 | LCD_D12 | GPIO2_B6，muxed as LCD，MAC |
| 97 | LCD_D11 | GPIO2_B5，muxed as LCD，MAC |
| 98 | LCD_D10 | GPIO2_B4，muxed as LCD，MAC |
| 99 | LCD_D9 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 100 | LCD_D8 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 101 | LCD_D7 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 102 | LCD_D6 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 103 | LCD_D5 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 104 | LCD_D4 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 105 | LCD_D3 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 106 | LCD_D2 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 107 | LCD_D1 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |
| 108 | LCD_D0 | muxed as RGB，LVDS，MIPI口，不能作为独立的GPIO |


Core BoardPin Definition4

### Core BoardPin Definition4

| Pin No. | Signal | Description |
| --- | --- | --- |
| 109 | GND | Ground |
| 110 | GND | Ground |
| 111 | LCD_HSYNC | GPIO2_B1，muxed as LCD |
| 112 | LCD_VSYNC | GPIO2_B2，muxed as LCD |
| 113 | LCD_CLK | GPIO2_B0，muxed as LCD |
| 114 | LCD_DEN | GPIO2_B3，muxed as LCD |
| 115 | VCC_RK816IN | Core BoardPower input，4.8到5.5V |
| 116 | VCC_RK816IN | Core BoardPower input，4.8到5.5V |
| 117 | VCC_RK816IN | Core BoardPower input，4.8到5.5V |
| 118 | PWRON | PMU上电pin，Active low |
| 119 | VCC_RTC | RTCpower supplypin，3Vinput |
| 120 | BAT_P | 电池inputpin |
| 121 | BAT_N | 电池inputpin |
| 122 | RTC_CLKOUT | 32768Hz时钟output |
| 123 | VCC28_CIF | PMU LDO1output，Adjustable voltage |
| 124 | VCC18_CIF | PMU LDO2output，Adjustable voltage |
| 125 | VCC_TP | PMU LDO6output，Adjustable voltage |
| 126 | VCCA_CODEC | PMU LDO5output，Adjustable voltage |
| 127 | RESET | CPU复位脚，Active low |
| 128 | ADCIN2 | ADCinputpin，3.3V基准源 |
| 129 | ADCIN1 | ADCinputpin，3.3V基准源 |
| 130 | ADCIN0 | ADCinputpin，3.3V基准源 |
| 131 | CIF_CLKOUT | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 132 | CIF_CLKIN | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 133 | CIF_HREF | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 134 | CIF_VSYNC | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 135 | CIF_D7 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 136 | CIF_D6 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 137 | CIF_D5 / | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 138 | CIF_D4 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 139 | CIF_D3 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 140 | CIF_D2 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 141 | CIF_D1 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 142 | CIF_D0 | BT656/BT601camera数据对，无法当作General-purpose GPIO使用 |
| 143 | CIF_PDN1 | GPIO3_D7，General-purpose GPIO |
| 144 | VCC_SYS | Core-board main power output |
