---
sidebar_position: 2
title: Pin Definition
description: X507 core-board 172-pin definition, interface types, and multiplexing information
---

# Pin Definition

This chapter lists the complete 172-pin definition of the X507 core board. Check the core-board schematic and SoC datasheet before carrier-board design to confirm multiplexing, I/O voltage domains, reset states, and external pull resistors.

## Core Board Pin Definition 1

| Pin | Signal | Type |
|---|---|---|
| 1 | RGMII-CLKIN-125M | 1000M Ethernet |
| 2 | RGMII-RXD0 | 1000M Ethernet |
| 3 | RGMII-RXD3 | 1000M Ethernet |
| 4 | RGMII-TXD2 | 1000M Ethernet |
| 5 | RGMII-TXCTL | 1000M Ethernet |
| 6 | RGMII-TXD0 | 1000M Ethernet |
| 7 | RGMII-MDIO | 1000M Ethernet |
| 8 | EPHY-CLK-25M | 1000M Ethernet |
| 9 | RGMII-MDC | 1000M Ethernet |
| 10 | RGMII-RXCK | 1000M Ethernet |
| 11 | PA-I2S0-BCLK | I2S0 |
| 12 | PA-I2S0-MCLK | I2S0 |
| 13 | PA-I2S0-DIN0 | I2S0 |
| 14 | PA-I2S0-LRCK | I2S0 |
| 15 | PA5 | GPIO |
| 16 | PA4 | GPIO |
| 17 | PA-TWI0-SCK | I2C0 |
| 18 | PA-TWI0-SDA | I2C0 |
| 19 | PA-TWI3-SCK | I2C3 |
| 20 | PA-TWI3-SDA | I2C3 |
| 21 | PC3 | GPIO |
| 22 | PC2 | GPIO |
| 23 | PMU-PWRON | PWRKEY |
| 24 | TV-OUT | TV-OUT |
| 25 | GPADC2 | ADC input |
| 26 | GPADC0 | ADC input |
| 27 | GPADC1 | ADC input |
| 28 | AP-CK32KO | Clock input |
| 29 | LRADC | ADC |
| 30 | LINEINL | Line input |
| 31 | LINEINR | Line input |
| 32 | LINEOUTL | EARPHONE |
| 33 | LINEOUTR | EARPHONE |
| 34 | MCSI-SCK | CSI |
| 35 | MCSI-SDA | CSI |
| 36 | MCSI-D2N | CSI |
| 37 | MCSI-D2P | CSI |
| 38 | MCSI-D1P | CSI |
| 39 | MCSI-D1N | CSI |
| 40 | MCSI-D0P | CSI |
| 41 | MCSI-D0N | CSI |
| 42 | MCSI-CLKP | CSI |
| 43 | MCSI-CLKN | CSI |

## Core Board Pin Definition 2

| Pin | Signal | Type |
|---|---|---|
| 44 | MCSI-MCLK | CSI |
| 45 | MCSI-D3P | CSI |
| 46 | MCSI-D3N | CSI |
| 47 | USB0-DM | OTG |
| 48 | USB0-DP | OTG |
| 49 | USB1-DM | USB2.0 |
| 50 | USB1-DP | USB2.0 |
| 51 | CON-USB2-DM | USB2.0 |
| 52 | CON-USB2-DP | USB2.0 |
| 53 | USB3-DP | USB2.0 |
| 54 | USB3-DM | USB2.0 |
| 55 | HCEC | HDMI output |
| 56 | HSDA | HDMI output |
| 57 | HSCL | HDMI output |
| 58 | HHPD | HDMI output |
| 59 | HTXCN | HDMI output |
| 60 | HTXCP | HDMI output |
| 61 | HTX0N | HDMI output |
| 62 | HTX0P | HDMI output |
| 63 | HTX1N | HDMI output |
| 64 | HTX1P | HDMI output |
| 65 | HTX2P | HDMI output |
| 66 | HTX2N | HDMI output |
| 67 | LCD-D10 | LVDS/RGB |
| 68 | LCD-D11 | LVDS/RGB |
| 69 | LCD-D12 | LVDS/RGB |
| 70 | LCD-D13 | LVDS/RGB |
| 71 | LCD-D14 | LVDS/RGB |
| 72 | LCD-D15 | LVDS/RGB |
| 73 | LCD-D16 | RGB |
| 74 | LCD-D17 | RGB |
| 75 | LCD-D18 | RGB |
| 76 | LCD-D19 | RGB |
| 77 | LCD-D0 | LVDS/RGB |
| 78 | LCD-D1 | LVDS/RGB |
| 79 | LCD-D2 | LVDS/RGB |
| 80 | LCD-D3 | LVDS/RGB |
| 81 | LCD-D4 | LVDS/RGB |
| 82 | LCD-D5 | LVDS/RGB |
| 83 | LCD-D6 | LVDS/RGB |
| 84 | LCD-D7 | LVDS/RGB |
| 85 | LCD-D8-SOC | RGB |
| 86 | LCD-D9-SOC | RGB |

## Core Board Pin Definition 3

| Pin | Signal | Type |
|---|---|---|
| 87 | LCD-VSYNC | VSYNC |
| 88 | LCD-D22 | RGB |
| 89 | LCD-PWM | PWM |
| 90 | LCD-D20 | RGB |
| 91 | LCD-HSYNC | HSYNC |
| 92 | LCD-CLK | Clock |
| 93 | LCD-D21 | RGB |
| 94 | LCD-D23 | RGB |
| 95 | LCD-DE | LCD power |
| 96 | PA-TWI1-SCK | I2C1 |
| 97 | PA-TWI1-SDA | I2C1 |
| 98 | SPDIF-OUT | SPDIF-OUT |
| 99 | WATCHDOG-SIG | WATCHDOG-SIG |
| 100 | UART0-RX | UART0 |
| 101 | UART0-TX | UART0 |
| 102 | PH5 | GPIO |
| 103 | PH6 | GPIO |
| 104 | SOC-RESET | RESET |
| 105 | UART5-RX | UART5 |
| 106 | UART5-TX | UART5 |
| 107 | PH7 | GPIO |
| 108 | IR-RX | IR |
| 109 | PH8 | GPIO |
| 110 | PH9 | GPIO |
| 111 | WL-SDIO-CLK | SDIO |
| 112 | WL-SDIO-CMD | SDIO |
| 113 | WL-SDIO-D0 | SDIO |
| 114 | WL-SDIO-D2 | SDIO |
| 115 | WL-SDIO-D1 | SDIO |
| 116 | WL-SDIO-D3 | SDIO |
| 117 | FEL | RECOVER |
| 118 | TWI4-SCK | UART4 |
| 119 | TWI4-SDA | UART4 |
| 120 | BT-PCM-DOUT | GPIO/BT |
| 121 | BT-PCM-CLK | GPIO/BT |
| 122 | BT-PCM-SYNC | GPIO/BT |
| 123 | BT-PCM-DIN | GPIO/BT |
| 124 | BT-UART-TX/JTAG-MS | UART/JTAG |
| 125 | BT-UART-RTS/JTAG-DO | UART/JTAG |
| 126 | BT-UART-RX/JTAG-CK | UART/JTAG |
| 127 | BT-UART-CTS/JTAG-DI | UART/JTAG |
| 128 | NCSI0-MCLK | CSI |
| 129 | NCSI0-HSYNC | CSI |

## Core Board Pin Definition 4

| Pin | Signal | Type |
|---|---|---|
| 130 | NCSI0-VSYNC | CSI |
| 131 | NCSI0-PCLK | CSI |
| 132 | NCSI0-SCK | CSI |
| 133 | NCSI0-SDA | CS |
| 134 | NCSI0-D15 | CSI |
| 135 | NCSI0-D7 | CSI |
| 136 | NCSI0-D5 | CSI |
| 137 | NCSI0-D6 | CSI |
| 138 | NCSI0-D4 | CSI |
| 139 | NCSI0-D2 | CSI |
| 140 | NCSI0-D1 | CSI |
| 141 | NCSI0-D0 | CSI |
| 142 | NCSI0-D3 | CSI |
| 143 | NCSI0-D14 | CSI |
| 144 | NCSI0-D13 | CSI |
| 145 | NCSI0-D8 | CSI |
| 146 | NCSI0-D12 | CSI |
| 147 | NCSI0-D11 | CSI |
| 148 | NCSI0-D10 | CSI |
| 149 | NCSI0-D9 | CSI |
| 150 | CSI-FSIN0 | CSI |
| 151 | SDC0-DET | SDC |
| 152 | SDC0-D2 | SDC |
| 153 | SDC0-CMD | SDC |
| 154 | SDC0-CLK | SDC |
| 155 | SDC0-D3 | SDC |
| 156 | SDC0-D1 | SDC |
| 157 | SDC0-D0 | SDC |
| 158 | 4G-WAKEUP-SOC | 4G-WAKEUP-SOC |
| 159 | ACIN | 5 V power input |
| 160 | ACIN | 5 V power input |
| 161 | GND | GND |
| 162 | GND | GND |
| 163 | DCDC1 | 3.3 V power output |
| 164 | DCDC1 | 3.3 V power output |
| 165 | NC |  |
| 166 | PHYRSTB | 1000M Ethernet |
| 167 | RGMII-RXCTL | 1000M Ethernet |
| 168 | RGMII-RXD1 | 1000M Ethernet |
| 169 | RGMII-RXD2 | 1000M Ethernet |
| 170 | RGMII-TXD1 | 1000M Ethernet |
| 171 | RGMII-TXD3 | 1000M Ethernet |
| 172 | RGMII-TXCK | 1000M Ethernet |
