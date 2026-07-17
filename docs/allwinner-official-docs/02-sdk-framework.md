---
title: SDK目录与职责
sidebar_position: 2
description: 说明T527 Android 13 SDK与Longan、BSP、device和kernel目录的关系。
---

# SDK目录与职责

T527 Android 13 SDK 通常由 Android 源码和 `longan` 两部分共同组成。Android 部分负责 Framework、HAL、系统应用和系统镜像；Longan 部分负责 bootloader、Linux 内核、全志 BSP 驱动和固件打包素材。

## 顶层目录

常见结构如下：

```text
<ANDROID_TOP>/
├── art/
├── bionic/
├── bootable/
├── build/
├── device/
├── frameworks/
├── hardware/
├── packages/
├── system/
├── vendor/
├── out/
└── longan/
    ├── brandy/
    ├── bsp/
    ├── build/
    ├── buildroot/
    ├── device/
    ├── kernel/
    ├── out/
    ├── platform/
    ├── prebuilt/
    ├── tools/
    └── build.sh
```

实际 SDK 可能没有其中部分目录，也可能增加厂商私有目录。

## Android侧主要目录

| 目录 | 主要职责 |
|---|---|
| `build/` | Android 构建系统、`envsetup.sh`、编译公共配置 |
| `device/` | Android 产品、板型、分区、属性、overlay 和产品 mk 配置 |
| `frameworks/` | Android Framework、System Service、多媒体和图形框架 |
| `hardware/` | HAL 接口和厂商硬件抽象层实现 |
| `packages/` | 系统应用和公共应用 |
| `system/` | Android 基础系统组件 |
| `vendor/` | 全志和产品厂商的私有实现、预编译文件和产品配置 |
| `out/` | Android 编译输出，禁止作为源码目录修改 |

## Longan侧主要目录

| 目录 | 主要职责 |
|---|---|
| `longan/brandy/` | boot0、U-Boot 和相关启动代码 |
| `longan/bsp/` | 全志驱动、Kconfig、Makefile、SoC 级 dtsi 和公共配置 |
| `longan/device/` | 芯片和板级 DTS、defconfig、分区与打包配置 |
| `longan/kernel/` | Linux 5.15 原生内核代码，配置后通常生成到 BSP 的软链接 |
| `longan/build/` | `build.sh` 调用的配置、编译和打包脚本 |
| `longan/out/` | bootloader、kernel、DTB、KO 和打包输出 |
| `longan/platform/` | 全志私有用户态组件和工具 |
| `longan/buildroot/` | Linux/Buildroot 方案的根文件系统和软件包 |

## 三个最重要的仓库

```text
device：保存板级差异
   +
bsp：保存全志驱动与 SoC 级配置
   +
kernel：提供 Linux 原生内核和标准接口
   ↓
Longan 构建系统生成 kernel、DTB、KO 和固件素材
```

进行驱动开发时，不要先入为主地只在 `kernel/drivers/` 中查找。Linux 5.15 BSP 独立仓库方案下，全志驱动通常位于 `longan/bsp/drivers/` 或 `longan/bsp/modules/`。

## 快速确认当前SDK结构

```bash
cd <ANDROID_TOP>

find longan -maxdepth 2 -type d \
    \( -name bsp -o -name device -o -name kernel -o -name out \) \
    -print

find longan/device/config/chips/t527 -maxdepth 4 -type f \
    \( -name 'board.dts' -o -name '*defconfig' -o -name 'BoardConfig.mk' \) \
    -print
```

确认当前板型后，再进入对应目录修改，避免修改到其他方案的配置。
