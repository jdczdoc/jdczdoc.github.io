---
sidebar_position: 2
title: 引脚定义
description: Z3588核心板引脚定义
---

# 引脚定义

本章节列出 Z3588 核心板引脚定义。设计底板时，应结合核心板原理图和芯片规格书确认复用功能、电压域以及上电默认状态。

## 核心板引脚定义（AA）

| 引脚编号 | 网络名 | 类型 | 描述 |
|---|---|---|---|
| A1 | GND | 系统地 |  |
| AA1 | GND | 系统地 |  |
| AA2 | GND | 系统地 |  |
| AA3 | GND | 系统地 |  |
| AA4 | GND | 系统地 |  |
| AA5 | VCCIO1_1V8 | GPIO11.8V电源域 | 需外部输入1.8V |
| AA6 | GND | 系统地 |  |
| AA7 | GPIO0_D2_U | GPIO | GPIO复用管脚 |
| AA8 | GPIO0_D1_U | GPIO | GPIO复用管脚 |
| AA9 | GPIO0_D6_D | GPIO | GPIO复用管脚 |
| AA10 | GPIO0_D5_U | GPIO | GPIO复用管脚 |
| AA11 | GPIO0_D4_U | GPIO | GPIO复用管脚 |
| AA12 | VCCIO4 | GPIO4电源域1.8V/3.3V可<br />选 | 需外部输入1.8V/3.3V |
| AA13 | GPIO1_A0_D | GPIO | GPIO复用管脚 |
| AA14 | GPIO1_A4_D | GPIO | GPIO复用管脚 |
| AA15 | GPIO1_B5_U | GPIO | GPIO复用管脚 |
| AA16 | GPIO1_B3_D | GPIO | GPIO复用管脚 |
| AA17 | GPIO1_B6_U | GPIO | GPIO复用管脚 |
| AA18 | GPIO1_B7_U | GPIO | GPIO复用管脚 |
| AA19 | GPIO1_D7_U | GPIO | GPIO复用管脚 |
| AA20 | GND | 系统地 |  |
| AA21 | GPIO1_C6_D | GPIO | GPIO复用管脚 |
| AA22 | GPIO1_C4_D | GPIO | GPIO复用管脚 |
| AA23 | GND | 系统地 |  |
| AA24 | GPIO1_C2_D | GPIO | GPIO复用管脚 |
| AA25 | GPIO1_C7_D | GPIO | GPIO复用管脚 |
| AA26 | GPIO1_D4_D | GPIO | GPIO复用管脚 |
| AA27 | PCIE30_PORT1_REFCLKP_IN | PCIE信号接口 | 不可用作GPIO |
| AA28 | GND | 系统地 |  |
| AA29 | PCIE30_PORT1_TX3P | PCIE信号接口 | 不可用作GPIO |
| AA30 | PCIE30_PORT1_TX2N | PCIE信号接口 | 不可用作GPIO |
| AA31 | GND | 系统地 |  |
| AA32 | PCIE30_PORT1_RX3P | PCIE信号接口 | 不可用作GPIO |
| AA33 | PCIE30_PORT1_RX2N | PCIE信号接口 | 不可用作GPIO |
| AA34 | GND | 系统地 |  |
| AB1 | GND | 系统地 |  |
| AB2 | GND | 系统地 |  |
| AB3 | GND | 系统地 |  |
| AB4 | GND | 系统地 |  |
| AB5 | GND | 系统地 |  |
| AB6 | GPIO0_C7_D | GPIO | GPIO复用管脚 |
| AB7 | GPIO0_D3_U | GPIO | GPIO复用管脚 |
| AB8 | GPIO0_C0_D | GPIO | GPIO复用管脚 |
| AB9 | GPIO0_C2_D | GPIO | GPIO复用管脚 |
| AB10 | GPIO0_C4_D | GPIO | GPIO复用管脚 |
| AB11 | VCCIO4_1V8 | GPIO41.8V电源域 | 需外部输入1.8V |
| AB12 | GND | 系统地 |  |
| AB13 | GPIO1_B4_U | GPIO | GPIO复用管脚 |
| AB14 | GPIO1_B1_D | GPIO | GPIO复用管脚 |
| AB15 | GPIO1_A6_D | GPIO | GPIO复用管脚 |
| AB16 | GPIO1_A5_D | GPIO | GPIO复用管脚 |
| AB17 | GPIO1_A2_D | GPIO | GPIO复用管脚 |
| AB18 | GPIO1_B0_U | GPIO | GPIO复用管脚 |
| AB19 | GPIO0_C3_D | GPIO | GPIO复用管脚 |
| AB20 | GPIO1_D3_D | GPIO | GPIO复用管脚 |
| AB21 | GND | 系统地 |  |
| AB22 | GND | 系统地 |  |
| AB23 | GPIO1_D1_D | GPIO | GPIO复用管脚 |
| AB24 | GPIO1_C3_D | GPIO | GPIO复用管脚 |
| AB25 | GPIO1_C5_D | GPIO | GPIO复用管脚 |
| AB26 | GND | 系统地 |  |
| AB27 | PCIE30_PORT1_REFCLKN_IN | PCIE信号接口 | 不可用作GPIO |
| AB28 | PCIE30_PORT1_TX3N | PCIE信号接口 | 不可用作GPIO |
| AB29 | GND | 系统地 |  |
| AB30 | PCIE30_PORT1_TX2P | PCIE信号接口 | 不可用作GPIO |
| AB31 | PCIE30_PORT1_RX3N | PCIE信号接口 | 不可用作GPIO |
| AB32 | GND | 系统地 |  |
| AB33 | PCIE30_PORT1_RX2P | PCIE信号接口 | 不可用作GPIO |
| AC2 | GND | 系统地 |  |
| AC3 | GND | 系统地 |  |
| AC4 | GND | 系统地 |  |
| AC5 | GPIO0_D0_D | GPIO | GPIO复用管脚 |
| AC6 | GPIO0_B5_D | GPIO | GPIO复用管脚 |
| AC7 | GPIO0_C5_U | GPIO | GPIO复用管脚 |
| AC8 | GPIO0_B6_D | GPIO | GPIO复用管脚 |
| AC9 | GPIO0_C6_U | GPIO | GPIO复用管脚 |
| AC10 | GPIO0_B7_D | GPIO | GPIO复用管脚 |
| AC11 | GND | 系统地 |  |
| AC12 | GPIO1_D6_U | GPIO | GPIO复用管脚 |
| AC13 | GND | 系统地 |  |
| AC14 | GPIO1_A1_D | GPIO | GPIO复用管脚 |
| AC15 | GPIO1_A7_U | GPIO | GPIO复用管脚 |
| AC16 | GPIO1_B2_D | GPIO | GPIO复用管脚 |
| AC17 | GPIO1_A3_D | GPIO | GPIO复用管脚 |
| AC18 | GPIO1_D5_D | GPIO | GPIO复用管脚 |
| AC19 | GPIO1_D2_D | GPIO | GPIO复用管脚 |
| AC20 | GPIO1_C1_Z | GPIO | GPIO复用管脚 |
| AC21 | GPIO1_C0_Z | GPIO | GPIO复用管脚 |
| AC22 | GND | 系统地 |  |
| AC23 | GPIO1_D0_D | GPIO | GPIO复用管脚 |
| AC24 | GND | 系统地 |  |
| AC25 | GND | 系统地 |  |
| AC26 | GND | 系统地 |  |
| AC27 | GND | 系统地 |  |
| AC28 | GND | 系统地 |  |
| AC29 | GND | 系统地 |  |
| AC30 | GND | 系统地 |  |
| AC31 | GND | 系统地 |  |
| AD3~AD29 | GND | 系统地 |  |

## 核心板引脚定义（BA）

| 引脚编号 | 网络名 | 类型 | 描述 |  |  |
|---|---|---|---|---|---|
| B1 | GND | 系统地 |  |  |  |
| BA1 | GND | 系统地 |  |  |  |
| BA2 | PCIE30_PORT0_REFCLKN_IN | PCIE信号接口 | 不可用作GPIO |  |  |
| BA3 | PCIE30_PORT0_TX1N | PCIE信号接口 | 不可用作GPIO |  |  |
| BA4 | GND | 系统地 |  |  |  |
| BA5 | PCIE30_PORT0_TX0P | PCIE信号接口 | 不可用作GPIO |  |  |
| BA6 | PCIE30_PORT0_RX1N | PCIE信号接口 | 不可用作GPIO |  |  |
| BA7 | GND | 系统地 |  |  |  |
| BA8 | PCIE30_PORT0_RX0P | PCIE信号接口 | 不可用作GPIO |  |  |
| BA9 | PCIE20_1_REFCLKN | PCIE信号接口 | 不可用作GPIO |  |  |
| BA10 | GND | 系统地 |  |  |  |
| BA11 | PCIE20_1_RXP/SATA30_1_RXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BA12 | PCIE20_1_TXN/SATA30_1_TXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BA13 | GND | 系统地 |  |  |  |
| BA14 | PCIE20_0_REFCLKP | PCIE信号接口 | 不可用作GPIO |  |  |
| BA15 | PCIE20_0_TXP/SATA30_0_TXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BA16 | GND | 系统地 |  |  |  |
| BA17 | PCIE20_0_RXP/SATA30_0_RXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BA18 | GND | 系统地 |  |  |  |
| BA19 | GPIO2_B1_U | GPIO | GPIO复用管脚 |  |  |
| BA20 | GPIO2_A7_U | GPIO | GPIO复用管脚 |  |  |
| BA21 | GPIO2_C3_D | GPIO | GPIO复用管脚 |  |  |
| BA22 | GPIO2_C2_D | GPIO | GPIO复用管脚 |  |  |
| BA23 | GPIO2_C1_D | GPIO | GPIO复用管脚 |  |  |
| BA24 | GND | 系统地 |  |  |  |
| BA25 | MIPI_CSI0_RX_D0P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA26 | MIPI_CSI0_RX_D1P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA27 | MIPI_CSI0_RX_CLK0P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA28 | MIPI_CSI0_RX_D2P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA29 | MIPI_CSI0_RX_D3P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA30 | MIPI_CSI0_RX_CLK1P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA31 | GND | 系统地 |  |  |  |
| BA32 | MIPI_CSI1_RX_D0P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA33 | MIPI_CSI1_RX_D1P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA34 | MIPI_CSI1_RX_CLK0P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA35 | MIPI_CSI1_RX_D2P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA36 | MIPI_CSI1_RX_D3P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA37 | MIPI_CSI1_RX_CLK1P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA38 | GND | 系统地 |  |  |  |
| BA39 | MIPI_DPHY1_RX_D3N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA40 | MIPI_DPHY1_RX_CLKN | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA41 | MIPI_DPHY1_RX_D1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BA42 | MIPI_DPHY1_RX_D0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB1 | PCIE30_PORT0_REFCLKP_IN | PCIE信号接口 | 不可用作GPIO |  |  |
| BB2 | GND | 系统地 |  |  |  |
| BB3 | PCIE30_PORT0_TX1P | PCIE信号接口 | 不可用作GPIO |  |  |
| BB4 | PCIE30_PORT0_TX0N | PCIE信号接口 | 不可用作GPIO |  |  |
| BB5 | GND | 系统地 |  |  |  |
| BB6 | PCIE30_PORT0_RX1P | PCIE信号接口 | 不可用作GPIO |  |  |
| BB7 | PCIE30_PORT0_RX0N | PCIE信号接口 | 不可用作GPIO |  |  |
| BB8 | GND | 系统地 |  |  |  |
| BB9 | PCIE20_1_REFCLKP | PCIE信号接口 | 不可用作GPIO |  |  |
| BB10 | PCIE20_1_RXN/SATA30_1_RXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BB11 | GND | 系统地 |  |  |  |
| BB12 | PCIE20_1_TXP/SATA30_1_TXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BB13 | PCIE20_0_REFCLKN | PCIE信号接口 | 不可用作GPIO |  |  |
| BB14 | GND | 系统地 |  |  |  |
| BB15 | PCIE20_0_TXN/SATA30_0_TXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BB16 | PCIE20_0_RXN/SATA30_0_RXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BB17 | GND | 系统地 |  |  |  |
| BB18 | GPIO2_B2_U | GPIO | GPIO复用管脚 |  |  |
| BB19 | GPIO2_B0_U | GPIO | GPIO复用管脚 |  |  |
| BB20 | GPIO2_C0_D | GPIO | GPIO复用管脚 |  |  |
| BB21 | GPIO2_B7_D | GPIO | GPIO复用管脚 |  |  |
| BB22 | GPIO4_C5_D | GPIO | GPIO复用管脚 |  |  |
| BB23 | GPIO4_C2_D | GPIO | GPIO复用管脚 |  |  |
| BB24 | MIPI_CSI0_RX_D0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB25 | MIPI_CSI0_RX_D1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB26 | MIPI_CSI0_RX_CLK0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB27 | MIPI_CSI0_RX_D2N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB28 | MIPI_CSI0_RX_D3N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB29 | MIPI_CSI0_RX_CLK1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB30 | GND | 系统地 |  |  |  |
| BB31 | MIPI_CSI1_RX_D0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB32 | MIPI_CSI1_RX_D1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB33 | MIPI_CSI1_RX_CLK0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB34 | MIPI_CSI1_RX_D2N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB35 | MIPI_CSI1_RX_D3N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB36 | MIPI_CSI1_RX_CLK1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB37 | GND | 系统地 |  |  |  |
| BB38 | MIPI_DPHY1_RX_D3P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB39 | MIPI_DPHY1_RX_CLKP | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB40 | MIPI_DPHY1_RX_D1P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BB41 | MIPI_DPHY1_RX_D0P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BC2 | GND | 系统地 |  |  |  |
| BC3 | GND | 系统地 |  |  |  |
| BC4 | GND | 系统地 |  |  |  |
| BC5 | GND | 系统地 |  |  |  |
| BC6 | GND | 系统地 |  |  |  |
| BC7 | GND | 系统地 |  |  |  |
| BC8 | GND | 系统地 |  |  |  |
| BC9 | GND | 系统地 |  |  |  |
| BC10 | GND | 系统地 |  |  |  |
| BC11 | GND | 系统地 |  |  |  |
| BC12 | GND | 系统地 |  |  |  |
| BC13 | GND | 系统地 |  |  |  |
| BC14 | GND | 系统地 |  |  |  |
| BC15 | GND | 系统地 |  |  |  |
| BC16 | GND | 系统地 |  |  |  |
| BC17 | GND | 系统地 |  |  |  |
| BC18 | GPIO2_B3_D | GPIO | GPIO复用管脚 |  |  |
| BC19 | GPIO2_A6_U | GPIO | GPIO复用管脚 |  |  |
| BC20 | GND | 系统地 |  |  |  |
| BC21 | GPIO2_C4_D | GPIO | GPIO复用管脚 |  |  |
| BC22 | GPIO4_C4_D | GPIO | GPIO复用管脚 |  |  |
| BC23 | GPIO2_B6_D | GPIO | GPIO复用管脚 |  |  |
| BC24 | GND | 系统地 |  |  |  |
| BC25 | GND | 系统地 |  |  |  |
| BC26 | GND | 系统地 |  |  |  |
| BC27 | GND | 系统地 |  |  |  |
| BC28 | GND | 系统地 |  |  |  |
| BC29 | GND | 系统地 |  |  |  |
| BC30 | GND | 系统地 |  |  |  |
| BC31 | GND | 系统地 |  |  |  |
| BC32 | GND | 系统地 |  |  |  |
| BC33 | GND | 系统地 |  |  |  |
| BC34 | GND | 系统地 |  |  |  |
| BC35 | GND | 系统地 |  |  |  |
| BC36 | GND | 系统地 |  |  |  |
| BC37 | GND | 系统地 |  |  |  |
| BC38 | MIPI_DPHY1_RX_D2P | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BC39 | MIPI_DPHY1_RX_D2N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| BD3 | GPIO0_A4_U | GPIO | GPIO复用管脚 |  |  |
| BD4 | GPIO0_A0_D | GPIO | GPIO复用管脚 |  |  |
| BD5 | GPIO0_B2_U | GPIO | GPIO复用管脚 |  |  |
| BD6 | GND | 系统地 |  |  |  |
| BD7 | PCIE20_2_REFCLKP | PCIE信号接口 | 不可用作GPIO |  |  |
| BD8 | PCIE20_2_REFCLKN | PCIE信号接口 | 不可用作GPIO |  |  |
| BD9 | GND | 系统地 |  |  |  |
| BD10 | PCIE20_2_TXP/SATA30_2_TXP/USB30_2<br />_SSTXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BD11 | PCIE20_2_TXN/SATA30_2_TXN/USB30_<br />2_SSTXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BD12 | GND | 系统地 |  |  |  |
| BD13 | PCIE20_2_RXP/SATA30_2_RXP/USB30_<br />2_SSRXP | PCIE信号接口 | 不可用作GPIO |  |  |
| BD14 | PCIE20_2_RXN/SATA30_2_RXN/USB30_<br />2_SSRXN | PCIE信号接口 | 不可用作GPIO |  |  |
| BD15 | GND | 系统地 |  |  |  |
| BD16 | RESET_L | 系统复位信号 |  |  |  |
| BD17 | GND | 系统地 |  |  |  |
| BD18 | GPIO2_B4_U | GPIO | GPIO复用管脚 |  |  |
| BD19 | GPIO2_B5_U | GPIO | GPIO复用管脚 |  |  |
| BD20 | GPIO4_C3_D | GPIO | GPIO复用管脚 |  |  |
| BD21 | GPIO4_C6_D | GPIO | GPIO复用管脚 |  |  |
| BD22 | GPIO2_C5_D | GPIO | GPIO复用管脚 |  |  |
| BD23 | GND | 系统地 |  |  |  |
| BD24 | VCCIO5 | GPIO5电源域1.8/3.3<br />可选 | 需外部输入<br />1.8V/3.3V |  |  |
| BD25 | VCCIO5_1V8 | GPIO51.8V电源域 | 需外部输入1.8V |  |  |
| BD26 | VCCIO3_1V8 | GPIO31.8V电源域 | 需外部输入1.8V |  |  |
| BD27 | VCCIO6 | GPIO6电源域1.8/3.3<br />可选 | 需外部输入<br />1.8V/3.3V |  |  |
| BD28 | VCCIO6_1V8 | GPIO61.8V电源域 | 需外部输入1.8V |  |  |
| BD29 | GND | 系统地 |  |  |  |
| BD30 | GND | 系统地 |  |  |  |
| BD31 | GND |  | 系统地 |  |  |
| BD32 | GND |  | 系统地 |  |  |
| BD33 | GND |  | 系统地 |  |  |
| BD34 | GND |  | 系统地 |  |  |
| BD35 | GND |  | 系统地 |  |  |
| BD36 | VCC_1V8_S0 |  | 核心板1.8V输出 |  | 最大支持2.5A电流 |
| BD37 | GND |  | 系统地 |  |  |
| C1 | GND | 系统地 |  |  |  |
| CA1 | MIPI_DPHY0_RX_D3P | MIPICSI信号接口 |  | 不可用作GPIO |  |
| CA2 | MIPI_DPHY0_RX_D2P | MIPICSI信号接口 |  | 不可用作GPIO |  |
| CA3 | MIPI_DPHY0_RX_CLKP | MIPICSI信号接口 |  | 不可用作GPIO |  |
| CA4 | MIPI_DPHY0_RX_D1P | MIPICSI信号接口 |  | 不可用作GPIO |  |
| CA5 | MIPI_DPHY0_RX_D0P | MIPICSI信号接口 |  | 不可用作GPIO |  |
| CA6 | GND | 系统地 |  |  |  |
| CA7 | MIPI_DPHY0_TX_D3N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA8 | MIPI_DPHY0_TX_D2N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA9 | MIPI_DPHY0_TX_CLKN | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA10 | MIPI_DPHY0_TX_D1N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA11 | MIPI_DPHY0_TX_D0N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA12 | GND | 系统地 |  |  |  |
| CA13 | MIPI_DPHY1_TX_D3N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA14 | MIPI_DPHY1_TX_D2N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA15 | MIPI_DPHY1_TX_CLKN | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA16 | MIPI_DPHY1_TX_D1N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA17 | MIPI_DPHY1_TX_D0N | MIPIDSI信号接口 |  | 不可用作GPIO |  |
| CA18 | GND | 系统地 |  |  |  |
| CA19 | TYPEC0_SSTX2P/DP0_TX3P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA20 | TYPEC0_SSRX2P/DP0_TX2P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA21 | GND | 系统地 |  |  |  |
| CA22 | TYPEC0_SSTX1P/DP0_TX1P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA23 | TYPEC0_SSRX1P/DP0_TX0P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA24 | GND | 系统地 |  |  |  |
| CA25 | TYPEC1_SSTX2P/DP1_TX3P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA26 | TYPEC1_SSRX2P/DP1_TX2P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA27 | GND | 系统地 |  |  |  |
| CA28 | TYPEC1_SSTX1P/DP1_TX1P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA29 | TYPEC1_SSRX1P/DP1_TX0P | TYPEC/DP复用信号 |  | 不可用作GPIO |  |
| CA30 | GND | 系统地 |  |  |  |
| CA31 | TYPEC0_OTG_DM | TYPECOTG信号 |  | 不可用作GPIO |  |
| CA32 | TYPEC1_OTG_DP | TYPECOTG信号 |  | 不可用作GPIO |  |
| CA33 | GND | 系统地 |  |  |  |
| CA34 | USB20_HOST0_DM | USB2.0信号 |  | 不可用作GPIO |  |
| CB1 | MIPI_DPHY0_RX_D3N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| CB2 | MIPI_DPHY0_RX_D2N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| CB3 | MIPI_DPHY0_RX_CLKN | MIPICSI信号接口 | 不可用作GPIO |  |  |
| CB4 | MIPI_DPHY0_RX_D1N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| CB5 | MIPI_DPHY0_RX_D0N | MIPICSI信号接口 | 不可用作GPIO |  |  |
| CB6 | MIPI_DPHY0_TX_D3P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB7 | MIPI_DPHY0_TX_D2P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB8 | MIPI_DPHY0_TX_CLKP | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB9 | MIPI_DPHY0_TX_D1P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB10 | MIPI_DPHY0_TX_D0P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB11 | GND | 系统地 |  |  |  |
| CB12 | MIPI_DPHY1_TX_D3P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB13 | MIPI_DPHY1_TX_D2P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB14 | MIPI_DPHY1_TX_CLKP | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB15 | MIPI_DPHY1_TX_D1P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB16 | MIPI_DPHY1_TX_D0P | MIPIDSI信号接口 | 不可用作GPIO |  |  |
| CB17 | GND | 系统地 |  |  |  |
| CB18 | TYPEC0_SSTX2N/DP0_TX3N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB19 | GND | 系统地 |  |  |  |
| CB20 | TYPEC0_SSRX2N/DP0_TX2N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB21 | TYPEC0_SSTX1N/DP0_TX1N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB22 | GND | 系统地 |  |  |  |
| CB23 | TYPEC0_SSRX1N/DP0_TX0N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB24 | TYPEC1_SSTX2N/DP1_TX3N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB25 | GND | 系统地 |  |  |  |
| CB26 | TYPEC1_SSRX2N/DP1_TX2N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB27 | TYPEC1_SSTX1N/DP1_TX1N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB28 | GND | 系统地 |  |  |  |
| CB29 | TYPEC1_SSRX1N/DP1_TX0N | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CB30 | TYPEC0_OTG_DP | TYPECOTG信号 | 不可用作GPIO |  |  |
| CB31 | GND | 系统地 |  |  |  |
| CB32 | TYPEC1_OTG_DM | TYPECOTG信号 | 不可用作GPIO |  |  |
| CB33 | USB20_HOST0_DP | USB2.0信号 | 不可用作GPIO |  |  |
| CC2 | GND | 系统地 |  |  |  |
| CC3 | GND | 系统地 |  |  |  |
| CC4 | GND | 系统地 |  |  |  |
| CC5 | GND | 系统地 |  |  |  |
| CC6 | GND | 系统地 |  |  |  |
| CC7 | GND | 系统地 |  |  |  |
| CC8 | GND | 系统地 |  |  |  |
| CC9 | SARADC_VIN6 | ADC信号 | 1.8VADC信号 |  |  |
| CC10 | SARADC_VIN4 | ADC信号 | 1.8VADC信号 |  |  |
| CC11 | SARADC_VIN7 | ADC信号 | 1.8VADC信号 |  |  |
| CC12 | SARADC_VIN3 | ADC信号 | 1.8VADC信号 |  |  |
| CC13 | SARADC_VIN1_KEY/RECOVER<br />Y | ADC信号 | 1.8VADC信号 |  |  |
| CC14 | BOOT_SARADC_IN0 | ADC信号 | 1.8VADC信号 |  |  |
| CC15 | SARADC_VIN5 | ADC信号 | 1.8VADC信号 |  |  |
| CC16 | SARADC_VIN2 | ADC信号 | 1.8VADC信号 |  |  |
| CC17 | GND | 系统地 |  |  |  |
| CC18 | TYPEC0_SBU1/DP0_AUXP | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CC19 | TYPEC0_SBU2/DP0_AUXN | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CC20 | GND | 系统地 |  |  |  |
| CC21 | TYPEC0_USB20_OTG_ID | TYPEC信号 | 不可用作GPIO |  |  |
| CC22 | TYPEC0_USB20_VBUSDET | TYPEC信号 | 不可用作GPIO |  |  |
| CC23 | GND | 系统地 |  |  |  |
| CC24 | TYPEC1_SBU1/DP1_AUXP | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CC25 | TYPEC1_SBU2/DP1_AUXN | TYPEC/DP复用信号 | 不可用作GPIO |  |  |
| CC26 | GND | 系统地 |  |  |  |
| CC27 | TYPEC1_USB20_OTG_ID | TYPEC信号 | 不可用作GPIO |  |  |
| CC28 | TYPEC1_USB20_VBUSDET | TYPEC信号 | 不可用作GPIO |  |  |
| CC29 | GND | 系统地 |  |  |  |
| CC30 | USB20_HOST1_DM | USB2.0信号 | 不可用作GPIO |  |  |
| CC31 | USB20_HOST1_DP | USB2.0信号 | 不可用作GPIO |  |  |
| CD3 | GND | 系统地 |  |  |  |
| CD4 | SLAVER_PMIC_PLDO3 | 核心板1.8V输出 | 最大支持0.3A电流 |  |  |
| CD5 | SLAVER_PMIC_PLDO2 | 核心板1.8V输出 | 最大支持0.3A电流 |  |  |
| CD6 | VCC_1V8_CAM_S0 | 核心板1.8V输出，CAM电<br />源 | 最大支持0.3A电流 |  |  |
| CD7 | VCC_3V3_SD_S0 | 核心板3.3V输出 | 最大支持0.5A电流 |  |  |
| CD8 | VCC_2V8_CAM_S0 | 核心板2.8V输出，CAM电<br />源 | 最大支持0.3A电流 |  |  |
| CD9 | VCC_1V2_CAM_S0 | 核心板1.2V输出，CAM电<br />源 | 最大支持0.5A电流 |  |  |
| CD10 | GND | 系统地 |  |  |  |
| CD11 | GND | 系统地 |  |  |  |
| CD12 | GND | 系统地 |  |  |  |
| CD13 | GND | 系统地 |  |  |  |
| CD14 | GND | 系统地 |  |  |  |
| CD15 | GND | 系统地 |  |  |  |
| CD16 | GND | 系统地 |  |  |  |
| CD17 | VCC_3V3_S0 | 核心板3.3V输出 | 最大支持5A电流 |  |  |
| CD18 | GND | 系统地 |  |  |  |
| CD19 | GND | 系统地 |  |  |  |
| CD20 | GND | 系统地 |  |  |  |
| CD21 | AVCC_1V8_CODEC_S0 | 核心板1.8V输出 | 最大支持0.5A电流 |  |  |
| CD22 | VCC_3V3_S3 | 核心板3.3V输出 | 最大支持0.3A电流 |  |  |
| CD23 | GND | 系统地 |  |  |  |
| CD24 | GND | 系统地 |  |  |  |
| CD25 | GND | 系统地 |  |  |  |
| CD26 | GND | 系统地 |  |  |  |
| CD27 | GND | 系统地 |  |  |  |
| CD28 | GND | 系统地 |  |  |  |
| CD29 | GND | 系统地 |  |  |  |

## 核心板引脚定义（DA）

| 引脚编号 | 网络名 | 类型 | 描述 |
|---|---|---|---|
| D1 | GND | 系统地 |  |
| DA1 | GND | 系统地 |  |
| DA2 | HDMI1_TX2N_PORT/EDP1_TX_D2<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DA3 | HDMI1_TX1P_PORT/EDP1_TX_D1<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DA4 | GND | 系统地 |  |
| DA5 | HDMI1_TX0N_PORT/EDP1_TX_D0<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DA6 | HDMI1_TX3P_PORT/EDP1_TX_D3<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DA7 | GND | 系统地 |  |
| DA8 | HDMI1_TX_SBDN/EDP1_TX_AUX<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DA9 | HDMI0_TX2P_PORT/EDP0_TX_D2<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DA10 | GND | 系统地 |  |
| DA11 | HDMI0_TX1N_PORT/EDP0_TX_D1<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DA12 | HDMI0_TX0P_PORT/EDP0_TX_D0<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DA13 | GND | 系统地 |  |
| DA14 | HDMI0_TX3N_PORT/EDP0_TX_D3<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DA15 | HDMI0_TX_SBDP/EDP0_TX_AUXP | HDMI/EDP复用信号 | 不可用作GPIO |
| DA16 | GND | 系统地 |  |
| DA17 | GPIO3_C3_D | GPIO | GPIO复用管脚 |
| DA18 | GPIO3_B4_U | GPIO | GPIO复用管脚 |
| DA19 | GPIO3_A4_D | GPIO | GPIO复用管脚 |
| DA20 | GPIO3_B0_U | GPIO | GPIO复用管脚 |
| DA21 | GPIO3_B1_D | GPIO | GPIO复用管脚 |
| DA22 | GPIO3_D4_D | GPIO | GPIO复用管脚 |
| DA23 | GPIO3_C1_D | GPIO | GPIO复用管脚 |
| DA24 | GND | 系统地 |  |
| DA25 | GPIO3_B2_D | GPIO | GPIO复用管脚 |
| DA26 | GPIO3_D2_D | GPIO | GPIO复用管脚 |
| DA27 | GPIO3_D1_D | GPIO | GPIO复用管脚 |
| DA28 | GPIO4_A2_D | GPIO | GPIO复用管脚 |
| DA29 | GPIO4_A1_D | GPIO | GPIO复用管脚 |
| DA30 | GPIO4_B7_U | GPIO | GPIO复用管脚 |
| DA31 | GPIO4_A3_D | GPIO | GPIO复用管脚 |
| DA32 | GPIO4_A4_D | GPIO | GPIO复用管脚 |
| DA33 | GPIO4_A0_D | GPIO | GPIO复用管脚 |
| DA34 | GPIO4_D2_U | GPIO | GPIO复用管脚 |
| DA35 | GPIO4_D5_D | GPIO | GPIO复用管脚 |
| DA36 | GPIO4_D1_U | GPIO | GPIO复用管脚 |
| DA37 | SYSPWR_EN_H | PMIC使能信号 | 不可用作GPIO |
| DA38 | VCC4V0_SYS | 核心板主电源输入 | 建议使用4V/5A电源 |
| DA39 | VCC4V0_SYS | 核心板主电源输入 | 建议使用4V/5A电源 |
| DA40 | VCC4V0_SYS | 核心板主电源输入 | 建议使用4V/5A电源 |
| DA41 | GND | 系统地 |  |
| DA42 | GND | 系统地 |  |
| DB1 | HDMI1_TX2P_PORT/EDP1_TX_D2<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DB2 | GND | 系统地 |  |
| DB3 | HDMI1_TX1N_PORT/EDP1_TX_D1<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DB4 | HDMI1_TX0P_PORT/EDP1_TX_D0<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DB5 | GND | 系统地 |  |
| DB6 | HDMI1_TX3N_PORT/EDP1_TX_D3<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DB7 | HDMI1_TX_SBDP/EDP1_TX_AUXP | HDMI/EDP复用信号 | 不可用作GPIO |
| DB8 | GND | 系统地 |  |
| DB9 | HDMI0_TX2N_PORT/EDP0_TX_D2<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DB10 | HDMI0_TX1P_PORT/EDP0_TX_D1<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DB11 | GND | 系统地 |  |
| DB12 | HDMI0_TX0N_PORT/EDP0_TX_D0<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DB13 | HDMI0_TX3P_PORT/EDP0_TX_D3<br />P | HDMI/EDP复用信号 | 不可用作GPIO |
| DB14 | GND | 系统地 |  |
| DB15 | HDMI0_TX_SBDN/EDP0_TX_AUX<br />N | HDMI/EDP复用信号 | 不可用作GPIO |
| DB16 | GPIO3_B7_D | GPIO | GPIO复用管脚 |
| DB17 | GPIO3_A1_U | GPIO | GPIO复用管脚 |
| DB18 | GPIO3_B3_U | GPIO | GPIO复用管脚 |
| DB19 | GPIO3_A3_U | GPIO | GPIO复用管脚 |
| DB20 | GND | 系统地 |  |
| DB21 | GPIO3_A5_D | GPIO | GPIO复用管脚 |
| DB22 | GPIO3_A6_D | GPIO | GPIO复用管脚 |
| DB23 | GPIO3_C0_D | GPIO | GPIO复用管脚 |
| DB24 | GPIO3_C4_U | GPIO | GPIO复用管脚 |
| DB25 | GPIO3_C5_U | GPIO | GPIO复用管脚 |
| DB26 | GPIO3_D3_D | GPIO | GPIO复用管脚 |
| DB27 | GND | 系统地 |  |
| DB28 | GPIO4_B0_D | GPIO | GPIO复用管脚 |
| DB29 | GPIO4_B2_U | GPIO | GPIO复用管脚 |
| DB30 | GPIO4_A6_D | GPIO | GPIO复用管脚 |
| DB31 | GPIO4_A5_D | GPIO | GPIO复用管脚 |
| DB32 | GPIO4_A7_D | GPIO | GPIO复用管脚 |
| DB33 | GND | 系统地 |  |
| DB34 | GPIO4_D3_U | GPIO | GPIO复用管脚 |
| DB35 | GND | 系统地 |  |
| DB36 | GND | 系统地 |  |
| DB37 | GND | 系统地 |  |
| DB38 | VCC4V0_SYS | 核心板主电源输入 | 建议使用4V/5A电源 |
| DB39 | VCC4V0_SYS | 核心板主电源输入 | 建议使用4V/5A电源 |
| DB40 | GND | 系统地 |  |
| DB41 | GND | 系统地 |  |
| DC2 | GND | 系统地 |  |
| DC3 | GND | 系统地 |  |
| DC4 | GND | 系统地 |  |
| DC5 | GND | 系统地 |  |
| DC6 | GND | 系统地 |  |
| DC7 | GND | 系统地 |  |
| DC8 | GND | 系统地 |  |
| DC9 | GND | 系统地 |  |
| DC10 | HDMI_RX_D2N | HDMI输入信号 | 不可用作GPIO |
| DC11 | HDMI_RX_D1P | HDMI输入信号 | 不可用作GPIO |
| DC12 | GND | 系统地 |  |
| DC13 | HDMI_RX_D0N | HDMI输入信号 | 不可用作GPIO |
| DC14 | HDMI_RX_CLKP | HDMI输入信号 | 不可用作GPIO |
| DC15 | GND | 系统地 |  |
| DC16 | GPIO3_C2_D | GPIO | GPIO复用管脚 |
| DC17 | GPIO3_A0_U | GPIO | GPIO复用管脚 |
| DC18 | GPIO3_B5_U | GPIO | GPIO复用管脚 |
| DC19 | GPIO3_A2_U | GPIO | GPIO复用管脚 |
| DC20 | GPIO3_A7_U | GPIO | GPIO复用管脚 |
| DC21 | GPIO3_B6_D | GPIO | GPIO复用管脚 |
| DC22 | GPIO3_D5_D | GPIO | GPIO复用管脚 |
| DC23 | GPIO3_C6_U | GPIO | GPIO复用管脚 |
| DC24 | GPIO3_D0_U | GPIO | GPIO复用管脚 |
| DC25 | GPIO3_C7_U | GPIO | GPIO复用管脚 |
| DC26 | GPIO4_B3_U | GPIO | GPIO复用管脚 |
| DC27 | GPIO4_B4_U | GPIO | GPIO复用管脚 |
| DC28 | GPIO4_B1_U | GPIO | GPIO复用管脚 |
| DC29 | GPIO4_C1_D | GPIO | GPIO复用管脚 |
| DC30 | GPIO4_B5_D | GPIO | GPIO复用管脚 |
| DC31 | GPIO4_C0_U | GPIO | GPIO复用管脚 |
| DC32 | GPIO4_B6_D | GPIO | GPIO复用管脚 |
| DC33 | GND | 系统地 |  |
| DC34 | GPIO4_D4_U | GPIO | GPIO复用管脚 |
| DC35 | GPIO4_D0_U | GPIO | GPIO复用管脚 |
| DC36 | PWRON_L | 系统使能信号 |  |
| DC37 | GND | 系统地 |  |
| DC38 | GND | 系统地 |  |
| DC39 | GND | 系统地 |  |
| DD3 | GND | 系统地 |  |
| DD4 | GND | 系统地 |  |
| DD5 | GND | 系统地 |  |
| DD6 | GND | 系统地 |  |
| DD7 | GND | 系统地 |  |
| DD8 | GND | 系统地 |  |
| DD9 | HDMI_RX_D2P | HDMI输入信号 | 不可用作GPIO |
| DD10 | GND | 系统地 |  |
| DD11 | HDMI_RX_D1N | HDMI输入信号 | 不可用作GPIO |
| DD12 | HDMI_RX_D0P | HDMI输入信号 | 不可用作GPIO |
| DD13 | GND | 系统地 |  |
| DD14 | HDMI_RX_CLKN | HDMI输入信号 | 不可用作GPIO |
| DD15 | GND | 系统地 |  |
| DD16 | GND | 系统地 |  |
| DD17 | GND | 系统地 |  |
| DD18 | GND | 系统地 |  |
| DD19 | GND | 系统地 |  |
| DD20 | GND | 系统地 |  |
| DD21 | GND | 系统地 |  |
| DD22 | GND | 系统地 |  |
| DD23 | GND | 系统地 |  |
| DD24 | GND | 系统地 |  |
| DD25 | GND | 系统地 |  |
| DD26 | GND | 系统地 |  |
| DD27 | GND | 系统地 |  |
| DD28 | GND | 系统地 |  |
| DD29 | GND | 系统地 |  |
| DD30 | GND | 系统地 |  |
| DD31 | GND | 系统地 |  |
| DD32 | GND | 系统地 |  |
| DD33 | GND | 系统地 |  |
| DD34 | GND | 系统地 |  |
| DD35 | GND | 系统地 |  |
| DD36 | GND | 系统地 |  |
| DD37 | GND | 系统地 |  |

## 核心板引脚定义（H）

| 引脚编号 | 网络名 | 类型 | 描述 |
|---|---|---|---|
| H1~H44 | GND | 系统地 |  |
| H45 | VDDQ_DDR_S0 | 核心板DDR电源 | 不可用于外设供电 |
| H46~H52 | GND | 系统地 |  |
| H53 | VDD_DDR_S0 | 核心板DDR电源 | 不可用于外设供电 |
| H54 | VDD_CPU_BIG0_S0 | 核心板CPU电源 | 不可用于外设供电 |
| H55 | VDD_CPU_BIG1_S0 | 核心板CPU电源 | 不可用于外设供电 |
| H56~H60 | GND | 系统地 |  |
| H61 | VDD_VDENC_S0 |  | 不可用于外设供电 |
| H62 | VDD_CPU_LIT_S0 | 核心板CPU电源 | 不可用于外设供电 |
| H63~H68 | GND | 系统地 |  |
| H69 | VDD_GPU_S0 | 核心板GPU电源 | 不可用于外设供电 |
| H70 | VDD_LOG_S0 | 核心板逻辑电源 | 不可用于外设供电 |
| H71 | VDD_NPU_S0 | 核心板NPU电源 | 不可用于外设供电 |
| H72~H96 | GND | 系统地 |  |
| RK3128 | X3128CV4 | 144PIN邮票孔接口 |  |
| PX30 | X30CV1 | 144PIN邮票孔接口 |  |
| RK3288 | X3288CV5 | 180PIN邮票孔接口 |  |
| RK3399 | X3399CV3 | 200PIN邮票孔接口 |  |
| RK1808 | X1808CV1 | 144PIN邮票孔接口 |  |
| MT8385 | X8385CV1 | 168PIN邮票孔接口 |  |
| MT8768 | X8768CV1 | 168PIN邮票孔接口 |  |
| T507 | X507CV2 | 172PIN邮票孔接口 |  |
| RK3566 | X3566CV2/X3566CV3 | 200PIN邮票孔接口 |  |
| RK3566 | I3566CV1 | 172PIN邮票孔接口 |  |
| RK3568 | X3568CV2/X3568CV3 | 200PIN邮票孔接口 |  |
| RK3568 | I3568CV1 | 172PIN邮票孔接口 |  |
| RK3588 | I3588CV1 | 320PIN板对板连接器 |  |
| RK3128 | X3128开发板 | x3128cv4评估板 |  |
| PX30 | X30开发板 | x30cv1评估板 |  |
| RK3288 | x3288开发板 | x3288cv3评估板 |  |
| RK3399 | x3399开发板 | x3399cv3/x3399cv4评估板 |  |
| RK1808 | x1808开发板 | x1808cv1评估板 |  |
| MT8385 | X8385开发板 | X8385CV1评估板 |  |
| MT8768 | X8768开发板 | X8768CV1评估板 |  |
| T507 | X507开发板 | X507CV2评估板 |  |
| RK3566 | X3566开发板 | X3566CV1评估板 |  |
| RK3566 | I3566公板 | I3566CV1评估板 |  |
| RK3568 | X3568开发板 | X3568CV2评估板 |  |
| RK3568 | I3568公板 | I3568CV1评估板 |  |
| RK3588 | I3588开发板 | I3588CV1评估板 |  |
| RK3399 | ibox3399卡片电脑 |  |  |
| RK3568 | ibox3568卡片电脑 |  |  |
