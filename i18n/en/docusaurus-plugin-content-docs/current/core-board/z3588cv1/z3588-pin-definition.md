---
sidebar_position: 2
title: Pin Definition
description: Pin definition of the Z3588 core board
---

# Pin Definition

This section lists the pin definition of the Z3588 core board. When designing a carrier board, verify multiplexing functions, voltage domains, and power-on default states together with the core board schematic and chip datasheet.

## Core Board Pin Definition(AA)

| Pin | Net Name | Type | Description |
|---|---|---|---|
| A1 | GND | Ground |  |
| AA1 | GND | Ground |  |
| AA2 | GND | Ground |  |
| AA3 | GND | Ground |  |
| AA4 | GND | Ground |  |
| AA5 | VCCIO1_1V8 | GPIO11.8VPower Domain | 需外部输入1.8V |
| AA6 | GND | Ground |  |
| AA7 | GPIO0_D2_U | GPIO | GPIO multiplexed pin |
| AA8 | GPIO0_D1_U | GPIO | GPIO multiplexed pin |
| AA9 | GPIO0_D6_D | GPIO | GPIO multiplexed pin |
| AA10 | GPIO0_D5_U | GPIO | GPIO multiplexed pin |
| AA11 | GPIO0_D4_U | GPIO | GPIO multiplexed pin |
| AA12 | VCCIO4 | GPIO4Power Domain1.8V/3.3V可<br />选 | 需外部输入1.8V/3.3V |
| AA13 | GPIO1_A0_D | GPIO | GPIO multiplexed pin |
| AA14 | GPIO1_A4_D | GPIO | GPIO multiplexed pin |
| AA15 | GPIO1_B5_U | GPIO | GPIO multiplexed pin |
| AA16 | GPIO1_B3_D | GPIO | GPIO multiplexed pin |
| AA17 | GPIO1_B6_U | GPIO | GPIO multiplexed pin |
| AA18 | GPIO1_B7_U | GPIO | GPIO multiplexed pin |
| AA19 | GPIO1_D7_U | GPIO | GPIO multiplexed pin |
| AA20 | GND | Ground |  |
| AA21 | GPIO1_C6_D | GPIO | GPIO multiplexed pin |
| AA22 | GPIO1_C4_D | GPIO | GPIO multiplexed pin |
| AA23 | GND | Ground |  |
| AA24 | GPIO1_C2_D | GPIO | GPIO multiplexed pin |
| AA25 | GPIO1_C7_D | GPIO | GPIO multiplexed pin |
| AA26 | GPIO1_D4_D | GPIO | GPIO multiplexed pin |
| AA27 | PCIE30_PORT1_REFCLKP_IN | PCIESignal接口 | not available as GPIO |
| AA28 | GND | Ground |  |
| AA29 | PCIE30_PORT1_TX3P | PCIESignal接口 | not available as GPIO |
| AA30 | PCIE30_PORT1_TX2N | PCIESignal接口 | not available as GPIO |
| AA31 | GND | Ground |  |
| AA32 | PCIE30_PORT1_RX3P | PCIESignal接口 | not available as GPIO |
| AA33 | PCIE30_PORT1_RX2N | PCIESignal接口 | not available as GPIO |
| AA34 | GND | Ground |  |
| AB1 | GND | Ground |  |
| AB2 | GND | Ground |  |
| AB3 | GND | Ground |  |
| AB4 | GND | Ground |  |
| AB5 | GND | Ground |  |
| AB6 | GPIO0_C7_D | GPIO | GPIO multiplexed pin |
| AB7 | GPIO0_D3_U | GPIO | GPIO multiplexed pin |
| AB8 | GPIO0_C0_D | GPIO | GPIO multiplexed pin |
| AB9 | GPIO0_C2_D | GPIO | GPIO multiplexed pin |
| AB10 | GPIO0_C4_D | GPIO | GPIO multiplexed pin |
| AB11 | VCCIO4_1V8 | GPIO41.8VPower Domain | 需外部输入1.8V |
| AB12 | GND | Ground |  |
| AB13 | GPIO1_B4_U | GPIO | GPIO multiplexed pin |
| AB14 | GPIO1_B1_D | GPIO | GPIO multiplexed pin |
| AB15 | GPIO1_A6_D | GPIO | GPIO multiplexed pin |
| AB16 | GPIO1_A5_D | GPIO | GPIO multiplexed pin |
| AB17 | GPIO1_A2_D | GPIO | GPIO multiplexed pin |
| AB18 | GPIO1_B0_U | GPIO | GPIO multiplexed pin |
| AB19 | GPIO0_C3_D | GPIO | GPIO multiplexed pin |
| AB20 | GPIO1_D3_D | GPIO | GPIO multiplexed pin |
| AB21 | GND | Ground |  |
| AB22 | GND | Ground |  |
| AB23 | GPIO1_D1_D | GPIO | GPIO multiplexed pin |
| AB24 | GPIO1_C3_D | GPIO | GPIO multiplexed pin |
| AB25 | GPIO1_C5_D | GPIO | GPIO multiplexed pin |
| AB26 | GND | Ground |  |
| AB27 | PCIE30_PORT1_REFCLKN_IN | PCIESignal接口 | not available as GPIO |
| AB28 | PCIE30_PORT1_TX3N | PCIESignal接口 | not available as GPIO |
| AB29 | GND | Ground |  |
| AB30 | PCIE30_PORT1_TX2P | PCIESignal接口 | not available as GPIO |
| AB31 | PCIE30_PORT1_RX3N | PCIESignal接口 | not available as GPIO |
| AB32 | GND | Ground |  |
| AB33 | PCIE30_PORT1_RX2P | PCIESignal接口 | not available as GPIO |
| AC2 | GND | Ground |  |
| AC3 | GND | Ground |  |
| AC4 | GND | Ground |  |
| AC5 | GPIO0_D0_D | GPIO | GPIO multiplexed pin |
| AC6 | GPIO0_B5_D | GPIO | GPIO multiplexed pin |
| AC7 | GPIO0_C5_U | GPIO | GPIO multiplexed pin |
| AC8 | GPIO0_B6_D | GPIO | GPIO multiplexed pin |
| AC9 | GPIO0_C6_U | GPIO | GPIO multiplexed pin |
| AC10 | GPIO0_B7_D | GPIO | GPIO multiplexed pin |
| AC11 | GND | Ground |  |
| AC12 | GPIO1_D6_U | GPIO | GPIO multiplexed pin |
| AC13 | GND | Ground |  |
| AC14 | GPIO1_A1_D | GPIO | GPIO multiplexed pin |
| AC15 | GPIO1_A7_U | GPIO | GPIO multiplexed pin |
| AC16 | GPIO1_B2_D | GPIO | GPIO multiplexed pin |
| AC17 | GPIO1_A3_D | GPIO | GPIO multiplexed pin |
| AC18 | GPIO1_D5_D | GPIO | GPIO multiplexed pin |
| AC19 | GPIO1_D2_D | GPIO | GPIO multiplexed pin |
| AC20 | GPIO1_C1_Z | GPIO | GPIO multiplexed pin |
| AC21 | GPIO1_C0_Z | GPIO | GPIO multiplexed pin |
| AC22 | GND | Ground |  |
| AC23 | GPIO1_D0_D | GPIO | GPIO multiplexed pin |
| AC24 | GND | Ground |  |
| AC25 | GND | Ground |  |
| AC26 | GND | Ground |  |
| AC27 | GND | Ground |  |
| AC28 | GND | Ground |  |
| AC29 | GND | Ground |  |
| AC30 | GND | Ground |  |
| AC31 | GND | Ground |  |
| AD3~AD29 | GND | Ground |  |

## Core Board Pin Definition(BA)

| Pin | Net Name | Type | Description |  |  |
|---|---|---|---|---|---|
| B1 | GND | Ground |  |  |  |
| BA1 | GND | Ground |  |  |  |
| BA2 | PCIE30_PORT0_REFCLKN_IN | PCIESignal接口 | not available as GPIO |  |  |
| BA3 | PCIE30_PORT0_TX1N | PCIESignal接口 | not available as GPIO |  |  |
| BA4 | GND | Ground |  |  |  |
| BA5 | PCIE30_PORT0_TX0P | PCIESignal接口 | not available as GPIO |  |  |
| BA6 | PCIE30_PORT0_RX1N | PCIESignal接口 | not available as GPIO |  |  |
| BA7 | GND | Ground |  |  |  |
| BA8 | PCIE30_PORT0_RX0P | PCIESignal接口 | not available as GPIO |  |  |
| BA9 | PCIE20_1_REFCLKN | PCIESignal接口 | not available as GPIO |  |  |
| BA10 | GND | Ground |  |  |  |
| BA11 | PCIE20_1_RXP/SATA30_1_RXP | PCIESignal接口 | not available as GPIO |  |  |
| BA12 | PCIE20_1_TXN/SATA30_1_TXN | PCIESignal接口 | not available as GPIO |  |  |
| BA13 | GND | Ground |  |  |  |
| BA14 | PCIE20_0_REFCLKP | PCIESignal接口 | not available as GPIO |  |  |
| BA15 | PCIE20_0_TXP/SATA30_0_TXP | PCIESignal接口 | not available as GPIO |  |  |
| BA16 | GND | Ground |  |  |  |
| BA17 | PCIE20_0_RXP/SATA30_0_RXP | PCIESignal接口 | not available as GPIO |  |  |
| BA18 | GND | Ground |  |  |  |
| BA19 | GPIO2_B1_U | GPIO | GPIO multiplexed pin |  |  |
| BA20 | GPIO2_A7_U | GPIO | GPIO multiplexed pin |  |  |
| BA21 | GPIO2_C3_D | GPIO | GPIO multiplexed pin |  |  |
| BA22 | GPIO2_C2_D | GPIO | GPIO multiplexed pin |  |  |
| BA23 | GPIO2_C1_D | GPIO | GPIO multiplexed pin |  |  |
| BA24 | GND | Ground |  |  |  |
| BA25 | MIPI_CSI0_RX_D0P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA26 | MIPI_CSI0_RX_D1P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA27 | MIPI_CSI0_RX_CLK0P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA28 | MIPI_CSI0_RX_D2P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA29 | MIPI_CSI0_RX_D3P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA30 | MIPI_CSI0_RX_CLK1P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA31 | GND | Ground |  |  |  |
| BA32 | MIPI_CSI1_RX_D0P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA33 | MIPI_CSI1_RX_D1P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA34 | MIPI_CSI1_RX_CLK0P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA35 | MIPI_CSI1_RX_D2P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA36 | MIPI_CSI1_RX_D3P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA37 | MIPI_CSI1_RX_CLK1P | MIPICSISignal接口 | not available as GPIO |  |  |
| BA38 | GND | Ground |  |  |  |
| BA39 | MIPI_DPHY1_RX_D3N | MIPICSISignal接口 | not available as GPIO |  |  |
| BA40 | MIPI_DPHY1_RX_CLKN | MIPICSISignal接口 | not available as GPIO |  |  |
| BA41 | MIPI_DPHY1_RX_D1N | MIPICSISignal接口 | not available as GPIO |  |  |
| BA42 | MIPI_DPHY1_RX_D0N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB1 | PCIE30_PORT0_REFCLKP_IN | PCIESignal接口 | not available as GPIO |  |  |
| BB2 | GND | Ground |  |  |  |
| BB3 | PCIE30_PORT0_TX1P | PCIESignal接口 | not available as GPIO |  |  |
| BB4 | PCIE30_PORT0_TX0N | PCIESignal接口 | not available as GPIO |  |  |
| BB5 | GND | Ground |  |  |  |
| BB6 | PCIE30_PORT0_RX1P | PCIESignal接口 | not available as GPIO |  |  |
| BB7 | PCIE30_PORT0_RX0N | PCIESignal接口 | not available as GPIO |  |  |
| BB8 | GND | Ground |  |  |  |
| BB9 | PCIE20_1_REFCLKP | PCIESignal接口 | not available as GPIO |  |  |
| BB10 | PCIE20_1_RXN/SATA30_1_RXN | PCIESignal接口 | not available as GPIO |  |  |
| BB11 | GND | Ground |  |  |  |
| BB12 | PCIE20_1_TXP/SATA30_1_TXP | PCIESignal接口 | not available as GPIO |  |  |
| BB13 | PCIE20_0_REFCLKN | PCIESignal接口 | not available as GPIO |  |  |
| BB14 | GND | Ground |  |  |  |
| BB15 | PCIE20_0_TXN/SATA30_0_TXN | PCIESignal接口 | not available as GPIO |  |  |
| BB16 | PCIE20_0_RXN/SATA30_0_RXN | PCIESignal接口 | not available as GPIO |  |  |
| BB17 | GND | Ground |  |  |  |
| BB18 | GPIO2_B2_U | GPIO | GPIO multiplexed pin |  |  |
| BB19 | GPIO2_B0_U | GPIO | GPIO multiplexed pin |  |  |
| BB20 | GPIO2_C0_D | GPIO | GPIO multiplexed pin |  |  |
| BB21 | GPIO2_B7_D | GPIO | GPIO multiplexed pin |  |  |
| BB22 | GPIO4_C5_D | GPIO | GPIO multiplexed pin |  |  |
| BB23 | GPIO4_C2_D | GPIO | GPIO multiplexed pin |  |  |
| BB24 | MIPI_CSI0_RX_D0N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB25 | MIPI_CSI0_RX_D1N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB26 | MIPI_CSI0_RX_CLK0N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB27 | MIPI_CSI0_RX_D2N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB28 | MIPI_CSI0_RX_D3N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB29 | MIPI_CSI0_RX_CLK1N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB30 | GND | Ground |  |  |  |
| BB31 | MIPI_CSI1_RX_D0N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB32 | MIPI_CSI1_RX_D1N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB33 | MIPI_CSI1_RX_CLK0N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB34 | MIPI_CSI1_RX_D2N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB35 | MIPI_CSI1_RX_D3N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB36 | MIPI_CSI1_RX_CLK1N | MIPICSISignal接口 | not available as GPIO |  |  |
| BB37 | GND | Ground |  |  |  |
| BB38 | MIPI_DPHY1_RX_D3P | MIPICSISignal接口 | not available as GPIO |  |  |
| BB39 | MIPI_DPHY1_RX_CLKP | MIPICSISignal接口 | not available as GPIO |  |  |
| BB40 | MIPI_DPHY1_RX_D1P | MIPICSISignal接口 | not available as GPIO |  |  |
| BB41 | MIPI_DPHY1_RX_D0P | MIPICSISignal接口 | not available as GPIO |  |  |
| BC2 | GND | Ground |  |  |  |
| BC3 | GND | Ground |  |  |  |
| BC4 | GND | Ground |  |  |  |
| BC5 | GND | Ground |  |  |  |
| BC6 | GND | Ground |  |  |  |
| BC7 | GND | Ground |  |  |  |
| BC8 | GND | Ground |  |  |  |
| BC9 | GND | Ground |  |  |  |
| BC10 | GND | Ground |  |  |  |
| BC11 | GND | Ground |  |  |  |
| BC12 | GND | Ground |  |  |  |
| BC13 | GND | Ground |  |  |  |
| BC14 | GND | Ground |  |  |  |
| BC15 | GND | Ground |  |  |  |
| BC16 | GND | Ground |  |  |  |
| BC17 | GND | Ground |  |  |  |
| BC18 | GPIO2_B3_D | GPIO | GPIO multiplexed pin |  |  |
| BC19 | GPIO2_A6_U | GPIO | GPIO multiplexed pin |  |  |
| BC20 | GND | Ground |  |  |  |
| BC21 | GPIO2_C4_D | GPIO | GPIO multiplexed pin |  |  |
| BC22 | GPIO4_C4_D | GPIO | GPIO multiplexed pin |  |  |
| BC23 | GPIO2_B6_D | GPIO | GPIO multiplexed pin |  |  |
| BC24 | GND | Ground |  |  |  |
| BC25 | GND | Ground |  |  |  |
| BC26 | GND | Ground |  |  |  |
| BC27 | GND | Ground |  |  |  |
| BC28 | GND | Ground |  |  |  |
| BC29 | GND | Ground |  |  |  |
| BC30 | GND | Ground |  |  |  |
| BC31 | GND | Ground |  |  |  |
| BC32 | GND | Ground |  |  |  |
| BC33 | GND | Ground |  |  |  |
| BC34 | GND | Ground |  |  |  |
| BC35 | GND | Ground |  |  |  |
| BC36 | GND | Ground |  |  |  |
| BC37 | GND | Ground |  |  |  |
| BC38 | MIPI_DPHY1_RX_D2P | MIPICSISignal接口 | not available as GPIO |  |  |
| BC39 | MIPI_DPHY1_RX_D2N | MIPICSISignal接口 | not available as GPIO |  |  |
| BD3 | GPIO0_A4_U | GPIO | GPIO multiplexed pin |  |  |
| BD4 | GPIO0_A0_D | GPIO | GPIO multiplexed pin |  |  |
| BD5 | GPIO0_B2_U | GPIO | GPIO multiplexed pin |  |  |
| BD6 | GND | Ground |  |  |  |
| BD7 | PCIE20_2_REFCLKP | PCIESignal接口 | not available as GPIO |  |  |
| BD8 | PCIE20_2_REFCLKN | PCIESignal接口 | not available as GPIO |  |  |
| BD9 | GND | Ground |  |  |  |
| BD10 | PCIE20_2_TXP/SATA30_2_TXP/USB30_2<br />_SSTXP | PCIESignal接口 | not available as GPIO |  |  |
| BD11 | PCIE20_2_TXN/SATA30_2_TXN/USB30_<br />2_SSTXN | PCIESignal接口 | not available as GPIO |  |  |
| BD12 | GND | Ground |  |  |  |
| BD13 | PCIE20_2_RXP/SATA30_2_RXP/USB30_<br />2_SSRXP | PCIESignal接口 | not available as GPIO |  |  |
| BD14 | PCIE20_2_RXN/SATA30_2_RXN/USB30_<br />2_SSRXN | PCIESignal接口 | not available as GPIO |  |  |
| BD15 | GND | Ground |  |  |  |
| BD16 | RESET_L | system reset signal |  |  |  |
| BD17 | GND | Ground |  |  |  |
| BD18 | GPIO2_B4_U | GPIO | GPIO multiplexed pin |  |  |
| BD19 | GPIO2_B5_U | GPIO | GPIO multiplexed pin |  |  |
| BD20 | GPIO4_C3_D | GPIO | GPIO multiplexed pin |  |  |
| BD21 | GPIO4_C6_D | GPIO | GPIO multiplexed pin |  |  |
| BD22 | GPIO2_C5_D | GPIO | GPIO multiplexed pin |  |  |
| BD23 | GND | Ground |  |  |  |
| BD24 | VCCIO5 | GPIO5Power Domain1.8/3.3<br />optional | 需外部输入<br />1.8V/3.3V |  |  |
| BD25 | VCCIO5_1V8 | GPIO51.8VPower Domain | 需外部输入1.8V |  |  |
| BD26 | VCCIO3_1V8 | GPIO31.8VPower Domain | 需外部输入1.8V |  |  |
| BD27 | VCCIO6 | GPIO6Power Domain1.8/3.3<br />optional | 需外部输入<br />1.8V/3.3V |  |  |
| BD28 | VCCIO6_1V8 | GPIO61.8VPower Domain | 需外部输入1.8V |  |  |
| BD29 | GND | Ground |  |  |  |
| BD30 | GND | Ground |  |  |  |
| BD31 | GND |  | Ground |  |  |
| BD32 | GND |  | Ground |  |  |
| BD33 | GND |  | Ground |  |  |
| BD34 | GND |  | Ground |  |  |
| BD35 | GND |  | Ground |  |  |
| BD36 | VCC_1V8_S0 |  | 核心板1.8V输出 |  | 最大supports2.5A电流 |
| BD37 | GND |  | Ground |  |  |
| C1 | GND | Ground |  |  |  |
| CA1 | MIPI_DPHY0_RX_D3P | MIPICSISignal接口 |  | not available as GPIO |  |
| CA2 | MIPI_DPHY0_RX_D2P | MIPICSISignal接口 |  | not available as GPIO |  |
| CA3 | MIPI_DPHY0_RX_CLKP | MIPICSISignal接口 |  | not available as GPIO |  |
| CA4 | MIPI_DPHY0_RX_D1P | MIPICSISignal接口 |  | not available as GPIO |  |
| CA5 | MIPI_DPHY0_RX_D0P | MIPICSISignal接口 |  | not available as GPIO |  |
| CA6 | GND | Ground |  |  |  |
| CA7 | MIPI_DPHY0_TX_D3N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA8 | MIPI_DPHY0_TX_D2N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA9 | MIPI_DPHY0_TX_CLKN | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA10 | MIPI_DPHY0_TX_D1N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA11 | MIPI_DPHY0_TX_D0N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA12 | GND | Ground |  |  |  |
| CA13 | MIPI_DPHY1_TX_D3N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA14 | MIPI_DPHY1_TX_D2N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA15 | MIPI_DPHY1_TX_CLKN | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA16 | MIPI_DPHY1_TX_D1N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA17 | MIPI_DPHY1_TX_D0N | MIPIDSISignal接口 |  | not available as GPIO |  |
| CA18 | GND | Ground |  |  |  |
| CA19 | TYPEC0_SSTX2P/DP0_TX3P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA20 | TYPEC0_SSRX2P/DP0_TX2P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA21 | GND | Ground |  |  |  |
| CA22 | TYPEC0_SSTX1P/DP0_TX1P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA23 | TYPEC0_SSRX1P/DP0_TX0P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA24 | GND | Ground |  |  |  |
| CA25 | TYPEC1_SSTX2P/DP1_TX3P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA26 | TYPEC1_SSRX2P/DP1_TX2P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA27 | GND | Ground |  |  |  |
| CA28 | TYPEC1_SSTX1P/DP1_TX1P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA29 | TYPEC1_SSRX1P/DP1_TX0P | TYPEC/DPmultiplexedSignal |  | not available as GPIO |  |
| CA30 | GND | Ground |  |  |  |
| CA31 | TYPEC0_OTG_DM | TYPECOTGSignal |  | not available as GPIO |  |
| CA32 | TYPEC1_OTG_DP | TYPECOTGSignal |  | not available as GPIO |  |
| CA33 | GND | Ground |  |  |  |
| CA34 | USB20_HOST0_DM | USB2.0 signal |  | not available as GPIO |  |
| CB1 | MIPI_DPHY0_RX_D3N | MIPICSISignal接口 | not available as GPIO |  |  |
| CB2 | MIPI_DPHY0_RX_D2N | MIPICSISignal接口 | not available as GPIO |  |  |
| CB3 | MIPI_DPHY0_RX_CLKN | MIPICSISignal接口 | not available as GPIO |  |  |
| CB4 | MIPI_DPHY0_RX_D1N | MIPICSISignal接口 | not available as GPIO |  |  |
| CB5 | MIPI_DPHY0_RX_D0N | MIPICSISignal接口 | not available as GPIO |  |  |
| CB6 | MIPI_DPHY0_TX_D3P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB7 | MIPI_DPHY0_TX_D2P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB8 | MIPI_DPHY0_TX_CLKP | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB9 | MIPI_DPHY0_TX_D1P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB10 | MIPI_DPHY0_TX_D0P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB11 | GND | Ground |  |  |  |
| CB12 | MIPI_DPHY1_TX_D3P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB13 | MIPI_DPHY1_TX_D2P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB14 | MIPI_DPHY1_TX_CLKP | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB15 | MIPI_DPHY1_TX_D1P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB16 | MIPI_DPHY1_TX_D0P | MIPIDSISignal接口 | not available as GPIO |  |  |
| CB17 | GND | Ground |  |  |  |
| CB18 | TYPEC0_SSTX2N/DP0_TX3N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB19 | GND | Ground |  |  |  |
| CB20 | TYPEC0_SSRX2N/DP0_TX2N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB21 | TYPEC0_SSTX1N/DP0_TX1N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB22 | GND | Ground |  |  |  |
| CB23 | TYPEC0_SSRX1N/DP0_TX0N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB24 | TYPEC1_SSTX2N/DP1_TX3N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB25 | GND | Ground |  |  |  |
| CB26 | TYPEC1_SSRX2N/DP1_TX2N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB27 | TYPEC1_SSTX1N/DP1_TX1N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB28 | GND | Ground |  |  |  |
| CB29 | TYPEC1_SSRX1N/DP1_TX0N | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CB30 | TYPEC0_OTG_DP | TYPECOTGSignal | not available as GPIO |  |  |
| CB31 | GND | Ground |  |  |  |
| CB32 | TYPEC1_OTG_DM | TYPECOTGSignal | not available as GPIO |  |  |
| CB33 | USB20_HOST0_DP | USB2.0 signal | not available as GPIO |  |  |
| CC2 | GND | Ground |  |  |  |
| CC3 | GND | Ground |  |  |  |
| CC4 | GND | Ground |  |  |  |
| CC5 | GND | Ground |  |  |  |
| CC6 | GND | Ground |  |  |  |
| CC7 | GND | Ground |  |  |  |
| CC8 | GND | Ground |  |  |  |
| CC9 | SARADC_VIN6 | ADCSignal | 1.8VADCSignal |  |  |
| CC10 | SARADC_VIN4 | ADCSignal | 1.8VADCSignal |  |  |
| CC11 | SARADC_VIN7 | ADCSignal | 1.8VADCSignal |  |  |
| CC12 | SARADC_VIN3 | ADCSignal | 1.8VADCSignal |  |  |
| CC13 | SARADC_VIN1_KEY/RECOVER<br />Y | ADCSignal | 1.8VADCSignal |  |  |
| CC14 | BOOT_SARADC_IN0 | ADCSignal | 1.8VADCSignal |  |  |
| CC15 | SARADC_VIN5 | ADCSignal | 1.8VADCSignal |  |  |
| CC16 | SARADC_VIN2 | ADCSignal | 1.8VADCSignal |  |  |
| CC17 | GND | Ground |  |  |  |
| CC18 | TYPEC0_SBU1/DP0_AUXP | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CC19 | TYPEC0_SBU2/DP0_AUXN | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CC20 | GND | Ground |  |  |  |
| CC21 | TYPEC0_USB20_OTG_ID | TYPECSignal | not available as GPIO |  |  |
| CC22 | TYPEC0_USB20_VBUSDET | TYPECSignal | not available as GPIO |  |  |
| CC23 | GND | Ground |  |  |  |
| CC24 | TYPEC1_SBU1/DP1_AUXP | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CC25 | TYPEC1_SBU2/DP1_AUXN | TYPEC/DPmultiplexedSignal | not available as GPIO |  |  |
| CC26 | GND | Ground |  |  |  |
| CC27 | TYPEC1_USB20_OTG_ID | TYPECSignal | not available as GPIO |  |  |
| CC28 | TYPEC1_USB20_VBUSDET | TYPECSignal | not available as GPIO |  |  |
| CC29 | GND | Ground |  |  |  |
| CC30 | USB20_HOST1_DM | USB2.0 signal | not available as GPIO |  |  |
| CC31 | USB20_HOST1_DP | USB2.0 signal | not available as GPIO |  |  |
| CD3 | GND | Ground |  |  |  |
| CD4 | SLAVER_PMIC_PLDO3 | 核心板1.8V输出 | 最大supports0.3A电流 |  |  |
| CD5 | SLAVER_PMIC_PLDO2 | 核心板1.8V输出 | 最大supports0.3A电流 |  |  |
| CD6 | VCC_1V8_CAM_S0 | 核心板1.8V输出, CAM电<br />源 | 最大supports0.3A电流 |  |  |
| CD7 | VCC_3V3_SD_S0 | 核心板3.3V输出 | 最大supports0.5A电流 |  |  |
| CD8 | VCC_2V8_CAM_S0 | 核心板2.8V输出, CAM电<br />源 | 最大supports0.3A电流 |  |  |
| CD9 | VCC_1V2_CAM_S0 | 核心板1.2V输出, CAM电<br />源 | 最大supports0.5A电流 |  |  |
| CD10 | GND | Ground |  |  |  |
| CD11 | GND | Ground |  |  |  |
| CD12 | GND | Ground |  |  |  |
| CD13 | GND | Ground |  |  |  |
| CD14 | GND | Ground |  |  |  |
| CD15 | GND | Ground |  |  |  |
| CD16 | GND | Ground |  |  |  |
| CD17 | VCC_3V3_S0 | 核心板3.3V输出 | 最大supports5A电流 |  |  |
| CD18 | GND | Ground |  |  |  |
| CD19 | GND | Ground |  |  |  |
| CD20 | GND | Ground |  |  |  |
| CD21 | AVCC_1V8_CODEC_S0 | 核心板1.8V输出 | 最大supports0.5A电流 |  |  |
| CD22 | VCC_3V3_S3 | 核心板3.3V输出 | 最大supports0.3A电流 |  |  |
| CD23 | GND | Ground |  |  |  |
| CD24 | GND | Ground |  |  |  |
| CD25 | GND | Ground |  |  |  |
| CD26 | GND | Ground |  |  |  |
| CD27 | GND | Ground |  |  |  |
| CD28 | GND | Ground |  |  |  |
| CD29 | GND | Ground |  |  |  |

## Core Board Pin Definition(DA)

| Pin | Net Name | Type | Description |
|---|---|---|---|
| D1 | GND | Ground |  |
| DA1 | GND | Ground |  |
| DA2 | HDMI1_TX2N_PORT/EDP1_TX_D2<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA3 | HDMI1_TX1P_PORT/EDP1_TX_D1<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA4 | GND | Ground |  |
| DA5 | HDMI1_TX0N_PORT/EDP1_TX_D0<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA6 | HDMI1_TX3P_PORT/EDP1_TX_D3<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA7 | GND | Ground |  |
| DA8 | HDMI1_TX_SBDN/EDP1_TX_AUX<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA9 | HDMI0_TX2P_PORT/EDP0_TX_D2<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA10 | GND | Ground |  |
| DA11 | HDMI0_TX1N_PORT/EDP0_TX_D1<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA12 | HDMI0_TX0P_PORT/EDP0_TX_D0<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA13 | GND | Ground |  |
| DA14 | HDMI0_TX3N_PORT/EDP0_TX_D3<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA15 | HDMI0_TX_SBDP/EDP0_TX_AUXP | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DA16 | GND | Ground |  |
| DA17 | GPIO3_C3_D | GPIO | GPIO multiplexed pin |
| DA18 | GPIO3_B4_U | GPIO | GPIO multiplexed pin |
| DA19 | GPIO3_A4_D | GPIO | GPIO multiplexed pin |
| DA20 | GPIO3_B0_U | GPIO | GPIO multiplexed pin |
| DA21 | GPIO3_B1_D | GPIO | GPIO multiplexed pin |
| DA22 | GPIO3_D4_D | GPIO | GPIO multiplexed pin |
| DA23 | GPIO3_C1_D | GPIO | GPIO multiplexed pin |
| DA24 | GND | Ground |  |
| DA25 | GPIO3_B2_D | GPIO | GPIO multiplexed pin |
| DA26 | GPIO3_D2_D | GPIO | GPIO multiplexed pin |
| DA27 | GPIO3_D1_D | GPIO | GPIO multiplexed pin |
| DA28 | GPIO4_A2_D | GPIO | GPIO multiplexed pin |
| DA29 | GPIO4_A1_D | GPIO | GPIO multiplexed pin |
| DA30 | GPIO4_B7_U | GPIO | GPIO multiplexed pin |
| DA31 | GPIO4_A3_D | GPIO | GPIO multiplexed pin |
| DA32 | GPIO4_A4_D | GPIO | GPIO multiplexed pin |
| DA33 | GPIO4_A0_D | GPIO | GPIO multiplexed pin |
| DA34 | GPIO4_D2_U | GPIO | GPIO multiplexed pin |
| DA35 | GPIO4_D5_D | GPIO | GPIO multiplexed pin |
| DA36 | GPIO4_D1_U | GPIO | GPIO multiplexed pin |
| DA37 | SYSPWR_EN_H | PMIC enable signal | not available as GPIO |
| DA38 | VCC4V0_SYS | core board main power input | 建议使用4V/5A电源 |
| DA39 | VCC4V0_SYS | core board main power input | 建议使用4V/5A电源 |
| DA40 | VCC4V0_SYS | core board main power input | 建议使用4V/5A电源 |
| DA41 | GND | Ground |  |
| DA42 | GND | Ground |  |
| DB1 | HDMI1_TX2P_PORT/EDP1_TX_D2<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB2 | GND | Ground |  |
| DB3 | HDMI1_TX1N_PORT/EDP1_TX_D1<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB4 | HDMI1_TX0P_PORT/EDP1_TX_D0<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB5 | GND | Ground |  |
| DB6 | HDMI1_TX3N_PORT/EDP1_TX_D3<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB7 | HDMI1_TX_SBDP/EDP1_TX_AUXP | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB8 | GND | Ground |  |
| DB9 | HDMI0_TX2N_PORT/EDP0_TX_D2<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB10 | HDMI0_TX1P_PORT/EDP0_TX_D1<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB11 | GND | Ground |  |
| DB12 | HDMI0_TX0N_PORT/EDP0_TX_D0<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB13 | HDMI0_TX3P_PORT/EDP0_TX_D3<br />P | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB14 | GND | Ground |  |
| DB15 | HDMI0_TX_SBDN/EDP0_TX_AUX<br />N | HDMI/EDPmultiplexedSignal | not available as GPIO |
| DB16 | GPIO3_B7_D | GPIO | GPIO multiplexed pin |
| DB17 | GPIO3_A1_U | GPIO | GPIO multiplexed pin |
| DB18 | GPIO3_B3_U | GPIO | GPIO multiplexed pin |
| DB19 | GPIO3_A3_U | GPIO | GPIO multiplexed pin |
| DB20 | GND | Ground |  |
| DB21 | GPIO3_A5_D | GPIO | GPIO multiplexed pin |
| DB22 | GPIO3_A6_D | GPIO | GPIO multiplexed pin |
| DB23 | GPIO3_C0_D | GPIO | GPIO multiplexed pin |
| DB24 | GPIO3_C4_U | GPIO | GPIO multiplexed pin |
| DB25 | GPIO3_C5_U | GPIO | GPIO multiplexed pin |
| DB26 | GPIO3_D3_D | GPIO | GPIO multiplexed pin |
| DB27 | GND | Ground |  |
| DB28 | GPIO4_B0_D | GPIO | GPIO multiplexed pin |
| DB29 | GPIO4_B2_U | GPIO | GPIO multiplexed pin |
| DB30 | GPIO4_A6_D | GPIO | GPIO multiplexed pin |
| DB31 | GPIO4_A5_D | GPIO | GPIO multiplexed pin |
| DB32 | GPIO4_A7_D | GPIO | GPIO multiplexed pin |
| DB33 | GND | Ground |  |
| DB34 | GPIO4_D3_U | GPIO | GPIO multiplexed pin |
| DB35 | GND | Ground |  |
| DB36 | GND | Ground |  |
| DB37 | GND | Ground |  |
| DB38 | VCC4V0_SYS | core board main power input | 建议使用4V/5A电源 |
| DB39 | VCC4V0_SYS | core board main power input | 建议使用4V/5A电源 |
| DB40 | GND | Ground |  |
| DB41 | GND | Ground |  |
| DC2 | GND | Ground |  |
| DC3 | GND | Ground |  |
| DC4 | GND | Ground |  |
| DC5 | GND | Ground |  |
| DC6 | GND | Ground |  |
| DC7 | GND | Ground |  |
| DC8 | GND | Ground |  |
| DC9 | GND | Ground |  |
| DC10 | HDMI_RX_D2N | HDMI input signal | not available as GPIO |
| DC11 | HDMI_RX_D1P | HDMI input signal | not available as GPIO |
| DC12 | GND | Ground |  |
| DC13 | HDMI_RX_D0N | HDMI input signal | not available as GPIO |
| DC14 | HDMI_RX_CLKP | HDMI input signal | not available as GPIO |
| DC15 | GND | Ground |  |
| DC16 | GPIO3_C2_D | GPIO | GPIO multiplexed pin |
| DC17 | GPIO3_A0_U | GPIO | GPIO multiplexed pin |
| DC18 | GPIO3_B5_U | GPIO | GPIO multiplexed pin |
| DC19 | GPIO3_A2_U | GPIO | GPIO multiplexed pin |
| DC20 | GPIO3_A7_U | GPIO | GPIO multiplexed pin |
| DC21 | GPIO3_B6_D | GPIO | GPIO multiplexed pin |
| DC22 | GPIO3_D5_D | GPIO | GPIO multiplexed pin |
| DC23 | GPIO3_C6_U | GPIO | GPIO multiplexed pin |
| DC24 | GPIO3_D0_U | GPIO | GPIO multiplexed pin |
| DC25 | GPIO3_C7_U | GPIO | GPIO multiplexed pin |
| DC26 | GPIO4_B3_U | GPIO | GPIO multiplexed pin |
| DC27 | GPIO4_B4_U | GPIO | GPIO multiplexed pin |
| DC28 | GPIO4_B1_U | GPIO | GPIO multiplexed pin |
| DC29 | GPIO4_C1_D | GPIO | GPIO multiplexed pin |
| DC30 | GPIO4_B5_D | GPIO | GPIO multiplexed pin |
| DC31 | GPIO4_C0_U | GPIO | GPIO multiplexed pin |
| DC32 | GPIO4_B6_D | GPIO | GPIO multiplexed pin |
| DC33 | GND | Ground |  |
| DC34 | GPIO4_D4_U | GPIO | GPIO multiplexed pin |
| DC35 | GPIO4_D0_U | GPIO | GPIO multiplexed pin |
| DC36 | PWRON_L | system enable signal |  |
| DC37 | GND | Ground |  |
| DC38 | GND | Ground |  |
| DC39 | GND | Ground |  |
| DD3 | GND | Ground |  |
| DD4 | GND | Ground |  |
| DD5 | GND | Ground |  |
| DD6 | GND | Ground |  |
| DD7 | GND | Ground |  |
| DD8 | GND | Ground |  |
| DD9 | HDMI_RX_D2P | HDMI input signal | not available as GPIO |
| DD10 | GND | Ground |  |
| DD11 | HDMI_RX_D1N | HDMI input signal | not available as GPIO |
| DD12 | HDMI_RX_D0P | HDMI input signal | not available as GPIO |
| DD13 | GND | Ground |  |
| DD14 | HDMI_RX_CLKN | HDMI input signal | not available as GPIO |
| DD15 | GND | Ground |  |
| DD16 | GND | Ground |  |
| DD17 | GND | Ground |  |
| DD18 | GND | Ground |  |
| DD19 | GND | Ground |  |
| DD20 | GND | Ground |  |
| DD21 | GND | Ground |  |
| DD22 | GND | Ground |  |
| DD23 | GND | Ground |  |
| DD24 | GND | Ground |  |
| DD25 | GND | Ground |  |
| DD26 | GND | Ground |  |
| DD27 | GND | Ground |  |
| DD28 | GND | Ground |  |
| DD29 | GND | Ground |  |
| DD30 | GND | Ground |  |
| DD31 | GND | Ground |  |
| DD32 | GND | Ground |  |
| DD33 | GND | Ground |  |
| DD34 | GND | Ground |  |
| DD35 | GND | Ground |  |
| DD36 | GND | Ground |  |
| DD37 | GND | Ground |  |

## Core Board Pin Definition(H)

| Pin | Net Name | Type | Description |
|---|---|---|---|
| H1~H44 | GND | Ground |  |
| H45 | VDDQ_DDR_S0 | 核心板DDR电源 | 不can be used for外设供电 |
| H46~H52 | GND | Ground |  |
| H53 | VDD_DDR_S0 | 核心板DDR电源 | 不can be used for外设供电 |
| H54 | VDD_CPU_BIG0_S0 | 核心板CPU电源 | 不can be used for外设供电 |
| H55 | VDD_CPU_BIG1_S0 | 核心板CPU电源 | 不can be used for外设供电 |
| H56~H60 | GND | Ground |  |
| H61 | VDD_VDENC_S0 |  | 不can be used for外设供电 |
| H62 | VDD_CPU_LIT_S0 | 核心板CPU电源 | 不can be used for外设供电 |
| H63~H68 | GND | Ground |  |
| H69 | VDD_GPU_S0 | 核心板GPU电源 | 不can be used for外设供电 |
| H70 | VDD_LOG_S0 | 核心板逻辑电源 | 不can be used for外设供电 |
| H71 | VDD_NPU_S0 | 核心板NPU电源 | 不can be used for外设供电 |
| H72~H96 | GND | Ground |  |
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
| RK3128 | X3128development board | x3128cv4evaluation board |  |
| PX30 | X30development board | x30cv1evaluation board |  |
| RK3288 | x3288development board | x3288cv3evaluation board |  |
| RK3399 | x3399development board | x3399cv3/x3399cv4evaluation board |  |
| RK1808 | x1808development board | x1808cv1evaluation board |  |
| MT8385 | X8385development board | X8385CV1evaluation board |  |
| MT8768 | X8768development board | X8768CV1evaluation board |  |
| T507 | X507development board | X507CV2evaluation board |  |
| RK3566 | X3566development board | X3566CV1evaluation board |  |
| RK3566 | I3566公板 | I3566CV1evaluation board |  |
| RK3568 | X3568development board | X3568CV2evaluation board |  |
| RK3568 | I3568公板 | I3568CV1evaluation board |  |
| RK3588 | I3588development board | I3588CV1evaluation board |  |
| RK3399 | ibox3399card computer |  |  |
| RK3568 | ibox3568card computer |  |  |
