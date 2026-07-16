---
title: 硬件设计
sidebar_position: 6
---
# 硬件设计

I527BV3 已完成底板设计，本页用于二次开发、接口扩展和问题定位。核心板 GPIO 电平及 200 PIN 定义见[核心板引脚定义](./i527-pin-definition.md)。

## 电源

- 开发板输入为 12 V，建议电源能力不低于 3 A。
- 高负载场景包含 USB 3.0、M.2、4G、HDMI、背光和风扇，应按峰值电流核算。
- 显示接口同时引出 3.3 V、5 V 和 12 V，接屏前必须逐脚确认，禁止仅按连接器外形插接。
- HDMI IN、摄像头和显示屏的上电/复位时序应由设备树 regulator、GPIO 和驱动配合实现。

## 高速接口

| 接口 | 建议差分阻抗 | 关键要求 |
|---|---:|---|
| USB 2.0 | 90 Ω | D+/D- 成对等长、连续参考平面 |
| USB 3.0 | 90 Ω | SuperSpeed 对严格等长，减少过孔和支路 |
| HDMI | 100 Ω | TMDS 组内等长、低电容 ESD |
| MIPI DSI/CSI | 100 Ω | Lane 映射、极性和速率与设备树一致 |
| eDP/LVDS | 100 Ω | 保持差分对完整参考平面 |
| PCIe | 85 Ω | REFCLK、PERST、CLKREQ 和电源时序完整 |

## 显示复用

I527BV3 的 LVDS0 与 MIPI DSI0 通过 30 PIN/40 PIN 座复用。切换屏接口时需要同时确认：

1. 底板电阻或跳线配置；
2. 设备树 `lcd_if`、LVDS/DSI 节点及 pinctrl；
3. 屏供电、背光和复位 GPIO；
4. 屏初始化命令、时序和 Lane 配置；
5. 同组接口不得同时使能。

## HDMI IN

HDMI IN 不是 SoC 原生 HDMI RX。LT6911C 将 HDMI 转为 MIPI CSI，因此调试链路包括：

```text
HDMI Source -> LT6911C -> MIPI CSI D-PHY -> CSI/VIPP/ISP -> Android/Linux 应用
```

需要同时检查 LT6911C 固件、I2C、复位、中断、输出 Lane/速率、视频格式变化和内核媒体拓扑。

## 通信接口

- RS232/RS485/CAN 接口已经经过收发器，不应当作 SoC 裸 UART/GPIO 电平直接使用。
- CAN 连接器引出两路差分总线，终端电阻应根据总线拓扑配置。
- UART0 为 CPUX 调试口，UART1 为 CPUS 调试口；串口电平为 3.3 V，不是 RS232 电平。
- ADC 接口包含 1.8 V 模拟域，外部输入必须限制在允许范围内。
