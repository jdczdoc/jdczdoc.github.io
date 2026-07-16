---
sidebar_position: 6
title: 引脚定义
description: X3399CV4 200PIN 核心板引脚定义
---

# 引脚定义

X3399CV4 核心板为 200PIN 邮票孔封装。以下按硬件手册拆分为 4 组，覆盖 1~200 号引脚。

## 核心板引脚定义 1

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GPIO4_A3/ / I2S1_SCLK | GPIO或I2S串行时钟 |  |
| 2 | GPIO4_A7/ / I2S1_SDO0 | GPIO或I2S数据输出 |  |
| 3 | GPIO4_A6/ / I2S1_SDI0 | GPIO或I2S数据输入 |  |
| 4 | GPIO4_A5/ / I2S1_LRCK_TX | GPIO或I2S帧时钟 |  |
| 5 | GPIO4_A4/ / I2S1_LRCK_RX | GPIO或I2S帧时钟 |  |
| 6 | GPIO4_A1/ / I2C1_SDA | GPIO或I2C1数据 |  |
| 7 | GPIO4_A2/ / I2C1_SCL | GPIO或I2C1时钟 |  |
| 8 | GPIO4_A0/ / I2S_CLK | GPIO或I2S主时钟 |  |
| 9 | GPIO3_D0/ / I2S0_SCLK | GPIO或I2S串行时钟 |  |
| 10 | GPIO3_D1/ / I2S0_LRCK_RX | GPIO或I2S帧时钟 |  |
| 11 | GPIO3_D2/ / I2S0_LRCK_TX | GPIO或I2S帧时钟 |  |
| 12 | GPIO3_D3/ / I2S0_SDI0 | GPIO或I2S数据输入 |  |
| 13 | GPIO3_D4/ / I2S0_SDI1 | GPIO或I2S数据输入 |  |
| 14 | GPIO3_D7/ / I2S0_SDO0 | GPIO或I2S数据输出 |  |
| 15 | GPIO3_D6/ / I2S0_SDO1 | GPIO或I2S数据输出 |  |
| 16 | GPIO3_D5/ / I2S0_SDO2 | GPIO或I2S数据输出 |  |
| 17 | GPIO4_D4 | GPIO |  |
| 18 | ADC_IN2 | ADC输入 |  |
| 19 | GPIO2_C4/ / SDIO0_D0/ / SPI5_RXD | GPIO或SDIO接口或SPI接口 |  |
| 20 | GPIO2_C5/ / SDIO0_D1/ / SPI5_TXD | GPIO或SDIO接口或SPI接口 |  |
| 21 | GPIO2_C6/ / SDIO0_D2/ / SPI5_CLK | GPIO或SDIO接口或SPI接口 |  |
| 22 | GPIO2_C7/ / SDIO0_D3/ / SPI5_CSn0 | GPIO或SDIO接口或SPI接口 |  |
| 23 | GPIO2_D0/ / SDIO0_CMD | GPIO或SDIO接口 |  |
| 24 | GPIO2_D1/ / SDIO0_CLK | GPIO或SDIO接口 |  |
| 25 | GPIO2_C3/ / UART0_RTS | GPIO或串口0 |  |
| 26 | GPIO2_C1/ / UART0_TXD | GPIO或串口0 |  |
| 27 | GPIO2_C2/ / UART0_CTS | GPIO或串口0 |  |
| 28 | GPIO2_C0/ / UART0_RXD | GPIO或串口0 |  |
| 29 | PMU_RESET | 复位管脚 |  |
| 30 | GPIO4_D6 | GPIO |  |
| 31 | GPIO4_D1 | GPIO |  |
| 32 | GPIO4_D3 | GPIO |  |
| 33 | GPIO4_C6/ / PWM1_d | GPIO或PWM1 |  |
| 34 | PMIC_EXT_EN | PMU使能管脚 |  |
| 35 | RTC_CLKO_Wi-Fi | 32768Hz时钟输出 |  |
| 36 | Camera_RST_L | GPIO2_D3 |  |
| 37 | VCC_RTC | RTC电源输入 | 电源输入2.5到3V |
| 38 | GPIO4_C2/ / PWM0 | GPIO或PWM0 |  |
| 39 | GPIO2_D4 | GPIO |  |
| 40 | GPIO4_D2 | GPIO |  |
| 41 | GPIO4_D5 | GPIO |  |
| 42 | VCC3V3_S5 | 副3.3V电源输入 | 3.3V输入，电流不小于300mA |
| 43 | GPIO4_C5/ / SPDIF_TX | GPIO或光纤输出 |  |
| 44 | GPIO4_C3/ / UART2DBG_RX | GPIO或UART2 |  |
| 45 | GPIO4_C4/ / UART2DBG_TX | GPIO或UART2 |  |
| 46 | GPIO4_C0/ / I2C3_SDA/ / UART2_RX | GPIO或I2C3数据或串口2 |  |
| 47 | GPIO4_C1/ / I2C3_SCL/ / UART2_TX | GPIO或I2C3时钟或串口2 |  |
| 48 | GPIO4_C7/ / HDMI_CEC | GPIO或HDMI CEC功能 |  |
| 49 | HDMI_HPD | HDMI热插拨检测管脚 |  |
| 50 | VCC_CHAREG_EN | PMIC使能 |  |


## 核心板引脚定义 2

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 51 | VCC3V3_SYS | 主3.3V电源输入 | 3.3V输入，电源不小于4.3A |
| 52 | VCC3V3_SYS | 主3.3V电源输入 | 3.3V输入，电源不小于4.3A |
| 53 | GND | 参考地 |  |
| 54 | MIPI_TX1/RX1_D0N | DSI/CSI接口 |  |
| 55 | MIPI_TX1/RX1_D0P | DSI/CSI接口 |  |
| 56 | MIPI_TX1/RX1_D1N | DSI/CSI接口 |  |
| 57 | MIPI_TX1/RX1_D1P | DSI/CSI接口 |  |
| 58 | MIPI_TX1/RX1_CLKN | DSI/CSI接口 |  |
| 59 | MIPI_TX1/RX1_CLKP | DSI/CSI接口 |  |
| 60 | MIPI_TX1/RX1_D2N | DSI/CSI接口 |  |
| 61 | MIPI_TX1/RX1_D2P | DSI/CSI接口 |  |
| 62 | MIPI_TX1/RX1_D3N | DSI/CSI接口 |  |
| 63 | MIPI_TX1/RX1_D3P | DSI/CSI接口 |  |
| 64 | MIPI_RX0_D3N | CSI接口 |  |
| 65 | MIPI_RX0_D3P | CSI接口 |  |
| 66 | MIPI_RX0_D2N | CSI接口 |  |
| 67 | MIPI_RX0_D2P | CSI接口 |  |
| 68 | MIPI_RX0_CLKN | CSI接口 |  |
| 69 | MIPI_RX0_CLKP | CSI接口 |  |
| 70 | MIPI_RX0_D1N | CSI接口 |  |
| 71 | MIPI_RX0_D1P | CSI接口 |  |
| 72 | MIPI_RX0_D0N | CSI接口 |  |
| 73 | MIPI_RX0_D0P | CSI接口 |  |
| 74 | MIPI_TX0_D3N | DSI接口 |  |
| 75 | MIPI_TX0_D3P | DSI接口 |  |
| 76 | MIPI_TX0_D2N | DSI接口 |  |
| 77 | MIPI_TX0_D2P | DSI接口 |  |
| 78 | MIPI_TX0_CLKN | DSI接口 |  |
| 79 | MIPI_TX0_CLKP | DSI接口 |  |
| 80 | MIPI_TX0_D1N | DSI接口 |  |
| 81 | MIPI_TX0_D1P | DSI接口 |  |
| 82 | MIPI_TX0_D0N | DSI接口 |  |
| 83 | MIPI_TX0_D0P | DSI接口 |  |
| 84 | GND | 参考地 |  |
| 85 | HDMI_TXCN | HDMI输出接口 |  |
| 86 | HDMI_TXCP | HDMI输出接口 |  |
| 87 | HDMI_TX0N | HDMI输出接口 |  |
| 88 | HDMI_TX0P | HDMI输出接口 |  |
| 89 | HDMI_TX1N | HDMI输出接口 |  |
| 90 | HDMI_TX1P | HDMI输出接口 |  |
| 91 | HDMI_TX2N | HDMI输出接口 |  |
| 92 | HDMI_TX2P | HDMI输出接口 |  |
| 93 | Type-C0_SBU1_DC | Type-C接口 |  |
| 94 | Type-C0_SBU2_DC | Type-C接口 |  |
| 95 | Type-C0_SBU2 | Type-C接口 |  |
| 96 | Type-C0_SBU1 | Type-C接口 |  |
| 97 | Type-C0_RX1N | Type-C接口 |  |
| 98 | Type-C0_RX1P | Type-C接口 |  |
| 99 | Type-C0_TX1P | Type-C接口 |  |
| 100 | Type-C0_TX1N | Type-C接口 |  |


## 核心板引脚定义 3

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 101 | Type-C0_RX2N | Type-C接口 |  |
| 102 | Type-C0_RX2P | Type-C接口 |  |
| 103 | Type-C0_TX2P | Type-C接口 |  |
| 104 | Type-C0_TX2N | Type-C接口 |  |
| 105 | Type-C0_DM | Type-C接口 |  |
| 106 | Type-C0_DP | Type-C接口 |  |
| 107 | USB3_SSTXP | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 108 | USB3_SSTXN | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 109 | USB3_SSRXP | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 110 | USB3_SSRXN | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 111 | Type-C0_U2VBUSDET | Type-C接口 |  |
| 112 | ADC_IN1 | ADC1输入管脚 | 参考电平为1.8V |
| 113 | ADC_IN0 | ADC0输入管脚 | 参考电平为1.8V |
| 114 | USB3_DM | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 115 | USB3_DP | USB 3.0接口 | Type-C、USB 3.0复用脚 |
| 116 | HOST0_DM | USB 2.0接口 |  |
| 117 | HOST0_DP | USB 2.0接口 |  |
| 118 | HOST1_DM | USB 2.0接口 |  |
| 119 | HOST1_DP | USB 2.0接口 |  |
| 120 | VCC1V8_S3 | 1.8V电源输出 | 休眠时电压为0 |
| 121 | POWER_KEY | PMU使能管脚 | 低电平使能 |
| 122 | GPIO2_D2 | GPIO |  |
| 123 | GPIO0_A4 | GPIO |  |
| 124 | GPIO0_B2 | GPIO |  |
| 125 | GPIO0_B1 | GPIO |  |
| 126 | GPIO0_A3 | GPIO |  |
| 127 | GPIO4_B4/ / SDMMC0_CLK | GPIO或SDIO接口 |  |
| 128 | GPIO4_B3/ / SDMMC0_D3 | GPIO或SDIO接口 |  |
| 129 | GPIO4_B2/ / SDMMC0_D2 | GPIO或SDIO接口 |  |
| 130 | GPIO4_B1/ / SDMMC0_D1 | GPIO或SDIO接口 |  |
| 131 | GPIO4_B0/ / SDMMC0_D0 | GPIO或SDIO接口 |  |
| 132 | GPIO4_B5/ / SDMMC0_CMD | GPIO或SDIO接口 |  |
| 133 | GPIO0_A7/ / SDMMC0_DET | GPIO或SDIO接口 |  |
| 134 | GPIO0_A1 | GPIO |  |
| 135 | EDP_TX3P | EDP接口 |  |
| 136 | EDP_TX3N | EDP接口 |  |
| 137 | EDP_TX2P | EDP接口 |  |
| 138 | EDP_TX2N | EDP接口 |  |
| 139 | EDP_TX1P | EDP接口 |  |
| 140 | EDP_TX1N | EDP接口 |  |
| 141 | EDP_TX0P | EDP接口 |  |
| 142 | EDP_TX0N | EDP接口 |  |
| 143 | EDPAUXP | EDP接口 |  |
| 144 | EDPAUXN | EDP接口 |  |
| 145 | GPIO4_D0 | GPIO |  |
| 146 | GPIO0_B3 | GPIO |  |
| 147 | GPIO0_B0 | GPIO |  |
| 148 | GPIO1_A1 | GPIO |  |
| 149 | GPIO1_A0 | GPIO |  |
| 150 | GPIO1_B4/ / I2C4_SCL | GPIO或I2C接口 |  |


## 核心板引脚定义 4

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 151 | GPIO1_B3/ / I2C4_SDA | GPIO或I2C接口 |  |
| 152 | GPIO0_A2/ / RK3399_26M_OUT | GPIO口或26M时钟输出管脚 |  |
| 153 | GPIO0_B4 | GPIO |  |
| 154 | GPIO0_B5 | GPIO |  |
| 155 | GPIO0_A6/ / PWM3A | GPIO或PWM接口 | 默认为红外接收口 |
| 156 | GPIO1_C7 | GPIO |  |
| 157 | GPIO1_A4 | GPIO |  |
| 158 | GPIO1_A3 | GPIO |  |
| 159 | GPIO1_B5 | GPIO |  |
| 160 | GPIO1_A2 | GPIO |  |
| 161 | GPIO1_B0/ / SPI1_TXD | GPIO或SPI接口 |  |
| 162 | GPIO1_B2/ / SPI1_CSn0 | GPIO或SPI接口 |  |
| 163 | GPIO1_B1/ / SPI1_CLK | GPIO或SPI接口 |  |
| 164 | GPIO1_A7/ / SPI1_RXD | GPIO或SPI接口 |  |
| 165 | GPIO1_C2/ / SPI3_CSn0 | GPIO或SPI接口 |  |
| 166 | GPIO1_C4/ / I2C8_SDA | GPIO或I2C接口 |  |
| 167 | GPIO1_D0 | GPIO |  |
| 168 | GPIO1_C6 | GPIO |  |
| 169 | GPIO2_B3/ / SPI2_CLK/ / CIF_CLKO | GPIO或SPI接口或并口摄像头接口 |  |
| 170 | GPIO2_B0/ / I2C7_SCL/ / CIF_VSYNC | GPIO或I2C接口或并口摄像头接口 |  |
| 171 | GPIO2_A7/ / I2C7_SDA/ / CIF_D7 | GPIO或I2C接口或并口摄像头接口 |  |
| 172 | GPIO2_A6/ / CIF_D6 | GPIO或并口摄像头接口 |  |
| 173 | GPIO2_A5/ / CIF_D5 | GPIO或并口摄像头接口 |  |
| 174 | GPIO2_A4/ / CIF_D4 | GPIO或并口摄像头接口 |  |
| 175 | GPIO2_A3/ / CIF_D3 | GPIO或并口摄像头接口 |  |
| 176 | GPIO2_A2/ / CIF_D2 | GPIO或并口摄像头接口 |  |
| 177 | GPIO2_A1/ / I2C2_SCL/ / CIF_D1 | GPIO或I2C接口或并口摄像头接口 |  |
| 178 | GPIO2_A0/ / I2C2_SDA/ / CIF_D0 | GPIO或I2C接口或并口摄像头接口 |  |
| 179 | GPIO2_B4/ / SPI2_CSn0 | GPIO或SPI接口 |  |
| 180 | GPIO2_B1/ / I2C6_SDA/ / CIF_HREF | GPIO或I2C接口或并口摄像头接口 |  |
| 181 | GPIO2_B2/ / I2C6_SCL/ / CIF_CLKI | GPIO或I2C接口或并口摄像头接口 |  |
| 182 | GND | 参考地 |  |
| 183 | GPIO3_B6/ / MAC_RXCLK/ / UART3_RX | GPIO或千兆以太网接口或串口 |  |
| 184 | GPIO3_B3/ / MAC_MCLK/ / I2C5_SCL | GPIO或千兆以太网接口或I2C接口 |  |
| 185 | GPIO3_B0/ / MAC_MDC/ / SPI0_CSn1 | GPIO或千兆以太网接口或SPI接口 |  |
| 186 | GPIO3_A3/ / MAC_RXD3/ / SPI4_CSn0 | GPIO或千兆以太网接口或SPI接口 |  |
| 187 | GPIO3_A2/ / MAC_RXD2/ / SPI4_CLK | GPIO或千兆以太网接口或SPI接口 |  |
| 188 | GPIO3_A7/ / MAC_RXD1/ / SPI0_CSn0 | GPIO或千兆以太网接口或SPI接口 |  |
| 189 | GPIO3_A6/ / MAC_RXD0/ / SPI0_CLK | GPIO或千兆以太网接口或SPI接口 |  |
| 190 | GPIO3_C0/ / MAC_COL/ / UART3_CTSn/ / SPDIF_TX | GPIO或千兆以太网接口或串口或光纤接口 |  |
| 191 | GPIO3_C1/ / MAC_TXCLK/ / UART3_RTSn | GPIO或千兆以太网接口或串口 |  |
| 192 | GPIO3_B2/ / MAC_RXER/ / I2C5_SDA | GPIO或千兆以太网接口或I2C接口 |  |
| 193 | GPIO3_B7/ / MAC_CRS/ / UART3_TX | GPIO或千兆以太网接口或串口 |  |
| 194 | GPIO3_A4/ / MAC_TXD0 / SPI0_TXD | GPIO或千兆以太网接口或SPI接口 |  |
| 195 | GPIO3_A5/ / MAC_TXD1/ / SPI0_TXD | GPIO或千兆以太网接口或SPI接口 |  |
| 196 | GPIO3_A0/ / MAC_TXD2/ / SPI4_RXD | GPIO或千兆以太网接口或SPI接口 |  |
| 197 | GPIO3_A1/ / MAC_TXD3/ / SPI4_TXD | GPIO或千兆以太网接口或SPI接口 |  |
| 198 | GPIO3_B4/ / MAC_TXEN/ / UART1_RX | GPIO或千兆以太网接口或串口 |  |
| 199 | GPIO3_B5/ / MAC_MDIO/ / UART1_TX | GPIO或千兆以太网接口或串口 |  |
| 200 | GPIO3_B1/ / MAC_RXDV | GPIO或千兆以太网接口 |  |

