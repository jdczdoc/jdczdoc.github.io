---
sidebar_position: 3
title: 硬件设计与接口资源
description: 硬件设计与接口资源
---

# 硬件设计与接口资源

## 管脚描述

X3566CV2除上述不可用作GPIO口、电源引脚和系统地外的信号引脚的其他GPIO口都可以复用作其他功能，如I2C、UART、SPI、I2S、PWM等等。

## 电源设计

X3566CV2核心板由 VCC_SYS 4V 输入供电；VBUS、VCC5V_MIDU 为 5V 输出；VCC_BAT+ 为单节电池正极输入，VCC_BAT- 接电池负极。SNSN 经 10mΩ 采样电阻接 VCC_BAT-，用于电池电流检测。

- 11脚：VCC_SYS 4V 输入；8脚：VBUS 5V 输出；20脚：VCC5V_MIDU 5V 输出；7脚：VCC_BAT+ 单节电池正极输入（3.7–4.2V）；6脚：VCC_BAT- 电池负极。5脚：SNSN 经10mΩ电阻接VCC_BAT-。

- 3.3V/1.8V 由板载 PMIC 产生；底板外设电源请自行设计，避免与核心板电源相互干扰。

- 12、13、14脚：GND，需与底板地完整连接。

- 电源走线宽度≥2mm，换层过孔不少于5个。

## USB设计

X3566CV2 提供 1 路 USB3.0 Host、2 路 USB2.0 Host 和 1 路 USB2.0 OTG：USB3 Host1 使用 184–189 脚；USB2 Host2 使用 115/116 脚；USB2 Host3 使用 117/118 脚；OTG0 使用 190–193 脚。USB 差分对按 90Ω 控制。

## MIPI设计

X3566CV2 支持 1 路 MIPI DSI、1 路 LVDS 和 1 路 MIPI CSI：DSI1 使用 149–158 脚，DSI0/LVDS 使用 159–168 脚，CSI 使用 137–148 脚；MIPI_MCLK_B 在 78 脚。MIPI/LVDS 差分对按 100Ω 控制。

## 上电时序

X3566CV2 由 VCC_SYS 4V 输入供电，板载 PMIC 按时序建立 3.3V、1.8V 与核心电源。底板上电顺序建议：VCC_SYS 4V → 3.3V/1.8V → PMIC_PWRON → 系统复位释放。

| 序号 | 信号 | 说明 |
| --- | --- | --- |
| 1 | VCC_SYS | 4V/3A 输入建立 |
| 2 | 3.3V/1.8V | PMIC 输出建立 |
| 3 | PMIC_PWRON | 低电平触发开机 |
| 4 | 系统复位 | 电源稳定后释放 |
| 5 | MASKROM | 需要烧录时进入 |
| 6 | 系统启动 | UART2 输出启动日志 |

## 调试接口

调试串口为 UART2：TX 为 197 脚，RX 为 198 脚，3.3V 电平，默认 115200-8-N-1；PMIC_RESET_KEY 为 4 脚，可用于复位/开机控制。

## 显示接口

X3566CV2 支持 HDMI2.0、eDP1.3、MIPI DSI 和 LVDS 显示。HDMI 使用 169–177 脚，eDP 使用 23–32 脚，MIPI DSI1 使用 149–158 脚，DSI0/LVDS 使用 159–168 脚；背光 PWM 在 2 脚，LCD 电源/复位在 199/200 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| eDP D3N | 23 | EDP_TX_D3N | 差分 |
| eDP D3P | 24 | EDP_TX_D3P | 差分 |
| eDP D2N | 25 | EDP_TX_D2N | 差分 |
| eDP D2P | 26 | EDP_TX_D2P | 差分 |
| eDP D1N | 27 | EDP_TX_D1N | 差分 |
| eDP D1P | 28 | EDP_TX_D1P | 差分 |
| eDP D0N | 29 | EDP_TX_D0N | 差分 |
| eDP D0P | 30 | EDP_TX_D0P | 差分 |
| eDP AUXN | 31 | EDP_TX_AUXN | 差分 |
| eDP AUXP | 32 | EDP_TX_AUXP | 差分 |
| MIPI DSI1 D3N | 149 | MIPI_DSI_TX1_D3N | 差分 |
| MIPI DSI1 D3P | 150 | MIPI_DSI_TX1_D3P | 差分 |
| MIPI DSI1 D2N | 151 | MIPI_DSI_TX1_D2N | 差分 |
| MIPI DSI1 D2P | 152 | MIPI_DSI_TX1_D2P | 差分 |
| MIPI DSI1 D1N | 153 | MIPI_DSI_TX1_D1N | 差分 |
| MIPI DSI1 D1P | 154 | MIPI_DSI_TX1_D1P | 差分 |
| MIPI DSI1 D0N | 155 | MIPI_DSI_TX1_D0N | 差分 |
| MIPI DSI1 D0P | 156 | MIPI_DSI_TX1_D0P | 差分 |
| MIPI DSI1 CLKP | 157 | MIPI_DSI_TX1_CLKP | 差分 |
| MIPI DSI1 CLKN | 158 | MIPI_DSI_TX1_CLKN | 差分 |
| DSI0/LVDS CLKP | 159 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | 差分 |
| DSI0/LVDS CLKN | 160 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | 差分 |
| DSI0/LVDS D3N | 161 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | 差分 |
| DSI0/LVDS D3P | 162 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | 差分 |
| DSI0/LVDS D2N | 163 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | 差分 |
| DSI0/LVDS D2P | 164 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | 差分 |
| DSI0/LVDS D1N | 165 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | 差分 |
| DSI0/LVDS D1P | 166 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | 差分 |
| DSI0/LVDS D0N | 167 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | 差分 |
| DSI0/LVDS D0P | 168 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | 差分 |
| HDMI HPD | 169 | HDMI_TX_HPDIN | 3.3V |
| HDMI CLKN | 170 | HDMI_TXCLKN_PORT | 差分 |
| HDMI CLKP | 171 | HDMI_TXCLKP_PORT | 差分 |
| HDMI D0N | 172 | HDMI_TX0N_PORT | 差分 |
| HDMI D0P | 173 | HDMI_TX0P_PORT | 差分 |
| HDMI D1N | 174 | HDMI_TX1N_PORT | 差分 |
| HDMI D1P | 175 | HDMI_TX1P_PORT | 差分 |
| HDMI D2N | 176 | HDMI_TX2N_PORT | 差分 |
| HDMI D2P | 177 | HDMI_TX2P_PORT | 差分 |
| 背光PWM | 2 | LCD_BL_PWM | 1.8V |
| HDMI CEC | 110 | HDMITX_CEC_M0 | 3.3V |
| HDMI DDC SDA | 111 | HDMITX_SDA | 3.3V |
| HDMI DDC SCL | 112 | HDMITX_SCL | 3.3V |
| 触摸复位 | 194 | TP_RST_L | 1.8V |
| LCD电源使能 | 199 | LCD_PWREN_H | 1.8V |
| LCD复位 | 200 | LCD_RST_L | 1.8V |

## 摄像头接口

核心板引出 1 路 MIPI CSI（4-lane，137–148 脚）和 1 路 CIF 8-bit 摄像头接口（79–96 脚）；MIPI_MCLK_B 在 78 脚，摄像头复位/掉电控制见 83、84、93、94、96 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| MIPI MCLK | 78 | MIPI_MCLK_B | 1.8V |
| CIF CLKIN | 79 | CIF_8BIT_CLKIN | 1.8V |
| CIF CLKOUT | 80 | CIF_CLKOUT | 1.8V |
| CIF VSYNC | 81 | CIF_8BIT_VSYNC | 1.8V |
| CIF HREF | 82 | CIF_8BIT_HREF | 1.8V |
| 前摄复位 | 83 | CAMERAF_RST_GPIO4_B0 | 1.8V |
| 后摄复位 | 84 | CAMERAB_RST_GPIO4_B1 | 1.8V |
| CIF D7 | 85 | CIF_8BIT_D7 | 1.8V |
| CIF D6 | 86 | CIF_8BIT_D6 | 1.8V |
| CIF D5 | 87 | CIF_8BIT_D5 | 1.8V |
| CIF D4 | 88 | CIF_8BIT_D4 | 1.8V |
| CIF D3 | 89 | CIF_8BIT_D3 | 1.8V |
| CIF D2 | 90 | CIF_8BIT_D2 | 1.8V |
| CIF D1 | 91 | CIF_8BIT_D1 | 1.8V |
| CIF D0 | 92 | CIF_8BIT_D0 | 1.8V |
| 前摄2掉电 | 93 | CAMERAF2_PDN_GPIO3_C7 | 1.8V |
| 前摄掉电 | 94 | CAMERAF_PDN_GPIO3_C6 | 1.8V |
| 重力传感器中断 | 95 | GSENSOR_INT_GPIO3_D3 | 1.8V |
| 后摄掉电 | 96 | CAMERAB_PDN_GPIO3_D0 | 1.8V |
| MIPI CSI D3N | 137 | MIPI_CSI_RX_D3N | 差分 |
| MIPI CSI D3P | 138 | MIPI_CSI_RX_D3P | 差分 |
| MIPI CSI D2N | 139 | MIPI_CSI_RX_D2N | 差分 |
| MIPI CSI D2P | 140 | MIPI_CSI_RX_D2P | 差分 |
| MIPI CSI D1N | 141 | MIPI_CSI_RX_D1N | 差分 |
| MIPI CSI D1P | 142 | MIPI_CSI_RX_D1P | 差分 |
| MIPI CSI D0N | 143 | MIPI_CSI_RX_D0N | 差分 |
| MIPI CSI D0P | 144 | MIPI_CSI_RX_D0P | 差分 |
| MIPI CSI CLK1P | 145 | MIPI_CSI_RX_CLK1P | 差分 |
| MIPI CSI CLK1N | 146 | MIPI_CSI_RX_CLK1N | 差分 |
| MIPI CSI CLK0P | 147 | MIPI_CSI_RX_CLK0P | 差分 |
| MIPI CSI CLK0N | 148 | MIPI_CSI_RX_CLK0N | 差分 |

## USB 接口

X3566CV2 提供 USB3.0 Host1、USB2.0 Host2/Host3 与 USB2.0 OTG0；VBUS（8脚）为5V输出，USB_OTG0_VBUSDET（192脚）用于VBUS检测。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| USB VBUS输出 | 8 | VBUS | 5V |
| USB2 Host差分信号 | 115 | USB2_HOST2_DM | 3.3V差分 |
| USB2 Host差分信号 | 116 | USB2_HOST2_DP | 3.3V差分 |
| USB2 Host差分信号 | 117 | USB2_HOST3_DM | 3.3V差分 |
| USB2 Host差分信号 | 118 | USB2_HOST3_DP | 3.3V差分 |
| USB3差分信号 | 184 | USB3_HOST1_SSTXP | 差分 |
| USB3差分信号 | 185 | USB3_HOST1_SSTXN | 差分 |
| USB3差分信号 | 186 | USB3_HOST1_SSRXP | 差分 |
| USB3差分信号 | 187 | USB3_HOST1_SSRXN | 差分 |
| USB3差分信号 | 188 | USB3_HOST1_DP | 差分 |
| USB3差分信号 | 189 | USB3_HOST1_DM | 差分 |
| USB2 OTG信号 | 190 | USB_OTG0_DM | 3.3V/差分 |
| USB2 OTG信号 | 191 | USB_OTG0_DP | 3.3V/差分 |
| USB VBUS检测 | 192 | USB_OTG0_VBUSDET | 5V |
| USB OTG ID | 193 | USB_OTG0_ID | 1.8V/3.3V |

## 以太网接口

核心板提供 1 路 GMAC1 RGMII 千兆以太网接口，使用 119–136 脚，可外接 RTL8211F 等千兆 PHY。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 千兆以太网信号 | 119 | GMAC1_MCLKINOUT_M0 | 3.3V |
| 千兆网中断 | 120 | GMAC1_INT/PMEB | 3.3V |
| 千兆网复位 | 121 | GMAC1_RSTn | 3.3V |
| 千兆以太网信号 | 122 | GMAC1_MDIO_M0 | 3.3V |
| 千兆以太网信号 | 123 | GMAC1_MDC_M0 | 3.3V |
| 千兆以太网信号 | 124 | GMAC1_RXCLK_M0 | 3.3V |
| 千兆以太网信号 | 125 | GMAC1_RXDV_CRS_M0 | 3.3V |
| 千兆以太网信号 | 126 | GMAC1_RXD0_M0 | 3.3V |
| 千兆以太网信号 | 127 | GMAC1_RXD1_M0 | 3.3V |
| 千兆以太网信号 | 128 | GMAC1_RXD2_M0 | 3.3V |
| 千兆以太网信号 | 129 | GMAC1_RXD3_M0 | 3.3V |
| 千兆网25M参考时钟 | 130 | ETH1_REFCLKO_25M_M0 | 3.3V |
| 千兆以太网信号 | 131 | GMAC1_TXEN_M0 | 3.3V |
| 千兆以太网信号 | 132 | GMAC1_TXD0_M0 | 3.3V |
| 千兆以太网信号 | 133 | GMAC1_TXD1_M0 | 3.3V |
| 千兆以太网信号 | 134 | GMAC1_TXD2_M0 | 3.3V |
| 千兆以太网信号 | 135 | GMAC1_TXD3_M0 | 3.3V |
| 千兆以太网信号 | 136 | GMAC1_TXCLK_M0 | 3.3V |

## 音频接口

音频包括耳机输出、扬声器输出、2 路 MIC 与检测，使用 15–22 脚；耳机检测在 17 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 耳机右声道 | 15 | HPR_OUT | 模拟 |
| 耳机左声道 | 16 | HPL_OUT | 模拟 |
| 耳机检测 | 17 | HP_SNS | 1.8V |
| 扬声器正 | 18 | SPKP_OUT | 模拟 |
| 扬声器负 | 19 | SPKN_OUT | 模拟 |
| 5V中压电源 | 20 | VCC5V_MIDU | 5V |
| MIC2输入 | 21 | MIC2_IN | 模拟 |
| MIC1输入 | 22 | MIC1_IN | 模拟 |

## 存储与 SD 卡接口

存储接口包括 SDMMC0（42–48 脚，可接 TF 卡）和 SDMMC1（57–62 脚，可接 SDIO 外设）；CLK/CMD/DATA 按 50Ω 控制，卡座加 ESD。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| SD卡信号 | 42 | SDMMC0_DET_L | 3.3V |
| SD卡信号 | 43 | SDMMC0_CMD | 3.3V/1.8V |
| SD卡信号 | 44 | SDMMC0_D3 | 3.3V/1.8V |
| SD卡信号 | 45 | SDMMC0_D2 | 3.3V/1.8V |
| SD卡信号 | 46 | SDMMC0_D1 | 3.3V/1.8V |
| SD卡信号 | 47 | SDMMC0_D0 | 3.3V/1.8V |
| SD卡信号 | 48 | SDMMC0_CLK | 3.3V/1.8V |
| SDIO信号 | 57 | SDMMC1_CLK | 1.8V |
| SDIO信号 | 58 | SDMMC1_CMD | 1.8V |
| SDIO信号 | 59 | SDMMC1_D0 | 1.8V |
| SDIO信号 | 60 | SDMMC1_D1 | 1.8V |
| SDIO信号 | 61 | SDMMC1_D2 | 1.8V |
| SDIO信号 | 62 | SDMMC1_D3 | 1.8V |

## 低速接口与 GPIO

低速资源包括 5 路 UART、3 路 I2C、1 路 I2S、2 路 PWM、2 路 ADC 与多路 GPIO。UART1 为 49–52 脚，UART2 调试串口为 197/198 脚，UART3 为 76/77 脚，UART5 为 113/114 脚，UART9 为 105/106 脚；I2C2 为 101/102 脚，I2C4 为 99/100 脚，HDMI DDC 为 111/112 脚。

| 资源 | 数量 | 说明 |
| --- | --- | --- |
| UART | 5 路 | UART1 49–52；UART2 197/198；UART3 76/77；UART5 113/114；UART9 105/106 |
| I2C | 3 路 | I2C2 101/102；I2C4 99/100；HDMI DDC 111/112 |
| I2S | 1 路 | I2S2 53–56 |
| PWM | 2 路 | LCD_BL_PWM 2；PWM_IR7 196 |
| ADC | 2 路 | ADC0 69；ADC1 70 |
| SPI | 未单独引出 | 如需要可用 GPIO 模拟或底板扩展 |
| GPIO | 多路 | GPIO0/1/2/3/4 复用 |

## 系统控制与电源

系统控制包括电源、开机、复位、电池检测、触摸复位、RTC 中断、红外 PWM 与 LCD 控制；VCC_SYS 为 4V 输入，VBUS/VCC5V_MIDU 为 5V 输出，VCC_BAT+ 支持单节 3.7–4.2V 电池。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 触摸中断 | 1 | TP_INT_L | 1.8V |
| 背光PWM | 2 | LCD_BL_PWM | 1.8V |
| WiFi 32.768kHz时钟 | 3 | PMIC_32KOUT_WIFI | 1.8V |
| PMIC复位键 | 4 | PMIC_RESET_KEY | 1.8V |
| 序列号/板卡识别 | 5 | SNSN | 模拟 |
| 电池负极 | 6 | VCC_BAT- | 0V |
| 电池正极 | 7 | VCC_BAT+ | 3.7–4.2V |
| USB VBUS输出 | 8 | VBUS | 5V |
| 电池温度检测 | 9 | TS | 1.8V |
| 开机键 | 10 | PMIC_PWRON | 1.8V |
| 系统电源输入 | 11 | VCC_SYS | 5V |
| 参考地 | 12 | GND | 0V |
| 参考地 | 13 | GND | 0V |
| 参考地 | 14 | GND | 0V |
| 触摸复位 | 194 | TP_RST_L | 1.8V |
| RTC中断 | 195 | RTC_INT | 1.8V |
| 红外PWM | 196 | PWM_IR7 | 1.8V |
| UART信号 | 197 | UART2_TX_M0_DEBUG | 1.8V |
| UART信号 | 198 | UART2_RX_M0_DEBUG | 1.8V |
| LCD电源使能 | 199 | LCD_PWREN_H | 1.8V |
| LCD复位 | 200 | LCD_RST_L | 1.8V |

## X3566CV2 / CV3 引脚对比

对 X3566CV2 与 X3566CV3 的 200PIN 定义逐脚比对：引脚编号、信号名称、复用关系一致；二者唯一的区别就是，X3566CV2使用2片DDR4，而X3566CV3使用单片LPDDR4。二者对用户设计，使用不存在影响，软硬件完全兼容，可直接替代。

## 阻抗控制

底板走线应按表 4-1 控制阻抗；高速差分对内部等长，参考平面连续。

| 信号类型 | 目标阻抗 | 备注 |
| --- | --- | --- |
| USB2.0 | 90Ω | D+/D- |
| MIPI DSI/CSI | 100Ω | 差分对 |
| LVDS | 100Ω | 差分对 |
| RGMII | 100Ω | TX/RX |
| SDC0 | 50Ω | CLK/CMD/DATA |

## 高速差分接口

HDMI/eDP/MIPI/LVDS/USB3/PCIe 差分对尽量同层走线，避免跨分割；换层时在过孔附近加回流地孔；连接器、ESD 与共模电感按信号流向排列。

## 电源与 EMC

5V 输入加 TVS、保险丝与去耦；3.3V/1.8V 按负载留余量；晶振、DCDC 电感远离高速差分与天线；外露接口加 ESD。

## 底板设计检查清单

- PS/VBUS 5V 电流与纹波是否满足 2A？

- PWRON/RESET/FEL 上下拉与按键是否正确？

- HDMI/eDP/MIPI/LVDS/USB/PCIe/RGMII 阻抗与等长是否满足？

- SD、音频、耳机接口 ESD 是否完整？

- 调试 UART 与测试点是否保留？

## 订货配置

| 配置项 | 标准配置 | 可选配置 |
| --- | --- | --- |
| 内存 | 4GB DDR4（2×2GB） | 4GB/8GB |
| 存储 | 16GB eMMC | 4/8/16GB |
| 核心板 | X3566CV2 | 200PIN |
| 操作系统 | Android/Linux | 按项目定制 |

## 技术支持

联系九鼎创展技术支持时，请提供核心板型号、底板原理图页码、问题现象与串口日志。
