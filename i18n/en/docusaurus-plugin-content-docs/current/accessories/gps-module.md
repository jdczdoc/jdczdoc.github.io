---
title: GPS Module
sidebar_label: GPS Module
sidebar_position: 2
description: Specifications, interface definition, and module information for the GPS module based on JRC G591 / ublox.
---

# GPS Module

## Overview

This GPS module is based on the JRC G591 or ublox solution and is intended for reference design and testing with JiuDing boards such as the x210, i210, x4412, and x4418.

According to the provided material, the JRC G591 is designed by JRC of Japan and offers high-sensitivity satellite positioning. It maintains good positioning speed and accuracy in environments such as wide valleys and dense urban areas, and is compatible with common solutions such as Samsung 14B0102, HuanQiu ET312, ZaiTian RB310, and ublox 4X/5X.

## Product Photo

![Photo of the GPS module](./gps-module-photo.png)

## Main Specifications

| Item | Specification |
| --- | --- |
| Module vendor | JRC |
| Chipset | JRC 9th-generation single-chip solution |
| Channels | 88 channels (66 acquisition channels, 22 tracking channels) |
| Start time | < 1.5 s hot start, < 34 s warm start, < 35 s cold start |
| Reacquisition | < 1 s |
| Data / IO interface | 9600 bps (TXD, RXD) |
| Data output format | NMEA 0138 Format v3.01 |
| Sensitivity | -163 dBw (tracking) |
| Accuracy | < 3 m static; 0.1 m/sec dynamic |
| Power consumption | 38 mW at tracking; 50 mW at acquisition |
| Coordinate system | WGS84 |
| Interface level | TTL level |
| Module size | 15.9 mm (L) × 13.1 mm (W) × 2.5 mm (H) |
| Module supply | 2.7 V to 4.2 V, 3.3 V typical |

## Main Features

- Supports up to 210 PRN channels.
- Includes 66 search channels and 22 synchronized tracking channels.
- Supports the L1 signal band.
- Supports C/A and SBAS (WAAS, EGNOS, MASA).
- Features accurate positioning, compact size, fast start-up, and low power consumption.

## Pin Definition

| Pin No. | Signal | Pin No. | Signal |
| ---: | --- | ---: | --- |
| 1 | NC | 11 | NC |
| 2 | VDD_IO | 12 | TXD |
| 3 | NC | 13 | NC |
| 4 | NC | 14 | NC |
| 5 | NC | 15 | NC |
| 6 | NC | 16 | NC |
| 7 | AP_RXD3 | 17 | NC |
| 8 | AP_TXD3 | 18 | NC |
| 9 | NC | 19 | GND |
| 10 | NC | 20 | GND |

AP_RXD3 and AP_TXD3 are the UART signals connected to the host processor. TXD is the GPS module output UART signal.

## Source Images

### Specification Image

![Specification image of the GPS module](./gps-detail.png)

### Pin Definition Image

![Pin-definition image of the GPS module](./gps-pinout.png)
