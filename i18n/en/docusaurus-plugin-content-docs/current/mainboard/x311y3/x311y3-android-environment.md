---
sidebar_position: 8
title: Android development environment
description: x311y3 Android development environment
---

# Android development environment

The Android 16 example uses 64-bit Ubuntu 22.04. Build as a regular user and use sudo for administration. Keep the SDK on a Linux filesystem rather than building directly in a Windows shared folder.

| Item | Description |
| --- | --- |
| CPU | 8+ cores; 16+ recommended for full builds |
| RAM | 32 GB starting point; 64 GB recommended for full AOSP |
| Disk | 400+ GB free; SSD/NVMe recommended |
| Virtualization | Intel VT-x / AMD-V |
| Network | NAT / bridged |

## VM setup and base dependencies

Create a Linux / Ubuntu 64-bit VM, install Ubuntu 22.04 LTS, allocate CPU/memory/disk and confirm networking. Install VMware Tools / open-vm-tools for display, mouse and sharing integration.

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y git git-lfs curl wget vim unzip zip rsync bc file make gcc g++ \
    python3 python3-pip openssh-server net-tools ca-certificates
```

## SSH and host checks

```bash
sudo systemctl enable --now ssh
ip -4 addr
uname -m && nproc
free -h
df -h
lsb_release -a
gcc --version
python3 --version
git --version
```

A typical SDK directory, `~/x311y3_android16`, contains `bootloader/`, `device/`, `kernel/`, `build/` and `build_amlogic.sh`; use the delivered SDK structure.

## AArch64 toolchain

```bash
ls -la /opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf/bin/aarch64-none-elf-gcc
cd /opt
sudo wget https://developer.arm.com/-/media/Files/downloads/gnu/13.3.rel1/binrel/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf.tar.xz
sudo tar -xf arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf.tar.xz
/opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf/bin/aarch64-none-elf-gcc --version
```

Skip downloading if the toolchain is installed. For U-Boot errors `crc32: command not found` and `invalid suffix "x" on integer constant`, install the following dependency and retry.

```bash
sudo apt-get install libarchive-zip-perl
```
