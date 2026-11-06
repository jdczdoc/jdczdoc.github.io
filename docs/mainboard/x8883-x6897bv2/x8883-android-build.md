---
sidebar_position: 5
title: Android 编译
description: x8883bv3 Android 编译
---

# Android 编译

## 编译条件与源码

建议使用原生 Ubuntu 20.04.6 LTS、64 位处理器/64 线程、64 GB 内存及 1 TB SSD 空闲空间。使用与 SDK 匹配的编译环境，并从配套资源获取 ALPS 和 MSSI 两份源码包。

```bash
sudo apt-get install -y git-core gnupg flex bison build-essential zip curl \
  zlib1g-dev libc6-dev-i386 libncurses5 lib32ncurses5-dev x11proto-core-dev \
  libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig \
  python3 python3-pip python-is-python3 python2 python2-dev cpio patchelf \
  openjdk-17-jdk gcc-multilib g++-multilib device-tree-compiler screen \
  libssl-dev bc lz4 imagemagick rsync ccache schedtool libncurses5-dev \
  lzop pngcrush liblz4-tool repo wget libffi-dev libreadline-dev \
  squashfs-tools libwxgtk3.0-gtk3-dev
```

SDK 包含 Python 2/3 工具，请按脚本要求配置解释器；需要 Python 2 的工具应在专用编译环境中运行。

```bash
mkdir -p ~/workspace
cd ~/workspace
tar -jxvf mt8883_android_alps.tar.bz2
tar -jxvf mt8883_android_mssi.tar.bz2
cd mt8883_android_alps
./split_build.sh full
```

ALPS 和 MSSI 应保持同级目录关系。以上命令在 Ubuntu 编译主机运行。

## 打包固件

```bash
./split_build.sh pack
```

按菜单选择 `1. aiot8883p2_64_bsp_wifi`，输入固件名称，例如 `x8883-evb-1200x1920-7inch`。输出位于源码同级的 `IMAGE/<固件名>/`。若脚本无法自动生成名称，可按提示手动输入。

```bash
ls ../IMAGE/x8883-evb-1200x1920-7inch
```

固件包包括 `preloader_aiot8883p2_64_bsp_wifi.bin`、`boot.img`、`init_boot.img`、`vendor_boot.img`、`dtbo.img`、`super.img`、`userdata.img`、`vbmeta*.img` 及协处理器镜像。烧录时使用完整固件目录及配套 XML。

---

**参考资料**

网盘 `x8883-docs` → `X8883 Android平台用户手册-V1.0.pdf` → 第三章“Android 开发环境搭建”第 3.1 至 3.3 节。
