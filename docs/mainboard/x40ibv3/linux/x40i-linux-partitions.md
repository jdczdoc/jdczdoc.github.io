---
sidebar_position: 4
title: Linux 分区与打包
description: x40i Linux 分区与打包
---

# Linux 分区与打包

## 分区配置

在匹配板型的 `tools/pack/chips/sun8iw11p1/configs/<板型>/` 中修改实际使用的 `sys_partition.fex` 或 `sys_partition_linux.fex`。分区修改会影响已有数据，升级前备份。`size` 单位为 512 字节扇区，镜像文件系统容量需同时匹配。

```ini
[partition]
name = usr
size = 2097152
downloadfile = "usr-resource.fex"
user_type = 0x8000
```

该示例分区为 1 GiB。`downloadfile` 指向打包镜像，`keydata` 控制用户关键数据标记，`verify` 控制烧写校验；其余属性沿用对应固件方案。

## 生成数据分区镜像

在 `tools/pack/chips/sun8iw11p1/usr-resource/` 下创建 `usr-resource/` 内容目录与 `usr-resource.ini`。从 boot-resource 模板复制配置，将名称改为 usr-resource，并设置镜像名、内容目录和容量。

```ini
[fsinfo]
fsname=.\usr-resource.fex
size=1048576
rootcnt=1
root0=.\usr-resource
```

此处 `size` 单位为 KiB，1048576 对应 1 GiB。将 usr-resource 文件复制和 `fsbuild` 步骤加入 `tools/pack/pack` 的准备与生成流程，然后执行打包，检查 `tools/pack/out/usr-resource.fex`。预装文件放入内容目录后再打包。

```bash
./build.sh pack
```

## 板端核对

先查询实际分区，再挂载新数据分区。以下 `mmcblk0p8` 仅为示例，需替换为本固件实际设备。

```bash
cat /proc/partitions
fdisk -l
mkdir -p /mydata
mount /dev/mmcblk0p8 /mydata
df -h
```

`fdisk` 和 `/proc/partitions` 显示分区容量，`df` 显示已挂载文件系统的可用容量。若分区为 1 GiB 而文件系统只有约 128 MiB，检查生成该分区镜像的 INI 容量。
