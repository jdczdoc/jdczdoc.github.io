---
sidebar_position: 4
title: Android 编译与烧录
description: Pico PC RK3588S Android 源码安装、编译和烧录
---

# Android 编译与烧录

## 安装 Android 源码包

Android 源码包位于网盘资料路径：

```text
DVD_Pcio PC/source/
```

手册中对应源码包示例：

```text
x3588_android12.tar.gz
```

解压示例：

```bash
tar -xvf x3588_android12.tar.gz
```

源码包名称可能随发布日期变化，具体以网盘实际名称和 README 为准。

## 编译 Android 源码

编译映像时建议使用普通用户权限，不要使用 root。

编译生成的镜像统一放在：

```text
rockdev/Image-x3588s
rockdev/Image-x3588s_r
```

常见输出包括：

```text
MiniLoaderAll.bin
uboot.img
trust.img
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

手册建议使用 `AndroidTool_Release_v2.79`，驱动使用 `DriverAssitant_v5.1.1`。

操作流程：

1. 打开 `AndroidTool.exe`。
2. 选择“升级固件”。
3. 点击“固件”，选择生成的 `update.img`。
4. 按住 `RECOVERY` 键。
5. 插入 microUSB 线和 12V DC 电源线。
6. 工具提示发现 `MASKROM` 设备后点击升级。

## TF 卡升级

手册中 TF 卡升级功能标注为等待后续验证，暂未实现。相关内容可作为其他 Rockchip 平台参考。
