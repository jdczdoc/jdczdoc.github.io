---
sidebar_position: 4
title: PCB 设计与 Layout 指南
description: X311Y3CV1 PCB 设计与 Layout 指南
---

# PCB 设计与 Layout 指南

## 4.1 阻抗控制

底板设计时应把核心板到连接器的走线表4-1给出的阻抗要求纳入同一套阻抗规则.

**表4-1 PCB阻抗控制要求**

| 信号类型 | 目标阻抗 | 备注 |
| --- | --- | --- |
| USB2.0差分 | 90Ω | D+/D- |
| USB3.0/PCIe2.0/HSGMII | 95Ω | 复用组 |
| USB3.0Type-C/DP | 90Ω | Type-C/DP复用 |
| DPAUX | 100Ω | 辅助通道 |
| PCIe3.0数据 | 85Ω | LANE0/1 |
| PCIe参考时钟 | 100Ω | REFCLK |
| LVDS/MIPI/VX1/eDP | 100Ω | 显示/摄像头 |
| HDMITX/RX | 90Ω | TMDS |
| HDMIeARC | 100Ω | 音频回传 |
| RGMII | 50Ω单端 | 时钟/数据等长 |

## 4.2 高速差分接口

HDMI、USB3.0、PCIe、MIPI、eDP、LVDS等高速差分接口应遵循以下通用规则：

- 差分对尽量走同一层，避免换层；必须换层时在过孔附近放置回流地过孔。

- 差分对下方参考平面完整，不跨越分割；远离DCDC电感、晶振、时钟与复位线。

- 差分对内等长，建议≤5mil；对间等长按协议要求，通常≤20mil。

- 连接器、ESD、共模电感按信号流向排列，尽量缩短桩线；ESD器件应靠近连接器。

- PCIe TX 加 AC 耦合电容；HDMI/USB 的 +5V 加限流与 TVS；Type-C CC 电阻按角色配置。

HDMI 的 TMDS 对间应避免长距离并行；USB3.0 的 SSRX/SSTX 不要与 USB2.0 D+/D- 交叉；PCIe的REFCLK应远离TX/RX；MIPICSI的时钟与数据对之间保持地屏蔽。

## 4.3 以太网与 Wi-Fi

RGMII为单端并行总线，建议按50Ω控制，TXD/RXD与时钟做等长与skew控制；PHY尽量靠近 RJ45与网络变压器，RX/TX 走线避免跨分割；MDC/MDIO 加上拉与 ESD；RJ45的屏蔽壳与BobSmith端接按PHY参考设计处理。

Wi-Fi/BT模组的SDIO走线按50Ω控制，CLK与DATA等长；模组电源独立LDO/DCDC，加 10µF+0.1µF去耦；32.768kHz时钟远离 SDIO 与电源；天线馈线按 50Ω控制，天线净空区不得铺铜或放电池/金属件。

若产品需要 Wi-Fi 认证，天线匹配、净空、接地与整机结构应在早期打样阶段验证；不要等量产前才调整天线位置。

## 4.4 底板设计检查清单

- 叠层与阻抗：HDMI/USB/PCIe/MIPI/eDP/RGMII是否按表4-1设置？

- 参考平面：高速差分下方是否完整？是否跨分割？回流地过孔是否足够？

- 电源：12V输入保护、输入电容、3.3V/1.8V去耦是否到位？

- 复位/启动：RESET_N、PWR_KEY、POC上下拉与拨码是否正确？

- ESD：所有外部接口是否放置TVS？器件是否靠近连接器？

- 连接器：HDMI/USB/PCIe/Type-C/RJ45的引脚、极性、屏蔽与固定脚是否正确？

- 时钟：晶振、RTC、PCIeREFCLK、RGMII时钟是否远离干扰？
