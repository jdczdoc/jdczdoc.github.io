---
sidebar_position: 5
title: Android 编译与烧录
description: I3588 Android 源码安装、编译和烧录
---

# Android 编译与烧录

## 安装 Android 源码包

Android 源码包位于网盘资料路径：

```text
DVD_3588/source/i3588_android12
```

复制到 Ubuntu 用户目录后解压：

```bash
cat i3588_android12.tar.gz* | tar xzv
```

源码包名称可能随发布日期变化，具体以网盘实际名称和 README 为准。

## 编译 Android 源码

编译映像时建议使用普通用户权限，不要使用 root。

编译生成的镜像默认释放到：

```text
rockdev/Image-rk3588_s/
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

一键编译示例：

```bash
source build/envsetup.sh
lunch rk3588_sgo-userdebug
./build.sh -UKAup
```

参数说明：

```text
-U  编译 uboot
-C  使用 Clang 编译 kernel
-K  编译 kernel
-A  编译 android
-p  打包 IMAGE
-o  编译 OTA 包
-u  打包 update.img
-v  指定 user / userdebug
-d  指定 kernel dts name
-V  指定版本
-J  指定编译线程数
```

查看帮助：

```bash
./build.sh -h
```

## Windows 烧录 update.img

### 驱动安装

使用 `DriverAssitant_v5.1.1`，运行 `DriverInstall.exe`，点击“驱动安装”。

### 单机烧录

I3588 需要使用较新版本的 RKDevTool。手册中对应工具为：

```text
RKDevTool_Release_v2.84
```

操作流程：

1. 打开 `RKDevTool.exe`。
2. 选择“升级固件”。
3. 点击“固件”，选择生成的 `update.img`。
4. 连接主板 USB OTG 口。
5. 按住 `BOOT` 键，再插入 USB 线和 12V DC 电源。
6. 工具提示发现 `MASKROM` 设备后，点击升级。
7. 如果提示发现 ADB 设备，可先点击“切换”进入 LOADER。

### 多设备批量烧录

批量烧录工具：

```text
FactoryTool_1.72.2
```

适合多台设备连续烧录。
