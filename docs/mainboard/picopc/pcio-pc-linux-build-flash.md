---
sidebar_position: 5
title: Linux 编译与烧录
description: Pico PC RK3588S Linux 源码安装、编译和烧录
---

# Linux 编译与烧录

## 安装 Linux 源码包

Linux / Debian 源码包从网盘资料中获取。手册中示例路径为：

```text
DVD_PcioPC/source/Debian
```

源码包示例：

```text
x3588_linux_edge_20220510.tar.gz
X3588_linux_edge_20220630.tar.gz
```

解压示例：

```bash
tar -xvf X3588_linux_edge_20220630.tar.gz
```

源码包名称可能随发布日期变化，具体以网盘实际名称和 README 为准。

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

## 编译命令

查看编译帮助：

```bash
cat readme.txt
```

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

打包统一升级固件：

```bash
./build.sh updateimg
```

## Windows 烧录 Linux 固件

手册建议使用 `AndroidTool_Release_v2.79` 以上版本，Linux 源码包中提供 `AndroidTool_Release_v2.81`。

基本流程：

1. 打开 `AndroidTool.exe`。
2. 选择“升级固件”。
3. 点击“固件”，选择生成的 `update.img`。
4. 按住 `RECOVERY` 键。
5. 插入 microUSB OTG 线和 12V DC 电源线。
6. 工具提示发现 `MASKROM` 设备后点击升级。

## Loader / Maskrom 模式

进入 Loader：

```bash
reboot bootloader
```

或按住 Recovery 键再按 Reset。

进入 Maskrom：

- 按住 Recovery 键，再按 BOOT 键，松开 Recovery。
- 或进入 Loader 后点击“擦除 Flash”进入 Maskrom。
