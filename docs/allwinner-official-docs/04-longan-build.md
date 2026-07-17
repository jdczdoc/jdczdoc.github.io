---
title: Longan配置与编译
sidebar_position: 4
description: T527 Longan的config、局部编译、menuconfig和常用命令。
---

# Longan配置与编译

Longan 负责 T527 的 bootloader、kernel、BSP、设备树和固件打包素材。配置、编译和打包命令应在 `longan` 根目录执行。

## 进入Longan

```bash
cd <ANDROID_TOP>/longan
pwd
ls build.sh bsp device kernel
```

## 选择方案

```bash
./build.sh config
```

Linux BSP 方案的典型选择为：

```text
platform  : linux
linux_dev : bsp
kern_ver  : linux-5.15
ic        : t527
board     : <BOARD>
flash     : default
```

Android 方案的典型选择为：

```text
platform  : android
ic        : t527
board     : <BOARD>
flash     : default
```

板型名称必须以当前源码弹出的列表为准。T527 分支中可能出现 `demo`、`demo_car`、`demo_linux_aiot` 或公司自定义方案。

配置完成后查看：

```bash
cat .buildconfig
```

重点确认：

```text
LICHEE_PLATFORM
LICHEE_IC
LICHEE_BOARD
LICHEE_KERN_VER
LICHEE_KERN_DEFCONF
LICHEE_PACK_HOOK
LICHEE_OUT_DIR
```

## 常用命令

| 命令 | 作用 |
|---|---|
| `./build.sh config` | 选择平台、芯片、板型和 Flash |
| `./build.sh` | 编译当前 Longan 方案 |
| `./build.sh bootloader` | 单独编译 boot0、U-Boot 等启动组件 |
| `./build.sh kernel` | 单独编译 kernel、BSP、DTS 和模块 |
| `./build.sh menuconfig` | 打开内核配置界面 |
| `./build.sh saveconfig` | 保存当前内核配置 |
| `./build.sh loadconfig <defconfig>` | 加载指定 defconfig |
| `./build.sh buildroot` | 编译 Buildroot 方案 |
| `./build.sh buildroot_menuconfig` | 打开 Buildroot 配置界面 |
| `./build.sh buildroot_saveconfig` | 保存 Buildroot 配置 |
| `./build.sh pack` | Linux 方案打包普通固件或按当前 hook 打包 |
| `./build.sh pack_debug` | 生成调试串口配置的固件 |
| `./build.sh clean` | 清理当前方案编译输出 |
| `./build.sh distclean` | 清理更多构建输出和配置 |

Android 完整固件通常由 Android 顶层的 `pack` 或 `build -p` 完成；`./build.sh pack` 是否适用于当前 Android 分支，应以 `.buildconfig` 中的 pack hook 和项目脚本为准。

## 快捷目录命令

部分 SDK 可以通过下面的环境脚本提供快捷命令：

```bash
source build/envsetup.sh

cbsp       # 进入 BSP 驱动目录
ckernel    # 进入当前 kernel 目录
cconfigs   # 进入当前芯片/板级配置目录
```

若命令不存在，直接使用 `cd` 和 `find`，不要依赖快捷命令。

## 编译输出

```bash
find out -maxdepth 5 -type f \
    \( -name 'vmlinux' -o -name '*.dtb' -o -name '*.ko' -o -name '*.img' \) \
    -print | head -100
```

常见输出包括：

```text
longan/out/t527/<BOARD>/kernel/build/
longan/out/t527/<BOARD>/kernel/staging/
longan/out/t527/<BOARD>/pack_out/
longan/out/*.img
```

不同分支可能通过软链接提供 `out/kernel` 和 `out/pack_out`。
