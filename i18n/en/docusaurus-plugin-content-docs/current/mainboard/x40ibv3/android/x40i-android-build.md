---
sidebar_position: 1
title: Android Build
description: x40i Android Build
---

# Android Build

## Sources and Build Requirements

The Android 7 SDK uses the supplied Ubuntu 14.04.5 64-bit environment. Cross-toolchains are included under `lichee/tools/build/toolchain/`. Build as a regular user. Obtain the source archive from `DVD_X40i/source/x40i_android` in the resource drive; archive names depend on the release.

```bash
tar -xvf x40i_android.tar.bz2
cd x40i_android
```

After extraction, the root contains `android/`, `lichee/` and `mk.sh`. If the archive supplies Git objects without a populated working tree, confirm there are no local changes to preserve before restoring tracked files according to the package instructions.

## Build Commands

```bash
./mk.sh help
./mk.sh all
```

| Operation | Command | Output |
| --- | --- | --- |
| Full build | ./mk.sh all | lichee/tools/pack/ |
| Kernel build | ./mk.sh lichee | lichee/out/sun8iw11p1/androidm/common/boot.img |
| Android filesystem | ./mk.sh android | android/out/target/product/a40-p1/ |
| Repackage | ./mk.sh pack | lichee/tools/pack/ |

Repackage after individual builds and flash the resulting complete IMG. `clean` and `distclean` remove build artifacts; check whether any intermediate results need to be retained first.

## Host Dependencies

```bash
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
  libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 \
  libreadline6-dev:i386 libgl1-mesa-glx:i386 libgl1-mesa-dev g++-multilib \
  mingw32 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386 gawk
```

Install dependencies for the SDK host release. Do not apply GCC downgrades or system-link changes from unrelated projects to this Android 7 build.
