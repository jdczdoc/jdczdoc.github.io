---
title: Linux Drivers and Debugging
description: The Linux manual covers an RK3562 Linux SDK. Confirm the actual DTS filename and path in…
---

# Linux Drivers and Debugging

## Device Tree

The Linux manual covers an RK3562 Linux SDK. Confirm the actual DTS filename and path in the checked-out Linux source; do not copy the Android DTS path into the Linux tree without verification.

```bash
find . -iname '*rk3562*' -o -iname '*i3562*'
grep -R "model\\|compatible" kernel/arch/arm64/boot/dts/rockchip/
```

## Driver Areas

The hardware and Linux manuals cover G-sensor, I2C capacitive touch, DRM display (MIPI-DSI / LVDS), keys, Wi-Fi / Bluetooth, MIPI camera, USB, Ethernet and audio peripherals. Actual driver files, DTS nodes, GPIO, regulator and clock settings depend on the SDK release.

## Useful System Checks

```bash
dmesg
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
df -h
```

## Peripheral Debugging

- **Display / touch:** Ensure DSI and LVDS are not enabled simultaneously. Check panel timing, lane count, power rails, backlight PWM, reset and touch I2C address.
- **Camera:** Check CSI lanes, MCLK, I2C, RESET, PWDN and camera power; verify sensor driver, DTS endpoints and media graph.
- **Wi-Fi / Bluetooth:** Confirm the module part number and host interface (SDIO, UART or USB); check power enable, 32 kHz clock, wake GPIO, DTS and firmware.
- **USB / Ethernet:** Verify USB 3.0 OTG role. For Ethernet, check RGMII clocks, PHY reset, PHY address and link state.
