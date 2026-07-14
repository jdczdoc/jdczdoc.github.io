---
sidebar_position: 3
title: Pin Definition
description: X3568CV2 / X3568CV3 core-board 200PIN pin definition
---

# Pin Definition

This page keeps only the 200PIN core-board pin definition and does not repeat interface function descriptions. The table is from the “Expansion Interface Definition” section of the X3568V4 hardware manual.

## Core-board Pin Definition 1

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GPIO4_B2 | GPIO | I2C/EBC/GMAC/SPI/I2S multiplexed pin |
| 2 | GPIO4_A4 | GPIO | CIF/EBC/GMAC/UART/I2S multiplexed pin |
| 3 | GPIO4_A5 | GPIO | CIF/EBC/GMAC/UART/I2S multiplexed pin |
| 4 | GPIO3_D6 | GPIO | CIF/EBC/GMAC/UART/PDM multiplexed pin |
| 5 | GPIO3_D7 | GPIO | CIF/EBC/GMAC/UART/PDM multiplexed pin |
| 6 | GPIO4_A6 | GPIO | ISP/EBC/GMAC/SPI/I2S multiplexed pin |
| 7 | GPIO4_A0 | GPIO | CIF/EBC/GMAC/PDM multiplexed pin |
| 8 | PWM7_IR | IR PWM signal | SPI/PCIe multiplexed pin |
| 9 | TP_RST_L_GPIO0_B6 | DSI/EDP reset signal or GPIO | I2C/SPI/PCIe/PWM multiplexed pin |
| 10 | I2C1_SDA_TP | I2C1 signal | I2C/CAN/PCIe/JTAG multiplexed pin |
| 11 | TP_INT_L_GPIO0_B5 | DSI/EDP interrupt signal or GPIO | I2C/SPI/PCIe/PWM multiplexed pin |
| 12 | I2C1_SCL_TP | I2C1 signal | CAN/PCIe/JTAG multiplexed pin |
| 13 | PCIe30X2_PERSTn_M1 | PCIe interface | LCD/SPI/I2S multiplexed pin |
| 14 | PCIe30X2_CLKREQn_M1 | PCIe interface | LCD/SPI/I2S multiplexed pin |
| 15 | PCIe30X2_WAKEn_M1 | PCIe interface | LCD/SPI/I2S multiplexed pin |
| 16 | PCIe30X2_PRSNT_L_GPIO2_D7 | PCIe interface | LCD/SPI/UART/I2S multiplexed pin |
| 17 | PCIeCLKIC_OE_H_GPIO3_A7 | PCIe interface | LCD/GMAC/SDMMC multiplexed pin |
| 18 | USB2_HOST2_DM | USB 2.0 interface | USB signal differential pair |
| 19 | USB2_HOST2_DP | USB 2.0 interface | USB signal differential pair |
| 20 | USB2_HOST3_DM | USB 2.0 interface | USB signal differential pair |
| 21 | USB2_HOST3_DP | USB 2.0 interface | USB signal differential pair |
| 22 | HDMITX_SDA | HDMI output interface | I2Cmultiplexed pin |
| 23 | HDMITX_CEC_M0 | HDMI output interface | SPI multiplexed pin |
| 24 | HDMITX_SCL | HDMI output interface | I2Cmultiplexed pin |
| 25 | HDMI_TX_HPDIN | HDMI output interface | HDMI detection pin |
| 26 | ETH1_REFCLKO_25M_M0 | Ethernet interface | GPIO, LCD, SDMMCmultiplexed pin |
| 27 | MIPI_CSI_RX_D3P | CSI interface | CSI differential pair |
| 28 | MIPI_CSI_RX_D3N | CSI interface | CSI differential pair |
| 29 | MIPI_CSI_RX_D2P | CSI interface | CSI differential pair |
| 30 | MIPI_CSI_RX_D2N | CSI interface | CSI differential pair |
| 31 | MIPI_CSI_RX_CLK1P | CSI interface | CSI differential pair |
| 32 | MIPI_CSI_RX_CLK1N | CSI interface | CSI differential pair |
| 33 | MIPI_CSI_RX_CLK0P | CSI interface | CSI differential pair |
| 34 | MIPI_CSI_RX_CLK0N | CSI interface | CSI differential pair |
| 35 | MIPI_CSI_RX_D1P | CSI interface | CSI differential pair |
| 36 | MIPI_CSI_RX_D1N | CSI interface | CSI differential pair |
| 37 | MIPI_CSI_RX_D0P | CSI interface | CSI differential pair |
| 38 | MIPI_CSI_RX_D0N | CSI interface | CSI differential pair |
| 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | DSI/LVDS interface | DSI/LVDS differential pair |
| 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | DSI/LVDS interface | DSI/LVDS differential pair |
| 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | DSI/LVDS interface | DSI/LVDS differential pair |
| 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | DSI/LVDS interface | DSI/LVDS differential pair |
| 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | DSI/LVDS interface | DSI/LVDS differential pair |
| 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | DSI/LVDS interface | DSI/LVDS differential pair |
| 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | DSI/LVDS interface | DSI/LVDS differential pair |
| 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | DSI/LVDS interface | DSI/LVDS differential pair |
| 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | DSI/LVDS interface | DSI/LVDS differential pair |
| 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | DSI/LVDS interface | DSI/LVDS differential pair |
| 49 | HDMI_TXCLKN_PORT | HDMI output interface | HDMI differential pair |
| 50 | HDMI_TXCLKP_PORT | HDMI output interface | HDMI differential pair |

## Core-board Pin Definition 2

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 51 | HDMI_TX0N_PORT | HDMI output interface | HDMI differential pair |
| 52 | HDMI_TX0P_PORT | HDMI output interface | HDMI differential pair |
| 53 | HDMI_TX1N_PORT | HDMI output interface | HDMI differential pair |
| 54 | HDMI_TX1P_PORT | HDMI output interface | HDMI differential pair |
| 55 | HDMI_TX2N_PORT | HDMI output interface | HDMI differential pair |
| 56 | HDMI_TX2P_PORT | HDMI output interface | HDMI differential pair |
| 57 | PCIe30_REFCLKN_IN | PCIe interface | PCIe differential pair |
| 58 | PCIe30_REFCLKP_IN | PCIe interface | PCIe differential pair |
| 59 | PCIe30_RX1N | PCIe interface | PCIe differential pair |
| 60 | PCIe30_RX1P | PCIe interface | PCIe differential pair |
| 61 | PCIe30_RX0N | PCIe interface | PCIe differential pair |
| 62 | PCIe30_RX0P | PCIe interface | PCIe differential pair |
| 63 | PCIe30_TX1N | PCIe interface | PCIe differential pair |
| 64 | PCIe30_TX1P | PCIe interface | PCIe differential pair |
| 65 | PCIe30_TX0N | PCIe interface | PCIe differential pair |
| 66 | PCIe30_TX0P | PCIe interface | PCIe differential pair |
| 67 | PCIe20_REFCLKN/GPIO0_C4 | PCIe interface or GPIO | PCIe differential pair or PWM/SPI/UART multiplexed pin |
| 68 | PCIe20_REFCLKP/GPIO0_C2 | PCIe interface or GPIO | PCIe differential pair or PWM/EDP/JTAG multiplexed pin |
| 69 | SATA2_RXN/GPIO0_C7 | SATA interface or GPIO | PWM/UART multiplexed pin |
| 70 | SATA2_RXP/GPIO0_C5 | SATA interface or GPIO | PWM/SPI multiplexed pin |
| 71 | SATA2_TXN/GPIO1_A4 | SATA interface or GPIO | I2S/UART/PDM/SPDIF multiplexed pin |
| 72 | SATA2_TXP/GPIO0_B7 | SATA interface or GPIO | PWM/CPUAVS multiplexed pin |
| 73 | UART2_TX_M0_DEBUG | UART2 | GPIO, UART multiplexed pin |
| 74 | UART2_RX_M0_DEBUG | UART2 | GPIO, UART multiplexed pin |
| 75 | WORKING_LEDEN_H_GPIO0_C0 | Enable signal | PWM/UART/GPUAVS multiplexed pin |
| 76 | REFCLK_OUT_CAM | Clock signal | GPIO, camera clock multiplexed signal |
| 77 | RESETn | Reset key | Hardware reset pin, active low |
| 78 | RK809_32KOUT_WIFI | Clock output | PMU 32.768kHz clock output |
| 79 | DSI_TX1_D3N/EDP_TX_D3N | DSI/EDP interface | DSI/EDP differential pair |
| 80 | DSI_TX1_D3P/EDP_TX_D3P | DSI/EDP interface | DSI/EDP differential pair |
| 81 | DSI_TX1_D2N/EDP_TX_D2N | DSI/EDP interface | DSI/EDP differential pair |
| 82 | DSI_TX1_D2P/EDP_TX_D2P | DSI/EDP interface | DSI/EDP differential pair |
| 83 | DSI_TX1_D1N/EDP_TX_D1N | DSI/EDP interface | DSI/EDP differential pair |
| 84 | DSI_TX1_D1P/EDP_TX_D1P | DSI/EDP interface | DSI/EDP differential pair |
| 85 | DSI_TX1_D0N/EDP_TX_D0N | DSI/EDP interface | DSI/EDP differential pair |
| 86 | DSI_TX1_D0P/EDP_TX_D0P | DSI/EDP interface | DSI/EDP differential pair |
| 87 | DSI_TX1_CLKN/EDP_TX_AUXN | DSI/EDP interface | DSI/EDP differential pair |
| 88 | DSI_TX1_CLKP/EDP_TX_AUXP | DSI/EDP interface | DSI/EDP differential pair |
| 89 | USB3_HOST1_SSTXP | USB 3.0 interface | SATA,QSGMII multiplexed pin |
| 90 | USB3_HOST1_SSTXN | USB 3.0 interface | SATA,QSGMII multiplexed pin |
| 91 | USB3_HOST1_SSRXP | USB 3.0 interface | SATA,QSGMII multiplexed pin |
| 92 | USB3_HOST1_SSRXN | USB 3.0 interface | SATA,QSGMII multiplexed pin |
| 93 | USB3_OTG0_SSTXP | USB 3.0 interface | SATA multiplexed pin |
| 94 | USB3_OTG0_SSTXN | USB 3.0 interface | SATA multiplexed pin |
| 95 | USB3_OTG0_SSRXP | USB 3.0 interface | SATA multiplexed pin |
| 96 | USB3_OTG0_SSRXN | USB 3.0 interface | SATA multiplexed pin |
| 97 | USB3_OTG0_DM | USB 3.0 interface | USB 3.0 OTG differential pair |
| 98 | USB3_OTG0_DP | USB 3.0 interface | USB 3.0 OTG differential pair |
| 99 | USB3_HOST1_DM | USB 3.0 interface | USB 3.0 data differential pair |
| 100 | USB3_HOST1_DP | USB 3.0 interface | USB 3.0 data differential pair |

## Core-board Pin Definition 3

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 101 | USB3_OTG0_VBUSDET | USB 3.0 interface | OTG detection pin |
| 102 | USB3_OTG0_ID | USB 3.0 interface | OTG ID pin |
| 103 | SDMMC0_DET_L | SD interface | SATA/PCIe multiplexed pin |
| 104 | SDMMC0_D3 | SD interface | UART multiplexed pin |
| 105 | SDMMC0_D2 | SD interface | UART multiplexed pin |
| 106 | SDMMC0_D1 | SD interface | UART/PWM multiplexed pin |
| 107 | SDMMC0_D0 | SD interface | UART/PWM multiplexed pin |
| 108 | SDMMC0_CMD/CAN0_TX_M1 | SD interface or CAN | UART/PWM multiplexed pin |
| 109 | SDMMC0_CLK/CAN0_RX_M1 | SD interface or CAN | UART/PWM multiplexed pin |
| 110 | EXT_EN | Enable signal | PMU enable output signal |
| 111 | GND | Ground | Ground |
| 112 | GND | Ground | Ground |
| 113 | VCC3V3_SYS | 3V3 input | Core module 3.3V power input, ensure 1A continuous current |
| 114 | VCC3V3_SYS | 3V3 input | Core module 3.3V power input, ensure 1A continuous current |
| 115 | GPIO0_A7 | GPIO |  |
| 116 | GPIO0_D4 | GPIO |  |
| 117 | HPR_OUT | Audio output signal | PMU analog audio output pin |
| 118 | HPL_OUT | Audio output signal | PMU analog audio output pin |
| 119 | MIC1_INP | Microphone input | PMU analog audio input pin |
| 120 | MIC1_INN | Microphone input | PMU analog audio input pin |
| 121 | SPKP_OUT | Speaker interface | PMU analog audio output pin |
| 122 | SPKN_OUT | Speaker interface | PMU analog audio output pin |
| 123 | GPIO0_C3 | GPIO | PWM/PCIe/JTAG multiplexed pin |
| 124 | SARADC_VIN0_KEY/RECOVERY | ADC input pin | Main CPU ADC sampling input pin |
| 125 | SARADC_VIN1 | ADC input pin | Main CPU ADC sampling input pin |
| 126 | RK809_PWRON | PWRON key |  |
| 127 | VCC_RTC | RTC power input | RTC power input, 2.5 to 3.3V, static current 0.6uA |
| 128 | GMAC0_RXCLK | Ethernet interface | UART/SDMMC multiplexed pin |
| 129 | GMAC0_RXD0 | Ethernet interface | UART/SPI multiplexed pin |
| 130 | GMAC0_RXD1 | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 131 | GMAC0_RXD2 | Ethernet interface | UART/SDMMC multiplexed pin |
| 132 | GMAC0_RXD3 | Ethernet interface | UART/SDMMC multiplexed pin |
| 133 | GMAC0_RXDV_CRS | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 134 | GMAC0_TXEN | Ethernet interface | UART/SPI multiplexed pin |
| 135 | GMAC0_TXD0 | Ethernet interface | UART multiplexed pin |
| 136 | GMAC0_TXD1 | Ethernet interface | UART multiplexed pin |
| 137 | GMAC0_TXD2 | Ethernet interface | UART/SDMMC multiplexed pin |
| 138 | GMAC0_TXD3 | Ethernet interface | UART/SDMMC multiplexed pin |
| 139 | GMAC0_TXCLK | Ethernet interface | UART/SDMMC multiplexed pin |
| 140 | UART8_RX_M0 | UART8 | SPI multiplexed pin |
| 141 | UART8_TX_M0 | UART8 | I2S,GMAC,SPI multiplexed pin |
| 142 | UART8_RTSn_M0 | UART8 | SDMMC/I2C/CAN multiplexed pin |
| 143 | UART8_CTSn_M0 | UART8 | SDMMC/I2C/CAN multiplexed pin |
| 144 | GMAC0_MDC | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 145 | GMAC0_MCLKINOUT | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 146 | GMAC0_MDIO | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 147 | ETH0_REFCLKO_25M | Ethernet interface | I2S/UART/SPI multiplexed pin |
| 148 | I2C3_SCL_M0 | I2C3 signal | UART/CAN/AUDIO/ACODEC multiplexed pin |
| 149 | I2C3_SDA_M0 | I2C3 signal | UART/CAN/AUDIO/ACODEC multiplexed pin |
| 150 | GPIO0_C1 | GPIO | PWM/UART/JTAG multiplexed pin |

## Core-board Pin Definition 4

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 151 | GPIO0_A5 | GPIO | SDMMC/SATA/PCIe multiplexed pin |
| 152 | GPIO0_A6 | GPIO | SATA/PCIe multiplexed pin |
| 153 | GPIO4_C6 | GPIO | PWM/SPI/SATA/UART/I2S multiplexed pin |
| 154 | GPIO4_C5 | GPIO | PWM/SPI/SATA/UART/I2S multiplexed pin |
| 155 | GPIO4_C4 | GPIO | EDP/SPDIF/SATA/PCIe/I2S multiplexed pin |
| 156 | GPIO4_C3 | GPIO | PWM/SPI/CAN/PCIe/I2S multiplexed pin |
| 157 | GPIO4_C2 | GPIO | PWM/SPI/CAN/PCIe/I2S multiplexed pin |
| 158 | GMAC1_INT/PMEB_GPIO2_D0 | Ethernet interface | LCD,SPI,PCIe,I2Smultiplexed pin |
| 159 | GMAC1_RSTn_GPIO2_D1 | Ethernet interface | LCD,SPI,PCIe,I2Smultiplexed pin |
| 160 | GMAC0_INT/PMEB_GPIO2_D2 | Ethernet interface | LCD,SPI,PCIe,I2Smultiplexed pin |
| 161 | GMAC0_RSTn_GPIO2_D3 | Ethernet interface | LCD,SPI,PCIe,I2Smultiplexed pin |
| 162 | UART3_TX_M1 | UART3 | LCD,PWM,GMAC,PDMmultiplexed pin |
| 163 | UART3_RX_M1 | UART3 | LCD,PWM,GMAC,PDMmultiplexed pin |
| 164 | SPDIF_TX_M1 | Optical audio interface | PWM,GMAC,UART,I2Smultiplexed pin |
| 165 | GPIO3_D5 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 166 | GPIO3_D4 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 167 | GPIO3_D3 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 168 | GPIO3_D2 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 169 | GPIO3_D1 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 170 | GPIO3_D0 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 171 | GPIO3_C7 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 172 | GPIO3_C6 | GPIO | CIF/EBC/SDMMC/I2S multiplexed pin |
| 173 | GPIO3_C4 | GPIO | PWM/GMAC/UART/PDM multiplexed pin |
| 174 | GPIO3_C3 | GPIO | LCD/SPI/UART/I2S multiplexed pin |
| 175 | HP_DET_L_GPIO3_C2 | Audio output signal | LCD/SPI/UART/I2S multiplexed pin |
| 176 | GSENSOR_INT_L_GPIO3_C1 | Sensor signal | LCD,SPI,PCIe,I2Smultiplexed pin |
| 177 | HOST_WAKE_BT_H_GPIO3_A2 | WIFI/BT signal | LCD/GMAC/I2S/SDMMC multiplexed pin |
| 178 | BT_WAKE_HOST_H_GPIO3_A1 | WIFI/BT signal | LCD/SPI/PCIe/SDMMC multiplexed pin |
| 179 | BT_REG_ON_H_GPIO3_A0 | WIFI/BT signal | LCD/SPI/UART/I2S multiplexed pin |
| 180 | GPIO3_B6 | GPIO | LCD/GMAC/I2C/PWM multiplexed pin |
| 181 | GPIO3_B5 | GPIO | LCD/GMAC/I2C/PWM multiplexed pin |
| 182 | UART4_RX_M1 | UART4 | LCD/GMAC/PWM multiplexed pin |
| 183 | UART4_TX_M1 | UART4 | LCD/GMAC/PWM multiplexed pin |
| 184 | I2S3_SDI_M0 | I2S3 signal | LCD/GMAC/I2S/SDMMC multiplexed pin |
| 185 | I2S3_LRCK_M0 | I2S3 signal | LCD/GMAC/I2S/SDMMC multiplexed pin |
| 186 | I2S3_SCLK_M0 | I2S3 signal | LCD/GMAC/I2S/SDMMC multiplexed pin |
| 187 | I2S3_SDO_M0 | I2S3 signal | LCD/GMAC/I2S/SDMMC multiplexed pin |
| 188 | GPIO4_B7 | GPIO | CIF/EBC/GMAC/I2S multiplexed pin |
| 189 | GPIO4_B5 | GPIO | I2C/EBC/CAN/I2S multiplexed pin |
| 190 | GPIO4_B6 | GPIO | CIF/EBC/GMAC/UART/I2S multiplexed pin |
| 191 | GPIO4_C0 | GPIO | CIF/EBC/PWM multiplexed pin |
| 192 | GPIO4_C1 | GPIO | CIF/EBC/GMAC/UART/I2S multiplexed pin |
| 193 | GPIO4_B4 | GPIO | I2C,EBC,CANmultiplexed pin |
| 194 | GPIO4_B3 | GPIO | I2C,EBC,SPI,I2Smultiplexed pin |
| 195 | GPIO4_A3 | GPIO | CIF/EBC/GMAC/UART/PDM multiplexed pin |
| 196 | GPIO4_A2 | GPIO | CIF/EBC/GMAC/UART/PDM multiplexed pin |
| 197 | GPIO4_A1 | GPIO | CIF/EBC/GMAC/PDM multiplexed pin |
| 198 | GPIO4_B0 | GPIO | EBC,GMAC,SPI,I2Smultiplexed pin |
| 199 | GPIO4_A7 | GPIO | EBC,GMAC,SPI,I2Smultiplexed pin |
| 200 | GPIO4_B1 | GPIO | EBC,GMACI2Smultiplexed pin |

