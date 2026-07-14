---
sidebar_position: 4
title: Core Board Pin Definition
description: X30CV1/X30CV2 144-pin core-board pin definition
---

# Core Board Pin Definition

X30CV1 and X30CV2 use a 144-pin stamp-hole layout. Their pins, dimensions, and electrical connections are compatible. The complete pin definition from the hardware manual is retained below for carrier-board design, pin-mux checking, and driver debugging.

![X30 core board layout](./x30-core-board-size.png)

:::note
PX30 has limited pins and many multiplexing relationships among display, camera, Ethernet, TF card, and UART. Check pin-mux conflicts before designing the carrier board or editing the device tree.
:::

## Core Board Pin Definition 1: Pin 1-36

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 1 | GPIO0_A5 | GPIO |  |
| 2 | GPIO0_C2/I2C1_SCL/UART3_CTS | GPIO / I2C / UART3 flow-control |  |
| 3 | GPIO0_C3/I2C1_SDA/UART3_RTS | GPIO / I2C / UART3 flow-control |  |
| 4 | GPIO0_B4/UART0_CTS | GPIO / UART0 flow-control |  |
| 5 | GPIO0_C0/PWM1/UART3_TXD | GPIO / UART3 TXD / PWM |  |
| 6 | VCC3V3_LCD | 3.3V / 3A power output |  |
| 7 | LVDS_TX0N | LCD interface |  |
| 8 | LVDS_TX0P | LCD interface |  |
| 9 | LVDS_TX1N | LCD interface |  |
| 10 | LVDS_TX1P | LCD interface |  |
| 11 | LVDS_CLKN | LCD interface |  |
| 12 | LVDS_CLKP | LCD interface |  |
| 13 | LVDS_TX2N | LCD interface |  |
| 14 | LVDS_TX2P | LCD interface |  |
| 15 | LVDS_TX3N | LCD interface |  |
| 16 | LVDS_TX3P | LCD interface |  |
| 17 | LCDC_CLK | LCD interface |  |
| 18 | LCDC_HSYNC | LCD interface |  |
| 19 | LCDC_VSYNC | LCD interface |  |
| 20 | LCDC_DEN | LCD interface |  |
| 21 | LCDC_D0 | LCD interface |  |
| 22 | LCDC_D1 | LCD interface |  |
| 23 | LCDC_D2 | LCD interface |  |
| 24 | LCDC_D3 | LCD interface |  |
| 25 | LCDC_D4 | LCD interface |  |
| 26 | LCDC_D5 | LCD interface |  |
| 27 | LCDC_D6 | LCD interface |  |
| 28 | LCDC_D7 | LCD interface |  |
| 29 | LCDC_D8 | LCD interface |  |
| 30 | LCDC_D9 | LCD interface |  |
| 31 | LCDC_D10 | LCD interface |  |
| 32 | LCDC_D11 | LCD interface |  |
| 33 | LCDC_D12 | LCD interface |  |
| 34 | LCDC_D13 | LCD interface |  |
| 35 | LCDC_D14 | LCD interface |  |
| 36 | LCDC_D15 | LCD interface |  |


## Core Board Pin Definition 2: Pin 37-72

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 37 | LCDC_D16 | LCD interface |  |
| 38 | LCDC_D17 | LCD interface |  |
| 39 | LCDC_D18 | LCD interface |  |
| 40 | LCDC_D19 | LCD interface |  |
| 41 | LCDC_D20 | LCD interface |  |
| 42 | LCDC_D21 | LCD interface |  |
| 43 | LCDC_D22 | LCD interface |  |
| 44 | LCDC_D23 | LCD interface |  |
| 45 | GPIO0_B5/UART0_RTS | GPIO或串口0流控管脚 |  |
| 46 | GPIO2_B4/UART2_TXD | GPIO / UART2 TXD |  |
| 47 | GPIO_A0 | GPIO |  |
| 48 | GPIO1_C2/UART1_CTS | GPIO / UART1 flow-control |  |
| 49 | GPIO1_C0/UART1_RXD | GPIO / UART1 RXD |  |
| 50 | GPIO1_C1/UART1_TXD | GPIO / UART1 TXD |  |
| 51 | GPIO1_C3/UART1_RTS | GPIO / UART1 flow-control |  |
| 52 | CLKOUT_32K | 32.768 kHz clock output |  |
| 53 | GPIO1_C7/SDIO_D1 | GPIO / SDIO |  |
| 54 | GPIO1_C6/SDIO_D0 | GPIO / SDIO |  |
| 55 | GPIO1_C5/SDIO_CLK | GPIO / SDIO |  |
| 56 | GPIO1_C4/SDIO_CMD | GPIO / SDIO |  |
| 57 | GPIO1_D1/SDIO_D3 | GPIO / SDIO |  |
| 58 | GPIO1_D0/SDIO_D2 | GPIO / SDIO |  |
| 59 | GPIO0_B3/UART0_RXD | GPIO / UART0 RXD |  |
| 60 | GPIO0_B2/UART0_TXD | GPIO / UART0 RXD |  |
| 61 | GPIO0_A1 | GPIO |  |
| 62 | GPIO2_B0 | GPIO |  |
| 63 | GPIO0_A2 | GPIO |  |
| 64 | I2C0_SCL/GPIO0_B0 | I2C0 / GPIO |  |
| 65 | I2C0_SDA/GPIO0_B1 | I2C0 / GPIO |  |
| 66 | GPIO2_C6 | GPIO |  |
| 67 | I2S1_SDO/GPIO2_C4 | I2S / GPIO |  |
| 68 | I2S1_SDI/GPIO2_C5 | I2S / GPIO |  |
| 69 | I2S1_LRCK/GPIO2_C1 | I2S / GPIO |  |
| 70 | I2S1_SCLK/GPIO2_C2 | I2S / GPIO |  |
| 71 | I2S1_MCLK/GPIO2_C3 | I2S / GPIO |  |
| 72 | GND | GND |  |


## Core Board Pin Definition 3: Pin 73-108

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 73 | MIC2_IN | Microphone input |  |
| 74 | MIC1_IN | Microphone input |  |
| 75 | HP_SNS | Audio signal |  |
| 76 | HPR | Audio signal |  |
| 77 | HPL | Audio signal |  |
| 78 | SPKP_OUT | Audio signal |  |
| 79 | SPKN_OUT | Audio signal |  |
| 80 | GND | GND |  |
| 81 | MIPI_CSI_D3N | MIPI camera signal |  |
| 82 | MIPI_CSI_D3P | MIPI camera signal |  |
| 83 | MIPI_CSI_D2N | MIPI camera signal |  |
| 84 | MIPI_CSI_D2P | MIPI camera signal |  |
| 85 | MIPI_CSI_CLKN | MIPI camera signal |  |
| 86 | MIPI_CSI_CLKP | MIPI camera signal |  |
| 87 | MIPI_CSI_D1P | MIPI camera signal |  |
| 88 | MIPI_CSI_D1N | MIPI camera signal |  |
| 89 | MIPI_CSI_D0P | MIPI camera signal |  |
| 90 | MIPI_CSI_D0N | MIPI camera signal |  |
| 91 | CIF_D1/UART2_RXD/GPIO2_B6 | Parallel camera / UART / GPIO |  |
| 92 | CIF_D11/I2C2_SDA/GPIO2_C0 | Parallel camera / I2C / GPIO |  |
| 93 | CIF_D10/I2C2_SCL/GPIO2_B7 | Parallel camera / I2C / GPIO |  |
| 94 | CIF_CLKO/GPIO2_B3 | Parallel camera / GPIO |  |
| 95 | VCC2V8_DVP | 2.8V power output |  |
| 96 | VCC1V8_DVP | 1.8V power output |  |
| 97 | PWM2/GPIO2_B5 | GPIO / PWM |  |
| 98 | CIF_CLKI/RMII_CLK/GPIO2_B2 | Parallel camera / Ethernet / GPIO |  |
| 99 | CIF_HREF/MAC_MDC/GPIO2_B1 | Parallel camera / Ethernet / GPIO |  |
| 100 | CIF_D9/RMII_MDIO/GPIO2_A7 | Parallel camera / Ethernet / GPIO |  |
| 101 | CIF_D8/RMII_RXDV/GPIO2_A6 | Parallel camera / Ethernet / GPIO |  |
| 102 | CIF_D7/RMII_RXER/GPIO2_A5 | Parallel camera / Ethernet / GPIO |  |
| 103 | CIF_D6/RMII_RXD1/GPIO2_A4 | Parallel camera / Ethernet / GPIO |  |
| 104 | CIF_D5/RMII_RXD0/GPIO2_A3 | Parallel camera / Ethernet / GPIO |  |
| 105 | CIF_D4/RMII_TXD0/GPIO2_A2 | Parallel camera / Ethernet / GPIO |  |
| 106 | CIF_D3/RMII_TXD1/GPIO2_A1 | Parallel camera / Ethernet / GPIO |  |
| 107 | CIF_D2/RMII_TXEN/GPIO2_A0 | Parallel camera / Ethernet / GPIO |  |
| 108 | GND | GND |  |


## Core Board Pin Definition 4: Pin 109-144

| Pin No. | Signal | Type | Description |
| --- | --- | --- | --- |
| 109 | VCC5V0_SYS | Power input | 5V / 1A power input |
| 110 | VCC5V0_SYS | Power input | 5V / 1A power input |
| 111 | GND | GND |  |
| 112 | GND | GND |  |
| 113 | EXT_EN | Enable trigger signal | Used to trigger external signals |
| 114 | VCC5V0_HOST | 5V power output |  |
| 115 | VCC_RTC | 5V power input |  |
| 116 | VCC3V3_SYS | 3.3V / 2.5A power output |  |
| 117 | VCC3V0_PMU | 3V / 400mA power output |  |
| 118 | VCC_1V8 | 1.8V / 400mA power output |  |
| 119 | OTG_DP | OTG signal |  |
| 120 | OTG_DM | OTG signal |  |
| 121 | USB_ID | OTG signal |  |
| 122 | USB_DET | OTG signal |  |
| 123 | USB_HOST_DM | USB HOST signal |  |
| 124 | USB_HOST_DP | USB HOST signal |  |
| 125 | FLASH_CS0/GPIO1_B0 | NAND flash control / GPIO |  |
| 126 | FLASH_CLE/UART3_CTS/SPI0_TXD/I2C3_SDA/GPIO1_B4 | NAND flash control / GPIO / UART / SPI / I2C |  |
| 127 | FLASH_WRN/UART3_RTS/SPI0_RXD/I2C3_SCL/GPIO1_B5 | NAND flash control / GPIO / UART / SPI / I2C |  |
| 128 | FLASH_CS1/UART3_TXD/SPI0_CSn/GPIO1_B6 | NAND flash control / GPIO / UART / SPI |  |
| 129 | FLASH_RDN/UART3_RXD/SPI0_CLK/GPIO1_B7 | NAND flash control / GPIO / UART / SPI |  |
| 130 | SDMMC0_D2/UART4_RXD/GPIO1_D4 | SDIO / GPIO / UART |  |
| 131 | SDMMC0_D3/UART4_TXD/GPIO1_D5 | SDIO / GPIO / UART |  |
| 132 | SDMMC0_CMD/UART4_RTS/GPIO1_D7 | SDIO / GPIO / UART |  |
| 133 | VCC_SD | LDO output | Programmable voltage |
| 134 | SDMMC0_CLK/UART4_CTS/GPIO1_D6 | SDIO / GPIO / UART |  |
| 135 | SDMMC0_D0/UART2_TXD/GPIO1_D2 | SDIO / GPIO / UART |  |
| 136 | SDMMC0_D1/UART2_RXD/GPIO1_D3 | SDIO / GPIO / UART |  |
| 137 | SDMMC0_DET/GPIO0_A3 | SD-card detect / GPIO |  |
| 138 | RESET_KEY | PMU reset pin | Low level resets the whole power system |
| 139 | POWER_KEY | PMU power key |  |
| 140 | ADC0 | ADC signal |  |
| 141 | ADC1 | ADC signal |  |
| 142 | ADC2 | ADC signal |  |
| 143 | UART3_RXD/PWM3/GPIO0_C1 | UART3 RXD / PWM3 / GPIO |  |
| 144 | PWM0/GPIO0_B7 | PWM0 / GPIO |  |
