---
title: Pin Definition
sidebar_position: 2
description: Complete X8390/X8370 200-pin signals, types, and multiplexing descriptions.
---

# Pin Definition

The X8390CV2 uses a 200-pin castellated/stamp-hole interface. Dedicated high-speed signals, power pins, and grounds cannot be used as normal GPIOs. Confirm all multiplexed functions against the current schematic, device tree, and MediaTek pin-multiplexing documentation.

## Core-Module Pin Definition 1

| Pin | Signal | Type | Description |
| ---: | --- | --- | --- |
| 1 | GND | System ground |  |
| 2 | HDMITX_SCL | HDMI I2C signal | GPIO53 |
| 3 | HDMITX_SDA | HDMI I2C signal | GPIO54 |
| 4 | HDMITX_HTPLG | HDMI signal | GPIO51 |
| 5 | HDMITX_CEC | HDMI signal | GPIO52 |
| 6 | DPTX_HPD | HDMI signal | GPIO46 |
| 7 | HDMITX_PWR5V | HDMI signal | GPIO50 |
| 8 | PCM_CLK | PCM interface signal | GPIO121 |
| 9 | PCM_SYNC | PCM interface signal | GPIO122 |
| 10 | PCM_DO | PCM interface signal | GPIO123 |
| 11 | PCM_DI | PCM interface signal | GPIO124 |
| 12 | MSDC2_DAT1 | SD/MMC interface signal | GPIO172 |
| 13 | MSDC2_DAT0 | SD/MMC interface signal | GPIO171 |
| 14 | MSDC2_CLK | SD/MMC interface signal | GPIO170 |
| 15 | MSDC2_CMD | SD/MMC interface signal | GPIO169 |
| 16 | MSDC2_DAT3 | SD/MMC interface signal | GPIO174 |
| 17 | MSDC2_DAT2 | SD/MMC interface signal | GPIO173 |
| 18 | GND | System ground |  |
| 19 | SSUSB_RXP | USB 3.0 interface signal | Not available as GPIO |
| 20 | SSUSB_RXN | USB 3.0 interface signal | Not available as GPIO |
| 21 | SSUSB_TXP | USB 3.0 interface signal | Not available as GPIO |
| 22 | SSUSB_TXN | USB 3.0 interface signal | Not available as GPIO |
| 23 | USB_DM_P0 | USB 2.0 interface signal | Not available as GPIO |
| 24 | USB_DP_P0 | USB 2.0 interface signal | Not available as GPIO |
| 25 | USB_DM_P1 | USB 2.0 interface signal | Not available as GPIO |
| 26 | USB_DP_P1 | USB 2.0 interface signal | Not available as GPIO |
| 27 | USB_DM_P2 | USB 2.0 interface signal | Not available as GPIO |
| 28 | USB_DP_P2 | USB 2.0 interface signal | Not available as GPIO |
| 29 | GND | System ground |  |
| 30 | GPIO_CTP1_RSTB | GPIO | GPIO14 |
| 31 | EINT_CTP1 | GPIO | GPIO13 |
| 32 | RT1715_INT | GPIO | GPIO12 |
| 33 | CAMERA_3V3_EN | Power-enable signal | USB2_VBUS_VALID |
| 34 | LCM2_EN | Power-enable signal | USB2_DRV_VBUS |
| 35 | USB1_VBUS_VALID | USB1_VBUS_VALID | USB1_VBUS_VALID |
| 36 | USB1_DRV_VBUS | USB1_DRV_VBUS | USB1_DRV_VBUS |
| 37 | USB0_VBUS_VALID | USB0_VBUS_VALID | USB0_VBUS_VALID |
| 38 | WIFI2_RESET_N | DMIC signal multiplexed with GPIO | DMIC1_DAT_R |
| 39 | DMIC2_DAT_1 | DMIC interface signal | DMIC2_DAT |
| 40 | DMIC1_DAT_1 | DMIC interface signal | DMIC1_DAT |
| 41 | DMIC2_CLK_1 | DMIC interface signal | DMIC2_CLK |
| 42 | DMIC1_CLK_1 | DMIC interface signal | DMIC1_CLK |
| 43 | USB0_IDDIG | USB0 ID signal | USB0_IDDIG |
| 44 | USB0_DRV_VBUS | USB0_DRV_VBUS | USB0_DRV_VBUS |
| 45 | KPCOL0 | Download-key ADC | KPCOL0 |
| 46 | I2SO2_D3 | I2S interface signal | I2SO2_D3 |
| 47 | I2SO2_D2 | I2S interface signal | I2SO2_D2 |
| 48 | SCL1 | I2C interface signal | GPIO57 multiplexed |
| 49 | SDA1 | I2C interface signal | GPIO58 multiplexed |
| 50 | SCL4 | I2C interface signal | GPIO63 multiplexed |

## Core-Module Pin Definition 2

| Pin | Signal | Type | Description |
| ---: | --- | --- | --- |
| 51 | SDA4 | I2C interface signal | GPIO64 multiplexed |
| 52 | RESET#_5G | I2S interface | I2SIN_D3 |
| 53 | HUB_3V3_EN | I2S interface | I2SIN_D2 |
| 54 | GND | System ground |  |
| 55 | MSDC1_DAT1 | SD/MMC interface signal | GPIO166 |
| 56 | MSDC1_DAT0 | SD/MMC interface signal | GPIO165 |
| 57 | MSDC1_DAT2 | SD/MMC interface signal | GPIO167 |
| 58 | MSDC1_DAT3 | SD/MMC interface signal | GPIO168 |
| 59 | MSDC1_CLK | SD/MMC interface signal | GPIO170 |
| 60 | MSDC1_CMD | SD/MMC interface signal | GPIO169 |
| 61 | GND | System ground |  |
| 62 | SCL5 | I2C interface signal | GPIO65 multiplexed |
| 63 | SDA5 | I2C interface signal | GPIO66 multiplexed |
| 64 | CMMPDN1 | Camera control signal | CMMPDN1 |
| 65 | CMMCLK0_LCM1_BL_EN | Camera control / LCD backlight signal | CMMCLK0/KPROW1 |
| 66 | CMMCLK1 | Camera control signal | CMMCLK1 |
| 67 | CMMRST1 | Camera control signal | CMMRST1 |
| 68 | CMMPDN0_DSI0_LCM_RST | Camera control / LCD reset signal | CMMPDN0/DSI0_LCM_RST |
| 69 | CMMRST0_LCM1_EN | Camera control signal | CMMRST0/I2SIN_D1 |
| 70 | CAM1_DVDD_EN | SPI interface signal | SPIM2_MISO |
| 71 | CAM1_AVDD28_EN | SPI interface signal | SPIM2_MOSI |
| 72 | CAM0_DVDD_EN | SPI interface signal | SPIM2_CSB |
| 73 | CAM0_AVDD28_EN | SPI interface signal | SPIM2_CLK |
| 74 | BAT_NTC | Battery temperature monitor | BATON |
| 75 | CS_N_1 | Battery current monitor | CS_N |
| 76 | CS_P_1 | Battery current monitor | CS_P |
| 77 | VIO18_PMU | 1.8V Power output |  |
| 78 | VBAT | Battery ADC monitor | BATADC_P |
| 79 | VCN33_1_PMU | DLDO 3.3V | Power output，800mA |
| 80 | VCN18_PMU | SLDO1 1.8V | Power output，1.2A |
| 81 | VIO28_PMU | DLDO 2.8V | Power output，200mA |
| 82 | HOMEKEY | Key signal | HOMEKEY |
| 83 | CHRDETB | CHRDETB |  |
| 84 | GND | System ground |  |
| 85 | HP_EINT | Detection signal | Headphone insertion detect |
| 86 | ACCDET | Detection signal | ACCDET |
| 87 | AU_LOLN | Audio output signal | Speaker output |
| 88 | AU_LOLP | Audio output signal | Speaker output |
| 89 | AU_HPR | Audio output signal | Headphone output |
| 90 | AU_HPL | Audio output signal | Headphone output |
| 91 | AU_REFN | Audio output signal | Headphone output |
| 92 | AVSS30_AUD |  |  |
| 93 | GND | System ground |  |
| 94 | AU_MICBIAS0 | Microphone bias voltage |  |
| 95 | AU_MICBIAS2 | Microphone bias voltage |  |
| 96 | AU_MICBIAS1 | Microphone bias voltage |  |
| 97 | AU_VIN0_P | Audio input signal | Not available as GPIO |
| 98 | AU_VIN0_N | Audio input signal | Not available as GPIO |
| 99 | AU_VIN1_P | Audio input signal | Not available as GPIO |
| 100 | AU_VIN1_N | Audio input signal | Not available as GPIO |

## Core-Module Pin Definition 3

| Pin | Signal | Type | Description |
| ---: | --- | --- | --- |
| 101 | VSYS | Core-module 5V input | Recommended current: 3A or higher |
| 102 | VSYS | Core-module 5V input | Ripple below 100mV |
| 103 | VSYS | Core-module 5V input |  |
| 104 | GND | System ground |  |
| 105 | GND | System ground |  |
| 106 | GND | System ground |  |
| 107 | PWRKEY | Power key |  |
| 108 | VPA_PMU | Power output |  |
| 109 | SYSRSTB | PMU enable signal |  |
| 110 | UART0_RXD | UART interface signal | UART0_RXD |
| 111 | UART0_TXD | UART interface signal | UART0_TXD |
| 112 | UART1_RXD | UART interface signal | UART1_RXD |
| 113 | UART1_TXD | UART interface signal | UART1_TXD |
| 114 | CSI1A_L0P_T0A | MIPI camera signal | Not available as GPIO |
| 115 | CSI1A_L0N_T0B | MIPI camera signal | Not available as GPIO |
| 116 | CSI1A_L1P_T0C | MIPI camera signal | Not available as GPIO |
| 117 | CSI1A_L1N_T1A | MIPI camera signal | Not available as GPIO |
| 118 | CSI1A_L2P_T1B | MIPI camera signal | Not available as GPIO |
| 119 | CSI1A_L2N_T1C | MIPI camera signal | Not available as GPIO |
| 120 | CSI1B_L0P_T0A | MIPI camera signal | Not available as GPIO |
| 121 | CSI1B_L0N_T0B | MIPI camera signal | Not available as GPIO |
| 122 | CSI1B_L1P_T0C | MIPI camera signal | Not available as GPIO |
| 123 | CSI1B_L1N_T1A | MIPI camera signal | Not available as GPIO |
| 124 | WIFI2_INT_B | SPI interface signal | SPIM0_CLK |
| 125 | SDIO_DS | SPI interface signal | SPIM1_CSB |
| 126 | HUB_RESET | GPIO | GPIO07 |
| 127 | GPIO_3V3_EN | GPIO | GPIO09 |
| 128 | 5V_EN | GPIO | GPIO10 |
| 129 | MASTER_CHG_INT# | SPI interface signal | SPIM1_MOSI |
| 130 | WAKE_ON_WAN# | SPI interface signal | SPIM1_MISO |
| 131 | WCN_3V3_EN | SPI interface signal | SPIM0_MIO3 |
| 132 | SLAVE_CHG_INT# | SPI interface signal | SPIM0_MIO2 |
| 133 | LCM2_BL_EN | SPI interface signal | SPIM0_MISO |
| 134 | POWER_ON_OFF_5G | SPI interface signal | SPIM0_MOSI |
| 135 | BT2_WO | SPI interface signal | SPIM0_CSB |
| 136 | EINT_CTP0 | GPIO | GPIO06 |
| 137 | GPIO_CTP0_RSTB | GPIO | GPIO05 |
| 138 | DSI1_LCM_RST | LCD control signal | DSI1_LCM_RST |
| 139 | MSDC1_INSI | GPIO | GPIO02 |
| 140 | DPI_D5 | DPI interface signal | GPIO136 |
| 141 | DPI_D7 | DPI interface signal | GPIO138 |
| 142 | DPI_D8 | DPI interface signal | GPIO139 |
| 143 | DPI_D2 | DPI interface signal | GPIO133 |
| 144 | DPI_D0 | DPI interface signal | GPIO131 |
| 145 | DPI_D6 | DPI interface signal | GPIO137 |
| 146 | DPI_D1 | DPI interface signal | GPIO132 |
| 147 | DPI_D11 | DPI interface signal | GPIO142 |
| 148 | DPI_D15 | DPI interface signal | GPIO146 |
| 149 | DPI_D4 | DPI interface signal | GPIO135 |
| 150 | DPI_D12 | DPI interface signal | GPIO143 |

## Core-Module Pin Definition 4

| Pin | Signal | Type | Description |
| ---: | --- | --- | --- |
| 151 | DPI_D9 | DPI interface signal | GPIO140 |
| 152 | DPI_D13 | DPI interface signal | GPIO144 |
| 153 | DPI_D3 | DPI interface signal | GPIO134 |
| 154 | DPI_D10 | DPI interface signal | GPIO141 |
| 155 | DPI_D14 | DPI interface signal | GPIO145 |
| 156 | AUXIN3 | AUXIN | AUXIN3 |
| 157 | DPI_VSYNC | DPI interface signal |  |
| 158 | DPI_HSYNC | DPI interface signal |  |
| 159 | GND | System ground |  |
| 160 | CSI0B_L0P_DSI0_D2P | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 161 | CSI0B_L0N_DSI0_D2N | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 162 | CSI0A_L0P_DSI0_D0P | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 163 | CSI0A_L0N_DSI0_D0N | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 164 | CSI0A_L2P_DSI0_CKP | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 165 | CSI0A_L2N_DSI0_CKN | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 166 | CSI0A_L1P_DSI0_D1P | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 167 | CSI0A_L1N_DSI0_D1N | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 168 | CSI0B_L1P_DSI0_D3P | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 169 | CSI0B_L1N_DSI0_D3N | Multiplexed MIPI camera/LCD signal | Not available as GPIO |
| 170 | GND | System ground |  |
| 171 | DSI1_D2P_EDP_HPD | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 172 | DSI1_D2N_EDP_DIS_EN | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 173 | DSI1_D0P_EDP_TX0P | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 174 | DSI1_D0N_EDP_TX0N | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 175 | DSI1_CKP_EDP_AUXP | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 176 | DSI1_CKN_EDP_AUXN | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 177 | DSI1_D1P_EDP_TX1P | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 178 | DSI1_D1N_EDP_TX1N | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 179 | DSI1_D3P_EDP_PWM0 | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 180 | DSI1_D3N_EDP_POWER_EN | Multiplexed MIPI LCD/eDP signal | Not available as GPIO |
| 181 | GND | System ground |  |
| 182 | HDMITX21_CLK_M | HDMI output signal | Not available as GPIO |
| 183 | HDMITX21_CLK_P | HDMI output signal | Not available as GPIO |
| 184 | HDMITX21_CH0_M | HDMI output signal | Not available as GPIO |
| 185 | HDMITX21_CH0_P | HDMI output signal | Not available as GPIO |
| 186 | HDMITX21_CH1_M | HDMI output signal | Not available as GPIO |
| 187 | HDMITX21_CH1_P | HDMI output signal | Not available as GPIO |
| 188 | HDMITX21_CH2_M | HDMI output signal | Not available as GPIO |
| 189 | HDMITX21_CH2_P | HDMI output signal | Not available as GPIO |
| 190 | GND | System ground |  |
| 191 | DP_LN3_TXN | DisplayPort signal | Not available as GPIO |
| 192 | DP_LN3_TXP | DisplayPort signal | Not available as GPIO |
| 193 | DP_LN2_TXN | DisplayPort signal | Not available as GPIO |
| 194 | DP_LN2_TXP | DisplayPort signal | Not available as GPIO |
| 195 | DP_LN1_TXN | DisplayPort signal | Not available as GPIO |
| 196 | DP_LN1_TXP | DisplayPort signal | Not available as GPIO |
| 197 | DPAUXN | DisplayPort signal | Not available as GPIO |
| 198 | DPAUXP | DisplayPort signal | Not available as GPIO |
| 199 | DP_LN0_TXN | DisplayPort signal | Not available as GPIO |
| 200 | DP_LN0_TXP | DisplayPort signal | Not available as GPIO |
