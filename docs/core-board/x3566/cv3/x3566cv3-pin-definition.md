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
| 1 | TP_INT_L | 触摸中断 | 1.8V |
| 2 | LCD_BL_PWM | 背光PWM | 1.8V |
| 3 | PMIC_32KOUT_WIFI | WiFi 32.768kHz时钟 | 1.8V |
| 4 | PMIC_RESET_KEY | PMIC复位键 | 1.8V |
| 5 | SNSN | SNSN（未接10mΩ采样电阻） | 电池采样 |
| 6 | VCC_BAT- | 电池负极 | 0V |
| 7 | VCC_BAT+ | 单节电池正极输入 | 3.7–4.2V |
| 8 | VBUS | 5V输出 | 5V |
| 9 | TS | 电池温度检测 | 1.8V |
| 10 | PMIC_PWRON | 开机键 | 1.8V |
| 11 | VCC_SYS | 4V输入 | 4V |
| 12 | GND | 参考地 | 0V |
| 13 | GND | 参考地 | 0V |
| 14 | GND | 参考地 | 0V |
| 15 | HPR_OUT | 耳机右声道 | 模拟 |
| 16 | HPL_OUT | 耳机左声道 | 模拟 |
| 17 | HP_SNS | 耳机检测 | 1.8V |
| 18 | SPKP_OUT | 扬声器正 | 模拟 |
| 19 | SPKN_OUT | 扬声器负 | 模拟 |
| 20 | VCC5V_MIDU | 5V输出 | 5V |
| 21 | MIC2_IN | MIC2输入 | 模拟 |
| 22 | MIC1_IN | MIC1输入 | 模拟 |
| 23 | EDP_TX_D3N | eDP差分信号 | 差分 |
| 24 | EDP_TX_D3P | eDP差分信号 | 差分 |
| 25 | EDP_TX_D2N | eDP差分信号 | 差分 |
| 26 | EDP_TX_D2P | eDP差分信号 | 差分 |
| 27 | EDP_TX_D1N | eDP差分信号 | 差分 |
| 28 | EDP_TX_D1P | eDP差分信号 | 差分 |
| 29 | EDP_TX_D0N | eDP差分信号 | 差分 |
| 30 | EDP_TX_D0P | eDP差分信号 | 差分 |
| 31 | EDP_TX_AUXN | eDP差分信号 | 差分 |
| 32 | EDP_TX_AUXP | eDP差分信号 | 差分 |
| 33 | WIFI_WAKE_HOST_H | WiFi唤醒主机 | 1.8V |
| 34 | HOST_WAKE_BT_H | 主机唤醒蓝牙 | 1.8V |
| 35 | BT_WAKE_HOST_H | 蓝牙唤醒主机 | 1.8V |
| 36 | WIFI_REG_ON_H | WiFi使能 | 1.8V |
| 37 | BT_REG_ON_H | 蓝牙使能 | 1.8V |
| 38 | GPIO0_A5 | 通用GPIO | 3.3V |
| 39 | GPIO0_C2 | 通用GPIO | 1.8V |
| 40 | GPIO0_A6 | 通用GPIO | 3.3V |
| 41 | GPIO0_A0 | 通用GPIO | 3.3V |
| 42 | SDMMC0_DET_L | SD卡信号 | 3.3V |
| 43 | SDMMC0_CMD | SD卡信号 | 3.3V/1.8V |
| 44 | SDMMC0_D3 | SD卡信号 | 3.3V/1.8V |
| 45 | SDMMC0_D2 | SD卡信号 | 3.3V/1.8V |
| 46 | SDMMC0_D1 | SD卡信号 | 3.3V/1.8V |
| 47 | SDMMC0_D0 | SD卡信号 | 3.3V/1.8V |
| 48 | SDMMC0_CLK | SD卡信号 | 3.3V/1.8V |
| 49 | UART1_CTSn_M0 | UART信号 | 1.8V |
| 50 | UART1_RTSn_M0 | UART信号 | 1.8V |

## 核心板引脚定义2

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 51 | UART1_TX_M0 | UART信号 | 1.8V |
| 52 | UART1_RX_M0 | UART信号 | 1.8V |
| 53 | I2S2_SCLK_TX_M0 | I2S音频信号 | 1.8V |
| 54 | I2S2_SDI_M0 | I2S音频信号 | 1.8V |
| 55 | I2S2_LRCK_TX_M0 | I2S音频信号 | 1.8V |
| 56 | I2S2_SDO_M0 | I2S音频信号 | 1.8V |
| 57 | SDMMC1_CLK | SDIO信号 | 1.8V |
| 58 | SDMMC1_CMD | SDIO信号 | 1.8V |
| 59 | SDMMC1_D0 | SDIO信号 | 1.8V |
| 60 | SDMMC1_D1 | SDIO信号 | 1.8V |
| 61 | SDMMC1_D2 | SDIO信号 | 1.8V |
| 62 | SDMMC1_D3 | SDIO信号 | 1.8V |
| 63 | GPIO2_C1 | 通用GPIO | 1.8V |
| 64 | GPIO2_C0 | 通用GPIO | 1.8V |
| 65 | GPIO2_B7 | 通用GPIO | 1.8V |
| 66 | GPIO2_B2 | 通用GPIO | 1.8V |
| 67 | GPIO2_B1 | 通用GPIO | 1.8V |
| 68 | GPIO2_C6 | 通用GPIO | 1.8V |
| 69 | ADC0 | ADC输入 | 1.8V |
| 70 | ADC1 | ADC输入 | 1.8V |
| 71 | GPIO1_B2 | 通用GPIO | 3.3V |
| 72 | GPIO1_B1 | 通用GPIO | 3.3V |
| 73 | GPIO1_B0 | 通用GPIO | 3.3V |
| 74 | GPIO1_D0 | 通用GPIO | 3.3V |
| 75 | GPIO1_A4 | 通用GPIO | 3.3V |
| 76 | UART3_RX_M0 | UART信号 | 3.3V |
| 77 | UART3_TX_M0 | UART信号 | 3.3V |
| 78 | MIPI_MCLK_B | MIPI摄像头主时钟 | 1.8V |
| 79 | CIF_8BIT_CLKIN | CIF输入时钟 | 1.8V |
| 80 | CIF_CLKOUT | CIF输出时钟 | 1.8V |
| 81 | CIF_8BIT_VSYNC | CIF场同步 | 1.8V |
| 82 | CIF_8BIT_HREF | CIF行同步 | 1.8V |
| 83 | CAMERAF_RST_GPIO4_B0 | 前摄复位 | 1.8V |
| 84 | CAMERAB_RST_GPIO4_B1 | 后摄复位 | 1.8V |
| 85 | CIF_8BIT_D7 | CIF摄像头信号 | 1.8V |
| 86 | CIF_8BIT_D6 | CIF摄像头信号 | 1.8V |
| 87 | CIF_8BIT_D5 | CIF摄像头信号 | 1.8V |
| 88 | CIF_8BIT_D4 | CIF摄像头信号 | 1.8V |
| 89 | CIF_8BIT_D3 | CIF摄像头信号 | 1.8V |
| 90 | CIF_8BIT_D2 | CIF摄像头信号 | 1.8V |
| 91 | CIF_8BIT_D1 | CIF摄像头信号 | 1.8V |
| 92 | CIF_8BIT_D0 | CIF摄像头信号 | 1.8V |
| 93 | CAMERAF2_PDN_GPIO3_C7 | 前摄2掉电 | 1.8V |
| 94 | CAMERAF_PDN_GPIO3_C6 | 前摄掉电 | 1.8V |
| 95 | GSENSOR_INT_GPIO3_D3 | 重力传感器中断 | 1.8V |
| 96 | CAMERAB_PDN_GPIO3_D0 | 后摄掉电 | 1.8V |
| 97 | GPIO3_D4 | 通用GPIO | 1.8V |
| 98 | GPIO3_D5 | 通用GPIO | 1.8V |
| 99 | I2C4_SCL_M0_TP | 触摸I2C时钟 | 1.8V |
| 100 | I2C4_SDA_M0_TP | 触摸I2C数据 | 1.8V |

## 核心板引脚定义3

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 101 | I2C2_SCL_M1 | I2C信号 | 1.8V |
| 102 | I2C2_SDA_M1 | I2C信号 | 1.8V |
| 103 | GPIO3_D1 | 通用GPIO | 1.8V |
| 104 | GPIO4_A6 | 通用GPIO | 1.8V |
| 105 | UART9_RX_M1 | UART信号 | 3.3V |
| 106 | UART9_TX_M1 | UART信号 | 3.3V |
| 107 | GPIO3_A1 | 通用GPIO | 3.3V |
| 108 | GPIO3_C1 | 通用GPIO | 3.3V |
| 109 | GPIO4_C4 | 通用GPIO | 3.3V |
| 110 | HDMITX_CEC_M0 | HDMI CEC | 3.3V |
| 111 | HDMITX_SDA | HDMI DDC数据 | 3.3V |
| 112 | HDMITX_SCL | HDMI DDC时钟 | 3.3V |
| 113 | UART5_TX_M1 | UART信号 | 3.3V |
| 114 | UART5_RX_M1 | UART信号 | 3.3V |
| 115 | USB2_HOST2_DM | USB2 Host差分信号 | 3.3V差分 |
| 116 | USB2_HOST2_DP | USB2 Host差分信号 | 3.3V差分 |
| 117 | USB2_HOST3_DM | USB2 Host差分信号 | 3.3V差分 |
| 118 | USB2_HOST3_DP | USB2 Host差分信号 | 3.3V差分 |
| 119 | GMAC1_MCLKINOUT_M0 | 千兆以太网信号 | 3.3V |
| 120 | GMAC1_INT/PMEB | 千兆网中断 | 3.3V |
| 121 | GMAC1_RSTn | 千兆网复位 | 3.3V |
| 122 | GMAC1_MDIO_M0 | 千兆以太网信号 | 3.3V |
| 123 | GMAC1_MDC_M0 | 千兆以太网信号 | 3.3V |
| 124 | GMAC1_RXCLK_M0 | 千兆以太网信号 | 3.3V |
| 125 | GMAC1_RXDV_CRS_M0 | 千兆以太网信号 | 3.3V |
| 126 | GMAC1_RXD0_M0 | 千兆以太网信号 | 3.3V |
| 127 | GMAC1_RXD1_M0 | 千兆以太网信号 | 3.3V |
| 128 | GMAC1_RXD2_M0 | 千兆以太网信号 | 3.3V |
| 129 | GMAC1_RXD3_M0 | 千兆以太网信号 | 3.3V |
| 130 | ETH1_REFCLKO_25M_M0 | 千兆网25M参考时钟 | 3.3V |
| 131 | GMAC1_TXEN_M0 | 千兆以太网信号 | 3.3V |
| 132 | GMAC1_TXD0_M0 | 千兆以太网信号 | 3.3V |
| 133 | GMAC1_TXD1_M0 | 千兆以太网信号 | 3.3V |
| 134 | GMAC1_TXD2_M0 | 千兆以太网信号 | 3.3V |
| 135 | GMAC1_TXD3_M0 | 千兆以太网信号 | 3.3V |
| 136 | GMAC1_TXCLK_M0 | 千兆以太网信号 | 3.3V |
| 137 | MIPI_CSI_RX_D3N | MIPI CSI差分信号 | 差分 |
| 138 | MIPI_CSI_RX_D3P | MIPI CSI差分信号 | 差分 |
| 139 | MIPI_CSI_RX_D2N | MIPI CSI差分信号 | 差分 |
| 140 | MIPI_CSI_RX_D2P | MIPI CSI差分信号 | 差分 |
| 141 | MIPI_CSI_RX_D1N | MIPI CSI差分信号 | 差分 |
| 142 | MIPI_CSI_RX_D1P | MIPI CSI差分信号 | 差分 |
| 143 | MIPI_CSI_RX_D0N | MIPI CSI差分信号 | 差分 |
| 144 | MIPI_CSI_RX_D0P | MIPI CSI差分信号 | 差分 |
| 145 | MIPI_CSI_RX_CLK1P | MIPI CSI差分信号 | 差分 |
| 146 | MIPI_CSI_RX_CLK1N | MIPI CSI差分信号 | 差分 |
| 147 | MIPI_CSI_RX_CLK0P | MIPI CSI差分信号 | 差分 |
| 148 | MIPI_CSI_RX_CLK0N | MIPI CSI差分信号 | 差分 |
| 149 | MIPI_DSI_TX1_D3N | MIPI DSI/LVDS差分信号 | 差分 |
| 150 | MIPI_DSI_TX1_D3P | MIPI DSI/LVDS差分信号 | 差分 |

## 核心板引脚定义4

| 引脚编号 | 信号名称 | 用途 | 电压 |
| --- | --- | --- | --- |
| 151 | MIPI_DSI_TX1_D2N | MIPI DSI/LVDS差分信号 | 差分 |
| 152 | MIPI_DSI_TX1_D2P | MIPI DSI/LVDS差分信号 | 差分 |
| 153 | MIPI_DSI_TX1_D1N | MIPI DSI/LVDS差分信号 | 差分 |
| 154 | MIPI_DSI_TX1_D1P | MIPI DSI/LVDS差分信号 | 差分 |
| 155 | MIPI_DSI_TX1_D0N | MIPI DSI/LVDS差分信号 | 差分 |
| 156 | MIPI_DSI_TX1_D0P | MIPI DSI/LVDS差分信号 | 差分 |
| 157 | MIPI_DSI_TX1_CLKP | MIPI DSI/LVDS差分信号 | 差分 |
| 158 | MIPI_DSI_TX1_CLKN | MIPI DSI/LVDS差分信号 | 差分 |
| 159 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | MIPI DSI/LVDS差分信号 | 差分 |
| 160 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | MIPI DSI/LVDS差分信号 | 差分 |
| 161 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | MIPI DSI/LVDS差分信号 | 差分 |
| 162 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | MIPI DSI/LVDS差分信号 | 差分 |
| 163 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | MIPI DSI/LVDS差分信号 | 差分 |
| 164 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | MIPI DSI/LVDS差分信号 | 差分 |
| 165 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | MIPI DSI/LVDS差分信号 | 差分 |
| 166 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | MIPI DSI/LVDS差分信号 | 差分 |
| 167 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | MIPI DSI/LVDS差分信号 | 差分 |
| 168 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | MIPI DSI/LVDS差分信号 | 差分 |
| 169 | HDMI_TX_HPDIN | HDMI热插拔检测 | 3.3V |
| 170 | HDMI_TXCLKN_PORT | HDMI TMDS差分信号 | 差分 |
| 171 | HDMI_TXCLKP_PORT | HDMI TMDS差分信号 | 差分 |
| 172 | HDMI_TX0N_PORT | HDMI TMDS差分信号 | 差分 |
| 173 | HDMI_TX0P_PORT | HDMI TMDS差分信号 | 差分 |
| 174 | HDMI_TX1N_PORT | HDMI TMDS差分信号 | 差分 |
| 175 | HDMI_TX1P_PORT | HDMI TMDS差分信号 | 差分 |
| 176 | HDMI_TX2N_PORT | HDMI TMDS差分信号 | 差分 |
| 177 | HDMI_TX2P_PORT | HDMI TMDS差分信号 | 差分 |
| 178 | PCIE20_REFCLKP | PCIe差分信号 | 差分 |
| 179 | PCIE20_REFCLKN | PCIe差分信号 | 差分 |
| 180 | PCIE20_RXP | PCIe差分信号 | 差分 |
| 181 | PCIE20_RXN | PCIe差分信号 | 差分 |
| 182 | PCIE20_TXN | PCIe差分信号 | 差分 |
| 183 | PCIE20_TXP | PCIe差分信号 | 差分 |
| 184 | USB3_HOST1_SSTXP | USB3差分信号 | 差分 |
| 185 | USB3_HOST1_SSTXN | USB3差分信号 | 差分 |
| 186 | USB3_HOST1_SSRXP | USB3差分信号 | 差分 |
| 187 | USB3_HOST1_SSRXN | USB3差分信号 | 差分 |
| 188 | USB3_HOST1_DP | USB3差分信号 | 差分 |
| 189 | USB3_HOST1_DM | USB3差分信号 | 差分 |
| 190 | USB_OTG0_DM | USB2 OTG信号 | 3.3V/差分 |
| 191 | USB_OTG0_DP | USB2 OTG信号 | 3.3V/差分 |
| 192 | USB_OTG0_VBUSDET | USB VBUS检测 | 5V |
| 193 | USB_OTG0_ID | USB OTG ID | 1.8V/3.3V |
| 194 | TP_RST_L | 触摸复位 | 1.8V |
| 195 | RTC_INT | RTC中断 | 1.8V |
| 196 | PWM_IR7 | 红外PWM | 1.8V |
| 197 | UART2_TX_M0_DEBUG | UART信号 | 1.8V |
| 198 | UART2_RX_M0_DEBUG | UART信号 | 1.8V |
| 199 | LCD_PWREN_H | LCD电源使能 | 1.8V |
| 200 | LCD_RST_L | LCD复位 | 1.8V |
