---
sidebar_position: 2
title: 引脚定义
description: X527核心板200PIN引脚定义、接口类型与复用说明
---

# 引脚定义

本章节列出 X527 核心板 200PIN 引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、IO 电压域、上电默认状态以及外部上下拉要求。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | EDP-AUXN | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 2 | EDP-AUXP | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 3 | EDP-TX3N | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 4 | EDP-TX3P | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 5 | EDP-TX2N | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 6 | EDP-TX2P | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 7 | EDP-TX1N | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 8 | EDP-TX1P | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 9 | EDP-TX0N | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 10 | EDP-TX0P | EDP 接口，不可用作 GPIO | IO 电平 1.8V |
| 11 | HTXCN | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 12 | HTXCP | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 13 | HTX0N | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 14 | HTX0P | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 15 | HTX1N | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 16 | HTX1P | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 17 | HTX2N | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 18 | HTX2P | HDMI 输出接口，不可用作 GPIO | IO 电平 1.8V |
| 19 | SDC0-CLK | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 20 | SDC0-D0 | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 21 | SDC0-D1 | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 22 | SDC0-D2 | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 23 | SDC0-D3 | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 24 | SDC0-CMD | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 25 | SDC0-DET | SDMMC/GPIO 复用接口信号 | IO 电平 3.3V |
| 26 | U3-PCIE21-RXN | PCIE/USB 3.0 复用接口信号，不可用作 GPIO | IO 电平 1.8V |
| 27 | U3-PCIE21-RXP | PCIE/USB 3.0 复用接口信号，不可用作 GPIO | IO 电平 1.8V |
| 28 | U3-PCIE21-TXN | PCIE/USB 3.0 复用接口信号，不可用作 GPIO | IO 电平 1.8V |
| 29 | U3-PCIE21-TXP | PCIE/USB 3.0 复用接口信号，不可用作 GPIO | IO 电平 1.8V |
| 30 | PCIE21-REFCLKN | PCIE 接口信号，不可用作 GPIO | IO 电平 1.8V |
| 31 | PCIE21-REFCLKP | PCIE 接口信号，不可用作 GPIO | IO 电平 1.8V |
| 32 | GND | 系统地 |  |
| 33 | RGMII0-CLKIN-125M | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 34 | RGMII0-MDC | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 35 | RGMII0-MDIO | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 36 | RGMII0-RXCK | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 37 | RGMII0-RXCTL | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 38 | RGMII0-RXD0 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 39 | RGMII0-RXD1 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 40 | PHYRSTB | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 41 | FEL | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 42 | RGMII0-RXD3 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 43 | RGMII0-RXD2 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 44 | RGMII0-TXD3 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 45 | RGMII0-TXCTL | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 46 | RGMII0-TXD0 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 47 | RGMII0-TXD1 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 48 | RGMII0-TXCK | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 49 | EPHY-CLK-25M | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 50 | PCIE21-PERSTn | PCIE 接口信号与 GPIO 复用 | IO 电平 3.3V |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 51 | PCIE21-WAKEn | PCIE 接口信号与 GPIO 复用 | IO 电平 3.3V |
| 52 | RGMII0-TXD2 | RGMII 与 GPIO 复用 | IO 电平 3.3V |
| 53 | PCIE21-CLKREQn | PCIE 接口信号与 GPIO 复用 | IO 电平 3.3V |
| 54 | MCSI_PWDN | GPIO | IO 电平 3.3V |
| 55 | MCSI_RESET | GPIO | IO 电平 1.8V/3.3V |
| 56 | MCSI_SDA | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 57 | MCSI_SCK | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 58 | MCSI_MCLK | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 59 | GND | 系统地 |  |
| 60 | LVDS0_D0N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 61 | LVDS0_D0P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 62 | LVDS0_D1N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 63 | LVDS0_D1P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 64 | LVDS0_D2N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 65 | LVDS0_D2P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 66 | LVDS0_CKN | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 67 | LVDS0_CKP | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 68 | LVDS0_D3N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 69 | LVDS0_D3P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 70 | PJ22 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 71 | PJ23 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 72 | PJ21 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 73 | PJ20 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 74 | PJ24 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 75 | PJ25 | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 76 | MICIN1P | 音频输入，不可用作 GPIO |  |
| 77 | MICIN1N | 音频输入，不可用作 GPIO |  |
| 78 | MICIN2P | 音频输入，不可用作 GPIO |  |
| 79 | LINEOUTLP | 音频输出，不可用作 GPIO |  |
| 80 | LINEOUTLN | 音频输出，不可用作 GPIO |  |
| 81 | LINEOUTRN | 音频输出，不可用作 GPIO |  |
| 82 | LINEOUTRP | 音频输出，不可用作 GPIO |  |
| 83 | HP-DET | 耳机检测信号，不可用作 GPIO |  |
| 84 | MBIAS | 音频偏置电压 |  |
| 85 | HS-MIC |  |  |
| 86 | HPOUTL | 音频输出，不可用作 GPIO |  |
| 87 | HPOUTFB |  |  |
| 88 | HPOUTR | 音频输出，不可用作 GPIO |  |
| 89 | WL-SDIO-CLK | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 90 | WL-SDIO-D1 | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 91 | WL-SDIO-D0 | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 92 | WL-SDIO-CMD | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 93 | WL-SDIO-D3 | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 94 | WL-SDIO-D2 | SDIO 信号与 GPIO 复用 | IO 电平 1.8V |
| 95 | BT-PCM-CLK | GPIO | IO 电平 1.8V |
| 96 | BT-PCM-DOUT | GPIO | IO 电平 1.8V |
| 97 | BT-PCM-DIN | GPIO | IO 电平 1.8V |
| 98 | BT-PCM-SYNC | GPIO | IO 电平 1.8V |
| 99 | LRADC1 | ADC 信号，不可用作 GPIO | ADC 电平 1.8V |
| 100 | LRADC0 | ADC 信号，不可用作 GPIO | ADC 电平 1.8V |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 101 | VCC-SYS-5V | 核心板 5V 输入 | 系统 5V 供电 |
| 102 | VCC-SYS-5V | 核心板 5V 输入 | 系统 5V 供电 |
| 103 | VCC-SYS-5V | 核心板 5V 输入 | 系统 5V 供电 |
| 104 | GND | 系统地 |  |
| 105 | GND | 系统地 |  |
| 106 | GND | 系统地 |  |
| 107 | VBAT | 核心板 电池 输入 | 电池供电 |
| 108 | VBAT | 核心板 电池 输入 | 电池供电 |
| 109 | DCDC4 | DCDC4 | 3.3V |
| 110 | CLDO3 | CLDO3 | 3.3V |
| 111 | BT-UART-RTS | GPIO | IO 电平 1.8V |
| 112 | BT-UART-RX | GPIO | IO 电平 1.8V |
| 113 | BT-UART-TX | GPIO | IO 电平 1.8V |
| 114 | BT-UART-CTS | GPIO | IO 电平 1.8V |
| 115 | PG10 | GPIO | IO 电平 1.8V |
| 116 | USB0-VBUSDET | GPIO |  |
| 117 | GPADC3 | ADC 信号，不可用作 GPIO | ADC 电平 1.8V |
| 118 | GPADC4 | ADC 信号，不可用作 GPIO | ADC 电平 1.8V |
| 119 | WL-REG-ON | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 120 | AP-WAKE-BT | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 121 | WL-WAKE-AP | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 122 | BT-RESETN | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 123 | BT-WAKE-AP | GPIO | IO 电平 1.8V/3.3V，默认 1.8V |
| 124 | AUDIO-MUTE | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 125 | AUDIO-PWR-EN | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 126 | AP-CK32K-OUT | 32 kHz信号输出，不可用作 GPIO |  |
| 127 | PWRON | PMIC使能信号，不可用作 GPIO |  |
| 128 | S-TWI1-AC107-SDA | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 129 | S-TWI1-AC107-SCK | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 130 | ENET-PWREN | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 131 | USB0-ID | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 132 | S-IR-RX | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 133 | TWI5-SDA | GPIO | IO 电平 3.3V |
| 134 | TWI5-SCK | GPIO | IO 电平 3.3V |
| 135 | CPUS-RX | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 136 | CAN0-CPUS-TX | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 137 | CPUS-TX | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 138 | CAN0-CPUS-RX | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 139 | WIFI-PWREN | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 140 | PI11 | GPIO | IO 电平 3.3V |
| 141 | PI0 | GPIO | IO 电平 3.3V |
| 142 | PI1 | GPIO | IO 电平 3.3V |
| 143 | PI10 | GPIO | IO 电平 3.3V |
| 144 | UART6-GPS-TX | GPIO | IO 电平 3.3V |
| 145 | AP-RESET |  |  |
| 146 | UART6-GPS-RX | GPIO | IO 电平 3.3V |
| 147 | CTP1-RST | GPIO | IO 电平 3.3V |
| 148 | CTP1-INT | GPIO | IO 电平 3.3V |
| 149 | CTP0-INT | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 150 | CTP0-RST | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 151 | GND | 系统地 |  |
| 152 | LCD0-BL-PWREN | GPIO | IO 电平 3.3V |
| 153 | LCD0-BL-PWM | GPIO | IO 电平 3.3V |
| 154 | LCD1-BL-PWM | GPIO | IO 电平 3.3V |
| 155 | LCD1-BL-PWREN | GPIO | IO 电平 3.3V |
| 156 | CAN0-TX | GPIO | IO 电平 3.3V |
| 157 | CAN0-RX | GPIO | IO 电平 3.3V |
| 158 | UART-0-CPUX-TX | GPIO | IO 电平 3.3V |
| 159 | UART-0-CPUX-RX | GPIO | IO 电平 3.3V |
| 160 | CPUX-TMS | GPIO | IO 电平 3.3V |
| 161 | CPUX-TCK | GPIO | IO 电平 3.3V |
| 162 | TWI0-CTP0-SDA | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 163 | TWI0-CTP0-SCK | GPIO | IO 电平 1.8V/3.3V，默认 3.3V |
| 164 | I2S0-MCLK | GPIO | IO 电平 3.3V |
| 165 | I2S0-BCLK | GPIO | IO 电平 3.3V |
| 166 | I2S0-LRCK | GPIO | IO 电平 3.3V |
| 167 | RST-AC107 | GPIO | IO 电平 3.3V |
| 168 | I2S0-DIN | GPIO | IO 电平 3.3V |
| 169 | HCEC | HDMI 信号，不可用作 GPIO | IO 电平 1.8V |
| 170 | HHPD | HDMI 热插拔信号，不可用作 GPIO | IO 电平 1.8V |
| 171 | EDP-HPD | EDP 热插拔信号，不可用作 GPIO | IO 电平 1.8V |
| 172 | HSDA | HDMI I2C 信号，不可用作 GPIO | IO 电平 1.8V |
| 173 | HSCL | HDMI I2C 信号，不可用作 GPIO | IO 电平 1.8V |
| 174 | LVDS1_D3N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 175 | LVDS1_D3P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 176 | LVDS1_CKN | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 177 | LVDS1_CKP | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 178 | LVDS1_D1N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 179 | LVDS1_D1P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 180 | LVDS1_D0P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 181 | LVDS1_D0N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 182 | LVDS1_D2P | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 183 | LVDS1_D2N | LVDS 信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 184 | MCSI_CKP | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 185 | MCSI_CKN | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 186 | MCSI_D1N | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 187 | MCSI_D1P | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 188 | MCSI_D0P | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 189 | MCSI_D0N | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 190 | MCSI_D2N | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 191 | MCSI_D2P | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 192 | MCSI_D3N | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 193 | MCSI_D3P | MIPI 摄像头接口信号与 GPIO 复用 | IO 电平 1.8V/3.3V，默认 3.3V |
| 194 | GND | 系统地 |  |
| 195 | USB0-DP | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
| 196 | USB0-DM | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
| 197 | USB1-DM | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
| 198 | USB1-DP | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
| 199 | USB2-DM | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
| 200 | USB2-DP | USB 2.0 接口，不可用作 GPIO | IO 电平 3.3V |
