---
sidebar_position: 6
title: Android Flashing
description: x8883bv3 Android Flashing
---

# Android Flashing

## Prepare Driver and Tool

Obtain the Windows flashing tool, USB driver and complete image package matched to the board firmware. Back up required data, the existing firmware and partition table before upgrading. Install the USB driver, open the tool, select the package XML configuration and click **Download** to wait for the board.

![USB driver installation example](./x8883-driver-install.png)

![Select the XML configuration and wait for download](./x8883-flash-tool.png)

## Connect and Flash

1. With the board powered off, connect Type-C J10 to the PC.
2. Move the download switch to flashing mode.
3. Hold the flashing button while applying DC power.
4. Wait for detection and writing to finish. Confirm the success indication before removing power.
5. Restore the normal boot switch position and power up for validation.

![Flashing button and download-switch positions; Chinese arrows identify these controls](./x8883-download-controls.png)

![Flashing-tool result example](./x8883-flash-result.png)

Do not connect the parallel battery and DC inputs simultaneously. After flashing, verify display, touch, cameras, USB, Ethernet, audio, TF and sensors. For production firmware, verify MAC address, serial number and region settings.

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Android Platform User Manual V1.0 → Chapter 3, Section 3.4, Firmware Flashing.
