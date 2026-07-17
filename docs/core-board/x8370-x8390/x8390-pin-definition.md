---
title: 引脚定义
sidebar_position: 2
description: X8390/X8370核心板完整200PIN信号、类型和复用说明。
---

# 引脚定义

X8390CV2核心板使用200PIN邮票孔接口。高速差分、电源和系统地不能作为普通GPIO使用；其他复用信号应结合当前原理图、设备树和MediaTek管脚复用资料确认。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
| ---: | --- | --- | --- |
| 1 | GND | 系统地 |  |
| 2 | HDMITX_SCL | HDMI I2C 信号 | GPIO53 |
| 3 | HDMITX_SDA | HDMI I2C 信号 | GPIO54 |
| 4 | HDMITX_HTPLG | HDMI 信号 | GPIO51 |
| 5 | HDMITX_CEC | HDMI 信号 | GPIO52 |
| 6 | DPTX_HPD | HDMI 信号 | GPIO46 |
| 7 | HDMITX_PWR5V | HDMI 信号 | GPIO50 |
| 8 | PCM_CLK | PCM 接口信号 | GPIO121 |
| 9 | PCM_SYNC | PCM 接口信号 | GPIO122 |
| 10 | PCM_DO | PCM 接口信号 | GPIO123 |
| 11 | PCM_DI | PCM 接口信号 | GPIO124 |
| 12 | MSDC2_DAT1 | SDMMC 接口信号 | GPIO172 |
| 13 | MSDC2_DAT0 | SDMMC 接口信号 | GPIO171 |
| 14 | MSDC2_CLK | SDMMC 接口信号 | GPIO170 |
| 15 | MSDC2_CMD | SDMMC 接口信号 | GPIO169 |
| 16 | MSDC2_DAT3 | SDMMC 接口信号 | GPIO174 |
| 17 | MSDC2_DAT2 | SDMMC 接口信号 | GPIO173 |
| 18 | GND | 系统地 |  |
| 19 | SSUSB_RXP | USB3.0 接口信号 | 不可用作 GPIO |
| 20 | SSUSB_RXN | USB3.0 接口信号 | 不可用作 GPIO |
| 21 | SSUSB_TXP | USB3.0 接口信号 | 不可用作 GPIO |
| 22 | SSUSB_TXN | USB3.0 接口信号 | 不可用作 GPIO |
| 23 | USB_DM_P0 | USB2.0 接口信号 | 不可用作 GPIO |
| 24 | USB_DP_P0 | USB2.0 接口信号 | 不可用作 GPIO |
| 25 | USB_DM_P1 | USB2.0 接口信号 | 不可用作 GPIO |
| 26 | USB_DP_P1 | USB2.0 接口信号 | 不可用作 GPIO |
| 27 | USB_DM_P2 | USB2.0 接口信号 | 不可用作 GPIO |
| 28 | USB_DP_P2 | USB2.0 接口信号 | 不可用作 GPIO |
| 29 | GND | 系统地 |  |
| 30 | GPIO_CTP1_RSTB | GPIO | GPIO14 |
| 31 | EINT_CTP1 | GPIO | GPIO13 |
| 32 | RT1715_INT | GPIO | GPIO12 |
| 33 | CAMERA_3V3_EN | 电源使能脚 | USB2_VBUS_VALID |
| 34 | LCM2_EN | 电源使能脚 | USB2_DRV_VBUS |
| 35 | USB1_VBUS_VALID | USB1_VBUS_VALID | USB1_VBUS_VALID |
| 36 | USB1_DRV_VBUS | USB1_DRV_VBUS | USB1_DRV_VBUS |
| 37 | USB0_VBUS_VALID | USB0_VBUS_VALID | USB0_VBUS_VALID |
| 38 | WIFI2_RESET_N | DMIC 信号与 gpio 复用 | DMIC1_DAT_R |
| 39 | DMIC2_DAT_1 | DMIC 信号接口 | DMIC2_DAT |
| 40 | DMIC1_DAT_1 | DMIC 信号接口 | DMIC1_DAT |
| 41 | DMIC2_CLK_1 | DMIC 信号接口 | DMIC2_CLK |
| 42 | DMIC1_CLK_1 | DMIC 信号接口 | DMIC1_CLK |
| 43 | USB0_IDDIG | USB0_ID 信号 | USB0_IDDIG |
| 44 | USB0_DRV_VBUS | USB0_DRV_VBUS | USB0_DRV_VBUS |
| 45 | KPCOL0 | 下载按键 ADC | KPCOL0 |
| 46 | I2SO2_D3 | I2S 接口信号 | I2SO2_D3 |
| 47 | I2SO2_D2 | I2S 接口信号 | I2SO2_D2 |
| 48 | SCL1 | I2C 接口信号 | GPIO57 复用 |
| 49 | SDA1 | I2C 接口信号 | GPIO58 复用 |
| 50 | SCL4 | I2C 接口信号 | GPIO63 复用 |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
| ---: | --- | --- | --- |
| 51 | SDA4 | I2C 接口信号 | GPIO64 复用 |
| 52 | RESET#_5G | I2S 接口 | I2SIN_D3 |
| 53 | HUB_3V3_EN | I2S 接口 | I2SIN_D2 |
| 54 | GND | 系统地 |  |
| 55 | MSDC1_DAT1 | SDMMC 接口信号 | GPIO166 |
| 56 | MSDC1_DAT0 | SDMMC 接口信号 | GPIO165 |
| 57 | MSDC1_DAT2 | SDMMC 接口信号 | GPIO167 |
| 58 | MSDC1_DAT3 | SDMMC 接口信号 | GPIO168 |
| 59 | MSDC1_CLK | SDMMC 接口信号 | GPIO170 |
| 60 | MSDC1_CMD | SDMMC 接口信号 | GPIO169 |
| 61 | GND | 系统地 |  |
| 62 | SCL5 | I2C 接口信号 | GPIO65 复用 |
| 63 | SDA5 | I2C 接口信号 | GPIO66 复用 |
| 64 | CMMPDN1 | Camera 控制信号 | CMMPDN1 |
| 65 | CMMCLK0_LCM1_BL_EN | Camera 控制信号/LCD 背光信号 | CMMCLK0/KPROW1 |
| 66 | CMMCLK1 | Camera 控制信号 | CMMCLK1 |
| 67 | CMMRST1 | Camera 控制信号 | CMMRST1 |
| 68 | CMMPDN0_DSI0_LCM_RST | Camera 控制信号/LCD 复位信号 | CMMPDN0/DSI0_LCM_RST |
| 69 | CMMRST0_LCM1_EN | Camera 控制信号 | CMMRST0/I2SIN_D1 |
| 70 | CAM1_DVDD_EN | SPI 信号接口 | SPIM2_MISO |
| 71 | CAM1_AVDD28_EN | SPI 信号接口 | SPIM2_MOSI |
| 72 | CAM0_DVDD_EN | SPI 信号接口 | SPIM2_CSB |
| 73 | CAM0_AVDD28_EN | SPI 信号接口 | SPIM2_CLK |
| 74 | BAT_NTC | 电池温度监测信号 | BATON |
| 75 | CS_N_1 | 电池电流监测信号 | CS_N |
| 76 | CS_P_1 | 电池电流监测信号 | CS_P |
| 77 | VIO18_PMU | 1.8V 输出电源 |  |
| 78 | VBAT | 电池 ADC 检测信号 | BATADC_P |
| 79 | VCN33_1_PMU | DLDO 3.3V | 输出电源，800mA |
| 80 | VCN18_PMU | SLDO1 1.8V | 输出电源，1.2A |
| 81 | VIO28_PMU | DLDO 2.8V | 输出电源，200mA |
| 82 | HOMEKEY | 按键 | HOMEKEY |
| 83 | CHRDETB | CHRDETB |  |
| 84 | GND | 系统地 |  |
| 85 | HP_EINT | 检测信号 | 耳机插入检测 |
| 86 | ACCDET | 检测信号 | ACCDET |
| 87 | AU_LOLN | 音频输出信号 | 喇叭输出 |
| 88 | AU_LOLP | 音频输出信号 | 喇叭输出 |
| 89 | AU_HPR | 音频输出信号 | 耳机输出 |
| 90 | AU_HPL | 音频输出信号 | 耳机输出 |
| 91 | AU_REFN | 音频输出信号 | 耳机输出 |
| 92 | AVSS30_AUD |  |  |
| 93 | GND | 系统地 |  |
| 94 | AU_MICBIAS0 | MIC 偏置电压 |  |
| 95 | AU_MICBIAS2 | MIC 偏置电压 |  |
| 96 | AU_MICBIAS1 | MIC 偏置电压 |  |
| 97 | AU_VIN0_P | 音频输入信号 | 不可用作 GPIO |
| 98 | AU_VIN0_N | 音频输入信号 | 不可用作 GPIO |
| 99 | AU_VIN1_P | 音频输入信号 | 不可用作 GPIO |
| 100 | AU_VIN1_N | 音频输入信号 | 不可用作 GPIO |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
| ---: | --- | --- | --- |
| 101 | VSYS | 核心板 5V 输入 | 建议电流 3A 或以上， |
| 102 | VSYS | 核心板 5V 输入 | 纹波控制在 100MV 内 |
| 103 | VSYS | 核心板 5V 输入 |  |
| 104 | GND | 系统地 |  |
| 105 | GND | 系统地 |  |
| 106 | GND | 系统地 |  |
| 107 | PWRKEY | 电源按键 |  |
| 108 | VPA_PMU | 输出电源 |  |
| 109 | SYSRSTB | PMU 使能信号 |  |
| 110 | UART0_RXD | UART 信号接口 | UART0_RXD |
| 111 | UART0_TXD | UART 信号接口 | UART0_TXD |
| 112 | UART1_RXD | UART 信号接口 | UART1_RXD |
| 113 | UART1_TXD | UART 信号接口 | UART1_TXD |
| 114 | CSI1A_L0P_T0A | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 115 | CSI1A_L0N_T0B | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 116 | CSI1A_L1P_T0C | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 117 | CSI1A_L1N_T1A | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 118 | CSI1A_L2P_T1B | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 119 | CSI1A_L2N_T1C | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 120 | CSI1B_L0P_T0A | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 121 | CSI1B_L0N_T0B | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 122 | CSI1B_L1P_T0C | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 123 | CSI1B_L1N_T1A | MIPI 摄像头接口信号 | 不可用作 GPIO |
| 124 | WIFI2_INT_B | SPI 信号接口 | SPIM0_CLK |
| 125 | SDIO_DS | SPI 信号接口 | SPIM1_CSB |
| 126 | HUB_RESET | GPIO | GPIO07 |
| 127 | GPIO_3V3_EN | GPIO | GPIO09 |
| 128 | 5V_EN | GPIO | GPIO10 |
| 129 | MASTER_CHG_INT# | SPI 信号接口 | SPIM1_MOSI |
| 130 | WAKE_ON_WAN# | SPI 信号接口 | SPIM1_MISO |
| 131 | WCN_3V3_EN | SPI 信号接口 | SPIM0_MIO3 |
| 132 | SLAVE_CHG_INT# | SPI 信号接口 | SPIM0_MIO2 |
| 133 | LCM2_BL_EN | SPI 信号接口 | SPIM0_MISO |
| 134 | POWER_ON_OFF_5G | SPI 信号接口 | SPIM0_MOSI |
| 135 | BT2_WO | SPI 信号接口 | SPIM0_CSB |
| 136 | EINT_CTP0 | GPIO | GPIO06 |
| 137 | GPIO_CTP0_RSTB | GPIO | GPIO05 |
| 138 | DSI1_LCM_RST | LCD 控制信号接口 | DSI1_LCM_RST |
| 139 | MSDC1_INSI | GPIO | GPIO02 |
| 140 | DPI_D5 | DPI 信号接口 | GPIO136 |
| 141 | DPI_D7 | DPI 信号接口 | GPIO138 |
| 142 | DPI_D8 | DPI 信号接口 | GPIO139 |
| 143 | DPI_D2 | DPI 信号接口 | GPIO133 |
| 144 | DPI_D0 | DPI 信号接口 | GPIO131 |
| 145 | DPI_D6 | DPI 信号接口 | GPIO137 |
| 146 | DPI_D1 | DPI 信号接口 | GPIO132 |
| 147 | DPI_D11 | DPI 信号接口 | GPIO142 |
| 148 | DPI_D15 | DPI 信号接口 | GPIO146 |
| 149 | DPI_D4 | DPI 信号接口 | GPIO135 |
| 150 | DPI_D12 | DPI 信号接口 | GPIO143 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
| ---: | --- | --- | --- |
| 151 | DPI_D9 | DPI 信号接口 | GPIO140 |
| 152 | DPI_D13 | DPI 信号接口 | GPIO144 |
| 153 | DPI_D3 | DPI 信号接口 | GPIO134 |
| 154 | DPI_D10 | DPI 信号接口 | GPIO141 |
| 155 | DPI_D14 | DPI 信号接口 | GPIO145 |
| 156 | AUXIN3 | AUXIN | AUXIN3 |
| 157 | DPI_VSYNC | DPI 信号接口 |  |
| 158 | DPI_HSYNC | DPI 信号接口 |  |
| 159 | GND | 系统地 |  |
| 160 | CSI0B_L0P_DSI0_D2P | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 161 | CSI0B_L0N_DSI0_D2N | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 162 | CSI0A_L0P_DSI0_D0P | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 163 | CSI0A_L0N_DSI0_D0N | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 164 | CSI0A_L2P_DSI0_CKP | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 165 | CSI0A_L2N_DSI0_CKN | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 166 | CSI0A_L1P_DSI0_D1P | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 167 | CSI0A_L1N_DSI0_D1N | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 168 | CSI0B_L1P_DSI0_D3P | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 169 | CSI0B_L1N_DSI0_D3N | MIPI 摄像头/LCD 复用接口信号 | 不可用作 GPIO |
| 170 | GND | 系统地 |  |
| 171 | DSI1_D2P_EDP_HPD | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 172 | DSI1_D2N_EDP_DIS_EN | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 173 | DSI1_D0P_EDP_TX0P | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 174 | DSI1_D0N_EDP_TX0N | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 175 | DSI1_CKP_EDP_AUXP | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 176 | DSI1_CKN_EDP_AUXN | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 177 | DSI1_D1P_EDP_TX1P | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 178 | DSI1_D1N_EDP_TX1N | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 179 | DSI1_D3P_EDP_PWM0 | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 180 | DSI1_D3N_EDP_POWER_EN | MIPI LCD /EDP 复用接口信号 | 不可用作 GPIO |
| 181 | GND | 系统地 |  |
| 182 | HDMITX21_CLK_M | HDMI 输出接口信号 | 不可用作 GPIO |
| 183 | HDMITX21_CLK_P | HDMI 输出接口信号 | 不可用作 GPIO |
| 184 | HDMITX21_CH0_M | HDMI 输出接口信号 | 不可用作 GPIO |
| 185 | HDMITX21_CH0_P | HDMI 输出接口信号 | 不可用作 GPIO |
| 186 | HDMITX21_CH1_M | HDMI 输出接口信号 | 不可用作 GPIO |
| 187 | HDMITX21_CH1_P | HDMI 输出接口信号 | 不可用作 GPIO |
| 188 | HDMITX21_CH2_M | HDMI 输出接口信号 | 不可用作 GPIO |
| 189 | HDMITX21_CH2_P | HDMI 输出接口信号 | 不可用作 GPIO |
| 190 | GND | 系统地 |  |
| 191 | DP_LN3_TXN | DP 接口信号 | 不可用作 GPIO |
| 192 | DP_LN3_TXP | DP 接口信号 | 不可用作 GPIO |
| 193 | DP_LN2_TXN | DP 接口信号 | 不可用作 GPIO |
| 194 | DP_LN2_TXP | DP 接口信号 | 不可用作 GPIO |
| 195 | DP_LN1_TXN | DP 接口信号 | 不可用作 GPIO |
| 196 | DP_LN1_TXP | DP 接口信号 | 不可用作 GPIO |
| 197 | DPAUXN | DP 接口信号 | 不可用作 GPIO |
| 198 | DPAUXP | DP 接口信号 | 不可用作 GPIO |
| 199 | DP_LN0_TXN | DP 接口信号 | 不可用作 GPIO |
| 200 | DP_LN0_TXP | DP 接口信号 | 不可用作 GPIO |
