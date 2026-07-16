---
sidebar_position: 6
title: Android Development Environment
description: X8385 Android development environment, adb, and serial tools
---

# Android Development Environment

Full Android source compilation requires strong PC hardware. The manual recommends installing Linux directly instead of relying on a virtual machine for full development. It uses Ubuntu 14.04 64-bit as an example, while the dependency section recommends Ubuntu 16.04 64-bit.

## Ubuntu and Common Tools

```bash
sudo apt-get update
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

## Serial Tools

### minicom

```bash
sudo minicom -s
```

A USB-to-UART adapter usually appears as `/dev/ttyUSB0`. Common settings are 115200 8N1 with no hardware/software flow control.

### picocom

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

Exit picocom with `Ctrl+a`, then `Ctrl+q`.

### kermit

Example `~/.kermrc`:

```text
set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
```

Open the serial console:

```bash
sudo kermit -c
```

## JDK

Android builds require JDK. The manual notes that the JDK can be specified according to the SDK build script. For example, the X8385 Android 12 `mk.sh` uses:

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## Device Tree and Partition File Paths

```text
ap-sdk/kernel-4.19/arch/arm64/boot/dts/mediatek/tb8788p1_64_Wi-Fi_k419.dts
output/MT6771_Android_scatter.txt
```

## adb

```bash
adb devices
adb shell
```

If `error: more than one device and emulator` appears on Windows, terminate `adb.exe` and restart adb.

## SecureCRT Serial Console

On Windows, SecureCRT can be used to connect to the debug UART. The manual notes the debug serial baud rate as `921600`, protocol `Serial`, and no DTR/DSR, RTS/CTS, or XON/XOFF flow control.
