---
sidebar_position: 1
title: Android 编译
description: x40i Android 编译
---

# Android 编译

## 源码与编译条件

Android 7 SDK 使用配套 Ubuntu 14.04.5 64 位环境，交叉工具链已集成在 `lichee/tools/build/toolchain/`。使用普通用户编译。源码包可从网盘 `DVD_X40i/source/x40i_android` 获取，包名以实际发布版本为准。

```bash
tar -xvf x40i_android.tar.bz2
cd x40i_android
```

解压后应有 `android/`、`lichee/` 和 `mk.sh`。若源码包以 Git 对象形式提供，先确认工作区没有需要保留的修改，再按配套说明释放跟踪文件。

## 编译命令

```bash
./mk.sh help
./mk.sh all
```

| 操作 | 命令 | 输出 |
| --- | --- | --- |
| 完整编译 | ./mk.sh all | lichee/tools/pack/ |
| 内核编译 | ./mk.sh lichee | lichee/out/sun8iw11p1/androidm/common/boot.img |
| Android 文件系统 | ./mk.sh android | android/out/target/product/a40-p1/ |
| 重新打包 | ./mk.sh pack | lichee/tools/pack/ |

单独编译后需重新打包，再用生成的完整 IMG 烧录。`clean` 和 `distclean` 用于清理构建产物，执行前确认不会丢失需要保留的中间结果。

## 主机依赖

```bash
sudo apt-get install git gnupg flex bison gperf build-essential zip curl \
  libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 \
  libreadline6-dev:i386 libgl1-mesa-glx:i386 libgl1-mesa-dev g++-multilib \
  mingw32 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386 gawk
```

依赖按 SDK 对应系统安装；不要将其他项目的 GCC 降级或系统链接修改直接套用于 Android 7 编译。
