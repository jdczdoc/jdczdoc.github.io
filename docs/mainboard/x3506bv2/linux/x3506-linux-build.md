---
sidebar_position: 1
title: "Linux 编译"
description: "x3506bv2 Linux 编译"
---

# Linux 编译

## 解压源码

从配套资料的 `DVD_x3506/source/linux` 获取 x3506 Linux 源码包，将它复制到 Ubuntu 主机的本地工作目录。下面以 `x3506_linux_20241204.tar.gz` 为例。使用普通用户编译，并按所用 SDK 版本准备依赖。

```bash
tar -xzvf x3506_linux_20241204.tar.gz
cd x3506_linux_20241204
./build.sh -h
```

## 选择配置并编译

确认 SDK 中包含 x3506 对应的板级配置。以下为手册中 SDK 的配置与编译命令。

```bash
./build.sh lunch:rockchip_rk3506_b_9tripod_defconfig
./build.sh
```

## 编译输出

在源码目录下的 `rockdev/` 查看编译产物。镜像编译完成后，可执行下方命令生成 `rockdev/update.img`，再按[固件烧录](./x3506-linux-flash.md)操作。

```bash
./build.sh updateimg
```

| 文件 | 用途 |
| --- | --- |
| `update.img` | 整包升级固件 |
| `MiniLoaderAll.bin` | 下载工具使用的引导文件 |
| `boot.img` | 内核与启动资源 |
| `rootfs.img / rootfs.ext4` | 根文件系统镜像 |
| `parameter.txt` | 分区配置 |
| `uboot.img` | U-Boot 镜像 |
