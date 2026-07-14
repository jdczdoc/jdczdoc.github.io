---
sidebar_position: 6
title: Android 编译与烧录
description: X3588S mini ITX Android 12 源码、编译、设备树、分区和烧录
---

# Android 编译与烧录

本页整理 X3588S mini ITX Android 平台中与工程开发、编译和烧录直接相关的内容。

## 开发环境

Android 系统完整源码编译对 PC 性能要求较高，建议直接使用 Linux 主机。手册以 Ubuntu 14.04 / 16.04 64 位环境为例；X3588S Android12 编译脚本中使用 Java 8：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

常用依赖包括 git、flex、bison、gperf、build-essential、zip、curl、gcc-multilib、g++-multilib、device-tree-compiler、u-boot-tools、libssl-dev、python-pyelftools、repo、p7zip、android-tools-fastboot、android-tools-adb 等。

## 交叉编译工具链

交叉编译工具链已经集成在源码包中，无需手动安装。常见路径：

```bash
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/bin/aarch64-linux-android-
```

## 关键路径

设备树文件路径：

```bash
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

分区文件路径：

```bash
rockdev/Image-x3588s/parameter.txt
```

## 安装源码包

源码包可从网盘获取，例如：

```bash
tar -xvf x3588_android12.tar.gz
cd x3588s_android12
```

实际源码包名称可能随发布日期变化，以交付资料为准。

## 编译说明

编译映像时必须使用普通用户权限，不建议使用 root 权限。

### 编译 U-Boot

```bash
./build.sh -U
```

编译完成后，相关文件会释放到 `u-boot` 目录，例如 `rk3588_spl_loader_v1.03.107.bin`、`uboot.img`、`resource.img`。

### 编译 Android 内核

```bash
./build.sh -K
```

编译完成后，`kernel.img`、`resource.img`、`boot.img`、`zboot.img` 会释放到 `kernel` 目录。Android 11/12 平台中 kernel 和 resource 通常包含在 boot.img 中，更新内核后需要重新打包 boot.img。

### 编译 Android 文件系统

```bash
./build.sh -A
```

编译完成后，镜像会释放到 `rockdev/Image-x3588s_r` 或项目实际输出目录。

### 查看帮助

```bash
./build.sh -h
```

常见选项说明：

| 选项 | 说明 |
| --- | --- |
| -u | 编译 U-Boot |
| -k | 编译内核 |
| -s | 编译 Android 文件系统 |
| -U | 所有镜像编译完成后打包生成 update.img |
| -j= | 多线程编译，例如 -j=20 |
| -a | 执行 U-Boot、Kernel、Android 文件系统和打包流程 |

## 输出镜像说明

| 文件 | 说明 |
| --- | --- |
| boot.img | 包含 kernel.img 和 resource.img |
| boot-debug.img | user 固件需要 root 权限操作时可烧写 |
| config.cfg | 烧写工具配置文件 |
| MiniLoaderAll.bin | 一级 loader |
| misc.img | recovery-wipe 开机标识信息 |
| parameter.txt | 分区信息 |
| pcba_small_misc.img | 简易版 PCBA 模式启动标识 |
| pcba_whole_misc.img | 完整版 PCBA 模式启动标识 |
| recovery.img | recovery-ramdisk、kernel、dtb |
| super.img | odm、product、vendor、system、system_ext 分区 |
| trust.img | RK3588S 通常不需要烧写该固件 |
| uboot.img | U-Boot 固件 |
| vbmeta.img | AVB 校验信息 |
| update.img | 可直接用于工具烧写的完整固件包 |

## Windows 烧录

X3588S 与 PX30、RK3288、RK3399、RK3399Pro 不同，需要使用 `AndroidTool_Release_v2.79` 或更高版本，否则可能烧写失败。驱动建议使用 `DriverAssitant_v5.1.1`。

流程：

1. 安装 Rockchip USB 驱动。
2. 打开 `RKTools/windows/AndroidTool/AndroidTool_Release_v2.79/AndroidTool.exe`。
3. 选择“升级固件”页签。
4. 点击“固件”，选择生成的 `update.img`。
5. 按住 RECOVERY 键，连接 microUSB/Type-C 线和 12V DC 电源。
6. 工具识别到 MASKROM 或 Loader 设备后执行升级。

## TF 卡升级

Android 手册还包含 TF 卡升级流程。常见步骤为准备升级卡工具、选择固件、制作升级卡、插卡启动并等待升级完成。量产和现场维护时可根据交付资料选择 USB 烧录或 TF 卡升级方式。
