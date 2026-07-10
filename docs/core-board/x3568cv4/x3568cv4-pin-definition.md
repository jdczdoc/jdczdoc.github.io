---
sidebar_position: 2
title: 引脚定义
description: X3568CV4核心板引脚定义
---

# 引脚定义

本章节列出 X3568CV4 核心板引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、电压域以及上电默认状态。

## 核心板引脚定义1

| 引脚<br />编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | MIPI_DSI_TX0_D3P/LVDS<br />_TX0_D3P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 2 | MIPI_DSI_TX0_D3N/LVDS<br />_TX0_D3N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 3 | MIPI_DSI_TX0_D2P/LVDS<br />_TX0_D2P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 4 | MIPI_DSI_TX0_D2N/LVDS<br />_TX0_D2N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 5 | MIPI_DSI_TX0_CLKP/LV<br />DS_TX0_CLKP | DSI/LVDS接口 | DSI/LVDS差分对 |
| 6 | MIPI_DSI_TX0_CLKN/LV<br />DS_TX0_CLKN | DSI/LVDS接口 | DSI/LVDS差分对 |
| 7 | MIPI_DSI_TX0_D1P/LVDS<br />_TX0_D1P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 8 | MIPI_DSI_TX0_D1N/LVDS<br />_TX0_D1N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 9 | MIPI_DSI_TX0_D0P/LVDS<br />_TX0_D0P | DSI/LVDS接口 | DSI/LVDS差分对 |
| 10 | MIPI_DSI_TX0_D0N/LVDS<br />_TX0_D0N | DSI/LVDS接口 | DSI/LVDS差分对 |
| 11 | HDMI_TXCLKN_PORT | HDMI输出接口 | HDMI差分对 |
| 12 | HDMI_TXCLKP_PORT | HDMI输出接口 | HDMI差分对 |
| 13 | HDMI_TX0N_PORT | HDMI 输出接口 | HDMI差分对 |
| 14 | HDMI_TX0P_PORT | HDMI 输出接口 | HDMI差分对 |
| 15 | HDMI_TX1N_PORT | HDMI 输出接口 | HDMI差分对 |
| 16 | HDMI_TX1P_PORT | HDMI 输出接口 | HDMI差分对 |
| 17 | HDMI_TX2N_PORT | HDMI 输出接口 | HDMI差分对 |
| 18 | HDMI_TX2P_PORT | HDMI 输出接口 | HDMI差分对 |
| 19 | SATA2_RXN/GPIO0_C7 | SATA 接 口 或<br />GPIO | PWM,UART复用管脚 |
| 20 | SATA2_RXP/GPIO0_C5 | SATA 接 口 或<br />GPIO | PWM,SPI复用管脚 |
| 21 | SATA2_TXN/GPIO1_A4 | SATA 接 口 或<br />GPIO | IIS,UART,PDM,SPDIF复用管脚 |
| 22 | SATA2_TXP/GPIO0_B7 | SATA 接 口 或 | PWM,CPUAVS复用管脚 |
| 23 | USB3_HOST1_SSTXP | USB3.0接口 | SATA,QSGMII复用管脚 |
| 24 | USB3_HOST1_SSTXN | USB3.0接口 | SATA,QSGMII复用管脚 |
| 25 | USB3_HOST1_SSRXP | USB3.0接口 | SATA,QSGMII复用管脚 |
| 26 | USB3_HOST1_SSRXN | USB3.0接口 | SATA,QSGMII复用管脚 |
| 27 | USB3_HOST1_DP | USB3.0接口 | USB3.0数据差分对 |
| 28 | USB3_HOST1_DM | USB3.0接口 | USB3.0数据差分对 |
| 29 | USB3_OTG0_SSTXP | USB3.0接口 | SATA复用管脚 |
| 30 | USB3_OTG0_SSTXN | USB3.0接口 | SATA复用管脚 |
| 31 | USB3_OTG0_SSRXP | USB3.0接口 | SATA复用管脚 |
| 32 | USB3_OTG0_SSRXN | USB3.0接口 | SATA复用管脚 |
| 33 | USB3_OTG0_DM | USB3.0接口 | USB3.0OTG差分对 |
| 34 | USB3_OTG0_DP | USB3.0接口 | USB3.0OTG差分对 |
| 35 | DSI_TX1_D3N/EDP_TX_D<br />3N | DSI/EDP接口 | DSI/EDP差分对 |
| 36 | DSI_TX1_D3P/EDP_TX_D<br />3P | DSI/EDP接口 | DSI/EDP差分对 |
| 37 | DSI_TX1_D2N/EDP_TX_D<br />2N | DSI/EDP接口 | DSI/EDP差分对 |
| 38 | DSI_TX1_D2P/EDP_TX_D<br />2P | DSI/EDP接口 | DSI/EDP差分对 |
| 39 | DSI_TX1_D1N/EDP_TX_D<br />1N | DSI/EDP接口 | DSI/EDP差分对 |
| 40 | DSI_TX1_D1P/EDP_TX_D<br />1P | DSI/EDP接口 | DSI/EDP差分对 |
| 41 | DSI_TX1_D0N/EDP_TX_D<br />0N | DSI/EDP接口 | DSI/EDP差分对 |
| 42 | DSI_TX1_D0P/EDP_TX_D<br />0P | DSI/EDP接口 | DSI/EDP差分对 |
| 43 | DSI_TX1_CLKN/EDP_TX_<br />AUXN | DSI/EDP接口 | DSI/EDP差分对 |

## 核心板引脚定义2

| 引脚<br />编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 44 | DSI_TX1_CLKP/EDP_TX_<br />AUXP | DSI/EDP接口 | DSI/EDP差分对 |
| 45 | REFCLK_OUT_CAM | 时钟信号 | GPIO，摄像头时钟复用信号 |
| 46 | UART2_RX_M0_DEBUG | 串口2 | GPIO，串口复用管脚 |
| 47 | UART2_TX_M0_DEBUG | 串口2 | GPIO，串口复用管脚 |
| 48 | GPIO0_A7 | GPIO |  |
| 49 | RESETN | 复位按键 | 硬件复位管脚，低电平有效 |
| 50 | USB3_OTG0_VBUSDET | USB3.0接口 | OTG检测管脚 |
| 51 | USB3_OTG0_ID | USB3.0接口 | OTGID脚 |
| 52 | GND | 参考地 | 参考地 |
| 53 | GND | 参考地 | 参考地 |
| 54 | VCC3V3_SYS | 3V3 输入 | 核心模块3.3V电源输入，保证1A持<br />续电流 |
| 55 | VCC3V3_SYS | 3V3 输入 | 核心模块3.3V电源输入，保证1A持<br />续电流 |
| 56 | EXT_EN | 使能信号 | PMU使能输出信号 |
| 57 | RK809_PWRON | PWRON按键 |  |
| 58 | MIC1_INN | 麦克风输入 | PMU模拟音频输入管脚 |
| 59 | MIC1_INP | 麦克风输入 | PMU模拟音频输入管脚 |
| 60 | SPKP_OUT | 喇叭接口 | PMU模拟音频输出管脚 |
| 61 | SPKN_OUT | 喇叭接口 | PMU模拟音频输出管脚 |
| 62 | HPL_OUT | 音频信号输出 | PMU模拟音频输出管脚 |
| 63 | HPR_OUT | 音频信号输出 | PMU模拟音频输出管脚 |
| 64 | GND | 参考地 | 参考地 |
| 65 | GMAC0_TXCLK | 以太网接口 | UART,SDMMC复用管脚 |
| 66 | GMAC0_TXEN | 以太网接口 | UART,SPI复用管脚 |
| 67 | GMAC0_TXD0 | 以太网接口 | UART,SPI复用管脚 |
| 68 | GMAC0_TXD1 | 以太网接口 | IIS,UART,SPI复用管脚 |
| 69 | GMAC0_TXD2 | 以太网接口 | UART,SDMMC复用管脚 |
| 70 | GMAC0_TXD3 | 以太网接口 | UART,SDMMC复用管脚 |
| 71 | GMAC0_RXCLK | 以太网接口 | UART,SDMMC复用管脚 |
| 72 | GMAC0_RXD3 | 以太网接口 | UART,SDMMC复用管脚 |
| 73 | GMAC0_RXD2 | 以太网接口 | UART,SDMMC复用管脚 |
| 74 | GMAC0_RXD1 | 以太网接口 | IIS,UART,SPI复用管脚 |
| 75 | GMAC0_RXD0 | 以太网接口 | UART,SPI复用管脚 |
| 76 | GMAC0_RXDV_CRS | 以太网接口 | IIS,UART,SPI复用管脚 |
| 77 | ETH0_REFCLKO_25M | 以太网接口 | IIS,UART,SPI复用管脚 |
| 78 | GMAC0_MCLKINOUT | 以太网接口 | IIS,UART,SPI复用管脚 |
| 79 | GMAC0_MDC | 以太网接口 | IIS,UART,SPI复用管脚 |
| 80 | GMAC0_MDIO | 以太网接口 | IIS,UART,SPI复用管脚 |
| 81 | SDMMC0_CLK/CAN0_RX<br />_M1 | SD 接 口 或<br />CAN | UART,PWM复用管脚 |
| 82 | SDMMC0_D3 | SD接口 | UART复用管脚 |
| 83 | SDMMC0_D1 | SD接口 | UART,PWM复用管脚 |
| 84 | SDMMC0_D0 | SD接口 | UART,PWM复用管脚 |
| 85 | SDMMC0_D2 | SD接口 | UART复用管脚 |
| 86 | SDMMC0_CMD/CAN0_TX<br />_M1 | SD 接 口 或<br />CAN | UART,PWM复用管脚 |

## 核心板引脚定义3

| 引脚<br />编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 87 | GND | 参考地 | 参考地 |
| 88 | SDMMC0_DET_L | SD接口 | SATA,PCIE复用管脚 |
| 89 | SARADC_VIN1 | ADC 输入管<br />脚 | 主CPUADC采样输入管脚 |
| 90 | SARADC_VIN0_KEY/REC<br />OVERY | ADC 输入管<br />脚 | 主CPUADC采样输入管脚 |
| 91 | UART8_RX_M0 | 串口8 | SPI复用管脚 |
| 92 | UART8_RTSN_M0 | 串口8 | SDMMC,IIC,CAN复用管脚 |
| 93 | UART8_CTSN_M0 | 串口8 | SDMMC,IIC,CAN复用管脚 |
| 94 | UART8_TX_M0 | 串口8 | IIS,GMAC,SPI复用管脚 |
| 95 | I2C3_SCL_M0 | I2C3信号 | UART,CAN,AUDIO,ACODEC复用管<br />脚 |
| 96 | I2C3_SDA_M0 | I2C3信号 | UART,CAN,AUDIO,ACODEC复用管<br />脚 |
| 97 | GPIO0_A5 | GPIO | SDMMC,SATA,PCIE复用管脚 |
| 98 | GPIO0_A6 | GPIO | SATA,PCIE复用管脚 |
| 99 | GPIO0_C3 | GPIO | PWM,SPI,CAN,PCIE,IIS复用管脚 |
| 100 | RK809_32KOUT_WIFI | 时钟输出 | PMU的32768HZ时钟输出信息 |
| 101 | GPIO4_C3 | GPIO | PWM,SPI,CAN,PCIE,IIS复用管脚 |
| 102 | GPIO4_C2 | GPIO | PWM,SPI,CAN,PCIE,IIS复用管脚 |
| 103 | GPIO4_C6 | GPIO | PWM,SPI,SATA,UART,IIS复用管脚 |
| 104 | GPIO4_C5 | GPIO | PWM,SPI,SATA,UART,IIS复用管脚 |
| 105 | GPIO4_C4 | GPIO | EDP,SPDIF,SATA,PCIE,IIS复用管脚 |
| 106 | GPIO3_D2 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 107 | HP_DET_L_GPIO3_C2 | 音频信号输出 | LCD,SPI,UART,IIS复用管脚 |
| 108 | GPIO3_D5 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 109 | GPIO3_C7 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 110 | GPIO3_D0 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 111 | GPIO3_C6 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 112 | GPIO3_C3 | GPIO | LCD,SPI,UART,IIS复用管脚 |
| 113 | GMAC0_INT/PMEB_GPIO<br />2_D2 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 114 | GMAC0_RSTN_GPIO2_D3 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 115 | GMAC1_RSTN_GPIO2_D1 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 116 | GMAC1_INT/PMEB_GPIO<br />2_D0 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 117 | UART3_TX_M1 | 串口3 | LCD,PWM,GMAC,PDM复用管脚 |
| 118 | UART3_RX_M1 | 串口3 | LCD,PWM,GMAC,PDM复用管脚 |
| 119 | GSENSOR_INT_L_GPIO3_<br />C1 | 传感器信号 | LCD,SPI,PCIE,IIS复用管脚 |
| 120 | GPIO3_D4 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 121 | I2C5_SDA_M0 | I2C5信号 | LCD,VOP,GMAC,PDM复用管脚 |
| 122 | I2C5_SCL_M0 | I2C5信号 | LCD,VOP,GMAC,PDM复用管脚 |
| 123 | SPDIF_TX_M1 | 光纤接口 | PWM,GMAC,UART,IIS复用管脚 |
| 124 | GPIO3_D1 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 125 | GPIO3_D3 | GPIO | CIF,EBC,SDMMC,IIS复用管脚 |
| 126 | GPIO3_C4 | GPIO | PWM,GMAC,UART,PDM复用管脚 |
| 127 | BT_WAKE_HOST_H_GPI<br />O3_A1 | WIFI/BT信号 | LCD,SPI,PCIE,SDMMC复用管脚 |
| 128 | HOST_WAKE_BT_H_GPI<br />O3_A2 | WIFI/BT信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 129 | GPIO3_B6 | GPIO | LCD,GMAC,IIC,PWM复用管脚 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 130 | GND | 参考地 | 参考地 |
| 131 | GPIO3_B5 | GPIO | LCD,GMAC,IIC,PWM复用管脚 |
| 132 | BT_REG_ON_H_GPIO3_<br />A0 | WIFI/BT信号 | LCD,SPI,UART,IIS复用管脚 |
| 133 | UART4_RX_M1 | 串口4 | LCD,GMAC,PWM复用管脚 |
| 134 | UART4_TX_M1 | 串口4 | LCD,GMAC,PWM复用管脚 |
| 135 | I2S3_SDI_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 136 | I2S3_LRCK_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 137 | I2S3_SCLK_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 138 | I2S3_SDO_M0 | I2S3信号 | LCD,GMAC,IIS,SDMMC复用管脚 |
| 139 | GPIO4_A6 | GPIO | ISP,EBC,GMAC,SPI,IIS复用管脚 |
| 140 | TP_RST_L_GPIO0_B6 | DSI/EDP 复位<br />信号或GPIO | IIC,SPI,PCIE,PWM复用管脚 |
| 141 | PWM7_IR | 红外 PWM 信<br />号 | SPI,PCIE复用管脚 |
| 142 | TP_INT_L_GPIO0_B5 | DSI/EDP 中断<br />信号或GPIO | IIC,SPI,PCIE,PWM复用管脚 |
| 143 | I2C1_SCL_TP | I2C1信号 | CAN,PCIE,JTAG复用管脚 |
| 144 | I2C1_SDA_TP | I2C1信号 | IIC,CAN,PCIE,JTAG复用管脚 |
| 145 | GPIO4_B2_IIC4SDA | GPIO | IIC,EBC,GMAC,SPI,IIS复用管脚 |
| 146 | USB2_HOST2_DM | USB2.0接口 | USB 信号差分对 |
| 147 | USB2_HOST2_DP | USB2.0接口 | USB 信号差分对 |
| 148 | USB2_HOST3_DM | USB2.0接口 | USB 信号差分对 |
| 149 | USB2_HOST3_DP | USB2.0接口 | USB 信号差分对 |
| 150 | GPIO4_B3_IIC4SCL | GPIO | IIC,EBC,SPI,IIS复用管脚 |
| 151 | GPIO4_C0_CIFCLKOUT | GPIO | CIF,EBC,PWM复用管脚 |
| 152 | GPIO4_B4_IIC2SDA | GPIO | IIC,EBC,CAN复用管脚 |
| 153 | GPIO4_B5_IIC2SCL | GPIO | IIC,EBC,CAN,IIS复用管脚 |
| 154 | GPIO3_D7 | GPIO | CIF,EBC,GMAC,UART,PDM复用管<br />脚 |
| 155 | HDMITX_SDA | HDMI 输出接<br />口 | IIC复用管脚 |
| 156 | HDMITX_CEC_M0 | HDMI 输出接<br />口 | SPI复用管脚 |
| 157 | HDMITX_SCL | HDMI 输出接<br />口 | IIC复用管脚 |
| 158 | HDMI_TX_HPDIN | HDMI 输出接<br />口 | HDMI侦测管脚 |
| 159 | GMAC1_RXCLK_M0 | 以太网接口 | LCD,SPI,PCIE,IIS复用管脚 |
| 160 | MIPI_CSI_RX_D3P | CSI接口 | CSI差分对 |
| 161 | MIPI_CSI_RX_D3N | CSI接口 | CSI差分对 |
| 162 | MIPI_CSI_RX_D2P | CSI接口 | CSI差分对 |
| 163 | MIPI_CSI_RX_D2N | CSI接口 | CSI差分对 |
| 164 | MIPI_CSI_RX_CLK1P | CSI接口 | CSI差分对 |
| 165 | MIPI_CSI_RX_CLK1N | CSI接口 | CSI差分对 |
| 166 | MIPI_CSI_RX_CLK0P | CSI接口 | CSI差分对 |
| 167 | MIPI_CSI_RX_CLK0N | CSI接口 | CSI差分对 |
| 168 | MIPI_CSI_RX_D1P | CSI接口 | CSI差分对 |
| 169 | MIPI_CSI_RX_D1N | CSI接口 | CSI差分对 |
| 170 | MIPI_CSI_RX_D0P | CSI接口 | CSI差分对 |
| 171 | MIPI_CSI_RX_D0N | CSI接口 | CSI差分对 |
| 172 | GND | 参考地 | 参考地 |
