---
sidebar_position: 2
title: 引脚定义
description: X3576核心板引脚定义
---

# 引脚定义

本章节列出 X3576 核心板引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、电压域以及上电默认状态。

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 1 | GMAC0_RXD2_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_D3_d，1.8V 电<br />平 |
| 2 | GMAC0_RXD3_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_D2_d，1.8V 电<br />平 |
| 3 | GMAC0_RXCLK_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_D1_d，1.8V 电<br />平 |
| 4 | GMAC0_TXCLK_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B6_d，1.8V电平 |
| 5 | GMAC0_TXCTL_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B3_d，1.8V电平 |
| 6 | GMAC0_TXD0_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B5_d，1.8V电平 |
| 7 | GMAC0_TXD1_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B4_d，1.8V电平 |
| 8 | GMAC0_TXD2_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_C3_d，1.8V电平 |
| 9 | GMAC0_TXD3_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_C2_d，1.8V电平 |
| 10 | GND | 系统地 |  |
| 11 | GMAC0_RSTN | 网络 PHY/GPIO 复用接口<br />信号 | GPIO2_B3_d，3.3V电平 |
| 12 | GMAC0_MDC_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_A6_d，1.8V 电<br />平 |
| 13 | GMAC0_MDIO_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_A5_d，1.8V 电<br />平 |
| 14 | MIPI_DPHY_CSI_CAM1_P<br />DN_H | GPIO | GPIO3_B0_d，1.8V电平 |
| 15 | MIPI_DPHY_CSI_CAM2_P<br />DN_H | GPIO | GPIO3_D4_d，1.8V 电<br />平 |
| 16 | I2C4_SDA_M3_MIPI_CAM<br />0/2 | I2C/GPIO 复用接口信号 | GPIO3_B7_d，1.8V电平 |
| 17 | MIPI_DPHY_CSI_CAM0_P<br />WREN_H | GPIO | GPIO3_D0_d，1.8V 电<br />平 |
| 18 | RK628_HDMIRX_INT_H | GPIO | GPIO4_A0_d，1.8V 电<br />平 |
| 19 | I2C5_SDA_M3_MIPI_CAM | I2C/GPIO 复用接口信号 | GPIO3_C1_d，1.8V电平 |
| 20 | MIPI_DPHY_CSI_CAM2_R<br />ST_H | GPIO | GPIO3_D6_d，1.8V 电<br />平 |
| 21 | MIPI_DCPHY_CSI_CAM0_<br />RST_H | GPIO | GPIO3_D5_d，1.8V 电<br />平 |
| 22 | I2C4_SCL_M3_MIPI_CAM<br />0/2 | I2C/GPIO 复用接口信号 | GPIO3_C0_d，1.8V电平 |
| 23 | I2C5_SCL_M3_MIPI_CAM<br />1/HDMI_RX | I2C/GPIO 复用接口信号 | GPIO3_C4_d，1.8V电平 |
| 24 | MIPI_DCPHY_CSI_CAM0_<br />CLKOUT | GPIO | GPIO3_D7_d，1.8V 电<br />平 |
| 25 | MIPI_DPHY_CSI_CAM2_C<br />LKOUT | GPIO | GPIO4_A1_d，1.8V 电<br />平 |
| 26 | MIPI_DPHY_CSI_CAM1_P<br />WREN_H | GPIO | GPIO3_C5_d，1.8V电平 |
| 27 | MIPI_DCPHY_CSI_CAM0_<br />PDN_H | GPIO | GPIO3_C7_d，1.8V电平 |
| 28 | MIPI_DPHY_CSI_CAM2_P<br />WREN_H | GPIO | GPIO3_C6_d，1.8V电平 |
| 29 | SAI1_SCLK_M0 | I2S/GPIO 复用接口信号 | GPIO4_A3_d，3.3V 电<br />平 |
| 30 | SAI1_MCLK_M0 | I2S/GPIO 复用接口信号 | GPIO4_A2_d，3.3V 电<br />平 |
| 31 | I2C3_SDA_M0_AUDIO | I2C/GPIO 复用接口信号 | GPIO4_B4_d，3.3V电平 |
| 32 | I2C3_SCL_M0_AUDIO | I2C/GPIO 复用接口信号 | GPIO4_B5_d，3.3V电平 |
| 33 | SAI1_LRCK_M0 | I2S/GPIO 复用接口信号 | GPIO4_A5_d，3.3V 电<br />平 |
| 34 | SAI1_SDI0_M0 | I2S/GPIO 复用接口信号 | GPIO4_B3_d，3.3V电平 |
| 35 | SAI1_SDO2_M0 | I2S/GPIO 复用接口信号 | GPIO4_B1_d，3.3V电平 |
| 36 | PDM1_CLK1_M1_LOOPBAC<br />K | PDM/GPIO 复用接口信号 | GPIO4_B0_d，3.3V电平 |
| 37 | PDM1_SDI1_M1_LOOPBAC<br />K | PDM/GPIO 复用接口信号 | GPIO4_B2_d，3.3V电平 |
| 38 | SAI4_SDI_M0 | I2S/GPIO 复用接口信号 | GPIO4_A7_d，3.3V 电<br />平 |
| 39 | SAI4_LRCK_M0 | I2S/GPIO 复用接口信号 | GPIO4_A6_d，3.3V 电<br />平 |
| 40 | SAI4_SCLK_M0 | I2S/GPIO 复用接口信号 | GPIO4_A4_d，3.3V 电<br />平 |
| 41 | N312406200 | GPIO | GPIO4_D0_d，1.8V 电<br />平 |
| 42 | 4G_DISABLE | GPIO | GPIO4_C7_d，3.3V电平 |
| 43 | HDMI_TX_ON_H | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4_C6_d，3.3V电平 |
| 44 | TYPEC_DPTX_AUX_PUPDC<br />TL2 | GPIO | GPIO4_C5_d，3.3V电平 |
| 45 | HDMI_TX_HPDIN_M0 | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4_C1_d，3.3V电平 |
| 46 | HDMI_TX_SDA | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4_C3_d，3.3V电平 |
| 47 | HDMI_TX_SCL | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4_C2_d，3.3V电平 |
| 48 | HDMI_TX_CEC_M0 | HDMI 输出/GPIO 复用接<br />口信号 | GPIO4_C0_d，3.3V电平 |
| 49 | TYPEC_DPTX_AUX_PUPDC<br />TL1 | GPIO | GPIO4_C4_d，3.3V电平 |
| 50 | USB2_OTG0_VBUSDET | USB 插入检测信号 | 不可用作 GPIO 口 |
| 51 | USB2_OTG0_ID | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 52 | GND | 系统地 |  |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 53 | DP_TX_AUXP | DP1.4 接口信号 | 不可用作 GPIO 口 |
| 54 | DP_TX_AUXN | DP1.4 接口信号 | 不可用作 GPIO 口 |
| 55 | USB2_OTG0_DP | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 56 | USB2_OTG0_DM | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 57 | USB3_OTG0_SSRX1P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 58 | USB3_OTG0_SSRX1N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 59 | USB3_OTG0_SSTX1N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 60 | USB3_OTG0_SSTX1P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 61 | USB3_OTG0_SSRX2P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 62 | USB3_OTG0_SSRX2N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 63 | USB3_OTG0_SSTX2N | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 64 | USB3_OTG0_SSTX2P | USB3.0/DP1.4 接口信号 | 不可用作 GPIO 口 |
| 65 | USB2_HOST1_DP | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 66 | USB2_HOST1_DM | USB2.0 接口信号 | 不可用作 GPIO 口 |
| 67 | GND | 系统地 |  |
| 68 | MIPI_DPHY_DSI_TX_D0N | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 69 | MIPI_DPHY_DSI_TX_D0P | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 70 | MIPI_DPHY_DSI_TX_D1N | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 71 | MIPI_DPHY_DSI_TX_D1P | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 72 | MIPI_DPHY_DSI_TX_CLK<br />N | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 73 | MIPI_DPHY_DSI_TX_CLK<br />P | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 74 | MIPI_DPHY_DSI_TX_D2N | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 75 | MIPI_DPHY_DSI_TX_D2P | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 76 | MIPI_DPHY_DSI_TX_D3N | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 77 | MIPI_DPHY_DSI_TX_D3P | MIPILCD 接口信号 | 不可用作 GPIO 口 |
| 78 | MIPI_DPHY_CSI0_RX_D0<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 79 | MIPI_DPHY_CSI0_RX_D0<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 80 | MIPI_DPHY_CSI0_RX_D1<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 81 | MIPI_DPHY_CSI0_RX_D1<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 82 | MIPI_DPHY_CSI0_RX_CL<br />KN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 83 | MIPI_DPHY_CSI0_RX_CL<br />KP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 84 | MIPI_DPHY_CSI0_RX_D2<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 85 | MIPI_DPHY_CSI0_RX_D2<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 86 | MIPI_DPHY_CSI0_RX_D3<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 87 | MIPI_DPHY_CSI0_RX_D3<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 88 | GND | 系统地 |  |
| 89 | HDMI_TX_SBDP | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 90 | HDMI_TX_SBDN | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 91 | HDMI_TX_D3P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 92 | HDMI_TX_D3N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 93 | HDMI_TX_D0N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 94 | HDMI_TX_D0P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 95 | HDMI_TX_D1N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 96 | HDMI_TX_D1P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 97 | HDMI_TX_D2N | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 98 | HDMI_TX_D2P | HDMI 输出接口信号 | 不可用作 GPIO 口 |
| 99 | MIPI_DPHY_CSI1_RX_D3<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 100 | MIPI_DPHY_CSI1_RX_D3<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 101 | MIPI_DPHY_CSI1_RX_D2 | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 102 | MIPI_DPHY_CSI1_RX_D2<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 103 | MIPI_DPHY_CSI1_RX_D1<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 104 | MIPI_DPHY_CSI1_RX_D1<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 105 | MIPI_DPHY_CSI1_RX_D0<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 106 | MIPI_DPHY_CSI1_RX_D0<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 107 | MIPI_DPHY_CSI1_RX_CL<br />KP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 108 | MIPI_DPHY_CSI1_RX_CL<br />KN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 109 | GND | 系统地 |  |
| 110 | TP_INT_L | GPIO | GPIO0_C5_d，3.3V电平 |
| 111 | PCIE0_PWREN_H | GPIO | GPIO0_D3_d，3.3V 电<br />平 |
| 112 | USB_HOST_PWREN_H | GPIO | GPIO0_C7_d，3.3V电平 |
| 113 | PCIE0_WAKEN_M0 | GPIO | GPIO0_D2_d，3.3V 电<br />平 |
| 114 | LCD_PWREN_H | GPIO | GPIO0_C6_d，3.3V电平 |
| 115 | USB_HUB_RST | GPIO | GPIO0_C3_d，3.3V电平 |
| 116 | RTC_INT_L |  | GPIO0_A5_d，1.8V 电<br />平 |
| 117 | REF_CLK0_OUT |  | GPIO0_A0_d，1.8V 电<br />平 |
| 118 | 32KOUT_RTC2SOC |  | GPIO0_A2_d，1.8V 电<br />平 |
| 119 | GND | 系统地 |  |
| 120 | PCIE0_REFCLKP | PCIE 接口信号 | 不可用作 GPIO 口 |
| 121 | PCIE0_REFCLKN | PCIE 接口信号 | 不可用作 GPIO 口 |
| 122 | PCIE0_RXP | PCIE/SATA 接口信号 | 不可用作 GPIO 口 |
| 123 | PCIE0_RXN | PCIE/SATA 接口信号 | 不可用作 GPIO 口 |
| 124 | PCIE0_TXN | PCIE/SATA 接口信号 | 不可用作 GPIO 口 |
| 125 | PCIE0_TXP | PCIE/SATA 接口信号 | 不可用作 GPIO 口 |
| 126 | USB3_HOST1_SSTXP | PCIE/USB3.0/SATA 复用 | 不可用作 GPIO 口 |
| 127 | USB3_HOST1_SSTXN | PCIE/USB3.0/SATA 复 用<br />接口信号 | 不可用作 GPIO 口 |
| 128 | USB3_HOST1_SSRXP | PCIE/USB3.0/SATA 复 用<br />接口信号 | 不可用作 GPIO 口 |
| 129 | USB3_HOST1_SSRXN | PCIE/USB3.0/SATA 复 用<br />接口信号 | 不可用作 GPIO 口 |
| 130 | MIPI_DPHY_CSI3_RX_CL<br />KP | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 131 | MIPI_DPHY_CSI3_RX_CL<br />KN | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 132 | MIPI_DPHY_CSI3_RX_D3<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 133 | MIPI_DPHY_CSI3_RX_D3<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 134 | MIPI_DPHY_CSI3_RX_D2<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 135 | MIPI_DPHY_CSI3_RX_D2<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 136 | MIPI_DPHY_CSI3_RX_D1<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 137 | MIPI_DPHY_CSI3_RX_D1<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 138 | MIPI_DPHY_CSI3_RX_D0<br />N | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 139 | MIPI_DPHY_CSI3_RX_D0<br />P | MIPI 摄像头接口信号 | 不可用作 GPIO 口 |
| 140 | GND | 系统地 |  |
| 141 | PWM0_CH0_M0_IR | GPIO | GPIO0_C4_d，3.3V电平 |
| 142 | WIFI_PWREN_L | GPIO | GPIO0_D1_d，3.3V 电<br />平 |
| 143 | SDMMC0_PWREN_H | GPIO | GPIO0_B6_d，3.3V电平 |
| 144 | TP_RST_L | GPIO | GPIO0_D0_d，3.3V 电<br />平 |
| 145 | I2C0_SCL_M1_TP | I2C/GPIO 复用接口信号 | GPIO0_C1_d，3.3V电平 |
| 146 | I2C0_SDA_M1_TP | I2C/GPIO 复用接口信号 | GPIO0_C2_d，3.3V电平 |
| 147 | BT_WAKE_HOST_H | GPIO | GPIO0_B1_z，1.8V电平 |
| 148 | USBCC_INT_L | GPIO | GPIO0_B4_d，3.3V电平 |
| 149 | LCD_BL_PWM1_CH1_M0 | GPIO | GPIO0_B5_d，3.3V电平 |
| 150 | WIFI_WAKE_HOST_H | GPIO | GPIO0_B0_z，1.8V电平 |
| 151 | SDMMC0_DET_L | GPIO | GPIO0_A7_u，1.8V 电<br />平 |
| 152 | I2C2_SDA_M0_CC_RTC | I2C/GPIO 复用接口信号 | GPIO0_C0_d，3.3V电平 |
| 153 | I2C2_SCL_M0_CC_RTC | I2C/GPIO 复用接口信号 | GPIO0_B7_d，3.3V电平 |
| 154 | UART0_RX_M0_DEBUG | UART/GPIO 复用接口信号 | GPIO0_D5_u，3.3V 电<br />平 |
| 155 | UART0_TX_M0_DEBUG | UART/GPIO 复用接口信号 | GPIO0_D4_u，3.3V 电<br />平 |
| 156 | VCC_1V8_S3 | 核心板 1.8V 输出 | 可给底板音频 CODEC<br />和 PHYIO 供电 |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
|---|---|---|---|
| 157 | GND | 系统地 |  |
| 158 | GND | 系统地 |  |
| 159 | VCC5V0_SYS_S5 | 核心板 5V 输入 | 建议电流 3A 或以上，<br />纹波控制在 100MV 内 |
| 160 | VCC5V0_SYS_S5 | 核心板 5V 输入 | 建议电流 3A 或以上，<br />纹波控制在 100MV 内 |
| 161 | VCC_3V3_S0 | 核心板 3.3V 输出 | 限制电流 1A，可给底板<br />SDIO、mipi 外设芯片供<br />电 |
| 162 | RESET_L | 系统复位信号 | 不可用作 GPIO 口 |
| 163 | PWRON_L | 系统使能信号 | 不可用作 GPIO 口 |
| 164 | PMIC_EXT_EN_OUT | PMIC使能信号 | 不可用作 GPIO 口 |
| 165 | SDMMC1_D0_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIO1_B4_d，1.8V电平 |
| 166 | SDMMC1_D1_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIO1_B5_d，1.8V电平 |
| 167 | SDMMC1_CMD_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIO1_C0_d，1.8V电平 |
| 168 | SDMMC1_CLK_M0 | SDMMC/GPIO 复用接口<br />信号 | GPIO1_C1_d，1.8V电平 |
| 169 | GND | 系统地 |  |
| 170 | PCIE0_PERSTN_WIFI | GPIO | GPIO1_B7_d，1.8V电平 |
| 171 | UART4_RX_M1 | UART/GPIO 复用接口信<br />号 | GPIO1_C5_d，1.8V电平 |
| 172 | UART4_RTSN_M1 | UART/GPIO 复用接口信<br />号 | GPIO1_C2_u，1.8V电平 |
| 173 | SAI2_LRCK_M0 | I2S/GPIO 复用接口信号 | GPIO1_D2_d，1.8V 电<br />平 |
| 174 | SAI2_SDO_M0 | I2S/GPIO 复用接口信号 | GPIO1_D0_d，1.8V 电<br />平 |
| 175 | SAI2_SDI_M0 | I2S/GPIO 复用接口信号 | GPIO1_D3_d，1.8V 电<br />平 |
| 176 | SAI2_SCLK_M0 | I2S/GPIO 复用接口信号 | GPIO1_D1_d，1.8V 电<br />平 |
| 177 | CLK1_32K_OUT_WIFI |  | GPIO1_D5_d，1.8V 电<br />平 |
| 178 | HOST_WAKE_BT_H | GPIO | GPIO1_D4_d，1.8V 电<br />平 |
| 179 | UART4_CTSN_M1 | UART/GPIO 复用接口信<br />号 | GPIO1_C3_u，1.8V电平 |
| 180 | UART4_TX_M1 | UART/GPIO 复用接口信<br />号 | GPIO1_C4_d，1.8V电平 |
| 181 | BT_REG_ON_H | GIPO | GPIO1_C7_d，1.8V电平 |
| 182 | PCIE0_CLKREQN_M1_WIF<br />I | GPIO | GPIO1_B6_d，1.8V电平 |
| 183 | WIFI_REG_ON_H | GPIO | GPIO1_C6_d，1.8V电平 |
| 184 | SARADC_VIN1_KEY/RECO<br />VERY | ADC | SARADC |
| 185 | SARADC_VIN0_BOOT | ADC | SARADC |
| 186 | SDMMC0_D1 | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A1_d，3.3V 电<br />平 |
| 187 | SDMMC0_D0 | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A0_d，3.3V 电<br />平 |
| 188 | SDMMC0_CMD | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A4_d，3.3V 电<br />平 |
| 189 | SDMMC0_D3 | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A3_d，3.3V 电<br />平 |
| 190 | SDMMC0_D2 | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A2_d，3.3V 电<br />平 |
| 191 | SDMMC0_CLK | SDMMC/GPIO 复用接口<br />信号 | GPIO2_A5_d，3.3V 电<br />平 |
| 192 | SARADC_VIN3_HP_HOOK | ADC | SARADC |
| 193 | RK628_HDMIRX_RST_L | GPIO | GPIO2_B5_d，3.3V电平 |
| 194 | PCIE0_PERSTN | GPIO | GPIO2_B1_d，3.3V电平 |
| 195 | I2C7_SDA_M1_SENSOR | I2C/GPIO 复用接口信号 | GPIO3_A1_d，3.3V 电<br />平 |
| 196 | I2C7_SCL_M1_SENSOR | I2C/GPIO 复用接口信号 | GPIO3_A0_d，3.3V 电<br />平 |
| 197 | USB_OTG0_PWREN_H | GPIO | GPIO2_B6_d，3.3V电平 |
| 198 | SPDIF_TX1_M1 | GPIO | GPIO3_A3_d，3.3V 电<br />平 |
| 199 | MIPI_TE_M1 | GPIO | GPIO3_A2_d，3.3V 电 |
| 200 | HP_CTL_H | GPIO | GPIO2_A6_d，3.3V 电<br />平 |
| 201 | HP_DET_L | GPIO | GPIO2_B7_d，3.3V电平 |
| 202 | SPK_CTL_H | GPIO | GPIO2_A7_d，3.3V 电<br />平 |
| 203 | GSENSOR_INT_L | GPIO | GPIO2_B0_d，3.3V电平 |
| 204 | PCIE0_CLKREQN_M0 | GPIO | GPIO2_B2_d，3.3V电平 |
| 205 | ETH_CLK0_25M_OUT_M0 | GPIO | GPIO3_A4_d，1.8V 电<br />平 |
| 206 | GMAC0_RXD0_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_A7_d，1.8V 电<br />平 |
| 207 | GMAC0_RXCTL_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B2_d，1.8V电平 |
| 208 | GMAC0_RXD1_M0 | 网络 PHY/GPIO 复用接口<br />信号 | GPIO3_B1_d，1.8V电平 |
