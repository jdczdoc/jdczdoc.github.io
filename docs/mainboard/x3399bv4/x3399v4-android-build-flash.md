---
sidebar_position: 7
title: Android 编译与烧录
description: X3399V4 Android 7.1 开发工具、源码安装、编译和固件烧录
---

# Android 编译与烧录

:::note
本页软件流程沿用前面整理的 I3399 / X3399 软件文档模板。X3399V4 实际源码包名、镜像名、分区文件和工具版本，以当前 SDK 和发布资料为准。
:::

本页保留 X3399V4 / X3399 Android 7.1 平台与编译、烧写直接相关的内容。通用的 Ubuntu U 盘安装、XP 启动项等系统教程不再搬运。

## 开发环境建议

- Android 7.0 以上源码编译建议使用 Ubuntu 14.04 64 位或与 SDK 说明一致的 Linux 主机。
- 完整源码编译对内存要求较高，建议 PC 内存不少于 8GB。
- 常用工具包括 `adb`、串口终端、RKTool、upgrade_tool、Rkflashkit、SecureCRT / picocom。

## ADB 工具

### 查看设备连接

```bash
adb devices
```

### 进入 adb shell

```bash
adb shell
```

如果提示 `more than one device and emulator`，可关闭多余模拟器或结束旧的 adb 进程后重新执行。

## 安装 Android 源码依赖包

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl-dev libwxgtk2.8-dev \
build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools \
libxml2-utils texinfo mercurial subversion whois
```

旧版 SDK 可能需要 JDK 1.6 / 1.7。若 `sun-java6-jdk` 安装失败，需要按 SDK 说明手动安装对应版本 JDK。

## 安装交叉编译工具链

交叉编译工具链通常放在 SDK 或工具包目录中，安装完成后需要配置环境变量，例如：

```bash
export PATH=/opt/toolchain/bin:$PATH
```

实际路径以源码包中的 `README`、`build.sh` 或 `envsetup.sh` 为准。

## 获取 Android 源码

源码可通过网盘初始包或远程仓库获取。若使用压缩包，解压后进入 SDK 根目录；若使用远程仓库，按项目提供的 Git 地址克隆并同步。

```bash
git clone <sdk_git_url>
cd <sdk_dir>
git pull
```

## 编译 U-Boot、Kernel、Android 文件系统

常见编译流程如下，具体命令以源码包脚本为准：

```bash
source build/envsetup.sh
lunch
make U-Boot
make bootimage
make -j$(nproc)
```

部分 RK SDK 使用封装脚本：

```bash
./build.sh U-Boot
./build.sh kernel
./build.sh Android
./build.sh updateimg
```

## 生成 update-Android.img

完整编译后生成单包升级固件 `update-Android.img`，通常位于 SDK 输出目录或 `rockdev/Image-*` 目录。烧录前需确认分区文件、loader、U-Boot、boot、system 等镜像与硬件版本一致。

## Windows 烧录

Windows 下常用 RKTool / AndroidTool：

1. 安装 Rockchip USB 驱动。
2. 开发板进入 Loader 或 Maskrom 模式。
3. 选择 `update-Android.img` 或单独分区镜像。
4. 点击执行或升级，等待工具提示成功。

## Linux 烧录

Linux 下可使用 `upgrade_tool`：

```bash
sudo ./upgrade_tool uf update-Android.img
```

也可单独烧写分区镜像：

```bash
sudo ./upgrade_tool ul MiniLoaderAll.bin
sudo ./upgrade_tool di -p parameter.txt
sudo ./upgrade_tool di -u U-Boot.img
sudo ./upgrade_tool di -b boot.img
sudo ./upgrade_tool di -s system.img
sudo ./upgrade_tool rd
```

烧录完成后设备会重启，首次启动时间通常较长。
