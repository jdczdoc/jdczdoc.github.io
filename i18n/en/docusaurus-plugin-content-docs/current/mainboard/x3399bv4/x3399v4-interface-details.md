---
sidebar_position: 3
title: Interface Details
description: X3399V4 power, UART, HDMI, Camera, network, audio, display, and expansion interface notes
---

# Interface Details

## Power Connector

X3399V4 uses 12V DC power input. The connector shown below is the 12V DC input connector.

![12V DC input](./x3399v4-dc12v.png)

## Debug UART

X3399 reserves one RS232 UART2 for debugging and one normal TTL-level UART4. UART2 is the default debug UART. Users can change the debug UART through software configuration.

![RS232 UART2](./x3399v4-rs232-uart.png)

![TTL UART4](./x3399v4-ttl-uart.png)

## HDMI

The board uses a Mini HDMI connector. With a Mini HDMI extension cable, audio and video can be output to HDMI 2.0-capable displays such as TVs and monitors.

![HDMI connector](./x3399v4-hdmi.png)

## Camera

The board provides a 24-pin parallel Camera connector, a 30-pin MIPI Camera connector, and a 50-pin CSI + DSI connector. The 50-pin connector can connect two MIPI Cameras and supports simultaneous display.

![24-pin parallel Camera](./x3399v4-camera-parallel.png)

![30-pin MIPI Camera](./x3399v4-camera-mipi.png)

![50-pin CSI + DSI](./x3399v4-csi-dsi.png)

## Ethernet

X3399 supports Gigabit Ethernet through the on-board RTL8211E.

![Gigabit Ethernet](./x3399v4-ethernet.png)

## Audio

The board supports headphone output, external 2W speaker output, recording input, and optical audio output. The headphone output can connect headphones directly or feed an amplifier. The optical output can connect to high-fidelity speakers with optical input.

![Headphone connector](./x3399v4-headphone.png)

![Speaker connector](./x3399v4-speaker.png)

![Recording input](./x3399v4-mic.png)

![Optical audio output](./x3399v4-spdif.png)

## TF Card

The external TF-card connector can be used for TF-card upgrade or storing media files.

![TF-card slot](./x3399v4-tf-card.png)

## Independent Keys

X3399 has six keys: four independent keys, one Power key, and one Reset key. The independent keys are sampled through ADC.

![Independent keys](./x3399v4-keys.png)

| Key | Function |
| --- | --- |
| VOL+ | Volume up |
| VOL- | Volume down |
| ESC | Back |
| MENU | Menu |
| POWER | Power |
| RESET | Reset |


## Type-C

The Type-C connector is OTG-compatible and can be used for firmware download and synchronization. It also provides higher-speed data transfer and display-related expansion capability.

![Type-C connector](./x3399v4-typec.png)

## USB HOST

RK3399 has two USB HOST 2.0 ports and two Type-C ports. One Type-C port is used as USB 3.0 on X3399. In the image, the upper connector corresponds to USB 3.0 and the lower connector corresponds to USB HOST 2.0. Another HOST 2.0 is routed to the PCIe slot for 3G / 4G modules.

![USB HOST connector](./x3399v4-usb-host.png)

## Power, Reset, and Recovery

After connecting the external power adapter, hold Power to boot. In Android, a short Power press suspends the system, another press wakes it, and a long press opens the shutdown dialog. Press Reset during runtime to hard reset. The volume-up key is used as the Recovery key during flashing.

![Power key](./x3399v4-power-key.png)

![Reset key](./x3399v4-reset-key.png)

![Recovery key](./x3399v4-recovery-key.png)

## LCD, Dual MIPI, and EDP

X3399 provides a default 30-pin DSI connector that connects MIPI signals to the LCD control board. Pin 12 of this connector is PWM for backlight control. It also routes I2C, interrupt, and wake-up signals for capacitive touch. The board also reserves a dual-MIPI connector and an EDP connector for higher-resolution panels.

![LCD DSI connector](./x3399v4-lcd-dsi.png)

![Dual MIPI connector](./x3399v4-dual-mipi.png)

![EDP connector](./x3399v4-edp.png)

## RTC Battery, Buzzer, and IR

The backup battery keeps RTC running after power loss. The buzzer is an active buzzer controlled through PWM. The IR receiver uses HS0038B.

![RTC backup battery](./x3399v4-rtc-battery.png)

![Buzzer](./x3399v4-buzzer.png)

![IR receiver](./x3399v4-ir.png)

## SIM Card and Wi-Fi / Bluetooth

The PCIe slot is used for 3G / 4G modules. When using cellular modules, insert the corresponding SIM card into the SIM-card slot. The board includes a 2.4G / 5G dual-band SDIO Wi-Fi / BT module.

![SIM card and PCIe connector](./x3399v4-sim-pcie.png)

![Wi-Fi / Bluetooth module](./x3399v4-wifi-bt.png)
