---
sidebar_position: 2
title: 引脚定义
description: X507核心板172PIN引脚定义、接口类型与复用说明
---

# 引脚定义

本章节列出 X507 核心板 172PIN 引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、IO 电压域、上电默认状态以及外部上下拉要求。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 |
|---|---|---|
| 1 | RGMII-CLKIN-125M | 千兆以太网 |
| 2 | RGMII-RXD0 | 千兆以太网 |
| 3 | RGMII-RXD3 | 千兆以太网 |
| 4 | RGMII-TXD2 | 千兆以太网 |
| 5 | RGMII-TXCTL | 千兆以太网 |
| 6 | RGMII-TXD0 | 千兆以太网 |
| 7 | RGMII-MDIO | 千兆以太网 |
| 8 | EPHY-CLK-25M | 千兆以太网 |
| 9 | RGMII-MDC | 千兆以太网 |
| 10 | RGMII-RXCK | 千兆以太网 |
| 11 | PA-I2S0-BCLK | I2S0 |
| 12 | PA-I2S0-MCLK | I2S0 |
| 13 | PA-I2S0-DIN0 | I2S0 |
| 14 | PA-I2S0-LRCK | I2S0 |
| 15 | PA5 | GPIO |
| 16 | PA4 | GPIO |
| 17 | PA-TWI0-SCK | I2C0 |
| 18 | PA-TWI0-SDA | I2C0 |
| 19 | PA-TWI3-SCK | I2C3 |
| 20 | PA-TWI3-SDA | I2C3 |
| 21 | PC3 | GPIO |
| 22 | PC2 | GPIO |
| 23 | PMU-PWRON | 电源键 |
| 24 | TV-OUT | TV 输出 |
| 25 | GPADC2 | ADC 输入 |
| 26 | GPADC0 | ADC 输入 |
| 27 | GPADC1 | ADC 输入 |
| 28 | AP-CK32KO | 时钟输入 |
| 29 | LRADC | ADC |
| 30 | LINEINL | 线路输入 |
| 31 | LINEINR | 线路输入 |
| 32 | LINEOUTL | 耳机输出 |
| 33 | LINEOUTR | 耳机输出 |
| 34 | MCSI-SCK | CSI |
| 35 | MCSI-SDA | CSI |
| 36 | MCSI-D2N | CSI |
| 37 | MCSI-D2P | CSI |
| 38 | MCSI-D1P | CSI |
| 39 | MCSI-D1N | CSI |
| 40 | MCSI-D0P | CSI |
| 41 | MCSI-D0N | CSI |
| 42 | MCSI-CLKP | CSI |
| 43 | MCSI-CLKN | CSI |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 |
|---|---|---|
| 44 | MCSI-MCLK | CSI |
| 45 | MCSI-D3P | CSI |
| 46 | MCSI-D3N | CSI |
| 47 | USB0-DM | USB OTG |
| 48 | USB0-DP | USB OTG |
| 49 | USB1-DM | USB 2.0 |
| 50 | USB1-DP | USB 2.0 |
| 51 | CON-USB2-DM | USB 2.0 |
| 52 | CON-USB2-DP | USB 2.0 |
| 53 | USB3-DP | USB 2.0 |
| 54 | USB3-DM | USB 2.0 |
| 55 | HCEC | HDMI 输出 |
| 56 | HSDA | HDMI 输出 |
| 57 | HSCL | HDMI 输出 |
| 58 | HHPD | HDMI 输出 |
| 59 | HTXCN | HDMI 输出 |
| 60 | HTXCP | HDMI 输出 |
| 61 | HTX0N | HDMI 输出 |
| 62 | HTX0P | HDMI 输出 |
| 63 | HTX1N | HDMI 输出 |
| 64 | HTX1P | HDMI 输出 |
| 65 | HTX2P | HDMI 输出 |
| 66 | HTX2N | HDMI 输出 |
| 67 | LCD-D10 | LVDS/RGB |
| 68 | LCD-D11 | LVDS/RGB |
| 69 | LCD-D12 | LVDS/RGB |
| 70 | LCD-D13 | LVDS/RGB |
| 71 | LCD-D14 | LVDS/RGB |
| 72 | LCD-D15 | LVDS/RGB |
| 73 | LCD-D16 | RGB |
| 74 | LCD-D17 | RGB |
| 75 | LCD-D18 | RGB |
| 76 | LCD-D19 | RGB |
| 77 | LCD-D0 | LVDS/RGB |
| 78 | LCD-D1 | LVDS/RGB |
| 79 | LCD-D2 | LVDS/RGB |
| 80 | LCD-D3 | LVDS/RGB |
| 81 | LCD-D4 | LVDS/RGB |
| 82 | LCD-D5 | LVDS/RGB |
| 83 | LCD-D6 | LVDS/RGB |
| 84 | LCD-D7 | LVDS/RGB |
| 85 | LCD-D8-SOC | RGB |
| 86 | LCD-D9-SOC | RGB |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 |
|---|---|---|
| 87 | LCD-VSYNC | 垂直同步 |
| 88 | LCD-D22 | RGB |
| 89 | LCD-PWM | PWM |
| 90 | LCD-D20 | RGB |
| 91 | LCD-HSYNC | 水平同步 |
| 92 | LCD-CLK | 时钟 |
| 93 | LCD-D21 | RGB |
| 94 | LCD-D23 | RGB |
| 95 | LCD-DE | LCD 电源 |
| 96 | PA-TWI1-SCK | I2C1 |
| 97 | PA-TWI1-SDA | I2C1 |
| 98 | SPDIF-OUT | SPDIF 输出 |
| 99 | WATCHDOG-SIG | 看门狗信号 |
| 100 | UART0-RX | UART0 |
| 101 | UART0-TX | UART0 |
| 102 | PH5 | GPIO |
| 103 | PH6 | GPIO |
| 104 | SOC-RESET | 复位 |
| 105 | UART5-RX | UART5 |
| 106 | UART5-TX | UART5 |
| 107 | PH7 | GPIO |
| 108 | IR-RX | 红外接收 |
| 109 | PH8 | GPIO |
| 110 | PH9 | GPIO |
| 111 | WL-SDIO-CLK | SDIO |
| 112 | WL-SDIO-CMD | SDIO |
| 113 | WL-SDIO-D0 | SDIO |
| 114 | WL-SDIO-D2 | SDIO |
| 115 | WL-SDIO-D1 | SDIO |
| 116 | WL-SDIO-D3 | SDIO |
| 117 | FEL | 恢复模式 |
| 118 | TWI4-SCK | UART4 |
| 119 | TWI4-SDA | UART4 |
| 120 | BT-PCM-DOUT | GPIO/蓝牙 |
| 121 | BT-PCM-CLK | GPIO/蓝牙 |
| 122 | BT-PCM-SYNC | GPIO/蓝牙 |
| 123 | BT-PCM-DIN | GPIO/蓝牙 |
| 124 | BT-UART-TX/JTAG-MS | UART/JTAG |
| 125 | BT-UART-RTS/JTAG-DO | UART/JTAG |
| 126 | BT-UART-RX/JTAG-CK | UART/JTAG |
| 127 | BT-UART-CTS/JTAG-DI | UART/JTAG |
| 128 | NCSI0-MCLK | CSI |
| 129 | NCSI0-HSYNC | CSI |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 |
|---|---|---|
| 130 | NCSI0-VSYNC | CSI |
| 131 | NCSI0-PCLK | CSI |
| 132 | NCSI0-SCK | CSI |
| 133 | NCSI0-SDA | CSI |
| 134 | NCSI0-D15 | CSI |
| 135 | NCSI0-D7 | CSI |
| 136 | NCSI0-D5 | CSI |
| 137 | NCSI0-D6 | CSI |
| 138 | NCSI0-D4 | CSI |
| 139 | NCSI0-D2 | CSI |
| 140 | NCSI0-D1 | CSI |
| 141 | NCSI0-D0 | CSI |
| 142 | NCSI0-D3 | CSI |
| 143 | NCSI0-D14 | CSI |
| 144 | NCSI0-D13 | CSI |
| 145 | NCSI0-D8 | CSI |
| 146 | NCSI0-D12 | CSI |
| 147 | NCSI0-D11 | CSI |
| 148 | NCSI0-D10 | CSI |
| 149 | NCSI0-D9 | CSI |
| 150 | CSI-FSIN0 | CSI |
| 151 | SDC0-DET | SD 卡 |
| 152 | SDC0-D2 | SD 卡 |
| 153 | SDC0-CMD | SD 卡 |
| 154 | SDC0-CLK | SD 卡 |
| 155 | SDC0-D3 | SD 卡 |
| 156 | SDC0-D1 | SD 卡 |
| 157 | SDC0-D0 | SD 卡 |
| 158 | 4G-WAKEUP-SOC | 4G 唤醒信号 |
| 159 | ACIN | 5V 电源输入 |
| 160 | ACIN | 5V 电源输入 |
| 161 | GND | 地 |
| 162 | GND | 地 |
| 163 | DCDC1 | 3.3V 电源输出 |
| 164 | DCDC1 | 3.3V 电源输出 |
| 165 | NC |  |
| 166 | PHYRSTB | 千兆以太网 |
| 167 | RGMII-RXCTL | 千兆以太网 |
| 168 | RGMII-RXD1 | 千兆以太网 |
| 169 | RGMII-RXD2 | 千兆以太网 |
| 170 | RGMII-TXD1 | 千兆以太网 |
| 171 | RGMII-TXD3 | 千兆以太网 |
| 172 | RGMII-TXCK | 千兆以太网 |
