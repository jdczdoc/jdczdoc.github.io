---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the Z3576 core board
---

# Pin Definition

This section lists the pin definition of the Z3576 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin | Signal | Type | Description |
|---|---|---|---|
| 1 | GND | Ground |  |
| 2 | GPIO3A2 | GPIO |  |
| 3 | HP DET L | GPIO | GPIO2 B7 d,3.3V电平 |
| 4 | USB OTGO PWREN H | GPIO | GPIO2 B6 d,3.3V 电平 |
| 5 | GSENSOR INT L | GPIO | GPIO2 B0 d,3.3V 电平 |
| 6 | SPK CTL H | GPIO | GPIO2 A7 d, 3.3V 电<br />平 |
| 7 | GND | Ground |  |
| 8 | GND | Ground |  |
| 9 | HDMITXD3N | HDMI output interface signal | not available as GPIO |
| 10 | HDMI_TX_D3P | HDMI output interface signal | not available as GPIO |
| 11 | HDMITXDOP | HDMI output interface signal | not available as GPIO |
| 12 | HDMITXDON | HDMI output interface signal | not available as GPIO |
| 13 | HDMITXD1P | HDMI output interface signal | not available as GPIO |
| 14 | HDMITXD1N | HDMI output interface signal | not available as GPIO |
| 15 | HDMITXD2P | HDMI output interface signal | not available as GPIO |
| 16 | HDMITXD2N | HDMI output interface signal | not available as GPIO |
| 17 | HDMITXSBDP | HDMI output interface signal | not available as GPIO |
| 18 | HDMITXSBDN | HDMI output interface signal | not available as GPIO |
| 19 | GND | Ground |  |
| 20 | GND | Ground |  |
| 21 | MIPIDPHY_CSI1RXD3P | MIPI camerainterface signal | not available as GPIO |
| 22 | MIPIDPHY_CSI1<br />RX_D3N | MIPI camerainterface signal | not available as GPIO |
| 23 | MIPIDPHY_CSI1RX_D2P | MIPI camerainterface signal | not available as GPIO |
| 24 | MIPIDPHY_CSI1RX_D2N | MIPI camerainterface signal | not available as GPIO |
| 25 | MIPI<br />DPHY_CSI1_RX_DIN | MIPI camerainterface signal | not available as GPIO |
| 26 | MIPIDPHY_CSI1_RXDIP | MIPI camerainterface signal | not available as GPIO |
| 27 | MIPIDPHY_CSI1_RX<br />_DOP | MIPI camerainterface signal | not available as GPIO |
| 28 | MIPIDPHY_CSI1_RX<br />DON | MIPI camerainterface signal | not available as GPIO |
| 29 | MIPIDPHY_CSI1_RX_CL<br />KN | MIPI camerainterface signal | not available as GPIO |
| 30 | MIPIDPHY_CSI1 | MIPI camerainterface signal | not available as GPIO |
| 31 | UARTOTXMODEBUG | UART/GPIO multiplexed接口信<br />号 | GPIO0 D5 u, 3.3V 电<br />平 |
| 32 | UARTORXMODEBUG | UART/GPIO multiplexed接口信<br />号 | GPIO0 D4 u, 3.3V 电<br />平 |
| 33 | PCIEO_RXN | PCIE interface signal | not available as GPIO |
| 34 | PCIEO_RXP | PCIE interface signal | not available as GPIO |
| 35 | PCIEOTXN | PCIE interface signal | not available as GPIO |
| 36 | PCIEOTXP | PCIE interface signal | not available as GPIO |
| 37 | MIPIDPHY_CSI3_RXD3P | MIPI camerainterface signal | not available as GPIO |
| 38 | MIPI<br />DPHY_CSI3_RX_D3N | MIPI camerainterface signal | not available as GPIO |
| 39 | MIPIDPHY_CSI3RXD2P | MIPI camerainterface signal | not available as GPIO |
| 40 | MIPIDPHY_CSI3RXD2N | MIPI camerainterface signal | not available as GPIO |
| 41 | MIPI<br />DPHY_CSI3_RX_DIP | MIPI camerainterface signal | not available as GPIO |
| 42 | MIPIDPHY_CSI3RXDIN | MIPI camerainterface signal | not available as GPIO |
| 43 | MIPIDPHYCSI3RXDOP | MIPI camerainterface signal | not available as GPIO |
| 44 | MIPIDPHY_CSI3RX<br />DON | MIPI camerainterface signal | not available as GPIO |
| 45 | MIPIDPHYCSI3RX<br />CLKN | MIPI camerainterface signal | not available as GPIO |
| 46 | MIPIDPHYCSI3RX<br />CLKP | MIPI camerainterface signal | not available as GPIO |
| 47 | GND | Ground |  |
| 48 | GND | Ground |  |
| 49 | SAI2SCLKMO | I2S/GPIO multiplexing interface signal | GPIO1 D0 d, 1.8V 电<br />平 |
| 50 | SAI2SCLKMO | I2S/GPIO multiplexing interface signal | GPIO1 D0 d, 1.8V 电<br />平 |
| 51 | SAI2_SDO_M0 | I2S/GPIO multiplexing interface signal | GPIO1 D0 d, 1.8V 电<br />平 |
| 52 | SAI2_SDI_M0 | I2S/GPIO multiplexing interface signal | GPIO1 D0 d, 1.8V 电<br />平 |
| 53 | SDMMC1_D0_M0 | SDMMC/GPIO multiplexed接口<br />Signal | GPIOl B4 d,1.8V 电平 |
| 54 | SDMMC1_D1_M0 | SDMMC/GPIO multiplexed接口<br />Signal | GPIOl B5 d,1.8V电平 |
| 55 | SDMMC1_CLK_M0 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO1 C0 d,1.8V电平 |
| 56 | SDMMC1_CMD_M0 | SDMMC/GPIO multiplexed接口<br />Signal | GPIOl Cl d,1.8V 电<br />平 |
| 57 | SARADCVINOBOOT | ADC | SARADC |
| 58 | SARADCVIN1<br />KEY/RECOVERY | ADC | SARADC |
| 59 | SDMMCODO | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A0 d, 3.3V 电<br />平 |
| 60 | SDMMCOD1 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 Al d, 3.3V<br />电平 |
| 61 | SDMMCOD2 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A2 d, 3.3V 电<br />平 |
| 62 | SDMMCOD3 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A3 d, 3.3V 电<br />平 |
| 63 | GMACORXD2MO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 D3 d, 1.8V 电<br />平 |
| 64 | GMACORXD3MO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 D2 d, 1.8V 电<br />平 |
| 65 | SARADCVINOBOOT | ADC | SARADC |
| 66 | GMACORXD3MO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 B6 d,1.8V 电平 |
| 67 | GMACOTXD2MO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 B3 d,1.8V 电平 |
| 68 | GMACOTXD3MO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 B5 d,1.8V电平 |
| 69 | GMACORXDOMO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 B4 d,1.8V 电平 |
| 70 | GMACOTXCLKMO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 C3 d,1.8V 电平 |
| 71 | GMACOMDCMO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 C2 d,1.8V 电平 |
| 72 | SDMMCOCMD | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A4 d, 3.3V 电<br />平 |
| 73 | GMACOMDIOMO | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO3 A5 d, 1.8V 电<br />平 |
| 74 | GND | Ground |  |
| 75 | I2C3_SDA_M0_Audio | I2C/GPIO multiplexing interface signal | GPIO4 B4 d,3.3V电平 |
| 76 | I2C3_SCL_M0_Audio | I2C/GPIO multiplexing interface signal | GPIO4 B5 d,3.3V电平 |
| 77 | PDM1_SDI1_M1_Loopbac<br />k | PDM/GPIO multiplexing interface signal | GPIO4 B0 d,3.3V电平 |
| 78 | PDM1_CLK1_M1_Loopbac<br />k | PDM/GPIO multiplexing interface signal | GPIO4 B2 d,3.3V 电平 |
| 79 | SAI4_SDI_M0 | I2S/GPIO multiplexing interface signal | GPIO4 A7 d, 3.3V 电<br />平 |
| 80 | SAI4_SCLK_M0 | I2S/GPIO multiplexing interface signal | GPIO4 A4 d, 3.3V 电<br />平 |
| 81 | SAI4_LRCK_M0 | I2S/GPIO multiplexing interface signal | GPIO4 A6 d, 3.3V 电<br />平 |
| 82 | SAI1_SCLK_M0 | I2S/GPIO multiplexing interface signal | GPIO4 A3 d, 3.3V 电<br />平 |
| 83 | SAI1_SDO2_M0 | I2S/GPIO multiplexing interface signal | GPIO4 B1 d,3.3V电平 |
| 84 | GND | Ground |  |
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
| 97 | GMACORSTn | 网络 PHY/GPIO multiplexed接口<br />Signal | GPIO2 B3 d,3.3V 电平 |
| 98 | GPIO2_D0 | GPIO |  |
| 99 | GPIO2_D1 | GPIO |  |
| 100 | I2C7SCLM1Sensor | I2C/GPIO multiplexing interface signal | GPIO3 A0 d, 3.3V 电<br />平 |

## Core Board Pin Definition2

| Pin | Signal | Type | Description |
|---|---|---|---|
| 101 | GPIO2_C3 | GPIO |  |
| 102 | I2C7_SDA_M1_Sensor | I2C/GPIO multiplexing interface signal | GPIO3 A1 d, 3.3V 电<br />平 |
| 103 | GPIO2_C2 | GPIO |  |
| 104 | GPIO2D5 | GPIO |  |
| 105 | PCIEOPERSTn | GPIO | GPIO2 B1 d,3.3V电平 |
| 106 | PCIEO_CLKREQn_MO | GPIO | GPIO2 B2 d,3.3V电平 |
| 107 | GND |  |  |
| 108 | GND |  |  |
| 109 | HDMI TX ON H | HDMI 输出/GPIO multiplexed接<br />口Signal | GPIO4 C6 d,3.3V 电平 |
| 110 | TYPECDPTXAUX | GPIO | GPIO4 C5 d,3.3V电平 |
| 111 | TYPECDPTXAUX<br />PUPDCTL1 | GPIO | GPIO4 C4 d,3.3V 电平 |
| 112 | HDMITXHPDINMO | HDMI 输出/GPIO multiplexed接<br />口Signal | GPIO4 Cl d,3.3V电<br />平 |
| 113 | HDMITXSDA | HDMI 输出/GPIO multiplexed接<br />口Signal | GPIO4 C3 d,3.3V 电平 |
| 114 | HDMITXSCL | HDMI 输出/GPIO multiplexed接<br />口Signal | GPIO4 C2 d,3.3V 电平 |
| 115 | GPIO4D0 | GPIO |  |
| 116 | GPIO4_C4 | GPIO |  |
| 117 | GPIO4D1 | GPIO |  |
| 118 | HDMI TX CEC MO | HDMI 输出/GPIO multiplexed接<br />口Signal | GPIO4 C0 d,3.3V 电平 |
| 119 | GND | Ground |  |
| 120 | GND | Ground |  |
| 121 | GND | Ground |  |
| 122 | GND | Ground |  |
| 123 | GND | Ground |  |
| 124 | GND | Ground |  |
| 125 | GND | Ground |  |
| 126 | GND | Ground |  |
| 127 | GND | Ground |  |
| 128 | GND | Ground |  |
| 129 | GND | Ground |  |
| 130 | GND | Ground |  |
| 131 | GND | Ground |  |
| 132 | GND | Ground |  |
| 133 | GND | Ground |  |
| 134 | GND | Ground |  |
| 135 | GND | Ground |  |
| 136 | GND | Ground |  |
| 137 | GND | Ground |  |
| 138 | GND | Ground |  |
| 139 | GND | Ground |  |
| 140 | GND | Ground |  |
| 141 | GND | Ground |  |
| 142 | GND | Ground |  |
| 143 | GND | Ground |  |
| 144 | GND | Ground |  |
| 145 | GND | Ground |  |
| 146 | GND | Ground |  |
| 147 | GND | Ground |  |
| 148 | GND | Ground |  |
| 149 | GND | Ground |  |
| 150 | USB2 0TGO VBUSDET | USB insertion detection signal | not available as GPIO |
| 151 | GND | Ground |  |
| 152 | GND | Ground |  |
| 153 | GND | Ground |  |
| 154 | GND | Ground |  |
| 155 | GND | Ground |  |
| 156 | GND | Ground |  |
| 157 | GND | Ground |  |
| 158 | WIFI PWREN L | GPIO | GPIO0 D1 d, 3.3V 电<br />平 |
| 159 | PMICEXTENOUT | PMIC enable signal | not available as GPIO |
| 160 | RESETL | system reset signal | not available as GPIO |
| 161 | GND |  |  |
| 162 | USB2 OTGO ID | USB2.0 interface signal | not available as GPIO 口 |
| 163 | DP TX AUXP | DP1.4 interface signal | not available as GPIO |
| 164 | DP TX AUXN | DP1.4 interface signal | not available as GPIO |
| 165 | USB2HOST1DM | USB2.0 interface signal | not available as GPIO |
| 166 | USB2HOST1DP | USB2.0 interface signal | not available as GPIO |
| 167 | USB2OTGODP | USB2.0 interface signal | not available as GPIO |
| 168 | USB2OTGODM | USB2.0 interface signal | not available as GPIO |
| 169 | USB3OTGOSSRX1P | USB3.0/DP1.4 interface signal | not available as GPIO |
| 170 | USB3OTGOSSRX1N | USB3.0/DP1.4 interface signal | not available as GPIO |
| 171 | USB3OTGOSSTX1P | USB3.0/DP1.4 interface signal | not available as GPIO |
| 172 | USB3OTGOSSTX1N | USB3.0/DP1.4 interface signal | not available as GPIO |
| 173 | USB3OTGOSSRX2P | USB3.0/DP1.4 interface signal | not available as GPIO |
| 174 | USB3OTGOSSRX2N | USB3.0/DP1.4 interface signal | not available as GPIO |
| 175 | USB3OTGOSSTX2P | USB3.0/DP1.4 interface signal | not available as GPIO |
| 176 | USB3OTGOSSTX2N | USB3.0/DP1.4 interface signal | not available as GPIO |
| 177 | RTCINT_L | GPIO | GPIO0 A5 d, 1.8V 电<br />平 |
| 178 | TPINT_L | GPIO | GPIO0 C5 d,3.3V 电平 |
| 179 | LCDPWRENH | GPIO | GPIO0 C6 d,3.3V电平 |
| 180 | USB3 OTGO SSRX1P | USB3.0/DP1.4 interface signal | not available as GPIO |
| 181 | LCD BL PWM1 CH1 M<br />O | GPIO | GPIO0 B5 d,3.3V 电平 |
| 182 | TP_RST_L | GPIO | GPIO0 D0 d, 3.3V 电<br />平 |
| 183 | I2CO SCL M1 TP | I2C/GPIO multiplexing interface signal | GPIO0 Cl d,3.3V 电<br />平 |
| 184 | I2CO SDA M1 TP | I2C/GPIO multiplexing interface signal | GPIO0 C2 d,3.3V 电平 |
| 185 | WIFI PWREN L | GPIO | GPIO0 D1 d, 3.3V 电<br />平 |
| 186 | WIFI REG ON H | GPIO | GPIO1 C6 d,1.8V 电平 |
| 187 | CLK1 32K OUT WIFI |  | GPIOl D5 d, 1.8V 电<br />平 |
| 188 | GPIO1B6 | GPIO |  |
| 189 | GPIO1B4 | GPIO |  |
| 190 | HP CTL H | GPIO | GPIO2 A6 d, 3.3V 电<br />平 |
| 191 | SPDIF TX1 M1 | GPIO | GPIO3 A3 d, 3.3V 电<br />平 |
| 192 | UART4_RXM1 | UART/GPIO multiplexed接口信<br />号 | GPIO1 C5 d,1.8V 电平 |
| 193 | SDMMC1CLKMO | SDMMC/GPIO multiplexed接口<br />Signal |  |
| 194 | UART4RTSNM1 | UART/GPIO multiplexed接口信<br />号 | GPIO1 C2 u,1.8V 电平 |
| 195 | UART4TXM1 | UART/GPIO multiplexed接口信<br />号 | GPIO1 C4 d,1.8V 电平 |
| 196 | USBCC INT L | GPIO | GPIO0 B4 d,3.3V 电平 |
| 197 | PCIEO WAKEN MO | GPIO | GPIO0 D2 d, 3.3V 电<br />平 |
| 198 | 32KOUT RTC2SOC |  | GPIO0 A2 d, 1.8V 电<br />平 |
| 199 | USBHUBRST | GPIO | GPIO0 C3 d,3.3V 电平 |
| 200 | GND | Ground |  |

## Core Board Pin Definition3

| Pin | Signal | Type | Description |
|---|---|---|---|
| 201 | GND |  |  |
| 202 | MIPIDPHYCSIORXDOP | MIPI camerainterface signal | not available as GPIO |
| 203 | MIPIDPHYCSIORX<br />DON | MIPI camerainterface signal | not available as GPIO |
| 204 | MIPIDPHYCSIORXD1P | MIPI camerainterface signal | not available as GPIO |
| 205 | MIPIDPHYCSIORXD1N | MIPI camerainterface signal | not available as GPIO |
| 206 | MIPIDPHYCSIORX<br />CLKP | MIPI camerainterface signal | not available as GPIO |
| 207 | MIPIDPHYCSIORX<br />CLKN | MIPI camerainterface signal | not available as GPIO |
| 208 | MIPIDPHYCSI0RXD2P | MIPI camerainterface signal | not available as GPIO |
| 209 | MIPIDPHYCSIORXD2N | MIPI camerainterface signal | not available as GPIO |
| 210 | MIPIDPHYCSIORXD3P | MIPI camerainterface signal | not available as GPIO |
| 211 | MIPIDPHYCSIORXD3N | MIPI camerainterface signal | not available as GPIO |
| 212 | MIPIDPHYCSI2RX<br />CLKP | MIPI camerainterface signal | not available as GPIO |
| 213 | MIPIDPHYCSI2RX<br />CLKN | MIPI camerainterface signal | not available as GPIO |
| 214 | GND | Ground |  |
| 215 | GND | Ground |  |
| 216 | SDMMCODETL | GPIO | GPIO0 A7 u, 1.8V 电<br />平 |
| 217 | SDMMCOPWRENH | GPIO | GPIO0 B6 d,3.3V 电平 |
| 218 | I2C2 SDA MO CC RTC | I2C/GPIO multiplexing interface signal | GPIO0 C0 d,3.3V电平 |
| 219 | I2C2 SCL MO CC RTC | I2C/GPIO multiplexing interface signal | GPIO0 B7 d,3.3V电平 |
| 220 | PCIEOREFCLKN | PCIE interface signal | not available as GPIO |
| 221 | PCIEOREFCLKP | PCIE interface signal | not available as GPIO |
| 222 | PCIE1/SATA1/USB3_OTG<br />1 | USB3.0/DP1.4 interface signal | not available as GPIO |
| 223 | PCIE1CLKP |  |  |
| 224 | MIPIDPHYCSI4RX<br />CLKN | MIPI camerainterface signal | not available as GPIO |
| 225 | MIPIDPHYCSI4RX<br />CLKP | MIPI camerainterface signal | not available as GPIO |
| 226 | USB3HOST1SSTXN | USB3.0/DP1.4 interface signal | not available as GPIO |
| 227 | USB3HOST1SSTXP | USB3.0/DP1.4 interface signal | not available as GPIO |
| 228 | USB3HOST1SSRXP | USB3.0/DP1.4 interface signal | not available as GPIO |
| 229 | USB3HOST1SSRXN | USB3.0/DP1.4 interface signal | not available as GPIO |
| 230 | SARADCVIN5 | ADC | SARADC |
| 231 | SARADCVIN6 | ADC | SARADC |
| 232 | SARADCVIN3HPHOOK | ADC | SARADC |
| 233 | SARADCVIN7 | ADC | SARADC |
| 234 | SDMMCO CMD | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A4 d, 3.3V 电<br />平 |
| 235 | SARADCVIN4 | ADC | SARADC |
| 236 | SDMMCOD1 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 Al d, 3.3V<br />电平 |
| 237 | SDMMCOD2 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A2 d, 3.3V 电<br />平 |
| 238 | SDMMCOD3 | SDMMC/GPIO multiplexed接口<br />Signal | GPIO2 A3 d, 3.3V 电<br />平 |
| 239 | VCCI01VCC | 1.8V/3.3V |  |
| 240 | GPIO3_A4 | GPIO |  |
| 241 | VCCIO4 | 1.8V/3.3V |  |
| 242 | GMACO TXDO MO | 网络PHY/GPIO multiplexed接口<br />Signal | GPIO3 B5 d,1.8V电平 |
| 243 | VCCIO5 | 1.8V/3.3V |  |
| 244 | GPIO3B4 | GPIO |  |
| 245 | VCCIO2_VCC |  |  |
| 246 | GMACO TXDO MO | 网络PHY/GPIO multiplexed接口<br />Signal | GPIO3 B5 d,1.8V电平 |
| 247 | GND |  |  |
| 248 | I2C4 SCL M3 MIPI CAM<br />0/2 | I2C/GPIO multiplexing interface signal | GPIO3 C0 d,1.8V 电平 |
| 249 | GPIO3_C3 | GPIO |  |
| 250 | I2C4SDAM3<br />MIPICAMO/2 | I2C/GPIO multiplexing interface signal | GPIO3 B7 d,1.8V 电平 |
| 251 | I2C5 SDA M3 MIPI CA<br />M | I2C/GPIO multiplexing interface signal | GPIO3 Cl d,1.8V 电<br />平 |
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
| 267 | GND | Ground |  |
| 268 | GND | Ground |  |
| 269 | GND | Ground |  |
| 270 | GMACOTXDOMO | 网络 PHY/GPIO multiplexed接口<br />Signal |  |
| 271 | GMACOTXD1MO | 网络 PHY/GPIO multiplexed接口<br />Signal |  |
| 272 | GND |  |  |
| 273 | GMACOMDIOMO | 网络 PHY/GPIO multiplexed接口<br />Signal |  |
| 274 | GND | Ground |  |
| 275 | GND | Ground |  |
| 276 | GND | Ground |  |
| 277 | GND | Ground |  |
| 278 | GND | Ground |  |
| 279 | GND | Ground |  |
| 280 | GND | Ground |  |
| 281 | GPIO4A5 | GPIO |  |
| 282 | GND | Ground |  |
| 283 | GND | Ground |  |
| 284 | GND | Ground |  |
| 285 | GND | Ground |  |
| 286 | GND | Ground |  |
| 287 | GND | Ground |  |
| 288 | GND | Ground |  |
| 289 | GND | Ground |  |
| 290 | GND | Ground |  |
| 291 | GND | Ground |  |
| 292 | GND | Ground |  |
| 293 | GND | Ground |  |
| 294 | GND | Ground |  |
| 295 | GND | Ground |  |
| 296 | GND | Ground |  |
| 297 | GND | Ground |  |
| 298 | GND | Ground |  |
| 299 | VCCA3V3_S0 |  |  |
| 300 | GND | Ground |  |

## Core Board Pin Definition4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 301 | VCCA3V3_S0 |  |  |
| 302 | GND | Ground |  |
| 303 | GND | Ground |  |
| 304 | GND | Ground |  |
| 305 | GND | Ground |  |
| 306 | GND | Ground |  |
| 307 | GND | Ground |  |
| 308 | GND | Ground |  |
| 309 | GND | Ground |  |
| 310 | GND | Ground |  |
| 311 | GND | Ground |  |
| 312 | GND | Ground |  |
| 313 | GND | Ground |  |
| 314 | GND | Ground |  |
| 315 | GND | Ground |  |
| 316 | GND | Ground |  |
| 317 | GND | Ground |  |
| 318 | VCC3V3S3 |  |  |
| 319 | VCC3V3_S3 |  |  |
| 320 | VCC3V3_S3 |  |  |
| 321 | VCC3V3S3 |  |  |
| 322 | MIPIDPHYDSITXDON | MIPI LCD interface signal | not available as GPIO |
| 323 | MIPIDPHYDSITXDOP | MIPI LCD interface signal | not available as GPIO |
| 324 | MIPIDPHYDSITXDIN | MIPI LCD interface signal | not available as GPIO |
| 325 | MIPIDPHYDSITXDIP | MIPI LCD interface signal | not available as GPIO |
| 326 | MIPIDPHYDSITXCLKN | MIPI LCD interface signal | not available as GPIO |
| 327 | MIPIDPHYDSITXCLKP | MIPI LCD interface signal | not available as GPIO |
| 328 | MIPIDPHYDSITXD2N | MIPI LCD interface signal | not available as GPIO |
| 329 | MIPIDPHYDSITXD2P | MIPI LCD interface signal | not available as GPIO |
| 330 | MIPIDPHYDSITXD3N | MIPI LCD interface signal | not available as GPIO |
| 331 | MIPIDPHYDSITXD3P | MIPI LCD interface signal | not available as GPIO |
| 332 | MIPIDPHYDSITXD3N | MIPI LCD interface signal | not available as GPIO |
| 333 | MIPIDPHYDSITXD3P | MIPI LCD interface signal | not available as GPIO |
| 334 | GND | Ground |  |
| 335 | GND | Ground |  |
| 336 | PWMO CHO MO IR | GPIO | GPIO0 C4 d,3.3V 电平 |
| 337 | BT WAKE HOST H | GPIO | GPIO0 B1 z,1.8V 电平 |
| 338 | RK628 HDMIRX RST L | GPIO | GPIO2 B5 d,3.3V 电平 |
| 339 | BT REG ON H | GIPO | GPIO1 C7 d,1.8V 电平 |
| 340 | HOST WAKE BT H | GPIO | GPIOl D4 d, 1.8V 电<br />平 |
| 341 | BT WAKE HOST H | GPIO | GPIO0 B1 z,1.8V 电平 |
| 342 | GND | Ground |  |
| 343 | USB2OTGDM | USB2.0 interface signal | not available as GPIO |
| 344 | USB2OTG1VBUSDET | USB2.0 interface signal | not available as GPIO |
| 345 | USB2OTG1ID | USB2.0 interface signal | not available as GPIO |
| 346 | VCCA1V8SO |  |  |
| 347 | PMUIO1VCC | 1.8V/3.3V |  |
| 348 | GND | Ground |  |
| 349 | GND | Ground |  |
| 350 | VDDNPUSO |  |  |
| 351 | VDDLOGICSO |  |  |
| 352 | VDD_GPUS0 |  |  |
| 353 | VDDDDRSO |  |  |
| 354 | VDDQDDRSO |  |  |
| 355 | GND | Ground |  |
| 356 | GND | Ground |  |
| 357 | VDD_CPUBIGSO |  |  |
| 358 | GND | Ground |  |
| 359 | VDD_CPU_LIT_SO |  |  |
| 360 | GND | Ground |  |
| 361 | GND | Ground |  |
| 362 | GND | Ground |  |
| 363 | GND | Ground |  |
| 364 | GND | Ground |  |
| 365 | GND | Ground |  |
| 366 | GND | Ground |  |
| 367 | GND | Ground |  |
| 368 | GND | Ground |  |
| 369 | GND | Ground |  |
| 370 | GND | Ground |  |
| 371 | GND | Ground |  |
| 372 | GND | Ground |  |
| 373 | GND | Ground |  |
| 374 | GND | Ground |  |
| 375 | GND | Ground |  |
| 376 | GND | Ground |  |
| 377 | GND | Ground |  |
| 378 | GND | Ground |  |
| 379 | GND | Ground |  |
| 380 | GND | Ground |  |
| 381 | GND | Ground |  |
| 382 | GND | Ground |  |
| 383 | GND | Ground |  |
| 384 | GND | Ground |  |
| 385 | GPIO1B7 | GPIO |  |
| 386 | PCIEOWAKENMO | GPIO | GPIO0 D2 d, 3.3V 电<br />平 |
| 387 | USBHOSTPWRENH | GPIO | GPIO0 C7 d,3.3V电平 |
| 388 | GND | Ground |  |
| 389 | GND | Ground |  |
| 390 | GND | Ground |  |
| 391 | GND | Ground |  |
| 392 | GND | Ground |  |
| 393 | GND | Ground |  |
| 394 | GND | Ground |  |
| 395 | GND | Ground |  |
| 396 | VDDA1V2S0 |  |  |
| 397 | VDDCPUBIGSO |  |  |
| 398 | VDD_CPU_LIT_SO |  |  |
| 399 | VCCIO6VCC | 1.8V/3.3V |  |
| 400 | GND | Ground |  |
| 401 | GND | Ground |  |
| 402 | GND | Ground |  |
| 403 | GND | Ground |  |
| 404 | GND | Ground |  |
| 405 | GND | Ground |  |
| 406 | GND | Ground |  |
| 407 | GND | Ground |  |
| 408 | GND | Ground |  |
| 409 | GND | Ground |  |
| 410 | GND | Ground |  |
| 411 | GND | Ground |  |
| 412 | GND | Ground |  |
| 413 | GND | Ground |  |
| 414 | GND | Ground |  |
| 415 | GND | Ground |  |
| 416 | GND | Ground |  |
| 417 | GND | Ground |  |
| 418 | GND | Ground |  |
| 419 | GND | Ground |  |
| 420 | GND | Ground |  |
| 421 | GND | Ground |  |
| 422 | GND | Ground |  |
| 423 | GND | Ground |  |
| 424 | GND | Ground |  |
| 425 | GND | Ground |  |
| 426 | GND | Ground |  |
| 427 | GND | Ground |  |
| 428 | GND | Ground |  |
| 429 | GND | Ground |  |
| 430 | GND | Ground |  |
| 431 | GND | Ground |  |
| 432 | GND | Ground |  |
| 433 | GND | Ground |  |
| 434 | GND | Ground |  |
| 435 | GND | Ground |  |
| 436 | GND | Ground |  |
| 437 | GND | Ground |  |
| 438 | GND | Ground |  |
| 439 | GND | Ground |  |
| 440 | GND | Ground |  |
| 441 | GND | Ground |  |
| 442 | GND | Ground |  |
| 443 | GND | Ground |  |
| 444 | GND | Ground |  |
| 445 | GND | Ground |  |
| 446 | GND | Ground |  |
| 447 | GND | Ground |  |
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
| RK3128 | X3128development board | x3128cv4evaluation board |  |
| PX30 | X30development board | x30cv1evaluation board |  |
| RK3288 | x3288development board | x3288cv3evaluation board |  |
| RK3399 | x3399development board | x3399cv3/x3399cv4evaluation board |  |
| RK1808 | x1808development board | x1808cv1evaluation board |  |
| MT8385 | X8385development board | X8385CV1evaluation board |  |
| MT8768 | X8768development board | X8768CV1evaluation board |  |
| T507 | X507development board | X507CV2evaluation board |  |
| RK3566 | X3566development board | X3566CV1evaluation board |  |
| RK3566 | I3566公板 | I3566CV1evaluation board |  |
| RK3568 | X3568development board | X3568CV2evaluation board |  |
| RK3568 | I3568公板 | I3568CV1evaluation board |  |
| RK3588 | I3588development board | I3588CV1evaluation board |  |
| JH7110 | X7110development board | X7110CV2development board |  |
| RK3399 | ibox3399card computer |  |  |
| RK3568 | ibox3568card computer |  |  |
