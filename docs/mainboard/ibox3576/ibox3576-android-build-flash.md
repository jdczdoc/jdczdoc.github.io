---
sidebar_position: 5
title: Android 编译与烧录
description: IBOX3576 Android 源码安装、编译和烧录
---

# Android 编译与烧录

## 安装 Android 源码包

Android 源码包从网盘资料中获取，手册中对应源码包为：

```text
ibox3576_android14.tar.gz
```

解压示例：

```bash
tar -xvf x3576_android14.tar.gz
```

源码包名称可能随发布日期变化，具体以网盘实际文件名和 README 为准。

## 编译 Android 源码

编译映像时建议使用普通用户权限，不要使用 root。

编译生成的镜像统一放在：

```text
rockdev/Image-IBOX3576
rockdev/Image-IBOX3576_r
rockdev/Image-rk3576_u
```

常见输出包括：

```text
MiniLoaderAll.bin
uboot.img
resource.img
boot.img
misc.img
recovery.img
boot-debug.img
dtbo.img
super.img
vbmeta.img
update.img
```

编译 U-Boot：

```bash
./build.sh -U
```

编译 Android 内核：

```bash
./build.sh -K
```

编译 Android 文件系统：

```bash
./build.sh -A
```

查看帮助：

```bash
./build.sh -h
```

## Windows 烧录 update.img

### 驱动安装

使用 `DriverAssitant_v5.1.1`，运行 `DriverInstall.exe` 安装 Rockchip USB 驱动。

### 单机烧录

手册建议使用 `AndroidTool_Release_v2.79`。

操作流程：

1. 打开 `AndroidTool.exe`。
2. 选择“升级固件”。
3. 点击“固件”，选择生成的 `update.img`。
4. 按住 `BOOT` 键。
5. 插入 Type-C 线和 12V DC 电源线。
6. 工具提示发现 `MASKROM` 设备后，点击升级。

### 批量烧录

批量烧录可使用 `FactoryTool_v1.66`，选择 `update.img` 后勾选“升级”，点击“启动”。
