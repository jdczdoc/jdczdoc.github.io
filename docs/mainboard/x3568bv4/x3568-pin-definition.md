---
sidebar_position: 3
title: 引脚定义
description: X3568CV2 / X3568CV3 核心板 200PIN 引脚定义
---

# 引脚定义

本页只保留核心板 200PIN 引脚定义，不重复接口功能说明。表格来自 X3568V4 硬件手册中的“扩展接口定义”。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GPIO4_B2 | GPIO | IIC,EBC,GMAC,SPI,IIS复用管脚 |
| 2 | GPIO4_A4 | GPIO | CIF,EBC,GMAC,UART,IIS复用管脚 |
| 3 | GPIO4_A5 | GPIO | CIF,EBC,GMAC,UART,IIS复用管脚 |
| 4 | GPIO3_D6 | GPIO | CIF,EBC,GMAC,UART,PDM复用管脚 |
| 5 | GPIO3_D7 | GPIO | CIF,EBC,GMAC,UART,PDM复用管脚 |
| 6 | GPIO4_A6 | GPIO | ISP,EBC,GMAC,SPI,IIS复用管脚 |
| 7 | GPIO4_A0 | GPIO | CIF,EBC,GMAC,PDM复用管脚 |
| 8 | PWM7_IR | 红外PWM信号 | SPI,PCIE复用管脚 |
| 9 | TP_RST_L_GPIO0_B6 | DSI/EDP复位信号或GPIO | IIC,SPI,PCIE,PWM复用管脚 |
| 10 | I2C1_SDA_TP | I2C1信号 | IIC,CAN,PCIE,JTAG复用管脚 |
| 11 | TP_INT_L_GPIO0_B5 | DSI/EDP中断信号或GPIO | IIC,SPI,PCIE,PWM复用管脚 |
| 12 | I2C1_SCL_TP | I2C1信号 | CAN,PCIE,JTAG复用管脚 |
| 13 | PCIE30X2_PERSTn_M1 | PCIE接口 | LCD,SPI,IIS复用管脚 |
| 14 | PCIE30X2_CLKREQn_M1 | PCIE接口 | LCD,SPI,IIS复用管脚 |
| 15 | PCIE30X2_WAKEn_M1 | PCIE接口 | LCD,SPI,IIS复用管脚 |
| 16 | PCIE30X2_PRSNT_L_GPIO2_D7 | PCIE接口 | LCD,SPI,UART,IIS复用管脚 |
| 17 | PCIECLKIC_OE_H_GPIO3_A7 | PCIE接口 | LCD,GMAC,SDMMC复用管脚 |
| 18 | USB2_HOST2_DM | USB2.0接口 | USB 信号差分对 |
| 19 | USB2_HOST2_DP | USB2.0接口 | USB 信号差分对 |
| 20 | USB2_HOST3_DM | USB2.0接口 | USB 信号差分对 |
| 21 | USB2_HOST3_DP | USB2.0接口 | USB 信号差分对 |
| 22 | HDMITX_SDA | HDMI输出接口 | IIC复用管脚 |
| 23 | HDMITX_CEC_M0 | HDMI输出接口 | SPI复用管脚 |
| 24 | HDMITX_SCL | HDMI输出接口 | IIC复用管脚 |
| 25 | HDMI_TX_HPDIN | HDMI输出接口 | HDMI侦测管脚 |
| 26 | ETH1_REFCLKO_25M_M0 | 以太网接口 | GPIO，LCD，SDMMC复用管脚 |
| 27 | MIPI_CSI_RX_D3P | CSI接口 | CSI差分对 |
| 28 | MIPI_CSI_RX_D3N | CSI接口 | CSI差分对 |
| 29 | MIPI_CSI_RX_D2P | CSI接口 | CSI差分对 |
| 30 | MIPI_CSI_RX_D2N | CSI接口 | CSI差分对 |
| 31 | MIPI_CSI_RX_CLK1P | CSI接口 | CSI差分对 |
| 32 | MIPI_CSI_RX_CLK1N | CSI接口 | CSI差分对 |
| 33 | MIPI_CSI_RX_CLK0P | CSI接口 | CSI差分对 |
| 34 | MIPI_CSI_RX_CLK0N | CSI接口 | CSI差分对 |
| 35 | MIPI_CSI_RX_D1P | CSI接口 | CSI差分对 |
| 36 | MIPI_CSI_RX_D1N | CSI接口 | CSI差分对 |
| 37 | MIPI_CSI_RX_D0P | CSI接口 | CSI差分对 |
| 38 | MIPI_CSI_RX_D0N | CSI接口 | CSI差分对 |
| 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | DSI/LVDS接口 | DSI/LVDS差分对 |
| 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | DSI/LVDS接口 | DSI/LVDS差分对 |
| 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 49 | HDMI_TXCLKN_PORT | HDMI输出接口 | HDMI差分对 |
| 50 | HDMI_TXCLKP_PORT | HDMI输出接口 | HDMI差分对 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 51 | HDMI_TX0N_PORT | HDMI 输出接口 | HDMI差分对 |
| 52 | HDMI_TX0P_PORT | HDMI 输出接口 | HDMI差分对 |
| 53 | HDMI_TX1N_PORT | HDMI 输出接口 | HDMI差分对 |
| 54 | HDMI_TX1P_PORT | HDMI 输出接口 | HDMI差分对 |
| 55 | HDMI_TX2N_PORT | HDMI 输出接口 | HDMI差分对 |
| 56 | HDMI_TX2P_PORT | HDMI 输出接口 | HDMI差分对 |
| 57 | PCIE30_REFCLKN_IN | PCIE接口 | PCIE差分对 |
| 58 | PCIE30_REFCLKP_IN | PCIE接口 | PCIE差分对 |
| 59 | PCIE30_RX1N | PCIE接口 | PCIE差分对 |
| 60 | PCIE30_RX1P | PCIE接口 | PCIE差分对 |
| 61 | PCIE30_RX0N | PCIE接口 | PCIE差分对 |
| 62 | PCIE30_RX0P | PCIE接口 | PCIE差分对 |
| 63 | PCIE30_TX1N | PCIE接口 | PCIE差分对 |
| 64 | PCIE30_TX1P | PCIE接口 | PCIE差分对 |
| 65 | PCIE30_TX0N | PCIE接口 | PCIE差分对 |
| 66 | PCIE30_TX0P | PCIE接口 | PCIE差分对 |
| 67 | PCIE20_REFCLKN/GPIO0_C4 | PCIE接口或GPIO | PCIE差分对或PWM,SPI,UART复用管脚 |
| 68 | PCIE20_REFCLKP/GPIO0_C2 | PCIE接口或GPIO | PCIE差分对或PWM,EDP,JTAG复用管脚 |
| 69 | SATA2_RXN/GPIO0_C7 | SATA接口或GPIO | PWM,UART复用管脚 |
| 70 | SATA2_RXP/GPIO0_C5 | SATA接口或GPIO | PWM,SPI复用管脚 |
| 71 | SATA2_TXN/GPIO1_A4 | SATA接口或GPIO | IIS,UART,PDM,SPDIF复用管脚 |
| 72 | SATA2_TXP/GPIO0_B7 | SATA接口或GPIO | PWM,CPUAVS复用管脚 |
| 73 | UART2_TX_M0_DEBUG | 串口2 | GPIO，串口复用管脚 |
| 74 | UART2_RX_M0_DEBUG | 串口2 | GPIO，串口复用管脚 |
| 75 | WORKING_LEDEN_H_GPIO0_C0 | 使能信号 | PWM,UART,GPUAVS复用管脚 |
| 76 | REFCLK_OUT_CAM | 时钟信号 | GPIO，摄像头时钟复用信号 |
| 77 | RESETn | 复位按键 | 硬件复位管脚，低电平有效 |
| 78 | RK809_32KOUT_WIFI | 时钟输出 | PMU的32768HZ时钟输出信息 |
| 79 | DSI_TX1_D3N/EDP_TX_D3N | DSI/EDP接口 | DSI/EDP差分对 |
| 80 | DSI_TX1_D3P/EDP_TX_D3P | DSI/EDP接口 | DSI/EDP差分对 |
| 81 | DSI_TX1_D2N/EDP_TX_D2N | DSI/EDP接口 | DSI/EDP差分对 |
| 82 | DSI_TX1_D2P/EDP_TX_D2P | DSI/EDP接口 | DSI/EDP差分对 |
| 83 | DSI_TX1_D1N/EDP_TX_D1N | DSI/EDP接口 | DSI/EDP差分对 |
| 84 | DSI_TX1_D1P/EDP_TX_D1P | DSI/EDP接口 | DSI/EDP差分对 |
| 85 | DSI_TX1_D0N/EDP_TX_D0N | DSI/EDP接口 | DSI/EDP差分对 |
| 86 | DSI_TX1_D0P/EDP_TX_D0P | DSI/EDP接口 | DSI/EDP差分对 |
| 87 | DSI_TX1_CLKN/EDP_TX_AUXN | DSI/EDP接口 | DSI/EDP差分对 |
| 88 | DSI_TX1_CLKP/EDP_TX_AUXP | DSI/EDP接口 | DSI/EDP差分对 |
| 89 | USB3_HOST1_SSTXP | USB3.0接口 | SATA,QSGMII复用管脚 |
| 90 | USB3_HOST1_SSTXN | USB3.0接口 | SATA,QSGMII复用管脚 |
| 91 | USB3_HOST1_SSRXP | USB3.0接口 | SATA,QSGMII复用管脚 |
| 92 | USB3_HOST1_SSRXN | USB3.0接口 | SATA,QSGMII复用管脚 |
| 93 | USB3_OTG0_SSTXP | USB3.0接口 | SATA复用管脚 |
| 94 | USB3_OTG0_SSTXN | USB3.0接口 | SATA复用管脚 |
| 95 | USB3_OTG0_SSRXP | USB3.0接口 | SATA复用管脚 |
| 96 | USB3_OTG0_SSRXN | USB3.0接口 | SATA复用管脚 |
| 97 | USB3_OTG0_DM | USB3.0接口 | USB3.0 OTG差分对 |
| 98 | USB3_OTG0_DP | USB3.0接口 | USB3.0 OTG差分对 |
| 99 | USB3_HOST1_DM | USB3.0接口 | USB3.0数据差分对 |
| 100 | USB3_HOST1_DP | USB3.0接口 | USB3.0数据差分对 |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 101 | USB3_OTG0_VBUSDET | USB3.0接口 | OTG检测管脚 |
| 102 | USB3_OTG0_ID | USB3.0接口 | OTG ID脚 |
| 103 | SDMMC0_DET_L | SD接口 | SATA,PCIE复用管脚 |
| 104 | SDMMC0_D3 | SD接口 | UART复用管脚 |
| 105 | SDMMC0_D2 | SD接口 | UART复用管脚 |
| 106 | SDMMC0_D1 | SD接口 | UART,PWM复用管脚 |
| 107 | SDMMC0_D0 | SD接口 | UART,PWM复用管脚 |
| 108 | SDMMC0_CMD/CAN0_TX_M1 | SD接口或CAN | UART,PWM复用管脚 |
| 109 | SDMMC0_CLK/CAN0_RX_M1 | SD接口或CAN | UART,PWM复用管脚 |
| 110 | EXT_EN | 使能信号 | PMU使能输出信号 |
| 111 | GND | 参考地 | 参考地 |
| 112 | GND | 参考地 | 参考地 |
| 113 | VCC3V3_SYS | 3V3 输入 | 核心模块3.3V电源输入，保证1A持续电流 |
| 114 | VCC3V3_SYS | 3V3 输入 | 核心模块3.3V电源输入，保证1A持续电流 |
| 115 | GPIO0_A7 | GPIO |  |
| 116 | GPIO0_D4 | GPIO |  |
| 117 | HPR_OUT | 音频信号输出 | PMU模拟音频输出管脚 |
| 118 | HPL_OUT | 音频信号输出 | PMU模拟音频输出管脚 |
| 119 | MIC1_INP | 麦克风输入 | PMU模拟音频输入管脚 |
| 120 | MIC1_INN | 麦克风输入 | PMU模拟音频输入管脚 |
| 121 | SPKP_OUT | 喇叭接口 | PMU模拟音频输出管脚 |
| 122 | SPKN_OUT | 喇叭接口 | PMU模拟音频输出管脚 |
| 123 | GPIO0_C3 | GPIO | PWM,PCIE,JTAG复用管脚 |
| 124 | SARADC_VIN0_KEY/RECOVERY | ADC 输入管脚 | 主CPU ADC采样输入管脚 |
| 125 | SARADC_VIN1 | ADC 输入管脚 | 主CPU ADC采样输入管脚 |
| 126 | RK809_PWRON | PWRON按键 |  |
| 127 | VCC_RTC | RTC电源输入 | RTC电源输入，2.5到3.3V，静态工作电流0.6uA |
| 128 | GMAC0_RXCLK | 以太网接口 | UART,SDMMC复用管脚 |
| 129 | GMAC0_RXD0 | 以太网接口 | UART,SPI复用管脚 |
| 130 | GMAC0_RXD1 | 以太网接口 | IIS,UART,SPI复用管脚 |
| 131 | GMAC0_RXD2 | 以太网接口 | UART,SDMMC复用管脚 |
| 132 | GMAC0_RXD3 | 以太网接口 | UART,SDMMC复用管脚 |
| 133 | GMAC0_RXDV_CRS | 以太网接口 | IIS,UART,SPI复用管脚 |
| 134 | GMAC0_TXEN | 以太网接口 | UART,SPI复用管脚 |
| 135 | GMAC0_TXD0 | 以太网接口 | UART复用管脚 |
| 136 | GMAC0_TXD1 | 以太网接口 | UART复用管脚 |
| 137 | GMAC0_TXD2 | 以太网接口 | UART,SDMMC复用管脚 |
| 138 | GMAC0_TXD3 | 以太网接口 | UART,SDMMC复用管脚 |
| 139 | GMAC0_TXCLK | 以太网接口 | UART,SDMMC复用管脚 |
| 140 | UART8_RX_M0 | 串口8 | SPI复用管脚 |
| 141 | UART8_TX_M0 | 串口8 | IIS,GMAC,SPI复用管脚 |
| 142 | UART8_RTSn_M0 | 串口8 | SDMMC,IIC,CAN复用管脚 |
| 143 | UART8_CTSn_M0 | 串口8 | SDMMC,IIC,CAN复用管脚 |
| 144 | GMAC0_MDC | 以太网接口 | IIS,UART,SPI复用管脚 |
| 145 | GMAC0_MCLKINOUT | 以太网接口 | IIS,UART,SPI复用管脚 |
| 146 | GMAC0_MDIO | 以太网接口 | IIS,UART,SPI复用管脚 |
| 147 | ETH0_REFCLKO_25M | 以太网接口 | IIS,UART,SPI复用管脚 |
| 148 | I2C3_SCL_M0 | I2C3信号 | UART,CAN,AUDIO,ACODEC复用管脚 |
| 149 | I2C3_SDA_M0 | I2C3信号 | UART,CAN,AUDIO,ACODEC复用管脚 |
| 150 | GPIO0_C1 | GPIO | PWM,UART,JTAG复用管脚 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 151 | GPIO0_A5 | GPIO | SDMMC,SATA,PCIE复用管脚 |
| 152 | GPIO0_A6 | GPIO | SATA,PCIE复用管脚 |
| 153 | GPIO4_C6 | GPIO | PWM,SPI,SATA,UART,IIS复用管脚 |
| 154 | GPIO4_C5 | GPIO | PWM,SPI,SATA,UART,IIS复用管脚 |
| 155 | GPIO4_C4 | GPIO | EDP,SPDIF,SATA,PCIE,IIS复用管脚 |
| 156 | GPIO4_C3 | GPIO | PWM,SPI,CAN,PCIE,IIS复用管脚 |
| 157 | GPIO4_C2 | GPIO | PWM,SPI,CAN,PCIE,IIS复用管脚 |
| 158 | GMAC1_INT/PMEB_GPIO2_D0 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 159 | GMAC1_RSTn_GPIO2_D1 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 160 | GMAC0_INT/PMEB_GPIO2_D2 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 161 | GMAC0_RSTn_GPIO2_D3 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 162 | UART3_TX_M1 | 串口3 | LCD,PWM,GMAC,PDM复用管脚 |
| 163 | UART3_RX_M1 | 串口3 | LCD,PWM,GMAC,PDM复用管脚 |
| 164 | SPDIF_TX_M1 | 光纤接口 | PWM,GMAC,UART,IIS复用管脚 |
| 165 | GPIO3_D5 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 166 | GPIO3_D4 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 167 | GPIO3_D3 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 168 | GPIO3_D2 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 169 | GPIO3_D1 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 170 | GPIO3_D0 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 171 | GPIO3_C7 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 172 | GPIO3_C6 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 173 | GPIO3_C4 | GPIO | PWM,GMAC,UART,PDM复用管脚 |
| 174 | GPIO3_C3 | GPIO | LCD,SPI,UART,IIS复用管脚 |
| 175 | HP_DET_L_GPIO3_C2 | 音频信号输出 | LCD,SPI,UART,IIS复用管脚 |
| 176 | GSENSOR_INT_L_GPIO3_C1 | 传感器信号 | LCD,SPI,PCIE,IIS复用管脚 |
| 177 | HOST_WAKE_BT_H_GPIO3_A2 | WIFI/BT信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 178 | BT_WAKE_HOST_H_GPIO3_A1 | WIFI/BT信号 | LCD,SPI,PCIE,SDMMC复用管脚 |
| 179 | BT_REG_ON_H_GPIO3_A0 | WIFI/BT信号 | LCD,SPI,UART,IIS复用管脚 |
| 180 | GPIO3_B6 | GPIO | LCD,GMAC,IIC,PWM复用管脚 |
| 181 | GPIO3_B5 | GPIO | LCD,GMAC,IIC,PWM复用管脚 |
| 182 | UART4_RX_M1 | 串口4 | LCD,GMAC,PWM复用管脚 |
| 183 | UART4_TX_M1 | 串口4 | LCD,GMAC,PWM复用管脚 |
| 184 | I2S3_SDI_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 185 | I2S3_LRCK_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 186 | I2S3_SCLK_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 187 | I2S3_SDO_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 188 | GPIO4_B7 | GPIO | CIF,EBC,GMAC,IIS复用管脚 |
| 189 | GPIO4_B5 | GPIO | IIC,EBC,CAN,IIS复用管脚 |
| 190 | GPIO4_B6 | GPIO | CIF,EBC,GMAC,UART,IIS复用管脚 |
| 191 | GPIO4_C0 | GPIO | CIF,EBC,PWM复用管脚 |
| 192 | GPIO4_C1 | GPIO | CIF,EBC,GMAC,UART,IIS复用管脚 |
| 193 | GPIO4_B4 | GPIO | IIC,EBC,CAN复用管脚 |
| 194 | GPIO4_B3 | GPIO | IIC,EBC,SPI,IIS复用管脚 |
| 195 | GPIO4_A3 | GPIO | CIF,EBC,GMAC,UART,PDM复用管脚 |
| 196 | GPIO4_A2 | GPIO | CIF,EBC,GMAC,UART,PDM复用管脚 |
| 197 | GPIO4_A1 | GPIO | CIF,EBC,GMAC,PDM复用管脚 |
| 198 | GPIO4_B0 | GPIO | EBC,GMAC,SPI,IIS复用管脚 |
| 199 | GPIO4_A7 | GPIO | EBC,GMAC,SPI,IIS复用管脚 |
| 200 | GPIO4_B1 | GPIO | EBC,GMACIIS复用管脚 |

