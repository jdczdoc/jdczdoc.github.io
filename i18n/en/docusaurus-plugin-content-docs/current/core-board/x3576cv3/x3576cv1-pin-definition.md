---
sidebar_position: 2
title: Pin Definition
description: X3576 core board pin definitions
---

# Pin Definition

This section lists the X3576 core board pin definitions. When designing the carrier board, refer to the core board schematic and the chip specification to confirm pin multiplexing functions, IO voltage domains, and default power-on states.

## Core Board Pin Definitions 1

| Pin No. | Signal | Type | Description |
|---|---|---|---|
| 1 | GMAC0_RXD2_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_D3_d, 1.8V logic level |
| 2 | GMAC0_RXD3_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_D2_d, 1.8V logic level |
| 3 | GMAC0_RXCLK_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_D1_d, 1.8V logic level |
| 4 | GMAC0_TXCLK_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B6_d, 1.8V logic level |
| 5 | GMAC0_TXCTL_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B3_d, 1.8V logic level |
| 6 | GMAC0_TXD0_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B5_d, 1.8V logic level |
| 7 | GMAC0_TXD1_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B4_d, 1.8V logic level |
| 8 | GMAC0_TXD2_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_C3_d, 1.8V logic level |
| 9 | GMAC0_TXD3_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_C2_d, 1.8V logic level |
| 10 | GND | System ground |  |
| 11 | GMAC0_RSTN | Ethernet PHY/GPIO multiplexed interface signal | GPIO2_B3_d, 3.3V logic level |
| 12 | GMAC0_MDC_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_A6_d, 1.8V logic level |
| 13 | GMAC0_MDIO_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_A5_d, 1.8V logic level |
| 14 | MIPI_DPHY_CSI_CAM1_PDN_H | GPIO | GPIO3_B0_d, 1.8V logic level |
| 15 | MIPI_DPHY_CSI_CAM2_PDN_H | GPIO | GPIO3_D4_d, 1.8V logic level |
| 16 | I2C4_SDA_M3_MIPI_CAM0/2 | I2C/GPIO multiplexed interface signal | GPIO3_B7_d, 1.8V logic level |
| 17 | MIPI_DPHY_CSI_CAM0_PWREN_H | GPIO | GPIO3_D0_d, 1.8V logic level |
| 18 | RK628_HDMIRX_INT_H | GPIO | GPIO4_A0_d, 1.8V logic level |
| 19 | I2C5_SDA_M3_MIPI_CAM | I2C/GPIO multiplexed interface signal | GPIO3_C1_d, 1.8V logic level |
| 20 | MIPI_DPHY_CSI_CAM2_RST_H | GPIO | GPIO3_D6_d, 1.8V logic level |
| 21 | MIPI_DCPHY_CSI_CAM0_RST_H | GPIO | GPIO3_D5_d, 1.8V logic level |
| 22 | I2C4_SCL_M3_MIPI_CAM0/2 | I2C/GPIO multiplexed interface signal | GPIO3_C0_d, 1.8V logic level |
| 23 | I2C5_SCL_M3_MIPI_CAM1/HDMI_RX | I2C/GPIO multiplexed interface signal | GPIO3_C4_d, 1.8V logic level |
| 24 | MIPI_DCPHY_CSI_CAM0_CLKOUT | GPIO | GPIO3_D7_d, 1.8V logic level |
| 25 | MIPI_DPHY_CSI_CAM2_CLKOUT | GPIO | GPIO4_A1_d, 1.8V logic level |
| 26 | MIPI_DPHY_CSI_CAM1_PWREN_H | GPIO | GPIO3_C5_d, 1.8V logic level |
| 27 | MIPI_DCPHY_CSI_CAM0_PDN_H | GPIO | GPIO3_C7_d, 1.8V logic level |
| 28 | MIPI_DPHY_CSI_CAM2_PWREN_H | GPIO | GPIO3_C6_d, 1.8V logic level |
| 29 | SAI1_SCLK_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A3_d, 3.3V logic level |
| 30 | SAI1_MCLK_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A2_d, 3.3V logic level |
| 31 | I2C3_SDA_M0_AUDIO | I2C/GPIO multiplexed interface signal | GPIO4_B4_d, 3.3V logic level |
| 32 | I2C3_SCL_M0_AUDIO | I2C/GPIO multiplexed interface signal | GPIO4_B5_d, 3.3V logic level |
| 33 | SAI1_LRCK_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A5_d, 3.3V logic level |
| 34 | SAI1_SDI0_M0 | I2S/GPIO multiplexed interface signal | GPIO4_B3_d, 3.3V logic level |
| 35 | SAI1_SDO2_M0 | I2S/GPIO multiplexed interface signal | GPIO4_B1_d, 3.3V logic level |
| 36 | PDM1_CLK1_M1_LOOPBACK | PDM/GPIO multiplexed interface signal | GPIO4_B0_d, 3.3V logic level |
| 37 | PDM1_SDI1_M1_LOOPBACK | PDM/GPIO multiplexed interface signal | GPIO4_B2_d, 3.3V logic level |
| 38 | SAI4_SDI_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A7_d, 3.3V logic level |
| 39 | SAI4_LRCK_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A6_d, 3.3V logic level |
| 40 | SAI4_SCLK_M0 | I2S/GPIO multiplexed interface signal | GPIO4_A4_d, 3.3V logic level |
| 41 | N312406200 | GPIO | GPIO4_D0_d, 1.8V logic level |
| 42 | 4G_DISABLE | GPIO | GPIO4_C7_d, 3.3V logic level |
| 43 | HDMI_TX_ON_H | HDMI output/GPIO multiplexed interface signal | GPIO4_C6_d, 3.3V logic level |
| 44 | TYPEC_DPTX_AUX_PUPDCTL2 | GPIO | GPIO4_C5_d, 3.3V logic level |
| 45 | HDMI_TX_HPDIN_M0 | HDMI output/GPIO multiplexed interface signal | GPIO4_C1_d, 3.3V logic level |
| 46 | HDMI_TX_SDA | HDMI output/GPIO multiplexed interface signal | GPIO4_C3_d, 3.3V logic level |
| 47 | HDMI_TX_SCL | HDMI output/GPIO multiplexed interface signal | GPIO4_C2_d, 3.3V logic level |
| 48 | HDMI_TX_CEC_M0 | HDMI output/GPIO multiplexed interface signal | GPIO4_C0_d, 3.3V logic level |
| 49 | TYPEC_DPTX_AUX_PUPDCTL1 | GPIO | GPIO4_C4_d, 3.3V logic level |
| 50 | USB2_OTG0_VBUSDET | USB insertion-detection signal | Cannot be used as GPIO |
| 51 | USB2_OTG0_ID | USB 2.0 interface signal | Cannot be used as GPIO |
| 52 | GND | System ground |  |

## Core Board Pin Definitions 2

| Pin No. | Signal | Type | Description |
|---|---|---|---|
| 53 | DP_TX_AUXP | DP 1.4 interface signal | Cannot be used as GPIO |
| 54 | DP_TX_AUXN | DP 1.4 interface signal | Cannot be used as GPIO |
| 55 | USB2_OTG0_DP | USB 2.0 interface signal | Cannot be used as GPIO |
| 56 | USB2_OTG0_DM | USB 2.0 interface signal | Cannot be used as GPIO |
| 57 | USB3_OTG0_SSRX1P | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 58 | USB3_OTG0_SSRX1N | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 59 | USB3_OTG0_SSTX1N | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 60 | USB3_OTG0_SSTX1P | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 61 | USB3_OTG0_SSRX2P | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 62 | USB3_OTG0_SSRX2N | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 63 | USB3_OTG0_SSTX2N | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 64 | USB3_OTG0_SSTX2P | USB 3.0/DP 1.4 interface signal | Cannot be used as GPIO |
| 65 | USB2_HOST1_DP | USB 2.0 interface signal | Cannot be used as GPIO |
| 66 | USB2_HOST1_DM | USB 2.0 interface signal | Cannot be used as GPIO |
| 67 | GND | System ground |  |
| 68 | MIPI_DPHY_DSI_TX_D0N | MIPI LCD interface signal | Cannot be used as GPIO |
| 69 | MIPI_DPHY_DSI_TX_D0P | MIPI LCD interface signal | Cannot be used as GPIO |
| 70 | MIPI_DPHY_DSI_TX_D1N | MIPI LCD interface signal | Cannot be used as GPIO |
| 71 | MIPI_DPHY_DSI_TX_D1P | MIPI LCD interface signal | Cannot be used as GPIO |
| 72 | MIPI_DPHY_DSI_TX_CLKN | MIPI LCD interface signal | Cannot be used as GPIO |
| 73 | MIPI_DPHY_DSI_TX_CLKP | MIPI LCD interface signal | Cannot be used as GPIO |
| 74 | MIPI_DPHY_DSI_TX_D2N | MIPI LCD interface signal | Cannot be used as GPIO |
| 75 | MIPI_DPHY_DSI_TX_D2P | MIPI LCD interface signal | Cannot be used as GPIO |
| 76 | MIPI_DPHY_DSI_TX_D3N | MIPI LCD interface signal | Cannot be used as GPIO |
| 77 | MIPI_DPHY_DSI_TX_D3P | MIPI LCD interface signal | Cannot be used as GPIO |
| 78 | MIPI_DPHY_CSI0_RX_D0N | MIPI camera interface signal | Cannot be used as GPIO |
| 79 | MIPI_DPHY_CSI0_RX_D0P | MIPI camera interface signal | Cannot be used as GPIO |
| 80 | MIPI_DPHY_CSI0_RX_D1N | MIPI camera interface signal | Cannot be used as GPIO |
| 81 | MIPI_DPHY_CSI0_RX_D1P | MIPI camera interface signal | Cannot be used as GPIO |
| 82 | MIPI_DPHY_CSI0_RX_CLKN | MIPI camera interface signal | Cannot be used as GPIO |
| 83 | MIPI_DPHY_CSI0_RX_CLKP | MIPI camera interface signal | Cannot be used as GPIO |
| 84 | MIPI_DPHY_CSI0_RX_D2N | MIPI camera interface signal | Cannot be used as GPIO |
| 85 | MIPI_DPHY_CSI0_RX_D2P | MIPI camera interface signal | Cannot be used as GPIO |
| 86 | MIPI_DPHY_CSI0_RX_D3N | MIPI camera interface signal | Cannot be used as GPIO |
| 87 | MIPI_DPHY_CSI0_RX_D3P | MIPI camera interface signal | Cannot be used as GPIO |
| 88 | GND | System ground |  |
| 89 | HDMI_TX_SBDP | HDMI output interface signal | Cannot be used as GPIO |
| 90 | HDMI_TX_SBDN | HDMI output interface signal | Cannot be used as GPIO |
| 91 | HDMI_TX_D3P | HDMI output interface signal | Cannot be used as GPIO |
| 92 | HDMI_TX_D3N | HDMI output interface signal | Cannot be used as GPIO |
| 93 | HDMI_TX_D0N | HDMI output interface signal | Cannot be used as GPIO |
| 94 | HDMI_TX_D0P | HDMI output interface signal | Cannot be used as GPIO |
| 95 | HDMI_TX_D1N | HDMI output interface signal | Cannot be used as GPIO |
| 96 | HDMI_TX_D1P | HDMI output interface signal | Cannot be used as GPIO |
| 97 | HDMI_TX_D2N | HDMI output interface signal | Cannot be used as GPIO |
| 98 | HDMI_TX_D2P | HDMI output interface signal | Cannot be used as GPIO |
| 99 | MIPI_DPHY_CSI1_RX_D3N | MIPI camera interface signal | Cannot be used as GPIO |
| 100 | MIPI_DPHY_CSI1_RX_D3P | MIPI camera interface signal | Cannot be used as GPIO |
| 101 | MIPI_DPHY_CSI1_RX_D2 | MIPI camera interface signal | Cannot be used as GPIO |
| 102 | MIPI_DPHY_CSI1_RX_D2P | MIPI camera interface signal | Cannot be used as GPIO |
| 103 | MIPI_DPHY_CSI1_RX_D1N | MIPI camera interface signal | Cannot be used as GPIO |
| 104 | MIPI_DPHY_CSI1_RX_D1P | MIPI camera interface signal | Cannot be used as GPIO |

## Core Board Pin Definitions 3

| Pin No. | Signal | Type | Description |
|---|---|---|---|
| 105 | MIPI_DPHY_CSI1_RX_D0N | MIPI camera interface signal | Cannot be used as GPIO |
| 106 | MIPI_DPHY_CSI1_RX_D0P | MIPI camera interface signal | Cannot be used as GPIO |
| 107 | MIPI_DPHY_CSI1_RX_CLKP | MIPI camera interface signal | Cannot be used as GPIO |
| 108 | MIPI_DPHY_CSI1_RX_CLKN | MIPI camera interface signal | Cannot be used as GPIO |
| 109 | GND | System ground |  |
| 110 | TP_INT_L | GPIO | GPIO0_C5_d, 3.3V logic level |
| 111 | PCIE0_PWREN_H | GPIO | GPIO0_D3_d, 3.3V logic level |
| 112 | USB_HOST_PWREN_H | GPIO | GPIO0_C7_d, 3.3V logic level |
| 113 | PCIE0_WAKEN_M0 | GPIO | GPIO0_D2_d, 3.3V logic level |
| 114 | LCD_PWREN_H | GPIO | GPIO0_C6_d, 3.3V logic level |
| 115 | USB_HUB_RST | GPIO | GPIO0_C3_d, 3.3V logic level |
| 116 | RTC_INT_L |  | GPIO0_A5_d, 1.8V logic level |
| 117 | REF_CLK0_OUT |  | GPIO0_A0_d, 1.8V logic level |
| 118 | 32KOUT_RTC2SOC |  | GPIO0_A2_d, 1.8V logic level |
| 119 | GND | System ground |  |
| 120 | PCIE0_REFCLKP | PCIE interface signal | Cannot be used as GPIO |
| 121 | PCIE0_REFCLKN | PCIE interface signal | Cannot be used as GPIO |
| 122 | PCIE0_RXP | PCIE/SATA interface signal | Cannot be used as GPIO |
| 123 | PCIE0_RXN | PCIE/SATA interface signal | Cannot be used as GPIO |
| 124 | PCIE0_TXN | PCIE/SATA interface signal | Cannot be used as GPIO |
| 125 | PCIE0_TXP | PCIE/SATA interface signal | Cannot be used as GPIO |
| 126 | USB3_HOST1_SSTXP | PCIE/USB 3.0/SATA multiplexed | Cannot be used as GPIO |
| 127 | USB3_HOST1_SSTXN | PCIE/USB 3.0/SATA multiplexed interface signal | Cannot be used as GPIO |
| 128 | USB3_HOST1_SSRXP | PCIE/USB 3.0/SATA multiplexed interface signal | Cannot be used as GPIO |
| 129 | USB3_HOST1_SSRXN | PCIE/USB 3.0/SATA multiplexed interface signal | Cannot be used as GPIO |
| 130 | MIPI_DPHY_CSI3_RX_CLKP | MIPI camera interface signal | Cannot be used as GPIO |
| 131 | MIPI_DPHY_CSI3_RX_CLKN | MIPI camera interface signal | Cannot be used as GPIO |
| 132 | MIPI_DPHY_CSI3_RX_D3N | MIPI camera interface signal | Cannot be used as GPIO |
| 133 | MIPI_DPHY_CSI3_RX_D3P | MIPI camera interface signal | Cannot be used as GPIO |
| 134 | MIPI_DPHY_CSI3_RX_D2N | MIPI camera interface signal | Cannot be used as GPIO |
| 135 | MIPI_DPHY_CSI3_RX_D2P | MIPI camera interface signal | Cannot be used as GPIO |
| 136 | MIPI_DPHY_CSI3_RX_D1N | MIPI camera interface signal | Cannot be used as GPIO |
| 137 | MIPI_DPHY_CSI3_RX_D1P | MIPI camera interface signal | Cannot be used as GPIO |
| 138 | MIPI_DPHY_CSI3_RX_D0N | MIPI camera interface signal | Cannot be used as GPIO |
| 139 | MIPI_DPHY_CSI3_RX_D0P | MIPI camera interface signal | Cannot be used as GPIO |
| 140 | GND | System ground |  |
| 141 | PWM0_CH0_M0_IR | GPIO | GPIO0_C4_d, 3.3V logic level |
| 142 | WIFI_PWREN_L | GPIO | GPIO0_D1_d, 3.3V logic level |
| 143 | SDMMC0_PWREN_H | GPIO | GPIO0_B6_d, 3.3V logic level |
| 144 | TP_RST_L | GPIO | GPIO0_D0_d, 3.3V logic level |
| 145 | I2C0_SCL_M1_TP | I2C/GPIO multiplexed interface signal | GPIO0_C1_d, 3.3V logic level |
| 146 | I2C0_SDA_M1_TP | I2C/GPIO multiplexed interface signal | GPIO0_C2_d, 3.3V logic level |
| 147 | BT_WAKE_HOST_H | GPIO | GPIO0_B1_z, 1.8V logic level |
| 148 | USBCC_INT_L | GPIO | GPIO0_B4_d, 3.3V logic level |
| 149 | LCD_BL_PWM1_CH1_M0 | GPIO | GPIO0_B5_d, 3.3V logic level |
| 150 | WIFI_WAKE_HOST_H | GPIO | GPIO0_B0_z, 1.8V logic level |
| 151 | SDMMC0_DET_L | GPIO | GPIO0_A7_u, 1.8V logic level |
| 152 | I2C2_SDA_M0_CC_RTC | I2C/GPIO multiplexed interface signal | GPIO0_C0_d, 3.3V logic level |
| 153 | I2C2_SCL_M0_CC_RTC | I2C/GPIO multiplexed interface signal | GPIO0_B7_d, 3.3V logic level |
| 154 | UART0_RX_M0_DEBUG | UART/GPIO multiplexed interface signal | GPIO0_D5_u, 3.3V logic level |
| 155 | UART0_TX_M0_DEBUG | UART/GPIO multiplexed interface signal | GPIO0_D4_u, 3.3V logic level |
| 156 | VCC_1V8_S3 | Core board 1.8V output | Can power the audio CODEC and PHY IO on the carrier board |

## Core Board Pin Definitions 4

| Pin No. | Signal | Type | Description |
|---|---|---|---|
| 157 | GND | System ground |  |
| 158 | GND | System ground |  |
| 159 | VCC5V0_SYS_S5 | Core board 5V input | Recommended current: 3A or higher; keep ripple within 100mV |
| 160 | VCC5V0_SYS_S5 | Core board 5V input | Recommended current: 3A or higher; keep ripple within 100mV |
| 161 | VCC_3V3_S0 | Core board 3.3V output | Current limit: 1A; can power SDIO and MIPI peripheral devices on the carrier board |
| 162 | RESET_L | System reset signal | Cannot be used as GPIO |
| 163 | PWRON_L | System enable signal | Cannot be used as GPIO |
| 164 | PMIC_EXT_EN_OUT | PMIC enable signal | Cannot be used as GPIO |
| 165 | SDMMC1_D0_M0 | SDMMC/GPIO multiplexed interface signal | GPIO1_B4_d, 1.8V logic level |
| 166 | SDMMC1_D1_M0 | SDMMC/GPIO multiplexed interface signal | GPIO1_B5_d, 1.8V logic level |
| 167 | SDMMC1_CMD_M0 | SDMMC/GPIO multiplexed interface signal | GPIO1_C0_d, 1.8V logic level |
| 168 | SDMMC1_CLK_M0 | SDMMC/GPIO multiplexed interface signal | GPIO1_C1_d, 1.8V logic level |
| 169 | GND | System ground |  |
| 170 | PCIE0_PERSTN_WIFI | GPIO | GPIO1_B7_d, 1.8V logic level |
| 171 | UART4_RX_M1 | UART/GPIO multiplexed interface signal | GPIO1_C5_d, 1.8V logic level |
| 172 | UART4_RTSN_M1 | UART/GPIO multiplexed interface signal | GPIO1_C2_u, 1.8V logic level |
| 173 | SAI2_LRCK_M0 | I2S/GPIO multiplexed interface signal | GPIO1_D2_d, 1.8V logic level |
| 174 | SAI2_SDO_M0 | I2S/GPIO multiplexed interface signal | GPIO1_D0_d, 1.8V logic level |
| 175 | SAI2_SDI_M0 | I2S/GPIO multiplexed interface signal | GPIO1_D3_d, 1.8V logic level |
| 176 | SAI2_SCLK_M0 | I2S/GPIO multiplexed interface signal | GPIO1_D1_d, 1.8V logic level |
| 177 | CLK1_32K_OUT_WIFI |  | GPIO1_D5_d, 1.8V logic level |
| 178 | HOST_WAKE_BT_H | GPIO | GPIO1_D4_d, 1.8V logic level |
| 179 | UART4_CTSN_M1 | UART/GPIO multiplexed interface signal | GPIO1_C3_u, 1.8V logic level |
| 180 | UART4_TX_M1 | UART/GPIO multiplexed interface signal | GPIO1_C4_d, 1.8V logic level |
| 181 | BT_REG_ON_H | GIPO | GPIO1_C7_d, 1.8V logic level |
| 182 | PCIE0_CLKREQN_M1_WIFI | GPIO | GPIO1_B6_d, 1.8V logic level |
| 183 | WIFI_REG_ON_H | GPIO | GPIO1_C6_d, 1.8V logic level |
| 184 | SARADC_VIN1_KEY/RECOVERY | ADC | SARADC |
| 185 | SARADC_VIN0_BOOT | ADC | SARADC |
| 186 | SDMMC0_D1 | SDMMC/GPIO multiplexed interface signal | GPIO2_A1_d, 3.3V logic level |
| 187 | SDMMC0_D0 | SDMMC/GPIO multiplexed interface signal | GPIO2_A0_d, 3.3V logic level |
| 188 | SDMMC0_CMD | SDMMC/GPIO multiplexed interface signal | GPIO2_A4_d, 3.3V logic level |
| 189 | SDMMC0_D3 | SDMMC/GPIO multiplexed interface signal | GPIO2_A3_d, 3.3V logic level |
| 190 | SDMMC0_D2 | SDMMC/GPIO multiplexed interface signal | GPIO2_A2_d, 3.3V logic level |
| 191 | SDMMC0_CLK | SDMMC/GPIO multiplexed interface signal | GPIO2_A5_d, 3.3V logic level |
| 192 | SARADC_VIN3_HP_HOOK | ADC | SARADC |
| 193 | RK628_HDMIRX_RST_L | GPIO | GPIO2_B5_d, 3.3V logic level |
| 194 | PCIE0_PERSTN | GPIO | GPIO2_B1_d, 3.3V logic level |
| 195 | I2C7_SDA_M1_SENSOR | I2C/GPIO multiplexed interface signal | GPIO3_A1_d, 3.3V logic level |
| 196 | I2C7_SCL_M1_SENSOR | I2C/GPIO multiplexed interface signal | GPIO3_A0_d, 3.3V logic level |
| 197 | USB_OTG0_PWREN_H | GPIO | GPIO2_B6_d, 3.3V logic level |
| 198 | SPDIF_TX1_M1 | GPIO | GPIO3_A3_d, 3.3V logic level |
| 199 | MIPI_TE_M1 | GPIO | GPIO3_A2_d, 3.3V |
| 200 | HP_CTL_H | GPIO | GPIO2_A6_d, 3.3V logic level |
| 201 | HP_DET_L | GPIO | GPIO2_B7_d, 3.3V logic level |
| 202 | SPK_CTL_H | GPIO | GPIO2_A7_d, 3.3V logic level |
| 203 | GSENSOR_INT_L | GPIO | GPIO2_B0_d, 3.3V logic level |
| 204 | PCIE0_CLKREQN_M0 | GPIO | GPIO2_B2_d, 3.3V logic level |
| 205 | ETH_CLK0_25M_OUT_M0 | GPIO | GPIO3_A4_d, 1.8V logic level |
| 206 | GMAC0_RXD0_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_A7_d, 1.8V logic level |
| 207 | GMAC0_RXCTL_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B2_d, 1.8V logic level |
| 208 | GMAC0_RXD1_M0 | Ethernet PHY/GPIO multiplexed interface signal | GPIO3_B1_d, 1.8V logic level |
