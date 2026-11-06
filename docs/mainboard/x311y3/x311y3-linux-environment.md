---
sidebar_position: 10
title: Linux 开发环境
description: x311y3 Linux 开发环境
---

# Linux 开发环境

Linux 示例基于 A311Y3 202608 Release Notes：Armbian / Debian 12 Bookworm、GNOME、Linux 6.12，Board 为 `a9-by401-6.12-bookworm-gnome`。BY401 是参考配置，实际 X311Y3 项目使用对应 SDK 的 Board、manifest 和工具链。

## 构建主机

Armbian 构建依赖 Docker。成功记录使用 Ubuntu 20.04.6 LTS、Docker 26.1.3、Ninja 1.10.0，约 7.6GiB RAM + 2GiB Swap，500GB SSD（检查时约 316GiB 可用），耗时约 32340 秒。编译指导列出至少 8GB RAM、约 80GB 可用空间。

虚拟机建议 Ubuntu 22.04 64 位、8 vCPU 以上、16GB RAM 以上、200GB 虚拟磁盘以上，使用 NAT 或桥接网络。SDK 放在 ext4 文件系统。Ubuntu 22.04 是 Docker 宿主机示例，原生编译时另行核对框架要求。构建指导列出的主机架构包括 x86_64、aarch64、riscv64。

## 基础依赖与检查

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

Git、Repo 和 Docker 按项目要求准备，确认服务及用户权限。按交付 Release Notes 获取 SDK、配置可选功能并同步代码；下文 `SDK_ROOT` 为实际 SDK 根目录。

## 工具链路径

| 用途 | 版本 | 路径 |
| --- | --- | --- |
| AArch64 Linux | Arm GNU 11.3.Rel1 | /opt/arm-gnu-toolchain-11.3.rel1-x86_64-aarch64-none-linux-gnu |
| AArch64 Bare-metal | Arm GNU 13.3.Rel1 | /opt/arm-gnu-toolchain-13.3.rel1-x86_64-aarch64-none-elf |
| U-Boot AArch64 ELF | GCC Linaro 7.3.1 | /opt/gcc-linaro-7.3.1-2018.05-i686_aarch64-elf |
| BL30 RTOS | RISC-V GCC 8.2.0 | /opt/riscv-none-gcc/8.2.0-2.2-20190521-0004 |

## 主机检查与自动补丁

```bash
cd "$SDK_ROOT"
./amlbian/host_env_check.sh
.repo/manifests/scripts/aml-yocto-patch-workspace.sh \
  -w ./ -p ./aml-patches -a
```

环境检查应出现 `Result: PASS - Host environment looks ready.`。环境或补丁失败时，先处理报错再编译。工具链版本、路径和补丁需使用同一 SDK 基线。
