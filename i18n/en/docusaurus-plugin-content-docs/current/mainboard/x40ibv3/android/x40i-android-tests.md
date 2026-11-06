---
sidebar_position: 3
title: Android Functional Tests
description: x40i Android Functional Tests
---

# Android Functional Tests

Open the Android Test application and swipe to change tests. Test only hardware fitted to this board and supported by its firmware; skip generic pages for unpopulated devices.

## LCD

Tap the solid-color area to cycle colors; inspect missing colors, bad pixels and flicker.

![LCD](./x40i-lcd-test.png)

## Touch

Tap Start Test and draw diagonals and edge lines; check coordinates and continuity.

![Touch](./x40i-touch-test.png)

## LED and Buzzer

Toggle LED icons to check outputs. Hold Start Test on the buzzer page for sound and release to stop.

![LED and Buzzer](./x40i-led-test.png)

## Backlight

Drag the circular control and check continuous brightness changes.

![Backlight](./x40i-backlight-test.png)

## Keys and Battery

Press/release keys to inspect events; view battery level, voltage and power-source status.

![Keys and Battery](./x40i-key-test.png)

## ADC and Orientation Sensor

Check voltages on the exposed ADC channels; rotate the board and observe X/Y/Z readings.

![ADC and Orientation Sensor](./x40i-sensor-test.png)

## Audio and Network

Start the audio test and listen for output; after connecting Wi-Fi/Ethernet, inspect access-point lists and web access.

![Audio and Network](./x40i-audio-test.png)

## UART

After verifying interface levels, loop TXD to RXD, start the test and check that 0123456789 is received. Remove the loopback after testing.

![UART](./x40i-uart-test.png)

## TF and USB Storage

Insert the medium and start the test; check capacity, mounting and file access.

![TF and USB Storage](./x40i-storage-test.png)
