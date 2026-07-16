---
title: Linux/Qt Root File System
sidebar_position: 13
---
# Linux/Qt Root File System

The I527BV3 Linux SDK uses Buildroot to generate the root file system. Whether Qt is enabled, and which Qt version is used, depends on the Buildroot configuration shipped with the SDK.

## Open Buildroot configuration

```bash
cd i527bv3_linux
source build/envsetup.sh
./build.sh buildroot_menuconfig
```

Check the Qt package selection under a menu similar to:

```text
Target packages
  └─ Graphic libraries and applications
       └─ Qt5
```

The exact menu name varies with the Buildroot version.

## Build the root file system

Prefer the command listed by the SDK build-script help:

```bash
./build.sh buildroot_rootfs
```

Some releases use:

```bash
./build.sh buildroot
```

Package the firmware after the root file system is ready:

```bash
./build.sh pack
```

## Deploy a Qt application

Check the Qt libraries and platform plugins on the target:

```bash
find /usr -name 'libQt5Core.so*'
find /usr -path '*plugins/platforms*'
```

For an EGLFS image:

```bash
export QT_QPA_PLATFORM=eglfs
./my_qt_app
```

For a Linux framebuffer image:

```bash
export QT_QPA_PLATFORM=linuxfb
./my_qt_app
```

The Qt platform plugin, GPU driver, and display backend must match. For a black screen, inspect DRM/framebuffer devices, plugins, shared-library dependencies, and permissions:

```bash
ls -l /dev/dri /dev/fb*
ldd ./my_qt_app
```
