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
| 1 | TP_INT_L | Touch interrupt | 1.8V |
| 2 | LCD_BL_PWM | BacklightPWM | 1.8V |
| 3 | PMIC_32KOUT_WIFI | WiFi 32.768kHzclock | 1.8V |
| 4 | PMIC_RESET_KEY | PMICReset key | 1.8V |
| 5 | SNSN | Battery current sensing (connected to VCC_BAT- through 10 mΩ) | Battery sensing |
| 6 | VCC_BAT- | Battery negative | 0V |
| 7 | VCC_BAT+ | Single-cell battery positive input | 3.7–4.2V |
| 8 | VBUS | 5Voutput | 5V |
| 9 | TS | Battery temperature sense | 1.8V |
| 10 | PMIC_PWRON | Power key | 1.8V |
| 11 | VCC_SYS | 4Vinput | 4V |
| 12 | GND | Ground | 0V |
| 13 | GND | Ground | 0V |
| 14 | GND | Ground | 0V |
| 15 | HPR_OUT | Headphone right | Analog |
| 16 | HPL_OUT | Headphone left | Analog |
| 17 | HP_SNS | Headphone detect | 1.8V |
| 18 | SPKP_OUT | Speaker positive | Analog |
| 19 | SPKN_OUT | Speaker negative | Analog |
| 20 | VCC5V_MIDU | 5Voutput | 5V |
| 21 | MIC2_IN | MIC2input | Analog |
| 22 | MIC1_IN | MIC1input | Analog |
| 23 | EDP_TX_D3N | eDPDifferentialsignals | Differential |
| 24 | EDP_TX_D3P | eDPDifferentialsignals | Differential |
| 25 | EDP_TX_D2N | eDPDifferentialsignals | Differential |
| 26 | EDP_TX_D2P | eDPDifferentialsignals | Differential |
| 27 | EDP_TX_D1N | eDPDifferentialsignals | Differential |
| 28 | EDP_TX_D1P | eDPDifferentialsignals | Differential |
| 29 | EDP_TX_D0N | eDPDifferentialsignals | Differential |
| 30 | EDP_TX_D0P | eDPDifferentialsignals | Differential |
| 31 | EDP_TX_AUXN | eDPDifferentialsignals | Differential |
| 32 | EDP_TX_AUXP | eDPDifferentialsignals | Differential |
| 33 | WIFI_WAKE_HOST_H | WiFiwake host | 1.8V |
| 34 | HOST_WAKE_BT_H | Host wakes Bluetooth | 1.8V |
| 35 | BT_WAKE_HOST_H | Bluetooth wakes host | 1.8V |
| 36 | WIFI_REG_ON_H | WiFienable | 1.8V |
| 37 | BT_REG_ON_H | Bluetooth enable | 1.8V |
| 38 | GPIO0_A5 | General-purpose GPIO | 3.3V |
| 39 | GPIO0_C2 | General-purpose GPIO | 1.8V |
| 40 | GPIO0_A6 | General-purpose GPIO | 3.3V |
| 41 | GPIO0_A0 | General-purpose GPIO | 3.3V |
| 42 | SDMMC0_DET_L | SD card signals | 3.3V |
| 43 | SDMMC0_CMD | SD card signals | 3.3V/1.8V |
| 44 | SDMMC0_D3 | SD card signals | 3.3V/1.8V |
| 45 | SDMMC0_D2 | SD card signals | 3.3V/1.8V |
| 46 | SDMMC0_D1 | SD card signals | 3.3V/1.8V |
| 47 | SDMMC0_D0 | SD card signals | 3.3V/1.8V |
| 48 | SDMMC0_CLK | SD card signals | 3.3V/1.8V |
| 49 | UART1_CTSn_M0 | UARTsignals | 1.8V |
| 50 | UART1_RTSn_M0 | UARTsignals | 1.8V |

## Pin Group 2

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 51 | UART1_TX_M0 | UARTsignals | 1.8V |
| 52 | UART1_RX_M0 | UARTsignals | 1.8V |
| 53 | I2S2_SCLK_TX_M0 | I2SAudiosignals | 1.8V |
| 54 | I2S2_SDI_M0 | I2SAudiosignals | 1.8V |
| 55 | I2S2_LRCK_TX_M0 | I2SAudiosignals | 1.8V |
| 56 | I2S2_SDO_M0 | I2SAudiosignals | 1.8V |
| 57 | SDMMC1_CLK | SDIOsignals | 1.8V |
| 58 | SDMMC1_CMD | SDIOsignals | 1.8V |
| 59 | SDMMC1_D0 | SDIOsignals | 1.8V |
| 60 | SDMMC1_D1 | SDIOsignals | 1.8V |
| 61 | SDMMC1_D2 | SDIOsignals | 1.8V |
| 62 | SDMMC1_D3 | SDIOsignals | 1.8V |
| 63 | GPIO2_C1 | General-purpose GPIO | 1.8V |
| 64 | GPIO2_C0 | General-purpose GPIO | 1.8V |
| 65 | GPIO2_B7 | General-purpose GPIO | 1.8V |
| 66 | GPIO2_B2 | General-purpose GPIO | 1.8V |
| 67 | GPIO2_B1 | General-purpose GPIO | 1.8V |
| 68 | GPIO2_C6 | General-purpose GPIO | 1.8V |
| 69 | ADC0 | ADCinput | 1.8V |
| 70 | ADC1 | ADCinput | 1.8V |
| 71 | GPIO1_B2 | General-purpose GPIO | 3.3V |
| 72 | GPIO1_B1 | General-purpose GPIO | 3.3V |
| 73 | GPIO1_B0 | General-purpose GPIO | 3.3V |
| 74 | GPIO1_D0 | General-purpose GPIO | 3.3V |
| 75 | GPIO1_A4 | General-purpose GPIO | 3.3V |
| 76 | UART3_RX_M0 | UARTsignals | 3.3V |
| 77 | UART3_TX_M0 | UARTsignals | 3.3V |
| 78 | MIPI_MCLK_B | MIPICamera master clock | 1.8V |
| 79 | CIF_8BIT_CLKIN | CIFinput clock | 1.8V |
| 80 | CIF_CLKOUT | CIFoutput clock | 1.8V |
| 81 | CIF_8BIT_VSYNC | CIFvertical sync | 1.8V |
| 82 | CIF_8BIT_HREF | CIFhorizontal sync | 1.8V |
| 83 | CAMERAF_RST_GPIO4_B0 | Front camera reset | 1.8V |
| 84 | CAMERAB_RST_GPIO4_B1 | Rear camera reset | 1.8V |
| 85 | CIF_8BIT_D7 | CIFCamerasignals | 1.8V |
| 86 | CIF_8BIT_D6 | CIFCamerasignals | 1.8V |
| 87 | CIF_8BIT_D5 | CIFCamerasignals | 1.8V |
| 88 | CIF_8BIT_D4 | CIFCamerasignals | 1.8V |
| 89 | CIF_8BIT_D3 | CIFCamerasignals | 1.8V |
| 90 | CIF_8BIT_D2 | CIFCamerasignals | 1.8V |
| 91 | CIF_8BIT_D1 | CIFCamerasignals | 1.8V |
| 92 | CIF_8BIT_D0 | CIFCamerasignals | 1.8V |
| 93 | CAMERAF2_PDN_GPIO3_C7 | Front camera 2 power-down | 1.8V |
| 94 | CAMERAF_PDN_GPIO3_C6 | Front camera power-down | 1.8V |
| 95 | GSENSOR_INT_GPIO3_D3 | Accelerometer interrupt | 1.8V |
| 96 | CAMERAB_PDN_GPIO3_D0 | Rear camera power-down | 1.8V |
| 97 | GPIO3_D4 | General-purpose GPIO | 1.8V |
| 98 | GPIO3_D5 | General-purpose GPIO | 1.8V |
| 99 | I2C4_SCL_M0_TP | Touch I2Cclock | 1.8V |
| 100 | I2C4_SDA_M0_TP | Touch I2Cdata | 1.8V |

## Pin Group 3

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 101 | I2C2_SCL_M1 | I2Csignals | 1.8V |
| 102 | I2C2_SDA_M1 | I2Csignals | 1.8V |
| 103 | GPIO3_D1 | General-purpose GPIO | 1.8V |
| 104 | GPIO4_A6 | General-purpose GPIO | 1.8V |
| 105 | UART9_RX_M1 | UARTsignals | 3.3V |
| 106 | UART9_TX_M1 | UARTsignals | 3.3V |
| 107 | GPIO3_A1 | General-purpose GPIO | 3.3V |
| 108 | GPIO3_C1 | General-purpose GPIO | 3.3V |
| 109 | GPIO4_C4 | General-purpose GPIO | 3.3V |
| 110 | HDMITX_CEC_M0 | HDMI CEC | 3.3V |
| 111 | HDMITX_SDA | HDMI DDCdata | 3.3V |
| 112 | HDMITX_SCL | HDMI DDCclock | 3.3V |
| 113 | UART5_TX_M1 | UARTsignals | 3.3V |
| 114 | UART5_RX_M1 | UARTsignals | 3.3V |
| 115 | USB2_HOST2_DM | USB2 HostDifferentialsignals | Differential |
| 116 | USB2_HOST2_DP | USB2 HostDifferentialsignals | Differential |
| 117 | USB2_HOST3_DM | USB2 HostDifferentialsignals | Differential |
| 118 | USB2_HOST3_DP | USB2 HostDifferentialsignals | Differential |
| 119 | GMAC1_MCLKINOUT_M0 | Gigabit Ethernet signals | 3.3V |
| 120 | GMAC1_INT/PMEB | Ethernet interrupt | 3.3V |
| 121 | GMAC1_RSTn | Ethernet reset | 3.3V |
| 122 | GMAC1_MDIO_M0 | Gigabit Ethernet signals | 3.3V |
| 123 | GMAC1_MDC_M0 | Gigabit Ethernet signals | 3.3V |
| 124 | GMAC1_RXCLK_M0 | Gigabit Ethernet signals | 3.3V |
| 125 | GMAC1_RXDV_CRS_M0 | Gigabit Ethernet signals | 3.3V |
| 126 | GMAC1_RXD0_M0 | Gigabit Ethernet signals | 3.3V |
| 127 | GMAC1_RXD1_M0 | Gigabit Ethernet signals | 3.3V |
| 128 | GMAC1_RXD2_M0 | Gigabit Ethernet signals | 3.3V |
| 129 | GMAC1_RXD3_M0 | Gigabit Ethernet signals | 3.3V |
| 130 | ETH1_REFCLKO_25M_M0 | Ethernet 25 MHz reference clock | 3.3V |
| 131 | GMAC1_TXEN_M0 | Gigabit Ethernet signals | 3.3V |
| 132 | GMAC1_TXD0_M0 | Gigabit Ethernet signals | 3.3V |
| 133 | GMAC1_TXD1_M0 | Gigabit Ethernet signals | 3.3V |
| 134 | GMAC1_TXD2_M0 | Gigabit Ethernet signals | 3.3V |
| 135 | GMAC1_TXD3_M0 | Gigabit Ethernet signals | 3.3V |
| 136 | GMAC1_TXCLK_M0 | Gigabit Ethernet signals | 3.3V |
| 137 | MIPI_CSI_RX_D3N | MIPI CSIDifferentialsignals | Differential |
| 138 | MIPI_CSI_RX_D3P | MIPI CSIDifferentialsignals | Differential |
| 139 | MIPI_CSI_RX_D2N | MIPI CSIDifferentialsignals | Differential |
| 140 | MIPI_CSI_RX_D2P | MIPI CSIDifferentialsignals | Differential |
| 141 | MIPI_CSI_RX_D1N | MIPI CSIDifferentialsignals | Differential |
| 142 | MIPI_CSI_RX_D1P | MIPI CSIDifferentialsignals | Differential |
| 143 | MIPI_CSI_RX_D0N | MIPI CSIDifferentialsignals | Differential |
| 144 | MIPI_CSI_RX_D0P | MIPI CSIDifferentialsignals | Differential |
| 145 | MIPI_CSI_RX_CLK1P | MIPI CSIDifferentialsignals | Differential |
| 146 | MIPI_CSI_RX_CLK1N | MIPI CSIDifferentialsignals | Differential |
| 147 | MIPI_CSI_RX_CLK0P | MIPI CSIDifferentialsignals | Differential |
| 148 | MIPI_CSI_RX_CLK0N | MIPI CSIDifferentialsignals | Differential |
| 149 | MIPI_DSI_TX1_D3N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 150 | MIPI_DSI_TX1_D3P | MIPI DSI/LVDSDifferentialsignals | Differential |

## Pin Group 4

| Pin | Signal | Function | Voltage |
| --- | --- | --- | --- |
| 151 | MIPI_DSI_TX1_D2N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 152 | MIPI_DSI_TX1_D2P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 153 | MIPI_DSI_TX1_D1N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 154 | MIPI_DSI_TX1_D1P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 155 | MIPI_DSI_TX1_D0N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 156 | MIPI_DSI_TX1_D0P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 157 | MIPI_DSI_TX1_CLKP | MIPI DSI/LVDSDifferentialsignals | Differential |
| 158 | MIPI_DSI_TX1_CLKN | MIPI DSI/LVDSDifferentialsignals | Differential |
| 159 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | MIPI DSI/LVDSDifferentialsignals | Differential |
| 160 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | MIPI DSI/LVDSDifferentialsignals | Differential |
| 161 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 162 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 163 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 164 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 165 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 166 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 167 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | MIPI DSI/LVDSDifferentialsignals | Differential |
| 168 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | MIPI DSI/LVDSDifferentialsignals | Differential |
| 169 | HDMI_TX_HPDIN | HDMIhot-plug detect | 3.3V |
| 170 | HDMI_TXCLKN_PORT | HDMI TMDSDifferentialsignals | Differential |
| 171 | HDMI_TXCLKP_PORT | HDMI TMDSDifferentialsignals | Differential |
| 172 | HDMI_TX0N_PORT | HDMI TMDSDifferentialsignals | Differential |
| 173 | HDMI_TX0P_PORT | HDMI TMDSDifferentialsignals | Differential |
| 174 | HDMI_TX1N_PORT | HDMI TMDSDifferentialsignals | Differential |
| 175 | HDMI_TX1P_PORT | HDMI TMDSDifferentialsignals | Differential |
| 176 | HDMI_TX2N_PORT | HDMI TMDSDifferentialsignals | Differential |
| 177 | HDMI_TX2P_PORT | HDMI TMDSDifferentialsignals | Differential |
| 178 | PCIE20_REFCLKP | PCIeDifferentialsignals | Differential |
| 179 | PCIE20_REFCLKN | PCIeDifferentialsignals | Differential |
| 180 | PCIE20_RXP | PCIeDifferentialsignals | Differential |
| 181 | PCIE20_RXN | PCIeDifferentialsignals | Differential |
| 182 | PCIE20_TXN | PCIeDifferentialsignals | Differential |
| 183 | PCIE20_TXP | PCIeDifferentialsignals | Differential |
| 184 | USB3_HOST1_SSTXP | USB3Differentialsignals | Differential |
| 185 | USB3_HOST1_SSTXN | USB3Differentialsignals | Differential |
| 186 | USB3_HOST1_SSRXP | USB3Differentialsignals | Differential |
| 187 | USB3_HOST1_SSRXN | USB3Differentialsignals | Differential |
| 188 | USB3_HOST1_DP | USB3Differentialsignals | Differential |
| 189 | USB3_HOST1_DM | USB3Differentialsignals | Differential |
| 190 | USB_OTG0_DM | USB2 OTGsignals | Differential |
| 191 | USB_OTG0_DP | USB2 OTGsignals | Differential |
| 192 | USB_OTG0_VBUSDET | USB VBUSdetect | 5V |
| 193 | USB_OTG0_ID | USB OTG ID | 1.8V/3.3V |
| 194 | TP_RST_L | Touch reset | 1.8V |
| 195 | RTC_INT | RTCinterrupt | 1.8V |
| 196 | PWM_IR7 | InfraredPWM | 1.8V |
| 197 | UART2_TX_M0_DEBUG | UARTsignals | 1.8V |
| 198 | UART2_RX_M0_DEBUG | UARTsignals | 1.8V |
| 199 | LCD_PWREN_H | LCDpower enable | 1.8V |
| 200 | LCD_RST_L | LCDreset | 1.8V |
