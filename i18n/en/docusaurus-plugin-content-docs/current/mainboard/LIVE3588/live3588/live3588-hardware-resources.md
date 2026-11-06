---
sidebar_position: 2
title: Hardware Resources
description: Hardware Resources
---

# Hardware Resources

## Specifications

| Platform |  |
| --- | --- |
| SOC | RockChip RK3588 |
| CPU | 64-bit octa-core CPU, 4× Cortex-A76 and 4× Cortex-A55, 8 nm, up to 2.4 GHz |
| GPU | Quad-core Arm Mali-G610 MP4, OpenGL ES 3.2, OpenCL 2.2 and Vulkan 1.1, 450 GFLOPS |
| NPU | Up to 6 TOPS with mixed INT4, INT8 and INT16 computation. Supports conversion of models from TensorFlow, MXNet, PyTorch and Caffe. |
| ISP | Integrated 48 MP ISP with HDR and 3D noise reduction |
| Codec | Decode at 8K/60 fps with H.265, VP9 or AVS2, 8K/30 fps with H.264 AVC/MVC, 4K/60 fps with AV1 and 1080p/60 fps with MPEG-2, MPEG-1, VC-1 or VP8. Encode up to 8K/30 fps with H.265 or H.264. Up to 32 decode streams or 16 encode streams at 1080p/30 fps. |
| Memory | 4, 8 or 16 GB of 64-bit LPDDR4/LPDDR4x, configurable up to 32 GB |
| Storage | 16GB/32GB/64GB/128GB eMMC |
| Hardware |  |
| Ethernet | Gigabit Ethernet |
| Wireless networking | Dual-band 2.4/5 GHz Wi-Fi 6 |
| Video | 1 × HDMI 2.1 (8K/60 fps or 4K/120 fps), 1 × HDMI IN (4K/60 fps) with HDCP 2.3, 1 × LVDS (2K/60 fps), 1 × eDP output (4K/60 fps) |
| Audio | 2 × speaker outputs, 1 × headphone output, 1 × HDMI audio output, 1 × line input, 1 × microphone input |
| Touch | 1 × I2C input with two wiring options and 1 × USB input on a 4-pin PH header |
| USB | 1 × USB 3.0, 1 × USB Type-C and 2 × USB 2.0, one on a pin header |
| Power | 12 V DC input, 5.5 × 2.1 mm jack |
| Other interfaces | Illuminated power connector and 1 × fan connector |
| Software |  |
| System | Android12.0 |
| Physical and Environmental |  |
| Dimensions | 145mm×108mm |
| Weight | Approx. 125 g |
| Cooling | Heatsink mounting hole spacing, 75 × 47 mm |
| Power consumption | Standby approx. 1.08 W (12 V / 90 mA), typical approx. 3.24 W (12 V / 270 mA), maximum approx. 9.72 W (12 V / 810 mA) |
| Environment | Operating temperature -10 to 70 °C, storage temperature -20 to 70 °C, storage humidity 10% to 80% |

## Software Resources

| Operating system | Android 12, with Debian or Ubuntu available by customization |
| --- | --- |
| Low-level drivers | Supported |
| Middleware | Virtual camera support |
| Live production software | Guide_Station_release_vx.x.x.apk |

## Assembly and Handling

Follow these guidelines during assembly and use.
- Relative humidity: at most 85%.
- Storage temperature: -10 to 40 °C.
- Operating temperature: -10 to 75 °C.
- Use ESD protection during assembly and transport.
- Protect the board from bending, twisting and excessive pressure during assembly.
- Leave enough wiring clearance to prevent pressure on the connectors.
- Keep cables between the mainboard and module boards short to protect image quality.
- Route cables inside the enclosure away from the PCB where possible.
- Use a shielded display cable to improve EMC performance.
