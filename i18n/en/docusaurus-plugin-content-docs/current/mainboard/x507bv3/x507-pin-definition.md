---
title: Pin Definition
sidebar_position: 3
description: "Complete 172-pin definition of the X507CV1 core module"
---

# Pin Definition

This page lists all 172 pins of the X507CV1 core module. Carrier-board design must also be checked against the core-module schematic, T507 datasheet, I/O voltage domains, and reset states.

## Core-Module Pin Definition 1

| Pin | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | RGMII-CLKIN-125M | Gigabit Ethernet | GPIO,UART,PWM,interrupt multiplexed pin |
| 2 | RGMII-RXD0 | Gigabit Ethernet | GPIO,interrupt,I2S,DMIC multiplexed pin |
| 3 | RGMII-RXD3 | Gigabit Ethernet | GPIO,I2S,I2C,DMIC,interrupt multiplexed pin |
| 4 | RGMII-TXD2 | Gigabit Ethernet | GPIO,I2C,UART,interrupt multiplexed pin |
| 5 | RGMII-TXCTL | Gigabit Ethernet | GPIO,PWM,UART,interrupt multiplexed pin |
| 6 | RGMII-TXD0 | Gigabit Ethernet | GPIO,UART,I2C,UART,interrupt multiplexed pin |
| 7 | RGMII-MDIO | Gigabit Ethernet | interrupt,GPIO,UART multiplexed pin |
| 8 | EPHY-CLK-25M | Gigabit Ethernet | interrupt,GPIO, UART multiplexed pin |
| 9 | RGMII-MDC | Gigabit Ethernet | interrupt,UART, PWM,GPIO multiplexed pin |
| 10 | RGMII-RXCK | Gigabit Ethernet | interrupt,I2S,DMIC,GPIO multiplexed pin |
| 11 | PA-I2S0-BCLK | I2S0 signal | interrupt,GPIO,RMII multiplexed pin |
| 12 | PA-I2S0-MCLK | I2S0 signal | interrupt,GPIO,RMII multiplexed pin |
| 13 | PA-I2S0-DIN0 | I2S0 signal | interrupt,MDIO,GPIO multiplexed pin |
| 14 | PA-I2S0-LRCK | I2S0 signal | interrupt,GPIO multiplexed pin |
| 15 | PA5 | GPIO | RMII,I2S,interrupt multiplexed pin |
| 16 | PA4 | GPIO | RMII,standard data port,interrupt multiplexed pin |
| 17 | PA-TWI0-SCK | I2C0 signal | GPIO,interrupt,RMII multiplexed pin |
| 18 | PA-TWI0-SDA | I2C0 signal | GPIO,interrupt,RMII multiplexed pin |
| 19 | PA-TWI3-SCK | I2C3 signal | GPIO,interrupt multiplexed pin |
| 20 | PA-TWI3-SDA | I2C3 signal | GPIO,interrupt multiplexed pin |
| 21 | PC3 | GPIO | SPI multiplexed pin |
| 22 | PC2 | GPIO | SPI multiplexed pin |
| 23 | PMU-PWRON | Power-key enable |  |
| 24 | TV-OUT | Video signal |  |
| 25 | GPADC2 | ADC input |  |
| 26 | GPADC0 | ADC input |  |
| 27 | GPADC1 | ADC input |  |
| 28 | AP-CK32KO | Clock input | GPIO,I2S,interrupt multiplexed pin |
| 29 | LRADC | ADC signal |  |
| 30 | LINEINL | Audio input |  |
| 31 | LINEINR | Audio input |  |
| 32 | LINEOUTL | Headphone signal |  |
| 33 | LINEOUTR | Headphone signal |  |
| 34 | MCSI-SCK | CSI interface | GPIO,I2C,UART,interrupt multiplexed pin |
| 35 | MCSI-SDA | CSI interface | GPIO,I2C,UART,interrupt multiplexed pin |
| 36 | MCSI-D2N | CSI interface | MIPI camera differential pair |
| 37 | MCSI-D2P | CSI interface | MIPI camera differential pair |
| 38 | MCSI-D1P | CSI interface | MIPI camera differential pair |
| 39 | MCSI-D1N | CSI interface | MIPI camera differential pair |
| 40 | MCSI-D0P | CSI interface | MIPI camera differential pair |
| 41 | MCSI-D0N | CSI interface | MIPI camera differential pair |
| 42 | MCSI-CLKP | CSI interface | MIPI camera differential pair |
| 43 | MCSI-CLKN | CSI interface | MIPI camera differential pair |

## Core-Module Pin Definition 2

| Pin | Signal | Type | Description |
| --- | --- | --- | --- |
| 44 | MCSI-MCLK | CSI interface | GPIO,PWM,interrupt multiplexed pin |
| 45 | MCSI-D3P | CSI interface | MIPI camera differential pair |
| 46 | MCSI-D3N | CSI interface | MIPI camera differential pair |
| 47 | USB0-DM | USB OTG | USB differential pair |
| 48 | USB0-DP | USB OTG | USB differential pair |
| 49 | USB1-DM | USB 2.0 | USB differential pair |
| 50 | USB1-DP | USB 2.0 | USB differential pair |
| 51 | CON-USB2-DM | USB 2.0 | USB differential pair |
| 52 | CON-USB2-DP | USB 2.0 | USB differential pair |
| 53 | USB3-DP | USB 2.0 | USB differential pair |
| 54 | USB3-DM | USB 2.0 | USB differential pair |
| 55 | HCEC | HDMI output |  |
| 56 | HSDA | HDMI output |  |
| 57 | HSCL | HDMI output |  |
| 58 | HHPD | HDMI output |  |
| 59 | HTXCN | HDMI output | HDMI differential pair |
| 60 | HTXCP | HDMI output | HDMI differential pair |
| 61 | HTX0N | HDMI output | HDMI differential pair |
| 62 | HTX0P | HDMI output | HDMI differential pair |
| 63 | HTX1N | HDMI output | HDMI differential pair |
| 64 | HTX1P | HDMI output | HDMI differential pair |
| 65 | HTX2P | HDMI output | HDMI differential pair |
| 66 | HTX2N | HDMI output | HDMI differential pair |
| 67 | LCD-D10 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 68 | LCD-D11 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 69 | LCD-D12 | LVDS/RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 70 | LCD-D13 | LVDS/RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 71 | LCD-D14 | LVDS/RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 72 | LCD-D15 | LVDS/RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 73 | LCD-D16 | RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 74 | LCD-D17 | RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 75 | LCD-D18 | RGB interface | GPIO,interrupt,SIM multiplexed pin |
| 76 | LCD-D19 | RGB interface | GPIO,interrupt multiplexed pin |
| 77 | LCD-D0 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 78 | LCD-D1 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 79 | LCD-D2 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 80 | LCD-D3 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 81 | LCD-D4 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 82 | LCD-D5 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 83 | LCD-D6 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 84 | LCD-D7 | LVDS/RGB interface | GPIO,interrupt multiplexed pin |
| 85 | LCD-D8-SOC | RGB interface | GPIO,interrupt multiplexed pin |
| 86 | LCD-D9-SOC | RGB interface | GPIO,interrupt multiplexed pin |

## Core-Module Pin Definition 3

| Pin | Signal | Type | Description |
| --- | --- | --- | --- |
| 87 | LCD-VSYNC | Vertical-sync signal | GPIO,interrupt multiplexed pin |
| 88 | LCD-D22 | RGB interface | GPIO,interrupt multiplexed pin |
| 89 | LCD-PWM | PWM signal | GPIO,interrupt multiplexed pin |
| 90 | LCD-D20 | RGB interface | GPIO,interrupt multiplexed pin |
| 91 | LCD-HSYNC | Horizontal-sync signal | GPIO,interrupt multiplexed pin |
| 92 | LCD-CLK | Clock signal | GPIO,interrupt multiplexed pin |
| 93 | LCD-D21 | RGB interface | GPIO,interrupt multiplexed pin |
| 94 | LCD-D23 | RGB interface | GPIO,interrupt multiplexed pin |
| 95 | LCD-DE | Enable signal | GPIO,interrupt multiplexed pin |
| 96 | PA-TWI1-SCK | I2C1 signal | GPIO,interrupt,RMII multiplexed pin |
| 97 | PA-TWI1-SDA | I2C1 signal | GPIO,interrupt,RMII multiplexed pin |
| 98 | SPDIF-OUT | S/PDIF interface | GPIO,I2C,interrupt multiplexed pin |
| 99 | WATCHDOG-SIG | Watchdog signal | GPIO,PWM,interrupt multiplexed pin |
| 100 | UART0-RX | UART0 | GPIO,PWM,I2C,interrupt multiplexed pin |
| 101 | UART0-TX | UART0 | GPIO,PWM,I2C,interrupt multiplexed pin |
| 102 | PH5 | GPIO | UART,I2S,SPI,I2C,interrupt multiplexed pin |
| 103 | PH6 | GPIO | UART,I2S,SPI,I2C,interrupt multiplexed pin |
| 104 | SOC-RESET | Reset signal |  |
| 105 | UART5-RX | UART5 | GPIO,PWM,I2C,interrupt multiplexed pin |
| 106 | UART5-TX | UART5 | GPIO,PWM,I2C,interrupt multiplexed pin |
| 107 | PH7 | GPIO | UART,I2S,SPI,I2C,interrupt multiplexed pin |
| 108 | IR-RX | Infrared signal | GPIO,interrupt multiplexed pin |
| 109 | PH8 | GPIO | UART,I2S,SPI,interrupt multiplexed pin |
| 110 | PH9 | GPIO | I2S,SPI,interrupt multiplexed pin |
| 111 | WL-SDIO-CLK | SDIO interface | GPIO,interrupt multiplexed pin |
| 112 | WL-SDIO-CMD | SDIO interface | GPIO,interrupt multiplexed pin |
| 113 | WL-SDIO-D0 | SDIO interface | GPIO,interrupt multiplexed pin |
| 114 | WL-SDIO-D2 | SDIO interface | GPIO,interrupt multiplexed pin |
| 115 | WL-SDIO-D1 | SDIO interface | GPIO,interrupt multiplexed pin |
| 116 | WL-SDIO-D3 | SDIO interface | GPIO,interrupt multiplexed pin |
| 117 | FEL | Recovery/FEL key signal |  |
| 118 | TWI4-SCK | UART4 | GPIO,UART,I2C,interrupt multiplexed pin |
| 119 | TWI4-SDA | UART4 | GPIO,UART,I2C,interrupt multiplexed pin |
| 120 | BT-PCM-DOUT | GPIO/Bluetooth signal | GPIO,I2S, interrupt multiplexed pin |
| 121 | BT-PCM-CLK | GPIO/Bluetooth signal | GPIO,I2S,interrupt multiplexed pin |
| 122 | BT-PCM-SYNC | GPIO/Bluetooth signal | GPIO,I2S,interrupt multiplexed pin |
| 123 | BT-PCM-DIN | GPIO/Bluetooth signal | GPIO,I2S,interrupt multiplexed pin |
| 124 | BT-UART-TX/JTAG-MS | UART/JTAG interface | GPIO,interrupt multiplexed pin |
| 125 | BT-UART-RTS/JTAG-DO | UART/JTAG interface | GPIO,interrupt multiplexed pin |
| 126 | BT-UART-RX/JTAG-CK | UART/JTAG interface | UART,interrupt,GPIO multiplexed pin |
| 127 | BT-UART-CTS/JTAG-DI | UART/JTAG interface | UART,interrupt,GPIO multiplexed pin |
| 128 | NCSI0-MCLK | CSI interface | GPIO,interrupt multiplexed pin |
| 129 | NCSI0-HSYNC | CSI interface | GPIO,interrupt multiplexed pin |

## Core-Module Pin Definition 4

| Pin | Signal | Type | Description |
| --- | --- | --- | --- |
| 130 | NCSI0-VSYNC | CSI interface | GPIO,interrupt multiplexed pin |
| 131 | NCSI0-PCLK | CSI interface | GPIO,interrupt multiplexed pin |
| 132 | NCSI0-SCK | CSI interface | GPIO,interrupt,I2C multiplexed pin |
| 133 | NCSI0-SDA | CSI interface | GPIO,interrupt,I2C multiplexed pin |
| 134 | NCSI0-D15 | CSI interface | GPIO,interrupt multiplexed pin |
| 135 | NCSI0-D7 | CSI interface | GPIO,interrupt multiplexed pin |
| 136 | NCSI0-D5 | CSI interface | GPIO,interrupt multiplexed pin |
| 137 | NCSI0-D6 | CSI interface | GPIO,interrupt multiplexed pin |
| 138 | NCSI0-D4 | CSI interface | GPIO,interrupt multiplexed pin |
| 139 | NCSI0-D2 | CSI interface | GPIO,interrupt multiplexed pin |
| 140 | NCSI0-D1 | CSI interface | GPIO,interrupt multiplexed pin |
| 141 | NCSI0-D0 | CSI interface | GPIO,interrupt multiplexed pin |
| 142 | NCSI0-D3 | CSI interface | GPIO,interrupt multiplexed pin |
| 143 | NCSI0-D14 | CSI interface | GPIO,interrupt multiplexed pin |
| 144 | NCSI0-D13 | CSI interface | GPIO,interrupt multiplexed pin |
| 145 | NCSI0-D8 | CSI interface | GPIO,interrupt multiplexed pin |
| 146 | NCSI0-D12 | CSI interface | GPIO,interrupt multiplexed pin |
| 147 | NCSI0-D11 | CSI interface | GPIO,interrupt multiplexed pin |
| 148 | NCSI0-D10 | CSI interface | GPIO,interrupt multiplexed pin |
| 149 | NCSI0-D9 | CSI interface | GPIO,interrupt multiplexed pin |
| 150 | CSI-FSIN0 | CSI interface | GPIO,interrupt multiplexed pin |
| 151 | SDC0-DET | SD-card interface | GPIO,interrupt multiplexed pin |
| 152 | SDC0-D2 | SD-card interface | GPIO,JTAG,interrupt multiplexed pin |
| 153 | SDC0-CMD | SD-card interface | GPIO,JTAG,interrupt multiplexed pin |
| 154 | SDC0-CLK | SD-card interface | GPIO,UART,interrupt multiplexed pin |
| 155 | SDC0-D3 | SD-card interface | GPIO,UART,interrupt multiplexed pin |
| 156 | SDC0-D1 | SD-card interface | GPIO,JTAG,interrupt multiplexed pin |
| 157 | SDC0-D0 | SD-card interface | GPIO,JTAG,interrupt multiplexed pin |
| 158 | 4G-WAKEUP-SOC | 4G wake signal |  |
| 159 | ACIN | 5V power input | Core-module 5V DC power input |
| 160 | ACIN | 5V power input | Core-module 5V DC power input |
| 161 | GND | Ground | Ground |
| 162 | GND | Ground | Ground |
| 163 | DCDC1 | 3.3V power output | Core-module 3.3V DC output |
| 164 | DCDC1 | 3.3V power output | Core-module 3.3V DC output |
| 165 | NC |  |  |
| 166 | PHYRSTB | Gigabit Ethernet | GPIO,interrupt,UART,I2C,RMII, multiplexed pin |
| 167 | RGMII-RXCTL | Gigabit Ethernet | GPIO,interrupt,UART,I2C,RMII, multiplexed pin |
| 168 | RGMII-RXD1 | Gigabit Ethernet | GPIO,interrupt,UART,I2S,HDMI,RMII, multiplexed pin |
| 169 | RGMII-RXD2 | Gigabit Ethernet | GPIO,interrupt,UART,I2S,HDMI,RMII, multiplexed pin |
| 170 | RGMII-TXD1 | Gigabit Ethernet | GPIO,interrupt,UART,I2C,RMII multiplexed pin |
| 171 | RGMII-TXD3 | Gigabit Ethernet | GPIO,interrupt,UART,I2C,RMII multiplexed pin |
| 172 | RGMII-TXCK | Gigabit Ethernet | GPIO,interrupt,UART,RMII,PWM multiplexed pin |
