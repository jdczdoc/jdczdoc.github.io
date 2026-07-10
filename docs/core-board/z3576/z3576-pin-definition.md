---
sidebar_position: 2
title: 引脚定义
description: Z3576核心板引脚定义
---

# 引脚定义

本章节列出 Z3576 核心板引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、电压域以及上电默认状态。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | GND | 系统地 |  |
| 2 | GPIO3A2 | GPIO |  |
| 3 | HP DET L | GPIO | GPIO2 B7 d,3.3V电平 |
| 4 | USB OTGO PWREN H | GPIO | GPIO2 B6 d,3.3V 电平 |
| 5 | GSENSOR INT L | GPIO | GPIO2 B0 d,3.3V 电平 |
| 6 | SPK CTL H | GPIO | GPIO2 A7 d, 3.3V 电<br />平 |
| 7 | GND | 系统地 |  |
| 8 | GND | 系统地 |  |
| 9 | HDMITXD3N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 10 | HDMI_TX_D3P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 11 | HDMITXDOP | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 12 | HDMITXDON | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 13 | HDMITXD1P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 14 | HDMITXD1N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 15 | HDMITXD2P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 16 | HDMITXD2N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 17 | HDMITXSBDP | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 18 | HDMITXSBDN | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 19 | GND | 系统地 |  |
| 20 | GND | 系统地 |  |
| 21 | MIPIDPHY_CSI1RXD3P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 22 | MIPIDPHY_CSI1<br />RX_D3N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 23 | MIPIDPHY_CSI1RX_D2P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 24 | MIPIDPHY_CSI1RX_D2N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 25 | MIPI<br />DPHY_CSI1_RX_DIN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 26 | MIPIDPHY_CSI1_RXDIP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 27 | MIPIDPHY_CSI1_RX<br />_DOP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 28 | MIPIDPHY_CSI1_RX<br />DON | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 29 | MIPIDPHY_CSI1_RX_CL<br />KN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 30 | MIPIDPHY_CSI1 | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 31 | UARTOTXMODEBUG | UART/GPIO 复用接口信<br />号 | GPIO0 D5 u, 3.3V 电<br />平 |
| 32 | UARTORXMODEBUG | UART/GPIO 复用接口信<br />号 | GPIO0 D4 u, 3.3V 电<br />平 |
| 33 | PCIEO_RXN | PCIE 接口信号 | 不可用作 GPIO 口 |
| 34 | PCIEO_RXP | PCIE 接口信号 | 不可用作 GPIO 口 |
| 35 | PCIEOTXN | PCIE 接口信号 | 不可用作 GPIO 口 |
| 36 | PCIEOTXP | PCIE 接口信号 | 不可用作 GPIO 口 |
| 37 | MIPIDPHY_CSI3_RXD3P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 38 | MIPI<br />DPHY_CSI3_RX_D3N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 39 | MIPIDPHY_CSI3RXD2P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 40 | MIPIDPHY_CSI3RXD2N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 41 | MIPI<br />DPHY_CSI3_RX_DIP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 42 | MIPIDPHY_CSI3RXDIN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 43 | MIPIDPHYCSI3RXDOP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 44 | MIPIDPHY_CSI3RX<br />DON | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 45 | MIPIDPHYCSI3RX<br />CLKN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 46 | MIPIDPHYCSI3RX<br />CLKP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 47 | GND | 系统地 |  |
| 48 | GND | 系统地 |  |
| 49 | SAI2SCLKMO | I2S/GPIO 复用接口信号 | GPIO1 D0 d, 1.8V 电<br />平 |
| 50 | SAI2SCLKMO | I2S/GPIO 复用接口信号 | GPIO1 D0 d, 1.8V 电<br />平 |
| 51 | SAI2_SDO_M0 | I2S/GPIO 复用接口信号 | GPIO1 D0 d, 1.8V 电<br />平 |
| 52 | SAI2_SDI_M0 | I2S/GPIO 复用接口信号 | GPIO1 D0 d, 1.8V 电<br />平 |
| 53 | SDMMC1_D0_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIOl B4 d,1.8V 电平 |
| 54 | SDMMC1_D1_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIOl B5 d,1.8V电平 |
| 55 | SDMMC1_CLK_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIO1 C0 d,1.8V电平 |
| 56 | SDMMC1_CMD_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIOl Cl d,1.8V 电<br />平 |
| 57 | SARADCVINOBOOT | ADC | SARADC |
| 58 | SARADCVIN1<br />KEY/RECOVERY | ADC | SARADC |
| 59 | SDMMCODO | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A0 d, 3.3V 电<br />平 |
| 60 | SDMMCOD1 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 Al d, 3.3V<br />电平 |
| 61 | SDMMCOD2 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A2 d, 3.3V 电<br />平 |
| 62 | SDMMCOD3 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A3 d, 3.3V 电<br />平 |
| 63 | GMACORXD2MO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 D3 d, 1.8V 电<br />平 |
| 64 | GMACORXD3MO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 D2 d, 1.8V 电<br />平 |
| 65 | SARADCVINOBOOT | ADC | SARADC |
| 66 | GMACORXD3MO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 B6 d,1.8V 电平 |
| 67 | GMACOTXD2MO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 B3 d,1.8V 电平 |
| 68 | GMACOTXD3MO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 B5 d,1.8V电平 |
| 69 | GMACORXDOMO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 B4 d,1.8V 电平 |
| 70 | GMACOTXCLKMO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 C3 d,1.8V 电平 |
| 71 | GMACOMDCMO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 C2 d,1.8V 电平 |
| 72 | SDMMCOCMD | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A4 d, 3.3V 电<br />平 |
| 73 | GMACOMDIOMO | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3 A5 d, 1.8V 电<br />平 |
| 74 | GND | 系统地 |  |
| 75 | I2C3_SDA_M0_Audio | I2C/GPIO 复用接口信号 | GPIO4 B4 d,3.3V电平 |
| 76 | I2C3_SCL_M0_Audio | I2C/GPIO 复用接口信号 | GPIO4 B5 d,3.3V电平 |
| 77 | PDM1_SDI1_M1_Loopbac<br />k | PDM/GPIO 复用接口信号 | GPIO4 B0 d,3.3V电平 |
| 78 | PDM1_CLK1_M1_Loopbac<br />k | PDM/GPIO 复用接口信号 | GPIO4 B2 d,3.3V 电平 |
| 79 | SAI4_SDI_M0 | I2S/GPIO 复用接口信号 | GPIO4 A7 d, 3.3V 电<br />平 |
| 80 | SAI4_SCLK_M0 | I2S/GPIO 复用接口信号 | GPIO4 A4 d, 3.3V 电<br />平 |
| 81 | SAI4_LRCK_M0 | I2S/GPIO 复用接口信号 | GPIO4 A6 d, 3.3V 电<br />平 |
| 82 | SAI1_SCLK_M0 | I2S/GPIO 复用接口信号 | GPIO4 A3 d, 3.3V 电<br />平 |
| 83 | SAI1_SDO2_M0 | I2S/GPIO 复用接口信号 | GPIO4 B1 d,3.3V电平 |
| 84 | GND | 系统地 |  |
| 85 | GPI02_C7 | GPIO |  |
| 86 | GPIO2_C6 | GPIO |  |
| 87 | GPI02_C5 | GPIO |  |
| 88 | MIPI_DPHY_CSI_CAM1_<br />PDN_H | GPIO | GPIO3 B0 d,1.8V 电平 |
| 89 | MIPIDPHYCSICAM2<br />PDNH | GPIO | GPIO3 D4 d, 1.8V 电<br />平 |
| 90 | MIPI_DCPHY_CSI_CAM0<br />_PDN_H | GPIO | GPIO3 D0 d, 1.8V 电<br />平 |
| 91 | GPIO2_C3 | GPIO |  |
| 92 | GPI03C5 | GPIO |  |
| 93 | HPDETL | GPIO | GPIO2 B7 d,3.3V电平 |
| 94 | GPI02D6 | GPIO |  |
| 95 | GPIO2D2 | GPIO |  |
| 96 | GPIO2_C1 | GPIO |  |
| 97 | GMACORSTn | 网络 PHY/GPIO 复用接口<br />信号 | GPIO2 B3 d,3.3V 电平 |
| 98 | GPIO2_D0 | GPIO |  |
| 99 | GPIO2_D1 | GPIO |  |
| 100 | I2C7SCLM1Sensor | I2C/GPIO 复用接口信号 | GPIO3 A0 d, 3.3V 电<br />平 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 101 | GPIO2_C3 | GPIO |  |
| 102 | I2C7_SDA_M1_Sensor | I2C/GPIO 复用接口信号 | GPIO3 A1 d, 3.3V 电<br />平 |
| 103 | GPIO2_C2 | GPIO |  |
| 104 | GPIO2D5 | GPIO |  |
| 105 | PCIEOPERSTn | GPIO | GPIO2 B1 d,3.3V电平 |
| 106 | PCIEO_CLKREQn_MO | GPIO | GPIO2 B2 d,3.3V电平 |
| 107 | GND |  |  |
| 108 | GND |  |  |
| 109 | HDMI TX ON H | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4 C6 d,3.3V 电平 |
| 110 | TYPECDPTXAUX | GPIO | GPIO4 C5 d,3.3V电平 |
| 111 | TYPECDPTXAUX<br />PUPDCTL1 | GPIO | GPIO4 C4 d,3.3V 电平 |
| 112 | HDMITXHPDINMO | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4 Cl d,3.3V电<br />平 |
| 113 | HDMITXSDA | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4 C3 d,3.3V 电平 |
| 114 | HDMITXSCL | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4 C2 d,3.3V 电平 |
| 115 | GPIO4D0 | GPIO |  |
| 116 | GPIO4_C4 | GPIO |  |
| 117 | GPIO4D1 | GPIO |  |
| 118 | HDMI TX CEC MO | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4 C0 d,3.3V 电平 |
| 119 | GND | 系统地 |  |
| 120 | GND | 系统地 |  |
| 121 | GND | 系统地 |  |
| 122 | GND | 系统地 |  |
| 123 | GND | 系统地 |  |
| 124 | GND | 系统地 |  |
| 125 | GND | 系统地 |  |
| 126 | GND | 系统地 |  |
| 127 | GND | 系统地 |  |
| 128 | GND | 系统地 |  |
| 129 | GND | 系统地 |  |
| 130 | GND | 系统地 |  |
| 131 | GND | 系统地 |  |
| 132 | GND | 系统地 |  |
| 133 | GND | 系统地 |  |
| 134 | GND | 系统地 |  |
| 135 | GND | 系统地 |  |
| 136 | GND | 系统地 |  |
| 137 | GND | 系统地 |  |
| 138 | GND | 系统地 |  |
| 139 | GND | 系统地 |  |
| 140 | GND | 系统地 |  |
| 141 | GND | 系统地 |  |
| 142 | GND | 系统地 |  |
| 143 | GND | 系统地 |  |
| 144 | GND | 系统地 |  |
| 145 | GND | 系统地 |  |
| 146 | GND | 系统地 |  |
| 147 | GND | 系统地 |  |
| 148 | GND | 系统地 |  |
| 149 | GND | 系统地 |  |
| 150 | USB2 0TGO VBUSDET | USB 插入检测信号 | 不可用作 GPIO 口 |
| 151 | GND | 系统地 |  |
| 152 | GND | 系统地 |  |
| 153 | GND | 系统地 |  |
| 154 | GND | 系统地 |  |
| 155 | GND | 系统地 |  |
| 156 | GND | 系统地 |  |
| 157 | GND | 系统地 |  |
| 158 | WIFI PWREN L | GPIO | GPIO0 D1 d, 3.3V 电<br />平 |
| 159 | PMICEXTENOUT | PMIC使能信号 | 不可用作 GPIO 口 |
| 160 | RESETL | 系统复位信号 | 不可用作 GPIO 口 |
| 161 | GND |  |  |
| 162 | USB2 OTGO ID | USB2.0 接口信号 | 不可用作GPIO 口 |
| 163 | DP TX AUXP | DP1.4 接口信号 | 不可用作 GPIO 口 |
| 164 | DP TX AUXN | DP1.4 接口信号 | 不可用作 GPIO 口 |
| 165 | USB2HOST1DM | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 166 | USB2HOST1DP | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 167 | USB2OTGODP | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 168 | USB2OTGODM | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 169 | USB3OTGOSSRX1P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 170 | USB3OTGOSSRX1N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 171 | USB3OTGOSSTX1P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 172 | USB3OTGOSSTX1N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 173 | USB3OTGOSSRX2P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 174 | USB3OTGOSSRX2N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 175 | USB3OTGOSSTX2P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 176 | USB3OTGOSSTX2N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 177 | RTCINT_L | GPIO | GPIO0 A5 d, 1.8V 电<br />平 |
| 178 | TPINT_L | GPIO | GPIO0 C5 d,3.3V 电平 |
| 179 | LCDPWRENH | GPIO | GPIO0 C6 d,3.3V电平 |
| 180 | USB3 OTGO SSRX1P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 181 | LCD BL PWM1 CH1 M<br />O | GPIO | GPIO0 B5 d,3.3V 电平 |
| 182 | TP_RST_L | GPIO | GPIO0 D0 d, 3.3V 电<br />平 |
| 183 | I2CO SCL M1 TP | I2C/GPIO 复用接口信号 | GPIO0 Cl d,3.3V 电<br />平 |
| 184 | I2CO SDA M1 TP | I2C/GPIO 复用接口信号 | GPIO0 C2 d,3.3V 电平 |
| 185 | WIFI PWREN L | GPIO | GPIO0 D1 d, 3.3V 电<br />平 |
| 186 | WIFI REG ON H | GPIO | GPIO1 C6 d,1.8V 电平 |
| 187 | CLK1 32K OUT WIFI |  | GPIOl D5 d, 1.8V 电<br />平 |
| 188 | GPIO1B6 | GPIO |  |
| 189 | GPIO1B4 | GPIO |  |
| 190 | HP CTL H | GPIO | GPIO2 A6 d, 3.3V 电<br />平 |
| 191 | SPDIF TX1 M1 | GPIO | GPIO3 A3 d, 3.3V 电<br />平 |
| 192 | UART4_RXM1 | UART/GPIO 复用接口信<br />号 | GPIO1 C5 d,1.8V 电平 |
| 193 | SDMMC1CLKMO | SDMMC/GPIO 复用接口<br />信号 |  |
| 194 | UART4RTSNM1 | UART/GPIO 复用接口信<br />号 | GPIO1 C2 u,1.8V 电平 |
| 195 | UART4TXM1 | UART/GPIO 复用接口信<br />号 | GPIO1 C4 d,1.8V 电平 |
| 196 | USBCC INT L | GPIO | GPIO0 B4 d,3.3V 电平 |
| 197 | PCIEO WAKEN MO | GPIO | GPIO0 D2 d, 3.3V 电<br />平 |
| 198 | 32KOUT RTC2SOC |  | GPIO0 A2 d, 1.8V 电<br />平 |
| 199 | USBHUBRST | GPIO | GPIO0 C3 d,3.3V 电平 |
| 200 | GND | 系统地 |  |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 201 | GND |  |  |
| 202 | MIPIDPHYCSIORXDOP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 203 | MIPIDPHYCSIORX<br />DON | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 204 | MIPIDPHYCSIORXD1P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 205 | MIPIDPHYCSIORXD1N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 206 | MIPIDPHYCSIORX<br />CLKP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 207 | MIPIDPHYCSIORX<br />CLKN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 208 | MIPIDPHYCSI0RXD2P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 209 | MIPIDPHYCSIORXD2N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 210 | MIPIDPHYCSIORXD3P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 211 | MIPIDPHYCSIORXD3N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 212 | MIPIDPHYCSI2RX<br />CLKP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 213 | MIPIDPHYCSI2RX<br />CLKN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 214 | GND | 系统地 |  |
| 215 | GND | 系统地 |  |
| 216 | SDMMCODETL | GPIO | GPIO0 A7 u, 1.8V 电<br />平 |
| 217 | SDMMCOPWRENH | GPIO | GPIO0 B6 d,3.3V 电平 |
| 218 | I2C2 SDA MO CC RTC | I2C/GPIO 复用接口信号 | GPIO0 C0 d,3.3V电平 |
| 219 | I2C2 SCL MO CC RTC | I2C/GPIO 复用接口信号 | GPIO0 B7 d,3.3V电平 |
| 220 | PCIEOREFCLKN | PCIE 接口信号 | 不可用作 GPIO 口 |
| 221 | PCIEOREFCLKP | PCIE 接口信号 | 不可用作 GPIO 口 |
| 222 | PCIE1/SATA1/USB3_OTG<br />1 | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 223 | PCIE1CLKP |  |  |
| 224 | MIPIDPHYCSI4RX<br />CLKN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 225 | MIPIDPHYCSI4RX<br />CLKP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 226 | USB3HOST1SSTXN | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 227 | USB3HOST1SSTXP | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 228 | USB3HOST1SSRXP | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 229 | USB3HOST1SSRXN | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 230 | SARADCVIN5 | ADC | SARADC |
| 231 | SARADCVIN6 | ADC | SARADC |
| 232 | SARADCVIN3HPHOOK | ADC | SARADC |
| 233 | SARADCVIN7 | ADC | SARADC |
| 234 | SDMMCO CMD | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A4 d, 3.3V 电<br />平 |
| 235 | SARADCVIN4 | ADC | SARADC |
| 236 | SDMMCOD1 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 Al d, 3.3V<br />电平 |
| 237 | SDMMCOD2 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A2 d, 3.3V 电<br />平 |
| 238 | SDMMCOD3 | SDMMC/GPIO 复用接口<br />信号 | GPIO2 A3 d, 3.3V 电<br />平 |
| 239 | VCCI01VCC | 1.8V/3.3V |  |
| 240 | GPIO3_A4 | GPIO |  |
| 241 | VCCIO4 | 1.8V/3.3V |  |
| 242 | GMACO TXDO MO | 网络PHY/GPIO 复用接口<br />信号 | GPIO3 B5 d,1.8V电平 |
| 243 | VCCIO5 | 1.8V/3.3V |  |
| 244 | GPIO3B4 | GPIO |  |
| 245 | VCCIO2_VCC |  |  |
| 246 | GMACO TXDO MO | 网络PHY/GPIO 复用接口<br />信号 | GPIO3 B5 d,1.8V电平 |
| 247 | GND |  |  |
| 248 | I2C4 SCL M3 MIPI CAM<br />0/2 | I2C/GPIO 复用接口信号 | GPIO3 C0 d,1.8V 电平 |
| 249 | GPIO3_C3 | GPIO |  |
| 250 | I2C4SDAM3<br />MIPICAMO/2 | I2C/GPIO 复用接口信号 | GPIO3 B7 d,1.8V 电平 |
| 251 | I2C5 SDA M3 MIPI CA<br />M | I2C/GPIO 复用接口信号 | GPIO3 Cl d,1.8V 电<br />平 |
| 252 | GPIO4_A5 | GPIO |  |
| 253 | GPIO2_D3 | GPIO |  |
| 254 | GPIO4_B3 | GPIO |  |
| 255 | GPIO2_C0 | GPIO |  |
| 256 | GPIO4_A2 | GPIO |  |
| 257 | GPI02D4 | GPIO |  |
| 258 | GPIO4A1 | GPIO |  |
| 259 | GND |  |  |
| 260 | GPIO3_D7 | GPIO |  |
| 261 | GND |  |  |
| 262 | MIPI DPHY CSI CAM1<br />PWREN H | GPIO | GPIO3 C5 d,1.8V电平 |
| 263 | MIPI DCPHY CSI CAMO<br />RST H | GPIO | GPIO3 D5 d, 1.8V 电<br />平 |
| 264 | MIPI DPHY CSI CAM2<br />RST H | GPIO | GPIO3 D6 d, 1.8V 电<br />平 |
| 265 | MIPI DPHY CSI CAMO<br />PWREN H | GPIO | GPIO3 D0 d, 1.8V 电<br />平 |
| 266 | GPIO4A0 | GPIO |  |
| 267 | GND | 系统地 |  |
| 268 | GND | 系统地 |  |
| 269 | GND | 系统地 |  |
| 270 | GMACOTXDOMO | 网络 PHY/GPIO 复用接口<br />信号 |  |
| 271 | GMACOTXD1MO | 网络 PHY/GPIO 复用接口<br />信号 |  |
| 272 | GND |  |  |
| 273 | GMACOMDIOMO | 网络 PHY/GPIO 复用接口<br />信号 |  |
| 274 | GND | 系统地 |  |
| 275 | GND | 系统地 |  |
| 276 | GND | 系统地 |  |
| 277 | GND | 系统地 |  |
| 278 | GND | 系统地 |  |
| 279 | GND | 系统地 |  |
| 280 | GND | 系统地 |  |
| 281 | GPIO4A5 | GPIO |  |
| 282 | GND | 系统地 |  |
| 283 | GND | 系统地 |  |
| 284 | GND | 系统地 |  |
| 285 | GND | 系统地 |  |
| 286 | GND | 系统地 |  |
| 287 | GND | 系统地 |  |
| 288 | GND | 系统地 |  |
| 289 | GND | 系统地 |  |
| 290 | GND | 系统地 |  |
| 291 | GND | 系统地 |  |
| 292 | GND | 系统地 |  |
| 293 | GND | 系统地 |  |
| 294 | GND | 系统地 |  |
| 295 | GND | 系统地 |  |
| 296 | GND | 系统地 |  |
| 297 | GND | 系统地 |  |
| 298 | GND | 系统地 |  |
| 299 | VCCA3V3_S0 |  |  |
| 300 | GND | 系统地 |  |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 301 | VCCA3V3_S0 |  |  |
| 302 | GND | 系统地 |  |
| 303 | GND | 系统地 |  |
| 304 | GND | 系统地 |  |
| 305 | GND | 系统地 |  |
| 306 | GND | 系统地 |  |
| 307 | GND | 系统地 |  |
| 308 | GND | 系统地 |  |
| 309 | GND | 系统地 |  |
| 310 | GND | 系统地 |  |
| 311 | GND | 系统地 |  |
| 312 | GND | 系统地 |  |
| 313 | GND | 系统地 |  |
| 314 | GND | 系统地 |  |
| 315 | GND | 系统地 |  |
| 316 | GND | 系统地 |  |
| 317 | GND | 系统地 |  |
| 318 | VCC3V3S3 |  |  |
| 319 | VCC3V3_S3 |  |  |
| 320 | VCC3V3_S3 |  |  |
| 321 | VCC3V3S3 |  |  |
| 322 | MIPIDPHYDSITXDON | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 323 | MIPIDPHYDSITXDOP | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 324 | MIPIDPHYDSITXDIN | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 325 | MIPIDPHYDSITXDIP | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 326 | MIPIDPHYDSITXCLKN | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 327 | MIPIDPHYDSITXCLKP | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 328 | MIPIDPHYDSITXD2N | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 329 | MIPIDPHYDSITXD2P | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 330 | MIPIDPHYDSITXD3N | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 331 | MIPIDPHYDSITXD3P | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 332 | MIPIDPHYDSITXD3N | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 333 | MIPIDPHYDSITXD3P | MIPI LCD 接口信号 | 不可用作 GPIO 口 |
| 334 | GND | 系统地 |  |
| 335 | GND | 系统地 |  |
| 336 | PWMO CHO MO IR | GPIO | GPIO0 C4 d,3.3V 电平 |
| 337 | BT WAKE HOST H | GPIO | GPIO0 B1 z,1.8V 电平 |
| 338 | RK628 HDMIRX RST L | GPIO | GPIO2 B5 d,3.3V 电平 |
| 339 | BT REG ON H | GIPO | GPIO1 C7 d,1.8V 电平 |
| 340 | HOST WAKE BT H | GPIO | GPIOl D4 d, 1.8V 电<br />平 |
| 341 | BT WAKE HOST H | GPIO | GPIO0 B1 z,1.8V 电平 |
| 342 | GND | 系统地 |  |
| 343 | USB2OTGDM | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 344 | USB2OTG1VBUSDET | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 345 | USB2OTG1ID | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 346 | VCCA1V8SO |  |  |
| 347 | PMUIO1VCC | 1.8V/3.3V |  |
| 348 | GND | 系统地 |  |
| 349 | GND | 系统地 |  |
| 350 | VDDNPUSO |  |  |
| 351 | VDDLOGICSO |  |  |
| 352 | VDD_GPUS0 |  |  |
| 353 | VDDDDRSO |  |  |
| 354 | VDDQDDRSO |  |  |
| 355 | GND | 系统地 |  |
| 356 | GND | 系统地 |  |
| 357 | VDD_CPUBIGSO |  |  |
| 358 | GND | 系统地 |  |
| 359 | VDD_CPU_LIT_SO |  |  |
| 360 | GND | 系统地 |  |
| 361 | GND | 系统地 |  |
| 362 | GND | 系统地 |  |
| 363 | GND | 系统地 |  |
| 364 | GND | 系统地 |  |
| 365 | GND | 系统地 |  |
| 366 | GND | 系统地 |  |
| 367 | GND | 系统地 |  |
| 368 | GND | 系统地 |  |
| 369 | GND | 系统地 |  |
| 370 | GND | 系统地 |  |
| 371 | GND | 系统地 |  |
| 372 | GND | 系统地 |  |
| 373 | GND | 系统地 |  |
| 374 | GND | 系统地 |  |
| 375 | GND | 系统地 |  |
| 376 | GND | 系统地 |  |
| 377 | GND | 系统地 |  |
| 378 | GND | 系统地 |  |
| 379 | GND | 系统地 |  |
| 380 | GND | 系统地 |  |
| 381 | GND | 系统地 |  |
| 382 | GND | 系统地 |  |
| 383 | GND | 系统地 |  |
| 384 | GND | 系统地 |  |
| 385 | GPIO1B7 | GPIO |  |
| 386 | PCIEOWAKENMO | GPIO | GPIO0 D2 d, 3.3V 电<br />平 |
| 387 | USBHOSTPWRENH | GPIO | GPIO0 C7 d,3.3V电平 |
| 388 | GND | 系统地 |  |
| 389 | GND | 系统地 |  |
| 390 | GND | 系统地 |  |
| 391 | GND | 系统地 |  |
| 392 | GND | 系统地 |  |
| 393 | GND | 系统地 |  |
| 394 | GND | 系统地 |  |
| 395 | GND | 系统地 |  |
| 396 | VDDA1V2S0 |  |  |
| 397 | VDDCPUBIGSO |  |  |
| 398 | VDD_CPU_LIT_SO |  |  |
| 399 | VCCIO6VCC | 1.8V/3.3V |  |
| 400 | GND | 系统地 |  |
| 401 | GND | 系统地 |  |
| 402 | GND | 系统地 |  |
| 403 | GND | 系统地 |  |
| 404 | GND | 系统地 |  |
| 405 | GND | 系统地 |  |
| 406 | GND | 系统地 |  |
| 407 | GND | 系统地 |  |
| 408 | GND | 系统地 |  |
| 409 | GND | 系统地 |  |
| 410 | GND | 系统地 |  |
| 411 | GND | 系统地 |  |
| 412 | GND | 系统地 |  |
| 413 | GND | 系统地 |  |
| 414 | GND | 系统地 |  |
| 415 | GND | 系统地 |  |
| 416 | GND | 系统地 |  |
| 417 | GND | 系统地 |  |
| 418 | GND | 系统地 |  |
| 419 | GND | 系统地 |  |
| 420 | GND | 系统地 |  |
| 421 | GND | 系统地 |  |
| 422 | GND | 系统地 |  |
| 423 | GND | 系统地 |  |
| 424 | GND | 系统地 |  |
| 425 | GND | 系统地 |  |
| 426 | GND | 系统地 |  |
| 427 | GND | 系统地 |  |
| 428 | GND | 系统地 |  |
| 429 | GND | 系统地 |  |
| 430 | GND | 系统地 |  |
| 431 | GND | 系统地 |  |
| 432 | GND | 系统地 |  |
| 433 | GND | 系统地 |  |
| 434 | GND | 系统地 |  |
| 435 | GND | 系统地 |  |
| 436 | GND | 系统地 |  |
| 437 | GND | 系统地 |  |
| 438 | GND | 系统地 |  |
| 439 | GND | 系统地 |  |
| 440 | GND | 系统地 |  |
| 441 | GND | 系统地 |  |
| 442 | GND | 系统地 |  |
| 443 | GND | 系统地 |  |
| 444 | GND | 系统地 |  |
| 445 | GND | 系统地 |  |
| 446 | GND | 系统地 |  |
| 447 | GND | 系统地 |  |
| RK3128 | X3128CV4 | 144PIN邮票孔接口 |  |
| PX30 | X30CV1 | 144PIN邮票孔接口 |  |
| RK3288 | X3288CV5 | 180PIN邮票孔接口 |  |
| RK3399 | X3399CV3 | 200PIN邮票孔接口 |  |
| RK1808 | X1808CV1 | 144PIN邮票孔接口 |  |
| MT8385 | X8385CV1 | 168PIN邮票孔接口 |  |
| MT8768 | X8768CV1 | 168PIN邮票孔接口 |  |
| T507 | X507CV2 | 172PIN邮票孔接口 |  |
| RK3566 | X3566CV2/X3566CV3 | 200PIN邮票孔接口 |  |
| RK3566 | I3566CV1 | 172PIN邮票孔接口 |  |
| RK3568 | X3568CV2/X3568CV3 | 200PIN邮票孔接口 |  |
| RK3568 | I3568CV1 | 172PIN邮票孔接口 |  |
| RK3588 | I3588CV1 | 320PIN板对板连接器 |  |
| JH7110 | X7110CV2 | 172PIN邮票孔接口 |  |
| RK3128 | X3128开发板 | x3128cv4评估板 |  |
| PX30 | X30开发板 | x30cv1评估板 |  |
| RK3288 | x3288开发板 | x3288cv3评估板 |  |
| RK3399 | x3399开发板 | x3399cv3/x3399cv4评估板 |  |
| RK1808 | x1808开发板 | x1808cv1评估板 |  |
| MT8385 | X8385开发板 | X8385CV1评估板 |  |
| MT8768 | X8768开发板 | X8768CV1评估板 |  |
| T507 | X507开发板 | X507CV2评估板 |  |
| RK3566 | X3566开发板 | X3566CV1评估板 |  |
| RK3566 | I3566公板 | I3566CV1评估板 |  |
| RK3568 | X3568开发板 | X3568CV2评估板 |  |
| RK3568 | I3568公板 | I3568CV1评估板 |  |
| RK3588 | I3588开发板 | I3588CV1评估板 |  |
| JH7110 | X7110开发板 | X7110CV2开发板 |  |
| RK3399 | ibox3399卡片电脑 |  |  |
| RK3568 | ibox3568卡片电脑 |  |  |
