---
title: 接口定义
sidebar_label: 接口定义
sidebar_position: 3
description: PICO2 Type-C、Camera、LCD、音频、调试、TF卡和GPIO扩展接口定义。
---

# 接口定义

## Type-C 电源和烧录接口

16Pin Type-C 接口提供 5 V 电源输入、USB 通信和固件烧录。建议使用质量可靠、支持数据传输的 USB-A/USB-C 转 Type-C 线缆。

## 20Pin MIPI CSI 摄像头接口

| Pin | 信号 | Pin | 信号 |
| ---: | --- | ---: | --- |
| 1 | MIPI_CSI_D0P | 11 | GND |
| 2 | MIPI_CSI_D0N | 12 | TWI0_SCK |
| 3 | GND | 13 | TWI0_SDA |
| 4 | MIPI_CSI_D1P | 14 | MIPI_CSI_RSTN0 |
| 5 | MIPI_CSI_D1N | 15 | GND |
| 6 | GND | 16 | LDOB-2V8 |
| 7 | MIPI_CSI_CKP | 17 | LDOB-2V8 |
| 8 | MIPI_CSI_CKN | 18 | LDOA-1V8 |
| 9 | GND | 19 | VCC-1V2 |
| 10 | MIPI_CSI_MCLK0 | 20 | NC |

## 12Pin SPI LCD 接口

| Pin | 信号 | Pin | 信号 |
| ---: | --- | ---: | --- |
| 1 | GND | 7 | LCD-RST |
| 2 | LCD-K | 8 | SDA |
| 3 | VCC-3V3 | 9 | SCL |
| 4 | VCC-3V3 | 10 | RS/DC |
| 5 | VCC-3V3 | 11 | CS |
| 6 | NC | 12 | GND |

## 音频和按键

### 喇叭

| Pin | 信号 |
| ---: | --- |
| 1 | SPK+ |
| 2 | SPK- |

板载功放接口适配 4 Ω / 3 W 喇叭。

### 外接麦克风

| Pin | 信号 |
| ---: | --- |
| 1 | MICP |
| 2 | MICN |

### 用户按键

| Pin | 信号 |
| ---: | --- |
| 1 | GND |
| 2 | PD13 |

### FEL 按键

| Pin | 信号 |
| ---: | --- |
| 1 | GND |
| 2 | FEL |

## UART0 调试接口

| Pin | 信号 |
| ---: | --- |
| 1 | GND |
| 2 | UART0-RX |
| 3 | UART0-TX |
| 4 | NC |

使用 3.3 V TTL USB 转串口工具连接，开发板 TX 接转换器 RX，开发板 RX 接转换器 TX。

## SPI NOR Flash

| Pin | 信号 | Pin | 信号 |
| ---: | --- | ---: | --- |
| 1 | SPI0-CS0 | 5 | SPI0-MOSI |
| 2 | SPI0-MISO | 6 | SPI0-CLK |
| 3 | SPI0-WP | 7 | SPI0-HOLD |
| 4 | VSS | 8 | VCC |

## TF 卡座

| Pin | 信号 | Pin | 信号 |
| ---: | --- | ---: | --- |
| 1 | SDMMC_D2 | 6 | VSS |
| 2 | SDMMC_D3 | 7 | SDMMC_D0 |
| 3 | SDMMC_CMD | 8 | SDMMC_D1 |
| 4 | VDD | 9 | SDMMC_DET_L |
| 5 | SDMMC_CLK |  |  |

## 40Pin GPIO 扩展接口

| Pin | 信号 | Pin | 信号 |
| ---: | --- | ---: | --- |
| 1 | VBUS | 21 | SCL |
| 2 | VBUS | 22 | SDA |
| 3 | GND | 23 | GND |
| 4 | VCC-3V3 | 24 | PD4 |
| 5 | VCC-3V3 | 25 | RS |
| 6 | CS | 26 | PD6 |
| 7 | GPADC0-0 | 27 | LCD-PWM |
| 8 | GND | 28 | GND |
| 9 | UART3-RX | 29 | PD8 |
| 10 | UART3-TX | 30 | PD9 |
| 11 | TWI0-SDA | 31 | PD10 |
| 12 | TWI0-SCK | 32 | PD11 |
| 13 | GND | 33 | GND |
| 14 | GPADC0-2 | 34 | PD12 |
| 15 | SPI0-HOLD | 35 | PD14 |
| 16 | SPI0-WP | 36 | PD16 |
| 17 | PL1 | 37 | PD17 |
| 18 | GND | 38 | GND |
| 19 | PL2 | 39 | PD18 |
| 20 | PL7 | 40 | PD19 |
