---
sidebar_position: 8
title: Android 开发环境
description: x311y3 Android 开发环境
---

# Android 开发环境

Android 16 示例使用 Ubuntu 22.04 64 位。使用普通用户编译，管理操作用 sudo。SDK 放在 Ubuntu 的 Linux 文件系统中，不在 Windows 共享目录进行完整构建。

| 项目 | 说明 |
| --- | --- |
| CPU | 8 核以上；完整构建建议 16 核以上 |
| RAM | 32GB 起；完整 AOSP 建议 64GB |
| 磁盘 | 400GB 以上可用空间；建议 SSD/NVMe |
| 虚拟化 | Intel VT-x / AMD-V |
| 网络 | NAT / 桥接 |

## 虚拟机与基础依赖

新建 Linux / Ubuntu 64-bit 虚拟机，安装 Ubuntu 22.04 LTS，分配 CPU、内存和磁盘并确认网络。安装 VMware Tools / open-vm-tools，以便使用分辨率、鼠标和共享功能。

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y git git-lfs curl wget vim unzip zip rsync bc file make gcc g++ \
    python3 python3-pip openssh-server net-tools ca-certificates
```

## SSH 与环境检查

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

SDK 示例目录 `~/x311y3_android16` 包含 `bootloader/`、`device/`、`kernel/`、`build/` 与 `build_amlogic.sh` 等，实际结构以交付 SDK 为准。

## AArch64 工具链

```bash
ls -la /opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf/bin/aarch64-none-elf-gcc
cd /opt
sudo wget https://developer.arm.com/-/media/Files/downloads/gnu/13.3.rel1/binrel/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf.tar.xz
sudo tar -xf arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf.tar.xz
/opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf/bin/aarch64-none-elf-gcc --version
```

工具链已存在时无需重复下载。U-Boot 若提示 `crc32: command not found` 及 `invalid suffix "x" on integer constant`，安装以下依赖后重试。

```bash
sudo apt-get install libarchive-zip-perl
```
