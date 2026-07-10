---
sidebar_position: 2
title: 引脚定义
description: X3588S核心板引脚定义
---

# 引脚定义

本章节列出 X3588S 核心板引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、电压域以及上电默认状态。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | TYPEC0_USB20_OT<br />G_ID | TypeC0 专用 OTG 检<br />测脚 | 不能用作GPIO口 |
| 2 | TYPEC0_SBU2 | TYPEC差分对 | 不可用作GPIO口 |
| 3 | TYPEC0_SBU1 | TYPEC差分对 | 不可用作GPIO口 |
| 4 | TYPEC0_SBU2_DC | TYPEC差分对 | 不可用作GPIO口 |
| 5 | TYPEC0_SBU1_DC | TYPEC差分对 | 不可用作GPIO口 |
| 6 | TYPEC0_OTG_DM | TYPEC差分对 | 不可用作GPIO口 |
| 7 | TYPEC0_OTG_DP | TYPEC差分对 | 不可用作GPIO口 |
| 8 | TYPEC0_SSRX1N | TYPEC差分对 | 不可用作GPIO口 |
| 9 | TYPEC0_SSRX1P | TYPEC差分对 | 不可用作GPIO口 |
| 10 | TYPEC0_SSTX1P | TYPEC差分对 | 不可用作GPIO口 |
| 11 | TYPEC0_SSTX1N | TYPEC差分对 | 不可用作GPIO口 |
| 12 | TYPEC0_SSRX2N | TYPEC差分对 | 不可用作GPIO口 |
| 13 | TYPEC0_SSRX2P | TYPEC差分对 | 不可用作GPIO口 |
| 14 | TYPEC0_SSTX2P | TYPEC差分对 | 不可用作GPIO口 |
| 15 | TYPEC0_SSTX2N | TYPEC差分对 | 不可用作GPIO口 |
| 16 | VBUS_TYPEC |  |  |
| 17 | VCC_5V0_PWREN_<br />H/GPIO4_A2_d | GPIO复用管脚，3.3V<br />电平 |  |
| 18 | MIPI_CAM3_PDN_L<br />/GPIO3_C6_u | GPIO复用管脚，1.8V<br />电平 |  |
| 19 | MIPI_CAM3_RST_L/<br />GPIO3_C4_u | GPIO复用管脚，1.8V<br />电平 |  |
| 20 | MIPI_CAM3_PWRE<br />N_H/GPIO3_C5_u | GPIO复用管脚，1.8V<br />电平 |  |
| 21 | MIPI_DPHY1_TX_0<br />N/MIPI_DPHY1_RX<br />_0N | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 22 | MIPI_DPHY1_TX_0<br />P/MIPI_DPHY1_RX_<br />0P | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 23 | MIPI_DPHY1_TX_1<br />N/MIPI_DPHY1_RX<br />_1N | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 24 | MIPI_DPHY1_TX_1<br />P/MIPI_DPHY1_RX_ | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 25 | MIPI_DPHY1_TX_C<br />LKN/MIPI_DPHY1_<br />RX_CLKN | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 26 | MIPI_DPHY1_TX_C<br />LKP/MIPI_DPHY1_<br />RX_CLKP | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 27 | MIPI_DPHY1_TX_2<br />N/MIPI_DPHY1_RX<br />_2N | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 28 | MIPI_DPHY1_TX_2<br />P/MIPI_DPHY1_RX_<br />2P | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 29 | MIPI_DPHY1_TX_3<br />N/MIPI_DPHY1_RX<br />_3N | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 30 | MIPI_DPHY1_TX_3<br />P/MIPI_DPHY1_RX_<br />3P | MIPIDPHY1差分对 | 不可用作GPIO口 |
| 31 | MIPI_DPHY0_TX_D<br />3P | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 32 | MIPI_DPHY0_TX_D<br />3N/MIPI_CPHY0_TX<br />_TRIO2_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 33 | MIPI_DPHY0_TX_D<br />0N/MIPI_CPHY0_TX<br />_TRIO0_A | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 34 | MIPI_DPHY0_TX_D<br />0P/MIPI_CPHY0_TX<br />_TRIO0_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 35 | MIPI_DPHY0_TX_C<br />LKP/MIPI_CPHY0_T<br />X_TRIO1_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 36 | MIPI_DPHY0_TX_C<br />LKN/MIPI_CPHY0_<br />TX_TRIO1_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 37 | MIPI_DPHY0_TX_D<br />1N/MIPI_CPHY0_TX<br />_TRIO0_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 38 | MIPI_DPHY0_TX_D<br />1P/MIPI_CPHY0_TX<br />_TRIO1_A | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 39 | MIPI_DPHY0_TX_D | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 40 | MIPI_DPHY0_TX_D<br />2P/MIPI_CPHY0_TX<br />_TRIO2_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 41 | MIPI_DPHY0_RX_D<br />0N/MIPI_CPHY0_R<br />X_TRIO0_A | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 42 | MIPI_DPHY0_RX_D<br />0P/MIPI_CPHY0_RX<br />_TRIO0_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 43 | MIPI_DPHY0_RX_D<br />1N/MIPI_CPHY0_R<br />X_TRIO0_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 44 | MIPI_DPHY0_RX_D<br />1P/MIPI_CPHY0_RX<br />_TRIO1_A | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 45 | MIPI_DPHY0_RX_C<br />LKN/MIPI_CPHY0_<br />RX_TRIO1_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 46 | MIPI_DPHY0_RX_C<br />LKP/MIPI_CPHY0_R<br />X_TRIO1_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 47 | MIPI_DPHY0_RX_D<br />2N/MIPI_CPHY0_R<br />X_TRIO2_A | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 48 | MIPI_DPHY0_RX_D<br />2P/MIPI_CPHY0_RX<br />_TRIO2_B | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 49 | MIPI_DPHY0_RX_D<br />3N/MIPI_CPHY0_R<br />X_TRIO2_C | MIPIDPHY0差分对 | 不可用作GPIO口 |
| 50 | MIPI_DPHY0_RX_D<br />3P | MIPIDPHY0差分对 | 不可用作GPIO口 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 51 | I2S2_SDI_M1_BT/G<br />PIO3_B2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 52 | I2S2_SCLK_M1_BT/<br />GPIO3_B5_u | GPIO复用管脚，1.8V<br />电平 |  |
| 53 | I2S2_SDO_M1_BT/G | GPIO复用管脚，1.8V |  |
| 54 | I2S2_LRCK_M1_BT/<br />GPIO3_B6_d | GPIO复用管脚，1.8V<br />电平 |  |
| 55 | MIPI_MCLK_SL/GPI<br />O3_B1_d | GPIO复用管脚，1.8V<br />电平 |  |
| 56 | MIPI_TE0/GPIO3_C2<br />_d | GPIO复用管脚，1.8V<br />电平 |  |
| 57 | MIPI_CAM1_CLKO<br />UT/GPIO3_A6_u | GPIO复用管脚，1.8V<br />电平 |  |
| 58 | MIPI_CAM2_CLKO<br />UT/GPIO3_A7_u | GPIO复用管脚，1.8V<br />电平 |  |
| 59 | MIPI_CAM3_CLKO<br />UT/GPIO3_B0_u | GPIO复用管脚，1.8V<br />电平 |  |
| 60 | VCC_3V3_S3 | 3.3V电源输出 | 3.3V2A电源输出，可用<br />于底板供电 |
| 61 | VCC_SYSIN | 4V主电源输入 | 4V 输入，电流受 CPU<br />工作负载决定，建议不<br />小于5A |
| 62 |  |  |  |
| 63 |  |  |  |
| 64 | GND | 参考地 |  |
| 65 |  |  |  |
| 66 |  |  |  |
| 67 | PWRON_L | PMU使能管脚 | 低电平使能 |
| 68 | RESET_L | 复位管脚 |  |
| 69 | PMIC_EXT_EN_OU<br />T | PMU对外使能管脚 |  |
| 70 | VCCA | PMU供电管脚 |  |
| 71 | VCC_1V8_S3 | 1.8V电源输出 | 1.8V2A电源输出，可用<br />于底板供电 |
| 72 | GND | 参考地 |  |
| 73 | MIPI_CSI0_RX_CLK<br />1P | MIPICSI0差分对 | 不可用作GPIO口 |
| 74 | MIPI_CSI0_RX_CLK<br />1N | MIPICSI0差分对 | 不可用作GPIO口 |
| 75 | MIPI_CSI0_RX_D2N | MIPICSI0差分对 | 不可用作GPIO口 |
| 76 | MIPI_CSI0_RX_D2P | MIPICSI0差分对 | 不可用作GPIO口 |
| 77 | MIPI_CSI0_RX_CLK<br />0P | MIPICSI0差分对 | 不可用作GPIO口 |
| 78 | MIPI_CSI0_RX_CLK<br />0N | MIPICSI0差分对 | 不可用作GPIO口 |
| 79 | MIPI_CSI0_RX_D3P | MIPICSI0差分对 | 不可用作GPIO口 |
| 80 | MIPI_CSI0_RX_D3N | MIPICSI0差分对 | 不可用作GPIO口 |
| 81 | MIPI_CSI0_RX_D1N | MIPICSI0差分对 | 不可用作GPIO口 |
| 82 | MIPI_CSI0_RX_D1P | MIPICSI0差分对 | 不可用作GPIO口 |
| 83 | MIPI_CSI0_RX_D0P | MIPICSI0差分对 | 不可用作GPIO口 |
| 84 | MIPI_CSI0_RX_D0N | MIPICSI0差分对 | 不可用作GPIO口 |
| 85 | CHRG_OK_H/GPIO0<br />_D5_u | GPIO复用管脚，1.8V<br />电平 |  |
| 86 | WIFI_REG_ON_H/G<br />PIO0_C7_d | GPIO复用管脚，1.8V<br />电平 |  |
| 87 | BT_REG_ON_H/GPI<br />O0_D4_u | GPIO复用管脚，1.8V<br />电平 |  |
| 88 | SDIO_D0_M1_WIFI/<br />GPIO3_A0_u | GPIO复用管脚，1.8V<br />电平 |  |
| 89 | SDIO_D1_M1_WIFI/<br />GPIO3_A1_u | GPIO复用管脚，1.8V<br />电平 |  |
| 90 | SDIO_D2_M1_WIFI/<br />GPIO3_A2_u | GPIO复用管脚，1.8V<br />电平 |  |
| 91 | SDIO_D3_M1_WIFI/<br />GPIO3_A3_u | GPIO复用管脚，1.8V<br />电平 |  |
| 92 | SDIO_CMD_M1_WI<br />FI/GPIO3_A4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 93 | SDIO_CLK_M1_WIF<br />I/GPIO3_A5_d | GPIO复用管脚，1.8V<br />电平 |  |
| 94 | CC_INT0_L/GPIO0_<br />C4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 95 | UART2_RX_M0 | GPIO复用管脚，1.8V<br />电平 |  |
| 96 | UART2_TX_M0 | GPIO复用管脚，1.8V<br />电平 |  |
| 97 | BT_WAKE_HOST_H<br />/GPIO0_C5_u | GPIO复用管脚，1.8V<br />电平 |  |
| 98 | HOST_WAKE_BT_H<br />/GPIO0_C6_u | GPIO复用管脚，1.8V<br />电平 |  |
| 99 | WIFI_WAKE_HOST<br />_H/GPIO0_A0_d | GPIO复用管脚，1.8V<br />电平 |  |
| 100 | HALL_INT_L/GPIO0<br />_D3_u | GPIO复用管脚，1.8V<br />电平 |  |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 101 | RTC_INT_L/GPIO0_<br />B0_z | GPIO复用管脚，1.8V<br />电平 |  |
| 102 | GAUGE_ALRT/GPI | GPIO复用管脚，1.8V |  |
| 103 | PDM0_CLK1_M0/GP<br />IO1_C4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 104 | RTC_32K_IN | GPIO复用管脚，1.8V<br />电平，默认用于模拟<br />32768Hz时钟输入 |  |
| 105 | GND | 参考地 |  |
| 106 | PCIE20_0_REFCLKP | PCIE2.0差分对 | 不可用作GPIO口 |
| 107 | PCIE20_0_REFCLK<br />N | PCIE2.0差分对 | 不可用作GPIO口 |
| 108 | PCIE20_0_RXN | PCIE2.0差分对 | 不可用作GPIO口 |
| 109 | PCIE20_0_RXP | PCIE2.0差分对 | 不可用作GPIO口 |
| 110 | PCIE20_0_TXN | PCIE2.0差分对 | 不可用作GPIO口 |
| 111 | PCIE20_0_TXP | PCIE2.0差分对 | 不可用作GPIO口 |
| 112 | PCIE20_2_REFCLK<br />N_SPI4_MOSI_M2_<br />TP | PCIE2.0差分对 | 不可用作GPIO口 |
| 113 | PCIE20_2_REFCLKP<br />_SPI4_MISO_M2_TP | PCIE2.0差分对 | 不可用作GPIO口 |
| 114 | GND | 参考地 |  |
| 115 | USB30_2_SSTXP | HOST3.0差分对 | 不可用作GPIO口 |
| 116 | USB30_2_SSTXN | HOST3.0差分对 | 不可用作GPIO口 |
| 117 | USB30_2_SSRXP | HOST3.0差分对 | 不可用作GPIO口 |
| 118 | USB30_2_SSRXN | HOST3.0差分对 | 不可用作GPIO口 |
| 119 | HDMI_TX0_HPD_M<br />0/GPIO1_A5_d | GPIO复用管脚，1.8V<br />电平 |  |
| 120 | LCD_RESET_L/GPI<br />O1_B0_u | GPIO复用管脚，1.8V<br />电平 |  |
| 121 | MIPI_CAM2_PDN_L<br />/GPIO1_A7_u | GPIO复用管脚，1.8V<br />电平 |  |
| 122 | MIPI_CAM2_PWRE<br />N_H/GPIO1_B1_d | GPIO复用管脚，1.8V<br />电平 |  |
| 123 | I2C8_SCL_M2_CAM<br />/GPIO1_D6_u | GPIO复用管脚，1.8V<br />电平 |  |
| 124 | I2C8_SDA_M2_CA<br />M/GPIO1_D7_u | GPIO复用管脚，1.8V<br />电平 |  |
| 125 | MIPI_CAM1_PWRE<br />N_H/GPIO1_A4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 126 | I2C5_SDA_M3_CA<br />M/GPIO1_B7_u | GPIO复用管脚，1.8V<br />电平 |  |
| 127 | I2C5_SCL_M3_CAM<br />/GPIO1_D6_u | GPIO复用管脚，1.8V<br />电平 |  |
| 128 | MIPI_CAM1_PDN_L<br />/GPIO1_A6_d | GPIO复用管脚，1.8V<br />电平 |  |
| 129 | I2C4_SDA_M3_TP/G<br />PIO1_A2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 130 | MIPI_CAM1_RST_L/<br />GPIO1_B2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 131 | MIPI_CAM2_RST_L/<br />GPIO1_B3_d | GPIO复用管脚，1.8V<br />电平 |  |
| 132 | I2C4_SCL_M3_TP/G<br />PIO1_A3_d | GPIO复用管脚，1.8V<br />电平 |  |
| 133 | TP_RST_L/GPIO1_B<br />4_u | GPIO复用管脚，1.8V<br />电平 |  |
| 134 | PDM0_CLK0_M0/GP<br />IO1_C6_d | GPIO复用管脚，1.8V<br />电平 |  |
| 135 | PDM0_SDI2_M0/GPI<br />O1_D2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 136 | ALPS_INT_L/GPIO1<br />_C1_z | GPIO复用管脚，1.8V<br />电平 |  |
| 137 | GSENSOR_INT_L/G<br />PIO1_D3_d | GPIO复用管脚，1.8V<br />电平 |  |
| 138 | I2C7_SCL_M0_COD<br />EC/GPIO1_D0_d | GPIO复用管脚，1.8V<br />电平 |  |
| 139 | I2C7_SDA_M0_COD<br />EC/GPIO1_D1_d | GPIO复用管脚，1.8V<br />电平 |  |
| 140 | I2S0_MCLK/GPIO1_<br />C2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 141 | PDM0_SDI0/GPIO1_<br />D5_d | GPIO复用管脚，1.8V<br />电平 |  |
| 142 | I2S0_LRCK_TX/GPI<br />O1_C5_d | GPIO复用管脚，1.8V<br />电平 |  |
| 143 | I2S0_SDO0/GPIO1_<br />C7_d | GPIO复用管脚，1.8V<br />电平 |  |
| 144 | I2S0_SDI0/GPIO1_D<br />4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 145 | I2S0_SCLK_TX/GPI<br />O1_C3_d | GPIO复用管脚，1.8V<br />电平 |  |
| 146 | HP_DET_L/GPIO1_C<br />0_z | GPIO复用管脚，1.8V<br />电平 |  |
| 147 | TP_INT_L/GPIO1_B<br />5_u | GPIO复用管脚，1.8V<br />电平 |  |
| 148 | IR_CAM_RST_AP/G<br />PIO3_B4_u | GPIO复用管脚，1.8V<br />电平 |  |
| 149 | IR_CAM_STROBE_<br />AP/GPIO3_C1_d | GPIO复用管脚，1.8V<br />电平 |  |
| 150 | SL_PWREN/GPIO3_<br />C3_d | GPIO复用管脚，1.8V<br />电平 |  |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 151 | RK803_EN2_PRO/G<br />PIO4_B3_u | GPIO复用管脚，3.3V<br />电平 |  |
| 152 | RK803_EN1_Flood/G<br />PIO4_A7_d | GPIO复用管脚，3.3V<br />电平 |  |
| 153 | USB_HOST_PWREN<br />_H/GPIO4_B5_d | GPIO复用管脚，3.3V<br />电平 |  |
| 154 | IR_CAM_NTC | ADC通道2 |  |
| 155 | PHONE_CTL/GPIO4<br />_A4_d | GPIO复用管脚，3.3V<br />电平 |  |
| 156 | LCD_PWREN_H/GPI<br />O4_A3_d | GPIO复用管脚，3.3V<br />电平 |  |
| 157 | I2C6_SDA_M3/GPIO<br />4_B0_d | GPIO复用管脚，3.3V<br />电平 |  |
| 158 | I2C6_SCL_M3/GPIO<br />4_B1_u | GPIO复用管脚，3.3V<br />电平 |  |
| 159 | HDMI_TX0_SCL_M<br />0/GPIO4_B7_u | GPIO复用管脚，3.3V<br />电平 |  |
| 160 | HDMI0_TX_ON_H/<br />GPIO4_B6_d | GPIO复用管脚，3.3V<br />电平 |  |
| 161 | HDMI_TX0_SDA_M<br />0/GPIO4_C0_u | GPIO复用管脚，3.3V<br />电平 |  |
| 162 | HDMI_TX0_CEC_M<br />0/GPIO4_C1_d | GPIO复用管脚，3.3V<br />电平 |  |
| 163 | UART9_TX_M2_BT/<br />GPIO3_D5_d | GPIO复用管脚，1.8V<br />电平 |  |
| 164 | UART9_RTSN_M2_<br />BT/GPIO3_D2_d | GPIO复用管脚，1.8V<br />电平 |  |
| 165 | UART9_CTSN_M2_<br />BT/GPIO3_D3_d | GPIO复用管脚，1.8V<br />电平 |  |
| 166 | UART9_RX_M2_BT/<br />GPIO3_D4_d | GPIO复用管脚，1.8V<br />电平 |  |
| 167 | SDMMC_DET_L/GP<br />IO0_A4_u | GPIO复用管脚，1.8V<br />电平 |  |
| 168 | SDMMC_D1/GPIO4_<br />D1_u | GPIO复用管脚，电平<br />由程序控制 PMU 的 |  |
| 169 | SDMMC_D3/GPIO4_<br />D3_u | GPIO复用管脚，电平<br />由程序控制 PMU 的<br />PLDO5电平决定，默<br />认为3.3V |  |
| 170 | SDMMC_CMD/GPIO<br />4_D4_u | GPIO复用管脚，电平<br />由程序控制 PMU 的<br />PLDO5电平决定，默<br />认为3.3V |  |
| 171 | SDMMC_D2/GPIO4_<br />D2_u | GPIO复用管脚，电平<br />由程序控制 PMU 的<br />PLDO5电平决定，默<br />认为3.3V |  |
| 172 | SDMMC_D0/GPIO4_<br />D0_u | GPIO复用管脚，电平<br />由程序控制 PMU 的<br />PLDO5电平决定，默<br />认为3.3V |  |
| 173 | SDMMC_CLK/GPIO<br />4_D5_u | GPIO复用管脚，电平<br />由程序控制 PMU 的<br />PLDO5电平决定，默<br />认为3.3V |  |
| 174 | SDMMC_PWREN/G<br />PIO4_B4_u | GPIO复用管脚，3.3V<br />电平 |  |
| 175 | PCIE20x1_2_PERST<br />n_M0/GPIO3_D1_d | GPIO复用管脚，1.8V<br />电平 |  |
| 176 | PCIE20x1_2_CLKRE<br />Qn_M0/GPIO3_C7_u | GPIO复用管脚，1.8V<br />电平 |  |
| 177 | PCIE20x1_2_WAKEn<br />_M0/GPIO3_D0_u | GPIO复用管脚，1.8V<br />电平 |  |
| 178 | USB20_HOST0_DM | HOST2.0差分对 | 不可用作GPIO口 |
| 179 | USB20_HOST0_DP | HOST2.0差分对 | 不可用作GPIO口 |
| 180 | USB20_HOST1_DM | HOST2.0差分对 | 不可用作GPIO口 |
| 181 | USB20_HOST1_DP | HOST2.0差分对 | 不可用作GPIO口 |
| 182 | EDP_TX0_AUXN/H<br />DMI0_TX_SBDN | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 183 | EDP_TX0_AUXP/H<br />DMI0_TX_SBDP | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 184 | EDP_TX0_D3N/HD<br />MI0_TX3N | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 185 | EDP_TX0_D3P/HDM<br />I0_TX3P | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 186 | EDP_TX0_D0N/HD<br />MI0_TX0N | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 187 | EDP_TX0_D0P/HDM<br />I0_TX0P | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 188 | EDP_TX0_D1N/HD<br />MI0_TX1N | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 189 | EDP_TX0_D1P/HDM<br />I0_TX1P | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 190 | EDP_TX0_D2N/HD<br />MI0_TX2N | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 191 | EDP_TX0_D2P/HDM<br />I0_TX2P | EDP0/HDMI0 差 分<br />对，通过程序控制 | 不能用作GPIO口 |
| 192 | IR_PRO_NTC | ADC5通道 |  |
| 193 | SARADC_VIN3_HP_<br />HOOK | ADC3通道 |  |
| 194 | SARADC_VIN1_KE<br />Y/RECOVERY | ADC1 通道，复用于<br />升级模式程序烧写，<br />低电平有效 |  |
| 195 | SARADC_VIN0_BO<br />OT | ADC0 通道，复用于<br />强制 MASKROM 模<br />式程序烧写，低电平<br />有效 |  |
| 196 | SARADC_VIN4_BA<br />TT_TC_L | ADC4通道 |  |
| 197 | SPK_CTL_H | GPIO复用管脚，3.3V<br />电平 |  |
| 198 | LCD_BL_PWM14_M<br />1/GPIO4_B2_u | GPIO复用管脚，3.3V<br />电平 |  |
| 199 | BQ_OTG_EN_H/GPI<br />O4_A6_d | GPIO复用管脚，3.3V<br />电平 |  |
| 200 | TYPEC0_OTG_VBU<br />SDET | TypeC0 专用 VBUS<br />检测脚 | 不能用作GPIO口 |
| RK3128 | X3128CV4 | 144PIN邮票孔接口 |  |
| PX30 | X30CV1 | 144PIN邮票孔接口 |  |
| RK3288 | X3288CV5 | 180PIN邮票孔接口 |  |
| RK3399 | X3399CV3 | 200PIN邮票孔接口 |  |
| RK1808 | X1808CV1 | 144PIN邮票孔接口 |  |
| MT8385 | X8385CV1 | 168PIN邮票孔接口 |  |
| MT8183 | X8183CV1 | 168PIN邮票孔接口 |  |
| MT8788 | X8788CV1 | 168PIN邮票孔接口 |  |
| MT8768 | X8768CV1 | 168PIN邮票孔接口 |  |
| MT8370 | X8370CV1 | 200PIN邮票孔接口 |  |
| MT8390 | X8390CV1 | 200PIN邮票孔接口 |  |
| T507 | X507CV2 | 172PIN邮票孔接口 |  |
| RK3562 | X3562CV1 | 172PIN邮票孔接口 |  |
| RK3566 | X3566CV2/X3566CV3 | 200PIN邮票孔接口 |  |
| RK3566 | I3566CV1 | 172PIN邮票孔接口 |  |
| RK3568 | X3568CV2/X3568CV3 | 200PIN邮票孔接口 |  |
| RK3568 | I3568CV1 | 172PIN邮票孔接口 |  |
| RK3576 | X3576CV2 | 208PIN邮票孔接口 |  |
| RK3588 | I3588CV1 | 320PIN板对板连接器 |  |
| RK3128 | X3128开发板 | x3128cv4评估板 |  |
| PX30 | X30开发板 | x30cv1评估板 |  |
| RK3288 | x3288开发板 | x3288cv3评估板 |  |
| RK3399 | x3399开发板 | x3399cv3/x3399cv4评估板 |  |
| RK1808 | x1808开发板 | x1808cv1评估板 |  |
| MT8385 | X8385开发板 | X8385CV1评估板 |  |
| MT8183 | X8183开发板 | X8183CV1评估板 |  |
| MT8788 | X8788开发板 | X8788CV1评估板 |  |
| MT8768 | X8768开发板 | X8768CV1评估板 |  |
| MT8370 | X8370开发板 | X8370CV1评估板 |  |
| MT8390 | X8390开发板 | X8390CV1评估板 |  |
| T507 | X507开发板 | X507CV2评估板 |  |
| T527 | X527开发板 | X527CV2评估板 |  |
| RK3562 | X3562开发板 | X3562CV1评估板 |  |
| RK3566 | X3566开发板 | X3566CV1评估板 |  |
| RK3566 | I3566公板 | I3566CV1评估板 |  |
| RK3568 | X3568开发板 | X3568CV2评估板 |  |
| RK3568 | I3568公板 | I3568CV1评估板 |  |
| RK3576 | X3576开发板 | X3576CV2评估板 |  |
| RK3588 | I3588开发板 | I3588CV1评估板 |  |
| RK3399 | ibox3399卡片电脑 |  |  |
| RK3568 | ibox3568卡片电脑 |  |  |
