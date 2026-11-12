---
sidebar_position: 2
title: 引脚定义
description: 引脚定义
---

# 引脚定义

核心板采用 200PIN 封装。接口功能由引脚复用与底板连接共同决定。

## 核心板引脚定义1

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 1 | GPIO4_B2 | 通用GPIO | 1.8V |
| 2 | GPIO4_A4 | 通用GPIO | 1.8V |
| 3 | GPIO4_A5 | 通用GPIO | 1.8V |
| 4 | GPIO3_D6 | 通用GPIO | 1.8V |
| 5 | GPIO3_D7 | 通用GPIO | 1.8V |
| 6 | GPIO4_A6 | 通用GPIO | 1.8V |
| 7 | GPIO4_A0 | 通用GPIO | 1.8V |
| 8 | PWM7_IR | 红外PWM | 3.3V |
| 9 | TP_RST_L_GPIO0_B6 | 触摸复位 | 3.3V |
| 10 | I2C1_SDA_TP | 触摸I2C数据 | 3.3V |
| 11 | TP_INT_L_GPIO0_B5 | 触摸中断 | 3.3V |
| 12 | I2C1_SCL_TP | 触摸I2C时钟 | 3.3V |
| 13 | PCIE30X2_PERSTn_M1 | PCIe复位/电阻跳选 | 3.3V |
| 14 | PCIE30X2_CLKREQn_M1 | PCIe时钟请求/电阻跳选 | 3.3V |
| 15 | PCIE30X2_WAKEn_M1 | PCIe唤醒/电阻跳选 | 3.3V |
| 16 | PCIE30X2_PRSNT_L_GPIO2_D7 | PCIe存在检测/电阻跳选 | 3.3V |
| 17 | PCIECLKIC_OE_H_GPIO3_A7 | PCIe时钟缓冲使能/电阻跳选 | 3.3V |
| 18 | USB2_HOST2_DM | USB2 Host2 DM | 3.3V差分 |
| 19 | USB2_HOST2_DP | USB2 Host2 DP | 3.3V差分 |
| 20 | USB2_HOST3_DM | USB2 Host3 DM | 3.3V差分 |
| 21 | USB2_HOST3_DP | USB2 Host3 DP | 3.3V差分 |
| 22 | HDMITX_SDA | HDMI DDC数据 | 3.3V |
| 23 | HDMITX_CEC_M0 | HDMI CEC | 3.3V |
| 24 | HDMITX_SCL | HDMI DDC时钟 | 3.3V |
| 25 | HDMI_TX_HPDIN | HDMI热插拔检测 | 3.3V |
| 26 | ETH1_REFCLKO_25M_M0 | ETH1 25M参考时钟 | 3.3V |
| 27 | MIPI_CSI_RX_D3P | MIPI CSI差分 | 差分 |
| 28 | MIPI_CSI_RX_D3N | MIPI CSI差分 | 差分 |
| 29 | MIPI_CSI_RX_D2P | MIPI CSI差分 | 差分 |
| 30 | MIPI_CSI_RX_D2N | MIPI CSI差分 | 差分 |
| 31 | MIPI_CSI_RX_CLK1P | MIPI CSI差分 | 差分 |
| 32 | MIPI_CSI_RX_CLK1N | MIPI CSI差分 | 差分 |
| 33 | MIPI_CSI_RX_CLK0P | MIPI CSI差分 | 差分 |
| 34 | MIPI_CSI_RX_CLK0N | MIPI CSI差分 | 差分 |
| 35 | MIPI_CSI_RX_D1P | MIPI CSI差分 | 差分 |
| 36 | MIPI_CSI_RX_D1N | MIPI CSI差分 | 差分 |
| 37 | MIPI_CSI_RX_D0P | MIPI CSI差分 | 差分 |
| 38 | MIPI_CSI_RX_D0N | MIPI CSI差分 | 差分 |
| 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | MIPI DSI/LVDS差分 | 差分 |
| 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | MIPI DSI/LVDS差分 | 差分 |
| 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | MIPI DSI/LVDS差分 | 差分 |
| 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | MIPI DSI/LVDS差分 | 差分 |
| 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | MIPI DSI/LVDS差分 | 差分 |
| 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | MIPI DSI/LVDS差分 | 差分 |
| 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | MIPI DSI/LVDS差分 | 差分 |
| 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | MIPI DSI/LVDS差分 | 差分 |
| 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | MIPI DSI/LVDS差分 | 差分 |
| 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | MIPI DSI/LVDS差分 | 差分 |
| 49 | HDMI_TXCLKN_PORT | HDMI信号 | 差分/3.3V |
| 50 | HDMI_TXCLKP_PORT | HDMI信号 | 差分/3.3V |

## 核心板引脚定义2

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 51 | HDMI_TX0N_PORT | HDMI信号 | 差分/3.3V |
| 52 | HDMI_TX0P_PORT | HDMI信号 | 差分/3.3V |
| 53 | HDMI_TX1N_PORT | HDMI信号 | 差分/3.3V |
| 54 | HDMI_TX1P_PORT | HDMI信号 | 差分/3.3V |
| 55 | HDMI_TX2N_PORT | HDMI信号 | 差分/3.3V |
| 56 | HDMI_TX2P_PORT | HDMI信号 | 差分/3.3V |
| 57 | PCIE30_REFCLKN_IN | PCIe差分/控制 | 差分 |
| 58 | PCIE30_REFCLKP_IN | PCIe差分/控制 | 差分 |
| 59 | PCIE30_RXIN | PCIe差分/控制 | 差分 |
| 60 | PCIE30_RXIP | PCIe差分/控制 | 差分 |
| 61 | PCIE30_RX0N | PCIe差分/控制 | 差分 |
| 62 | PCIE30_RX0P | PCIe差分/控制 | 差分 |
| 63 | PCIE30_TXIN | PCIe差分/控制 | 差分 |
| 64 | PCIE30_TXIP | PCIe差分/控制 | 差分 |
| 65 | PCIE30_TX0N | PCIe差分/控制 | 差分 |
| 66 | PCIE30_TX0P | PCIe差分/控制 | 差分 |
| 67 | PCIE20_REFCLKN/GPIO0_C4 | PCIe2.0 REFCLKN/GPIO0_C4（电阻跳选） | 差分/3.3V |
| 68 | PCIE20_REFCLKP/GPIO0_C2 | PCIe2.0 REFCLKP/GPIO0_C2（电阻跳选） | 差分/3.3V |
| 69 | SATA2_RXN/GPIO0_C7 | SATA2 RXN/GPIO0_C7（电阻跳选） | 差分/3.3V |
| 70 | SATA2_RXP/GPIO0_C5 | SATA2 RXP/GPIO0_C5（电阻跳选） | 差分/3.3V |
| 71 | SATA2_TXN/GPIO1_A4 | SATA2 TXN/GPIO1_A4（电阻跳选） | 差分/3.3V |
| 72 | SATA2_TXP/GPIO0_B7 | SATA2 TXP/GPIO0_B7（电阻跳选） | 差分/3.3V |
| 73 | UART2_TX_M0_DEBUG | UART信号 | 3.3V |
| 74 | UART2_RX_M0_DEBUG | UART信号 | 3.3V |
| 75 | WORKING_LEDEN_H_GPIO0_C0 | 功能信号 | 3.3V |
| 76 | REFCLK_OUT_CAM | 摄像头参考时钟输出 | 3.3V |
| 77 | RESETn | 摄像头复位 | 1.8V |
| 78 | RK809_32KOUT_WIFI | WiFi 32.768kHz时钟 | 1.8V |
| 79 | DSI_TX1_D3N/EDP_TX_D3N | MIPI DSI1/eDP差分 | 差分 |
| 80 | DSI_TX1_D3P/EDP_TX_D3P | MIPI DSI1/eDP差分 | 差分 |
| 81 | DSI_TX1_D2N/EDP_TX_D2N | MIPI DSI1/eDP差分 | 差分 |
| 82 | DSI_TX1_D2P/EDP_TX_D2P | MIPI DSI1/eDP差分 | 差分 |
| 83 | DSI_TX1_D1N/EDP_TX_D1N | MIPI DSI1/eDP差分 | 差分 |
| 84 | DSI_TX1_D1P/EDP_TX_D1P | MIPI DSI1/eDP差分 | 差分 |
| 85 | DSI_TX1_D0N/EDP_TX_D0N | MIPI DSI1/eDP差分 | 差分 |
| 86 | DSI_TX1_D0P/EDP_TX_D0P | MIPI DSI1/eDP差分 | 差分 |
| 87 | DSI_TX1_CLKN/EDP_TX_AUXN | MIPI DSI1/eDP差分 | 差分 |
| 88 | DSI_TX1_CLKP/EDP_TX_AUXP | MIPI DSI1/eDP差分 | 差分 |
| 89 | USB3_HOST1_SSTXP | USB3 Host差分 | 差分 |
| 90 | USB3_HOST1_SSTXN | USB3 Host差分 | 差分 |
| 91 | USB3_HOST1_SSRXP | USB3 Host差分 | 差分 |
| 92 | USB3_HOST1_SSRXN | USB3 Host差分 | 差分 |
| 93 | USB3_OTG0_SSTXP | USB3 OTG差分/控制 | 差分 |
| 94 | USB3_OTG0_SSTXN | USB3 OTG差分/控制 | 差分 |
| 95 | USB3_OTG0_SSRXP | USB3 OTG差分/控制 | 差分 |
| 96 | USB3_OTG0_SSRXN | USB3 OTG差分/控制 | 差分 |
| 97 | USB3_OTG0_DM | USB3 OTG差分/控制 | 差分 |
| 98 | USB3_OTG0_DP | USB3 OTG差分/控制 | 差分 |
| 99 | USB3_HOST1_DM | USB3 Host差分 | 差分 |
| 100 | USB3_HOST1_DP | USB3 Host差分 | 差分 |

## 核心板引脚定义3

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 101 | USB3_OTG0_VBUSDET | USB3 OTG VBUS检测/电阻分压 | 5V |
| 102 | USB3_OTG0_ID | USB3 OTG ID/电阻选择 | 1.8V/3.3V |
| 103 | SDMMC0_DET_L | SD卡信号 | 3.3V |
| 104 | SDMMC0_D3 | SD卡信号 | 3.3V |
| 105 | SDMMC0_D2 | SD卡信号 | 3.3V |
| 106 | SDMMC0_D1 | SD卡信号 | 3.3V |
| 107 | SDMMC0_D0 | SD卡信号 | 3.3V |
| 108 | SDMMC0_CMD/CAN0_TX_M1 | SD卡信号 | 3.3V |
| 109 | SDMMC0_CLK/CAN0_RX_M1 | SD卡信号 | 3.3V |
| 110 | EXT_EN | 扩展电源使能/电阻跳选 | 3.3V |
| 111 | GND | 参考地 | 0V |
| 112 | GND | 参考地 | 0V |
| 113 | VCC3V3_SYS | 3.3V输入（3A） | 3.3V |
| 114 | VCC3V3_SYS | 3.3V输入（3A） | 3.3V |
| 115 | GPIO0_A7 | 通用GPIO | 3.3V |
| 116 | GPIO0_D4 | 通用GPIO | 1.8V |
| 117 | HPR_OUT | 耳机右声道 | 模拟 |
| 118 | HPL_OUT | 耳机左声道 | 模拟 |
| 119 | MIC1_INP | MIC1正输入 | 模拟 |
| 120 | MIC1_INN | MIC1负输入 | 模拟 |
| 121 | SPKP_OUT | 扬声器正 | 模拟 |
| 122 | SPKN_OUT | 扬声器负 | 模拟 |
| 123 | GPIO0_C3 | 通用GPIO | 3.3V |
| 124 | SARADC_VIN0_KEY/RECOVERY | SARADC按键/恢复模式/电阻分压 | 1.8V |
| 125 | SARADC_VIN1 | SARADC第二路/电阻分压 | 1.8V |
| 126 | RK809_PWRON | PMIC开机键 | 1.8V |
| 127 | VCC_RTC | 3.0V输出 | 3.0V |
| 128 | GMAC0_RXCLK | 千兆以太网信号 | 1.8V |
| 129 | GMAC0_RXD0 | 千兆以太网信号 | 1.8V |
| 130 | GMAC0_RXD1 | 千兆以太网信号 | 1.8V |
| 131 | GMAC0_RXD2 | 千兆以太网信号 | 1.8V |
| 132 | GMAC0_RXD3 | 千兆以太网信号 | 1.8V |
| 133 | GMAC0_RXDV_CRS | 千兆以太网信号 | 1.8V |
| 134 | GMAC0_TXEN | 千兆以太网信号 | 1.8V |
| 135 | GMAC0_TXD0 | 千兆以太网信号 | 1.8V |
| 136 | GMAC0_TXD1 | 千兆以太网信号 | 1.8V |
| 137 | GMAC0_TXD2 | 千兆以太网信号 | 1.8V |
| 138 | GMAC0_TXD3 | 千兆以太网信号 | 1.8V |
| 139 | GMAC0_TXCLK | 千兆以太网信号 | 1.8V |
| 140 | UART8_RX_M0 | UART信号 | 1.8V |
| 141 | UART8_TX_M0 | UART信号 | 1.8V |
| 142 | UART8_RTSn_M0 | UART信号 | 1.8V |
| 143 | UART8_CTSn_M0 | UART信号 | 1.8V |
| 144 | GMAC0_MDC | 千兆以太网信号 | 1.8V |
| 145 | GMAC0_MCLKINOUT | 千兆以太网信号 | 1.8V |
| 146 | GMAC0_MDIO | 千兆以太网信号 | 1.8V |
| 147 | ETH0_REFCLKO_25M | 以太网参考时钟 | 1.8V |
| 148 | I2C3_SCL_M0 | I2C信号 | 3.3V |
| 149 | I2C3_SDA_M0 | I2C信号 | 3.3V |
| 150 | GPIO0_C1 | 通用GPIO | 3.3V |

## 核心板引脚定义4

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 151 | GPIO0_A5 | 通用GPIO | 3.3V |
| 152 | GPIO0_A6 | 通用GPIO | 3.3V |
| 153 | GPIO4_C6 | 通用GPIO | 3.3V |
| 154 | GPIO4_C5 | 通用GPIO | 3.3V |
| 155 | GPIO4_C4 | 通用GPIO | 3.3V |
| 156 | GPIO4_C3 | 通用GPIO | 3.3V |
| 157 | GPIO4_C2 | 通用GPIO | 3.3V |
| 158 | GMAC1_INT/PMEB_GPIO2_D0 | 千兆以太网信号 | 3.3V |
| 159 | GMAC1_RSTn_GPIO2_D1 | 千兆以太网信号 | 3.3V |
| 160 | GMAC0_INT/PMEB_GPIO2_D2 | 千兆以太网信号 | 3.3V |
| 161 | GMAC0_RSTn_GPIO2_D3 | 千兆以太网信号 | 3.3V |
| 162 | UART3_TX_M1 | UART信号 | 3.3V |
| 163 | UART3_RX_M1 | UART信号 | 3.3V |
| 164 | SPDIF_TX_M1 | 音频信号 | 3.3V |
| 165 | GPIO3_D5 | 通用GPIO | 1.8V |
| 166 | GPIO3_D4 | 通用GPIO | 1.8V |
| 167 | GPIO3_D3 | 通用GPIO | 1.8V |
| 168 | GPIO3_D2 | 通用GPIO | 1.8V |
| 169 | GPIO3_D1 | 通用GPIO | 1.8V |
| 170 | GPIO3_D0 | 通用GPIO | 1.8V |
| 171 | GPIO3_C7 | 通用GPIO | 1.8V |
| 172 | GPIO3_C6 | 通用GPIO | 1.8V |
| 173 | GPIO3_C4 | 通用GPIO | 3.3V |
| 174 | GPIO3_C3 | 通用GPIO | 3.3V |
| 175 | HP_DET_L_GPIO3_C2 | 耳机检测 | 3.3V |
| 176 | GSENSOR_INT_L_GPIO3_C1 | 重力传感器中断 | 3.3V |
| 177 | HOST_WAKE_BT_H_GPIO3_A2 | 主机唤醒蓝牙 | 3.3V |
| 178 | BT_WAKE_HOST_H_GPIO3_A1 | 蓝牙唤醒主机 | 3.3V |
| 179 | BT_REG_ON_H_GPIO3_A0 | 蓝牙使能 | 3.3V |
| 180 | GPIO3_B6 | 通用GPIO | 3.3V |
| 181 | GPIO3_B5 | 通用GPIO | 3.3V |
| 182 | UART4_RX_M1 | UART信号 | 3.3V |
| 183 | UART4_TX_M1 | UART信号 | 3.3V |
| 184 | I2S3_SDI_M0 | 音频信号 | 3.3V |
| 185 | I2S3_LRCK_M0 | 音频信号 | 3.3V |
| 186 | I2S3_SCLK_M0 | 音频信号 | 3.3V |
| 187 | I2S3_SDO_M0 | 音频信号 | 3.3V |
| 188 | GPIO4_B7 | 通用GPIO | 1.8V |
| 189 | GPIO4_B5 | 通用GPIO | 1.8V |
| 190 | GPIO4_B6 | 通用GPIO | 1.8V |
| 191 | GPIO4_C0 | 通用GPIO | 1.8V |
| 192 | GPIO4_C1 | 通用GPIO | 1.8V |
| 193 | GPIO4_B4 | 通用GPIO | 1.8V |
| 194 | GPIO4_B3 | 通用GPIO | 1.8V |
| 195 | GPIO4_A3 | 通用GPIO | 1.8V |
| 196 | GPIO4_A2 | 通用GPIO | 1.8V |
| 197 | GPIO4_A1 | 通用GPIO | 1.8V |
| 198 | GPIO4_B0 | 通用GPIO | 1.8V |
| 199 | GPIO4_A7 | 通用GPIO | 1.8V |
| 200 | GPIO4_B1 | 通用GPIO | 1.8V |
