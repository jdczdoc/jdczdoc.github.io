---
sidebar_position: 2
title: Pin Definition
description: X733 core-board 200-pin definition, interface types, and multiplexing information
---

# Pin Definition

This chapter lists the complete 200-pin definition of the X733 core board. Check the core-board schematic and SoC datasheet before carrier-board design to confirm multiplexing, I/O voltage domains, reset states, and external pull resistors.

## Core Board Pin Definition 1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | BOOST-5V-EN | PL12 | GPIO multiplexed function |
| 2 | VBUS-USB | VBUS input | Not used by default |
| 3 | VBUS-USB | VBUS input | Not used by default |
| 4 | GND | System ground |  |
| 5 | CC2 | CC2 charging CC detection | Not used by default |
| 6 | CC1 | CC1 charging CC detection | Not used by default |
| 7 | TYPEC-DP-1 | Type-C DP-1 / charging DM | Not used by default |
| 8 | TYPEC-DM-1 | Type-C DM-1 / charging DM | Not used by default |
| 9 | TS | Battery-temperature sensing | Battery-temperature sensing pin |
| 10 | PMU-SDA | GPIO PL1 / PMU I2C | Reserved for this function; do not reuse |
| 11 | PMU-SCK | GPIO PL0 / PMU I2C | Reserved for this function; do not reuse |
| 12 | GND | System ground |  |
| 13 | GND | System ground |  |
| 14 | GND | System ground |  |
| 15 | VBAT | 4.2 V battery input |  |
| 16 | VBAT | 4.2 V battery input |  |
| 17 | PS | 5 V input | Recommended current: at least 3 A; ripple below 100 mV |
| 18 | PS | 5 V input | Recommended current: at least 3 A; ripple below 100 mV |
| 19 | PS | 5 V input | Recommended current: at least 3 A; ripple below 100 mV |
| 20 | DLDO5 | 3.3 V output | May power the carrier-board audio CODEC and PHY I/O domain |
| 21 | BLDO5 | 1.8 V output | May power the carrier-board audio CODEC and PHY I/O domain |
| 22 | RESET-KEY | Reset | Cannot be used as a GPIO |
| 23 | POWKEY | Power-on | Cannot be used as a GPIO |
| 24 | LRADC0 | LRADC0 | Cannot be used as a GPIO |
| 25 | MCSI-STBY-F | PE6 | GPIO multiplexed function |
| 26 | MCSI-STBY-R2 | PE15 | GPIO multiplexed function |
| 27 | MCSI-STBY-R | PE8 | GPIO multiplexed function |
| 28 | MCSI-RST-R | PE9 | GPIO multiplexed function |
| 29 | MCSI-RST-F | PE7 | GPIO multiplexed function |
| 30 | MCSI-RST-R2 | PE2 | GPIO multiplexed function |
| 31 | PE1 | PE1 | GPIO multiplexed function |
| 32 | MCSI-MCLK-2 | PE0 | GPIO multiplexed function |
| 33 | MCSI-MCLK | PE5 | GPIO multiplexed function |
| 34 | TWI3-SDA | PE4 | GPIO multiplexed function |
| 35 | TWI3-SCK | PE3 | GPIO multiplexed function |
| 36 | TWI4-SCK | PE10 | GPIO multiplexed function |
| 37 | TWI4-SDA | PE11 | GPIO multiplexed function |
| 38 | PCIE-PERSTN | PE13 | GPIO multiplexed function |
| 39 | PCIE-WAKEN | PE12 | GPIO multiplexed function |
| 40 | PCIE-CLKREQN | PE14 | GPIO multiplexed function |
| 41 | TWI2-SDA | PD17 | GPIO multiplexed function |
| 42 | TWI2-SCK | PD16 | GPIO multiplexed function |
| 43 | EDP-BL-PWMI | PJ27 | GPIO multiplexed function |
| 44 | EDP-LED-EN | PJ26 | GPIO multiplexed function |
| 45 | USB1-DM | USB 2.0 signal | Cannot be used as a GPIO |
| 46 | USB1-DP | USB 2.0 signal | Cannot be used as a GPIO |
| 47 | USB2-DP | USB 2.0 signal | Cannot be used as a GPIO |
| 48 | USB2-DM | USB 2.0 signal | Cannot be used as a GPIO |
| 49 | USB0-DP | USB 2.0 signal | Cannot be used as a GPIO |
| 50 | USB0-DM | USB 2.0 signal | Cannot be used as a GPIO |

## Core Board Pin Definition 2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 51 | SBU1-DC | PL10 |  |
| 52 | SBU2-DC | PL11 |  |
| 53 | COMB1-TX0P | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 54 | COMB1-TX0N | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 55 | COMB1-RX0P | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 56 | COMB1-RX0N | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 57 | COMB1-REFP | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 58 | COMB1-REFN | PCIe/USB 3.0 signal | Cannot be used as a GPIO |
| 59 | COMB0-LANE3-N | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 60 | COMB0-LANE3-P | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 61 | COMB0-LANE2-N | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 62 | COMB0-LANE2-P | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 63 | COMB0-LANE1-N | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 64 | COMB0-LANE1-P | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 65 | COMB0-LANE0-N | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 66 | COMB0-LANE0-P | Type-C/USB 3.0/eDP signal | Cannot be used as a GPIO |
| 67 | AUXP | DP signal | Cannot be used as a GPIO |
| 68 | AUXN | DP signal | Cannot be used as a GPIO |
| 69 | HSDA | HDMI I2C signal | Cannot be used as a GPIO |
| 70 | HSCL | HDMI I2C signal | Cannot be used as a GPIO |
| 71 | HCEC | HDMI CEC signal | Cannot be used as a GPIO |
| 72 | HHPD | HDMI HPD signal | Cannot be used as a GPIO |
| 73 | HTXCN | HDMI output signal | Cannot be used as a GPIO |
| 74 | HTXCP | HDMI output signal | Cannot be used as a GPIO |
| 75 | HTX0N | HDMI output signal | Cannot be used as a GPIO |
| 76 | HTX0P | HDMI output signal | Cannot be used as a GPIO |
| 77 | HTX1N | HDMI output signal | Cannot be used as a GPIO |
| 78 | HTX1P | HDMI output signal | Cannot be used as a GPIO |
| 79 | HTX2N | HDMI output signal | Cannot be used as a GPIO |
| 80 | HTX2P | HDMI output signal | Cannot be used as a GPIO |
| 81 | MCSIB-D0P | MIPI CSI signal / PK11 | GPIO multiplexed function |
| 82 | MCSIB-D0N | MIPI CSI signal / PK10 | GPIO multiplexed function |
| 83 | MCSIB-D1P | MIPI CSI signal / PK13 | GPIO multiplexed function |
| 84 | MCSIB-D1N | MIPI CSI signal / PK12 | GPIO multiplexed function |
| 85 | MCSIB-CKP | MIPI CSI signal / PK15 | GPIO multiplexed function |
| 86 | MCSIB-CKN | MIPI CSI signal / PK14 | GPIO multiplexed function |
| 87 | MCSIB-D2P | MIPI CSI signal / PK17 | GPIO multiplexed function |
| 88 | MCSIB-D2N | MIPI CSI signal / PK16 | GPIO multiplexed function |
| 89 | MCSIB-D3P | MIPI CSI signal / PK19 | GPIO multiplexed function |
| 90 | MCSIB-D3N | MIPI CSI signal / PK18 | GPIO multiplexed function |
| 91 | MCSIC-D0P | MIPI CSI signal / PK21 | GPIO multiplexed function |
| 92 | MCSIC-D0N | MIPI CSI signal / PK20 | GPIO multiplexed function |
| 93 | MCSIC-D1P | MIPI CSI signal / PK23 | GPIO multiplexed function |
| 94 | MCSIC-D1N | MIPI CSI signal / PK22 | GPIO multiplexed function |
| 95 | MCSIC-CKP | MIPI CSI signal / PK25 | GPIO multiplexed function |
| 96 | MCSIC-CKN | MIPI CSI signal / PK24 | GPIO multiplexed function |
| 97 | MCSIA-D0N | MIPI CSI signal / PK0 | GPIO multiplexed function |
| 98 | MCSIA-D0P | MIPI CSI signal / PK1 | GPIO multiplexed function |
| 99 | MCSIA-D2N | MIPI CSI signal / PK6 | GPIO multiplexed function |
| 100 | MCSIA-D2P | MIPI CSI signal / PK7 | GPIO multiplexed function |

## Core Board Pin Definition 3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 101 | MCSIA-D1P | MIPI CSI signal / PK3 | GPIO multiplexed function |
| 102 | MCSIA-D1N | MIPI CSI signal / PK2 | GPIO multiplexed function |
| 103 | MCSIA-CKP | MIPI CSI signal / PK5 | GPIO multiplexed function |
| 104 | MCSIA-CKN | MIPI CSI signal / PK4 | GPIO multiplexed function |
| 105 | MCSIA-D3P | MIPI CSI signal / PK9 | GPIO multiplexed function |
| 106 | MCSIA-D3N | MIPI CSI signal / PK8 | GPIO multiplexed function |
| 107 | MIPI-DSI0-DP0 | MIPI DSI signal / PD0 | GPIO multiplexed function |
| 108 | MIPI-DSI0-DN0 | MIPI DSI signal / PD1 | GPIO multiplexed function |
| 109 | MIPI-DSI0-DP1 | MIPI DSI signal / PD2 | GPIO multiplexed function |
| 110 | MIPI-DSI0-DN1 | MIPI DSI signal / PD3 | GPIO multiplexed function |
| 111 | MIPI-DSI0-CKP | MIPI DSI signal / PD4 | GPIO multiplexed function |
| 112 | MIPI-DSI0-CKN | MIPI DSI signal / PD5 | GPIO multiplexed function |
| 113 | MIPI-DSI0-DN2 | MIPI DSI signal / PD7 | GPIO multiplexed function |
| 114 | MIPI-DSI0-DP2 | MIPI DSI signal / PD6 | GPIO multiplexed function |
| 115 | MIPI-DSI0-DP3 | MIPI DSI signal / PD8 | GPIO multiplexed function |
| 116 | MIPI-DSI0-DN3 | MIPI DSI signal / PD9 | GPIO multiplexed function |
| 117 | DSI1-DN3 | MIPI DSI signal / PD19 | GPIO multiplexed function |
| 118 | DSI1-DP3 | MIPI DSI signal / PD18 | GPIO multiplexed function |
| 119 | PJ24 | PJ24 | GPIO multiplexed function |
| 120 | PG10 | PG10 | GPIO multiplexed function |
| 121 | PJ25 | PJ25 | GPIO multiplexed function |
| 122 | PJ22 | PJ22 | GPIO multiplexed function |
| 123 | PJ23 | PJ23 | GPIO multiplexed function |
| 124 | CODEC-RST | PB3 | GPIO multiplexed function |
| 125 | CODEC-IRQ | PB2 | GPIO multiplexed function |
| 126 | I2S0-MCLK | PB4 | GPIO multiplexed function |
| 127 | I2S0-BCLK | PB5 | GPIO multiplexed function |
| 128 | I2S0-LRCK | PB6 | GPIO multiplexed function |
| 129 | I2S0-DOUT0 | PB7 | GPIO multiplexed function |
| 130 | I2S0-DIN0 | PB8 | GPIO multiplexed function |
| 131 | TP-GPIO1 | PD14 | GPIO multiplexed function |
| 132 | LCD-RST | PD21 | GPIO multiplexed function |
| 133 | TP-SPI-MOSI | PD12 | GPIO multiplexed function |
| 134 | TP-GPIO2 | PD15 | GPIO multiplexed function |
| 135 | TP-SPI-MISO | PD13 | GPIO multiplexed function |
| 136 | TP-INT | PD23 | GPIO multiplexed function |
| 137 | TP-SPI-CLK | PD11 | GPIO multiplexed function |
| 138 | TP-SPI-CS0 | PD10 | GPIO multiplexed function |
| 139 | TP-RST | PD20 | GPIO multiplexed function |
| 140 | LCD-PWM | PD22 | GPIO multiplexed function |
| 141 | VOL-KEY | PB0 | GPIO multiplexed function |
| 142 | VOL+KEY | PB1 | GPIO multiplexed function |
| 143 | FEL | FEL | GPIO multiplexed function |
| 144 | EPHY_25M_PH15 | PH15 | GPIO multiplexed function |
| 145 | GMAC_CLKIN_PH3 | PH3 | GPIO multiplexed function |
| 146 | PH16 | PH16 | GPIO multiplexed function |
| 147 | GMAC_MDC_PH8 | PH8 | GPIO multiplexed function |
| 148 | GMAC_MDIO_PH9 | PH9 | GPIO multiplexed function |
| 149 | GMAC_TXCLK_PH6 | PH6 | GPIO multiplexed function |
| 150 | GMAC_TXEN_PH7 | PH7 | GPIO multiplexed function |

## Core Board Pin Definition 4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 151 | GMAC_TXD0_PH5 | PH5 | GPIO multiplexed function |
| 152 | GMAC_TXD1_PH4 | PH4 | GPIO multiplexed function |
| 153 | GMAC_TXD2_PH14 | PH14 | GPIO multiplexed function |
| 154 | GMAC_TXD3_PH13 | PH13 | GPIO multiplexed function |
| 155 | GMAC_RXCLK_PH12 | PH12 | GPIO multiplexed function |
| 156 | GMAC_RXD0_PH1 | PH1 | GPIO multiplexed function |
| 157 | GMAC_RXD1_PH0 | PH0 | GPIO multiplexed function |
| 158 | GMAC_RXCLT_PH2 | PH2 | GPIO multiplexed function |
| 159 | GMAC_RXD2_PH11 | PH11 | GPIO multiplexed function |
| 160 | GMAC_RXD3_PH10 | PH10 | GPIO multiplexed function |
| 161 | BT-UART-RTS | PG9 | GPIO multiplexed function |
| 162 | BT-PCM-CLK | PG11 | GPIO multiplexed function |
| 163 | BT-PCM-SYNC | PG12 | GPIO multiplexed function |
| 164 | BT-PCM-DOUT | PG14 | GPIO multiplexed function |
| 165 | BT-PCM-DIN | PG13 | GPIO multiplexed function |
| 166 | SDC0-CLK | PF2 | GPIO multiplexed function |
| 167 | SDC0-CMD | PF1 | GPIO multiplexed function |
| 168 | SDC0-D0 | PF3 | GPIO multiplexed function |
| 169 | SDC0-D3 | PF4 | GPIO multiplexed function |
| 170 | SDC0-DET | PF6 | GPIO multiplexed function |
| 171 | SDC0-D2 | PF5 | GPIO multiplexed function |
| 172 | SDC0-D1 | PF0 | GPIO multiplexed function |
| 173 | BT-UART-CTS | PG8 | GPIO multiplexed function |
| 174 | BT-UART-TX | PG7 | GPIO multiplexed function |
| 175 | BT-UART-RX | PG6 | GPIO multiplexed function |
| 176 | WL-SDIO-CLK | PG0 | GPIO multiplexed function |
| 177 | WL-SDIO-D2 | PG4 | GPIO multiplexed function |
| 178 | WL-SDIO-D3 | PG5 | GPIO multiplexed function |
| 179 | WL-SDIO-D1 | PG3 | GPIO multiplexed function |
| 180 | WL-SDIO-CMD | PG1 | GPIO multiplexed function |
| 181 | WL-SDIO-D0 | PG2 | GPIO multiplexed function |
| 182 | TWI8-SDA | PB10 | GPIO multiplexed function |
| 183 | TWI8-SCK | PB9 | GPIO multiplexed function |
| 184 | REFCLK_OUT | Reference-clock output | Cannot be used as a GPIO |
| 185 | AP-CK32K-OUT | AP 32 kHz clock output | Cannot be used as a GPIO |
| 186 | WL-REG-ON | PM1 | GPIO multiplexed function |
| 187 | WL-WAKE-AP | PM0 | GPIO multiplexed function |
| 188 | AP-WAKE-BT | PM3 | GPIO multiplexed function |
| 189 | BT-RESETN | PM2 | GPIO multiplexed function |
| 190 | CC-INT | PM5 | GPIO multiplexed function |
| 191 | BT-WAKE-AP | PM4 | GPIO multiplexed function |
| 192 | GYRO-INT1 | PL4 | GPIO multiplexed function |
| 193 | GYRO-INT2 | PL5 | GPIO multiplexed function |
| 194 | KD-EINT | PL3 | GPIO multiplexed function |
| 195 | EINT-HAL | PL6 | GPIO multiplexed function |
| 196 | USB0-DRVVBUS | PL2 | GPIO multiplexed function |
| 197 | LED-EN | PL7 | GPIO multiplexed function |
| 198 | PL8 | PL8 | GPIO multiplexed function |
| 199 | PL9 | PL9 | GPIO multiplexed function |
| 200 | ALS-INT | PL13 | GPIO multiplexed function |
