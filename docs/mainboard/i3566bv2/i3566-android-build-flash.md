---
sidebar_position: 8
title: Android 编译与烧录
description: I3566 Android 11 开发环境、源码编译、镜像输出和烧录流程
---

# Android 编译与烧录

:::note
本页软件流程沿用前面整理的 X3566 软件文档模板。I3566 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 I3566 SDK 和发布资料为准。
:::

本页整理 I3566 Android 平台开发环境、源码安装、编译和烧录流程。

## 开发环境

Android 系统整套源码编译对 PC 硬件要求较高，手册建议直接安装 Linux 操作系统，不建议依赖虚拟机完成完整开发。文档示例以 Ubuntu 14.04 / Ubuntu 16.04 64 位系统为主。

常用工具包括：

```bash
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
sudo apt-get install ckermit
```

串口工具常用命令：

```bash
sudo picocom -b 115200 /dev/ttyUSB0
```

退出 picocom：先按 `Ctrl+a`，再按 `Ctrl+q`。

## 依赖包和 JDK

手册推荐 Ubuntu 16.04 64 位环境，常见依赖包括 git-core、gnupg、flex、bison、gperf、build-essential、zip、curl、gcc-multilib、g++-multilib、libncurses5-dev、ccache、libxml2-utils、xsltproc、unzip、lzop、liblz4-tool、genext2fs、device-tree-compiler、u-boot-tools、libssl-dev、repo、p7zip、Android-tools-fastboot、Android-tools-adb 等。

Android 编译需要根据 SDK 脚本选择 JDK。I3566 Android 11 常见配置可使用 Java 8：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## 交叉编译工具链

交叉编译工具链已集成到源码包中，无需额外手动安装。常见路径：

```bash
prebuilts/gcc/Linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-Linux-gnu/bin/aarch64-Linux-gnu-
prebuilts/gcc/Linux-x86/aarch64/aarch64-Linux-Android-4.9/bin/aarch64-Linux-Android-
```

## 关键路径

I3566 Android 平台中，PDF 版手册给出的路径如下：

```bash
# 设备树
kernel/arch/arm64/boot/dts/rockchip/rk3566-rk817-tablet.dts

# 分区文件
rockdev/Image-rk3566_rgo/parameter.txt
```

:::note
上传的 Word 版 Android 手册中存在一处明显从其他平台继承的路径写法：`rk3568-evb1-ddr4-v10.dts`。本模板按 I3566 Android PDF 中的 `rk3566-rk817-tablet.dts` 作为 I3566 页面默认路径。
:::

## 安装源码包

源码包从网盘获取，示例路径为：

```text
DVD_I3566&I3566/source/i3566_Android_new
```

解压示例：

```bash
tar -jxvf i3566_Android 11.tar.bz2
cd i3566_Android 11
git checkout .
```

如果是分卷压缩包，需要在 `i3566_Android 11` 目录下继续解压 `prebuilts.tar.bz2`。

## 编译源码

编译映像时请使用普通用户权限。生成镜像统一放在：

```bash
rockdev/Image-rk3566_rgo
```

一键编译命令：

```bash
./build.sh -UKAup
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| -U | 编译 U-Boot |
| -C | 使用 Clang 编译内核 |
| -K | 编译 Kernel |
| -A | 编译 Android |
| -p | 打包到 IMAGE |
| -o | 编译 OTA 包 |
| -u | 编译 update.img |
| -v | 选择 user 或 userdebug |
| -d | 指定 kernel dts name |
| -V | 指定版本 |
| -J | 指定编译线程数 |

编译示例：

```bash
source build/envsetup.sh
lunch rk3566_rgo-userdebug
./build.sh -UKAu
```

查看帮助：

```bash
./build.sh -h
```

## 输出镜像

常见输出文件包括：

```text
MiniLoaderAll.bin
U-Boot.img
trust.img
resource.img
boot.img
misc.img
recovery.img
boot-debug.img
dtbo.img
pcba_small_misc.img
pcba_whole_misc.img
super.img
vbmeta.img
update.img
```

## Windows 烧录

1. 安装 Rockchip USB 驱动，常见工具为 `DriverAssitant_v5.x`。
2. 打开 Rockchip AndroidTool。
3. 选择单个升级固件 `update.img`，或使用多设备升级方式。
4. 让主板进入 Loader / Maskrom / Recovery 相关烧录模式。
5. 点击升级并等待完成。

## TF 卡升级

Android 手册还包含 TF 卡升级固件流程。通常步骤为准备 TF 卡升级工具、选择固件、制作升级卡、插卡启动并等待升级完成。现场维护时可根据量产需求选择 USB 烧录或 TF 卡升级。
