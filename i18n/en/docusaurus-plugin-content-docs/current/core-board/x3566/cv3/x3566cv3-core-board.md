---
sidebar_position: 1
title: Product Overview
description: X3566CV3 core board specifications
---

# X3566CV3 Core Board

The X3566CV3 is a JDCZ core board based on the Rockchip RK3566 for industrial control, commercial displays, and embedded terminals.

## Specifications

| Item | Specification |
| --- | --- |
| Processor | RK3566, quad-core Arm Cortex-A55 |
| GPU / NPU | Arm Mali-G52 2EE / 0.8 TOPS |
| Memory | 4 GB LPDDR4 |
| eMMC | 16 GB standard configuration |
| Dimensions | 55 mm × 55 mm |
| Package | 200 castellated pins, 1.0 mm pitch |
| System power input | VCC_SYS: 4 V |
| Interfaces | HDMI 2.0, eDP, MIPI DSI, LVDS, MIPI CSI, USB 3.0/2.0, PCIe 2.1, Gigabit Ethernet |

## Revision Notes

CV2 uses two DDR4 chips; CV3 uses one LPDDR4 chip. Pin connections, power supplies, and carrier boards must match the board revision.

## Mechanical and Interface Specifications

| System configuration |  |
| --- | --- |
| CPU | RK3566 (Cortex-A55) |
| Clock frequency | 1.8GHz |
| RAM | 4GB LPDDR4 (single chip) |
| ROM | 16GB eMMC (standard)，optional4GB/8GB |
| Power management IC | Onboard PMIC (RK809/RK817) |
| Interfaces |  |
| USB  interface | 1 channel(s) USB3.0 + 1 channel(s) USB2.0 OTG + 2 channel(s) USB2.0 Host |
| LCD  interface | 1 channel(s) HDMI2.0/1 channel(s) eDP/1 channel(s) MIPI DSI/1 channel(s) LVDS |
| Camera  interface | 1 channel(s) MIPI CSI + 1 channel(s) CIF |
| SPI  interface | Not separately exposed |
| I2C interface | 3 channel(s) I2C interface |
| UART interface | 5 channel(s) UART interface |
| SDIO interface | 2 channel(s) SDIO interface (SDMMC0/SDMMC1) |
| I2S interface | 1 channel(s) I2S interface |
| Ethernet interface | 1 channel(s) Gigabit Ethernet interface |
| PWM interface | 2 channel(s) PWM |
| PCIe interface | 1 channel(s) PCIe2.1 |
| ADC interface | 2 channel(s) ADC |
| Electrical specifications |  |
| Power input | 4V/3A |
| Power output | 5V/3A (VCC5V_MIDU/VBUS), 3.3V/1.8V |
| Operating temperature | 0–70 °C |
| Storage temperature | -10–50 °C |

| Mechanical specifications |  |
| --- | --- |
| Package | Castellated pins |
| PCB dimensions | 55mm*55mm*1.6mm |
| Pin pitch | 1.0mm |
| Pin count | 200PIN |
| PCB layers | 8 layers |
| Warpage | Less than 0.5% |

| Interface | Resources and description |
| --- | --- |
| Display | 1 channel(s) HDMI2.0, 1 channel(s) eDP1.3, 1 channel(s) MIPI DSI, 1 channel(s) LVDS |
| Camera | 1 channel(s) MIPI CSI, 1 channel(s) CIF |
| USB | 1 channel(s) USB3.0, 1 channel(s) USB2.0 OTG, 2 channel(s) USB2.0 Host |
| Ethernet | 1 channel(s) RGMIIGigabit Ethernet |
| PCIe | 1 channel(s) PCIe2.1 |
| Storage | 1 channel(s) SDMMC0 (TF), 1 channel(s) SDMMC1 (SDIO) |
| Audio | Headphones, speaker, 2 MIC inputs |
| Low-speed | 5 channel(s) UART, 3 channel(s) I2C, 1 channel(s) I2S, 2 channel(s) PWM, 2 channel(s) ADC, GPIO |
| Power | 4V/3Ainput，5V/3.3V/1.8Voutput |

## Board Views

![Board Views](./x3566cv3-figure-1.png)

![Board Views](./x3566cv3-figure-2.png)

## Mechanical Drawing

![Mechanical Drawing](./x3566cv3-figure-3.png)

## System Block Diagram

![System Block Diagram](./x3566cv3-figure-4.png)
