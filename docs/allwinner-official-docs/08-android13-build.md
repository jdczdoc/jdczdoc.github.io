---
title: Android 13编译
sidebar_position: 8
description: T527 Android 13的环境变量、lunch、整编、模块编译和快速更新。
---

# Android 13编译

T527 Android 13 使用 Linux 5.15。完整固件编译通常包含 Longan 配置与编译、Android lunch 与编译、最后打包三个阶段。

## 编译环境

不同 SDK 和 Ubuntu 版本所需软件包不同，建议以项目提供的环境文档为准。Linux 5.15 内核编译至少应确认安装：

```bash
sudo apt-get update
sudo apt-get install -y \
    git gnupg flex bison gperf build-essential zip curl \
    zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 \
    lib32ncurses-dev libx11-dev lib32z1-dev ccache \
    libgl1-mesa-dev libxml2-utils xsltproc unzip \
    libelf-dev gawk fontconfig openssl libssl-dev
```

缺少 `libelf-dev` 时常见报错：

```text
fatal error: gelf.h: No such file or directory
fatal error: libelf.h: No such file or directory
```

检查主机 make 版本：

```bash
make --version
```

旧版 GNU make 3.82 在部分 Allwinner Linux 5.15 构建中可能产生问题，优先使用项目验证过的较新版本。

## 配置Longan

```bash
cd <ANDROID_TOP>/longan
./build.sh config
```

选择：

```text
platform : android
ic       : t527
board    : <BOARD>
flash    : default
```

然后编译 Longan：

```bash
./build.sh
```

## 导入Android编译环境

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
```

## 选择lunch目标

列出当前 T527 方案：

```bash
lunch 2>&1 | grep -i t527
```

或者查询产品定义：

```bash
grep -Rni 'COMMON_LUNCH_CHOICES.*t527\|t527_.*userdebug' \
    device vendor 2>/dev/null | head -50
```

官方 SDK 中常见示例包括：

```text
t527_demo_arm64-userdebug
t527_demo_car_arm64-userdebug
```

公司项目可能使用完全不同的产品名，应选择与 Longan `<BOARD>` 和产品 mk 配套的目标。

```bash
lunch <PRODUCT>-userdebug
```

构建类型：

| 类型 | 用途 |
|---|---|
| `user` | 量产版本，调试权限受限 |
| `userdebug` | 接近 user，但保留 root 和常用调试能力 |
| `eng` | 开发配置，调试能力最多，不用于量产 |

## 完整编译

```bash
make -j$(nproc)
```

服务器不稳定或内存不足时，可降低并发：

```bash
make -j16
```

## 编译单个模块

```bash
m Settings -j16
m <模块名> -j16
```

查找输出：

```bash
find "$OUT" -iname '*Settings*.apk' -o -name '<模块文件名>'
```

## 快速更新APK

```bash
adb root
adb install -r <APK绝对路径>
```

系统应用无法直接安装时，使用 remount：

```bash
adb root
adb remount
adb push <APK或SO绝对路径> <设备目标路径>
adb reboot
```

动态分区、安全启动和 release key 可能限制 remount，遇到失败应先确认固件类型和设备是否解锁。

## 一键build函数

导入 `build/envsetup.sh` 后，部分全志 SDK 提供 `build` 函数：

```bash
build --help
```

常见参数包括：

```text
-k  build kernel
-l  build longan
-a  build Android
-r  Android release build
-p  pack firmware
-d  pack debug firmware
-v  pack secure firmware
-c  clean
-j  set job count
```

必须以当前 SDK 的 `build --help` 输出为准。
