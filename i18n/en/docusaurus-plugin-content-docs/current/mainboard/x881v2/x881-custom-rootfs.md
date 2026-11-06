---
sidebar_position: 11
title: Custom rootfs
description: x881 Custom rootfs
---

# Custom rootfs

Use Buildroot `output/images/rootfs.ext4` or a Debian rootfs matching the target architecture. The manual riscv64 ext4 example below requires debootstrap and a host capable of the target bootstrap procedure.

```bash
dd if=/dev/zero of=debian_rootfs.img bs=1M count=512
mkfs.ext4 debian_rootfs.img
sudo mount debian_rootfs.img /mnt
sudo debootstrap --arch=riscv64 sid /mnt http://mirrors.tuna.tsinghua.edu.cn/debian
sudo umount /mnt
```

Copy the image to the active board directory as `.fex`, and match partition size and kernel ext4 support. `bga_perf1` below is the manual example; replace it with the active board.

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

`size=1048576` is the example sector allocation. Check packaging logs, root= arguments and `/sbin/init`; match rootfs architecture and ABI to the kernel.
