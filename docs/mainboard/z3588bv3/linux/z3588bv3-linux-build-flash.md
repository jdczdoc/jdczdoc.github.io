---
sidebar_position: 1
title: Linux 编译与烧录
description: z3588bv3 Linux SDK 编译、镜像打包与 Windows 烧录
---

# Linux 编译与烧录

## 适用源码包

Linux 用户手册给出的源码包为 `x3588_linux_20240820.tar.gz`，解压后进入 `x3588_linux_20240820`。源码包名称可能随发布版本变化，以实际获取的 SDK 包及其 `readme.txt` 为准。

```bash
tar -xzvf x3588_linux_20240820.tar.gz
cd x3588_linux_20240820
```

## 编译环境

Linux 手册以 Ubuntu 16.04 / 18.04 为例，虚拟机环境章节主要介绍 VMware 配置；真机开发章节强调 Android 全量源码编译应直接使用 Linux 主机。手册列出的常用依赖包括：

```bash
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev \
  libwxgtk3.0-dev build-essential zip curl zlib1g-dev gcc-multilib \
  g++-multilib genromfs libc6-dev-i386 libncurses5-dev x11proto-core-dev \
  libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip \
  lsb-core lib32z1-dev lib32ncurses5-dev texinfo mercurial subversion \
  whois g++ git lzop liblz4-tool genext2fs make device-tree-compiler \
  u-boot-tools libssl-dev autoconf python-pyelftools python3-pyelftools \
  libusb-1.0 git tig repo p7zip p7zip-full rar unrar \
  android-tools-fastboot android-tools-adb
```

个别旧软件包可能在新 Ubuntu 版本中更名或不可用，应以当前发行版包管理器提示和实际编译错误为准。交叉编译工具链已集成在源码包中，手册列出路径：

```text
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/
```

## 选择配置并查看帮助

在源码根目录查看帮助：

```bash
cat readme.txt
./build.sh -h
```

执行配置选择：

```bash
./build.sh lunch
```

手册截图中选择了编号 `3`，但编号与配置项会随 SDK 包变化。应根据实际 `lunch` 菜单选择对应的 Z3588/RK3588 配置，不要盲目照抄编号。

## 编译

以下命令来自 Linux 手册：

```bash
# 编译 U-Boot
./build.sh uboot

# 编译 Linux 5.10 内核
./build.sh kernel-5.10

# 编译 Buildroot 或 Debian 根文件系统，按实际目标选择
./build.sh buildroot
./build.sh debian

# 打包统一升级固件
./build.sh updateimg
```

编译应使用普通用户权限，不要使用 root 权限执行。镜像输出目录为 `rockdev/`。手册列出的产物包括 `MiniLoaderAll.bin`、`misc.img`、`parameter.txt`、`rootfs.img`、`update.img`、`boot.img`、`oem.img`、`recovery.img`、`uboot.img`、`userdata.img` 等；实际生成项取决于配置和编译目标。

## Windows 下烧录 update.img

1. 从 SDK 的 `RKTools\windows\Release_DriverAssitant` 目录运行 `DriverInstall.exe`，安装 Rockchip USB 驱动。若安装过旧版驱动，先卸载再安装。
2. 运行源码包中的 `RKTools\windows\AndroidTool\AndroidTool_Release_v2.81\AndroidTool.exe`。
3. 选择“升级固件”，载入 `rockdev/update.img`。
4. 按住板卡 BOOT/RECOVERY 下载键，连接 Type-C OTG 数据线和 12 V DC 电源。
5. 工具识别到 MASKROM 设备后，确认固件文件无误，再开始升级。

Linux 手册提到 RKTool/AndroidTool 版本与其他 Rockchip 平台不同，并给出 AndroidTool v2.81、DriverAssistant v5.1.1。实际工具应优先使用当前 SDK 自带版本；不要混用其他平台的烧录工具。

## 重要限制

手册未给出当前板卡各分区的精确参数、完整烧录接线图和具体 SDK 配置名。分区修改、单分区烧写及擦除操作前，应先核对 SDK 内的 `parameter.txt`、`readme.txt` 和工具配置。
