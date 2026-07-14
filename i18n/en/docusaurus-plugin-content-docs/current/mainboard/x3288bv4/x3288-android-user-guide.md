---
sidebar_position: 8
title: Android User Guide
description: X3288 Android common function guide
---

# Android User Guide

This page summarizes common operations after Android boots, including terminal access, audio/video playback, Wi-Fi/Bluetooth, storage mounting, HDMI, power control, and suspend/wake-up.

## Serial Terminal

Connect the serial cable to the debug UART. After Android boots, the debug terminal enters the Android console automatically.

## MP3 Playback

Place MP3 files on an external SD card. Open the music player; the player will scan and list audio files automatically. Select a file to start playback.

## Video Playback

The Android gallery can scan and play supported video and image files from external storage. X3288 Android 5.1 also includes a 4K video player that can be associated with video files. For unsupported formats such as RM/RMVB, use a third-party player such as RockPlayer.

## Wi-Fi

X3288 has an on-board Wi-Fi/Bluetooth combo module. Open Settings, enable Wi-Fi, select the target AP, and enter the password to connect.

## Bluetooth File Transfer

Enable Bluetooth in Settings. Search for a phone or another Bluetooth device, pair the devices, then share files through Bluetooth from the Gallery or file manager.

## Bluetooth Audio

Enable Bluetooth and pair with a Bluetooth speaker. After pairing, audio and video playback audio will be output through the speaker.

## USB Mouse and Keyboard

Connect a USB mouse, keyboard, or wireless USB receiver to the USB HOST port. Android can be operated directly with the connected input device.

## TF Card and USB Disk

TF cards are mounted automatically by the system. USB disks are mounted under `/mnt/usb_storage*` depending on the firmware.

## Screen Rotation

The G-sensor supports screen rotation. Some applications may not follow system rotation depending on application design.

## Camera

Open the camera application after connecting a supported camera module. The preview should be shown on screen, and the camera can be used for photo or video capture.

## Ethernet

Connect a valid Ethernet cable to the RJ45 port. The link LEDs should blink and the system can access the network when the IP configuration is valid.

## HDMI Output

HDMI can mirror audio and video to a TV or monitor that supports HDMI input.

## Power Off and Suspend / Wake-up

Press the power key according to the firmware behavior. Long-press may show the shutdown menu, while short-press can enter suspend. Press the power key again to wake the board.
