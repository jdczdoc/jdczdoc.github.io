---
sidebar_position: 5
title: Android Build
description: x8883bv3 Android Build
---

# Android Build

## Build Requirements and Sources

Use native Ubuntu 20.04.6 LTS with a 64-bit/64-thread CPU, 64 GB RAM and 1 TB free SSD space. Match the build environment to the SDK and obtain both ALPS and MSSI source archives from the supplied resources.

```bash
sudo apt-get install -y git-core gnupg flex bison build-essential zip curl \
  zlib1g-dev libc6-dev-i386 libncurses5 lib32ncurses5-dev x11proto-core-dev \
  libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig \
  python3 python3-pip python-is-python3 python2 python2-dev cpio patchelf \
  openjdk-17-jdk gcc-multilib g++-multilib device-tree-compiler screen \
  libssl-dev bc lz4 imagemagick rsync ccache schedtool libncurses5-dev \
  lzop pngcrush liblz4-tool repo wget libffi-dev libreadline-dev \
  squashfs-tools libwxgtk3.0-gtk3-dev
```

The SDK includes Python 2/3 tools. Configure interpreters as required by each script and run tools requiring Python 2 in a dedicated build environment.

```bash
mkdir -p ~/workspace
cd ~/workspace
tar -jxvf mt8883_android_alps.tar.bz2
tar -jxvf mt8883_android_mssi.tar.bz2
cd mt8883_android_alps
./split_build.sh full
```

Keep ALPS and MSSI as sibling directories. Run these commands on the Ubuntu build host.

## Package Firmware

```bash
./split_build.sh pack
```

Select `1. aiot8883p2_64_bsp_wifi` and enter a package name, such as `x8883-evb-1200x1920-7inch`. Output is in the sibling `IMAGE/<package-name>/` directory. If the script cannot generate a name automatically, enter one when prompted.

```bash
ls ../IMAGE/x8883-evb-1200x1920-7inch
```

The package includes `preloader_aiot8883p2_64_bsp_wifi.bin`, `boot.img`, `init_boot.img`, `vendor_boot.img`, `dtbo.img`, `super.img`, `userdata.img`, `vbmeta*.img` and coprocessor images. Flash using the complete package directory and its XML configuration.

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Android Platform User Manual V1.0 → Chapter 3, Android Development Environment, Sections 3.1 to 3.3.
