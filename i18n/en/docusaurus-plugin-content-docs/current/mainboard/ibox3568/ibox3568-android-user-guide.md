---
sidebar_position: 7
title: Android User Guide
description: iboibox3568 Android common function usage
---

# Android User Guide

:::note
This page reuses the previously prepared X3568 software documentation template. For ibox3568, actual source package names, image names, partition files, tool versions, and board-level configuration should follow the current ibox3568 SDK and release package.
:::

This page summarizes common operations after the iboibox3568 Android system boots, including serial console, audio/video, Wi-Fi/BT, external storage mounting, Camera, Ethernet, HDMI, power control, and suspend / wake-up.

## Command Terminal

Connect the serial cable to the debug UART of the mainboard. After Android starts, the system terminal log can be viewed through the serial console.

## Play MP3

Make sure the external SD card or USB disk contains MP3 files. Open the music player, and the system will automatically scan audio files. Tap a file to play it.

## Play Video

The Android Gallery scans supported video and image files on external storage. Tap a video file with the play icon to start playback.

## Use Wi-Fi for Network Access

The iboibox3568 mainboard has an on-board Wi-Fi/BT combo module, so an additional USB Wi-Fi module is not required. Go to `Network & Internet`, enable Wi-Fi, select the target network, and enter the password.

## Transfer Data by Bluetooth

Go to `Connected devices -> Bluetooth`, enable Bluetooth, and search for devices. After pairing with a phone or another Bluetooth device, files can be shared through Gallery or File Manager.

## Play Music by Bluetooth

Prepare a Bluetooth speaker and switch it to Bluetooth mode. Pair it in the board's Bluetooth settings. After pairing, audio/video playback will output sound through the Bluetooth speaker.

## Use USB Mouse and Keyboard

After the board starts, connect a USB mouse, keyboard, or wireless receiver to the USB HOST port to operate the Android UI.

## Mount TF Card

After system startup, the TF card is automatically mounted under `/storage/`, and the mount point is identified by UUID.

## Mount USB Disk

After inserting a USB disk, the system automatically mounts it under `/storage`. Use `ls /storage` to check the mount directory.

## Camera Capture

Open the Camera application to enter preview mode. Tap the capture button to take photos, and switch between photo and video modes from the UI.

## Wired Ethernet

Connect a valid network cable to the Ethernet port. After the port LED blinks normally, the board can access the network through wired Ethernet.

## Infrared Remote Control

The iboibox3568 hardware supports infrared remote control by default. It can be used to operate the Android UI and is suitable for set-top-box scenarios.

## HDMI Display

HDMI can mirror the LCD video to an HDMI TV or monitor. It supports 1080P / 2K HD video and audio transmission.

## Power On / Off

The iboibox3568 uses the PMU for power management. After a 12V power adapter is connected, the board powers on automatically. In Android, long-pressing the power key opens the shutdown confirmation dialog.

## Suspend / Wake-up

After entering Android, short-press the power key to turn off the display and enter suspend. Short-press the power key again to wake the board.
