---
sidebar_position: 4
title: Pin Definition
description: Complete X6818 core-board and expansion connector pin definition
---

# Pin Definition

The X6818CV3 core board is downward compatible with X4418CV3, and the core-board pin definition is the same. The tables below preserve the pin definitions and expansion connector definitions from the hardware manual for carrier-board design, wiring verification, interface debugging, and device-tree pin-mux checks.

:::note
X6818 has many interface resources. LCD, LVDS, MIPI, Camera, UART, SPI, ADC, and GPIO may have pin-mux or board-level connection dependencies. Check hardware connections and pin-mux conflicts before modifying the carrier board or device tree.
:::

## Core Board Pin Definition 1

| Pin No. | Signal | Pin No. | Signal |
| --- | --- | --- | --- |
| 1 | LCD_PWM | 28 | LCD_CLK |
| 2 | LCD_EN | 29 | LCD_DE |
| 3 | LCD_RESET | 30 | LCD_HSYNC |
| 4 | LCD_R0 | 31 | LCD_VSYNC |
| 5 | LCD_R1 | 32 | ALIVEGPIO5 |
| 6 | LCD_R2 | 33 | MCU_SDA_0 |
| 7 | LCD_R3 | 34 | MCU_SCL_0 |
| 8 | LCD_R4 | 35 | MCU_HDMI_CEC |
| 9 | LCD_R5 | 36 | MCU_HDMI_HPD |
| 10 | LCD_R6 | 37 | MCU_HDMI_TXCN |
| 11 | LCD_R7 | 38 | MCU_HDMI_TXCP |
| 12 | LCD_G0 | 39 | MCU_HDMI_TX0N |
| 13 | LCD_G1 | 40 | MCU_HDMI_TX0P |
| 14 | LCD_G2 | 41 | MCU_HDMI_TX1N |
| 15 | LCD_G3 | 42 | MCU_HDMI_TX1P |
| 16 | LCD_G4 | 43 | MCU_HDMI_TX2N |
| 17 | LCD_G5 | 44 | MCU_HDMI_TX2P |
| 18 | LCD_G6 | 45 | GND |
| 19 | LCD_G7 | 46 | MCU_LVDS_CLKM |
| 20 | LCD_B0 | 47 | MCU_LVDS_CLKM |
| 21 | LCD_B1 | 48 | MCU_LVDS_Y3M |
| 22 | LCD_B2 | 49 | MCU_LVDS_Y3P |
| 23 | LCD_B3 | 50 | MCU_LVDS_Y2M |
| 24 | LCD_B4 | 51 | MCU_LVDS_Y2P |
| 25 | LCD_B5 | 52 | MCU_LVDS_Y1M |
| 26 | LCD_B6 | 53 | MCU_LVDS_Y1P |
| 27 | LCD_B7 | 54 | MCU_LVDS_Y0M |


## Core Board Pin Definition 2

| Pin No. | Signal | Pin No. | Signal |
| --- | --- | --- | --- |
| 55 | MCU_LVDS_Y0P | 73 | MIPICSI_DN0 |
| 56 | MIPIDSI_DP3 | 74 | MIPICSI_DP0 |
| 57 | MIPIDSI_DN3 | 75 | MIPICSI_DNCLK |
| 58 | MIPIDSI_DP2 | 76 | MIPICSI_DPCLK |
| 59 | MIPIDSI_DN2 | 77 | CAM_H |
| 60 | MIPIDSI_DP1 | 78 | CAM_V |
| 61 | MIPIDSI_DN1 | 79 | CAM_CLK |
| 62 | MIPIDSI_DP0 | 80 | CAM_D0 |
| 63 | MIPIDSI_DN0 | 81 | CAM_D1 |
| 64 | MIPIDSI_DPCLK | 82 | CAM_D2 |
| 65 | MIPIDSI_DNCLK | 83 | CAM_D3 |
| 66 | MIPIDSI_VREG | 84 | CAM_D4 |
| 67 | MIPICSI_DN3 | 85 | CAM_D5 |
| 68 | MIPICSI_DP3 | 86 | CAM_D6 |
| 69 | MIPICSI_DN2 | 87 | CAM_D7 |
| 70 | MIPICSI_DP2 | 88 | MCU_CAM1_MCLK |
| 71 | MIPICSI_DN1 | 89 | CAM_PN |
| 72 | MIPICSI_DP1 | 90 | CAM_RST |


## Core Board Pin Definition 3

| Pin No. | Signal | Pin No. | Signal |
| --- | --- | --- | --- |
| 91 | CAM_PD | 118 | UARTTXD1 |
| 92 | GPIOB8 | 119 | UARTRXD0 |
| 93 | MCU_CAM1_D7 | 120 | UARTTXD0 |
| 94 | MCU_CAM1_D4 | 121 | GND |
| 95 | MCU_CAM1_D3 | 122 | VBAT |
| 96 | MCU_CAM1_D2 | 123 | VBAT |
| 97 | MCU_CAM1_D1 | 124 | +5V_IN |
| 98 | MCU_CAM1_D0 | 125 | +5V_IN |
| 99 | MCU_I2S_MCLK | 126 | VBAT_SYS |
| 100 | MCU_I2S_BCK | 127 | GND |
| 101 | MCU_I2S_SDIN | 128 | LINK_LED |
| 102 | MCU_I2S_SDOUT | 129 | SPEED_LED |
| 103 | MCU_I2S_LRCK | 130 | MDI0_P |
| 104 | MCU_HP_DET | 131 | MDI0_N |
| 105 | SPDIF_TX | 132 | MDI1_P |
| 106 | SPDIF_RX | 133 | MDI1_N |
| 107 | MCU_KEY_VOLDN | 134 | MDI2_P |
| 108 | MCU_KEY_VOLUP | 135 | MDI2_N |
| 109 | MCU_NRESETIN | 136 | MDI3_P |
| 110 | MCU_PWRKEY | 137 | MDI3_N |
| 111 | GPIOA28 | 138 | USBHSIC_DATA |
| 112 | GPIOB9 | 139 | USBHSIC_STROBE |
| 113 | UARTRXD3 | 140 | USB_HOST_D- |
| 114 | UARTTXD3 | 141 | USB_HOST_D+ |
| 115 | UARTRXD2 | 142 | OTG_USB- |
| 116 | UARTTXD2 | 143 | OTG_USB+ |
| 117 | UARTRXD1 | 144 | USB_ID |


## Core Board Pin Definition 4

| Pin No. | Signal | Pin No. | Signal |
| --- | --- | --- | --- |
| 145 | DC5V_OTG | 163 | MCU_SD1_D0 |
| 146 | SEN0_INT | 164 | MCU_SD1_D1 |
| 147 | MCU_OTG_PWRON | 165 | MCU_SD1_D2 |
| 148 | GPIOC11 | 166 | MCU_SD1_D3 |
| 149 | GPIOC7 | 167 | MCU_SD0_CD |
| 150 | GPIOC12 | 168 | MCU_SD0_D3 |
| 151 | ADC1 | 169 | MCU_SD0_D2 |
| 152 | ADC0 | 170 | MCU_SD0_D1 |
| 153 | PWM2 | 171 | MCU_SD0_D0 |
| 154 | SPI_WP | 172 | MCU_SD0_CMD |
| 155 | SPIFRM0 | 173 | MCU_SD0_CLK |
| 156 | SPIRXD0 | 174 | RTC |
| 157 | SPITXD0 | 175 | VCC3P3_SYS |
| 158 | SPICLK0 | 176 | MCU_SCL_2 |
| 159 | IR | 177 | MCU_SDA_2 |
| 160 | MCU_SD1_CD | 178 | MCU_SCL_1 |
| 161 | MCU_SD1_CLK | 179 | MCU_SDA_1 |
| 162 | MCU_SD1_CMD | 180 | TOUCH_INT |


## J12: MIPI DSI Expansion Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | VCC3P3_SYS | 11 | MIPIDSI_DN2 |
| 2 | LVDS_VDD | 12 | MIPIDSI_DP2 |
| 3 | MCU_SCL_1 | 13 | GND |
| 4 | MCU_BACKLIGHT_PWM | 14 | GND |
| 5 | MCU_SDA_1 | 15 | MIPIDSI_DNCLK |
| 6 | CAP_INT | 16 | MIPIDSI_DPCLK |
| 7 | MIPIDSI_DN0 | 17 | MCU_NRESETOUT |
| 8 | MIPIDSI_DP0 | 18 | GND |
| 9 | MIPIDSI_DN1 | 19 | MIPIDSI_DN3 |
| 10 | MIPIDSI_DP1 | 20 | MIPIDSI_DP3 |


## J13: SPI / UART / ADC / GPIO Expansion Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | DCIN | 11 | MCU_SPIRXD0 |
| 2 | GND | 12 | GPIOB0 |
| 3 | DCIN | 13 | MCU_SPITXD0 |
| 4 | GND | 14 | GPIOB2 |
| 5 | VCC3P3_SYS | 15 | SPDIF_RX |
| 6 | GND | 16 | GPIOB4 |
| 7 | ADC1 | 17 | SPDIF_TX |
| 8 | ADC0 | 18 | GPIOB6 |
| 9 | MCU_SPIFRM0 | 19 | ALIVEGPIO5 |
| 10 | GPIOA30 | 20 | GPIOB10 |


## J39: LVDS Expansion Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | LVDS_VDD | 16 | MCU_LVDS_CLKP |
| 2 | LVDS_VDD | 17 | MCU_LVDS_CLKM |
| 3 | LVDS_VDD | 18 | GND |
| 4 | VCC3P3_SYS | 19 | MCU_LVDS_Y3P |
| 5 | VCC3P3_SYS | 20 | MCU_LVDS_Y3M |
| 6 | GND | 21 | GND |
| 7 | MCU_LVDS_Y0P | 22 | NC |
| 8 | MCU_LVDS_Y0M | 23 | NC |
| 9 | GND | 24 | GND |
| 10 | MCU_LVDS_Y1P | 25 | PWM0 |
| 11 | MCU_LVDS_Y1M | 26 | NC |
| 12 | GND | 27 | CAP_INT |
| 13 | MCU_LVDS_Y2P | 28 | MCU_SCL_1 |
| 14 | MCU_LVDS_Y2M | 29 | MCU_SDA_1 |
| 15 | GND | 30 | GPIOC11 |


## U451: Parallel Camera Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | CAM_PN | 13 | CAM_CLKOUT |
| 2 | AGND | 14 | CAM_D6 |
| 3 | SIOD(I2C_SDA) | 15 | GND |
| 4 | CAM_2.8V | 16 | CAM_D5 |
| 5 | SIOC(I2C_SCL) | 17 | CAM_PCLK |
| 6 | RESET(CAM_RST) | 18 | CAM_D4 |
| 7 | CAM_V | 19 | CAM_D0 |
| 8 | CAM_PD | 20 | CAM_D3 |
| 9 | CAM_H | 21 | CAM_D1 |
| 10 | CAM_1.8V | 22 | CAM_D2 |
| 11 | CAM_2.8V | 23 | NC |
| 12 | CAM_D7 | 24 | AFVDD_2.8V |


## J15: MIPI CSI Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | GND | 14 | NC |
| 2 | MIPICSI_DPCLK | 15 | NC |
| 3 | MIPICSI_DNCLK | 16 | GND |
| 4 | GND | 17 | MCU_SDA_0 |
| 5 | MIPICSI_DP0 | 18 | MCU_SCL_0 |
| 6 | MIPICSI_DN0 | 19 | RST |
| 7 | GND | 20 | CAM_PN |
| 8 | MIPICSI_DP1 | 21 | MCU_CAM1_MCLK |
| 9 | MIPICSI_DN1 | 22 | CAM_1.8V |
| 10 | GND | 23 | CAM_2.8V |
| 11 | NC | 24 | CAM_2.8V |
| 12 | NC | 25 | MIPI_1.2V |
| 13 | GND | 26 | GND |


## LCD1: LCD / VGA Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | BACKLIGHT_PWM | 21 | L_B0 |
| 2 | LVDS_VDD | 22 | L_B1 |
| 3 | GND | 23 | L_B2 |
| 4 | VCC3P3_SYS | 24 | L_B3 |
| 5 | L_R0 | 25 | L_B4 |
| 6 | L_R1 | 26 | L_B5 |
| 7 | L_R2 | 27 | L_B6 |
| 8 | L_R3 | 28 | L_B7 |
| 9 | L_R4 | 29 | GND |
| 10 | L_R5 | 30 | L_DCLK |
| 11 | L_R6 | 31 | LCD_EN |
| 12 | L_R7 | 32 | L_HSYNC |
| 13 | L_G0 | 33 | L_VSYNC |
| 14 | L_G1 | 34 | DE |
| 15 | L_G2 | 35 | NC |
| 16 | L_G3 | 36 | GND |
| 17 | L_G4 | 37 | TP_SCL |
| 18 | L_G5 | 38 | TP_SDA |
| 19 | L_G6 | 39 | CAP_WAKE |
| 20 | L_G7 | 40 | CAP_INT |


## J42: Power Output Connector

| Pin | Signal | Pin | Signal |
| --- | --- | --- | --- |
| 1 | DCIN（5V） | 6 | GND |
| 2 | GND | 7 | DCIN（5V） |
| 3 | DCIN（5V） | 8 | GND |
| 4 | GND | 9 | DCIN（5V） |
| 5 | DCIN（5V） | 10 | GND |


## Key Definition

| Key | Function | Key | Function |
| --- | --- | --- | --- |
| K1 | Return | K4 | Menu |
| K2 | Volume up | RESET | Reset |
| K3 | Volume down | POWER | Power |
