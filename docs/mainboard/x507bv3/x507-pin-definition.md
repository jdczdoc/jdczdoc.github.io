---
title: 引脚定义
sidebar_position: 3
description: "X507CV1核心板172PIN完整引脚定义"
---

# 引脚定义

本页列出X507CV1核心板全部172PIN。底板设计时还应核对核心板原理图、T507数据手册、IO电压域和上电默认状态。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | RGMII-CLKIN-125M | 千兆以太网接口 | GPIO,UART,PWM,INT复用管脚 |
| 2 | RGMII-RXD0 | 千兆以太网接口 | GPIO,INT,I2S,DMIC复用管脚 |
| 3 | RGMII-RXD3 | 千兆以太网接口 | GPIO,I2S,I2C,DMIC,INT复用管脚 |
| 4 | RGMII-TXD2 | 千兆以太网接口 | GPIO,I2C,UART,INT复用管脚 |
| 5 | RGMII-TXCTL | 千兆以太网接口 | GPIO,PWM,UART,INT复用管脚 |
| 6 | RGMII-TXD0 | 千兆以太网接口 | GPIO,UART,I2C,UART,INT复用管脚 |
| 7 | RGMII-MDIO | 千兆以太网接口 | INT,GPIO,UART复用管脚 |
| 8 | EPHY-CLK-25M | 千兆以太网接口 | INT,GPIO, UART复用管脚 |
| 9 | RGMII-MDC | 千兆以太网接口 | INT,UART, PWM,GPIO复用管脚 |
| 10 | RGMII-RXCK | 千兆以太网接口 | INT,I2S,DMIC,GPIO复用管脚 |
| 11 | PA-I2S0-BCLK | I2S0信号 | INT,GPIO,RMII复用管脚 |
| 12 | PA-I2S0-MCLK | I2S0信号 | INT,GPIO,RMII复用管脚 |
| 13 | PA-I2S0-DIN0 | I2S0信号 | INT,MDIO,GPIO复用管脚 |
| 14 | PA-I2S0-LRCK | I2S0信号 | INT,GPIO复用管脚 |
| 15 | PA5 | GPIO | RMII,I2S,INT复用管脚 |
| 16 | PA4 | GPIO | RMII，标准数据口，INT复用管脚 |
| 17 | PA-TWI0-SCK | I2C0信号 | GPIO,INT,RMII复用管脚 |
| 18 | PA-TWI0-SDA | I2C0信号 | GPIO,INT,RMII复用管脚 |
| 19 | PA-TWI3-SCK | I2C3信号 | GPIO,INT复用管脚 |
| 20 | PA-TWI3-SDA | I2C3信号 | GPIO,INT复用管脚 |
| 21 | PC3 | GPIO | SPI复用管脚 |
| 22 | PC2 | GPIO | SPI复用管脚 |
| 23 | PMU-PWRON | PWRKEY开关使能 |  |
| 24 | TV-OUT | 视频信号 |  |
| 25 | GPADC2 | ADC信号输入 |  |
| 26 | GPADC0 | ADC信号输入 |  |
| 27 | GPADC1 | ADC信号输入 |  |
| 28 | AP-CK32KO | 时钟输入 | GPIO,I2S,INT复用管脚 |
| 29 | LRADC | ADC信号 |  |
| 30 | LINEINL | 音频输入 |  |
| 31 | LINEINR | 音频输入 |  |
| 32 | LINEOUTL | 耳机信号 |  |
| 33 | LINEOUTR | 耳机信号 |  |
| 34 | MCSI-SCK | CSI接口 | GPIO,I2C,UART,INT复用管脚 |
| 35 | MCSI-SDA | CSI接口 | GPIO,I2C,UART,INT复用管脚 |
| 36 | MCSI-D2N | CSI接口 | MIPI摄像头差分对 |
| 37 | MCSI-D2P | CSI接口 | MIPI摄像头差分对 |
| 38 | MCSI-D1P | CSI接口 | MIPI摄像头差分对 |
| 39 | MCSI-D1N | CSI接口 | MIPI摄像头差分对 |
| 40 | MCSI-D0P | CSI接口 | MIPI摄像头差分对 |
| 41 | MCSI-D0N | CSI接口 | MIPI摄像头差分对 |
| 42 | MCSI-CLKP | CSI接口 | MIPI摄像头差分对 |
| 43 | MCSI-CLKN | CSI接口 | MIPI摄像头差分对 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 44 | MCSI-MCLK | CSI接口 | GPIO,PWM,INT复用管脚 |
| 45 | MCSI-D3P | CSI接口 | MIPI摄像头差分对 |
| 46 | MCSI-D3N | CSI接口 | MIPI摄像头差分对 |
| 47 | USB0-DM | OTG接口 | USB信号差分对 |
| 48 | USB0-DP | OTG接口 | USB信号差分对 |
| 49 | USB1-DM | USB2.0接口 | USB信号差分对 |
| 50 | USB1-DP | USB2.0接口 | USB信号差分对 |
| 51 | CON-USB2-DM | USB2.0接口 | USB信号差分对 |
| 52 | CON-USB2-DP | USB2.0接口 | USB信号差分对 |
| 53 | USB3-DP | USB2.0接口 | USB信号差分对 |
| 54 | USB3-DM | USB2.0接口 | USB信号差分对 |
| 55 | HCEC | HDMI输出接口 |  |
| 56 | HSDA | HDMI输出接口 |  |
| 57 | HSCL | HDMI输出接口 |  |
| 58 | HHPD | HDMI输出接口 |  |
| 59 | HTXCN | HDMI输出接口 | HDMI信号差分对 |
| 60 | HTXCP | HDMI输出接口 | HDMI信号差分对 |
| 61 | HTX0N | HDMI输出接口 | HDMI信号差分对 |
| 62 | HTX0P | HDMI输出接口 | HDMI信号差分对 |
| 63 | HTX1N | HDMI输出接口 | HDMI信号差分对 |
| 64 | HTX1P | HDMI输出接口 | HDMI信号差分对 |
| 65 | HTX2P | HDMI输出接口 | HDMI信号差分对 |
| 66 | HTX2N | HDMI输出接口 | HDMI信号差分对 |
| 67 | LCD-D10 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 68 | LCD-D11 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 69 | LCD-D12 | LVDS接口/RGB接口 | GPIO,INT,SIM复用管脚 |
| 70 | LCD-D13 | LVDS接口/RGB接口 | GPIO,INT,SIM复用管脚 |
| 71 | LCD-D14 | LVDS接口/RGB接口 | GPIO,INT,SIM复用管脚 |
| 72 | LCD-D15 | LVDS接口/RGB接口 | GPIO,INT,SIM复用管脚 |
| 73 | LCD-D16 | RGB接口 | GPIO,INT,SIM复用管脚 |
| 74 | LCD-D17 | RGB接口 | GPIO,INT,SIM复用管脚 |
| 75 | LCD-D18 | RGB接口 | GPIO,INT,SIM复用管脚 |
| 76 | LCD-D19 | RGB接口 | GPIO,INT复用管脚 |
| 77 | LCD-D0 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 78 | LCD-D1 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 79 | LCD-D2 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 80 | LCD-D3 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 81 | LCD-D4 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 82 | LCD-D5 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 83 | LCD-D6 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 84 | LCD-D7 | LVDS接口/RGB接口 | GPIO,INT复用管脚 |
| 85 | LCD-D8-SOC | RGB接口 | GPIO,INT复用管脚 |
| 86 | LCD-D9-SOC | RGB接口 | GPIO,INT复用管脚 |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 87 | LCD-VSYNC | VSYNC信号 | GPIO,INT复用管脚 |
| 88 | LCD-D22 | RGB接口 | GPIO,INT复用管脚 |
| 89 | LCD-PWM | PWM信号 | GPIO,INT复用管脚 |
| 90 | LCD-D20 | RGB接口 | GPIO,INT复用管脚 |
| 91 | LCD-HSYNC | HSYNC信号 | GPIO,INT复用管脚 |
| 92 | LCD-CLK | 时钟信号 | GPIO,INT复用管脚 |
| 93 | LCD-D21 | RGB接口 | GPIO,INT复用管脚 |
| 94 | LCD-D23 | RGB接口 | GPIO,INT复用管脚 |
| 95 | LCD-DE | 使能信号 | GPIO,INT复用管脚 |
| 96 | PA-TWI1-SCK | I2C1信号 | GPIO,INT,RMII复用管脚 |
| 97 | PA-TWI1-SDA | I2C1信号 | GPIO,INT,RMII复用管脚 |
| 98 | SPDIF-OUT | 光纤接口 | GPIO,I2C,INT复用管脚 |
| 99 | WATCHDOG-SIG | 看门狗信号 | GPIO,PWM,INT复用管脚 |
| 100 | UART0-RX | 串口0 | GPIO,PWM,I2C,INT复用管脚 |
| 101 | UART0-TX | 串口0 | GPIO,PWM,I2C,INT复用管脚 |
| 102 | PH5 | GPIO | UART,I2S,SPI,I2C,INT复用管脚 |
| 103 | PH6 | GPIO | UART,I2S,SPI,I2C,INT复用管脚 |
| 104 | SOC-RESET | 复位信号 |  |
| 105 | UART5-RX | 串口5 | GPIO,PWM,I2C,INT复用管脚 |
| 106 | UART5-TX | 串口5 | GPIO,PWM,I2C,INT复用管脚 |
| 107 | PH7 | GPIO | UART,I2S,SPI,I2C,INT复用管脚 |
| 108 | IR-RX | 红外信号 | GPIO,INT复用管脚 |
| 109 | PH8 | GPIO | UART,I2S,SPI,INT复用管脚 |
| 110 | PH9 | GPIO | I2S,SPI,INT复用管脚 |
| 111 | WL-SDIO-CLK | SDIO接口 | GPIO,INT复用管脚 |
| 112 | WL-SDIO-CMD | SDIO接口 | GPIO,INT复用管脚 |
| 113 | WL-SDIO-D0 | SDIO接口 | GPIO,INT复用管脚 |
| 114 | WL-SDIO-D2 | SDIO接口 | GPIO,INT复用管脚 |
| 115 | WL-SDIO-D1 | SDIO接口 | GPIO,INT复用管脚 |
| 116 | WL-SDIO-D3 | SDIO接口 | GPIO,INT复用管脚 |
| 117 | FEL | RECOVER升级按键信号 |  |
| 118 | TWI4-SCK | 串口4 | GPIO,UART,I2C,INT复用管脚 |
| 119 | TWI4-SDA | 串口4 | GPIO,UART,I2C,INT复用管脚 |
| 120 | BT-PCM-DOUT | GPIO/蓝牙信号 | GPIO,I2S, INT复用管脚 |
| 121 | BT-PCM-CLK | GPIO/蓝牙信号 | GPIO,I2S,INT复用管脚 |
| 122 | BT-PCM-SYNC | GPIO/蓝牙信号 | GPIO,I2S,INT复用管脚 |
| 123 | BT-PCM-DIN | GPIO/蓝牙信号 | GPIO,I2S,INT复用管脚 |
| 124 | BT-UART-TX/JTAG-MS | 串口/JTAG接口 | GPIO,INT复用管脚 |
| 125 | BT-UART-RTS/JTAG-DO | 串口/JTAG接口 | GPIO,INT复用管脚 |
| 126 | BT-UART-RX/JTAG-CK | 串口/JTAG接口 | UART,INT,GPIO复用管脚 |
| 127 | BT-UART-CTS/JTAG-DI | 串口/JTAG接口 | UART,INT,GPIO复用管脚 |
| 128 | NCSI0-MCLK | CSI接口 | GPIO,INT复用管脚 |
| 129 | NCSI0-HSYNC | CSI接口 | GPIO,INT复用管脚 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 130 | NCSI0-VSYNC | CSI接口 | GPIO,INT复用管脚 |
| 131 | NCSI0-PCLK | CSI接口 | GPIO,INT复用管脚 |
| 132 | NCSI0-SCK | CSI接口 | GPIO,INT,I2C复用管脚 |
| 133 | NCSI0-SDA | CSI接口 | GPIO,INT,I2C复用管脚 |
| 134 | NCSI0-D15 | CSI接口 | GPIO,INT复用管脚 |
| 135 | NCSI0-D7 | CSI接口 | GPIO,INT复用管脚 |
| 136 | NCSI0-D5 | CSI接口 | GPIO,INT复用管脚 |
| 137 | NCSI0-D6 | CSI接口 | GPIO,INT复用管脚 |
| 138 | NCSI0-D4 | CSI接口 | GPIO,INT复用管脚 |
| 139 | NCSI0-D2 | CSI接口 | GPIO,INT复用管脚 |
| 140 | NCSI0-D1 | CSI接口 | GPIO,INT复用管脚 |
| 141 | NCSI0-D0 | CSI接口 | GPIO,INT复用管脚 |
| 142 | NCSI0-D3 | CSI接口 | GPIO,INT复用管脚 |
| 143 | NCSI0-D14 | CSI接口 | GPIO,INT复用管脚 |
| 144 | NCSI0-D13 | CSI接口 | GPIO,INT复用管脚 |
| 145 | NCSI0-D8 | CSI接口 | GPIO,INT复用管脚 |
| 146 | NCSI0-D12 | CSI接口 | GPIO,INT复用管脚 |
| 147 | NCSI0-D11 | CSI接口 | GPIO,INT复用管脚 |
| 148 | NCSI0-D10 | CSI接口 | GPIO,INT复用管脚 |
| 149 | NCSI0-D9 | CSI接口 | GPIO,INT复用管脚 |
| 150 | CSI-FSIN0 | CSI接口 | GPIO,INT复用管脚 |
| 151 | SDC0-DET | SDC接口 | GPIO,INT复用管脚 |
| 152 | SDC0-D2 | SDC接口 | GPIO,JTAG,INT复用管脚 |
| 153 | SDC0-CMD | SDC接口 | GPIO,JTAG,INT复用管脚 |
| 154 | SDC0-CLK | SDC接口 | GPIO,UART,INT复用管脚 |
| 155 | SDC0-D3 | SDC接口 | GPIO,UART,INT复用管脚 |
| 156 | SDC0-D1 | SDC接口 | GPIO,JTAG,INT复用管脚 |
| 157 | SDC0-D0 | SDC接口 | GPIO,JTAG,INT复用管脚 |
| 158 | 4G-WAKEUP-SOC | 4G唤醒信号 |  |
| 159 | ACIN | 5V0电源输入 | 核心模块5V直流供电输入 |
| 160 | ACIN | 5V0电源输入 | 核心模块5V直流供电输入 |
| 161 | GND | 参考地 | 参考地 |
| 162 | GND | 参考地 | 参考地 |
| 163 | DCDC1 | 3V3电源输出 | 核心模块3.3V直流电源输出 |
| 164 | DCDC1 | 3V3电源输出 | 核心模块3.3V直流电源输出 |
| 165 | NC |  |  |
| 166 | PHYRSTB | 千兆以太网接口 | GPIO,INT,UART,I2C,RMII,复用管脚 |
| 167 | RGMII-RXCTL | 千兆以太网接口 | GPIO,INT,UART,I2C,RMII,复用管脚 |
| 168 | RGMII-RXD1 | 千兆以太网接口 | GPIO,INT,UART,I2S,HDMI,RMII,复用管脚 |
| 169 | RGMII-RXD2 | 千兆以太网接口 | GPIO,INT,UART,I2S,HDMI,RMII,复用管脚 |
| 170 | RGMII-TXD1 | 千兆以太网接口 | GPIO,INT,UART,I2C,RMII复用管脚 |
| 171 | RGMII-TXD3 | 千兆以太网接口 | GPIO,INT,UART,I2C,RMII复用管脚 |
| 172 | RGMII-TXCK | 千兆以太网接口 | GPIO,INT,UART,RMII,PWM复用管脚 |
