---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the X3568CV4 core board
---

# Pin Definition

This section lists the pin definition of the X3568CV4 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition1

| Pin<br /> number | Signal | Type | Description |
|---|---|---|---|
| 1 | MIPI_DSI_TX0_D3P/LVDS<br />_TX0_D3P | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 2 | MIPI_DSI_TX0_D3N/LVDS<br />_TX0_D3N | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 3 | MIPI_DSI_TX0_D2P/LVDS<br />_TX0_D2P | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 4 | MIPI_DSI_TX0_D2N/LVDS<br />_TX0_D2N | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 5 | MIPI_DSI_TX0_CLKP/LV<br />DS_TX0_CLKP | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 6 | MIPI_DSI_TX0_CLKN/LV<br />DS_TX0_CLKN | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 7 | MIPI_DSI_TX0_D1P/LVDS<br />_TX0_D1P | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 8 | MIPI_DSI_TX0_D1N/LVDS<br />_TX0_D1N | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 9 | MIPI_DSI_TX0_D0P/LVDS<br />_TX0_D0P | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 10 | MIPI_DSI_TX0_D0N/LVDS<br />_TX0_D0N | DSI/LVDS interface | DSI/LVDSdifferential pair |
| 11 | HDMI_TXCLKN_PORT | HDMI output interface | HDMIdifferential pair |
| 12 | HDMI_TXCLKP_PORT | HDMI output interface | HDMIdifferential pair |
| 13 | HDMI_TX0N_PORT | HDMI output interface | HDMIdifferential pair |
| 14 | HDMI_TX0P_PORT | HDMI output interface | HDMIdifferential pair |
| 15 | HDMI_TX1N_PORT | HDMI output interface | HDMIdifferential pair |
| 16 | HDMI_TX1P_PORT | HDMI output interface | HDMIdifferential pair |
| 17 | HDMI_TX2N_PORT | HDMI output interface | HDMIdifferential pair |
| 18 | HDMI_TX2P_PORT | HDMI output interface | HDMIdifferential pair |
| 19 | SATA2_RXN/GPIO0_C7 | SATA interface or <br />GPIO | PWM,UARTmultiplexed pin |
| 20 | SATA2_RXP/GPIO0_C5 | SATA interface or <br />GPIO | PWM, SPImultiplexed pins |
| 21 | SATA2_TXN/GPIO1_A4 | SATA interface or <br />GPIO | IIS,UART,PDM,SPDIFmultiplexed pins |
| 22 | SATA2_TXP/GPIO0_B7 | SATA interface or | PWM,CPUAVSmultiplexed pin |
| 23 | USB3_HOST1_SSTXP | USB3.0 interface | SATA,QSGMIImultiplexed pins |
| 24 | USB3_HOST1_SSTXN | USB3.0 interface | SATA,QSGMIImultiplexed pins |
| 25 | USB3_HOST1_SSRXP | USB3.0 interface | SATA,QSGMIImultiplexed pins |
| 26 | USB3_HOST1_SSRXN | USB3.0 interface | SATA,QSGMIImultiplexed pins |
| 27 | USB3_HOST1_DP | USB3.0 interface | USB3.0 data differential pair |
| 28 | USB3_HOST1_DM | USB3.0 interface | USB3.0 data differential pair |
| 29 | USB3_OTG0_SSTXP | USB3.0 interface | SATAmultiplexed pins |
| 30 | USB3_OTG0_SSTXN | USB3.0 interface | SATAmultiplexed pins |
| 31 | USB3_OTG0_SSRXP | USB3.0 interface | SATAmultiplexed pins |
| 32 | USB3_OTG0_SSRXN | USB3.0 interface | SATAmultiplexed pins |
| 33 | USB3_OTG0_DM | USB3.0 interface | USB3.0OTGdifferential pair |
| 34 | USB3_OTG0_DP | USB3.0 interface | USB3.0OTGdifferential pair |
| 35 | DSI_TX1_D3N/EDP_TX_D<br />3N | DSI/EDP interface | DSI/EDPdifferential pair |
| 36 | DSI_TX1_D3P/EDP_TX_D<br />3P | DSI/EDP interface | DSI/EDPdifferential pair |
| 37 | DSI_TX1_D2N/EDP_TX_D<br />2N | DSI/EDP interface | DSI/EDPdifferential pair |
| 38 | DSI_TX1_D2P/EDP_TX_D<br />2P | DSI/EDP interface | DSI/EDPdifferential pair |
| 39 | DSI_TX1_D1N/EDP_TX_D<br />1N | DSI/EDP interface | DSI/EDPdifferential pair |
| 40 | DSI_TX1_D1P/EDP_TX_D<br />1P | DSI/EDP interface | DSI/EDPdifferential pair |
| 41 | DSI_TX1_D0N/EDP_TX_D<br />0N | DSI/EDP interface | DSI/EDPdifferential pair |
| 42 | DSI_TX1_D0P/EDP_TX_D<br />0P | DSI/EDP interface | DSI/EDPdifferential pair |
| 43 | DSI_TX1_CLKN/EDP_TX_<br />AUXN | DSI/EDP interface | DSI/EDPdifferential pair |

## Core Board Pin Definition2

| Pin<br /> number | Signal | Type | Description |
|---|---|---|---|
| 44 | DSI_TX1_CLKP/EDP_TX_<br />AUXP | DSI/EDP interface | DSI/EDPdifferential pair |
| 45 | REFCLK_OUT_CAM | clock signal | GPIO, camera clock multiplexedSignal |
| 46 | UART2_RX_M0_DEBUG | Serial port 2 | GPIO, serial port multiplexed pins |
| 47 | UART2_TX_M0_DEBUG | Serial port 2 | GPIO, serial port multiplexed pins |
| 48 | GPIO0_A7 | GPIO |  |
| 49 | RESETN | reset key | Hardware reset pin, active low |
| 50 | USB3_OTG0_VBUSDET | USB3.0 interface | OTG detection pin |
| 51 | USB3_OTG0_ID | USB3.0 interface | OTGID pin |
| 52 | GND | Ground | Ground |
| 53 | GND | Ground | Ground |
| 54 | VCC3V3_SYS | 3V3 input | Core module 3.3V power input, ensuring 1A continuous current of <br /> |
| 55 | VCC3V3_SYS | 3V3 input | Core module 3.3V power input, ensuring 1A continuous current of <br /> |
| 56 | EXT_EN | enable signal | PMU enables output Signal |
| 57 | RK809_PWRON | PWRON button |  |
| 58 | MIC1_INN | microphone input | PMU simulates audio input pin |
| 59 | MIC1_INP | microphone input | PMU simulates audio input pin |
| 60 | SPKP_OUT | speaker interface | PMU analog audio output pin |
| 61 | SPKN_OUT | speaker interface | PMU analog audio output pin |
| 62 | HPL_OUT | audio output signal | PMU analog audio output pin |
| 63 | HPR_OUT | audio output signal | PMU analog audio output pin |
| 64 | GND | Ground | Ground |
| 65 | GMAC0_TXCLK | Ethernet Interface | UART,SDMCmultiplexed pin |
| 66 | GMAC0_TXEN | Ethernet Interface | UART, SPImultiplexed pins |
| 67 | GMAC0_TXD0 | Ethernet Interface | UART, SPImultiplexed pins |
| 68 | GMAC0_TXD1 | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 69 | GMAC0_TXD2 | Ethernet Interface | UART,SDMCmultiplexed pin |
| 70 | GMAC0_TXD3 | Ethernet Interface | UART,SDMCmultiplexed pin |
| 71 | GMAC0_RXCLK | Ethernet Interface | UART,SDMCmultiplexed pin |
| 72 | GMAC0_RXD3 | Ethernet Interface | UART,SDMCmultiplexed pin |
| 73 | GMAC0_RXD2 | Ethernet Interface | UART,SDMCmultiplexed pin |
| 74 | GMAC0_RXD1 | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 75 | GMAC0_RXD0 | Ethernet Interface | UART, SPImultiplexed pins |
| 76 | GMAC0_RXDV_CRS | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 77 | ETH0_REFCLKO_25M | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 78 | GMAC0_MCLKINOUT | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 79 | GMAC0_MDC | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 80 | GMAC0_MDIO | Ethernet Interface | IIS,UART,SPImultiplexed pins |
| 81 | SDMMC0_CLK/CAN0_RX<br />_M1 | SD interface or <br />CAN | UART,PWMmultiplexed pin |
| 82 | SDMMC0_D3 | SD interface | UARTmultiplexed pins |
| 83 | SDMMC0_D1 | SD interface | UART,PWMmultiplexed pin |
| 84 | SDMMC0_D0 | SD interface | UART,PWMmultiplexed pin |
| 85 | SDMMC0_D2 | SD interface | UARTmultiplexed pins |
| 86 | SDMMC0_CMD/CAN0_TX<br />_M1 | SD interface or <br />CAN | UART,PWMmultiplexed pin |

## Core Board Pin Definition3

| Pin<br /> number | Signal | Type | Description |
|---|---|---|---|
| 87 | GND | Ground | Ground |
| 88 | SDMMC0_DET_L | SD interface | SATA,PCIEmultiplexed pins |
| 89 | SARADC_VIN1 | ADC input tube <br /> pin | Main CPUADC sampling input pin |
| 90 | SARADC_VIN0_KEY/REC<br />OVERY | ADC input tube <br /> pin | Main CPUADC sampling input pin |
| 91 | UART8_RX_M0 | Serial port 8 | SPImultiplexed pins |
| 92 | UART8_RTSN_M0 | Serial port 8 | SDMMC,IIC,CANmultiplexed pins |
| 93 | UART8_CTSN_M0 | Serial port 8 | SDMMC,IIC,CANmultiplexed pins |
| 94 | UART8_TX_M0 | Serial port 8 | IIS,GMAC,SPImultiplexed pins |
| 95 | I2C3_SCL_M0 | I2C3Signal | UART,CAN,AUDIO,ACODECmultiplexed tube <br /> pin |
| 96 | I2C3_SDA_M0 | I2C3Signal | UART,CAN,AUDIO,ACODECmultiplexed tube <br /> pin |
| 97 | GPIO0_A5 | GPIO | SDMMC,SATA,PCIEmultiplexed pins |
| 98 | GPIO0_A6 | GPIO | SATA,PCIEmultiplexed pins |
| 99 | GPIO0_C3 | GPIO | PWM,SPI,CAN,PCIE,IISmultiplexed pins |
| 100 | RK809_32KOUT_WIFI | clock output | 32768HZclock output information of PMU |
| 101 | GPIO4_C3 | GPIO | PWM,SPI,CAN,PCIE,IISmultiplexed pins |
| 102 | GPIO4_C2 | GPIO | PWM,SPI,CAN,PCIE,IISmultiplexed pins |
| 103 | GPIO4_C6 | GPIO | PWM,SPI,SATA,UART,IISmultiplexed pins |
| 104 | GPIO4_C5 | GPIO | PWM,SPI,SATA,UART,IISmultiplexed pins |
| 105 | GPIO4_C4 | GPIO | EDP,SPDIF,SATA,PCIE,IISmultiplexed pins |
| 106 | GPIO3_D2 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 107 | HP_DET_L_GPIO3_C2 | audio output signal | LCD,SPI,UART,IISmultiplexed pins |
| 108 | GPIO3_D5 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 109 | GPIO3_C7 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 110 | GPIO3_D0 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 111 | GPIO3_C6 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 112 | GPIO3_C3 | GPIO | LCD,SPI,UART,IISmultiplexed pins |
| 113 | GMAC0_INT/PMEB_GPIO<br />2_D2 | Ethernet Interface | LCD,SPI,PCIE,IISmultiplexed pins |
| 114 | GMAC0_RSTN_GPIO2_D3 | Ethernet Interface | LCD,SPI,PCIE,IISmultiplexed pins |
| 115 | GMAC1_RSTN_GPIO2_D1 | Ethernet Interface | LCD,SPI,PCIE,IISmultiplexed pins |
| 116 | GMAC1_INT/PMEB_GPIO<br />2_D0 | Ethernet Interface | LCD,SPI,PCIE,IISmultiplexed pins |
| 117 | UART3_TX_M1 | serial port 3 | LCD,PWM,GMAC,PDMplexed pins |
| 118 | UART3_RX_M1 | serial port 3 | LCD,PWM,GMAC,PDMplexed pins |
| 119 | GSENSOR_INT_L_GPIO3_<br />C1 | SensorSignal | LCD,SPI,PCIE,IISmultiplexed pins |
| 120 | GPIO3_D4 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 121 | I2C5_SDA_M0 | I2C5Signal | LCD,VOP,GMAC,PDMplexed pins |
| 122 | I2C5_SCL_M0 | I2C5Signal | LCD,VOP,GMAC,PDMplexed pins |
| 123 | SPDIF_TX_M1 | Optical fiber interface | PWM,GMAC,UART,IISmultiplexed pins |
| 124 | GPIO3_D1 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 125 | GPIO3_D3 | GPIO | CIF,EBC,SDMMC,IISmultiplexed pins |
| 126 | GPIO3_C4 | GPIO | PWM,GMAC,UART,PDMplexed pins |
| 127 | BT_WAKE_HOST_H_GPI<br />O3_A1 | WIFI/BTSignal | LCD,SPI,PCIE,SDMMCmultiplexed pins |
| 128 | HOST_WAKE_BT_H_GPI<br />O3_A2 | WIFI/BTSignal | LCD,GMAC,IIS,SDMMCmultiplexed pins |
| 129 | GPIO3_B6 | GPIO | LCD,GMAC,IIC,PWMmultiplexed pins |

## Core Board Pin Definition4

| Pin | Signal | Type | Description |
|---|---|---|---|
| 130 | GND | Ground | Ground |
| 131 | GPIO3_B5 | GPIO | LCD,GMAC,IIC,PWMmultiplexed pins |
| 132 | BT_REG_ON_H_GPIO3_<br />A0 | WIFI/BTSignal | LCD,SPI,UART,IISmultiplexed pins |
| 133 | UART4_RX_M1 | serial port 4 | LCD,GMAC,PWMmultiplexed pins |
| 134 | UART4_TX_M1 | serial port 4 | LCD,GMAC,PWMmultiplexed pins |
| 135 | I2S3_SDI_M0 | I2S3Signal | LCD,GMAC,IIS,SDMMCmultiplexed pins |
| 136 | I2S3_LRCK_M0 | I2S3Signal | LCD,GMAC,IIS,SDMMCmultiplexed pins |
| 137 | I2S3_SCLK_M0 | I2S3Signal | LCD,GMAC,IIS,SDMMCmultiplexed pins |
| 138 | I2S3_SDO_M0 | I2S3Signal | LCD,GMAC,IIS,SDMMCmultiplexed pins |
| 139 | GPIO4_A6 | GPIO | ISP,EBC,GMAC,SPI,IISmultiplexed pins |
| 140 | TP_RST_L_GPIO0_B6 | DSI/EDP reset <br />Signal or GPIO | IIC,SPI,PCIE,PWMmultiplexed pins |
| 141 | PWM7_IR | Infrared PWM letter <br /> number | SPI, PCIEmultiplexed pins |
| 142 | TP_INT_L_GPIO0_B5 | DSI/EDP interrupt <br />Signal or GPIO | IIC,SPI,PCIE,PWMmultiplexed pins |
| 143 | I2C1_SCL_TP | I2C1Signal | CAN, PCIE, JTAG multiplexed pins |
| 144 | I2C1_SDA_TP | I2C1Signal | IIC,CAN,PCIE,JTAGmultiplexed pins |
| 145 | GPIO4_B2_IIC4SDA | GPIO | IIC,EBC,GMAC,SPI,IISmultiplexed pins |
| 146 | USB2_HOST2_DM | USB2.0 interface | USB signaldifferential pair |
| 147 | USB2_HOST2_DP | USB2.0 interface | USB signaldifferential pair |
| 148 | USB2_HOST3_DM | USB2.0 interface | USB signaldifferential pair |
| 149 | USB2_HOST3_DP | USB2.0 interface | USB signaldifferential pair |
| 150 | GPIO4_B3_IIC4SCL | GPIO | IIC,EBC,SPI,IISmultiplexed pins |
| 151 | GPIO4_C0_CIFCLKOUT | GPIO | CIF,EBC,PWMmultiplexed pins |
| 152 | GPIO4_B4_IIC2SDA | GPIO | IIC,EBC,CANmultiplexed pins |
| 153 | GPIO4_B5_IIC2SCL | GPIO | IIC,EBC,CAN,IISmultiplexed pins |
| 154 | GPIO3_D7 | GPIO | CIF,EBC,GMAC,UART,PDMplexed tube <br /> pin |
| 155 | HDMITX_SDA | HDMI output connected to <br /> port | IICmultiplexed pin |
| 156 | HDMITX_CEC_M0 | HDMI output connected to <br /> port | SPImultiplexed pins |
| 157 | HDMITX_SCL | HDMI output connected to <br /> port | IICmultiplexed pin |
| 158 | HDMI_TX_HPDIN | HDMI output connected to <br /> port | HDMI detect pin |
| 159 | GMAC1_RXCLK_M0 | Ethernet Interface | LCD,SPI,PCIE,IISmultiplexed pins |
| 160 | MIPI_CSI_RX_D3P | CSI interface | CSIdifferential pair |
| 161 | MIPI_CSI_RX_D3N | CSI interface | CSIdifferential pair |
| 162 | MIPI_CSI_RX_D2P | CSI interface | CSIdifferential pair |
| 163 | MIPI_CSI_RX_D2N | CSI interface | CSIdifferential pair |
| 164 | MIPI_CSI_RX_CLK1P | CSI interface | CSIdifferential pair |
| 165 | MIPI_CSI_RX_CLK1N | CSI interface | CSIdifferential pair |
| 166 | MIPI_CSI_RX_CLK0P | CSI interface | CSIdifferential pair |
| 167 | MIPI_CSI_RX_CLK0N | CSI interface | CSIdifferential pair |
| 168 | MIPI_CSI_RX_D1P | CSI interface | CSIdifferential pair |
| 169 | MIPI_CSI_RX_D1N | CSI interface | CSIdifferential pair |
| 170 | MIPI_CSI_RX_D0P | CSI interface | CSIdifferential pair |
| 171 | MIPI_CSI_RX_D0N | CSI interface | CSIdifferential pair |
| 172 | GND | Ground | Ground |
