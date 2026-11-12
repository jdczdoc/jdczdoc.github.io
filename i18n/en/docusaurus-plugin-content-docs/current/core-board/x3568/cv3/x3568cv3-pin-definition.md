---
sidebar_position: 2
title: Pin Definitions
description: Pin Definitions
---

# Pin Definitions

The board uses a 200-pin package. Pin multiplexing and carrier-board connections determine the available functions.

## Pin Group 1

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 1 | GPIO4_B2 | General-purpose GPIO | 1.8V |
| 2 | GPIO4_A4 | General-purpose GPIO | 1.8V |
| 3 | GPIO4_A5 | General-purpose GPIO | 1.8V |
| 4 | GPIO3_D6 | General-purpose GPIO | 1.8V |
| 5 | GPIO3_D7 | General-purpose GPIO | 1.8V |
| 6 | GPIO4_A6 | General-purpose GPIO | 1.8V |
| 7 | GPIO4_A0 | General-purpose GPIO | 1.8V |
| 8 | PWM7_IR | InfraredPWM | 3.3V |
| 9 | TP_RST_L_GPIO0_B6 | Touch reset | 3.3V |
| 10 | I2C1_SDA_TP | Touch I2Cdata | 3.3V |
| 11 | TP_INT_L_GPIO0_B5 | Touch interrupt | 3.3V |
| 12 | I2C1_SCL_TP | Touch I2Cclock | 3.3V |
| 13 | PCIE30X2_PERSTn_M1 | PCIereset/resistor selection | 3.3V |
| 14 | PCIE30X2_CLKREQn_M1 | PCIeclock request/resistor selection | 3.3V |
| 15 | PCIE30X2_WAKEn_M1 | PCIewake/resistor selection | 3.3V |
| 16 | PCIE30X2_PRSNT_L_GPIO2_D7 | PCIepresence detect/resistor selection | 3.3V |
| 17 | PCIECLKIC_OE_H_GPIO3_A7 | PCIeclock buffer enable/resistor selection | 3.3V |
| 18 | USB2_HOST2_DM | USB2 Host2 DM | 3.3VDifferential |
| 19 | USB2_HOST2_DP | USB2 Host2 DP | 3.3VDifferential |
| 20 | USB2_HOST3_DM | USB2 Host3 DM | 3.3VDifferential |
| 21 | USB2_HOST3_DP | USB2 Host3 DP | 3.3VDifferential |
| 22 | HDMITX_SDA | HDMI DDCdata | 3.3V |
| 23 | HDMITX_CEC_M0 | HDMI CEC | 3.3V |
| 24 | HDMITX_SCL | HDMI DDCclock | 3.3V |
| 25 | HDMI_TX_HPDIN | HDMIhot-plug detect | 3.3V |
| 26 | ETH1_REFCLKO_25M_M0 | ETH1 25Mreference clock | 3.3V |
| 27 | MIPI_CSI_RX_D3P | MIPI CSIDifferential | Differential |
| 28 | MIPI_CSI_RX_D3N | MIPI CSIDifferential | Differential |
| 29 | MIPI_CSI_RX_D2P | MIPI CSIDifferential | Differential |
| 30 | MIPI_CSI_RX_D2N | MIPI CSIDifferential | Differential |
| 31 | MIPI_CSI_RX_CLK1P | MIPI CSIDifferential | Differential |
| 32 | MIPI_CSI_RX_CLK1N | MIPI CSIDifferential | Differential |
| 33 | MIPI_CSI_RX_CLK0P | MIPI CSIDifferential | Differential |
| 34 | MIPI_CSI_RX_CLK0N | MIPI CSIDifferential | Differential |
| 35 | MIPI_CSI_RX_D1P | MIPI CSIDifferential | Differential |
| 36 | MIPI_CSI_RX_D1N | MIPI CSIDifferential | Differential |
| 37 | MIPI_CSI_RX_D0P | MIPI CSIDifferential | Differential |
| 38 | MIPI_CSI_RX_D0N | MIPI CSIDifferential | Differential |
| 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | MIPI DSI/LVDSDifferential | Differential |
| 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | MIPI DSI/LVDSDifferential | Differential |
| 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | MIPI DSI/LVDSDifferential | Differential |
| 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | MIPI DSI/LVDSDifferential | Differential |
| 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | MIPI DSI/LVDSDifferential | Differential |
| 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | MIPI DSI/LVDSDifferential | Differential |
| 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | MIPI DSI/LVDSDifferential | Differential |
| 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | MIPI DSI/LVDSDifferential | Differential |
| 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | MIPI DSI/LVDSDifferential | Differential |
| 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | MIPI DSI/LVDSDifferential | Differential |
| 49 | HDMI_TXCLKN_PORT | HDMIsignals | Differential/3.3V |
| 50 | HDMI_TXCLKP_PORT | HDMIsignals | Differential/3.3V |

## Pin Group 2

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 51 | HDMI_TX0N_PORT | HDMIsignals | Differential/3.3V |
| 52 | HDMI_TX0P_PORT | HDMIsignals | Differential/3.3V |
| 53 | HDMI_TX1N_PORT | HDMIsignals | Differential/3.3V |
| 54 | HDMI_TX1P_PORT | HDMIsignals | Differential/3.3V |
| 55 | HDMI_TX2N_PORT | HDMIsignals | Differential/3.3V |
| 56 | HDMI_TX2P_PORT | HDMIsignals | Differential/3.3V |
| 57 | PCIE30_REFCLKN_IN | PCIeDifferential/control | Differential |
| 58 | PCIE30_REFCLKP_IN | PCIeDifferential/control | Differential |
| 59 | PCIE30_RXIN | PCIeDifferential/control | Differential |
| 60 | PCIE30_RXIP | PCIeDifferential/control | Differential |
| 61 | PCIE30_RX0N | PCIeDifferential/control | Differential |
| 62 | PCIE30_RX0P | PCIeDifferential/control | Differential |
| 63 | PCIE30_TXIN | PCIeDifferential/control | Differential |
| 64 | PCIE30_TXIP | PCIeDifferential/control | Differential |
| 65 | PCIE30_TX0N | PCIeDifferential/control | Differential |
| 66 | PCIE30_TX0P | PCIeDifferential/control | Differential |
| 67 | PCIE20_REFCLKN/GPIO0_C4 | PCIe2.0 REFCLKN/GPIO0_C4 (resistor selection) | Differential/3.3V |
| 68 | PCIE20_REFCLKP/GPIO0_C2 | PCIe2.0 REFCLKP/GPIO0_C2 (resistor selection) | Differential/3.3V |
| 69 | SATA2_RXN/GPIO0_C7 | SATA2 RXN/GPIO0_C7 (resistor selection) | Differential/3.3V |
| 70 | SATA2_RXP/GPIO0_C5 | SATA2 RXP/GPIO0_C5 (resistor selection) | Differential/3.3V |
| 71 | SATA2_TXN/GPIO1_A4 | SATA2 TXN/GPIO1_A4 (resistor selection) | Differential/3.3V |
| 72 | SATA2_TXP/GPIO0_B7 | SATA2 TXP/GPIO0_B7 (resistor selection) | Differential/3.3V |
| 73 | UART2_TX_M0_DEBUG | UARTsignals | 3.3V |
| 74 | UART2_RX_M0_DEBUG | UARTsignals | 3.3V |
| 75 | WORKING_LEDEN_H_GPIO0_C0 | Functionsignals | 3.3V |
| 76 | REFCLK_OUT_CAM | Camera reference clock output | 3.3V |
| 77 | RESETn | Camera reset | 1.8V |
| 78 | RK809_32KOUT_WIFI | WiFi 32.768kHzclock | 1.8V |
| 79 | DSI_TX1_D3N/EDP_TX_D3N | MIPI DSI1/eDPDifferential | Differential |
| 80 | DSI_TX1_D3P/EDP_TX_D3P | MIPI DSI1/eDPDifferential | Differential |
| 81 | DSI_TX1_D2N/EDP_TX_D2N | MIPI DSI1/eDPDifferential | Differential |
| 82 | DSI_TX1_D2P/EDP_TX_D2P | MIPI DSI1/eDPDifferential | Differential |
| 83 | DSI_TX1_D1N/EDP_TX_D1N | MIPI DSI1/eDPDifferential | Differential |
| 84 | DSI_TX1_D1P/EDP_TX_D1P | MIPI DSI1/eDPDifferential | Differential |
| 85 | DSI_TX1_D0N/EDP_TX_D0N | MIPI DSI1/eDPDifferential | Differential |
| 86 | DSI_TX1_D0P/EDP_TX_D0P | MIPI DSI1/eDPDifferential | Differential |
| 87 | DSI_TX1_CLKN/EDP_TX_AUXN | MIPI DSI1/eDPDifferential | Differential |
| 88 | DSI_TX1_CLKP/EDP_TX_AUXP | MIPI DSI1/eDPDifferential | Differential |
| 89 | USB3_HOST1_SSTXP | USB3 HostDifferential | Differential |
| 90 | USB3_HOST1_SSTXN | USB3 HostDifferential | Differential |
| 91 | USB3_HOST1_SSRXP | USB3 HostDifferential | Differential |
| 92 | USB3_HOST1_SSRXN | USB3 HostDifferential | Differential |
| 93 | USB3_OTG0_SSTXP | USB3 OTGDifferential/control | Differential |
| 94 | USB3_OTG0_SSTXN | USB3 OTGDifferential/control | Differential |
| 95 | USB3_OTG0_SSRXP | USB3 OTGDifferential/control | Differential |
| 96 | USB3_OTG0_SSRXN | USB3 OTGDifferential/control | Differential |
| 97 | USB3_OTG0_DM | USB3 OTGDifferential/control | Differential |
| 98 | USB3_OTG0_DP | USB3 OTGDifferential/control | Differential |
| 99 | USB3_HOST1_DM | USB3 HostDifferential | Differential |
| 100 | USB3_HOST1_DP | USB3 HostDifferential | Differential |

## Pin Group 3

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 101 | USB3_OTG0_VBUSDET | USB3 OTG VBUSdetect/resistor divider | 5V |
| 102 | USB3_OTG0_ID | USB3 OTG ID/resistor selection | 1.8V/3.3V |
| 103 | SDMMC0_DET_L | SD card signals | 3.3V |
| 104 | SDMMC0_D3 | SD card signals | 3.3V |
| 105 | SDMMC0_D2 | SD card signals | 3.3V |
| 106 | SDMMC0_D1 | SD card signals | 3.3V |
| 107 | SDMMC0_D0 | SD card signals | 3.3V |
| 108 | SDMMC0_CMD/CAN0_TX_M1 | SD card signals | 3.3V |
| 109 | SDMMC0_CLK/CAN0_RX_M1 | SD card signals | 3.3V |
| 110 | EXT_EN | Expansion power enable / resistor selection | 3.3V |
| 111 | GND | Ground | 0V |
| 112 | GND | Ground | 0V |
| 113 | VCC3V3_SYS | 3.3Vinput (3A) | 3.3V |
| 114 | VCC3V3_SYS | 3.3Vinput (3A) | 3.3V |
| 115 | GPIO0_A7 | General-purpose GPIO | 3.3V |
| 116 | GPIO0_D4 | General-purpose GPIO | 1.8V |
| 117 | HPR_OUT | Headphone right | Analog |
| 118 | HPL_OUT | Headphone left | Analog |
| 119 | MIC1_INP | MIC1positive input | Analog |
| 120 | MIC1_INN | MIC1negative input | Analog |
| 121 | SPKP_OUT | Speaker positive | Analog |
| 122 | SPKN_OUT | Speaker negative | Analog |
| 123 | GPIO0_C3 | General-purpose GPIO | 3.3V |
| 124 | SARADC_VIN0_KEY/RECOVERY | SARADCkey/recovery mode/resistor divider | 1.8V |
| 125 | SARADC_VIN1 | SARADCchannel 2/resistor divider | 1.8V |
| 126 | RK809_PWRON | PMICPower key | 1.8V |
| 127 | VCC_RTC | 3.0Voutput | 3.0V |
| 128 | GMAC0_RXCLK | Gigabit Ethernet signals | 1.8V |
| 129 | GMAC0_RXD0 | Gigabit Ethernet signals | 1.8V |
| 130 | GMAC0_RXD1 | Gigabit Ethernet signals | 1.8V |
| 131 | GMAC0_RXD2 | Gigabit Ethernet signals | 1.8V |
| 132 | GMAC0_RXD3 | Gigabit Ethernet signals | 1.8V |
| 133 | GMAC0_RXDV_CRS | Gigabit Ethernet signals | 1.8V |
| 134 | GMAC0_TXEN | Gigabit Ethernet signals | 1.8V |
| 135 | GMAC0_TXD0 | Gigabit Ethernet signals | 1.8V |
| 136 | GMAC0_TXD1 | Gigabit Ethernet signals | 1.8V |
| 137 | GMAC0_TXD2 | Gigabit Ethernet signals | 1.8V |
| 138 | GMAC0_TXD3 | Gigabit Ethernet signals | 1.8V |
| 139 | GMAC0_TXCLK | Gigabit Ethernet signals | 1.8V |
| 140 | UART8_RX_M0 | UARTsignals | 1.8V |
| 141 | UART8_TX_M0 | UARTsignals | 1.8V |
| 142 | UART8_RTSn_M0 | UARTsignals | 1.8V |
| 143 | UART8_CTSn_M0 | UARTsignals | 1.8V |
| 144 | GMAC0_MDC | Gigabit Ethernet signals | 1.8V |
| 145 | GMAC0_MCLKINOUT | Gigabit Ethernet signals | 1.8V |
| 146 | GMAC0_MDIO | Gigabit Ethernet signals | 1.8V |
| 147 | ETH0_REFCLKO_25M | Ethernetreference clock | 1.8V |
| 148 | I2C3_SCL_M0 | I2Csignals | 3.3V |
| 149 | I2C3_SDA_M0 | I2Csignals | 3.3V |
| 150 | GPIO0_C1 | General-purpose GPIO | 3.3V |

## Pin Group 4

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 151 | GPIO0_A5 | General-purpose GPIO | 3.3V |
| 152 | GPIO0_A6 | General-purpose GPIO | 3.3V |
| 153 | GPIO4_C6 | General-purpose GPIO | 3.3V |
| 154 | GPIO4_C5 | General-purpose GPIO | 3.3V |
| 155 | GPIO4_C4 | General-purpose GPIO | 3.3V |
| 156 | GPIO4_C3 | General-purpose GPIO | 3.3V |
| 157 | GPIO4_C2 | General-purpose GPIO | 3.3V |
| 158 | GMAC1_INT/PMEB_GPIO2_D0 | Gigabit Ethernet signals | 3.3V |
| 159 | GMAC1_RSTn_GPIO2_D1 | Gigabit Ethernet signals | 3.3V |
| 160 | GMAC0_INT/PMEB_GPIO2_D2 | Gigabit Ethernet signals | 3.3V |
| 161 | GMAC0_RSTn_GPIO2_D3 | Gigabit Ethernet signals | 3.3V |
| 162 | UART3_TX_M1 | UARTsignals | 3.3V |
| 163 | UART3_RX_M1 | UARTsignals | 3.3V |
| 164 | SPDIF_TX_M1 | Audiosignals | 3.3V |
| 165 | GPIO3_D5 | General-purpose GPIO | 1.8V |
| 166 | GPIO3_D4 | General-purpose GPIO | 1.8V |
| 167 | GPIO3_D3 | General-purpose GPIO | 1.8V |
| 168 | GPIO3_D2 | General-purpose GPIO | 1.8V |
| 169 | GPIO3_D1 | General-purpose GPIO | 1.8V |
| 170 | GPIO3_D0 | General-purpose GPIO | 1.8V |
| 171 | GPIO3_C7 | General-purpose GPIO | 1.8V |
| 172 | GPIO3_C6 | General-purpose GPIO | 1.8V |
| 173 | GPIO3_C4 | General-purpose GPIO | 3.3V |
| 174 | GPIO3_C3 | General-purpose GPIO | 3.3V |
| 175 | HP_DET_L_GPIO3_C2 | Headphone detect | 3.3V |
| 176 | GSENSOR_INT_L_GPIO3_C1 | Accelerometer interrupt | 3.3V |
| 177 | HOST_WAKE_BT_H_GPIO3_A2 | Host wakes Bluetooth | 3.3V |
| 178 | BT_WAKE_HOST_H_GPIO3_A1 | Bluetooth wakes host | 3.3V |
| 179 | BT_REG_ON_H_GPIO3_A0 | Bluetooth enable | 3.3V |
| 180 | GPIO3_B6 | General-purpose GPIO | 3.3V |
| 181 | GPIO3_B5 | General-purpose GPIO | 3.3V |
| 182 | UART4_RX_M1 | UARTsignals | 3.3V |
| 183 | UART4_TX_M1 | UARTsignals | 3.3V |
| 184 | I2S3_SDI_M0 | Audiosignals | 3.3V |
| 185 | I2S3_LRCK_M0 | Audiosignals | 3.3V |
| 186 | I2S3_SCLK_M0 | Audiosignals | 3.3V |
| 187 | I2S3_SDO_M0 | Audiosignals | 3.3V |
| 188 | GPIO4_B7 | General-purpose GPIO | 1.8V |
| 189 | GPIO4_B5 | General-purpose GPIO | 1.8V |
| 190 | GPIO4_B6 | General-purpose GPIO | 1.8V |
| 191 | GPIO4_C0 | General-purpose GPIO | 1.8V |
| 192 | GPIO4_C1 | General-purpose GPIO | 1.8V |
| 193 | GPIO4_B4 | General-purpose GPIO | 1.8V |
| 194 | GPIO4_B3 | General-purpose GPIO | 1.8V |
| 195 | GPIO4_A3 | General-purpose GPIO | 1.8V |
| 196 | GPIO4_A2 | General-purpose GPIO | 1.8V |
| 197 | GPIO4_A1 | General-purpose GPIO | 1.8V |
| 198 | GPIO4_B0 | General-purpose GPIO | 1.8V |
| 199 | GPIO4_A7 | General-purpose GPIO | 1.8V |
| 200 | GPIO4_B1 | General-purpose GPIO | 1.8V |
