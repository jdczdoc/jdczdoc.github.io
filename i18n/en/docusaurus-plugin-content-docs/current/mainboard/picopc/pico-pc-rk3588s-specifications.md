---
sidebar_position: 4
title: Specifications
description: Pico PC RK3588S SoC, CPU, GPU, NPU, interfaces, and environment parameters
---

# Specifications

## Specification Table

| Basic Parameters |  |
| --- | --- |
| SoC | Rockchip RK3588S |
| CPU | 64-bit octa-core (4 x Cortex-A76 + 4 x Cortex-A55), 8 nm process, up to 2.4 GHz |
| GPU | ARM Mali-G610 MP4 quad-core GPU, OpenGL ES 3.2 / OpenCL 2.2 / Vulkan 1.1, 450 GFLOPS |
| NPU | Up to 6 TOPS, supports INT4/INT8/INT16 mixed precision, and model conversion from TensorFlow/MXNet/PyTorch/Caffe |
| ISP | Integrated 48 MP ISP with HDR and 3DNR |
| Codec | Decode: 8K@60 H.265/VP9/AVS2, 8K@30 H.264 AVC/MVC, 4K@60 AV1, 1080P@60 MPEG-2/-1/VC-1/VP8. Encode: 8K@30 H.265/H.264. Up to 32-channel 1080P@30 decoding and 16-channel 1080P@30 encoding. |
| Memory | 4GB / 8GB / 16GB 64-bit LPDDR4/LPDDR4x, up to 32GB |
| Storage | 16GB / 32GB eMMC |
| Hardware parameters |  |
| Ethernet | Gigabit Ethernet |
| Wireless | 2.4G/5G dual-band Wi-Fi, supports external 4G module |
| Video | 1 x HDMI 2.1 (8K@60 or 4K@120), 1 x MIPI-DSI (4K@60) |
| Audio | 1 x phone output with MIC, 1 x Micro HDMI audio output |
| USB | 2 × USB3.0 / 1 × Type-C / 2 × USB2.0 |
| Power | DC5V input (Type-Cinterface) |
| Other Interfaces | 1 x CSI, 1 x DSI, 1 x UART, 1 x Debug, 28 x GPIO |
| System software |  |
| System | Android: Android 12.0; Linux: Ubuntu, Debian 11, Buildroot |
| Other parameters |  |
| Dimensions | 85mm x 56mm (Raspberry Pi form factor) |
| Weight | About 50 g |
| Thermal | Heatsink mounting hole spacing: refer to Raspberry Pi |
| Power Consumption | Standby: about 0.375 W (5V/75mA); typical: about 1 W (5V/200mA); maximum: about 9 W (5V/1800mA) |
| Environment | Operating temperature: -10℃ to 70℃; storage temperature: -20℃ to 70℃; storage humidity: 10% to 80% |


:::note
The hardware manual lists Android 12.0, Ubuntu, Debian 11, and Buildroot under system software. The software support table separately lists Linux + Android 12, Linux + Debian 10, Linux + Ubuntu, and Linux + Qt. The actual image version should follow the corresponding SDK and release package.
:::
