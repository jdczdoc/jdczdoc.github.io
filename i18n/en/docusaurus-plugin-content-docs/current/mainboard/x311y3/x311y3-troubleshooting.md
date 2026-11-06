---
sidebar_position: 14
title: Troubleshooting
description: x311y3 Troubleshooting
---

# Troubleshooting

## Android and flashing

- V3 does not detect the board: check `adnl`, `connect_done`, Type-C data cable, Device Manager and `android_winusb`.
- Enter cannot stop U-Boot: check port, 921600 baud, 8N1, TX/RX/GND and timing.
- DLL loading failure: check the file and VC2015 runtime; follow the driver section for warning icons.
- Missing `crc32`: install `libarchive-zip-perl` and rebuild.
- Successful flash but no boot: collect complete UART logs and verify image/board versions.
- Slow builds: check CPU, RAM, SSD, free space and Linux filesystem placement.

## Linux builds and peripherals

- Failed `docker info`: check installation, service and user permissions.
- `Please install ninja!`: install `ninja-build` and verify its version.
- Patch failure: check SDK root, patch script, `aml-patches` and optional features; resolve before building.
- Missing `aarch64-none-elf-gcc`: run `host_env_check.sh` and check toolchain version/path under `/opt`.
- Completion message without an image: inspect the first real error, `tee` exit handling and output size.
- Only one display: exclude HDMI Only builds and check Display settings, cables, device tree and drivers.
- Camera pipeline failure: check node, format, resolution, session and permissions.

```bash
sudo apt update && sudo apt install -y ninja-build
df -h
free -h
docker info
ninja --version
./amlbian/host_env_check.sh
ls -lh build/output/images/
```

For flashing, check UART → U-Boot → USB → tool. For builds, start with the first meaningful error, then host dependencies, Docker, toolchains, optional features, patches and disk space.
