---
sidebar_position: 4
title: Interface Details
description: I3399BV2 connector usage and hardware notes
---

# Interface Details

This page describes external connector usage and avoids repeating the full 200-pin table.

## Power Input and Output

![I3399 Power Input and Output](./i3399-dc12v.png)

The board uses a 12V DC input. The white PH connector near the lower-left corner can be used as a 12V output for peripherals.

## Debug UART

![I3399 Debug UART](./i3399-uart-key.png)

UART2 is the default debug serial port and is exported through a 4-pin PH connector. UART0 and UART4 are also exported through PH connectors.

## HDMI

![I3399 HDMI](./i3399-hdmi.png)

The board provides a standard Type-A HDMI connector for HDMI OUT and a mini Type-C style connector for HDMI IN.

## Camera

![I3399 Camera](./i3399-camera.png)

The FPC connector near the lower-right corner is a 26-pin camera interface. Camera power, reset, clock, and driver settings must match the selected module.

## Ethernet

![I3399 Ethernet](./i3399-ethernet.png)

The board supports Gigabit Ethernet and uses the on-board YT8521 PHY.

## Audio

![I3399 Audio](./i3399-audio.png)

Audio interfaces include headset output, LINE IN, dual 2W speaker outputs, and MIC input.

## TF Card

![I3399 TF Card](./i3399-tf-card.png)

The external TF card slot can be used for firmware update, media storage, or external data storage.

## Type-C

![I3399 Type-C](./i3399-typec.png)

The Type-C interface supports USB OTG for flashing and data synchronization and can also be used for high-speed extension scenarios.

## USB HOST

![I3399 USB HOST](./i3399-usb-host3.png)

The board exposes USB3.0, USB HOST2.0, and several PH-header USB HOST2.0 interfaces for USB peripherals.

## USB HOST2.0 Expansion

![I3399 USB HOST2.0 Expansion](./i3399-usb-host2.png)

The right-side white PH connectors are USB HOST2.0 expansion connectors for internal USB modules or adapter cables.

## Power / Reset / User Keys

![I3399 Power / Reset / User Keys](./i3399-keys.png)

Reset and recovery-related keys are placed on the back side. Other power and user-key signals are exported through a 6-pin PH connector.

## LCD / DSI / EDP

![I3399 LCD / DSI / EDP](./i3399-lcd-dsi.png)

The board provides a 30-pin DSI connector, a 20-pin DSI header, and an EDP interface for high-resolution displays.

## GPIO Expansion

![I3399 GPIO Expansion](./i3399-gpio.png)

The GPIO header is used for external control, level detection, or low-speed peripheral expansion. Actual function depends on pinmux and device-tree configuration.

## RTC Battery

![I3399 RTC Battery](./i3399-rtc-battery.png)

The RTC battery connector keeps the real-time clock running when the main power is removed.

## Buzzer

![I3399 Buzzer](./i3399-buzzer.png)

The active buzzer is controlled through a transistor and PWM signal. It can be used for PWM tests or audible notifications.

## IR Receiver

![I3399 IR Receiver](./i3399-ir.png)

The IR receiver uses an integrated HS0038B receiver and can be used for remote-control input.

## SIM Card

![I3399 SIM Card](./i3399-sim-card.png)

The SIM slot is used together with the PCIe 4G module. Insert the carrier SIM card when 4G network access is required.

## PCIe

![I3399 PCIe](./i3399-pcie.png)

The PCIe connector can be used for a PCIe 4G module or other PCIe expansion device.

## Wi-Fi / Bluetooth

![I3399 Wi-Fi / Bluetooth](./i3399-wifi-bt.png)

The board includes a 2.4G/5G dual-band SDIO Wi-Fi/Bluetooth module.

