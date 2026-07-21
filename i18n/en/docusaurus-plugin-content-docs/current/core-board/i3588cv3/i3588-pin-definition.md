---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the I3588 core board
---

# Pin Definition

This section lists the pin definition of the I3588 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | UART2_TX_M0/<br />I2S1_MCLK_M1/<br />I2C1_SCL_M0/<br />GPIO0_B5_d | GPIO multiplexed pin, 3.3V<br /> level | default debugging serial port |
| 2 | UART2_RX_M0/<br />I2S1_SCLK_M1/<br />I2C1_SDA_M0/<br />GPIO0_B6_d | GPIO multiplexed pin, 3.3V<br /> level | default debugging serial port |
| 3 | SDMMC_DET_L/<br />GPIO0_A4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 4 | CAN0_TX_M0/<br />I2S1_LRCK_M1/<br />SPI0_CS1_M0/<br />I2C2_SCL_M0/<br />PWM0_M0/<br />GPIO0_B7_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 5 | CAN0_RX_M0/<br />PDM0_CLK0_M1/<br />SPI0_MOSI_M0/<br />I2C2_SDA_M0/<br />PWM1_M0/<br />GPIO0_C0_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 6 | HDMIIRX_HPDOUT<br />_H/<br />GPIO3_D4_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 7 | HDMITX1_HPDIN_<br />M0/<br />GPIO1_A6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 8 | UART1_RTSN_M2/<br />PDM0_SDI0_M1/<br />I2S1_SDI2_M1/<br />SPI0_MISO_M0/<br />I2C6_SDA_M0/<br />PWM6_M0<br />GPIO0_C7_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 9 | UART1_CTSN_M2/<br />PDM0_SDI1_M1/ | GPIO multiplexed pin, 3.3V<br /> level |  |
| 10 | GND | Ground |  |
| 11 | VCC_3V3_S3 | 3.3Vpower output | 3.3V 2Apower output, can be powered by <br /> on the base board |
| 12 | VCC_3V3_S3 | 3.3Vpower output | 3.3V 2Apower output, can be powered by <br /> on the base board |
| 13 | VCC_1V8_S3 | 1.8Vpower output | 1.8V 2Apower output, can be powered by <br /> on the base board |
| 14 | VCC_1V8_S3 | 1.8Vpower output | 1.8V 2Apower output, can be powered by <br /> on the base board |
| 15 | VCC4V0_SYS | 4Vmain power input | 4V input, current is determined by CPU<br /> workload, it is recommended not to <br /> less than 5A |
| 16 | VCC4V0_SYS | 4Vmain power input | 4V input, current is determined by CPU<br /> workload, it is recommended not to <br /> less than 5A |
| 17 | GND | Ground |  |
| 18 | GND | Ground |  |
| 19 | LCD_RST_H/<br />GPIO4_B0_d | GPIO, 3.3V level |  |
| 20 | TYPEC0_USB20_OT<br />G_ID | TypeC0 dedicated OTG detection pin <br /> | Cannot be used as GPIO port |
| 21 | TYPEC0_USB20_VB<br />USDET | TypeC0 dedicated VBUS<br /> detection pin | Cannot be used as GPIO port |
| 22 | PWRON_L | PMU enable pin | active low enable |
| 23 | SDMMC0_CLK/<br />GPIO4_D5_d | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 24 | SDMMC0_CMD/<br />GPIO4_D4_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 25 | SDMMC0_D3/<br />GPIO4_D3_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 26 | SDMMC0_D2/ | GPIO multiplexed pin, level |  |
| 27 | SDMMC0_D1/<br />GPIO4_D1_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 28 | SDMMC0_D0/<br />GPIO4_D0_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 29 | GND | Ground |  |
| 30 | HDMI_RX_D0N | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 31 | HDMI_RX_D0P | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 32 | HDMI_RX_CLKN | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 33 | HDMI_RX_CLKP | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 34 | HDMI_RX_D2N | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 35 | HDMI_RX_D2P | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 36 | GND | Ground |  |
| 37 | HDMI0_TX0N_POR<br />T/EDP0_TX_D0N | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 38 | HDMI0_TX0P_PORT<br />/EDP0_TX_D0P | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 39 | HDMI0_TX1N_POR<br />T/EDP0_TX_D1N | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 40 | HDMI0_TX1P_PORT<br />/EDP0_TX_D1P | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 41 | HDMI0_TX2P_PORT<br />/EDP0_TX_D2P | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 42 | HDMI0_TX2N_POR<br />T/EDP0_TX_D2N | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 43 | HDMI0_TX3P_PORT<br />/EDP0_TX_D3P | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 44 | HDMI0_TX3N_POR<br />T/EDP0_TX_D3N | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 45 | HDMI0_TX_SBDP/E<br />DP0_TX_AUXP | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 46 | HDMI0_TX_SBDN/E<br />DP0_TX_AUXN | HDMI0/EDP0 differential <br /> pair, controlled by program | Cannot be used as GPIO port |
| 47 | HDMI_RX_D1P | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 48 | HDMI_RX_D1N | HDMI RX2.0differential pair | Cannot be used as GPIO port |
| 49 | HDMI_RX_SDA_M1 | GPIO multiplexed pin, 3.3V |  |
| 50 | HDMI_RX_SCL_M1/<br />GPIO3_D2_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 51 | HDMI_RX_CEC/<br />GPIO3_D1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 52 | HDMITX1_SCL_M1/<br />GPIO3_C6_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 53 | HDMITX1_SDA_M1<br />/ GPIO3_C5_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 54 | I2C5_SDA_M0_MIPI<br />/ GPIO3_D0_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 55 | I2C5_SCL_M0_MIPI/<br />GPIO3_C7_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 56 | HDMITX0_SDA_M0<br />/GPIO4_C0_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 57 | HDMI1_TX_ON_H/<br />GPIO4_B2_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 58 | HDMI0_TX_ON_H/<br />GPIO4_B1_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 59 | HDMITX0_CEC_M0/<br />GPIO4_C1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 60 | HDMITX1_CEC_M2/<br />GPIO3_C4_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 61 | HDMITX0_SCL_M0/<br />GPIO4_B7_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 62 | PCIE30X4_PERSTN_<br />M1_L/GPIO4_B6_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 63 | PCIE30X4_PRSNT_L<br />/GPIO4_B3_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 64 | PCIE30X4_CLKREQ<br />N_M1_L/GPIO4_B4_<br />u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 65 | PCIE30X4_WAKEN_<br />M1_L/GPIO4_B5_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 66 | PCIEX1_0_WAKEN_<br />M1_L/GPIO4_A4_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 67 | PCIEX1_0_PERSTN_<br />M1_L/GPIO4_A5_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 68 | PCIEX1_0_CLKREQ<br />N_M1_L/GPIO4_A3_<br />d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 69 | PCIEX1_1_CLKREQ | GPIO multiplexed pin, 3.3V |  |
| 70 | PCIEX1_1_WAKEN_<br />M1_L/GPIO4_A1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 71 | PCIEX1_1_PERSTN_<br />M1_L/GPIO4_A2_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 72 | GSENSOR_INT_L/<br />GPIO4_C2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 73 | LCD_BL_EN_H/<br />GPIO2_C1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 74 | RESET_L | reset pin |  |
| 75 | I2C3_SCL_M0_MIPI/<br />GPIO1_C1_z | GPIO multiplexed pin, 1.8V<br /> level |  |
| 76 | I2C3_SDA_M0_MIPI<br />/GPIO1_C0_z | GPIO multiplexed pin, 1.8V<br /> level |  |
| 77 | I2C7_SDA_M0_COD<br />EC/GPIO1_D1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 78 | I2C7_SCL_M0_COD<br />EC//GPIO1_D0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 79 | WIFI_WAKE_HOST<br />_H/GPIO0_B2_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 80 | GND | Ground |  |

## Core Board Pin Definition2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 81 | PCIE30_PORT1_TX2<br />P | PCIE3.0differential pair | Not available as GPIO |
| 82 | PCIE30_PORT1_TX2<br />N | PCIE3.0differential pair | Not available as GPIO |
| 83 | PCIE30_PORT1_TX3<br />P | PCIE3.0differential pair | Not available as GPIO |
| 84 | PCIE30_PORT1_TX3<br />N | PCIE3.0differential pair | Not available as GPIO |
| 85 | PCIE30_PORT1_REF<br />CLKN_IN | PCIE3.0differential pair | Not available as GPIO |
| 86 | PCIE30_PORT1_REF<br />CLKP_IN | PCIE3.0differential pair | Not available as GPIO |
| 87 | GND | Ground |  |
| 88 | PCIE30_PORT0_TX1<br />N | PCIE3.0differential pair | Not available as GPIO |
| 89 | PCIE30_PORT0_TX1 | PCIE3.0differential pair | Not available as GPIO |
| 90 | PCIE30_PORT0_TX0<br />N | PCIE3.0differential pair | Not available as GPIO |
| 91 | PCIE30_PORT0_TX0<br />P | PCIE3.0differential pair | Not available as GPIO |
| 92 | PCIE30_PORT0_REF<br />CLKN_IN | PCIE3.0differential pair | Not available as GPIO |
| 93 | PCIE30_PORT0_REF<br />CLKP_IN | PCIE3.0differential pair | Not available as GPIO |
| 94 | GND | Ground |  |
| 95 | MIPI_CAM4_CLKO<br />UT/GPIO1_D7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 96 | MIPI_CAM3_CLKO<br />UT/GPIO1_D6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 97 | MIPI_CAM2_CLKO<br />UT/GPIO1_B7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 98 | MIPI_CAM1_CLKO<br />UT/GPIO1_B6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 99 | MIPI_CAM2_PDN_L<br />/GPIO1_A4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 100 | MIPI_CAM3_PDN_L<br />/GPIO1_A7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 101 | MIPI_CAM4_PWRE<br />N_H/ GPIO1_B1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 102 | MIPI_CAM3_PWRE<br />N_H/ GPIO1_B2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 103 | HDMITX0_HPDIN_<br />M0/GPIO1_A5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 104 | HDMIIRX_DET_L/<br />GPIO1_D5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 105 | UART7_TX_M2/<br />GPIO1_B5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 106 | UART7_RX_M2/<br />GPIO1_B4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 107 | SDIO_D3_M0_WIFI/<br />GPIO2_B1_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 108 | SDIO_CMD_M0_WI<br />FI/ GPIO2_B2_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 109 | SDIO_D0_M0_WIFI/<br />UART6_RX_M0/<br />GPIO2_A6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 110 | SDIO_D1_M0_WIFI/ | GPIO multiplexed pin, 1.8V |  |
| 111 | SDIO_CLK_M0_WIF<br />I/ GPIO2_B3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 112 | SDIO_D2_M0_WIFI/<br />GPIO2_B0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 113 | TYPEC5V_PWREN_<br />H/GPIO4_C6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 114 | DP1_HPDIN_M0/<br />GPIO3_D5_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 115 | UART9_CTSN_M0_<br />BT/ GPIO4_C5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 116 | PWM15_M2/<br />GPIO1_C6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 117 | UART9_RTSN_M0_<br />BT/ GPIO4_C4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 118 | HP_DET_L/<br />GPIO1_C4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 119 | 32KOUT_WIFI | Analog 32768Hz clock output <br /> | Cannot be used as GPIO port |
| 120 | VCC_RTC | RTCpower input | External 3V button battery input |
| 121 | GND | Ground |  |
| 122 | GND | Ground |  |
| 123 | GND | Ground |  |
| 124 | TP_RST_L/<br />GPIO3_C1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 125 | TP_INT_L/<br />GPIO3_C0_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 126 | HOST_WAKE_BT_H<br />/GPIO0_C5_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 127 | BT_WAKE_HOST_H<br />/GPIO0_A0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 128 | I2C4_SDA_M1_SEN<br />SOR/GPIO2_B4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 129 | I2C4_SCL_M1_SEN<br />SOR/ GPIO2_B5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 130 | PCIE_PWREN_H/<br />GPIO2_C5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 131 | CC_INT_L/<br />GPIO0_D3_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 132 | WIFI_REG_ON_H/<br />GPIO0_C4_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 133 | GPIO3_B2_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 134 | BT_REG_ON_H/<br />GPIO0_C6_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 135 | I2S0_SCLK_TX/<br />GPIO1_C3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 136 | I2S0_MCLK/<br />GPIO1_C2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 137 | I2S0_LRCK_TX/<br />GPIO1_C5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 138 | I2S0_SDO0/<br />GPIO1_C7_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 139 | I2S0_SDI0/<br />GPIO1_D4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 140 | MIPI_CAM4_PDN_L<br />/GPIO1_B0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 141 | MIPI_CAM1/2_RESE<br />T_L/GPIO1_A3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 142 | MIPI_CAM3/4_RESE<br />T_L/GPIO2_B6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 143 | MIPI_CAM1_PDN_L<br />/ GPIO1_A2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 144 | MIPI_CAM2_PWRE<br />N_H/GPIO1_D3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 145 | MIPI_CAM1_PWRE<br />N_H/ GPIO1_D2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 146 | UART9_TX_M0_BT/<br />GPIO2_C2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 147 | UART9_RX_M0_BT/<br />GPIO2_C4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 148 | GPIO1_B3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 149 | UART6_RX_M1/<br />GPIO1_A0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 150 | UART6_TX_M1/<br />GPIO1_A1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 151 | GND | Ground |  |
| 152 | PCIE30_PORT0_RX0<br />P | PCIE3.0differential pair | Cannot be used as GPIO port |
| 153 | PCIE30_PORT0_RX0<br />N | PCIE3.0differential pair | Cannot be used as GPIO port |
| 154 | PCIE30_PORT0_RX1 | PCIE3.0differential pair | Cannot be used as GPIO port |
| 155 | PCIE30_PORT0_RX1<br />N | PCIE3.0differential pair | Cannot be used as GPIO port |
| 156 | GND | Ground |  |
| 157 | PCIE30_PORT1_RX3<br />N | PCIE3.0differential pair | Cannot be used as GPIO port |
| 158 | PCIE30_PORT1_RX3<br />P | PCIE3.0differential pair | Cannot be used as GPIO port |
| 159 | PCIE30_PORT1_RX2<br />N | PCIE3.0differential pair | Cannot be used as GPIO port |
| 160 | PCIE30_PORT1_RX2<br />P | PCIE3.0differential pair | Cannot be used as GPIO port |

## Core Board Pin Definition3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 161 | MIPI_DPHY0_RX_C<br />LKN | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 162 | MIPI_DPHY0_RX_C<br />LKP | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 163 | MIPI_DPHY0_RX_D<br />2N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 164 | MIPI_DPHY0_RX_D<br />2P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 165 | MIPI_DPHY0_RX_D<br />3N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 166 | MIPI_DPHY0_RX_D<br />3P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 167 | GND | Ground |  |
| 168 | ETH1_REFCLKO_25<br />M/GPIO3_A6_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 169 | GMAC1_RXCLK/<br />GPIO3_A5_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 170 | GMAC1_RXDV_CR<br />S/ GPIO3_B1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 171 | GMAC1_RXD0/<br />GPIO3_A7_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 172 | GMAC1_RXD1/<br />GPIO3_B0_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 173 | GMAC1_RXD2/<br />GPIO3_A2_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 174 | GMAC1_RXD3/ | GPIO multiplexed pin, 3.3V |  |
| 175 | GMAC1_MCLKINO<br />UT/ GPIO3_B6_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 176 | GMAC1_TXCLK/<br />GPIO3_A4_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 177 | GMAC1_TXEN/<br />GPIO3_B5_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 178 | GMAC1_TXD0/<br />GPIO3_B3_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 179 | GMAC1_TXD1/<br />GPIO3_B4_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 180 | GMAC1_TXD2/<br />GPIO3_A0_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 181 | GMAC1_TXD3/<br />GPIO3_A1_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 182 | GMAC1_MDIO/<br />GPIO3_C3_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 183 | GMAC1_MDC/<br />GPIO3_C2_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 184 | GMAC1_RSTN_L/<br />GPIO3_B7_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 185 | GND | Ground |  |
| 186 | I2S2_LRCK_M0_BT/<br />GPIO2_C0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 187 | I2S2_SCLK_M0_BT/<br />GPIO2_B7_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 188 | I2S2_SDI_M0_BT/<br />GPIO2_C3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 189 | I2S2_SDO_M0_BT/<br />GPIO4_C3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 190 | GND | Ground |  |
| 191 | PCIE20_0_TXP | PCIE2.0differential pair | Cannot be used as GPIO port |
| 192 | PCIE20_0_TXN | PCIE2.0differential pair | Cannot be used as GPIO port |
| 193 | PCIE20_1_RXP/SAT<br />A30_1_RXP | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 194 | PCIE20_1_RXN/SAT<br />A30_1_RXN | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 195 | PCIE20_2_RXP/SAT<br />A30_2_RXP | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 196 | PCIE20_2_RXN/SAT<br />A30_2_RXN | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 197 | PCIE20_2_TXP/SAT | PCIE2.0/SATA3.0 poor | Cannot be used as GPIO port |
| 198 | PCIE20_2_TXN/SAT<br />A30_2_TXN | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 199 | PCIE20_2_REFCLKP | PCIE2.0differential pair | Cannot be used as GPIO port |
| 200 | PCIE20_2_REFCLK<br />N | PCIE2.0differential pair | Cannot be used as GPIO port |
| 201 | PCIE20_1_REFCLK<br />N | PCIE2.0differential pair | Cannot be used as GPIO port |
| 202 | PCIE20_1_REFCLKP | PCIE2.0differential pair | Cannot be used as GPIO port |
| 203 | PCIE20_1_TXN/SAT<br />A30_1_TXN | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 204 | PCIE20_1_TXP/SAT<br />A30_1_TXP | PCIE2.0/SATA3.0 difference <br /> pair | Cannot be used as GPIO port |
| 205 | SATA30_0_TXP | SATA3.0differential pair | Cannot be used as GPIO port |
| 206 | SATA30_0_TXN | SATA3.0differential pair | Cannot be used as GPIO port |
| 207 | SATA30_0_RXN | SATA3.0differential pair | Cannot be used as GPIO port |
| 208 | SATA30_0_RXP | SATA3.0differential pair | Cannot be used as GPIO port |
| 209 | GND | Ground |  |
| 210 | GND | Ground |  |
| 211 | MIPI_CSI1_RX_D0P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 212 | MIPI_CSI1_RX_D0N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 213 | MIPI_CSI1_RX_D1P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 214 | MIPI_CSI1_RX_D1N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 215 | MIPI_CSI1_RX_CLK<br />0P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 216 | MIPI_CSI1_RX_CLK<br />0N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 217 | MIPI_CSI1_RX_D2P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 218 | MIPI_CSI1_RX_D2N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 219 | MIPI_CSI1_RX_D3P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 220 | MIPI_CSI1_RX_D3N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 221 | MIPI_CSI1_RX_CLK<br />1P | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 222 | MIPI_CSI1_RX_CLK<br />1N | MIPI CSI1differential pair | Cannot be used as GPIO port |
| 223 | GND | Ground |  |
| 224 | MIPI_CSI0_RX_D0N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 225 | MIPI_CSI0_RX_D0P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 226 | MIPI_CSI0_RX_D1N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 227 | MIPI_CSI0_RX_D1P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 228 | MIPI_CSI0_RX_CLK<br />0N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 229 | MIPI_CSI0_RX_CLK<br />0P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 230 | MIPI_CSI0_RX_D2N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 231 | MIPI_CSI0_RX_D2P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 232 | MIPI_CSI0_RX_D3N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 233 | MIPI_CSI0_RX_D3P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 234 | MIPI_CSI0_RX_CLK<br />1N | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 235 | MIPI_CSI0_RX_CLK<br />1P | MIPI CSI0differential pair | Cannot be used as GPIO port |
| 236 | GND | Ground |  |
| 237 | MIPI_DPHY0_RX_D<br />1P | MIPI DPHY0differential pair | Cannot be used as GPIO port |
| 238 | MIPI_DPHY0_RX_D<br />1N | MIPI DPHY0differential pair | Cannot be used as GPIO port |
| 239 | MIPI_DPHY0_RX_D<br />0P | MIPI DPHY0differential pair | Cannot be used as GPIO port |
| 240 | MIPI_DPHY0_RX_D<br />0N | MIPI DPHY0differential pair | Cannot be used as GPIO port |

## Core Board Pin Definition4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 241 | USB20_HOST0_DP | HOST2.0differential pair | Cannot be used as GPIO port |
| 242 | USB20_HOST0_DM | HOST2.0differential pair | Cannot be used as GPIO port |
| 243 | USB20_HOST1_DP | HOST2.0differential pair | Cannot be used as GPIO port |
| 244 | USB20_HOST1_DM | HOST2.0differential pair | Cannot be used as GPIO port |
| 245 | TYPEC1_OTG_DP | TYPECdifferential pair | Cannot be used as GPIO port |
| 246 | TYPEC1_OTG_DM | TYPECdifferential pair | Cannot be used as GPIO port |
| 247 | DP1_AUXP | TYPECdifferential pair | Cannot be used as GPIO port |
| 248 | DP1_AUXN | TYPECdifferential pair | Cannot be used as GPIO port |
| 249 | DP1_TX2N | TYPECdifferential pair | Cannot be used as GPIO port |
| 250 | DP1_TX2P | TYPECdifferential pair | Cannot be used as GPIO port |
| 251 | DP1_TX3P | TYPECdifferential pair | Cannot be used as GPIO port |
| 252 | DP1_TX3N | TYPECdifferential pair | Cannot be used as GPIO port |
| 253 | GND | Ground |  |
| 254 | TYPEC0_OTG_DP | TYPECdifferential pair | Cannot be used as GPIO port |
| 255 | TYPEC0_OTG_DM | TYPECdifferential pair | Cannot be used as GPIO port |
| 256 | TYPEC0_SBU1 | TYPECdifferential pair | Cannot be used as GPIO port |
| 257 | TYPEC0_SBU2 | TYPECdifferential pair | Cannot be used as GPIO port |
| 258 | TYPEC0_SSRX2N | TYPECdifferential pair | Cannot be used as GPIO port |
| 259 | TYPEC0_SSRX2P | TYPECdifferential pair | Cannot be used as GPIO port |
| 260 | TYPEC0_SSTX2P | TYPECdifferential pair | Cannot be used as GPIO port |
| 261 | TYPEC0_SSTX2N | TYPECdifferential pair | Cannot be used as GPIO port |
| 262 | BOOT_SARADC_IN<br />0 | ADC0 channel, multiplexed on <br /> to force MASKROM mode <br /> program programming, low level <br /> is valid |  |
| 263 | SARADC_VIN1 | ADC1 channel, multiplexed in <br /> upgrade mode program programming, <br />active low |  |
| 264 | SARADC_VIN6 | ADC6 channel |  |
| 265 | SARADC_VIN4 | ADC4 channels |  |
| 266 | GND | Ground |  |
| 267 | MIPI_DPHY1_RX_D<br />0N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 268 | MIPI_DPHY1_RX_D<br />0P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 269 | MIPI_DPHY1_RX_D<br />1N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 270 | MIPI_DPHY1_RX_D<br />1P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 271 | MIPI_DPHY1_RX_C<br />LKN | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 272 | MIPI_DPHY1_RX_C<br />LKP | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 273 | MIPI_DPHY1_RX_D<br />2N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 274 | MIPI_DPHY1_RX_D<br />2P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 275 | MIPI_DPHY1_RX_D<br />3N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 276 | MIPI_DPHY1_RX_D<br />3P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 277 | MIPI_DPHY0_TX_D<br />3N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 278 | MIPI_DPHY0_TX_D<br />3P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 279 | MIPI_DPHY0_TX_D<br />2N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 280 | MIPI_DPHY0_TX_D<br />2P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 281 | MIPI_DPHY0_TX_C<br />LKP | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 282 | MIPI_DPHY0_TX_C<br />LKN | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 283 | MIPI_DPHY0_TX_D<br />1P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 284 | MIPI_DPHY0_TX_D<br />1N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 285 | MIPI_DPHY0_TX_D<br />0P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 286 | MIPI_DPHY0_TX_D<br />0N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 287 | GND | Ground |  |
| 288 | MIPI_DPHY1_TX_D<br />3P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 289 | MIPI_DPHY1_TX_D<br />3N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 290 | MIPI_DPHY1_TX_D<br />2P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 291 | MIPI_DPHY1_TX_D<br />2N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 292 | MIPI_DPHY1_TX_C<br />LKP | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 293 | MIPI_DPHY1_TX_C<br />LKN | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 294 | MIPI_DPHY1_TX_D<br />1P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 295 | MIPI_DPHY1_TX_D<br />1N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 296 | MIPI_DPHY1_TX_D<br />0P | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 297 | MIPI_DPHY1_TX_D<br />0N | MIPI DPHY1differential pair | Cannot be used as GPIO port |
| 298 | SARADC_VIN5 | ADC5 channel |  |
| 299 | SARADC_VIN3 | ADC3 channel |  |
| 300 | SARADC_VIN2 | ADC2 channel |  |
| 301 | TYPEC0_SBU2_DC | TYPECdifferential pair | Cannot be used as GPIO port |
| 302 | TYPEC0_SBU1_DC | TYPECdifferential pair | Cannot be used as GPIO port |
| 303 | TYPEC0_SSTX1N | TYPECdifferential pair | Cannot be used as GPIO port |
| 304 | TYPEC0_SSTX1P | TYPECdifferential pair | Cannot be used as GPIO port |
| 305 | TYPEC0_SSRX1P | TYPECdifferential pair | Cannot be used as GPIO port |
| 306 | TYPEC0_SSRX1N | TYPECdifferential pair | Cannot be used as GPIO port |
| 307 | TYPEC1_SSTX1N | TYPECdifferential pair | Cannot be used as GPIO port |
| 308 | TYPEC1_SSTX1P | TYPECdifferential pair | Cannot be used as GPIO port |
| 309 | TYPEC1_SSRX1P | TYPECdifferential pair | Cannot be used as GPIO port |
| 310 | TYPEC1_SSRX1N | TYPECdifferential pair | Cannot be used as GPIO port |
| 311 | HDMI1_TX2N_POR<br />T/EDP1_TX_D2N | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 312 | HDMI1_TX2P_PORT<br />/EDP1_TX_D2P | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 313 | HDMI1_TX1N_POR<br />T/EDP1_TX_D1N | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 314 | HDMI1_TX1P_PORT<br />/EDP1_TX_D1P | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 315 | HDMI1_TX0N_POR<br />T/EDP1_TX_D0N | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 316 | HDMI1_TX0P_PORT<br />/EDP1_TX_D0P | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 317 | HDMI1_TX3N_POR<br />T/EDP1_TX_D3N | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 318 | HDMI1_TX3P_PORT<br />/EDP1_TX_D3P | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 319 | HDMI1_TX_SBDN/<br />EDP1_TX_AUXN | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
| 320 | HDMI1_TX_SBDP/<br />EDP1_TX_AUXP | HDMI/EDP differential pair, <br /> configured through program | Do not use <br /> as a general-purpose GPIO |
