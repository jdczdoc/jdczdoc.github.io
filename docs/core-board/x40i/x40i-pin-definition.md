---
sidebar_position: 3
title: 引脚定义
description: X40I核心板引脚定义
---

# 引脚定义

## 核心板引脚定义1

| 引脚编号 | 信号 | 类型/复用说明 | 描述 |
| --- | --- | --- | --- |
| 1 | SDC0-D3 | SDIO0通道，可复用为GPIO接口或UART0_RX |  |
| 2 | SDC0-D2 | SDIO0通道，可复用为GPIO接口 |  |
| 3 | SDC0-D1 | SDIO0通道，可复用为GPIO接口 |  |
| 4 | SDC0-D0 | SDIO0通道，可复用为GPIO接口 |  |
| 5 | HSCL | HDMI I2C时钟脚 | HDMI专用管脚 |
| 6 | HSDA | HDMI I2C数据脚 | HDMI专用管脚 |
| 7 | HCEC | HDMI CEC脚 | HDMI专用管脚 |
| 8 | HHPD | HDMI侦测脚 | HDMI专用管脚 |
| 9 | HTXCN | HDMI差分对 | HDMI专用管脚 |
| 10 | HTXCP | HDMI差分对 | HDMI专用管脚 |
| 11 | HTX0N | HDMI差分对 | HDMI专用管脚 |
| 12 | HTX0P | HDMI差分对 | HDMI专用管脚 |
| 13 | HTX1N | HDMI差分对 | HDMI专用管脚 |
| 14 | HTX1P | HDMI差分对 | HDMI专用管脚 |
| 15 | HTX2N | HDMI差分对 | HDMI专用管脚 |
| 16 | HTX2P | HDMI差分对 | HDMI专用管脚 |
| 17 | USB-DM0 | USB差分对 | USB OTG差分对 |
| 18 | USB-DP0 | USB差分对 | USB OTG差分对 |
| 19 | USB-DM1 | USB差分对 | USB HOST差分对 |
| 20 | USB-DP1 | USB差分对 | USB HOST差分对 |
| 21 | USB-DP2 | USB差分对 | USB HOST差分对 |
| 22 | USB-DM2 | USB差分对 | USB HOST差分对 |
| 23 | CSI-D0 | 并口摄像头数据接口，可复用为GPIO |  |
| 24 | CSI-D1 | 并口摄像头数据接口，可复用为GPIO |  |
| 25 | CSI-D2 | 并口摄像头数据接口，可复用为GPIO |  |
| 26 | CSI-D3 | 并口摄像头数据接口，可复用为GPIO |  |
| 27 | CSI-D4 | 并口摄像头数据接口，可复用为GPIO |  |
| 28 | CSI-D5 | 并口摄像头数据接口，可复用为GPIO |  |
| 29 | CSI-D6 | 并口摄像头数据接口，可复用为GPIO |  |
| 30 | CSI-D7 | 并口摄像头数据接口，可复用为GPIO |  |
| 31 | CSI-HSYNC | 并口摄像头数据接口，可复用为GPIO |  |
| 32 | CSI-VSYNC | 并口摄像头数据接口，可复用为GPIO |  |
| 33 | CSI-MCLK | 并口摄像头数据接口，可复用为GPIO |  |
| 34 | CSI-PCLK | 并口摄像头数据接口，可复用为GPIO |  |
| 35 | USB0-DRVVBUS | PI13，可复用为SPI、串口或中断 |  |
| 36 | AP-CK32KO | PI12，可复用为SPI、串口或中断 |  |
| 37 | SDC0-DET | PI15，可复用为SPI、PS2或中断 |  |
| 38 | AP-UART5-TX | PI10，可复用为SPI、串口或中断 |  |
| 39 | AP-UART5-RX | PI11，可复用为SPI、串口或中断 |  |
| 40 | UART2-TX-GPS | PI19，可复用为SPI、串口或中断 |  |
| 41 | UART2-RX-GPS | PI18，可复用为SPI、串口或中断 |  |
| 42 | UART2-RTS-GPS | PI17，可复用为SPI、串口或中断 |  |
| 43 | UART2-CTS-GPS | PI16，可复用为SPI、串口或中断 |  |

## 核心板引脚定义2

| 引脚编号 | 信号 | 类型/复用说明 | 描述 |
| --- | --- | --- | --- |
| 44 | ECLKIN | GMAC数据接口，可复用为GPIO或CAN总线接口 |  |
| 45 | EMDC | GMAC数据接口，可复用为GPIO或串口 |  |
| 46 | EMDIO | GMAC数据接口，可复用为GPIO或串口 |  |
| 47 | ETXCK | GMAC数据接口，可复用为GPIO或串口 |  |
| 48 | EPHY-RST-N | GMAC数据接口，可复用为GPIO或CAN总线接口 |  |
| 49 | ERXCK | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 50 | ERXDV | GMAC数据接口，可复用为GPIO或串口 |  |
| 51 | ERXERR | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 52 | ERXD0 | GMAC数据接口，可复用为GPIO、串口或SPI接口 |  |
| 53 | ERXD1 | GMAC数据接口，可复用为GPIO、串口或SPI接口 |  |
| 54 | ERXD2 | GMAC数据接口，可复用为GPIO、串口或SPI接口 |  |
| 55 | ERXD3 | GMAC数据接口，可复用为GPIO、串口或SPI接口 |  |
| 56 | ECRS | GMAC数据接口，可复用为GPIO或串口 |  |
| 57 | ETXEN | GMAC数据接口，可复用为GPIO或串口 |  |
| 58 | ETXD0 | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 59 | ETXD1 | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 60 | ETXD2 | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 61 | ETXD3 | GMAC数据接口，可复用为GPIO或SPI接口 |  |
| 62 | SPI2_CLK | SPI接口，可复用为GPIO |  |
| 63 | SPI2_MOSI | SPI接口，可复用为GPIO |  |
| 64 | SPI2_MISO | SPI接口，可复用为GPIO |  |
| 65 | SPI2_CS0 | SPI接口，可复用为GPIO |  |
| 66 | LCD-PWM | PWM0接口，可复用为GPIO |  |
| 67 | LCD-PIO0 | PWM7接口，可复用为GPIO |  |
| 68 | LCD-BL-EN | PWM6接口，可复用为GPIO |  |
| 69 | LCD-PIO1 | 普通GPIO口，可复用为串口3或LCD显示接口 |  |
| 70 | USB-ID | PH16，可复用为LCD、矩阵键盘、中断或CSI |  |
| 71 | HP_EDT | PH12，可复用为LCD、中断或CSI |  |
| 72 | CTP-INT | PH15，可复用为LCD、矩阵键盘、中断或CSI |  |
| 73 | CAM_PN | 普通GPIO，可复用为LCD、中断、矩阵键盘或CSI接口 |  |
| 74 | CAM_PD | 普通GPIO口，可复用为串口3或LCD显示接口 |  |
| 75 | CAM_EN | PH23，可复用为LCD、矩阵键盘或CSI |  |
| 76 | CSI-RST | PH18，可复用为LCD、矩阵键盘、中断或CSI |  |
| 77 | GPS-STANDBY | PH19，可复用为LCD、矩阵键盘、中断或CSI |  |
| 78 | USB0-VBUSDET | PH17，可复用为LCD、矩阵键盘、中断或CSI |  |
| 79 | BB-PWR-BAT | PH25，可复用为LCD、矩阵键盘或CSI |  |
| 80 | AP-WAKP-2/3G | PH22，可复用为LCD、矩阵键盘或CSI |  |
| 81 | UART4_TX | 串口4，可复用为GPIO、LCD、中断或摄像头接口 |  |
| 82 | UART4_RX | 串口4，可复用为GPIO、LCD、中断或摄像头接口 |  |
| 83 | UART0_TX | 串口0，可复用为GPIO口 |  |
| 84 | UART0_RX | 串口0，可复用为GPIO口 |  |
| 85 | RESET_KEY | 复位管脚 | 低电平复位SOC |
| 86 | CTP-RST | PH14，可复用为LCD、矩阵键盘、中断或CSI |  |

## 核心板引脚定义3

| 引脚编号 | 信号 | 类型/复用说明 | 描述 |
| --- | --- | --- | --- |
| 87 | UART3_TX | PG6，可复用为CSI或串口 |  |
| 88 | UART3_RX | PG7，可复用为CSI或串口 |  |
| 89 | UART5-RX | 串口5，可复用为GPIO、LCD、中断或CSI接口 |  |
| 90 | UART5-TX | 串口5，可复用为GPIO、LCD、中断或CSI接口 |  |
| 91 | UART7-TX | PI20，可复用为PS2、串口或PWM2 |  |
| 92 | UART7-RX | PI21，可复用为PS2、串口或PWM3 |  |
| 93 | TWI1-SDA | I2C1通道，可复用为GPIO |  |
| 94 | TWI1-SCK | I2C1通道，可复用为GPIO |  |
| 95 | TWI2-SCK | I2C2通道，可复用为GPIO或PWM4 |  |
| 96 | TWI2-SDA | I2C2通道，可复用为GPIO或PWM5 |  |
| 97 | KEYADC0 | ADC0通道，可用于做多路独立按键检测 |  |
| 98 | FEL | 镜像升级专用管脚 | 低电平时进入 下载模式 |
| 99 | LVDS1_D0N-LCD_D11 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 100 | LVDS1_D0P-LCD_D10 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 101 | LVDS1_D1N-LCD_D13 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 102 | LVDS1_D1P-LCD_D12 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 103 | LVDS1_D2N-LCD_D15 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 104 | LVDS1_D2P-LCD_D14 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 105 | LVDS1_DCKN-LCD_D17 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 106 | LVDS1_DCKP-LCD_D16 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 107 | LVDS1_D3N-LCD_D19 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 108 | LVDS1_D3P-LCD_D18 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 109 | LCD_D20 | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 110 | LCD_D21 | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 111 | LCD_D22 | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 112 | LCD_D23 | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 113 | LCD-CLK | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 114 | LCD-VSYNC | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 115 | LCD-HSYNC | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 116 | LCD-DE | RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 117 | MIPI-DSI-D0P | MIPI DSI差分对 | MIPI专用管脚 |
| 118 | MIPI-DSI-D0N | MIPI DSI差分对 | MIPI专用管脚 |
| 119 | MIPI-DSI-D1P | MIPI DSI差分对 | MIPI专用管脚 |
| 120 | MIPI-DSI-D1N | MIPI DSI差分对 | MIPI专用管脚 |
| 121 | MIPI-DSI-D2P | MIPI DSI差分对 | MIPI专用管脚 |
| 122 | MIPI-DSI-D2N | MIPI DSI差分对 | MIPI专用管脚 |
| 123 | MIPI-DSI-D3P | MIPI DSI差分对 | MIPI专用管脚 |
| 124 | MIPI-DSI-D3N | MIPI DSI差分对 | MIPI专用管脚 |
| 125 | MIPI-DSI-CKP | MIPI DSI差分对 | MIPI专用管脚 |
| 126 | MIPI-DSI-CKN | MIPI DSI差分对 | MIPI专用管脚 |
| 127 | PWRON | 电源开关机信号 | 低电平有效 |
| 128 | LVDS0_D0N-LCD_D1 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 129 | LVDS0_D0P-LCD_D0 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |

## 核心板引脚定义4

| 引脚编号 | 信号 | 类型/复用说明 | 描述 |
| --- | --- | --- | --- |
| 130 | LVDS0_D1N-LCD_D3 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 131 | LVDS0_D1P-LCD_D2 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 132 | LVDS0_D2N-LCD_D5 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 133 | LVDS0_D2P-LCD_D4 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 134 | LVDS0_DCKN-LCD_D7 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 135 | LVDS0_DCKP-LCD_D6 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 136 | LVDS0_D3P-LCD_D8 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 137 | LVDS0_D3N-LCD_D9 | LVDS、RGB显示接口对应管脚对，可复用为GPIO口 |  |
| 138 | PS | PMU电源输出 |  |
| 139 | PS | PMU电源输出 |  |
| 140 | VBAT | 电池供电管脚 |  |
| 141 | VBAT | 电池供电管脚 |  |
| 142 | TS | 电池TS信号 |  |
| 143 | DC_5V | 核心板供电管脚 | 4.5到5.5V电源供电 |
| 144 | DC_5V | 核心板供电管脚 | 4.5到5.5V电源供电 |
| 145 | GND | 参考地 |  |
| 146 | GND | 参考地 |  |
| 147 | USBVBUS | OTG供电接口 |  |
| 148 | VCC-RTC | RTC电源输入 | 默认PMU RTC供电，默认PMU的RTC耗电电流在80uA左右，如果外挂RTC时钟芯片，该管脚可以悬空 |
| 149 | CVBS | TVOUT3通道 |  |
| 150 | TVIN0 | TVIN0通道 |  |
| 151 | HPOUTL | 耳机输出管脚 |  |
| 152 | HPOUTR | 耳机输出管脚 |  |
| 153 | AGND | 模拟地 |  |
| 154 | MICIN1 | 麦克风输入管脚 |  |
| 155 | MICIN2 | 麦克风输入管脚 |  |
| 156 | VMIC | 麦克风偏置电压 |  |
| 157 | ESRXP | SATA差分对 | SATA专用管脚 |
| 158 | ESRXM | SATA差分对 | SATA专用管脚 |
| 159 | ESTXP | SATA差分对 | SATA专用管脚 |
| 160 | ESTXM | SATA差分对 | SATA专用管脚 |
| 161 | BT-WAKE-AP-SOC | PH11，可复用为LCD、矩阵键盘、中断或CSI |  |
| 162 | WL-SDIO-CMD | PG0，可复用为SDIO或CSI |  |
| 163 | WL-SDIO-D0 | PG2，可复用为SDIO或CSI |  |
| 164 | WL-SDIO-D1 | PG3，可复用为SDIO或CSI |  |
| 165 | WL-SDIO-D2 | PG4，可复用为SDIO或CSI |  |
| 166 | WL-SDIO-D3 | PG5，可复用为SDIO或CSI |  |
| 167 | BT-UART-CTS | PG8，可复用为SDIO、串口或CSI |  |
| 168 | BT-UART-RTS | PG9，可复用为SDIO、串口或CSI |  |
| 169 | WL-WAKE-AP-SOC | PH9，可复用为LCD、矩阵键盘、中断或CSI |  |
| 170 | WL-SDIO-CLK | PG1，可复用为SDIO或CSI |  |
| 171 | SDC0-CLK | SDIO0通道，可复用为GPIO接口或UART0_TX |  |
| 172 | SDC0-CMD | SDIO0通道，可复用为GPIO接口 |  |
