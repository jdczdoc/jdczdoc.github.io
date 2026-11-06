---
sidebar_position: 12
title: Linux user guide
description: x311y3 Linux user guide
---

# Linux user guide

## First boot and login

| Item | Description |
| --- | --- |
| User | system / system |
| Root | su; password: 1234 |
| OS | Debian 12 Bookworm / Armbian |

These defaults come from A311Y3 202608 Release Notes and may differ in later images. Change default credentials before production or delivery.

```bash
cat /etc/os-release
uname -a
whoami
df -h
free -h
lsblk
ip addr
```

Confirm desktop/console access without repeated reboots, normal root filesystem and storage capacity, then check IP, DNS, default route, time and RTC nodes.

## Package management

```bash
sudo apt update
```

The image uses Debian Bookworm packages. Avoid unvalidated full `apt upgrade` during production qualification; kernel, GPU, media, NPU and vendor components must match the SDK.

## Networking and Bluetooth

- Ethernet: connect a cable and confirm link/IP in Settings / Network.
- Wi-Fi: select an AP in Settings / Wi-Fi, enter its password and check DHCP/DNS.
- Bluetooth: enable and pair in Settings / Bluetooth; select the audio output separately.

## Dual display and graphics

Use a dual-display image and enable the second screen in Settings / Display. HDMI Only defaults to HDMI output. If the second screen is absent, check cabling, interfaces, boot logs, DRM and device tree. Run the graphics test in a Wayland desktop session.

```bash
sudo apt install glmark2-es2-wayland
glmark2-es2-wayland
```

## ADB file transfer

```bash
adb devices
adb push <local> <remote>
adb pull <remote> <local>
```

`push` copies from PC to board; `pull` copies from board to PC. USB/network ADB availability depends on image configuration.

## Audio playback and recording

```bash
aplay -l
arecord -l
aplay -D hw:1,1 2ch_44.1k_play.wav
speaker-test -D hw:1,1 -c 2
arecord -Dhw:0,3 -r 16000 -c 2 -f S16_LE /tmp/record_S16_LE_16k.wav
```

Card numbering depends on device tree and driver order. List devices first and match actual nodes and WAV rate, channels and sample format.

## RTC timed wake

```bash
sudo hwclock -w
sudo sh -c "echo 0 > /sys/class/rtc/rtc0/wakealarm"
sudo sh -c "echo +60 > /sys/class/rtc/rtc0/wakealarm"
```

The example schedules wake after 60 seconds and requires root, the `wakealarm` node and configured RTC/power/wake paths. Confirm hardware support before testing shutdown/suspend recovery. Check the node, wake source and power if recovery fails.
