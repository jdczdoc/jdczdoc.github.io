---
title: Connector Pinout
sidebar_position: 5
---
# Connector Pinout

:::warning Wiring precautions
These tables describe X733BV2 baseboard connectors. Verify connector orientation, Pin 1, voltage rails, differential-pair polarity and device-tree configuration before attaching displays, cameras, batteries or high-speed peripherals.
:::

## 4-pin power input

| Pin | Signal |
|---:|---|
| 1 | `12V` |
| 2 | `12V` |
| 3 | `GND` |
| 4 | `GND` |

## Battery connector

| Pin | Signal |
|---:|---|
| 1 | `VBAT` |
| 2 | `VBAT` |
| 3 | `TS` |
| 4 | `GND` |

## USB 2.0 header

| Pin | Signal |
|---:|---|
| 1 | `5V` |
| 2 | `USB_DM` |
| 3 | `USB_DP` |
| 4 | `GND` |

## LT6911C programming header

| Pin | Signal |
|---:|---|
| 1 | `3.3V` |
| 2 | `GND` |
| 3 | `CSCL` |
| 4 | `CSDA` |

## Flash-light connector

| Pin | Signal |
|---:|---|
| 1 | `GND` |
| 2 | `3.3V` |

## Debug UART

| Pin | Signal |
|---:|---|
| 1 | `GND` |
| 2 | `UART0_RX` |
| 3 | `UART0_TX` |
| 4 | `NC` |

This is logic-level UART, not RS232. Cross TX/RX and connect a common ground when using a USB-to-UART adapter.

## External key connector

| Pin | Signal |
|---:|---|
| 1 | `BOOT` |
| 2 | `RST` |
| 3 | `PWRON` |
| 4 | `GND` |

## MIPI DSI display connector

| Pin | Signal | Pin | Signal |
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

## MIPI CSI camera connector

| Pin | Signal | Pin | Signal |
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

## eDP display connector

| Pin | Signal | Pin | Signal |
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

## Microphone, speaker and fan

### Microphone (each channel)

| Pin | Signal |
|---:|---|
| 1 | `MICP` |
| 2 | `MICN` |

### Speaker (each channel)

| Pin | Signal |
|---:|---|
| 1 | `SPK+` |
| 2 | `SPK-` |

### Fan

| Pin | Signal |
|---:|---|
| 1 | `GND` |
| 2 | `12V` |
