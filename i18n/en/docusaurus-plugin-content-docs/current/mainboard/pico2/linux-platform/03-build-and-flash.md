---
title: Build and Flash
sidebar_label: Build and Flash
sidebar_position: 3
description: PICO2 SDK extraction, target selection, build, packaging, and USB flashing.
---

# Build and Flash

```bash
cd <SDK>
source build/envsetup.sh
lunch
m
pack
```

The selected target must match the board, storage medium, and product scenario.

![Target selection](../images/linux/image53.png)

For partial builds:

```bash
m kernel
m openwrt
m rtos
```

## USB Flashing

1. Install the Allwinner USB driver on Windows.
2. Load the generated `.img` file in the flashing tool.
3. Power off the board.
4. Hold FEL while connecting USB or resetting.
5. Start flashing after the device is detected.

![Firmware selection](../images/linux/image66.png)

Check the USB cable, FEL timing, driver, power supply, and storage configuration when flashing fails.
