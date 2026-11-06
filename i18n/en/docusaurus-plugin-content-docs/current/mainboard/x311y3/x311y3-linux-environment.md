---
sidebar_position: 10
title: Linux development environment
description: x311y3 Linux development environment
---

# Linux development environment

The Linux example follows A311Y3 202608 Release Notes: Armbian / Debian 12 Bookworm, GNOME and Linux 6.12, with Board `a9-by401-6.12-bookworm-gnome`. BY401 is a reference; use the actual X311Y3 project Board, manifest and toolchains.

## Build host

The Armbian build requires Docker. The recorded setup used Ubuntu 20.04.6 LTS, Docker 26.1.3, Ninja 1.10.0, about 7.6 GiB RAM + 2 GiB swap, and a 500 GB SSD with about 316 GiB free. Build time was about 32,340 seconds. The guide lists at least 8 GB RAM and about 80 GB free disk.

Suggested VM: Ubuntu 22.04 64-bit, at least 8 vCPUs, 16 GB RAM and 200 GB disk, with NAT or bridged networking. Store the SDK on ext4. Ubuntu 22.04 is an example Docker host; native builds need a separate framework check. The guide lists x86_64, aarch64 and riscv64 host architectures.

## Dependencies and checks

```bash
sudo apt update
sudo apt install -y \
  wget curl ca-certificates tar xz-utils file make cmake ninja-build \
  gcc-aarch64-linux-gnu qemu-user-static qemu-system-arm binfmt-support
git --version
repo version
docker --version
docker info
ninja --version
aarch64-linux-gnu-gcc --version
qemu-aarch64-static --version
update-binfmts --display qemu-aarch64
```

Prepare Git, Repo and Docker, including service and user permissions. Obtain the SDK, configure optional features and synchronize code according to its Release Notes. `SDK_ROOT` below denotes the actual SDK root.

## Toolchain paths

| Purpose | Version | Path |
| --- | --- | --- |
| AArch64 Linux | Arm GNU 11.3.Rel1 | /opt/arm-gnu-toolchain-11.3.rel1-x86_64-aarch64-none-linux-gnu |
| AArch64 Bare-metal | Arm GNU 13.3.Rel1 | /opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf |
| U-Boot AArch64 ELF | GCC Linaro 7.3.1 | /opt/gcc-linaro-7.3.1-2018.05-i686_aarch64-elf |
| BL30 RTOS | RISC-V GCC 8.2.0 | /opt/riscv-none-gcc/8.2.0-2.2-20190521-0004 |

## Host check and automatic patches

```bash
cd "$SDK_ROOT"
./amlbian/host_env_check.sh
.repo/manifests/scripts/aml-yocto-patch-workspace.sh \
  -w ./ -p ./aml-patches -a
```

Expect `Result: PASS - Host environment looks ready.` Resolve environment or patch failures before building. Use toolchain versions, paths and patches from the same SDK baseline.
