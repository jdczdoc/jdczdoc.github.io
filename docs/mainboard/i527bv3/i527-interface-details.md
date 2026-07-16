---
title: 接口详解
sidebar_position: 4
---
# 接口详解

## 接口位置

![I527BV3 正面接口](./i527-interface-front.jpeg)

| 编号 | 接口 | 用途 |
|---:|---|---|
| 1 | 12 V 电源座 | 12 V 直流输入 |
| 2 | 4 PIN 电源输入 | 12 V 辅助输入 |
| 3 | RESET/FEL/POWER 按键 | 复位、烧录、开关机/唤醒 |
| 4 | SIM 卡座 | 与 PCIe 4G 模块配合 |
| 5 | PCIe 4G 接口 | 4G 模块扩展 |
| 6 | USB 3.0 | USB 3.0 Host |
| 7 | 双层 USB 2.0 | 两路 USB 2.0 Host，经 HUB |
| 8 | 千兆以太网 | RTL8211F，RGMII |
| 9 | TF 卡座 | TF 启动或数据存储 |
| 10 | Type-C | OTG、固件下载、ADB |
| 11 | HDMI OUT | T527 原生 HDMI 输出 |
| 12 | HDMI IN | HDMI 视频输入 |
| 13 | LT6911C 烧录座 | LT6911C I2C 烧录 |
| 14 | MIPI 摄像头 | 4-Lane MIPI CSI |
| 15 | eDP | eDP 液晶屏 |
| 16 | LVDS | 独立 LVDS1 屏接口 |
| 17 | 风扇 | 12 V 风扇 |
| 18 | 6 PIN 触摸 | I2C 电容触摸 |
| 19 | RS232 | 外部 RS232 通信 |
| 20 | RS485 | 外部 RS485 通信 |
| 21 | CAN | 两路 CAN 总线合并在一个座子 |
| 22 | UART0 | CPUX 调试串口 |
| 23 | UART1 | CPUS 调试串口 |
| 24 | 红外 | 红外接收 |
| 25 | PWM | PWM 输出 |
| 26 | ADC | LRADC/GPADC/按键引出 |
| 27 | 40 PIN LVDS/MIPI | LVDS0 与 MIPI DSI0 复用 |
| 28 | Wi-Fi/BT | AW869A 无线模组 |
| 29 | 喇叭 | 左右声道 0.5 W 输出 |
| 30 | MIC | 模拟麦克风输入 |
| 31 | LINE IN | 模拟音频输入 |
| 32 | 耳机 | 耳机/耳麦输出 |

![I527BV3 反面接口](./i527-interface-back.jpeg)

反面包含 30 PIN LVDS/MIPI 复用接口、M.2 扩展接口和 RTC 后备电池接口。

## 电源与按键

### 4 PIN 电源输入

| Pin | 信号 |
|---:|---|
| 1 | `12V` |
| 2 | `12V` |
| 3 | `GND` |
| 4 | `GND` |

开发板采用 12 V 直流供电，建议使用 12 V / 3 A 适配器。RESET 用于复位，FEL 用于进入全志烧录模式，POWER 用于开关机和休眠唤醒。

## USB、网络与扩展

- **Type-C**：OTG/Device 接口，用于 PhoenixSuit 烧录和 ADB 调试。
- **USB 3.0**：一路原生 USB 3.0 Host。
- **USB 2.0**：双层座提供两路 Host，由 HUB 扩展。
- **千兆以太网**：RTL8211F PHY，RGMII 接口。
- **PCIe 4G/SIM**：连接 PCIe 4G 模块并插入 SIM 卡使用。
- **M.2**：用于 M.2 存储等扩展，具体 Key、协议和尺寸以板卡原理图/BOM 为准。
- **TF 卡**：支持存储，也可根据固件配置用于 TF 启动或升级。

## HDMI 输入与输出

- HDMI OUT 为 SoC 原生输出。
- HDMI IN 经 LT6911C 转换为 MIPI CSI 数据，系统侧按摄像头/视频采集链路使用。

### LT6911C 烧录座

| Pin | 信号 |
|---:|---|
| 1 | `3V3` |
| 2 | `GND` |
| 3 | `SCL` |
| 4 | `SDA` |

## MIPI CSI 摄像头接口

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `CAM-MDP2` |
| 3 | `CAM-MDN2` |
| 4 | `GND` |
| 5 | `CAM-MDP0` |
| 6 | `CAM-MDN0` |
| 7 | `GND` |
| 8 | `CAM-MCP` |
| 9 | `CAM-MCN` |
| 10 | `GND` |
| 11 | `CAM-MDP1` |
| 12 | `CAM-MDN1` |
| 13 | `GND` |
| 14 | `CAM-MDP3` |
| 15 | `CAM-MDN3` |
| 16 | `GND` |
| 17 | `MCSI_RESET` |
| 18 | `NC` |
| 19 | `SDA1` |
| 20 | `SCK1` |
| 21 | `MCLK` |
| 22 | `GND` |
| 23 | `VCCIO-CAM (1.8 V)` |
| 24 | `DVDD1V1` |
| 25 | `AVDD2V9` |
| 26 | `GND` |
| 27 | `SDA2` |
| 28 | `SCK2` |
| 29 | `NC` |
| 30 | `GND` |

该接口包含 4 组 MIPI 数据 Lane、1 组时钟 Lane、I2C、MCLK、RESET 和摄像头电源。连接摄像头前必须核对电压、Lane 映射和上电时序。

## eDP 接口

| Pin | 信号 |
|---:|---|
| 1 | `NC` |
| 2 | `GND` |
| 3 | `DP-TX3N-1` |
| 4 | `DP-TX3P-1` |
| 5 | `GND` |
| 6 | `DP-TX2N-1` |
| 7 | `DP-TX2P-1` |
| 8 | `GND` |
| 9 | `DP-TX1N-1` |
| 10 | `DP-TX1P-1` |
| 11 | `GND` |
| 12 | `DP-TX0N-1` |
| 13 | `DP-TX0P-1` |
| 14 | `GND` |
| 15 | `DP-AUXP-1` |
| 16 | `DP-AUXN-1` |
| 17 | `GND` |
| 18 | `VCC-LCD-EDP (3.3 V)` |
| 19 | `VCC-LCD-EDP (3.3 V)` |
| 20 | `VCC-LCD-EDP (3.3 V)` |
| 21 | `VCC-LCD-EDP (3.3 V)` |
| 22 | `NC` |
| 23 | `GND` |
| 24 | `GND` |
| 25 | `GND` |
| 26 | `GND` |
| 27 | `DP-HPD-1` |
| 28 | `GND` |
| 29 | `GND` |
| 30 | `GND` |
| 31 | `GND` |
| 32 | `LCD1-BL-PWREN` |
| 33 | `LCD1-BL-PWM` |
| 34 | `SDA` |
| 35 | `SCL` |
| 36 | `12 V / 5 V` |
| 37 | `12 V / 5 V` |
| 38 | `12 V / 5 V` |
| 39 | `12 V / 5 V` |
| 40 | `NC` |

eDP 接口同时提供面板 3.3 V、可选 12 V/5 V 背光电源、PWM、背光使能和 I2C 信号。接屏前先确认 36～39 脚实际供电电压。

## 独立 LVDS1 接口

| Pin | 信号 |
|---:|---|
| 1 | `VCC_5V0` |
| 2 | `VCC_5V0` |
| 3 | `VCC_5V0` |
| 4 | `VCC-LCD1 (3.3 V)` |
| 5 | `VCC-LCD1 (3.3 V)` |
| 6 | `CTP0-SCK` |
| 7 | `CTP0-SDA` |
| 8 | `CTP0-INT` |
| 9 | `CTP0-RST` |
| 10 | `VCC-LCD1 (3.3 V)` |
| 11 | `VCC-LCD1 (3.3 V)` |
| 12 | `LCD1-BL-PWM` |
| 13 | `LCD1_RST` |
| 14 | `NC` |
| 15 | `LCD1-BL-PWREN` |
| 16 | `GND` |
| 17 | `LVDS1_D3N` |
| 18 | `LVDS1_D3P` |
| 19 | `GND` |
| 20 | `LVDS1_D2N` |
| 21 | `LVDS1_D2P` |
| 22 | `GND` |
| 23 | `LVDS1_CKN` |
| 24 | `LVDS1_CKP` |
| 25 | `GND` |
| 26 | `LVDS1_D1N` |
| 27 | `LVDS1_D1P` |
| 28 | `GND` |
| 29 | `LVDS1_D0N` |
| 30 | `LVDS1_D0P` |

该 30 PIN 座用于 LVDS1，包含触摸 I2C、背光 PWM/使能和面板复位信号。

## 40 PIN LVDS0/MIPI DSI0 复用接口

| Pin | 信号 |
|---:|---|
| 1 | `NC` |
| 2 | `VCC-LCD (3.3 V)` |
| 3 | `VCC-LCD (3.3 V)` |
| 4 | `VCC-LCD (3.3 V)` |
| 5 | `NC` |
| 6 | `NC` |
| 7 | `NC` |
| 8 | `LVDS0-D0N / DSI0-D0N` |
| 9 | `LVDS0-D0P / DSI0-D0P` |
| 10 | `GND` |
| 11 | `LVDS0-D1N / DSI0-D1N` |
| 12 | `LVDS0-D1P / DSI0-D1P` |
| 13 | `GND` |
| 14 | `LVDS0-D2N / DSI0-CKN` |
| 15 | `LVDS0-D2P / DSI0-CKP` |
| 16 | `GND` |
| 17 | `LVDS0-CKN / DSI0-D2N` |
| 18 | `LVDS0-CKP / DSI0-D2P` |
| 19 | `GND` |
| 20 | `LVDS0-D3N / DSI0-D3N` |
| 21 | `LVDS0-D3P / DSI0-D3P` |
| 22 | `GND` |
| 23 | `NC` |
| 24 | `NC` |
| 25 | `GND` |
| 26 | `NC` |
| 27 | `NC` |
| 28 | `NC` |
| 29 | `NC` |
| 30 | `NC` |
| 31 | `GND` |
| 32 | `GND` |
| 33 | `GND` |
| 34 | `NC` |
| 35 | `LCD0-BL-PWM` |
| 36 | `VCC-LCD (3.3 V)` |
| 37 | `3.3 V` |
| 38 | `VLED0+ (12 V)` |
| 39 | `VLED0+ (12 V)` |
| 40 | `VLED0+ (12 V)` |

LVDS0 与 MIPI DSI0 使用同一组高速引脚，不能同时启用。必须同时修改板上电阻配置、设备树和显示驱动配置。

## 反面 30 PIN LVDS0/MIPI DSI0 复用接口

| Pin | 信号 |
|---:|---|
| 1 | `VCC_5V0` |
| 2 | `VCC_5V0` |
| 3 | `VCC_5V0` |
| 4 | `VCC-LCD1 (3.3 V)` |
| 5 | `VCC-LCD1 (3.3 V)` |
| 6 | `CTP0-SCK` |
| 7 | `CTP0-SDA` |
| 8 | `CTP0-INT` |
| 9 | `CTP0-RST` |
| 10 | `VCC-LCD1 (3.3 V)` |
| 11 | `VCC-LCD1 (3.3 V)` |
| 12 | `LCD1-BL-PWM` |
| 13 | `LCD1_RST` |
| 14 | `NC` |
| 15 | `LCD0-BL-PWREN` |
| 16 | `GND` |
| 17 | `LVDS0-D3N / DSI0-D3N` |
| 18 | `LVDS0-D3P / DSI0-D3P` |
| 19 | `GND` |
| 20 | `LVDS0-CKN / DSI0-D2N` |
| 21 | `LVDS0-CKP / DSI0-D2P` |
| 22 | `GND` |
| 23 | `LVDS0-D2N / DSI0-CKN` |
| 24 | `LVDS0-D2P / DSI0-CKP` |
| 25 | `GND` |
| 26 | `LVDS0-D1N / DSI0-D1N` |
| 27 | `LVDS0-D1P / DSI0-D1P` |
| 28 | `GND` |
| 29 | `LVDS0-D0N / DSI0-D0N` |
| 30 | `LVDS0-D0P / DSI0-D0P` |

该接口与 40 PIN 复用接口属于同一组 LVDS0/DSI0 资源，不可作为第二路独立 DSI/LVDS 同时使用。

## 低速通信接口

### 6 PIN 触摸

| Pin | 信号 |
|---:|---|
| 1 | `3V3` |
| 2 | `GND` |
| 3 | `CTP0-INT` |
| 4 | `CTP0-RST` |
| 5 | `CTP0-SDA` |
| 6 | `CTP0-SCK` |

### RS232

| Pin | 信号 |
|---:|---|
| 1 | `3V3` |
| 2 | `TX` |
| 3 | `RX` |
| 4 | `GND` |

### RS485

| Pin | 信号 |
|---:|---|
| 1 | `3V3` |
| 2 | `485_A` |
| 3 | `485_B` |
| 4 | `GND` |

### CAN

| Pin | 信号 |
|---:|---|
| 1 | `CANH1` |
| 2 | `CANL1` |
| 3 | `CANH2` |
| 4 | `CANL2` |

### UART0（CPUX 调试串口）

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `UART-0-CPUX-RX` |
| 3 | `UART-0-CPUX-TX` |
| 4 | `3.3V` |

### UART1（CPUS 调试串口）

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `CPUS-RX` |
| 3 | `CPUS-TX` |
| 4 | `3.3V` |

### 红外与 PWM

红外接口：`S-IR-RX`、`GND`、`3.3V`。PWM 接口：`PWM`、`GND`。

### ADC/按键扩展

| Pin | 信号 |
|---:|---|
| 1 | `1.8V` |
| 2 | `LRADC0` |
| 3 | `LRADC1` |
| 4 | `GPADC3` |
| 5 | `GPADC4` |
| 6 | `GND` |
| 7 | `PWRON` |
| 8 | `FEL` |
| 9 | `AP-RESET` |

## 音频、风扇与 RTC

- 喇叭接口支持左右两路 0.5 W 输出。
- MIC 两脚为 `MICIN1N`、`MICIN1P`。
- LINE IN 为模拟音频输入，耳机座用于耳机/耳麦输出。
- 风扇接口：Pin 1 `GND`，Pin 2 `12V`。
- RTC 接口连接后备电池，用于主电源断开后保持 RTC 计时。
