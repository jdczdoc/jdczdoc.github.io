---
sidebar_position: 9
title: Linux Build and Flash
description: iboibox3568 Linux4.19 source installation, build, firmware packaging, and flashing
---

# Linux Build and Flash

:::note
This page reuses the previously prepared X3568 software documentation template. For ibox3568, actual source package names, image names, partition files, tool versions, and board-level configuration should follow the current ibox3568 SDK and release package.
:::

This page keeps the content directly related to installing, building, packaging, and flashing the iboibox3568 Linux source tree. Generic VMware and Ubuntu installation screenshots are not included.

## Development Environment Notes

- iboibox3568 Linux source compilation is recommended on Ubuntu 16.04 / 18.04 64-bit;
- Linux compilation requires less memory than Android compilation, and a normal development PC is usually sufficient;
- Before building, check the `README` in the SDK root directory and the output of `build.sh -h`.

## Common Dependencies

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev \
build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs \
libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache \
libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev \
lib32ncurses5-dev texinfo mercurial subversion whois g++ git lzop \
liblz4-tool genext2fs make device-tree-compiler u-boot-tools libssl-dev \
autoconf python-pyelftools python3-pyelftools libusb-1.0 tig repo p7zip \
p7zip-full rar unrar Android-tools-fastboot Android-tools-adb
```

Some packages such as `hgsubversion` may fail to install because of repository changes. Handle them according to the actual prompt. Buildroot compilation also requires `expect`:

```bash
sudo apt install expect
```

## Install Source Package

Copy the Linux source package to the Ubuntu user directory and extract it. The source directory and package name depend on the delivered SDK.

## View Build Help

```bash
./build.sh -h
```

Common targets:

| Target | Function |
| --- | --- |
| `lunch` | List and switch the current SDK board configuration |
| `U-Boot` | Build U-Boot |
| `kernel` | Build Linux kernel |
| `buildroot` | Build Buildroot rootfs |
| `all` | Build U-Boot, Kernel, rootfs, and recovery |
| `firmware` | Package images required for boot |
| `updateimg` | Package a unified upgrade image |
| `save` | Save debug images, patches, and commands |

## Full Build

```bash
./build.sh lunch
```

Select:

```text
BoardConfig-rk3568-evb1-ddr4-v10.mk
```

Then run:

```bash
./build.sh all
./build.sh firmware
./build.sh updateimg
```

You can also run directly:

```bash
./build.sh
```

## Build Components Separately

Build U-Boot:

```bash
./build.sh U-Boot
```

Build Linux kernel:

```bash
./build.sh kernel
```

Build Buildroot filesystem:

```bash
./build.sh buildroot
```

The generated images are placed in the `rockdev` directory. Common files include `boot.img`, `MiniLoaderAll.bin`, `misc.img`, `oem.img`, `parameter.txt`, `recovery.img`, `rootfs.ext4`, `rootfs.img`, `update.img`, and `userdata.img`.

## Flash Linux Firmware on Windows

1. Extract `DriverAssitant_v5.1.1.rar` and run `DriverInstall.exe`;
2. Click “Uninstall Driver” first, then click “Install Driver”;
3. Extract `tools\windows\RKDevTool_Release_v2.86.zip` and open `RKDevTool.exe`;
4. Select the “Upgrade Firmware” tab and choose the generated `update.img`;
5. Hold the RECOVERY key, then connect the Micro USB (OTG) cable and 12V DC power;
6. Click upgrade after the tool detects a `LOADER` device.

## Enter Flash Mode

- Hold the recovery key, press reset, then release recovery to enter loader mode;
- Run `reboot bootloader` from the serial console to enter loader mode;
- If the Rockchip tool detects an ADB device, click “Switch” to enter loader mode;
- Erasing Flash can enter maskrom mode;
- During serial boot, hold shortcuts: `ctrl+c` for U-Boot, `ctrl+d` for loader, `ctrl+b` for maskrom, and `ctrl+f` for fastboot.
