---
title: 接口引脚定义
sidebar_position: 5
---
# 接口引脚定义

:::warning 接线注意
下表为 X733BV2 底板连接器定义。接屏、摄像头、电池和高速外设前，必须同时核对连接器方向、Pin 1 标记、电压、差分对极性和设备树配置。
:::

## 4 PIN 电源输入

| Pin | 信号 |
|---:|---|
| 1 | `12V` |
| 2 | `12V` |
| 3 | `GND` |
| 4 | `GND` |

## 电池座

| Pin | 信号 |
|---:|---|
| 1 | `VBAT` |
| 2 | `VBAT` |
| 3 | `TS` |
| 4 | `GND` |

## USB 2.0 扩展座

| Pin | 信号 |
|---:|---|
| 1 | `5V` |
| 2 | `USB_DM` |
| 3 | `USB_DP` |
| 4 | `GND` |

## LT6911C 烧录座

| Pin | 信号 |
|---:|---|
| 1 | `3.3V` |
| 2 | `GND` |
| 3 | `CSCL` |
| 4 | `CSDA` |

## 闪光灯接口

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `3.3V` |

## 调试串口

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `UART0_RX` |
| 3 | `UART0_TX` |
| 4 | `NC` |

调试串口为 SoC 逻辑电平 UART，不是 RS232 电平。连接 USB 转串口模块时交叉连接 TX/RX，并共地。

## 按键扩展接口

| Pin | 信号 |
|---:|---|
| 1 | `BOOT` |
| 2 | `RST` |
| 3 | `PWRON` |
| 4 | `GND` |

## MIPI DSI 显示接口

| Pin | 信号 | Pin | 信号 |
|---:|---|---:|---|
| 1 | `VCC-5V` | 16 | `GND` |
| 2 | `VCC-5V` | 17 | `MIPI-DSI0-DN3` |
| 3 | `VCC-5V` | 18 | `MIPI-DSI0-DP3` |
| 4 | `VCC3V3_S3` | 19 | `GND` |
| 5 | `VCC3V3_S3` | 20 | `MIPI-DSI0-DN2` |
| 6 | `TWI2_SCK` | 21 | `MIPI-DSI0-DP2` |
| 7 | `TWI2_SDA` | 22 | `GND` |
| 8 | `TP_INT` | 23 | `MIPI-DSI0-CKN` |
| 9 | `TP_RST` | 24 | `MIPI-DSI0-CKP` |
| 10 | `VCC3V3_S3` | 25 | `GND` |
| 11 | `VCC3V3_S3` | 26 | `MIPI-DSI0-DN1` |
| 12 | `LCD-PWM` | 27 | `MIPI-DSI0-DP1` |
| 13 | `LCD_RST` | 28 | `GND` |
| 14 | `NC` | 29 | `MIPI-DSI0-DN0` |
| 15 | `PJ24` | 30 | `MIPI-DSI0-DP0` |

## MIPI CSI 摄像头接口

| Pin | 信号 | Pin | 信号 |
|---:|---|---:|---|
| 1 | `GND` | 16 | `GND` |
| 2 | `MCSIA-CKP` | 17 | `NC` |
| 3 | `MCSIA-CKN` | 18 | `NC` |
| 4 | `GND` | 19 | `MIPI_AF` |
| 5 | `MCSIA-D0P` | 20 | `TWI3-SCK` |
| 6 | `MCSIA-D0N` | 21 | `TWI3-SDA` |
| 7 | `GND` | 22 | `MCSI-MCLK` |
| 8 | `MCSIA-D1P` | 23 | `MCSI-MCLK` |
| 9 | `MCSIA-D1N` | 24 | `MCSI-STBY-R` |
| 10 | `GND` | 25 | `MCSI-STBY-F` |
| 11 | `MCSIA-D2P` | 26 | `MCSI-RST-R` |
| 12 | `MCSIA-D2N` | 27 | `MCSI-RST-F` |
| 13 | `GND` | 28 | `VCC1V8_CAM3` |
| 14 | `MCSIA-D3P` | 29 | `VCC2V8_CAM3` |
| 15 | `MCSIA-D3N` | 30 | `MIPI_1.2V_CAM3` |

## eDP 显示接口

| Pin | 信号 | Pin | 信号 |
|---:|---|---:|---|
| 1 | `TP-GPIO2` | 21 | `VCC-3V3` |
| 2 | `GND` | 22 | `BITSET` |
| 3 | `EDP-TX3N` | 23 | `GND` |
| 4 | `EDP-TX3P` | 24 | `GND` |
| 5 | `GND` | 25 | `GND` |
| 6 | `EDP-TX2N` | 26 | `GND` |
| 7 | `EDP-TX2P` | 27 | `AUX-HPD` |
| 8 | `GND` | 28 | `GND` |
| 9 | `EDP-TX1N` | 29 | `GND` |
| 10 | `EDP-TX1P` | 30 | `GND` |
| 11 | `GND` | 31 | `GND` |
| 12 | `EDP-TX0N` | 32 | `EDP-LED-EN` |
| 13 | `EDP-TX0P` | 33 | `LCD_BL_PWM` |
| 14 | `GND` | 34 | `TWI2-SCK` |
| 15 | `EDP-AUXP` | 35 | `TWI2-SDA` |
| 16 | `EDP-AUXN` | 36 | `12V` |
| 17 | `GND` | 37 | `12V` |
| 18 | `VCC-3V3` | 38 | `12V` |
| 19 | `VCC-3V3` | 39 | `12V` |
| 20 | `VCC-3V3` | 40 | `TP-GPIO1` |

## MIC、扬声器和风扇

### MIC（每路）

| Pin | 信号 |
|---:|---|
| 1 | `MICP` |
| 2 | `MICN` |

### 扬声器（每路）

| Pin | 信号 |
|---:|---|
| 1 | `SPK+` |
| 2 | `SPK-` |

### 风扇

| Pin | 信号 |
|---:|---|
| 1 | `GND` |
| 2 | `12V` |
