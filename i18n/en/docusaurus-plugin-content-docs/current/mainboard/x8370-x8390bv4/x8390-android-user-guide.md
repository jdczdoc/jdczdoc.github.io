---
title: Android User Guide
sidebar_position: 7
description: X8390/X8370 Android terminal, media, network, Bluetooth, storage, camera, and power operations.
---

# Android User Guide

## Serial Terminal

Connect the UART0 debug port to inspect Android and kernel logs.

![Android serial terminal](./android-terminal.jpg)

## Audio and Video

Media files stored on a TF card or USB drive can be played through the system applications.

![Music list](./android-music-list.jpg)

![Music playback](./android-music-playback.jpg)

![Gallery](./android-gallery.jpg)

![Video selection](./android-video-selection.jpg)

![Video playback](./android-video-playback.jpg)

## Wi-Fi

Open Settings, Network and Internet, and Wi-Fi; then select an access point.

![Android settings](./android-settings.jpg)

![Wi-Fi settings](./android-wifi-settings.jpg)

![Wi-Fi networks](./android-wifi-network.jpg)

## Bluetooth

Open Settings, Connected devices, and Bluetooth. Scan for the target device and complete pairing.

![Connected devices](./android-connected-devices.jpg)

![Bluetooth settings](./android-bluetooth-settings.jpg)

![Bluetooth scan](./android-bluetooth-scan.jpg)

![Bluetooth pairing request](./android-bluetooth-pair.jpg)

![Paired device](./android-bluetooth-paired.jpg)

Bluetooth can be used for file sharing and wireless audio output.

![Bluetooth file sharing](./android-bluetooth-share.jpg)

![Bluetooth speaker](./android-bluetooth-speaker.jpg)

## USB Mouse and Keyboard

Connect a USB mouse, keyboard, or wireless receiver to the USB Host port.

## TF Card and USB Drive

External storage is normally mounted below `/storage/`:

```bash
adb shell
ls -l /storage
```

The volume directory name depends on the filesystem UUID.

## Screen Rotation

When the firmware enables the gravity sensor and auto-rotation, supported applications rotate with board orientation.

## Camera

Connect a compatible MIPI camera and open the camera application for preview, still capture, and video recording.

![Camera preview](./android-camera.jpg)

## Wired Ethernet

Connect an active Ethernet cable. The connector LEDs should blink when the link is established.

![Wired Ethernet](./android-ethernet.jpg)

## Power and Suspend

After connecting 12V power, hold the Power key for about three seconds to boot. Hold the key in Android to open the power menu; press it briefly for suspend and resume.

![Power menu](./android-power-menu.jpg)
