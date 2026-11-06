---
sidebar_position: 1
title: Linux 编译
description: x40i Linux 编译
---

# Linux 编译

## 编译主机与源码结构

使用与 SDK 匹配的 Ubuntu 16.04 64 位编译环境，工具链为 `arm-linux-gnueabi-`。获取 Linux 源码包后解压，以下命令以源码根目录 `x40i_linux` 为基准。

| 目录 | 用途 |
| --- | --- |
| buildroot | 工具链、应用软件包与根文件系统 |
| linux-3.10 | 内核、驱动和扩展模块 |
| brandy | Bootloader 与 U-Boot |
| tools/pack | 固件配置与打包工具 |
| tools/tools_win | Windows 烧录工具 |
| doc | 开发资料 |

```bash
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
  libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 \
  libreadline6-dev:i386 libgl1-mesa-glx:i386 libgl1-mesa-dev g++-multilib \
  mingw32 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386 gawk
```

依赖名称按该 SDK 对应的 Ubuntu 版本安装。若脚本要求 Bash，通过 `sudo dpkg-reconfigure dash` 选择 No 配置专用编译环境。

## 配置与完整编译

```bash
cd x40i_linux
./build.sh config
./build.sh
./build.sh pack
```

配置依次选择 `sun8iw11p1`、`linux`、`linux-3.10` 和匹配主板的 `a40i-p3` 配置。菜单大小写按实际 SDK 显示选择。固件输出到 `tools/pack/`，例如 `sun8iw11p1_linux_a40i-p3_uart0.img`。需要 Qt 界面时，继续完成 Qt 库与应用编译。

## 单模块与 U-Boot

```bash
./build.sh -h
./build.sh -m kernel
./build.sh -m buildroot
./build.sh -m uboot
```

单独调试 U-Boot 时，在源码根目录执行：

```bash
cd brandy/u-boot-2014.07
make distclean
make sun8iw11p1_config
make
cd ../..
./build.sh
./build.sh pack
```

U-Boot 目标文件为 `u-boot-sun8iw11p1.bin`，打包时从 `tools/pack/chips/sun8iw11p1/bin/` 使用对应文件。
