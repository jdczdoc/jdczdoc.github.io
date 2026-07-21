---
sidebar_position: 2
title: Pin definition
description: Z3588 core board pin definition
---

# Pin definition

This chapter lists the Z3588 core board pin definitions. When designing the backplane, the core board schematic diagram and chip specifications should be combined to confirm the multiplexing functions, voltage domain, and power-on default state.

## Core board pin definition (AA)

| Pin number | network name | type | describe |
|---|---|---|---|
| A1 | GND | systematically |  |
| AA1 | GND | systematically |  |
| AA2 | GND | systematically |  |
| AA3 | GND | systematically |  |
| AA4 | GND | systematically |  |
| AA5 | VCCIO1_1V8 | GPIO11.8V power domain | Requires external input 1.8V |
| AA6 | GND | systematically |  |
| AA7 | GPIO0_D2_U | GPIO | GPIO multiplexed pins |
| AA8 | GPIO0_D1_U | GPIO | GPIO multiplexed pins |
| AA9 | GPIO0_D6_D | GPIO | GPIO multiplexed pins |
| AA10 | GPIO0_D5_U | GPIO | GPIO multiplexed pins |
| AA11 | GPIO0_D4_U | GPIO | GPIO multiplexed pins |
| AA12 | VCCIO4 | GPIO4 power domain 1.8V/3.3V can be selected from <br /> | Requires external input 1.8V/3.3V |
| AA13 | GPIO1_A0_D | GPIO | GPIO multiplexed pins |
| AA14 | GPIO1_A4_D | GPIO | GPIO multiplexed pins |
| AA15 | GPIO1_B5_U | GPIO | GPIO multiplexed pins |
| AA16 | GPIO1_B3_D | GPIO | GPIO multiplexed pins |
| AA17 | GPIO1_B6_U | GPIO | GPIO multiplexed pins |
| AA18 | GPIO1_B7_U | GPIO | GPIO multiplexed pins |
| AA19 | GPIO1_D7_U | GPIO | GPIO multiplexed pins |
| AA20 | GND | systematically |  |
| AA21 | GPIO1_C6_D | GPIO | GPIO multiplexed pins |
| AA22 | GPIO1_C4_D | GPIO | GPIO multiplexed pins |
| AA23 | GND | systematically |  |
| AA24 | GPIO1_C2_D | GPIO | GPIO multiplexed pins |
| AA25 | GPIO1_C7_D | GPIO | GPIO multiplexed pins |
| AA26 | GPIO1_D4_D | GPIO | GPIO multiplexed pins |
| AA27 | PCIE30_PORT1_REFCLKP_IN | PCIE signal interface | Not available as GPIO |
| AA28 | GND | systematically |  |
| AA29 | PCIE30_PORT1_TX3P | PCIE signal interface | Not available as GPIO |
| AA30 | PCIE30_PORT1_TX2N | PCIE signal interface | Not available as GPIO |
| AA31 | GND | systematically |  |
| AA32 | PCIE30_PORT1_RX3P | PCIE signal interface | Not available as GPIO |
| AA33 | PCIE30_PORT1_RX2N | PCIE signal interface | Not available as GPIO |
| AA34 | GND | systematically |  |
| AB1 | GND | systematically |  |
| AB2 | GND | systematically |  |
| AB3 | GND | systematically |  |
| AB4 | GND | systematically |  |
| AB5 | GND | systematically |  |
| AB6 | GPIO0_C7_D | GPIO | GPIO multiplexed pins |
| AB7 | GPIO0_D3_U | GPIO | GPIO multiplexed pins |
| AB8 | GPIO0_C0_D | GPIO | GPIO multiplexed pins |
| AB9 | GPIO0_C2_D | GPIO | GPIO multiplexed pins |
| AB10 | GPIO0_C4_D | GPIO | GPIO multiplexed pins |
| AB11 | VCCIO4_1V8 | GPIO41.8V power domain | Requires external input 1.8V |
| AB12 | GND | systematically |  |
| AB13 | GPIO1_B4_U | GPIO | GPIO multiplexed pins |
| AB14 | GPIO1_B1_D | GPIO | GPIO multiplexed pins |
| AB15 | GPIO1_A6_D | GPIO | GPIO multiplexed pins |
| AB16 | GPIO1_A5_D | GPIO | GPIO multiplexed pins |
| AB17 | GPIO1_A2_D | GPIO | GPIO multiplexed pins |
| AB18 | GPIO1_B0_U | GPIO | GPIO multiplexed pins |
| AB19 | GPIO0_C3_D | GPIO | GPIO multiplexed pins |
| AB20 | GPIO1_D3_D | GPIO | GPIO multiplexed pins |
| AB21 | GND | systematically |  |
| AB22 | GND | systematically |  |
| AB23 | GPIO1_D1_D | GPIO | GPIO multiplexed pins |
| AB24 | GPIO1_C3_D | GPIO | GPIO multiplexed pins |
| AB25 | GPIO1_C5_D | GPIO | GPIO multiplexed pins |
| AB26 | GND | systematically |  |
| AB27 | PCIE30_PORT1_REFCLKN_IN | PCIE signal interface | Not available as GPIO |
| AB28 | PCIE30_PORT1_TX3N | PCIE signal interface | Not available as GPIO |
| AB29 | GND | systematically |  |
| AB30 | PCIE30_PORT1_TX2P | PCIE signal interface | Not available as GPIO |
| AB31 | PCIE30_PORT1_RX3N | PCIE signal interface | Not available as GPIO |
| AB32 | GND | systematically |  |
| AB33 | PCIE30_PORT1_RX2P | PCIE signal interface | Not available as GPIO |
| AC2 | GND | systematically |  |
| AC3 | GND | systematically |  |
| AC4 | GND | systematically |  |
| AC5 | GPIO0_D0_D | GPIO | GPIO multiplexed pins |
| AC6 | GPIO0_B5_D | GPIO | GPIO multiplexed pins |
| AC7 | GPIO0_C5_U | GPIO | GPIO multiplexed pins |
| AC8 | GPIO0_B6_D | GPIO | GPIO multiplexed pins |
| AC9 | GPIO0_C6_U | GPIO | GPIO multiplexed pins |
| AC10 | GPIO0_B7_D | GPIO | GPIO multiplexed pins |
| AC11 | GND | systematically |  |
| AC12 | GPIO1_D6_U | GPIO | GPIO multiplexed pins |
| AC13 | GND | systematically |  |
| AC14 | GPIO1_A1_D | GPIO | GPIO multiplexed pins |
| AC15 | GPIO1_A7_U | GPIO | GPIO multiplexed pins |
| AC16 | GPIO1_B2_D | GPIO | GPIO multiplexed pins |
| AC17 | GPIO1_A3_D | GPIO | GPIO multiplexed pins |
| AC18 | GPIO1_D5_D | GPIO | GPIO multiplexed pins |
| AC19 | GPIO1_D2_D | GPIO | GPIO multiplexed pins |
| AC20 | GPIO1_C1_Z | GPIO | GPIO multiplexed pins |
| AC21 | GPIO1_C0_Z | GPIO | GPIO multiplexed pins |
| AC22 | GND | systematically |  |
| AC23 | GPIO1_D0_D | GPIO | GPIO multiplexed pins |
| AC24 | GND | systematically |  |
| AC25 | GND | systematically |  |
| AC26 | GND | systematically |  |
| AC27 | GND | systematically |  |
| AC28 | GND | systematically |  |
| AC29 | GND | systematically |  |
| AC30 | GND | systematically |  |
| AC31 | GND | systematically |  |
| AD3~AD29 | GND | systematically |  |

## Core board pin definition (BA)

| Pin number | network name | type | describe |  |  |
|---|---|---|---|---|---|
| B1 | GND | systematically |  |  |  |
| BA1 | GND | systematically |  |  |  |
| BA2 | PCIE30_PORT0_REFCLKN_IN | PCIE signal interface | Not available as GPIO |  |  |
| BA3 | PCIE30_PORT0_TX1N | PCIE signal interface | Not available as GPIO |  |  |
| BA4 | GND | systematically |  |  |  |
| BA5 | PCIE30_PORT0_TX0P | PCIE signal interface | Not available as GPIO |  |  |
| BA6 | PCIE30_PORT0_RX1N | PCIE signal interface | Not available as GPIO |  |  |
| BA7 | GND | systematically |  |  |  |
| BA8 | PCIE30_PORT0_RX0P | PCIE signal interface | Not available as GPIO |  |  |
| BA9 | PCIE20_1_REFCLKN | PCIE signal interface | Not available as GPIO |  |  |
| BA10 | GND | systematically |  |  |  |
| BA11 | PCIE20_1_RXP/SATA30_1_RXP | PCIE signal interface | Not available as GPIO |  |  |
| BA12 | PCIE20_1_TXN/SATA30_1_TXN | PCIE signal interface | Not available as GPIO |  |  |
| BA13 | GND | systematically |  |  |  |
| BA14 | PCIE20_0_REFCLKP | PCIE signal interface | Not available as GPIO |  |  |
| BA15 | PCIE20_0_TXP/SATA30_0_TXP | PCIE signal interface | Not available as GPIO |  |  |
| BA16 | GND | systematically |  |  |  |
| BA17 | PCIE20_0_RXP/SATA30_0_RXP | PCIE signal interface | Not available as GPIO |  |  |
| BA18 | GND | systematically |  |  |  |
| BA19 | GPIO2_B1_U | GPIO | GPIO multiplexed pins |  |  |
| BA20 | GPIO2_A7_U | GPIO | GPIO multiplexed pins |  |  |
| BA21 | GPIO2_C3_D | GPIO | GPIO multiplexed pins |  |  |
| BA22 | GPIO2_C2_D | GPIO | GPIO multiplexed pins |  |  |
| BA23 | GPIO2_C1_D | GPIO | GPIO multiplexed pins |  |  |
| BA24 | GND | systematically |  |  |  |
| BA25 | MIPI_CSI0_RX_D0P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA26 | MIPI_CSI0_RX_D1P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA27 | MIPI_CSI0_RX_CLK0P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA28 | MIPI_CSI0_RX_D2P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA29 | MIPI_CSI0_RX_D3P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA30 | MIPI_CSI0_RX_CLK1P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA31 | GND | systematically |  |  |  |
| BA32 | MIPI_CSI1_RX_D0P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA33 | MIPI_CSI1_RX_D1P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA34 | MIPI_CSI1_RX_CLK0P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA35 | MIPI_CSI1_RX_D2P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA36 | MIPI_CSI1_RX_D3P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA37 | MIPI_CSI1_RX_CLK1P | MIPICSI signal interface | Not available as GPIO |  |  |
| BA38 | GND | systematically |  |  |  |
| BA39 | MIPI_DPHY1_RX_D3N | MIPICSI signal interface | Not available as GPIO |  |  |
| BA40 | MIPI_DPHY1_RX_CLKN | MIPICSI signal interface | Not available as GPIO |  |  |
| BA41 | MIPI_DPHY1_RX_D1N | MIPICSI signal interface | Not available as GPIO |  |  |
| BA42 | MIPI_DPHY1_RX_D0N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB1 | PCIE30_PORT0_REFCLKP_IN | PCIE signal interface | Not available as GPIO |  |  |
| BB2 | GND | systematically |  |  |  |
| BB3 | PCIE30_PORT0_TX1P | PCIE signal interface | Not available as GPIO |  |  |
| BB4 | PCIE30_PORT0_TX0N | PCIE signal interface | Not available as GPIO |  |  |
| BB5 | GND | systematically |  |  |  |
| BB6 | PCIE30_PORT0_RX1P | PCIE signal interface | Not available as GPIO |  |  |
| BB7 | PCIE30_PORT0_RX0N | PCIE signal interface | Not available as GPIO |  |  |
| BB8 | GND | systematically |  |  |  |
| BB9 | PCIE20_1_REFCLKP | PCIE signal interface | Not available as GPIO |  |  |
| BB10 | PCIE20_1_RXN/SATA30_1_RXN | PCIE signal interface | Not available as GPIO |  |  |
| BB11 | GND | systematically |  |  |  |
| BB12 | PCIE20_1_TXP/SATA30_1_TXP | PCIE signal interface | Not available as GPIO |  |  |
| BB13 | PCIE20_0_REFCLKN | PCIE signal interface | Not available as GPIO |  |  |
| BB14 | GND | systematically |  |  |  |
| BB15 | PCIE20_0_TXN/SATA30_0_TXN | PCIE signal interface | Not available as GPIO |  |  |
| BB16 | PCIE20_0_RXN/SATA30_0_RXN | PCIE signal interface | Not available as GPIO |  |  |
| BB17 | GND | systematically |  |  |  |
| BB18 | GPIO2_B2_U | GPIO | GPIO multiplexed pins |  |  |
| BB19 | GPIO2_B0_U | GPIO | GPIO multiplexed pins |  |  |
| BB20 | GPIO2_C0_D | GPIO | GPIO multiplexed pins |  |  |
| BB21 | GPIO2_B7_D | GPIO | GPIO multiplexed pins |  |  |
| BB22 | GPIO4_C5_D | GPIO | GPIO multiplexed pins |  |  |
| BB23 | GPIO4_C2_D | GPIO | GPIO multiplexed pins |  |  |
| BB24 | MIPI_CSI0_RX_D0N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB25 | MIPI_CSI0_RX_D1N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB26 | MIPI_CSI0_RX_CLK0N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB27 | MIPI_CSI0_RX_D2N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB28 | MIPI_CSI0_RX_D3N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB29 | MIPI_CSI0_RX_CLK1N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB30 | GND | systematically |  |  |  |
| BB31 | MIPI_CSI1_RX_D0N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB32 | MIPI_CSI1_RX_D1N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB33 | MIPI_CSI1_RX_CLK0N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB34 | MIPI_CSI1_RX_D2N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB35 | MIPI_CSI1_RX_D3N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB36 | MIPI_CSI1_RX_CLK1N | MIPICSI signal interface | Not available as GPIO |  |  |
| BB37 | GND | systematically |  |  |  |
| BB38 | MIPI_DPHY1_RX_D3P | MIPICSI signal interface | Not available as GPIO |  |  |
| BB39 | MIPI_DPHY1_RX_CLKP | MIPICSI signal interface | Not available as GPIO |  |  |
| BB40 | MIPI_DPHY1_RX_D1P | MIPICSI signal interface | Not available as GPIO |  |  |
| BB41 | MIPI_DPHY1_RX_D0P | MIPICSI signal interface | Not available as GPIO |  |  |
| BC2 | GND | systematically |  |  |  |
| BC3 | GND | systematically |  |  |  |
| BC4 | GND | systematically |  |  |  |
| BC5 | GND | systematically |  |  |  |
| BC6 | GND | systematically |  |  |  |
| BC7 | GND | systematically |  |  |  |
| BC8 | GND | systematically |  |  |  |
| BC9 | GND | systematically |  |  |  |
| BC10 | GND | systematically |  |  |  |
| BC11 | GND | systematically |  |  |  |
| BC12 | GND | systematically |  |  |  |
| BC13 | GND | systematically |  |  |  |
| BC14 | GND | systematically |  |  |  |
| BC15 | GND | systematically |  |  |  |
| BC16 | GND | systematically |  |  |  |
| BC17 | GND | systematically |  |  |  |
| BC18 | GPIO2_B3_D | GPIO | GPIO multiplexed pins |  |  |
| BC19 | GPIO2_A6_U | GPIO | GPIO multiplexed pins |  |  |
| BC20 | GND | systematically |  |  |  |
| BC21 | GPIO2_C4_D | GPIO | GPIO multiplexed pins |  |  |
| BC22 | GPIO4_C4_D | GPIO | GPIO multiplexed pins |  |  |
| BC23 | GPIO2_B6_D | GPIO | GPIO multiplexed pins |  |  |
| BC24 | GND | systematically |  |  |  |
| BC25 | GND | systematically |  |  |  |
| BC26 | GND | systematically |  |  |  |
| BC27 | GND | systematically |  |  |  |
| BC28 | GND | systematically |  |  |  |
| BC29 | GND | systematically |  |  |  |
| BC30 | GND | systematically |  |  |  |
| BC31 | GND | systematically |  |  |  |
| BC32 | GND | systematically |  |  |  |
| BC33 | GND | systematically |  |  |  |
| BC34 | GND | systematically |  |  |  |
| BC35 | GND | systematically |  |  |  |
| BC36 | GND | systematically |  |  |  |
| BC37 | GND | systematically |  |  |  |
| BC38 | MIPI_DPHY1_RX_D2P | MIPICSI signal interface | Not available as GPIO |  |  |
| BC39 | MIPI_DPHY1_RX_D2N | MIPICSI signal interface | Not available as GPIO |  |  |
| BD3 | GPIO0_A4_U | GPIO | GPIO multiplexed pins |  |  |
| BD4 | GPIO0_A0_D | GPIO | GPIO multiplexed pins |  |  |
| BD5 | GPIO0_B2_U | GPIO | GPIO multiplexed pins |  |  |
| BD6 | GND | systematically |  |  |  |
| BD7 | PCIE20_2_REFCLKP | PCIE signal interface | Not available as GPIO |  |  |
| BD8 | PCIE20_2_REFCLKN | PCIE signal interface | Not available as GPIO |  |  |
| BD9 | GND | systematically |  |  |  |
| BD10 | PCIE20_2_TXP/SATA30_2_TXP/USB30_2<br />_SSTXP | PCIE signal interface | Not available as GPIO |  |  |
| BD11 | PCIE20_2_TXN/SATA30_2_TXN/USB30_<br />2_SSTXN | PCIE signal interface | Not available as GPIO |  |  |
| BD12 | GND | systematically |  |  |  |
| BD13 | PCIE20_2_RXP/SATA30_2_RXP/USB30_<br />2_SSRXP | PCIE signal interface | Not available as GPIO |  |  |
| BD14 | PCIE20_2_RXN/SATA30_2_RXN/USB30_<br />2_SSRXN | PCIE signal interface | Not available as GPIO |  |  |
| BD15 | GND | systematically |  |  |  |
| BD16 | RESET_L | System reset signal |  |  |  |
| BD17 | GND | systematically |  |  |  |
| BD18 | GPIO2_B4_U | GPIO | GPIO multiplexed pins |  |  |
| BD19 | GPIO2_B5_U | GPIO | GPIO multiplexed pins |  |  |
| BD20 | GPIO4_C3_D | GPIO | GPIO multiplexed pins |  |  |
| BD21 | GPIO4_C6_D | GPIO | GPIO multiplexed pins |  |  |
| BD22 | GPIO2_C5_D | GPIO | GPIO multiplexed pins |  |  |
| BD23 | GND | systematically |  |  |  |
| BD24 | VCCIO5 | GPIO5 power domain 1.8/3.3<br /> optional | Requires external input <br />1.8V/3.3V |  |  |
| BD25 | VCCIO5_1V8 | GPIO51.8V power domain | Requires external input 1.8V |  |  |
| BD26 | VCCIO3_1V8 | GPIO31.8V power domain | Requires external input 1.8V |  |  |
| BD27 | VCCIO6 | GPIO6 power domain 1.8/3.3<br /> optional | Requires external input <br />1.8V/3.3V |  |  |
| BD28 | VCCIO6_1V8 | GPIO61.8V power domain | Requires external input 1.8V |  |  |
| BD29 | GND | systematically |  |  |  |
| BD30 | GND | systematically |  |  |  |
| BD31 | GND |  | systematically |  |  |
| BD32 | GND |  | systematically |  |  |
| BD33 | GND |  | systematically |  |  |
| BD34 | GND |  | systematically |  |  |
| BD35 | GND |  | systematically |  |  |
| BD36 | VCC_1V8_S0 |  | Core board 1.8V output |  | Maximum support 2.5A current |
| BD37 | GND |  | systematically |  |  |
| C1 | GND | systematically |  |  |  |
| CA1 | MIPI_DPHY0_RX_D3P | MIPICSI signal interface |  | Not available as GPIO |  |
| CA2 | MIPI_DPHY0_RX_D2P | MIPICSI signal interface |  | Not available as GPIO |  |
| CA3 | MIPI_DPHY0_RX_CLKP | MIPICSI signal interface |  | Not available as GPIO |  |
| CA4 | MIPI_DPHY0_RX_D1P | MIPICSI signal interface |  | Not available as GPIO |  |
| CA5 | MIPI_DPHY0_RX_D0P | MIPICSI signal interface |  | Not available as GPIO |  |
| CA6 | GND | systematically |  |  |  |
| CA7 | MIPI_DPHY0_TX_D3N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA8 | MIPI_DPHY0_TX_D2N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA9 | MIPI_DPHY0_TX_CLKN | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA10 | MIPI_DPHY0_TX_D1N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA11 | MIPI_DPHY0_TX_D0N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA12 | GND | systematically |  |  |  |
| CA13 | MIPI_DPHY1_TX_D3N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA14 | MIPI_DPHY1_TX_D2N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA15 | MIPI_DPHY1_TX_CLKN | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA16 | MIPI_DPHY1_TX_D1N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA17 | MIPI_DPHY1_TX_D0N | MIPIDSI signal interface |  | Not available as GPIO |  |
| CA18 | GND | systematically |  |  |  |
| CA19 | TYPEC0_SSTX2P/DP0_TX3P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA20 | TYPEC0_SSRX2P/DP0_TX2P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA21 | GND | systematically |  |  |  |
| CA22 | TYPEC0_SSTX1P/DP0_TX1P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA23 | TYPEC0_SSRX1P/DP0_TX0P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA24 | GND | systematically |  |  |  |
| CA25 | TYPEC1_SSTX2P/DP1_TX3P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA26 | TYPEC1_SSRX2P/DP1_TX2P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA27 | GND | systematically |  |  |  |
| CA28 | TYPEC1_SSTX1P/DP1_TX1P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA29 | TYPEC1_SSRX1P/DP1_TX0P | TYPEC/DP multiplexed signal |  | Not available as GPIO |  |
| CA30 | GND | systematically |  |  |  |
| CA31 | TYPEC0_OTG_DM | TYPECOTG signal |  | Not available as GPIO |  |
| CA32 | TYPEC1_OTG_DP | TYPECOTG signal |  | Not available as GPIO |  |
| CA33 | GND | systematically |  |  |  |
| CA34 | USB20_HOST0_DM | USB2.0 signal |  | Not available as GPIO |  |
| CB1 | MIPI_DPHY0_RX_D3N | MIPICSI signal interface | Not available as GPIO |  |  |
| CB2 | MIPI_DPHY0_RX_D2N | MIPICSI signal interface | Not available as GPIO |  |  |
| CB3 | MIPI_DPHY0_RX_CLKN | MIPICSI signal interface | Not available as GPIO |  |  |
| CB4 | MIPI_DPHY0_RX_D1N | MIPICSI signal interface | Not available as GPIO |  |  |
| CB5 | MIPI_DPHY0_RX_D0N | MIPICSI signal interface | Not available as GPIO |  |  |
| CB6 | MIPI_DPHY0_TX_D3P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB7 | MIPI_DPHY0_TX_D2P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB8 | MIPI_DPHY0_TX_CLKP | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB9 | MIPI_DPHY0_TX_D1P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB10 | MIPI_DPHY0_TX_D0P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB11 | GND | systematically |  |  |  |
| CB12 | MIPI_DPHY1_TX_D3P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB13 | MIPI_DPHY1_TX_D2P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB14 | MIPI_DPHY1_TX_CLKP | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB15 | MIPI_DPHY1_TX_D1P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB16 | MIPI_DPHY1_TX_D0P | MIPIDSI signal interface | Not available as GPIO |  |  |
| CB17 | GND | systematically |  |  |  |
| CB18 | TYPEC0_SSTX2N/DP0_TX3N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB19 | GND | systematically |  |  |  |
| CB20 | TYPEC0_SSRX2N/DP0_TX2N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB21 | TYPEC0_SSTX1N/DP0_TX1N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB22 | GND | systematically |  |  |  |
| CB23 | TYPEC0_SSRX1N/DP0_TX0N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB24 | TYPEC1_SSTX2N/DP1_TX3N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB25 | GND | systematically |  |  |  |
| CB26 | TYPEC1_SSRX2N/DP1_TX2N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB27 | TYPEC1_SSTX1N/DP1_TX1N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB28 | GND | systematically |  |  |  |
| CB29 | TYPEC1_SSRX1N/DP1_TX0N | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CB30 | TYPEC0_OTG_DP | TYPECOTG signal | Not available as GPIO |  |  |
| CB31 | GND | systematically |  |  |  |
| CB32 | TYPEC1_OTG_DM | TYPECOTG signal | Not available as GPIO |  |  |
| CB33 | USB20_HOST0_DP | USB2.0 signal | Not available as GPIO |  |  |
| CC2 | GND | systematically |  |  |  |
| CC3 | GND | systematically |  |  |  |
| CC4 | GND | systematically |  |  |  |
| CC5 | GND | systematically |  |  |  |
| CC6 | GND | systematically |  |  |  |
| CC7 | GND | systematically |  |  |  |
| CC8 | GND | systematically |  |  |  |
| CC9 | SARADC_VIN6 | ADC signal | 1.8VADC signal |  |  |
| CC10 | SARADC_VIN4 | ADC signal | 1.8VADC signal |  |  |
| CC11 | SARADC_VIN7 | ADC signal | 1.8VADC signal |  |  |
| CC12 | SARADC_VIN3 | ADC signal | 1.8VADC signal |  |  |
| CC13 | SARADC_VIN1_KEY/RECOVER<br />Y | ADC signal | 1.8VADC signal |  |  |
| CC14 | BOOT_SARADC_IN0 | ADC signal | 1.8VADC signal |  |  |
| CC15 | SARADC_VIN5 | ADC signal | 1.8VADC signal |  |  |
| CC16 | SARADC_VIN2 | ADC signal | 1.8VADC signal |  |  |
| CC17 | GND | systematically |  |  |  |
| CC18 | TYPEC0_SBU1/DP0_AUXP | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CC19 | TYPEC0_SBU2/DP0_AUXN | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CC20 | GND | systematically |  |  |  |
| CC21 | TYPEC0_USB20_OTG_ID | TYPEC signal | Not available as GPIO |  |  |
| CC22 | TYPEC0_USB20_VBUSDET | TYPEC signal | Not available as GPIO |  |  |
| CC23 | GND | systematically |  |  |  |
| CC24 | TYPEC1_SBU1/DP1_AUXP | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CC25 | TYPEC1_SBU2/DP1_AUXN | TYPEC/DP multiplexed signal | Not available as GPIO |  |  |
| CC26 | GND | systematically |  |  |  |
| CC27 | TYPEC1_USB20_OTG_ID | TYPEC signal | Not available as GPIO |  |  |
| CC28 | TYPEC1_USB20_VBUSDET | TYPEC signal | Not available as GPIO |  |  |
| CC29 | GND | systematically |  |  |  |
| CC30 | USB20_HOST1_DM | USB2.0 signal | Not available as GPIO |  |  |
| CC31 | USB20_HOST1_DP | USB2.0 signal | Not available as GPIO |  |  |
| CD3 | GND | systematically |  |  |  |
| CD4 | SLAVER_PMIC_PLDO3 | Core board 1.8V output | Maximum support 0.3A current |  |  |
| CD5 | SLAVER_PMIC_PLDO2 | Core board 1.8V output | Maximum support 0.3A current |  |  |
| CD6 | VCC_1V8_CAM_S0 | Core board 1.8V output, CAM power source <br /> | Maximum support 0.3A current |  |  |
| CD7 | VCC_3V3_SD_S0 | Core board 3.3V output | Maximum support 0.5A current |  |  |
| CD8 | VCC_2V8_CAM_S0 | Core board 2.8V output, CAM power source <br /> | Maximum support 0.3A current |  |  |
| CD9 | VCC_1V2_CAM_S0 | Core board 1.2V output, CAM power source <br /> | Maximum support 0.5A current |  |  |
| CD10 | GND | systematically |  |  |  |
| CD11 | GND | systematically |  |  |  |
| CD12 | GND | systematically |  |  |  |
| CD13 | GND | systematically |  |  |  |
| CD14 | GND | systematically |  |  |  |
| CD15 | GND | systematically |  |  |  |
| CD16 | GND | systematically |  |  |  |
| CD17 | VCC_3V3_S0 | Core board 3.3V output | Maximum support 5A current |  |  |
| CD18 | GND | systematically |  |  |  |
| CD19 | GND | systematically |  |  |  |
| CD20 | GND | systematically |  |  |  |
| CD21 | AVCC_1V8_CODEC_S0 | Core board 1.8V output | Maximum support 0.5A current |  |  |
| CD22 | VCC_3V3_S3 | Core board 3.3V output | Maximum support 0.3A current |  |  |
| CD23 | GND | systematically |  |  |  |
| CD24 | GND | systematically |  |  |  |
| CD25 | GND | systematically |  |  |  |
| CD26 | GND | systematically |  |  |  |
| CD27 | GND | systematically |  |  |  |
| CD28 | GND | systematically |  |  |  |
| CD29 | GND | systematically |  |  |  |

## Core board pin definition (DA)

| Pin number | network name | type | describe |
|---|---|---|---|
| D1 | GND | systematically |  |
| DA1 | GND | systematically |  |
| DA2 | HDMI1_TX2N_PORT/EDP1_TX_D2<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA3 | HDMI1_TX1P_PORT/EDP1_TX_D1<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA4 | GND | systematically |  |
| DA5 | HDMI1_TX0N_PORT/EDP1_TX_D0<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA6 | HDMI1_TX3P_PORT/EDP1_TX_D3<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA7 | GND | systematically |  |
| DA8 | HDMI1_TX_SBDN/EDP1_TX_AUX<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA9 | HDMI0_TX2P_PORT/EDP0_TX_D2<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA10 | GND | systematically |  |
| DA11 | HDMI0_TX1N_PORT/EDP0_TX_D1<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA12 | HDMI0_TX0P_PORT/EDP0_TX_D0<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA13 | GND | systematically |  |
| DA14 | HDMI0_TX3N_PORT/EDP0_TX_D3<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA15 | HDMI0_TX_SBDP/EDP0_TX_AUXP | HDMI/EDP multiplexed signal | Not available as GPIO |
| DA16 | GND | systematically |  |
| DA17 | GPIO3_C3_D | GPIO | GPIO multiplexed pins |
| DA18 | GPIO3_B4_U | GPIO | GPIO multiplexed pins |
| DA19 | GPIO3_A4_D | GPIO | GPIO multiplexed pins |
| DA20 | GPIO3_B0_U | GPIO | GPIO multiplexed pins |
| DA21 | GPIO3_B1_D | GPIO | GPIO multiplexed pins |
| DA22 | GPIO3_D4_D | GPIO | GPIO multiplexed pins |
| DA23 | GPIO3_C1_D | GPIO | GPIO multiplexed pins |
| DA24 | GND | systematically |  |
| DA25 | GPIO3_B2_D | GPIO | GPIO multiplexed pins |
| DA26 | GPIO3_D2_D | GPIO | GPIO multiplexed pins |
| DA27 | GPIO3_D1_D | GPIO | GPIO multiplexed pins |
| DA28 | GPIO4_A2_D | GPIO | GPIO multiplexed pins |
| DA29 | GPIO4_A1_D | GPIO | GPIO multiplexed pins |
| DA30 | GPIO4_B7_U | GPIO | GPIO multiplexed pins |
| DA31 | GPIO4_A3_D | GPIO | GPIO multiplexed pins |
| DA32 | GPIO4_A4_D | GPIO | GPIO multiplexed pins |
| DA33 | GPIO4_A0_D | GPIO | GPIO multiplexed pins |
| DA34 | GPIO4_D2_U | GPIO | GPIO multiplexed pins |
| DA35 | GPIO4_D5_D | GPIO | GPIO multiplexed pins |
| DA36 | GPIO4_D1_U | GPIO | GPIO multiplexed pins |
| DA37 | SYSPWR_EN_H | PMIC enable signal | Not available as GPIO |
| DA38 | VCC4V0_SYS | Core board main power input | It is recommended to use 4V/5A power supply |
| DA39 | VCC4V0_SYS | Core board main power input | It is recommended to use 4V/5A power supply |
| DA40 | VCC4V0_SYS | Core board main power input | It is recommended to use 4V/5A power supply |
| DA41 | GND | systematically |  |
| DA42 | GND | systematically |  |
| DB1 | HDMI1_TX2P_PORT/EDP1_TX_D2<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB2 | GND | systematically |  |
| DB3 | HDMI1_TX1N_PORT/EDP1_TX_D1<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB4 | HDMI1_TX0P_PORT/EDP1_TX_D0<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB5 | GND | systematically |  |
| DB6 | HDMI1_TX3N_PORT/EDP1_TX_D3<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB7 | HDMI1_TX_SBDP/EDP1_TX_AUXP | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB8 | GND | systematically |  |
| DB9 | HDMI0_TX2N_PORT/EDP0_TX_D2<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB10 | HDMI0_TX1P_PORT/EDP0_TX_D1<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB11 | GND | systematically |  |
| DB12 | HDMI0_TX0N_PORT/EDP0_TX_D0<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB13 | HDMI0_TX3P_PORT/EDP0_TX_D3<br />P | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB14 | GND | systematically |  |
| DB15 | HDMI0_TX_SBDN/EDP0_TX_AUX<br />N | HDMI/EDP multiplexed signal | Not available as GPIO |
| DB16 | GPIO3_B7_D | GPIO | GPIO multiplexed pins |
| DB17 | GPIO3_A1_U | GPIO | GPIO multiplexed pins |
| DB18 | GPIO3_B3_U | GPIO | GPIO multiplexed pins |
| DB19 | GPIO3_A3_U | GPIO | GPIO multiplexed pins |
| DB20 | GND | systematically |  |
| DB21 | GPIO3_A5_D | GPIO | GPIO multiplexed pins |
| DB22 | GPIO3_A6_D | GPIO | GPIO multiplexed pins |
| DB23 | GPIO3_C0_D | GPIO | GPIO multiplexed pins |
| DB24 | GPIO3_C4_U | GPIO | GPIO multiplexed pins |
| DB25 | GPIO3_C5_U | GPIO | GPIO multiplexed pins |
| DB26 | GPIO3_D3_D | GPIO | GPIO multiplexed pins |
| DB27 | GND | systematically |  |
| DB28 | GPIO4_B0_D | GPIO | GPIO multiplexed pins |
| DB29 | GPIO4_B2_U | GPIO | GPIO multiplexed pins |
| DB30 | GPIO4_A6_D | GPIO | GPIO multiplexed pins |
| DB31 | GPIO4_A5_D | GPIO | GPIO multiplexed pins |
| DB32 | GPIO4_A7_D | GPIO | GPIO multiplexed pins |
| DB33 | GND | systematically |  |
| DB34 | GPIO4_D3_U | GPIO | GPIO multiplexed pins |
| DB35 | GND | systematically |  |
| DB36 | GND | systematically |  |
| DB37 | GND | systematically |  |
| DB38 | VCC4V0_SYS | Core board main power input | It is recommended to use 4V/5A power supply |
| DB39 | VCC4V0_SYS | Core board main power input | It is recommended to use 4V/5A power supply |
| DB40 | GND | systematically |  |
| DB41 | GND | systematically |  |
| DC2 | GND | systematically |  |
| DC3 | GND | systematically |  |
| DC4 | GND | systematically |  |
| DC5 | GND | systematically |  |
| DC6 | GND | systematically |  |
| DC7 | GND | systematically |  |
| DC8 | GND | systematically |  |
| DC9 | GND | systematically |  |
| DC10 | HDMI_RX_D2N | HDMI input signal | Not available as GPIO |
| DC11 | HDMI_RX_D1P | HDMI input signal | Not available as GPIO |
| DC12 | GND | systematically |  |
| DC13 | HDMI_RX_D0N | HDMI input signal | Not available as GPIO |
| DC14 | HDMI_RX_CLKP | HDMI input signal | Not available as GPIO |
| DC15 | GND | systematically |  |
| DC16 | GPIO3_C2_D | GPIO | GPIO multiplexed pins |
| DC17 | GPIO3_A0_U | GPIO | GPIO multiplexed pins |
| DC18 | GPIO3_B5_U | GPIO | GPIO multiplexed pins |
| DC19 | GPIO3_A2_U | GPIO | GPIO multiplexed pins |
| DC20 | GPIO3_A7_U | GPIO | GPIO multiplexed pins |
| DC21 | GPIO3_B6_D | GPIO | GPIO multiplexed pins |
| DC22 | GPIO3_D5_D | GPIO | GPIO multiplexed pins |
| DC23 | GPIO3_C6_U | GPIO | GPIO multiplexed pins |
| DC24 | GPIO3_D0_U | GPIO | GPIO multiplexed pins |
| DC25 | GPIO3_C7_U | GPIO | GPIO multiplexed pins |
| DC26 | GPIO4_B3_U | GPIO | GPIO multiplexed pins |
| DC27 | GPIO4_B4_U | GPIO | GPIO multiplexed pins |
| DC28 | GPIO4_B1_U | GPIO | GPIO multiplexed pins |
| DC29 | GPIO4_C1_D | GPIO | GPIO multiplexed pins |
| DC30 | GPIO4_B5_D | GPIO | GPIO multiplexed pins |
| DC31 | GPIO4_C0_U | GPIO | GPIO multiplexed pins |
| DC32 | GPIO4_B6_D | GPIO | GPIO multiplexed pins |
| DC33 | GND | systematically |  |
| DC34 | GPIO4_D4_U | GPIO | GPIO multiplexed pins |
| DC35 | GPIO4_D0_U | GPIO | GPIO multiplexed pins |
| DC36 | PWRON_L | System enable signal |  |
| DC37 | GND | systematically |  |
| DC38 | GND | systematically |  |
| DC39 | GND | systematically |  |
| DD3 | GND | systematically |  |
| DD4 | GND | systematically |  |
| DD5 | GND | systematically |  |
| DD6 | GND | systematically |  |
| DD7 | GND | systematically |  |
| DD8 | GND | systematically |  |
| DD9 | HDMI_RX_D2P | HDMI input signal | Not available as GPIO |
| DD10 | GND | systematically |  |
| DD11 | HDMI_RX_D1N | HDMI input signal | Not available as GPIO |
| DD12 | HDMI_RX_D0P | HDMI input signal | Not available as GPIO |
| DD13 | GND | systematically |  |
| DD14 | HDMI_RX_CLKN | HDMI input signal | Not available as GPIO |
| DD15 | GND | systematically |  |
| DD16 | GND | systematically |  |
| DD17 | GND | systematically |  |
| DD18 | GND | systematically |  |
| DD19 | GND | systematically |  |
| DD20 | GND | systematically |  |
| DD21 | GND | systematically |  |
| DD22 | GND | systematically |  |
| DD23 | GND | systematically |  |
| DD24 | GND | systematically |  |
| DD25 | GND | systematically |  |
| DD26 | GND | systematically |  |
| DD27 | GND | systematically |  |
| DD28 | GND | systematically |  |
| DD29 | GND | systematically |  |
| DD30 | GND | systematically |  |
| DD31 | GND | systematically |  |
| DD32 | GND | systematically |  |
| DD33 | GND | systematically |  |
| DD34 | GND | systematically |  |
| DD35 | GND | systematically |  |
| DD36 | GND | systematically |  |
| DD37 | GND | systematically |  |

## Core board pin definition (H)

| Pin number | network name | type | describe |
|---|---|---|---|
| H1~H44 | GND | systematically |  |
| H45 | VDDQ_DDR_S0 | Core board DDR power supply | Cannot be used to power peripherals |
| H46~H52 | GND | systematically |  |
| H53 | VDD_DDR_S0 | Core board DDR power supply | Cannot be used to power peripherals |
| H54 | VDD_CPU_BIG0_S0 | Core board CPU power supply | Cannot be used to power peripherals |
| H55 | VDD_CPU_BIG1_S0 | Core board CPU power supply | Cannot be used to power peripherals |
| H56~H60 | GND | systematically |  |
| H61 | VDD_VDENC_S0 |  | Cannot be used to power peripherals |
| H62 | VDD_CPU_LIT_S0 | Core board CPU power supply | Cannot be used to power peripherals |
| H63~H68 | GND | systematically |  |
| H69 | VDD_GPU_S0 | Core board GPU power supply | Cannot be used to power peripherals |
| H70 | VDD_LOG_S0 | Core board logic power supply | Cannot be used to power peripherals |
| H71 | VDD_NPU_S0 | Core board NPU power supply | Cannot be used to power peripherals |
| H72~H96 | GND | systematically |  |
| RK3128 | X3128CV4 | 144PIN stamp hole interface |  |
| PX30 | X30CV1 | 144PIN stamp hole interface |  |
| RK3288 | X3288CV5 | 180PIN stamp hole interface |  |
| RK3399 | X3399CV3 | 200PIN stamp hole interface |  |
| RK1808 | X1808CV1 | 144PIN stamp hole interface |  |
| MT8385 | X8385CV1 | 168PIN stamp hole interface |  |
| MT8768 | X8768CV1 | 168PIN stamp hole interface |  |
| T507 | X507CV2 | 172PIN stamp hole interface |  |
| RK3566 | X3566CV2/X3566CV3 | 200PIN stamp hole interface |  |
| RK3566 | I3566CV1 | 172PIN stamp hole interface |  |
| RK3568 | X3568CV2/X3568CV3 | 200PIN stamp hole interface |  |
| RK3568 | I3568CV1 | 172PIN stamp hole interface |  |
| RK3588 | I3588CV1 | 320PIN board-to-board connector |  |
| RK3128 | X3128 development board | x3128cv4 evaluation board |  |
| PX30 | X30 development board | x30cv1 evaluation board |  |
| RK3288 | x3288 development board | x3288cv3 evaluation board |  |
| RK3399 | x3399 development board | x3399cv3/x3399cv4 evaluation board |  |
| RK1808 | x1808 development board | x1808cv1 evaluation board |  |
| MT8385 | X8385 development board | X8385CV1 Evaluation Board |  |
| MT8768 | X8768 development board | X8768CV1 Evaluation Board |  |
| T507 | X507 development board | X507CV2 Evaluation Board |  |
| RK3566 | X3566 development board | X3566CV1 Evaluation Board |  |
| RK3566 | I3566 public board | I3566CV1 Evaluation Board |  |
| RK3568 | X3568 development board | X3568CV2 Evaluation Board |  |
| RK3568 | I3568 public board | I3568CV1 Evaluation Board |  |
| RK3588 | I3588 development board | I3588CV1 Evaluation Board |  |
| RK3399 | ibox3399 card computer |  |  |
| RK3568 | ibox3568 card computer |  |  |
