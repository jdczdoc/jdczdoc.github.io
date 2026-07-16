---
sidebar_position: 3
title: 引脚定义
description: I3128核心板 引脚定义
---

# 引脚定义

引脚定义

核心板引脚定义1

### 核心板引脚定义1

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | TX_C+ | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 2 | TX_C- | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 3 | TX_0+ | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 4 | TX_0- | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 5 | TX_1+ | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 6 | TX_1- | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 7 | TX_2+ | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 8 | TX_2- | HDMI TX1.4差分对 | 不可用作GPIO口 |
| 9 | VDAC_OUTP | 数模转换输出 | 不可用作GPIO口 |
| 10 | OTG_ID | OTG_ID识别脚 | 不可用作GPIO口 |
| 11 | OTG_DET | OTG_DET识别脚 | 不可用作GPIO口 |
| 12 | HOST_DM | USB2.0差分对 | 不可用作GPIO口 |
| 13 | HOST_DP | USB2.0差分对 | 不可用作GPIO口 |
| 14 | OTG_DM | USB2.0_OTG差分对 | 不可用作GPIO口 |
| 15 | OTG_DP | USB2.0_OTG差分对 | 不可用作GPIO口 |
| 16 | UART0_RXD(GPIO2_D3/CARD_CLK/UART0_RX_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 17 | UART0_TXD(GPIO2_D2/CARD_RST/UART0_TX_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 18 | UART0_RTS(GPIO0_C1/CARD_IO/UART0_RTSN_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 19 | UART0_CTS(GPIO2_D5/CARD_DET/UART0_CTSN_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 20 | IR_RX(GPIO3_D2/IR_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 21 | PWM0(GPIO0_D2/PWM0_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 22 | SPDIF_TX(GPIO3_D3/SPDIF_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 23 | ADCIN1 | ADCIN输入 | 不可用作GPIO口 |
| 24 | GND | 参考地 |  |
| 25 | GND | 参考地 |  |
| 26 | SDMMC_D0(GPIO1_C2/SDMMC0_D0/UART2_TX_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 27 | SDMMC_D1(GPIO1_C3/SDMMC0_D1/UART2_RX_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 28 | SDMMC1_D3(GPIO1_A5/I2S_SDI/SDMMC1_D3_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |


核心板引脚定义2

### 核心板引脚定义2

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 29 | SDMMC1_D2(GPIO1_A4/I2S_SDO/SDMMC1_D2_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 30 | SDMMC1_D1(GPIO1_A2/I2S_LRCK_RX/SDMMC1_D1_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 31 | SDMMC1_D0(GPIO1_A1/I2S_SCLK/SDMMC1_D0/PMIC_SLEEP_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 32 | SDMMC1_CLK(GPIO1_A0/I2S_MCLK/SDMMC1_CLKO/XIN_32K_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 33 | GSENSOR_INT(GPIO0_B4/I2S_LRCK_TX_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 34 | WIFI_PWR(GPIO1_A3/I2S_LRCK_TX_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 35 | HDMI_HPD(GPIO0_B7/HDMI_HPD_d) | GPIO复用管脚，电平由HDMI驱动器电平决定（3.3V） |  |
| 36 | HDMI_CEC(GPIO0_C4/HDMI_CEC_u) | GPIO复用管脚，电平由HDMI驱动器电平决定（3.3V） |  |
| 37 | I2C1_SCL(GPIO0_A2/I2C1_SCL_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 38 | I2C1_SDA/SDMMC1_CMD(GPIO0_A3/I2C1_SDA/SDMMC1_CMD_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 39 | I2C3_SDA(GPIO0_A7/HDMI_SDA/I2C3_SDA_u) | GPIO复用管脚，电平由HDMI驱动器电平决定（3.3V） |  |
| 40 | I2C3_SCL(GPIO0_A6/HDMI_SCL/I2C3_SCL_u) | GPIO复用管脚，电平由HDMI驱动器电平决定（3.3V） |  |
| 41 | UART1_RX(GPIO1_B2/UART1_RX/SPI_RXD_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 42 | UART1_TX(GPIO1_B1/UART1_TX/SPI_TXD_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 43 | RESET | 复位引脚 | 不可用作GPIO口 |
| 44 | PWRON | 电源引脚 | 不可用作GPIO口 |
| 45 | RTC_CLKOUT | RTC时钟输出(32.768Khz) | 不可用作GPIO口 |
| 46 | I2C0_SDA(GPIO0_A1/I2C0_SDA_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 47 | I2C0_SCL(GPIO0_A0/I2C0_SCL_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 48 | GND | 参考地 | 不可用作GPIO口 |
| 49 | GND | 参考地 | 不可用作GPIO口 |
| 50 | VCC28_CIF | 2.8V电源 | 不可用作GPIO口 |
| 51 | VCC18_CIF | 1.8V电源 | 不可用作GPIO口 |
| 52 | VCCA_CODEC | 音频电源 |  |
| 53 | VCC_SYS | 核心板主电源输出，4.2V | 不可用作GPIO口 |
| 54 | VCC_SYS | 核心板主电源输出，4.2V | 不可用作GPIO口 |
| 55 | VCC_TP | TP电源 | 不可用作GPIO口 |
| 56 | VCC_RTC | RTC供电管脚，3V输入 | 不可用作GPIO口 |


核心板引脚定义3

### 核心板引脚定义3

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 57 | BAT_N | 电池输入管脚 | 不可用作GPIO口 |
| 58 | BAT_P | 电池输入管脚 | 不可用作GPIO口 |
| 59 | VCC_RK816IN | 核心板电源输入，4.8到5.5V | 不可用作GPIO口 |
| 60 | VCC_RK816IN | 核心板电源输入，4.8到5.5V | 不可用作GPIO口 |
| 61 | VCC_RK816IN | 核心板电源输入，4.8到5.5V | 不可用作GPIO口 |
| 62 | VCC_IO | 3.3V DC-DC输出 | 不可用作GPIO口 |
| 63 | VCC_IO | 3.3V DC-DC输出 | 不可用作GPIO口 |
| 64 | TP_INT(GPIO1_B0/UART1_CTSN/SPI_CLK_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 65 | TP_RST(GPIO0_D1/UART2_CTSN_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 66 | HP_CTL(GPIO3_C4_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 67 | LCD_RST(GPIO0_D0/UART2_RTSN/PMIC_SLEEP_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 68 | GPIO3_C6 | GPIO管脚，电平由程序控制PMU的电平决定 |  |
| 69 | SPI_CLK(GPIO0_B1/I2S_SCLK/SPI_CLK_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 70 | SPI_TXD(GPIO0_B3/I2S_LRCK_RX/SPI_TXD_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 71 | SPI_RXD(GPIO0_B5/I2S_SDO/SPI_RXD_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 72 | SPI_CSn0(GPIO0_B6/I2S_SDI/SPI_CSN0_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 73 | GPIO1_C7(GPIO1_C7/FLASH_CS3/EMMC_RST_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 74 | CIF_PDN0(GPIO3_D7/CIF_PDN0/TEST_CLKO_d) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 75 | GPIO0_C7(GPIO0_C7/FLASH_CS1_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 76 | GPIO2_A6(GPIO2_A6/FLASH_CS0_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 77 | GPIO2_A4(GPIO2_A4/FLASH_RDY/EMMC_CMD/SFC_CLK_u) | GPIO复用管脚，电平由程序控制PMU的电平决定 |  |
| 78 | GPIO3_C5 | GPIO管脚，电平由程序控制PMU的电平决定 |  |
| 79 | MICBIAS | MIC偏置 | 不可用作GPIO口 |
| 80 | CODEC_AOL | 音频输出接口 | 不可用作GPIO口 |
| 81 | CODEC_AOR | 音频输出接口 | 不可用作GPIO口 |
| 82 | MICIN-P | MIC输出接口 | 不可用作GPIO口 |
| 83 | MICIN-N | MIC输出接口 | 不可用作GPIO口 |
| 84 | HP_DET | 耳机检测引脚 | 不可用作GPIO口 |


核心板引脚定义4

### 核心板引脚定义4

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 85 | LCD_CLK(GPIO2_B0/LCDC_CLK/EBC_SDCLK/GMAC_RXDV_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 |  |
| 86 | LCD_DEN(GPIO2_B3/LCDC_DEN/EBC_GDCLK/GMAC_RXCLK_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 |  |
| 87 | LCD_HSYNC(GPIO2_B1/LCDC_HSYNC/EBC_SDLE/GMAC_TXCLK_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 |  |
| 88 | LCD_VSYNC(GPIO2_B2/LCDC_VSYNC/EBC_SDOE/GMAC_CRS_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 |  |
| 89 | LCD_D23(GPIO2_D1/LCDC_D23/EBC_GDPWR2/GMAC_MDC_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 90 | LCD_D22(GPIO2_D0/LCDC_D22/EBC_GDPWR1/GPS_CLK/GMAC_COL_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 91 | LCD_D21(GPIO2_C7/LCDC_D21/EBC_BORDER1/GPS_MAG/GMAC_TXD3_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 92 | LCD_D20(GPIO2_C6/LCDC_D20/EBC_BORDER0/GPS_SIGN/GMAC_TXD2_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 93 | I2C2_SCL_LCD_19(GPIO2_C5/LCDC_D19/EBC_SDSHR/I2C2_SCL/GMAC_RXD2_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 94 | I2C2_SDA_LCD_18(GPIO2_C4/LCDC_D18/EBC_GDRL/I2C2_SDA/GMAC_RXD3_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 95 | LCD_D17(GPIO2_C3/LCDC_D17/EBC_GDPWR0/GMAC_TXD0_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 96 | LCD_D16(GPIO2_C2/LCDC_D16/EBC_GDSP/GMAC_TXD1_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 97 | LCD_D15(GPIO2_C1/LCDC_D15/EBC_GDOE/GMAC_RXD0_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 98 | LCD_D14(GPIO2_C0/LCDC_D14/EBC_VCOM/GMAC_RXD1_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 99 | LCD_D13(GPIO2_B7/LCDC_D13/EBC_SDCE5/GMAC_RXER_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 100 | LCD_D12(GPIO2_B6/LCDC_D12/EBC_SDCE4/GMAC_CLK_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 101 | LCD_D11(GPIO2_B5/LCDC_D11/EBC_SDCE3/GMAC_TXEN_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 102 | LCD_D10(GPIO2_B4/LCDC_D10/EBC_SDCE2/GMAC_MDIO_d) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 103 | LCD_D9(LCDC_D9/LVDS_CLKN/EBC_SDCE1/MIPI_CLKN) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 104 | LCD_D8(LCDC_D8/LVDS_CLKP/EBC_SDCE0/MIPI_CLKP) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 105 | LCD_D7(LCDC_D7/LVDS_TX3N/EBC_SDDO7/MIPI_D3N) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 106 | LCD_D6(LCDC_D6/LVDS_TX3P/EBC_SDDO6/MIPI_D3P) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 107 | LCD_D5(LCDC_D5/LVDS_TX2N/EBC_SDDO5/MIPI_D2N) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 108 | LCD_D4(LCDC_D4/LVDS_TX2P/EBC_SDDO4/MIPI_D2P) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 109 | LCD_D3(LCDC_D3/LVDS_TX1N/EBC_SDDO3/MIPI_D1N) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 110 | LCD_D2(LCDC_D2/LVDS_TX1P/EBC_SDDO2/MIPI_D1P) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 111 | LCD_D1(LCDC_D1/LVDS_TX0N/EBC_SDDO1/MIPI_D0N) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
| 112 | LCD_D0(LCDC_D0/LVDS_TX0P/EBC_SDDO0/MIPI_D0P) | LCDC/LVDS/MIPI/GMAC/EMAC复用接口，电平由VCCIO决定 | 不可用作GPIO口 |
