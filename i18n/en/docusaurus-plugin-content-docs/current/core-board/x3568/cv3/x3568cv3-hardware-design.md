---
sidebar_position: 3
title: Hardware Design and Interfaces
description: Hardware Design and Interfaces
---

# Hardware Design and Interfaces

## Power Supply

VCC3V3_SYS on pins 113/114 accepts 3.3 V / 3 A. VCC_RTC on pin 127 is a 3.0 V output. Pins 111/112 are ground; RK809_PWRON on pin 126 is the power key.

The onboard PMIC supplies internal power rails. Design carrier-board peripheral supplies to avoid interference. Power traces should be at least 2 mm wide with at least five vias when changing layers.

## Debug Interface

UART2 TX/RX use pins 73/74; RK809_PWRON is pin 126. The debug UART uses 3.3 V levels and defaults to 115200 baud, 8 data bits, no parity, and 1 stop bit.

## GPIO and Pin Multiplexing

GPIO pins can provide alternate functions such as I2C, UART, SPI, I2S, and PWM. Match peripheral IO levels to the board power domains.

## Interface Connections and Power Sequencing

| Power domain | GPIO supply voltage | X3568CV3 board IO levels |
| --- | --- | --- |
| VCC3V3_SYS | 3.3V | 3.3V |
| VCC1V8_SYS | 1.8V | 1.8V |
| VCC_SD | 3.3V/1.8V | 3.3V/1.8V |
| VCC_1V8 | 1.8V | 1.8V |
| VCC_3V3 | 3.3V | 3.3V |
| VCC_IO | 1.8V/3.3V | Configuration dependent |

| No. | signals | Description |
| --- | --- | --- |
| 1 | VCC3V3_SYS | 3.3V/3A inputestablished |
| 2 | 1.8V | PMIC outputestablished |
| 3 | RK809_PWRON | Active-low power-on |
| 4 | System reset | Release after power stabilizes |
| 5 | MASKROM | Enter for flashing |
| 6 | System startup | UART2 outputboot logs |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| HDMI HPD | 25 | HDMI_TX_HPDIN | 3.3V |
| HDMI CLKN | 49 | HDMI_TXCLKN_PORT | Differential/3.3V |
| HDMI CLKP | 50 | HDMI_TXCLKP_PORT | Differential/3.3V |
| HDMI D0N | 51 | HDMI_TX0N_PORT | Differential/3.3V |
| HDMI D0P | 52 | HDMI_TX0P_PORT | Differential/3.3V |
| HDMI D1N | 53 | HDMI_TX1N_PORT | Differential/3.3V |
| HDMI D1P | 54 | HDMI_TX1P_PORT | Differential/3.3V |
| HDMI D2N | 55 | HDMI_TX2N_PORT | Differential/3.3V |
| HDMI D2P | 56 | HDMI_TX2P_PORT | Differential/3.3V |
| DSI0/LVDS D3P | 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | Differential |
| DSI0/LVDS D3N | 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | Differential |
| DSI0/LVDS D2P | 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | Differential |
| DSI0/LVDS D2N | 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | Differential |
| DSI0/LVDS CLKP | 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | Differential |
| DSI0/LVDS CLKN | 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | Differential |
| DSI0/LVDS D1P | 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | Differential |
| DSI0/LVDS D1N | 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | Differential |
| DSI0/LVDS D0P | 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | Differential |
| DSI0/LVDS D0N | 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | Differential |
| DSI1/eDP D3N | 79 | DSI_TX1_D3N/EDP_TX_D3N | Differential |
| DSI1/eDP D3P | 80 | DSI_TX1_D3P/EDP_TX_D3P | Differential |
| DSI1/eDP D2N | 81 | DSI_TX1_D2N/EDP_TX_D2N | Differential |
| DSI1/eDP D2P | 82 | DSI_TX1_D2P/EDP_TX_D2P | Differential |
| DSI1/eDP D1N | 83 | DSI_TX1_D1N/EDP_TX_D1N | Differential |
| DSI1/eDP D1P | 84 | DSI_TX1_D1P/EDP_TX_D1P | Differential |
| DSI1/eDP D0N | 85 | DSI_TX1_D0N/EDP_TX_D0N | Differential |
| DSI1/eDP D0P | 86 | DSI_TX1_D0P/EDP_TX_D0P | Differential |
| DSI1/eDP AUXN | 87 | DSI_TX1_CLKN/EDP_TX_AUXN | Differential |
| DSI1/eDP AUXP | 88 | DSI_TX1_CLKP/EDP_TX_AUXP | Differential |
| HDMI DDC SDA | 22 | HDMITX_SDA | 3.3V |
| HDMI CEC | 23 | HDMITX_CEC_M0 | 3.3V |
| HDMI DDC SCL | 24 | HDMITX_SCL | 3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Camera reference clock | 76 | REFCLK_OUT_CAM | 3.3V |
| Camera reset | 77 | RESETn | 1.8V |
| MIPI CSI D3P | 27 | MIPI_CSI_RX_D3P | Differential |
| MIPI CSI D3N | 28 | MIPI_CSI_RX_D3N | Differential |
| MIPI CSI D2P | 29 | MIPI_CSI_RX_D2P | Differential |
| MIPI CSI D2N | 30 | MIPI_CSI_RX_D2N | Differential |
| MIPI CSI CLK1P | 31 | MIPI_CSI_RX_CLK1P | Differential |
| MIPI CSI CLK1N | 32 | MIPI_CSI_RX_CLK1N | Differential |
| MIPI CSI CLK0P | 33 | MIPI_CSI_RX_CLK0P | Differential |
| MIPI CSI CLK0N | 34 | MIPI_CSI_RX_CLK0N | Differential |
| MIPI CSI D1P | 35 | MIPI_CSI_RX_D1P | Differential |
| MIPI CSI D1N | 36 | MIPI_CSI_RX_D1N | Differential |
| MIPI CSI D0P | 37 | MIPI_CSI_RX_D0P | Differential |
| MIPI CSI D0N | 38 | MIPI_CSI_RX_D0N | Differential |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| USB2 Host2 DM | 18 | USB2_HOST2_DM | 3.3VDifferential |
| USB2 Host2 DP | 19 | USB2_HOST2_DP | 3.3VDifferential |
| USB2 Host3 DM | 20 | USB2_HOST3_DM | 3.3VDifferential |
| USB2 Host3 DP | 21 | USB2_HOST3_DP | 3.3VDifferential |
| USB3 HostDifferential | 89 | USB3_HOST1_SSTXP | Differential |
| USB3 HostDifferential | 90 | USB3_HOST1_SSTXN | Differential |
| USB3 HostDifferential | 91 | USB3_HOST1_SSRXP | Differential |
| USB3 HostDifferential | 92 | USB3_HOST1_SSRXN | Differential |
| USB3 OTGDifferential/control | 93 | USB3_OTG0_SSTXP | Differential |
| USB3 OTGDifferential/control | 94 | USB3_OTG0_SSTXN | Differential |
| USB3 OTGDifferential/control | 95 | USB3_OTG0_SSRXP | Differential |
| USB3 OTGDifferential/control | 96 | USB3_OTG0_SSRXN | Differential |
| USB3 OTGDifferential/control | 97 | USB3_OTG0_DM | Differential |
| USB3 OTGDifferential/control | 98 | USB3_OTG0_DP | Differential |
| USB3 HostDifferential | 99 | USB3_HOST1_DM | Differential |
| USB3 HostDifferential | 100 | USB3_HOST1_DP | Differential |
| USB3 OTG VBUSdetect/resistor divider | 101 | USB3_OTG0_VBUSDET | 5V |
| USB3 OTG ID/resistor selection | 102 | USB3_OTG0_ID | 1.8V/3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Gigabit Ethernet signals | 128 | GMAC0_RXCLK | 1.8V |
| Gigabit Ethernet signals | 129 | GMAC0_RXD0 | 1.8V |
| Gigabit Ethernet signals | 130 | GMAC0_RXD1 | 1.8V |
| Gigabit Ethernet signals | 131 | GMAC0_RXD2 | 1.8V |
| Gigabit Ethernet signals | 132 | GMAC0_RXD3 | 1.8V |
| Gigabit Ethernet signals | 133 | GMAC0_RXDV_CRS | 1.8V |
| Gigabit Ethernet signals | 134 | GMAC0_TXEN | 1.8V |
| Gigabit Ethernet signals | 135 | GMAC0_TXD0 | 1.8V |
| Gigabit Ethernet signals | 136 | GMAC0_TXD1 | 1.8V |
| Gigabit Ethernet signals | 137 | GMAC0_TXD2 | 1.8V |
| Gigabit Ethernet signals | 138 | GMAC0_TXD3 | 1.8V |
| Gigabit Ethernet signals | 139 | GMAC0_TXCLK | 1.8V |
| UARTsignals | 140 | UART8_RX_M0 | 1.8V |
| UARTsignals | 141 | UART8_TX_M0 | 1.8V |
| UARTsignals | 142 | UART8_RTSn_M0 | 1.8V |
| UARTsignals | 143 | UART8_CTSn_M0 | 1.8V |
| Gigabit Ethernet signals | 144 | GMAC0_MDC | 1.8V |
| Gigabit Ethernet signals | 145 | GMAC0_MCLKINOUT | 1.8V |
| Gigabit Ethernet signals | 146 | GMAC0_MDIO | 1.8V |
| Ethernetreference clock | 147 | ETH0_REFCLKO_25M | 1.8V |
| Gigabit Ethernet signals | 158 | GMAC1_INT/PMEB_GPIO2_D0 | 3.3V |
| Gigabit Ethernet signals | 159 | GMAC1_RSTn_GPIO2_D1 | 3.3V |
| Gigabit Ethernet signals | 160 | GMAC0_INT/PMEB_GPIO2_D2 | 3.3V |
| Gigabit Ethernet signals | 161 | GMAC0_RSTn_GPIO2_D3 | 3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| Headphone right | 117 | HPR_OUT | Analog |
| Headphone left | 118 | HPL_OUT | Analog |
| MIC1positive input | 119 | MIC1_INP | Analog |
| MIC1negative input | 120 | MIC1_INN | Analog |
| Speaker positive | 121 | SPKP_OUT | Analog |
| Speaker negative | 122 | SPKN_OUT | Analog |
| Headphone detect | 175 | HP_DET_L_GPIO3_C2 | 3.3V |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| SD card signals | 103 | SDMMC0_DET_L | 3.3V |
| SD card signals | 104 | SDMMC0_D3 | 3.3V |
| SD card signals | 105 | SDMMC0_D2 | 3.3V |
| SD card signals | 106 | SDMMC0_D1 | 3.3V |
| SD card signals | 107 | SDMMC0_D0 | 3.3V |
| SD card signals | 108 | SDMMC0_CMD/CAN0_TX_M1 | 3.3V |
| SD card signals | 109 | SDMMC0_CLK/CAN0_RX_M1 | 3.3V |

| Resource | Count | Description |
| --- | --- | --- |
| UART | 4  channel(s)  | UART2 73/74; UART3 162/163; UART4 182/183; UART8 140–143 |
| I2C | 2  channel(s)  | I2C1 10/12; I2C3 148/149 |
| I2S | 1  channel(s)  | I2S3 184–187 |
| PWM | 1  channel(s)  | PWM7_IR 8 |
| ADC | 2  channel(s)  | SARADC_VIN0 124; SARADC_VIN1 125 |
| SPI | Not separately exposed | Implement using GPIO or carrier-board expansion |
| GPIO | Multiple | GPIO0/3/4 multiplexing |

| Function | Pin | Signal | Voltage |
| --- | --- | --- | --- |
| USB3 OTG VBUSdetect/resistor divider | 101 | USB3_OTG0_VBUSDET | 5V |
| USB3 OTG ID/resistor selection | 102 | USB3_OTG0_ID | 1.8V/3.3V |
| Expansion power enable / resistor selection | 110 | EXT_EN | 3.3V |
| Ground | 111 | GND | 0V |
| Ground | 112 | GND | 0V |
| 3.3 V system power | 113 | VCC3V3_SYS | 3.3V |
| 3.3 V system power | 114 | VCC3V3_SYS | 3.3V |
| SARADCkey/recovery mode/resistor divider | 124 | SARADC_VIN0_KEY/RECOVERY | 1.8V |
| SARADCchannel 2/resistor divider | 125 | SARADC_VIN1 | 1.8V |
| PMICPower key | 126 | RK809_PWRON | 1.8V |
| RTCbackup power | 127 | VCC_RTC | 3V |

| Pin | Multiplexed signal | Resistor configuration | Description |
| --- | --- | --- | --- |
| 67 | PCIE20_REFCLKN/GPIO0_C4 | R4009 0Ω → PCIe2.0; R4010 0Ω → GPIO0_C4 | Populate one option only |
| 68 | PCIE20_REFCLKP/GPIO0_C2 | R4011 0Ω → PCIe2.0; R4012 0Ω → GPIO0_C2 | Select one option |
| 69 | SATA2_RXN/GPIO0_C7 | R4013 0Ω → SATA2; R4014 0Ω → GPIO0_C7 | Select one option |
| 70 | SATA2_RXP/GPIO0_C5 | R4015 0Ω → SATA2; R4016 0Ω → GPIO0_C5 | Select one option |
| 71 | SATA2_TXN/GPIO1_A4 | R4017 0Ω → SATA2; R4018 0Ω → GPIO1_A4 | Select one option |
| 72 | SATA2_TXP/GPIO0_B7 | R4019 0Ω → SATA2; R4020 0Ω → GPIO0_B7 | Select one option |
| 79 | DSI1 D3N / EDP D3N | 0Ωseries | DSI1/EDP shared differential pair |
| 80 | DSI1 D3P / EDP D3P | 0Ωseries | DSI1/EDP shared differential pair |
| 81 | DSI1 D2N / EDP D2N | 0Ωseries | DSI1/EDP shared differential pair |
| 82 | DSI1 D2P / EDP D2P | 0Ωseries | DSI1/EDP shared differential pair |
| 83 | DSI1 D1N / EDP D1N | 0Ωseries | DSI1/EDP shared differential pair |
| 84 | DSI1 D1P / EDP D1P | 0Ωseries | DSI1/EDP shared differential pair |
| 85 | DSI1 D0N / EDP D0N | 0Ωseries | DSI1/EDP shared differential pair |
| 86 | DSI1 D0P / EDP D0P | 0Ωseries | DSI1/EDP shared differential pair |
| 87 | DSI1 CLKN / EDP AUXN | R4030 0Ω+R4039 NC → DSI; R4030 NC+R4039 0Ω → EDP | Clock / AUX selection |
| 88 | DSI1 CLKP / EDP AUXP | R4031 0Ω+R4040 NC → DSI; R4031 NC+R4040 0Ω → EDP | Clock / AUX selection |

| Item | X3568CV2 | X3568CV3 | Description |
| --- | --- | --- | --- |
| Pin count | 200PIN | 200PIN | Identical |
| Pin | 1–200 | 1–200 | Identical pin by pin |
| signals/multiplexing | See Pin Definitions | See Pin Definitions | Identical |
| resistor selection | See Revision Notes | See Revision Notes | Identical |
| Memory | 2  chips DDR4 | single chip LPDDR4 | No pin impact |
| Power | 3.3V/3A | 3.3V/3A | Identical |
| Conclusion | — | — | No pin differences |

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
| Core board | X3568CV3 | 200PIN |
| Operating system | Android/Linux | Project specific |

## PCB Layout

Keep high-speed differential pairs on the same layer where possible. Match lengths within each pair, maintain continuous reference planes, and avoid routing across plane splits. Add ground return vias near signal vias. Arrange connectors, ESD protection, and common-mode chokes along the signal path.

Provide TVS protection, fusing, and decoupling at the carrier-board power input. Size the 3.3 V and 1.8 V rails for their loads. Keep crystals and DC/DC inductors away from high-speed signals and antennas, and protect exposed interfaces against ESD. Retain debug UART access and test points.

## Technical Support

Provide the board model, carrier-board schematic page, issue description, and serial logs when contacting JDCZ technical support.
