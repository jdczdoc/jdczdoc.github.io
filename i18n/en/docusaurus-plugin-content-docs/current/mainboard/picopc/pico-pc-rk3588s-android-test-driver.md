---
sidebar_position: 8
title: Android Test and Driver
description: Pico PC RK3588S Android test app, drivers, and projects
---

# Android Test and Driver

## Android Test Items

| Test Item | Description |
| --- | --- |
| LCD | Check DSI / HDMI display, color, dead pixels, and backlight |
| Touchscreen | Check capacitive touch coordinates and multitouch |
| LED | Check LED GPIO control |
| Buzzer | Check buzzer control |
| Backlight | Check backlight brightness control |
| Keys | Check Boot, Reset, Recovery, Power, and other keys |
| Battery | Check battery and power state |
| ADC | Check ADC sampling |
| G-sensor | Check gravity sensor |
| Audio | Check headphone, MIC, and HDMI audio |
| Camera | Check CSI or USB camera |
| Wireless | Check Wi-Fi / BT |
| Network | Check Gigabit Ethernet |
| UART | Check UART / Debug serial port |
| External storage | Check TF card |
| USB disk | Check USB storage |

## Android Kernel Drivers

The manual lists:

- G-sensor driver.
- Capacitive touchscreen driver.
- LCD driver.
- Key driver.
- Wi-Fi/BT module driver.
- proc filesystem.

## Development Projects

The manual includes:

- Modify `init.rc`.
- Modify boot animation.
- Modify U-Boot boot logo.
- Modify kernel logo.
- Configure MIPI panel.
- Power-off charging and low-voltage pre-charge.
- Android Surface rotation.

## MIPI Panel Configuration

Prepared panel configuration files are located under:

```text
kernel/arch/arm64/boot/dts/rockchip
```

Reference file:

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

Check `dsi0`, panel node, backlight, power, reset GPIO, enable GPIO, timing, and touch configuration.

## Power-off Charging and Low-voltage Pre-charge

| Property | Description |
| --- | --- |
| `rockchip,U-Boot-charge-on` | U-Boot power-off charging; mutually exclusive with Android charging |
| `rockchip,Android-charge-on` | Android power-off charging; mutually exclusive with U-Boot charging |
| `rockchip,U-Boot-low-power-voltage` | Voltage threshold for boot after low-voltage pre-charge |
| `rockchip,screen-on-voltage` | Voltage threshold for turning on the screen during pre-charge |
