---
title: Android 13 Build
sidebar_position: 8
description: T527 Android 13 host setup, lunch selection, full build, module build, and rapid deployment.
---

# Android 13 Build

T527 Android 13 uses Linux 5.15. A full build normally consists of Longan configuration/build, Android lunch/build, and final packaging.

## Host Packages

Package requirements vary by SDK and Ubuntu release. A typical Ubuntu 20.04 setup includes:

```bash
sudo apt-get update
sudo apt-get install -y \
    git gnupg flex bison gperf build-essential zip curl \
    zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 \
    lib32ncurses-dev libx11-dev lib32z1-dev ccache \
    libgl1-mesa-dev libxml2-utils xsltproc unzip \
    libelf-dev gawk fontconfig openssl libssl-dev
```

Missing `libelf-dev` commonly causes `gelf.h` or `libelf.h` errors. Check the host make version with `make --version`; older GNU make 3.82 releases may fail on some Allwinner Linux 5.15 builds.

## Configure Longan

```bash
cd <ANDROID_TOP>/longan
./build.sh config
./build.sh
```

Select `android`, `t527`, the active `<BOARD>`, and `default` flash.

## Import the Android Environment

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
```

## Select a lunch Target

```bash
lunch 2>&1 | grep -i t527
```

Or search product declarations:

```bash
grep -Rni 'COMMON_LUNCH_CHOICES.*t527\|t527_.*userdebug' \
    device vendor 2>/dev/null | head -50
```

Common official examples include `t527_demo_arm64-userdebug` and `t527_demo_car_arm64-userdebug`, but company projects often use custom names. The Android product must match the Longan board configuration.

```bash
lunch <PRODUCT>-userdebug
```

`user` is production-oriented, `userdebug` keeps normal debugging access, and `eng` enables the broadest development features.

## Full Build

```bash
make -j$(nproc)
```

Reduce parallelism if the server becomes unstable:

```bash
make -j16
```

## Build One Module

```bash
m Settings -j16
m <module-name> -j16
```

## Rapidly Update an APK or Library

```bash
adb root
adb install -r <absolute-apk-path>
```

For system files on a debuggable and unlocked image:

```bash
adb root
adb remount
adb push <absolute-file-path> <target-device-path>
adb reboot
```

Dynamic partitions, verified boot, signing, or a locked production image may prevent remount.

## Allwinner build Function

Some SDKs define a `build` shell function after `source build/envsetup.sh`:

```bash
build --help
```

Typical options build kernel, Longan, Android, a release image, or a packaged/debug/secure firmware. Always follow the help output from the current branch.
