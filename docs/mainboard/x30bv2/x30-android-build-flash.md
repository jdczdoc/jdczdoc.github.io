---
sidebar_position: 8
title: Android 编译与烧录
description: X30 Android 8.1 开发环境、源码编译、镜像输出和烧录流程
---

# Android 编译与烧录

本页整理 X30 Android 8.1 平台开发环境、源码安装、编译和烧录流程。

## 开发环境

Android 整套源码编译对 PC 机硬件要求较高，手册建议直接安装 Linux 操作系统，不建议通过虚拟机完成完整开发。示例环境为 Ubuntu 14.04 64 位。

常用工具：

```bash
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install picocom
```

串口工具：

```bash
sudo minicom -s
sudo picocom -b 115200 /dev/ttyUSB0
```

## Android 源码依赖

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl-dev libwxgtk2.8-dev build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools libxml2-utils texinfo mercurial subversion whois
sudo apt-get install lsb-core libc6-dev-i386 g++-multilib lib32z1-dev lib32ncurses5-dev
```

PX30 Android 8 编译需要 JDK 8，可使用网盘资料中的 `java-8-openjdk-amd64.tar.bz2`：

```bash
sudo tar xjf java-8-openjdk-amd64.tar.bz2 -C /usr/lib/jvm
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## 交叉编译工具链

工具链已经集成到源码包中，无需手动安装。常见路径：

```bash
prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/
prebuilts/gcc/linux-x86/aarch64/aarch64-linux-Android-4.9/
```

## 获取 Android 源码

源码包获取方式有两种：网盘获取或 GitLab 获取。

### 从网盘获取

```bash
tar xjf px30_oreo.tar.bz2
cd px30_oreo
git checkout .
```

源码包路径示例：

```text
DVD_X30/source/px30_oreo.tar.bz2
```

如果需要更新源码：

```bash
git remote add gitlab http://gitlab.com/9tripod/px30_oreo.git
git pull gitlab
```

### 从 GitLab 获取

```bash
git clone http://gitlab.com/9tripod/px30_oreo.git
```

## 编译 Android 源码

编译映像时应使用普通用户权限，生成镜像统一输出到 `out/release` 目录。

### 编译 U-Boot

```bash
./mk -u
```

输出：

```text
MiniLoaderAll.bin
uboot.img
trust.img
```

### 编译 Android 内核

```bash
./mk -k
```

输出：

```text
kernel.img
resource.img
```

### 编译 Android 文件系统

```bash
./mk -s
```

常见输出：

```text
MiniLoaderAll.bin
uboot.img
trust.img
resource.img
kernel.img
boot.img
misc.img
recovery.img
system.img
vendor.img
oem.img
update-Android.img
```

### 查看编译帮助

```bash
./mk -h
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| -u | 编译 U-Boot |
| -k | 编译内核 |
| -s | 编译 Android 文件系统 |
| -U | 所有镜像编译完成后打包生成 update-Android.img |
| -j= | 多线程编译，例如 -j=20 |
| -a | 等同于 ./mk -u -k -s -U |

## Windows 烧录

1. 解压 `RKTools.rar`。
2. 进入 `SDK/RKTools/windows/Release_DriverAssitant`，运行 `DriverInstall.exe` 安装驱动。
3. 打开 `RKTools/windows/AndroidTool/AndroidTool_Release_v2.58/AndroidTool.exe`。
4. 在“升级固件”中选择 `update-Android.img`。
5. 按住 RECOVERY 键，插入 Micro USB 线和 12V DC 电源线。
6. 工具提示发现 LOADER 设备后，点击升级。

## Linux 烧录

工具路径示例：

```text
RKTools/linux/Linux_Upgrade_Tool_v1.2
```

进入工具目录，放入 `update.img` 或 `update-Android.img` 后执行：

```bash
sudo ./upgrade_tool
Rockusb> uf update.img
```

也可使用命令直接烧写分区：

```bash
sudo upgrade_tool di -k kernel.img
sudo upgrade_tool di -s system.img
sudo upgrade_tool di resource resource.img
sudo upgrade_tool di -r recovery.img
sudo upgrade_tool uf update.img
```

## TF 卡升级

Android 手册中的 TF 卡升级功能说明为参考性质。一般流程为使用 `SD_Firmware_Tool.exe` 制作升级卡，选择固件、PCBA 测试或 SD 启动模式，然后插卡启动完成升级。
