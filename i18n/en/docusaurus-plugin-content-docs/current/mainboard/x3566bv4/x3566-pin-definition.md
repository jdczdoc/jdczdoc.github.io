---
sidebar_position: 4
title: Core Board Pin Definition
description: X3566CV2 200-pin core-board pin definition
---

# Core Board Pin Definition

The X3566CV2 core board uses a 200-pin stamp-hole layout with a 1.0mm pin pitch. The complete 200-pin definition from the hardware manual is retained below for carrier-board design, pin-mux checking, and driver debugging.

![X3566CV2 core board layout](./x3566-core-board-size.png)

:::note
All MIPI differential pairs cannot be reused as ordinary GPIO pins. Each GPIO group belongs to a voltage domain. Most GPIO groups reserve two optional resistors for voltage-domain setting, usually 1.8V or 3.3V. Because the core module is designed for general use, the exact voltage-domain resistor option is distinguished by module suffix. Select the proper order option according to the target carrier-board scenario.
:::

## Core Board Pin Definition 1: Pin 1-50

| Pin No. | Signal | Type | Function |
| --- | --- | --- | --- |
| 1 | GPIO0_B5 | GPIO | PWM1_M,I2C2_SCL_M0,SPI0_CLK_M0 |
| 2 | GPIO0_C3 | GPIO | PWM4 |
| 3 | PMIC_32KOUT_WIFI | Clock output | 32.768KHz波形输出 |
| 4 | PMIC_RESET_KEY | Reset pin | PMIC复位管脚 |
| 5 | SNSN | Battery signal | Battery negative |
| 6 | VCC_BAT- | Battery negative | Battery negative |
| 7 | VCC_BAT+ | 电池正级 | 电池正级 |
| 8 | VBUS | Power input | PMIC 5V电源输入，USB程序下载电源输入管脚 |
| 9 | TS | PMIC GPIO口 | PMIC GPIO输出 |
| 10 | PMIC_PWRON | 开机管脚 | PMIC上电开机管脚，低电平有效 |
| 11 | VCC_SYS | Power output | PMIC电源输出管脚，用于外设供电 |
| 12 | VCC_SYS | Power output | PMIC电源输出管脚，用于外设供电 |
| 13 | GND | 参考地 |  |
| 14 | GND | 参考地 |  |
| 15 | HPR_OUT | 耳机输出 | 耳机右声道输出 |
| 16 | HPL_OUT | 耳机输出 | 耳机左声道输出 |
| 17 | HP_SNS | 耳机噪声抑制 | 耳机噪声抑制管脚，靠近耳机座子下地 |
| 18 | SPKP_OUT | 喇叭输出 | 喇叭输出正极 |
| 19 | SPKN_OUT | 喇叭输出 | 喇叭输出负极 |
| 20 | VCC5V_MIDU | 5V电源输出 | 5V电源输出，可用于外设供电 |
| 21 | MIC2_IN | 麦克风输入 | 麦克风输入通道2 |
| 22 | MIC1_IN | 麦克风输入 | 麦克风输入通道1 |
| 23 | EDP_TX_D3N | EDP屏信号线 | EDP屏接口差分对 |
| 24 | EDP_TX_D3P | EDP屏信号线 | EDP屏接口差分对 |
| 25 | EDP_TX_D2N | EDP屏信号线 | EDP屏接口差分对 |
| 26 | EDP_TX_D2P | EDP屏信号线 | EDP屏接口差分对 |
| 27 | EDP_TX_D1N | EDP屏信号线 | EDP屏接口差分对 |
| 28 | EDP_TX_D1P | EDP屏信号线 | EDP屏接口差分对 |
| 29 | EDP_TX_D0N | EDP屏信号线 | EDP屏接口差分对 |
| 30 | EDP_TX_D0P | EDP屏信号线 | EDP屏接口差分对 |
| 31 | EDP_TX_AUXN | EDP屏信号线 | EDP屏接口差分对 |
| 32 | EDP_TX_AUXP | EDP屏信号线 | EDP屏接口差分对 |
| 33 | GPIO0_C4 | GPIO | PWM5,SPI0_CS1,UART0_RTS |
| 34 | GPIO0_B4 | GPIO | I2C1_SDA |
| 35 | GPIO0_B3 | GPIO | I2C1_SCL |
| 36 | GPIO0_C0 | GPIO | PWM1,UART0_RX |
| 37 | GPIO0_C1 | GPIO | PWM2,UART0_TX |
| 38 | GPIO0_A5 | GPIO |  |
| 39 | GPIO0_C2 | GPIO |  |
| 40 | GPIO0_A6 | GPIO |  |
| 41 | GPIO0_A0 | GPIO |  |
| 42 | GPIO0_A4 | GPIO | SDMMC0_DET |
| 43 | GPIO2_A1 | GPIO | SDMMC0_CMD,PWM10,UART5_RX |
| 44 | GPIO2_A0 | GPIO | SDMMC0_D3,UART5_RTS |
| 45 | GPIO1_D7 | GPIO | SDMMC0_D2,UART5_CTS |
| 46 | GPIO1_D6 | GPIO | SDMMC0_D1,PWM9,UART2_RX,UART6_RX |
| 47 | GPIO1_D5 | GPIO | SDMMC0_D0,PWM8,UART2_TX,UART6_TX |
| 48 | GPIO2_A2 | GPIO | SDMMC0_CLK,UART5_TX |
| 49 | GPIO2_B6 | GPIO | UART1_CTSn_M0,SPI1_MISO |
| 50 | GPIO2_B5 | GPIO | UART1_RTSn_M0,SPI1_CLK |


## Core Board Pin Definition 2: Pin 51-100

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 51 | GPIO2_B4 | GPIO | UART1_TX_M0 |
| 52 | GPIO2_B3 | GPIO | UART1_RX_M0 |
| 53 | GPIO2_C2 | GPIO | I2S2_SCLK_TX_M0,UART7_CTS,SPI2_MISO |
| 54 | GPIO2_C5 | GPIO | I2S2_SDI_M0,UART8_TX,SPI2_CS1 |
| 55 | GPIO2_C3 | GPIO | I2S2_LRCK_TX_M0,UART9_RTS,SPI2_MOSI |
| 56 | GPIO2_C4 | GPIO | I2S2_SDO_M0,UART9_CTS,SPI2_CS0 |
| 57 | GPIO2_B0 | GPIO | SDMMC1_CLK,UART9_TX |
| 58 | GPIO2_A7 | GPIO | SDMMC1_CMD,UART9_RX |
| 59 | GPIO2_A3 | GPIO | SDMMC1_D0,UART6_RX |
| 60 | GPIO2_A4 | GPIO | SDMMC1_D1,UART6_TX |
| 61 | GPIO2_A5 | GPIO | SDMMC1_D2,UART7_RX |
| 62 | GPIO2_A6 | GPIO | SDMMC1_D3,UART7_TX |
| 63 | GPIO2_C1 | GPIO | UART7_RTS,SPI2_CLK_M0,I2S2_MCLK_M0 |
| 64 | GPIO2_C0 | GPIO | UART6_CTS_M0,SPI1_CS0_M0,I2S2_LRCK_RX_M0 |
| 65 | GPIO2_B7 | GPIO | UART6_RTS_M0,SPI1_MOSI_M0,I2S2_SCLK_RX_M0 |
| 66 | GPIO2_B2 | GPIO | UART8_CTS_M0,I2C4_SCL_M1,SDMMC1_DET |
| 67 | GPIO2_B1 | GPIO | UART8_RTS_M0,I2C4_SDA_M1,SDMMC1_PWREN |
| 68 | GPIO2_C6 | GPIO | UART8_RX_M0,SPI1_CS1_M0,CLK32K_OUT1 |
| 69 | ADC0 | ADC输入 | ADC输入通道0 |
| 70 | ADC1 | ADC输入 | ADC输入通道1 |
| 71 | GPIO1_B2 | GPIO | I2S1_SDO3_M0,I2S1_SDI1_M0 |
| 72 | GPIO1_B1 | GPIO | I2S1_SDO2_M0,I2S1_SDI2_M0 |
| 73 | GPIO1_B0 | GPIO | I2S1_SDO1_M0,I2S1_SDI3_M0 |
| 74 | GPIO1_D0 | GPIO |  |
| 75 | GPIO1_A4 | GPIO | I2S1_SCLK_RX_M0,UART4_RX_M0 |
| 76 | GPIO1_A0 | GPIO | UART3_RX_M0,I2C3_SDA_M0 |
| 77 | GPIO1_A1 | GPIO | UART3_TX_M0,I2C3_SCL_M0 |
| 78 | GPIO4_A7 | GPIO | CAM_CLKOUT0,GMAC1_RXD0_M1,SPI3_CS1_M0,I2S1_LRCK_RX_M1 |
| 79 | GPIO4_C1 | GPIO | CIF_CLKIN,GMAC1_MCLKINOUT_M1,UART1_CTS_M1,I2S2_SCLK_RX_M1 |
| 80 | GPIO4_C0 | GPIO | CIF_CLKOUT,PWM11_IR_M1 |
| 81 | GPIO4_B7 | GPIO | CIF_VSYNC,GMAC1_MDIO_M1,I2S2_SCLK_TX_M1 |
| 82 | GPIO4_B6 | GPIO | CIF_HREF,GMAC1_MDC_M1,UART1_RTS_M1,I2S2_MCLK_M1 |
| 83 | GPIO4_B0 | GPIO | CAMCLKOUT1,GMAC1_RXD1_M1,SPI3_MISO_M0,I2S1_SDO0_M1 |
| 84 | GPIO4_B1 | GPIO | GMAC1_RXDV_CRS_M1,I2S1_SDO2_M1 |
| 85 | GPIO4_A5 | GPIO | CIF_8BIT_D7 |
| 86 | GPIO4_A4 | GPIO | CIF_8BIT_D6 |
| 87 | GPIO4_A3 | GPIO | CIF_8BIT_D5 |
| 88 | GPIO4_A2 | GPIO | CIF_8BIT_D4 |
| 89 | GPIO4_A1 | GPIO | CIF_8BIT_D3 |
| 90 | GPIO4_A0 | GPIO | CIF_D10 |
| 91 | GPIO3_D7 | GPIO | CIF_D9, GMAC1_TXD3_M1, ,UART1_RX_M1 |
| 92 | GPIO3_D6 | GPIO | CIF_D8,GMAC1_TXD2_M1,UART1_TX_M1 |
| 93 | GPIO3_C7 | GPIO | CIF_D1,SDMMC2_D1_M0,I2S1_SCLK_TX_M1 |
| 94 | GPIO3_C6 | GPIO | CIF_D0,SDMMC2_D0_M0,I2S1_MCLK_M1 |
| 95 | GPIO3_D3 | GPIO | CIF_D5, SDMMC2_CLK_M0, I2S1_SDI1_M1 |
| 96 | GPIO3_D0 | GPIO | CIF_D2,SDMMC2_D2_M0,I2S1_LRCK_TX_M1 |
| 97 | GPIO3_D4 | GPIO | CIF_D6,SDMMC2_DET_M0,I2S1_SDI2_M1 |
| 98 | GPIO3_D5 | GPIO | CIF_D7,SDMMC2_PWREN_M0,I2S1_SDI3_M1 |
| 99 | GPIO4_B3 | GPIO | I2C4_SCL_M0,ETH1_REFCLKO_25M_M1,SPI3_CLK_M0,I2S2_SDO_M1 |
| 100 | GPIO4_B2 | GPIO | I2C4_SDA_M0,GMAC_RXER_M1,SPI3_MOSI_M0,I2S2_SDI_M1 |


## Core Board Pin Definition 3: Pin 101-150

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 101 | GPIO4_B5 | GPIO | I2C2_SCL_M1,I2S1_SDO3_M1 |
| 102 | GPIO4_B4 | GPIO | I2C2_SDA_M1,BT656_CLK_M1 |
| 103 | GPIO3_D1 | GPIO | CIF_D3,SDMMC2_D3_M0,I2S1_SDO0_M1 |
| 104 | GPIO4_A6 | GPIO | GMAC1_TXEN_M1,SPI3_CS0_M0,I2S1_SCLK_RX_M1 |
| 105 | GPIO4_C6 | GPIO | PWM13_M1,SPI3_CS0_M1,UART9_RX_M1,I2S3_SDI_M1 |
| 106 | GPIO4_C5 | GPIO | PWM12_M1,SPI3_MISO_M1,UART9_TX_M1,I2S3_SDO_M1 |
| 107 | GPIO3_A1 | GPIO | BT1120_D0,SPI1_CS0_M1,SDMMC2_D0_M1 |
| 108 | GPIO3_C1 | GPIO | BT1120_D13,SPI1_MOSI_M1,I2S1_SDO2_M2 |
| 109 | GPIO4_C4 | GPIO | SPDIF_TX_M2,I2S3_LRCK_M1 |
| 110 | GPIO4_D1 | GPIO | HDMITX_CEC_M0,SPI3_CS1_M1 |
| 111 | GPIO4_D0 | GPIO | HDMITX_SDA,I2C5_SDA_M1 |
| 112 | GPIO4_C7 | GPIO | HDMITX_SCL,I2C5_SCL_M1 |
| 113 | GPIO3_C2 | GPIO | BT1120_D14,SPI1_MISO_M1,UART5_TX_M1,I2S1_SDO3_M2 |
| 114 | GPIO3_C3 | GPIO | BT1120_D15,SPI1_CLK_M1,UART5_RX_M1, I2S1_SCLK_RX_M2 |
| 115 | USB2_HOST2_DM | USB差分对 | USB2_HOST2_DM |
| 116 | USB2_HOST2_DP | USB差分对 | USB2_HOST2_DP |
| 117 | USB2_HOST3_DM | USB差分对 | USB2_HOST3_DM |
| 118 | USB2_HOST3_DP | USB差分对 | USB2_HOST3_DP |
| 119 | GPIO3_C0 | GPIO | PWM13_M0,GMAC1_MCLKINOUT_M0,UART3_RX_M1,PDM_SDI3_M2 |
| 120 | GPIO4_C3 | GPIO | PWM15_IR_M1,SPI3_MOSI_M1,I2S3_SCLK_M1 |
| 121 | GPIO4_C2 | GPIO | PWM14_M1,SPI3_CLK_M1,I2S3_MCLK_M1 |
| 122 | GPIO3_C5 | GPIO | PWM15_IR_M0,SPDIF_TX_M1,GMAC1_MDIO_M0,UART7_RX_M1,I2S1_LRCK_RX_M2 |
| 123 | GPIO3_C4 | GPIO | PWM14_M0,GMAC1_MDC_M0,UART7_TX_M1 |
| 124 | GPIO3_A7 | GPIO | BT1120_D5,GMAC1_RXCLK_M0,SDMMC2_DET_M1 |
| 125 | GPIO3_B3 | GPIO | BT1120_D9,I2C5_SCL_M0,GMAC1_RXDV_CRS_M0 |
| 126 | GPIO3_B1 | GPIO | PWM8_M0,BT1120_D7,GMAC1_RXD0_M0,UART4_RX_M1 |
| 127 | GPIO3_B2 | GPIO | PWM9_M0,BT1120_D8,GMAC1_RXD1_M0, UART4_TX_M1 |
| 128 | GPIO3_A4 | GPIO | BT1120_D3,GMAC1_RXD2_M0,I2S3_LRCK_M0,SDMMC_D3_M1 |
| 129 | GPIO3_A5 | GPIO | BT1120_D4,GMAC1_RXD3_M0, I2S3_SDO_M0, ,SDMMC_CMD_M1 |
| 130 | GPIO3_B0 | GPIO | BT1120_D6,ETH1_REFCLKO_25M_M0, SDMMC_PWREN_M1 |
| 131 | GPIO3_B7 | GPIO | PWM12_M0,GMAC1_TXEN_M0,UART3_TX_M1 |
| 132 | GPIO3_B5 | GPIO | PWM10_M0,BT1120_D11,I2C3_SCL_M1,GMAC1_TXD0_M0 |
| 133 | GPIO3_B6 | GPIO | PWM11_IR_M0,BT1120_D12,I2C3_SDA_M1,GMAC1_TXD1_M0 |
| 134 | GPIO3_A2 | GPIO | BT1120_D1,GMAC1_TXD2_M0,I2S3_MCLK_M0,SDMMC2_D1_M1 |
| 135 | GPIO3_A3 | GPIO | BT1120_D2,GMAC1_TXD3_M0,I2S3_SCLK_M0,SDMMC2_D2_M1 |
| 136 | GPIO3_A6 | GPIO | BT1120_CLK,GMAC1_TXCLK_M0, I2S3_SDI_M0,SDMMC2_CLK_M1 |
| 137 | MIPI_CSI_RX_D3N | CSI signal | MIPI CSI信号差分对 |
| 138 | MIPI_CSI_RX_D3P | CSI signal | MIPI CSI信号差分对 |
| 139 | MIPI_CSI_RX_D2N | CSI signal | MIPI CSI信号差分对 |
| 140 | MIPI_CSI_RX_D2P | CSI signal | MIPI CSI信号差分对 |
| 141 | MIPI_CSI_RX_D1N | CSI signal | MIPI CSI信号差分对 |
| 142 | MIPI_CSI_RX_D1P | CSI signal | MIPI CSI信号差分对 |
| 143 | MIPI_CSI_RX_D0N | CSI signal | MIPI CSI信号差分对 |
| 144 | MIPI_CSI_RX_D0P | CSI signal | MIPI CSI信号差分对 |
| 145 | MIPI_CSI_RX_CLK1P | CSI signal | MIPI CSI信号差分对 |
| 146 | MIPI_CSI_RX_CLK1N | CSI signal | MIPI CSI信号差分对 |
| 147 | MIPI_CSI_RX_CLK0P | CSI signal | MIPI CSI信号差分对 |
| 148 | MIPI_CSI_RX_CLK0N | CSI signal | MIPI CSI信号差分对 |
| 149 | MIPI_DSI_TX1_D3N | DSI signal | MIPI DSI信号差分对 |
| 150 | MIPI_DSI_TX1_D3P | DSI signal | MIPI DSI信号差分对 |


## Core Board Pin Definition 4: Pin 151-200

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 151 | MIPI_DSI_TX1_D2N | DSI signal | MIPI DSI信号差分对 |
| 152 | MIPI_DSI_TX1_D2P | DSI signal | MIPI DSI信号差分对 |
| 153 | MIPI_DSI_TX1_D1N | DSI signal | MIPI DSI信号差分对 |
| 154 | MIPI_DSI_TX1_D1P | DSI signal | MIPI DSI信号差分对 |
| 155 | MIPI_DSI_TX1_D0N | DSI signal | MIPI DSI信号差分对 |
| 156 | MIPI_DSI_TX1_D0P | DSI signal | MIPI DSI信号差分对 |
| 157 | MIPI_DSI_TX1_CLKP | DSI signal | MIPI DSI信号差分对 |
| 158 | MIPI_DSI_TX1_CLKN | DSI signal | MIPI DSI信号差分对 |
| 159 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 160 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 161 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 162 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 163 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 164 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 165 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 166 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 167 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 168 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | DSI或LVDS信号线 | DSI或LVDS差分对，通过程序选择 |
| 169 | HDMI_TX_HPDIN | HDMI耳机检测管脚 |  |
| 170 | HDMI_TXCLKN_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 171 | HDMI_TXCLKP_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 172 | HDMI_TX0N_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 173 | HDMI_TX0P_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 174 | HDMI_TX1N_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 175 | HDMI_TX1P_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 176 | HDMI_TX2N_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 177 | HDMI_TX2P_PORT | HDMI信号线 | HDMI高速信号差分对 |
| 178 | PCIE20_REFCLKP | PCIE信号线 | PCIE高速信号差分对 |
| 179 | PCIE20_REFCLKN | PCIE信号线 | PCIE高速信号差分对 |
| 180 | PCIE20_RXP | PCIE信号线 | PCIE高速信号差分对 |
| 181 | PCIE20_RXN | PCIE信号线 | PCIE高速信号差分对 |
| 182 | PCIE20_TXN | PCIE信号线 | PCIE高速信号差分对 |
| 183 | PCIE20_TXP | PCIE信号线 | PCIE高速信号差分对 |
| 184 | USB3_HOST1_SSTXP | USB信号线 | USB高速信号差分对 |
| 185 | USB3_HOST1_SSTXN | USB信号线 | USB高速信号差分对 |
| 186 | USB3_HOST1_SSRXP | USB信号线 | USB高速信号差分对 |
| 187 | USB3_HOST1_SSRXN | USB信号线 | USB高速信号差分对 |
| 188 | USB3_HOST1_DP | USB信号线 | USB高速信号差分对 |
| 189 | USB3_HOST1_DM | USB信号线 | USB高速信号差分对 |
| 190 | USB_OTG0_DM | USB信号线 | USB高速信号差分对 |
| 191 | USB_OTG0_DP | USB信号线 | USB高速信号差分对 |
| 192 | USB_OTG0_VBUSDET | OTG检测脚 | 用于OTG管脚识别 |
| 193 | USB_OTG0_ID | OTG ID脚 | 用于HOST和DEVICE状态判断 |
| 194 | GPIO0_B6 | GPIO | PWM2_M1,I2C2_SDA_M0,SPI0_MOSI_M0 |
| 195 | GPIO0_B7 | GPIO | PWM0_M0 |
| 196 | GPIO0_C6 | GPIO | PWM7_IR,SPI0_CS0_M0 |
| 197 | GPIO0_D1 | GPIO | UART2_TX_M0，默认为调试串口 |
| 198 | GPIO0_D0 | GPIO | UART2_RX_M0，默认为调试串口 |
| 199 | GPIO0_C7 | GPIO | PWM0_M1,UART0_CTS |
| 200 | GPIO0_C5 | GPIO | PWM6,SPI0_MISO_M0 |
