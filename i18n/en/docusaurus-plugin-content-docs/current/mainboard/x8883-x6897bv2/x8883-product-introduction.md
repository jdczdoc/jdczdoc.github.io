---
sidebar_position: 1
title: Product Introduction
description: x8883bv3 Product Introduction
---

# Product Introduction

The **X8883BV3** combines an X8883CV1 core board with a carrier for edge AI, machine vision, commercial displays, video conferencing and industrial control. The hardware reference is **X8883BV3_20260725**.

## Platform Specifications

| Item | Specification |
| --- | --- |
| Processor | MT8883, 4 nm; 4× Cortex-A715 (1×3.0 GHz + 3×2.8 GHz) + 4× Cortex-A510 @2.0 GHz |
| GPU | Mali-G615 MC6 @900 MHz; OpenGL ES / Vulkan / OpenCL |
| NPU | 7th-generation NPU, 24 TOPS |
| Memory / storage | LPDDR5X up to 24 GB; UFS 4.0 (platform specification) |
| Video / imaging | Up to 4K60 encoding/decoding and 200 MP image input |
| Wireless | Wi-Fi 6E 2×2, BT 5.3, GNSS L1+L5; processor includes a 5G Rel.16 modem |
| Board supply | 12 V DC; adapter rated for 12 V / 2 A or more current recommended |
| Display | LVDS J17, MIPI DSI U39, display power CN2 |
| Camera | C-PHY CON3, D-PHY J16 |
| USB | Type-C J10; USB 2.0 Host J22/J9506/J9507; additional J9505 |
| Ethernet | PCIe → RTL8111H → RJ45, 10/100/1000 M |
| Other | TF, headphones, microphone, speaker, IMU/magnetometer, debug UART |

Memory, storage capacity and system versions depend on the delivered configuration.

## Documentation

- [Hardware Resources](./x8883-hardware-resources.md)

- [Onboard Interface Definitions](./x8883-interface-details.md)

- [Power and Debug](./x8883-power-debug.md)

- [Android Build](./x8883-android-build.md)

- [Android Flashing](./x8883-android-flashing.md)

- [Android Functional Tests](./x8883-android-tests.md)

- [DTS, GPIO and Buses](./x8883-device-tree-gpio.md)

- [Display and Camera Adaptation](./x8883-display-camera.md)

- [Troubleshooting](./x8883-troubleshooting.md)

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Development Board Hardware Manual → Chapter 1, Product Overview. For connector definitions, see hardware Chapter 3; for Android configuration, see the X8883 Android Platform User Manual V1.0 in the same folder, Chapter 5.
