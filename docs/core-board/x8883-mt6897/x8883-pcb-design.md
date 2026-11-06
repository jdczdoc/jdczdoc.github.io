---
sidebar_position: 4
title: PCB 设计与 Layout
description: X8883CV1 PCB 设计与 Layout
---

# PCB 设计与 Layout

## 阻抗控制

| 信号类型 | 目标阻抗 | 备注 |
| --- | --- | --- |
| USB2.0差分 | 90Ω | D+/D- |
| USB3.2SuperSpeed | 90Ω | RX/TX |
| DPAUX | 100Ω | 辅助通道 |
| PCIeGen3 | 85Ω | TX/RX |
| PCIe参考时钟 | 100Ω | REFCLK |
| MIPIDSI/CSID-PHY | 100Ω | 显示/摄像头 |
| MIPIC-PHY | 100Ω | CSI/DSI |
| UFS | 100Ω | 板载 |
| 蜂窝/Wi-Fi/GNSS天线 | 50Ω | 射频馈线 |
| I2S/低速 | 50Ω单端 | 时钟/数据等长 |

表中保留原稿建议值，须结合 PHY 模式、叠层、器件参考设计及 PCB 厂阻抗报告制定最终规则。

## 高速走线

- 差分对尽量同层；换层处补充回流地过孔，参考平面连续、不跨分割。
- 远离 DCDC 电感、晶振、复位及开关节点。原稿建议对内长度差不超过 5 mil，对间通常不超过 20 mil，最终以协议约束为准。
- ESD 靠近连接器，减少桩线；PCIe TX 配置 AC 耦合，USB VBUS 配置限流和 TVS。
- USB SuperSpeed 与 USB 2.0 走线避免交叉；PCIe REFCLK 与 TX/RX 保持隔离；MIPI 保持良好回流与屏蔽。

## 射频与供电

天线馈线按 50 Ω；净空区禁止铜、金属件和电池侵入。评估蜂窝/Wi-Fi/GNSS 匹配、接地、外壳和散热，电池产品检查充电效率、温升、保护及 MT6375 电源路径线宽。核心板不提供 RGMII，如需以太网可评估 USB/PCIe 网卡。

## 底板检查

- 核对 200 PIN 封装、引脚方向、底板挖空与禁布区。
- 核对 VSYS/VSYS_S、保护、去耦、禁止 IO 倒灌及小电流输出负载。
- 核对 BOOT、PWRKEY、复位、默认上下拉、UART 电平和下载接口。
- 逐个接口检查复用、电压、连接器极性、ESD、屏蔽及固定脚。
- 在样机阶段验证天线、散热、充电和高速接口。
