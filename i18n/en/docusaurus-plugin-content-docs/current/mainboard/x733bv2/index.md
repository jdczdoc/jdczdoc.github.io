---
title: X733BV2 Development Board
sidebar_position: 1
slug: /mainboard/x733bv2
description: X733BV2/A733 development board documentation
---
# X733BV2 Development Board

X733BV2 is an Allwinner A733 development board for tablets, smart terminals, commercial displays, video capture and edge-AI applications. This documentation covers hardware interfaces, connector pinouts, design notes, Android 13 source builds, firmware flashing and common debugging procedures.

![X733BV2 development board](./x733-development-board.png)

## Documentation

| Category | Documents |
|---|---|
| Hardware | [Product introduction](./x733-product-introduction.md) · [Hardware resources](./x733-hardware-resources.md) · [Interface details](./x733-interface-details.md) |
| Design | [Connector pinout](./x733-pin-definition.md) · [Hardware design](./x733-hardware-design.md) · [Configuration list](./x733-configuration-list.md) |
| Android | [Build and flash](./x733-android-build-flash.md) · [User guide](./x733-android-user-guide.md) · [Testing and drivers](./x733-android-test-driver.md) |

## Quick facts

- Source board name: `x733bv2`
- Processor: Allwinner A733, octa-core Cortex-A76 + Cortex-A55, integrated RISC-V E902
- CPU frequency: up to approximately 2 GHz depending on silicon and software configuration
- Memory: 2 GB / 4 GB / 8 GB
- Storage: onboard eMMC, TF card and M.2 expansion
- Board size: 150 mm × 102 mm × 1.6 mm
- Input: 12 V DC, 3 A recommended
- Display: HDMI OUT, eDP and MIPI DSI
- Video input: HDMI IN converted to MIPI CSI by LT6911C
- Software material: the supplied user manual targets Android 13; use the version included with the actual SDK and firmware
