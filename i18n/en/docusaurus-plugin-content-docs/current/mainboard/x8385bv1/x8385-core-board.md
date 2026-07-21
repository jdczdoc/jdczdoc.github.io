---
sidebar_position: 2
title: Core Board
description: X8385CV1 core board features, appearance, dimensions, and specifications
---

# Core Board

The X8385CV1 core board measures 40.5mm x 50.5mm and uses a 168-pin stamp-hole package. The hardware manual describes LPDDR4 memory design, Android / Linux system support, and reliability tests such as high/low temperature testing and repeated reboot testing.

## Front View

![X8385CV1 front view](./x8385-core-board-front.png)

## Back View

![X8385CV1 back view](./x8385-core-board-back.png)

## Mechanical Drawing

![X8385CV1 dimensions](./x8385-core-board-dimensions.png)

## System Configuration

| System Configuration |  |
| --- | --- |
| CPU | MT8385 |
| Clock | Quad A73 2GHz + quad A53 2GHz |
| Memory | Standard 2GB, customizable 4GB |
| Storage | Standard 16GB eMMC |
| Wi-Fi | Standard, supports 802.11 a/b/g/n/ac |
| BT | Standard, supports BT4.2 |
| GPS | Standard, supports GPS/Glonass/BeiDou/Galileo/QZSS |
| FM | Not routed out; supported by SoC but not by the core board |


## Interface Parameters

| Interface Parameters |  |
| --- | --- |
| LCD interface | Supports MIPI output |
| Touch interface | Capacitive touch; resistive touch can be extended over USB or UART |
| Audio interface | Supports direct headphone/speaker output and recording/playback |
| SD-card interface | One SDIO output channel |
| eMMC interface | On-board eMMC, pins are not routed out separately |
| USB interface | HOST 2.0 and OTG shared |
| UART interface | Two UARTs |
| PWM interface | Three PWM outputs |
| I2C interface | Seven I2C outputs |
| SPI interface | Two SPI outputs |
| ADC interface | One ADC output |
| Camera interface | Two MIPI inputs |


## Electrical Characteristics

| Electrical Characteristics |  |
| --- | --- |
| 5V input voltage | 5V/3A |
| RTC input voltage | 2.5V to 3V / 5uA [to be tested] |
| Output voltage | Multiple LDO outputs for baseboard peripherals |
| Operating temperature | -20~85 degrees |
| Storage temperature | 0~40 degrees |


## Mechanical Parameters

| Mechanical Parameters |  |
| --- | --- |
| Package | Stamp-hole package |
| Core board size | 40.5mm*50.5mm*3mm |
| Pin pitch | 1mm |
| Pin pad size | 1.3mm*0.7mm |
| Pin count | 168PIN |
| Layers | 10 layers |

