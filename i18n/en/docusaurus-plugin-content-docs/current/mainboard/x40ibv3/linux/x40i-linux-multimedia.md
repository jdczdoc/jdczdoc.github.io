---
sidebar_position: 5
title: Linux Camera and Multimedia
description: x40i Linux Camera and Multimedia
---

# Linux Camera and Multimedia

## ADB and Program Updates

Start ADB from the board UART, then connect the USB OTG port to a host with ADB configured:

```bash
cd /
./adb.sh
```

Run the following on the host from the SDK root:

```bash
adb devices
adb push buildroot/target/user_rootfs_misc/sdk/libsdk.so /usr/lib/
adb push buildroot/target/user_rootfs_misc/sdk/sdktest /
```

## Camera Preview and Recording

Complete the SDK build and flash its firmware. Comment out `/DvrUI &` in the board `/autorun.sh`, reboot and run sdktest to avoid contention for display or camera resources.

```bash
cd /
source ./qt5.sh
./sdktest
```

Use the command without arguments for a CSI camera. For the four-channel CVBS design, use `./sdktest 360`. Select the mode for the actual hardware. Insert a writable TF card before recording; the test creates MP4 files when the card is detected.

## Dynamic Log Level

Enable `DB_LEVEL_TEST` in `sdk/camera/cameratester.cpp`, rebuild and deploy `debuglevelset`. Start sdktest before the log client, and use a working directory where both can access the same `Loglevel_server` socket.

```bash
cd /
chmod 755 /sdktest /debuglevelset
source /qt5.sh
./sdktest &
./debuglevelset 2
```

## YUV and Player Examples

For the YUV example, enable `AUTEVENT_TEST` in cameratester.cpp, rebuild and place `100.yuv` on USB storage. Its format is `1280_720_YUV420_SP_VUVU`.

Include `xplayerdemo` in the build targets in `sdk/Makefile_sub`, rebuild and deploy it to the board:

```bash
chmod 755 /xplayerdemo
/xplayerdemo
```

In the player prompt, enter:

```text
set url: /mnt/UDISK/a.mp4
show mediainfo
play
pause
```

For the camera-texture GPU test, enable `DEFINES+=-DDMAFD_TEST` in `sdk/Makefile_sub` and rebuild. Before endurance tests, check the camera-test exit timer so a test exiting after about 800 seconds is not mistaken for a system failure.
