---
sidebar_position: 3
title: 硬件设计与接口资源
description: 硬件设计与接口资源
---

# 硬件设计与接口资源

## 管脚描述

X3568CV2除上述不可用作GPIO口、电源引脚和系统地外的信号引脚的其他GPIO口都可以复用作其他功能，如I2C、UART、SPI、I2S、PWM等等。

## 核心板GPIO电平

GPIO电源域的电源脚描述如下：

| 电源域 | GPIO供电电压 | X3568CV2核心板IO电平 |
| --- | --- | --- |
| VCC3V3_SYS | 3.3V | 3.3V |
| VCC1V8_SYS | 1.8V | 1.8V |
| VCC_SD | 3.3V/1.8V | 3.3V/1.8V |
| VCC_1V8 | 1.8V | 1.8V |
| VCC_3V3 | 3.3V | 3.3V |
| VCC_IO | 1.8V/3.3V | 按配置 |

在做底板设计时，注意外设芯片的IO电平要与核心板的IO电平保持一致，否则会烧坏CPU。

## 电源设计

X3568CV2核心板电源只有 VCC3V3_SYS 和 VCC_RTC：113/114 脚为 VCC3V3_SYS 3.3V 输入（3A），127 脚为 VCC_RTC 3.0V 输出；111/112 脚为 GND，126 脚为 RK809_PWRON 开机键。

- 113、114脚：VCC3V3_SYS 3.3V 输入（3A）；127脚：VCC_RTC 3.0V 输出；111、112脚：GND；126脚：RK809_PWRON 开机键。

- 板载 PMIC 产生内核、DDR、IO 等内部电源；VCC_RTC 为 3.0V 输出，可用于 RTC 备份。

- 电源走线宽度≥2mm，换层过孔不少于5个。

## USB设计

X3568CV2 提供 1 路 USB3.0 Host1（SS 89~92，DM/DP 99/100）、1 路 USB3.0 OTG0（SS 93~96，DM/DP 97/98）和 2 路 USB2.0 Host2/Host3（18~21）；VBUS 检测为 101 脚，OTG ID 为 102 脚。

## MIPI设计

X3568CV2 支持 1 路 MIPI DSI0/LVDS、1 路 MIPI DSI1/eDP 和 1 路 MIPI CSI：CSI 使用 27~38 脚，DSI0/LVDS 使用 39~48 脚，DSI1/eDP 使用 79~88 脚；摄像头参考时钟为 76 脚。

## 上电时序

X3568CV2 由 VCC3V3_SYS 3.3V 供电，板载 PMIC 按时序建立 1.8V 与核心电源。底板上电顺序建议：VCC3V3_SYS → RK809_PWRON → 系统复位释放。

| 序号 | 信号 | 说明 |
| --- | --- | --- |
| 1 | VCC3V3_SYS | 3.3V/3A 输入建立 |
| 2 | RK809_PWRON | 低电平触发开机 |
| 3 | 系统复位 | 电源稳定后释放 |
| 4 | MASKROM | 需要烧录时进入 |
| 5 | 系统启动 | UART2 输出启动日志 |

## 调试接口

调试串口为 UART2：TX 为 73 脚，RX 为 74 脚，3.3V 电平，默认 115200-8-N-1；RK809_PWRON 为 126 脚。

## 显示接口

X3568CV2 支持 HDMI2.0、eDP、MIPI DSI 和 LVDS。HDMI 使用 25、49~56 脚；eDP 使用 79~88 脚；MIPI DSI0/LVDS 使用 39~48 脚；HDMI DDC/CEC 使用 22~24 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| HDMI HPD | 25 | HDMI_TX_HPDIN | 3.3V |
| HDMI CLKN | 49 | HDMI_TXCLKN_PORT | 差分/3.3V |
| HDMI CLKP | 50 | HDMI_TXCLKP_PORT | 差分/3.3V |
| HDMI D0N | 51 | HDMI_TX0N_PORT | 差分/3.3V |
| HDMI D0P | 52 | HDMI_TX0P_PORT | 差分/3.3V |
| HDMI D1N | 53 | HDMI_TX1N_PORT | 差分/3.3V |
| HDMI D1P | 54 | HDMI_TX1P_PORT | 差分/3.3V |
| HDMI D2N | 55 | HDMI_TX2N_PORT | 差分/3.3V |
| HDMI D2P | 56 | HDMI_TX2P_PORT | 差分/3.3V |
| DSI0/LVDS D3P | 39 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | 差分 |
| DSI0/LVDS D3N | 40 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | 差分 |
| DSI0/LVDS D2P | 41 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | 差分 |
| DSI0/LVDS D2N | 42 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | 差分 |
| DSI0/LVDS CLKP | 43 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | 差分 |
| DSI0/LVDS CLKN | 44 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | 差分 |
| DSI0/LVDS D1P | 45 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | 差分 |
| DSI0/LVDS D1N | 46 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | 差分 |
| DSI0/LVDS D0P | 47 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | 差分 |
| DSI0/LVDS D0N | 48 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | 差分 |
| DSI1/eDP D3N | 79 | DSI_TX1_D3N/EDP_TX_D3N | 差分 |
| DSI1/eDP D3P | 80 | DSI_TX1_D3P/EDP_TX_D3P | 差分 |
| DSI1/eDP D2N | 81 | DSI_TX1_D2N/EDP_TX_D2N | 差分 |
| DSI1/eDP D2P | 82 | DSI_TX1_D2P/EDP_TX_D2P | 差分 |
| DSI1/eDP D1N | 83 | DSI_TX1_D1N/EDP_TX_D1N | 差分 |
| DSI1/eDP D1P | 84 | DSI_TX1_D1P/EDP_TX_D1P | 差分 |
| DSI1/eDP D0N | 85 | DSI_TX1_D0N/EDP_TX_D0N | 差分 |
| DSI1/eDP D0P | 86 | DSI_TX1_D0P/EDP_TX_D0P | 差分 |
| DSI1/eDP AUXN | 87 | DSI_TX1_CLKN/EDP_TX_AUXN | 差分 |
| DSI1/eDP AUXP | 88 | DSI_TX1_CLKP/EDP_TX_AUXP | 差分 |
| HDMI DDC SDA | 22 | HDMITX_SDA | 3.3V |
| HDMI CEC | 23 | HDMITX_CEC_M0 | 3.3V |
| HDMI DDC SCL | 24 | HDMITX_SCL | 3.3V |

## 摄像头接口

核心板引出 1 路 MIPI CSI（4-lane，27~38 脚）；摄像头参考时钟为 76 脚，复位为 77 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 摄像头参考时钟 | 76 | REFCLK_OUT_CAM | 3.3V |
| 摄像头复位 | 77 | RESETn | 1.8V |
| MIPI CSI D3P | 27 | MIPI_CSI_RX_D3P | 差分 |
| MIPI CSI D3N | 28 | MIPI_CSI_RX_D3N | 差分 |
| MIPI CSI D2P | 29 | MIPI_CSI_RX_D2P | 差分 |
| MIPI CSI D2N | 30 | MIPI_CSI_RX_D2N | 差分 |
| MIPI CSI CLK1P | 31 | MIPI_CSI_RX_CLK1P | 差分 |
| MIPI CSI CLK1N | 32 | MIPI_CSI_RX_CLK1N | 差分 |
| MIPI CSI CLK0P | 33 | MIPI_CSI_RX_CLK0P | 差分 |
| MIPI CSI CLK0N | 34 | MIPI_CSI_RX_CLK0N | 差分 |
| MIPI CSI D1P | 35 | MIPI_CSI_RX_D1P | 差分 |
| MIPI CSI D1N | 36 | MIPI_CSI_RX_D1N | 差分 |
| MIPI CSI D0P | 37 | MIPI_CSI_RX_D0P | 差分 |
| MIPI CSI D0N | 38 | MIPI_CSI_RX_D0N | 差分 |

## USB 接口

X3568CV2 提供 USB3.0 Host1（89~100）、USB3.0 OTG0（93~102）和 USB2.0 Host2/Host3（18~21）；VBUS 检测为 101 脚，OTG ID 为 102 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| USB2 Host2 DM | 18 | USB2_HOST2_DM | 3.3V差分 |
| USB2 Host2 DP | 19 | USB2_HOST2_DP | 3.3V差分 |
| USB2 Host3 DM | 20 | USB2_HOST3_DM | 3.3V差分 |
| USB2 Host3 DP | 21 | USB2_HOST3_DP | 3.3V差分 |
| USB3 Host差分 | 89 | USB3_HOST1_SSTXP | 差分 |
| USB3 Host差分 | 90 | USB3_HOST1_SSTXN | 差分 |
| USB3 Host差分 | 91 | USB3_HOST1_SSRXP | 差分 |
| USB3 Host差分 | 92 | USB3_HOST1_SSRXN | 差分 |
| USB3 OTG差分/控制 | 93 | USB3_OTG0_SSTXP | 差分 |
| USB3 OTG差分/控制 | 94 | USB3_OTG0_SSTXN | 差分 |
| USB3 OTG差分/控制 | 95 | USB3_OTG0_SSRXP | 差分 |
| USB3 OTG差分/控制 | 96 | USB3_OTG0_SSRXN | 差分 |
| USB3 OTG差分/控制 | 97 | USB3_OTG0_DM | 差分 |
| USB3 OTG差分/控制 | 98 | USB3_OTG0_DP | 差分 |
| USB3 Host差分 | 99 | USB3_HOST1_DM | 差分 |
| USB3 Host差分 | 100 | USB3_HOST1_DP | 差分 |
| USB3 OTG VBUS检测/电阻分压 | 101 | USB3_OTG0_VBUSDET | 5V |
| USB3 OTG ID/电阻选择 | 102 | USB3_OTG0_ID | 1.8V/3.3V |

## 以太网接口

核心板提供 GMAC0 与 GMAC1 两路千兆以太网控制：GMAC0 RGMII 使用 128~147 脚，GMAC1 中断/复位为 158/159 脚；完整 GMAC1 数据引脚以原理图为准。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 千兆以太网信号 | 128 | GMAC0_RXCLK | 1.8V |
| 千兆以太网信号 | 129 | GMAC0_RXD0 | 1.8V |
| 千兆以太网信号 | 130 | GMAC0_RXD1 | 1.8V |
| 千兆以太网信号 | 131 | GMAC0_RXD2 | 1.8V |
| 千兆以太网信号 | 132 | GMAC0_RXD3 | 1.8V |
| 千兆以太网信号 | 133 | GMAC0_RXDV_CRS | 1.8V |
| 千兆以太网信号 | 134 | GMAC0_TXEN | 1.8V |
| 千兆以太网信号 | 135 | GMAC0_TXD0 | 1.8V |
| 千兆以太网信号 | 136 | GMAC0_TXD1 | 1.8V |
| 千兆以太网信号 | 137 | GMAC0_TXD2 | 1.8V |
| 千兆以太网信号 | 138 | GMAC0_TXD3 | 1.8V |
| 千兆以太网信号 | 139 | GMAC0_TXCLK | 1.8V |
| UART信号 | 140 | UART8_RX_M0 | 1.8V |
| UART信号 | 141 | UART8_TX_M0 | 1.8V |
| UART信号 | 142 | UART8_RTSn_M0 | 1.8V |
| UART信号 | 143 | UART8_CTSn_M0 | 1.8V |
| 千兆以太网信号 | 144 | GMAC0_MDC | 1.8V |
| 千兆以太网信号 | 145 | GMAC0_MCLKINOUT | 1.8V |
| 千兆以太网信号 | 146 | GMAC0_MDIO | 1.8V |
| 以太网参考时钟 | 147 | ETH0_REFCLKO_25M | 1.8V |
| 千兆以太网信号 | 158 | GMAC1_INT/PMEB_GPIO2_D0 | 3.3V |
| 千兆以太网信号 | 159 | GMAC1_RSTn_GPIO2_D1 | 3.3V |
| 千兆以太网信号 | 160 | GMAC0_INT/PMEB_GPIO2_D2 | 3.3V |
| 千兆以太网信号 | 161 | GMAC0_RSTn_GPIO2_D3 | 3.3V |

## 音频接口

音频包括耳机输出、扬声器输出、MIC 与检测，使用 117~122 脚；耳机检测在 175 脚。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| 耳机右声道 | 117 | HPR_OUT | 模拟 |
| 耳机左声道 | 118 | HPL_OUT | 模拟 |
| MIC1正输入 | 119 | MIC1_INP | 模拟 |
| MIC1负输入 | 120 | MIC1_INN | 模拟 |
| 扬声器正 | 121 | SPKP_OUT | 模拟 |
| 扬声器负 | 122 | SPKN_OUT | 模拟 |
| 耳机检测 | 175 | HP_DET_L_GPIO3_C2 | 3.3V |

## 存储与 SD 卡接口

存储接口为 SDMMC0，使用 103~109 脚，可接 TF 卡；CLK/CMD/DATA 按 50Ω 控制，卡座加 ESD。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| SD卡信号 | 103 | SDMMC0_DET_L | 3.3V |
| SD卡信号 | 104 | SDMMC0_D3 | 3.3V |
| SD卡信号 | 105 | SDMMC0_D2 | 3.3V |
| SD卡信号 | 106 | SDMMC0_D1 | 3.3V |
| SD卡信号 | 107 | SDMMC0_D0 | 3.3V |
| SD卡信号 | 108 | SDMMC0_CMD/CAN0_TX_M1 | 3.3V |
| SD卡信号 | 109 | SDMMC0_CLK/CAN0_RX_M1 | 3.3V |

## 低速接口与 GPIO

低速资源包括 4 路 UART、2 路 I2C、1 路 I2S、1 路 PWM、2 路 ADC 与多路 GPIO。UART2 为 73/74 脚，UART3 为 162/163 脚，UART4 为 182/183 脚，UART8 为 140~143 脚；I2C1 为 10/12 脚，I2C3 为 148/149 脚。

| 资源 | 数量 | 说明 |
| --- | --- | --- |
| UART | 4 路 | UART2 73/74；UART3 162/163；UART4 182/183；UART8 140~143 |
| I2C | 2 路 | I2C1 10/12；I2C3 148/149 |
| I2S | 1 路 | I2S3 184~187 |
| PWM | 1 路 | PWM7_IR 8 |
| ADC | 2 路 | SARADC_VIN0 124；SARADC_VIN1 125 |
| SPI | 未单独引出 | 可 GPIO 模拟或底板扩展 |
| GPIO | 多路 | GPIO0/3/4 复用 |

## 系统控制与电源

系统控制包括电源、开机、RTC、SARADC 按键/恢复、USB VBUS/ID 与扩展使能；VCC3V3_SYS 为 3.3V 输入（3A），VCC_RTC 为 3.0V 输出。

| 功能 | 引脚编号 | 信号名称 | 电压 |
| --- | --- | --- | --- |
| USB3 OTG VBUS检测/电阻分压 | 101 | USB3_OTG0_VBUSDET | 5V |
| USB3 OTG ID/电阻选择 | 102 | USB3_OTG0_ID | 1.8V/3.3V |
| 扩展电源使能/电阻跳选 | 110 | EXT_EN | 3.3V |
| 参考地 | 111 | GND | 0V |
| 参考地 | 112 | GND | 0V |
| 3.3V系统电源 | 113 | VCC3V3_SYS | 3.3V |
| 3.3V系统电源 | 114 | VCC3V3_SYS | 3.3V |
| SARADC按键/恢复模式/电阻分压 | 124 | SARADC_VIN0_KEY/RECOVERY | 1.8V |
| SARADC第二路/电阻分压 | 125 | SARADC_VIN1 | 1.8V |
| PMIC开机键 | 126 | RK809_PWRON | 1.8V |
| RTC备份电源 | 127 | VCC_RTC | 3V |

## 电阻跳选引脚说明

X3568CV2 部分引脚通过 0Ω 电阻、NC 电阻或分压电阻选择功能/电平。底板设计时应先确认默认配置，再按产品形态调整；下表列出主要电阻跳选引脚。

| 引脚编号 | 复用信号 | 电阻配置 | 说明 |
| --- | --- | --- | --- |
| 67 | PCIE20_REFCLKN/GPIO0_C4 | R4009 0Ω → PCIe2.0；R4010 0Ω → GPIO0_C4 | 二选一，不能同时贴 |
| 68 | PCIE20_REFCLKP/GPIO0_C2 | R4011 0Ω → PCIe2.0；R4012 0Ω → GPIO0_C2 | 二选一 |
| 69 | SATA2_RXN/GPIO0_C7 | R4013 0Ω → SATA2；R4014 0Ω → GPIO0_C7 | 二选一 |
| 70 | SATA2_RXP/GPIO0_C5 | R4015 0Ω → SATA2；R4016 0Ω → GPIO0_C5 | 二选一 |
| 71 | SATA2_TXN/GPIO1_A4 | R4017 0Ω → SATA2；R4018 0Ω → GPIO1_A4 | 二选一 |
| 72 | SATA2_TXP/GPIO0_B7 | R4019 0Ω → SATA2；R4020 0Ω → GPIO0_B7 | 二选一 |
| 79 | DSI1 D3N / EDP D3N | 0Ω串联 | DSI1/EDP 共用差分对 |
| 80 | DSI1 D3P / EDP D3P | 0Ω串联 | DSI1/EDP 共用差分对 |
| 81 | DSI1 D2N / EDP D2N | 0Ω串联 | DSI1/EDP 共用差分对 |
| 82 | DSI1 D2P / EDP D2P | 0Ω串联 | DSI1/EDP 共用差分对 |
| 83 | DSI1 D1N / EDP D1N | 0Ω串联 | DSI1/EDP 共用差分对 |
| 84 | DSI1 D1P / EDP D1P | 0Ω串联 | DSI1/EDP 共用差分对 |
| 85 | DSI1 D0N / EDP D0N | 0Ω串联 | DSI1/EDP 共用差分对 |
| 86 | DSI1 D0P / EDP D0P | 0Ω串联 | DSI1/EDP 共用差分对 |
| 87 | DSI1 CLKN / EDP AUXN | R4030 0Ω+R4039 NC → DSI；R4030 NC+R4039 0Ω → EDP | 时钟/AUX 二选一 |
| 88 | DSI1 CLKP / EDP AUXP | R4031 0Ω+R4040 NC → DSI；R4031 NC+R4040 0Ω → EDP | 时钟/AUX 二选一 |

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

HDMI/eDP/MIPI/LVDS/USB3/PCIe/SATA 差分对尽量同层走线，避免跨分割；换层时在过孔附近加回流地孔；连接器、ESD 与共模电感按信号流向排列。

## 电源与 EMC

5V 输入加 TVS、保险丝与去耦；3.3V/1.8V 按负载留余量；晶振、DCDC 电感远离高速差分与天线；外露接口加 ESD。

## 底板设计检查清单

- PS/VBUS 5V 电流与纹波是否满足 2A？

- PWRON/RESET/FEL 上下拉与按键是否正确？

- HDMI/eDP/MIPI/LVDS/USB3/PCIe/SATA/RGMII 阻抗与等长是否满足？

- SD、音频、耳机接口 ESD 是否完整？

- 调试 UART 与测试点是否保留？

## 订货配置

| 配置项 | 标准配置 | 可选配置 |
| --- | --- | --- |
| 内存 | 2GB LPDDR4 | 4GB/8GB |
| 存储 | 8GB eMMC | 4/16/32/64GB |
| 核心板 | X3568CV2 | 200PIN |
| 操作系统 | Android/Linux | 按项目定制 |

## 技术支持

联系九鼎创展技术支持时，请提供核心板型号、底板原理图页码、问题现象与串口日志。
