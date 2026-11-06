---
sidebar_position: 1
title: Linux Build
description: x40i Linux Build
---

# Linux Build

## Build Host and Source Layout

Use an Ubuntu 16.04 64-bit build environment matched to the SDK, with the `arm-linux-gnueabi-` toolchain. Extract the Linux source archive; commands below assume the `x40i_linux` source root.

| Directory | Purpose |
| --- | --- |
| buildroot | Toolchain, application packages and root filesystem |
| linux-3.10 | Kernel, drivers and external modules |
| brandy | Bootloader and U-Boot |
| tools/pack | Firmware configuration and packaging tools |
| tools/tools_win | Windows flashing tools |
| doc | Development documents |

```bash
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
  libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 \
  libreadline6-dev:i386 libgl1-mesa-glx:i386 libgl1-mesa-dev g++-multilib \
  mingw32 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386 gawk
```

Install dependencies for the Ubuntu release used by this SDK. If its scripts require Bash, run `sudo dpkg-reconfigure dash` and select No in the dedicated build environment.

## Configure and Build

```bash
cd x40i_linux
./build.sh config
./build.sh
./build.sh pack
```

Select `sun8iw11p1`, `linux`, `linux-3.10` and the matching `a40i-p3` board configuration. Use the exact case shown by the SDK menu. Firmware is generated under `tools/pack/`, for example `sun8iw11p1_linux_a40i-p3_uart0.img`. For the Qt interface, also build the Qt libraries and application.

## Individual Modules and U-Boot

```bash
./build.sh -h
./build.sh -m kernel
./build.sh -m buildroot
./build.sh -m uboot
```

To build U-Boot separately, run from the source root:

```bash
cd brandy/u-boot-2014.07
make distclean
make sun8iw11p1_config
make
cd ../..
./build.sh
./build.sh pack
```

The U-Boot binary is `u-boot-sun8iw11p1.bin`; packaging uses the matching file under `tools/pack/chips/sun8iw11p1/bin/`.
