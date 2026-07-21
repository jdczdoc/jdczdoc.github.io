---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the X3588S core board
---

# Pin Definition

This section lists the pin definition of the X3588S core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | TYPEC0_USB20_OT<br />G_ID | TypeC0 dedicated OTG detection pin <br /> | not available as GPIO |
| 2 | TYPEC0_SBU2 | TYPECdifferential pair | not available as GPIO port |
| 3 | TYPEC0_SBU1 | TYPECdifferential pair | not available as GPIO port |
| 4 | TYPEC0_SBU2_DC | TYPECdifferential pair | not available as GPIO port |
| 5 | TYPEC0_SBU1_DC | TYPECdifferential pair | not available as GPIO port |
| 6 | TYPEC0_OTG_DM | TYPECdifferential pair | not available as GPIO port |
| 7 | TYPEC0_OTG_DP | TYPECdifferential pair | not available as GPIO port |
| 8 | TYPEC0_SSRX1N | TYPECdifferential pair | not available as GPIO port |
| 9 | TYPEC0_SSRX1P | TYPECdifferential pair | not available as GPIO port |
| 10 | TYPEC0_SSTX1P | TYPECdifferential pair | not available as GPIO port |
| 11 | TYPEC0_SSTX1N | TYPECdifferential pair | not available as GPIO port |
| 12 | TYPEC0_SSRX2N | TYPECdifferential pair | not available as GPIO port |
| 13 | TYPEC0_SSRX2P | TYPECdifferential pair | not available as GPIO port |
| 14 | TYPEC0_SSTX2P | TYPECdifferential pair | not available as GPIO port |
| 15 | TYPEC0_SSTX2N | TYPECdifferential pair | not available as GPIO port |
| 16 | VBUS_TYPEC |  |  |
| 17 | VCC_5V0_PWREN_<br />H/GPIO4_A2_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 18 | MIPI_CAM3_PDN_L<br />/GPIO3_C6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 19 | MIPI_CAM3_RST_L/<br />GPIO3_C4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 20 | MIPI_CAM3_PWRE<br />N_H/GPIO3_C5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 21 | MIPI_DPHY1_TX_0<br />N/MIPI_DPHY1_RX<br />_0N | MIPIDPHY1differential pair | not available as GPIO port |
| 22 | MIPI_DPHY1_TX_0<br />P/MIPI_DPHY1_RX_<br />0P | MIPIDPHY1differential pair | not available as GPIO port |
| 23 | MIPI_DPHY1_TX_1<br />N/MIPI_DPHY1_RX<br />_1N | MIPIDPHY1differential pair | not available as GPIO port |
| 24 | MIPI_DPHY1_TX_1<br />P/MIPI_DPHY1_RX_ | MIPIDPHY1differential pair | not available as GPIO port |
| 25 | MIPI_DPHY1_TX_C<br />LKN/MIPI_DPHY1_<br />RX_CLKN | MIPIDPHY1differential pair | not available as GPIO port |
| 26 | MIPI_DPHY1_TX_C<br />LKP/MIPI_DPHY1_<br />RX_CLKP | MIPIDPHY1differential pair | not available as GPIO port |
| 27 | MIPI_DPHY1_TX_2<br />N/MIPI_DPHY1_RX<br />_2N | MIPIDPHY1differential pair | not available as GPIO port |
| 28 | MIPI_DPHY1_TX_2<br />P/MIPI_DPHY1_RX_<br />2P | MIPIDPHY1differential pair | not available as GPIO port |
| 29 | MIPI_DPHY1_TX_3<br />N/MIPI_DPHY1_RX<br />_3N | MIPIDPHY1differential pair | not available as GPIO port |
| 30 | MIPI_DPHY1_TX_3<br />P/MIPI_DPHY1_RX_<br />3P | MIPIDPHY1differential pair | not available as GPIO port |
| 31 | MIPI_DPHY0_TX_D<br />3P | MIPIDPHY0differential pair | not available as GPIO port |
| 32 | MIPI_DPHY0_TX_D<br />3N/MIPI_CPHY0_TX<br />_TRIO2_C | MIPIDPHY0differential pair | not available as GPIO port |
| 33 | MIPI_DPHY0_TX_D<br />0N/MIPI_CPHY0_TX<br />_TRIO0_A | MIPIDPHY0differential pair | not available as GPIO port |
| 34 | MIPI_DPHY0_TX_D<br />0P/MIPI_CPHY0_TX<br />_TRIO0_B | MIPIDPHY0differential pair | not available as GPIO port |
| 35 | MIPI_DPHY0_TX_C<br />LKP/MIPI_CPHY0_T<br />X_TRIO1_C | MIPIDPHY0differential pair | not available as GPIO port |
| 36 | MIPI_DPHY0_TX_C<br />LKN/MIPI_CPHY0_<br />TX_TRIO1_B | MIPIDPHY0differential pair | not available as GPIO port |
| 37 | MIPI_DPHY0_TX_D<br />1N/MIPI_CPHY0_TX<br />_TRIO0_C | MIPIDPHY0differential pair | not available as GPIO port |
| 38 | MIPI_DPHY0_TX_D<br />1P/MIPI_CPHY0_TX<br />_TRIO1_A | MIPIDPHY0differential pair | not available as GPIO port |
| 39 | MIPI_DPHY0_TX_D | MIPIDPHY0differential pair | not available as GPIO port |
| 40 | MIPI_DPHY0_TX_D<br />2P/MIPI_CPHY0_TX<br />_TRIO2_B | MIPIDPHY0differential pair | not available as GPIO port |
| 41 | MIPI_DPHY0_RX_D<br />0N/MIPI_CPHY0_R<br />X_TRIO0_A | MIPIDPHY0differential pair | not available as GPIO port |
| 42 | MIPI_DPHY0_RX_D<br />0P/MIPI_CPHY0_RX<br />_TRIO0_B | MIPIDPHY0differential pair | not available as GPIO port |
| 43 | MIPI_DPHY0_RX_D<br />1N/MIPI_CPHY0_R<br />X_TRIO0_C | MIPIDPHY0differential pair | not available as GPIO port |
| 44 | MIPI_DPHY0_RX_D<br />1P/MIPI_CPHY0_RX<br />_TRIO1_A | MIPIDPHY0differential pair | not available as GPIO port |
| 45 | MIPI_DPHY0_RX_C<br />LKN/MIPI_CPHY0_<br />RX_TRIO1_B | MIPIDPHY0differential pair | not available as GPIO port |
| 46 | MIPI_DPHY0_RX_C<br />LKP/MIPI_CPHY0_R<br />X_TRIO1_C | MIPIDPHY0differential pair | not available as GPIO port |
| 47 | MIPI_DPHY0_RX_D<br />2N/MIPI_CPHY0_R<br />X_TRIO2_A | MIPIDPHY0differential pair | not available as GPIO port |
| 48 | MIPI_DPHY0_RX_D<br />2P/MIPI_CPHY0_RX<br />_TRIO2_B | MIPIDPHY0differential pair | not available as GPIO port |
| 49 | MIPI_DPHY0_RX_D<br />3N/MIPI_CPHY0_R<br />X_TRIO2_C | MIPIDPHY0differential pair | not available as GPIO port |
| 50 | MIPI_DPHY0_RX_D<br />3P | MIPIDPHY0differential pair | not available as GPIO port |

## Core Board Pin Definition2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 51 | I2S2_SDI_M1_BT/G<br />PIO3_B2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 52 | I2S2_SCLK_M1_BT/<br />GPIO3_B5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 53 | I2S2_SDO_M1_BT/G | GPIO multiplexed pin, 1.8V |  |
| 54 | I2S2_LRCK_M1_BT/<br />GPIO3_B6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 55 | MIPI_MCLK_SL/GPI<br />O3_B1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 56 | MIPI_TE0/GPIO3_C2<br />_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 57 | MIPI_CAM1_CLKO<br />UT/GPIO3_A6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 58 | MIPI_CAM2_CLKO<br />UT/GPIO3_A7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 59 | MIPI_CAM3_CLKO<br />UT/GPIO3_B0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 60 | VCC_3V3_S3 | 3.3Vpower output | 3.3V2Apower output, can be powered by <br /> on the base board |
| 61 | VCC_SYSIN | 4Vmain power input | 4V input, current is determined by CPU<br /> workload, it is recommended not to <br /> less than 5A |
| 62 |  |  |  |
| 63 |  |  |  |
| 64 | GND | Ground |  |
| 65 |  |  |  |
| 66 |  |  |  |
| 67 | PWRON_L | PMU enable pin | active low enable |
| 68 | RESET_L | reset pin |  |
| 69 | PMIC_EXT_EN_OU<br />T | PMU external enable pin |  |
| 70 | VCCA | PMU power supply pin |  |
| 71 | VCC_1V8_S3 | 1.8Vpower output | 1.8V2Apower output, can be powered by <br /> on the base board |
| 72 | GND | Ground |  |
| 73 | MIPI_CSI0_RX_CLK<br />1P | MIPICSI0differential pair | not available as GPIO port |
| 74 | MIPI_CSI0_RX_CLK<br />1N | MIPICSI0differential pair | not available as GPIO port |
| 75 | MIPI_CSI0_RX_D2N | MIPICSI0differential pair | not available as GPIO port |
| 76 | MIPI_CSI0_RX_D2P | MIPICSI0differential pair | not available as GPIO port |
| 77 | MIPI_CSI0_RX_CLK<br />0P | MIPICSI0differential pair | not available as GPIO port |
| 78 | MIPI_CSI0_RX_CLK<br />0N | MIPICSI0differential pair | not available as GPIO port |
| 79 | MIPI_CSI0_RX_D3P | MIPICSI0differential pair | not available as GPIO port |
| 80 | MIPI_CSI0_RX_D3N | MIPICSI0differential pair | not available as GPIO port |
| 81 | MIPI_CSI0_RX_D1N | MIPICSI0differential pair | not available as GPIO port |
| 82 | MIPI_CSI0_RX_D1P | MIPICSI0differential pair | not available as GPIO port |
| 83 | MIPI_CSI0_RX_D0P | MIPICSI0differential pair | not available as GPIO port |
| 84 | MIPI_CSI0_RX_D0N | MIPICSI0differential pair | not available as GPIO port |
| 85 | CHRG_OK_H/GPIO0<br />_D5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 86 | WIFI_REG_ON_H/G<br />PIO0_C7_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 87 | BT_REG_ON_H/GPI<br />O0_D4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 88 | SDIO_D0_M1_WIFI/<br />GPIO3_A0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 89 | SDIO_D1_M1_WIFI/<br />GPIO3_A1_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 90 | SDIO_D2_M1_WIFI/<br />GPIO3_A2_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 91 | SDIO_D3_M1_WIFI/<br />GPIO3_A3_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 92 | SDIO_CMD_M1_WI<br />FI/GPIO3_A4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 93 | SDIO_CLK_M1_WIF<br />I/GPIO3_A5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 94 | CC_INT0_L/GPIO0_<br />C4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 95 | UART2_RX_M0 | GPIO multiplexed pin, 1.8V<br /> level |  |
| 96 | UART2_TX_M0 | GPIO multiplexed pin, 1.8V<br /> level |  |
| 97 | BT_WAKE_HOST_H<br />/GPIO0_C5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 98 | HOST_WAKE_BT_H<br />/GPIO0_C6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 99 | WIFI_WAKE_HOST<br />_H/GPIO0_A0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 100 | HALL_INT_L/GPIO0<br />_D3_u | GPIO multiplexed pin, 1.8V<br /> level |  |

## Core Board Pin Definition3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 101 | RTC_INT_L/GPIO0_<br />B0_z | GPIO multiplexed pin, 1.8V<br /> level |  |
| 102 | GAUGE_ALRT/GPI | GPIO multiplexed pin, 1.8V |  |
| 103 | PDM0_CLK1_M0/GP<br />IO1_C4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 104 | RTC_32K_IN | GPIO multiplexed pin, 1.8V<br /> level, defaultused for analog <br />32768Hz clock input |  |
| 105 | GND | Ground |  |
| 106 | PCIE20_0_REFCLKP | PCIE2.0differential pair | not available as GPIO port |
| 107 | PCIE20_0_REFCLK<br />N | PCIE2.0differential pair | not available as GPIO port |
| 108 | PCIE20_0_RXN | PCIE2.0differential pair | not available as GPIO port |
| 109 | PCIE20_0_RXP | PCIE2.0differential pair | not available as GPIO port |
| 110 | PCIE20_0_TXN | PCIE2.0differential pair | not available as GPIO port |
| 111 | PCIE20_0_TXP | PCIE2.0differential pair | not available as GPIO port |
| 112 | PCIE20_2_REFCLK<br />N_SPI4_MOSI_M2_<br />TP | PCIE2.0differential pair | not available as GPIO port |
| 113 | PCIE20_2_REFCLKP<br />_SPI4_MISO_M2_TP | PCIE2.0differential pair | not available as GPIO port |
| 114 | GND | Ground |  |
| 115 | USB30_2_SSTXP | HOST3.0differential pair | not available as GPIO port |
| 116 | USB30_2_SSTXN | HOST3.0differential pair | not available as GPIO port |
| 117 | USB30_2_SSRXP | HOST3.0differential pair | not available as GPIO port |
| 118 | USB30_2_SSRXN | HOST3.0differential pair | not available as GPIO port |
| 119 | HDMI_TX0_HPD_M<br />0/GPIO1_A5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 120 | LCD_RESET_L/GPI<br />O1_B0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 121 | MIPI_CAM2_PDN_L<br />/GPIO1_A7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 122 | MIPI_CAM2_PWRE<br />N_H/GPIO1_B1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 123 | I2C8_SCL_M2_CAM<br />/GPIO1_D6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 124 | I2C8_SDA_M2_CA<br />M/GPIO1_D7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 125 | MIPI_CAM1_PWRE<br />N_H/GPIO1_A4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 126 | I2C5_SDA_M3_CA<br />M/GPIO1_B7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 127 | I2C5_SCL_M3_CAM<br />/GPIO1_D6_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 128 | MIPI_CAM1_PDN_L<br />/GPIO1_A6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 129 | I2C4_SDA_M3_TP/G<br />PIO1_A2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 130 | MIPI_CAM1_RST_L/<br />GPIO1_B2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 131 | MIPI_CAM2_RST_L/<br />GPIO1_B3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 132 | I2C4_SCL_M3_TP/G<br />PIO1_A3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 133 | TP_RST_L/GPIO1_B<br />4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 134 | PDM0_CLK0_M0/GP<br />IO1_C6_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 135 | PDM0_SDI2_M0/GPI<br />O1_D2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 136 | ALPS_INT_L/GPIO1<br />_C1_z | GPIO multiplexed pin, 1.8V<br /> level |  |
| 137 | GSENSOR_INT_L/G<br />PIO1_D3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 138 | I2C7_SCL_M0_COD<br />EC/GPIO1_D0_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 139 | I2C7_SDA_M0_COD<br />EC/GPIO1_D1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 140 | I2S0_MCLK/GPIO1_<br />C2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 141 | PDM0_SDI0/GPIO1_<br />D5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 142 | I2S0_LRCK_TX/GPI<br />O1_C5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 143 | I2S0_SDO0/GPIO1_<br />C7_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 144 | I2S0_SDI0/GPIO1_D<br />4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 145 | I2S0_SCLK_TX/GPI<br />O1_C3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 146 | HP_DET_L/GPIO1_C<br />0_z | GPIO multiplexed pin, 1.8V<br /> level |  |
| 147 | TP_INT_L/GPIO1_B<br />5_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 148 | IR_CAM_RST_AP/G<br />PIO3_B4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 149 | IR_CAM_STROBE_<br />AP/GPIO3_C1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 150 | SL_PWREN/GPIO3_<br />C3_d | GPIO multiplexed pin, 1.8V<br /> level |  |

## Core Board Pin Definition4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 151 | RK803_EN2_PRO/G<br />PIO4_B3_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 152 | RK803_EN1_Flood/G<br />PIO4_A7_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 153 | USB_HOST_PWREN<br />_H/GPIO4_B5_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 154 | IR_CAM_NTC | ADC channel 2 |  |
| 155 | PHONE_CTL/GPIO4<br />_A4_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 156 | LCD_PWREN_H/GPI<br />O4_A3_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 157 | I2C6_SDA_M3/GPIO<br />4_B0_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 158 | I2C6_SCL_M3/GPIO<br />4_B1_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 159 | HDMI_TX0_SCL_M<br />0/GPIO4_B7_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 160 | HDMI0_TX_ON_H/<br />GPIO4_B6_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 161 | HDMI_TX0_SDA_M<br />0/GPIO4_C0_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 162 | HDMI_TX0_CEC_M<br />0/GPIO4_C1_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 163 | UART9_TX_M2_BT/<br />GPIO3_D5_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 164 | UART9_RTSN_M2_<br />BT/GPIO3_D2_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 165 | UART9_CTSN_M2_<br />BT/GPIO3_D3_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 166 | UART9_RX_M2_BT/<br />GPIO3_D4_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 167 | SDMMC_DET_L/GP<br />IO0_A4_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 168 | SDMMC_D1/GPIO4_<br />D1_u | GPIO multiplexed pin, level <br /> is controlled by program PMU |  |
| 169 | SDMMC_D3/GPIO4_<br />D3_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 170 | SDMMC_CMD/GPIO<br />4_D4_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 171 | SDMMC_D2/GPIO4_<br />D2_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 172 | SDMMC_D0/GPIO4_<br />D0_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 173 | SDMMC_CLK/GPIO<br />4_D5_u | GPIO multiplexed pin, the level <br /> is determined by the <br />PLDO5 level of the program control PMU, the default <br /> is 3.3V |  |
| 174 | SDMMC_PWREN/G<br />PIO4_B4_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 175 | PCIE20x1_2_PERST<br />n_M0/GPIO3_D1_d | GPIO multiplexed pin, 1.8V<br /> level |  |
| 176 | PCIE20x1_2_CLKRE<br />Qn_M0/GPIO3_C7_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 177 | PCIE20x1_2_WAKEn<br />_M0/GPIO3_D0_u | GPIO multiplexed pin, 1.8V<br /> level |  |
| 178 | USB20_HOST0_DM | HOST2.0differential pair | not available as GPIO port |
| 179 | USB20_HOST0_DP | HOST2.0differential pair | not available as GPIO port |
| 180 | USB20_HOST1_DM | HOST2.0differential pair | not available as GPIO port |
| 181 | USB20_HOST1_DP | HOST2.0differential pair | not available as GPIO port |
| 182 | EDP_TX0_AUXN/H<br />DMI0_TX_SBDN | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 183 | EDP_TX0_AUXP/H<br />DMI0_TX_SBDP | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 184 | EDP_TX0_D3N/HD<br />MI0_TX3N | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 185 | EDP_TX0_D3P/HDM<br />I0_TX3P | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 186 | EDP_TX0_D0N/HD<br />MI0_TX0N | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 187 | EDP_TX0_D0P/HDM<br />I0_TX0P | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 188 | EDP_TX0_D1N/HD<br />MI0_TX1N | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 189 | EDP_TX0_D1P/HDM<br />I0_TX1P | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 190 | EDP_TX0_D2N/HD<br />MI0_TX2N | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 191 | EDP_TX0_D2P/HDM<br />I0_TX2P | EDP0/HDMI0 differential <br /> pair, controlled by program | not available as GPIO |
| 192 | IR_PRO_NTC | ADC5 channel |  |
| 193 | SARADC_VIN3_HP_<br />HOOK | ADC3 channel |  |
| 194 | SARADC_VIN1_KE<br />Y/RECOVERY | ADC1 channel, multiplexed in <br /> upgrade mode program programming, <br />active low |  |
| 195 | SARADC_VIN0_BO<br />OT | ADC0 channel, multiplexed on <br /> to force MASKROM mode <br /> program programming, low level <br /> is valid |  |
| 196 | SARADC_VIN4_BA<br />TT_TC_L | ADC4 channels |  |
| 197 | SPK_CTL_H | GPIO multiplexed pin, 3.3V<br /> level |  |
| 198 | LCD_BL_PWM14_M<br />1/GPIO4_B2_u | GPIO multiplexed pin, 3.3V<br /> level |  |
| 199 | BQ_OTG_EN_H/GPI<br />O4_A6_d | GPIO multiplexed pin, 3.3V<br /> level |  |
| 200 | TYPEC0_OTG_VBU<br />SDET | TypeC0 dedicated VBUS<br /> detection pin | not available as GPIO |
| RK3128 | X3128CV4 | 144PIN stamp hole interface |  |
| PX30 | X30CV1 | 144PIN stamp hole interface |  |
| RK3288 | X3288CV5 | 180PIN stamp hole interface |  |
| RK3399 | X3399CV3 | 200PIN stamp hole interface |  |
| RK1808 | X1808CV1 | 144PIN stamp hole interface |  |
| MT8385 | X8385CV1 | 168PIN stamp hole interface |  |
| MT8183 | X8183CV1 | 168PIN stamp hole interface |  |
| MT8788 | X8788CV1 | 168PIN stamp hole interface |  |
| MT8768 | X8768CV1 | 168PIN stamp hole interface |  |
| MT8370 | X8370CV1 | 200PIN stamp hole interface |  |
| MT8390 | X8390CV1 | 200PIN stamp hole interface |  |
| T507 | X507CV2 | 172PIN stamp hole interface |  |
| RK3562 | X3562CV1 | 172PIN stamp hole interface |  |
| RK3566 | X3566CV2/X3566CV3 | 200PIN stamp hole interface |  |
| RK3566 | I3566CV1 | 172PIN stamp hole interface |  |
| RK3568 | X3568CV2/X3568CV3 | 200PIN stamp hole interface |  |
| RK3568 | I3568CV1 | 172PIN stamp hole interface |  |
| RK3576 | X3576CV2 | 208PIN stamp hole interface |  |
| RK3588 | I3588CV1 | 320PIN board-to-board connector |  |
| RK3128 | X3128development board | x3128cv4evaluation board |  |
| PX30 | X30development board | x30cv1evaluation board |  |
| RK3288 | x3288development board | x3288cv3evaluation board |  |
| RK3399 | x3399development board | x3399cv3/x3399cv4evaluation board |  |
| RK1808 | x1808development board | x1808cv1evaluation board |  |
| MT8385 | X8385development board | X8385CV1evaluation board |  |
| MT8183 | X8183development board | X8183CV1evaluation board |  |
| MT8788 | X8788development board | X8788CV1evaluation board |  |
| MT8768 | X8768development board | X8768CV1evaluation board |  |
| MT8370 | X8370development board | X8370CV1evaluation board |  |
| MT8390 | X8390development board | X8390CV1evaluation board |  |
| T507 | X507development board | X507CV2evaluation board |  |
| T527 | X527development board | X527CV2evaluation board |  |
| RK3562 | X3562development board | X3562CV1evaluation board |  |
| RK3566 | X3566development board | X3566CV1evaluation board |  |
| RK3566 | I3566 public board | I3566CV1evaluation board |  |
| RK3568 | X3568development board | X3568CV2evaluation board |  |
| RK3568 | I3568 public board | I3568CV1evaluation board |  |
| RK3576 | X3576development board | X3576CV2evaluation board |  |
| RK3588 | I3588development board | I3588CV1evaluation board |  |
| RK3399 | ibox3399card computer |  |  |
| RK3568 | ibox3568card computer |  |  |
