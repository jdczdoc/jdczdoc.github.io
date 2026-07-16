---
sidebar_position: 10
title: Linux 编译与烧录
description: Pico PC RK3588S Linux 源码编译、镜像输出和 RKTool 烧录
---

# Linux 编译与烧录

Linux 手册中的源码包示例为 `X3588_Linux_edge_20220630`，实际名称可能随发布日期变化。编译镜像时使用普通用户权限。镜像统一输出到类似：

```text
out/rk3588/X3588S/images
```

输出文件包括 `boot.img`、`MiniLoaderAll.bin`、`misc.img`、`oem.img`、`parameter.txt`、`recovery.img`、`rootfs.ext4`、`rootfs.img`、`update.img`、`userdata.img` 等。

## 解压源码

```bash
tar -xvf X3588_Linux_edge_20220630.tar.gz
cd X3588_Linux_edge_20220630
```

## 查看编译帮助

```bash
cat readme.txt
```

## 编译 U-Boot

```bash
./edge build -u
```

编译后释放 `U-Boot.img`。

## 编译 Linux 内核

```bash
./edge build -k
```

编译后 `kernel.img`、`resource.img` 会打包成 `boot.img` 并释放到输出目录。

## 编译 rootfs 文件系统

```bash
./edge build -r
```

编译后 rootfs 相关文件会释放到 `out` 目录。

## 打包固件

```bash
./build.sh updateimg
```

执行后生成统一升级固件 `update.img`，释放到 `rockdev` 目录。

## 主要镜像说明

| 文件 | 说明 |
| --- | --- |
| `boot.img` | 包含 kernel.img、resource.img |
| `MiniLoaderAll.bin` | 下载工具引导文件 |
| `misc.img` | 杂项设备资源 |
| `oem.img` | 用户适配包数据 |
| `parameter.txt` | 分区文件，可修改 U-Boot、kernel、文件系统加载地址 |
| `recovery.img` | Recovery / 急救模式镜像 |
| `rootfs.ext4` | ext4 分区文件 |
| `rootfs.img` | 文件系统镜像 |
| `U-Boot.img` | U-Boot 固件 |
| `update.img` | 包含 U-Boot、内核、文件系统等的统一升级镜像 |
| `userdata.img` | 用户数据镜像 |

## Windows 烧录

驱动路径：

```text
SDK\RKTools\windows\Release_DriverAssitant
```

打开 `DriverInstall.exe` 安装驱动。Linux 手册中说明 Pico PC 需要使用 `AndroidTool_Release_v2.79` 以上工具，Linux 源码包中包含 `AndroidTool_Release_v2.81`，驱动需要 `DriverAssitant_v5.1.1`。

烧录工具路径示例：

```text
RKTools\windows\AndroidTool\AndroidTool_Release_v2.81\AndroidTool.exe
```

选择“升级固件”，选择 `update.img`。连接开发板时按下 Recovery 键，再插入 OTG 线和电源线，工具提示发现 MaskRom 设备后点击升级。
