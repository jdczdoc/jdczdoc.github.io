---
sidebar_position: 5
title: Software and system development
description: X311Y3CV1 Software and system development
---

# Software and system development

## 5.1 Supported operating systems

X311Y3CV1 supports Android 16 and Linux 6.12.69. Android targets HMI, commercial displays, intelligent terminals and multimedia; Linux targets industrial control, edge computing, machine vision and custom services. Use the released JiuDing firmware package for BSP, kernel, device-tree and driver versions.

**Table 5-1 Supported operating systems**

| System | Version | Applications |
| --- | --- | --- |
| Android | Android16 | Commercial displays, intelligent terminals, interactive devices and multimedia |
| Linux | Linux6.12.69 | Industrial control, edge computing, machine vision and custom services |

## 5.2 Driver support

Table 5-2 summarizes firmware driver support. ● means supported; △ means planned or dependent on the released version. Validate each function against the selected firmware rather than relying on the table alone.

**Table 5-2 Driver support**

| Function | Android16 | Linux6.12.69 | Notes |
| --- | --- | --- | --- |
| 7-inch MIPI panel (1024 × 600) | ● | △ | Subject to panel timing and device tree |
| 7-inch MIPI panel (1920 × 1200) | ● | △ | Subject to panel timing and device tree |
| Backlight / touch | ● | △ | I2C touch; PWM backlight |
| eMMC / SD card | ● | △ | eMMC5.1；SDIO4-bit |
| USBHost/OTG | ● | △ | USB2.0/3.0；Type-C |
| PCIe | ● | △ | PCIe3.0x2/2.0x1 |
| HDMITX/RX | ● | △ | HDMI2.1a；eARC |
| Gigabit Ethernet | ● | △ | RTL8211F |
| Wi-Fi/BT | ● | △ | Version depends on module selection |
| Audio / recording | ● | △ | Codec/amplifier depend on carrier board |
| MIPI CSI camera | △ | △ | Sensor-specific ISP tuning |
| UART/I2C/SPI/PWM/ADC | ● | △ | Configure through device tree |
| RTC / buttons / suspend and wake | ● | △ | Subject to hardware design |
| U-Boot / flashing | ● | ● | Type-C OTG / TF card |

:::caution

Driver support depends on peripheral model, device tree, kernel configuration and firmware. ● indicates platform driver capability, not universal compatibility with every peripheral. Provide peripheral models, schematics and specifications for FAE evaluation at project definition.

:::

## 5.3 Debugging and troubleshooting

Start troubleshooting with the debug UART. Check 12 V, 3.3 V/1.8 V, PWR_CTL1/2 and RESET_N, then inspect U-Boot/kernel logs. Common causes include insufficient power, asserted reset, incorrect boot-media configuration, poor eMMC soldering, DDR initialization failure, display timing mismatch and USB/PCIe multiplexing conflicts.

**Table 5-3 Troubleshooting**

| Symptom | First checks | Possible causes |
| --- | --- | --- |
| No UART output after power-on | 12 V, 3.3 V, RESET_N and clocks | Insufficient power, reset asserted or crystal not oscillating |
| Garbled UART output | Baud rate, ground and TX/RX | Incorrect baud rate, voltage mismatch or interference |
| Cannot enter flashing mode | BOOT/POC, Type-C and drivers | BOOT timing, cable or USB driver |
| eMMC detection failure | eMMC power, soldering and DS | Poor soldering, damaged device or boot configuration |
| No HDMI picture | HPD, DDC, TMDS and power | Connector, ESD, impedance or timing |
| Unstable USB 3.0 | SS pairs, CC and VBUS | Impedance, multiplexing conflict or insufficient power |
| PCIe device not detected | REFCLK, PERST# and AC coupling | Clock, reset, power or multiplexing |
| Wi-Fi fails to start | SDIO、32K、WL_EN | Module power, firmware or antenna |
