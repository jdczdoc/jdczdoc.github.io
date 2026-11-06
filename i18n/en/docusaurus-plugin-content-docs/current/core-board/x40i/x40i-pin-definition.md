---
sidebar_position: 3
title: Pin definitions
description: X40I core board pin definitions
---

# Pin definitions

## Core board pin definitions 1

| Pin number | Signal | Type / multiplexing | Description |
| --- | --- | --- | --- |
| 1 | SDC0-D3 | SDIO0 channel; multiplexed with GPIO interface or UART0_RX |  |
| 2 | SDC0-D2 | SDIO0 channel; multiplexed with GPIO interface |  |
| 3 | SDC0-D1 | SDIO0 channel; multiplexed with GPIO interface |  |
| 4 | SDC0-D0 | SDIO0 channel; multiplexed with GPIO interface |  |
| 5 | HSCL | HDMI I2C clock | Dedicated HDMI pin |
| 6 | HSDA | HDMI I2C data | Dedicated HDMI pin |
| 7 | HCEC | HDMI CEC | Dedicated HDMI pin |
| 8 | HHPD | HDMI detect | Dedicated HDMI pin |
| 9 | HTXCN | HDMI differential pair | Dedicated HDMI pin |
| 10 | HTXCP | HDMI differential pair | Dedicated HDMI pin |
| 11 | HTX0N | HDMI differential pair | Dedicated HDMI pin |
| 12 | HTX0P | HDMI differential pair | Dedicated HDMI pin |
| 13 | HTX1N | HDMI differential pair | Dedicated HDMI pin |
| 14 | HTX1P | HDMI differential pair | Dedicated HDMI pin |
| 15 | HTX2N | HDMI differential pair | Dedicated HDMI pin |
| 16 | HTX2P | HDMI differential pair | Dedicated HDMI pin |
| 17 | USB-DM0 | USB differential pair | USB OTG differential pair |
| 18 | USB-DP0 | USB differential pair | USB OTG differential pair |
| 19 | USB-DM1 | USB differential pair | USB HOST differential pair |
| 20 | USB-DP1 | USB differential pair | USB HOST differential pair |
| 21 | USB-DP2 | USB differential pair | USB HOST differential pair |
| 22 | USB-DM2 | USB differential pair | USB HOST differential pair |
| 23 | CSI-D0 | Parallel camera data interface; multiplexed with GPIO |  |
| 24 | CSI-D1 | Parallel camera data interface; multiplexed with GPIO |  |
| 25 | CSI-D2 | Parallel camera data interface; multiplexed with GPIO |  |
| 26 | CSI-D3 | Parallel camera data interface; multiplexed with GPIO |  |
| 27 | CSI-D4 | Parallel camera data interface; multiplexed with GPIO |  |
| 28 | CSI-D5 | Parallel camera data interface; multiplexed with GPIO |  |
| 29 | CSI-D6 | Parallel camera data interface; multiplexed with GPIO |  |
| 30 | CSI-D7 | Parallel camera data interface; multiplexed with GPIO |  |
| 31 | CSI-HSYNC | Parallel camera data interface; multiplexed with GPIO |  |
| 32 | CSI-VSYNC | Parallel camera data interface; multiplexed with GPIO |  |
| 33 | CSI-MCLK | Parallel camera data interface; multiplexed with GPIO |  |
| 34 | CSI-PCLK | Parallel camera data interface; multiplexed with GPIO |  |
| 35 | USB0-DRVVBUS | PI13; multiplexed with SPI, UART or interrupt |  |
| 36 | AP-CK32KO | PI12; multiplexed with SPI, UART or interrupt |  |
| 37 | SDC0-DET | PI15; multiplexed with SPI, PS2 or interrupt |  |
| 38 | AP-UART5-TX | PI10; multiplexed with SPI, UART or interrupt |  |
| 39 | AP-UART5-RX | PI11; multiplexed with SPI, UART or interrupt |  |
| 40 | UART2-TX-GPS | PI19; multiplexed with SPI, UART or interrupt |  |
| 41 | UART2-RX-GPS | PI18; multiplexed with SPI, UART or interrupt |  |
| 42 | UART2-RTS-GPS | PI17; multiplexed with SPI, UART or interrupt |  |
| 43 | UART2-CTS-GPS | PI16; multiplexed with SPI, UART or interrupt |  |

## Core board pin definitions 2

| Pin number | Signal | Type / multiplexing | Description |
| --- | --- | --- | --- |
| 44 | ECLKIN | GMAC data interface; multiplexed with GPIO or CAN bus interface |  |
| 45 | EMDC | GMAC data interface; multiplexed with GPIO or UART |  |
| 46 | EMDIO | GMAC data interface; multiplexed with GPIO or UART |  |
| 47 | ETXCK | GMAC data interface; multiplexed with GPIO or UART |  |
| 48 | EPHY-RST-N | GMAC data interface; multiplexed with GPIO or CAN bus interface |  |
| 49 | ERXCK | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 50 | ERXDV | GMAC data interface; multiplexed with GPIO or UART |  |
| 51 | ERXERR | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 52 | ERXD0 | GMAC data interface; multiplexed with GPIO, UART or SPI interface |  |
| 53 | ERXD1 | GMAC data interface; multiplexed with GPIO, UART or SPI interface |  |
| 54 | ERXD2 | GMAC data interface; multiplexed with GPIO, UART or SPI interface |  |
| 55 | ERXD3 | GMAC data interface; multiplexed with GPIO, UART or SPI interface |  |
| 56 | ECRS | GMAC data interface; multiplexed with GPIO or UART |  |
| 57 | ETXEN | GMAC data interface; multiplexed with GPIO or UART |  |
| 58 | ETXD0 | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 59 | ETXD1 | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 60 | ETXD2 | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 61 | ETXD3 | GMAC data interface; multiplexed with GPIO or SPI interface |  |
| 62 | SPI2_CLK | SPI interface; multiplexed with GPIO |  |
| 63 | SPI2_MOSI | SPI interface; multiplexed with GPIO |  |
| 64 | SPI2_MISO | SPI interface; multiplexed with GPIO |  |
| 65 | SPI2_CS0 | SPI interface; multiplexed with GPIO |  |
| 66 | LCD-PWM | PWM0 interface; multiplexed with GPIO |  |
| 67 | LCD-PIO0 | PWM7 interface; multiplexed with GPIO |  |
| 68 | LCD-BL-EN | PWM6 interface; multiplexed with GPIO |  |
| 69 | LCD-PIO1 | GPIO; multiplexed with UART3 or LCD |  |
| 70 | USB-ID | PH16; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 71 | HP_EDT | PH12; multiplexed with LCD, interrupt or CSI |  |
| 72 | CTP-INT | PH15; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 73 | CAM_PN | GPIO; multiplexed with LCD, interrupt, matrix keyboard or CSI |  |
| 74 | CAM_PD | GPIO; multiplexed with UART3 or LCD |  |
| 75 | CAM_EN | PH23; multiplexed with LCD, matrix keyboard or CSI |  |
| 76 | CSI-RST | PH18; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 77 | GPS-STANDBY | PH19; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 78 | USB0-VBUSDET | PH17; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 79 | BB-PWR-BAT | PH25; multiplexed with LCD, matrix keyboard or CSI |  |
| 80 | AP-WAKP-2/3G | PH22; multiplexed with LCD, matrix keyboard or CSI |  |
| 81 | UART4_TX | UART4; multiplexed with GPIO, LCD, interrupt or camera interface |  |
| 82 | UART4_RX | UART4; multiplexed with GPIO, LCD, interrupt or camera interface |  |
| 83 | UART0_TX | UART0; multiplexed with GPIO |  |
| 84 | UART0_RX | UART0; multiplexed with GPIO |  |
| 85 | RESET_KEY | Reset pin | Low level resets the SoC |
| 86 | CTP-RST | PH14; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |

## Core board pin definitions 3

| Pin number | Signal | Type / multiplexing | Description |
| --- | --- | --- | --- |
| 87 | UART3_TX | PG6; multiplexed with CSI or UART |  |
| 88 | UART3_RX | PG7; multiplexed with CSI or UART |  |
| 89 | UART5-RX | UART5; multiplexed with GPIO, LCD, interrupt or CSI interface |  |
| 90 | UART5-TX | UART5; multiplexed with GPIO, LCD, interrupt or CSI interface |  |
| 91 | UART7-TX | PI20; multiplexed with PS2, UART or PWM2 |  |
| 92 | UART7-RX | PI21; multiplexed with PS2, UART or PWM3 |  |
| 93 | TWI1-SDA | I2C1 channel; multiplexed with GPIO |  |
| 94 | TWI1-SCK | I2C1 channel; multiplexed with GPIO |  |
| 95 | TWI2-SCK | I2C2 channel; multiplexed with GPIO or PWM4 |  |
| 96 | TWI2-SDA | I2C2 channel; multiplexed with GPIO or PWM5 |  |
| 97 | KEYADC0 | ADC0; supports detection of multiple independent keys |  |
| 98 | FEL | Dedicated firmware download pin | Low level selects download mode |
| 99 | LVDS1_D0N-LCD_D11 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 100 | LVDS1_D0P-LCD_D10 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 101 | LVDS1_D1N-LCD_D13 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 102 | LVDS1_D1P-LCD_D12 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 103 | LVDS1_D2N-LCD_D15 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 104 | LVDS1_D2P-LCD_D14 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 105 | LVDS1_DCKN-LCD_D17 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 106 | LVDS1_DCKP-LCD_D16 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 107 | LVDS1_D3N-LCD_D19 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 108 | LVDS1_D3P-LCD_D18 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 109 | LCD_D20 | RGB display signals; multiplexed with GPIO |  |
| 110 | LCD_D21 | RGB display signals; multiplexed with GPIO |  |
| 111 | LCD_D22 | RGB display signals; multiplexed with GPIO |  |
| 112 | LCD_D23 | RGB display signals; multiplexed with GPIO |  |
| 113 | LCD-CLK | RGB display signals; multiplexed with GPIO |  |
| 114 | LCD-VSYNC | RGB display signals; multiplexed with GPIO |  |
| 115 | LCD-HSYNC | RGB display signals; multiplexed with GPIO |  |
| 116 | LCD-DE | RGB display signals; multiplexed with GPIO |  |
| 117 | MIPI-DSI-D0P | MIPI DSI differential pair | Dedicated MIPI pin |
| 118 | MIPI-DSI-D0N | MIPI DSI differential pair | Dedicated MIPI pin |
| 119 | MIPI-DSI-D1P | MIPI DSI differential pair | Dedicated MIPI pin |
| 120 | MIPI-DSI-D1N | MIPI DSI differential pair | Dedicated MIPI pin |
| 121 | MIPI-DSI-D2P | MIPI DSI differential pair | Dedicated MIPI pin |
| 122 | MIPI-DSI-D2N | MIPI DSI differential pair | Dedicated MIPI pin |
| 123 | MIPI-DSI-D3P | MIPI DSI differential pair | Dedicated MIPI pin |
| 124 | MIPI-DSI-D3N | MIPI DSI differential pair | Dedicated MIPI pin |
| 125 | MIPI-DSI-CKP | MIPI DSI differential pair | Dedicated MIPI pin |
| 126 | MIPI-DSI-CKN | MIPI DSI differential pair | Dedicated MIPI pin |
| 127 | PWRON | Power on/off signal | Active low |
| 128 | LVDS0_D0N-LCD_D1 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 129 | LVDS0_D0P-LCD_D0 | LVDS/RGB display signal pair; multiplexed with GPIO |  |

## Core board pin definitions 4

| Pin number | Signal | Type / multiplexing | Description |
| --- | --- | --- | --- |
| 130 | LVDS0_D1N-LCD_D3 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 131 | LVDS0_D1P-LCD_D2 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 132 | LVDS0_D2N-LCD_D5 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 133 | LVDS0_D2P-LCD_D4 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 134 | LVDS0_DCKN-LCD_D7 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 135 | LVDS0_DCKP-LCD_D6 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 136 | LVDS0_D3P-LCD_D8 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 137 | LVDS0_D3N-LCD_D9 | LVDS/RGB display signal pair; multiplexed with GPIO |  |
| 138 | PS | PMU power output |  |
| 139 | PS | PMU power output |  |
| 140 | VBAT | Battery power input |  |
| 141 | VBAT | Battery power input |  |
| 142 | TS | Battery TS signal |  |
| 143 | DC_5V | Core board power input | 4.5–5.5 V supply |
| 144 | DC_5V | Core board power input | 4.5–5.5 V supply |
| 145 | GND | Ground |  |
| 146 | GND | Ground |  |
| 147 | USBVBUS | OTG power supply |  |
| 148 | VCC-RTC | RTC power input | PMU RTC supply, approximately 80 µA by default; may be left unconnected when an external RTC chip is used |
| 149 | CVBS | TVOUT3 channel |  |
| 150 | TVIN0 | TVIN0 channel |  |
| 151 | HPOUTL | Headphone output |  |
| 152 | HPOUTR | Headphone output |  |
| 153 | AGND | Analog ground |  |
| 154 | MICIN1 | Microphone input |  |
| 155 | MICIN2 | Microphone input |  |
| 156 | VMIC | Microphone bias voltage |  |
| 157 | ESRXP | SATA differential pair | Dedicated SATA pin |
| 158 | ESRXM | SATA differential pair | Dedicated SATA pin |
| 159 | ESTXP | SATA differential pair | Dedicated SATA pin |
| 160 | ESTXM | SATA differential pair | Dedicated SATA pin |
| 161 | BT-WAKE-AP-SOC | PH11; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 162 | WL-SDIO-CMD | PG0; multiplexed with SDIO or CSI |  |
| 163 | WL-SDIO-D0 | PG2; multiplexed with SDIO or CSI |  |
| 164 | WL-SDIO-D1 | PG3; multiplexed with SDIO or CSI |  |
| 165 | WL-SDIO-D2 | PG4; multiplexed with SDIO or CSI |  |
| 166 | WL-SDIO-D3 | PG5; multiplexed with SDIO or CSI |  |
| 167 | BT-UART-CTS | PG8; multiplexed with SDIO, UART or CSI |  |
| 168 | BT-UART-RTS | PG9; multiplexed with SDIO, UART or CSI |  |
| 169 | WL-WAKE-AP-SOC | PH9; multiplexed with LCD, matrix keyboard, interrupt or CSI |  |
| 170 | WL-SDIO-CLK | PG1; multiplexed with SDIO or CSI |  |
| 171 | SDC0-CLK | SDIO0 channel; multiplexed with GPIO interface or UART0_TX |  |
| 172 | SDC0-CMD | SDIO0 channel; multiplexed with GPIO interface |  |
