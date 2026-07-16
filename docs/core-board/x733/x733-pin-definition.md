---
sidebar_position: 2
title: 引脚定义
description: X733核心板200PIN引脚定义、接口类型与复用说明
---

# 引脚定义

本章节列出 X733 核心板 200PIN 引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、IO 电压域、上电默认状态以及外部上下拉要求。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | BOOST-5V-EN | PL12 | GPIO 复用 |
| 2 | VBUS-USB | VBUS 输入 | 默认不使用 |
| 3 | VBUS-USB | VBUS 输入 | 默认不使用 |
| 4 | GND | 系统地 |  |
| 5 | CC2 | CC2，充电 CC 检测 | 默认不使用 |
| 6 | CC1 | CC1，充电 CC 检测 | 默认不使用 |
| 7 | TYPEC-DP-1 | TYPEC-DP-1，充电 DM | 默认不使用 |
| 8 | TYPEC-DM-1 | TYPEC-DM-1，充电 DM | 默认不使用 |
| 9 | TS | TS | 电池温度检测脚 |
| 10 | PMU-SDA | GPIO，PL1，PMU 的 I2C | 不可做其他功能 |
| 11 | PMU-SCK | GPIO，PL0，PMU 的 I2C | 不可做其他功能 |
| 12 | GND | 系统地 |  |
| 13 | GND | 系统地 |  |
| 14 | GND | 系统地 |  |
| 15 | VBAT | 4.2V 电池输入 |  |
| 16 | VBAT | 4.2V 电池输入 |  |
| 17 | PS | 5V 输入 | 建议电流 3A 或以上；纹波控制在 100MV 内 |
| 18 | PS | 5V 输入 | 建议电流 3A 或以上；纹波控制在 100MV 内 |
| 19 | PS | 5V 输入 | 建议电流 3A 或以上；纹波控制在 100MV 内 |
| 20 | DLDO5 | 3.3V 输出 | 可给底板音频 CODEC 和 PHY IO 供电 |
| 21 | BLDO5 | 1.8V 输出 | 可给底板音频 CODEC 和 PHY IO 供电 |
| 22 | RESET-KEY | RESET | 不可用作 GPIO 口 |
| 23 | POWKEY | PWRON | 不可用作 GPIO 口 |
| 24 | LRADC0 | LRADC0 | 不可用作 GPIO 口 |
| 25 | MCSI-STBY-F | PE6 | GPIO 复用 |
| 26 | MCSI-STBY-R2 | PE15 | GPIO 复用 |
| 27 | MCSI-STBY-R | PE8 | GPIO 复用 |
| 28 | MCSI-RST-R | PE9 | GPIO 复用 |
| 29 | MCSI-RST-F | PE7 | GPIO 复用 |
| 30 | MCSI-RST-R2 | PE2 | GPIO 复用 |
| 31 | PE1 | PE1 | GPIO 复用 |
| 32 | MCSI-MCLK-2 | PE0 | GPIO 复用 |
| 33 | MCSI-MCLK | PE5 | GPIO 复用 |
| 34 | TWI3-SDA | PE4 | GPIO 复用 |
| 35 | TWI3-SCK | PE3 | GPIO 复用 |
| 36 | TWI4-SCK | PE10 | GPIO 复用 |
| 37 | TWI4-SDA | PE11 | GPIO 复用 |
| 38 | PCIE-PERSTN | PE13 | GPIO 复用 |
| 39 | PCIE-WAKEN | PE12 | GPIO 复用 |
| 40 | PCIE-CLKREQN | PE14 | GPIO 复用 |
| 41 | TWI2-SDA | PD17 | GPIO 复用 |
| 42 | TWI2-SCK | PD16 | GPIO 复用 |
| 43 | EDP-BL-PWMI | PJ27 | GPIO 复用 |
| 44 | EDP-LED-EN | PJ26 | GPIO 复用 |
| 45 | USB1-DM | USB 2.0 信号 | 不可用作 GPIO 口 |
| 46 | USB1-DP | USB 2.0 信号 | 不可用作 GPIO 口 |
| 47 | USB2-DP | USB 2.0 信号 | 不可用作 GPIO 口 |
| 48 | USB2-DM | USB 2.0 信号 | 不可用作 GPIO 口 |
| 49 | USB0-DP | USB 2.0 信号 | 不可用作 GPIO 口 |
| 50 | USB0-DM | USB 2.0 信号 | 不可用作 GPIO 口 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 51 | SBU1-DC | PL10 |  |
| 52 | SBU2-DC | PL11 |  |
| 53 | COMB1-TX0P | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 54 | COMB1-TX0N | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 55 | COMB1-RX0P | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 56 | COMB1-RX0N | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 57 | COMB1-REFP | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 58 | COMB1-REFN | PCIE/USB 3.0 信号 | 不可用作 GPIO 口 |
| 59 | COMB0-LANE3-N | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 60 | COMB0-LANE3-P | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 61 | COMB0-LANE2-N | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 62 | COMB0-LANE2-P | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 63 | COMB0-LANE1-N | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 64 | COMB0-LANE1-P | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 65 | COMB0-LANE0-N | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 66 | COMB0-LANE0-P | Type-C/USB 3.0/eDP 信号 | 不可用作 GPIO 口 |
| 67 | AUXP | DP 信号 | 不可用作 GPIO 口 |
| 68 | AUXN | DP 信号 | 不可用作 GPIO 口 |
| 69 | HSDA | HDMI I2C 信号 | 不可用作 GPIO 口 |
| 70 | HSCL | HDMI I2C 信号 | 不可用作 GPIO 口 |
| 71 | HCEC | HDMI CEC 信号 | 不可用作 GPIO 口 |
| 72 | HHPD | HDMI HPD 信号 | 不可用作 GPIO 口 |
| 73 | HTXCN | HDMI 输出信号 | 不可用作 GPIO 口 |
| 74 | HTXCP | HDMI 输出信号 | 不可用作 GPIO 口 |
| 75 | HTX0N | HDMI 输出信号 | 不可用作 GPIO 口 |
| 76 | HTX0P | HDMI 输出信号 | 不可用作 GPIO 口 |
| 77 | HTX1N | HDMI 输出信号 | 不可用作 GPIO 口 |
| 78 | HTX1P | HDMI 输出信号 | 不可用作 GPIO 口 |
| 79 | HTX2N | HDMI 输出信号 | 不可用作 GPIO 口 |
| 80 | HTX2P | HDMI 输出信号 | 不可用作 GPIO 口 |
| 81 | MCSIB-D0P | MIPI CSI 信号/PK11 | GPIO 复用 |
| 82 | MCSIB-D0N | MIPI CSI 信号/PK10 | GPIO 复用 |
| 83 | MCSIB-D1P | MIPI CSI 信号/PK13 | GPIO 复用 |
| 84 | MCSIB-D1N | MIPI CSI 信号/PK12 | GPIO 复用 |
| 85 | MCSIB-CKP | MIPI CSI 信号/PK15 | GPIO 复用 |
| 86 | MCSIB-CKN | MIPI CSI 信号/PK14 | GPIO 复用 |
| 87 | MCSIB-D2P | MIPI CSI 信号/PK17 | GPIO 复用 |
| 88 | MCSIB-D2N | MIPI CSI 信号/PK16 | GPIO 复用 |
| 89 | MCSIB-D3P | MIPI CSI 信号/PK19 | GPIO 复用 |
| 90 | MCSIB-D3N | MIPI CSI 信号/PK18 | GPIO 复用 |
| 91 | MCSIC-D0P | MIPI CSI 信号/PK21 | GPIO 复用 |
| 92 | MCSIC-D0N | MIPI CSI 信号/PK20 | GPIO 复用 |
| 93 | MCSIC-D1P | MIPI CSI 信号/PK23 | GPIO 复用 |
| 94 | MCSIC-D1N | MIPI CSI 信号/PK22 | GPIO 复用 |
| 95 | MCSIC-CKP | MIPI CSI 信号/PK25 | GPIO 复用 |
| 96 | MCSIC-CKN | MIPI CSI 信号/PK24 | GPIO 复用 |
| 97 | MCSIA-D0N | MIPI CSI 信号/PK0 | GPIO 复用 |
| 98 | MCSIA-D0P | MIPI CSI 信号/PK1 | GPIO 复用 |
| 99 | MCSIA-D2N | MIPI CSI 信号/PK6 | GPIO 复用 |
| 100 | MCSIA-D2P | MIPI CSI 信号/PK7 | GPIO 复用 |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 101 | MCSIA-D1P | MIPI CSI 信号/PK3 | GPIO 复用 |
| 102 | MCSIA-D1N | MIPI CSI 信号/PK2 | GPIO 复用 |
| 103 | MCSIA-CKP | MIPI CSI 信号/PK5 | GPIO 复用 |
| 104 | MCSIA-CKN | MIPI CSI 信号/PK4 | GPIO 复用 |
| 105 | MCSIA-D3P | MIPI CSI 信号/PK9 | GPIO 复用 |
| 106 | MCSIA-D3N | MIPI CSI 信号/PK8 | GPIO 复用 |
| 107 | MIPI-DSI0-DP0 | MIPI DSI 信号/PD0 | GPIO 复用 |
| 108 | MIPI-DSI0-DN0 | MIPI DSI 信号/PD1 | GPIO 复用 |
| 109 | MIPI-DSI0-DP1 | MIPI DSI 信号/PD2 | GPIO 复用 |
| 110 | MIPI-DSI0-DN1 | MIPI DSI 信号/PD3 | GPIO 复用 |
| 111 | MIPI-DSI0-CKP | MIPI DSI 信号/PD4 | GPIO 复用 |
| 112 | MIPI-DSI0-CKN | MIPI DSI 信号/PD5 | GPIO 复用 |
| 113 | MIPI-DSI0-DN2 | MIPI DSI 信号/PD7 | GPIO 复用 |
| 114 | MIPI-DSI0-DP2 | MIPI DSI 信号/PD6 | GPIO 复用 |
| 115 | MIPI-DSI0-DP3 | MIPI DSI 信号/PD8 | GPIO 复用 |
| 116 | MIPI-DSI0-DN3 | MIPI DSI 信号/PD9 | GPIO 复用 |
| 117 | DSI1-DN3 | MIPI DSI 信号/PD19 | GPIO 复用 |
| 118 | DSI1-DP3 | MIPI DSI 信号/PD18 | GPIO 复用 |
| 119 | PJ24 | PJ24 | GPIO 复用 |
| 120 | PG10 | PG10 | GPIO 复用 |
| 121 | PJ25 | PJ25 | GPIO 复用 |
| 122 | PJ22 | PJ22 | GPIO 复用 |
| 123 | PJ23 | PJ23 | GPIO 复用 |
| 124 | CODEC-RST | PB3 | GPIO 复用 |
| 125 | CODEC-IRQ | PB2 | GPIO 复用 |
| 126 | I2S0-MCLK | PB4 | GPIO 复用 |
| 127 | I2S0-BCLK | PB5 | GPIO 复用 |
| 128 | I2S0-LRCK | PB6 | GPIO 复用 |
| 129 | I2S0-DOUT0 | PB7 | GPIO 复用 |
| 130 | I2S0-DIN0 | PB8 | GPIO 复用 |
| 131 | TP-GPIO1 | PD14 | GPIO 复用 |
| 132 | LCD-RST | PD21 | GPIO 复用 |
| 133 | TP-SPI-MOSI | PD12 | GPIO 复用 |
| 134 | TP-GPIO2 | PD15 | GPIO 复用 |
| 135 | TP-SPI-MISO | PD13 | GPIO 复用 |
| 136 | TP-INT | PD23 | GPIO 复用 |
| 137 | TP-SPI-CLK | PD11 | GPIO 复用 |
| 138 | TP-SPI-CS0 | PD10 | GPIO 复用 |
| 139 | TP-RST | PD20 | GPIO 复用 |
| 140 | LCD-PWM | PD22 | GPIO 复用 |
| 141 | VOL-KEY | PB0 | GPIO 复用 |
| 142 | VOL+KEY | PB1 | GPIO 复用 |
| 143 | FEL | FEL | GPIO 复用 |
| 144 | EPHY_25M_PH15 | PH15 | GPIO 复用 |
| 145 | GMAC_CLKIN_PH3 | PH3 | GPIO 复用 |
| 146 | PH16 | PH16 | GPIO 复用 |
| 147 | GMAC_MDC_PH8 | PH8 | GPIO 复用 |
| 148 | GMAC_MDIO_PH9 | PH9 | GPIO 复用 |
| 149 | GMAC_TXCLK_PH6 | PH6 | GPIO 复用 |
| 150 | GMAC_TXEN_PH7 | PH7 | GPIO 复用 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 151 | GMAC_TXD0_PH5 | PH5 | GPIO 复用 |
| 152 | GMAC_TXD1_PH4 | PH4 | GPIO 复用 |
| 153 | GMAC_TXD2_PH14 | PH14 | GPIO 复用 |
| 154 | GMAC_TXD3_PH13 | PH13 | GPIO 复用 |
| 155 | GMAC_RXCLK_PH12 | PH12 | GPIO 复用 |
| 156 | GMAC_RXD0_PH1 | PH1 | GPIO 复用 |
| 157 | GMAC_RXD1_PH0 | PH0 | GPIO 复用 |
| 158 | GMAC_RXCLT_PH2 | PH2 | GPIO 复用 |
| 159 | GMAC_RXD2_PH11 | PH11 | GPIO 复用 |
| 160 | GMAC_RXD3_PH10 | PH10 | GPIO 复用 |
| 161 | BT-UART-RTS | PG9 | GPIO 复用 |
| 162 | BT-PCM-CLK | PG11 | GPIO 复用 |
| 163 | BT-PCM-SYNC | PG12 | GPIO 复用 |
| 164 | BT-PCM-DOUT | PG14 | GPIO 复用 |
| 165 | BT-PCM-DIN | PG13 | GPIO 复用 |
| 166 | SDC0-CLK | PF2 | GPIO 复用 |
| 167 | SDC0-CMD | PF1 | GPIO 复用 |
| 168 | SDC0-D0 | PF3 | GPIO 复用 |
| 169 | SDC0-D3 | PF4 | GPIO 复用 |
| 170 | SDC0-DET | PF6 | GPIO 复用 |
| 171 | SDC0-D2 | PF5 | GPIO 复用 |
| 172 | SDC0-D1 | PF0 | GPIO 复用 |
| 173 | BT-UART-CTS | PG8 | GPIO 复用 |
| 174 | BT-UART-TX | PG7 | GPIO 复用 |
| 175 | BT-UART-RX | PG6 | GPIO 复用 |
| 176 | WL-SDIO-CLK | PG0 | GPIO 复用 |
| 177 | WL-SDIO-D2 | PG4 | GPIO 复用 |
| 178 | WL-SDIO-D3 | PG5 | GPIO 复用 |
| 179 | WL-SDIO-D1 | PG3 | GPIO 复用 |
| 180 | WL-SDIO-CMD | PG1 | GPIO 复用 |
| 181 | WL-SDIO-D0 | PG2 | GPIO 复用 |
| 182 | TWI8-SDA | PB10 | GPIO 复用 |
| 183 | TWI8-SCK | PB9 | GPIO 复用 |
| 184 | REFCLK_OUT | REFCLK_OUT | 不可用作 GPIO 口 |
| 185 | AP-CK32K-OUT | AP-CK32K-OUT | 不可用作 GPIO 口 |
| 186 | WL-REG-ON | PM1 | GPIO 复用 |
| 187 | WL-WAKE-AP | PM0 | GPIO 复用 |
| 188 | AP-WAKE-BT | PM3 | GPIO 复用 |
| 189 | BT-RESETN | PM2 | GPIO 复用 |
| 190 | CC-INT | PM5 | GPIO 复用 |
| 191 | BT-WAKE-AP | PM4 | GPIO 复用 |
| 192 | GYRO-INT1 | PL4 | GPIO 复用 |
| 193 | GYRO-INT2 | PL5 | GPIO 复用 |
| 194 | KD-EINT | PL3 | GPIO 复用 |
| 195 | EINT-HAL | PL6 | GPIO 复用 |
| 196 | USB0-DRVVBUS | PL2 | GPIO 复用 |
| 197 | LED-EN | PL7 | GPIO 复用 |
| 198 | PL8 | PL8 | GPIO 复用 |
| 199 | PL9 | PL9 | GPIO 复用 |
| 200 | ALS-INT | PL13 | GPIO 复用 |
