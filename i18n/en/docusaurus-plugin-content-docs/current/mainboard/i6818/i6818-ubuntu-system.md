---
sidebar_position: 8
title: Ubuntu System
description: i6818 Ubuntu 12.04 installation, flashing, and feature experience
---

# Ubuntu System

> Note: This software page reuses the x6818 software documentation flow as requested. i6818 and x6818 have similar boot/flashing flows; actual commands, source package names, and image names should follow the current i6818 SDK.

The i6818 Linux manual includes Ubuntu 12.04 installation and evaluation.

## Ubuntu Flashing Method 1

Method 1 flashes U-Boot and `boot.img` to eMMC, writes the Ubuntu filesystem to a TF card, and sets U-Boot environment variables to boot from the TF-card filesystem.

Typical steps:

1. Flash U-Boot and `boot.img` to eMMC.
2. Write Ubuntu root filesystem to TF card.
3. Set U-Boot environment variables.
4. Insert the card and verify rootfs boot.

## Ubuntu Flashing Method 2

Method 2 uses an Ubuntu upgrade card:

1. Create an Ubuntu upgrade card.
2. Use the upgrade card for one-click Ubuntu upgrade.
3. Set U-Boot environment variables.
4. Reboot and verify.

## Ubuntu Feature Experience

The manual lists:

- Ubuntu desktop UI.
- USB mouse and keyboard.
- Super terminal.
- Screenshot with scrot.
- Ethernet.
- Wi-Fi.
- 3G.
- Bluetooth data transfer.
- USB disk.
- Music playback.
- Video playback.
- USB camera.
