---
sidebar_position: 3
title: Hardware Design and Interfaces
description: Hardware Design and Interfaces
---

# Hardware Design and Interfaces

## Power Supply

VCC_SYS is a 4 V input on pin 11. VBUS (pin 8) and VCC5V_MIDU (pin 20) are 5 V outputs. VCC_BAT+ (pin 7) accepts a single-cell 3.7–4.2 V battery; VCC_BAT- is pin 6. SNSN has no 10 mΩ current-sense resistor fitted. Ground pins 12–14 must connect to the carrier-board ground.

The onboard PMIC supplies internal power rails. Design carrier-board peripheral supplies to avoid interference. Power traces should be at least 2 mm wide with at least five vias when changing layers.

## Debug Interface

UART2 TX/RX use pins 197/198; PMIC_RESET_KEY is pin 4. The debug UART uses 3.3 V levels and defaults to 115200 baud, 8 data bits, no parity, and 1 stop bit.

## GPIO and Pin Multiplexing

GPIO pins can provide alternate functions such as I2C, UART, SPI, I2S, and PWM. Match peripheral IO levels to the board power domains.

## Interface Connections and Power Sequencing

| Power domain | GPIO supply voltage | X3566CV3 board IO levels |
| --- | --- | --- |
| VCC3V3_SYS | 3.3V | 3.3V |
| VCC1V8_SYS | 1.8V | 1.8V |
| VCC_SD | 3.3V/1.8V | 3.3V/1.8V |
| VCC_1V8 | 1.8V | 1.8V |
| VCC_3V3 | 3.3V | 3.3V |
| VCC_IO | 1.8V/3.3V | Configuration dependent |

| No. | signals | Description |
| --- | --- | --- |
| 1 | VCC_SYS | 4V/3A inputestablished |
| 2 | PMIC_PWRON | Active-low power-on |
| 3 | System reset | Release after power stabilizes |
| 4 | MASKROM | Enter for flashing |
| 5 | System startup | UART2 outputboot logs |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| eDP D3N | 23 | EDP_TX_D3N | Differential |
| eDP D3P | 24 | EDP_TX_D3P | Differential |
| eDP D2N | 25 | EDP_TX_D2N | Differential |
| eDP D2P | 26 | EDP_TX_D2P | Differential |
| eDP D1N | 27 | EDP_TX_D1N | Differential |
| eDP D1P | 28 | EDP_TX_D1P | Differential |
| eDP D0N | 29 | EDP_TX_D0N | Differential |
| eDP D0P | 30 | EDP_TX_D0P | Differential |
| eDP AUXN | 31 | EDP_TX_AUXN | Differential |
| eDP AUXP | 32 | EDP_TX_AUXP | Differential |
| MIPI DSI1 D3N | 149 | MIPI_DSI_TX1_D3N | Differential |
| MIPI DSI1 D3P | 150 | MIPI_DSI_TX1_D3P | Differential |
| MIPI DSI1 D2N | 151 | MIPI_DSI_TX1_D2N | Differential |
| MIPI DSI1 D2P | 152 | MIPI_DSI_TX1_D2P | Differential |
| MIPI DSI1 D1N | 153 | MIPI_DSI_TX1_D1N | Differential |
| MIPI DSI1 D1P | 154 | MIPI_DSI_TX1_D1P | Differential |
| MIPI DSI1 D0N | 155 | MIPI_DSI_TX1_D0N | Differential |
| MIPI DSI1 D0P | 156 | MIPI_DSI_TX1_D0P | Differential |
| MIPI DSI1 CLKP | 157 | MIPI_DSI_TX1_CLKP | Differential |
| MIPI DSI1 CLKN | 158 | MIPI_DSI_TX1_CLKN | Differential |
| DSI0/LVDS CLKP | 159 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | Differential |
| DSI0/LVDS CLKN | 160 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | Differential |
| DSI0/LVDS D3N | 161 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | Differential |
| DSI0/LVDS D3P | 162 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | Differential |
| DSI0/LVDS D2N | 163 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | Differential |
| DSI0/LVDS D2P | 164 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | Differential |
| DSI0/LVDS D1N | 165 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | Differential |
| DSI0/LVDS D1P | 166 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | Differential |
| DSI0/LVDS D0N | 167 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | Differential |
| DSI0/LVDS D0P | 168 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | Differential |
| HDMI HPD | 169 | HDMI_TX_HPDIN | 3.3V |
| HDMI CLKN | 170 | HDMI_TXCLKN_PORT | Differential |
| HDMI CLKP | 171 | HDMI_TXCLKP_PORT | Differential |
| HDMI D0N | 172 | HDMI_TX0N_PORT | Differential |
| HDMI D0P | 173 | HDMI_TX0P_PORT | Differential |
| HDMI D1N | 174 | HDMI_TX1N_PORT | Differential |
| HDMI D1P | 175 | HDMI_TX1P_PORT | Differential |
| HDMI D2N | 176 | HDMI_TX2N_PORT | Differential |
| HDMI D2P | 177 | HDMI_TX2P_PORT | Differential |
| BacklightPWM | 2 | LCD_BL_PWM | 1.8V |
| HDMI CEC | 110 | HDMITX_CEC_M0 | 3.3V |
| HDMI DDC SDA | 111 | HDMITX_SDA | 3.3V |
| HDMI DDC SCL | 112 | HDMITX_SCL | 3.3V |
| Touch reset | 194 | TP_RST_L | 1.8V |
| LCDpower enable | 199 | LCD_PWREN_H | 1.8V |
| LCDreset | 200 | LCD_RST_L | 1.8V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| MIPI MCLK | 78 | MIPI_MCLK_B | 1.8V |
| CIF CLKIN | 79 | CIF_8BIT_CLKIN | 1.8V |
| CIF CLKOUT | 80 | CIF_CLKOUT | 1.8V |
| CIF VSYNC | 81 | CIF_8BIT_VSYNC | 1.8V |
| CIF HREF | 82 | CIF_8BIT_HREF | 1.8V |
| Front camera reset | 83 | CAMERAF_RST_GPIO4_B0 | 1.8V |
| Rear camera reset | 84 | CAMERAB_RST_GPIO4_B1 | 1.8V |
| CIF D7 | 85 | CIF_8BIT_D7 | 1.8V |
| CIF D6 | 86 | CIF_8BIT_D6 | 1.8V |
| CIF D5 | 87 | CIF_8BIT_D5 | 1.8V |
| CIF D4 | 88 | CIF_8BIT_D4 | 1.8V |
| CIF D3 | 89 | CIF_8BIT_D3 | 1.8V |
| CIF D2 | 90 | CIF_8BIT_D2 | 1.8V |
| CIF D1 | 91 | CIF_8BIT_D1 | 1.8V |
| CIF D0 | 92 | CIF_8BIT_D0 | 1.8V |
| Front camera 2 power-down | 93 | CAMERAF2_PDN_GPIO3_C7 | 1.8V |
| Front camera power-down | 94 | CAMERAF_PDN_GPIO3_C6 | 1.8V |
| Accelerometer interrupt | 95 | GSENSOR_INT_GPIO3_D3 | 1.8V |
| Rear camera power-down | 96 | CAMERAB_PDN_GPIO3_D0 | 1.8V |
| MIPI CSI D3N | 137 | MIPI_CSI_RX_D3N | Differential |
| MIPI CSI D3P | 138 | MIPI_CSI_RX_D3P | Differential |
| MIPI CSI D2N | 139 | MIPI_CSI_RX_D2N | Differential |
| MIPI CSI D2P | 140 | MIPI_CSI_RX_D2P | Differential |
| MIPI CSI D1N | 141 | MIPI_CSI_RX_D1N | Differential |
| MIPI CSI D1P | 142 | MIPI_CSI_RX_D1P | Differential |
| MIPI CSI D0N | 143 | MIPI_CSI_RX_D0N | Differential |
| MIPI CSI D0P | 144 | MIPI_CSI_RX_D0P | Differential |
| MIPI CSI CLK1P | 145 | MIPI_CSI_RX_CLK1P | Differential |
| MIPI CSI CLK1N | 146 | MIPI_CSI_RX_CLK1N | Differential |
| MIPI CSI CLK0P | 147 | MIPI_CSI_RX_CLK0P | Differential |
| MIPI CSI CLK0N | 148 | MIPI_CSI_RX_CLK0N | Differential |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| USB VBUSoutput | 8 | VBUS | 5V |
| USB2 HostDifferentialsignals | 115 | USB2_HOST2_DM | 3.3VDifferential |
| USB2 HostDifferentialsignals | 116 | USB2_HOST2_DP | 3.3VDifferential |
| USB2 HostDifferentialsignals | 117 | USB2_HOST3_DM | 3.3VDifferential |
| USB2 HostDifferentialsignals | 118 | USB2_HOST3_DP | 3.3VDifferential |
| USB3Differentialsignals | 184 | USB3_HOST1_SSTXP | Differential |
| USB3Differentialsignals | 185 | USB3_HOST1_SSTXN | Differential |
| USB3Differentialsignals | 186 | USB3_HOST1_SSRXP | Differential |
| USB3Differentialsignals | 187 | USB3_HOST1_SSRXN | Differential |
| USB3Differentialsignals | 188 | USB3_HOST1_DP | Differential |
| USB3Differentialsignals | 189 | USB3_HOST1_DM | Differential |
| USB2 OTGsignals | 190 | USB_OTG0_DM | 3.3V/Differential |
| USB2 OTGsignals | 191 | USB_OTG0_DP | 3.3V/Differential |
| USB VBUSdetect | 192 | USB_OTG0_VBUSDET | 5V |
| USB OTG ID | 193 | USB_OTG0_ID | 1.8V/3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Gigabit Ethernet signals | 119 | GMAC1_MCLKINOUT_M0 | 3.3V |
| Ethernet interrupt | 120 | GMAC1_INT/PMEB | 3.3V |
| Ethernet reset | 121 | GMAC1_RSTn | 3.3V |
| Gigabit Ethernet signals | 122 | GMAC1_MDIO_M0 | 3.3V |
| Gigabit Ethernet signals | 123 | GMAC1_MDC_M0 | 3.3V |
| Gigabit Ethernet signals | 124 | GMAC1_RXCLK_M0 | 3.3V |
| Gigabit Ethernet signals | 125 | GMAC1_RXDV_CRS_M0 | 3.3V |
| Gigabit Ethernet signals | 126 | GMAC1_RXD0_M0 | 3.3V |
| Gigabit Ethernet signals | 127 | GMAC1_RXD1_M0 | 3.3V |
| Gigabit Ethernet signals | 128 | GMAC1_RXD2_M0 | 3.3V |
| Gigabit Ethernet signals | 129 | GMAC1_RXD3_M0 | 3.3V |
| Ethernet 25 MHz reference clock | 130 | ETH1_REFCLKO_25M_M0 | 3.3V |
| Gigabit Ethernet signals | 131 | GMAC1_TXEN_M0 | 3.3V |
| Gigabit Ethernet signals | 132 | GMAC1_TXD0_M0 | 3.3V |
| Gigabit Ethernet signals | 133 | GMAC1_TXD1_M0 | 3.3V |
| Gigabit Ethernet signals | 134 | GMAC1_TXD2_M0 | 3.3V |
| Gigabit Ethernet signals | 135 | GMAC1_TXD3_M0 | 3.3V |
| Gigabit Ethernet signals | 136 | GMAC1_TXCLK_M0 | 3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Headphone right | 15 | HPR_OUT | Analog |
| Headphone left | 16 | HPL_OUT | Analog |
| Headphone detect | 17 | HP_SNS | 1.8V |
| Speaker positive | 18 | SPKP_OUT | Analog |
| Speaker negative | 19 | SPKN_OUT | Analog |
| 5 V intermediate power rail | 20 | VCC5V_MIDU | 5V |
| MIC2input | 21 | MIC2_IN | Analog |
| MIC1input | 22 | MIC1_IN | Analog |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| SD card signals | 42 | SDMMC0_DET_L | 3.3V |
| SD card signals | 43 | SDMMC0_CMD | 3.3V/1.8V |
| SD card signals | 44 | SDMMC0_D3 | 3.3V/1.8V |
| SD card signals | 45 | SDMMC0_D2 | 3.3V/1.8V |
| SD card signals | 46 | SDMMC0_D1 | 3.3V/1.8V |
| SD card signals | 47 | SDMMC0_D0 | 3.3V/1.8V |
| SD card signals | 48 | SDMMC0_CLK | 3.3V/1.8V |
| SDIOsignals | 57 | SDMMC1_CLK | 1.8V |
| SDIOsignals | 58 | SDMMC1_CMD | 1.8V |
| SDIOsignals | 59 | SDMMC1_D0 | 1.8V |
| SDIOsignals | 60 | SDMMC1_D1 | 1.8V |
| SDIOsignals | 61 | SDMMC1_D2 | 1.8V |
| SDIOsignals | 62 | SDMMC1_D3 | 1.8V |

| Resource | Count | Description |
| --- | --- | --- |
| UART | 5  channel(s)  | UART1 49–52; UART2 197/198; UART3 76/77; UART5 113/114; UART9 105/106 |
| I2C | 3  channel(s)  | I2C2 101/102; I2C4 99/100; HDMI DDC 111/112 |
| I2S | 1  channel(s)  | I2S2 53–56 |
| PWM | 2  channel(s)  | LCD_BL_PWM 2; PWM_IR7 196 |
| ADC | 2  channel(s)  | ADC0 69; ADC1 70 |
| SPI | Not separately exposed | Use GPIO or carrier-board expansion if required |
| GPIO | Multiple | GPIO0/1/2/3/4 multiplexing |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Touch interrupt | 1 | TP_INT_L | 1.8V |
| BacklightPWM | 2 | LCD_BL_PWM | 1.8V |
| WiFi 32.768kHzclock | 3 | PMIC_32KOUT_WIFI | 1.8V |
| PMICReset key | 4 | PMIC_RESET_KEY | 1.8V |
| Serial number / board identification | 5 | SNSN | Analog |
| Battery negative | 6 | VCC_BAT- | 0V |
| Battery positive | 7 | VCC_BAT+ | 3.7–4.2V |
| USB VBUSoutput | 8 | VBUS | 5V |
| Battery temperature sense | 9 | TS | 1.8V |
| Power key | 10 | PMIC_PWRON | 1.8V |
| System power input | 11 | VCC_SYS | 5V |
| Ground | 12 | GND | 0V |
| Ground | 13 | GND | 0V |
| Ground | 14 | GND | 0V |
| Touch reset | 194 | TP_RST_L | 1.8V |
| RTCinterrupt | 195 | RTC_INT | 1.8V |
| InfraredPWM | 196 | PWM_IR7 | 1.8V |
| UARTsignals | 197 | UART2_TX_M0_DEBUG | 1.8V |
| UARTsignals | 198 | UART2_RX_M0_DEBUG | 1.8V |
| LCDpower enable | 199 | LCD_PWREN_H | 1.8V |
| LCDreset | 200 | LCD_RST_L | 1.8V |

| Signal type | Target impedance | Notes |
| --- | --- | --- |
| USB2.0 | 90Ω | D+/D- |
| MIPI DSI/CSI | 100Ω | differential pair |
| LVDS | 100Ω | differential pair |
| RGMII | 100Ω | TX/RX |
| SDC0 | 50Ω | CLK/CMD/DATA |

| Configuration | Standard | Options |
| --- | --- | --- |
| Memory | 2GB LPDDR4 | 4GB/8GB |
| Storage | 8GB eMMC | 4/16/32/64GB |
| Core board | X3566CV3 | 200PIN |
| Operating system | Android/Linux | Project specific |

## PCB Layout

Keep high-speed differential pairs on the same layer where possible. Match lengths within each pair, maintain continuous reference planes, and avoid routing across plane splits. Add ground return vias near signal vias. Arrange connectors, ESD protection, and common-mode chokes along the signal path.

Provide TVS protection, fusing, and decoupling at the carrier-board power input. Size the 3.3 V and 1.8 V rails for their loads. Keep crystals and DC/DC inductors away from high-speed signals and antennas, and protect exposed interfaces against ESD. Retain debug UART access and test points.

## Technical Support

Provide the board model, carrier-board schematic page, issue description, and serial logs when contacting JDCZ technical support.
