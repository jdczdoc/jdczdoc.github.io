---
sidebar_position: 6
title: Linux 编译与烧录
description: I3588 Linux 源码安装、编译和烧录
---

# Linux 编译与烧录

## 安装 Linux 源码包

Linux 源码包从网盘获取。下载后需要根据 `MD5sum` 核对文件完整性，并参考 `readme.txt` 解压源码。

## 编译输出目录

编译生成的镜像统一放在：

```text
out/rk3588/X3588S/images
```

常见输出包括：

```text
boot.img
MiniLoaderAll.bin
misc.img
oem.img
parameter.txt
recovery.img
rootfs.ext4
rootfs.img
update.img
userdata.img
```

## 查看编译帮助

在源码目录下执行：

```bash
cat readme.txt
```

## 编译命令

编译全部：

```bash
./edge build -a
```

编译 U-Boot：

```bash
./edge build -u
```

编译 Linux 内核：

```bash
./edge build -k
```

编译 rootfs 文件系统：

```bash
./edge build -r
```

## 打包固件

编译完成后会在输出目录生成 `update.img` 等文件。`update.img` 是统一升级固件，包含 U-Boot、内核、文件系统等内容。

## Windows 烧录 Linux 固件

### 驱动安装

使用 Linux 源码包中的 Rockchip 工具目录：

```text
SDK/RKTools/windows/Release_DriverAssitant
```

运行 `DriverInstall.exe` 安装驱动。

### 烧录 update.img

I3588 需要使用 `AndroidTool_Release_v2.79` 以上工具，手册中 Linux 包内提供 `AndroidTool_Release_v2.81`。

基本流程：

1. 打开 `AndroidTool.exe`。
2. 进入“升级固件”选项卡。
3. 选择生成的 `update.img`。
4. 按住 `RECOVERY` 键。
5. 插入 microUSB OTG 线和 12V DC 电源。
6. 工具提示发现 `MASKROM` 设备后点击升级。

## 进入 Loader / Maskrom

### Loader 模式

```bash
reboot bootloader
```

也可以按住 Recovery 键不放，再按 Reset，松开 Recovery；或在工具发现 ADB 设备时点击“切换”。

### Maskrom 模式

按住 Recovery 键，再按 BOOT 键，松开 Recovery；或先进入 Loader，再点击“擦除 Flash”进入 Maskrom。
