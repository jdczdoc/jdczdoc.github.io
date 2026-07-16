---
title: Linux Build and Flash
sidebar_position: 11
---
# Linux Build and Flash

## Extract the source package

```bash
tar -xvf i527bv3_linux.tar.gz
cd i527bv3_linux
git checkout .
```

Some release archives initially expose only the `.git` directory. `git checkout .` restores the working tree.

## Load the build environment

```bash
source build/envsetup.sh
```

Display the script help:

```bash
./build.sh --help
```

## Common build commands

```bash
# Full build
./build.sh

# Bootloader only
./build.sh bootloader

# Kernel only
./build.sh kernel

# Buildroot root file system
./build.sh buildroot_rootfs

# Kernel configuration
./build.sh menuconfig

# Buildroot configuration
./build.sh buildroot_menuconfig

# Package firmware
./build.sh pack
```

Some SDK releases also accept:

```bash
./build.sh buildroot
```

Follow the output of `./build.sh --help` in the actual SDK. Packaged firmware is normally generated under `out/`.

## Flash with PhoenixSuit

1. Run `./build.sh pack` to generate the `.img` firmware.
2. Start PhoenixSuit on Windows and select the image.
3. Hold the RECOVERY/FEL button.
4. Connect the USB OTG/Device cable and power on the board.
5. Start flashing after the tool detects the board.
6. Wait for completion and reboot the board.

Do not connect the flashing cable to a normal USB Host port.
