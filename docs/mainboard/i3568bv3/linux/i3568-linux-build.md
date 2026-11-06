---
sidebar_position: 1
title: Linux 编译
description: i3568bv3 Linux 编译
---

# Linux 编译

## 准备源码与依赖

从配套资料的 `DVD_I3568/source/rk3568_linux_v1.3` 获取同一版本的全部分卷。在与 SDK 匹配的 64 位 Ubuntu 环境中以普通用户编译。Buildroot 编译需要 `expect`。

```bash
sudo apt-get install git build-essential gcc-multilib g++-multilib flex bison   libncurses5-dev libssl-dev device-tree-compiler u-boot-tools   lzop genext2fs python3-pyelftools expect
cat ./rk3568_linux_v1.3.0.tar.gz.* > rk3568_linux_v1.3.0.tar.gz
tar -xzf rk3568_linux_v1.3.0.tar.gz
cd rk3568_linux_v1.3.0
```

其余依赖按 SDK 的 README 与 `./build.sh check` 输出补齐。确认分卷完整并按文件名顺序合并。

## 完整编译与打包

查看帮助和板型列表，选择 `BoardConfig-rk3568-evb1-ddr4-v10.mk`，然后构建、汇总镜像并打包。

```bash
./build.sh -h
./build.sh check
./build.sh lunch
./build.sh all
./build.sh firmware
./build.sh updateimg
```

整包位于 `rockdev/update.img`。同目录可查看 Loader、`uboot.img`、`boot.img`、`rootfs.img`、`recovery.img` 与 `parameter.txt`。烧录前核对板型、存储容量与分区配置。

## 单独编译组件

```bash
./build.sh uboot
./build.sh kernel
./build.sh buildroot
```

按修改范围选择命令。内核与资源打入 `boot.img`，Buildroot 生成根文件系统。需要更新整包时再执行 `./build.sh firmware` 与 `./build.sh updateimg`。
