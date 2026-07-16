---
sidebar_position: 3
title: 引脚定义
description: i6818CV3 核心板 CON1、CON4、J32 和 J31 引脚定义
---

# 引脚定义

i6818 核心板采用双 100PIN 板对板连接器，核心板尺寸为 50mm × 40mm。i6818CV3 与 i4418CV3 管脚定义保持兼容。

## 核心板引脚定义 CON1

| 引脚编号 | 信号 | 引脚编号 | 信号 |
| --- | --- | --- | --- |
| 1 | VBAT | 51 | GPIOC7 |
| 2 | DCIN | 52 | UARTRXD2 |
| 3 | VBAT | 53 | MCU_I2S_MCLK |
| 4 | DCIN | 54 | UARTTXD0 |
| 5 | VBAT | 55 | MCU_BACKLIGHT_PWM |
| 6 | DCIN | 56 | UARTRXD0 |
| 7 | VBAT | 57 | MCU_SPITXD0 |
| 8 | DCIN | 58 | UARTRXD1 |
| 9 | VBAT | 59 | MCU_SPICLK0 |
| 10 | GND | 60 | UARTTXD1 |
| 11 | VBAT_SYS | 61 | MCU_SPIFRM0 |
| 12 | GND | 62 | GPIOB8 |
| 13 | VBAT_SYS | 63 | MCU_I2S_BCK |
| 14 | GND | 64 | GPIOA28 |
| 15 | VBAT_SYS | 65 | GPIOC11 |
| 16 | GND | 66 | MCU_I2S_LRCK |
| 17 | VBAT_SYS | 67 | GPIOC12 |
| 18 | GND | 68 | MCU_SPIRXD0 |
| 19 | MCU_SD0 | 69 | MCU_VG_EN |
| 20 | MCU_SD1 | 70 | MCU_SDA_1 |
| 21 | MCU_SD1_D3 | 71 | IR |
| 22 | MCU_SD0_D3 | 72 | MCU_SCL_1 |
| 23 | MCU_SD1_D2 | 73 | CAM_RST |
| 24 | MCU_SD0_CMD | 74 | MCU_I2S_SDIN |
| 25 | MCU_SD1_D1 | 75 | CAM_PN |
| 26 | MCU_SD0_D1 | 76 | MCU_I2S_SDOUT |
| 27 | MCU_SD1_D0 | 77 | CAM_PD |
| 28 | MCU_SD0_CD | 78 | PWM2 |
| 29 | MCU_SD1_CD | 79 | CAM_D7 |
| 30 | MCU_SD0_D2 | 80 | SPDIF_RX |
| 31 | MCU_SD1_CLK | 81 | CAM_V |
| 32 | MCU_SD0_CLK | 82 | VCC1P8_RTC |
| 33 | MCU_SD1_CMD | 83 | CAM_D3 |
| 34 | MCU_SD0_D0 | 84 | MCU_NRESETOUT |
| 35 | MCU_SEN0_INT | 85 | CAM_H |
| 36 | MCU_SCL_2 | 86 | MCU_PWRKEY |
| 37 | MCU_HP_DET | 87 | CAM_CLK |
| 38 | MCU_SDA_0 | 88 | ADC1 |
| 39 | MCU_TOUCH_INT | 89 | CAM_D6 |
| 40 | MCU_SCL_0 | 90 | MCU_NRESETIN |
| 41 | MCU_KEY_VOLUP | 91 | CAM_D5 |
| 42 | MCU_OTG_PWRON | 92 | ADC0 |
| 43 | MCU_KEY_VOLDN | 93 | CAM_D2 |
| 44 | MCU_SDA_2 | 94 | PHY_RST |
| 45 | SPICLK2 | 95 | CAM_D0 |
| 46 | UARTTXD3 | 96 | GMAC_MDIO |
| 47 | SPDIF_TX | 97 | CAM_D4 |
| 48 | UARTRXD3 | 98 | PHY_INT |
| 49 | GPIOC8 | 99 | CAM_D1 |
| 50 | UARTTXD2 | 100 | GMAC_TXCLK |


## 核心板引脚定义 CON4

| 引脚编号 | 信号 | 引脚编号 | 信号 |
| --- | --- | --- | --- |
| 1 | DC5V_OTG | 51 | LCD_B4 |
| 2 | VCC3P3_SYS | 52 | MCU_LVDS_Y1M |
| 3 | DC5V_OTG | 53 | LCD_HSYNC |
| 4 | VCC3P3_SYS | 54 | MCU_LVDS_Y1P |
| 5 | GPIOB9 | 55 | LCD_VSYNC |
| 6 | GND | 56 | MCU_LVDS_Y0M |
| 7 | MCU_CAM1_D7 | 57 | LCD_G0 |
| 8 | MCU_USB_HOST_D- | 58 | MCU_LVDS_Y0P |
| 9 | MCU_CAM1_D4 | 59 | LCD_B0 |
| 10 | MCU_USB_HOST_D+ | 60 | GND |
| 11 | MCU_CAM1_D3 | 61 | LCD_DE |
| 12 | MCU_USB+ | 62 | MIPIDSI_DP3 |
| 13 | MCU_CAM1_D1 | 63 | LCD_G5 |
| 14 | MCU_USB- | 64 | MIPIDSI_DN3 |
| 15 | MCU_CAM1_D2 | 65 | LCD_B1 |
| 16 | MCU_USB_ID | 66 | MIPIDSI_DP2 |
| 17 | MCU_CAM1_D0 | 67 | LCD_B2 |
| 18 | MCU_HDMI_CEC | 68 | MIPIDSI_DN2 |
| 19 | MCU_CAM1_MCLK | 69 | LCD_B5 |
| 20 | MCU_HDMI_HPD | 70 | MIPIDSI_DP1 |
| 21 | LCD_G3 | 71 | LCD_B3 |
| 22 | MCU_HDMI_TXCP | 72 | MIPIDSI_DN1 |
| 23 | LCD_G7 | 73 | LCD_B7 |
| 24 | MCU_HDMI_TXCN | 74 | MIPIDSI_DP0 |
| 25 | LCD_G2 | 75 | LCD_G4 |
| 26 | MCU_HDMI_TX0P | 76 | MIPIDSI_DN0 |
| 27 | LCD_G6 | 77 | GMAC_RXCLK |
| 28 | MCU_HDMI_TX0N | 78 | MIPIDSI_DPCLK |
| 29 | LCD_R0 | 79 | GMAC_RXCLK |
| 30 | MCU_HDMI_TX1P | 80 | MIPIDSI_DNCLK |
| 31 | LCD_R3 | 81 | GMAC_RXD2 |
| 32 | MCU_HDMI_TX1N | 82 | MIPICSI_DN3 |
| 33 | LCD_R1 | 83 | GMAC_RXD3 |
| 34 | MCU_HDMI_TX2P | 84 | MIPICSI_DP3 |
| 35 | LCD_R2 | 85 | GMAC_RXD1 |
| 36 | MCU_HDMI_TX2N | 86 | MIPICSI_DN2 |
| 37 | LCD_R4 | 87 | GMAC_RXD0 |
| 38 | GND | 88 | MIPICSI_DP2 |
| 39 | LCD_CLK | 89 | GMAC_MDC |
| 40 | MCU_LVDS_Y3M | 90 | MIPICSI_DN1 |
| 41 | LCD_R7 | 91 | GMAC_TXEN |
| 42 | MCU_LVDS_Y3P | 92 | MIPICSI_DP1 |
| 43 | LCD_R5 | 93 | GMAC_TXD3 |
| 44 | MCU_LVDS_CLKM | 94 | MIPICSI_DN0 |
| 45 | LCD_G1 | 95 | GMAC_TXD1 |
| 46 | MCU_LVDS_CLKP | 96 | MIPICSI_DP0 |
| 47 | LCD_R6 | 97 | GMAC_TXD2 |
| 48 | MCU_LVDS_Y2M | 98 | MIPICSI_DNCLK |
| 49 | LCD_B6 | 99 | GMAC_TXD0 |
| 50 | MCU_LVDS_Y2P | 100 | MIPICSI_DPCLK |


## J32 DEBUG 扩展口

| PIN脚 | 信号 | PIN脚 | 信号 |
| --- | --- | --- | --- |
| 1 | VCC3P3_SYS | 6 | UARTTXD4 |
| 2 | MCU_SCL_0 | 7 | PWM2 |
| 3 | MCU_SDA_0 | 8 | UARTRXD0 |
| 4 | GND | 9 | UARTTXD0 |
| 5 | UARTRXD4 |  |  |


## J31 GPIO 扩展口

| PIN脚 | 信号 | PIN脚 | 信号 |
| --- | --- | --- | --- |
| 1 | VCC3P3_SYS | 6 | UARTTXD3_0 |
| 2 | UARTRXD1 | 7 | GPIOC7 |
| 3 | UARTTXD1 | 8 | UARTRXD2_0 |
| 4 | GND | 9 | UARTTXD2_0 |
| 5 | UARTRXD3_0 |  |  |

