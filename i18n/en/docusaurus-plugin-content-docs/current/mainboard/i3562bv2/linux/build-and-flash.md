---
title: Linux Build and Flash
description: The Linux manual lists x3562linux20240628.tar.gz under DVDx3562/source/linux. Use the ar…
---

# Linux Build and Flash

## SDK

The Linux manual lists `x3562_linux_20240628.tar.gz` under `DVD_x3562/source/linux`. Use the archive supplied with the target project because package names may change between releases.

## Build Environment

The manual examples use Ubuntu 16.04 / 18.04 and list Git, GCC, multilib libraries, device-tree compiler, U-Boot tools, OpenSSL, Python pyelftools, ADB and Fastboot dependencies. These are legacy environment notes; follow the active SDK's setup scripts and resolve dependencies from actual build errors.

## Select a Configuration

```bash
./build.sh -h
./build.sh lunch
```

The manual selects menu option `2` in its example. Menu numbering may change; select the I3562 / RK3562 target shown by the current SDK.

## Build Commands

```bash
./build.sh uboot
./build.sh kernel-5.10
./build.sh buildroot
# or
./build.sh debian
./build.sh updateimg
```

The manual also shows `./build.sh buildroot/debian`. Confirm the exact target supported by the active SDK using `./build.sh -h`.

## Main Output Images

| File | Description |
|---|---|
| `MiniLoaderAll.bin` | Download-tool loader |
| `uboot.img` | U-Boot image |
| `boot.img` | Contains `kernel.img` and `resource.img` |
| `rootfs.img` / `rootfs.ext4` | Root filesystem |
| `parameter.txt` | Partition layout and load addresses |
| `misc.img` | Miscellaneous resources |
| `recovery.img` | Recovery image |
| `oem.img` | OEM data |
| `userdata.img` | User data |
| `update.img` | Complete upgrade package |

## Windows Flashing

1. Install the USB driver under `RKTools/windows/Release_DriverAssitant`.
2. Launch the AndroidTool bundled with the SDK.
3. Select firmware upgrade and load `rockdev/update.img`.
4. Use the board-specific RECOVERY / flashing key sequence and connect USB OTG and 12 V power.
5. Wait for Loader or Maskrom detection, then start the upgrade.

Key labels, USB port and entry sequence can differ by board revision. Follow the board markings and matching SDK instructions.

## Serial Console

The hardware manual defines UART0 as 3.3 V TTL. The Linux manual shows a SecureCRT example at 1,500,000 baud and a picocom example at 115200 baud. Verify the active rate from U-Boot / kernel configuration and actual console output.
