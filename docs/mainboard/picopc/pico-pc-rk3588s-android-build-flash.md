---
sidebar_position: 6
title: Android 编译与烧录
description: Pico PC RK3588S Android 12 编译、镜像输出和 RKTool 烧录
---

# Android 编译与烧录

Pico PC RK3588S Android 平台用户手册基于 Android 12。手册建议 Android 整套源码编译直接安装 Linux 操作系统，不建议依赖虚拟机完整编译；如无特殊说明，环境推荐使用 Ubuntu 16.04 64 位。

## 关键路径

| 项目 | 路径 |
| --- | --- |
| 设备树文件 | `kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi` |
| 分区文件 | `rockdev/Image-x3588s/parameter.txt` |
| 镜像输出目录 | `rockdev/Image-x3588s` 或 `rockdev/Image-rkx3588s_r`，以实际 SDK 为准 |

## 编译说明

编译镜像时使用普通用户权限，不要使用 root 权限。Android 手册中列出的镜像包括 `MiniLoaderAll.bin`、`U-Boot.img`、`trust.img`、`resource.img`、`boot.img`、`misc.img`、`recovery.img`、`dtbo.img`、`super.img`、`vbmeta.img`、`update.img` 等。

### 编译 U-Boot

```bash
./build.sh -U
```

编译后会在 U-Boot 目录释放 `rk3588_spl_loader_v1.03.107.bin`、`U-Boot.img`、`resource.img` 等文件。

### 编译 Android 内核

```bash
./build.sh -K
```

编译后会释放 `kernel.img`、`resource.img`、`boot.img`、`zboot.img` 等文件。Android 11/12 平台中，`kernel.img` 和 `resource.img` 通常包含在 `boot.img` 中，更新 kernel 后需要重新打包 `boot.img`。

### 编译 Android 文件系统

```bash
./build.sh -A
```

文件系统编译完成后会在 `rockdev/Image-rkx3588s_r` 目录生成镜像。

### 查看帮助

```bash
./build.sh -h
```

常见参数：

| 参数 | 作用 |
| --- | --- |
| `-u` | 编译 U-Boot |
| `-k` | 编译内核 |
| `-s` | 编译 Android 文件系统 |
| `-U` | 打包生成 `update.img` |
| `-j=` | 多线程编译，例如 `-j=20` |
| `-a` | 全部执行，等同于 U-Boot、kernel、system、update 打包流程 |

## Windows 烧录

### RKTool 驱动

解压 `RKTools.rar`，进入：

```text
SDK\RKTools\windows\Release_DriverAssitant
```

运行 `DriverInstall.exe`，点击“驱动安装”。如果旧驱动影响识别，先卸载旧驱动再安装。Android 手册中特别说明，Pico PC x3588s 需要使用 `AndroidTool_Release_v2.79`，驱动使用 `DriverAssitant_v5.1.1`，否则可能烧写失败或识别不到设备。

### 烧录 update.img

编译完成后生成统一固件 `update.img`。打开 AndroidTool，选择“升级固件”，选择 `update.img`，让开发板进入 Loader / MaskRom / Recovery 等下载状态后点击升级。

## TF 卡升级

Android 手册中 TF 卡升级章节标注为“等待后续验证，暂未实现”，其内容为其他平台参考。量产或现场升级前，需要以当前 SDK 实测为准。
