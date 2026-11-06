---
sidebar_position: 11
title: 自定义 rootfs
description: x881 自定义 rootfs
---

# 自定义 rootfs

可使用 Buildroot 的 `output/images/rootfs.ext4`，或制作与目标架构匹配的 Debian rootfs。以下是手册的 riscv64 ext4 制作示例，需要主机具备 debootstrap 及跨架构执行环境。

```bash
dd if=/dev/zero of=debian_rootfs.img bs=1M count=512
mkfs.ext4 debian_rootfs.img
sudo mount debian_rootfs.img /mnt
sudo debootstrap --arch=riscv64 sid /mnt http://mirrors.tuna.tsinghua.edu.cn/debian
sudo umount /mnt
```

复制到当前板级目录并改为 `.fex`，同步分区容量和内核 ext4 支持。以下 `bga_perf1` 是手册示例路径，使用时替换为当前方案。

```bash
cp debian_rootfs.img device/config/chips/v861/configs/bga_perf1/debian_rootfs.fex
```

```ini
[partition]
name = rootfs
size = 1048576
downloadfile = "debian_rootfs.fex"
user_type = 0x8000
```

```bash
source build/envsetup.sh
lunch
pack
```

`size=1048576` 为该示例的扇区容量。检查打包日志、root= 启动参数和 `/sbin/init`，不要将架构或 ABI 不匹配的 rootfs 与内核混用。
