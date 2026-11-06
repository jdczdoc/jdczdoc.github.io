---
sidebar_position: 4
title: Hardware design
description: X40I core board hardware design
---

# Hardware design

## DDR selection

A40i supports DDR2, DDR3, LPDDR2 and LPDDR3. X40iCV2 uses two 96-ball DDR3 devices by default. An LPDDR3 design can be substituted without changing the pinout or dimensions to meet cost or memory requirements. Supported total capacities are 512 MB, 1 GB and 2 GB.

## eMMC selection

X40i supports eMMC capacities including 4 GB, 8 GB, 16 GB, 32 GB, 64 GB and 128 GB. Specify the required capacity when ordering.

## Display interfaces

A40i integrates the DE2.0 display engine and supports mirrored or independent dual displays, with output interfaces supporting up to 1920 × 1080 at 60 fps. The table describes A40i chip capabilities. The X40i core board exposes only one CVBS output (TVOUT3) and one TVIN input; the remaining CVBS channels are not exposed.

| Interface | Count | Specifications | Notes |
| --- | --- | --- | --- |
| Parallel RGB | 2 (LCD0/LCD1) | Up to RGB888 24-bit, 1080p at 60 fps | Direct panel drive, lowest cost |
| LVDS | 2 (LVDS0/LVDS1) | Single/dual link, 2 × 8-bit data channels and 2 clock channels; JEIDA and VESA modes; 1080p at 60 fps | Good noise immunity and long transmission distance; suitable for large industrial displays |
| MIPI DSI | 1 | MIPI DSI v1.01 + D-PHY v1.00, 4 data lanes, 1080p at 60 fps | Suitable for small high-resolution display modules |
| HDMI | 1 | HDMI 1.4, 1080p at 60 fps, HDCP 1.2 encryption | Common interface for commercial displays and signage |
| CVBS/TVOUT | 4 channels | NTSC and PAL | Analog video for legacy devices |

## Power supply design

The X40i core board operates with its main power supply alone. The power pins are defined below:

- Pins 140 and 141: 3.7 V single-cell lithium battery input. One cell can power the core board.

- Pins 143 and 144: 5 V power inputs. When no battery is used, supply a stable 5 V to these pins. A carrier board supply rated for at least 2 A is recommended.

- Pins 138 and 139: PMIC power outputs, supplying external circuits whether the board is powered from a battery or a 5 V supply.

## USB design

X40i provides three USB 2.0 ports. USB0 supports firmware download in device mode and OTG operation, selected through USB-ID. USB1 and USB2 operate as USB HOST ports.

USB 2.0 operates at up to 480 Mbps. Route the differential pairs with matched lengths, 90 Ω ±10% characteristic impedance and a continuous reference plane.

## HDMI design

A40i integrates an HDMI OUT controller supporting HDMI 1.4. Route the core board HDMI signals as length-matched differential pairs with 100 Ω ±10% impedance to prevent color loss or intermittent output.

## MIPI design

The MIPI Alliance was founded in 2003 by companies including ARM, Nokia, ST and TI to standardize interfaces such as cameras, displays and RF/baseband connections, reducing design complexity and improving flexibility. Common interfaces include DSI for displays and CSI for cameras.

The manual describes one MIPI DSI and two MIPI CSI interfaces at the A40i chip level. The X40i core board exposes one MIPI DSI and one 8-bit parallel CSI interface (CSI0); MIPI CSI is not exposed. Because MIPI signals have high data rates, route them as length-matched differential pairs with 100 Ω ±10% impedance.
