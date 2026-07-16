---
title: Linux 编译与烧录
sidebar_position: 11
---
# Linux 编译与烧录

## 解压源码

```bash
tar -xvf i527bv3_linux.tar.gz
cd i527bv3_linux
git checkout .
```

部分发布包解压后只显示 `.git`，执行 `git checkout .` 后才会恢复工作区文件。

## 加载编译环境

```bash
source build/envsetup.sh
```

查看脚本帮助：

```bash
./build.sh --help
```

## 常用编译命令

```bash
# 完整编译
./build.sh

# 仅编译 Bootloader
./build.sh bootloader

# 仅编译内核
./build.sh kernel

# 编译 Buildroot 根文件系统
./build.sh buildroot_rootfs

# 配置内核
./build.sh menuconfig

# 配置 Buildroot
./build.sh buildroot_menuconfig

# 打包固件
./build.sh pack
```

部分 SDK 版本同时接受：

```bash
./build.sh buildroot
```

应以当前源码中 `./build.sh --help` 的输出为准。固件通常生成在 `out/` 目录。

## PhoenixSuit 烧录

1. 执行 `./build.sh pack` 生成 `.img` 固件。
2. 在 Windows 中打开 PhoenixSuit 并选择固件。
3. 按住 RECOVERY/FEL 键。
4. 连接 USB OTG/Device 线并给开发板上电。
5. 工具识别设备后开始烧录。
6. 等待烧录完成并重新上电。

不要把烧录线接到普通 USB Host 口。
