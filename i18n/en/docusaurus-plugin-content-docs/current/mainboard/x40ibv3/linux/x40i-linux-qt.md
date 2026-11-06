---
sidebar_position: 2
title: Qt and Display Configuration
description: x40i Qt and Display Configuration
---

# Qt and Display Configuration

## Qt 5.4.1 Libraries

Complete a system build, then open a new shell session to build Qt. This Qt configuration does not provide GPU/OpenGL acceleration; build its libraries separately.

```bash
cd x40i_linux
./qtLibAutoBuild.sh
./build.sh
./build.sh pack
```

Qt is installed to `/usr/local/Qt-5.4.1` in the target root filesystem. Libraries need not be rebuilt while the installed files remain intact. If the build exhausts host resources, reduce `makeall` parallelism or remove `-j` in the Qt `setenvs.sh`.

## Qt Application

Select `ui_qt_2csi` or `ui_qt_360` for the camera design and copy it as `ui_qt`. The example below uses the dual-CSI application; back up any existing changes in `ui_qt` first:

```bash
cd x40i_linux/buildroot/target/user_rootfs_misc
cp -r ui_qt_2csi ui_qt
cd ui_qt
make clean
./makedvr
cd ../../../..
./build.sh
./build.sh pack
```

## Panel Parameters

Panel settings are in `tools/pack/chips/sun8iw11p1/configs/<board>/sys_config.fex`. Select the RGB or LVDS parameters in the matching board directory, then rebuild and package. These filenames are 1024×600 examples:

```text
sys_config.fex_sdk_rgb_1024600
sys_config_new_evb_lvds1024600.fex
```

For framebuffer diagnostics, run the following from the board UART and observe whether the image changes. This overwrites the displayed image; restart the display application afterward.

```bash
cat /bin/bash > /dev/fb0
```
