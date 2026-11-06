---
sidebar_position: 2
title: Android Usage and Functional Checks
description: z3588bv3 Android networking, storage, multimedia and debugging
---

# Android Usage and Functional Checks

## Serial Console and ADB

Use the board DEBUG connector for serial logs. Configure the baud rate for the fitted DEBUG cable and firmware. On the host, check ADB over Type-C OTG:

```bash
adb devices
adb shell
```

If no device appears, check the OTG connection, USB debugging setting and host driver.

## Networking

### Wi-Fi

In Settings, open Network & Internet, turn on Wi-Fi and connect to an access point.

### Bluetooth

Go to Settings → Connected devices → Bluetooth. Enable Bluetooth, find the target and pair it. Use the sharing menu to send files or select a paired speaker for playback.

### Ethernet

Connect the RJ45 cable, check the link LEDs and confirm the IP address in network settings.

## USB and Storage

- Connect a keyboard or mouse to a USB Host port.
- Insert a TF card or USB drive. Detected volumes appear under `/storage/`.

## Media and Display

- Open MP3 files from external storage in the music player. Open videos and images in Gallery.
- Use the camera application to check preview, photos and video with a compatible camera, device tree and driver.
- Connect a display to HDMI OUT for video and audio. Supported resolutions and refresh rates depend on the display, SDK and output configuration. The listed formats include 1080p, 4K, 8K, 720p, 576p and 480p.
- Press POWER briefly to suspend or wake. Hold it to open the shutdown menu.

## Functional Testing

The Android manual reports that the generic Android test app had yet to be ported to the SDK version it describes. Use the tools and drivers available in your firmware to verify LCD, touch, buttons, storage, audio, camera and networking.
