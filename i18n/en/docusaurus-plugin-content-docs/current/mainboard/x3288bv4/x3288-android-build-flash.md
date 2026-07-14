---
sidebar_position: 7
title: Android Build and Flash
description: X3288 Android 5.1 source installation, build, and firmware flashing
---

# Android Build and Flash

This page keeps content directly related to Android 5.1 source installation, build, and firmware flashing. Generic Ubuntu installation and outdated Windows boot-menu topics are omitted.

## Development Environment Notes

- Use a native Linux host for a full Android source build whenever possible.
- The original manual uses Ubuntu 14.04 64-bit as the reference environment.
- Android 5.1 source trees may require specific JDK, GCC, and 32-bit compatibility packages. Use the delivered SDK and build errors as the final reference.
- Common tools include `adb`, serial terminal tools, RKTool, `upgrade_tool`, and Rkflashkit.

## Android Development Tools

### ADB Tool

Install `adb.exe`, `AdbWinApi.dll`, `AdbWinUsbApi.dll`, and `fastboot.exe` to `C:\Windows\System32`. On 64-bit Windows, also copy them to `C:\Windows\SysWOW64`.

Check the connection:

```bash
adb devices
```

Enter the board shell:

```bash
adb shell
```

If `adb devices` reports `more than one device and emulator`, stop the old `adb.exe` process and restart ADB.

### Serial Console

Use SecureCRT or another serial terminal. Select the correct COM port, set the protocol to serial, and configure the port as `115200 8N1` with no hardware or software flow control.

## Source Package and Dependencies

Install the commonly required packages on Ubuntu before building:

```bash
sudo apt-get update
sudo apt-get install git-core gnupg sun-java6-jdk flex bison gperf libsdl-dev \
libwxgtk2.8-dev build-essential zip curl libncurses5-dev zlib1g-dev \
genromfs u-boot-tools libxml2-utils texinfo mercurial subversion whois
```

Some packages, especially old JDK packages, may need manual installation depending on the Ubuntu source configuration.

## Build Flow

Typical build steps include:

```bash
source build/envsetup.sh
lunch
make -j8
```

Use the exact build scripts and product name delivered in the X3288 Android SDK. Image names and output paths may vary by SDK version.

## Firmware Flashing

For Windows flashing, install the Rockchip USB driver first, then use AndroidTool / RKTool to flash either a unified `update.img` or individual partition images.

General steps:

1. Install Rockchip USB driver.
2. Open AndroidTool / RKTool.
3. Select the target firmware or image set.
4. Put the board into loader or maskrom mode.
5. Start flashing and wait until the tool reports success.

For Linux flashing, use `upgrade_tool` when it is included in the SDK.
