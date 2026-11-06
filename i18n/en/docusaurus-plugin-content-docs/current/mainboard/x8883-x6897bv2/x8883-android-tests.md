---
sidebar_position: 7
title: Android Functional Tests
description: x8883bv3 Android Functional Tests
---

# Android Functional Tests

## LCD, Touch and Backlight

Open the AndroidTest2 LCD test and tap the solid-color area to cycle colors; check for missing colors, bad pixels and image defects. In the touch test, tap Start Test and draw diagonals to check coordinates, discontinuities and edges. Drag the circular control in the backlight test and verify brightness changes.

![Android test application](./x8883-test-app.png)

![LCD solid-color test](./x8883-lcd-test.png)

![Touch test](./x8883-touch-test.png)

![Backlight test](./x8883-backlight-test.png)

## Camera and Sensors

Open Camera and verify preview, orientation and image stability. In the test app, inspect GSensor, Gyroscope and Magnetic pages. Change the board orientation and observe axis readings; keep surrounding magnetic conditions controlled.

![Camera preview](./x8883-camera-test.png)

![Accelerometer test](./x8883-gsensor-test.png)

![Gyroscope test](./x8883-gyro-test.png)

![Magnetometer test](./x8883-magnetic-test.png)

## Wi-Fi, Bluetooth and Ethernet

Wi-Fi: open Settings → Network & Internet / Internet, enable Wi-Fi, connect to an access point and verify network access. Bluetooth: open Settings → Connected devices → Bluetooth, select a discovered device and confirm pairing on both ends. Ethernet: connect an RJ45 cable and inspect Ethernet status and IP settings on the Internet page.

![Wi-Fi test](./x8883-wifi-test.png)

![Bluetooth pairing](./x8883-bluetooth-test.png)

![Ethernet status](./x8883-ethernet-test.png)

On a host with ADB configured, run the following command to inspect network interface addresses:

```bash
adb shell ifconfig
```

## USB Storage and TF Card

Insert USB storage and check automatic mounting and file access in Files. TF cards are identified by UUID and mounted under `/storage/`. If formatting is requested, proceed only after confirming that existing card data can be erased. Verify reading, writing and recognition after reinsertion.

![Storage device in Files](./x8883-tf-files.png)

![Storage-card notification](./x8883-tf-notification.png)

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Android Platform User Manual V1.0 → Chapter 4, Android Functional Tests.
