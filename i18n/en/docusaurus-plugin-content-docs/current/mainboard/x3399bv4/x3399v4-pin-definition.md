---
sidebar_position: 6
title: Pin Definition
description: X3399CV4 200-pin core-board pin definition
---

# Pin Definition

The X3399CV4 core board uses a 200-pin stamp-hole package. The tables below are split into four groups according to the hardware manual and cover pins 1 to 200.

## Core Board Pin Definition 1

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GPIO4_A3/ / I2S1_SCLK | GPIO or I2S serial clock |  |
| 2 | GPIO4_A7/ / I2S1_SDO0 | GPIO or I2S data output |  |
| 3 | GPIO4_A6/ / I2S1_SDI0 | GPIO or I2S data input |  |
| 4 | GPIO4_A5/ / I2S1_LRCK_TX | GPIO or I2S frame clock |  |
| 5 | GPIO4_A4/ / I2S1_LRCK_RX | GPIO or I2S frame clock |  |
| 6 | GPIO4_A1/ / I2C1_SDA | GPIO or I2C1 data |  |
| 7 | GPIO4_A2/ / I2C1_SCL | GPIO or I2C1 clock |  |
| 8 | GPIO4_A0/ / I2S_CLK | GPIO or I2S master clock |  |
| 9 | GPIO3_D0/ / I2S0_SCLK | GPIO or I2S serial clock |  |
| 10 | GPIO3_D1/ / I2S0_LRCK_RX | GPIO or I2S frame clock |  |
| 11 | GPIO3_D2/ / I2S0_LRCK_TX | GPIO or I2S frame clock |  |
| 12 | GPIO3_D3/ / I2S0_SDI0 | GPIO or I2S data input |  |
| 13 | GPIO3_D4/ / I2S0_SDI1 | GPIO or I2S data input |  |
| 14 | GPIO3_D7/ / I2S0_SDO0 | GPIO or I2S data output |  |
| 15 | GPIO3_D6/ / I2S0_SDO1 | GPIO or I2S data output |  |
| 16 | GPIO3_D5/ / I2S0_SDO2 | GPIO or I2S data output |  |
| 17 | GPIO4_D4 | GPIO |  |
| 18 | ADC_IN2 | ADC input |  |
| 19 | GPIO2_C4/ / SDIO0_D0/ / SPI5_RXD | GPIO, SDIO, or SPI interface |  |
| 20 | GPIO2_C5/ / SDIO0_D1/ / SPI5_TXD | GPIO, SDIO, or SPI interface |  |
| 21 | GPIO2_C6/ / SDIO0_D2/ / SPI5_CLK | GPIO, SDIO, or SPI interface |  |
| 22 | GPIO2_C7/ / SDIO0_D3/ / SPI5_CSn0 | GPIO, SDIO, or SPI interface |  |
| 23 | GPIO2_D0/ / SDIO0_CMD | GPIO or SDIO interface |  |
| 24 | GPIO2_D1/ / SDIO0_CLK | GPIO or SDIO interface |  |
| 25 | GPIO2_C3/ / UART0_RTS | GPIO or UART0 |  |
| 26 | GPIO2_C1/ / UART0_TXD | GPIO or UART0 |  |
| 27 | GPIO2_C2/ / UART0_CTS | GPIO or UART0 |  |
| 28 | GPIO2_C0/ / UART0_RXD | GPIO or UART0 |  |
| 29 | PMU_RESET | Reset pin |  |
| 30 | GPIO4_D6 | GPIO |  |
| 31 | GPIO4_D1 | GPIO |  |
| 32 | GPIO4_D3 | GPIO |  |
| 33 | GPIO4_C6/ / PWM1_d | GPIO or PWM1 |  |
| 34 | PMIC_EXT_EN | PMU enable pin |  |
| 35 | RTC_CLKO_Wi-Fi | 32768Hz clock output |  |
| 36 | Camera_RST_L | GPIO2_D3 |  |
| 37 | VCC_RTC | RTC power input | Power input 2.5V to 3V |
| 38 | GPIO4_C2/ / PWM0 | GPIO or PWM0 |  |
| 39 | GPIO2_D4 | GPIO |  |
| 40 | GPIO4_D2 | GPIO |  |
| 41 | GPIO4_D5 | GPIO |  |
| 42 | VCC3V3_S5 | Auxiliary 3.3V power input | 3.3V input, current not less than 300mA |
| 43 | GPIO4_C5/ / SPDIF_TX | GPIO or optical output |  |
| 44 | GPIO4_C3/ / UART2DBG_RX | GPIO or UART2 |  |
| 45 | GPIO4_C4/ / UART2DBG_TX | GPIO or UART2 |  |
| 46 | GPIO4_C0/ / I2C3_SDA/ / UART2_RX | GPIO, I2C3 data, or UART2 |  |
| 47 | GPIO4_C1/ / I2C3_SCL/ / UART2_TX | GPIO, I2C3 clock, or UART2 |  |
| 48 | GPIO4_C7/ / HDMI_CEC | GPIO or HDMI CEC function |  |
| 49 | HDMI_HPD | HDMI hot-plug detect pin |  |
| 50 | VCC_CHAREG_EN | PMIC enable |  |


## Core Board Pin Definition 2

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 51 | VCC3V3_SYS | Main 3.3V power input | 3.3V input, supply not less than 4.3A |
| 52 | VCC3V3_SYS | Main 3.3V power input | 3.3V input, supply not less than 4.3A |
| 53 | GND | Ground |  |
| 54 | MIPI_TX1/RX1_D0N | DSI / CSI interface |  |
| 55 | MIPI_TX1/RX1_D0P | DSI / CSI interface |  |
| 56 | MIPI_TX1/RX1_D1N | DSI / CSI interface |  |
| 57 | MIPI_TX1/RX1_D1P | DSI / CSI interface |  |
| 58 | MIPI_TX1/RX1_CLKN | DSI / CSI interface |  |
| 59 | MIPI_TX1/RX1_CLKP | DSI / CSI interface |  |
| 60 | MIPI_TX1/RX1_D2N | DSI / CSI interface |  |
| 61 | MIPI_TX1/RX1_D2P | DSI / CSI interface |  |
| 62 | MIPI_TX1/RX1_D3N | DSI / CSI interface |  |
| 63 | MIPI_TX1/RX1_D3P | DSI / CSI interface |  |
| 64 | MIPI_RX0_D3N | CSI interface |  |
| 65 | MIPI_RX0_D3P | CSI interface |  |
| 66 | MIPI_RX0_D2N | CSI interface |  |
| 67 | MIPI_RX0_D2P | CSI interface |  |
| 68 | MIPI_RX0_CLKN | CSI interface |  |
| 69 | MIPI_RX0_CLKP | CSI interface |  |
| 70 | MIPI_RX0_D1N | CSI interface |  |
| 71 | MIPI_RX0_D1P | CSI interface |  |
| 72 | MIPI_RX0_D0N | CSI interface |  |
| 73 | MIPI_RX0_D0P | CSI interface |  |
| 74 | MIPI_TX0_D3N | DSI interface |  |
| 75 | MIPI_TX0_D3P | DSI interface |  |
| 76 | MIPI_TX0_D2N | DSI interface |  |
| 77 | MIPI_TX0_D2P | DSI interface |  |
| 78 | MIPI_TX0_CLKN | DSI interface |  |
| 79 | MIPI_TX0_CLKP | DSI interface |  |
| 80 | MIPI_TX0_D1N | DSI interface |  |
| 81 | MIPI_TX0_D1P | DSI interface |  |
| 82 | MIPI_TX0_D0N | DSI interface |  |
| 83 | MIPI_TX0_D0P | DSI interface |  |
| 84 | GND | Ground |  |
| 85 | HDMI_TXCN | HDMI output connector |  |
| 86 | HDMI_TXCP | HDMI output connector |  |
| 87 | HDMI_TX0N | HDMI output connector |  |
| 88 | HDMI_TX0P | HDMI output connector |  |
| 89 | HDMI_TX1N | HDMI output connector |  |
| 90 | HDMI_TX1P | HDMI output connector |  |
| 91 | HDMI_TX2N | HDMI output connector |  |
| 92 | HDMI_TX2P | HDMI output connector |  |
| 93 | Type-C0_SBU1_DC | Type-C interface |  |
| 94 | Type-C0_SBU2_DC | Type-C interface |  |
| 95 | Type-C0_SBU2 | Type-C interface |  |
| 96 | Type-C0_SBU1 | Type-C interface |  |
| 97 | Type-C0_RX1N | Type-C interface |  |
| 98 | Type-C0_RX1P | Type-C interface |  |
| 99 | Type-C0_TX1P | Type-C interface |  |
| 100 | Type-C0_TX1N | Type-C interface |  |


## Core Board Pin Definition 3

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 101 | Type-C0_RX2N | Type-C interface |  |
| 102 | Type-C0_RX2P | Type-C interface |  |
| 103 | Type-C0_TX2P | Type-C interface |  |
| 104 | Type-C0_TX2N | Type-C interface |  |
| 105 | Type-C0_DM | Type-C interface |  |
| 106 | Type-C0_DP | Type-C interface |  |
| 107 | USB3_SSTXP | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 108 | USB3_SSTXN | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 109 | USB3_SSRXP | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 110 | USB3_SSRXN | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 111 | Type-C0_U2VBUSDET | Type-C interface |  |
| 112 | ADC_IN1 | ADC1 input pin | Reference level 1.8V |
| 113 | ADC_IN0 | ADC0 input pin | Reference level 1.8V |
| 114 | USB3_DM | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 115 | USB3_DP | USB 3.0 interface | Shared by Type-C and USB 3.0 |
| 116 | HOST0_DM | USB 2.0 interface |  |
| 117 | HOST0_DP | USB 2.0 interface |  |
| 118 | HOST1_DM | USB 2.0 interface |  |
| 119 | HOST1_DP | USB 2.0 interface |  |
| 120 | VCC1V8_S3 | 1.8V power output | Voltage is 0 during suspend |
| 121 | POWER_KEY | PMU enable pin | Active low |
| 122 | GPIO2_D2 | GPIO |  |
| 123 | GPIO0_A4 | GPIO |  |
| 124 | GPIO0_B2 | GPIO |  |
| 125 | GPIO0_B1 | GPIO |  |
| 126 | GPIO0_A3 | GPIO |  |
| 127 | GPIO4_B4/ / SDMMC0_CLK | GPIO or SDIO interface |  |
| 128 | GPIO4_B3/ / SDMMC0_D3 | GPIO or SDIO interface |  |
| 129 | GPIO4_B2/ / SDMMC0_D2 | GPIO or SDIO interface |  |
| 130 | GPIO4_B1/ / SDMMC0_D1 | GPIO or SDIO interface |  |
| 131 | GPIO4_B0/ / SDMMC0_D0 | GPIO or SDIO interface |  |
| 132 | GPIO4_B5/ / SDMMC0_CMD | GPIO or SDIO interface |  |
| 133 | GPIO0_A7/ / SDMMC0_DET | GPIO or SDIO interface |  |
| 134 | GPIO0_A1 | GPIO |  |
| 135 | EDP_TX3P | EDP connector |  |
| 136 | EDP_TX3N | EDP connector |  |
| 137 | EDP_TX2P | EDP connector |  |
| 138 | EDP_TX2N | EDP connector |  |
| 139 | EDP_TX1P | EDP connector |  |
| 140 | EDP_TX1N | EDP connector |  |
| 141 | EDP_TX0P | EDP connector |  |
| 142 | EDP_TX0N | EDP connector |  |
| 143 | EDPAUXP | EDP connector |  |
| 144 | EDPAUXN | EDP connector |  |
| 145 | GPIO4_D0 | GPIO |  |
| 146 | GPIO0_B3 | GPIO |  |
| 147 | GPIO0_B0 | GPIO |  |
| 148 | GPIO1_A1 | GPIO |  |
| 149 | GPIO1_A0 | GPIO |  |
| 150 | GPIO1_B4/ / I2C4_SCL | GPIO or I2C interface |  |


## Core Board Pin Definition 4

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 151 | GPIO1_B3/ / I2C4_SDA | GPIO or I2C interface |  |
| 152 | GPIO0_A2/ / RK3399_26M_OUT | GPIO or 26MHz clock output |  |
| 153 | GPIO0_B4 | GPIO |  |
| 154 | GPIO0_B5 | GPIO |  |
| 155 | GPIO0_A6/ / PWM3A | GPIO or PWM interface | Default is infrared receiving port |
| 156 | GPIO1_C7 | GPIO |  |
| 157 | GPIO1_A4 | GPIO |  |
| 158 | GPIO1_A3 | GPIO |  |
| 159 | GPIO1_B5 | GPIO |  |
| 160 | GPIO1_A2 | GPIO |  |
| 161 | GPIO1_B0/ / SPI1_TXD | GPIO or SPI interface |  |
| 162 | GPIO1_B2/ / SPI1_CSn0 | GPIO or SPI interface |  |
| 163 | GPIO1_B1/ / SPI1_CLK | GPIO or SPI interface |  |
| 164 | GPIO1_A7/ / SPI1_RXD | GPIO or SPI interface |  |
| 165 | GPIO1_C2/ / SPI3_CSn0 | GPIO or SPI interface |  |
| 166 | GPIO1_C4/ / I2C8_SDA | GPIO or I2C interface |  |
| 167 | GPIO1_D0 | GPIO |  |
| 168 | GPIO1_C6 | GPIO |  |
| 169 | GPIO2_B3/ / SPI2_CLK/ / CIF_CLKO | GPIO, SPI, or parallel Camera interface |  |
| 170 | GPIO2_B0/ / I2C7_SCL/ / CIF_VSYNC | GPIO, I2C, or parallel Camera interface |  |
| 171 | GPIO2_A7/ / I2C7_SDA/ / CIF_D7 | GPIO, I2C, or parallel Camera interface |  |
| 172 | GPIO2_A6/ / CIF_D6 | GPIO or parallel Camera interface |  |
| 173 | GPIO2_A5/ / CIF_D5 | GPIO or parallel Camera interface |  |
| 174 | GPIO2_A4/ / CIF_D4 | GPIO or parallel Camera interface |  |
| 175 | GPIO2_A3/ / CIF_D3 | GPIO or parallel Camera interface |  |
| 176 | GPIO2_A2/ / CIF_D2 | GPIO or parallel Camera interface |  |
| 177 | GPIO2_A1/ / I2C2_SCL/ / CIF_D1 | GPIO, I2C, or parallel Camera interface |  |
| 178 | GPIO2_A0/ / I2C2_SDA/ / CIF_D0 | GPIO, I2C, or parallel Camera interface |  |
| 179 | GPIO2_B4/ / SPI2_CSn0 | GPIO or SPI interface |  |
| 180 | GPIO2_B1/ / I2C6_SDA/ / CIF_HREF | GPIO, I2C, or parallel Camera interface |  |
| 181 | GPIO2_B2/ / I2C6_SCL/ / CIF_CLKI | GPIO, I2C, or parallel Camera interface |  |
| 182 | GND | Ground |  |
| 183 | GPIO3_B6/ / MAC_RXCLK/ / UART3_RX | GPIO, Gigabit Ethernet, or UART |  |
| 184 | GPIO3_B3/ / MAC_MCLK/ / I2C5_SCL | GPIO, Gigabit Ethernet, or I2C |  |
| 185 | GPIO3_B0/ / MAC_MDC/ / SPI0_CSn1 | GPIO, Gigabit Ethernet, or SPI |  |
| 186 | GPIO3_A3/ / MAC_RXD3/ / SPI4_CSn0 | GPIO, Gigabit Ethernet, or SPI |  |
| 187 | GPIO3_A2/ / MAC_RXD2/ / SPI4_CLK | GPIO, Gigabit Ethernet, or SPI |  |
| 188 | GPIO3_A7/ / MAC_RXD1/ / SPI0_CSn0 | GPIO, Gigabit Ethernet, or SPI |  |
| 189 | GPIO3_A6/ / MAC_RXD0/ / SPI0_CLK | GPIO, Gigabit Ethernet, or SPI |  |
| 190 | GPIO3_C0/ / MAC_COL/ / UART3_CTSn/ / SPDIF_TX | GPIO, Gigabit Ethernet, UART, or optical output |  |
| 191 | GPIO3_C1/ / MAC_TXCLK/ / UART3_RTSn | GPIO, Gigabit Ethernet, or UART |  |
| 192 | GPIO3_B2/ / MAC_RXER/ / I2C5_SDA | GPIO, Gigabit Ethernet, or I2C |  |
| 193 | GPIO3_B7/ / MAC_CRS/ / UART3_TX | GPIO, Gigabit Ethernet, or UART |  |
| 194 | GPIO3_A4/ / MAC_TXD0 / SPI0_TXD | GPIO, Gigabit Ethernet, or SPI |  |
| 195 | GPIO3_A5/ / MAC_TXD1/ / SPI0_TXD | GPIO, Gigabit Ethernet, or SPI |  |
| 196 | GPIO3_A0/ / MAC_TXD2/ / SPI4_RXD | GPIO, Gigabit Ethernet, or SPI |  |
| 197 | GPIO3_A1/ / MAC_TXD3/ / SPI4_TXD | GPIO, Gigabit Ethernet, or SPI |  |
| 198 | GPIO3_B4/ / MAC_TXEN/ / UART1_RX | GPIO, Gigabit Ethernet, or UART |  |
| 199 | GPIO3_B5/ / MAC_MDIO/ / UART1_TX | GPIO, Gigabit Ethernet, or UART |  |
| 200 | GPIO3_B1/ / MAC_RXDV | GPIO or Gigabit Ethernet |  |

