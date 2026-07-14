---
sidebar_position: 4
title: 核心板引脚定义
description: X30CV1/X30CV2 核心板 144PIN 引脚定义
---

# 核心板引脚定义

X30CV1 与 X30CV2 核心板采用 144PIN 邮票孔方式，管脚、尺寸和硬件电气连接完全兼容。下表保留硬件手册中的完整引脚定义，便于底板设计、复用功能检查和驱动调试。

![X30 核心板结构图](./x30-core-board-size.png)

:::note
PX30 管脚数量有限，显示、摄像头、以太网、TF 卡和串口之间存在较多复用关系。设计底板或改设备树时，应先确认对应复用功能是否冲突。
:::

## 核心板引脚定义 1：Pin 1-36

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GPIO0_A5 | GPIO |  |
| 2 | GPIO0_C2/I2C1_SCL/UART3_CTS | GPIO或I2C管脚或串口3流控脚 |  |
| 3 | GPIO0_C3/I2C1_SDA/UART3_RTS | GPIO或I2C管脚或串口3流控脚 |  |
| 4 | GPIO0_B4/UART0_CTS | GPIO或串口0流控脚 |  |
| 5 | GPIO0_C0/PWM1/UART3_TXD | GPIO或串口3 TXD或PWM管脚 |  |
| 6 | VCC3V3_LCD | 3.3V/3A电源输出 |  |
| 7 | LVDS_TX0N | LCD驱动接口 |  |
| 8 | LVDS_TX0P | LCD驱动接口 |  |
| 9 | LVDS_TX1N | LCD驱动接口 |  |
| 10 | LVDS_TX1P | LCD驱动接口 |  |
| 11 | LVDS_CLKN | LCD驱动接口 |  |
| 12 | LVDS_CLKP | LCD驱动接口 |  |
| 13 | LVDS_TX2N | LCD驱动接口 |  |
| 14 | LVDS_TX2P | LCD驱动接口 |  |
| 15 | LVDS_TX3N | LCD驱动接口 |  |
| 16 | LVDS_TX3P | LCD驱动接口 |  |
| 17 | LCDC_CLK | LCD驱动接口 |  |
| 18 | LCDC_HSYNC | LCD驱动接口 |  |
| 19 | LCDC_VSYNC | LCD驱动接口 |  |
| 20 | LCDC_DEN | LCD驱动接口 |  |
| 21 | LCDC_D0 | LCD驱动接口 |  |
| 22 | LCDC_D1 | LCD驱动接口 |  |
| 23 | LCDC_D2 | LCD驱动接口 |  |
| 24 | LCDC_D3 | LCD驱动接口 |  |
| 25 | LCDC_D4 | LCD驱动接口 |  |
| 26 | LCDC_D5 | LCD驱动接口 |  |
| 27 | LCDC_D6 | LCD驱动接口 |  |
| 28 | LCDC_D7 | LCD驱动接口 |  |
| 29 | LCDC_D8 | LCD驱动接口 |  |
| 30 | LCDC_D9 | LCD驱动接口 |  |
| 31 | LCDC_D10 | LCD驱动接口 |  |
| 32 | LCDC_D11 | LCD驱动接口 |  |
| 33 | LCDC_D12 | LCD驱动接口 |  |
| 34 | LCDC_D13 | LCD驱动接口 |  |
| 35 | LCDC_D14 | LCD驱动接口 |  |
| 36 | LCDC_D15 | LCD驱动接口 |  |


## 核心板引脚定义 2：Pin 37-72

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 37 | LCDC_D16 | LCD驱动接口 |  |
| 38 | LCDC_D17 | LCD驱动接口 |  |
| 39 | LCDC_D18 | LCD驱动接口 |  |
| 40 | LCDC_D19 | LCD驱动接口 |  |
| 41 | LCDC_D20 | LCD驱动接口 |  |
| 42 | LCDC_D21 | LCD驱动接口 |  |
| 43 | LCDC_D22 | LCD驱动接口 |  |
| 44 | LCDC_D23 | LCD驱动接口 |  |
| 45 | GPIO0_B5/UART0_RTS | GPIO或串口0流控管脚 |  |
| 46 | GPIO2_B4/UART2_TXD | GPIO或串口2 TXD |  |
| 47 | GPIO_A0 | GPIO |  |
| 48 | GPIO1_C2/UART1_CTS | GPIO或串口1流控管脚 |  |
| 49 | GPIO1_C0/UART1_RXD | GPIO或串口1 RXD |  |
| 50 | GPIO1_C1/UART1_TXD | GPIO或串口1 TXD |  |
| 51 | GPIO1_C3/UART1_RTS | GPIO或串口1流控管脚 |  |
| 52 | CLKOUT_32K | 32768Hz精准时钟输出 |  |
| 53 | GPIO1_C7/SDIO_D1 | GPIO或SDIO管脚 |  |
| 54 | GPIO1_C6/SDIO_D0 | GPIO或SDIO管脚 |  |
| 55 | GPIO1_C5/SDIO_CLK | GPIO或SDIO管脚 |  |
| 56 | GPIO1_C4/SDIO_CMD | GPIO或SDIO管脚 |  |
| 57 | GPIO1_D1/SDIO_D3 | GPIO或SDIO管脚 |  |
| 58 | GPIO1_D0/SDIO_D2 | GPIO或SDIO管脚 |  |
| 59 | GPIO0_B3/UART0_RXD | GPIO或串口0 RXD |  |
| 60 | GPIO0_B2/UART0_TXD | GPIO或串口0 RXD |  |
| 61 | GPIO0_A1 | GPIO |  |
| 62 | GPIO2_B0 | GPIO |  |
| 63 | GPIO0_A2 | GPIO |  |
| 64 | I2C0_SCL/GPIO0_B0 | I2C0或GPIO |  |
| 65 | I2C0_SDA/GPIO0_B1 | I2C0或GPIO |  |
| 66 | GPIO2_C6 | GPIO |  |
| 67 | I2S1_SDO/GPIO2_C4 | I2S或GPIO管脚 |  |
| 68 | I2S1_SDI/GPIO2_C5 | I2S或GPIO管脚 |  |
| 69 | I2S1_LRCK/GPIO2_C1 | I2S或GPIO管脚 |  |
| 70 | I2S1_SCLK/GPIO2_C2 | I2S或GPIO管脚 |  |
| 71 | I2S1_MCLK/GPIO2_C3 | I2S或GPIO管脚 |  |
| 72 | GND | 参考地 |  |


## 核心板引脚定义 3：Pin 73-108

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 73 | MIC2_IN | 麦克风输入管脚 |  |
| 74 | MIC1_IN | 麦克风输入管脚 |  |
| 75 | HP_SNS | 音频管脚 |  |
| 76 | HPR | 音频管脚 |  |
| 77 | HPL | 音频管脚 |  |
| 78 | SPKP_OUT | 音频管脚 |  |
| 79 | SPKN_OUT | 音频管脚 |  |
| 80 | GND | 参考地 |  |
| 81 | MIPI_CSI_D3N | MIPI摄像头管脚 |  |
| 82 | MIPI_CSI_D3P | MIPI摄像头管脚 |  |
| 83 | MIPI_CSI_D2N | MIPI摄像头管脚 |  |
| 84 | MIPI_CSI_D2P | MIPI摄像头管脚 |  |
| 85 | MIPI_CSI_CLKN | MIPI摄像头管脚 |  |
| 86 | MIPI_CSI_CLKP | MIPI摄像头管脚 |  |
| 87 | MIPI_CSI_D1P | MIPI摄像头管脚 |  |
| 88 | MIPI_CSI_D1N | MIPI摄像头管脚 |  |
| 89 | MIPI_CSI_D0P | MIPI摄像头管脚 |  |
| 90 | MIPI_CSI_D0N | MIPI摄像头管脚 |  |
| 91 | CIF_D1/UART2_RXD/GPIO2_B6 | 并口摄像头或串口或GPIO |  |
| 92 | CIF_D11/I2C2_SDA/GPIO2_C0 | 并口摄像头或I2C或GPIO |  |
| 93 | CIF_D10/I2C2_SCL/GPIO2_B7 | 并口摄像头或I2C或GPIO |  |
| 94 | CIF_CLKO/GPIO2_B3 | 并口摄像头或GPIO |  |
| 95 | VCC2V8_DVP | 2.8V电源输出 |  |
| 96 | VCC1V8_DVP | 1.8V电源输出 |  |
| 97 | PWM2/GPIO2_B5 | GPIO或PWM管脚 |  |
| 98 | CIF_CLKI/RMII_CLK/GPIO2_B2 | 并口摄像头或网口管脚或GPIO |  |
| 99 | CIF_HREF/MAC_MDC/GPIO2_B1 | 并口摄像头或网口管脚或GPIO |  |
| 100 | CIF_D9/RMII_MDIO/GPIO2_A7 | 并口摄像头或网口管脚或GPIO |  |
| 101 | CIF_D8/RMII_RXDV/GPIO2_A6 | 并口摄像头或网口管脚或GPIO |  |
| 102 | CIF_D7/RMII_RXER/GPIO2_A5 | 并口摄像头或网口管脚或GPIO |  |
| 103 | CIF_D6/RMII_RXD1/GPIO2_A4 | 并口摄像头或网口管脚或GPIO |  |
| 104 | CIF_D5/RMII_RXD0/GPIO2_A3 | 并口摄像头或网口管脚或GPIO |  |
| 105 | CIF_D4/RMII_TXD0/GPIO2_A2 | 并口摄像头或网口管脚或GPIO |  |
| 106 | CIF_D3/RMII_TXD1/GPIO2_A1 | 并口摄像头或网口管脚或GPIO |  |
| 107 | CIF_D2/RMII_TXEN/GPIO2_A0 | 并口摄像头或网口管脚或GPIO |  |
| 108 | GND | 参考地 |  |


## 核心板引脚定义 4：Pin 109-144

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 109 | VCC5V0_SYS | 电源输入管脚 | 5V/1A电源输入 |
| 110 | VCC5V0_SYS | 电源输入管脚 | 5V/1A电源输入 |
| 111 | GND | 参考地 |  |
| 112 | GND | 参考地 |  |
| 113 | EXT_EN | 使能触发信号 | 用于触发外部信号 |
| 114 | VCC5V0_HOST | 5V电源输出 |  |
| 115 | VCC_RTC | 5V电源输入 |  |
| 116 | VCC3V3_SYS | 3.3V/2.5A电源输出 |  |
| 117 | VCC3V0_PMU | 3V/400mA电源输出 |  |
| 118 | VCC_1V8 | 1.8V/400mA电源输出 |  |
| 119 | OTG_DP | OTG管脚 |  |
| 120 | OTG_DM | OTG管脚 |  |
| 121 | USB_ID | OTG管脚 |  |
| 122 | USB_DET | OTG管脚 |  |
| 123 | USB_HOST_DM | USB HOST管脚 |  |
| 124 | USB_HOST_DP | USB HOST管脚 |  |
| 125 | FLASH_CS0/GPIO1_B0 | nand flash控制管脚或GPIO口 |  |
| 126 | FLASH_CLE/UART3_CTS/SPI0_TXD/I2C3_SDA/GPIO1_B4 | nand flash控制管脚或GPIO口或串口或SPI口或I2C口 |  |
| 127 | FLASH_WRN/UART3_RTS/SPI0_RXD/I2C3_SCL/GPIO1_B5 | nand flash控制管脚或GPIO口或串口或SPI口或I2C口 |  |
| 128 | FLASH_CS1/UART3_TXD/SPI0_CSn/GPIO1_B6 | nand flash控制管脚或GPIO口或串口或SPI口 |  |
| 129 | FLASH_RDN/UART3_RXD/SPI0_CLK/GPIO1_B7 | nand flash控制管脚或GPIO口或串口或SPI口 |  |
| 130 | SDMMC0_D2/UART4_RXD/GPIO1_D4 | SDIO或GPIO口或串口 |  |
| 131 | SDMMC0_D3/UART4_TXD/GPIO1_D5 | SDIO或GPIO口或串口 |  |
| 132 | SDMMC0_CMD/UART4_RTS/GPIO1_D7 | SDIO或GPIO口或串口 |  |
| 133 | VCC_SD | LDO电压输出 | 电压可调，程序控制 |
| 134 | SDMMC0_CLK/UART4_CTS/GPIO1_D6 | SDIO或GPIO口或串口 |  |
| 135 | SDMMC0_D0/UART2_TXD/GPIO1_D2 | SDIO或GPIO口或串口 |  |
| 136 | SDMMC0_D1/UART2_RXD/GPIO1_D3 | SDIO或GPIO口或串口 |  |
| 137 | SDMMC0_DET/GPIO0_A3 | SD卡检测脚或GPIO口 |  |
| 138 | RESET_KEY | PMU复位管脚 | 低电平整个电源复位 |
| 139 | POWER_KEY | PMU开关机管脚 |  |
| 140 | ADC0 | ADC管脚 |  |
| 141 | ADC1 | ADC管脚 |  |
| 142 | ADC2 | ADC管脚 |  |
| 143 | UART3_RXD/PWM3/GPIO0_C1 | 串口3 RXD或PWM3或GPIO管脚 |  |
| 144 | PWM0/GPIO0_B7 | PWM0或GPIO管脚 |  |
