---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the X3399CV5 core board
---

# Pin Definition

This section lists the pin definition of the X3399CV5 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | GPIO4_A3/<br />I2S1_SCLK | GPIO或I2S串行时钟 |  |
| 2 | GPIO4_A7/<br />I2S1_SDO0 | GPIO或I2S数据输出 |  |
| 3 | GPIO4_A6/<br />I2S1_SDI0 | GPIO或I2S数据输入 |  |
| 4 | GPIO4_A5/<br />I2S1_LRCK_TX | GPIO或I2S帧时钟 |  |
| 5 | GPIO4_A4/<br />I2S1_LRCK_RX | GPIO或I2S帧时钟 |  |
| 6 | GPIO4_A1/<br />I2C1_SDA | GPIO或I2C1数据 |  |
| 7 | GPIO4_A2/<br />I2C1_SCL | GPIO或I2C1时钟 |  |
| 8 | GPIO4_A0/<br />I2S_CLK | GPIO或I2S主时钟 |  |
| 9 | GPIO3_D0/<br />I2S0_SCLK | GPIO或I2S串行时钟 |  |
| 10 | GPIO3_D1/<br />I2S0_LRCK_RX | GPIO或I2S帧时钟 |  |
| 11 | GPIO3_D2/<br />I2S0_LRCK_TX | GPIO或I2S帧时钟 |  |
| 12 | GPIO3_D3/<br />I2S0_SDI0 | GPIO或I2S数据输入 |  |
| 13 | GPIO3_D4/<br />I2S0_SDI1 | GPIO或I2S数据输入 |  |
| 14 | GPIO3_D7/<br />I2S0_SDO0 | GPIO或I2S数据输出 |  |
| 15 | GPIO3_D6/<br />I2S0_SDO1 | GPIO或I2S数据输出 |  |
| 16 | GPIO3_D5/<br />I2S0_SDO2 | GPIO或I2S数据输出 |  |
| 17 | GPIO4_D4 | GPIO |  |
| 18 | ADC_IN2 | ADC输入 |  |
| 19 | GPIO2_C4/<br />SDIO0_D0/ | GPIO或SDIO Interface或<br />SPI Interface |  |
| 20 | GPIO2_C5/<br />SDIO0_D1/<br />SPI5_TXD | GPIO或SDIO Interface或<br />SPI Interface |  |
| 21 | GPIO2_C6/<br />SDIO0_D2/<br />SPI5_CLK | GPIO或SDIO Interface或<br />SPI Interface |  |
| 22 | GPIO2_C7/<br />SDIO0_D3/<br />SPI5_CSn0 | GPIO或SDIO Interface或<br />SPI Interface |  |
| 23 | GPIO2_D0/<br />SDIO0_CMD | GPIO或SDIO Interface |  |
| 24 | GPIO2_D1/<br />SDIO0_CLK | GPIO或SDIO Interface |  |
| 25 | GPIO2_C3/<br />UART0_RTS | GPIO或串口0 |  |
| 26 | GPIO2_C1/<br />UART0_TXD | GPIO或串口0 |  |
| 27 | GPIO2_C2/<br />UART0_CTS | GPIO或串口0 |  |
| 28 | GPIO2_C0/<br />UART0_RXD | GPIO或串口0 |  |
| 29 | PMU_RESET | reset pin |  |
| 30 | GPIO4_D6 | GPIO |  |
| 31 | GPIO4_D1 | GPIO |  |
| 32 | GPIO4_D3 | GPIO |  |
| 33 | GPIO4_C6/<br />PWM1_d | GPIO或PWM1 |  |
| 34 | PMIC_EXT_EN | PMU enable pin |  |
| 35 | RTC_CLKO_WIFI | 32768Hzclock output |  |
| 36 | Camera_RST_L | GPIO2_D3 |  |
| 37 | VCC_RTC | RTCpower input | power input2.5到3V |
| 38 | GPIO4_C2/<br />PWM0 | GPIO或PWM0 |  |
| 39 | GPIO2_D4 | GPIO |  |
| 40 | GPIO4_D2 | GPIO |  |
| 41 | GPIO4_D5 | GPIO |  |
| 42 | VCC3V3_S5 | 副3.3Vpower input | 3.3V输入, 电流不less than<br />300mA |
| 43 | GPIO4_C5/<br />SPDIF_TX | GPIO或光纤输出 |  |
| 44 | GPIO4_C3/ | GPIO或UART2 |  |
| 45 | GPIO4_C4/<br />UART2DBG_TX | GPIO或UART2 |  |
| 46 | GPIO4_C0/<br />I2C3_SDA/<br />UART2_RX | GPIO或 I2C3数据或<br />串口2 |  |
| 47 | GPIO4_C1/<br />I2C3_SCL/<br />UART2_TX | GPIO或 I2C3时钟或<br />串口2 |  |
| 48 | GPIO4_C7/<br />HDMI_CEC | GPIO 或 HDMI CEC<br />功能 |  |
| 49 | HDMI_HPD | HDMI 热插拨检测管<br />脚 |  |
| 50 | VCC_CHAREG_EN | PMIC使能 |  |

## Core Board Pin Definition2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 51 | VCC3V3_SYS | 主3.3Vpower input | 3.3V输入, 电源不less than<br />4.3A |
| 52 | VCC3V3_SYS | 主3.3Vpower input | 3.3V输入, 电源不less than<br />4.3A |
| 53 | GND | Ground |  |
| 54 | MIPI_TX1/RX1_D0N | DSI/CSI接口 |  |
| 55 | MIPI_TX1/RX1_D0P | DSI/CSI接口 |  |
| 56 | MIPI_TX1/RX1_D1N | DSI/CSI接口 |  |
| 57 | MIPI_TX1/RX1_D1P | DSI/CSI接口 |  |
| 58 | MIPI_TX1/RX1_CLK<br />N | DSI/CSI接口 |  |
| 59 | MIPI_TX1/RX1_CLK<br />P | DSI/CSI接口 |  |
| 60 | MIPI_TX1/RX1_D2N | DSI/CSI接口 |  |
| 61 | MIPI_TX1/RX1_D2P | DSI/CSI接口 |  |
| 62 | MIPI_TX1/RX1_D3N | DSI/CSI接口 |  |
| 63 | MIPI_TX1/RX1_D3P | DSI/CSI接口 |  |
| 64 | MIPI_RX0_D3N | CSI接口 |  |
| 65 | MIPI_RX0_D3P | CSI接口 |  |
| 66 | MIPI_RX0_D2N | CSI接口 |  |
| 67 | MIPI_RX0_D2P | CSI接口 |  |
| 68 | MIPI_RX0_CLKN | CSI接口 |  |
| 69 | MIPI_RX0_CLKP | CSI接口 |  |
| 70 | MIPI_RX0_D1N | CSI接口 |  |
| 71 | MIPI_RX0_D1P | CSI接口 |  |
| 72 | MIPI_RX0_D0N | CSI接口 |  |
| 73 | MIPI_RX0_D0P | CSI接口 |  |
| 74 | MIPI_TX0_D3N | DSI接口 |  |
| 75 | MIPI_TX0_D3P | DSI接口 |  |
| 76 | MIPI_TX0_D2N | DSI接口 |  |
| 77 | MIPI_TX0_D2P | DSI接口 |  |
| 78 | MIPI_TX0_CLKN | DSI接口 |  |
| 79 | MIPI_TX0_CLKP | DSI接口 |  |
| 80 | MIPI_TX0_D1N | DSI接口 |  |
| 81 | MIPI_TX0_D1P | DSI接口 |  |
| 82 | MIPI_TX0_D0N | DSI接口 |  |
| 83 | MIPI_TX0_D0P | DSI接口 |  |
| 84 | GND | Ground |  |
| 85 | HDMI_TXCN | HDMI output interface |  |
| 86 | HDMI_TXCP | HDMI output interface |  |
| 87 | HDMI_TX0N | HDMI output interface |  |
| 88 | HDMI_TX0P | HDMI output interface |  |
| 89 | HDMI_TX1N | HDMI output interface |  |
| 90 | HDMI_TX1P | HDMI output interface |  |
| 91 | HDMI_TX2N | HDMI output interface |  |
| 92 | HDMI_TX2P | HDMI output interface |  |
| 93 | TYPEC0_SBU1_DC | TYPEC接口 |  |
| 94 | TYPEC0_SBU2_DC | TYPEC接口 |  |
| 95 | TYPEC0_SBU2 | TYPEC接口 |  |
| 96 | TYPEC0_SBU1 | TYPEC接口 |  |
| 97 | TYPEC0_RX1N | TYPEC接口 |  |
| 98 | TYPEC0_RX1P | TYPEC接口 |  |
| 99 | TYPEC0_TX1P | TYPEC接口 |  |
| 100 | TYPEC0_TX1N | TYPEC接口 |  |

## Core Board Pin Definition3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 101 | TYPEC0_RX2N | TYPEC接口 |  |
| 102 | TYPEC0_RX2P | TYPEC接口 |  |
| 103 | TYPEC0_TX2P | TYPEC接口 |  |
| 104 | TYPEC0_TX2N | TYPEC接口 |  |
| 105 | TYPEC0_DM | TYPEC接口 |  |
| 106 | TYPEC0_DP | TYPEC接口 |  |
| 107 | USB3_SSTXP | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 108 | USB3_SSTXN | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 109 | USB3_SSRXP | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 110 | USB3_SSRXN | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 111 | TYPEC0_U2VBUSD<br />ET | TYPEC接口 |  |
| 112 | ADC_IN1 | ADC1输入管脚 | 参考电平为1.8V |
| 113 | ADC_IN0 | ADC0输入管脚 | 参考电平为1.8V |
| 114 | USB3_DM | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 115 | USB3_DP | USB3.0接口 | TYPEC, USB3.0multiplexed脚 |
| 116 | HOST0_DM | USB2.0接口 |  |
| 117 | HOST0_DP | USB2.0接口 |  |
| 118 | HOST1_DM | USB2.0接口 |  |
| 119 | HOST1_DP | USB2.0接口 |  |
| 120 | VCC1V8_S3 | 1.8Vpower output | 休眠时电压为0 |
| 121 | POWER_KEY | PMU enable pin | active low enable |
| 122 | GPIO2_D2 | GPIO |  |
| 123 | GPIO0_A4 | GPIO |  |
| 124 | GPIO0_B2 | GPIO |  |
| 125 | GPIO0_B1 | GPIO |  |
| 126 | GPIO0_A3 | GPIO |  |
| 127 | GPIO4_B4/<br />SDMMC0_CLK | GPIO或SDIO Interface |  |
| 128 | GPIO4_B3/<br />SDMMC0_D3 | GPIO或SDIO Interface |  |
| 129 | GPIO4_B2/<br />SDMMC0_D2 | GPIO或SDIO Interface |  |
| 130 | GPIO4_B1/<br />SDMMC0_D1 | GPIO或SDIO Interface |  |
| 131 | GPIO4_B0/<br />SDMMC0_D0 | GPIO或SDIO Interface |  |
| 132 | GPIO4_B5/<br />SDMMC0_CMD | GPIO或SDIO Interface |  |
| 133 | GPIO0_A7/<br />SDMMC0_DET | GPIO或SDIO Interface |  |
| 134 | GPIO0_A1 | GPIO |  |
| 135 | EDP_TX3P | EDP接口 |  |
| 136 | EDP_TX3N | EDP接口 |  |
| 137 | EDP_TX2P | EDP接口 |  |
| 138 | EDP_TX2N | EDP接口 |  |
| 139 | EDP_TX1P | EDP接口 |  |
| 140 | EDP_TX1N | EDP接口 |  |
| 141 | EDP_TX0P | EDP接口 |  |
| 142 | EDP_TX0N | EDP接口 |  |
| 143 | EDPAUXP | EDP接口 |  |
| 144 | EDPAUXN | EDP接口 |  |
| 145 | GPIO4_D0 | GPIO |  |
| 146 | GPIO0_B3 | GPIO |  |
| 147 | GPIO0_B0 | GPIO |  |
| 148 | GPIO1_A1 | GPIO |  |
| 149 | GPIO1_A0 | GPIO |  |
| 150 | GPIO1_B4/<br />I2C4_SCL | GPIO或I2C Interface |  |

## Core Board Pin Definition4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 151 | GPIO1_B3/<br />I2C4_SDA | GPIO或I2C Interface |  |
| 152 | GPIO0_A2/<br />RK3399_26M_OUT | GPIO 口或 26M 时钟<br />输出管脚 |  |
| 153 | GPIO0_B4 | GPIO |  |
| 154 | GPIO0_B5 | GPIO |  |
| 155 | GPIO0_A6/<br />PWM3A | GPIO或PWM Interface | default为红外接收口 |
| 156 | GPIO1_C7 | GPIO |  |
| 157 | GPIO1_A4 | GPIO |  |
| 158 | GPIO1_A3 | GPIO |  |
| 159 | GPIO1_B5 | GPIO |  |
| 160 | GPIO1_A2 | GPIO |  |
| 161 | GPIO1_B0/<br />SPI1_TXD | GPIO或SPI Interface |  |
| 162 | GPIO1_B2/<br />SPI1_CSn0 | GPIO或SPI Interface |  |
| 163 | GPIO1_B1/<br />SPI1_CLK | GPIO或SPI Interface |  |
| 164 | GPIO1_A7/<br />SPI1_RXD | GPIO或SPI Interface |  |
| 165 | GPIO1_C2/<br />SPI3_CSn0 | GPIO或SPI Interface |  |
| 166 | GPIO1_C4/<br />I2C8_SDA | GPIO或I2C Interface |  |
| 167 | GPIO1_D0 | GPIO |  |
| 168 | GPIO1_C6 | GPIO |  |
| 169 | GPIO2_B3/<br />SPI2_CLK/ | GPIO 或 SPI 接口或<br />并口Camera Interface |  |
| 170 | GPIO2_B0/<br />I2C7_SCL/<br />CIF_VSYNC | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 171 | GPIO2_A7/<br />I2C7_SDA/<br />CIF_D7 | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 172 | GPIO2_A6/<br />CIF_D6 | GPIO 或并口camera<br />接口 |  |
| 173 | GPIO2_A5/<br />CIF_D5 | GPIO 或并口camera<br />接口 |  |
| 174 | GPIO2_A4/<br />CIF_D4 | GPIO 或并口camera<br />接口 |  |
| 175 | GPIO2_A3/<br />CIF_D3 | GPIO 或并口camera<br />接口 |  |
| 176 | GPIO2_A2/<br />CIF_D2 | GPIO 或并口camera<br />接口 |  |
| 177 | GPIO2_A1/<br />I2C2_SCL/<br />CIF_D1 | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 178 | GPIO2_A0/<br />I2C2_SDA/<br />CIF_D0 | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 179 | GPIO2_B4/<br />SPI2_CSn0 | GPIO或SPI Interface |  |
| 180 | GPIO2_B1/<br />I2C6_SDA/<br />CIF_HREF | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 181 | GPIO2_B2/<br />I2C6_SCL/<br />CIF_CLKI | GPIO 或 I2C 接口或<br />并口Camera Interface |  |
| 182 | GND | Ground |  |
| 183 | GPIO3_B6/<br />MAC_RXCLK/<br />UART3_RX | GPIO 或Gigabit Ethernet<br />接口或串口 |  |
| 184 | GPIO3_B3/<br />MAC_MCLK/<br />I2C5_SCL | GPIO 或Gigabit Ethernet<br />接口或I2C Interface |  |
| 185 | GPIO3_B0/<br />MAC_MDC/<br />SPI0_CSn1 | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 186 | GPIO3_A3/ | GPIO 或Gigabit Ethernet |  |
| 187 | GPIO3_A2/<br />MAC_RXD2/<br />SPI4_CLK | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 188 | GPIO3_A7/<br />MAC_RXD1/<br />SPI0_CSn0 | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 189 | GPIO3_A6/<br />MAC_RXD0/<br />SPI0_CLK | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 190 | GPIO3_C0/<br />MAC_COL/<br />UART3_CTSn/<br />SPDIF_TX | GPIO 或Gigabit Ethernet<br />接口或串口或光纤接<br />口 |  |
| 191 | GPIO3_C1/<br />MAC_TXCLK/<br />UART3_RTSn | GPIO 或Gigabit Ethernet<br />接口或串口 |  |
| 192 | GPIO3_B2/<br />MAC_RXER/<br />I2C5_SDA | GPIO 或Gigabit Ethernet<br />接口或I2C Interface |  |
| 193 | GPIO3_B7/<br />MAC_CRS/<br />UART3_TX | GPIO 或Gigabit Ethernet<br />接口或串口 |  |
| 194 | GPIO3_A4/<br />MAC_TXD0<br />SPI0_TXD | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 195 | GPIO3_A5/<br />MAC_TXD1/<br />SPI0_TXD | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 196 | GPIO3_A0/<br />MAC_TXD2/<br />SPI4_RXD | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 197 | GPIO3_A1/<br />MAC_TXD3/<br />SPI4_TXD | GPIO 或Gigabit Ethernet<br />接口或SPI Interface |  |
| 198 | GPIO3_B4/<br />MAC_TXEN/<br />UART1_RX | GPIO 或Gigabit Ethernet<br />接口或串口 |  |
| 199 | GPIO3_B5/<br />MAC_MDIO/<br />UART1_TX | GPIO 或Gigabit Ethernet<br />接口或串口 |  |
| 200 | GPIO3_B1/ | GPIO 或Gigabit Ethernet |  |
